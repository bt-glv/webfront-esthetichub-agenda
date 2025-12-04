import { Component, EventEmitter, Output } from '@angular/core';
import { PopupCard } from '../popupCard';

@Component({
    selector:    'app-selecionar-funcionario',
    imports:     [],
    templateUrl: './selecionar-funcionario.html',
    styleUrl:    './selecionar-funcionario.css',
})
export class SelecionarFuncionario extends PopupCard {    

    transform(lista: any[], texto: string): any[] {
    if (!texto) return lista;
    texto = texto.toLowerCase();
    return lista.filter(item =>
      item.nome.toLowerCase().includes(texto)
    );
  }





    constructor() {
        super();
    }
}
