import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = null;
  pessoas = [];

  adicionar() {
    this.pessoas.push(this.nome);
    this.nome = null;
  }
  
  excluir(id) {
    this.pessoas.splice(this.pessoas.indexOf(id),1);
  }
}