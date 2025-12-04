import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ViewChild, ViewContainerRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

import { Login } from '../../componente/login/login';
import { PageCadastro } from '../../componente/cadastro/cadastro';
import { Footer } from '../../componente/footer/footer';

@Component({
  selector: 'landing',
  imports: [NgOptimizedImage, Login, PageCadastro, Footer],
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
        moverPara: (tela:string) => {
            this.popup.tela = tela
        }
    }

    teste(){
        this.popup.tela = "Login"
    }

    abrirCadastro() {
        this.popup.tela = 'PageCadastro'
    }

    abrirAgendamentos() {
        // TODO
    }

    btnAgendamento() {
        console.log("agendamento")
        this.popup.tela = 'Login'
        this.popup.toggle()
    }

    btnLogin() {
        console.log("Login")
    }

}
