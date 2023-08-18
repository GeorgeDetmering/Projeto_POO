import { Usuario } from './Usuario';

export class Aluno extends Usuario {
    private _turma: string;
    private _numeroMatricula: string;

    constructor(nome: string, id: number, turma: string, numeroMatricula: string) {
        super(nome, id);
        this._turma = turma;
        this._numeroMatricula = numeroMatricula;
    }

    get turma(): string {
        return this._turma;
    }

    set turma(novaTurma: string) {
        this._turma = novaTurma;
    }

    get numeroMatricula(): string {
        return this._numeroMatricula;
    }

    set numeroMatricula(novoNumeroMatricula: string) {
        this._numeroMatricula = novoNumeroMatricula;
    }
}
