import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Sessao {
  private minhaVariavel: string = 'valor inicial';
  
  get valor(): string {
    return this.minhaVariavel;
  }

  set valor(novoValor: string) {
    this.minhaVariavel = novoValor;
  }
}