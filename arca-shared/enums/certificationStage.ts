export enum CertificationStage
{
  /** Admin assigns with only Ops Engineer */
  'OPS_ASSIGNED' = 'OPS_ASSIGNED',

  /** CSM user clicks 'I have sent Welcome Email to Client' button */
  'WELCOME_EMAIL_SENT' = 'WELCOME_EMAIL_SENT',

  /** CSM clicks 'Client Kickoff Call Scheduled' */
  'CLIENT_KICKOFF_CALL_SCHEDULED' = 'CLIENT_KICKOFF_CALL_SCHEDULED',

  /** CSM clicks 'Client Technical Kickoff Completed' */
  'KICKOFF_CALL_COMPLETED' = 'KICKOFF_CALL_COMPLETED',

  /** Ops Engineer clicks 'Ops Intro Sent' */
  'OPS_INTRO_SENT' = 'OPS_INTRO_SENT',

  /** Ops clicks 'Client Workshop Scheduled' */
  'INITIAL_WORKSHOP_SCHEDULED' = 'INITIAL_WORKSHOP_SCHEDULED',

  /** Ops confirms the first client workshop took place */
  'INITIAL_WORKSHOP_COMPLETED' = 'INITIAL_WORKSHOP_COMPLETED',

  /** When CSM user or OPS Engineer saves Technical Contact */
  'TECHNICAL_CONTACT_ADDED' = 'TECHNICAL_CONTACT_ADDED',

  /** After CSM/Ops user or OPS Engineer clicks Technical Kickoff Scheduled */
  'TECHNICAL_KICKOFF_SCHEDULED' = 'TECHNICAL_KICKOFF_SCHEDULED', // NEW

  /** admin assigns with both ops user and survey engineer */
  'SURVEY_ENGINEER_ASSIGNED' = 'SURVEY_ENGINEER_ASSIGNED',

  /** survey engineer’s action checks in ? */
  'SURVEY_ENGINEER_CHECKIN' = 'SURVEY_ENGINEER_CHECKIN',

  /** WILL GO TO OPS once survey engineer checks out */
  'SURVEY_ENGINEER_CHECKOUT' = 'SURVEY_ENGINEER_CHECKOUT',

  /**  ops owner clicked Review survey and approved */
  'SURVEY_REVIEW_APPROVED' = 'SURVEY_REVIEW_APPROVED',

  /** 
  * After Survey Approval , Card will be displayed as 'Survey Recently Completed (Set As Working Button)'
  * Then on clicking 'Set As Working' [STATE CHANGE ON SET AS BUTTON] to 'TECHNICAL_CONTACT_ADDED' and ops_working = true;
  */

  /** When Kickoff is completed by clicking 'Kickoff Complete' Button */
  'KICKOFF_COMPLETED' = 'KICKOFF_COMPLETED',

  /** Only for SmartScore */
  'INITIAL_STATUS_REPORT_COMPLETED' = 'INITIAL_STATUS_REPORT_COMPLETED',

  /** Only for SmartScore */
  'INITIAL_STATUS_REPORT_SENT' = 'INITIAL_STATUS_REPORT_SENT',

  /** Only for SmartScore */
  'UPDATED_DOCUMENTATION_RECEIVED' = 'UPDATED_DOCUMENTATION_RECEIVED',

  /** Only for SmartScore */
  'STATUS_REPORT_UPDATED' = 'STATUS_REPORT_UPDATED',

  /** Only for SmartScore */
  'STATUS_REPORT_SENT' = 'STATUS_REPORT_SENT',

  /** Ops user clicks on 'Start Report' Button */
  'SCORING_IN_PROGRESS' = 'SCORING_IN_PROGRESS',

  /** Ops User has checked at least one criteria */
  'SCORING_CRITERIA_CHECKED' = 'SCORING_CRITERIA_CHECKED',

  /** Occupied , When Building Report is Completed */
  'BUILDING_REPORT_COMPLETED' = 'BUILDING_REPORT_COMPLETED',

  /** when ops 1 asks for peer review to ops 2 from 'Scoring' Screen */
  'WAITING_FOR_PEER_REVIEW' = 'WAITING_FOR_PEER_REVIEW',

  /** Peer Reviewer Denied */
  'PEER_REVIEW_DENIED' = 'PEER_REVIEW_DENIED',

  /**
  * After Peer Review Denial the card will go through the full cycle again, next state will be 'SCORING_IN_PROGRESS'
  */

  /** Peer Review Approved, card automatically goes to CSM for Review */
  'WAITING_FOR_CSM_REVIEW' = 'WAITING_FOR_CSM_REVIEW',

  /** CSM clicks 'Yes' after downloading Builidng Report from Scoring Screen
   *  OR
   * My Work 'Building Report Sent to Client' Button */
  'BUILDING_REPORT_SENT' = 'BUILDING_REPORT_SENT',

  /** CSM user Denied */
  'CSM_REVIEW_DENIED' = 'CSM_REVIEW_DENIED',

  /**
  * After CSM Review Denial the card will go through the full cycle again, next state will be 'SCORING_IN_PROGRESS'
  */

  /** Occupied , When Ops Changes Scoring After CS User Denies Report */
  'IMPROVEMENT_WITH_OPS' = 'IMPROVEMENT_WITH_OPS',

  /** Occupied , When Ops Completes Scoring After Improvement With Ops */
  'BUILDING_REPORT_UPDATED' = 'BUILDING_REPORT_UPDATED',

  /** Click 'Client Approved Certification Package' Button from My Work Screen or Scoring Screen  */
  'APPROVED_FOR_CERTIFICATION_PACKAGE' = 'APPROVED_FOR_CERTIFICATION_PACKAGE',

  /** Click 'Download Client Deliverables' Button */
  'CERTIFICATION_PACKAGE_CREATED' = 'CERTIFICATION_PACKAGE_CREATED',

  /** Click 'Final Deliverables Sent to Client' Button */
  'CERTIFICATION_LIVE' = 'CERTIFICATION_LIVE',

  /** When A Certification gets cancelled or its not operatable from ARCA */
  'CANCELLED' = 'CANCELLED',

  /** When A Certification is not recognized in ARCA */
  'UNKNOWN' = 'UNKNOWN'
}