import { Component, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'card',
    styles: [`
        .jsa-card {
            margin: 20px;
            overflow: hidden;
            box-shadow: 0 3px 15px 0 rgba(0,0,0,.1);
        }

        .jsa-card-header {
            color: #304967;
            min-height: 44px;
            padding: 0 20px;
            border-bottom: 1px solid rgba(245,245,245,1);
        }

        .jsa-card-title {
            display: inline-block;
            margin-top: 8px;
        }

        .jsa-card-body {
            transition: transform 300ms linear;
            transform-origin: 50% 0;
            padding: 20px;
        }

        .jsa-card-body-collapsed {
            height: 0px;
            padding: 0;
        }
    `],
    templateUrl: 'card.template.html'
})

export class CardComponent {
    @Input() title: String;

    expanded = false;

    constructor() {

    }

    toggleExpanded() {
        this.expanded = !this.expanded;
    }
}

@NgModule({
    imports: [ CommonModule ],
    declarations: [ CardComponent ],
    exports: [ CardComponent ]
})
export class CardModule { }

