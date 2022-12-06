import { Component, OnInit } from '@angular/core';
import { DadosService } from 'scr/app/services/dados.servicos';

@Component({
  selector: 'app-contatus',
  templateUrl: './contatus.page.html',
  styleUrls: ['./contatus.page.scss'],
})
export class ContatusPage implements OnInit {

  public todosContatos : any

  constructor(private objDadosService: DadosService) { }

  ngOnInit() {
  this.todosContatos = this.objDadosService.Inserir()}
}
