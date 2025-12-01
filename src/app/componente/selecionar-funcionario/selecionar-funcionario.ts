import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-selecionar-funcionario',
  imports: [],
  templateUrl: './selecionar-funcionario.html',
  styleUrl: './selecionar-funcionario.css',
})
export class SelecionarFuncionario {

   @Output() fechar_tela = new EventEmitter<void>()
    btnFechar()   { this.fechar_tela.emit() }

    

    transform(lista: any[], texto: string): any[] {
    if (!texto) return lista;
    texto = texto.toLowerCase();
    return lista.filter(item =>
      item.nome.toLowerCase().includes(texto)
    );
  }




}
