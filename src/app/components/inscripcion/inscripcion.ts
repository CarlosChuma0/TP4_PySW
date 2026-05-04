import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {InscripcionService} from '../../services/inscripcionService'

@Component({
  selector: 'app-inscripcion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inscripcion.html',
  styleUrls: ['./inscripcion.css']
})
export class Inscripcion {

  dni = '';
  precio = 0;
  categoriaAlumno: number | null=null;
  fechaInscripcion = '';
  email = '';
  curso = '';

  total = 0;

  constructor(public service: InscripcionService) {}

  calcularTotal() {
    if (this.precio <=0 || this.categoriaAlumno===null) {
      this.total=0;
      return;
    }
    let descuento = 0;

    if (this.categoriaAlumno == 1) descuento = 0.35;
    else if (this.categoriaAlumno == 2) descuento = 0.5;

    this.total = this.precio - (this.precio * descuento);
  }

  registrar(form:any) {
    if (form.invalid) {
      return;
  }
    const inscripcion = {
      dni: this.dni,
      precio: this.precio,
      categoriaAlumno: this.categoriaAlumno,
      fechaInscripcion: this.fechaInscripcion,
      email: this.email,
      curso: this.curso,
      total: this.total
    };

    this.service.agregar(inscripcion);


  //Limpiar Formulario
  form.resetForm();
  }

  get lista() {
    return this.service.obtener();
  }
}