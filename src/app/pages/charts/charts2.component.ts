import { Component, NgModule } from '@angular/core'
import { 
  DxChartModule, 
  DxButtonModule,
  DxValidatorModule, 
  DxTextBoxModule, 
  DxSelectBoxModule,
  DxDateBoxModule,
  DxCheckBoxModule,
  DxValidationSummaryModule
} from 'devextreme-angular';
import { CardModule } from '../../components/cards/card.component'
import { Service } from '../../services/charts-data.service'

@Component({
  templateUrl: 'charts2.template.html'
})

export class ChartNestedPage2 {
  series = [{
    name: "DELL",
    openValueField: "o",
    highValueField: "h",
    lowValueField: "l",
    closeValueField: "c",
    reduction: {
      color: "red"
    }
  }];

  commonSeriesSettings = {
    argumentField: "date",
    type: "stock"
  };

  tooltip = {
    enabled: true
  }

  dataSource: any[];

  constructor(service: Service) { 
    this.dataSource = service.getChartData();
  }
}

@NgModule({
    imports: [ 
      DxChartModule,
      DxButtonModule,
      DxSelectBoxModule,
      DxTextBoxModule,
      DxValidatorModule,
      DxDateBoxModule,
      DxCheckBoxModule,
      DxValidationSummaryModule,
      CardModule
    ],
    declarations: [ ChartNestedPage2 ],
    exports: [ ChartNestedPage2 ]
})
export class ChartNestedPage2Module { }
