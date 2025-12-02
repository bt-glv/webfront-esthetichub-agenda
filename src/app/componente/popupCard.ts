import { Directive, EventEmitter, Output } from '@angular/core';

// tem que ter esse decorador para extender (herdar) essa
// classe em um componente angular
//
// Eu não implementei injeção de dependencia.
// você vai ter que importar as mesmas dependencias presentes
// nesse arquivo no arquivo do componente
//
@Directive()
export abstract class PopupCard {
    @Output() fechar_tela = new EventEmitter<void>()
    btnFechar(event: Event)   {
        event.stopPropagation() // não é necessário em todo o caso, mas é uma boa pratica
        this.fechar_tela.emit()
    }

    // envia o evento para passar para o próximo component
    @Output() proxima_tela = new EventEmitter<void>()
    btnProximaTela(event: Event){
        event.stopPropagation()
        this.proxima_tela.emit()
    }
}
