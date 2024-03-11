/**
 * 本文件通过脚本生成，请勿直接修改内部内容
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EDCNetworkService } from '@bank/domain-core';
import {EDC_Service_Application_Dto_Page_AuditingTrajectoryGetOutput,EDC_Service_Application_Dto_Page_AuditingTrajectoryHeaderGetOutput,EDC_Service_Application_Dto_CodeSet_CodeSystemItem,EDC_Service_Application_Dto_Page_GetCrfPageDataBindVariableValueOutput,EDC_Service_Application_Dto_Page_GetHasConfirmOutput,EDC_Service_Application_Dto_Page_GetConfirmItemsOutput,RealData_Common_Contract_Common_Result,EDC_Service_Application_Dto_Page_CrfItemGetOutput,EDC_Service_Application_Dto_Page_CrfPageOutput,EDC_Service_Application_Dto_Page_CrfPageTiledOutput,EDC_Service_Application_Dto_Page_CheckNameOutput,EDC_Service_Application_Dto_Page_GetCrfDataPageOutput,EDC_Service_Application_Dto_Page_GetCrfPageDataSubjectOutput,EDC_Service_Application_Dto_Page_CreateCrfDataOutput,EDC_Service_Application_Dto_Page_CrfPageDataFillOutput,EDC_Service_Application_Dto_Page_GetStudySubjectInfoOutput,EDC_Service_Application_Dto_Page_GetCrfPageDataTermValueOutput,EDC_Service_Application_Dto_Page_CrfPageTempleOutput,EDC_Service_Application_Dto_Emr_Output_GetPagedPatientEncounterOutput,EDC_Service_Application_Dto_Emr_Output_GetPatientMenuRecordOutput,Common_Contract_EDC_FollowUp_GetFollowUpMessageTemplatesOutput,EDC_Service_Application_Dto_Home_HomeStudyInfoOutput,EDC_Service_Application_Dto_Home_HomeStudySummaryOutput,EDC_Service_Application_Dto_Home_HomeStudyCalenderOutput,EDC_Service_Application_Dto_Home_HomeStudyVariablesOutput,EDC_Service_Application_Dto_Home_FollowVariable,EDC_Service_Application_Dto_Home_HomeStudyScatterOutput,EDC_Service_Application_Dto_Home_HomeStudyVariableDetialOutput,EDC_Service_Application_Dto_Permission_PermissionOutput,EDC_Service_Application_Dto_QueryNote_Output_GetQueryNoteEventListDistinctOutput,EDC_Service_Application_Dto_QueryNote_Output_QueryNoteEventOutput,EDC_Service_Application_Dto_QueryNote_Output_UpdateQueryNoteEventsStateOutput,EDC_Service_Application_Dto_QueryNote_Output_GetItemQueryNoteEventsOutput,EDC_Service_Application_Dto_QueryNote_Output_QueryNoteEventSingleOutput,EDC_Service_Application_Dto_QueryNote_Output_GetQueryNoteEventMsgsOutput,EDC_Service_Application_Dto_QueryNote_Output_GetPageDataItemsQueryNoteStatesOutput,EDC_Service_Application_Dto_Rule_Output_ListRuleOutput,EDC_Service_Application_Dto_Rule_Output_CreateRuleOutput,EDC_Service_Application_Dto_Rule_Output_DelRuleOutput,EDC_Service_Application_Dto_Rule_Output_UpdateRuleOutput,EDC_Service_Application_Dto_Site_Output_CreateStudySiteOutput,EDC_Service_Application_Dto_Site_Output_StudySiteOutput,Common_Contract_EDC_StudyCrfVariableTree_GetCrfNodesLevelsOutput,Common_Contract_EDC_StudyCrfVariableTree_CrfNodeVariableInfo,Common_Contract_EDC_StudyCrfVariableTree_GetCrfNodeVariableTreeOutput,Common_Contract_EDC_StudyCrfVariableTree_GetCrfNodeVariablesCountOutput,Common_Contract_EDC_StudyCrfVariableTree_SearchCrfNodeOutput,EDC_Service_Application_Dto_Study_Output_CreateStudyOutput,EDC_Service_Application_Dto_Study_Output_StudyOutput,EDC_Service_Application_Dto_Study_Output_CreateConditionOutput,EDC_Service_Application_Dto_Study_GetQueryConditionOutput,EDC_Service_Application_Dto_Study_ViewQueryConditionOutput,Common_Contract_IR_Query_GetQueryTaskOutput,EDC_Service_Application_Dto_Study_Output_StudyFollowVariableOutput,EDC_Service_Application_Dto_Study_VariableChangeHistoryOutput,EDC_Service_Application_Dto_Study_Output_GetStudyOutput,EDC_Service_Application_Dto_Study_Output_GetFollowStudyOutput,EDC_Service_Application_Dto_Study_Output_StudyQueryStatusOutput,Common_Contract_EDC_EventGroup_GetEventGroupsOutput,Common_Contract_Search_EventGroup_CreateOrUpdateEventGroupOutput,Common_Contract_Search_EventGroup_GetEventGroupOutput,Common_Contract_EDC_FollowUp_GetStrategyExaminationsOutput,Common_Contract_EDC_FollowUp_GetStrategyExaminationInfoOutput,Common_Contract_EDC_FollowUp_GetBaseLineVariablesOutput,Common_Contract_EDC_FollowUp_GetStrategyEventsOutput,System_String,Common_Contract_EDC_FollowUp_GetFollowUpSubjectsOutput,Common_Contract_EDC_FollowUp_GetFollowUpSubjectSummaryOutput,Common_Contract_EDC_FollowUp_GetFollowUpSubjectCrfsOutput,Common_Contract_GetSubjectFollowUpAdvisoriesOutput,Common_Contract_GetSubjectFollowUpEmrsOutput,EDC_Service_Application_Dto_StudyGroup_Output_CreateStudyGroupOutput,EDC_Service_Application_Dto_StudyGroup_Output_StudyGroupOutput,EDC_Service_Application_Dto_StudyGroup_Output_AddingSubjectsGroupOutput,EDC_Service_Application_Dto_RandomRule_Output_StudySubjectTotalOutput,EDC_Service_Application_Dto_RandomRule_Output_StudyRandomRuleOutput,EDC_Service_Application_Dto_RandomRule_Output_StudyRandomGroupingVerifyOutput,EDC_Service_Application_Dto_StudyLabel_Output_CreateStudyLabelOutput,EDC_Service_Application_Dto_StudyLabel_StudyLabelOutput,Common_Contract_EDC_ObservationIndicator_GetObservationIndicatorsOutput,EDC_Service_Application_Dto_StudySubject_Output_StudySubjectItemsOutput,EDC_Service_Application_Dto_StudySubject_Output_GetHeaderValuesDistinctOutput,Common_Contract_IR_Result_QueryVariableResultOutput,Common_Contract_IR_Result_QueryResultRawPopOutput,EDC_Service_Application_Dto_StudySubject_Output_AddingSubjectStudyOutput} from './typings';

@Injectable({ providedIn: 'root' })
export class EdcAPIService {
 constructor(private edcNetworkService: EDCNetworkService) {}


/**

* @param {number} StudyId 
* @param {string} UniqueCode 
* @param {number} CrfPageDataId 
* @param {number} DataIndex 
* @param {number} PageSize 
* @param {number} PageIndex 
*/
public Getaudittrails (    StudyId?: number,
    UniqueCode?: string,
    CrfPageDataId?: number,
    DataIndex?: number,
    PageSize?: number,
    PageIndex?: number,
   ): Observable<EDC_Service_Application_Dto_Page_AuditingTrajectoryGetOutput> {
      return this.edcNetworkService.get(`/audittrails?StudyId=${StudyId}&UniqueCode=${UniqueCode}&CrfPageDataId=${CrfPageDataId}&DataIndex=${DataIndex}&PageSize=${PageSize}&PageIndex=${PageIndex}`);
    }
    // 获取表头信息
public GetaudittrailsHeaders ( ): Observable<EDC_Service_Application_Dto_Page_AuditingTrajectoryHeaderGetOutput> {
      return this.edcNetworkService.get(`/audittrails/headers`);
    }

/**

* @param {string} Query  - getsOrSetsTheQuery
* @param {number} PageIndex  - pageIndex
* @param {number} PageSize 
*/
public GetcodeQuery (    Query?: string,
    PageIndex?: number,
    PageSize?: number,
   ): Observable<EDC_Service_Application_Dto_CodeSet_CodeSystemItem> {
      return this.edcNetworkService.get(`/code/query?Query=${Query}&PageIndex=${PageIndex}&PageSize=${PageSize}`);
    }

/**
* 控件绑定的变量确认的数据
* @param {number} ItemId 
* @param {number} StudySubjectId 
*/
public GetdataBindVariableValues (    ItemId?: number,
    StudySubjectId?: number,
   ): Observable<EDC_Service_Application_Dto_Page_GetCrfPageDataBindVariableValueOutput> {
      return this.edcNetworkService.get(`/data/bind-variable-values?ItemId=${ItemId}&StudySubjectId=${StudySubjectId}`);
    }

/**
* 获取是否有需要确认表单的数据
* @param {number} studyId 
*/
public GetdataHasConfirms (    studyId?: number,
   ): Observable<EDC_Service_Application_Dto_Page_GetHasConfirmOutput> {
      return this.edcNetworkService.get(`/data/has-confirms?studyId=${studyId}`);
    }

/**
* 获取患者当前表单中需要确认的控件数据信息接口
* @param {number} CrfPageDataId 
*/
public GetdataConfirmItems (    CrfPageDataId?: number,
   ): Observable<EDC_Service_Application_Dto_Page_GetConfirmItemsOutput> {
      return this.edcNetworkService.get(`/data/confirm-items?CrfPageDataId=${CrfPageDataId}`);
    }

/**
* 自动填充，定时任务调用的接口
* @param {number} studyId  - 课题id
*/
public GetdataAutoFilldata (    studyId?: number,
   ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.get(`/data/auto-filldata?studyId=${studyId}`);
    }

/**
* 获取表单控件内容
* @param {number} StudyId  - 课题id
* @param {number} CrfPageId  - 表单id
*/
public GetcrfItem (    StudyId?: number,
    CrfPageId?: number,
   ): Observable<EDC_Service_Application_Dto_Page_CrfItemGetOutput> {
      return this.edcNetworkService.get(`/crf-item?StudyId=${StudyId}&CrfPageId=${CrfPageId}`);
    }
    // 更新表单控件
public PostcrfItemSave (  params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.post(`/crf-item/save`, params);
    }
    // 添加表单
public PostcrfPage (  params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.post(`/crf-page`, params);
    }

/**
* 删除表单
* @param {number} id 
*/
public DeletecrfPageId (    id: number,
   ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.delete(`/crf-page/${id}`);
    }

/**
* 获取单个
* @param {number} id 
*/
public GetcrfPageId (    id: number,
   ): Observable<EDC_Service_Application_Dto_Page_CrfPageOutput> {
      return this.edcNetworkService.get(`/crf-page/${id}`);
    }

/**
* 更新表单
* @param {number} id 
*/
public PutcrfPageId (    id: number,
    params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.put(`/crf-page/${id}`, params);
    }

/**
* 获取表单树形结构
* @param {number} StudyId 
* @param {string} KeyWord 
*/
public GetcrfPageList (    StudyId?: number,
    KeyWord?: string,
   ): Observable<EDC_Service_Application_Dto_Page_CrfPageOutput> {
      return this.edcNetworkService.get(`/crf-page/list?StudyId=${StudyId}&KeyWord=${KeyWord}`);
    }

/**
* 获取表单平铺结构
* @param {number} StudyId 
* @param {string} KeyWord 
*/
public GetcrfPageTiled (    StudyId?: number,
    KeyWord?: string,
   ): Observable<EDC_Service_Application_Dto_Page_CrfPageTiledOutput> {
      return this.edcNetworkService.get(`/crf-page/tiled?StudyId=${StudyId}&KeyWord=${KeyWord}`);
    }

/**
* 校验名称
* @param {string} name 
* @param {number} studyId 
* @param {number} crfPageId 
*/
public GetcrfPageName (    name?: string,
    studyId?: number,
    crfPageId?: number,
   ): Observable<EDC_Service_Application_Dto_Page_CheckNameOutput> {
      return this.edcNetworkService.get(`/crf-page/name?name=${name}&studyId=${studyId}&crfPageId=${crfPageId}`);
    }

/**
* 获取当前患者需要录入的表单
* @param {number} StudyId 
* @param {number} StudySubjectId 
* @param {*} Type  - 0All1FllowUp
*/
public GetdataCrfPages (    StudyId?: number,
    StudySubjectId?: number,
    Type?: any,
   ): Observable<EDC_Service_Application_Dto_Page_GetCrfDataPageOutput> {
      return this.edcNetworkService.get(`/data/crf-pages?StudyId=${StudyId}&StudySubjectId=${StudySubjectId}&Type=${Type}`);
    }

/**
* 获取当前患者需要录入的表单
* @param {number} crfPageId 
* @param {number} StudyId 
* @param {number} StudySubjectId 
* @param {*} Type  - 0All1FllowUp
* @param {number} levelId 
*/
public GetdataCrfPagesCrfPageId (    crfPageId: number,
    StudyId?: number,
    StudySubjectId?: number,
    Type?: any,
    levelId?: number,
   ): Observable<EDC_Service_Application_Dto_Page_GetCrfDataPageOutput> {
      return this.edcNetworkService.get(`/data/crf-pages/${crfPageId}?StudyId=${StudyId}&StudySubjectId=${StudySubjectId}&Type=${Type}&levelId=${levelId}`);
    }

/**
* 获取患者已经填充完成的数据
* @param {number} LeveId 
* @param {number} StudyId 
* @param {number} StudySubjectId 
* @param {*} LevelType  - 0All1FllowUp
* @param {number} CrfPageId 
*/
public GetdataSubjectDatas (    LeveId?: number,
    StudyId?: number,
    StudySubjectId?: number,
    LevelType?: any,
    CrfPageId?: number,
   ): Observable<EDC_Service_Application_Dto_Page_GetCrfPageDataSubjectOutput> {
      return this.edcNetworkService.get(`/data/subject-datas?LeveId=${LeveId}&StudyId=${StudyId}&StudySubjectId=${StudySubjectId}&LevelType=${LevelType}&CrfPageId=${CrfPageId}`);
    }
    // 创建一个表单空数据
public PostdataCreate (  params? ): Observable<EDC_Service_Application_Dto_Page_CreateCrfDataOutput> {
      return this.edcNetworkService.post(`/data/create`, params);
    }

/**
* 删除单个表单数据
* @param {[]} dataIds 
*/
public DeletedataDeletedatabulk (    dataIds?: [],
   ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.delete(`/data/deletedatabulk?dataIds=${dataIds}`);
    }
    // 填充表单数据
public PostdataFilldata (  params? ): Observable<EDC_Service_Application_Dto_Page_CrfPageDataFillOutput> {
      return this.edcNetworkService.post(`/data/filldata`, params);
    }

/**
* 获取表单录入患者基本信息
* @param {number} StudySubjectId 
*/
public GetdataSubjectInfo (    StudySubjectId?: number,
   ): Observable<EDC_Service_Application_Dto_Page_GetStudySubjectInfoOutput> {
      return this.edcNetworkService.get(`/data/subject-info?StudySubjectId=${StudySubjectId}`);
    }

/**
* 术语录入获取归一化术语
* @param {*} TermType  - 0None1Cf2Lab3Drg4Operation
* @param {string} Value 
*/
public GetdataTerm (    TermType?: any,
    Value?: string,
   ): Observable<EDC_Service_Application_Dto_Page_GetCrfPageDataTermValueOutput> {
      return this.edcNetworkService.get(`/data/term?TermType=${TermType}&Value=${Value}`);
    }
    // 添加模板
public PostcrfPageTemplate (  params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.post(`/crf-page-template`, params);
    }

/**
* 删除模板
* @param {number} id 
*/
public DeletecrfPageTemplateId (    id: number,
   ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.delete(`/crf-page-template/${id}`);
    }

/**
* 获取单个
* @param {number} id 
*/
public GetcrfPageTemplateId (    id: number,
   ): Observable<EDC_Service_Application_Dto_Page_CrfPageTempleOutput> {
      return this.edcNetworkService.get(`/crf-page-template/${id}`);
    }

/**
* 更新模板
* @param {number} id 
*/
public PutcrfPageTemplateId (    id: number,
    params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.put(`/crf-page-template/${id}`, params);
    }

/**
* 引用模板
* @param {number} id 
*/
public GetcrfPageTemplateIdItems (    id: number,
   ): Observable<EDC_Service_Application_Dto_Page_CrfItemGetOutput> {
      return this.edcNetworkService.get(`/crf-page-template/${id}/items`);
    }

/**
* 获取模板
* @param {string} KeyWord 
*/
public GetcrfPageTemplateList (    KeyWord?: string,
   ): Observable<EDC_Service_Application_Dto_Page_CrfPageTempleOutput> {
      return this.edcNetworkService.get(`/crf-page-template/list?KeyWord=${KeyWord}`);
    }

/**
* 校验名称
* @param {string} name 
* @param {number} templateId 
*/
public GetcrfPageTemplateName (    name?: string,
    templateId?: number,
   ): Observable<EDC_Service_Application_Dto_Page_CheckNameOutput> {
      return this.edcNetworkService.get(`/crf-page-template/name?name=${name}&templateId=${templateId}`);
    }

/**
* 用户病历模块
* @param {number} studyId 
* @param {number} studySubjectId 
* @param {string} KeyWord 
* @param {number} pageSize 
* @param {number} pageIndex 
*/
public GetemrRecords (    studyId?: number,
    studySubjectId?: number,
    KeyWord?: string,
    pageSize?: number,
    pageIndex?: number,
   ): Observable<EDC_Service_Application_Dto_Emr_Output_GetPagedPatientEncounterOutput> {
      return this.edcNetworkService.get(`/emr/records?studyId=${studyId}&studySubjectId=${studySubjectId}&KeyWord=${KeyWord}&pageSize=${pageSize}&pageIndex=${pageIndex}`);
    }

/**
* out门诊急诊目录及报告信息
* @param {number} patientId 
* @param {number} visitId 
*/
public GetemrOutpatemrMenurecord (    patientId?: number,
    visitId?: number,
   ): Observable<EDC_Service_Application_Dto_Emr_Output_GetPatientMenuRecordOutput> {
      return this.edcNetworkService.get(`/emr/outpatemr-menurecord?patientId=${patientId}&visitId=${visitId}`);
    }

/**
* in住院目录及报告信息
* @param {number} patientId 
* @param {number} visitId 
*/
public GetemrInpatemrMenurecord (    patientId?: number,
    visitId?: number,
   ): Observable<EDC_Service_Application_Dto_Emr_Output_GetPatientMenuRecordOutput> {
      return this.edcNetworkService.get(`/emr/inpatemr-menurecord?patientId=${patientId}&visitId=${visitId}`);
    }
    // 获取随访消息模板
public GetfollowUpMessageTemplates ( ): Observable<Common_Contract_EDC_FollowUp_GetFollowUpMessageTemplatesOutput> {
      return this.edcNetworkService.get(`/follow-up/message/templates`);
    }
    // 新建消息模板
public PostfollowUpMessageTemplates (  params? ): Observable<any> {
      return this.edcNetworkService.post(`/follow-up/message/templates`, params);
    }
    // 修改消息模板
public PutfollowUpMessageTemplates (  params? ): Observable<any> {
      return this.edcNetworkService.put(`/follow-up/message/templates`, params);
    }

/**
* 删除消息模板
* @param {number} templateId 
*/
public DeletefollowUpMessageTemplatesTemplateId (    templateId: number,
   ): Observable<any> {
      return this.edcNetworkService.delete(`/follow-up/message/templates/${templateId}`);
    }

/**
* 获取首页课题信息
* @param {number} studyId 
*/
public GetstudyStudyIdHomepage (    studyId: number,
   ): Observable<EDC_Service_Application_Dto_Home_HomeStudyInfoOutput> {
      return this.edcNetworkService.get(`/study/${studyId}/homepage`);
    }

/**
* 获取概览数据
* @param {number} studyId 
* @param {*} dateType  - 1月、2年1Month2Year
* @param {*} statisticType  - 1患者概览、2：就诊概览1P2V
*/
public GetstudyStudyIdHomepageGetSummary (    studyId: number,
    dateType?: any,
    statisticType?: any,
   ): Observable<EDC_Service_Application_Dto_Home_HomeStudySummaryOutput> {
      return this.edcNetworkService.get(`/study/${studyId}/homepage/get-summary?dateType=${dateType}&statisticType=${statisticType}`);
    }

/**
* 获取课题首页日历
* @param {number} studyId 
* @param {*} dateType  - 0Year年1Month月
* @param {number} year 
* @param {number} month 
*/
public GetstudyStudyIdHomepageCalendarDateType (    studyId: number,
    dateType: any,
    year?: number,
    month?: number,
   ): Observable<EDC_Service_Application_Dto_Home_HomeStudyCalenderOutput> {
      return this.edcNetworkService.get(`/study/${studyId}/homepage/calendar/${dateType}?year=${year}&month=${month}`);
    }

/**
* 设置关注变量Redis
* @param {number} studyId 
*/
public PoststudyStudyIdHomepageVariable (    studyId: number,
    params? ): Observable<EDC_Service_Application_Dto_Home_HomeStudyVariablesOutput> {
      return this.edcNetworkService.post(`/study/${studyId}/homepage/variable`, params);
    }

/**
* 获取关注变量
* @param {number} studyId 
*/
public GetstudyStudyIdHomepageVariable (    studyId: number,
   ): Observable<EDC_Service_Application_Dto_Home_FollowVariable> {
      return this.edcNetworkService.get(`/study/${studyId}/homepage/variable`);
    }

/**
* 获取关注变量散点图
* @param {number} studyId 
*/
public GetstudyStudyIdHomepageVariableScatter (    studyId: number,
   ): Observable<EDC_Service_Application_Dto_Home_HomeStudyScatterOutput> {
      return this.edcNetworkService.get(`/study/${studyId}/homepage/variable/scatter`);
    }

/**
* 获取关注变量详情图
* @param {number} studyId 
*/
public PoststudyStudyIdHomepageVariableStatistics (    studyId: number,
    params? ): Observable<EDC_Service_Application_Dto_Home_HomeStudyVariableDetialOutput> {
      return this.edcNetworkService.post(`/study/${studyId}/homepage/variable/statistics`, params);
    }
    
public Getversion ( ): Observable<any> {
      return this.edcNetworkService.get(`/version`);
    }
    
public GethealthReady ( ): Observable<any> {
      return this.edcNetworkService.get(`/health/ready`);
    }
    
public GethealthAlive ( ): Observable<any> {
      return this.edcNetworkService.get(`/health/alive`);
    }
    
public GetapiHealthReady ( ): Observable<any> {
      return this.edcNetworkService.get(`/api/health/ready`);
    }
    
public GetapiHealthAlive ( ): Observable<any> {
      return this.edcNetworkService.get(`/api/health/alive`);
    }
    
public GetinfoConfig ( ): Observable<any> {
      return this.edcNetworkService.get(`/info/config`);
    }

/**
* getTheSpecifiedInput
* @param {number} StudyId 
*/
public GetpermissionUserStudyPermissions (    StudyId?: number,
   ): Observable<EDC_Service_Application_Dto_Permission_PermissionOutput> {
      return this.edcNetworkService.get(`/permission/user_study_permissions?StudyId=${StudyId}`);
    }
    // 获取质疑值域
public PostquerynoteGetquerynoteeventlistdistinct (  params? ): Observable<EDC_Service_Application_Dto_QueryNote_Output_GetQueryNoteEventListDistinctOutput> {
      return this.edcNetworkService.post(`/querynote/getquerynoteeventlistdistinct`, params);
    }
    // 创建质疑事件
public PostquerynoteCreatequerynoteevent (  params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.post(`/querynote/createquerynoteevent`, params);
    }
    // 质疑管理列表
public PostquerynoteGetquerynoteevents (  params? ): Observable<EDC_Service_Application_Dto_QueryNote_Output_QueryNoteEventOutput> {
      return this.edcNetworkService.post(`/querynote/getquerynoteevents`, params);
    }
    // 更新质疑状态
public PutquerynoteUpdatequerynoteeventsstate (  params? ): Observable<EDC_Service_Application_Dto_QueryNote_Output_UpdateQueryNoteEventsStateOutput> {
      return this.edcNetworkService.put(`/querynote/updatequerynoteeventsstate`, params);
    }

/**
* 获取控件下的核查事件
* @param {number} StudyId 
* @param {number} DataId 
* @param {number} CrfItemId 
* @param {number} DataIndex 
*/
public GetquerynoteGetitemquerynoteevents (    StudyId: number,
    DataId: number,
    CrfItemId: number,
    DataIndex?: number,
   ): Observable<EDC_Service_Application_Dto_QueryNote_Output_GetItemQueryNoteEventsOutput> {
      return this.edcNetworkService.get(`/querynote/getitemquerynoteevents?StudyId=${StudyId}&DataId=${DataId}&CrfItemId=${CrfItemId}&DataIndex=${DataIndex}`);
    }

/**
* 获取单条核查事件
* @param {number} StudyId 
* @param {number} QueryNoteEventId 
*/
public GetquerynoteGetquerynoteevent (    StudyId?: number,
    QueryNoteEventId?: number,
   ): Observable<EDC_Service_Application_Dto_QueryNote_Output_QueryNoteEventSingleOutput> {
      return this.edcNetworkService.get(`/querynote/getquerynoteevent?StudyId=${StudyId}&QueryNoteEventId=${QueryNoteEventId}`);
    }

/**
* 获取质疑事件下的消息
* @param {number} StudyId 
* @param {number} QueryNoteEventId 
*/
public GetquerynoteGetquerynoteeventmsgs (    StudyId?: number,
    QueryNoteEventId?: number,
   ): Observable<EDC_Service_Application_Dto_QueryNote_Output_GetQueryNoteEventMsgsOutput> {
      return this.edcNetworkService.get(`/querynote/getquerynoteeventmsgs?StudyId=${StudyId}&QueryNoteEventId=${QueryNoteEventId}`);
    }

/**
* 获取表单中控件的质疑状态
* @param {number} StudyId 
* @param {number} DataId 
*/
public GetquerynoteGetpagedataitemsquerynotestates (    StudyId?: number,
    DataId?: number,
   ): Observable<EDC_Service_Application_Dto_QueryNote_Output_GetPageDataItemsQueryNoteStatesOutput> {
      return this.edcNetworkService.get(`/querynote/getpagedataitemsquerynotestates?StudyId=${StudyId}&DataId=${DataId}`);
    }
    // 导出execl
public PostquerynoteExportbyexcel (  params? ): Observable<any> {
      return this.edcNetworkService.post(`/querynote/exportbyexcel`, params);
    }

/**
* 获取规则列表
* @param {boolean} Enable 
* @param {number} CrfItemId 
*/
public GetruleList (    Enable?: boolean,
    CrfItemId?: number,
   ): Observable<EDC_Service_Application_Dto_Rule_Output_ListRuleOutput> {
      return this.edcNetworkService.get(`/rule/list?Enable=${Enable}&CrfItemId=${CrfItemId}`);
    }
    // 更新规则
public PostruleCreate (  params? ): Observable<EDC_Service_Application_Dto_Rule_Output_CreateRuleOutput> {
      return this.edcNetworkService.post(`/rule/create`, params);
    }

/**
* 删除规则
* @param {number} RuleId 
* @param {number} StudyId 
*/
public DeleteruleDelete (    RuleId?: number,
    StudyId?: number,
   ): Observable<EDC_Service_Application_Dto_Rule_Output_DelRuleOutput> {
      return this.edcNetworkService.delete(`/rule/delete?RuleId=${RuleId}&StudyId=${StudyId}`);
    }
    // 更新规则
public PostruleUpdate (  params? ): Observable<EDC_Service_Application_Dto_Rule_Output_UpdateRuleOutput> {
      return this.edcNetworkService.post(`/rule/update`, params);
    }
    
public PostsiteCreatesite (  params? ): Observable<EDC_Service_Application_Dto_Site_Output_CreateStudySiteOutput> {
      return this.edcNetworkService.post(`/site/createsite`, params);
    }
    
public PutsiteUpdatesite (  params? ): Observable<EDC_Service_Application_Dto_Site_Output_StudySiteOutput> {
      return this.edcNetworkService.put(`/site/updatesite`, params);
    }

/**

* @param {number} StudyId 
* @param {*} SourceType  - 1System2Edc5Dsr
*/
public GetsiteGetsites (    StudyId?: number,
    SourceType?: any,
   ): Observable<EDC_Service_Application_Dto_Site_Output_StudySiteOutput> {
      return this.edcNetworkService.get(`/site/getsites?StudyId=${StudyId}&SourceType=${SourceType}`);
    }

/**

* @param {number} StudyId 
* @param {number} SiteId 
*/
public GetsiteGetsite (    StudyId?: number,
    SiteId?: number,
   ): Observable<EDC_Service_Application_Dto_Site_Output_StudySiteOutput> {
      return this.edcNetworkService.get(`/site/getsite?StudyId=${StudyId}&SiteId=${SiteId}`);
    }

/**
* 删除中心
* @param {number} StudyId 
* @param {number} SiteId 
*/
public DeletesiteDeletesite (    StudyId?: number,
    SiteId?: number,
   ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.delete(`/site/deletesite?StudyId=${StudyId}&SiteId=${SiteId}`);
    }

/**
* 获取变量节点层级
* @param {number} studyId 
*/
public PoststudyStudyIdCrfLevels (    studyId: number,
    params? ): Observable<Common_Contract_EDC_StudyCrfVariableTree_GetCrfNodesLevelsOutput> {
      return this.edcNetworkService.post(`/study/${studyId}/crf/levels`, params);
    }

/**
* 获取课题表单变量树单组更多变量分页
* @param {number} studyId 
* @param {number} crfPageId 
* @param {number} CrfItemId  - 表单控件id（表格控件id）
* @param {number} PageSize 
* @param {number} PageIndex 
*/
public GetstudyStudyIdCrfCrfPageIdVariableTreeMore (    studyId: number,
    crfPageId: number,
    CrfItemId?: number,
    PageSize?: number,
    PageIndex?: number,
   ): Observable<Common_Contract_EDC_StudyCrfVariableTree_CrfNodeVariableInfo> {
      return this.edcNetworkService.get(`/study/${studyId}/crf/${crfPageId}/variable-tree/more?CrfItemId=${CrfItemId}&PageSize=${PageSize}&PageIndex=${PageIndex}`);
    }

/**
* 获取课题表单变量树
* @param {number} studyId 
*/
public PoststudyStudyIdCrfVariableTree (    studyId: number,
    params? ): Observable<Common_Contract_EDC_StudyCrfVariableTree_GetCrfNodeVariableTreeOutput> {
      return this.edcNetworkService.post(`/study/${studyId}/crf/variable-tree`, params);
    }

/**
* 获取课题表单变量总数
* @param {number} studyId 
*/
public PoststudyStudyIdCrfVariablesCount (    studyId: number,
    params? ): Observable<Common_Contract_EDC_StudyCrfVariableTree_GetCrfNodeVariablesCountOutput> {
      return this.edcNetworkService.post(`/study/${studyId}/crf/variables/count`, params);
    }

/**
* 搜索课题表单变量（层级、表单名、控件名）
* @param {number} studyId 
*/
public PoststudyStudyIdCrfSearch (    studyId: number,
    params? ): Observable<Common_Contract_EDC_StudyCrfVariableTree_SearchCrfNodeOutput> {
      return this.edcNetworkService.post(`/study/${studyId}/crf/search`, params);
    }

/**
* 搜索课题表单变量（层级、表单名、控件名）
* @param {number} studyId 
*/
public PoststudyStudyIdCrfVariablesSearch (    studyId: number,
    params? ): Observable<Common_Contract_EDC_StudyCrfVariableTree_SearchCrfNodeOutput> {
      return this.edcNetworkService.post(`/study/${studyId}/crf/variables/search`, params);
    }
    // 创建课题
public Poststudy (  params? ): Observable<EDC_Service_Application_Dto_Study_Output_CreateStudyOutput> {
      return this.edcNetworkService.post(`/study`, params);
    }

/**
* 编辑课题信息
* @param {number} studyId 
*/
public PutstudyStudyId (    studyId: number,
    params? ): Observable<any> {
      return this.edcNetworkService.put(`/study/${studyId}`, params);
    }

/**
* 根据id删除课题
* @param {number} studyId 
*/
public DeletestudyStudyId (    studyId: number,
   ): Observable<EDC_Service_Application_Dto_Study_Output_StudyOutput> {
      return this.edcNetworkService.delete(`/study/${studyId}`);
    }
    // 收藏一键生成课题（需要将收藏名字，纳排，订阅，关注变量等带过来）
public PoststudyFromCollect (  params? ): Observable<EDC_Service_Application_Dto_Study_Output_CreateStudyOutput> {
      return this.edcNetworkService.post(`/study/from-collect`, params);
    }

/**
* 校验课题名称
* @param {string} studyName 
*/
public GetstudyCheck (    studyName?: string,
   ): Observable<any> {
      return this.edcNetworkService.get(`/study/check?studyName=${studyName}`);
    }

/**
* 提交课题纳排条件（新建修改）
* @param {number} studyId 
*/
public PoststudyStudyIdCondition (    studyId: number,
    params? ): Observable<EDC_Service_Application_Dto_Study_Output_CreateConditionOutput> {
      return this.edcNetworkService.post(`/study/${studyId}/condition`, params);
    }

/**
* 获取课题纳排
* @param {number} studyId 
*/
public GetstudyStudyIdCondition (    studyId: number,
   ): Observable<EDC_Service_Application_Dto_Study_GetQueryConditionOutput> {
      return this.edcNetworkService.get(`/study/${studyId}/condition`);
    }

/**
* 查看课题纳排
* @param {number} studyId 
*/
public GetstudyStudyIdConditionView (    studyId: number,
   ): Observable<EDC_Service_Application_Dto_Study_ViewQueryConditionOutput> {
      return this.edcNetworkService.get(`/study/${studyId}/condition/view`);
    }

/**
* 获取课题纳排历史
* @param {number} studyId 
*/
public GetstudyStudyIdConditionHistory (    studyId: number,
   ): Observable<Common_Contract_IR_Query_GetQueryTaskOutput> {
      return this.edcNetworkService.get(`/study/${studyId}/condition/history`);
    }

/**
* 提交课题关注变量信息
* @param {number} studyId 
*/
public PoststudyStudyIdVariables (    studyId: number,
    params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.post(`/study/${studyId}/variables`, params);
    }

/**
* 获取关注变量
* @param {number} studyId 
*/
public GetstudyStudyIdVariables (    studyId: number,
   ): Observable<EDC_Service_Application_Dto_Study_Output_StudyFollowVariableOutput> {
      return this.edcNetworkService.get(`/study/${studyId}/variables`);
    }

/**
* 获取课题关注变量变更信息
* @param {number} studyId 
*/
public GetstudyStudyIdVariablesChange (    studyId: number,
   ): Observable<EDC_Service_Application_Dto_Study_VariableChangeHistoryOutput> {
      return this.edcNetworkService.get(`/study/${studyId}/variables/change`);
    }

/**
* 根据id锁定解锁课题
* @param {number} studyId 
*/
public PoststudyStudyIdLock (    studyId: number,
    params? ): Observable<EDC_Service_Application_Dto_Study_Output_StudyOutput> {
      return this.edcNetworkService.post(`/study/${studyId}/lock`, params);
    }

/**
* 获取课题列表
* @param {string} query  - 关键字课题名称模糊
* @param {*} studyType  - 课题类型1Bank科研2Disease专病
* @param {number} PageSize 
* @param {number} PageIndex 
*/
public Getstudies (    query?: string,
    studyType?: any,
    PageSize?: number,
    PageIndex?: number,
   ): Observable<EDC_Service_Application_Dto_Study_Output_GetStudyOutput> {
      return this.edcNetworkService.get(`/studies?query=${query}&studyType=${studyType}&PageSize=${PageSize}&PageIndex=${PageIndex}`);
    }
    // 获取关注课题列表
public GetfollowStudies ( ): Observable<EDC_Service_Application_Dto_Study_Output_GetFollowStudyOutput> {
      return this.edcNetworkService.get(`/follow-studies`);
    }
    // 关注课题
public PoststudyFollowVariable (  params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.post(`/study/follow-variable`, params);
    }

/**
* 更新课题提醒信息
* @param {number} studyId 
*/
public PoststudyStudyIdUpdateChangeInfo (    studyId: number,
    params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.post(`/study/${studyId}/update/change-info`, params);
    }

/**
* 查询课题状态
* @param {number} studyId 
*/
public GetstudyStudyIdQueryConditionStatus (    studyId: number,
   ): Observable<EDC_Service_Application_Dto_Study_Output_StudyQueryStatusOutput> {
      return this.edcNetworkService.get(`/study/${studyId}/query-condition/status`);
    }
    // 课题支持v后刷新历史数据，1新建vtable，2重新生产指标数据，3重新刷新课题首页
public PutstudyVisitMigrationData (  params? ): Observable<any> {
      return this.edcNetworkService.put(`/study/visit/migration-data`, params);
    }
    // 首页关注指标调整为课题级别，迁移当前指标，课题创建人的关注为准
public PuthomepageVariableMigration (  params? ): Observable<any> {
      return this.edcNetworkService.put(`/homepage/variable/migration`, params);
    }

/**
* 获取课题事件组列表
* @param {number} studyId 
* @param {number} pageSize 
* @param {number} pageIndex 
*/
public GetstudiesStudyIdEventGroups (    studyId: number,
    pageSize?: number,
    pageIndex?: number,
   ): Observable<Common_Contract_EDC_EventGroup_GetEventGroupsOutput> {
      return this.edcNetworkService.get(`/studies/${studyId}/event-groups?pageSize=${pageSize}&pageIndex=${pageIndex}`);
    }

/**
* 创建或更新事件组
* @param {number} studyId 
*/
public PoststudiesStudyIdEventGroups (    studyId: number,
    params? ): Observable<Common_Contract_Search_EventGroup_CreateOrUpdateEventGroupOutput> {
      return this.edcNetworkService.post(`/studies/${studyId}/event-groups`, params);
    }

/**
* 获取课题事件组详情
* @param {number} studyId 
* @param {number} eventGroupId 
*/
public GetstudiesStudyIdEventGroupsEventGroupId (    studyId: number,
    eventGroupId: number,
   ): Observable<Common_Contract_Search_EventGroup_GetEventGroupOutput> {
      return this.edcNetworkService.get(`/studies/${studyId}/event-groups/${eventGroupId}`);
    }

/**
* 删除事件组
* @param {number} studyId 
* @param {number} eventGroupId 
*/
public DeletestudiesStudyIdEventGroupsEventGroupId (    studyId: number,
    eventGroupId: number,
   ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.delete(`/studies/${studyId}/event-groups/${eventGroupId}`);
    }

/**
* 更新事件组已读状态
* @param {number} studyId 
* @param {number} eventGroupId 
*/
public PutstudiesStudyIdEventGroupsEventGroupIdRead (    studyId: number,
    eventGroupId: number,
    params? ): Observable<any> {
      return this.edcNetworkService.put(`/studies/${studyId}/event-groups/${eventGroupId}/read`, params);
    }

/**
* 重新查询数据（传eventItemId会刷新当前及之前的事件项，不传eventItemId则刷新全部事件项）
* @param {number} studyId 
* @param {number} eventGroupId 
*/
public PoststudiesStudyIdEventGroupsEventGroupIdRegenerate (    studyId: number,
    eventGroupId: number,
    params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.post(`/studies/${studyId}/event-groups/${eventGroupId}/regenerate`, params);
    }

/**
* 同步随访受试者推送计划
* @param {number} studyId 
*/
public PoststudyStudyIdFollowUpSyncSubjectSchedule (    studyId: number,
    params? ): Observable<any> {
      return this.edcNetworkService.post(`/study/${studyId}/follow-up/sync-subject-schedule`, params);
    }

/**
* 修改随访策略状态
* @param {number} studyId 
*/
public PutstudyStudyIdFollowUpStrategy (    studyId: number,
    params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.put(`/study/${studyId}/follow-up/strategy`, params);
    }

/**
* 获取课题访视列表
* @param {number} studyId 
*/
public GetstudyStudyIdFollowUpStrategyExaminations (    studyId: number,
   ): Observable<Common_Contract_EDC_FollowUp_GetStrategyExaminationsOutput> {
      return this.edcNetworkService.get(`/study/${studyId}/follow-up/strategy/examinations`);
    }

/**
* 修改随访访视
* @param {number} studyId 
*/
public PutstudyStudyIdFollowUpStrategyExaminations (    studyId: number,
    params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.put(`/study/${studyId}/follow-up/strategy/examinations`, params);
    }

/**
* 创建课题随访访视
* @param {number} studyId 
*/
public PoststudyStudyIdFollowUpStrategyExaminations (    studyId: number,
    params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.post(`/study/${studyId}/follow-up/strategy/examinations`, params);
    }

/**
* 获取课题访视详情
* @param {number} studyId 
* @param {number} examinationId 
*/
public GetstudyStudyIdFollowUpStrategyExaminationsExaminationId (    studyId: number,
    examinationId: number,
   ): Observable<Common_Contract_EDC_FollowUp_GetStrategyExaminationInfoOutput> {
      return this.edcNetworkService.get(`/study/${studyId}/follow-up/strategy/examinations/${examinationId}`);
    }

/**
* 删除课题随访访视
* @param {number} studyId 
* @param {number} examinationId 
*/
public DeletestudyStudyIdFollowUpStrategyExaminationsExaminationId (    studyId: number,
    examinationId: number,
   ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.delete(`/study/${studyId}/follow-up/strategy/examinations/${examinationId}`);
    }

/**
* 修改访视顺序
* @param {number} studyId 
*/
public PutstudyStudyIdFollowUpStrategyExaminationsSort (    studyId: number,
    params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.put(`/study/${studyId}/follow-up/strategy/examinations/sort`, params);
    }

/**
* 修改课题随访基线
* @param {number} studyId 
*/
public PutstudyStudyIdFollowUpBaseLine (    studyId: number,
    params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.put(`/study/${studyId}/follow-up/base-line`, params);
    }

/**
* 获取基线变量列表
* @param {number} studyId 
*/
public GetstudyStudyIdFollowUpBaseLineVariables (    studyId: number,
   ): Observable<Common_Contract_EDC_FollowUp_GetBaseLineVariablesOutput> {
      return this.edcNetworkService.get(`/study/${studyId}/follow-up/base-line/variables`);
    }

/**
* 获取课题事件列表
* @param {number} studyId 
* @param {number} strategyId 
*/
public GetstudyStudyIdFollowUpStrategyStrategyIdEvents (    studyId: number,
    strategyId: number,
   ): Observable<Common_Contract_EDC_FollowUp_GetStrategyEventsOutput> {
      return this.edcNetworkService.get(`/study/${studyId}/follow-up/strategy/${strategyId}/events`);
    }

/**
* 修改课题结束事件（不良事件）
* @param {number} studyId 
* @param {number} strategyId 
*/
public PutstudyStudyIdFollowUpStrategyStrategyIdEvents (    studyId: number,
    strategyId: number,
    params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.put(`/study/${studyId}/follow-up/strategy/${strategyId}/events`, params);
    }

/**
* 获取课题随访患者列表表头值域
* @param {number} studyId 
* @param {string} Field 
* @param {number} PageSize 
* @param {number} PageIndex 
*/
public GetstudyStudyIdFollowUpManagerSubjectsHeaderCodeSet (    studyId: number,
    Field?: string,
    PageSize?: number,
    PageIndex?: number,
   ): Observable<System_String> {
      return this.edcNetworkService.get(`/study/${studyId}/follow-up/manager/subjects/header/code-set?Field=${Field}&PageSize=${PageSize}&PageIndex=${PageIndex}`);
    }

/**
* 获取课题随访患者列表（分页）
* @param {number} studyId 
*/
public PoststudyStudyIdFollowUpManagerSubjects (    studyId: number,
    params? ): Observable<Common_Contract_EDC_FollowUp_GetFollowUpSubjectsOutput> {
      return this.edcNetworkService.post(`/study/${studyId}/follow-up/manager/subjects`, params);
    }

/**
* 获取课题随访随访患者统计摘要
* @param {number} studyId 
*/
public GetstudyStudyIdFollowUpManagerSubjectsSummary (    studyId: number,
   ): Observable<Common_Contract_EDC_FollowUp_GetFollowUpSubjectSummaryOutput> {
      return this.edcNetworkService.get(`/study/${studyId}/follow-up/manager/subjects/summary`);
    }

/**
* 批量发送随访微信消息
* @param {number} studyId 
*/
public PoststudyStudyIdFollowUpManagerSubjectsMessagePush (    studyId: number,
    params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.post(`/study/${studyId}/follow-up/manager/subjects/message/push`, params);
    }

/**
* 批量修改随访患者计划状态
* @param {number} studyId 
*/
public PutstudyStudyIdFollowUpManagerSubjectsSchedule (    studyId: number,
    params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.put(`/study/${studyId}/follow-up/manager/subjects/schedule`, params);
    }

/**
* 获取课题随访患者列表表头值域
* @param {number} studyId 
* @param {string} Field 
* @param {number} PageSize 
* @param {number} PageIndex 
*/
public GetstudyStudyIdFollowUpManagerSubjectsCrfsHeaderCodeSet (    studyId: number,
    Field?: string,
    PageSize?: number,
    PageIndex?: number,
   ): Observable<System_String> {
      return this.edcNetworkService.get(`/study/${studyId}/follow-up/manager/subjects/crfs/header/code-set?Field=${Field}&PageSize=${PageSize}&PageIndex=${PageIndex}`);
    }

/**
* 获取课题患者随访（表单）列表（分页）
* @param {number} studyId 
*/
public PoststudyStudyIdFollowUpManagerSubjectsCrfs (    studyId: number,
    params? ): Observable<Common_Contract_EDC_FollowUp_GetFollowUpSubjectCrfsOutput> {
      return this.edcNetworkService.post(`/study/${studyId}/follow-up/manager/subjects/crfs`, params);
    }

/**
* 推送指定患者随访表单
* @param {number} studyId 
*/
public PoststudyStudyIdFollowUpManagerSubjectsCrfsPush (    studyId: number,
    params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.post(`/study/${studyId}/follow-up/manager/subjects/crfs/push`, params);
    }

/**
* 获取患者咨询消息列表Todo待实现接口0930之后
* @param {number} studyId 
* @param {number} studySubjectId 
* @param {number} PageSize 
* @param {number} PageIndex 
*/
public GetstudyStudyIdSubjectStudySubjectIdFollowUpAdvisories (    studyId: number,
    studySubjectId: number,
    PageSize?: number,
    PageIndex?: number,
   ): Observable<Common_Contract_GetSubjectFollowUpAdvisoriesOutput> {
      return this.edcNetworkService.get(`/study/${studyId}/subject/${studySubjectId}/follow-up/advisories?PageSize=${PageSize}&PageIndex=${PageIndex}`);
    }

/**
* 回复患者咨询Todo待实现接口0930之后
* @param {number} studyId 
* @param {number} studySubjectId 
*/
public PoststudyStudyIdSubjectStudySubjectIdFollowUpAdvisories (    studyId: number,
    studySubjectId: number,
    params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.post(`/study/${studyId}/subject/${studySubjectId}/follow-up/advisories`, params);
    }

/**
* 获取患者病历报告列表Todo待实现接口0930之后
* @param {number} studyId 
* @param {number} studySubjectId 
* @param {number} PageSize 
* @param {number} PageIndex 
*/
public GetstudyStudyIdSubjectStudySubjectIdFollowUpEmrs (    studyId: number,
    studySubjectId: number,
    PageSize?: number,
    PageIndex?: number,
   ): Observable<Common_Contract_GetSubjectFollowUpEmrsOutput> {
      return this.edcNetworkService.get(`/study/${studyId}/subject/${studySubjectId}/follow-up/emrs?PageSize=${PageSize}&PageIndex=${PageIndex}`);
    }

/**
* 回复患者病历报告Todo待实现接口0930之后
* @param {number} studyId 
* @param {number} studySubjectId 
*/
public PoststudyStudyIdSubjectStudySubjectIdFollowUpEmrs (    studyId: number,
    studySubjectId: number,
    params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.post(`/study/${studyId}/subject/${studySubjectId}/follow-up/emrs`, params);
    }

/**
* 创建分组
* @param {number} studyId 
*/
public PostgroupStudyId (    studyId: number,
    params? ): Observable<EDC_Service_Application_Dto_StudyGroup_Output_CreateStudyGroupOutput> {
      return this.edcNetworkService.post(`/group/${studyId}`, params);
    }

/**
* 获取分组
* @param {number} studyId  - 分组列表
* @param {*} type  - 分组类型0：普通分组1：默认分组0Default默认组1Normal自定义组
*/
public GetgroupStudyId (    studyId: number,
    type?: any,
   ): Observable<EDC_Service_Application_Dto_StudyGroup_Output_StudyGroupOutput> {
      return this.edcNetworkService.get(`/group/${studyId}?type=${type}`);
    }

/**
* 更新分组
* @param {number} studyId 
* @param {number} id 
*/
public PostgroupStudyIdUpdateId (    studyId: number,
    id: number,
    params? ): Observable<EDC_Service_Application_Dto_StudyGroup_Output_CreateStudyGroupOutput> {
      return this.edcNetworkService.post(`/group/${studyId}/update/${id}`, params);
    }

/**
* 删除分组
* @param {number} studyId 
* @param {number} id 
*/
public DeletegroupStudyIdId (    studyId: number,
    id: number,
   ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.delete(`/group/${studyId}/${id}`);
    }

/**
* 重置受试者的分组信息
* @param {number} studyId 
*/
public PostgroupStudyIdResetSubjectsGroupInfo (    studyId: number,
    params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.post(`/group/${studyId}/reset-subjects-group-info`, params);
    }

/**
* 获取等待添加的用户所有分组
* @param {number} studyId 
*/
public PostgroupStudyIdAdding (    studyId: number,
    params? ): Observable<EDC_Service_Application_Dto_StudyGroup_Output_AddingSubjectsGroupOutput> {
      return this.edcNetworkService.post(`/group/${studyId}/adding`, params);
    }

/**
* 获取受试者人数
* @param {number} studyId 
*/
public GetgroupSubjectTotalStudyId (    studyId: number,
   ): Observable<EDC_Service_Application_Dto_RandomRule_Output_StudySubjectTotalOutput> {
      return this.edcNetworkService.get(`/group/subject/total/${studyId}`);
    }

/**
* 获取规则
* @param {number} studyId 
*/
public GetgroupRandomRuleStudyId (    studyId: number,
   ): Observable<EDC_Service_Application_Dto_RandomRule_Output_StudyRandomRuleOutput> {
      return this.edcNetworkService.get(`/group/random/rule/${studyId}`);
    }
    // 创建规则
public PostgroupRandomRule (  params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.post(`/group/random/rule`, params);
    }
    // 编辑规则
public PutgroupRandomRule (  params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.put(`/group/random/rule`, params);
    }

/**
* 删除规则
* @param {number} id 
*/
public DeletegroupRandomRuleId (    id: number,
   ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.delete(`/group/random/rule/${id}`);
    }

/**
* 下载规则随机表
* @param {number} id 
*/
public GetgroupRandomRuleDownloadId (    id: number,
   ): Observable<any> {
      return this.edcNetworkService.get(`/group/random/rule/download/${id}`);
    }

/**
* 是否可以一键分组
* @param {number} studyId 
*/
public GetgroupRandomRuleGroupingVerifyStudyId (    studyId: number,
   ): Observable<EDC_Service_Application_Dto_RandomRule_Output_StudyRandomGroupingVerifyOutput> {
      return this.edcNetworkService.get(`/group/random/rule/grouping/verify/${studyId}`);
    }

/**
* 一键分组
* @param {number} studyId  - 课题id
*/
public PutgroupRandomRuleGroupingStudyId (    studyId: number,
    params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.put(`/group/random/rule/grouping/${studyId}`, params);
    }

/**
* 创建标签
* @param {number} studyId 
*/
public PostlabelStudyId (    studyId: number,
    params? ): Observable<EDC_Service_Application_Dto_StudyLabel_Output_CreateStudyLabelOutput> {
      return this.edcNetworkService.post(`/label/${studyId}`, params);
    }

/**
* 获取标签
* @param {number} studyId 
*/
public GetlabelStudyId (    studyId: number,
   ): Observable<EDC_Service_Application_Dto_StudyLabel_StudyLabelOutput> {
      return this.edcNetworkService.get(`/label/${studyId}`);
    }

/**
* 删除标签
* @param {number} studyId 
* @param {number} id 
*/
public DeletelabelStudyIdId (    studyId: number,
    id: number,
   ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.delete(`/label/${studyId}/${id}`);
    }

/**
* 重置受试者的标签信息
* @param {number} studyId 
*/
public PostlabelStudyIdResetSubjectsLabel (    studyId: number,
    params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.post(`/label/${studyId}/reset/subjects/label`, params);
    }

/**
* 测试消息推送
* @param {number} studyObservationIndicatorVariableMethodId 
* @param {number} eventGroupId 
* @param {number} studyId 
*/
public GetmethodStudyObservationIndicatorVariableMethodIdEventGroupEventGroupIdTestPushMessage (    studyObservationIndicatorVariableMethodId: number,
    eventGroupId: number,
    studyId?: number,
   ): Observable<any> {
      return this.edcNetworkService.get(`/method/${studyObservationIndicatorVariableMethodId}/event-group/${eventGroupId}/test-push-message?studyId=${studyId}`);
    }

/**
* 获取观测指标
* @param {number} studyId 
*/
public GetstudiesStudyIdObservationIndicators (    studyId: number,
   ): Observable<Common_Contract_EDC_ObservationIndicator_GetObservationIndicatorsOutput> {
      return this.edcNetworkService.get(`/studies/${studyId}/observation-indicators`);
    }

/**
* 删除观测指标
* @param {number} studyId 
* @param {number} observationIndicatorId 
*/
public DeletestudiesStudyIdObservationIndicatorsObservationIndicatorId (    studyId: number,
    observationIndicatorId: number,
   ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.delete(`/studies/${studyId}/observation-indicators/${observationIndicatorId}`);
    }

/**
* 删除观测指标方法
* @param {number} studyId 
* @param {number} observationIndicatorId 
* @param {number} methodId 
*/
public DeletestudiesStudyIdObservationIndicatorsObservationIndicatorIdMethodsMethodId (    studyId: number,
    observationIndicatorId: number,
    methodId: number,
   ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.delete(`/studies/${studyId}/observation-indicators/${observationIndicatorId}/methods/${methodId}`);
    }

/**
* 修改观测指标变量方法名
* @param {number} studyId 
* @param {number} observationIndicatorId 
* @param {number} methodId 
*/
public PutstudiesStudyIdObservationIndicatorsObservationIndicatorIdMethodsMethodId (    studyId: number,
    observationIndicatorId: number,
    methodId: number,
    params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.put(`/studies/${studyId}/observation-indicators/${observationIndicatorId}/methods/${methodId}`, params);
    }

/**
* 隐藏观测指标
* @param {number} studyId 
* @param {number} observationIndicatorId 
*/
public PutstudiesStudyIdObservationIndicatorsObservationIndicatorIdShow (    studyId: number,
    observationIndicatorId: number,
    params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.put(`/studies/${studyId}/observation-indicators/${observationIndicatorId}/show`, params);
    }

/**
* 编辑观测指标变量方法组
* @param {number} studyId 
* @param {number} observationIndicatorId 
*/
public PoststudiesStudyIdObservationIndicatorsObservationIndicatorIdMethods (    studyId: number,
    observationIndicatorId: number,
    params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.post(`/studies/${studyId}/observation-indicators/${observationIndicatorId}/methods`, params);
    }

/**
* 排序以及重置置顶状态
* @param {number} studyId 
*/
public PutstudiesStudyIdObservationIndicatorsOrder (    studyId: number,
    params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.put(`/studies/${studyId}/observation-indicators/order`, params);
    }

/**
* 指标数据生产
* @param {number} studyId 
*/
public PoststudiesStudyIdObservationIndicatorsProduction (    studyId: number,
    params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.post(`/studies/${studyId}/observation-indicators/production`, params);
    }
    // 从我的收藏加入患者，患者来源标记为我的收藏
public PostsubjectCreate (  params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.post(`/subject/create`, params);
    }

/**
* 删除受试者
* @param {number} studyId 
* @param {number} groupId 
*/
public PostsubjectStudyIdGroupIdGroupId (    studyId: number,
    groupId: number,
    params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.post(`/subject/${studyId}/groupId/${groupId}`, params);
    }

/**
* 获取受试者列表
* @param {number} studyId 
* @param {number} groupId 
*/
public PostsubjectStudyIdListGroupId (    studyId: number,
    groupId: number,
    params? ): Observable<EDC_Service_Application_Dto_StudySubject_Output_StudySubjectItemsOutput> {
      return this.edcNetworkService.post(`/subject/${studyId}/list/${groupId}`, params);
    }

/**
* 获取筛选的值域
* @param {number} studyId 
* @param {number} groupId 
* @param {number} methodVariableId 
*/
public PostsubjectStudyIdStudyIdGroupIdGroupIdMethodVariableIdMethodVariableIdDistinct (    studyId: number,
    groupId: number,
    methodVariableId: number,
    params? ): Observable<EDC_Service_Application_Dto_StudySubject_Output_GetHeaderValuesDistinctOutput> {
      return this.edcNetworkService.post(`/subject/studyId/${studyId}/groupId/${groupId}/methodVariableId/${methodVariableId}/distinct`, params);
    }

/**
* 单个观测指标命中详情
* @param {number} studyId 
* @param {number} patientId 
* @param {number} visitId 
* @param {string} variableUniqueCode 
*/
public PostsubjectStudyIdPatientIdVisitIdIndicatorVariableUniqueCodeVariable (    studyId: number,
    patientId: number,
    visitId: number,
    variableUniqueCode: string,
    params? ): Observable<Common_Contract_IR_Result_QueryVariableResultOutput> {
      return this.edcNetworkService.post(`/subject/${studyId}/${patientId}/${visitId}/indicator/${variableUniqueCode}/variable`, params);
    }

/**
* 命中详情
* @param {number} studyId 
* @param {number} patientId 
*/
public GetsubjectStudyIdPatientIdRow (    studyId: number,
    patientId: number,
   ): Observable<Common_Contract_IR_Result_QueryResultRawPopOutput> {
      return this.edcNetworkService.get(`/subject/${studyId}/${patientId}/row`);
    }

/**
* 纳排详情仅患者视图支持，就诊视图不支持
* @param {number} studyId 
* @param {number} patientId 
*/
public GetsubjectStudyIdPatientIdEnrollment (    studyId: number,
    patientId: number,
   ): Observable<System_String> {
      return this.edcNetworkService.get(`/subject/${studyId}/${patientId}/enrollment`);
    }
    // 获取可添加患者的所有课题
public PostsubjectAddingStudy (  params? ): Observable<EDC_Service_Application_Dto_StudySubject_Output_AddingSubjectStudyOutput> {
      return this.edcNetworkService.post(`/subject/adding/study`, params);
    }
    // 周期性订阅执行
public PostsubjectRecuringSubscribe (  params? ): Observable<RealData_Common_Contract_Common_Result> {
      return this.edcNetworkService.post(`/subject/recuring-subscribe`, params);
    }
} 