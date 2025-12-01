import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-selecionar-confirmacao',
  imports: [],
  templateUrl: './selecionar-confirmacao.html',
  styleUrl: './selecionar-confirmacao.css',
})
export class SelecionarConfirmacao {


  @Output() fechar_tela = new EventEmitter<void>()
    btnFechar()   { this.fechar_tela.emit() }

  
}
