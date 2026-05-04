import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto2.html',
  styleUrl: './punto2.css',
})
export class Punto2 {

  productos = [
    {
      nombre: 'Notebook Asus',
      descripcion: 'Disco 40GB, 15 pulgadas',
      img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      precio: 45.5
    },
    {
      nombre: 'Monitor LG',
      descripcion: 'Full HD',
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      precio: 99
    },
    {
      nombre: 'Macbook Pro',
      descripcion: 'Disco 40GB, 15 pulgadas',
      img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      precio: 70.5
    },
    {
      nombre: 'Visor Playstation VR',
      descripcion: 'Visor Realidad Virtual PS4',
      img: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      precio: 150
    }
    
  ]
  carrito: any[]=[];

  agregarCarrito(producto:any){
    this.carrito.push(producto);
  }

  getTotal(): number{
    return this.carrito.reduce((total,p) => total + p.precio,0);
  }
}
