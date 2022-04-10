import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }


  public getUsuario(): Usuario{
    let usuario = new Usuario()
    usuario.nome = "Aser"
    usuario.email= "aserjunior@hotmail.com"

    return usuario
  }


  public listaUsuario(): Usuario[]{
    return[
      
        {
          nome:"Aser",
          email:"aserjunior@hotmail.com",
          assunto:"",
          corpo:""
        },
    ]
  
  }
}
