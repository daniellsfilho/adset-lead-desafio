import { Component, Inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { VeiculoService } from "../../services/veiculos.service";
import { catchError } from "rxjs";

@Component({
    selector: 'modal-exclusao-veiculo',
    templateUrl: 'modal-exclusao-veiculo.component.html',
    styleUrl: 'modal-exclusao-veiculo.component.scss',
    imports: [MatButtonModule]
})
export class ModalExclusaoVeiculoComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ModalExclusaoVeiculoComponent>, private veiculoService: VeiculoService) 
    { }

    close (reset: any) {
        this.dialogRef.close(reset)
    }

    excluir() {
        this.veiculoService.excluirVeiculo(this.data.id).pipe(
            catchError(err => {
                console.log('erro ao excluir veículo: ', err)
                throw err
            })
        ).subscribe(() => {
            this.close(true)
        })
    }
}