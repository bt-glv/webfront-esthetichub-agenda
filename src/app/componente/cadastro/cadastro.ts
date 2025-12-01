import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../models';
import { DbService } from '../../service/db-service';

@Component({
    selector: 'cadastro',
    imports: [FormsModule],
    templateUrl: './cadastro.html',
    styleUrl: './cadastro.css',
})
export class PageCadastro {
    nome: string = ''
    telefone: string = ''
    senha: string = ''
    senhaRepetida: string = ''

    novoCliente: Cliente = {
        nome: '',
        telefone: '',
        senha: '',
        agendamentos: {}
    }

    @Output() fechar_tela = new EventEmitter<void>()
    btnFechar()   { this.fechar_tela.emit() }

    constructor(private dbService: DbService) {}
    cadastrar() {
        this.novoCliente.nome = this.nome;
        this.novoCliente.telefone = this.telefone;
        this.novoCliente.senha = this.senha;

        this.dbService.createCliente(this.novoCliente).subscribe({
            next: (resposta) => {
                console.log('Cliente cadastrado com sucesso!', resposta);
                alert('Cadastro realizado!');
                // Opcional: Limpar o formulário
                this.limparFormulario();
            },
            error: (erro) => {
                console.error('Erro ao cadastrar:', erro);
            }
        });
    }

    limparFormulario() {
        this.novoCliente = {
            nome: '',
            telefone: '',
            senha: '',
            agendamentos: {}
        };

        this.nome = '';
        this.telefone = '';
        this.senha = '';
        this.senhaRepetida = '';
    }

    btnCadastrar() {
        if (this.senha !== this.senhaRepetida) {
            console.error('As senhas não coincidem!');
            return;
        }
        console.log('Dados do formulário de cadastro:');
        console.log('login:', this.nome);
        console.log('senha:', this.telefone);
        console.log('senha:', this.senha);
        console.log('login:', this.senhaRepetida);
        this.cadastrar();
    }

}
