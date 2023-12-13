import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AgregareditarformularioComponent } from './component/agregareditarformulario/agregareditarformulario.component';
import { ListComentarioComponent } from './component/list-comentario/list-comentario.component';
import { VerComentarioComponent } from './component/ver-comentario/ver-comentario.component';
import { ImagenesComponent } from './component/imagenes/imagenes.component';
import { VideoComponent } from './component/video/video.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgregareditarformularioComponent,
    ListComentarioComponent,
    VerComentarioComponent,
    ImagenesComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
