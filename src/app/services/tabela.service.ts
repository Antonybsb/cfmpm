import { HttpClient } from '@angular/common/http';
import { Tabela } from './../components/template/model/tabela';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabelaService {

  private readonly API = '/assets/tabela.json'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Tabela[]>(this.API);
  }
}
