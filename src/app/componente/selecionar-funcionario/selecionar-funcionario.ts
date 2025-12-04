import { Component, EventEmitter, Output } from '@angular/core';
import { PopupCard } from '../popupCard';
import { Sessao } from '../../service/sessao';
import { DbService } from '../../service/db-service';
import { Profissional } from '../../models';

@Component({
    selector:    'app-selecionar-funcionario',
    imports:     [],
    templateUrl: './selecionar-funcionario.html',
    styleUrl:    './selecionar-funcionario.css',
})
export class SelecionarFuncionario extends PopupCard {

    constructor (
        private sessao: Sessao,
        private db: DbService
    ) { super(); }

    init = () => {
        const profisionais_lista = this.db.getProfissionais().subscribe({
            next: (data) => {},
            error: (err) => {},
            complete: () => {}
        })
    }

}
