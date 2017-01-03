import { Component, NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Service } from '../../services/orders.service';
import { Service as UsersService } from '../../services/stackoverflow-users.service';
import { DxDataGridModule, DxTabPanelModule, DxListModule } from 'devextreme-angular';
import { CardModule } from '../../components/cards/card.component';

@Component({
    templateUrl: 'data-grid.template.html',
    providers: [Service, UsersService]
})

export class DataGridComponent {
    dataSource: any;
    stackOverflowUsers: any[];

    constructor(service: Service, usersService: UsersService) {
        this.dataSource = {
            store: {
                type: 'array',
                key: 'ID',
                data: service.getOrders()
            }
        };

        usersService.getUsers().subscribe(
            data => { this.stackOverflowUsers = data }
        );
    }

    customizeDate(data) {
        return new DatePipe('en').transform(data.value, 'MMM dd, yyyy');
    }
}

@NgModule({
    imports: [
        DxDataGridModule,
        DxTabPanelModule,
        DxListModule,
        CardModule
    ],
    declarations: [DataGridComponent],
    exports: [DataGridComponent]
})
export class DataGridModule { }
