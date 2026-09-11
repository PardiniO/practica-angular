import { Component } from '@angular/core';
import { Tarea } from "../../../../../core/models/tarea";
@Component({
  selector: 'app-segundo-padre-tarea-e10',
  templateUrl: './segundo-padre-tarea-e10.component.html',
  styleUrl: './segundo-padre-tarea-e10.component.scss'
})
export class SegundoPadreTareaE10Component {
  tareas: Tarea[] = [
    { id: 1, titulo: 'Estudiar para recuperatorio de Angular', completada: false },
    { id: 2, titulo: 'Hacer arquitectura de carpetas del proyecto', completada: false },
    { id: 3, titulo: 'Terminar de leer Frankeinstein', completada: false }
  ];

  eliminarTareaPorId(id: number): void {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
  }

  completarTareaPorId(id: number): void {
    const tarea = this.tareas.find(tarea => tarea.id === id);
    if (tarea) {
      tarea.completada = !tarea.completada;
    }
  }
}
