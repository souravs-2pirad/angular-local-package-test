import { AssetClass, CertificationLevel, CertificationType, Country, Language, LevelOverride, ProductType, ScoreResultStatus, ScoreTargetStatus, SubAssetClass } from '../enums';

export interface ApprovedLevel
{
	level: CertificationLevel,
	credits: number
}

export interface ScoringGuide
{
	globalResolution: string,
	globalCreditAllocation: string,
	localResolution: string,
	localCreditAllocation: string,
}

export interface Evidence
{
	fileLinks: string[],
	note: string,
	noteForClient: string,
	dynamicNotesForClient: { credits: number, text: string }[],
}

export interface ScoringCriteria
{
	certificationScoringId?: number,
	globalId: number,
	localId: number,
	globalVersion: number,
	localVersion: number,
	globalName: string,
	localName: string,
	criteriaCode: string,
	criteriaPartialCredits: number,
	criteriaFullCredits: number,
	criteriaOrder: number,

	targetStatus: ScoreTargetStatus,
	resultStatus: ScoreResultStatus,

	targetOverride: LevelOverride,
	levelOverride: LevelOverride,
	possibleOverrides?: LevelOverride[],

	targetCredits: number,
	resultCredits: number,

	isChecked: boolean,
	scoringGuide: ScoringGuide,
	evidence: Evidence,

	// TODO: Create object for surveyResults
	surveyResults?: any,

	nextCertificationLevel?: CertificationLevel,
	approvedCertificationLevels: ApprovedLevel[],
}

export interface ScoringSection
{
	localId: number,
	globalId: number,
	localVersion: number,
	globalVersion: number,
	globalName: string,
	localName: string,
	sectionCode: string,
	sectionOrder: number,
	isCollapsed?: boolean,
	targetCredits?: number,
	resultCredits?: number,
	maxAllowedCredits: number,
	criteria: ScoringCriteria[],
}

export interface ScoringScorecard
{
	scorecardId: number,
	certificationId: number,
	certificationAwardedScore?: number,
	certificationAwardedLevel?: string,
	certificationTargetScore?: number,
	certificationTargetLevel?: string,
	name: string,
	version: string,
	assetClass: AssetClass,
	subAssetClass: SubAssetClass,
	sfdcCertificationType: CertificationType,
	productType: ProductType,
	region: Country,
	language: Language,
	airtableUrl: string,
	sections: ScoringSection[]
}

export interface SaveScoringCriteria
{
	certificationScoringId: number,
	certificationId: number,
	certificationAwardedScore: number,
	certificationAwardedLevel: string,
	certificationTargetScore: number,
	certificationTargetLevel: string,
	resultStatus: ScoreResultStatus,
	resultCredits: number,
	isChecked: boolean,
	targetStatus: ScoreTargetStatus,
	targetCredits: number,
	targetOverride: LevelOverride,
	levelOverride: LevelOverride,
	fileLinks: string[],
	evidenceNote: string,
	clientEvidenceNote: string,
}