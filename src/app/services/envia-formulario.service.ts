import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EnviaFormularioService {

  constructor() { }

  enviaInfoParaBackEnd(info: string){
    console.log("Enviando para o BackEnd")
  }

}
