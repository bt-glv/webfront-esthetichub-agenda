import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

// bem provavelmente essa classe deveria estar em outro lugar
// deixei ela aqui só pra o não dar erro nas funções abaixo
class servico {

    public constructor(titulo: string,preco:number,duracao:number ) {
        this.titulo  = titulo
        this.preco   = preco
        this.duracao = duracao
    }

    titulo:  string;
    preco:   number;
    duracao: number;
}



export class DbService {

    newCliente(
        nome:     string,
        telefone: string,
        senha:    string,
    ): boolean {
        return false
    }

    newProfissional(
        nome:     string,
        telefone: string,
        senha:    string,
        lista_servicos: Array<servico>,
    ): boolean {
        return false
    }

    newAgendamento(
        profissional_numero: string,
        cliente_numero:      string,
        data_iso:            string
    ): boolean {
        return false
    }

    editAgendamento(
        profissional_numero: string,
        cliente_numero:      string,
        data_iso:            string,
        servico:             servico
    ): boolean {
        return false
    }

    deleteAgendamento(
        profissional_numero: string,
        cliente_numero:      string,
        data_iso:            string,
        servico:             servico
    ): boolean {
        return false
    }

}
