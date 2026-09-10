import { Component } from '@angular/core';
import { Producto } from '../../../../../../core/models/producto';

@Component({
  selector: 'app-tabla-e7',
  templateUrl: './tabla-e7.component.html',
  styleUrl: './tabla-e7.component.scss'
})
export class TablaE7Component {
  productos: Producto[] = [
    { id: 1, nombre: 'Notebook', precio: 950000, stock: 2 },
    { id: 2, nombre: 'Celular', precio: 780000, stock: 0 },
    { id: 5, nombre: 'Memoria RAM', precio: 1000000, stock: 0 },
    { id: 3, nombre: 'Televisor', precio: 890000, stock: 6 },
    { id: 3, nombre: 'Televisor', precio: 890000, stock: 6 },
    { id: 3, nombre: 'Televisor', precio: 890000, stock: 6 },
    { id: 4, nombre: 'Microondas', precio: 789000, stock: 9 }
  ];


}
