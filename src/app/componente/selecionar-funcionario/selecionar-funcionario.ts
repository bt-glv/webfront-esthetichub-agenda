import { Component, EventEmitter, Output } from '@angular/core';
import { PopupCard } from '../popupCard';

@Component({
    selector:    'app-selecionar-funcionario',
    imports:     [],
    templateUrl: './selecionar-funcionario.html',
    styleUrl:    './selecionar-funcionario.css',
})
export class SelecionarFuncionario extends PopupCard {

    constructor() {
        super();
    }
}
