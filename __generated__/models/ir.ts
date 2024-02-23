/**
 * 本文件通过脚本生成，请勿直接修改内部内容
 */

export type Common_Contract_Export_File_Common_ExportFormatEnum = 1|2|3|4|5|6|7 ;
export type Common_Contract_Export_File_Common_ExportRuleEnum = 1|2|3 ;

export interface Common_Contract_Export_File_CreateApprovalFileStreamInput {
      needApproval?: boolean; // 是否需要审批
      content?: null; // 导出信息，前端拼接的json
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

export interface Common_Contract_Export_File_CreateFileStreamInput {
      fileTicket?: string; // 由Platform颁发的文件标识，也作为消息发布的Key
      zipPassword?: string; // 导出的zip密码
      encryptionInfo?: null; 
      exportRule?: null; 
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

export interface Common_Contract_IR_Export_CheckExportTemplateOutput {
      isNameDuplicated?: boolean; // 模板名是否重复
  }
// CreateExportHistoryInput
export interface Common_Contract_IR_Export_CreateExportHistoryInput {
      fileName?: string; // 导出文件名
      exportArgument?: string; // 导出参数
      isQuery?: boolean; // 是否是通用科研域
      projectCode?: string; // ProjectCode
      querySourceType?: null; 
  }
// 创建导出模板
export interface Common_Contract_IR_Export_CreateExportTemplateInput {
      templateName?: string; // 模板名称
      exportArgument?: string; // 导出参数
      isQuery?: boolean; // 是否是通用科研域
      projectCode?: string; // ProjectCode
      querySourceType?: null; 
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
// 获取导出历史分组
export interface Common_Contract_IR_Export_GetExportHistoryGroupOutput {
      groupName?: string; // 组名
      exportHistoryDetails?: Common_Contract_IR_Export_GetExportHistoryGroupOutput_ExportHistoryDetail[]; // 导出历史参数详情
  }
// 导出历史详情
export interface Common_Contract_IR_Export_GetExportHistoryGroupOutput_ExportHistoryDetail {
      id?: number; // 详情编号
      fileName?: string; 
      exportArgument?: string; // 导出参数
  }
// 获取导出预览
export interface Common_Contract_IR_Export_GetExportPreviewOutput {
      tableContainers?: Common_Contract_Export_File_TableContainerOutput[]; // 表格数据
  }
// 获取导出模板
export interface Common_Contract_IR_Export_GetExportTemplateOutput {
      id?: number; // 模板ID
      templateName?: string; // 模板名称
      exportArgument?: string; // 导出参数
  }

export interface Common_Contract_IR_Nodes_GetCommonVariableInput {
      isQuery?: boolean; // 是否是通用科研域
      projectCode?: string; // ProjectCode
      querySourceType?: null; 
  }

export interface Common_Contract_IR_Nodes_GetNodesLevelsInput {
      variableType?: null; 
      domainLevel?: RealData_Entity_Contract_Enums_Research_DomainLevelEnum[]; // 域级别，专病库的患者列表只用P，我的课题事件组配置只要V和E
      removeBds?: boolean; // 移除Bds 类型
      isQuery?: boolean; // 是否是通用科研域
      projectCode?: string; // ProjectCode
      querySourceType?: null; 
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
// 获取导出变量总数
export interface Common_Contract_IR_Nodes_GetNodeVariablesCountInput {
      variableType?: null; 
      domainLevel?: RealData_Entity_Contract_Enums_Research_DomainLevelEnum[]; // 域级别，专病库的患者列表只用P，我的课题事件组配置只要V和E
      removeBds?: boolean; // 移除Bds 类型
      parentCascadeDomainCode?: string; // 搜索返回指定子级联层级的信息
      nodeId?: number; 
      isQuery?: boolean; // 是否是通用科研域
      projectCode?: string; // ProjectCode
      querySourceType?: null; 
  }
// 获取导出变量总数
export interface Common_Contract_IR_Nodes_GetNodeVariablesCountOutput {
      variableCount?: number; // 变量总数
  }

export interface Common_Contract_IR_Nodes_GetNodeVariableTreeInput {
      variableType?: null; 
      domainLevel?: RealData_Entity_Contract_Enums_Research_DomainLevelEnum[]; // 域级别，专病库的患者列表只用P，我的课题事件组配置只要V和E
      removeBds?: boolean; // 是否是Bds 类型
      maxGroupSize?: number; 
      nodeId?: number; 
      parentCascadeDomainCode?: string; // 搜索返回指定子级联层级的信息
      isQuery?: boolean; // 是否是通用科研域
      projectCode?: string; // ProjectCode
      querySourceType?: null; 
  }
// 获取变量树
export interface Common_Contract_IR_Nodes_GetNodeVariableTreeOutput {
      groupName?: string; // 组名
      groupId?: number; // 组id 可能是 nodeid 或 variableid
      groupType?: null; 
      variableTotal?: number; // 该组变量总数
      nodes?: Common_Contract_IR_Nodes_GetNodeVariableTreeOutput_NodeInfo[]; // 节点
      variables?: Common_Contract_IR_Nodes_NodeVariableInfo[]; // 变量列表（默认显示前30条）
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

export interface Common_Contract_IR_Nodes_GetSubVariablesOutput {
      nodeId?: number; // 所属层级Node
      children?: Common_Contract_Meta_Node_QueryVariableOut[]; // 术语子层级
      hasSubVariable?: boolean; // 是否有术语子变量(可勾选的)
      domainMetaDataId?: number; // 域id
      domainCode?: string; // 域Code
      variableUniqueCode?: string; // 变量Code
      queryCodeSetOuts?: Common_Contract_Meta_CodeSystem_QueryCodeSetOut[]; // 值域层级信息
      controlTypes?: RealData_Entity_Contract_Enums_Research_VariableControlTypeEnum[]; // 变量可用的控件类型
      termUseType?: null; 
      canCheck?: boolean; // 标识是否可勾选(变量默认可勾选，术语变量层级可配置)
      termValue?: null; 
      useUnitSet?: boolean; // 变量存在单位
      dataType?: null; 
      statisticalType?: null; 
      variableType?: null; 
      variableId?: number; // 变量id
      variablePId?: number; // 变量的父级(术语变量有信息)
      name?: string; // 变量名
      standardCh?: string; // 中文名
      abbreviation?: string; // 同义词名称
      field?: string; // 字段名
      extend?: null; 
      codeSysCode?: string; // 变量关联值域
      isDistinct?: boolean; 
      synyiId?: number; // 作为术语层级/变量时，有森亿id的标识
      sort?: number; // 变量排序
      fillRate?: number; // 填充率
      total?: number; // 科研域变量总数据量
      fillCount?: number; // 变量有值的数据量
  }

export interface Common_Contract_IR_Nodes_GetValuesInput {
      keyword?: string; 
      variableId?: number; 
      pageSize?: number; 
      pageIndex?: number; 
  }

export interface Common_Contract_IR_Nodes_GetValueTermVariableLevelsInput {
      termVariableUniqueCodes?: string[]; // 值域术语变量id列表
      isQuery?: boolean; // 是否是通用科研域
      projectCode?: string; // ProjectCode
      querySourceType?: null; 
  }

export interface Common_Contract_IR_Nodes_GetValueTermVariableLevelsOutput {
      subVariable?: Common_Contract_Meta_Variable_SearchValueTermVariableOutput[]; 
      subVariableCount?: number; // 子变量个数
      extraCode?: string; // 值域术语额外数据信息
      variableUniqueCode?: string; // 变量Code
      normalized?: boolean; // True 表示标准表达
      variableId?: number; // 变量id
      variablePId?: number; // 变量的父级(术语变量有信息)
      name?: string; // 变量名
      standardCh?: string; // 中文名
      abbreviation?: string; // 同义词名称
      field?: string; // 字段名
      extend?: null; 
      codeSysCode?: string; // 变量关联值域
      isDistinct?: boolean; 
      synyiId?: number; // 作为术语层级/变量时，有森亿id的标识
      sort?: number; // 变量排序
      fillRate?: number; // 填充率
      total?: number; // 科研域变量总数据量
      fillCount?: number; // 变量有值的数据量
  }

export interface Common_Contract_IR_Nodes_GetValueTermVariablesOutput {
      subVariableCount?: number; // 子变量个数
      extraCode?: string; // 值域术语额外数据信息
      variableUniqueCode?: string; // 变量Code
      normalized?: boolean; // True 表示标准表达
      variableId?: number; // 变量id
      variablePId?: number; // 变量的父级(术语变量有信息)
      name?: string; // 变量名
      standardCh?: string; // 中文名
      abbreviation?: string; // 同义词名称
      field?: string; // 字段名
      extend?: null; 
      codeSysCode?: string; // 变量关联值域
      isDistinct?: boolean; 
      synyiId?: number; // 作为术语层级/变量时，有森亿id的标识
      sort?: number; // 变量排序
      fillRate?: number; // 填充率
      total?: number; // 科研域变量总数据量
      fillCount?: number; // 变量有值的数据量
  }
// 节点下的变量信息
export interface Common_Contract_IR_Nodes_NodeVariableInfo {
      tipBoard?: null; 
      domainMetaDataId?: number; // 域id
      domainCode?: string; // 域Code
      variableUniqueCode?: string; // 变量Code
      queryCodeSetOuts?: Common_Contract_Meta_CodeSystem_QueryCodeSetOut[]; // 值域层级信息
      controlTypes?: RealData_Entity_Contract_Enums_Research_VariableControlTypeEnum[]; // 变量可用的控件类型
      termUseType?: null; 
      canCheck?: boolean; // 标识是否可勾选(变量默认可勾选，术语变量层级可配置)
      termValue?: null; 
      useUnitSet?: boolean; // 变量存在单位
      dataType?: null; 
      statisticalType?: null; 
      variableType?: null; 
      variableId?: number; // 变量id
      variablePId?: number; // 变量的父级(术语变量有信息)
      name?: string; // 变量名
      standardCh?: string; // 中文名
      abbreviation?: string; // 同义词名称
      field?: string; // 字段名
      extend?: null; 
      codeSysCode?: string; // 变量关联值域
      isDistinct?: boolean; 
      synyiId?: number; // 作为术语层级/变量时，有森亿id的标识
      sort?: number; // 变量排序
      fillRate?: number; // 填充率
      total?: number; // 科研域变量总数据量
      fillCount?: number; // 变量有值的数据量
  }
// 变量提示板信息
export interface Common_Contract_IR_Nodes_NodeVariableInfo_TipBoardInfo {
      fillRate?: number; // 填充率
      description?: string; // 变量说明
      fillCount?: number; // 填充总数
      examples?: string[]; // 变量举例
  }
// 导出变量信息
export interface Common_Contract_IR_Nodes_NodeVariableOutput {
      variableId?: number; // 业务变量id
      name?: string; // 显示名称
  }
// 搜索导出节点/变量
export interface Common_Contract_IR_Nodes_SearchNodeInput {
      keyword?: string; // 关键字
      nodeId?: number; // 节点id用于限定搜索范围，为空则不限定
      domainLevel?: RealData_Entity_Contract_Enums_Research_DomainLevelEnum[]; // 域级别，专病库的患者列表只用P，我的课题事件组配置只要V和E
      removeBds?: boolean; // 移除Bds 变量
      withSubVariable?: boolean; // 搜索返回节点的直接变量集合(例如搜索命中基本信息，则返回基本信息下的变量集合)
      parentCascadeDomainCode?: string; // 搜索返回指定子级联层级的信息
      variableType?: null; 
      isQuery?: boolean; // 是否是通用科研域
      projectCode?: string; // ProjectCode
      querySourceType?: null; 
  }
// 搜索导出节点/变量
export interface Common_Contract_IR_Nodes_SearchNodeOutput {
      resultType?: null; 
      nodes?: Common_Contract_IR_Nodes_SearchNodeOutput_SearchNodeInfo[]; // 节点列表
      variables?: Common_Contract_IR_Nodes_NodeVariableInfo[]; // 节点后的变量列表
      hasSubVariable?: boolean; // 是否包含子变量
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

export interface Common_Contract_IR_Nodes_SearchValueTermVariablesInput {
      keyword?: string; // 关键字
      normalVariableId?: number; // 关联的物理变量id
      pageSize?: number; 
      pageIndex?: number; 
  }

export interface Common_Contract_IR_Nodes_SearchValueTermVariablesOutput {
      subVariable?: Common_Contract_Meta_Variable_SearchValueTermVariableOutput[]; 
      subVariableCount?: number; // 子变量个数
      extraCode?: string; // 值域术语额外数据信息
      variableUniqueCode?: string; // 变量Code
      normalized?: boolean; // True 表示标准表达
      variableId?: number; // 变量id
      variablePId?: number; // 变量的父级(术语变量有信息)
      name?: string; // 变量名
      standardCh?: string; // 中文名
      abbreviation?: string; // 同义词名称
      field?: string; // 字段名
      extend?: null; 
      codeSysCode?: string; // 变量关联值域
      isDistinct?: boolean; 
      synyiId?: number; // 作为术语层级/变量时，有森亿id的标识
      sort?: number; // 变量排序
      fillRate?: number; // 填充率
      total?: number; // 科研域变量总数据量
      fillCount?: number; // 变量有值的数据量
  }

export interface Common_Contract_IR_Nodes_SearchVariableInput {
      variableUniqueCodes?: string[]; // 变量id列表
      isQuery?: boolean; // 是否是通用科研域
      projectCode?: string; // ProjectCode
      querySourceType?: null; 
  }

export interface Common_Contract_IR_Nodes_SearchVariableOutput {
      resultType?: null; 
      nodes?: Common_Contract_IR_Nodes_SearchNodeOutput_SearchNodeInfo[]; // 节点列表
      variables?: Common_Contract_IR_Nodes_NodeVariableInfo[]; // 节点后的变量列表
      hasSubVariable?: boolean; // 是否包含子变量
  }
export type Common_Contract_IR_Nodes_VariableGroupType = 0|1 ;

export interface Common_Contract_IR_Query_GetQueryVariableOutput {
      firstDomainName?: string; 
      firstDomianId?: number; 
      firstNodeId?: number; 
      firstNodeName?: string; 
      firstGroupId?: number; 
      tipBoard?: null; 
      domainMetaDataId?: number; // 域id
      domainCode?: string; // 域Code
      variableUniqueCode?: string; // 变量Code
      queryCodeSetOuts?: Common_Contract_Meta_CodeSystem_QueryCodeSetOut[]; // 值域层级信息
      controlTypes?: RealData_Entity_Contract_Enums_Research_VariableControlTypeEnum[]; // 变量可用的控件类型
      termUseType?: null; 
      canCheck?: boolean; // 标识是否可勾选(变量默认可勾选，术语变量层级可配置)
      termValue?: null; 
      useUnitSet?: boolean; // 变量存在单位
      dataType?: null; 
      statisticalType?: null; 
      variableType?: null; 
      variableId?: number; // 变量id
      variablePId?: number; // 变量的父级(术语变量有信息)
      name?: string; // 变量名
      standardCh?: string; // 中文名
      abbreviation?: string; // 同义词名称
      field?: string; // 字段名
      extend?: null; 
      codeSysCode?: string; // 变量关联值域
      isDistinct?: boolean; 
      synyiId?: number; // 作为术语层级/变量时，有森亿id的标识
      sort?: number; // 变量排序
      fillRate?: number; // 填充率
      total?: number; // 科研域变量总数据量
      fillCount?: number; // 变量有值的数据量
  }

export interface Common_Contract_IR_Result_GetHeaderVariablesOutput {
      attributes?: Common_Contract_IR_Nodes_GetNodeVariableTreeOutput_AttributeInfo[]; 
      variableId?: number; 
      variableUniqueCode?: string; 
      standardCh?: string; 
      isFixed?: boolean; 
      displayName?: string; 
      mergeTo?: string; 
      isDefault?: boolean; 
      parentGroupIds?: number[]; 
      parentGroupNames?: string[]; 
      parentVariableIds?: number[]; 
      parentVariableNames?: string[]; 
      polymerizationMethod?: null; 
      methodTypeOptions?: RealData_Entity_Contract_Enums_AggregationEnum[]; 
      isShow?: boolean; 
      canSelect?: boolean; 
  }

export interface Common_Contract_IR_Result_GetQueryPageVisitNumsCount {
      visitCount?: number; 
      patientCount?: number; 
  }

export interface Common_Contract_IR_Result_GetQueryPageVisitNumsOutput {
      visitNums?: Common_Contract_IR_Result_VisitNums[]; 
      visitCount?: number; 
      patientCount?: number; 
  }
export type Common_Contract_IR_Result_LinkType = 0|1|2|3|4|5 ;
// QueryExportResultInput
export interface Common_Contract_IR_Result_QueryExportResultInput {
      startTime?: string; // StartTime
      endTime?: string; // EndTime
      fileTicket?: string; // FileTicket
      tittles?: Common_Contract_IR_Result_QueryResultVariableTitleInput[]; // 表头列信息
      displayMode?: null; 
      queryId?: number; // 搜索流水id
      headerFilters?: Common_Contract_IR_Result_QueryResultHeaderFilterInput[]; // 表头筛选信息
      pageSize?: number; 
      pageIndex?: number; 
  }

export interface Common_Contract_IR_Result_QueryExportResultOutput {
      id?: string; 
  }
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
      variableUniqueCode?: string; // 变量唯一编码
      values?: string[]; // 选中的过滤值集合,该集合有值时优先正向过滤(即使用该集合作为包含条件)
  }
// 搜索结果入参
export interface Common_Contract_IR_Result_QueryResultInput {
      tittles?: Common_Contract_IR_Result_QueryResultVariableTitleInput[]; // 表头列信息
      displayMode?: null; 
      queryId?: number; // 搜索流水id
      headerFilters?: Common_Contract_IR_Result_QueryResultHeaderFilterInput[]; // 表头筛选信息
      pageSize?: number; 
      pageIndex?: number; 
  }
// 合并变量的集合
export interface Common_Contract_IR_Result_QueryResultMegerVariableBase {
      variableUniqueCode?: string; // VariableUniqueCode
  }
// 搜索结果列表模型
export interface Common_Contract_IR_Result_QueryResultOutput {
      dicDataTitles?: Common_Contract_IR_Result_QueryResultVariableTitleOutput[]; // 搜索列表表头数据
      titleMerge?: Common_Contract_IR_Result_QueryResultVariableMerge[]; // 表头合并数据
      dataSet?: Common_Contract_IR_Result_QueryResultData[]; // 数据
      total?: number; // 列表页数据总量
  }

export interface Common_Contract_IR_Result_QueryResultRawPopInput {
      isAnomity?: boolean; 
      patientId?: number; 
      queryId?: number; 
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
      labResultShowDto?: null; 
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
      variableUniqueCode?: string; // 变量唯一编码
      attribute?: number; // BDS变量属性
      orderBy?: string; // 排序方式
      orderIndex?: number; // 排序次序
      displayName?: string; // 展示名称
      aggregate?: null; 
  }
// 搜索列表表头模型
export interface Common_Contract_IR_Result_QueryResultVariableTitleOutput {
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
      isLink?: boolean; 
      linkType?: null; 
      variableId?: string; // 变量id
      variableUniqueCode?: string; // 变量编码
  }

export interface Common_Contract_IR_Result_QueryVariableResultInput {
      hitData?: string; 
      queryId?: number; 
      variableUniqueCode?: string; 
      visitId?: number; 
      autoIdSet?: number[]; 
      patientId?: number; 
      isBindParent?: boolean; 
      isAnomity?: boolean; 
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

export interface Common_Contract_IR_Result_VisitNums {
      visitId?: number; 
      patientId?: number; 
  }
// 清理所有缓存
export interface Common_Contract_Meta_Cache_RemoveMetaCacheInput {
      projectCode?: string; // ProjectCode
  }

export interface Common_Contract_Meta_CodeSystem_QueryCodeSetOut {
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

export interface Common_Contract_Meta_Node_QueryNodeOut_TermDomainInfo {
      variableId?: number; 
      termUseType?: null; 
  }
// 查询变量实体
export interface Common_Contract_Meta_Node_QueryVariableOut {
      nodeId?: number; // 所属层级Node
      children?: Common_Contract_Meta_Node_QueryVariableOut[]; // 术语子层级
      hasSubVariable?: boolean; // 是否有术语子变量(可勾选的)
      domainMetaDataId?: number; // 域id
      domainCode?: string; // 域Code
      variableUniqueCode?: string; // 变量Code
      queryCodeSetOuts?: Common_Contract_Meta_CodeSystem_QueryCodeSetOut[]; // 值域层级信息
      controlTypes?: RealData_Entity_Contract_Enums_Research_VariableControlTypeEnum[]; // 变量可用的控件类型
      termUseType?: null; 
      canCheck?: boolean; // 标识是否可勾选(变量默认可勾选，术语变量层级可配置)
      termValue?: null; 
      useUnitSet?: boolean; // 变量存在单位
      dataType?: null; 
      statisticalType?: null; 
      variableType?: null; 
      variableId?: number; // 变量id
      variablePId?: number; // 变量的父级(术语变量有信息)
      name?: string; // 变量名
      standardCh?: string; // 中文名
      abbreviation?: string; // 同义词名称
      field?: string; // 字段名
      extend?: null; 
      codeSysCode?: string; // 变量关联值域
      isDistinct?: boolean; 
      synyiId?: number; // 作为术语层级/变量时，有森亿id的标识
      sort?: number; // 变量排序
      fillRate?: number; // 填充率
      total?: number; // 科研域变量总数据量
      fillCount?: number; // 变量有值的数据量
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
      attributeType?: null; 
  }
export type Common_Contract_Meta_Variable_QueryNodeVariableTypeEnum = 0|1|2 ;
// 值域术语搜索结构
export interface Common_Contract_Meta_Variable_SearchValueTermVariableOutput {
      subVariable?: Common_Contract_Meta_Variable_SearchValueTermVariableOutput[]; 
      subVariableCount?: number; // 子变量个数
      extraCode?: string; // 值域术语额外数据信息
      variableUniqueCode?: string; // 变量Code
      normalized?: boolean; // True 表示标准表达
      variableId?: number; // 变量id
      variablePId?: number; // 变量的父级(术语变量有信息)
      name?: string; // 变量名
      standardCh?: string; // 中文名
      abbreviation?: string; // 同义词名称
      field?: string; // 字段名
      extend?: null; 
      codeSysCode?: string; // 变量关联值域
      isDistinct?: boolean; 
      synyiId?: number; // 作为术语层级/变量时，有森亿id的标识
      sort?: number; // 变量排序
      fillRate?: number; // 填充率
      total?: number; // 科研域变量总数据量
      fillCount?: number; // 变量有值的数据量
  }
// 存储年龄计算信息
export interface Common_Contract_Research_VariableCalculateInfo {
      type?: null; 
      relatecode?: string; // 计算关联变量的UniqueCode
  }
export type Common_Contract_Research_VariableCalculateInfo_CalculateType = 1|2 ;

export interface Common_Contract_Search_EventGroup_CreateOrUpdateEventGroupItem {
      index?: number; 
      eventId?: number; 
  }

export interface Common_Contract_Search_EventGroup_CreateOrUpdateEventGroupOutput {
      eventGroupId?: number; 
      events?: Common_Contract_Search_EventGroup_CreateOrUpdateEventGroupItem[]; 
  }
// 事件详情
export interface Common_Contract_Search_EventGroup_EventItemDTO {
      eventId?: number; // 事件ID（传值更新，不传值创建）
      index?: number; // 序列
      eventName?: string; // 事件名称
      eventDescription?: string; // 事件描述
      sequence?: number; // 事件序列
      sequenceType?: null; 
      timePoint?: null; 
      queryFilters?: null; 
      resVariables?: Common_Contract_IR_Query_GetQueryVariableOutput[]; // 用于回填变量
      queryFilterDescription?: string; // 查询条件 描述
      queryState?: null; 
      patientCount?: number; // 命中患者数
  }
// 事件时间范围条件
export interface Common_Contract_Search_EventGroup_EventTimePoint {
      timeRangeSeq?: null; 
      operator?: null; 
      timeRanges?: number[]; // 时间范围
      dateUnitType?: null; 
  }

export interface Common_Contract_Search_EventGroup_GetEventGroupOutput {
      isNew?: boolean; // 是否有更新
      finalFinishTime?: string; // 最终执行完成时间
      eventGroupId?: number; // 事件组ID（传值更新，不传值创建）
      eventGroupName?: string; // 事件组名
      eventGroupDescription?: string; // 事件描述
      eventRangeStartDate?: string; // 事件所在范围开始（日期）
      eventRangeEndDate?: string; // 事件所在范围停止（日期）
      searchBy?: null; 
      events?: Common_Contract_Search_EventGroup_EventItemDTO[]; // 事件列表
      finalQueryState?: null; 
      finalHitPatientCount?: number; // 最终命中患者数
  }
export type Common_Contract_Search_EventGroup_TimeRangeSeqEnum = 1|2 ;
// 条件
export interface Common_Contract_Search_Query_DTO_DataFilterConditionInput {
      variableUniqueCode?: string; // 变量唯一编码
      termValues?: Common_Contract_Meta_Node_TermValue[]; // 归一化
      logicalOperator?: null; 
      variableId?: number; // 变量id
      relationalOperator?: null; 
      values?: string[]; // 值
      childrenConditions?: Common_Contract_Search_Query_DTO_DataFilterConditionInput[]; // 同一记录子条件
      cascadeConditions?: Common_Contract_Search_Query_DTO_DataFilterConditionInput[]; // 级联条件
      uid?: string; // 查询条件uid
      unitCode?: string; // 单位
  }
// 事件信息
export interface Common_Contract_Search_Query_DTO_EventGroup {
      eventGroupId?: number; 
      eventGroupDescription?: string; 
      timePoint?: null; 
  }
// FilterCondition
export interface Common_Contract_Search_Query_DTO_FilterConditionInput {
      groupConditions?: Common_Contract_Search_Query_DTO_GroupConditionInput[]; // GroupConditions
  }
// 分组
export interface Common_Contract_Search_Query_DTO_GroupConditionInput {
      name?: string; // 组名
      logicalOperator?: null; 
      relation?: null; 
      conditions?: Common_Contract_Search_Query_DTO_DataFilterConditionInput[]; // 搜索条件
      childrenGroup?: Common_Contract_Search_Query_DTO_GroupConditionInput[]; // 子组条件
      searchBy?: null; 
      eventGroup?: null; 
  }

export interface IR_Service_Dto_DataInsightBI_BIChartFocusVariableInput {
      insightId?: number; 
      variableUniqueCodes?: IR_Service_Dto_DataInsightBI_ChartFocusVariable[]; 
  }

export interface IR_Service_Dto_DataInsightBI_BIChartFocusVariableOutput {
      variableName?: string; // 变量名称
      variableUniqueCode?: string; // 变量uniqueCode
      isHide?: boolean; // 是否隐藏?
  }

export interface IR_Service_Dto_DataInsightBI_BIChartOutput {
      titleName?: string; // 图表名称
      chartType?: string; // 图表类型
      chartEnum?: null; 
      chartData?: IR_Service_Dto_DataInsightBI_RawData[]; // 图表数据
  }

export interface IR_Service_Dto_DataInsightBI_PrecentRawData {
      titleName?: string; // 图表名称
      chartType?: string; // 图表类型
      chartEnum?: null; 
      chartData?: IR_Service_Dto_DataInsightBI_PrecentRawData[]; // 图表数据
  }

export interface System_Collections_Generic_List_1__IR_Service_Dto_DataInsightBI_BIChartOutput {
      chartName?: string; // 标题
      data?: IR_Service_Dto_DataInsightBI_BIChartOutput[]; 
  }

export interface IR_Service_Dto_DataInsightBI_BIChartTopOutput {
      type?: string; // 配置的TopN变量是否是归属于某一组
      name?: string; // 组名称/域变量时为域名称
      domainNames?: string[]; // 组变量时，变量对应的域名称
      biChartDatas?: IR_Service_Dto_DataInsightBI_PrecentRawData[]; 
  }

export interface IR_Service_Dto_DataInsightBI_RawData {
      groupId?: number; // 洞察条件归属组id
      groupName?: string; // 洞察条件归属组名称
      data?: IR_Service_Dto_DataInsightBI_RawData[]; // 数据集
  }
export type IR_Service_Dto_DataInsightBI_ChartEnum = 0|1|2|3|4|5|6|7|99 ;

export interface IR_Service_Dto_DataInsightBI_ChartFocusVariable {
      variableUniqueCode?: string; // 变量uniqueCode
      isHide?: boolean; // 是否隐藏?
  }

export interface IR_Service_Dto_EventSearch_Input_CreateOrUpdateEventSearchEventGroupInput {
      projectCode?: string; 
      eventGroupId?: number; // 事件组ID（传值更新，不传值创建）
      eventGroupName?: string; // 事件组名
      eventGroupDescription?: string; // 事件描述
      eventRangeStartDate?: string; // 事件所在范围开始（日期）
      eventRangeEndDate?: string; // 事件所在范围停止（日期）
      searchBy?: null; 
      events?: Common_Contract_Search_EventGroup_EventItemDTO[]; // 事件列表
      finalQueryState?: null; 
      finalHitPatientCount?: number; // 最终命中患者数
  }

export interface IR_Service_Dto_EventSearch_Input_EventSearchEventGroupRegenerateInput {
      eventItemId?: number; 
      projectCode?: string; 
  }

export interface IR_Service_Dto_InsightCondition_InsightConditionCreateInput {
      conditionGroupId?: number; // 条件组Id
      queryExpression?: null; 
      queryExpressionDescription?: string; // 查询表达树说明
      operator?: null; 
  }

export interface IR_Service_Dto_InsightCondition_InsightConditionOutput {
      id?: number; 
      conditionGroupId?: number; // 条件组Id
      sortIndex?: number; // 顺序索引
      queryExpression?: null; 
      queryExpressionDescription?: string; // 查询表达树说明
      operator?: null; 
      resultStatus?: null; 
      subjectCount?: number; // 患者总数
      visitCount?: number; // 就诊总数
      variables?: Common_Contract_IR_Query_GetQueryVariableOutput[]; // 变量
  }

export interface IR_Service_Dto_InsightCondition_InsightConditionQueryTaskInput {
      conditionId?: number; // 条件Id
      projectCode?: string; // 区分专病还是科研
  }

export interface IR_Service_Dto_InsightCondition_InsightConditionQueryTaskOutput {
      queryId?: number; 
  }

export interface IR_Service_Dto_InsightCondition_InsightConditionUpdateInput {
      id?: number; // 条件Id
      conditionGroupId?: number; // 条件组ID
      queryExpression?: null; 
      queryExpressionDescription?: string; // 查询表达树说明
      operator?: null; 
  }

export interface IR_Service_Dto_InsightConditionGroup_InsightConditionGroupCollectInput {
      conditionGroupId?: number; // 收藏条件组Id
      name?: string; // 收藏组名
      projectCode?: string; // ProjectCode
  }

export interface IR_Service_Dto_InsightConditionGroup_InsightConditionGroupCollectOutput {
      id?: number; // 主键
      name?: string; // 条件组名
  }

export interface IR_Service_Dto_InsightConditionGroup_InsightConditionGroupCreateInput {
      insightId?: number; // 洞察组Id
      insightConditionGroupCollectId?: number; // 条件组收藏Id
  }

export interface IR_Service_Dto_InsightConditionGroup_InsightConditionGroupCreateOutput {
      id?: number; // 主键
      name?: string; // 洞察组名称
  }

export interface IR_Service_Dto_InsightConditionGroup_InsightConditionGroupDuplicateInput {
      insightId?: number; // 洞察组Id
      conditionGroupId?: number; // 条件组Id
  }

export interface IR_Service_Dto_InsightConditionGroup_InsightConditionGroupDuplicateOutput {
      id?: number; // 主键
      name?: string; // 洞察组名称
  }

export interface IR_Service_Dto_InsightConditionGroup_InsightConditionGroupOutput {
      id?: number; // 主键
      insightId?: number; // 洞察组Id
      name?: string; // 条件组名
      lastConditionId?: number; // 最终条件Id
      conditions?: IR_Service_Dto_InsightCondition_InsightConditionOutput[]; // 条件组
  }

export interface IR_Service_Dto_InsightConditionGroup_InsightConditionGroupUpdateInput {
      id?: number; // 条件组Id
      insightId?: number; // 洞察组Id
      name?: string; // 条件组名称
  }

export interface IR_Service_Dto_InsightGroup_InsightConditionGroupHistoryOutput {
      conditionGroupId?: number; // 条件组Id
      conditionId?: number; // 条件Id
      resultStatus?: null; 
      name?: string; // 条件组名
      subjectCount?: number; // 患者总数
      visitCount?: number; // 就诊总数
  }
export type IR_Service_Dto_InsightGroup_InsightConditionResultStatus = 0|1|2|3|4 ;

export interface IR_Service_Dto_InsightGroup_InsightCreate {
      projectCode?: string; // ProjectCode
  }

export interface IR_Service_Dto_InsightGroup_InsightGroupCreateOutput {
      id?: number; // 主键
      name?: string; // 洞察组名称
  }

export interface IR_Service_Dto_InsightGroup_InsightGroupHistoryOutput {
      id?: number; // 洞察组Id
      name?: string; // 洞察组名
      creationTime?: string; // 创建时间
      searchTime?: string; // 搜索时间
      conditionGroupHistory?: IR_Service_Dto_InsightGroup_InsightConditionGroupHistoryOutput[]; // 条件组
  }

export interface IR_Service_Dto_InsightGroup_InsightGroupOutput {
      id?: number; // 洞察组Id
      name?: string; // 洞察组名
  }

export interface IR_Service_Dto_InsightGroup_InsightGroupUpdateInput {
      id?: number; // 主键
      name?: string; // 洞察组名称
  }

export interface IR_Service_Dto_Query_GetOperatorInfoOutput {
      description?: string; 
      operatorName?: string; 
      operatorId?: number; 
  }

export interface IR_Service_Dto_Query_GetQueryDefineOutput {
      isTemplate?: boolean; // 是否模板
      name?: string; // 查询的别名，默认就是查询表达式中文名称
      query?: null; 
      searchSource?: null; 
      resVariables?: Common_Contract_IR_Query_GetQueryVariableOutput[]; // 搜索变量信息
  }

export interface IR_Service_Dto_Query_QueryInitInput {
      parentQueryId?: string; 
      queryExpressionDescription?: string; 
      queryFilters?: null; 
      querySourceType?: null; 
      isQuery?: boolean; // 是否是通用科研域
      projectCode?: string; // ProjectCode
  }

export interface IR_Service_Dto_Query_QueryInitOutput {
      queryId?: number; 
  }

export interface IR_Service_Dto_Query_ReQueryInput {
      queryId?: number; 
  }

export interface IR_Service_Dto_QueryCollect_GetQueryCollectListDetailOutput {
      variables?: Common_Contract_IR_Result_GetHeaderVariablesOutput[]; 
  }

export interface IR_Service_Dto_QueryCollect_GetQueryCollectListOutput {
      queryCollectId?: number; 
      name?: string; 
  }

export interface IR_Service_Dto_QueryCollect_SaveQueryCollectInput {
      queryId?: number; 
      name?: string; 
      variables?: IR_Service_Dto_QueryResult_SaveHeaderVariablesItem[]; 
      isQuery?: boolean; // 是否是通用科研域
      projectCode?: string; // ProjectCode
      querySourceType?: null; 
  }

export interface IR_Service_Dto_QueryCollect_SaveQueryCollectOutput {
      queryCollectId?: number; 
  }
// 自定义检索条件中文表达式名称请求模型
export interface IR_Service_Dto_QueryHistory_Input_CustomizeQueryTemplateInput {
      name?: string; // 检索条件名称
      id?: number; // 条件模板Id
  }

export interface IR_Service_Dto_QueryHistory_Input_MultiDeleteHistoryInput {
      isDeleteAll?: boolean; 
      retrievalDate?: string[]; // yyyy-MM-dd
      queryIds?: number[]; 
  }

export interface IR_Service_Dto_QueryHistory_Output_GetResultHistoryGroupByDateOutput {
      total?: number; 
      page?: number; 
      pageSize?: number; 
      data?: IR_Service_Dto_QueryHistory_Output_ResultHistoryGroupByDateDto[]; 
  }
// 检索历史结果返回模型
export interface IR_Service_Dto_QueryHistory_Output_GetResultHistoryGroupListOutput {
      total?: number; 
      page?: number; 
      pageSize?: number; 
      data?: IR_Service_Dto_QueryHistory_Output_ResultHistoryGroupByDate[]; 
  }
// 检索历史结果组模型，按日期分组
export interface IR_Service_Dto_QueryHistory_Output_ResultHistoryGroupByDate {
      creationDate?: string; // 检索日期，按此分组
      total?: number; // 总数
      dayOfWeek?: string; // 星期几
  }
// 检索结果历史模型
export interface IR_Service_Dto_QueryHistory_Output_ResultHistoryGroupByDateDto {
      taskNo?: number; 
      queryId?: number; // 检索表达式标识
      queryName?: string; // 检索表达式短名称
      queryDesc?: string; // 检索表达式
      isSuccess?: boolean; // 是否成功
      collected?: boolean; // 是否被设为模板
      creationTime?: string; // 检索时间
      operatorName?: string; // 用户名
      operatorId?: string; // 用户标识
      summaryResult?: string; // JSON 字段，类型SummaryResult
      query?: null; 
      searchSource?: null; 
      projectName?: string; 
      diseaseId?: number; 
      isQuery?: boolean; // 是否是通用科研域
      projectCode?: string; // ProjectCode
      querySourceType?: null; 
  }

export interface IR_Service_Dto_QueryResult_DistinctValues {
      display?: string; 
      value?: string; 
      count?: number; 
  }

export interface IR_Service_Dto_QueryResult_GetDistinctValuesInput {
      variableUniqueCode?: string; 
      keyWord?: string; 
      displayMode?: null; 
      queryId?: number; // 搜索流水id
      headerFilters?: Common_Contract_IR_Result_QueryResultHeaderFilterInput[]; // 表头筛选信息
      pageSize?: number; 
      pageIndex?: number; 
  }

export interface IR_Service_Dto_QueryResult_GetDistinctValuesOutput {
      values?: IR_Service_Dto_QueryResult_DistinctValues[]; 
  }

export interface IR_Service_Dto_QueryResult_GetSpecialVariablesOutput {
      variableUniqueCode?: string; 
      canSelect?: boolean; 
  }

export interface IR_Service_Dto_QueryResult_SaveHeaderVariablesInput {
      queryId?: number; 
      variables?: IR_Service_Dto_QueryResult_SaveHeaderVariablesItem[]; 
      displayMode?: null; 
  }

export interface IR_Service_Dto_QueryResult_SaveHeaderVariablesItem {
      order?: number; 
      displayname?: string; 
      isFixed?: boolean; 
      variableUniqueCode?: string; 
      isShow?: boolean; 
      polymerizationMethod?: null; 
  }

export interface IR_Service_Dto_QueryTask_GetQueryTaskDetailOutput {
      queryCondition?: null; 
      searchSource?: null; 
      resVariables?: Common_Contract_IR_Query_GetQueryVariableOutput[]; 
      queryTaskId?: string; 
      queryDesc?: string; 
      queryDateTime?: string; 
      state?: null; 
      stateDesc?: string; 
      isArragement?: boolean; 
      searchAllCount?: number; 
      hitPatAllCount?: number; 
      hitVisitAllCount?: number; 
      timeConsuming?: number; 
      items?: IR_Service_Dto_QueryTask_QueryTaskItemOutput[]; 
      completeTime?: string; 
      startTime?: string; 
      taskNo?: number; 
      isNew?: boolean; 
      reason?: string; 
      projectName?: string; 
      diseaseId?: number; 
      isQuery?: boolean; // 是否是通用科研域
      projectCode?: string; // ProjectCode
      querySourceType?: null; 
  }

export interface IR_Service_Dto_QueryTask_GetQueryTaskGroupByStateInput {
      userId?: number; 
      status?: RealData_Entity_Contract_Enums_Search_QueryState[]; 
  }

export interface IR_Service_Dto_QueryTask_GetQueryTaskGroupByStateItem {
      queryTaskId?: string; 
      state?: null; 
  }

export interface IR_Service_Dto_QueryTask_GetQueryTaskGroupByStateOutput {
      creationDate?: string; 
      items?: IR_Service_Dto_QueryTask_GetQueryTaskGroupByStateItem[]; 
  }

export interface IR_Service_Dto_QueryTask_GetQueryTaskGroupsDetails {
      queryTaskId?: string; 
      queryDesc?: string; 
      queryDateTime?: string; 
      state?: null; 
      stateDesc?: string; 
      isArragement?: boolean; 
      searchAllCount?: number; 
      hitPatAllCount?: number; 
      hitVisitAllCount?: number; 
      timeConsuming?: number; 
      items?: IR_Service_Dto_QueryTask_QueryTaskItemOutput[]; 
      completeTime?: string; 
      startTime?: string; 
      taskNo?: number; 
      isNew?: boolean; 
      reason?: string; 
      projectName?: string; 
      diseaseId?: number; 
      isQuery?: boolean; // 是否是通用科研域
      projectCode?: string; // ProjectCode
      querySourceType?: null; 
  }

export interface IR_Service_Dto_QueryTask_GetQueryTaskOutput {
      total?: number; 
      details?: IR_Service_Dto_QueryTask_GetQueryTaskGroupsDetails[]; 
  }

export interface IR_Service_Dto_QueryTask_QueryTaskItemOutput {
      uid?: string; 
      searchCount?: number; 
      hitPatCount?: number; 
      hitVisitCount?: number; 
      timeConsuming?: number; 
      createTime?: string; 
  }

export interface IR_Service_Dto_QueryTask_ToHistoryInput {
      queryTaskId?: number; 
  }

export interface IR_Service_Dto_QueryTemplate_Input_AddTemplateByQueryIdInput {
      queryId?: number; 
      name?: string; 
      conditionDesc?: string; 
  }

export interface IR_Service_Dto_QueryTemplate_Input_QueryTemplateInput {
      queryId?: number; 
      name?: string; 
      query?: null; 
      conditionDesc?: string; 
      isQuery?: boolean; // 是否是通用科研域
      projectCode?: string; // ProjectCode
      querySourceType?: null; 
  }

export interface IR_Service_Dto_QueryTemplate_Input_QueryTemplateOutput {
      queryId?: number; 
  }
// 获取可显示的检索条件收藏返回模型
export interface IR_Service_Dto_QueryTemplate_Output_GetQueryTemplateOutput {
      total?: number; 
      page?: number; 
      pageSize?: number; 
      data?: IR_Service_Dto_QueryTemplate_Output_QueryTemplateDto[]; 
  }
// 检索条件收藏结果模型
export interface IR_Service_Dto_QueryTemplate_Output_QueryTemplateDto {
      id?: string; // 条件标识
      name?: string; // 条件短名称
      conditionDesc?: string; // 条件中文表达式名称
      condition?: string; // 条件标识
      creationTime?: string; // 检索时间
      rawCreationTime?: string; // 检索时间显示名称
      userId?: number; // 创建者标识
      userName?: string; // 创建者名称
      querySourceType?: null; 
      projectCode?: string; // 项目Code
      variableCount?: number; // 查询模板的变量数
  }

export interface Microsoft_AspNetCore_Mvc_ProblemDetails {
      type?: string; 
      title?: string; 
      status?: number; 
      detail?: string; 
      instance?: string; 
  }

export interface RealData_Common_Contract_Common_Result {
      code?: null; 
      msg?: string; 
  }

export interface IR_Service_Dto_DataInsightBI_BIChartOutput_1__IR_Service_Dto_DataInsightBI_PrecentRawData {
      code?: null; 
      msg?: string; 
      data?: null; 
  }

export interface IR_Service_Dto_DataInsightBI_BIChartTitleOutput_1__System_Collections_Generic_List_1__IR_Service_Dto_DataInsightBI_BIChartOutput {
      code?: null; 
      msg?: string; 
      data?: null; 
  }

export interface RealData_Common_Contract_Common_PageResult_1__IR_Service_Dto_InsightConditionGroup_InsightConditionGroupCollectOutput {
      code?: null; 
      msg?: string; 
      data?: null; 
  }

export interface RealData_Common_Contract_Common_PageResult_1__IR_Service_Dto_InsightGroup_InsightGroupHistoryOutput {
      code?: null; 
      msg?: string; 
      data?: null; 
  }

export interface RealData_Entity_Data_IR_QueryTemplate {
      code?: null; 
      msg?: string; 
      data?: null; 
  }

export interface System_Collections_Generic_HashSet_1__Common_Contract_IR_Nodes_GetNodesLevelsOutput {
      code?: null; 
      msg?: string; 
      data?: Common_Contract_IR_Nodes_GetNodesLevelsOutput[]; 
  }

export interface System_Collections_Generic_HashSet_1__Common_Contract_IR_Nodes_GetNodeVariableTreeOutput {
      code?: null; 
      msg?: string; 
      data?: Common_Contract_IR_Nodes_GetNodeVariableTreeOutput[]; 
  }

export interface System_Collections_Generic_HashSet_1__Common_Contract_IR_Nodes_GetValueTermVariableLevelsOutput {
      code?: null; 
      msg?: string; 
      data?: Common_Contract_IR_Nodes_GetValueTermVariableLevelsOutput[]; 
  }

export interface System_Collections_Generic_HashSet_1__Common_Contract_IR_Nodes_SearchNodeOutput {
      code?: null; 
      msg?: string; 
      data?: Common_Contract_IR_Nodes_SearchNodeOutput[]; 
  }

export interface System_Collections_Generic_HashSet_1__Common_Contract_IR_Nodes_SearchVariableOutput {
      code?: null; 
      msg?: string; 
      data?: Common_Contract_IR_Nodes_SearchVariableOutput[]; 
  }

export interface System_Collections_Generic_List_1__Common_Contract_IR_Query_GetQueryVariableOutput {
      code?: null; 
      msg?: string; 
      data?: Common_Contract_IR_Query_GetQueryVariableOutput[]; 
  }

export interface System_Collections_Generic_List_1__Common_Contract_IR_Result_GetHeaderVariablesOutput {
      code?: null; 
      msg?: string; 
      data?: Common_Contract_IR_Result_GetHeaderVariablesOutput[]; 
  }

export interface System_Collections_Generic_List_1__IR_Service_Dto_DataInsightBI_BIChartFocusVariableOutput {
      code?: null; 
      msg?: string; 
      data?: IR_Service_Dto_DataInsightBI_BIChartFocusVariableOutput[]; 
  }

export interface System_Collections_Generic_List_1__IR_Service_Dto_DataInsightBI_BIChartOutput_1__IR_Service_Dto_DataInsightBI_PrecentRawData {
      code?: null; 
      msg?: string; 
      data?: IR_Service_Dto_DataInsightBI_PrecentRawData[]; 
  }

export interface System_Collections_Generic_List_1__IR_Service_Dto_DataInsightBI_BIChartTopOutput {
      code?: null; 
      msg?: string; 
      data?: IR_Service_Dto_DataInsightBI_BIChartTopOutput[]; 
  }

export interface System_Collections_Generic_List_1__IR_Service_Dto_InsightCondition_InsightConditionOutput {
      code?: null; 
      msg?: string; 
      data?: IR_Service_Dto_InsightCondition_InsightConditionOutput[]; 
  }

export interface System_Collections_Generic_List_1__IR_Service_Dto_InsightConditionGroup_InsightConditionGroupOutput {
      code?: null; 
      msg?: string; 
      data?: IR_Service_Dto_InsightConditionGroup_InsightConditionGroupOutput[]; 
  }

export interface System_Collections_Generic_List_1__IR_Service_Dto_Query_GetOperatorInfoOutput {
      code?: null; 
      msg?: string; 
      data?: IR_Service_Dto_Query_GetOperatorInfoOutput[]; 
  }

export interface System_Collections_Generic_List_1__IR_Service_Dto_QueryCollect_GetQueryCollectListOutput {
      code?: null; 
      msg?: string; 
      data?: IR_Service_Dto_QueryCollect_GetQueryCollectListOutput[]; 
  }

export interface System_Collections_Generic_List_1__IR_Service_Dto_QueryResult_GetSpecialVariablesOutput {
      code?: null; 
      msg?: string; 
      data?: IR_Service_Dto_QueryResult_GetSpecialVariablesOutput[]; 
  }

export interface System_Collections_Generic_List_1__IR_Service_Dto_QueryTask_GetQueryTaskGroupByStateOutput {
      code?: null; 
      msg?: string; 
      data?: IR_Service_Dto_QueryTask_GetQueryTaskGroupByStateOutput[]; 
  }

export interface System_Object {
      code?: null; 
      msg?: string; 
      data?: null; 
  }
export type RealData_Common_Contract_Common_ResultCodeType = 0|400|401|403|500|700 ;
export type RealData_Entity_Contract_Enums_AggregationEnum = 0|1|2|3|4|5|6 ;
export type RealData_Entity_Contract_Enums_ApprovalFlow_ApprovalFlowTypeEnum = 0|1|2|3 ;
export type RealData_Entity_Contract_Enums_DR_SearchByEnum = 2|3|5 ;
export type RealData_Entity_Contract_Enums_EncryptionTypeEnum = 0|1 ;
export type RealData_Entity_Contract_Enums_Export_ExportDataRangeEnum = 1|2|3 ;
export type RealData_Entity_Contract_Enums_IR_InsightConditionOperatorType = 0|1 ;
export type RealData_Entity_Contract_Enums_Research_DomainLevelEnum = 0|1|2|3 ;
export type RealData_Entity_Contract_Enums_Research_Operator_LogicalOperatorEnum = 1|2|3 ;
export type RealData_Entity_Contract_Enums_Research_Operator_RelationalOperatorEnum = 1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|103|104|105|106|107|108|201|202 ;
export type RealData_Entity_Contract_Enums_Research_VariableControlTypeEnum = 1|2|3|4|5|6|13 ;
export type RealData_Entity_Contract_Enums_Research_VariableDataTypeEnum = 0|1|2|3|4|5|6|7|8 ;
export type RealData_Entity_Contract_Enums_Research_VariableExportAttributeTypeEnum = 0|1|2 ;
export type RealData_Entity_Contract_Enums_Research_VariableStatisticalTypeEnum = 1|2|3|4|5|6|7 ;
export type RealData_Entity_Contract_Enums_Research_VariableStorageStructureEnum = 1|2 ;
export type RealData_Entity_Contract_Enums_Search_EventDateUnitType = 0|1 ;
export type RealData_Entity_Contract_Enums_Search_EventSequenceType = 0|1|2 ;
export type RealData_Entity_Contract_Enums_Search_EventTimePointOperator = 0|1|2|3 ;
export type RealData_Entity_Contract_Enums_Search_QuerySourceType = 1|2|3|5|6|7 ;
export type RealData_Entity_Contract_Enums_Search_QueryState = 1|2|3|4|5|6 ;
export type RealData_Entity_Contract_Enums_Search_RelationType = 1|2 ;
