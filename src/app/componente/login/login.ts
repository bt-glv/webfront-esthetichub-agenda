import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { DbService } from '../../service/db-service';
import { Cliente } from '../../models';


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
mostrarSenha: boolean = false;

  constructor(private router: Router, private dbService: DbService){ }

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
  btnTeste() {
      this.dbService.arrayProfissionais().then((profissionais) =>{
          console.log(profissionais);
      })
      this.dbService.gerarAgendamentoId("1", { titulo: "Corte", preco: 50, duracao: 30 }, { nome: "João", telefone: "9999-8888", senha: "", agendamentos: {} } as Cliente);
  }

  toggleSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }
}
