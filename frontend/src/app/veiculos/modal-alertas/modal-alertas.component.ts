import { Component, Inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'modal-alertas',
    templateUrl: 'modal-alertas.component.html',
    styleUrl: 'modal-alertas.component.scss',
    imports: [MatButtonModule]
})
export class ModalAlertasComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ModalAlertasComponent>) { }

    close () {
        this.dialogRef.close()
    }
}