import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { comentario } from 'src/app/interfaz/comentario';

@Component({
  selector: 'app-agregareditarformulario',
  templateUrl: './agregareditarformulario.component.html',
  styleUrls: ['./agregareditarformulario.component.css']
})
export class AgregareditarformularioComponent {

  agregarComentario: FormGroup ;

  constructor(private fb: FormBuilder){
    this.agregarComentario = this.fb.group({
      titulo:['',Validators.required],
      creador:['',Validators.required],
      texto:['',Validators.required]
    })

  }

  agregar(){
    console.log(this.agregarComentario)
    const comentario : comentario = {
      titulo:this.agregarComentario.get('titulo')?.value,
      creador:this.agregarComentario.get('creador')?.value,
      fechacreacion: new Date
    }
  }

}
