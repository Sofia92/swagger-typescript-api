/**
 * 本文件通过脚本生成，请勿直接修改内部内容
 */

// 事件关注变量信息
export interface Common_Contract_EDC_EventGroup_EventFollowVariableInfo {
      followVariableUniqueCode?: string; // 关注变量id
      followVariableName?: string; // 关注变量名
  }
// 获取事件组
export interface Common_Contract_EDC_EventGroup_GetEventGroupsOutput {
      isBound?: boolean; // 是否被绑定
      followVariables?: Common_Contract_EDC_EventGroup_EventFollowVariableInfo[]; // 关注变量列表
      eventGroupId?: number; // 事件组id
      eventGroupName?: string; // 事件组名
      eventGroupDescription?: string; // 时间组描述
      createTime?: string; // 创建时间
      finalQueryState?: null; 
      finalHitPatientCount?: number; // 最终命中患者数
      isNew?: boolean; // 是否有更新
      finalFinishTime?: string; // 最终执行完成时间
  }
// 创建消息模板
export interface Common_Contract_EDC_FollowUp_CreateFollowUpMessageTemplateInput {
      name?: string; // 模板名称
      content?: string; // 模板内容
      type?: null; 
  }
// 创建随访访视
export interface Common_Contract_EDC_FollowUp_CreateStrategyExaminationInput {
      name?: string; // 访视名称
      followUpMessageTemplateId?: number; // 随访消息模板id
      patientCrfPageIds?: number[]; // 随访患者表单
      doctorCrfPageIds?: number[]; // 随访医生表单
      plans?: Common_Contract_EDC_FollowUp_ExaminationPlanBaseInfo[]; // 访视推送计划
  }
export enum Common_Contract_EDC_FollowUp_Enums_FollowUpEventConditionType {
      GreaterThan = 0, 
      LessThan = 1, 
      EqualTo = 2, 
      NotEqualTo = 3, 
      Between = 4, 
      Contains = 5, 
      NotContains = 6, 
  }
// 访视推送计划信息
export interface Common_Contract_EDC_FollowUp_ExaminationPlanBaseInfo {
      timeOffsetType?: null; 
      timeOffset?: number; // 时间偏移
      timeOffsetUnit?: null; 
      pushCount?: number; // 推送次数
      pushInterval?: number; // 推送间隔
      advanceDay?: number; // 窗口期 提前天数
      delayDay?: number; // 窗口期 延后天数
  }
// 访视计划信息
export interface Common_Contract_EDC_FollowUp_ExaminationPlanInfo {
      id?: number; // 访视计划id
      sort?: number; // 顺序
      timeOffsetType?: null; 
      timeOffset?: number; // 时间偏移
      timeOffsetUnit?: null; 
      pushCount?: number; // 推送次数
      pushInterval?: number; // 推送间隔
      advanceDay?: number; // 窗口期 提前天数
      delayDay?: number; // 窗口期 延后天数
  }

export interface Common_Contract_EDC_FollowUp_FollowUpEventConditionInfo {
      conditionType?: null; 
      values?: string[]; // 值
      sort?: number; // 条件顺序
  }
export enum Common_Contract_EDC_FollowUp_FollowUpMessageTemplateType {
      Common = 0, //通用
      Followup = 1, //复诊
      Medication = 2, //用药
      LifeGuidance = 3, //生活指导
  }
// 随访事件条件
export interface Common_Contract_EDC_FollowUp_FollowUpStrategyEventConditionInfo {
      crfPageId?: number; // 表单id
      crfPageItemId?: number; // 表单控件id
      crfPageName?: string; // 表单修改时为空
      crfItemName?: string; // 表单控件修改时为空
      conditions?: Common_Contract_EDC_FollowUp_FollowUpEventConditionInfo[]; // 条件
      sort?: number; // 顺序
  }

export interface Common_Contract_EDC_FollowUp_GetBaseLineVariablesOutput {
      name?: string; // 变量名
      crfPageId?: number; // 表单id
      containerName?: string; // 所在容器名域名 或 表单名
      code?: string; // 表单控件code 或 RDR变量唯一编码 可空
      codeType?: null; 
      isSelected?: boolean; // 是否选中
  }
// 随访模板
export interface Common_Contract_EDC_FollowUp_GetFollowUpMessageTemplatesOutput {
      id?: number; // 模板id
      name?: string; // 模板名称
      content?: string; // 模板内容
      type?: null; 
  }

export interface Common_Contract_EDC_FollowUp_GetFollowUpSubjectCrfsInput {
      keyword?: string; // 搜索关键字
      filters?: Common_Contract_EDC_FollowUp_GetFollowUpSubjectCrfsInput_Filter[]; // 表头过滤
      pageSize?: number; 
      pageIndex?: number; 
  }

export interface Common_Contract_EDC_FollowUp_GetFollowUpSubjectCrfsInput_Filter {
      field?: string; // 字段
      value?: string[]; // 过滤值
      orderBy?: string; // 排序规则
  }
// 获取随访受试者表单输出
export interface Common_Contract_EDC_FollowUp_GetFollowUpSubjectCrfsOutput {
      headers?: Common_Contract_EDC_FollowUp_GetFollowUpSubjectCrfsOutput_HeaderInfo[]; // 表头信息
      rowDatas?: Common_Contract_EDC_FollowUp_GetFollowUpSubjectCrfsOutput_RowInfo[]; // 行数据信息
      total?: number; // 数据总数
  }
// 表头信息
export interface Common_Contract_EDC_FollowUp_GetFollowUpSubjectCrfsOutput_HeaderInfo {
      name?: string; // 表头名称
      field?: string; // 字段
      canFilter?: boolean; // 是否可以过滤
      canSort?: boolean; // 是否可以排序
  }
// 行数据详情
export interface Common_Contract_EDC_FollowUp_GetFollowUpSubjectCrfsOutput_RowInfo {
      uuid?: string; // 每行数据唯一id只用于前端业务处理
      followUpStrategyExaminationId?: number; // 访视id
      studySubjectId?: number; // 受试者id
      patientId?: number; // 患者id
      crfPageId?: number; // 表单id
      crfPageName?: string; // 表单名
      crfItemCount?: number; // 表单控件数
      crfFullCount?: number; // 表单填充数
      isWechatBind?: boolean; // 是否绑定微信
      rowValues?: string[]; // 行数据
  }

export interface Common_Contract_EDC_FollowUp_GetFollowUpSubjectSummaryOutput {
      subjectCount?: number; // 患者总数
      followUpLossCount?: number; // 失访数
      adverseEventCount?: number; // 不良事件数
      questionCount?: number; // 质疑数
      unboundSubjectCount?: number; // 未认证数
  }

export interface Common_Contract_EDC_FollowUp_GetFollowUpSubjectsInput {
      keyword?: string; // 搜索关键字
      filters?: Common_Contract_EDC_FollowUp_GetFollowUpSubjectsInput_Filter[]; // 表头过滤
      pageSize?: number; 
      pageIndex?: number; 
  }

export interface Common_Contract_EDC_FollowUp_GetFollowUpSubjectsInput_Filter {
      field?: string; // 字段
      value?: string[]; // 过滤值
      orderBy?: string; // 排序规则
  }
// 获取随访受试者
export interface Common_Contract_EDC_FollowUp_GetFollowUpSubjectsOutput {
      headers?: Common_Contract_EDC_FollowUp_GetFollowUpSubjectsOutput_HeaderInfo[]; // 表头信息
      rowDatas?: Common_Contract_EDC_FollowUp_GetFollowUpSubjectsOutput_RowInfo[]; // 行数据信息
      total?: number; // 数据总数
  }
// 访视信息
export interface Common_Contract_EDC_FollowUp_GetFollowUpSubjectsOutput_ExaminationInfo {
      id?: number; // 访视id
      name?: string; // 访视名称
      crfPageNames?: string[]; // 表单名称列表
  }
// 表头信息
export interface Common_Contract_EDC_FollowUp_GetFollowUpSubjectsOutput_HeaderInfo {
      name?: string; // 表头名称
      field?: string; // 字段
      canFilter?: boolean; // 是否可以过滤
      canSort?: boolean; // 是否可以排序
  }
// 行数据详情
export interface Common_Contract_EDC_FollowUp_GetFollowUpSubjectsOutput_RowInfo {
      uuid?: string; // 每行数据唯一id只用于前端业务处理
      studySubjectId?: number; // 受试者id
      patientId?: number; // 患者id
      scheduleCount?: number; // 计划总数
      schedulePushCount?: number; // 已推送的计划数
      isWechatBind?: boolean; // 微信认证状态
      examination?: null; 
      rowValues?: string[]; // 行数据
  }
// 随访事件
export interface Common_Contract_EDC_FollowUp_GetStrategyEventsOutput {
      eventConditions?: Common_Contract_EDC_FollowUp_FollowUpStrategyEventConditionInfo[]; // 不良事件条件
      lostEventCount?: number; // 失访事件数
      lostEventEnable?: boolean; // 失访事件开启状态
      adverseEventEnable?: boolean; // 不良事件开启状态
  }

export interface Common_Contract_EDC_FollowUp_GetStrategyExaminationInfoOutput {
      id?: number; // 访视id
      name?: string; // 访视名
      followUpMessageTemplateId?: number; // 随访消息模板id
      messageTemplate?: string; // 随访消息模板内容
      patientCrfPages?: Common_Contract_EDC_FollowUp_GetStrategyExaminationInfoOutput_FollowUpCrfInfo[]; // 随访患者表单列表
      doctorCrfPages?: Common_Contract_EDC_FollowUp_GetStrategyExaminationInfoOutput_FollowUpCrfInfo[]; // 随访医生表单列表
      plans?: Common_Contract_EDC_FollowUp_ExaminationPlanInfo[]; // 访视计划列表
  }
// 随访表单信息
export interface Common_Contract_EDC_FollowUp_GetStrategyExaminationInfoOutput_FollowUpCrfInfo {
      crfPageId?: number; // 表单id
      crfPageName?: string; // 表单名
  }
// 策略访视
export interface Common_Contract_EDC_FollowUp_GetStrategyExaminationsOutput {
      strategyId?: number; // 策略id
      name?: string; // 策略名称
      status?: null; 
      examinations?: Common_Contract_EDC_FollowUp_GetStrategyExaminationsOutput_FollowUpExaminationInfo[]; // 随访访视列表
  }
// 随访表单信息
export interface Common_Contract_EDC_FollowUp_GetStrategyExaminationsOutput_FollowUpCrfInfo {
      crfPageId?: number; // 表单id
      crfPageName?: string; // 表单名
  }
// 随访方式信息
export interface Common_Contract_EDC_FollowUp_GetStrategyExaminationsOutput_FollowUpExaminationInfo {
      id?: number; // 访视id
      name?: string; // 访视名
      patientCrfPages?: Common_Contract_EDC_FollowUp_GetStrategyExaminationsOutput_FollowUpCrfInfo[]; // 随访患者表单列表
      doctorCrfPages?: Common_Contract_EDC_FollowUp_GetStrategyExaminationsOutput_FollowUpCrfInfo[]; // 随访医生表单列表
      sort?: number; // 顺序
  }
// 推送随访表单消息
export interface Common_Contract_EDC_FollowUp_PushFollowUpCrfMessagesInput {
      studySubjectId?: number; // 研究受试者ID
      followUpStrategyExaminationId?: number; // 随访访视ID
      crfPageId?: number; // 表单ID
      message?: string; // 消息TODO 这里为了前端不报错临时改为不必填
  }

export interface Common_Contract_EDC_FollowUp_PushFollowUpMessagesInput {
      studySubjectIds?: number[]; // 受试者id列表
      message?: string; // 推送的消息内容
  }
// 修改随访基线
export interface Common_Contract_EDC_FollowUp_UpdateBaseLineInput {
      crfPageId?: number; // 表单id
      code?: string; // 表单控件code 或 RDR变量唯一编码 可空
      codeType?: null; 
  }
// 修改随访消息模板
export interface Common_Contract_EDC_FollowUp_UpdateFollowUpMessageTemplateInput {
      id?: number; // 模板id
      name?: string; // 模板名称
      content?: string; // 模板内容
      type?: null; 
  }

export interface Common_Contract_EDC_FollowUp_UpdateFollowUpScheduleInput {
      studySubjectIds?: number[]; // 受试者id
      scheduleStatus?: null; 
  }

export interface Common_Contract_EDC_FollowUp_UpdateFollowUpStrategyStatusInput {
      status?: null; 
  }

export interface Common_Contract_EDC_FollowUp_UpdateStrategyEventInput {
      eventConditions?: Common_Contract_EDC_FollowUp_FollowUpStrategyEventConditionInfo[]; // 不良事件条件
      lostEventCount?: number; // 失访事件数
      lostEventEnable?: boolean; // 失访事件开启状态
      adverseEventEnable?: boolean; // 不良事件开启状态
  }

export interface Common_Contract_EDC_FollowUp_UpdateStrategyExaminationInput {
      id?: number; // 访视id
      name?: string; // 访视名
      patientCrfPageIds?: number[]; // 随访患者表单id列表
      doctorCrfPageIds?: number[]; // 随访医生表单id列表
      followUpMessageTemplateId?: number; // 随访消息模板id
      plans?: Common_Contract_EDC_FollowUp_ExaminationPlanInfo[]; // 访视计划列表
  }

export interface Common_Contract_EDC_FollowUp_UpdateStrategyExaminationSortInput {
      id?: number; // 访视id
      sort?: number; // 顺序
  }

export interface Common_Contract_EDC_ObservationIndicator_AddObservationIndicatorsVariableMethodsInput {
      id?: number; // id，为null则为新增方法
      name?: string; // 名称
      description?: string; // 描述
      aggregationMethodType?: null; 
      customAggregationMethodNumber?: number; // 自定义聚合方法次数
      isBindEvent?: boolean; // 是否绑定事件
      bindEventGroupInfo?: null; 
      productionStatus?: null; 
  }
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

export interface Common_Contract_EDC_ObservationIndicator_GetObservationIndicatorsOutput {
      id?: number; // 关注变量id
      displayName?: string; // 名称
      isShow?: boolean; // 是否显示
      sort?: number; // 排序
      isFixed?: boolean; // 是否置顶
      indicatorType?: null; 
      variableDataType?: null; 
      hasTimeStandard?: boolean; // 是否包含时间金标准
      variableUniqueCode?: string; // 变量唯一编码
      code?: string; // 指标唯一编码
      createTime?: string; // 创建时间
      variableAggregationMethods?: Common_Contract_EDC_ObservationIndicator_ObservationIndicatorsVariableAggregationMethodInfo[]; // 变量聚合方法集合
      crfItemRowIndex?: number; // 表单矩阵控件行索引
  }

export interface Common_Contract_EDC_ObservationIndicator_ObservationIndicatorsVariableAggregationMethodInfo {
      id?: number; // id，为null则为新增方法
      name?: string; // 名称
      description?: string; // 描述
      aggregationMethodType?: null; 
      customAggregationMethodNumber?: number; // 自定义聚合方法次数
      isBindEvent?: boolean; // 是否绑定事件
      bindEventGroupInfo?: null; 
      productionStatus?: null; 
  }

export interface Common_Contract_EDC_ObservationIndicator_UpdateObservationIndicatorMethodNameInput {
      name?: string; // 方法名
  }

export interface Common_Contract_EDC_ObservationIndicator_UpdateObservationIndicatorOrderInput {
      updateObservationIndicatorOrderItems?: Common_Contract_EDC_ObservationIndicator_UpdateObservationIndicatorOrderItem[]; 
  }

export interface Common_Contract_EDC_ObservationIndicator_UpdateObservationIndicatorOrderItem {
      id?: number; 
      displayName?: string; 
      sort?: number; 
      isFixed?: boolean; 
  }

export interface Common_Contract_EDC_ObservationIndicator_UpdateObservationIndicatorShowStatusInput {
      isShow?: boolean; // 是否显示
  }

export interface Common_Contract_EDC_StudyCrfVariableTree_CrfNodeVariableInfo {
      crfPageId?: number; // 表单id
      crfItemId?: number; // 控件id
      crfItemName?: string; // 控件名称
      crfItemParentId?: number; // 表单控件父id
      crfItemParentType?: null; 
      rowIndex?: number; // 矩阵控件行索引
      rowLabel?: string; // 矩阵控件名称
      code?: string; // 控件编码
      uniqueCode?: string; // 控件唯一编码
      crfItemType?: null; 
      crfItemStatisticalType?: null; 
      sort?: number; // 顺序
      tipBoard?: null; 
  }
// 变量提示板信息
export interface Common_Contract_EDC_StudyCrfVariableTree_CrfNodeVariableInfo_TipBoardInfo {
      fillRate?: number; // 填充率
      description?: string; // 变量说明
      fillCount?: number; // 填充总数
      examples?: string[]; // 变量举例
  }

export interface Common_Contract_EDC_StudyCrfVariableTree_GetCrfNodeVariableTreeInput {
      maxGroupSize?: number; // 最大分组数量（可空）
      crfPageId?: number; // 表单id（可空）
  }

export interface Common_Contract_EDC_StudyCrfVariableTree_GetCrfNodeVariableTreeOutput {
      groupName?: string; // 组名（表单名）
      crfPageId?: number; // 表单id对于表单来说，层级和表单都是CrfPageId
      crfPageCode?: string; // 表单code
      crfTableItemCode?: string; // 表单控件code
      crfTimeStandardItemCode?: string; // 表单时间金标准控件code
      variableTotal?: number; // 该组变量总数（表单下的控件总数）
      nodes?: Common_Contract_EDC_StudyCrfVariableTree_GetCrfNodeVariableTreeOutput_NodeInfo[]; // 节点
      variables?: Common_Contract_EDC_StudyCrfVariableTree_CrfNodeVariableInfo[]; // 变量列表（默认显示前30条）
  }
// 节点信息
export interface Common_Contract_EDC_StudyCrfVariableTree_GetCrfNodeVariableTreeOutput_NodeInfo {
      id?: number; // 节点id（表单id）
      name?: string; // 节点名
      sort?: number; // 顺序
  }

export interface Common_Contract_EDC_StudyCrfVariableTree_GetCrfNodeVariablesCountOutput {
      variableCount?: number; // 变量总数
  }

export interface Common_Contract_EDC_StudyCrfVariableTree_GetCrfNodesLevelsOutput {
      groupId?: number; // 组id可能是表单id或者控件id用于前端作为层级锚点
      crfPageId?: number; // 表单id
      crfItemId?: number; // 控件id
      nodeName?: string; // 层级名称
      sort?: number; // 顺序
      children?: Common_Contract_EDC_StudyCrfVariableTree_GetCrfNodesLevelsOutput[]; // 子层级
  }

export interface Common_Contract_EDC_StudyCrfVariableTree_SearchCrfNodeInput {
      keyword?: string; // 关键字
  }

export interface Common_Contract_EDC_StudyCrfVariableTree_SearchCrfNodeOutput {
      nodes?: Common_Contract_EDC_StudyCrfVariableTree_SearchCrfNodeOutput_SearchCrfNodeInfo[]; // 节点列表
      variables?: Common_Contract_EDC_StudyCrfVariableTree_CrfNodeVariableInfo[]; // 节点后的变量列表
      hasSubVariable?: boolean; // 是否包含子变量
  }
// 搜索节点信息
export interface Common_Contract_EDC_StudyCrfVariableTree_SearchCrfNodeOutput_SearchCrfNodeInfo {
      groupId?: number; // 组id可能是表单id或者控件id用于前端作为层级锚点
      crfPageId?: number; // 表单id
      crfItemId?: number; // 控件id
      nodeName?: string; // 节点名
      sort?: number; // 顺序
  }

export interface Common_Contract_EDC_StudyCrfVariableTree_SearchCrfVariablesInput {
      uniqueCodes?: string[]; // 表单控件唯一编码
  }
// 患者咨询
export interface Common_Contract_GetSubjectFollowUpAdvisoriesOutput {
      id?: number; // 消息ID
      parentId?: number; // 父消息ID
      content?: null; 
      role?: null; 
      isRead?: boolean; // 是否已读
      createTime?: string; // 创建时间
  }
// 附件
export interface Common_Contract_GetSubjectFollowUpAdvisoriesOutput_Attachment {
      url?: string; // 附件URL
      type?: number; // 附件类型
  }
// 消息内容
export interface Common_Contract_GetSubjectFollowUpAdvisoriesOutput_MessageContent {
      text?: string; // 文本内容
      attachments?: Common_Contract_GetSubjectFollowUpAdvisoriesOutput_Attachment[]; // 附件列表
  }

export interface Common_Contract_GetSubjectFollowUpEmrsOutput {
      id?: number; // 消息ID
      parentId?: number; // 父消息ID
      content?: null; 
      role?: null; 
      isRead?: boolean; // 是否已读
      createTime?: string; // 创建时间
  }
// 附件
export interface Common_Contract_GetSubjectFollowUpEmrsOutput_Attachment {
      url?: string; // 附件URL
      type?: number; // 附件类型
  }
// 消息内容
export interface Common_Contract_GetSubjectFollowUpEmrsOutput_MessageContent {
      text?: string; // 文本内容
      attachments?: Common_Contract_GetSubjectFollowUpEmrsOutput_Attachment[]; // 附件列表
  }
// 变量提示板信息
export interface Common_Contract_IR_Nodes_NodeVariableInfo_TipBoardInfo {
      fillRate?: number; // 填充率
      description?: string; // 变量说明
      fillCount?: number; // 填充总数
      examples?: string[]; // 变量举例
  }

export interface Common_Contract_IR_Query_GetQueryTaskGroupsDetails {
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
      items?: Common_Contract_IR_Query_QueryTaskItemOutput[]; 
      completeTime?: string; 
      startTime?: string; 
      taskNo?: number; 
      projectName?: string; 
      isQuery?: boolean; // 是否是通用科研域
      projectCode?: string; // ProjectCode
      querySourceType?: null; 
  }

export interface Common_Contract_IR_Query_GetQueryTaskOutput {
      total?: number; 
      details?: Common_Contract_IR_Query_GetQueryTaskGroupsDetails[]; 
  }

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

export interface Common_Contract_IR_Query_QueryTaskItemOutput {
      uid?: string; 
      searchCount?: number; 
      hitPatCount?: number; 
      hitVisitCount?: number; 
      timeConsuming?: number; 
      createTime?: string; 
  }

export interface Common_Contract_IR_Result_GetIndicatorDetialInput {
      parentHierarchy?: boolean; 
      hitData?: string; 
      autoIdSet?: number[]; 
  }
export enum Common_Contract_IR_Result_LinkType {
      None = 0, 
      Eview = 1, 
      SingleVisit = 2, 
      VisitDetail = 3, 
      HitDataDetail = 4, 
      EnrollmentDetail = 5, 
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
export enum Common_Contract_IR_Result_QueryResultDisplayModeEnum {
      None = 0, 
      Patient = 1, 
      Visit = 2, 
  }
// 表头筛选
export interface Common_Contract_IR_Result_QueryResultHeaderFilterInput {
      variableUniqueCode?: string; // 变量唯一编码
      values?: string[]; // 选中的过滤值集合,该集合有值时优先正向过滤(即使用该集合作为包含条件)
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
      value?: string; // 值
      name?: string; 
      code?: string; 
      sort?: number; // 排序
  }
export enum Common_Contract_Meta_Node_TermUseType {
      UsedAsTerm = 1, 
      UsedAsValue = 2, 
  }
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
// 患者咨询回复
export interface Common_Contract_ReplySubjectFollowUpAdvisorieInput {
      replyId?: number; // 回复ID
      content?: null; 
  }
// 回复内容
export interface Common_Contract_ReplySubjectFollowUpAdvisorieInput_ReplyContent {
      text?: string; // 文本内容
      attachments?: Common_Contract_ReplySubjectFollowUpAdvisorieInput_ReplyContent_Attachment[]; // 附件
  }
// 附件
export interface Common_Contract_ReplySubjectFollowUpAdvisorieInput_ReplyContent_Attachment {
      url?: string; // 文件地址
      type?: number; // 类型
  }
// 回复病历
export interface Common_Contract_ReplySubjectFollowUpEmrInput {
      replyId?: number; // 回复ID
      content?: null; 
  }
// 回复内容
export interface Common_Contract_ReplySubjectFollowUpEmrInput_ReplyContent {
      text?: string; // 文本内容
      attachments?: Common_Contract_ReplySubjectFollowUpEmrInput_ReplyContent_Attachment[]; // 附件
  }
// 附件
export interface Common_Contract_ReplySubjectFollowUpEmrInput_ReplyContent_Attachment {
      url?: string; // 文件地址
      type?: number; // 类型
  }
// 存储年龄计算信息
export interface Common_Contract_Research_VariableCalculateInfo {
      type?: null; 
      relatecode?: string; // 计算关联变量的UniqueCode
  }
export enum Common_Contract_Research_VariableCalculateInfo_CalculateType {
      Age = 1, 
      Visit_Age = 2, 
  }

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
export enum Common_Contract_Search_EventGroup_TimeRangeSeqEnum {
      Before = 1, //之前
      After = 2, //之后
  }
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

export interface EDC_Service_Application_Dto_CodeSet_CodeOptionItem {
      id?: number; 
      code?: string; 
      label?: string; 
      score?: number; 
      checked?: boolean; 
      imgSrc?: string; 
      ableNote?: boolean; 
      deleted?: boolean; 
      children?: null; 
  }

export interface EDC_Service_Application_Dto_CodeSet_CodeSystemItem {
      filed?: number; 
      id?: number; 
      code?: string; 
      name?: string; 
      options?: EDC_Service_Application_Dto_CodeSet_CodeOptionItem[]; 
  }

export interface EDC_Service_Application_Dto_Emr_EmrMenuDisplayModel {
      order?: number; // 排列顺序
      identify?: string; // 菜单和对应模型的标识，根据此标识定位，代码自定义，如病案首页对应case_history
      isEmrRecord?: boolean; // 标识是否是病历文书节点
      codeSetId?: number; // CodeSet标识
      code?: string; // Code
      displayName?: string; // 展示名称，如病案首页，入院记录
      isDynamicMenuNode?: boolean; // 是否是动态菜单节点，如日常病程记录
      medicalRecordId?: number; 
      children?: EDC_Service_Application_Dto_Emr_EmrMenuDisplayModel[]; // 子节点，如住院病程记录下的术前记录
      identifyCode?: string; 
      recordTime?: string; // 是否支持半自动填充
  }

export interface EDC_Service_Application_Dto_Emr_Output_GetPagedPatientEncounterOutput {
      pagedPatientEncounterDtos?: EDC_Service_Application_Dto_Emr_Output_PagedPatientEncounterDto[]; 
      startTime?: string; 
      finishTime?: string; 
  }

export interface EDC_Service_Application_Dto_Emr_Output_GetPatientMenuRecordOutput {
      count?: number; 
      singlePatientInfoDto?: null; 
      emrShowType?: string; // 文书显示类型，主要如html，txt，xml
      emrMenuDisplayModels?: EDC_Service_Application_Dto_Emr_EmrMenuDisplayModel[]; // 菜单显示模型
      patientMedicalRecordDtos?: EDC_Service_Application_Dto_Emr_Output_MedicalRecordOutputDto[]; // 病历文书模型
      visitAimTags?: any; 
  }

export interface EDC_Service_Application_Dto_Emr_Output_MedicalRecordOutputDto {
      areaDef?: string; 
      identifyCode?: string; 
      recordTypeCode?: string; 
      recordId?: number; 
      recordTitle?: string; 
      recordTime?: string; 
      createTime?: string; 
      originalXmlContent?: string; 
      originalHtmlContent?: string; 
      originalTxtContent?: string; 
      originalOtherContent?: string; 
      identify?: string; 
      emrShowType?: null; 
      aimTagPath?: string; 
      extraData?: null; 
      scopeTableName?: string; 
      webUrl?: string; 
      pdfUrl?: string; 
      patientName?: string; 
  }

export interface EDC_Service_Application_Dto_Emr_Output_PagedPatientEncounterDto {
      patientNo?: string; // 病历号
      sourceInpatNo?: string; 
      sourceOutpatNo?: string; 
      majorDiagName?: string; // 主诊断
      visitTypeName?: string; // 就诊类型
      deptName?: string; // 科室名称
      orgName?: string; // 组织机构/医院名称
      docName?: string; // 医生名称
      visitTime?: string; // 入院/就诊 时间
      outTime?: string; // 出院时间
      id?: number; 
      patientId?: number; 
      patBaseId?: number; 
      orgCode?: string; 
      visitId?: number; 
      visitType?: string; 
      sourceApp?: string; 
      sourceVisitId?: string; 
      age?: string; 
      ageUnit?: string; 
      ageDay?: number; 
      payKindId?: number; 
      payKindCode?: string; 
      payKindName?: string; 
      insuranceKindId?: number; 
      insuranceKindCode?: string; 
      insuranceKindName?: string; 
      deptId?: number; 
      docId?: number; 
      isEmergency?: boolean; 
      majorDiagId?: number; 
      isValid?: boolean; 
      operId?: number; 
      operTime?: string; 
      etlTime?: string; 
      visitStateId?: number; 
      visitStateName?: string; 
      isMatchKeyWord?: boolean; // 是否匹配关键字
      pdfUrl?: string; // 原始系统的URl
      patientName?: string; 
  }
// 一般信息
export interface EDC_Service_Application_Dto_Emr_SinglePatientInfoDto {
      identifyCode?: string; 
      order?: number; 
      patientId?: number; 
      empi?: string; 
      patientName?: string; 
      lastName?: string; 
      firstName?: string; 
      spellCode?: string; 
      wbCode?: string; 
      sexCode?: string; 
      sexName?: string; 
      birthDate?: string; 
      birthAddress?: string; 
      birthAddressProvince?: string; 
      birthAddressCity?: string; 
      birthAddressCounty?: string; 
      birthAddressTownship?: string; 
      birthAddressVillage?: string; 
      birthAddressHouseNo?: string; 
      idTypeCode?: string; 
      idTypeName?: string; 
      idNo?: string; 
      countryCode?: string; 
      countryName?: string; 
      nationCode?: string; 
      nationName?: string; 
      marriageCode?: string; 
      marriageName?: string; 
      profession?: string; 
      aboCode?: string; 
      aboName?: string; 
      rhCode?: string; 
      rhName?: string; 
      nativePlace?: string; 
      accountAddress?: string; 
      accountAddressProvince?: string; 
      accountAddressCity?: string; 
      accountAddressCounty?: string; 
      accountAddressTownship?: string; 
      accountAddressVillage?: string; 
      accountAddressHouseNo?: string; 
      phone?: string; 
      telephone?: string; 
      mobile?: string; 
      mail?: string; 
      qq?: string; 
      wechat?: string; 
      contactName?: string; 
      contactRelationId?: number; 
      contactRelationCode?: string; 
      contactRelationName?: string; 
      contactPhone?: string; 
      contactAddress?: string; 
      contactAddressProvince?: string; 
      contactAddressCity?: string; 
      contactAddressCounty?: string; 
      contactAddressTownship?: string; 
      contactAddressVillage?: string; 
      contactAddressHouseno?: string; 
      contactZip?: string; 
      homeAddress?: string; 
      homeAddressProvince?: string; 
      homeAddressCity?: string; 
      homeAddressCounty?: string; 
      homeAddressTownship?: string; 
      homeAddressVllage?: string; 
      homeAddressHouseno?: string; 
      homePhone?: string; 
      homeZip?: string; 
      workAddress?: string; 
      workAddressProvince?: string; 
      workAddressCity?: string; 
      workAddressCounty?: string; 
      workAddressTownship?: string; 
      workAddressVillage?: string; 
      workAddressHouseno?: string; 
      workPhone?: string; 
      workZip?: string; 
      note?: string; 
      systemId?: string; 
      createTime?: string; 
      createOperId?: number; 
      updateOperId?: number; 
      updateTime?: string; 
      isValid?: boolean; 
      etlTime?: string; 
      visitAge?: string; 
  }
// 关键词命中标记
export interface EDC_Service_Application_Dto_Emr_VisitAimTag {
      aimPath?: string; // 路径{menu.code}#{tmenu.code}#{nmenu.code}#{reportid}
      lable?: string; // 对应的tag名称
      reportName?: string; 
      reportIndex?: number; // 命中序号
      headIndex?: number; // 关键词匹配头对应Index
      fullIndexs?: number[]; // 所以对应匹配Index
  }

export interface EDC_Service_Application_Dto_File_FileTicketOutput {
      sourceName?: string; 
      uid?: string; 
      ticket?: string; // file ticket
  }

export interface EDC_Service_Application_Dto_Home_ChartData {
      total?: number; 
      precent?: string; 
      value?: number; 
      name?: string; 
      variableUniqueCode?: string; 
      crfItemRowIndex?: number; 
  }

export interface EDC_Service_Application_Dto_Home_DomainChartData {
      groupId?: number; 
      groupName?: string; 
      data?: EDC_Service_Application_Dto_Home_DomainData[]; 
  }

export interface EDC_Service_Application_Dto_Home_DomainData {
      value?: number; 
      name?: string; 
  }

export interface EDC_Service_Application_Dto_Home_FollowVariable {
      name?: string; // 变量名称
      variableType?: null; 
      uniqueCode?: string; // 变量UniqueCode 或 表单控件UniqueCode
      crfPageId?: number; // 表单id
      crfItemRowIndex?: number; // 表单控件行索引（矩阵）
  }
export enum EDC_Service_Application_Dto_Home_HomeFollowVariableType {
      Rdr = 0, 
      Crf = 1, 
  }

export interface EDC_Service_Application_Dto_Home_HomeStudyCalenderOutput {
      studyCalenders?: EDC_Service_Application_Dto_Home_StudyCalender[]; 
  }

export interface EDC_Service_Application_Dto_Home_HomeStudyInfoOutput {
      studyName?: string; // 课题名称
      studyType?: null; 
      projectCode?: string; 
      isLock?: boolean; 
      studyLabels?: string[]; // 课题标签
      queryExpression?: string; // 课题纳排名称
      studyTypeName?: string; // 课题来源名称
      totalSubjects?: number; // 课题总患者数/人
      newSubjects?: number; // 新入组患者数/人
      createTime?: string; // 课题创建时间
      totalGroup?: number; // 课题分组个数不包括默认组
      description?: string; // 课题说明
      attachments?: EDC_Service_Application_Dto_File_FileTicketOutput[]; // 课题附件地址
  }

export interface EDC_Service_Application_Dto_Home_HomeStudyScatterOutput {
      titleName?: string; // chart标题
      chartType?: string; // chart类型line bar...
      chartDatas?: EDC_Service_Application_Dto_Home_ChartData[]; // chart 数据
      cacheTime?: string; // 缓存时间
  }

export interface EDC_Service_Application_Dto_Home_HomeStudySummaryOutput {
      firstEnrollTime?: string; 
      latestEnrollTime?: string; 
      title?: string; 
      variableDistributionSummarys?: EDC_Service_Application_Dto_Home_VariableDistributionSummary[]; 
  }

export interface EDC_Service_Application_Dto_Home_HomeStudyVariableDetialInput {
      uniqueCode?: string; 
      variableType?: null; 
      crfItemRowIndex?: number; 
  }

export interface EDC_Service_Application_Dto_Home_HomeStudyVariableDetialOutput {
      titleName?: string; // chart标题
      chartType?: string[]; // chart类型line bar
      chartData?: EDC_Service_Application_Dto_Home_DomainChartData[]; 
  }

export interface EDC_Service_Application_Dto_Home_HomeStudyVariablesInput {
      followVariables?: EDC_Service_Application_Dto_Home_FollowVariable[]; 
  }

export interface EDC_Service_Application_Dto_Home_HomeStudyVariablesOutput {
      studyId?: number; 
      variableUniqueCodes?: EDC_Service_Application_Dto_Home_FollowVariable[]; 
  }

export interface EDC_Service_Application_Dto_Home_StudyCalender {
      logDateTime?: string; // 日志发生时间yyyy-MM-dd
      studyCalenderItems?: EDC_Service_Application_Dto_Home_StudyCalenderItem[]; 
  }

export interface EDC_Service_Application_Dto_Home_StudyCalenderItem {
      logId?: number; 
      logLevel?: string; // 日志级别
      logday?: string; // 日志发生时间/天
      logContent?: string; // 日志内容
      createUserName?: string; // 操作人名称
      logTime?: string; // 日志发生时间/hour
  }

export interface EDC_Service_Application_Dto_Home_VariableDistributionSummary {
      description?: string; 
      chartType?: string; 
      variableDistributionSummarysItems?: EDC_Service_Application_Dto_Home_VariableDistributionSummarysItem[]; 
  }

export interface EDC_Service_Application_Dto_Home_VariableDistributionSummarysItem {
      enrollTime?: string; 
      quantity?: number; 
  }

export interface EDC_Service_Application_Dto_Page_AuditingTrajectoryGetOutput {
      studyId?: number; 
      operatorId?: number; 
      operatorName?: string; // 操作者名称
      roleId?: number; 
      roleName?: string; // 角色名称
      operationName?: string; // 操作名称
      resultBeforeChange?: string; // 变更前
      resultAfterChange?: string; // 变更后
      reasonForChange?: string; // 变更原因
      operationTime?: string; // 操作时间
  }

export interface EDC_Service_Application_Dto_Page_AuditingTrajectoryHeaderGetOutput {
      property?: string; 
      displayName?: string; 
  }

export interface EDC_Service_Application_Dto_Page_CheckNameOutput {
      isExists?: boolean; 
  }

export interface EDC_Service_Application_Dto_Page_CreateCrfDataOutput {
      crfPageDataId?: number; 
      lastModificationTime?: number; 
      saveState?: null; 
  }

export interface EDC_Service_Application_Dto_Page_CrfDataCreateInput {
      levelId?: number; 
      studyId?: number; 
      studySubjectId?: number; 
      levelType?: null; 
      crfPageId?: number; 
  }
export enum EDC_Service_Application_Dto_Page_CrfDataPageTypeEnum {
      All = 0, 
      FllowUp = 1, 
  }

export interface EDC_Service_Application_Dto_Page_CrfItemGetOutput {
      uniqueCode?: string; 
      id?: number; // ID
      pId?: number; // 父级控件的ID
      name?: string; // 控件名称
      type?: null; 
      sort?: number; // 次序
      code?: string; // 控件Code
      attributes?: null; // 控件属性
      isTimeStandard?: boolean; // 是否是时间金标准
      statisticalType?: null; 
      children?: EDC_Service_Application_Dto_Page_CrfItemGetOutput[]; // 子级
  }

export interface EDC_Service_Application_Dto_Page_CrfItemSave {
      id?: number; // ID
      pId?: number; // 父级控件的ID
      name?: string; // 控件名称
      type?: null; 
      sort?: number; // 次序
      code?: string; // 控件Code
      attributes?: null; // 控件属性
      isTimeStandard?: boolean; // 是否是时间金标准
      statisticalType?: null; 
      children?: EDC_Service_Application_Dto_Page_CrfItemSave[]; // 子级
  }

export interface EDC_Service_Application_Dto_Page_CrfItemSaveInput {
      studyId?: number; 
      crfPageId?: number; 
      createCrfItems?: EDC_Service_Application_Dto_Page_CrfItemSave[]; 
      updateCrfItems?: EDC_Service_Application_Dto_Page_CrfItemSave[]; 
      deleteCrfItems?: EDC_Service_Application_Dto_Page_CrfItemSave[]; 
  }
// 添加表单/文件夹
export interface EDC_Service_Application_Dto_Page_CrfPageAddInput {
      name?: string; // 名称
      parentId?: number; // 父级
      studyId?: number; // 项目ID
      sort?: number; // 次序
      crfPageType?: null; 
  }

export interface EDC_Service_Application_Dto_Page_CrfPageBindVariableValueHeader {
      name?: string; 
      selector?: boolean; 
  }

export interface EDC_Service_Application_Dto_Page_CrfPageDataFillInput {
      studyId?: number; 
      crfPageDataId?: number; 
      data?: string; 
      fillSource?: string; 
      recordTime?: string; 
      submit?: boolean; 
      lastModificationTime?: number; // 从请求中接收到的日期
      modifications?: EDC_Service_Application_Dto_Page_CrfPageDataMofificationinput[]; 
  }

export interface EDC_Service_Application_Dto_Page_CrfPageDataFillOutput {
      crfPageDataId?: number; 
      lastModificationTime?: number; 
      saveState?: null; 
      rulesMessages?: EDC_Service_Application_Dto_QueryNote_Output_GetCrfRuleCheckQueryNoteEventOutput[]; 
  }

export interface EDC_Service_Application_Dto_Page_CrfPageDataMofificationinput {
      uniqueCode?: string; 
      objectName?: string; 
      content?: string; 
      orginalValue?: string; 
      modifiedValue?: string; 
      dataIndex?: number; 
  }
// 表单/文件夹类
export interface EDC_Service_Application_Dto_Page_CrfPageOutput {
      code?: string; // Code
      id?: number; // ID
      name?: string; // 名称
      crfPageType?: null; 
      sort?: number; // 次序
      children?: EDC_Service_Application_Dto_Page_CrfPageOutput[]; // 子级
      lastModificationTime?: string; // 上次更新时间
  }

export interface EDC_Service_Application_Dto_Page_CrfPageTemplateAddInput {
      createCrfItems?: EDC_Service_Application_Dto_Page_CrfItemSave[]; 
      studyId?: number; 
      crfPageId?: number; 
      name?: string; 
      privilegeType?: null; 
  }

export interface EDC_Service_Application_Dto_Page_CrfPageTemplateAddOrUpdateBase {
      name?: string; 
      privilegeType?: null; 
  }

export interface EDC_Service_Application_Dto_Page_CrfPageTempleOutput {
      id?: number; 
      name?: string; 
      privilegeType?: null; 
      lastModificationTime?: string; 
      createUserId?: number; 
  }
// 表单/文件夹类
export interface EDC_Service_Application_Dto_Page_CrfPageTiledOutput {
      id?: number; // ID
      name?: string; // 名称
      code?: string; // Code
      prefix?: string; // 父级文件夹的名称
      lastModificationTime?: string; // 上次更新时间
  }

export interface EDC_Service_Application_Dto_Page_CrfPageUpdateBase {
      name?: string; 
      parentId?: number; 
      sort?: number; 
  }

export interface EDC_Service_Application_Dto_Page_GetConfirmItemsOutput {
      crfItemId?: number; 
  }

export interface EDC_Service_Application_Dto_Page_GetCrfDataPageOutput {
      name?: string; // 名称
      sort?: number; // 次序
      fillRate?: number; // 填充率
      levelId?: number; // 随访ID或者文件夹ID
      crfPageId?: number; // 表单ID
      levelType?: null; 
      shouldConfirm?: boolean; // 是否有需要确认的数据
      isFollowUp?: boolean; // 是否被添加随访
      queryNoteState?: null; 
      children?: EDC_Service_Application_Dto_Page_GetCrfDataPageOutput[]; // 子级
  }

export interface EDC_Service_Application_Dto_Page_GetCrfPageDataBindVariableValueOutput {
      headers?: EDC_Service_Application_Dto_Page_CrfPageBindVariableValueHeader[]; 
      content?: [][]; 
  }

export interface EDC_Service_Application_Dto_Page_GetCrfPageDataSubjectOutput {
      crfPageDataId?: number; 
      order?: number; 
      data?: string; 
      dataLabel?: string; 
      fillSource?: string; 
      isSubmitted?: boolean; 
      recordTime?: string; 
      lastModificationTime?: number; 
      saveState?: null; 
  }

export interface EDC_Service_Application_Dto_Page_GetCrfPageDataTermValueOutput {
      synyiId?: number; 
      value?: string; 
  }

export interface EDC_Service_Application_Dto_Page_GetHasConfirmOutput {
      shouldConfirm?: boolean; 
  }

export interface EDC_Service_Application_Dto_Page_GetStudySubjectInfoItem {
      displayName?: string; 
      value?: string; 
      code?: string; 
  }

export interface EDC_Service_Application_Dto_Page_GetStudySubjectInfoOutput {
      patientId?: number; 
      items?: EDC_Service_Application_Dto_Page_GetStudySubjectInfoItem[]; 
  }
export enum EDC_Service_Application_Dto_Page_TermTypeEnum {
      None = 0, 
      Cf = 1, 
      Lab = 2, 
      Drg = 3, 
      Operation = 4, 
  }

export interface EDC_Service_Application_Dto_Permission_PermissionOutput {
      id?: number; 
      uiName?: string; 
      treeValue?: string; 
  }

export interface EDC_Service_Application_Dto_QueryNote_Input_CreateQueryNoteEventInput {
      studyId?: number; // 课题ID
      dataId?: number; // /dataId
      crfItemId?: number; // 控件Id
      ruleId?: number; // 触发质疑的核查规则Id
      queryNoteState?: null; 
      dataIndex?: number; // 数据索引，用于表格等类型数据
      msg?: string; // 消息内容
      crfItemName?: string; // 控件名称
  }

export interface EDC_Service_Application_Dto_QueryNote_Input_GetExportQueryNoteEventsInput {
      sortInfo?: null; 
      studyId?: number; 
      selectAllFlag?: boolean; 
      selectedIds?: number[]; 
      excepIds?: number[]; 
      query?: string; 
      filterInfos?: EDC_Service_Application_Dto_QueryNote_Input_GetQueryNoteEventListFilter[]; 
      pageSize?: number; 
      pageIndex?: number; 
  }

export interface EDC_Service_Application_Dto_QueryNote_Input_GetQueryNoteEventListDistinctInput {
      studyId?: number; 
      variableUniqueCode?: string; 
      filterInfos?: EDC_Service_Application_Dto_QueryNote_Input_GetQueryNoteEventListFilter[]; 
      querySubjectKeyword?: string; 
      keyWord?: string; 
      pageSize?: number; 
      pageIndex?: number; 
  }

export interface EDC_Service_Application_Dto_QueryNote_Input_GetQueryNoteEventListFilter {
      variableUniqueCode?: string; 
      values?: string[]; 
  }

export interface EDC_Service_Application_Dto_QueryNote_Input_GetQueryNoteEventsInput {
      query?: string; 
      studyId?: number; 
      filterInfos?: EDC_Service_Application_Dto_QueryNote_Input_GetQueryNoteEventListFilter[]; 
      sortInfo?: null; 
      pageSize?: number; 
      pageIndex?: number; 
  }

export interface EDC_Service_Application_Dto_QueryNote_Input_GetQueryNoteSortVariable {
      variableUniqueCode?: string; 
      isAsc?: boolean; 
  }

export interface EDC_Service_Application_Dto_QueryNote_Input_UpdateQueryNoteEventsStateInput {
      selectAllFlag?: boolean; 
      selectedIds?: number[]; 
      excepIds?: number[]; 
      query?: string; 
      filterInfos?: EDC_Service_Application_Dto_QueryNote_Input_GetQueryNoteEventListFilter[]; 
      isSystem?: boolean; 
      studyId?: number; 
      queryNoteState?: null; 
      content?: string; 
      isDetail?: boolean; 
      dataIndex?: number; 
  }

export interface EDC_Service_Application_Dto_QueryNote_Output_Cell {
      data?: string; 
      variableUniqueCode?: string; 
  }

export interface EDC_Service_Application_Dto_QueryNote_Output_DetailPeocessForbid {
      reason?: string; 
      detailPeocessForbidIds?: number[]; 
  }

export interface EDC_Service_Application_Dto_QueryNote_Output_GetCrfRuleCheckQueryNoteEventOutput {
      content?: string; 
      crfItemId?: number; 
      crfItemCode?: string; 
      dataIndex?: number; 
      ruleId?: number; 
      useDN?: boolean; 
  }

export interface EDC_Service_Application_Dto_QueryNote_Output_GetItemQueryNoteEventsOutput {
      queryNoteEvents?: EDC_Service_Application_Dto_QueryNote_Output_QueryNoteEventBriefOutput[]; 
  }

export interface EDC_Service_Application_Dto_QueryNote_Output_GetPageDataItemsQueryNoteStatesOutput {
      studyId?: number; 
      studyName?: string; 
      crfPageId?: number; 
      crfPageName?: string; 
      items?: EDC_Service_Application_Dto_QueryNote_Output_ItemQueryNoteState[]; 
  }

export interface EDC_Service_Application_Dto_QueryNote_Output_GetQueryNoteEventListDistinctOutput {
      values?: EDC_Service_Application_Dto_QueryNote_Output_GetQueryNoteEventListDistinctValue[]; 
  }

export interface EDC_Service_Application_Dto_QueryNote_Output_GetQueryNoteEventListDistinctValue {
      display?: string; 
      value?: string; 
      count?: number; 
  }

export interface EDC_Service_Application_Dto_QueryNote_Output_GetQueryNoteEventMsgsOutput {
      msgs?: EDC_Service_Application_Dto_QueryNote_Output_QueryNoteEventMsg[]; 
  }

export interface EDC_Service_Application_Dto_QueryNote_Output_ItemQueryNoteState {
      queryNoteEventId?: number; 
      crfItemId?: number; 
      dataIndex?: number; 
      queryNoteState?: null; 
  }

export interface EDC_Service_Application_Dto_QueryNote_Output_NoPemission {
      reason?: string; 
      noPemissionIds?: number[]; 
  }

export interface EDC_Service_Application_Dto_QueryNote_Output_ProcessForbid {
      reason?: string; 
      processForbidIds?: number[]; 
  }

export interface EDC_Service_Application_Dto_QueryNote_Output_QueryNoteEventBriefOutput {
      crfItemName?: string; 
      crfItemId?: number; 
      studyName?: string; 
      crfPageName?: string; 
      id?: number; 
      state?: null; 
      type?: null; 
      content?: string; 
  }

export interface EDC_Service_Application_Dto_QueryNote_Output_QueryNoteEventMsg {
      id?: number; 
      userId?: number; 
      userName?: string; 
      queryNoteState?: null; 
      content?: string; 
      creationTime?: string; 
      roleCodes?: string; 
  }

export interface EDC_Service_Application_Dto_QueryNote_Output_QueryNoteEventOutput {
      total?: number; 
      page?: number; 
      pageSize?: number; 
      resultDatas?: EDC_Service_Application_Dto_QueryNote_Output_ResultData[]; 
      resultTitles?: EDC_Service_Application_Dto_QueryNote_Output_ResultTitle[]; 
  }

export interface EDC_Service_Application_Dto_QueryNote_Output_QueryNoteEventSingleOutput {
      queryNoteState?: null; 
      id?: number; 
      queryNoteType?: null; 
      content?: string; 
      patientNo?: string; 
      crfPageId?: number; 
      crfPageName?: string; 
      crfItemId?: number; 
      crfItemName?: string; 
      dataId?: number; // page item data id
      creatorId?: number; 
      creatorName?: string; 
      creationTime?: string; 
      replierId?: number; 
      replierName?: string; 
      replyTime?: string; 
      closerId?: number; 
      closerName?: string; 
      closeTime?: string; 
      closeReason?: string; 
      revokerId?: number; 
      revokerName?: string; 
      revokTime?: string; 
      updateTime?: string; 
      studySubjectId?: number; 
      patientId?: number; 
      armId?: number; 
      reopenName?: string; // 重启人
      reopenId?: number; 
      reopenTime?: string; // 重启时间
      dataIndex?: number; 
      projectName?: string; 
  }

export interface EDC_Service_Application_Dto_QueryNote_Output_ResultData {
      id?: number; 
      dataId?: number; 
      crfItemId?: number; 
      dataIndex?: number; 
      cells?: EDC_Service_Application_Dto_QueryNote_Output_Cell[]; 
  }

export interface EDC_Service_Application_Dto_QueryNote_Output_ResultTitle {
      displayName?: string; 
      variableUniqueCode?: string; 
      canSort?: boolean; 
      canFilter?: boolean; 
  }

export interface EDC_Service_Application_Dto_QueryNote_Output_UpdateQueryNoteEventsStateOutput {
      studyId?: number; 
      noPemission?: null; 
      processForbid?: null; 
      detailPeocessForbid?: null; 
  }

export interface EDC_Service_Application_Dto_RandomRule_Input_RandomRuleCreateInput {
      studyId?: number; // 课题Id
      randomType?: null; 
      totalCount?: number; // 总人数
      randomRound?: number; // 随机次数
      groupProportions?: EDC_Service_Application_Dto_RandomRule_Output_GroupProportion[]; // 分组比例
  }

export interface EDC_Service_Application_Dto_RandomRule_Input_RandomRuleEditInput {
      id?: number; 
      studyId?: number; // 课题Id
      randomType?: null; 
      totalCount?: number; // 总人数
      randomRound?: number; // 随机次数
      groupProportions?: EDC_Service_Application_Dto_RandomRule_Output_GroupProportion[]; // 分组比例
  }

export interface EDC_Service_Application_Dto_RandomRule_Output_GroupProportion {
      studySubjectGroupId?: number; // 受试组Id
      groupName?: string; // 组名
      proportion?: number; // 比例
  }

export interface EDC_Service_Application_Dto_RandomRule_Output_StudyRandomGroupingVerifyOutput {
      success?: boolean; // 是否通过
      message?: string; // 消息
  }

export interface EDC_Service_Application_Dto_RandomRule_Output_StudyRandomRuleOutput {
      id?: number; 
      studyId?: number; // 课题Id
      randomType?: null; 
      totalCount?: number; // 总人数
      randomRound?: number; // 随机次数
      groupProportions?: EDC_Service_Application_Dto_RandomRule_Output_GroupProportion[]; // 分组比例
      randomStatus?: null; 
  }

export interface EDC_Service_Application_Dto_RandomRule_Output_StudySubjectTotalOutput {
      subjectTotal?: number; 
  }

export interface EDC_Service_Application_Dto_Rule_Input_CreateRuleInput {
      script?: EDC_Service_Application_Dto_Rule_Input_CrfRuleScript[]; 
      studyId?: number; 
      pageId?: number; 
      crfItemId?: number; 
      name?: string; 
      ruleType?: null; 
      useDn?: boolean; 
      ruleContent?: string; 
      msg?: string; 
      enable?: boolean; 
  }

export interface EDC_Service_Application_Dto_Rule_Input_CrfRuleScript {
      type?: number; 
      params?: EDC_Service_Application_Dto_Script_ScriptParameterItem[]; 
      script?: string; 
      isManualModificationAbled?: boolean; 
  }

export interface EDC_Service_Application_Dto_Rule_Input_UpdateRuleInput {
      ruleId?: number; 
      script?: EDC_Service_Application_Dto_Rule_Input_CrfRuleScript[]; 
      studyId?: number; 
      pageId?: number; 
      crfItemId?: number; 
      name?: string; 
      ruleType?: null; 
      useDn?: boolean; 
      ruleContent?: string; 
      msg?: string; 
      enable?: boolean; 
  }

export interface EDC_Service_Application_Dto_Rule_Output_CreateRuleOutput {
      id?: number; 
  }

export interface EDC_Service_Application_Dto_Rule_Output_CrfRuleList {
      script?: EDC_Service_Application_Dto_Rule_Input_CrfRuleScript[]; 
      ruleId?: number; 
      creatorUserId?: number; 
      creationTime?: string; 
      lastModifierUserId?: number; 
      lastModificationTime?: string; 
      studyId?: number; 
      pageId?: number; 
      crfItemId?: number; 
      name?: string; 
      ruleType?: null; 
      useDn?: boolean; 
      ruleContent?: string; 
      msg?: string; 
      enable?: boolean; 
  }

export interface EDC_Service_Application_Dto_Rule_Output_DelRuleOutput {
  }

export interface EDC_Service_Application_Dto_Rule_Output_ListRuleOutput {
      rules?: EDC_Service_Application_Dto_Rule_Output_CrfRuleList[]; 
  }

export interface EDC_Service_Application_Dto_Rule_Output_UpdateRuleOutput {
  }

export interface EDC_Service_Application_Dto_Script_ScriptParameterItem {
      code?: string; 
      name?: string; 
  }

export interface EDC_Service_Application_Dto_Site_Input_CreateStudySiteInput {
      studyId?: number; // StudyId
      name?: string; // 名称
      code?: string; // 编码
      sourceType?: null; 
  }

export interface EDC_Service_Application_Dto_Site_Input_UpdateStudySiteInput {
      studyId?: number; // StudyId
      siteId?: number; // SiteId
      name?: string; // 名称
      code?: string; // 编码
  }

export interface EDC_Service_Application_Dto_Site_Output_CreateStudySiteOutput {
      id?: number; 
      studyId?: number; 
      name?: string; // 名称
      code?: string; // 编码
      membersCount?: number; // 中心有多少成员
      mainSite?: boolean; // 是否是主中心
      accountBelongs?: boolean; // 当前账户在此中心
  }

export interface EDC_Service_Application_Dto_Site_Output_StudySiteOutput {
      id?: number; 
      studyId?: number; 
      name?: string; // 名称
      code?: string; // 编码
      membersCount?: number; // 中心有多少成员
      mainSite?: boolean; // 是否是主中心
      accountBelongs?: boolean; // 当前账户在此中心
  }

export interface EDC_Service_Application_Dto_Study_FocusInput {
      studyId?: number; // 课题id
      status?: boolean; // 是否关注课题
  }

export interface EDC_Service_Application_Dto_Study_GetQueryConditionOutput {
      studyId?: number; // 课题ID
      subscribeStatus?: boolean; // 纳排订阅状态
      queryExpressionDescription?: string; // 纳排描述
      queryFilters?: null; 
      lasteExecuteTime?: string; // 纳排最近一次执行时间
      queryTaskId?: string; // 搜索任务id
  }

export interface EDC_Service_Application_Dto_Study_Input_CreateQueryConditionInput {
      subscribeStatus?: boolean; // 订阅状态
      queryExpressionDescription?: string; 
      queryFilters?: null; 
  }

export interface EDC_Service_Application_Dto_Study_Input_CreateStudyFromCollectInput {
      collectId?: number; 
  }

export interface EDC_Service_Application_Dto_Study_Input_CreateStudyInput {
      studyName?: string; // 课题名称
      studyType?: null; 
      projectCode?: string; // 专病code默认query
      labels?: string[]; // 课题标签
      description?: string; // 课题说明
      attachments?: EDC_Service_Application_Dto_File_FileTicketOutput[]; // 课题附件地址
      sourceCollectId?: number; // 来源收藏id，如果是来自收藏生成
  }

export interface EDC_Service_Application_Dto_Study_Input_CreateStudyVariablesInfoInput {
      variableName?: string; 
      isHidden?: boolean; // 是否隐藏
      sort?: number; // 顺序
      variableUniqueCode?: string; // 变量唯一代码（如果是表单控件则为控件Code）
      crfPageId?: number; // 表单id
      crfItemRowIndex?: number; // 表单矩阵控件行索引
      indicatorType?: null; 
      isTop?: boolean; // 是否置顶
      createUserId?: number; // 创建用户
      createTime?: string; // 创建时间
      isDeleted?: boolean; // 删除标识
      observationIndicatorVariableAggregationMethod?: null; 
  }

export interface EDC_Service_Application_Dto_Study_Input_LockedStudyInput {
      lock?: boolean; 
  }

export interface EDC_Service_Application_Dto_Study_Input_UpdateStudyInput {
      studyName?: string; // 课题名称
      studyType?: null; 
      labels?: string[]; // 课题标签
      description?: string; // 课题说明
      isLock?: boolean; // 是否锁定
      attachments?: EDC_Service_Application_Dto_File_FileTicketOutput[]; // 课题附件地址
  }

export interface EDC_Service_Application_Dto_Study_Output_CreateConditionOutput {
      studyId?: number; 
      studyName?: string; 
      queryId?: string; 
  }

export interface EDC_Service_Application_Dto_Study_Output_CreateStudyOutput {
      studyId?: number; 
      studyName?: string; 
  }

export interface EDC_Service_Application_Dto_Study_Output_GetFollowStudyOutput {
      studyId?: number; 
      studyName?: string; 
  }

export interface EDC_Service_Application_Dto_Study_Output_GetStudyOutput {
      id?: number; 
      studyName?: string; // 项目名称
      studyType?: null; 
      projectCode?: string; // 关联专病
      projectName?: string; // 关联专病
      studyLabel?: string[]; // 课题标签
      studyDesc?: string; // 课题描述
      studyAttachmentUrl?: string; // 课题附件
      totalSubjects?: number; // 总病例数
      newSubjects?: number; // 新增病例数
      totalVariables?: number; // 关注变量总数
      isLock?: boolean; // 是否已被锁库
      isFocus?: boolean; // 是否已被关注
      isChange?: boolean; // 是否已修改
      createUserId?: number; // 创建者id
      createUserName?: string; // 创建者
      projectMembers?: EDC_Service_Application_Dto_Study_ProjectMember[]; // 项目成员
      createTime?: string; // 创建时间
      lastModifiedUserId?: number; // 最后一次修改者id
      lastModified?: string; // 最后一次修改时间
      menus?: EDC_Service_Application_Dto_Study_Output_StudyMenu[]; // 项目的下拉标签
  }

export interface EDC_Service_Application_Dto_Study_Output_StudyFollowVariableOutput {
      studyId?: number; 
      variables?: EDC_Service_Application_Dto_Study_Output_VariableInfo[]; 
  }

export interface EDC_Service_Application_Dto_Study_Output_StudyMenu {
      label?: string; // 名称
      valid?: boolean; // 是否有效
      uiPermission?: string; // 后端权限点
  }

export interface EDC_Service_Application_Dto_Study_Output_StudyOutput {
      id?: number; // 课题id
  }

export interface EDC_Service_Application_Dto_Study_Output_StudyQueryStatusOutput {
      queryState?: null; 
  }

export interface EDC_Service_Application_Dto_Study_Output_VariableInfo {
      variableUniqueCode?: string; 
      variableName?: string; 
      indicatorType?: null; 
      crfPageId?: number; // 表单id
      crfItemRowIndex?: number; // 表单控件行索引（矩阵）
  }

export interface EDC_Service_Application_Dto_Study_ProjectMember {
      userId?: number; // 项目成员id
      userName?: string; // 项目成员用户名称
  }

export interface EDC_Service_Application_Dto_Study_VariableChangeHistoryOutput {
      id?: number; 
      studyId?: number; 
      changeType?: null; 
      changeTypeName?: string; 
      changeValue?: string; 
      changeVersion?: string; 
      createUserId?: number; 
      createTime?: string; 
      lastModifiedUserId?: number; 
      lastModified?: string; 
  }

export interface EDC_Service_Application_Dto_Study_ViewDataFilterCondition {
      hitPatCount?: number; 
      hitVisCount?: number; 
      childrenConditions?: EDC_Service_Application_Dto_Study_ViewDataFilterCondition[]; // 同一记录子条件
      cascadeConditions?: EDC_Service_Application_Dto_Study_ViewDataFilterCondition[]; // 级联条件
      variableUniqueCode?: string; // 变量唯一编码
      termValues?: Common_Contract_Meta_Node_TermValue[]; // 归一化
      logicalOperator?: null; 
      variableId?: number; // 变量id
      relationalOperator?: null; 
      values?: string[]; // 值
      uid?: string; // 查询条件uid
      unitCode?: string; // 单位
  }

export interface EDC_Service_Application_Dto_Study_ViewFilterCondition {
      viewGroupConditions?: EDC_Service_Application_Dto_Study_ViewGroupCondition[]; 
      groupConditions?: Common_Contract_Search_Query_DTO_GroupConditionInput[]; // GroupConditions
  }

export interface EDC_Service_Application_Dto_Study_ViewGroupCondition {
      viewConditions?: EDC_Service_Application_Dto_Study_ViewDataFilterCondition[]; // 搜索条件
      name?: string; // 组名
      logicalOperator?: null; 
      relation?: null; 
      conditions?: Common_Contract_Search_Query_DTO_DataFilterConditionInput[]; // 搜索条件
      childrenGroup?: Common_Contract_Search_Query_DTO_GroupConditionInput[]; // 子组条件
      searchBy?: null; 
      eventGroup?: null; 
  }

export interface EDC_Service_Application_Dto_Study_ViewQueryConditionOutput {
      studyId?: number; // 课题ID
      subscribeStatus?: boolean; // 纳排订阅状态
      queryExpressionDescription?: string; // 纳排描述
      queryFilters?: null; 
      lasteExecuteTime?: string; // 纳排最近一次执行时间
      queryTaskId?: string; // 搜索任务id
      patientCount?: number; // 最终命中患者数
      visitCount?: number; // 最终命中的就诊数
      userDeleteSubjectCount?: number; // 人工删除的患者数
      userDeleteVisitCount?: number; // 人工删除的病历数
  }

export interface EDC_Service_Application_Dto_StudyEventGroup_Input_CreateOrUpdateStudyEventGroupInput {
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

export interface EDC_Service_Application_Dto_StudyEventGroup_Input_EDCEventGroupRegenerateInput {
      eventItemId?: number; 
  }

export interface EDC_Service_Application_Dto_StudyGroup_Input_AddingSubjectsGroupInput {
      sourceStudySubjectGroupId?: number; // 当前选中分组，选“全部”传0
      subjectIds?: number[]; 
      selectedAllFlag?: boolean; 
  }

export interface EDC_Service_Application_Dto_StudyGroup_Input_UpdateSubjectsGroupInfoInput {
      sourceGroupId?: number; 
      targetGroupId?: number; 
      selectedAllFlag?: boolean; // selectedAllFlag=true，全选所有页患者，排除id是subjectIds的患者selectedAllFlag=false，仅操作id是subjectIds的患者
      subjectIds?: number[]; 
      querySubjectKeyword?: string; 
      filterInfos?: EDC_Service_Application_Dto_StudySubject_Input_FilterInfo[]; 
  }

export interface EDC_Service_Application_Dto_StudyGroup_Output_AddingSubjectsGroupItem {
      inGroupFlag?: boolean; // 查询的PatientIds组是否存在于展示的队列中，如果部分存在或不存在，则为false，如果全部存在，则为true
      id?: number; // 分组标识
      groupName?: string; // 分组名称
      count?: number; // 组内患者数量
  }

export interface EDC_Service_Application_Dto_StudyGroup_Output_AddingSubjectsGroupOutput {
      addingSubjectsGroupItems?: EDC_Service_Application_Dto_StudyGroup_Output_AddingSubjectsGroupItem[]; 
  }

export interface EDC_Service_Application_Dto_StudyGroup_Output_CreateStudyGroupOutput {
      studyId?: number; 
      groupId?: number; 
  }

export interface EDC_Service_Application_Dto_StudyGroup_Output_StudyGroupOutput {
      id?: number; // Id
      studyId?: number; // StudyId
      groupName?: string; // 名称
      groupDescription?: string; // 描述
      groupTypeEnum?: null; 
      createUserId?: number; // 创建者id
      createTime?: string; // 创建时间
      lastModifiedUserId?: number; // 最后一次修改者id
      lastModified?: string; // 最后一次修改时间
  }

export interface EDC_Service_Application_Dto_StudyGroup_StudyGroupInput {
      groupName?: string; // 名称 组名
      groupDescription?: string; // 描述 备注
      groupType?: null; 
  }

export interface EDC_Service_Application_Dto_StudyGroup_UpdateStudyGroupInput {
      groupName?: string; // 名称
      groupDescription?: string; // 描述
  }

export interface EDC_Service_Application_Dto_StudyLabel_CreateStudyLabelInput {
      labelName?: string; // 标签名称
      labelColor?: string; // 标签颜色
      labelType?: null; 
  }

export interface EDC_Service_Application_Dto_StudyLabel_Input_UpdateSubjectsLabelInfoInput {
      patientIds?: number[]; // selectedAllFlag=true，全选所有页患者，排除id是subjectIds的患者selectedAllFlag=false，仅操作id是subjectIds的患者
      labelIds?: number[]; 
  }

export interface EDC_Service_Application_Dto_StudyLabel_Output_CreateStudyLabelOutput {
      studyId?: number; 
      labelId?: number[]; 
  }

export interface EDC_Service_Application_Dto_StudyLabel_StudyLabelOutput {
      id?: number; 
      labelName?: string; 
      labelColor?: string; 
      labelType?: null; 
      deletable?: boolean; // 可删除？
  }

export interface EDC_Service_Application_Dto_StudySubject_Input_AddingSubjectStudyInput {
      projectCode?: string; 
      pageSize?: number; 
      pageIndex?: number; 
  }

export interface EDC_Service_Application_Dto_StudySubject_Input_CreateSubjectFromCollectInput {
      collectId?: number; // 患者来源收藏Id
      displayMode?: null; 
      selectedAllFlag?: boolean; // selectedAllFlag=true，全选所有页患者，排除id是subjectIds的患者selectedAllFlag=false，仅操作id是subjectIds的患者
      queryId?: number; // 高级筛选id
      headerFilters?: Common_Contract_IR_Result_QueryResultHeaderFilterInput[]; // 收藏患者/病历筛选， 仅用于“全选所有页”
      values?: number[]; // 患者模式=&gt;患者编号    就诊模式=&gt;就诊编号
      studyId?: number; 
  }

export interface EDC_Service_Application_Dto_StudySubject_Input_DeleteSubjectsInput {
      selectedAllFlag?: boolean; // selectedAllFlag=true，全选所有页患者，排除id是subjectIds的患者selectedAllFlag=false，仅操作id是subjectIds的患者
      displayMode?: null; 
      values?: number[]; 
      querySubjectKeyword?: string; 
      filterInfos?: EDC_Service_Application_Dto_StudySubject_Input_FilterInfo[]; 
  }

export interface EDC_Service_Application_Dto_StudySubject_Input_FilterInfo {
      variableMethodId?: number; 
      values?: string[]; 
  }

export interface EDC_Service_Application_Dto_StudySubject_Input_GetHeaderValuesDistinctInput {
      querySubjectKeyword?: string; // 列表表头患者筛选
      keyword?: string; // 表头弹窗值域模糊搜索
      displayMode?: null; 
      shouldConfirm?: boolean; 
      filterInfos?: EDC_Service_Application_Dto_StudySubject_Input_FilterInfo[]; 
      pageSize?: number; 
      pageIndex?: number; 
  }

export interface EDC_Service_Application_Dto_StudySubject_Input_GetStudySubjectItemsInput {
      displayMode?: null; 
      query?: string; // 关键字
      sortInfo?: null; 
      shouldConfirm?: boolean; // 是否只展示需要确认数据的患者
      filterInfos?: EDC_Service_Application_Dto_StudySubject_Input_FilterInfo[]; // 筛选
      pageSize?: number; 
      pageIndex?: number; 
  }

export interface EDC_Service_Application_Dto_StudySubject_Input_RecuringSubscribeInput {
      studyId?: number; 
  }

export interface EDC_Service_Application_Dto_StudySubject_Input_SortInfo {
      variableMethodId?: number; 
      isASC?: boolean; 
      sequnce?: string; 
  }

export interface EDC_Service_Application_Dto_StudySubject_Output_AddingSubjectStudyItem {
      studyId?: number; 
      studyName?: string; 
  }

export interface EDC_Service_Application_Dto_StudySubject_Output_AddingSubjectStudyOutput {
      addingSubjectStudyItema?: EDC_Service_Application_Dto_StudySubject_Output_AddingSubjectStudyItem[]; 
  }

export interface EDC_Service_Application_Dto_StudySubject_Output_BaseTitleAttibute {
      displayName?: string; 
      variableMethodId?: number; // 变量聚合方法id
      variableUniqueCode?: string; // 变量唯一编码
      code?: string; // 变量唯一编码
      canFilter?: boolean; // 表头是否可以过滤
      canSort?: boolean; // 表头是否可以排序
      isHidden?: boolean; // 是否表头展示
      isDefault?: boolean; // 是否是默认固定的列
      variableDataType?: null; 
      isFixed?: boolean; 
      sort?: number; // 显示顺序
      aggregationMethodType?: null; 
      indicatorType?: null; 
  }

export interface EDC_Service_Application_Dto_StudySubject_Output_Cell {
      variableMethodId?: number; 
      isLink?: boolean; 
      linkType?: null; 
      isShowTips?: boolean; 
      tipContent?: string; 
      isTagCell?: boolean; 
      labResultShowDto?: null; 
      data?: string[]; 
      autoIdSet?: number[]; 
  }

export interface EDC_Service_Application_Dto_StudySubject_Output_DistinctValues {
      display?: string; 
      value?: string; 
      count?: number; 
  }

export interface EDC_Service_Application_Dto_StudySubject_Output_GetHeaderValuesDistinctOutput {
      values?: EDC_Service_Application_Dto_StudySubject_Output_DistinctValues[]; 
  }

export interface EDC_Service_Application_Dto_StudySubject_Output_StudySubjectItemsOutput {
      total?: number; 
      lastSubjectInTime?: string; 
      resultTitles?: EDC_Service_Application_Dto_StudySubject_Output_BaseTitleAttibute[]; // 搜索列表表头数据
      resultDatas?: EDC_Service_Application_Dto_StudySubject_Output_SubjectData[]; // 数据
      pageSize?: number; 
      pageIndex?: number; 
  }

export interface EDC_Service_Application_Dto_StudySubject_Output_SubjectData {
      studySubjectId?: number; 
      patientId?: number; 
      visitId?: number; 
      isNew?: boolean; 
      cells?: EDC_Service_Application_Dto_StudySubject_Output_Cell[]; 
  }

export interface EDC_Service_Application_Dto_StudySubject_Output_labRes {
      color?: string; 
      showText?: string; 
  }
export enum EDC_Service_Application_Enums_Home_StudyDateType {
      Year = 0, //年
      Month = 1, //月
  }

export interface Microsoft_AspNetCore_Mvc_ProblemDetails {
      type?: string; 
      title?: string; 
      status?: number; 
      detail?: string; 
      instance?: string; 
  }

export interface System_String {
      total?: number; 
      page?: number; 
      pageSize?: number; 
      data?: string[]; 
  }

export interface RealData_Common_Contract_Common_Result {
      code?: null; 
      msg?: string; 
  }
export enum RealData_Common_Contract_Common_ResultCodeType {
      Success = 0, 
      BadRequest = 400, 
      Unauthorized = 401, 
      Forbidden = 403, 
      Exception = 500, 
      TenantNotFound = 700, 
  }

export interface System_Collections_Generic_HashSet_1__Common_Contract_EDC_StudyCrfVariableTree_GetCrfNodeVariableTreeOutput {
      code?: null; 
      msg?: string; 
      data?: Common_Contract_EDC_StudyCrfVariableTree_GetCrfNodeVariableTreeOutput[]; 
  }

export interface System_Collections_Generic_HashSet_1__Common_Contract_EDC_StudyCrfVariableTree_GetCrfNodesLevelsOutput {
      code?: null; 
      msg?: string; 
      data?: Common_Contract_EDC_StudyCrfVariableTree_GetCrfNodesLevelsOutput[]; 
  }

export interface System_Collections_Generic_HashSet_1__Common_Contract_EDC_StudyCrfVariableTree_SearchCrfNodeOutput {
      code?: null; 
      msg?: string; 
      data?: Common_Contract_EDC_StudyCrfVariableTree_SearchCrfNodeOutput[]; 
  }

export interface System_Collections_Generic_IEnumerable_1__EDC_Service_Application_Dto_CodeSet_CodeSystemItem {
      code?: null; 
      msg?: string; 
      data?: EDC_Service_Application_Dto_CodeSet_CodeSystemItem[]; 
  }

export interface System_Collections_Generic_IEnumerable_1__EDC_Service_Application_Dto_Page_GetConfirmItemsOutput {
      code?: null; 
      msg?: string; 
      data?: EDC_Service_Application_Dto_Page_GetConfirmItemsOutput[]; 
  }

export interface System_Collections_Generic_IEnumerable_1__EDC_Service_Application_Dto_Page_GetCrfPageDataSubjectOutput {
      code?: null; 
      msg?: string; 
      data?: EDC_Service_Application_Dto_Page_GetCrfPageDataSubjectOutput[]; 
  }

export interface System_Collections_Generic_IEnumerable_1__EDC_Service_Application_Dto_Page_GetCrfPageDataTermValueOutput {
      code?: null; 
      msg?: string; 
      data?: EDC_Service_Application_Dto_Page_GetCrfPageDataTermValueOutput[]; 
  }

export interface System_Collections_Generic_IList_1__EDC_Service_Application_Dto_Permission_PermissionOutput {
      code?: null; 
      msg?: string; 
      data?: EDC_Service_Application_Dto_Permission_PermissionOutput[]; 
  }

export interface System_Collections_Generic_IList_1__EDC_Service_Application_Dto_Site_Output_StudySiteOutput {
      code?: null; 
      msg?: string; 
      data?: EDC_Service_Application_Dto_Site_Output_StudySiteOutput[]; 
  }

export interface System_Collections_Generic_List_1__Common_Contract_EDC_EventGroup_GetEventGroupsOutput {
      code?: null; 
      msg?: string; 
      data?: Common_Contract_EDC_EventGroup_GetEventGroupsOutput[]; 
  }

export interface System_Collections_Generic_List_1__Common_Contract_EDC_FollowUp_GetBaseLineVariablesOutput {
      code?: null; 
      msg?: string; 
      data?: Common_Contract_EDC_FollowUp_GetBaseLineVariablesOutput[]; 
  }

export interface System_Collections_Generic_List_1__Common_Contract_EDC_FollowUp_GetFollowUpMessageTemplatesOutput {
      code?: null; 
      msg?: string; 
      data?: Common_Contract_EDC_FollowUp_GetFollowUpMessageTemplatesOutput[]; 
  }

export interface System_Collections_Generic_List_1__Common_Contract_EDC_FollowUp_GetStrategyEventsOutput {
      code?: null; 
      msg?: string; 
      data?: Common_Contract_EDC_FollowUp_GetStrategyEventsOutput[]; 
  }

export interface System_Collections_Generic_List_1__Common_Contract_EDC_ObservationIndicator_GetObservationIndicatorsOutput {
      code?: null; 
      msg?: string; 
      data?: Common_Contract_EDC_ObservationIndicator_GetObservationIndicatorsOutput[]; 
  }

export interface System_Collections_Generic_List_1__EDC_Service_Application_Dto_Home_FollowVariable {
      code?: null; 
      msg?: string; 
      data?: EDC_Service_Application_Dto_Home_FollowVariable[]; 
  }

export interface System_Collections_Generic_List_1__EDC_Service_Application_Dto_Page_AuditingTrajectoryGetOutput {
      code?: null; 
      msg?: string; 
      data?: EDC_Service_Application_Dto_Page_AuditingTrajectoryGetOutput[]; 
  }

export interface System_Collections_Generic_List_1__EDC_Service_Application_Dto_Page_AuditingTrajectoryHeaderGetOutput {
      code?: null; 
      msg?: string; 
      data?: EDC_Service_Application_Dto_Page_AuditingTrajectoryHeaderGetOutput[]; 
  }

export interface System_Collections_Generic_List_1__EDC_Service_Application_Dto_Page_CrfItemGetOutput {
      code?: null; 
      msg?: string; 
      data?: EDC_Service_Application_Dto_Page_CrfItemGetOutput[]; 
  }

export interface System_Collections_Generic_List_1__EDC_Service_Application_Dto_Page_CrfPageOutput {
      code?: null; 
      msg?: string; 
      data?: EDC_Service_Application_Dto_Page_CrfPageOutput[]; 
  }

export interface System_Collections_Generic_List_1__EDC_Service_Application_Dto_Page_CrfPageTempleOutput {
      code?: null; 
      msg?: string; 
      data?: EDC_Service_Application_Dto_Page_CrfPageTempleOutput[]; 
  }

export interface System_Collections_Generic_List_1__EDC_Service_Application_Dto_Page_CrfPageTiledOutput {
      code?: null; 
      msg?: string; 
      data?: EDC_Service_Application_Dto_Page_CrfPageTiledOutput[]; 
  }

export interface System_Collections_Generic_List_1__EDC_Service_Application_Dto_Page_GetCrfDataPageOutput {
      code?: null; 
      msg?: string; 
      data?: EDC_Service_Application_Dto_Page_GetCrfDataPageOutput[]; 
  }

export interface System_Collections_Generic_List_1__EDC_Service_Application_Dto_Study_Output_GetFollowStudyOutput {
      code?: null; 
      msg?: string; 
      data?: EDC_Service_Application_Dto_Study_Output_GetFollowStudyOutput[]; 
  }

export interface System_Collections_Generic_List_1__EDC_Service_Application_Dto_Study_VariableChangeHistoryOutput {
      code?: null; 
      msg?: string; 
      data?: EDC_Service_Application_Dto_Study_VariableChangeHistoryOutput[]; 
  }

export interface System_Collections_Generic_List_1__EDC_Service_Application_Dto_StudyGroup_Output_StudyGroupOutput {
      code?: null; 
      msg?: string; 
      data?: EDC_Service_Application_Dto_StudyGroup_Output_StudyGroupOutput[]; 
  }

export interface System_Collections_Generic_List_1__EDC_Service_Application_Dto_StudyLabel_StudyLabelOutput {
      code?: null; 
      msg?: string; 
      data?: EDC_Service_Application_Dto_StudyLabel_StudyLabelOutput[]; 
  }
export enum RealData_Entity_Contract_Enums_AggregationEnum {
      None = 0, 
      Newest = 1, //末次
      FirstTime = 2, //首次
      AveragValue = 3, //平均值
      Max = 4, //最大值
      Min = 5, //最小值
      All = 6, //所有值
  }
export enum RealData_Entity_Contract_Enums_CRFItemType {
      TextInput = 1, 
      Label = 2, 
      Radio = 3, 
      Container = 4, 
      Table = 5, 
      CheckBox = 6, 
      DateInput = 7, 
      NumberInputBox = 8, 
      MultiSelect = 9, 
      TextArea = 10, 
      Line = 11, 
      Matrix = 12, 
      Computable = 13, 
      UploadMedia = 14, 
      Signature = 15, 
      SelectComplex = 16, 
      EditorUpload = 17, 
      Select = 18, 
      CrfGroup = 19, 
      SpecialTable = 20, 
      SpecialColumn = 21, 
      CrfDomainContainer = 22, 
  }
export enum RealData_Entity_Contract_Enums_DR_SearchByEnum {
      ByVisit = 2, //按病历查询
      ByPatient = 3, //按病人查询
      ByReportId = 5, //按报告查询
  }
export enum RealData_Entity_Contract_Enums_DR_StatisticDataTypeEnum {
      Month = 1, 
      Year = 2, 
  }
export enum RealData_Entity_Contract_Enums_DR_StatisticTypeEnum {
      P = 1, 
      V = 2, 
  }
export enum RealData_Entity_Contract_Enums_EDC_ChangeType {
      Add = 0, 
      Delete = 1, 
  }
export enum RealData_Entity_Contract_Enums_EDC_CrfPageDataStatesEnum {
      All = 1, //全部
      UnderRecord = 2, //未填写
      Record = 3, //已填写
      Submitted = 4, //已提交
  }
export enum RealData_Entity_Contract_Enums_EDC_EventGroupAggregationMethodTimePointType {
      AfterEvent = 0, //事件发生后
      BeforeEvent = 1, //事件发生前
      DuringVisit = 2, //事件发生所在就诊
      AtEventTime = 3, //事件发生当时
  }
export enum RealData_Entity_Contract_Enums_EDC_ObservationIndicatorVariableAggregationMethodType {
      First = 0, //首次
      Last = 1, //末次
      Max = 2, //最大值
      Min = 3, //最小值
      Mean = 4, //平均值
      Median = 5, //中位数
      All = 6, //所有值
      Recent = 7, //最近值
      Exists = 8, //是否存在
      Increasing = 9, //是否上升
      Decreasing = 10, //是否下降
      TotalCount = 11, //总次数
      Custom = 12, //自定义
  }
export enum RealData_Entity_Contract_Enums_EDC_StudyIndicatorType {
      System = 0, 
      RdrVariable = 1, 
      CrfVariable = 2, 
  }
export enum RealData_Entity_Contract_Enums_EDC_StudyObservationIndicatorProductionStatus {
      Initialized = 0, 
      InProgress = 1, 
      Completed = 2, 
      Failed = 3, 
  }
export enum RealData_Entity_Contract_Enums_EDC_StudyType {
      Bank = 1, //科研
      Disease = 2, //专病
  }
export enum RealData_Entity_Contract_Enums_EMR_EmrShowType {
      Html = 0, 
      Xml = 1, 
      Txt = 2, 
      Other = 3, 
  }
export enum RealData_Entity_Contract_Enums_Edc_CrfPageTemplatePrivilegeTypeEnum {
      Person = 0, 
      Dept = 1, 
      Hospital = 2, 
  }
export enum RealData_Entity_Contract_Enums_Edc_CrfPageTypeEnum {
      Page = 0, 
      Folder = 1, 
  }
export enum RealData_Entity_Contract_Enums_Edc_CrfRuleTypeEnum {
      System_CheckDate = 0, 
      System_CheckInt = 1, 
      System_CheckNum = 2, 
      System_Required = 3, 
      System_NumRange = 4, 
      System_DateRange = 5, 
      UserCustom = 6, 
  }
export enum RealData_Entity_Contract_Enums_Edc_FolllowUpSubjectScheduleStatus {
      NotStarted = 0, //未开始
      Scheduled = 1, //应访
      Completed = 2, //已访
      Lost = 3, //失访
      Stopped = 4, //已停止
  }
export enum RealData_Entity_Contract_Enums_Edc_FollowUpBaseLineCodeType {
      Default = 0, 
      Rdr = 1, 
      Crf = 2, 
  }
export enum RealData_Entity_Contract_Enums_Edc_FollowUpChatRoleType {
      Patient = 0, 
      Doctor = 1, 
      System = 2, 
  }
export enum RealData_Entity_Contract_Enums_Edc_FollowUpExaminationTimeOffsetType {
      Before = 0, 
      After = 1, 
  }
export enum RealData_Entity_Contract_Enums_Edc_FollowUpExaminationTimeOffsetUnitType {
      Hour = 0, 
      Day = 1, 
      Week = 2, 
      Month = 3, 
  }
export enum RealData_Entity_Contract_Enums_Edc_FollowUpStrategyStatus {
      NotStarted = 0, 
      Running = 1, 
  }
export enum RealData_Entity_Contract_Enums_Edc_RandomStatus {
      Generate = 0, //生成随机号
      Grouping = 1, //已分组
  }
export enum RealData_Entity_Contract_Enums_Edc_RandomType {
      Simple = 0, //简单随机
      Multiple = 1, //多重随机
  }
export enum RealData_Entity_Contract_Enums_Edc_StudyGroupTypeEnum {
      Default = 0, //默认组
      Normal = 1, //自定义组
  }
export enum RealData_Entity_Contract_Enums_Edc_StudyLabelTypeEnum {
      Default = 0, //默认标签
      Normal = 1, //自定义标签
  }
export enum RealData_Entity_Contract_Enums_QueryNoteStateEnum {
      Draft = 0, 
      Open = 1, 
      Replied = 2, 
      Closed = 3, 
      ReOpen = 4, 
      Revoked = 5, 
  }
export enum RealData_Entity_Contract_Enums_QueryNoteTypeEnum {
      System = 0, 
      Manual = 1, 
  }
export enum RealData_Entity_Contract_Enums_Research_Operator_LogicalOperatorEnum {
      AND = 1, 
      OR = 2, 
      NOT = 3, 
  }
export enum RealData_Entity_Contract_Enums_Research_Operator_RelationalOperatorEnum {
      Contains = 1, //包含
      NotContains = 2, //不包含
      Equals = 3, 
      NotEquals = 4, //不等于
      GreaterThan = 5, //大于
      GreaterThanOrEqual = 6, //大于等于
      LessThan = 7, //小于
      LessThanOrEqual = 8, //小于等于
      Between = 9, //范围
      NotBetween = 10, //不在...范围
      Similar = 11, //类似
      NotSimilar = 12, //不类似
      IsEmpty = 13, //等于空
      IsNotEmpty = 14, //不等于空
      IsNull = 15, //等于空
      IsNotNull = 16, //不等于空
      EqualsVar = 103, //等于(变量)
      NotEqualsVar = 104, //不等于(变量)
      GreaterThanVar = 105, //大于(变量)
      GreaterThanOrEqualVar = 106, //大于等于(变量)
      LessThanVar = 107, //小于(变量)
      LessThanOrEqualVar = 108, //小于等于(变量)
      NormalizeContains = 201, //归一化包含
      NormalizeNotContains = 202, //归一化不包含
  }
export enum RealData_Entity_Contract_Enums_Research_VariableControlTypeEnum {
      Input = 1, 
      SelectOnly = 2, 
      SelectMultiply = 3, 
      Date = 4, 
      InputOnlyNumber = 5, 
      SelectVar = 6, 
      InputSearch = 13, 
  }
export enum RealData_Entity_Contract_Enums_Research_VariableDataTypeEnum {
      None = 0, 
      Int = 1, 
      Bigint = 2, 
      Datetime = 3, 
      Num = 4, 
      Bool = 5, 
      Char = 6, 
      Date = 7, 
      jsonb = 8, 
  }
export enum RealData_Entity_Contract_Enums_Research_VariableExportAttributeTypeEnum {
      None = 0, 
      Common = 1, 
      Attribute = 2, 
  }
export enum RealData_Entity_Contract_Enums_Research_VariableStatisticalTypeEnum {
      NonType = 1, //无类型
      Date = 2, //日期型
      Continuity = 3, //连续类型
      OrderClassify = 4, //有序分类
      UnOrderClassify = 5, //无序分类
      TwoClassify = 6, //二分类
      MultiSelect = 7, //多选类型
  }
export enum RealData_Entity_Contract_Enums_Research_VariableStorageStructureEnum {
      Normal = 1, 
      Bds = 2, 
  }
export enum RealData_Entity_Contract_Enums_Search_EventDateUnitType {
      Hour = 0, //小时
      Day = 1, //天
  }
export enum RealData_Entity_Contract_Enums_Search_EventSequenceType {
      First = 0, //首次
      Last = 1, //末次
      Custom = 2, //自定义
  }
export enum RealData_Entity_Contract_Enums_Search_EventTimePointOperator {
      All = 0, //全部
      LessThanOrEqualTo = 1, //小于等于
      GreaterThanOrEqualTo = 2, //大于等于
      Between = 3, //介于
  }
export enum RealData_Entity_Contract_Enums_Search_QuerySourceType {
      Advanced = 1, //高级搜索
      VisualSearch = 2, //搜索透视图
      HopperSearch = 3, //漏斗搜索
      DsrSearch = 5, //专病搜索
      Study = 6, //我的课题
      Collection = 7, //我的收藏
  }
export enum RealData_Entity_Contract_Enums_Search_QueryState {
      Created = 1, 
      Running = 2, 
      Error = 3, 
      Canceled = 4, 
      Successed = 5, 
      History = 6, 
  }
export enum RealData_Entity_Contract_Enums_Search_RelationType {
      Patient = 1, //患者维度连接
      Visit = 2, //就诊维度连接
  }
export enum RealData_Entity_Contract_Enums_SourceType {
      System = 1, 
      EDC = 2, 
      DSR = 5, 
  }
