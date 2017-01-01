import { Component, NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Service } from '../../services/orders';
import { DxDataGridModule, DxTabPanelModule } from 'devextreme-angular';
import { CardModule } from '../../components/cards/Card';

@Component({
  templateUrl: 'data-grid.template.html',
  providers: [Service]
})

export class DataGridComponent {
  dataSource: any;

  constructor(service: Service) {
      this.dataSource = {
          store: {
              type: 'array',
              key: 'ID',
              data: service.getOrders()
          }
      };
  }

  customizeDate(data) {
      return new DatePipe('en').transform(data.value, 'MMM dd, yyyy');
  }
}

@NgModule({
    imports: [ 
      DxDataGridModule,
      DxTabPanelModule,
      CardModule
    ],
    declarations: [ DataGridComponent ],
    exports: [ DataGridComponent ]
})
export class DataGridModule { }
