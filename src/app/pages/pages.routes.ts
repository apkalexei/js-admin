import { NgModule } from '@angular/core'
import { Route, Routes, RouterModule } from '@angular/router'

import { MapsComponent, MapsModule } from './maps/maps.component'
import { ChartPage } from './charts/charts.component'
import { ChartNestedPage1, ChartNestedPage1Module } from './charts/charts1.component'
import { ChartNestedPage2, ChartNestedPage2Module } from './charts/charts2.component'
import { BurnDownPage, BurnDownModule } from './charts/burndown.component'
import { DataGridComponent, DataGridModule } from './datagrid/data-grid.component'

const routes: Routes = [{
    path: '',
    redirectTo: 'maps',
    pathMatch: 'full'
  }, {
    path: 'maps',
    component: MapsComponent,
    data: { title: 'Maps' }
  }, {
    path: 'charts',
    component: ChartPage,
    children: [
      { path: '', component: ChartNestedPage1 },
      { path: 'nested1', component: ChartNestedPage1 },
      { path: 'nested2', component: ChartNestedPage2 },
      { path: 'burndown', component: BurnDownPage }
    ],
    data: { title: 'Charts' }
  }, {
    path: 'datagrid',
    component: DataGridComponent
  }
];

export const menuItems = [{
    text: 'Maps',
    path: 'maps'
  }, {
    text: 'Charts',
    path: 'charts/nested1',
    items: [
      { text: 'Level 1', path: 'charts/nested1' },
      { text: 'Level 2', path: 'charts/nested2', items: [{ text: 'txt1'}, { text: 'txt2'}] },
      { text: 'Burndown', path: 'charts/burndown' }
    ]
  }, {
    text: 'Data Grid',
    path: 'datagrid'
  }
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes),
    MapsModule,
    ChartNestedPage1Module,
    ChartNestedPage2Module,
    BurnDownModule,
    DataGridModule
  ],
  declarations: [ ChartPage ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule {}
