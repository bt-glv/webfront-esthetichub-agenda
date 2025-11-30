import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-selecionar-servico',
  imports: [CommonModule],
  templateUrl: './selecionar-servico.html',
  styleUrl: './selecionar-servico.css',
})
export class SelecionarServico {
  fechado = false;

  onFinalizarClick() {
    alert('Serviços selecionados!');
  }

  onFecharClick() {
    this.fechado = true;
  }

  
   @Output() fechar_tela = new EventEmitter<void>()
    btnFechar()   { this.fechar_tela.emit() }
}
