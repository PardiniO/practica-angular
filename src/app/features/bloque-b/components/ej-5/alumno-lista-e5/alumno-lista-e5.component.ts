import { Component } from '@angular/core';
import { Alumno } from '../../../../../core/models/alumno';

@Component({
  selector: 'app-alumno-lista-e5',
  templateUrl: './alumno-lista-e5.component.html',
  styleUrl: './alumno-lista-e5.component.scss'
})
export class AlumnoListaE5Component {
  alumnos: Alumno[] = [
    { legajo: '4645', nombre: 'Oriana', nota: 8 },
    { legajo: '2934', nombre: 'Jack', nota: 8 },
    { legajo: '0583', nombre: 'Mengano', nota: 4 },
    { legajo: '2837', nombre: 'Fulano', nota: 6 },
    { legajo: '4938', nombre: 'Pelado', nota: 0 }
  ];
}
