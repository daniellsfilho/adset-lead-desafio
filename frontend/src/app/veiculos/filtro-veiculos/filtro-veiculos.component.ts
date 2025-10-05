import { Component } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faEraser, faGlasses, faSearch, faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'filtro-veiculos',
    templateUrl: 'filtro-veiculos.component.html',
    styleUrl: 'filtro-veiculos.component.scss',
    imports: [FontAwesomeModule]
})
export class FiltroVeiculosComponent {
    faEraser = faEraser;
    faGlass = faGlasses;
    faSearch = faSearch;
    faSortDown = faSortDown;
    faSortUp = faSortUp;
}