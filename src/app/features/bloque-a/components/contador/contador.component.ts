import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.scss'
})
export class ContadorComponent {
  valor: number = 0;
  habilitado!: boolean;

  sumar(): void {
    this.valor++;
  }
  
  restar(): void {
    if (this.valor > 0) {
      this.valor--;
    }
  }
  
  resetear(): void {
    this.valor = 0;
  }
}
