import { AssetClass, CertificationType, Country, LeadStatus, ProductType, Refurbished, SubAssetClass, UoM } from "../enums";

import { copyProperties } from "../utils/copyProperties";

export class LeadDto
{
	id: number = null;
	sfdcLeadId: string = null;
	apCognitoId: string = null;
	status: LeadStatus = null;
	type: string = null;
	source: string = null;
	isArchived: boolean = null;
	buildingName: string = null;
	productType: ProductType = null;
	certificationType: CertificationType = null;
	assetType: AssetClass = null;
	subAssetType: SubAssetClass = null;
	refurbished: Refurbished = null;
	clientCompany: string = null;
	buildingSize: number = null;
	uoM: UoM = null;
	expectedContractSignedDate: number = null;
	submittedDate: number = null;
	expectedPSCompletionDate: number = null;
	street: string = null;
	city: string = null;
	state: string = null;
	postalCode: string = null;
	country: Country = null;
	otherInformation: string = null;
	createdOn: number = null;
	createdBy: string = null;
	updatedBy: string = null;
	updatedOn: number = null;

	constructor(source?: any)
	{
		copyProperties(source, this);
	}
}

export class CreateLeadDto
{
	apEmail: string = null;
	apName: string = null;
	apPhone: string = null;
	apSfdcContactId: string = null;
	apCognitoId: string = null;
	buildingName: string = null;
	productType: ProductType = null;
	certificationType: CertificationType = null;
	assetType: AssetClass = null;
	subAssetType: SubAssetClass = null;
	refurbished: Refurbished = null;
	clientCompany: string = null;
	buildingSize: number = null;
	uoM: UoM = null;
	expectedContractSignedDate: number = null;
	submittedDate: number = null;
	expectedPSCompletionDate: number = null;
	street: string = null;
	city: string = null;
	state: string = null;
	postalCode: string = null;
	country: Country = null;
	otherInformation: string = null;

	constructor(source?: any)
	{
		copyProperties(source, this);
	}
}

export class LeadListDto
{
	id: number = null;
	sfdcLeadId: string = null;
	status: LeadStatus = null;
	deadReason: string = null;
	buildingName: string = null;
	productType: ProductType = null;
	certificationType: CertificationType = null;
	assetType: AssetClass = null;
	subAssetType: SubAssetClass = null;
	submittedDate: number = null;
	expectedPSCompletionDate: number = null;
	clientCompany: string = null;
	isArchived: boolean = null;
	opportunityId: string = null;
	updatedOn: number = null;

	constructor(source?: any)
	{
		copyProperties(source, this);
	}
}