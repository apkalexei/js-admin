import { Component, NgModule } from '@angular/core';
import { DxSelectBoxModule, DxTemplateModule, DxTextBoxModule } from 'devextreme-angular';

@Component({
    selector: 'language-switcher',
    template:  `
        <dx-select-box [items]="languages">        
            <div *dxTemplate="let data of 'item'" class="item">
                <img class="lng-img" [src]="data.img" />
                <div class="lng-text">{{ data.text }}</div>
            </div>
        </dx-select-box>
    `,
    styles: [`
        .lng-img {
            width: 40px;
            height: 40px;
        }
    `]
})

export class LanguageSwitcherComponent {
    languages: any[] = [
        { img: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/300px-Flag_of_the_United_States.svg.png', text: 'English' },
        { img: '', text: 'Russian' }
    ]
    constructor() {
    }
}

@NgModule({
    imports: [ DxSelectBoxModule, DxTextBoxModule, DxTemplateModule ],
    declarations: [ LanguageSwitcherComponent ],
    exports: [ LanguageSwitcherComponent ]
})
export class LanguageSwitcherModule { }
