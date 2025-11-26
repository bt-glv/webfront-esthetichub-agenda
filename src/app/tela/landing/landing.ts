import { Component } from '@angular/core';
import { NavBar } from '../../componente/nav-bar/nav-bar';
import { NgOptimizedImage } from '@angular/common';
import { PageCadastro } from '../../componente/cadastro/cadastro';
import { SelecionarFuncionario } from '../../componente/selecionar-funcionario/selecionar-funcionario';
import { SelecionarHorario } from '../../componente/selecionar-horario/selecionar-horario';
import { Login } from '../../componente/login/login';
import { SelecionarConfirmacao } from '../../componente/selecionar-confirmacao/selecionar-confirmacao';
import { SelecionarServico } from '../../componente/selecionar-servico/selecionar-servico';

@Component({
  selector: 'landing',
  imports: [NavBar, NgOptimizedImage, PageCadastro, SelecionarFuncionario, SelecionarHorario, Login, SelecionarConfirmacao,SelecionarServico],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class PageLanding {

}
