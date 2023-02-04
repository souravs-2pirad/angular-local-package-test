import { NotificationEventType, NotificationObjectType } from "../enums";
import { copyProperties } from "../utils";

export enum NotificationActions
{
	notificationUpdateFromUi = 'notificationUpdateFromUi',
	notificationInsertFromUi = 'notificationInsertFromUi',
	notifyFromApi = 'notifyFromApi',
}

export enum NotificationSender
{
	arcaUi = 'arcaUi',
	arcaApi = 'arcaApi',
}

export interface UpdateNotificationDto
{
	uuid: string,
	createdTime: number,
	isRead: boolean,
	isSuccess?: boolean,
}

export class UpdateCertificationNotificationDto
{
	id: number = null;
	sfdcId: string = null;
	currentStatus: string = null;
	sfdcCSMStage: string = null;
	sfdcAccountManagementStage: string = null;
	apCognitoId: string = null;

	constructor(source?: any)
	{
		copyProperties(source, this);
	}
}

export class RemoveCertificationNotificationDto
{
	id: number = null;
	sfdcId: string = null;
	apCognitoId: string = null;

	constructor(source?: any)
	{
		copyProperties(source, this);
	}
}

export class NotificationDto
{
	uuid?: string; // unique id of notification object
	createdTime?: number;
	recipient: string; // cognito id of ap user
	eventType: NotificationEventType;
	objectType: NotificationObjectType;
	object: string; // AccreditationDto | LeadListDto | ApCertificationDto | UpdateCertificationNotificationDto | RemoveCertificationNotificationDto;
	isRead?: boolean = false; // user read the notification or not
	ttl?: number; // time after which notification will be deleted
	isSuccess?: boolean
}

export interface NewNotificationPayload
{
	action: NotificationActions.notifyFromApi,
	sender: NotificationSender.arcaApi,
	recipient: string, // email or cognitoUserId
	data: NotificationDto,
}

export interface NewUiNotificationPayload
{
	action: NotificationActions.notificationInsertFromUi,
	sender: NotificationSender.arcaUi,
	recipient: string, // email or cognitoUserId
	data: NotificationDto,
}

export interface UpdateNotificationsPayload
{
	action: NotificationActions.notificationUpdateFromUi,
	sender: NotificationSender.arcaUi,
	recipient: string, // email or cognitoUserId
	data: UpdateNotificationDto,
}

/**
 * @example
 * 
 * {
 * 	action: 'notificationUpdateFromUi' | 'notificationInsertFromUi' | 'notifyFromApi',
 * 	sender: 'arcaUi' | 'arcaApi'
 * 	recipient: string,
 * 	data: NotificationDto | NotificationDto[] | UpdateNotificationDto
 * }
 */
export type NotificationPayload = NewNotificationPayload | UpdateNotificationsPayload | NewUiNotificationPayload;