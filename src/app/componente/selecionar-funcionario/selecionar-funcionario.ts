import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; // Ainda precisa disso para o ngModel funcionar!

import { PopupCard } from '../popupCard';
import { Sessao } from '../../service/sessao';
import { DbService } from '../../service/db-service';
import { Profissional } from '../../models';

@Component({
    selector:    'app-selecionar-funcionario',
    standalone: true,
    imports:     [CommonModule, FormsModule], 
    templateUrl: './selecionar-funcionario.html',
    styleUrls:   ['./selecionar-funcionario.css'],
})
export class SelecionarFuncionario extends PopupCard implements OnInit {
    
    listaProfissionais: Profissional[] = [];
    
    // MUDANÇA: Agora guardamos apenas o ID (string), não o objeto
    idSelecionado: string = '';

    constructor (
        private sessao: Sessao,
        private db: DbService
    ) { super(); }

    ngOnInit() {
        this.db.arrayProfissionais().then(dados => {
            this.listaProfissionais = dados;
        }).catch(error => {
            console.error('Erro:', error);
        });
    }

    override btnProximaTela(event: Event) {
        event.stopPropagation();

        // LÓGICA MANUAL ("Jeito Difícil"):
        if (this.idSelecionado) {
            
            // 1. Procuramos o objeto inteiro na lista usando o ID selecionado
            const profissionalEncontrado = this.listaProfissionais.find(
                p => p.id === this.idSelecionado
            );
            if (profissionalEncontrado) {
                this.sessao.agendamento_atual = {
                    ...this.sessao.agendamento_atual,
                    profissional: profissionalEncontrado
                };
                super.btnProximaTela(event);
            } else {
                console.error("Erro: ID selecionado não encontrado na lista.");
            }

        } else {
            alert("Selecione um profissional para continuar.");
        }
    }
}