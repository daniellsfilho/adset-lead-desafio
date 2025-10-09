import { ChangeDetectorRef, Component, NgZone, OnInit } from "@angular/core";
import { HeaderVeiculosComponent } from "./header-veiculos/header-veiculos.component";
import { FiltroVeiculosComponent } from "./filtro-veiculos/filtro-veiculos.component";
import { VeiculoService } from "../services/veiculos.service";
import { VeiculoFiltroDTO } from "../models/veiculoFiltroDTO";
import { Veiculo } from "../models/veiculo";
import { AsyncPipe } from "@angular/common";
import { catchError, Observable } from "rxjs";
import { faTrash, faPenSquare, faCamera, faCog, faEraser, faSort, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule } from "@angular/forms";
import { CadastroVeiculosComponent } from "./cadastro-veiculos/cadastro-veiculos.component";
import { MatDialog } from '@angular/material/dialog';
import { VeiculoEnvioPacoteDTO } from "../models/veiculoEnvioDTO";
import { ModalExclusaoVeiculoComponent } from "./modal-exclusao-veiculo/modal-exclusao-veiculo.component";
import { ModalAlertasComponent } from "./modal-alertas/modal-alertas.component";
import { ModalOpcionaisComponent } from "./modal-opcionais/modal-opcionais.component";
import { ModalUploadFotosComponent } from "./modal-upload-fotos/modal-upload-fotos.component";

@Component({
    selector: 'veiculos',
    templateUrl: 'veiculos.component.html',
    styleUrl: 'veiculos.component.scss',
    imports: [HeaderVeiculosComponent, FiltroVeiculosComponent, AsyncPipe, FontAwesomeModule, FormsModule]
})
export class VeiculosComponent implements OnInit {
    faTrash = faTrash
    faPenSquare = faPenSquare
    faPhotoVideo = faCamera
    faCog = faCog
    faEraser = faEraser;
    faSort = faSort;
    faSearch = faSearch;

    public veiculos?: Observable<Veiculo[]>
    public listaVeiculos: Veiculo[] = []
    private veiculoFiltro = new VeiculoFiltroDTO
    public cores = []
    public quantidadeVeiculos: any

    public quantidadeItens = [
        { "itens": 10, "label": "Exibir 10" },
        { "itens": 25, "label": "Exibir 25" },
        { "itens": 50, "label": "Exibir 50" },
        { "itens": 100, "label": "Exibir 100" },
    ]

    constructor(private veiculoService: VeiculoService, public dialog: MatDialog, private cdr: ChangeDetectorRef, private ngZone: NgZone) {

    }

    ngOnInit(): void {
        this.veiculoService.getCores().subscribe(res => {
            this.cores = res
            this.veiculoService.getQuantidadeVeiculos().subscribe(res => {
                this.quantidadeVeiculos = res
            })
        })
    }

    public pesquisar(veiculoFiltroDTO: VeiculoFiltroDTO) {
        this.veiculoService.getVeiculosByFiltro(veiculoFiltroDTO).subscribe(res => {
            this.ngZone.run(() => {
                this.listaVeiculos = res
                this.cdr.detectChanges()
            })
        })
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(CadastroVeiculosComponent, {});

        dialogRef.afterClosed().subscribe(result => {
            if (this.listaVeiculos && result == true)
                this.pesquisar(this.veiculoFiltro)

            if (result == true) {
                const dialogAviso = this.dialog.open(ModalAlertasComponent, {
                    data: 'Novo veículo cadastrado com sucesso!'
                })
            }
        });
    }

    openDialogExclusao(veiculo: any) {
        const dialogRef = this.dialog.open(ModalExclusaoVeiculoComponent, {
            data: veiculo
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result == true) {

                this.pesquisar(this.veiculoFiltro)

                const dialogAviso = this.dialog.open(ModalAlertasComponent, {
                    data: 'Veículo excluído com sucesso!'
                })
            }
        });
    }

    openDialogOpcionais(veiculo: any) {
        const dialogRef = this.dialog.open(ModalOpcionaisComponent, {
            data: veiculo
        });
    }

    openDialogFotos(veiculo: any) {
        const dialogRef = this.dialog.open(ModalUploadFotosComponent, {
            data: {
                fK_Veiculo: veiculo.id,
                fotos: veiculo.fotos,
                veiculo: veiculo
            }
        })

        dialogRef.afterClosed().subscribe(result => {
            if (result == true) {

                this.pesquisar(this.veiculoFiltro)

                const dialogAviso = this.dialog.open(ModalAlertasComponent, {
                    data: 'Fotos atualizadas com sucesso!'
                })
            }
        });
    }

    changePacote(id: any, tipo: string, valor: any) {
        let veiculo = this.listaVeiculos.find(x => x.id == id)

        if (veiculo) {
            if (tipo == 'icarros')
                veiculo.pacoteICarros = Number(valor)
            if (tipo == 'webmotors')
                veiculo.pacoteWebMotors = Number(valor)
        }
    }

    salvarPacotes() {
        let veiculosPacotesDTO: VeiculoEnvioPacoteDTO[] = []
        this.listaVeiculos.forEach(veiculo => {
            let veiculoPacoteDTO: VeiculoEnvioPacoteDTO = {
                id: veiculo.id,
                pacoteICarros: veiculo.pacoteICarros,
                pacoteWebMotors: veiculo.pacoteWebMotors
            }
            veiculosPacotesDTO.push(veiculoPacoteDTO)
        });

        this.veiculoService.atualizarPacotesVeiculos(veiculosPacotesDTO).pipe(
            catchError(err => {
                console.log('erro ao atualizar pacotes: ', err)
                throw err
            })
        ).subscribe(() => {
            const dialogAviso = this.dialog.open(ModalAlertasComponent, {
                data: 'Pacotes dos veículos atualizados com sucesso!'
            })
        })
    }

    abrirModalEditar(veiculo: any) {
        const dialogRef = this.dialog.open(CadastroVeiculosComponent, {
            data: veiculo
        });

        dialogRef.afterClosed().subscribe(result => {
            if (this.listaVeiculos && result == true)
                this.pesquisar(this.veiculoFiltro)

            if (result == true) {
                const dialogAviso = this.dialog.open(ModalAlertasComponent, {
                    data: 'Veículo atualizado com sucesso!'
                })
            }
        });
    }

    public limparOrdenacao() {

    }
}