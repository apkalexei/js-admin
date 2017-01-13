import { Component, NgModule, Input, Inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { 
    DxButtonModule, 
    DxPopupModule, 
    DxTemplateModule, 
    DxTextBoxModule, 
    DxValidatorModule, 
    DxValidationGroupModule 
} from 'devextreme-angular'
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2'
import { User } from 'firebase';

@Component({
    selector: 'navigation-header',
    styles: [`
        .navigation-header {
            color: white;
            background-color: #304967;
            width: 100%;
            height: 100px;
            padding: 20px;
        }
    `],
    templateUrl: 'navigation-header.component.html'
})

export class NavigationHeaderComponent {
    showLoginPopup:boolean = false;
    user: User = null;

    login: string;
    password: string;

    constructor(public af: AngularFire) {
        this.af.auth.subscribe(user => this.loginHandler(user));
    }

    loginHandler(user: FirebaseAuthState) {
        this.user = user ? user.auth : null;
        this.showLoginPopup = false;
    }

    onShowLoginPopup() {
        this.showLoginPopup = true;
    }

    onLoginClick(args) {
        if (!args.validationGroup.validate().isValid)
            return;

        this.af.auth.login(
            { email : this.login, password : this.password },
            { provider: AuthProviders.Password, method: AuthMethods.Password }
        );
    }

    onLogoutClick() {
        this.af.auth.logout();
    }
}

@NgModule({
    imports: [ 
        CommonModule, 
        DxButtonModule, 
        DxPopupModule, 
        DxTemplateModule, 
        DxTextBoxModule, 
        DxValidatorModule,
        DxValidationGroupModule
    ],
    declarations: [ NavigationHeaderComponent ],
    exports: [ NavigationHeaderComponent ]
})
export class NavigationHeaderModule { }

