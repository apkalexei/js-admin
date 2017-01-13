import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { 
  AngularFireModule,
  AuthMethods, 
  AuthProviders
} from 'angularfire2'
import { AppComponent } from './app.component'
import { 
  DxScrollViewModule, 
  DxToolbarModule, 
  DxSlideOutViewModule,
  DxTreeViewModule,
  DxTemplateModule 
} from 'devextreme-angular'

import { PagesRoutingModule } from './pages/pages.routes'
import { LanguageSwitcherModule } from './components/language/LanguageSwitcher'
import { NavigationHeaderModule } from './components/navigation-header/navigation-header.component'

 // Initialize Firebase
var config = {
    apiKey: "AIzaSyBMNzF7371d342zIACnSM6Kd9ZHn6J63Os",
    authDomain: "js-admin.firebaseapp.com",
    databaseURL: "https://js-admin.firebaseio.com",
    storageBucket: "js-admin.appspot.com",
    messagingSenderId: "877400492199"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    AngularFireModule.initializeApp(config, {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    }),

    LanguageSwitcherModule,
    NavigationHeaderModule,
    
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
