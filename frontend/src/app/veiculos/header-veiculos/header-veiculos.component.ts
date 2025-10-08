import { Component, EventEmitter, Output } from "@angular/core";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowCircleDown, faCar, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'header-veiculos',
    templateUrl: 'header-veiculos.component.html',
    styleUrl: 'header-veiculos.component.scss',
    imports: [FontAwesomeModule]
})
export class HeaderVeiculosComponent {
    faCircleDown = faArrowCircleDown;
    faCar = faCar;
    faPlus = faPlusCircle;

    @Output() abrirModalEvent = new EventEmitter<any>()
    @Output() salvarPacotesEvent = new EventEmitter<any>()

    abrirModal() {
        this.abrirModalEvent.emit()
    }

    salvarPacotes() {
        this.salvarPacotesEvent.emit()
    }
}