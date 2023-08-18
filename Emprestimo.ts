import { Livro } from './Livro';
import { Usuario } from './Usuario';

export class Emprestimo {
    private _id: number;
    private _livro: Livro;
    private _usuario: Usuario;
    private _dataEmprestimo: Date;
    private _dataDevolucao: Date;

    constructor(id: number, livro: Livro, usuario: Usuario) {
        this._id = id;
        this._livro = livro;
        this._usuario = usuario;
        this._dataEmprestimo = new Date();
        this._dataDevolucao = new Date();
        this._dataDevolucao.setDate(this._dataEmprestimo.getDate() + 14); // Devolução em 14 dias
    }

    get id(): number {
        return this._id;
    }

    get livro(): Livro {
        return this._livro;
    }

    get usuario(): Usuario {
        return this._usuario;
    }

    get dataEmprestimo(): Date {
        return this._dataEmprestimo;
    }

    get dataDevolucao(): Date {
        return this._dataDevolucao;
    }
}
