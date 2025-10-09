import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faEraser, faGlasses, faSearch, faSortDown, faSortUp, faSort } from "@fortawesome/free-solid-svg-icons";
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { VeiculoFiltroDTO } from "../../models/veiculoFiltroDTO";

@Component({
    selector: 'filtro-veiculos',
    templateUrl: 'filtro-veiculos.component.html',
    styleUrl: 'filtro-veiculos.component.scss',
    imports: [FontAwesomeModule, ReactiveFormsModule]
})
export class FiltroVeiculosComponent {
    
    @Output() pesquisarEvent = new EventEmitter<VeiculoFiltroDTO>()
    @Input() public cores = []

    faEraser = faEraser;
    faGlass = faGlasses;
    faSearch = faSearch;
    faSortDown = faSortDown;
    faSortUp = faSortUp;
    faSort = faSort;

    public anos = [
        2000,
        2001,
        2002,
        2003,
        2004,
        2005,
        2006,
        2007,
        2008,
        2009,
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
        2024
    ]

    public precos = [
        { 'id': 1, 'faixa': '10 mil a 50 mil' },
        { 'id': 2, 'faixa': '50 mil a 90 mil' },
        { 'id': 3, 'faixa': '+ 90 mil' }
    ]

    public fotos = [
        { 'id': 0, 'filtro': 'Com fotos' },
        { 'id': 1, 'filtro': 'Sem fotos' }
    ]


    public filtroForm = new FormGroup({
        placa: new FormControl(''),
        marca: new FormControl(''),
        modelo: new FormControl(''),
        anoMin: new FormControl(null),
        anoMax: new FormControl(null),
        preco: new FormControl(null),
        fotos: new FormControl(null),
        opcionais: new FormControl(''),
        cor: new FormControl(null)
    })

    public pesquisar() {
        let veiculoFiltroDTO: VeiculoFiltroDTO = {
            marca: this.filtroForm.controls['marca'].value,
            placa: this.filtroForm.controls['placa'].value,
            modelo: this.filtroForm.controls['modelo'].value,
            anoMin: this.filtroForm.controls['anoMin'].value ? Number(this.filtroForm.controls['anoMin'].value) : null,
            anoMax: this.filtroForm.controls['anoMax'].value ? Number(this.filtroForm.controls['anoMax'].value) : null,
            preco: this.filtroForm.controls['preco'].value ? Number(this.filtroForm.controls['preco'].value) : null,
            fotos: this.filtroForm.controls['fotos'].value ? Number(this.filtroForm.controls['fotos'].value) : null,
            opcionais: this.filtroForm.controls['opcionais'].value,
            cor: this.filtroForm.controls['cor'].value != "null" ? this.filtroForm.controls['cor'].value : null
        }
        this.pesquisarEvent.emit(veiculoFiltroDTO);
    }

    public limparFiltros() {
        this.filtroForm.reset()
    }

    public limparOrdenacao() {

    }

    public expandirFiltros() {
        let elemento = document.getElementById('filtro-veiculos-container')
        let fecharFiltro = document.getElementById('fechar-filtro')
        let abrirFiltro = document.getElementById('abrir-filtro')
        if (elemento != null && fecharFiltro != null && abrirFiltro != null) {
            if (elemento.style.display == 'none') {
                elemento.style.display = 'block'
                fecharFiltro.style.display = 'block'
                abrirFiltro.style.display = 'none'
            }
            else {
                elemento.style.display = 'none'
                fecharFiltro.style.display = 'none'
                abrirFiltro.style.display = 'block'
            }
        }
    }
}