import { Component} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Mauro';
  genero: string = 'masculino'
  
  invitacionMapa = {
    'masculino': 'invitarlo', 
    'femenino': 'invitarla' 
  }
  
  //i18nPlural
  clientes: string[] = ['Antonio', 'Mauro', 'Maria', 'Juan', 'Martin', 'Alejandra']
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    this.nombre = 'Alejandra',
    this.genero = 'femenino'
  }

  borrarCliente(){
    this.clientes.pop();
    //this.clientes.splice(0,1);
  }

  //KeyValuePipe
  persona = {
    nombre: 'Mauro',
    edad: 37,
    direccion: 'Bahía Blanca, Argentina'
  }

  //Jason pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ]

  //Async Pipe
  miObservable = interval(1000);

 valorPromesa = new Promise((resolve, reject) => {
   setTimeout(() => {
     resolve('Tenemos data de promesa')
   }, 3500);
   
 });
 
}