import { Component } from '@angular/core';
import { Tarea } from '../../../../../core/models/tarea';

@Component({
  selector: 'app-padre-tarea-e9',
  templateUrl: './padre-tarea-e9.component.html',
  styleUrl: './padre-tarea-e9.component.scss'
})
export class PadreTareaE9Component {
  tareas: Tarea[] = [
    { id: 1, titulo: 'Estudiar para recuperatorio de Angular' },
    { id: 2, titulo: 'Hacer arquitectura de carpetas del proyecto' },
    { id: 3, titulo: 'Terminar de leer Frankeinstein' },
  ];

  eliminarTareaPorId(id: number): void {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
  }
}
