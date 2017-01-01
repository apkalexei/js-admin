import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';

import { MapsPageComponent, MapsPageModule } from './maps/MapsPage';
import { ChartPage } from './charts/ChartPage';
import { ChartNestedPage1, ChartNestedPage1Module } from './charts/ChartNestedPage1';
import { ChartNestedPage2, ChartNestedPage2Module } from './charts/ChartNestedPage2';
import { BurnDownPage, BurnDownModule } from './charts/BurnDownPage';
import { DataGridComponent, DataGridModule } from './datagrid/DataGridPage';

interface TestRoute extends Route {

}

const routes: Routes = [{
    path: '',
    redirectTo: 'maps',
    pathMatch: 'full'
  }, {
    path: 'maps',
    component: MapsPageComponent,
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
    MapsPageModule,
    ChartNestedPage1Module,
    ChartNestedPage2Module,
    BurnDownModule,
    DataGridModule
  ],
  declarations: [ ChartPage ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule {}
