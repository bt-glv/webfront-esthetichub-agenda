import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
    @Output() open_cadastro    = new EventEmitter<void>()
    @Output() open_agendamento = new EventEmitter<void>()
    @Output() fechar_tela      = new EventEmitter<void>()

    login: string = ''
    senha: string = ''

    constructor(private router: Router){ }

    btnLogin() {
        console.log('Dados do formulário:');
        console.log('login:', this.login);
        console.log('senha:', this.senha);
        console.log("a funcionalidade de login ainda nao foi implementada")
        this.open_agendamento.emit();
        this.router.navigate(['/agendamentos'])
        // this.open_agendamento.emit()
    }
    btnCadastro() { this.open_cadastro.emit() }
    btnFechar()   { this.fechar_tela.emit() }
}
