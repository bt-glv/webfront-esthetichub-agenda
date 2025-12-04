import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../models';
import { DbService } from '../../service/db-service';
import { PopupCard } from '../popupCard';

@Component({
    selector: 'cadastro',
    imports: [FormsModule],
    templateUrl: './cadastro.html',
    styleUrl: './cadastro.css',
})
export class PageCadastro extends PopupCard {

    constructor (
        private dbService: DbService
    ) { super(); }

    nome:                 string  = ''
    telefone:             string  = ''
    senha:                string  = ''
    senhaRepetida:        string  = ''
    mostrarSenha:         boolean = false;
    mostrarSenhaRepetida: boolean = false;

    novoCliente: Cliente = {
        nome:         '',
        telefone:     '',
        senha:        '',
        agendamentos: {}
    }

    // override @Output() fechar_tela = new EventEmitter<void>()
    // override btnFechar()   { this.fechar_tela.emit() }


    cadastrar() {
        this.novoCliente.nome     = this.nome;
        this.novoCliente.telefone = this.telefone;
        this.novoCliente.senha    = this.senha;

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

    // @Output() override voltar_tela = new EventEmitter<void>()
    // override btnVoltarTela(event: Event){
    //     event.stopPropagation()
    //     this.proxima_tela.emit()
    // }

    btnCadastrar(event: Event) {
        if (this.senha !== this.senhaRepetida) {
            console.error('As senhas não coincidem!');
            alert('As senhas não coincidem!');
            return;
        }

        console.log(`
            Dados do formulário de cadastro:\n
            login: ${this.nome}
            senha: ${this.senha}
            telefone: ${this.telefone}
            senhaRepetida: ${this.senhaRepetida}
        `)

        this.cadastrar();
        // TODO: fazer a tela de cadastro voltar para a tela de login
        this.btnVoltarTela(event)
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

    toggleSenha() {
        this.mostrarSenha = !this.mostrarSenha;
    }

    toggleSenhaRepetida() {
        this.mostrarSenhaRepetida = !this.mostrarSenhaRepetida;
    }


}
