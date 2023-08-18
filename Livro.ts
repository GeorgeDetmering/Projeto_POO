export class Livro {
    private _quantidadeDisponivel: number;

    constructor(
        public id: number,
        public titulo: string,
        public autor: string,
        public anoPublicacao: number,
        public genero: string,
        quantidadeTotal: number
    ) {
        this._quantidadeDisponivel = quantidadeTotal;
    }

    get quantidadeDisponivel(): number {
        return this._quantidadeDisponivel;
    }

    set quantidadeDisponivel(novaQuantidade: number) {
        if (novaQuantidade >= 0) {
            this._quantidadeDisponivel = novaQuantidade;
        } else {
            console.log("A quantidade disponível não pode ser menor que zero.");
        }
    }

    emprestar(): void {
        if (this._quantidadeDisponivel > 0) {
            this._quantidadeDisponivel--;
            console.log(`O livro '${this.titulo}' foi emprestado.`);
        } else {
            console.log(`O livro '${this.titulo}' não está disponível para empréstimo.`);
        }
    }

    devolver(): void {
        if (this._quantidadeDisponivel < this._quantidadeDisponivel) {
            this._quantidadeDisponivel++;
            console.log(`O livro '${this.titulo}' foi devolvido com sucesso.`);
        } else {
            console.log(`Todos os exemplares do livro '${this.titulo}' estão de volta à biblioteca.`);
        }
    }

    toString(): string {
        const status = this._quantidadeDisponivel > 0 ? "disponível" : "indisponível";
        return `'${this.titulo}' por ${this.autor} - Status: ${status}`;
    }
}
