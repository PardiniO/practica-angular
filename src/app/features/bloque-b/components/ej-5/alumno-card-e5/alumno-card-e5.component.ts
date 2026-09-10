import { Component, Input } from '@angular/core';
import { Alumno } from '../../../../../core/models/alumno';

@Component({
  selector: 'app-alumno-card-e5',
  templateUrl: './alumno-card-e5.component.html',
  styleUrl: './alumno-card-e5.component.scss'
})
export class AlumnoCardE5Component {
  @Input() alumno!: Alumno;

  aprobado(): boolean {
    return this.alumno.nota >= 6;
  }

  desaprobado(): boolean {
    return this.alumno.nota < 6;
  }
}
