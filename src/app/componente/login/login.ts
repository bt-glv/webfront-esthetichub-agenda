import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { DbService } from '../../service/db-service';
import { Cliente } from '../../models';
import { Sessao } from '../../service/sessao';



@Component({
    selector: 'app-login',
    imports: [FormsModule],
    templateUrl: './login.html',
    styleUrl: './login.css',
})
export class Login {
    constructor(
        private router: Router,
        private dbService: DbService,
        private sessao: Sessao
    ){}

    @Output() open_cadastro    = new EventEmitter<void>()
    @Output() open_agendamento = new EventEmitter<void>()
    @Output() fechar_tela      = new EventEmitter<void>()

    login: string = ''
    senha: string = ''
    mostrarSenha: boolean = false;


    async btnLogin() {
        console.log('Dados do formulário:');
        console.log('login:', this.login);
        console.log('senha:', this.senha);

        const login_res = await this.sessao.login(this.login, this.senha)
        if (login_res) {
            this.open_agendamento.emit();
            this.router.navigate(['/agendamentos'])
            return
            // this.open_agendamento.emit()
        }

        alert("Usuário ou Senha inválidos")

    }

    btnCadastro() { this.open_cadastro.emit() }
    btnFechar()   { this.fechar_tela.emit() }
    btnTeste() {
        this.dbService.arrayProfissionais().then((profissionais) =>{
            console.log(profissionais);
        })
        this.dbService.gerarAgendamentoId("1", "7c97", { titulo: "Corte", preco: 50, duracao: 30 });
    }

    toggleSenha() {
        this.mostrarSenha = !this.mostrarSenha;
    }
}
