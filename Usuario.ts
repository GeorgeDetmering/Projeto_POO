export class Usuario {
    private _nome: string;
    private _id: number;

    constructor(nome: string, id: number) {
        this._nome = nome;
        this._id = id;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(novoNome: string) {
        this._nome = novoNome;
    }

    get id(): number {
        return this._id;
    }

    set id(novoId: number) {
        this._id = novoId;
    }
}
