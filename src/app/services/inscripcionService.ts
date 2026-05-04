import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InscripcionService {
  inscripciones: any[] = [];
  agregar(inscripcion: any) {

    if (!inscripcion.dni ||
        !inscripcion.precio ||
        inscripcion.categoriaAlumno === null ||
        !inscripcion.email ||
        !inscripcion.curso) {

      throw new Error('Datos inválidos');
    }
    this.inscripciones.push(inscripcion);
  }
  obtener() {
    return this.inscripciones;
  }
  totalGeneral(): number {
    return this.inscripciones.reduce((sum, i) => sum + i.total, 0);
  }
  totalPorCategoria(cat: number): number {
    return this.inscripciones
      .filter(i => i.categoriaAlumno == cat)
      .reduce((sum, i) => sum + i.total, 0);
  }
}
