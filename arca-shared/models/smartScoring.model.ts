import { AssetClass, CertificationLevel, CertificationType, Language, ProductType, SmartscoreSectionCode, SubAssetClass, TFStatusOptions, TenantEnabledOptions, UFStatusOptions, InnovationStatusOptions } from '../enums';

export const DEFAULT_MINIMUM_REQUIREMENT = {
	[CertificationLevel.Certified]: {
		targetMetForTF: true,
		achievedMetForTF: true,
		targetMetForUF: true,
		achievedMetForUF: true,
		targetMetByScore: true,
		achievedMetByScore: true,
		finalTargetMet: false,
		finalAchievedMet: false,
		achievedTinkerBell: false,
	},
	[CertificationLevel.Silver]: {
		targetMetForTF: true,
		achievedMetForTF: true,
		targetMetForUF: true,
		achievedMetForUF: true,
		targetMetByScore: true,
		achievedMetByScore: true,
		finalTargetMet: false,
		finalAchievedMet: false,
		achievedTinkerBell: false,
	},
	[CertificationLevel.Gold]: {
		targetMetForTF: true,
		achievedMetForTF: true,
		targetMetForUF: true,
		achievedMetForUF: true,
		targetMetByScore: true,
		achievedMetByScore: true,
		finalTargetMet: false,
		finalAchievedMet: false,
		achievedTinkerBell: false,
	},
	[CertificationLevel.Platinum]: {
		targetMetForTF: true,
		achievedMetForTF: true,
		targetMetForUF: true,
		achievedMetForUF: true,
		targetMetByScore: true,
		achievedMetByScore: true,
		finalTargetMet: false,
		finalAchievedMet: false,
		achievedTinkerBell: false,
	},
};

export interface SmartScoringResponse
{
	id: number,
	airtableRecordId: string,
	code: string,
	productType: ProductType,
	version: number,
	assetType: AssetClass,
	subAssetType: SubAssetClass,
	certificationType: CertificationType,
	language: Language,
	certifiedCredits: number,
	silverCredits: number,
	goldCredits: number,
	platinumCredits: number,
	bestPracticeGuide: string,
	sections: SmartSection[],
	scoreRules: SmartScoreRule[],
	ui_finalTargetedCredits?: number,
	ui_targetedScoreLevel?: CertificationLevel,
	ui_finalTargetedLevel?: CertificationLevel,
	ui_finalAchievedCredits?: number,
	ui_achievedScoreLevel?: CertificationLevel,
	ui_finalAchievedLevel?: CertificationLevel,
	ui_minimumRequirement?: typeof DEFAULT_MINIMUM_REQUIREMENT,
}

export interface SmartSection
{
	id: number,
	airtableRecordId: string,
	airtableScorecardId: string,
	code: SmartscoreSectionCode,
	order: number,
	name: string,
	displayName: string,
	maxAllowedCredits: number,
	ui_targetedCredits?: number,
	ui_achievedCredits?: number,
	detail: string,
	overview: string,
	scoringRuleApplicable: boolean,
	language: Language,
	noOfCategoriesCertified: number,
	noOfCategoriesSilver: number,
	noOfCategoriesGold: number,
	noOfCategoriesPlatinium: number,
	categories: SmartCategory[],
}

export interface SmartCategory
{
	id: number,
	airtableRecordId: string,
	airtableSectionId: string,
	code: string,
	order: number,
	name: string,
	displayName: string,
	maxAllowedCredits: number,
	ui_targetedCredits?: number,
	ui_achievedCredits?: number,
	detail: string,
	overview: string,
	language: Language,
	criteria: SmartCriteria[],
}

export interface SmartCriteria
{
	certificationScoringId: number,
	id: number,
	airtableRecordId: string,
	airtableCategoryId: string,
	number: string,
	order: number,
	fullCredits: number,
	title: string,
	description: string,
	bpgLink: string,
	creditAllocation: string,
	partialCredits: number,
	certifiedCredits: number,
	silverCredits: number,
	goldCredits: number,
	platinumCredits: number,
	statusOptions: UFStatusOptions[] | TFStatusOptions[] | InnovationStatusOptions[],
	tenantEnablementOptions: TenantEnabledOptions[],
	purpose: string,
	problem: string,
	benefits: string,
	evidences: string[],
	evidenceRequirements: string,
	functionalityLevel: string,
	requirementsForTenantEnablement: string,
	language: Language,
	certificationId: number,
	targetStatus: UFStatusOptions | TFStatusOptions | InnovationStatusOptions,
	targetTenantEnabled: TenantEnabledOptions,
	targetCredits: number,
	achievedStatus: UFStatusOptions | TFStatusOptions | InnovationStatusOptions,
	achievedTenantEnabled: TenantEnabledOptions,
	achievedCredits: number,
	nextSteps: string,
	auditorNotes: string,
	internalComments: string,
	dynamicAuditorNotes: { creditLevel: UFStatusOptions | TFStatusOptions, text: string }[];
}

export interface SmartScoreRule
{
	id: number,
	airtableRecordId: string,
	airtableScorecardId: string,
	name: string,
	sectionCode: SmartscoreSectionCode,
	certificationType: CertificationType,
	criteriaCredits: number,
	functionality: UFStatusOptions,
	tenantEnablement: TenantEnabledOptions,
	awardedCredits: number,
}

export interface SaveSmartScoringCriteria
{
	certificationScoringId: number,
	certificationId: number,
	certificationAwardedScore: number,
	certificationAwardedLevel: CertificationLevel,
	certificationTargetScore: number,
	certificationTargetLevel: CertificationLevel,
	criteriaId: number,
	targetStatus: UFStatusOptions | TFStatusOptions | InnovationStatusOptions,
	targetTenantEnabled: TenantEnabledOptions,
	targetCredits: number,
	achievedStatus: UFStatusOptions | TFStatusOptions | InnovationStatusOptions,
	achievedTenantEnabled: TenantEnabledOptions,
	achievedCredits: number,
	evidences: string[],
	nextSteps: string,
	auditorNotes: string,
	internalComments: string,
}