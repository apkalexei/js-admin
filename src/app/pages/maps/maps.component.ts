import { Component, NgModule } from '@angular/core';
import { DxVectorMapModule, DxMapModule } from 'devextreme-angular';
import { CardModule } from '../../components/cards/Card';

@Component({
  templateUrl: 'maps.template.html'
})

export class MapsComponent {
  layers = [{
       dataSource: (<any> window).DevExpress.viz.map.sources.world
  }];

  constructor() {
  }

  mapsClickHandler() {

  }
}


@NgModule({
    imports: [ DxVectorMapModule, DxMapModule, CardModule ],
    declarations: [ MapsComponent ]
})
export class MapsModule { }
