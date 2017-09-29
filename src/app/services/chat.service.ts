import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {Mensaje} from "../interfaces/mensaje";

@Injectable()
export class ChatService {

  chats: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    /*this.chats = db.list('/chats');*/
  }

  cargarMensajes(){
    return this.chats = this.db.list('/chats', {
      query: {
        limitToLast: 10,
        orderByKey: true
      }
    })
  }

  agregarMensaje(texto: string) {

    let mensaje: Mensaje = {
      nombre: "Darek",
      mensaje: texto
    };

    return this.chats.push( mensaje );

  }

}
