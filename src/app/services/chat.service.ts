import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {Mensaje} from "../interfaces/mensaje";

@Injectable()
export class ChatService {

  chats: FirebaseListObservable<Mensaje[]>;
  usuario: any = {
    nombre: 'Darek'
  };
  CREDENCIAL = {
    'email': 'dktomaszenko@gmail.com',
    'pass': 'xjxxwbm9fx'
  };
  ERROR = {
    'code': null,
    'message': 'null'
  };
  constructor(private db: AngularFireDatabase) {

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


  logout(){
    this.db.app.auth().signOut();
  }

}
