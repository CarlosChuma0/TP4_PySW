import { Component } from '@angular/core';

@Component({
  selector: 'app-punto1',
  imports: [],
  templateUrl: './punto1.html',
  styleUrl: './punto1.css',
})
export class Punto1 {

  eventos = [
    {
      nombre: 'Yoga',
      descripcion: 'Clase de relajación',
      img: 'https://plus.unsplash.com/premium_photo-1661777196224-bfda51e61cfd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      nombre: 'Gimnasio',
      descripcion: 'Entrenamiento funcional',
      img: 'https://plus.unsplash.com/premium_photo-1661301057249-bd008eebd06a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      nombre: 'Running',
      descripcion: 'Entrenamiento al aire libre',
      img: 'https://images.unsplash.com/flagged/photo-1556746834-cbb4a38ee593?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  indiceActual = 0;

  siguiente() {
    if (this.indiceActual < this.eventos.length - 1) {
      this.indiceActual++;
    }
  }

  anterior() {
    if (this.indiceActual > 0) {
      this.indiceActual--;
    }
  }
}
