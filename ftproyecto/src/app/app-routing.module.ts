import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagenesComponent } from './component/imagenes/imagenes.component';
import { ListComentarioComponent } from './component/list-comentario/list-comentario.component';
import { AgregareditarformularioComponent } from './component/agregareditarformulario/agregareditarformulario.component';
import { VideoComponent } from './component/video/video.component';

const routes: Routes = [{
  path:'imagenes', component:ImagenesComponent,
},
{
  path: '', component:ListComentarioComponent
},
{
  path: 'video', component:VideoComponent
},
{
  path : 'agregar',component:AgregareditarformularioComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
