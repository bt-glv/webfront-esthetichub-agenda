import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ViewChild, ViewContainerRef } from '@angular/core';

import { Login } from '../../componente/login/login';
import { PageCadastro } from '../../componente/cadastro/cadastro';

@Component({
  selector: 'landing',
  imports: [NgOptimizedImage, Login, PageCadastro],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class PageLanding {


    popup = {
        enabled: true,
        tela: 'Login',
        toggle: function() {
            this.enabled = !this.enabled
        },
        content: null,
    }

    abrirCadastro() {
        this.popup.tela = 'PageCadastro'
    }
    abrirAgendamentos() {}


    visibilidade_login = false;
    visibilidae_cadastro = false;

    // chamadas botoes
    btnAgendamento() {
        console.log("agendamento")
        this.popup.toggle()
    }

    btnLogin() {
        console.log("Login")
    }

}
