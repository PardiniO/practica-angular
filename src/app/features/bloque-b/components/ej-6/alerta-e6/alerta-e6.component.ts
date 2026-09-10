import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alerta-e6',
  templateUrl: './alerta-e6.component.html',
  styleUrl: './alerta-e6.component.scss'
})
export class AlertaE6Component {
  @Input() tipo!: 'exito' | 'error' | 'advertencia';
  @Input() mensaje!: string;
  @Input() visible!: boolean;
}
