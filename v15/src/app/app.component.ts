import { AssetClass, CertificationType, SubAssetClass } from 'arca-shared/enums';
import { Component, OnInit } from '@angular/core';

import { scoreToLevelMapping } from 'arca-shared/utils';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
	ngOnInit(): void
	{
		let x = scoreToLevelMapping(CertificationType.Occupied, AssetClass.Office, SubAssetClass['Single Building']);
		console.log(x);
	}
	title = 'v15';
}
