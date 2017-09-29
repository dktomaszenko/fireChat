import {Component, OnInit} from '@angular/core';
import {ChatService} from "../../services/chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {

  mensaje: string = '';

  constructor(
    private _cs: ChatService
  ) {
    this._cs.cargarMensajes().subscribe( ()=>{
      console.log('mensajes cargados');
    })
  }

  ngOnInit() {
  }

  enviar() {
    if(this.mensaje.length==0){
      return;
    }
    this._cs.agregarMensaje(this.mensaje)
      .then( (data)=>{
        console.log(data);
      })
      .catch( ()=>{

      })

  }

}
