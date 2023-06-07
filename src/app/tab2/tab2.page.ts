import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  buscarNoMapa() {
   window
   .open('https://www.google.com/maps/search/escola+de+deficientes+fisicos/@-12.9925871,-38.5178415,13.89z', '_blank').focus();

  }

}


