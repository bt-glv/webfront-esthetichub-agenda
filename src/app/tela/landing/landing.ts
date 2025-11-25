import { Component } from '@angular/core';
import { PageCadastro } from '../../componente/cadastro/cadastro';
import { SelecionarFuncionario } from '../../componente/selecionar-funcionario/selecionar-funcionario';

@Component({
  selector: 'landing',
  imports: [PageCadastro, SelecionarFuncionario],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class PageLanding {

}
