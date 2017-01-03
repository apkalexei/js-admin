import { Component, NgModule } from '@angular/core'
import { DxVectorMapModule, DxMapModule } from 'devextreme-angular'
import { CardModule } from '../../components/cards/card.component'

const mapsColors: any = {
	Russia: { totalArea: 17.12, color: '#1E90FF' },
	Canada: { totalArea: 9.98, color: '#B8860B' },
	China: { totalArea: 9.59, color: '#BDB76B' },
	'United States': { totalArea: 9.52, color: '#FFA07A' },
	Brazil: { totalArea: 8.51, color: '#3CB371' },
	Australia: { totalArea: 7.69, color: '#D8BFD8' },
	India: { totalArea: 3.29, color: '#DB7093' },
	Argentina: { totalArea: 2.78, color: '#FFD700' },
	Kazakhstan: { totalArea: 2.72, color: '#CD5C5C' },
	Algeria: { totalArea: 2.38, color: '#B0C4DE' }
}

@Component({
	templateUrl: 'maps.template.html'
})

export class MapsComponent {
	mapSource: any = (<any>window).DevExpress.viz.map.sources.world;

	constructor() { }

	get mapsColors() {
		return mapsColors;
	}

	customizeLayers(elements) {
		elements.forEach((element) => {
			let country = mapsColors[element.attribute('name')];
			if (country) {
				element.applySettings({
					color: country.color,
					hoveredColor: '#e0e000'
				});
			};
		});
	}
}


@NgModule({
	imports: [DxVectorMapModule, DxMapModule, CardModule],
	declarations: [MapsComponent]
})
export class MapsModule { }
