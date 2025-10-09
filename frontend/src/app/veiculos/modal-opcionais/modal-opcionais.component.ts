import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";

@Component({
    selector: 'modal-opcionais',
    templateUrl: 'modal-opcionais.component.html',
    styleUrl: 'modal-opcionais.component.scss',
    imports: [MatButtonModule]
})
export class ModalOpcionaisComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ModalOpcionaisComponent>) { }

    close () {
        this.dialogRef.close()
    }
}