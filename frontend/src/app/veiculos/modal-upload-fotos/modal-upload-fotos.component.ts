import { ChangeDetectorRef, Component, Inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FotoEnvioDTO } from "../../models/fotoEnvioDTO";
import { FotoService } from "../../services/fotos.service";
import { catchError } from "rxjs";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@Component({
    selector: 'modal-upload-fotos',
    templateUrl: 'modal-upload-fotos.component.html',
    styleUrl: 'modal-upload-fotos.component.scss',
    imports: [MatButtonModule, MatInputModule, FontAwesomeModule]
})
export class ModalUploadFotosComponent {
    public selectedFileName = ''
    public files: FotoEnvioDTO[] = []
    public imagePreview = ''
    faTrash = faTrash
    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ModalUploadFotosComponent>, private cdr: ChangeDetectorRef, 
        private fotoService: FotoService) 
    { 
        this.files = data.fotos
    }

    close(reset: any) {
        this.dialogRef.close(reset)
    }

    onFileSelected(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files?.length) {
            this.selectedFileName = input.files[0].name;
            let file = input.files[0]
            const reader = new FileReader();
            reader.onload = () => {
                this.imagePreview = reader.result as string;
                this.files.push(
                    {
                        fK_Veiculo: this.data.fK_Veiculo,
                        base64url: this.imagePreview
                    })
                this.cdr.detectChanges();
            };

            reader.readAsDataURL(file);
        }
    }

    public enviarImagens() {
        this.fotoService.enviarFotos(this.files).pipe(
            catchError(err => {
                console.log('erro ao enviar fotos: ', err)
                throw err;
            })
        ).subscribe(() => {
            this.close(true)
        })
    }

    public excluirImagem(i: any) {
        this.files.splice(i, 1)
        this.cdr.detectChanges()
    }
}