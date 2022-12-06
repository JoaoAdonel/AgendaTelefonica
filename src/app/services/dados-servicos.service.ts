import { Injectable } from '@angular/core';

import { Contatos } from '../models/contato';
import { Guid } from 'guid-typescript';
import { Storage } from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root'
})
export class DadosServicosService {

  constructor(private storage : Storage) {}

  Inserir(dadosRecebidos: Contatos){
    dadosRecebidos.id = Guid.create()
    this.storage.set(dadosRecebidos.id.toString(),JSON.stringify(dadosRecebidos))}

  async filtrarContatos(id: string){
  return JSON.parse(await this.storage.get(id))}

  receberDados(){
    let arrayContatos : Contatos[]=[]
    this.storage.forEach((valor:string) => {const contato : Contatos = JSON.parse(valor); arrayContatos.push(contato)})
    return arrayContatos
  }

  apagarDados(id:string){
    this.storage.remove(id)
  }


  alterar(id:string, dadosRecebidos:Contatos){
    dadosRecebidos.id = Guid.parse(id)
    this.storage.set(dadosRecebidos.id.toString(), JSON.stringify(dadosRecebidos))
  }
  

  
}
