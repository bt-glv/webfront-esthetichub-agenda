import { Component } from '@angular/core';
import { NavBar } from '../../componente/nav-bar/nav-bar';
import { NgOptimizedImage } from '@angular/common';
import { PageCadastro } from '../../componente/cadastro/cadastro';
import { SelecionarFuncionario } from '../../componente/selecionar-funcionario/selecionar-funcionario';
import { SelecionarHorario } from '../../componente/selecionar-horario/selecionar-horario';

@Component({
  selector: 'landing',
  imports: [NavBar, NgOptimizedImage, PageCadastro, SelecionarFuncionario, SelecionarHorario],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class PageLanding {

}
