import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupCard } from '../popupCard';
import { Sessao } from '../../service/sessao';
import { ServicoDetalhe } from '../../models';

@Component({
    selector: 'app-selecionar-servico',
    imports: [CommonModule],
    templateUrl: './selecionar-servico.html',
    styleUrl: './selecionar-servico.css',
})
export class SelecionarServico extends PopupCard {

    constructor(
        private sessao: Sessao,
    ){super();}

    lista_servico: ServicoDetalhe[]|undefined;
    fechado = false;

    onFinalizarClick() {
        alert('Serviços selecionados!');
    }
    onFecharClick() {
        this.fechado = true;
    }

    ngOnInit() {
        console.log("oninit")
        this.sessao.mockInit() // TODO: remover
        this.lista_servico = this.sessao.var.agendamento.profissional?.lista_servico
        console.log(this.lista_servico)
    }

    // olhar "popupCard.ts" para a funcionalidade dos botões
    // override btnProximaTela(event: Event) {
    //     event.stopPropagation()
    //     this.proxima_tela.emit()
    //     // this.onFinalizarClick()
    // }

}
