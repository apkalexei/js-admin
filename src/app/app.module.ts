import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { 
  DxScrollViewModule, 
  DxToolbarModule, 
  DxSlideOutViewModule,
  DxTreeViewModule,
  DxTemplateModule 
} from 'devextreme-angular';

import { PagesRoutingModule } from './pages/pages.routes';

import { CardModule } from './components/cards/Card';
import { LanguageSwitcherModule } from './components/language/LanguageSwitcher';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    CardModule,

    LanguageSwitcherModule,
    DxScrollViewModule,
    DxToolbarModule,
    DxSlideOutViewModule,
    DxTreeViewModule,
    DxTemplateModule,

    PagesRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
