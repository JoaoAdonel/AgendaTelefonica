import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Route, Router} from '@angular/router';

import { DadosService } from 'scr/app/services/dados.servicos';
import { AlertController, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contatos } from 'src/app/models/contato';//model Contato
import { Guid } from 'guid-typescript';//lib Guid
import { Button } from 'protractor';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {
  private detalhesContatos: Contatos
  public modoEdicao = false
  public contatoForm: FormGroup


  constructor(
    private objDadosService : DadosService, 
    private objRoute : ActivatedRoute, 
    private alertController: AlertController,
    public formBuilder : FormBuilder,
    public navCtrl: NavController
  ) { }
  
  async presentAlert(){
    const alert = await this.alertController.create({
      header:'voce realmente quer remover o contato da lista?'
      buttons:[
        {
          text:'Não',
          handler:() => {;},},
          {text:'Sim',
          handler:() =>{this.apagarDados(),
        this.navCtrl.back();},},],});
        await alert.present();}



  ngOnInit() {

    this.detalhesContatos = { id: Guid.createEmpty(), nome:'', sobrenome:'', tipo:'', telefone:'', email:''}

    // validação do formulário enviado pela pagina HTML
    this.contatoForm = this.formBuilder.group({
      id: [this.detalhesContatos.id],
      nome : [this.detalhesContatos.nome, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
      sobrenome : [this.detalhesContatos.sobrenome],
      tipo : [this.detalhesContatos.tipo, Validators.required],
      telefone : [this.detalhesContatos.telefone, Validators.required],
      email : [this.detalhesContatos.email, Validators.email]
      })
    
    // captura do id do contato
    const id : string = String(this.objRoute.snapshot.paramMap.get('id'))

    //item 3
    if (id != 'add'){
      this.objDadosService.FiltraContatosId(id).then(array => this.detalhesContatos = array)

    }
    else{
      
      this.modoEdicao = true
    }
  }

  IniciarEdicao(){
    this.modoEdicao = true
  }

  EncerrarEdicao(){
    
    const id : string = String(this.objRoute.snapshot.paramMap.get('id'))
    
    if(id != 'add'){
      if (this.contatoForm.valid){
        //alterar contato
        this.objDadosService.AlterarContatoId(id, this.contatoForm.value)
        this.modoEdicao = false
      }
    }
    
    else{
      if (this.contatoForm.valid){
        //item 1
        this.objDadosService.InserirContato(this.contatoForm.value)
        this.modoEdicao = false        
      }
    }
  }

  ExcluirContato(){
    // captura do id do contato
    const id : string = String(this.objRoute.snapshot.paramMap.get('id'))
    
    this.objDadosService.ExcluirContatoId(id)
  }


  }

}