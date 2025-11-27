import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
    @Output() open_cadastro    = new EventEmitter<void>()
    @Output() open_agendamento = new EventEmitter<void>()

    constructor(private router: Router){ }

    btnLogin() {
        this.router.navigate(['/agendamentos'])
        // this.open_agendamento.emit()
    }
    btnCadastro() {
        this.open_cadastro.emit()
    }
}
