import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, forkJoin, lastValueFrom, Observable } from 'rxjs';
import { Profissional, Cliente, AgendamentoDadosProfissional, ServicoDetalhe, AgendamentoDadosCliente } from './../models';

@Injectable({
    providedIn: 'root'
})
export class DbService {

    private readonly API_URL = 'http://localhost:3000';

    constructor (
        private http: HttpClient
    ) { }

    // --- PROFISSIONAL ---

    getProfissionais(): Observable<Profissional[]> {
        return this.http.get<Profissional[]>(`${this.API_URL}/profissional`);
    }

    getProfissionalById(id: string): Observable<Profissional> {
        return this.http.get<Profissional>(`${this.API_URL}/profissional/${id}`);
    }

    createProfissional(data: Omit<Profissional, 'id'>): Observable<Profissional> {
        return this.http.post<Profissional>(`${this.API_URL}/profissional`, data);
    }

    updateProfissional(id: string, data: Profissional): Observable<Profissional> {
        return this.http.put<Profissional>(`${this.API_URL}/profissional/${id}`, data);
    }

    deleteProfissional(id: string): Observable<void> {
        return this.http.delete<void>(`${this.API_URL}/profissional/${id}`);
    }

    // --- CLIENTE ---

    getClientes(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(`${this.API_URL}/cliente`);
    }

    getClienteById(id: string): Observable<Cliente> {
        return this.http.get<Cliente>(`${this.API_URL}/cliente/${id}`);
    }

    createCliente(data: Omit<Cliente, 'id'>): Observable<Cliente> {
        return this.http.post<Cliente>(`${this.API_URL}/cliente`, data);
    }

    updateCliente(id: string, data: Cliente): Observable<Cliente> {
        return this.http.put<Cliente>(`${this.API_URL}/cliente/${id}`, data);
    }

    deleteCliente(id: string): Observable<void> {
        return this.http.delete<void>(`${this.API_URL}/cliente/${id}`);
    }

    async arrayProfissionais(): Promise<Profissional[]> {
        try {
            const observable$ = this.getProfissionais();
            const profissionais = await lastValueFrom(observable$);
            return profissionais;
        } catch (erro) {
            console.error('Erro:', erro);
            return [];
        }
    }

    gerarAgendamentoId(idProfissional: string, idCliente: string, servico: ServicoDetalhe): void {
        const dataAgendamento = Date.now();
        const idUnico = dataAgendamento.toString();

        forkJoin({
            cliente: this.getClienteById(idCliente),
            profissional: this.getProfissionalById(idProfissional)
        }).subscribe({
            next: (dados) => {
                const cliente = dados.cliente;
                const profissional = dados.profissional;
                if (!cliente || !profissional) {
                    console.error('Cliente ou Profissional não encontrados');
                    return;
                }
                const dadosParaProfissional: AgendamentoDadosProfissional = {
                    cliente: {
                        nome: cliente.nome,
                        telefone: cliente.telefone
                    },
                    servico: servico
                };
                if (!profissional.agendamentos) profissional.agendamentos = {};
                profissional.agendamentos[idUnico] = dadosParaProfissional;
                const dadosParaCliente: AgendamentoDadosCliente = {
                    profissional: {
                        nome: profissional.nome,
                        telefone: profissional.telefone
                    },
                    servico: servico
                };
                if (!cliente.agendamentos) cliente.agendamentos = {};
                cliente.agendamentos[idUnico] = dadosParaCliente;
                this.salvarAlteracoes(idProfissional, profissional, idCliente, cliente);
            },
            error: (err) => {
                console.error('Erro ao carregar dados iniciais:', err);
            }
        });
    }
    salvarAlteracoes(idProf: string, prof: Profissional, idCli: string, cli: Cliente) {
        forkJoin([
            this.updateProfissional(idProf, prof),
            this.updateCliente(idCli, cli)
        ]).subscribe({
            next: () => console.log('SUCESSO TOTAL! Ambos os agendamentos salvos.'),
            error: (err) => console.error('ERRO ao salvar as atualizações:', err)
        });
    }

    async checaUsuario(login: string, senha: string): Promise<Cliente | undefined> {
        const array = await firstValueFrom(this.getClientes());

        const usuarioEncontrado = array.find(element =>
            element.nome === login && element.senha === senha
        );

        if (usuarioEncontrado == undefined)  { return undefined }
        if(usuarioEncontrado.nome == '' && usuarioEncontrado.senha == '') {
              return undefined
        }

        return usuarioEncontrado;
    }
}
