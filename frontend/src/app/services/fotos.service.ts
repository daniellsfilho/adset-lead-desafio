import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FotoEnvioDTO } from "../models/fotoEnvioDTO";

@Injectable({
    providedIn: 'root'
})
export class FotoService {
    private url = 'https://localhost:7029';

    constructor(private httpClient: HttpClient) { }

    public enviarFotos(fotoEnvioDTOs: FotoEnvioDTO[]): Observable<any> {
        return this.httpClient.post<any>(`${this.url}/foto`, fotoEnvioDTOs)
    }
}