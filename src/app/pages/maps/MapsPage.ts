import { Component, NgModule } from '@angular/core';
import { DxVectorMapModule, DxMapModule } from 'devextreme-angular';
import { CardModule } from '../../components/cards/Card';

@Component({
  templateUrl: 'maps.template.html'
})

export class MapsPageComponent {
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
    declarations: [ MapsPageComponent ],
    exports: [ MapsPageComponent ]
})
export class MapsPageModule { }
