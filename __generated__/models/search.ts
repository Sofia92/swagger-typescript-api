/**
 * 本文件通过脚本生成，请勿直接修改内部内容
 */


export interface Common_Contract_EDC_EventGroup_EventFollowVariableInfo {
      followVariableUniqueCode?: string; 
      followVariableName?: string; 
  }

export interface Common_Contract_EDC_EventGroup_GetEventGroupsOutput {
      eventGroupId?: number; 
      eventGroupName?: string; 
      eventGroupDescription?: string; 
      createTime?: string; 
      finalQueryState?: null; 
      finalHitPatientCount?: number; 
      isNew?: boolean; 
      finalFinishTime?: string; 
      isBound?: boolean; 
      followVariables?: Common_Contract_EDC_EventGroup_EventFollowVariableInfo[]; 
  }

export interface Common_Contract_IR_Nodes_NodeVariableInfo_TipBoardInfo {
      fillRate?: number; 
      description?: string; 
      fillCount?: number; 
      examples?: string[]; 
  }

export interface Common_Contract_IR_Query_GetQueryVariableOutput {
      variableId?: number; 
      variablePId?: number; 
      name?: string; 
      standardCh?: string; 
      abbreviation?: string; 
      field?: string; 
      variableExtend?: null; 
      codeSysCode?: string; 
      isDistinct?: boolean; 
      synyiId?: number; 
      sort?: number; 
      fillRate?: number; 
      total?: number; 
      fillCount?: number; 
      dataType?: null; 
      statisticalType?: null; 
      variableType?: null; 
      domainMetaDataId?: number; 
      domainCode?: string; 
      variableUniqueCode?: string; 
      queryCodeSetOuts?: Common_Contract_Meta_CodeSystem_QueryCodeSetOut[]; 
      controlTypes?: RealData_Entity_Contract_Enums_Research_VariableControlTypeEnum[]; 
      termUseType?: null; 
      canCheck?: boolean; 
      termValue?: null; 
      useUnitSet?: boolean; 
      tipBoard?: null; 
      firstDomainName?: string; 
      firstDomianId?: number; 
      firstNodeId?: number; 
      firstNodeName?: string; 
      firstGroupId?: number; 
  }

export interface Common_Contract_Meta_CodeSystem_QueryCodeSetOut {
      codeSysCode?: string; 
      value?: string; 
      name?: string; 
      code?: string; 
      sort?: number; 
  }
export type Common_Contract_Meta_Node_TermUseType = 1|2 ;

export interface Common_Contract_Meta_Node_TermValue {
      extraCode?: string; 
      standardCh?: string; 
      variableUniqueCode?: string; 
  }

export interface Common_Contract_Meta_Variable_Common_VariableExtend {
      operator?: RealData_Entity_Contract_Enums_Research_Operator_RelationalOperatorEnum[]; 
      defaultOperator?: null; 
      aggregations?: RealData_Entity_Contract_Enums_AggregationEnum[]; 
      defaultAggregation?: null; 
      isExportUnique?: boolean; 
      canFilter?: boolean; 
      canSort?: boolean; 
      variableExportAttribute?: null; 
      unifyQueryVariableUniqueCode?: string[]; 
      canCheckAsTerm?: boolean; 
      isFollowVariable?: boolean; 
      isRefrenceVariable?: boolean; 
      variableCalculateInfo?: null; 
  }

export interface Common_Contract_Meta_Variable_Common_VariableExtend_VariableExportAttributeInfo {
      isEnable?: boolean; 
      isChecked?: boolean; 
      variableExportAttributeTypeEnum?: null; 
  }

export interface Common_Contract_Research_VariableCalculateInfo {
      calculateTypeEnum?: null; 
      calCulateRelateVariableUniqueCode?: string; 
  }
export type Common_Contract_Research_VariableCalculateInfo_CalculateType = 1|2 ;

export interface Common_Contract_Search_EventGroup_CreateOrUpdateEventGroupInput {
      eventGroupId?: number; 
      eventGroupName?: string; 
      eventGroupDescription?: string; 
      eventRangeStartDate?: string; 
      eventRangeEndDate?: string; 
      searchBy?: null; 
      events?: Common_Contract_Search_EventGroup_EventItemDTO[]; 
      finalQueryState?: null; 
      finalHitPatientCount?: number; 
      projectCode?: string; 
      studyId?: number; 
      userId?: number; 
      eventSearchSourceType?: null; 
  }

export interface Common_Contract_Search_EventGroup_EventGroupRegenerateInput {
      projectCode?: string; 
      eventGroupId?: number; 
      eventItemId?: number; 
      userId?: number; 
      studyId?: number; 
  }

export interface Common_Contract_Search_EventGroup_EventItemDTO {
      eventId?: number; 
      index?: number; 
      eventName?: string; 
      eventDescription?: string; 
      sequence?: number; 
      sequenceType?: null; 
      timePoint?: null; 
      queryFilters?: null; 
      resVariables?: Common_Contract_IR_Query_GetQueryVariableOutput[]; 
      queryFilterDescription?: string; 
      queryState?: null; 
      patientCount?: number; 
  }

export interface Common_Contract_Search_EventGroup_EventTimePoint {
      timeRangeSeq?: null; 
      operator?: null; 
      timeRanges?: number[]; 
      dateUnitType?: null; 
  }
export type Common_Contract_Search_EventGroup_TimeRangeSeqEnum = 1|2 ;

export interface Common_Contract_Search_Query_DTO_CancelQueryTaskInput {
      queryId?: number; 
      userId?: number; 
  }

export interface Common_Contract_Search_Query_DTO_DataFilterConditionInput {
      variableUniqueCode?: string; 
      termValues?: Common_Contract_Meta_Node_TermValue[]; 
      logicalOperator?: null; 
      variableId?: number; 
      relationalOperator?: null; 
      values?: string[]; 
      childrenConditions?: Common_Contract_Search_Query_DTO_DataFilterConditionInput[]; 
      cascadeConditions?: Common_Contract_Search_Query_DTO_DataFilterConditionInput[]; 
      uid?: string; 
      unitCode?: string; 
  }

export interface Common_Contract_Search_Query_DTO_EventGroup {
      eventGroupId?: number; 
      eventGroupDescription?: string; 
      timePoint?: null; 
  }

export interface Common_Contract_Search_Query_DTO_FilterConditionInput {
      groupConditions?: Common_Contract_Search_Query_DTO_GroupConditionInput[]; 
  }

export interface Common_Contract_Search_Query_DTO_GroupConditionInput {
      name?: string; 
      logicalOperator?: null; 
      relation?: null; 
      conditions?: Common_Contract_Search_Query_DTO_DataFilterConditionInput[]; 
      childrenGroup?: Common_Contract_Search_Query_DTO_GroupConditionInput[]; 
      searchBy?: null; 
      eventGroup?: null; 
  }
export type RealData_Entity_Contract_Enums_AggregationEnum = 0|1|2|3|4|5|6 ;
export type RealData_Entity_Contract_Enums_DR_SearchByEnum = 2|3|5 ;
export type RealData_Entity_Contract_Enums_Research_DomainLevelEnum = 0|1|2|3 ;
export type RealData_Entity_Contract_Enums_Research_Operator_LogicalOperatorEnum = 1|2|3 ;
export type RealData_Entity_Contract_Enums_Research_Operator_RelationalOperatorEnum = 1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|103|104|105|106|107|108|201|202 ;
export type RealData_Entity_Contract_Enums_Research_UsefulnessTypeEnum = 0|1|2|3 ;
export type RealData_Entity_Contract_Enums_Research_VariableControlTypeEnum = 1|2|3|4|5|6|13 ;
export type RealData_Entity_Contract_Enums_Research_VariableDataTypeEnum = 0|1|2|3|4|5|6|7|8 ;
export type RealData_Entity_Contract_Enums_Research_VariableExportAttributeTypeEnum = 0|1|2 ;
export type RealData_Entity_Contract_Enums_Research_VariableStatisticalTypeEnum = 1|2|3|4|5|6|7 ;
export type RealData_Entity_Contract_Enums_Research_VariableStorageStructureEnum = 1|2 ;
export type RealData_Entity_Contract_Enums_Search_EventDateUnitType = 0|1 ;
export type RealData_Entity_Contract_Enums_Search_EventSearchSourceType = 1|2 ;
export type RealData_Entity_Contract_Enums_Search_EventSequenceType = 0|1|2 ;
export type RealData_Entity_Contract_Enums_Search_EventTimePointOperator = 0|1|2|3 ;
export type RealData_Entity_Contract_Enums_Search_QuerySourceType = 1|2|3|5|6|7 ;
export type RealData_Entity_Contract_Enums_Search_QueryState = 1|2|3|4|5|6 ;
export type RealData_Entity_Contract_Enums_Search_RelationType = 1|2 ;

export interface Search_Service_Contract_Search_ConditionBase_IGenerateCondition {
  }

export interface Search_Service_Contract_Search_DTO_DataFilterCondition {
      logicalOperator?: null; 
      variableId?: number; 
      relationalOperator?: null; 
      values?: string[]; 
      synyiValues?: string[]; 
      variableUniqueCode?: string; 
      domainCode?: string; 
      variableStorageStructure?: null; 
      termValues?: Search_Service_Contract_Search_DTO_TermValue[]; 
      unitCode?: string; 
      childrenConditions?: Search_Service_Contract_Search_DTO_DataFilterCondition[]; 
      uid?: string; 
      cascadeConditions?: Search_Service_Contract_Search_DTO_DataFilterCondition[]; 
      conditionVariableStorage?: null; 
      conditionValueStorage?: null; 
      conditionGenerator?: null; 
      eventGroup?: null; 
      parentQueryId?: number; 
  }

export interface Search_Service_Contract_Search_DTO_DataFilterInitQueryDTO {
      projectCode?: string; 
      userId?: number; 
      siteId?: number; 
      queryExpressionDescription?: string; 
      queryFilters?: null; 
      parentQueryId?: number; 
      queryUserId?: number; 
      querySourceType?: null; 
      patientSet?: number[]; 
      visitSet?: number[]; 
      dsrSitePatientSet?: number[]; 
  }

export interface Search_Service_Contract_Search_DTO_EventGroup {
      eventGroupId?: number; 
      eventGroupDescription?: string; 
      timePoint?: null; 
  }

export interface Search_Service_Contract_Search_DTO_FilterCondition {
      groupConditions?: Search_Service_Contract_Search_DTO_GroupCondition[]; 
  }

export interface Search_Service_Contract_Search_DTO_GroupCondition {
      name?: string; 
      relation?: null; 
      logicalOperator?: null; 
      conditions?: Search_Service_Contract_Search_DTO_DataFilterCondition[]; 
      childrenGroup?: Search_Service_Contract_Search_DTO_GroupCondition[]; 
      searchBy?: null; 
      eventGroup?: null; 
  }

export interface Search_Service_Contract_Search_DTO_TermValue {
      extraCode?: string; 
      standardCh?: string; 
      variableUniqueCode?: string; 
  }

export interface Search_Service_Contract_Search_Model_VariableStorage {
      domainId?: number; 
      variableId?: number; 
      variableField?: string; 
      variableStandardCh?: string; 
      variableUniqueCode?: string; 
      variableCalculateInfo?: null; 
      domainCode?: string; 
      storageTable?: string; 
      cascadeParentIdColumn?: string; 
      cascadeParentLinkIdColumn?: string; 
      termUseType?: null; 
      domainLevel?: null; 
      variableDataType?: null; 
      variableStorageStructure?: null; 
      enableLabels?: RealData_Entity_Contract_Enums_Research_UsefulnessTypeEnum[]; 
      storageValueColumn?: string; 
      storageLimitColumn?: string; 
      storageLimitValue?: string[]; 
  }

export interface Synyi_Common_Contract_Result {
      code?: null; 
      msg?: string; 
  }
export type Synyi_Common_Contract_ResultCodeType = 0|400|401|403|500|700 ;

export interface System_Collections_Generic_List_1__Common_Contract_EDC_EventGroup_GetEventGroupsOutput {
      code?: null; 
      msg?: string; 
      data?: Common_Contract_EDC_EventGroup_GetEventGroupsOutput[]; 
  }

export interface System_Object {
      code?: null; 
      msg?: string; 
      data?: null; 
  }

export interface System_String {
      code?: null; 
      msg?: string; 
      data?: string; 
  }
