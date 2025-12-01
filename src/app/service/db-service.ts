import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { Profissional, Cliente, AgendamentoDadosProfissional, ServicoDetalhe } from './../models';

@Injectable({
    providedIn: 'root'
})
export class DbService {

    private readonly API_URL = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

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

    gerarAgendamentoId(idProfissional: string, servico: ServicoDetalhe, cliente: Cliente): void {
        let agendamento: AgendamentoDadosProfissional = {
            cliente: { 
                nome: cliente.nome, 
                telefone: cliente.telefone 
            },
            servico: servico
        };
        const dataAgendamento = Date.now(); // remover depois de testes, adicionar data real do agendamento como parametro.
        const profissionalObs$ = this.getProfissionalById(idProfissional);
        profissionalObs$.subscribe((profissional) => {
            if (!profissional.agendamentos) {
                profissional.agendamentos = {};
            }
            const idUnico = dataAgendamento.toString();
            profissional.agendamentos[idUnico] = agendamento;
            this.updateProfissional(idProfissional, profissional).subscribe({
                next: () => console.log('SUCESSO! Agendamento salvo.'),
                error: (err) => console.error('ERRO ao salvar:', err)
            });
        });

    }
}
