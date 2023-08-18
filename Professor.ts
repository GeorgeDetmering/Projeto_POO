import { Usuario } from './Usuario';
import { Aluno } from './Aluno';

export class Professor extends Usuario {
    private _alunos: Aluno[];

    constructor(nome: string, id: number) {
        super(nome, id);
        this._alunos = [];
    }

    get alunos(): Aluno[] {
        return this._alunos;
    }

    adicionarAluno(aluno: Aluno): void {
        this._alunos.push(aluno);
    }
}
