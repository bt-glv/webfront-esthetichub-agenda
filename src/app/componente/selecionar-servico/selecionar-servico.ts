import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupCard } from '../popupCard';
import { DbService } from '../../service/db-service';
import { Sessao } from '../../service/sessao';



@Component({
    selector: 'app-selecionar-servico',
    imports: [CommonModule],
    templateUrl: './selecionar-servico.html',
    styleUrl: './selecionar-servico.css',
})
export class SelecionarServico extends PopupCard implements OnInit {
    fechado = false;
    constructor (
        private sessao: Sessao,
        private db: DbService
    ) { super(); }

    ngOnInit() {
        console.log(this.sessao.var.agendamento());
    }

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
