import { Routes } from '@angular/router';
import { PageLanding } from './tela/landing/landing';
import { Agendamentos } from './tela/agendamentos/agendamentos';

export const routes: Routes = [
    {
        path: "",
        component: PageLanding,
    },
    {
        path: "agendamentos",
        component: Agendamentos
    },
];
