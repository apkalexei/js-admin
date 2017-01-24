import { Component, NgModule } from '@angular/core';
import { CardModule } from '../../components/cards/card.component';

@Component({
  templateUrl: 'temp.template.html'
})

export class TempComponent {
  constructor() { }
}


@NgModule({
  imports: [CardModule],
  declarations: [TempComponent]
})
export class TempModule { }
