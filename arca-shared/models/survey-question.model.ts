import { AssetClass, BlockType, CertificationType, Language, ProductType, QuestionType, SubAssetClass, SurveyAppCountry } from '../enums';

export interface SurveyQuestion
{
	block: BlockType,
	id: string,
	isEnabled: boolean,
	sortingOrder: number,
	question: string,
	questionType: QuestionType,
	potentialAnswers: string[],
	possibleUnits: string[],
	criteriaCode: string[],
	isMandatory: boolean,
	isNotesMandatory: boolean,
	isPhotoMandatory: boolean,
	defaultAnswer: string | string[],
	parentQuestionId: string,
	parentAnswerTrigger: string | string[],
	displayOnTrigger: boolean,
	productType: (ProductType | 'all')[],
	certificationType: (CertificationType | 'all')[],
	assetClass: (AssetClass | 'all')[],
	subAssetClass: (SubAssetClass | 'all')[],
	country: (SurveyAppCountry | 'all')[],
	language: (Language | 'all')[],
	version: (string | 'all')[],
}