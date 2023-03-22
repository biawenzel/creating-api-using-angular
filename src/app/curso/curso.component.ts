import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  //URL base
  url = "http://localhost/api/php/";

  //vetor de cursos
  vetor:Curso[] | undefined;

  //construtor
  constructor(private http:HttpClient) {}

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
