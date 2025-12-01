import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector:    'app-selecionar-funcionario',
    imports:     [],
    templateUrl: './selecionar-funcionario.html',
    styleUrl:    './selecionar-funcionario.css',
})
export class SelecionarFuncionario {

    // envia o evento de fechar o componente
    @Output() fechar_tela = new EventEmitter<void>()
    btnFechar()   { this.fechar_tela.emit() }

    // envia o evento para passar para o próximo componente
    @Output() proxima_tela = new EventEmitter<void>()
    btnProximaTela(){ this.proxima_tela.emit() }

}
