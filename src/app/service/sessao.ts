import { Injectable } from '@angular/core';
import { Agendamento, Cliente } from '../models';
import { DbService } from './db-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class Sessao {

    constructor(
        private db_service: DbService
    ){}

    private usuario_cliente: Cliente|undefined = undefined

    public var = {
        usuario: () => { return this.usuario_cliente },
        agendamento: new Agendamento(),
    }

    public async login(usuario: string, senha: string): Promise<boolean> {

        const resposta = await this.db_service.checaUsuario(usuario, senha)

        if (resposta === undefined) {
            console.log('Login: Falha')
            return false
        }

        this.usuario_cliente = resposta as Cliente
        console.log('Login: Sucesso')
        console.log(this.usuario_cliente.nome+" "+this.usuario_cliente.senha)
        return true
    }
}
