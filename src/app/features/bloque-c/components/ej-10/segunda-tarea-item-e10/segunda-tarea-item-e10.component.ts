import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-segunda-tarea-item-e10',
  templateUrl: './segunda-tarea-item-e10.component.html',
  styleUrl: './segunda-tarea-item-e10.component.scss'
})
export class SegundaTareaItemE10Component {
  @Input() id!: number;
  @Input() titulo!: string;
  @Input() completada: boolean = false;
  
  @Output() tareaEliminada = new EventEmitter<number>();
  @Output() tareaCompletada = new EventEmitter<number>();

  eliminar(): void {
    this.tareaEliminada.emit(this.id);
  }

  completar(): void {
    this.tareaCompletada.emit(this.id);
  }
}
