import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Veiculo } from "../models/veiculo";
import { VeiculoFiltroDTO } from "../models/veiculoFiltroDTO";
import { VeiculoEnvioDTO, VeiculoEnvioPacoteDTO } from "../models/veiculoEnvioDTO";

@Injectable({
    providedIn: 'root'
})
export class VeiculoService {
    private url = 'https://localhost:7029';

    constructor(private httpClient: HttpClient) { }

    public  getVeiculosByFiltro(veiculoFiltroDTO: VeiculoFiltroDTO): Observable<Veiculo[]> {
        return this.httpClient.post<Veiculo[]>(`${this.url}/getByFiltro`, veiculoFiltroDTO);
    }

    public salvarVeiculo(veiculoEnvioDTO: VeiculoEnvioDTO): Observable<any> {
        return this.httpClient.post<any>(`${this.url}/veiculo`, veiculoEnvioDTO)
    }

    public atualizarPacotesVeiculos(veiculoEnvioPacoteDTO: VeiculoEnvioPacoteDTO[]): Observable<any> {
        return this.httpClient.put<any>(`${this.url}/updatePacotes`, veiculoEnvioPacoteDTO)
    }

    public atualizarVeiculo(veiculoEnvioDTO: VeiculoEnvioDTO, id: any) {
        return this.httpClient.put<any>(`${this.url}/veiculo?id=${id}`, veiculoEnvioDTO)
    }

    public excluirVeiculo(id: any) {
        return this.httpClient.delete<any>(`${this.url}/veiculo?id=${id}`)
    }
}
