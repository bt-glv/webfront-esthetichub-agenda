import { Component } from '@angular/core';
import { PageCadastro } from '../../componente/cadastro/cadastro';
import { Login } from '../../componente/login/login';
import { SelecionarServico } from '../../componente/selecionar-servico/selecionar-servico';
import { SelecionarConfirmacao } from '../../componente/selecionar-confirmacao/selecionar-confirmacao';

@Component({
  selector: 'landing',
  imports: [PageCadastro, Login, SelecionarServico, SelecionarConfirmacao],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class PageLanding {

}
