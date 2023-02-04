import { ApplicationLanguage, LevelType, QuestionType } from '../enums';

// Common type for storing photos
export interface Photo
{
	fileName: string,
	mimeType: string,
	thumbnailBlobUrl?: string,
	ui_isSaved?: boolean,
	webUrl?: string,
	webThumbnailUrl?: string,
	// Size of the image in bytes
	size?: number,
}

// Survey Questions & Answers
export interface SurveyQuestionAnswer
{
	questionId: string,
	criteriaCode: string[] | null,
	language?: ApplicationLanguage | 'en',
	questionText: string,
	answer: string | null | string[],
	unit: string,
	notes: string,
	photos: Photo[],
	ui_questionType?: QuestionType,
	ui_potentialAnswers?: any[] | null,
	ui_possibleUnits?: string[] | null,
	ui_isAnswerRequired?: boolean,
	ui_isNotesRequired?: boolean,
	ui_displayNote?: boolean,
	ui_isPhotosRequired?: boolean,
	defaultAnswer?: string | null | string[],
	parentQuestionId: string | null,
	parentAnswerTrigger: string | null | string[],
	displayOnTrigger: boolean | null,
	ui_isVisible: boolean,
	ui_isEnabled?: boolean,
	sortingOrder: number,
}

export interface DropdownOption
{
	id: string,
	name: string,
}

// Basic fields required for every survey block
export interface CommonBuildingBlock
{
	id: number,
	name?: string,
	notes?: string,
	photos: Photo[],
	questionAnswers: SurveyQuestionAnswer[],
	ui_isPhotosRequired?: boolean,
	ui_isNotesRequired?: boolean,
	ui_isCollapsed?: boolean,
	ui_displayNote?: boolean,
	ui_isCompleted?: boolean,
}

export type RiserParent = {
	id: number,
	notes?: string,
	photos: Photo[],
	questionAnswers: SurveyQuestionAnswer[],
	ui_isPhotosRequired?: boolean,
	ui_isNotesRequired?: boolean,
	ui_isCollapsed?: boolean,
	ui_displayNote?: boolean,
	ui_isCompleted?: boolean,
};

export interface GlobalRiser
{
	id: number,
	name: string,
}

// ISP Information
export interface Isp extends CommonBuildingBlock { }

export interface InternetProvider extends CommonBuildingBlock { }

export interface IspChambers extends CommonBuildingBlock
{
	chambers: Isp[],
}

export interface Pathway extends CommonBuildingBlock { }

export interface Poe extends CommonBuildingBlock
{
	isps: Isp[],
	pathways?: Pathway[],
}

export interface Room extends CommonBuildingBlock
{
	isps: Isp[],
	pathways?: Pathway[],
}

export interface Unit extends CommonBuildingBlock
{
	internetProviders: InternetProvider[],
}

export interface Riser extends RiserParent
{
	presentOnFloor: boolean,
	isps: Isp[],
}

export type Block = Isp | InternetProvider | IspChambers | Pathway | Poe | Room | Riser | Unit;

export interface CommonFloor
{
	type: LevelType,
	id: number,
	ui_isCompleted?: boolean,
	accessible: boolean,
	notes: string,
	ui_displayNote?: boolean,
	photos: Photo[],
	pathways?: Pathway[],
	poes: Poe[],
	rooms: Room[],
	risers: Riser[],
	units?: Unit[],
}

export interface Basement extends CommonFloor { }

export interface Floor extends CommonFloor { }

export interface Roof extends CommonFloor
{
	general: CommonBuildingBlock,
}

export interface BuildingWide
{
	ui_isCompleted?: boolean,
	wifi: CommonBuildingBlock,
	backupPower?: CommonBuildingBlock,
	mobileCellular: CommonBuildingBlock,
	smartInnovation?: CommonBuildingBlock,
	bms: CommonBuildingBlock,
	fiberBackbone: CommonBuildingBlock,
	units?: CommonBuildingBlock,
}

export interface Exterior
{
	ui_isCompleted?: boolean,
	ispChambers: IspChambers,
	general: CommonBuildingBlock,
	aerialEntries: CommonBuildingBlock,
}

export interface IspProvider
{
	providerName: string;
	transmissionMedium: string;
	intakeLocations: string[];
	equipmentLocation: string[];
	riserPresent: string[];
	fullDistribution: string | null;
	providerNote?: string | null;
}

export interface UiActiveBlock
{
	levelType: string | null,
	arrayIndex: number | null,
}

export interface SurveyData
{
	ui_activeBlock: UiActiveBlock,
	exterior: Exterior,
	buildingWide: BuildingWide,
	ispList: string[],
	mobileCarriersList: string[],
	internetProvidersList?: string[],
	basements: Basement[],
	floors: Floor[],
	roofs: Roof[],
	globalPoeIndex: number,
	globalRoomIndex: number,
	globalPathwayIndex: number,
	globalUnitIndex?: number,
	globalRisers: GlobalRiser[],
	providerNote: string,
	providers: IspProvider[],
}