import { AccreditationStageEnum, AccreditationStatusEnum, AssetClass, CertificationType, ProductType } from "../enums";
import { copyProperties } from "../utils/copyProperties";

export class AccreditationDto
{
	id: number = null;
	productType: ProductType = null;
	assetType: AssetClass = null;
	certificationType: CertificationType = null;
	sfdcId: string = null;
	sfdcContactId: string = null;
	apCognitoId: string = null;
	code: string = null;
	stage: AccreditationStageEnum = null;
	status: AccreditationStatusEnum = null;
	computedStatus: AccreditationStatusEnum = null;
	expiryDate: number = null;
	programName: string = null;
	language: string = null;
	country: string = null;
	createdBy: string = null;
	createdOn: number = null;
	updatedBy: string = null;
	updatedOn: number = null;

	constructor(source?: any)
	{
		copyProperties(source, this);
	}
}