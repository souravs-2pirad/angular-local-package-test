import { AssetClass } from "./assetClass";
import { CertificationLevel } from "./certificationLevel";
import { CertificationStage } from "./certificationStage";
import { DevelopmentAmStages } from "./developmentAmStage";
import { DevelopmentCsmStages } from "./developmentCsmStage";
import { OccupiedAmStages } from "./occupiedAmStage";
import { OccupiedCsmStages } from "./occupiedCsmStage";
import { SmartScoreAmStages } from "./smartScoreAmStage";
import { SmartScoreCsmStages } from "./smartScoreCsmStage";
import { SubAssetClass } from "./subAssetClass";

export const CertificationLevelOrder =
{
	[CertificationLevel.Certified]: 0,
	[CertificationLevel.Silver]: 1,
	[CertificationLevel.Gold]: 2,
	[CertificationLevel.Platinum]: 3
}

export function getIndexOfArcaStage(stage: CertificationStage): number
{
	return Object.keys(CertificationStage).findIndex(x => x === stage);
}

export enum FileUploadStateEnum
{
	DEFAULT = "DEFAULT",
	IN_PROGRESS = "IN_PROGRESS",
	ERROR = "ERROR",
	SUCCESS = "SUCCESS",
}

export enum ApplicationLanguage
{
	"en-US" = "en-US",
	"en-UK" = "en-UK",
	"fr" = "fr",
	"de" = "de",
}

export enum ScorecardStatus
{
	"Active" = "Active",
	"Inactive" = "Inactive"
}

export const ScorecardAssetSubAssetMapping =
{
	[AssetClass.Office]: [
		SubAssetClass['Single Building'],
	],
	[AssetClass.Home]: [
		SubAssetClass.Renter,
		SubAssetClass.Owner,
		SubAssetClass.Student,
	],
}

export type AmStage = DevelopmentAmStages | OccupiedAmStages | SmartScoreAmStages;
export type CsmStage = DevelopmentCsmStages | OccupiedCsmStages | SmartScoreCsmStages;