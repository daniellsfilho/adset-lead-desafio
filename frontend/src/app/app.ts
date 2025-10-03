import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { VeiculosComponent } from './veiculos/veiculos.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, VeiculosComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('adset-lead-desafio');
}
