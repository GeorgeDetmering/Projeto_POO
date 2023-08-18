import { Livro } from './Livro';
import { Usuario } from './Usuario';
import { Emprestimo } from './Emprestimo';

export class Biblioteca {
    private _livros: Livro[] = [];
    private _usuarios: Usuario[] = [];
    private _emprestimos: Emprestimo[] = [];
    private _contadorEmprestimos: number = 1;

    adicionarLivro(livro: Livro): void {
        this._livros.push(livro);
        console.log(`O livro '${livro.titulo}' foi adicionado à biblioteca.`);
    }

    adicionarUsuario(usuario: Usuario): void {
        this._usuarios.push(usuario);
        console.log(`O usuário '${usuario.nome}' foi adicionado à biblioteca.`);
    }

    realizarEmprestimo(livro: Livro, usuario: Usuario): void {
        if (livro.quantidadeDisponivel > 0) {
            const emprestimo = new Emprestimo(this._contadorEmprestimos++, livro, usuario);
            this._emprestimos.push(emprestimo);
            livro.emprestar();
            console.log(`Empréstimo realizado para '${usuario.nome}' - Livro: '${livro.titulo}'.`);
        } else {
            console.log(`O livro '${livro.titulo}' não está disponível para empréstimo.`);
        }
    }
    
    // Mais métodos conforme necessário...
}
