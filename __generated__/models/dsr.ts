/**
 * 本文件通过脚本生成，请勿直接修改内部内容
 */


export interface Common_Contract_Dsr_CrfPage_Input_AddOrUpdateCrfDataForDraInput {
      patientId?: number; // 患者编号
      visitId?: number; // 就诊编号
      resContainerCode?: string; // 专库代码
      datas?: Common_Contract_Dsr_CrfPage_Input_AddOrUpdateCrfDataForDraInput_DataInfo[]; // 数据列表
  }

export interface Common_Contract_Dsr_CrfPage_Input_AddOrUpdateCrfDataForDraInput_DataInfo {
      variableUniqueCode?: string; // 变量唯一编号
      variableContent?: string; // 变量内容
      isManualSupplement?: boolean; // 是否人工补录
  }

export interface Common_Contract_Dsr_CrfPage_Input_AddOrUpdateDataInput {
      nodeId?: number; 
      diseaseId?: number; 
      patientId?: number; 
      repeatSourceValue?: string; 
      data?: Common_Contract_Dsr_CrfPage_Input_CrfDataInput[]; 
      bindDatas?: Common_Contract_Dsr_CrfPage_Output_GetRecordBindData[]; 
  }

export interface Common_Contract_Dsr_CrfPage_Input_CrfDataInput {
      itemId?: number; 
      dataIds?: number[]; 
      rowId?: number; 
      beforeValue?: null; 
      afterValue?: null; 
      reason?: string; 
  }

export interface Common_Contract_Dsr_CrfPage_Input_GenerateInput {
      code?: string; 
      nodeId?: number; 
      diseaseId?: number; 
      patientId?: number; 
      bindType?: null; 
  }

export interface Common_Contract_Dsr_CrfPage_Input_LockRecordInput {
      diseaseId?: number; // 专病库
      patientId?: number; // 患者PatientId
      nodeId?: number; // 表单Id
      repeatSourceValue?: string; // 记录Id
      isLock?: boolean; // 是否锁定true：锁定 false: 没锁定
  }

export interface Common_Contract_Dsr_CrfPage_Output_CrfDataOutput {
      repeatSourceValue?: string; // 分组字段数据值
      data?: Common_Contract_Dsr_CrfPage_Output_CrfPageDataAbstract[]; // 控件数据
  }

export interface Common_Contract_Dsr_CrfPage_Output_CrfItemOutput {
      name?: string; // Name
      varPropertyCode?: string; // 绑定的变量中心属性的code，可空
      varVariableId?: string; // 绑定的变量中心的变量id，可空
      code?: string; // 控件的code
      uniqueCode?: string; // 变量uniqueCode
      domainCode?: string; // DomainCode
      description?: string; // 控件描述信息
      sort?: number; // 控件排序
      id?: number; // Id
      pid?: number; // Pid
      itemControlType?: null; 
      itemDataType?: null; 
      statisticalType?: null; 
      attributes?: any; // Attributes
      children?: Common_Contract_Dsr_CrfPage_Output_CrfItemOutput[]; 
  }

export interface Common_Contract_Dsr_CrfPage_Output_CrfPageDataAbstract {
      itemId?: number; // 控件id
      dataIds?: number[]; // 数据id
  }

export interface Common_Contract_Dsr_CrfPage_Output_CrfPageDomainFillCount {
      fillCount?: number; 
      totalCount?: number; 
  }

export interface Common_Contract_Dsr_CrfPage_Output_CrfPageExcelUploadOutput {
      successFlag?: boolean; // 添加成功标识
      message?: string; 
      count?: number; // 更新了多少条
  }
export type Common_Contract_Dsr_CrfPage_Output_CrfPageFieldBindType = 0|1|2 ;

export interface Common_Contract_Dsr_CrfPage_Output_CrfPageOutput {
      nodeId?: number; // NodeId
      name?: string; // 表单名
      isPage?: boolean; // 表单所在域id
      repeatSource?: null; 
      domainId?: number; // 域ID
      order?: number; // 表单顺序
      children?: Common_Contract_Dsr_CrfPage_Output_CrfPageOutputBase[]; // 子表单
      isSubmit?: boolean; // 是否已经提交
      canRepeat?: boolean; // 是否允许重复
      process?: number; // 填充率
      fillCounts?: Common_Contract_Dsr_CrfPage_Output_CrfPageDomainFillCount[]; // 录入总数计算
  }

export interface Common_Contract_Dsr_CrfPage_Output_CrfPageOutputBase {
      nodeId?: number; // NodeId
      name?: string; // 表单名
      isPage?: boolean; // 表单所在域id
      repeatSource?: null; 
      domainId?: number; // 域ID
      order?: number; // 表单顺序
      children?: Common_Contract_Dsr_CrfPage_Output_CrfPageOutputBase[]; // 子表单
  }

export interface Common_Contract_Dsr_CrfPage_Output_GenerateOutput {
      code?: string; 
  }

export interface Common_Contract_Dsr_CrfPage_Output_GetRecordBindData {
      autoIdentifier?: string; 
      code?: string; 
      name?: string; 
      value?: string; 
  }

export interface Common_Contract_Dsr_CrfPage_Output_GetRecordBindDataOutput {
      autoIdentifier?: string; 
      code?: string; 
      name?: string; 
      value?: string; 
  }

export interface Common_Contract_Dsr_CrfPage_Output_GetRecordBindValueOutput {
      display?: string; 
      value?: string; 
      autoIdentifier?: string; 
  }

export interface Common_Contract_Dsr_CrfPage_Output_GetRecordSourceOutput {
      name?: string; 
      code?: string; 
      parentDomain?: null; 
      parentVariable?: null; 
      chidrens?: Common_Contract_Dsr_Research_DomainStroge[]; 
      field?: string; 
      bindType?: null; 
      dataList?: Common_Contract_Dsr_CrfPage_Output_GetRecordBindValueOutput[]; 
  }

export interface Common_Contract_Dsr_CrfPage_Output_GetRecordsOutput {
      domainLevelEnum?: null; 
      sourcies?: Common_Contract_Dsr_CrfPage_Output_GetRecordSourceOutput[]; 
      bindDatas?: Common_Contract_Dsr_CrfPage_Output_GetRecordBindDataOutput[]; 
  }
// 是否锁定记录
export interface Common_Contract_Dsr_CrfPage_Output_LockRecordOutput {
      isLock?: boolean; // 是否锁定
      userName?: string; // 登录名
      displayName?: string; // 显示名
      userId?: number; // 锁定人用户Id
  }

export interface Common_Contract_Dsr_CrfPage_Output_RepeatSource {
      field?: string; 
      name?: string; 
      dataType?: null; 
  }

export interface Common_Contract_Dsr_DiseasePatientFillInInput {
      diseaseId?: number; 
      patientVisitFillSql?: string; 
      criteriaSourceDatabase?: null; 
  }

export interface Common_Contract_Dsr_DiseaseRegistryFillCountInput {
      diseaseIds?: number[]; 
  }

export interface Common_Contract_Dsr_Patient_CountDsrPatientRecordInput {
      countAll?: boolean; // 计算全部
      diseaseRegistryId?: number; // 计算专病下患者
  }
// 专库添加患者（专病助手）
export interface Common_Contract_Dsr_Patient_DiseaseAddPatientForDraInput {
      diseaseId?: number; // 专病Id
      patientId?: number; // 院内患者Id
      patientName?: string; // 患者姓名
      relyVariables?: Common_Contract_Dsr_Patient_RelyVariableValues[]; // RelyVariables
      entryType?: null; 
      userCode?: string; // 用户编号
  }

export interface Common_Contract_Dsr_Patient_DistinctValues {
      display?: string; 
      value?: string; 
      count?: number; 
  }

export interface Common_Contract_Dsr_Patient_DsrPatientDeleteInput {
      diseaseId?: number; 
      patientIds?: number[]; 
      selectedAllFlag?: boolean; 
      keyword?: string; 
      filterInfos?: Common_Contract_Dsr_Patient_FilterInfo[]; 
  }

export interface Common_Contract_Dsr_Patient_DsrPatientHeaderItem {
      id?: number; 
      sortAble?: boolean; 
      filterAble?: boolean; 
      fixAble?: boolean; 
      name?: string; 
      variableUniqueCode?: string; 
      dataType?: null; 
      order?: number; 
      mergeNew?: boolean; 
  }

export interface Common_Contract_Dsr_Patient_DsrPatientMatchInput {
      relyVariables?: Common_Contract_Dsr_Patient_RelyVariableValues[]; // RelyVariables
  }

export interface Common_Contract_Dsr_Patient_DsrPatientMatchOutput {
      patientId?: number; 
      patientName?: string; 
      relyVariables?: Common_Contract_Dsr_Patient_RelyVariableValues[]; 
  }

export interface Common_Contract_Dsr_Patient_DsrPatientSingleAddInput {
      diseaseId?: number; // 专病Id
      patientId?: number; // 院内患者Id
      patientName?: string; // 患者姓名
      relyVariables?: Common_Contract_Dsr_Patient_RelyVariableValues[]; // RelyVariables
      entryType?: null; 
  }

export interface Common_Contract_Dsr_Patient_DsrPatientTableContentInput {
      pageSize?: number; 
      pageIndex?: number; 
      diseaseId?: number; 
      keyword?: string; 
      sortInfo?: null; 
      filterInfos?: Common_Contract_Dsr_Patient_FilterInfo[]; 
  }

export interface Common_Contract_Dsr_Patient_DsrPatientTableContentItem {
      id?: number; 
      patientId?: number; 
      isNew?: boolean; 
      cells?: string[]; 
  }

export interface Common_Contract_Dsr_Patient_DsrPatientTableContentOutput {
      pageIndex?: number; 
      pageSize?: number; 
      count?: number; 
      items?: Common_Contract_Dsr_Patient_DsrPatientTableContentItem[]; 
  }

export interface Common_Contract_Dsr_Patient_ExistRregistryPatientOutput {
      isExist?: boolean; 
  }

export interface Common_Contract_Dsr_Patient_FilterInfo {
      variableUniqueCode?: string; 
      values?: string[]; 
  }

export interface Common_Contract_Dsr_Patient_GetHeaderValuesDistinctInput {
      pageSize?: number; 
      pageIndex?: number; 
      querySubjectKeyword?: string; 
      variableUniqueCode?: string; 
      diseaseId?: number; 
      keyword?: string; 
      filterInfos?: Common_Contract_Dsr_Patient_FilterInfo[]; 
  }

export interface Common_Contract_Dsr_Patient_GetHeaderValuesDistinctOutput {
      values?: Common_Contract_Dsr_Patient_DistinctValues[]; 
  }

export interface Common_Contract_Dsr_Patient_GetPatientInfoOutput {
      patientNo?: string; 
      patientId?: number; 
      patientName?: string; 
      spellCode?: string; 
      diseaseRegistryId?: number; 
  }

export interface Common_Contract_Dsr_Patient_GetRelyVariablesOutput {
      variableUniqueCode?: string; 
      label?: string; 
  }

export interface Common_Contract_Dsr_Patient_PatientAddOutput {
      successFlag?: boolean; // 添加成功标识
      totalCount?: number; // 总数
      successCount?: number; // 成功的数量
      matchFailedCount?: number; // 匹配失败的数量
      existCount?: number; // 已经入库的数量
      failedCount?: number; // 失败的数量
      failedNames?: string[]; // 失败的列表
  }

export interface Common_Contract_Dsr_Patient_RegistoryDashboardOutput {
      id?: number; 
      name?: string; 
      type?: null; 
      createTime?: string; 
      lastModified?: string; 
      criteria?: string; // 入排条件
      subjectsCount?: number; // 患者数量
      code?: string; 
      lastEntryTime?: string; 
      resContainerCode?: string; 
  }

export interface Common_Contract_Dsr_Patient_RelyVariableValues {
      value?: string; 
      variableUniqueCode?: string; 
      isMatch?: boolean; 
  }

export interface Common_Contract_Dsr_Patient_SortInfo {
      variableUniqueCode?: string; 
      isASC?: boolean; 
      sequnce?: string; 
  }

export interface Common_Contract_Dsr_Research_DomainStroge {
      domainId?: string; 
      domainName?: string; 
      domainCode?: string; 
      queryTable?: string; 
      timeStandardField?: string; 
      domainLevel?: null; 
      parentDomainInfo?: null; 
  }

export interface Common_Contract_Dsr_Research_VariableStroge {
      variableId?: string; 
      variableName?: string; 
      variableUniqueCode?: string; 
      domainId?: string; 
      variableDataType?: null; 
      variableType?: null; 
      field?: string; 
      canFilter?: boolean; 
      canSort?: boolean; 
      sort?: number; 
      statisticalType?: null; 
      calculateInfo?: null; 
  }

export interface Common_Contract_Dsr_UserSitePermissionDto {
      enableAllSiteData?: boolean; // 是否有权限查看所有分中心的数据
      siteId?: number; // 当前用户所在的中心Id
      siteName?: string; 
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
// 清理所有缓存
export interface Common_Contract_Meta_Cache_RemoveMetaCacheInput {
      projectCode?: string; // ProjectCode
  }
// 清理数据仓库缓存
export interface Common_Contract_Meta_Cache_StrogeCacheRefresh {
      domainId?: number; // DomainId
      projectCode?: string; // ProjectCode
  }

export interface Common_Contract_Platform_Log_Input_GetProjectLogDetailOutput {
      logNote?: string; 
      logName?: string; 
      actUserName?: string; 
      actTime?: string; 
      siteId?: number; 
      siteName?: string; 
  }

export interface Common_Contract_Platform_Log_Input_ProjectLogHeader {
      name?: string; 
      key?: string; 
      sortAble?: boolean; 
  }
// 存储年龄计算信息
export interface Common_Contract_Research_VariableCalculateInfo {
      calculateTypeEnum?: null; 
      calCulateRelateVariableUniqueCode?: string; // 计算关联变量的UniqueCode
  }
export type Common_Contract_Research_VariableCalculateInfo_CalculateType = 1|2 ;

export interface Disease_Service_Application_AuditingTrajectories_Output_GetAuditingTrajectoryDetail {
      operatorId?: number; 
      operationTime?: string; 
      dataSourceType?: null; 
      resultBeforeChange?: string; 
      resultAfterChange?: string; 
      reason?: string; 
      operatorName?: string; 
      sourceTypeName?: string; 
  }

export interface Disease_Service_Application_AuditingTrajectories_Output_GetAuditingTrajectoryOutput {
      total?: number; 
      data?: Disease_Service_Application_AuditingTrajectories_Output_GetAuditingTrajectoryDetail[]; 
  }

export interface Disease_Service_Application_DiseaseRegistrys_Input_FocusVariable {
      variableId?: number; 
      variableUniqueCode?: string; 
      name?: string; 
  }

export interface Disease_Service_Application_DiseaseRegistrys_Input_SaveFocusVariableInput {
      diseaseId?: number; 
      focusVariables?: Disease_Service_Application_DiseaseRegistrys_Input_FocusVariable[]; 
  }

export interface Disease_Service_Application_DiseaseRegistrys_Input_UpdateDiseaseRegistryInput {
      id?: number; 
      name?: string; 
      domainId?: number; 
      criteria?: string; 
      labels?: string[]; 
      syncSitesData?: boolean; 
  }

export interface Disease_Service_Application_DiseaseRegistrys_Output_ChartData {
      groupId?: number; 
      groupName?: string; 
      data?: Disease_Service_Application_DiseaseRegistrys_Output_FocusVariableScatterData[]; 
  }

export interface Disease_Service_Application_DiseaseRegistrys_Output_DiseaseRegistriesBaseOutput {
      id?: number; 
      resContainerCode?: string; 
      name?: string; 
      iconPath?: string; 
      activeIconPath?: string; 
      type?: null; 
      subDiseases?: Disease_Service_Application_DiseaseRegistrys_Output_SubDiseasesRegistryBaseOutput[]; 
  }
// 专病纳排数据
export interface Disease_Service_Application_DiseaseRegistrys_Output_DiseaseRegistryCollectDataOutput {
      variableDistributionGroups?: null; 
  }

export interface Disease_Service_Application_DiseaseRegistrys_Output_DiseaseRegistryFocusVariableDomainChartOutput {
      titleName?: string; 
      chartType?: string[]; 
      chartData?: Disease_Service_Application_DiseaseRegistrys_Output_DomainChartData[]; 
  }

export interface Disease_Service_Application_DiseaseRegistrys_Output_DiseaseRegistryOutput {
      id?: number; 
      resContainerCode?: string; 
      name?: string; 
      iconPath?: string; 
      activeIconPath?: string; 
      type?: null; 
      subDiseases?: Disease_Service_Application_DiseaseRegistrys_Output_SubDiseasesRegistryBaseOutput[]; 
      domainId?: number; 
      criteria?: string; 
      labels?: string[]; 
      createTime?: string; 
      resIdentifyTable?: string; 
      lastModified?: string; 
      syncSitesData?: boolean; 
      subjectsCount?: number; // 患者列表-专病患者数量
      imagePath?: string; 
  }

export interface Disease_Service_Application_DiseaseRegistrys_Output_DiseaseRegistryScatterChartOutput {
      titleName?: string; 
      chartType?: string; 
      chartData?: Disease_Service_Application_DiseaseRegistrys_Output_ChartData[]; 
      cacheTime?: string; // 缓存时间
  }

export interface Disease_Service_Application_DiseaseRegistrys_Output_DiseaseRegistrySummaryOutput {
      firstEnrollTime?: string; 
      latestEnrollTime?: string; 
      title?: string; 
      variableDistributionSummarys?: Disease_Service_Application_DiseaseRegistrys_Output_VariableDistributionSummary[]; 
  }

export interface Disease_Service_Application_DiseaseRegistrys_Output_DomainChartData {
      groupId?: number; 
      groupName?: string; 
      data?: Disease_Service_Application_DiseaseRegistrys_Output_DomainData[]; 
  }

export interface Disease_Service_Application_DiseaseRegistrys_Output_DomainData {
      value?: number; 
      unit?: string; 
      name?: string; 
  }

export interface Disease_Service_Application_DiseaseRegistrys_Output_FocusVariableScatterData {
      total?: number; 
      precent?: string; 
      value?: number; 
      name?: string; 
      variableUniqueCode?: string; 
  }

export interface Disease_Service_Application_DiseaseRegistrys_Output_MedicalRecordsDistributionOutput {
      medicalRecordsInfo?: null; 
  }

export interface Disease_Service_Application_DiseaseRegistrys_Output_MedicalRecordsInfo {
      summary?: Disease_Service_Application_DiseaseRegistrys_Output_Summary[]; 
  }

export interface Disease_Service_Application_DiseaseRegistrys_Output_SimplyDiseaseRegistriesOutput {
      id?: number; 
      name?: string; 
      resContainerCode?: string; 
  }

export interface Disease_Service_Application_DiseaseRegistrys_Output_SubDiseasesRegistryBaseOutput {
      id?: number; 
      resContainerCode?: string; 
      name?: string; 
      iconPath?: string; 
      activeIconPath?: string; 
      type?: null; 
  }

export interface Disease_Service_Application_DiseaseRegistrys_Output_Summary {
      name?: string; 
      count?: number; 
      siteId?: number; 
      createDatetime?: string; 
  }

export interface Disease_Service_Application_DiseaseRegistrys_Output_VariableDistributionGroups {
      totalSubjects?: number; 
      newSubjects?: number; 
      totalRecord?: number; 
      collectCondition?: string; 
  }

export interface Disease_Service_Application_DiseaseRegistrys_Output_VariableDistributionSummary {
      description?: string; 
      chartType?: string; 
      variableDistributionSummarysItems?: Disease_Service_Application_DiseaseRegistrys_Output_VariableDistributionSummarysItem[]; 
  }

export interface Disease_Service_Application_DiseaseRegistrys_Output_VariableDistributionSummarysItem {
      enrollTime?: string; 
      quantity?: number; 
  }

export interface Disease_Service_Application_Follow_Dto_AddingFollowPatientInput {
      queryId?: string; 
      tableIds?: number[]; 
      spedisId?: number; 
      patients?: number[]; 
  }

export interface Disease_Service_Application_Follow_Dto_AddingFollowPatientOutput {
      state?: boolean; 
  }

export interface Disease_Service_Application_Follow_Dto_GetFollowTablesOutput {
      tableId?: number; 
      tableName?: string; 
  }

export interface Disease_Service_Application_Observation_GetObservationListOutput {
      variableUniqueCode?: string; 
      name?: string; 
      order?: number; 
      isShow?: boolean; 
      isFixed?: boolean; 
      mergeNews?: boolean; 
      queryVariable?: null; 
      sortAble?: boolean; 
      filterAble?: boolean; 
      mergeNew?: boolean; 
      isDefault?: boolean; 
      isHeader?: boolean; 
  }

export interface Disease_Service_Application_Observation_ObservationVars {
      variableUniqueCode?: string; 
      name?: string; 
      order?: number; 
      isShow?: boolean; 
      isFixed?: boolean; 
      mergeNews?: boolean; 
  }

export interface Disease_Service_Application_Observation_SaveObservationListInput {
      diseaseId?: number; 
      observationVars?: Disease_Service_Application_Observation_ObservationVars[]; 
  }

export interface Disease_Service_Application_Ocr_Input_AddOCRIdentifyInput {
      localFileName?: string; // 识别文件名，用于匹配模板
      minioFileName?: string; // minio上的存储名
      diseaseId?: number; // 专病id
      pageId?: number; // 表单id
      patientId?: number; // 患者id
      dataId?: number; // 数据id
      domainCode?: string; // 表单对应域code
  }

export interface Disease_Service_Application_Permission_DTO_AllDiseasePermissionOutput {
      diseaseId?: number; 
      permissions?: Disease_Service_Application_Permission_DTO_PermissionDetailOutput[]; 
  }

export interface Disease_Service_Application_Permission_DTO_PermissionDetailOutput {
      treeValue?: string; 
      projectId?: number; 
  }

export interface Disease_Service_Application_Permission_DTO_PermissionOutput {
      id?: number; 
      uiName?: string; 
  }

export interface Disease_Service_Application_Resource_Upload_UploadFileResult {
      isSuccess?: boolean; 
      fileName?: string; 
  }

export interface Disease_Service_Application_Site_Input_CreateSiteInput {
      diseaseId?: number; // StudyId
      name?: string; // 名称
      code?: string; // 编码
  }

export interface Disease_Service_Application_Site_Input_UpdateSiteInput {
      diseaseId?: number; 
      siteId?: number; // SiteId
      name?: string; // 名称
      code?: string; // 编码
  }

export interface Disease_Service_Application_Site_Output_CreateSiteOutput {
      id?: number; 
      projectId?: number; 
      name?: string; // 名称
      code?: string; // 编码
      membersCount?: number; // 中心有多少成员
      mainSite?: boolean; // 是否是主中心
      accountBelongs?: boolean; // 当前账户在此中心
  }

export interface Disease_Service_Application_Site_Output_SiteOutput {
      id?: number; 
      projectId?: number; 
      name?: string; // 名称
      code?: string; // 编码
      membersCount?: number; // 中心有多少成员
      mainSite?: boolean; // 是否是主中心
      accountBelongs?: boolean; // 当前账户在此中心
  }

export interface Disease_Service_Application_Storage_Input_GetStrogeDetailInput {
      domainId?: number; 
      patientId?: number; 
      diseaseId?: number; 
  }

export interface Disease_Service_Application_Storage_Output_GetStrogeDetailOutput {
      data?: null; 
  }
// 获取表头筛选选中的变量的值域 - 入参
export interface Disease_Service_Application_Stroge_Input_GetStrogeDistinctInput {
      pageSize?: number; 
      pageIndex?: number; 
      diseaseId?: number; // 专病库ID
      keyword?: string; // 关键词模糊搜索
      headerFilters?: Disease_Service_Application_Stroge_Input_StrogeFilter[]; // 表头筛选
      distinctVariableUniqueCode?: string; // 获取表头筛选选中的变量 - 唯一编码
  }
// 获取数据仓库 - 列表数据入参
export interface Disease_Service_Application_Stroge_Input_GetStrogeListInput {
      pageSize?: number; 
      pageIndex?: number; 
      diseaseId?: number; // 专病库ID
      domainId?: number; // 科研域 - 变量ID
      headerFilters?: Disease_Service_Application_Stroge_Input_StrogeFilter[]; // 表头筛选 - 入参
      sortInfo?: null; 
  }
// 数据仓库 - 筛选
export interface Disease_Service_Application_Stroge_Input_StrogeFilter {
      variableUniqueCode?: string; // 筛选使用的变量 - 唯一编码
      values?: string[]; // 筛选使用的变量 - 值
  }

export interface Disease_Service_Application_Stroge_Input_StrogeSortInfo {
      variableUniqueCode?: string; 
      order?: string; 
  }

export interface Disease_Service_Application_Stroge_Output_GetStrogeDistinctOutput {
      values?: Common_Contract_Dsr_Patient_DistinctValues[]; 
  }

export interface Disease_Service_Application_Stroge_Output_GetStrogeLevelsOutput {
      nodeId?: number; // 节点id
      domainId?: number; // 域id
      groupId?: number; // 变量组id（可能是nodeId或variableId）
      nodeName?: string; // 层级名称
      sort?: number; // 顺序
      hasPermission?: boolean; // 是否有权限
      children?: Common_Contract_IR_Nodes_GetNodesLevelsOutput[]; // 子层级
  }
// 获取数据仓库 - 列表数据出参
export interface Disease_Service_Application_Stroge_Output_GetStrogeListOutput {
      listSummary?: null; 
      dataSet?: null; 
  }
// 表格数据
export interface Disease_Service_Application_Stroge_Output_StrogeDataSet {
      groupData?: Disease_Service_Application_Stroge_Output_StrogePerPatient[]; // GroupData
  }
// 数据汇总
export interface Disease_Service_Application_Stroge_Output_StrogeListSummary {
      patientTotal?: number; // 当前域下的患者总数
      variableTotal?: number; // 变量总数
      recordTotal?: number; // 当前域下的记录
      creationTime?: string; // 创建时间
  }
// 表格数据 - 单个患者
export interface Disease_Service_Application_Stroge_Output_StrogePerPatient {
      isMultiple?: boolean; // 是否多条
      patientId?: number; // 患者ID
      patientName?: string; // PatientName
      rows?: Disease_Service_Application_Stroge_Output_StrogePerPatientRow[]; // 表格数据 - 单个患者 - 行数据集合
  }
// 表格数据 - 单个患者 - 行
export interface Disease_Service_Application_Stroge_Output_StrogePerPatientRow {
      id?: number; // 数据ID
      visitId?: number; // 就诊ID - P 级别域 没有就诊ID
      cells?: Disease_Service_Application_Stroge_Output_StrogePerPatientRowCell[]; // 单元格
      subRows?: Disease_Service_Application_Stroge_Output_StrogePerPatientRow[]; // 子行
  }
// 表格数据 - 单个患者 - 行 - 单元格
export interface Disease_Service_Application_Stroge_Output_StrogePerPatientRowCell {
      data?: string; // 单元格 - 值
  }

export interface Disease_Service_Application_Variables_QueryVariable {
      variableUniqueCode?: string; 
      variableName?: string; 
      table?: string; 
      column?: string; 
      datatype?: null; 
      isVirtual?: boolean; 
      domainLevel?: null; 
      calculateInfo?: null; 
  }

export interface RealData_Common_Contract_Common_Result {
      code?: null; 
      msg?: string; 
  }
export type RealData_Common_Contract_Common_ResultCodeType = 0|400|401|403|500|700 ;

export interface System_Collections_Generic_IList_1__Common_Contract_Dsr_CrfPage_Output_CrfDataOutput {
      code?: null; 
      msg?: string; 
      data?: Common_Contract_Dsr_CrfPage_Output_CrfDataOutput[]; 
  }

export interface System_Collections_Generic_IList_1__Common_Contract_Dsr_CrfPage_Output_CrfItemOutput {
      code?: null; 
      msg?: string; 
      data?: Common_Contract_Dsr_CrfPage_Output_CrfItemOutput[]; 
  }

export interface System_Collections_Generic_IList_1__Common_Contract_Dsr_CrfPage_Output_CrfPageOutput {
      code?: null; 
      msg?: string; 
      data?: Common_Contract_Dsr_CrfPage_Output_CrfPageOutput[]; 
  }

export interface System_Collections_Generic_IList_1__Common_Contract_Dsr_Patient_DsrPatientHeaderItem {
      code?: null; 
      msg?: string; 
      data?: Common_Contract_Dsr_Patient_DsrPatientHeaderItem[]; 
  }

export interface System_Collections_Generic_IList_1__Disease_Service_Application_Site_Output_SiteOutput {
      code?: null; 
      msg?: string; 
      data?: Disease_Service_Application_Site_Output_SiteOutput[]; 
  }

export interface System_Collections_Generic_List_1__Common_Contract_Dsr_Patient_GetRelyVariablesOutput {
      code?: null; 
      msg?: string; 
      data?: Common_Contract_Dsr_Patient_GetRelyVariablesOutput[]; 
  }

export interface System_Collections_Generic_List_1__Common_Contract_Platform_Log_Input_GetProjectLogDetailOutput {
      code?: null; 
      msg?: string; 
      data?: Common_Contract_Platform_Log_Input_GetProjectLogDetailOutput[]; 
  }

export interface System_Collections_Generic_List_1__Common_Contract_Platform_Log_Input_ProjectLogHeader {
      code?: null; 
      msg?: string; 
      data?: Common_Contract_Platform_Log_Input_ProjectLogHeader[]; 
  }

export interface System_Collections_Generic_List_1__Disease_Service_Application_DiseaseRegistrys_Input_FocusVariable {
      code?: null; 
      msg?: string; 
      data?: Disease_Service_Application_DiseaseRegistrys_Input_FocusVariable[]; 
  }

export interface System_Collections_Generic_List_1__Disease_Service_Application_DiseaseRegistrys_Output_DiseaseRegistriesBaseOutput {
      code?: null; 
      msg?: string; 
      data?: Disease_Service_Application_DiseaseRegistrys_Output_DiseaseRegistriesBaseOutput[]; 
  }

export interface System_Collections_Generic_List_1__Disease_Service_Application_DiseaseRegistrys_Output_SimplyDiseaseRegistriesOutput {
      code?: null; 
      msg?: string; 
      data?: Disease_Service_Application_DiseaseRegistrys_Output_SimplyDiseaseRegistriesOutput[]; 
  }

export interface System_Collections_Generic_List_1__Disease_Service_Application_Observation_GetObservationListOutput {
      code?: null; 
      msg?: string; 
      data?: Disease_Service_Application_Observation_GetObservationListOutput[]; 
  }

export interface System_Collections_Generic_List_1__Disease_Service_Application_Permission_DTO_AllDiseasePermissionOutput {
      code?: null; 
      msg?: string; 
      data?: Disease_Service_Application_Permission_DTO_AllDiseasePermissionOutput[]; 
  }

export interface System_Collections_Generic_List_1__Disease_Service_Application_Permission_DTO_PermissionOutput {
      code?: null; 
      msg?: string; 
      data?: Disease_Service_Application_Permission_DTO_PermissionOutput[]; 
  }

export interface System_Collections_Generic_List_1__Disease_Service_Application_Stroge_Output_GetStrogeLevelsOutput {
      code?: null; 
      msg?: string; 
      data?: Disease_Service_Application_Stroge_Output_GetStrogeLevelsOutput[]; 
  }

export interface System_String {
      code?: null; 
      msg?: string; 
      data?: string; 
  }
export type RealData_Entity_Contract_Enums_CRFItemType = 1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22 ;
export type RealData_Entity_Contract_Enums_DR_CriteriaSourceDatabaseEnum = 0|1 ;
export type RealData_Entity_Contract_Enums_DR_DataSourceTypeEnum = 0|1|2|3|4 ;
export type RealData_Entity_Contract_Enums_DR_StatisticDataTypeEnum = 1|2 ;
export type RealData_Entity_Contract_Enums_DR_StatisticTypeEnum = 1|2 ;
export type RealData_Entity_Contract_Enums_Research_DSRPatientEntryTypeEnum = 0|1|2|3 ;
export type RealData_Entity_Contract_Enums_Research_DiseaseRegistryTypeEnum = 0|1 ;
export type RealData_Entity_Contract_Enums_Research_DomainLevelEnum = 0|1|2|3 ;
export type RealData_Entity_Contract_Enums_Research_VariableDataTypeEnum = 0|1|2|3|4|5|6|7|8 ;
export type RealData_Entity_Contract_Enums_Research_VariableStatisticalTypeEnum = 1|2|3|4|5|6|7 ;
export type RealData_Entity_Contract_Enums_Research_VariableStorageStructureEnum = 1|2 ;
export type RealData_Entity_Contract_Enums_SourceType = 1|2|5 ;
