import { CertificationType, AssetClass, SubAssetClass, CertificationLevel } from "../enums";

export function scoreToLevelMapping(certificationType: CertificationType, asset: AssetClass, subasset: SubAssetClass): Record<CertificationLevel, { min: number, max: number }>
{
	let occupiedMapping = {
		[CertificationLevel.Certified]: {
			min: 45,
			max: 62
		},
		[CertificationLevel.Silver]: {
			min: 63,
			max: 76
		},
		[CertificationLevel.Gold]: {
			min: 77,
			max: 89
		},
		[CertificationLevel.Platinum]: {
			min: 90,
			max: 100
		},
	};

	let developmentMapping = {
		[CertificationLevel.Certified]: {
			min: 50,
			max: 69
		},
		[CertificationLevel.Silver]: {
			min: 70,
			max: 79
		},
		[CertificationLevel.Gold]: {
			min: 80,
			max: 89
		},
		[CertificationLevel.Platinum]: {
			min: 90,
			max: 100
		},
	};


	// Logic To Determine Mapping Based on Asset, SubAsset, CertificationType
	if(asset === AssetClass.Home)
	{
		return occupiedMapping;
	}
	else if(asset === AssetClass.Office)
	{
		if (certificationType === CertificationType.Development)
		{
			return developmentMapping;
		}
		else if(certificationType === CertificationType.Occupied)
		{
			return occupiedMapping;
		}
		else
		{
			return occupiedMapping;
		}
	}
	else
	{
		return occupiedMapping;
	}
}