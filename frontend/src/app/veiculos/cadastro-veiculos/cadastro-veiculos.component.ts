import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { VeiculoService } from '../../services/veiculos.service';
import { VeiculoEnvioDTO } from '../../models/veiculoEnvioDTO';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { catchError } from 'rxjs';

@Component({
    selector: 'cadastro-veiculos',
    templateUrl: 'cadastro-veiculos.component.html',
    styleUrl: 'cadastro-veiculos.component.scss',
    imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, FormsModule]
})
export class CadastroVeiculosComponent {
    private veiculoEnvioDTO = new VeiculoEnvioDTO
    private id = 0;
    public labelHeader = 'cadastrar'

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<CadastroVeiculosComponent>, private veiculoService: VeiculoService) 
    { 
        if(data) {
            this.labelHeader = 'Atualizar'
            this.setValueForm(data)
        }
    }

    private setValueForm(veiculo: any) {
        this.id = veiculo.id
        this.cadastroForm.controls['placa'].setValue(veiculo.placa)
        this.cadastroForm.controls['marca'].setValue(veiculo.marca)
        this.cadastroForm.controls['modelo'].setValue(veiculo.modelo)
        this.cadastroForm.controls['ano'].setValue(veiculo.ano)
        this.cadastroForm.controls['preco'].setValue(veiculo.preco)
        this.cadastroForm.controls['opcionais'].setValue(veiculo.opcionais)
        this.cadastroForm.controls['cor'].setValue(veiculo.cor)
        this.cadastroForm.controls['km'].setValue(veiculo.km)
    }

    close(reset: any) {
        this.dialogRef.close(reset)
    }

    public cadastroForm = new FormGroup({
        placa: new FormControl(''),
        marca: new FormControl(''),
        modelo: new FormControl(''),
        ano: new FormControl(null),
        preco: new FormControl(null),
        opcionais: new FormControl(''),
        cor: new FormControl(null),
        km: new FormControl(null)
    })

    salvar() {
        this.veiculoEnvioDTO = this.cadastroForm.value
        if(this.id) {
            this.veiculoService.atualizarVeiculo(this.veiculoEnvioDTO, this.id).pipe(
                catchError(err => {
                    console.log("erro ao salvar veículo: ", err)
                    throw err;
                })
            ).subscribe(() => {
                this.close(true)
            })
        } else {
            this.veiculoService.salvarVeiculo(this.veiculoEnvioDTO).pipe(
                catchError(err => {
                    console.log("erro ao salvar veículo: ", err)
                    throw err;
                })
            ).subscribe(() => {
                this.close(true)
            })
        }
    }
}
