import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupCard } from '../popupCard';

@Component({
    selector: 'app-selecionar-servico',
    imports: [CommonModule],
    templateUrl: './selecionar-servico.html',
    styleUrl: './selecionar-servico.css',
})
export class SelecionarServico extends PopupCard {
    fechado = false;

    onFinalizarClick() {
        alert('Serviços selecionados!');
    }
    onFecharClick() {
        this.fechado = true;
    }

    // olhar "popupCard.ts" para a funcionalidade dos botões

    // override btnProximaTela(event: Event) {
    //     event.stopPropagation()
    //     this.proxima_tela.emit()
    //     // this.onFinalizarClick()
    // }

}
