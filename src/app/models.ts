export interface Models { }

export interface ServicoDetalhe {
  titulo:  string;
  preco:   number;
  duracao: number;
}

export interface PessoaResumo {
  nome:     string;
  telefone: string;
}

export interface AgendamentoDadosProfissional {
  cliente: PessoaResumo;
  servico: ServicoDetalhe;
}

export interface AgendamentoDadosCliente {
  profissional: PessoaResumo;
  servico:      ServicoDetalhe;
}

export interface Profissional {
  id?:           string;
  nome:          string;
  telefone:      string;
  senha:         string;
  lista_servico: ServicoDetalhe[];
  agendamentos:  Record<string, AgendamentoDadosProfissional>;
}

export interface Cliente {
  id?:          string;
  nome:         string;
  telefone:     string;
  senha:        string;
  agendamentos: Record<string, AgendamentoDadosCliente>;
}

export class Agendamento {
    public profissional?: Profissional;
    public servico?:      ServicoDetalhe;
    public data_horario?: Date;
}
