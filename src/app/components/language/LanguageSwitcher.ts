import { Component, NgModule } from '@angular/core';
import { DxSelectBoxModule, DxTemplateModule, DxTextBoxModule } from 'devextreme-angular';

@Component({
    selector: 'language-switcher',
    template:  `
        <dx-select-box [items]="[1, 2, 3]" fieldTemplate="field">
            <div *dxTemplate="let data of 'field'">123
                <dx-text-box></dx-text-box>
            </div>
        </dx-select-box>
    `
})

export class LanguageSwitcherComponent {
    constructor() {
    }
}

@NgModule({
    imports: [ DxSelectBoxModule, DxTextBoxModule, DxTemplateModule ],
    declarations: [ LanguageSwitcherComponent ],
    exports: [ LanguageSwitcherComponent ]
})
export class LanguageSwitcherModule { }
