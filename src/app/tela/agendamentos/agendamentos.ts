import { Component } from '@angular/core';
import { NavBar } from '../../componente/nav-bar/nav-bar';
import { SelecionarHorario } from '../../componente/selecionar-horario/selecionar-horario';
import { SelecionarServico } from '../../componente/selecionar-servico/selecionar-servico';
import { SelecionarFuncionario } from '../../componente/selecionar-funcionario/selecionar-funcionario';
import { SelecionarConfirmacao } from '../../componente/selecionar-confirmacao/selecionar-confirmacao';

@Component({
  selector: 'app-agendamentos',
  imports: [
      NavBar,
      SelecionarHorario,
      SelecionarServico,
      SelecionarFuncionario,
      SelecionarConfirmacao
  ],

  templateUrl: './agendamentos.html',
  styleUrl: './agendamentos.css',
})
export class Agendamentos {

    popup = {
        enabled: true,
        tela:    'profissional',

        toggle()  {
            this.enabled = !this.enabled
        },

        reset() {
            this.tela = 'profissional'
            this.enabled = !this.enabled
        },

        // TODO: adicionar uma forma de checar se a tela existe
        trocar_tela(nome_tela: string) {
            this.tela = nome_tela
        }
    }

}
