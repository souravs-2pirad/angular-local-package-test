import { AccreditationStatusEnum, AmStage, AssetClass, BDStage, CertificationStage, CertificationType, CsmStage, DeliveryApproach, DevelopmentAmStages, DevelopmentCsmStages, OccupiedAmStages, OccupiedCsmStages, ProductType, SfdcType } from "../enums";

export class ApCertificationDto
{
	id: number = null;
	sfdcId: string = null;
	sfdcLeadId: string = null;
	scorecardId: number = null;
	sfdcName: string = null;
	buildingName: string = null;
	productType: ProductType = null;
	certificationType: CertificationType = null;
	sfdcType: SfdcType = null;
	assetType: AssetClass = null;
	clientCompanyName: string = null;
	submissionDate: number = null;
	expectedPSCompletionDate: number = null;
	currentStatus: CertificationStage = null;
	amStage: AmStage = null;
	csmStage: CsmStage = null;
	bdStage: BDStage = null;
	apStartedWorkingDate: number = null;
	apCompletedWorkingDate: number = null;
	postKickoffDocsDate: number = null;
	isArchived: boolean = null;
	accreditationId: number = null;
	accreditationStatus: AccreditationStatusEnum = null;
	accreditationComputedStatus: AccreditationStatusEnum = null;
	accreditationExpiryDate: number = null;
	updatedOn: number = null;
	deliveryApproach: DeliveryApproach = null;
}