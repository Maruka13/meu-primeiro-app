import { Component } from '@angular/core';
import { EnviaFormularioService } from '../../services/envia-formulario.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  private enviaFormularioService = inject(EnviaFormularioService);
  name = "Maruka";
  idButton = "ashuashua";
  deveMostrarTitulo = false;
  listItems = ["eins", "zwei", "drei"];


 // atualizaBooleano(valor: boolean){
 //   this.meuBooleano = valor;
 // }

  submit(){
    this.enviaFormularioService.enviaInfoParaBackEnd("Enviando Informação")
  }

}
