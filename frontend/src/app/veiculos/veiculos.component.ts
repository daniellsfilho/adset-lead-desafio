import { Component } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { HeaderVeiculosComponent } from "./header-veiculos/header-veiculos.component";

@Component({
    selector: 'veiculos',
    templateUrl: 'veiculos.component.html',
    styleUrl: 'veiculos.component.scss',
    imports: [HeaderVeiculosComponent]
})
export class VeiculosComponent { }