/**
 * 本文件通过脚本生成，请勿直接修改内部内容
 */


export interface Collection_Service_Contract_DataSourceFrom_Input_AddDataFromIrInput {
      sourceQueryId?: number; // 来源查询ID
      displayMode?: null; 
      headerFilters?: Common_Contract_IR_Result_QueryResultHeaderFilterInput[]; // 表头筛选信息
      collectionId?: number; // 加入已有收藏
  }

export interface Collection_Service_Contract_DataSourceFrom_Input_AddDataFromStatInput {
      statId?: number; // 数据探索Id
      sourceQueryId?: number; // 来源查询ID
  }

export interface Collection_Service_Contract_DataSourceFrom_Input_AddDataFromSubscribeInput {
      collectId?: number; // 收藏主键Id
      collectName?: string; // 收藏名称
      type?: null; 
      sampleSize?: number; // 纳排人数
      startDate?: string; // 开始日期
      endDate?: string; // 结束日期
  }

export interface Collection_Service_Contract_DataSourceFrom_Input_CreateAndAddDataFromIrInput {
      sourceQueryId?: number; // 来源查询ID
      displayMode?: null; 
      headerFilters?: Common_Contract_IR_Result_QueryResultHeaderFilterInput[]; // 表头筛选信息
      collectType?: null; 
      projectCode?: string; // 项目code;来源RDR标识、搜索、专库id等（默认值query）
      name?: string; // 收藏夹名称
      subscribeStatus?: null; 
      type?: null; 
      sampleSize?: number; // 纳排人数
      startDate?: string; // 开始日期
      endDate?: string; // 结束日期
  }

export interface Collection_Service_Contract_DataSourceFrom_Output_AddDataFromStatOutput {
      collectId?: number; // 收藏主键id
      collectName?: string; // 收藏夹名称
  }

export interface Collection_Service_Contract_HomePage_Input_AddCollectInput {
      name?: string; // 收藏夹名称
      collectType?: null; 
      projectCode?: string; // 项目code;来源RDR标识、搜索、专库id等（默认值query）
  }

export interface Collection_Service_Contract_HomePage_Input_HomePageListInput {
      pageSize?: number; 
      pageIndex?: number; 
      keyword?: string; // 模糊匹配字段
  }

export interface Collection_Service_Contract_HomePage_Input_UpdateCollectNameInput {
      name?: string; // 收藏夹名称
  }

export interface Collection_Service_Contract_HomePage_Input_UpdateCollectSubscribeInput {
      queryId?: number; // 搜索Id
      status?: null; 
      type?: null; 
      startDate?: string; // 开始日期
      endDate?: string; // 结束日期
      sampleSize?: number; // 纳排人数
  }

export interface Collection_Service_Contract_HomePage_Output_AddCollectOutput {
      collectId?: number; // 收藏夹主键Id
  }

export interface Collection_Service_Contract_HomePage_Output_CheckCollectNameOutput {
      isOk?: boolean; // 是否OK ，true 可用，false 不可用
  }

export interface Collection_Service_Contract_HomePage_Output_CollectDetailsOutput {
      queryExpressionDescription?: string; // 旧表达式
      collectId?: number; // 收藏主键Id
      collectName?: string; // 收藏名称
      subscribeStatus?: null; 
      type?: null; 
      sampleSize?: number; // 纳排人数
      startDate?: string; // 开始日期
      endDate?: string; // 结束日期
      collectType?: null; 
      status?: null; 
  }

export interface Collection_Service_Contract_HomePage_Output_CollectionListOutput {
      data?: Collection_Service_Contract_HomePage_Output_CollectionListOutputData[]; // 数据集合
      total?: number; // 总条数
  }

export interface Collection_Service_Contract_HomePage_Output_CollectionListOutputData {
      collectId?: number; // 收藏夹主键Id
      name?: string; // 收藏夹名称
      collectType?: null; 
      projectCode?: string; // 项目code;来源RDR标识、搜索、专库id等（默认值query）
  }

export interface Collection_Service_Contract_HomePage_Output_GetCollectSubscribeOutput {
      subscribeId?: number; // 订阅主键Id
      name?: string; // 收藏夹名称
      queryId?: number; // 搜索Id
      queryExpressionDescription?: string; // 搜索表达式描述
      status?: null; 
      type?: null; 
      startDate?: string; // 开始日期
      endDate?: string; // 结束日期
      sampleSize?: number; // 纳排人数
      collectType?: null; 
  }

export interface Collection_Service_Contract_HomePage_Output_HomePageListOutput {
      dataList?: Collection_Service_Contract_HomePage_Output_HomePageListOutput_Data[]; // 数据集合
      total?: number; // 总条数
  }

export interface Collection_Service_Contract_HomePage_Output_HomePageListOutput_Data {
      collectId?: number; // 收藏夹主键Id
      name?: string; // 收藏夹名称
      subscribeStatus?: null; 
      totalPatientCount?: number; // 总患者
      addPatientCount?: number; // 新增患者数
      totalVisitCount?: number; // 总病例
      addVisitCount?: number; // 新增病例数
      createTime?: string; // 创建时间
      isCanSubscribe?: boolean; // 是否可订阅
      subscribeFrequency?: string; // 订阅频率
      subscribeUpdateTime?: string; // 更新时间
      sourceQueryId?: number; // 智能搜索 - QueryId
      sourceTypeEnum?: null; 
      collectType?: null; 
      projectCode?: string; // 专病Code/搜索Code
  }

export interface Collection_Service_Contract_PatientList_Input_AddLabelCollectInput {
      labelName?: string; // 标签名称
      labelColor?: string; // 标签颜色
      labelType?: null; 
  }

export interface Collection_Service_Contract_PatientList_Input_AddPatientLabelInput {
      isAll?: boolean; // 是否 全选所有页
      patientIds?: number[]; // 患者
      labelIds?: number[]; // 标签Id
      headerFilters?: Common_Contract_IR_Result_QueryResultHeaderFilterInput[]; 
  }

export interface Collection_Service_Contract_PatientList_Input_AddQueryCollectInput {
      name?: string; // 名称
      variables?: Collection_Service_Contract_PatientList_Input_AddQueryCollectInput_Variable[]; // 变量集合
  }

export interface Collection_Service_Contract_PatientList_Input_AddQueryCollectInput_Variable {
      order?: number; // 排序
      variableUniqueCode?: string; // 唯一变量Code
      isShow?: boolean; // 是否展示
      isDefault?: boolean; // 是否为默认值
      isFixed?: boolean; // 是否置顶
      polymerizationMethod?: null; 
  }

export interface Collection_Service_Contract_PatientList_Input_AdvancedFilteringInput {
      queryName?: string; // 筛选名称
      queryExpressionDescription?: string; 
      filterRule?: null; 
  }
// 子条件
export interface Collection_Service_Contract_PatientList_Input_CollectionDataFilterRule {
      logicalOperator?: null; 
      variableId?: string; // 变量id
      variableUniqueCode?: string; // 变量唯一编码
      relationalOperator?: null; 
      statisticVarType?: null; 
      values?: string[]; // 值
      unitCode?: string; // 单位
      childrenDataFilterRules?: Collection_Service_Contract_PatientList_Input_CollectionDataFilterRule[]; // 同一记录子条件
  }

export interface Collection_Service_Contract_PatientList_Input_CollectionFilterRule {
      groupRules?: Collection_Service_Contract_PatientList_Input_CollectionGroupRule[]; // 目前只支持一个组
  }
// 条件组
export interface Collection_Service_Contract_PatientList_Input_CollectionGroupRule {
      name?: string; // 组名
      logicalOperator?: null; 
      dataFilterRules?: Collection_Service_Contract_PatientList_Input_CollectionDataFilterRule[]; // 搜索条件
      childrenGroupRule?: Collection_Service_Contract_PatientList_Input_CollectionGroupRule[]; // 子组条件
  }

export interface Collection_Service_Contract_PatientList_Input_DeletePatientInput {
      displayMode?: null; 
      isAll?: boolean; // 是否 全选所有页
      values?: number[]; 
      headerFilters?: Common_Contract_IR_Result_QueryResultHeaderFilterInput[]; // 表头筛选信息
  }

export interface Collection_Service_Contract_PatientList_Input_GetPatientListInput {
      pageSize?: number; 
      pageIndex?: number; 
      displayMode?: null; 
      queryId?: number; // 搜索流水id
      headerFilters?: Common_Contract_IR_Result_QueryResultHeaderFilterInput[]; // 表头筛选信息
      tittles?: Common_Contract_IR_Result_QueryResultVariableTitleInput[]; // 表头列信息
      keyWord?: string; // 模糊匹配（患者Id、姓名）
      isExport?: boolean; // 是否导出，导出的不过滤高筛和表头筛选
  }

export interface Collection_Service_Contract_PatientList_Input_GetTitleDistinctInput {
      pageSize?: number; 
      pageIndex?: number; 
      displayMode?: null; 
      queryId?: number; // 搜索流水id
      headerFilters?: Common_Contract_IR_Result_QueryResultHeaderFilterInput[]; // 表头筛选信息
      variableUniqueCode?: string; // 变量唯一Code
      keyWord?: string; // 模糊匹配
  }

export interface Collection_Service_Contract_PatientList_Input_SaveIndicatorInput {
      displayMode?: null; 
      variables?: Collection_Service_Contract_PatientList_Input_SaveIndicatorInputVariables[]; // 变量具体配置
  }

export interface Collection_Service_Contract_PatientList_Input_SaveIndicatorInputVariables {
      order?: number; // 排序
      displayName?: string; // 显示名称
      variableUniqueCode?: string; // 唯一变量Code
      isShow?: boolean; // 是否展示
      isFixed?: boolean; // 是否置顶
      polymerizationMethod?: null; 
      isDefault?: boolean; // 是否默认固定列
  }

export interface Collection_Service_Contract_PatientList_Output_AdvancedFilterHistoryDetailOutput {
      queryName?: string; 
      queryExpressionDescription?: string; 
      filterRule?: null; 
      statVariables?: Common_Contract_Meta_Variable_GetVariableOutput[]; 
      nodes?: Collection_Service_Contract_PatientList_Output_CollectionNode[]; 
  }

export interface Collection_Service_Contract_PatientList_Output_AdvancedFilterHistoryOutput {
      queryId?: number; // 收藏夹-高级筛选-高筛Id
      collectId?: number; // 收藏夹主键id
      createTime?: string; // 创建时间
      queryName?: string; // 筛选Title名称
      queryExpressionDescription?: string; // 搜索表达式描述
      queryExpression?: string; // 搜索表达式
  }

export interface Collection_Service_Contract_PatientList_Output_AdvancedFilteringOutput {
      queryId?: string; // 高级筛选Id
  }

export interface Collection_Service_Contract_PatientList_Output_AdvancedFilterOutput {
      queryId?: number; // 收藏夹-高级筛选-高筛Id
      collectId?: number; // 收藏夹主键id
      createTime?: string; // 创建时间
      queryName?: string; // 筛选Title名称
      queryExpressionDescription?: string; // 搜索表达式描述
      queryExpression?: string; // 搜索表达式
  }

export interface Collection_Service_Contract_PatientList_Output_AdvancedFilterSearchOutput {
      resultType?: null; 
      nodes?: Common_Contract_IR_Nodes_SearchNodeOutput_SearchNodeInfo[]; // 节点列表
      variables?: Common_Contract_IR_Nodes_NodeVariableInfo[]; // 节点后的变量列表
      hasSubVariable?: boolean; // 是否包含子变量
  }

export interface Collection_Service_Contract_PatientList_Output_AdvancedFilterVariableCountOutput {
      variableCount?: number; // 变量总条数
  }

export interface Collection_Service_Contract_PatientList_Output_AdvancedFilterVariableDistinctDataOutput {
      values?: string[]; // 数据
      total?: number; // 总条数
  }

export interface Collection_Service_Contract_PatientList_Output_AdvancedFilterVariableLevelOutput {
      nodeId?: number; // 节点id
      domainId?: number; // 域id
      groupId?: number; // 变量组id（可能是nodeId或variableId）
      nodeName?: string; // 层级名称
      sort?: number; // 顺序
      hasPermission?: boolean; // 是否有权限
      children?: Common_Contract_IR_Nodes_GetNodesLevelsOutput[]; // 子层级
  }

export interface Collection_Service_Contract_PatientList_Output_AdvancedFilterVariableListOutput {
      groupName?: string; // 组名
      groupId?: number; // 组id 可能是 nodeid 或 variableid
      groupType?: null; 
      variableTotal?: number; // 该组变量总数
      nodes?: Common_Contract_IR_Nodes_GetNodeVariableTreeOutput_NodeInfo[]; // 节点
      variables?: Common_Contract_IR_Nodes_NodeVariableInfo[]; // 变量列表（默认显示前30条）
  }

export interface Collection_Service_Contract_PatientList_Output_CheckLabelCollectOutput {
      isOk?: boolean; // 是否可用  true 可用，false 不可用
  }

export interface Collection_Service_Contract_PatientList_Output_CheckQueryCollectOutput {
      isOk?: boolean; // 是否可用  true 可用，false 不可用
  }

export interface Collection_Service_Contract_PatientList_Output_CollectionNode {
      variableCode?: string; 
      node?: null; 
  }

export interface Collection_Service_Contract_PatientList_Output_CopyPatientInput {
      displayMode?: null; 
      addToCollectId?: number; // 需要添加到的收藏夹主键Id
      isAll?: boolean; // 是否 全选所有页
      values?: number[]; // 数据信息
      headerFilters?: Common_Contract_IR_Result_QueryResultHeaderFilterInput[]; // 表头筛选信息
  }

export interface Collection_Service_Contract_PatientList_Output_GetPatientListOutput {
      resultVariable?: Collection_Service_Contract_PatientList_Output_GetPatientListOutputDataTitles[]; // 搜索列表表头数据
      resultVariableMerge?: Common_Contract_IR_Result_QueryResultVariableMerge[]; // 表头合并数据
      resultDatas?: Common_Contract_IR_Result_QueryResultData[]; // 数据
      total?: number; // 列表页数据总量
      patientCount?: number; // 列表页患者总数
      visitCount?: number; // 列表页就诊总数
  }

export interface Collection_Service_Contract_PatientList_Output_GetPatientListOutputDataTitles {
      variableId?: string; // 变量id
      variableUniqueCode?: string; // 变量编码
      standardCh?: string; // 变量显示名称
      canFilter?: boolean; // 表头是否可以过滤
      canSort?: boolean; // 表头是否可以排序
      canMore?: boolean; // 表头是否可以查看值的详细信息
      isShow?: boolean; // 是否展示
      isDefault?: boolean; // 是否是默认固定的列
      displayName?: string; // DisplayName
      isFixed?: boolean; // 固定列
      variableDataType?: null; 
      aggregation?: null; 
      calculateInfo?: null; 
      isLink?: boolean; 
      linkType?: null; 
      observationIndicatorId?: number; // 收藏夹观测指标主键Id
      isTagCell?: boolean; // 是否为标签
      isAgeCell?: boolean; // 是否为年龄
  }

export interface Collection_Service_Contract_PatientList_Output_GetQueryCollectListOutput {
      data?: Collection_Service_Contract_PatientList_Output_GetQueryCollectListOutput_Data[]; // 数据
      total?: number; // 总条数
  }

export interface Collection_Service_Contract_PatientList_Output_GetQueryCollectListOutput_Data {
      queryCollectId?: number; // 收藏-指标Id
      name?: string; // 名称
  }

export interface Collection_Service_Contract_PatientList_Output_GetQueryCollectOutput {
      variables?: Common_Contract_Collection_PatientList_Output_PatientIndicatorsOutput[]; 
  }

export interface Collection_Service_Contract_PatientList_Output_GetTitleDistinctOutput {
      values?: Collection_Service_Contract_PatientList_Output_GetTitleDistinctOutput_DistinctValues[]; // 数据集合
  }

export interface Collection_Service_Contract_PatientList_Output_GetTitleDistinctOutput_DistinctValues {
      display?: string; // 显示名称
      value?: string; // 名称
      count?: number; // 总条数
  }

export interface Collection_Service_Contract_PatientList_Output_LabelCollectListOutput {
      labelCollectId?: number; // 标签主键Id
      labelName?: string; // 标签名称
      labelColor?: string; // 标签颜色
      labelType?: null; 
      deletable?: boolean; // 是否可删除
  }

export interface Collection_Service_Contract_ResultDetil_CollectionVariableDetailInput {
      hitData?: string; 
      collectId?: number; 
      variableId?: string; 
      variableUniqueCode?: string; 
      visitId?: number; 
      autoIdSet?: number[]; 
      patientId?: number; 
      isBindParent?: boolean; 
      isAnomity?: boolean; 
  }

export interface Collection_Service_Contract_ResultDetil_CollectRawPopInput {
      isAnomity?: boolean; 
      patientId?: number; 
      collectId?: number; 
  }

export interface Collection_Service_Contract_Venn_Input_RunningVennInput {
      collectIds?: number[]; // 收藏夹集合
  }

export interface Collection_Service_Contract_Venn_Input_SaveToCollectInput {
      vennHistoryId?: number; // 韦恩图历史Id
      name?: string; // 收藏夹名称
      collectIds?: number[]; // 操作病例夹标识组
      collectType?: null; 
      projectCode?: string; // 项目code;来源RDR标识、搜索、专库id等（默认值query）
      containingPartsFromTwo?: Collection_Service_Contract_Venn_Output_RunningVennOutputItemPartFromTwo[]; // 二包含块
      containingPartsFromThree?: Collection_Service_Contract_Venn_Output_RunningVennOutputItemFromPartThree[]; // 三包含块
  }

export interface Collection_Service_Contract_Venn_Output_RunningVennOutput {
      vennDiagramStatItems?: Collection_Service_Contract_Venn_Output_RunningVennOutputItem[]; 
      vennHistoryId?: number; // 韦恩图历史Id
  }

export interface Collection_Service_Contract_Venn_Output_RunningVennOutputItem {
      description?: string; // 描述，如队列1并队列2
      name?: string; // 名称，如AB
      count?: number; // 数量
      vennDiagramPartFromTwo?: null; 
      vennDiagramPartFromThree?: null; 
  }
export type Collection_Service_Contract_Venn_Output_RunningVennOutputItemFromPartThree = 1|2|3|4|5|6|7 ;
export type Collection_Service_Contract_Venn_Output_RunningVennOutputItemPartFromTwo = 1|2|3 ;

export interface Collection_Service_Contract_Venn_Output_VennHistoryOutput {
      data?: Collection_Service_Contract_Venn_Output_VennHistoryOutputData[]; // 数据
      total?: number; // 总条数
  }

export interface Collection_Service_Contract_Venn_Output_VennHistoryOutputData {
      vennHistoryId?: number; // 韦恩图历史主键Id
      tipNumber?: string; // 序号
      collectNames?: string[]; // 组数据
      newCollectName?: string; // 生成新收藏夹名称
      creatDateTime?: string; // 时间
      saveToCollectType?: null; 
  }

export interface Collection_Service_Contract_Visualization_Input_AddVariableTitleInput {
      variables?: Collection_Service_Contract_Visualization_Input_AddVariableTitleInputVariables[]; // 变量信息
  }

export interface Collection_Service_Contract_Visualization_Input_AddVariableTitleInputVariables {
      name?: string; // 变量名称
      variableUniqueCode?: string; // 变量唯一编码
  }

export interface Collection_Service_Contract_Visualization_Output_CollectVariablesOutput {
      name?: string; // 名称
      variableUniqueCode?: string; // 变量唯一Code
  }

export interface Collection_Service_Contract_Visualization_Output_NanometerDataOutput {
      totalPatientNumber?: number; // 患者数
      totalVisitNumber?: number; // 就诊数
      newPatientNumber?: number; // 新 - 患者数
      newVisitNumber?: number; // 新 - 就诊数
  }

export interface Collection_Service_Contract_Visualization_Output_SummaryChartOutput {
      titleName?: string; // 图表标题
      firstEnrollTime?: string; // 第一例患者入组时间
      latestEnrollTime?: string; // 最新一例患者入组时间
      chars?: Collection_Service_Contract_Visualization_Output_SummaryChartOutputItem[]; // 报表数据
  }

export interface Collection_Service_Contract_Visualization_Output_SummaryChartOutputChartItem {
      enrollTime?: string; // 入组时间
      quantity?: number; // 患者总数/人
  }

export interface Collection_Service_Contract_Visualization_Output_SummaryChartOutputItem {
      description?: string; // chart描述
      chartType?: string; // chart类型 (line、bar)
      summaryItems?: Collection_Service_Contract_Visualization_Output_SummaryChartOutputChartItem[]; // 具体数据
  }

export interface Collection_Service_Contract_Visualization_Output_VariableChartOutput {
      titleName?: string; // 图表标题
      chartType?: string[]; // 可展示图表类型
      chartData?: Collection_Service_Contract_Visualization_Output_VariableChartOutputCharData[]; // 图表集合
  }

export interface Collection_Service_Contract_Visualization_Output_VariableChartOutputCharData {
      name?: string; // 值域名称
      value?: number; // 值域数据量
      unit?: string; // 数据量词单位
  }

export interface Collection_Service_Contract_Visualization_Output_VariableScatterOutput {
      titleName?: string; // 标题
      chartType?: string; // 图表类型
      chartData?: Collection_Service_Contract_Visualization_Output_VariableScatterOutputChartData[]; // 具体数据
      cacheTime?: string; // 缓存时间
  }

export interface Collection_Service_Contract_Visualization_Output_VariableScatterOutputChartData {
      percent?: string; // 填充率百分比
      total?: number; // 总条数
      value?: number; // 有值患者数
      name?: string; // 变量名称
      variableUniqueCode?: string; // 变量唯一Code
  }

export interface Common_Contract_Collection_PatientList_Input_FilterResultPVInput {
      displayMode?: null; 
      headerFilters?: Common_Contract_IR_Result_QueryResultHeaderFilterInput[]; 
  }

export interface Common_Contract_Collection_PatientList_Output_PatientIndicatorsOutput {
      mergeTo?: string; // 合并变量
      methodTypeOptions?: RealData_Entity_Contract_Enums_AggregationEnum[]; // 变量的可选聚合方式
      parentGroupIds?: number[]; // 按照从最外层到内层的顺序给出变量的父级域或者层级Id
      parentGroupNames?: string[]; // 按照从最外层到内层的顺序给出变量的父级域或者层级名称
      parentVariableIds?: number[]; // 按照从最外层到内层的顺序给出变量的父级变量Id，这只算变量的Id
      parentVariableNames?: string[]; // 按照从最外层到内层的顺序给出变量的父级变量名称
      variableId?: number; // 变量Id
      variableUniqueCode?: string; // 唯一标识
      standardCh?: string; // 标准名称
      isFixed?: boolean; // 是否置顶
      isShow?: boolean; // 是否展示在二维表内
      displayName?: string; // 名称
      isDefault?: boolean; // 是否为默认值
      polymerizationMethod?: null; 
  }
export type Common_Contract_Export_File_Common_ExportFormatEnum = 1|2|3|4|5|6|7 ;
export type Common_Contract_Export_File_Common_ExportRuleEnum = 1|2|3 ;

export interface Common_Contract_Export_File_CreateApprovalFileStreamInput {
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
  }

export interface Common_Contract_Export_File_CreateFileStreamInput {
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
  }

export interface Common_Contract_Export_File_EncryptionInfoInput {
      encryptionType?: null; 
      publicKeyString?: string; // 公钥字符串
  }

export interface Common_Contract_Export_File_ExportRetryInput {
      actId?: number; 
      fileName?: string; 
      ticket?: string; 
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

export interface Common_Contract_Export_File_GetExportFileSummaryInfoInput {
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
  }

export interface Common_Contract_Export_File_TableContainerOutput {
      sheetName?: string; // 工作簿名称
      header?: [][]; // 表头
      rows?: [][]; // 行数据
  }
// 表头信息
export interface Common_Contract_Export_File_TableHeaderInfo {
      value?: string; // 表头内容
      colSpan?: number; // 跨列数量
      rowSpan?: number; // 跨行数量
  }
// CreateExportHistoryInput
export interface Common_Contract_IR_Export_CreateExportHistoryInput {
      isQuery?: boolean; // 是否是通用科研域
      projectCode?: string; // ProjectCode
      querySourceType?: null; 
      fileName?: string; // 导出文件名
      exportArgument?: string; // 导出参数
  }

export interface Common_Contract_IR_Export_ExportDateRanger {
      enable?: boolean; 
      defaultExportDays?: number; 
      defaultValue?: string[]; 
  }

export interface Common_Contract_IR_Export_GetExportConfigOutput {
      exportDateRanger?: null; 
  }

export interface Common_Contract_IR_Export_GetExportConfirmInfoOutput {
      subjectCount?: number; // 院外+院内患者数
      visitCount?: number; // 病历数
      spendTime?: string; // 预计导出时间
  }

export interface Common_Contract_IR_Export_GetExportFileNameOutput {
      fileName?: string; // 文件名
  }
// 获取导出预览
export interface Common_Contract_IR_Export_GetExportPreviewOutput {
      tableContainers?: Common_Contract_Export_File_TableContainerOutput[]; // 表格数据
  }

export interface Common_Contract_IR_Nodes_GetNodesLevelsOutput {
      nodeId?: number; // 节点id
      domainId?: number; // 域id
      groupId?: number; // 变量组id（可能是nodeId或variableId）
      nodeName?: string; // 层级名称
      sort?: number; // 顺序
      hasPermission?: boolean; // 是否有权限
      children?: Common_Contract_IR_Nodes_GetNodesLevelsOutput[]; // 子层级
  }
// BDS 域属性
export interface Common_Contract_IR_Nodes_GetNodeVariableTreeOutput_AttributeInfo {
      variableId?: number; // 变量id
      name?: string; // 变量名
      isSelected?: boolean; // 是否选中
      variableUniqueCode?: string; // 变量唯一编码
  }
// 节点信息
export interface Common_Contract_IR_Nodes_GetNodeVariableTreeOutput_NodeInfo {
      id?: number; // 节点id
      domainId?: number; // 域id 可空
      hasPermission?: boolean; // 是否有权限
      name?: string; // 节点名
      sort?: number; // 顺序
      attributes?: Common_Contract_IR_Nodes_GetNodeVariableTreeOutput_AttributeInfo[]; // BDS 域属性
      releateVariableIdWithTermLevel?: null; 
      domainHierarchyInfo?: null; 
  }
// 节点下的变量信息
export interface Common_Contract_IR_Nodes_NodeVariableInfo {
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
      tipBoard?: null; 
  }
// 变量提示板信息
export interface Common_Contract_IR_Nodes_NodeVariableInfo_TipBoardInfo {
      fillRate?: number; // 填充率
      description?: string; // 变量说明
      fillCount?: number; // 填充总数
      examples?: string[]; // 变量举例
  }
// 搜索节点信息
export interface Common_Contract_IR_Nodes_SearchNodeOutput_SearchNodeInfo {
      nodeId?: number; // 节点id
      hasPermission?: boolean; // 是否有权限
      domainId?: number; // 域id
      name?: string; // 节点名
      releateVariableIdWithTermLevel?: null; 
      domainHierarchyInfo?: null; 
      sort?: number; // 顺序
  }
export type Common_Contract_IR_Nodes_SearchResultType = 0|1 ;
export type Common_Contract_IR_Nodes_VariableGroupType = 0|1 ;
export type Common_Contract_IR_Result_LinkType = 0|1|2|3|4|5 ;
// 搜索列表数据
export interface Common_Contract_IR_Result_QueryResultData {
      patientId?: number; // 患者id
      visitNum?: number; // 就诊编号
      parentId?: string; // 父级域名的ID
      cells?: Common_Contract_IR_Result_QueryResultVariableData[]; // 数据集合
      hasSubRow?: boolean; // 是否有子级别
      subRows?: Common_Contract_IR_Result_QueryResultData[]; // 子级数据
  }
export type Common_Contract_IR_Result_QueryResultDisplayModeEnum = 0|1|2 ;
// 表头筛选
export interface Common_Contract_IR_Result_QueryResultHeaderFilterInput {
      isSelectAll?: boolean; // 是否选择全部
      variableId?: number; // 变量id
      variableUniqueCode?: string; // 变量唯一编码
      values?: string[]; // 选中的过滤值集合,该集合有值时优先正向过滤(即使用该集合作为包含条件)
      excludeValues?: string[]; // 排除的过滤值集合,该集合一般配合 SearchValue 使用，搜索后反选掉某些项
      relationalOperator?: null; 
  }
// 合并变量的集合
export interface Common_Contract_IR_Result_QueryResultMegerVariableBase {
      variableUniqueCode?: string; // VariableUniqueCode
  }

export interface Common_Contract_IR_Result_QueryResultRawPopOutput {
      titles?: Common_Contract_IR_Result_QueryVariableResultTitleOutput[]; 
      dataSet?: Common_Contract_IR_Result_QueryResultData[]; 
      total?: number; 
      varExps?: string; 
  }
// ResultVariableData
export interface Common_Contract_IR_Result_QueryResultVariableData {
      data?: string; // 变量数据
      hit?: boolean; // 是否命中
      htmlContent?: string; // Html输出
      variableDataStyle?: null; 
      observationIndicatorId?: number; // 行数据Id
      variableUniqueCode?: string; 
      isTagCell?: boolean; // 是否为标签
      tips?: string; 
  }
// QueryResultVariableDataStyle
export interface Common_Contract_IR_Result_QueryResultVariableDataStyle {
      color?: string; // 特殊列显示颜色
      showText?: string; // 列数据附加显示文案如果需要展示符号，如向上箭头/向下箭头等，则此处为&quot;↑&quot;
  }
// 表头合并模型
export interface Common_Contract_IR_Result_QueryResultVariableMerge {
      mergeToVariable?: null; 
      mergeVariables?: Common_Contract_IR_Result_QueryResultMegerVariableBase[]; // 合并的变量集合
  }
// 表头集合不传时，根据流水获取搜索的变量，再补充上固定的显示变量
export interface Common_Contract_IR_Result_QueryResultVariableTitleInput {
      variableId?: number; // 变量ID
      variableUniqueCode?: string; // 变量唯一编码
      attribute?: number; // BDS变量属性
      orderBy?: string; // 排序方式
      orderIndex?: number; // 排序次序
      displayName?: string; // 展示名称
      aggregate?: null; 
  }
// 搜索列表表头模型
export interface Common_Contract_IR_Result_QueryResultVariableTitleOutput {
      variableId?: string; // 变量id
      variableUniqueCode?: string; // 变量编码
      standardCh?: string; // 变量显示名称
      canFilter?: boolean; // 表头是否可以过滤
      canSort?: boolean; // 表头是否可以排序
      canMore?: boolean; // 表头是否可以查看值的详细信息
      isShow?: boolean; // 是否展示
      isDefault?: boolean; // 是否是默认固定的列
      displayName?: string; // DisplayName
      isFixed?: boolean; // 固定列
      variableDataType?: null; 
      aggregation?: null; 
      calculateInfo?: null; 
      isLink?: boolean; 
      linkType?: null; 
  }

export interface Common_Contract_IR_Result_QueryVariableResultOutput {
      titles?: Common_Contract_IR_Result_QueryVariableResultTitleOutput[]; 
      dataSet?: Common_Contract_IR_Result_QueryResultData[]; 
      total?: number; 
      varExps?: string; 
      hasParent?: boolean; 
  }

export interface Common_Contract_IR_Result_QueryVariableResultTitleOutput {
      name?: string; 
      variableDataType?: null; 
      variableUniqueCode?: string; 
  }

export interface Common_Contract_Meta_CodeSystem_QueryCodeSetOut {
      codeSysCode?: string; // 所属值域，关联CodeSystemCode
      value?: string; // 值
      name?: string; 
      code?: string; 
      sort?: number; // 排序
  }

export interface Common_Contract_Meta_Node_DomainHierarchyInfo {
      parentDomain?: null; 
      subSetDomains?: Common_Contract_Meta_Node_DomainInfo[]; // 子集域
  }
// 域
export interface Common_Contract_Meta_Node_DomainInfo {
      domainId?: number; // 域Id
      domainCode?: string; // 域Code
  }

export interface Common_Contract_Meta_Node_NodeVariableStaticInfo {
      normalVariableIds?: number[]; // 物理变量集合
      termVariableIds?: number[]; // 术语变量集合
      termAsValueVariableIds?: number[]; // 值域术语变量集合
      canCheckVariableIds?: System_Int64[]; // 可以勾选的变量集合
  }

export interface Common_Contract_Meta_Node_QueryNodeOut {
      nodeId?: number; // Node节点id
      nodePId?: number; // 父层级id
      domainId?: number; // 层级关联域
      standardCh?: string; // 层级显示名称
      abbreviation?: string; // 同义词名称
      sort?: number; // 排序
      queryTable?: string; // 数据查询来源表
      variables?: Common_Contract_Meta_Node_QueryVariableOut[]; // 挂载的变量集合
      subNodes?: Common_Contract_Meta_Node_QueryNodeOut[]; // 子层级集合
      hasPermission?: boolean; 
      hasSubNode?: boolean; // 是否有子层级
      hasVariable?: boolean; // 是否有挂载变量(没有就是单纯的虚拟层级)
      nodeVariableStaticInfo?: null; 
      hasTermGroupParent?: boolean; // 标识父层级上是关联术语变量的域层级
      releateVariableIdWithTermLevel?: null; 
      domainHierarchyInfo?: null; 
  }

export interface Common_Contract_Meta_Node_QueryNodeOut_TermDomainInfo {
      variableId?: number; 
      termUseType?: null; 
  }
// 查询变量实体
export interface Common_Contract_Meta_Node_QueryVariableOut {
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
      nodeId?: number; // 所属层级Node
      children?: Common_Contract_Meta_Node_QueryVariableOut[]; // 术语子层级
      hasSubVariable?: boolean; // 是否有术语子变量(可勾选的)
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

export interface Common_Contract_Meta_Variable_GetVariableOutput {
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
// 存储年龄计算信息
export interface Common_Contract_Research_VariableCalculateInfo {
      calculateTypeEnum?: null; 
      calCulateRelateVariableUniqueCode?: string; // 计算关联变量的UniqueCode
  }
export type Common_Contract_Research_VariableCalculateInfo_CalculateType = 1|2 ;

export interface RealData_Common_Contract_Common_Result {
      code?: null; 
      msg?: string; 
  }

export interface System_Collections_Generic_Dictionary_2__System_Int64 {
      code?: null; 
      msg?: string; 
      data?: any; 
  }

export interface System_Collections_Generic_List_1__Collection_Service_Contract_PatientList_Output_AdvancedFilterHistoryOutput {
      code?: null; 
      msg?: string; 
      data?: Collection_Service_Contract_PatientList_Output_AdvancedFilterHistoryOutput[]; 
  }

export interface System_Collections_Generic_List_1__Collection_Service_Contract_PatientList_Output_AdvancedFilterSearchOutput {
      code?: null; 
      msg?: string; 
      data?: Collection_Service_Contract_PatientList_Output_AdvancedFilterSearchOutput[]; 
  }

export interface System_Collections_Generic_List_1__Collection_Service_Contract_PatientList_Output_AdvancedFilterVariableLevelOutput {
      code?: null; 
      msg?: string; 
      data?: Collection_Service_Contract_PatientList_Output_AdvancedFilterVariableLevelOutput[]; 
  }

export interface System_Collections_Generic_List_1__Collection_Service_Contract_PatientList_Output_AdvancedFilterVariableListOutput {
      code?: null; 
      msg?: string; 
      data?: Collection_Service_Contract_PatientList_Output_AdvancedFilterVariableListOutput[]; 
  }

export interface System_Collections_Generic_List_1__Collection_Service_Contract_PatientList_Output_LabelCollectListOutput {
      code?: null; 
      msg?: string; 
      data?: Collection_Service_Contract_PatientList_Output_LabelCollectListOutput[]; 
  }

export interface System_Collections_Generic_List_1__Collection_Service_Contract_Visualization_Output_CollectVariablesOutput {
      code?: null; 
      msg?: string; 
      data?: Collection_Service_Contract_Visualization_Output_CollectVariablesOutput[]; 
  }

export interface System_Collections_Generic_List_1__Common_Contract_Collection_PatientList_Output_PatientIndicatorsOutput {
      code?: null; 
      msg?: string; 
      data?: Common_Contract_Collection_PatientList_Output_PatientIndicatorsOutput[]; 
  }
export type RealData_Common_Contract_Common_ResultCodeType = 0|400|401|403|500|700 ;
export type RealData_Entity_Contract_Enums_AggregationEnum = 0|1|2|3|4|5|6 ;
export type RealData_Entity_Contract_Enums_ApprovalFlow_ApprovalFlowTypeEnum = 0|1|2|3 ;
export type RealData_Entity_Contract_Enums_Collection_CollectionSubscribeCloseTypeEnum = 0|1 ;
export type RealData_Entity_Contract_Enums_Collection_CollectionSubscribeStatusEnum = 0|1|2 ;
export type RealData_Entity_Contract_Enums_Collection_CollectSourceTypeEnum = 0|1|2|3 ;
export type RealData_Entity_Contract_Enums_Collection_CollectStatusEnum = 0|1|2|5|99 ;
export type RealData_Entity_Contract_Enums_Collection_CollectTypeEnum = 0|1|2 ;
export type RealData_Entity_Contract_Enums_Edc_StudyLabelTypeEnum = 0|1 ;
export type RealData_Entity_Contract_Enums_EncryptionTypeEnum = 0|1 ;
export type RealData_Entity_Contract_Enums_Export_ExportDataRangeEnum = 1|2|3 ;
export type RealData_Entity_Contract_Enums_Research_Operator_LogicalOperatorEnum = 1|2|3 ;
export type RealData_Entity_Contract_Enums_Research_Operator_RelationalOperatorEnum = 1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|103|104|105|106|107|108|201|202 ;
export type RealData_Entity_Contract_Enums_Research_VariableControlTypeEnum = 1|2|3|4|5|6|13 ;
export type RealData_Entity_Contract_Enums_Research_VariableDataTypeEnum = 0|1|2|3|4|5|6|7|8 ;
export type RealData_Entity_Contract_Enums_Research_VariableExportAttributeTypeEnum = 0|1|2 ;
export type RealData_Entity_Contract_Enums_Research_VariableStatisticalTypeEnum = 1|2|3|4|5|6|7 ;
export type RealData_Entity_Contract_Enums_Research_VariableStorageStructureEnum = 1|2 ;
export type RealData_Entity_Contract_Enums_Search_QuerySourceType = 1|2|3|5|6|7 ;
export type RealData_Entity_Contract_Enums_StatVarType = 1|2|3|4|5|6|7 ;
export type RealData_Entity_Data_Collection_SaveToCollectInputAddTypeEunm = 0|1 ;

export interface System_Int64 {
  }
