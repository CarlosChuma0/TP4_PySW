import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto3',
  imports: [CommonModule],
  templateUrl: './punto3.html',
  styleUrls: ['./punto3.css'],
})
export class Punto3 {
  cartas: any[] = [];
  seleccionadas: any[] = [];
  intentos: number = 10;
  juegoIniciado: boolean = false;
  turnoActivo: boolean = false;
  bloqueado: boolean = false;

  inicio() {
    this.cartas = this.mezclador();
    this.intentos = 10;
    this.juegoIniciado = true;
    this.bloqueado=true;
    this.seleccionadas = [];
  }
  mezclador(): any[]{
    const valores = ['A', 'B', 'C', 'D', 'E', 'F'];
    const parejas = [...valores, ...valores];
    const cartas = parejas.sort(() => Math.random() - 0.5).map(v => ({ valor: v, visible: false }));
    return cartas;
  }

  seleccion(carta: any) {
    if (!this.turnoActivo) return;
    if (this.bloqueado) return;
    if (carta.visible) return;
    if (this.seleccionadas.length === 2) return;

    carta.visible = true;
    this.seleccionadas.push(carta);

    if (this.seleccionadas.length === 2) {

      this.bloqueado = true;

      const [c1, c2] = this.seleccionadas;

      if (c1.valor === c2.valor) {
        this.resetTurno();
      } else {
        setTimeout(() => {
          c1.visible = false;
          c2.visible = false;

          this.intentos--;
          this.resetTurno();

        }, 800);
      }
    }
  }
  resetTurno() {
    this.seleccionadas = [];
    this.turnoActivo = false;
    this.bloqueado = false;
  }

  intento() {
    if (!this.juegoIniciado || this.intentos === 0) return;
    if (this.intentos===10){
        this.bloqueado=false
    };

    this.turnoActivo = true;
    if (this.seleccionadas.length !== 2) return;

    const [c1, c2] = this.seleccionadas;

    if (c1.valor !== c2.valor) {
      setTimeout(() => {
        c1.visible = false;
        c2.visible = false;
      }, 800);

      this.intentos--;
    }

    this.seleccionadas = [];
  }

  reiniciar() {
    if(!this.juegoIniciado) return;
    this.seleccionadas = [];
    this.cartas = this.mezclador();
    this.intentos = 10;
    this.seleccionadas = [];
  }

  juegoGanado(): boolean {
  return this.juegoIniciado &&
         this.cartas.length > 0 &&
         this.cartas.every(c => c.visible);
  }

}
