import { Component, Input } from '@angular/core';
import { EnviaFormularioService } from '../../services/envia-formulario.service';
import { inject } from '@angular/core';


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

  @Input("name") teste!: string;


 // atualizaBooleano(valor: boolean){
 //   this.meuBooleano = valor;
 // }

  submit(){
    this.enviaFormularioService.enviaInfoParaBackEnd("Enviando Informação")
  }

}
