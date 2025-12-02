import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-selecionar-horario',
    imports: [],
    templateUrl: './selecionar-horario.html',
    styleUrl: './selecionar-horario.css',
})
export class SelecionarHorario {

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
