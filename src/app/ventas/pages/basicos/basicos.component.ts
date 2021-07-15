import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent{

  nombreCompleto: string = 'MauRo tUlA';

  fecha: Date = new Date();  // el dia de hoy
  

}
