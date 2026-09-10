import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tarea-item-e9',
  templateUrl: './tarea-item-e9.component.html',
  styleUrl: './tarea-item-e9.component.scss'
})
export class TareaItemE9Component {
  @Input() titulo!: string;
  @Input() id!: number;

  @Output() tareaEliminada = new EventEmitter<number>();

  eliminar(): void {
    this.tareaEliminada.emit(this.id);
  }
}
