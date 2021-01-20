import { Component } from '@angular/core';
import { IMenu } from './core/interfaces/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public menu: IMenu[];

  constructor() {
    this.menu = [{
      option: 'Usuarios',
      icon: 'person_outline',
      selected: true
    },{
      option: 'Slider',
      icon: 'catching_pokemon',
      selected: false
    },{
      option: 'Reportes',
      icon: 'insert_chart_outlined',
      selected: false
    },{
      option: 'Términos',
      icon: 'receipt_long',
      selected: false
    },{
      option: 'Redes',
      icon: 'share',
      selected: false
    }]
  }
}
