import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { menuItems } from './pages/pages.routes';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    mainMenuVisible = false;

    items = menuItems;

    headerItems = [{
          text: 'Application Title'
        }, {
            location: 'before',
            widget: 'dxButton',
            options: {
                icon: 'menu',
                onClick: () => this.onMenuToggle()
            }
        }, {
          location: 'after',
          template: 'languageTemplate'
        }
    ];

    constructor(private router: Router) {

    }

    onMenuToggle() {
        this.mainMenuVisible = !this.mainMenuVisible;
    }

    onItemSelectionChanged(event) {
        this.router.navigate([event.itemData.path]);
        this.mainMenuVisible = false;
    }

    reachBottom(e) {
      e.component.release();
    }
}
