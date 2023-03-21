import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  nome:string = "Bia";

  //construtor
  constructor() {}

  //inicializador
  ngOnInit(): void {
  }

  //método de cadastro
  cadastrar():void {
    alert("Cadastrar");
  }

  //método de seleção
  selecionar():void {
    alert("Selecionar");
  }

  //alteração
  alterar():void {
    alert("Alterar");
  }

  //remoção
  remover():void {
    alert("Remover");
  }
}
