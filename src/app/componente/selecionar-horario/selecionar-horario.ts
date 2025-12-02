import { Component, EventEmitter, Output } from '@angular/core';
import { PopupCard } from '../popupCard';

@Component({
    selector: 'app-selecionar-horario',
    imports: [],
    templateUrl: './selecionar-horario.html',
    styleUrl: './selecionar-horario.css',
})
export class SelecionarHorario extends PopupCard {

    // olhar "popupCard.ts" para a funcionalidade dos botões

    // override btnProximaTela(event: Event) {
    //     event.stopPropagation()
    //     this.proxima_tela.emit()
    //     // this.onFinalizarClick()
    // }
}
