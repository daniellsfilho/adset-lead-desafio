import { Component, EventEmitter, Input, Output } from "@angular/core";
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
    @Input() quantidadeVeiculos = {
        total: 0,
        semFotos: 0,
        comFotos: 0
    }

    abrirModal() {
        this.abrirModalEvent.emit()
    }

    salvarPacotes() {
        this.salvarPacotesEvent.emit()
    }
}