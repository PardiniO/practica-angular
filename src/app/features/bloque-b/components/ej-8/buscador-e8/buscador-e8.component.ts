import { Component } from '@angular/core';

@Component({
  selector: 'app-buscador-e8',
  templateUrl: './buscador-e8.component.html',
  styleUrl: './buscador-e8.component.scss'
})
export class BuscadorE8Component {
  busqueda: string = '';
  
  nombres: string[] = [
    'Oriana', 'Jack', 'Nadia', 'Dora', 'Uriel', 'Bruno',
    'Martin', 'Candela', 'Valentina', 'Abril', 'Martina'
  ];

  buscar(): string[] {
    const termino = this.busqueda.trim().toLowerCase();
    if (!termino) {
      return [];
    } 
    return this.nombres.filter(nombre => nombre.toLowerCase().includes(termino));
  }
}
