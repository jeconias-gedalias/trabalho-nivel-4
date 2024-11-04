import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})

export class ControleLivrosService {
  // Definindo o atributo livros com alguns elementos
  private livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: 'Livro A', resumo: 'Resumo A', autores: ['Autor A1', 'Autor A2'] },
    { codigo: 2, codEditora: 2, titulo: 'Livro B', resumo: 'Resumo B', autores: ['Autor B1'] },
    { codigo: 3, codEditora: 3, titulo: 'Livro C', resumo: 'Resumo C', autores: ['Autor C1', 'Autor C2'] }
  ];

  constructor() { }

  // Método que retorna o vetor livros
  obterLivros(): Array<Livro> {
    return this.livros;
  }

  // Método para incluir um novo livro no vetor
  incluir(livro: Livro): void {
    // Obtendo o código mais alto e incrementando para o novo livro
    const novoCodigo = (this.livros.length > 0) ? Math.max(...this.livros.map(l => l.codigo)) + 1
      : 1;
    livro.codigo = novoCodigo;

    // Adicionando o livro ao vetor
    this.livros.push(livro);
  }

  // Método para excluir um livro pelo código
  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index >= 0) {
      this.livros.splice(index, 1);
    }
  }
}