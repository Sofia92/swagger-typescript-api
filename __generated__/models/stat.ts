/**
 * 本文件通过脚本生成，请勿直接修改内部内容
 */

// 事件时间偏移范围
export interface Common_Contract_EDC_ObservationIndicator_EventTimeOffsetRangeInfo {
      start?: number; // 事件时间点起始时间
      end?: number; // 事件时间点结束时间
      unitType?: null; 
  }
// 绑定事件组信息
export interface Common_Contract_EDC_ObservationIndicator_FollowVariableBindEventGroupInfo {
      eventGroupId?: number; // 事件组id
      eventGroupName?: string; // 事件组名称
      eventGroupAggregationMethodTimePointType?: null; 
      eventTimeOffsetRange?: null; 
  }
export type Common_Contract_Export_File_Common_ExportFormatEnum = 1|2|3|4|5|6|7 ;
export type Common_Contract_Export_File_Common_ExportRuleEnum = 1|2|3 ;

export interface Common_Contract_Export_File_EncryptionInfoInput {
      encryptionType?: null; 
      publicKeyString?: string; // 公钥字符串
  }
// 导出变量选择参数
export interface Common_Contract_Export_File_ExportVariableSetInput {
      variableUniqueCode?: string; // 变量唯一代码
      variableName?: string; // 变量名
      attributes?: number[]; // bds域导出时选择的物理变量
      aggregation?: null; 
      values?: string[]; // 选中的过滤值集合,该集合有值时优先正向过滤(即使用该集合作为包含条件)
      orderBy?: string; // 排序规则
  }

export interface Common_Contract_IR_Export_GetExportFileNameInput {
      currentFileName?: string; // 用户自定义的文件名
      querySourceType?: null; 
  }

export interface Common_Contract_IR_Export_GetExportFileNameOutput {
      fileName?: string; // 文件名
  }

export interface Common_Contract_IR_Nodes_GetNodesLevelsInput {
      isQuery?: boolean; // 是否是通用科研域
      projectCode?: string; // ProjectCode
      querySourceType?: null; 
      variableType?: null; 
      domainLevel?: RealData_Entity_Contract_Enums_Research_DomainLevelEnum[]; // 域级别，专病库的患者列表只用P，我的课题事件组配置只要V和E
      removeBds?: boolean; // 移除Bds 类型
  }
// 获取导出变量总数
export interface Common_Contract_IR_Nodes_GetNodeVariablesCountInput {
      isQuery?: boolean; // 是否是通用科研域
      projectCode?: string; // ProjectCode
      querySourceType?: null; 
      variableType?: null; 
      domainLevel?: RealData_Entity_Contract_Enums_Research_DomainLevelEnum[]; // 域级别，专病库的患者列表只用P，我的课题事件组配置只要V和E
      removeBds?: boolean; // 移除Bds 类型
  }

export interface Common_Contract_IR_Nodes_GetNodeVariableTreeInput {
      isQuery?: boolean; // 是否是通用科研域
      projectCode?: string; // ProjectCode
      querySourceType?: null; 
      variableType?: null; 
      domainLevel?: RealData_Entity_Contract_Enums_Research_DomainLevelEnum[]; // 域级别，专病库的患者列表只用P，我的课题事件组配置只要V和E
      removeBds?: boolean; // 是否是Bds 类型
      maxGroupSize?: number; 
      nodeId?: number; 
      parentCascadeDomainCode?: string; // 搜索返回指定子级联层级的信息
  }
// 搜索导出节点/变量
export interface Common_Contract_IR_Nodes_SearchNodeInput {
      isQuery?: boolean; // 是否是通用科研域
      projectCode?: string; // ProjectCode
      querySourceType?: null; 
      keyword?: string; // 关键字
      nodeId?: number; // 节点id用于限定搜索范围，为空则不限定
      domainLevel?: RealData_Entity_Contract_Enums_Research_DomainLevelEnum[]; // 域级别，专病库的患者列表只用P，我的课题事件组配置只要V和E
      removeBds?: boolean; // 移除Bds 变量
      withSubVariable?: boolean; // 搜索返回节点的直接变量集合(例如搜索命中基本信息，则返回基本信息下的变量集合)
      parentCascadeDomainCode?: string; // 搜索返回指定子级联层级的信息
      variableType?: null; 
  }
export type Common_Contract_IR_Nodes_SearchResultType = 0|1 ;

export interface Common_Contract_IR_Nodes_SearchVariableInput {
      isQuery?: boolean; // 是否是通用科研域
      projectCode?: string; // ProjectCode
      querySourceType?: null; 
      variableUniqueCodes?: string[]; // 变量id列表
  }
export type Common_Contract_IR_Nodes_VariableGroupType = 0|1 ;
export type Common_Contract_IR_Result_QueryResultDisplayModeEnum = 0|1|2 ;

export interface Common_Contract_Meta_CodeSystem_QueryCodeSetOut {
      codeSysCode?: string; // 所属值域，关联CodeSystemCode
      value?: string; // 值
      name?: string; 
      code?: string; 
      sort?: number; // 排序
  }
export type Common_Contract_Meta_Node_TermUseType = 1|2 ;
// 归一化诊断值
export interface Common_Contract_Meta_Node_TermValue {
      extraCode?: string; // synyiId
      standardCh?: string; // 展示值
      variableUniqueCode?: string; // 变量唯一编码
  }
// 域变量扩展信息
export interface Common_Contract_Meta_Variable_Common_VariableExtend {
      operator?: RealData_Entity_Contract_Enums_Research_Operator_RelationalOperatorEnum[]; // 变量匹配操作符集合
      defaultOperator?: null; 
      aggregations?: RealData_Entity_Contract_Enums_AggregationEnum[]; // 变量聚合方式
      defaultAggregation?: null; 
      isExportUnique?: boolean; // 是否导出唯一标识
      canFilter?: boolean; // 变量展示时是否可筛选
      canSort?: boolean; // 变量展示时是否可排序
      variableExportAttribute?: null; 
      unifyQueryVariableUniqueCode?: string[]; // 同属于一组的搜索变量
      canCheckAsTerm?: boolean; // 标识术语/层级是否可勾选
      isFollowVariable?: boolean; // 是否关注变量
      isRefrenceVariable?: boolean; // 是否是关联变量，常作为表主键
      variableCalculateInfo?: null; 
  }

export interface Common_Contract_Meta_Variable_Common_VariableExtend_VariableExportAttributeInfo {
      isEnable?: boolean; // 是否启用
      isChecked?: boolean; // 是否选中
      variableExportAttributeTypeEnum?: null; 
  }
export type Common_Contract_Meta_Variable_QueryNodeVariableTypeEnum = 0|1|2 ;
// 存储年龄计算信息
export interface Common_Contract_Research_VariableCalculateInfo {
      calculateTypeEnum?: null; 
      calCulateRelateVariableUniqueCode?: string; // 计算关联变量的UniqueCode
  }
export type Common_Contract_Research_VariableCalculateInfo_CalculateType = 1|2 ;

export interface Common_Contract_Stat_Analysis_AnalysisTaskInfo {
      algorithmId?: number; // 算法id
      statVariables?: Common_Contract_Stat_Analysis_StatVariableInfo[]; // 分析变量
  }

export interface Common_Contract_Stat_Analysis_CreateStatAnalysisTaskInput {
      analysisType?: null; 
      regressionAnalysisType?: null; 
      analysisTasks?: Common_Contract_Stat_Analysis_AnalysisTaskInfo[]; // 分析任务信息
  }

export interface Common_Contract_Stat_Analysis_GetAlgorithmRecommendationInput {
      analysisType?: null; 
      regressionAnalysisType?: null; 
  }

export interface Common_Contract_Stat_Analysis_ModifyChartConfigInput {
      chartConifg?: null; // 图表配置
  }

export interface Common_Contract_Stat_Analysis_ModifyStatAnalysisVariableStatisticalTypeInput {
      statVariableId?: number; // 统计变量id
      statisticalType?: null; 
  }

export interface Common_Contract_Stat_Analysis_SaveBaselineSettingsInput {
      statVariableId?: number; 
      codeSetValue?: string; 
  }

export interface Common_Contract_Stat_Analysis_StatVariableInfo {
      statVariableIds?: number[]; // 变量id列表
      variableAnalysisMode?: null; 
  }
export type Common_Contract_Stat_Analysis_VariableAnalysisMode = 0|1|2|3|4|5|6|7 ;

export interface Common_Contract_Stat_DataSet_QueryResultHeaderFilterDto {
      domainId?: number; // 域Id
      variables?: Common_Contract_Stat_DataSet_QueryResultHeaderFilterDto_Value[]; 
  }

export interface Common_Contract_Stat_DataSet_QueryResultHeaderFilterDto_Value {
      variableId?: number; // 变量ID
      values?: string[]; // 选中的过滤值集合,该集合有值时优先正向过滤(即使用该集合作为包含条件)
  }

export interface Common_Contract_Stat_DataSet_QueryResultTitleDto {
      variableId?: number; // 变量ID
      orderBy?: string; // 排序方式
      orderIndex?: number; // 排序次序
  }

export interface Common_Contract_Stat_SandBox_Dto_FileEntryItem {
      fileName?: string; 
      fileDirectoryPath?: string; 
  }

export interface Common_Contract_Stat_SandBox_Dto_QueryHomeDirDto {
      sandBoxId?: string; 
  }
// 创建沙箱
export interface Common_Contract_Stat_SandBox_Input_CreateSandBoxBoundInput {
      sandBoxOption?: null; 
  }
// 导出申请
export interface Common_Contract_Stat_SandBox_Input_ExportDataRequestInput {
      sandBoxId?: string; 
      items?: Common_Contract_Stat_SandBox_Dto_FileEntryItem[]; 
      fileName?: string; // 导出文件名
      needApproval?: boolean; // 是否需要审批
      content?: any; // 导出信息，前端拼接的json
      approvalDocuments?: string[]; // 审核文件
      reason?: string; // 申请理由
      approvalFlowTypeEnum?: null; 
      approverId?: number; // 审批人
      fileTicket?: string; // 由Platform颁发的文件标识，也作为消息发布的Key
      zipPassword?: string; // 导出的zip密码
      encryptionInfo?: null; 
      exportRule?: null; 
      projectCode?: string; // 项目code
      querySourceType?: null; 
  }

export interface Common_Contract_Stat_SandBox_Input_SandBoxOption {
      screenWidth?: number; 
      screenHeight?: number; 
  }

export interface Common_Contract_Stat_SandBox_Input_SyncSandboxDataRequestInput {
      sandboxId?: string; 
  }

export interface Common_Contract_Stat_SandBox_Output_CreateSandBoxBoundOutput {
      sandBoxId?: string; // 沙箱Id
      status?: string; // 当前状态描述：&quot;未开始&quot;，“初始化沙箱容器“，”同步数据“，&quot;初始化完成&quot;,”正在运行“，”沙箱容器存在错误“
      statusDesc?: string; 
      accessUrl?: string; // 访问网址
      errorMsg?: string; // 错误信息
  }

export interface Common_Contract_Stat_SandBox_Output_ExportDataRequestOutput {
      fileTicket?: string; 
  }

export interface Common_Contract_Stat_SandBox_Output_SandboxInfoOutput {
      id?: string; 
      statId?: number; 
      userId?: number; 
      userName?: string; 
      statusDesc?: string; 
      errorMsg?: string; 
      updateDateTime?: string; 
      status?: null; 
      desc?: string; 
  }

export interface RealData_Common_Contract_Common_Result {
      code?: null; 
      msg?: string; 
  }

export interface Stat_Service_Contract_DataClean_Output_CleaningHistoryOutputDto {
      code?: null; 
      msg?: string; 
      data?: null; 
  }

export interface Stat_Service_Contract_DataClean_Output_GenerateNewVariablesOutputDto {
      code?: null; 
      msg?: string; 
      data?: null; 
  }

export interface Stat_Service_Contract_DataClean_Output_VariabDataOutputDto {
      code?: null; 
      msg?: string; 
      data?: null; 
  }

export interface Stat_Service_Contract_DataClean_Output_VariableDistinctDataOutputDto {
      code?: null; 
      msg?: string; 
      data?: null; 
  }

export interface Stat_Service_Contract_DataClean_Output_VariableListOutputDto {
      code?: null; 
      msg?: string; 
      data?: null; 
  }

export interface Stat_Service_Contract_DataSet_GetDataSetDomainsOutputDto {
      code?: null; 
      msg?: string; 
      data?: null; 
  }

export interface Stat_Service_Contract_DataSet_Output_CheckSyncDataSetOutputDto {
      code?: null; 
      msg?: string; 
      data?: null; 
  }

export interface Stat_Service_Contract_DataSet_Output_CreateDateSetOutputDto {
      code?: null; 
      msg?: string; 
      data?: null; 
  }

export interface Stat_Service_Contract_DataSet_Output_DataSetInfoOutputDto {
      code?: null; 
      msg?: string; 
      data?: null; 
  }

export interface Stat_Service_Contract_DataSet_Output_FilterDetailsOutput {
      code?: null; 
      msg?: string; 
      data?: null; 
  }

export interface Stat_Service_Contract_DataSet_Output_FilterHistoryOutput {
      code?: null; 
      msg?: string; 
      data?: null; 
  }

export interface Stat_Service_Contract_DataSet_Output_GetDistinctValuesOutput {
      code?: null; 
      msg?: string; 
      data?: null; 
  }

export interface Stat_Service_Contract_DataSet_Output_GetExportApproverUserListOutput {
      code?: null; 
      msg?: string; 
      data?: null; 
  }

export interface Stat_Service_Contract_DataSet_Output_GetExportDataSetInfoOutput {
      code?: null; 
      msg?: string; 
      data?: null; 
  }

export interface Stat_Service_Contract_DataSet_Output_GetVariablesOutput {
      code?: null; 
      msg?: string; 
      data?: null; 
  }

export interface Stat_Service_Contract_DataSet_Output_SnycSubDataSetTargetDiffOutput {
      code?: null; 
      msg?: string; 
      data?: null; 
  }

export interface Stat_Service_Contract_DataSet_VariableChartDataDto {
      code?: null; 
      msg?: string; 
      data?: null; 
  }

export interface Stat_Service_Contract_DateSet_Output_DataSetTreeOutputDto {
      code?: null; 
      msg?: string; 
      data?: null; 
  }

export interface Stat_Service_Contract_DateSet_Output_GetDomainDataOutputDto {
      code?: null; 
      msg?: string; 
      data?: null; 
  }

export interface Stat_Service_Contract_DateSet_Output_GetTargetsOutput {
      code?: null; 
      msg?: string; 
      data?: null; 
  }

export interface Stat_Service_Contract_Stat_Output_GetStatOutput {
      code?: null; 
      msg?: string; 
      data?: null; 
  }

export interface Stat_Service_Contract_Stat_Output_InitOutput {
      code?: null; 
      msg?: string; 
      data?: null; 
  }

export interface Stat_Service_Contract_Syncdata_Output_GetSyncDataPageOutput {
      code?: null; 
      msg?: string; 
      data?: null; 
  }

export interface System_Collections_Generic_Dictionary_2__System_Int32 {
      code?: null; 
      msg?: string; 
      data?: any; 
  }

export interface System_Collections_Generic_IList_1__RealData_Entity_Contract_Enums_Stat_CleanRuleType {
      code?: null; 
      msg?: string; 
      data?: RealData_Entity_Contract_Enums_Stat_CleanRuleType[]; 
  }

export interface System_Collections_Generic_IList_1__Stat_Service_Infrastructure_SandBox_TreeResult {
      code?: null; 
      msg?: string; 
      data?: Stat_Service_Infrastructure_SandBox_TreeResult[]; 
  }

export interface System_Collections_Generic_List_1__Common_Contract_Stat_SandBox_Output_SandboxInfoOutput {
      code?: null; 
      msg?: string; 
      data?: Common_Contract_Stat_SandBox_Output_SandboxInfoOutput[]; 
  }

export interface System_Collections_Generic_List_1__Stat_Service_Contract_DataClean_Output_CleaningToolsOutputDto {
      code?: null; 
      msg?: string; 
      data?: Stat_Service_Contract_DataClean_Output_CleaningToolsOutputDto[]; 
  }

export interface System_Collections_Generic_List_1__Stat_Service_Contract_DataSet_Output_GetOverallDescriptionOutput {
      code?: null; 
      msg?: string; 
      data?: Stat_Service_Contract_DataSet_Output_GetOverallDescriptionOutput[]; 
  }

export interface System_Collections_Generic_List_1__System_String {
      code?: null; 
      msg?: string; 
      data?: string[]; 
  }
export type RealData_Common_Contract_Common_ResultCodeType = 0|400|401|403|500|700 ;
export type RealData_Entity_Contract_Enums_AggregationEnum = 0|1|2|3|4|5|6 ;
export type RealData_Entity_Contract_Enums_ApprovalFlow_ApprovalFlowTypeEnum = 0|1|2|3 ;
export type RealData_Entity_Contract_Enums_EDC_EventGroupAggregationMethodTimePointType = 0|1|2|3 ;
export type RealData_Entity_Contract_Enums_EDC_ObservationIndicatorVariableAggregationMethodType = 0|1|2|3|4|5|6|7|8|9|10|11|12 ;
export type RealData_Entity_Contract_Enums_EncryptionTypeEnum = 0|1 ;
export type RealData_Entity_Contract_Enums_Export_ExportDataRangeEnum = 1|2|3 ;
export type RealData_Entity_Contract_Enums_Research_DomainLevelEnum = 0|1|2|3 ;
export type RealData_Entity_Contract_Enums_Research_Operator_LogicalOperatorEnum = 1|2|3 ;
export type RealData_Entity_Contract_Enums_Research_Operator_RelationalOperatorEnum = 1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|103|104|105|106|107|108|201|202 ;
export type RealData_Entity_Contract_Enums_Research_VariableControlTypeEnum = 1|2|3|4|5|6|13 ;
export type RealData_Entity_Contract_Enums_Research_VariableDataTypeEnum = 0|1|2|3|4|5|6|7|8 ;
export type RealData_Entity_Contract_Enums_Research_VariableExportAttributeTypeEnum = 0|1|2 ;
export type RealData_Entity_Contract_Enums_Research_VariableStatisticalTypeEnum = 1|2|3|4|5|6|7 ;
export type RealData_Entity_Contract_Enums_Research_VariableStorageStructureEnum = 1|2 ;
export type RealData_Entity_Contract_Enums_Search_EventDateUnitType = 0|1 ;
export type RealData_Entity_Contract_Enums_Search_QuerySourceType = 1|2|3|5|6|7 ;
export type RealData_Entity_Contract_Enums_Stat_AnalysisType = 0|1|2|3|4|5 ;
export type RealData_Entity_Contract_Enums_Stat_CleanRuleType = 1|2|3|4|5|6|7|8|9|10|11 ;
export type RealData_Entity_Contract_Enums_Stat_DataSetType = 0|1 ;
export type RealData_Entity_Contract_Enums_Stat_DataSetUpdateState = 0|1|2|4|5|99 ;
export type RealData_Entity_Contract_Enums_Stat_DomainSourceType = 0|1|2|3 ;
export type RealData_Entity_Contract_Enums_Stat_PredictionType = 0|1 ;
export type RealData_Entity_Contract_Enums_Stat_RegressionAnalysisType = 0|1 ;
export type RealData_Entity_Contract_Enums_Stat_SandBoxStatus = 0|10|20|30|40|50|90|99 ;
export type RealData_Entity_Contract_Enums_Stat_StatTrainingTaskStatus = 0|1|2|3 ;
export type RealData_Entity_Contract_Enums_Stat_SyncDataDetailType = 0|1|2|3|4 ;
export type RealData_Entity_Contract_Enums_Stat_TrainingType = 0|1 ;
export type RealData_Entity_Contract_Enums_Stat_VariableSourceType = 0|1|2|3|4 ;
export type RealData_Entity_Contract_Enums_StatVarType = 1|2|3|4|5|6|7 ;
export type Stat_Service_Contract_DataClean_ExtractType = 1|2 ;
export type Stat_Service_Contract_DataClean_Grading_ConfigGroupType = 1|2 ;

export interface Stat_Service_Contract_DataClean_Input_GenerateNewVariablesInputDto {
      newVariableName?: string; // 新变量名称
      cleanOperType?: null; 
      newVariableConfig?: []; // 新变量生成配置项
      sourceUniqueCode?: string; // 原始变量Code
      gradingInfo?: null; 
  }

export interface Stat_Service_Contract_DataClean_Input_GenerateNewVariablesInputDto_Grading {
      groupType?: null; 
      autoMinValue?: number; // 自动分组最小值
      autoMaxValue?: number; // 自动分组最大值
      autoStride?: number; // 自动分组组距
  }

export interface Stat_Service_Contract_DataClean_Input_GetExtractResultInput {
      config?: null; 
      sourceUniqueCode?: string; // 原始变量Code
  }

export interface Stat_Service_Contract_DataClean_Input_UpdateVariablesDataInputDto {
      syncDataId?: number; // 快照Id
      variableIds?: number[]; // 衍生变量Ids
  }

export interface Stat_Service_Contract_DataClean_Input_VarableUpdateDataTypeInputDto {
      dataType?: null; 
  }

export interface Stat_Service_Contract_DataClean_Input_VariableListInputDto {
      pageSize?: number; 
      pageIndex?: number; 
      keyWord?: string; // 模糊匹配搜索
  }
export type Stat_Service_Contract_DataClean_OutlierDetectionMethodEnum = 1|2 ;

export interface Stat_Service_Contract_DataClean_Output_CleaningHistoryOutputDto_Data {
      cleaningDateTime?: string; // 清洗时间
      sourceVariableName?: string; // 源变量名称
      cleanOperType?: null; 
      generateVariableName?: string; // 生成变量名称
  }

export interface Stat_Service_Contract_DataClean_Output_CleaningToolsOutputDto {
      name?: string; // 注解/备注
      code?: string; // Code
      value?: number; // 值
  }
// 分类型
export interface Stat_Service_Contract_DataClean_Output_VariabDataOutputDto_Classification {
      data?: Stat_Service_Contract_DataClean_Output_VariabDataOutputDto_Data[]; // 具体数据
  }
// 连续性
export interface Stat_Service_Contract_DataClean_Output_VariabDataOutputDto_Continuity {
      max?: string; // 最大值
      min?: string; // 最小值
      avg?: string; // 平均数
      stddev?: string; // 标准差值
      median?: string; // 中位数
      data?: Stat_Service_Contract_DataClean_Output_VariabDataOutputDto_Data[]; // 具体数据
  }
// 分类型具体数据
export interface Stat_Service_Contract_DataClean_Output_VariabDataOutputDto_Data {
      name?: string; // 类别的名称
      value?: string; // 类别的值
      percent?: string; // 占总数的百分比
  }
// 日期类型
export interface Stat_Service_Contract_DataClean_Output_VariabDataOutputDto_Date {
      data?: Stat_Service_Contract_DataClean_Output_VariabDataOutputDto_Data[]; // 具体数据
  }

export interface Stat_Service_Contract_DataClean_Output_VariableListOutputDto_Info {
      id?: number; // 变量主键ID
      name?: string; // 变量名称
      staticType?: null; 
      dataSourceType?: null; 
      fillRate?: string; // 填充率
      variableCleanId?: number; // 变量清洗Id
      sort?: number; 
      children?: Stat_Service_Contract_DataClean_Output_VariableListOutputDto_Info[]; 
      sourceUniqueCode?: string; // 原始变量Code
  }
// 关键词提取
export interface Stat_Service_Contract_DataClean_VarConfigExtract {
      values?: string[]; 
      splitStr?: string; 
      keyWord?: string; 
      extractType?: null; 
  }

export interface Stat_Service_Contract_DataSet_ChartData {
      name?: string; 
      value?: number; 
  }
// 数据集域
export interface Stat_Service_Contract_DataSet_DataSetDomainsDto {
      id?: number; // 主键
      syncDataIds?: number[]; // 所属更新记录数组;保存更新记录id数组，用于确认属于哪个快照的数据。快照重复数据复用
      name?: string; // 域名
      sourceUniqueCode?: string; // 原始域code
      sourceType?: null; 
      level?: null; 
      createTime?: string; // 创建时间
      createUserId?: number; // 创建人
      children?: Stat_Service_Contract_DataSet_DataSetDomainsDto[]; // 子数据
  }

export interface Stat_Service_Contract_DataSet_HistogramChart {
      max?: number; 
      min?: number; 
      range?: number; // 组距
      chartDatas?: Stat_Service_Contract_DataSet_ChartData[]; 
  }

export interface Stat_Service_Contract_DataSet_Input_AdvQueryInput {
      queryName?: string; // 筛选名称
      queryExpressionDescription?: string; 
      filterRule?: null; 
  }

export interface Stat_Service_Contract_DataSet_Input_CreateDateSetInputDto {
      dataSetName?: string; // 数据集名称
      filterQueryId?: number; // 搜索id
      targetDtos?: Stat_Service_Contract_Dto_TargetDto[]; // 指标集合
  }

export interface Stat_Service_Contract_DataSet_Input_CreateExportDataStreamInputDto {
      projectCode?: string; // 项目code
      querySourceType?: null; 
      queryId?: number; // 搜索id
      collectId?: number; // 我的收藏主键Id
      searchRawDataId?: string; // 搜索结果原始数据集id
      exportPerformanceAnalysisRecordId?: number; // 导出性能分析记录id
      exportParentDomain?: boolean; // 导出父级域
      patientSetFlag?: boolean; // 患者集合标识,True 代表全选
      patientIdList?: number[]; // 患者id集合
      startDateTime?: number; // 起始时间（时间戳）
      endDateTime?: number; // 结束时间（时间戳）
      exportFormat?: Common_Contract_Export_File_Common_ExportFormatEnum[]; // 输出格式
      fileName?: string; // 导出文件名
      exportDataRange?: null; 
      hitDataDisplayMode?: null; 
      exportVariableSet?: Common_Contract_Export_File_ExportVariableSetInput[]; // 变量选择入参
      fileTicket?: string; // 由Platform颁发的文件标识，也作为消息发布的Key
      zipPassword?: string; // 导出的zip密码
      encryptionInfo?: null; 
      exportRule?: null; 
      needApproval?: boolean; // 是否需要审批
      content?: any; // 导出信息，前端拼接的json
      approvalDocuments?: string[]; // 审核文件
      reason?: string; // 申请理由
      approvalFlowTypeEnum?: null; 
      approverId?: number; // 审批人
      headerFilters?: Common_Contract_Stat_DataSet_QueryResultHeaderFilterDto[]; // 表头筛选信息
      tittles?: Common_Contract_Stat_DataSet_QueryResultTitleDto[]; // 表头列信息
  }
// 子条件
export interface Stat_Service_Contract_DataSet_Input_DataFilterRule {
      logicalOperator?: null; 
      variableId?: number; // 变量id
      variableUniqueCode?: string; // 变量唯一编码
      relationalOperator?: null; 
      statisticVarType?: null; 
      values?: string[]; // 值
      childrenDataFilterRules?: Stat_Service_Contract_DataSet_Input_DataFilterRule[]; // 同一记录子条件
  }

export interface Stat_Service_Contract_DataSet_Input_FilterRule {
      groupRules?: Stat_Service_Contract_DataSet_Input_GroupRule[]; // 目前只支持一个组
  }

export interface Stat_Service_Contract_DataSet_Input_FilterVariableInput {
      variableUniqueCodes?: string[]; // 变量id列表
  }

export interface Stat_Service_Contract_DataSet_Input_GetHeaderVariableDistinctValueInput {
      headerFilters?: Stat_Service_Contract_DateSet_Input_QueryResultHeaderFilter[]; 
      keyword?: string; 
      pageSize?: number; 
      pageIndex?: number; 
  }
// 整体描述
export interface Stat_Service_Contract_DataSet_Input_GetOverallDescriptionInput {
      queryId?: number; // 查询id
      domianId?: number; 
      headerFilters?: Stat_Service_Contract_DateSet_Input_QueryResultHeaderFilter[]; // 表头筛选信息
  }

export interface Stat_Service_Contract_DataSet_Input_GetVariableChartDataInput {
      queryId?: number; // 查询id
      variableId?: number; 
      headerFilters?: Stat_Service_Contract_DateSet_Input_QueryResultHeaderFilter[]; // 表头筛选信息
  }
// 条件组
export interface Stat_Service_Contract_DataSet_Input_GroupRule {
      name?: string; // 组名
      logicalOperator?: null; 
      dataFilterRules?: Stat_Service_Contract_DataSet_Input_DataFilterRule[]; // 搜索条件
      childrenGroupRule?: Stat_Service_Contract_DataSet_Input_GroupRule[]; // 子组条件
  }

export interface Stat_Service_Contract_DataSet_Input_SaveHeaderVariablesItem {
      order?: number; 
      variableUniqueCode?: string; 
      isShow?: boolean; 
  }

export interface Stat_Service_Contract_DataSet_Input_SaveStatHeaderVariablesInput {
      variables?: Stat_Service_Contract_DataSet_Input_SaveHeaderVariablesItem[]; 
  }

export interface Stat_Service_Contract_DataSet_Input_VariableFillRateInputDto {
      variableIds?: number[]; // 只更新当前指定的变量
      queryId?: number; // 搜索Id
  }

export interface Stat_Service_Contract_DataSet_Output_DistinctValues {
      value?: string; 
      count?: number; 
  }

export interface Stat_Service_Contract_DataSet_Output_FilterHistoryItem {
      queryId?: number; 
      queryName?: string; 
      queryExpressionDescription?: string; 
      queryTime?: string; 
  }

export interface Stat_Service_Contract_DataSet_Output_GetExportApproverUserListOutput_Data {
      userId?: number; // 用户id
      userName?: string; // 用户姓名
  }

export interface Stat_Service_Contract_DataSet_Output_GetOverallDescriptionOutput {
      variableName?: string; 
      variableId?: number; 
      statisticalType?: null; 
      effectiveSampleRate?: number; // 有效样本率
      deletionRate?: number; // 缺失率
      valueLength?: number; // 值域长度
      valueCount?: number; // 数据量
  }

export interface Stat_Service_Contract_DataSet_Output_GetVariableDto {
      id?: number; 
      name?: string; 
      dataType?: null; 
      statisticalType?: null; 
      sourceUniqueCode?: string; 
      dataSourceType?: null; 
      syncDataIds?: number[]; 
      sort?: number; 
  }

export interface Stat_Service_Contract_DataSet_Output_StatVariableOutput {
      variableId?: number; // 变量id
      variablePId?: number; // 变量的父级(术语变量有信息)
      name?: string; // 变量名
      standardCh?: string; // 中文名
      abbreviation?: string; // 同义词名称
      field?: string; // 字段名
      variableExtend?: null; 
      codeSysCode?: string; // 变量关联值域
      isDistinct?: boolean; 
      synyiId?: number; // 作为术语层级/变量时，有森亿id的标识
      sort?: number; // 变量排序
      fillRate?: number; // 填充率
      total?: number; // 科研域变量总数据量
      fillCount?: number; // 变量有值的数据量
      dataType?: null; 
      statisticalType?: null; 
      variableType?: null; 
      domainMetaDataId?: number; // 域id
      domainCode?: string; // 域Code
      variableUniqueCode?: string; // 变量Code
      queryCodeSetOuts?: Common_Contract_Meta_CodeSystem_QueryCodeSetOut[]; // 值域层级信息
      controlTypes?: RealData_Entity_Contract_Enums_Research_VariableControlTypeEnum[]; // 变量可用的控件类型
      termUseType?: null; 
      canCheck?: boolean; // 标识是否可勾选(变量默认可勾选，术语变量层级可配置)
      termValue?: null; 
      useUnitSet?: boolean; // 变量存在单位
  }

export interface Stat_Service_Contract_DateSet_Input_CopyDataSetToNewInputDto {
      sourceDataSetId?: number; // 源数据集Id
      dataSetName?: string; // 复制后数据集名称
  }
// 获取dimain数据输入
export interface Stat_Service_Contract_DateSet_Input_GetDomainDataInputDto {
      pageSize?: number; 
      pageIndex?: number; 
      headerFilters?: Stat_Service_Contract_DateSet_Input_QueryResultHeaderFilter[]; // 表头筛选信息
      tittles?: Stat_Service_Contract_DateSet_Input_QueryResultTitle[]; // 表头列信息
  }
// 表头筛选
export interface Stat_Service_Contract_DateSet_Input_QueryResultHeaderFilter {
      variableId?: number; // 变量ID
      values?: string[]; // 选中的过滤值集合,该集合有值时优先正向过滤(即使用该集合作为包含条件)
  }
// 表头集合不传时，根据流水获取搜索的变量，再补充上固定的显示变量
export interface Stat_Service_Contract_DateSet_Input_QueryResultTitle {
      variableId?: number; // 变量ID
      orderBy?: string; // 排序方式
      orderIndex?: number; // 排序次序
  }
// 修改数据集名称
export interface Stat_Service_Contract_DateSet_Input_UpdateDataSetNameInputDto {
      name?: string; // 数据集名称
  }
// 数据集
export interface Stat_Service_Contract_DateSet_Output_DataSetTreeDto {
      statId?: number; // 数据探索主键
      id?: number; // 数据集id
      name?: string; // 数据集名称
      dataSetType?: null; 
      syncDataId?: number; // 数据更新id
      children?: Stat_Service_Contract_DateSet_Output_DataSetTreeDto[]; // 子数据
  }

export interface Stat_Service_Contract_DateSet_Output_GetTargetsOutput_ {
      variableUniqueCode?: string; // 变量code
      dataSourceType?: null; 
      targeAggregations?: Stat_Service_Contract_Dto_TargeAggregationDto[]; // 指标聚合
      variableId?: number; // 变量Id
      variableName?: string; // 变量名称
      domainId?: number; // 域Id
      domainLevel?: null; 
      variableDataType?: null; 
  }
// 搜索列表数据
export interface Stat_Service_Contract_DateSet_Output_ResultData {
      patientId?: number; // 患者id
      visitId?: number; // 就诊编号
      cells?: Stat_Service_Contract_DateSet_Output_ResultVariableData[]; // 数据集合
  }

export interface Stat_Service_Contract_DateSet_Output_ResultVariableData {
      variableId?: number; // 变量id
      variableUniqueCode?: string; // 变量code
      data?: string; // 变量数据
  }
// 搜索列表表头模型
export interface Stat_Service_Contract_DateSet_Output_ResultVariableTitle {
      variableId?: number; // 变量id
      variableUniqueCode?: string; // 变量唯一Code
      standardCh?: string; // 变量显示名称
      canFilter?: boolean; // 表头是否可以过滤
      canSort?: boolean; // 表头是否可以排序
      isShow?: boolean; // 是否展示
      variableDataType?: null; 
      aggregation?: null; 
  }

export interface Stat_Service_Contract_Dto_DomainDto {
      name?: string; // 域名
      uniqueCode?: string; // code
      dataSourceType?: null; 
      level?: null; 
      variables?: Stat_Service_Contract_Dto_VariableDto[]; // 变量
      sort?: number; // 排序
  }

export interface Stat_Service_Contract_Dto_TargeAggregationDto {
      targeName?: string; // 指标名称
      aggregation?: null; 
      uCode?: string; // 唯一code,作为生成数据子集的变量编码，需要做到子集全局唯一
      customAggregationMethodNumber?: number; // 自定义聚合方法次数
      bindEventGroupInfo?: null; 
  }
// 赛选指标
export interface Stat_Service_Contract_Dto_TargetDto {
      variableUniqueCode?: string; // 变量code
      variableName?: string; // 变量name
      variableId?: number; // 变量id
      dataSourceType?: null; 
      targeAggregations?: Stat_Service_Contract_Dto_TargeAggregationDto[]; // 指标聚合
  }

export interface Stat_Service_Contract_Dto_VariableDto {
      name?: string; // 变量名
      dataType?: null; 
      staticType?: null; 
      uniqueCode?: string; // 变量code
      variableType?: null; 
      bdsUniqueCode?: string; // BDS结构原有code
      dataSourceType?: null; 
      aggregation?: null; 
      attributeUnionCodes?: string[]; // BDS结构拆分获取属性
      sort?: number; // 排序
  }
export type Stat_Service_Contract_Enum_LoadModeEnum = 0|1 ;
// 初始化输入
export interface Stat_Service_Contract_Stat_Input_InitInput {
      querySourceType?: null; 
      loadMode?: null; 
      sourceId?: string; // 来源 ID
      projectCode?: string; // 项目code;来源RDR标识、搜索、专库id等
      statDomains?: Stat_Service_Contract_Dto_DomainDto[]; 
      targetDtos?: Stat_Service_Contract_Dto_TargetDto[]; 
  }
export type Stat_Service_Contract_Stat_Learning_AlgorithmTypeEnum = 0|1|2|3|4|5|6 ;

export interface Stat_Service_Contract_Stat_Learning_AutoModelBuilding {
      algorithmList?: Stat_Service_Contract_Stat_Learning_AlgorithmTypeEnum[]; // 算法，可选值：xgboost, logistic_regression, random_forest
      hyperParamsSetup?: any; 
  }

export interface Stat_Service_Contract_Stat_Learning_CreateStatTrainingTaskInput {
      traningType?: null; 
      responseVariableName?: string; 
      responseVariableId?: number; // 响应变量id
      predicitiveVariableIds?: number[]; // 预测变量id列表
      trainingParameter?: null; 
  }

export interface Stat_Service_Contract_Stat_Learning_ExportFuncInput {
      exportTypes?: Stat_Service_Contract_Stat_Learning_ExportType[]; 
      taskVersionId?: number; 
      reportWordTicket?: string; 
      reportPdfTicket?: string; 
      modelReportTypes?: Stat_Service_Contract_Stat_Learning_ModelReportType[]; 
      modelDataType?: null; 
      needApproval?: boolean; // 是否需要审批
      content?: any; // 导出信息，前端拼接的json
      approvalDocuments?: string[]; // 审核文件
      approveReason?: string; // 申请理由
      approvalFlowTypeEnum?: null; 
      approverId?: number; // 审批人
      fileName?: string; // 导出文件名
  }
export type Stat_Service_Contract_Stat_Learning_ExportType = 0|1|2 ;
export type Stat_Service_Contract_Stat_Learning_FeatureMethod = 0|1 ;
// 特征初筛、特征工程
export interface Stat_Service_Contract_Stat_Learning_FeatureSelection {
      keepCols?: number[]; // 强制保留的变量名 自选保留特征
      missingRate?: number; // 按照缺失率删除变量 (缺失值占比过滤法)
      topFrequency?: number; // 分类变量按照最大频数占比删除变量 (分类型变量过滤法)
      variance?: number; // 数值变量方差，小于该阈值的变量将删除，默认 1e-4
      method?: null; 
      singleFeatureParams?: any[]; // 特征筛选参数列表，其中每个元素是dict，取决于 method
      randomForestIterationForAnneal?: number; // Anneal时使用
  }
export type Stat_Service_Contract_Stat_Learning_HyperParamsMode = 0|1 ;

export interface Stat_Service_Contract_Stat_Learning_ModelBuilding {
      algorithm?: null; 
      hyperParamsSetup?: any; // 配置超参数
  }
export type Stat_Service_Contract_Stat_Learning_ModelDataType = 0|1 ;
export type Stat_Service_Contract_Stat_Learning_ModelReportType = 0|1 ;

export interface Stat_Service_Contract_Stat_Learning_ModifyStatTrainingReportNameInput {
      newReportName?: string; 
      taskVersionId?: number; 
  }

export interface Stat_Service_Contract_Stat_Learning_ReCreateTrainingTaskInput {
      taskVersionId?: number; 
      isAddModel?: boolean; // 数据是否纳入模型
  }

export interface Stat_Service_Contract_Stat_Learning_Split {
      method?: null; 
      testRatio?: number; // how=random 时使用，测试集比例，默认0.3
      stratifyTarget?: null; 
      splitCol?: string; // how=temporal 时使用，选择的时间变量名称
      cutPoint?: string; // how=temporal 时使用，大于等于该时间点进行划分  选择的时间日期
      temporalSplitType?: null; 
  }
export type Stat_Service_Contract_Stat_Learning_SplitMethod = 0|1 ;
export type Stat_Service_Contract_Stat_Learning_StratifyTargetType = 0|1 ;
export type Stat_Service_Contract_Stat_Learning_TemporalSplitType = 0|1 ;

export interface Stat_Service_Contract_Stat_Learning_TrainingParameter {
      split?: null; 
      featureSelection?: null; 
      hyperParamsMode?: null; 
      manualModelBuilding?: Stat_Service_Contract_Stat_Learning_ModelBuilding[]; // 超参调优
      autoModelBuilding?: null; 
      crossValidation?: number; // cv 交叉验证折数
      globalRandomSeed?: number; // 随机数种子
  }

export interface Stat_Service_Contract_Stat_Learning_TrainingStatusPostBackInput {
      aiTaskId?: string; 
      status?: string; 
      message?: string; 
  }

export interface Stat_Service_Contract_Stat_Predictive_ModelPredictionTaskInput {
      predictiveType?: null; 
      responseVariableName?: string; 
      responseVariableId?: number; 
      predictiveModels?: Stat_Service_Contract_Stat_Predictive_PredictionModel[]; 
      predictiveVariables?: Stat_Service_Contract_Stat_Predictive_PredictionVariable[]; 
  }

export interface Stat_Service_Contract_Stat_Predictive_PredictionModel {
      taskVersionId?: number; 
      aiTaskId?: string; 
      algorithmType?: string; 
  }

export interface Stat_Service_Contract_Stat_Predictive_PredictionVariable {
      name?: string; 
      type?: string; 
      level?: []; 
  }

export interface Stat_Service_Contract_Syncdata_Input_DataSetVariableSelectDto {
      variableUniqueCode?: string; 
      dataSourceType?: null; 
      rowIndex?: number; // 矩阵控件行索引
      attributeUnionCodes?: string[]; // BDS结构拆分获取属性
  }

export interface Stat_Service_Contract_Syncdata_Input_GetSyncDataPageInput {
      pageSize?: number; 
      pageIndex?: number; 
      keyWord?: string; // 关键词
  }

export interface Stat_Service_Contract_Syncdata_Input_QuoteSyncDataInput {
      syncDataId?: number; // 更新数据id
  }

export interface Stat_Service_Contract_Syncdata_Input_SubVariableSyncDataInput {
      targets?: Stat_Service_Contract_Dto_TargetDto[]; 
  }

export interface Stat_Service_Contract_Syncdata_Input_UpdateSyncDataNameInput {
      syncDataId?: number; // 更新数据id
      name?: string; 
  }

export interface Stat_Service_Contract_Syncdata_Input_VariableSyncDataInput {
      projectCode?: string; 
      dataSetVariables?: Stat_Service_Contract_Syncdata_Input_DataSetVariableSelectDto[]; 
  }

export interface Stat_Service_Contract_Syncdata_Output_SyncDataDetailDto {
      id?: number; 
      content?: string; 
      count?: number; 
      createTime?: string; 
      syncDataType?: null; 
  }

export interface Stat_Service_Contract_Syncdata_Output_SyncDataOutputDto {
      id?: number; 
      name?: string; 
      content?: string; 
      createTime?: string; 
      completeTime?: string; 
      isComplete?: boolean; 
      details?: Stat_Service_Contract_Syncdata_Output_SyncDataDetailDto[]; 
  }

export interface Stat_Service_Infrastructure_SandBox_Content {
      type?: string; 
      name?: string; 
      contents?: Stat_Service_Infrastructure_SandBox_Content[]; 
  }

export interface Stat_Service_Infrastructure_SandBox_TreeResult {
      type?: string; 
      name?: string; 
      contents?: Stat_Service_Infrastructure_SandBox_Content[]; 
      directories?: number; 
      files?: number; 
  }
