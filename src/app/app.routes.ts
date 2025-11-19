import { Routes } from '@angular/router';
import { PageLanding } from './tela/landing/landing';
import { PageCadastro } from './componente/cadastro/cadastro';

export const routes: Routes = [
    {
        path: "",
        component: PageLanding,
    },
    {
        path: "cadastro",
        component: PageCadastro
    },
];
