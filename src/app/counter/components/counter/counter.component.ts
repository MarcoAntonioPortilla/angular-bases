import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `
    <p>Bienvenidos a Angular</p>
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>

    <hr>
  `
})

export class CounterComponent {
    //atributos
    public title: string = 'Hola Mundo';
    public counter: number = 10;


    //métodos
    //Sumar o restar 1
    increaseBy(value: number):void {
      this.counter += value;
    }


    //Resetear el conteo en 10
    reset():void {
      this.counter = 10;
    }
}
