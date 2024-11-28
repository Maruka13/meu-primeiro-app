import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  name = "Maruka";
  idButton = "ashuashua"
  deveMostrarTitulo = false;

 // atualizaBooleano(valor: boolean){
 //   this.meuBooleano = valor;
 // }

  submit(event: any){
    console.log(event)
  }
}
