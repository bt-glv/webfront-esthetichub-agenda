import { Component, EventEmitter, Output } from '@angular/core';
import { PopupCard } from '../popupCard';

@Component({
    selector: 'app-selecionar-confirmacao',
    imports: [],
    templateUrl: './selecionar-confirmacao.html',
    styleUrl: './selecionar-confirmacao.css',
})
export class SelecionarConfirmacao extends PopupCard {

    // olhar "popupCard.ts" para a funcionalidade dos botões

    // override btnProximaTela(event: Event) {
    //     event.stopPropagation()
    //     this.proxima_tela.emit()
    //     // this.onFinalizarClick()
    // }

}
