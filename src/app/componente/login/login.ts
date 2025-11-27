import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
    @Output() open_cadastro    = new EventEmitter<void>()
    @Output() open_agendamento = new EventEmitter<void>()
    login: string = ''
    senha: string = ''
    
    btnLogin() {
        console.log('Dados do formulário:');
        console.log('login:', this.login);
        console.log('senha:', this.senha);
        this.open_agendamento.emit()
    }
    btnCadastro() {
        this.open_cadastro.emit()
    }
}
