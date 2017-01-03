import { Component, NgModule } from '@angular/core'
import { 
  DxChartModule, 
  DxSparklineModule, 
  DxBulletModule,
  DxPieChartModule,
  DxLinearGaugeModule
} from 'devextreme-angular'
import { CardModule } from '../../components/cards/card.component'

@Component({
  templateUrl: 'charts1.template.html'
})

export class ChartNestedPage1 {

  dataSource = [{
    day: 'Monday',
    oranges: 3
  }, {
    day: 'Tuesday',
    oranges: 2
  }, {
    day: 'Wednesday',
    oranges: 3
  }, {
    day: 'Thursday',
    oranges: 4
  }, {
    day: 'Friday',
    oranges: 6
  }, {
    day: 'Saturday',
    oranges: 11
  }, {
    day: 'Sunday',
    oranges: 4
  }];

  constructor() { }
}

@NgModule({
    imports: [ 
      DxChartModule, 
      DxSparklineModule, 
      DxBulletModule, 
      DxPieChartModule, 
      DxLinearGaugeModule,
      CardModule
    ],
    declarations: [ ChartNestedPage1 ],
    exports: [ ChartNestedPage1 ]
})
export class ChartNestedPage1Module { }