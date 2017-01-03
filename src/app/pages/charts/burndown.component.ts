import { Component, NgModule } from '@angular/core';
import { DxChartModule } from 'devextreme-angular';
import { CardModule } from '../../components/cards/Card';

@Component({
  templateUrl: 'burndown.template.html'
})

export class BurnDownPage {

  burndownData = [
    { date: '2016-16-12', todo: 150, planned: 150 },
    { date: '2016-12-19', todo: 148 },
    { date: '2016-12-20', todo: 135 },
    { date: '2016-12-21', todo: 130 },
    { date: '2016-12-22', todo: 120 },
    { date: '2016-12-23', todo: 115 },
    { date: '2016-12-26', todo: 102 },
    { date: '2016-12-27' },
    { date: '2016-12-28' },
    { date: '2016-12-29' },
    { date: '2016-12-30', planned: 0 }
  ];

  velocityData = [
    { sprint: 1, velocity: 1 },
    { sprint: 2, velocity: 2 },
    { sprint: 3, velocity: 2 },
    { sprint: 4, velocity: 2 }
  ]

  constructor() { }
}

@NgModule({
    imports: [ DxChartModule, CardModule ],
    declarations: [ BurnDownPage ],
    exports: [ BurnDownPage ]
})
export class BurnDownModule { }
