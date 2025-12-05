import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupCard } from '../popupCard';
import { DbService } from '../../service/db-service';
import { Sessao } from '../../service/sessao';


import { ServicoDetalhe } from '../../models';

@Component({
    selector: 'app-selecionar-servico',
    imports: [CommonModule],
    templateUrl: './selecionar-servico.html',
    styleUrl: './selecionar-servico.css',
})
export class SelecionarServico extends PopupCard implements OnInit {


    lista_servico: ServicoDetalhe[]|undefined;
    fechado = false;
    constructor (
        private sessao: Sessao,
        private db: DbService
    ) { super(); }

    onFinalizarClick() {
        alert('Serviços selecionados!');
    }
    onFecharClick() {
        this.fechado = true;
    }

    ngOnInit() {
        console.log(this.sessao.var.agendamento());
        console.log("oninit")
        console.log(this.lista_servico)

        this.lista_servico = this.sessao.var.agendamento().profissional?.lista_servico
        // this.sessao.mockInit() // TODO: remover
    }

    // olhar "popupCard.ts" para a funcionalidade dos botões
    // override btnProximaTela(event: Event) {
    //     event.stopPropagation()
    //     this.proxima_tela.emit()
    //     // this.onFinalizarClick()
    // }

}
