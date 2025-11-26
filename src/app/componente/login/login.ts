import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
    @Output() open_cadastro    = new EventEmitter<void>()
    @Output() open_agendamento = new EventEmitter<void>()

    btnLogin() {
        this.open_agendamento.emit()
    }
    btnCadastro() {
        this.open_cadastro.emit()
    }
}
