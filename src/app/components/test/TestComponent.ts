import { Component, QueryList, ContentChildren, Input } from '@angular/core';

@Component({
    selector: 'tst',
    template: ''
})

export class TestComponent {
    @Input() text:string;

    items: TestComponent[];
    constructor() {
    }


    @ContentChildren(TestComponent, { descendants: false })
    get itemsChildren(): QueryList<TestComponent> {
        return null;
    }
    set itemsChildren(value) {

        this.items = value.filter((item) => { return item !== this; });
        console.log(this.items);
    }
}

