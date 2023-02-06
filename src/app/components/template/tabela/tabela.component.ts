import { TabelaService } from './../../../services/tabela.service';
import { Tabela } from '../model/tabela';
import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';

@Component({
  selector: "app-tabela",
  templateUrl: "./tabela.component.html",
  styleUrls: ["./tabela.component.css"],
})
export class TabelaComponent implements OnInit {

  tabela: Observable <Tabela[]>;

  displayedColumns = ['name', 'diaSemana', 'divisao', 'tipoAfastamento'];

  // tabelaService: TabelaService;

  constructor(private tabelaService: TabelaService ) {
    // this.tabelaService = new TabelaService();
    this.tabela = this.tabelaService.list();
  }

  ngOnInit(): void {

  }
}


