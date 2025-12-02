import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-selecionar-confirmacao',
    imports: [],
    templateUrl: './selecionar-confirmacao.html',
    styleUrl: './selecionar-confirmacao.css',
})
export class SelecionarConfirmacao {

    @Output() fechar_tela = new EventEmitter<void>()
    btnFechar(event: Event)   {
        event.stopPropagation()
        this.fechar_tela.emit()
    }

    @Output() proxima_tela = new EventEmitter<void>()
    btnProximaTela(event: Event) {
        event.stopPropagation()
        this.proxima_tela.emit()
    }

}
