import { Component } from '@angular/core';
import { comentario } from 'src/app/interfaz/comentario';

@Component({
  selector: 'app-list-comentario',
  templateUrl: './list-comentario.component.html',
  styleUrls: ['./list-comentario.component.css']
})
export class ListComentarioComponent {

  ListComentario: comentario[] = [
    {
    creador :'santiago',
    titulo:'qsy' ,
    fechacreacion: new Date()
    },
    {
    creador :'Emanuel',
    titulo:'qsy2' ,
    fechacreacion: new Date()
    },
    {
      creador:'pepe',
      titulo:'qsy3',
      fechacreacion:new Date()
    }
  ]

}
