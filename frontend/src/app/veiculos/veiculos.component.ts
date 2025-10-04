import { Component } from "@angular/core";
import { HeaderVeiculosComponent } from "./header-veiculos/header-veiculos.component";
import { FiltroVeiculosComponent } from "./filtro-veiculos/filtro-veiculos.component";

@Component({
    selector: 'veiculos',
    templateUrl: 'veiculos.component.html',
    styleUrl: 'veiculos.component.scss',
    imports: [HeaderVeiculosComponent, FiltroVeiculosComponent]
})
export class VeiculosComponent { }