import { Injectable } from '@angular/core';
import { Agendamento, Cliente, Profissional } from '../models';
import { DbService } from './db-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class Sessao {

    constructor(
        private db_service: DbService
    ){}

    public usuario_cliente: Cliente|undefined = undefined

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


    // TODO: remover
    public mockInit = () => {
        this.var.agendamento.profissional = this.profissional_mock as Profissional
    }
    // TODO: remover
    private profissional_mock = {
        "id": "1",
        "nome": "Marco Aurélio",
        "telefone": "31983759837",
        "senha": "senha123456",
        "lista_servico": [
            {
                "titulo": "Corte",
                "preco": 55.4,
                "duracao": 30
            },
            {
                "titulo": "Barba",
                "preco": 22.8,
                "duracao": 45
            },
            {
                "titulo": "Sobrancelha",
                "preco": 148.9,
                "duracao": 60
            }
        ],
        "agendamentos": {
            "2025-10-30T10:30:00-03:00": {
                "cliente": {
                    "nome": "Rosilene Cotta",
                    "telefone": "31985473648"
                },
                "servico": {
                    "titulo": "Corte",
                    "preco": 55.4,
                    "duracao": 30
                }
            },
            "2025-10-30T11:30:00-03:00": {
                "cliente": {
                    "nome": "Homer do Saco",
                    "telefone": "31985473648"
                },
                "servico": {
                    "titulo": "Barba",
                    "preco": 22.8,
                    "duracao": 45
                }
            },
            "1764559998721": {
                "cliente": {
                    "nome": "João",
                    "telefone": "9999-8888"
                },
                "servico": {
                    "titulo": "Corte",
                    "preco": 50,
                    "duracao": 30
                }
            },
            "1764587707207": {
                "cliente": {
                    "nome": "João",
                    "telefone": "9999-8888"
                },
                "servico": {
                    "titulo": "Corte",
                    "preco": 50,
                    "duracao": 30
                }
            },
            "1764590870526": {
                "cliente": {
                    "nome": "aaaaaaaaaaa",
                    "telefone": "aaaaaaaaaaaa"
                },
                "servico": {
                    "titulo": "Corte",
                    "preco": 50,
                    "duracao": 30
                }
            }
        }
    }






}

