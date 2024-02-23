/**
 * 本文件通过脚本生成，请勿直接修改内部内容
 */


export interface BulkCreateInput {
      userId?: number; 
      fromUrl?: string; 
      toUrl?: string; 
      pageModule?: string; 
  }
// 创建导出审批DTO
export interface Common_Contract_Platform_ApprovalFlow_CreateApprovalFlowInput {
      content?: string; // 导出内容，前端写入
      applicantId?: number; // 申请人id
      approvalReason?: string; // 申请原因
      approvalFlowType?: number; // 导出审批模块枚举
      fileTicket?: string; // 导出文件的Ticket
      approverId?: number; // 审批人
      fileAttachs?: Common_Contract_Platform_ApprovalFlow_FileAttach[]; // 导出审批附件
  }

export interface Common_Contract_Platform_ApprovalFlow_FileAttach {
      fileName?: string; 
      fileExt?: string; 
      fileSize?: string; 
      fileTicket?: string; // 前端生成的FileTicket
  }

export interface Common_Contract_Platform_Auth_Output_EndpointAuthorityDto {
      entryPointType?: number; // 类型 功能点/接口
      displayName?: string; // 显示名称
      systemId?: number; // 系统Id
      id?: number; // 主键
      resClassName?: string; // 资源类型名称
      resCode?: string; // 资源代码
      visitUrl?: string; // API网址
  }
// 代码项
export interface Common_Contract_Platform_CodeSet_CodeItem {
      id?: number; // Id
      code?: string; // 代码
      name?: string; // 名称
      showName?: string; // 显示名称
      quoteCodeId?: number; // 引用代码Id
      unitId?: number; // Gets or sets the unit identifier.
      unitName?: string; // Gets or sets the name of the unit.
      sortNo?: number; // Gets or sets the sort no.
  }
// 代码集
export interface Common_Contract_Platform_CodeSet_CodeSetDto {
      items?: Common_Contract_Platform_CodeSet_CodeItem[]; // 代码集
  }

export interface Common_Contract_Platform_CodeSet_Output_SelectItemListOutput {
      selectItems?: Common_Contract_Platform_CodeSet_SelectItemBaseDto[]; 
  }

export interface Common_Contract_Platform_CodeSet_SelectItemBaseDto {
      name?: string; 
      code?: string; 
      value?: number; 
  }

export interface Common_Contract_Platform_CodeSet_TypeCodeName {
      id?: string; 
      typeName?: string; 
      typeCode?: string; 
      showName?: string; 
      rangeMax?: number; 
      rangeMin?: number; 
      rangeMaxDay?: number; 
      rangeMinDay?: number; 
  }

export interface Common_Contract_Platform_CodeSet_TypeCodeSet {
      id?: string; 
      items?: Common_Contract_Platform_CodeSet_TypeCodeName[]; 
  }
// 获取数据权限输出
export interface Common_Contract_Platform_DataPermission_ClinicDataPermission {
      relationItems?: Common_Contract_Platform_DataPermission_ClinicDataPermissionRelationItem[]; // 临床树科研域
  }

export interface Common_Contract_Platform_DataPermission_ClinicDataPermissionOption {
      code?: string; 
      name?: string; 
  }

export interface Common_Contract_Platform_DataPermission_ClinicDataPermissionRelationItem {
      cdmNodeType?: number; 
      id?: number; // querynodeid / researchdomainid
      code?: string; 
      name?: string; 
  }

export interface Common_Contract_Platform_DataPermission_ClinicDataPermissionScope {
      scopeId?: number; 
      isDefault?: boolean; 
      beginValidAt?: string; 
      endValidAt?: string; 
      options?: Common_Contract_Platform_DataPermission_ClinicDataPermissionOption[]; 
  }

export interface Common_Contract_Platform_DataPermission_DataPermissionOption {
      code?: string; 
      name?: string; 
      checked?: boolean; 
  }

export interface Common_Contract_Platform_DataPermission_DataPermissionTree {
      code?: string; 
      name?: string; 
      multiple?: boolean; 
      treeItems?: Common_Contract_Platform_DataPermission_DataPermissionTree[]; 
  }
// 科室信息输出
export interface Common_Contract_Platform_DataPermission_DepartmentInfoOutput {
      deptId?: number; // 科室Id
      deptName?: string; // 科室名称
      medGroups?: Common_Contract_Platform_DataPermission_MedGroupInfoOutput[]; // 医疗组
  }
// 获取数据权限输出
export interface Common_Contract_Platform_DataPermission_DeptDataPermission {
      type?: number; // 权限类型
      scope?: number; // 权限范围
      depts?: Common_Contract_Platform_DataPermission_DepartmentInfoOutput[]; // 科室
  }

export interface Common_Contract_Platform_DataPermission_DeptDataPermissionScope {
      scopeId?: number; 
      isDefault?: boolean; 
      isStanding?: boolean; 
      orgid?: number; 
      orgname?: string; 
      beginValidAt?: string; 
      endValidAt?: string; 
      depts?: Common_Contract_Platform_Organization_Dto_DepartmentDto[]; 
  }

export interface Common_Contract_Platform_DataPermission_Input_AddUserClinicDataPermissionScopeInput {
      userId?: number; 
      beginValidAt?: number; 
      endValidAt?: number; 
      options?: Common_Contract_Platform_DataPermission_DataPermissionOption[]; 
  }

export interface Common_Contract_Platform_DataPermission_Input_AddUserDeptDataPermissionScopeInput {
      userId?: number; 
      beginValidAt?: number; 
      endValidAt?: number; 
      orgs?: Common_Contract_Platform_DataPermission_PermissionDeptDto[]; 
  }
// 获取数据权限输入
export interface Common_Contract_Platform_DataPermission_Input_GetDataPermissionsInput {
      roleIds?: number[]; // 职称Id
      titleIds?: number[]; 
  }
// 更新科室
export interface Common_Contract_Platform_DataPermission_Input_UpdateDepartment {
      deptId?: number; // 科室Id
      medGroups?: Common_Contract_Platform_DataPermission_Input_UpdateMedGroup[]; // 医疗组
  }
// 更新医疗组
export interface Common_Contract_Platform_DataPermission_Input_UpdateMedGroup {
      medGroupId?: number; // 医疗组Id
  }
// 更新用户数据权限
export interface Common_Contract_Platform_DataPermission_Input_UpdateUserDataPermission {
      type?: number; // 权限类型
      depts?: Common_Contract_Platform_DataPermission_Input_UpdateDepartment[]; // 科室
  }
// 更新用户数据权限
export interface Common_Contract_Platform_DataPermission_Input_UpdateUserDataPermissionDto {
      userId?: number; // User Id
      permissions?: Common_Contract_Platform_DataPermission_Input_UpdateUserDataPermission[]; // 权限
  }
// 医疗组信息输出
export interface Common_Contract_Platform_DataPermission_MedGroupInfoOutput {
      medGroupId?: number; // 医疗组Id
      medGroupName?: string; // 医疗组名称
  }
// 数据权限输出
export interface Common_Contract_Platform_DataPermission_Output_DataPermissionOutput {
      type?: number; // 权限类型
      scope?: number; // 权限范围
      depts?: Common_Contract_Platform_DataPermission_Output_DepartmentOutput[]; // 科室列表
  }
// 科室信息输出
export interface Common_Contract_Platform_DataPermission_Output_DepartmentOutput {
      deptId?: number; // 科室Id
      medGroups?: Common_Contract_Platform_DataPermission_Output_MedGroupEmplsOutput[]; // 医疗组
  }

export interface Common_Contract_Platform_DataPermission_Output_GetDataPermissionScopeOutput {
      clinics?: Common_Contract_Platform_DataPermission_ClinicDataPermissionScope[]; 
      depts?: Common_Contract_Platform_DataPermission_DeptDataPermissionScope[]; 
  }

export interface Common_Contract_Platform_DataPermission_Output_GetTitleDataPermissionOptionOutput {
      roles?: Common_Contract_Platform_DataPermission_Output_TitleDataPermissionOptionDto[]; 
      titles?: Common_Contract_Platform_DataPermission_Output_TitleDataPermissionOptionDto[]; 
      hasEffectedRoleIds?: number[]; // 用于保存成功后标记给前端，调用后续校验临床科研域权限更新定时任务的接口
      hasEffectedTitleIds?: number[]; 
  }
// 获取数据权限输出
export interface Common_Contract_Platform_DataPermission_Output_GetUserDataPermissionOutput {
      permissions?: Common_Contract_Platform_DataPermission_Output_DataPermissionOutput[]; // 权限列表
  }

export interface Common_Contract_Platform_DataPermission_Output_GetUserDataPermissionsOutput {
      deptPermissions?: Common_Contract_Platform_DataPermission_DeptDataPermission[]; 
      clinicPermissions?: Common_Contract_Platform_DataPermission_ClinicDataPermission[]; 
  }
// 医疗组成员
export interface Common_Contract_Platform_DataPermission_Output_MedGroupEmplsOutput {
      id?: number; // Id
      emplIds?: number[]; // EmpIds
  }
// TitleDataPermissionOptionDto
export interface Common_Contract_Platform_DataPermission_Output_TitleDataPermissionOptionDto {
      titleId?: number; // 职称Id
      roleId?: number; // RoleId
      roleName?: string; // 职称名称
      titleName?: string; // TitleName
      roleCode?: string; // RoleCode
      options?: Common_Contract_Platform_DataPermission_DataPermissionOption[]; // Options
  }

export interface Common_Contract_Platform_DataPermission_PermissionDeptDto {
      id?: number; 
      name?: string; 
      isSelectAll?: boolean; 
      children?: Common_Contract_Platform_DataPermission_PermissionDeptDto[]; 
  }

export interface Common_Contract_Platform_EntryPoint_Input_CreateEntryPointInput {
      entryPointType?: number; // 类型
      displayName?: string; // 名称
      desc?: string; // 描述
      resClassName?: string; 
      resCode?: string; 
      visitUrl?: string; 
      httpRequestType?: number; // Http请求类型
      systemId?: number; 
  }

export interface Common_Contract_Platform_EntryPoint_Input_UpdateEntryPointInput {
      id?: number; 
      entryPointType?: number; // 类型
      displayName?: string; // 名称
      desc?: string; // 描述
      resClassName?: string; 
      resCode?: string; 
      visitUrl?: string; 
      httpRequestType?: number; // Http请求类型
      systemId?: number; 
  }

export interface Common_Contract_Platform_EntryPoint_Output_EntryPointOutput {
      id?: number; 
      entryPointType?: number; // 类型
      displayName?: string; // 名称
      desc?: string; // 描述
      resClassName?: string; 
      resCode?: string; 
      visitUrl?: string; 
      httpRequestType?: number; // Http请求类型
      systemId?: number; 
      createUserId?: number; 
      createDateTime?: string; 
      updateUserId?: number; 
      updateDateTime?: string; 
  }

export interface Common_Contract_Platform_FileManager_FileStep {
      step?: string; 
      order?: number; 
      stepName?: string; 
      processingTip?: string; // 处理中提示
      successTip?: string; // 成功提示
      failTip?: string; // 失败提示
  }

export interface Common_Contract_Platform_FileManager_FileTaskDto {
      id?: number; 
      recordCode?: string; 
      size?: number; 
      ticket?: string; 
      fileName?: string; 
      sourceFrom?: number; 
      status?: number; 
      previewStatus?: number; 
      approvalStatus?: number; 
      isValid?: boolean; 
      isError?: boolean; 
      createTime?: string; 
      createTimeDisplay?: string; 
      approvalId?: number; 
      approvalFlowType?: number; 
      downLoadAuthority?: boolean; 
      timeGroup?: string; 
      encryptionType?: number; 
      actId?: number; 
      currentStep?: string; 
      process?: Common_Contract_Platform_FileManager_FileStep[]; 
      daySort?: number; 
      projectCode?: string; 
  }

export interface Common_Contract_Platform_FileManager_FileTaskProcessDto {
      ticket?: string; // 文件Ticket
      currentStep?: string; // 当前进行到那一步了
      fileTaskStatus?: number; // 仅用于通知失败等状态默认不赋值
  }

export interface Common_Contract_Platform_FileManager_Input_DeleteFilesInput {
      tickets?: string[]; 
  }

export interface Common_Contract_Platform_FileManager_Input_PostInitFilesInput {
      fileName?: string; 
      sourceFrom?: number; 
      note?: string; 
      encryptionType?: number; // 加密类型
      systemLogId?: number; // 行为日志Id
      projectCode?: string; 
  }

export interface Common_Contract_Platform_FileManager_Input_PostQueryFilesInput {
      pageIndex?: number; 
      pageSize?: number; 
      keyWord?: string; 
      sourceFrom?: number; 
      inProcess?: boolean; 
  }

export interface Common_Contract_Platform_FileManager_Output_PostQueryFilesOutput {
      count?: number; 
      fileTasks?: Common_Contract_Platform_FileManager_FileTaskDto[]; 
  }

export interface Common_Contract_Platform_FileManager_PostFileTicketDto {
      ticket?: string; 
      status?: number; 
  }

export interface Common_Contract_Platform_Function_Input_ProjectInitInput {
      userId?: number; 
      projectId?: number; 
      sourceType?: number; 
  }
// 功能权限
export interface Common_Contract_Platform_Function_Output_FunctionNode {
      id?: number; // Id
      name?: string; // Name
      locked?: boolean; // 是否锁定
      canSelected?: boolean; // 区别是模块还是可以勾选的权限点
      functions?: Common_Contract_Platform_Function_Output_FunctionNode[]; // 子节点
      exclusionIds?: number[]; // ExclusionIds
  }

export interface Common_Contract_Platform_Function_Output_FunctionSimpleOutput {
      id?: number; 
      name?: string; 
      desc?: string; 
      locked?: boolean; // 是否锁定
      treeValue?: string; // 权限值 、 用于判断权限
      checked?: boolean; // 是否勾选
  }

export interface Common_Contract_Platform_Function_Output_GetHasIntelligentSearchFunctionProjectsOutput {
      projectCode?: string; 
      projectId?: number; 
      functionId?: number; 
  }

export interface Common_Contract_Platform_Function_Output_ProjectInitOutput {
      message?: string; 
  }
// PRC 接口任务信息
export interface Common_Contract_Platform_JobMgr_HttpRpcJobInfo {
      jobId?: string; 
      jobName?: string; // JOB名
      service?: string; // 服务路径 http://xxx:8900
      endPoint?: string; // 访问节点 /url
      method?: string; // 方法 POST
      param?: null; // POST 参数
      cronExpr?: string; // Cron 表达式 支持到分钟
      retry?: number; // 重试次数
      callBackMethod?: number; // 回调方式
      callBackUrl?: string; // 回调URL
  }
// CreateJobOutput
export interface Common_Contract_Platform_JobMgr_Output_CreateJobOutput {
      jobId?: string; // 任务的标识
  }
// LocationAccess
export interface Common_Contract_Platform_LocationAccessRestrictions_Input_LocationAccess {
      id?: number; // Id
      locationName?: string; // LocationName
      description?: string; // Description
      ipConfigs?: Common_Contract_Platform_LocationAccessRestrictions_Input_LocationDetailItem[]; // IpConfigs
      functionIds?: number[]; // FunctionIds
  }
// LocationDetailItem
export interface Common_Contract_Platform_LocationAccessRestrictions_Input_LocationDetailItem {
      type?: number; // 类型
      value?: string; // 值
      isForbidden?: boolean; // 禁用
  }
// GetLocationOutput
export interface Common_Contract_Platform_LocationAccessRestrictions_Output_GetLocationOutput {
      id?: number; // Id
      locationName?: string; // LocationName
      description?: string; // Description
      tenantId?: number; // TenantId
  }

export interface Common_Contract_Platform_Log_Input_AddExportVariableInfoInput {
      actId?: number; 
      variableInfo?: string; 
      exportType?: number; 
      patientCount?: number; 
      recordCount?: number; 
      userId?: number; 
      recordCode?: string; 
      exportParameter?: string; // 导出变量Input数据
  }

export interface Common_Contract_Platform_Log_Input_AddSystemLogInput {
      logSource?: number; // 模块
      logLevel?: number; 
      logName?: string; // 名称
      actKeyId?: number; 
      projectId?: number; 
      sourceType?: number; 
      siteId?: number; 
      logNote?: string; 
      ip?: string; 
      userAgent?: string; 
      deviceId?: string; 
      actUserId?: number; 
      actUserName?: string; 
      approvalFlowInfo?: null; 
  }

export interface Common_Contract_Platform_Log_Input_ApprovalFlowInfo {
      approvalFlowType?: number; 
  }

export interface Common_Contract_Platform_Log_Input_ExportHistoryInfoDtoInput {
      actId?: number; 
  }

export interface Common_Contract_Platform_Log_Input_ExportSystemLogInput {
      beginDate?: string; 
      endDate?: string; 
      logSource?: number[]; 
      sourceType?: number; 
      projectId?: number; 
  }

export interface Common_Contract_Platform_Log_Input_GetProjectLogDetailOutput {
      siteId?: number; 
      siteName?: string; 
      logNote?: string; 
      logName?: string; 
      actUserName?: string; 
      actTime?: string; 
  }

export interface Common_Contract_Platform_Log_Input_ProjectLogHeader {
      name?: string; 
      key?: string; 
      sortAble?: boolean; 
  }

export interface Common_Contract_Platform_Log_Input_QuerySystemLogsInput {
      logSource?: number[]; 
      logLevel?: number; 
      keyWord?: string; 
      beginDate?: string; 
      endDate?: string; 
      pageIndex?: number; 
      pageSize?: number; 
      projectId?: number; 
      sourceType?: number; 
  }

export interface Common_Contract_Platform_Log_Output_ExportVariable {
      menuItem?: null; 
      varItems?: Common_Contract_Platform_Log_Output_VarItem[]; 
  }

export interface Common_Contract_Platform_Log_Output_LogExportVariablesOutput {
      patientsCount?: number; 
      recordsCount?: number; 
      exportFlowType?: number; 
      exportVariables?: Common_Contract_Platform_Log_Output_ExportVariable[]; 
  }

export interface Common_Contract_Platform_Log_Output_MenuItem {
      name?: string; 
      selectedSize?: number; 
  }

export interface Common_Contract_Platform_Log_Output_VarItem {
      name?: string; 
      id?: number; 
  }

export interface Common_Contract_Platform_MapConcept_MapConceptDto {
      conceptId?: number; 
      conceptName?: string; 
  }

export interface Common_Contract_Platform_MapConcept_Output_MapConceptOutput {
      mapConceptDtos?: Common_Contract_Platform_MapConcept_MapConceptDto[]; 
  }

export interface Common_Contract_Platform_Organization_Dto_DepartmentDto {
      id?: number; 
      name?: string; 
      isSelectAll?: boolean; 
      departments?: Common_Contract_Platform_Organization_Dto_DepartmentDto[]; 
  }

export interface Common_Contract_Platform_Organization_Dto_DepartmentTreeDto {
      id?: number; 
      orgId?: number; 
      parentId?: number; 
      name?: string; 
      departments?: Common_Contract_Platform_Organization_Dto_DepartmentTreeDto[]; 
  }

export interface Common_Contract_Platform_Organization_Dto_GetAllOrgDeptTreeDto {
      orgId?: number; 
      orgName?: string; 
      parentId?: number; 
      depts?: Common_Contract_Platform_Organization_Dto_DepartmentTreeDto[]; 
  }

export interface Common_Contract_Platform_Organization_Dto_GetOrgElementDto {
      id?: number; 
      name?: string; 
      isHospital?: boolean; 
      isDept?: boolean; 
      isUser?: boolean; 
      children?: Common_Contract_Platform_Organization_Dto_GetOrgElementDto[]; 
  }

export interface Common_Contract_Platform_Organization_Input_QueryOrgDeptInput {
      keyWord?: string; 
      pageIndex?: number; 
      pageSize?: number; 
  }
// DepartmentsOutput
export interface Common_Contract_Platform_Organization_Output_DepartmentsOutput {
      deptId?: number; // DeptId
      deptName?: string; // 科室名字
      medGroups?: Common_Contract_Platform_Organization_Output_MedGroupsOutput[]; // 医疗组
  }

export interface Common_Contract_Platform_Organization_Output_GetAllOrgDeptTreeOutput {
      getAllOrgDeptTreeDtos?: Common_Contract_Platform_Organization_Dto_GetAllOrgDeptTreeDto[]; 
  }
// 医疗组树
export interface Common_Contract_Platform_Organization_Output_MedGroupTreeOutput {
      hospitalId?: number; // 医院Id
      depts?: Common_Contract_Platform_Organization_Output_DepartmentsOutput[]; // 科室
  }
// MedGroupsOutput
export interface Common_Contract_Platform_Organization_Output_MedGroupsOutput {
      medGroupId?: number; // MedGroupId
      medGroupName?: string; // MedGroupName
  }

export interface Common_Contract_Platform_Organization_Output_QueryOrgDept {
      id?: number; // 如果是机构则该id为0
      orgId?: number; 
      parentId?: number; 
      name?: string; 
      orgDept?: null; 
  }

export interface Common_Contract_Platform_Organization_Output_QueryOrgDeptOutput {
      total?: number; 
      orgDept?: Common_Contract_Platform_Organization_Output_QueryOrgDept[]; 
  }
// BulkUpdateFunctionsInput
export interface Common_Contract_Platform_PlatformRole_Input_BulkUpdateFunctionsInput {
      roleFunctions?: Common_Contract_Platform_PlatformRole_Input_UpdateRoleFunctionsInput[]; // RoleFunctions
      sourceType?: number; 
  }
// `
export interface Common_Contract_Platform_PlatformRole_Input_CreateRoleInput {
      name?: string; 
      code?: string; 
      level?: number; // 级别: 0管理员， 1用户
      sourceType?: number; // 来自 系统权限 、edc权限 、 专病库权限？
      projectId?: number; // 项目Id
  }

export interface Common_Contract_Platform_PlatformRole_Input_FunctionInput {
      id?: number; // Id
      checked?: boolean; // 是否打钩
  }

export interface Common_Contract_Platform_PlatformRole_Input_UpdateRoleFunctionsInput {
      roleId?: number; 
      functionInputs?: Common_Contract_Platform_PlatformRole_Input_FunctionInput[]; 
  }

export interface Common_Contract_Platform_PlatformRole_Input_UpdateRoleInput {
      id?: number; 
      name?: string; 
      level?: number; // 级别: 0管理员， 1用户,2 固定用户
      projectId?: number; // 项目Id
      hasSiteDataPermission?: boolean; // 是否有分中心的数据
      sourceType?: number; 
  }

export interface Common_Contract_Platform_PlatformRole_Output_RoleOutput {
      id?: number; 
      name?: string; 
      code?: string; 
      level?: number; 
      levelName?: string; 
      locked?: boolean; // 是否锁定
      functions?: Common_Contract_Platform_Function_Output_FunctionSimpleOutput[]; 
      users?: Common_Contract_Platform_UserAccount_Output_UserAccountSimpleOutput[]; 
      hasMember?: boolean; // 是否有用户关联
      defaultRole?: boolean; // 能否删除修改
      hasSiteDataPermission?: boolean; // 分中心
  }

export interface Common_Contract_Platform_PlatformRole_Output_RoleSimpleOutput {
      id?: number; 
      name?: string; 
      code?: string; 
      level?: number; // 级别Id
      levelName?: string; // 级别名称
  }

export interface Common_Contract_Platform_Privacy_CreateDefaultPrivacyInput {
      effectType?: number; 
      projectId?: number; 
      privacies?: Common_Contract_Platform_Privacy_PrivacyConfigShortInput[]; 
  }

export interface Common_Contract_Platform_Privacy_CreateRdrPrivacyInput {
      variableUniqueCodes?: string[]; 
      effectType?: number; 
      projectId?: number; 
  }

export interface Common_Contract_Platform_Privacy_EditPrivacyInput {
      id?: number; // Id
      shouldHiddenWholeText?: boolean; // 是否隐藏整个文本
      replacementCharacter?: string; // 替换字符
      rules?: Common_Contract_Platform_Privacy_PrivacyRule[]; // 规则
  }

export interface Common_Contract_Platform_Privacy_PrivacyConfigShortInput {
      variableUniqueCode?: string; 
      showName?: string; 
      isValid?: boolean; 
      sample?: string; 
      addType?: number; 
      shouldHiddenWholeText?: boolean; 
      sourceSample?: string; 
  }

export interface Common_Contract_Platform_Privacy_PrivacyCopyInput {
      fromSourceType?: number; 
      fromProjectId?: number; 
      toSourceType?: number; 
      toProjectId?: number; 
  }

export interface Common_Contract_Platform_Privacy_PrivacyOutput {
      id?: number; // Id
      showName?: string; // 显示名字
      description?: string; // 描述
      isValid?: boolean; // 是否有效
      sample?: string; // 样式
      shouldHiddenWholeText?: boolean; // 是否隐藏整个文本
      replacementCharacter?: string; // 替换字符
      rules?: Common_Contract_Platform_Privacy_PrivacyRule[]; 
      variableUniqueCode?: string; // 变量编码
      createUserId?: number; 
      createTime?: string; 
      lastModifiedUserId?: number; 
      lastModified?: string; 
      canDelete?: boolean; 
      addType?: number; 
  }
// 规则内容
export interface Common_Contract_Platform_Privacy_PrivacyRule {
      startIndex?: number; 
      characterCount?: number; 
  }

export interface Common_Contract_Platform_Privacy_UserPrivacyConfig {
      effectType?: number; 
      projectId?: number; 
      variableUniqueCode?: string; 
      canDelete?: boolean; 
      addType?: number; 
      replacementCharacter?: string; 
      shouldHiddenWholeText?: boolean; 
      policies?: RealData_Util_Extensions_PrivacyConfigPolicy[]; 
  }

export interface Common_Contract_Platform_ProjectUser_Input_CreateProjectUserInput {
      accountId?: number; // 系统账号Id
      projectId?: number; // 项目Id
      siteId?: number; // 中心Id
      roleIds?: number[]; // 角色列表
      displayName?: string; // 名称
      loginType?: number; // 登录类型
      phone?: string; // 电话
      mail?: string; // 邮箱
      otherInfo?: string; // 其他信息
      initPassword?: string; // 初始密码
      shouldReModifyPassword?: boolean; // 是否需要修改密码
      sourceType?: number; // 来源
      expiration?: number; // 有效期
      startValidityTime?: string; 
      endValidityTime?: string; 
  }

export interface Common_Contract_Platform_ProjectUser_Input_UpdateProjectUserInput {
      projectUserId?: number; // UserId
      siteId?: number; // 中心Id
      roleIds?: number[]; // 角色Id
      sourceType?: number; // 权限类型
      expiration?: number; 
      startValidityTime?: string; 
      endValidityTime?: string; 
  }

export interface Common_Contract_Platform_ProjectUser_Output_ProjectUserOutput {
      accountId?: number; // 系统账号Id
      projectUserId?: number; // UserId
      projectId?: number; // 项目Id
      siteId?: number; // 中心Id
      siteName?: string; // 中心名称
      roles?: Common_Contract_Platform_ProjectUser_Output_UserRole[]; // 角色列表
      displayName?: string; // 名称
      loginName?: string; 
      loginType?: number; // 登录类型
      phone?: string; // 电话
      mail?: string; // 邮箱
      otherInfo?: string; // 其他信息
      createAt?: string; // 创建时间
      expiration?: string; // 最后一次登录时间
      isAdmin?: boolean; // 是否是账号管理员
      startValidityTime?: string; 
      endValidityTime?: string; 
      hasExpired?: boolean; // 用户账户是否已过期
      isCreator?: boolean; 
  }

export interface Common_Contract_Platform_ProjectUser_Output_UserRole {
      id?: number; 
      name?: string; 
      code?: string; // Code
  }
// 创建中心
export interface Common_Contract_Platform_Site_Input_CreateSiteInput {
      projectId?: number; // 项目Id
      sourceType?: number; // 源类型
      name?: string; // 名称
      code?: string; // 编码
  }

export interface Common_Contract_Platform_Site_Input_UpdateSiteInput {
      id?: number; // SiteId
      name?: string; // 名称
      code?: string; // 编码
  }

export interface Common_Contract_Platform_Site_Output_SiteOutput {
      id?: number; 
      sourceType?: number; 
      projectId?: number; 
      name?: string; // 名称
      code?: string; // 编码
      membersCount?: number; // 中心有多少成员
      mainSite?: boolean; // 是否是主中心
      accountBelongs?: boolean; // 当前账户在此中心
  }
// BasicInfoDto
export interface Common_Contract_Platform_Tenant_BasicInfoDto {
      chrome?: null; 
      logoSrc?: string; 
      notifications?: Common_Contract_Platform_Tenant_Menu[]; 
      diseases?: Common_Contract_Platform_Tenant_Menu[]; 
      menus?: Common_Contract_Platform_Tenant_Menu[]; 
      watermark?: null; 
  }

export interface Common_Contract_Platform_Tenant_Chrome {
      favicon?: string; 
      title?: string; 
  }

export interface Common_Contract_Platform_Tenant_LoginHelpCenterFile {
      fileName?: string; 
      fileLink?: string; 
  }

export interface Common_Contract_Platform_Tenant_Menu {
      key?: string; 
      name?: string; 
      path?: string; 
      systemAuthTag?: string; 
      subMenuApi?: string; 
      newWindow?: boolean; 
      is_sw?: boolean; 
      iconType?: string; 
      order?: number; 
  }
// TenantDto
export interface Common_Contract_Platform_Tenant_TenantDto {
      id?: number; // Id
      tenantId?: string; // TenantId
      name?: string; // Name
      shortName?: string; // ShortName
      logoImage?: string; // LogoImage
      feature?: string; // Feature
      host?: string; // Host
      isEnabled?: boolean; // IsEnabled
      subscriptionExipreDate?: string; // SubscriptionExipreDate
      createdDate?: string; // CreatedDate
      lastUpdated?: string; // LastUpdated
  }
// 水印配置
export interface Common_Contract_Platform_Tenant_WatermarkConfig {
      enable?: boolean; 
      width?: number; 
      height?: number; 
      fontSize?: string; 
      color?: string; 
      alpha?: number; 
      lineHeight?: number; 
  }

export interface Common_Contract_Platform_UiPermission_UiPermissionDto {
      id?: number; 
      name?: string; 
      module?: string; // /
      action?: number; 
      show?: number; 
      function?: string; 
      desc?: string; 
  }

export interface Common_Contract_Platform_UserAccount_Input_UpdateUserInfoInput {
      userId?: number; 
      displayName?: string; 
      name?: string; 
      phone?: string; 
      mail?: string; 
      code?: string; 
      password?: string; 
      reModifyPassword?: boolean; 
      locked?: boolean; 
      titleId?: number; // 职位Id
      hospitalId?: number; // 单位Id
      deptId?: number; // 科室Id
      medGroupId?: number; // 医疗组Id
      title?: string; 
      hospital?: string; 
      dept?: string; 
      medGroup?: string; 
      roleIds?: number[]; 
      dataPermission?: null; 
  }

export interface Common_Contract_Platform_UserAccount_Output_GetUserAccountSimpleOutput {
      userId?: number; 
      userName?: string; // 用户名
      displayName?: string; // 显示名
      code?: string; 
      locked?: boolean; // 是否锁定
      hospital?: string; // 医院
      dept?: string; // 科室
      hospitalId?: number; 
      deptId?: number; 
      userImg?: string; // 用户头像
      createTime?: string; // 创建时间
      lastModifyTime?: string; 
      lastLoginTime?: string; // 最后登录时间
      roles?: Common_Contract_Platform_UserAccount_Output_GetUserRoleSimpleOutput[]; 
      isAdmin?: boolean; 
      zipPassword?: string; // 压缩文件密码
  }

export interface Common_Contract_Platform_UserAccount_Output_GetUserRoleSimpleOutput {
      roleId?: number; 
      roleName?: string; 
      level?: number; 
  }

export interface Common_Contract_Platform_UserAccount_Output_UserAccountInfo {
      userId?: number; 
      userName?: string; // 用户名
      phone?: string; 
      displayName?: string; // 显示名
      code?: string; 
      locked?: boolean; // 是否锁定
      mail?: string; // 邮件
      hospital?: string; // 医院
      dept?: string; // 科室
      medGroup?: string; 
      title?: string; // 职称
      hospitalId?: number; 
      deptId?: number; 
      medGroupId?: number; 
      titleId?: number; 
      profession?: string; // 职业
      userImg?: string; // 用户头像
      createTime?: string; // 创建时间
      lastModifyTime?: string; 
      lastLoginTime?: string; // 最后登录时间
      roleIds?: number[]; 
      reModifyPassword?: boolean; 
      defaultLoginType?: number; 
      isAdmin?: boolean; 
      scopeCount?: number; // 临时权限个数
      zipPassword?: string; // 压缩文件密码
  }

export interface Common_Contract_Platform_UserAccount_Output_UserAccountSimpleOutput {
      userId?: number; 
      userName?: string; 
      userImg?: string; // 用户头像
  }
// 审批列表返回数据结构
export interface Platform_Service_ApprovalFlowModule_DTO_ApprovalRecordDTO {
      recordCode?: string; 
      content?: string; 
      applicantName?: string; 
      applicationTime?: string; 
      approverName?: string; 
      approvalTime?: string; 
      approvalReason?: string; 
      cancellationReason?: string; 
      refusalReason?: string; 
      currentApprovalStatus?: number; 
      approvalFlowType?: number; 
      approvalNumber?: string; // 5位数的编号
      approverId?: number; // lwj 2020-08-18 add 申请的审批人
      applicantId?: number; // 申请人Id
      reApply?: boolean; 
      fileName?: string; 
  }
// 审批统计信息
export interface Platform_Service_ApprovalFlowModule_DTO_ApprovalStaticInfo {
      total?: number; // 总数量
      data?: Platform_Service_ApprovalFlowModule_DTO_ApprovalStaticInfo_StaticList[]; // 统计标签
  }

export interface Platform_Service_ApprovalFlowModule_DTO_ApprovalStaticInfo_StaticList {
      status?: number; // 审批状态
      name?: string; 
      count?: number; // 统计数量
  }

export interface Platform_Service_ApprovalFlowModule_DTO_Input_ApprovalActionInput {
      recordCode?: string; 
      reason?: string; // 拒绝理由或者撤销理由
      toStatus?: number; 
  }

export interface Platform_Service_ApprovalFlowModule_DTO_Input_GetApprovalRecordInput {
      startTime?: number; 
      endTime?: number; 
      applicationUser?: number; // 审批发起人id
      approvalFlowStatus?: number; // 导出审批的状态不赋值为全部
      approvalFlowTypes?: number; // 导出审批的来源不赋值为全部
      isMy?: boolean; // 是否是我的申请  true 我的申请   false 我的审批
      fileName?: string; // 文件名称搜索
      pageSize?: number; 
      pageIndex?: number; 
  }

export interface Platform_Service_ApprovalFlowModule_DTO_Input_ReApprovalInput {
      oldRecordCode?: string; 
      approvalReason?: string; 
      approverId?: number; // lwj 2020-08-18 add 申请的审批人
      content?: string; 
  }

export interface Platform_Service_ApprovalFlowModule_DTO_Output_ApprovalActionOutput {
      success?: boolean; 
  }
// 审批导出人  lwj 20200818 add
export interface Platform_Service_ApprovalFlowModule_DTO_Output_ApprovalUserOut {
      userId?: number; // 用户id
      userName?: string; // 用户名
      departmentId?: number; 
  }

export interface Platform_Service_ApprovalFlowModule_DTO_Output_RequestUserOut {
      pageIndex?: number; 
      pageSize?: number; 
      total?: number; 
      data?: Platform_Service_ApprovalFlowModule_DTO_Output_ApprovalUserOut[]; 
  }

export interface Platform_Service_Contract_QuerySystemLogsOutput {
      logs?: RealData_Entity_Data_Platform_SystemLog[]; 
      userCount?: number; // 使用人数
      loginCount?: number; // 使用人次（登陆次数）
      totalCount?: number; // 日志总条数
  }

export interface Platform_Service_Controllers_HelpCenterFeedBackInput {
      content?: string; 
      images?: string[]; 
      contactNumber?: string; 
  }

export interface Platform_Service_Controllers_InfoController_AppStatus {
      status?: string; 
      message?: string; 
      details?: any; 
  }

export interface Platform_Service_Controllers_PageListChose {
      isAll?: boolean; 
      checked?: boolean; 
  }

export interface Platform_Service_Dto_DomainMap_SaveDomainMapData {
      domainUniqueCode?: string; 
      isSelect?: boolean; 
  }

export interface Platform_Service_Dto_DomainMap_SaveDomainMapInput {
      isSelectAll?: boolean; 
      type?: number; 
      accountId?: number; 
      data?: Platform_Service_Dto_DomainMap_SaveDomainMapData[]; 
  }

export interface Platform_Service_Dto_InsightNotify {
      insightId?: number; 
      conditionGroupId?: number; 
      userId?: number; 
  }

export interface System_Int32 {
      key?: string; 
      value?: number; 
  }

export interface Platform_Service_Dto_QueryTaskDetailModel {
      uid?: string; 
      searchCount?: number; 
      hitPatCount?: number; 
      hitVisitCount?: number; 
      timeConsuming?: number; 
      createTime?: string; 
  }

export interface Platform_Service_Dto_QueryTaskModel {
      id?: string; 
      state?: number; 
      stateDesc?: string; 
      searchSource?: number; 
      projectCode?: string; 
      details?: Platform_Service_Dto_QueryTaskDetailModel[]; 
  }

export interface Platform_Service_Dto_QueryTaskProgress {
      queryTasks?: Platform_Service_Dto_QueryTaskModel[]; 
      userId?: number; 
  }

export interface Platform_Service_Dto_SystemConfig_Input_ModalUISettingInput {
      varSelectorWidth?: string; // 变量选择器UI宽度
      source?: number; 
  }

export interface Platform_Service_Dto_SystemConfig_Output_BrowserConfigOutput {
      browserPath?: string; 
      webHost?: string; 
  }

export interface Platform_Service_Dto_SystemConfig_Output_ModalUISettingOutput {
      varSelectorWidth?: string; // 变量选择器UI宽度
      settledComposeType?: string; // 数据导出组合方式一个患者多行:1一个患者一行:2一次就诊一行:3
      source?: number; 
  }

export interface Platform_Service_GlobalFeatureModule_Model_GlobalFeatureItem {
      name?: string; 
      key?: string; 
      enabled?: boolean; 
  }

export interface Platform_Service_GlobalFeatureModule_Model_GlobalFeatureModel {
      adminDownLoad?: boolean; // 管理员下载
      globalFeatureItems?: Platform_Service_GlobalFeatureModule_Model_GlobalFeatureItem[]; 
  }

export interface Platform_Service_Services_InitInput {
      initAnyway?: boolean; // 已经初始化过是否继续初始化
      removeExsit?: boolean; // 强制初始化，删除已经有的角色
  }

export interface RealData_Common_Contract_Common_Result {
      code?: number; 
      msg?: string; 
  }

export interface RealData_Common_Contract_Common_PageResult_1__Common_Contract_Platform_LocationAccessRestrictions_Output_GetLocationOutput {
      code?: number; 
      msg?: string; 
      data?: null; 
  }

export interface RealData_Common_Contract_Common_PageResult_1__Common_Contract_Platform_PlatformRole_Output_RoleOutput {
      code?: number; 
      msg?: string; 
      data?: null; 
  }

export interface RealData_Common_Contract_Common_PageResult_1__Common_Contract_Platform_UserAccount_Output_GetUserAccountSimpleOutput {
      code?: number; 
      msg?: string; 
      data?: null; 
  }

export interface RealData_Entity_Data_Platform_DataClinicScope {
      code?: number; 
      msg?: string; 
      data?: null; 
  }

export interface RealData_Entity_Data_Platform_DataDeptScope {
      code?: number; 
      msg?: string; 
      data?: null; 
  }

export interface RealData_Entity_Data_Platform_ExportContentHistory {
      code?: number; 
      msg?: string; 
      data?: null; 
  }

export interface RealData_Entity_Data_Platform_SystemLog {
      code?: number; 
      msg?: string; 
      data?: null; 
  }

export interface System_Collections_Generic_IEnumerable_1__Common_Contract_Platform_Organization_Dto_GetOrgElementDto {
      code?: number; 
      msg?: string; 
      data?: Common_Contract_Platform_Organization_Dto_GetOrgElementDto[]; 
  }

export interface System_Collections_Generic_IEnumerable_1__Common_Contract_Platform_Privacy_PrivacyOutput {
      code?: number; 
      msg?: string; 
      data?: Common_Contract_Platform_Privacy_PrivacyOutput[]; 
  }

export interface System_Collections_Generic_IEnumerable_1__Common_Contract_Platform_Privacy_UserPrivacyConfig {
      code?: number; 
      msg?: string; 
      data?: Common_Contract_Platform_Privacy_UserPrivacyConfig[]; 
  }

export interface System_Collections_Generic_IEnumerable_1__RealData_Entity_Data_Platform_DataDeptScope {
      code?: number; 
      msg?: string; 
      data?: RealData_Entity_Data_Platform_DataDeptScope[]; 
  }

export interface System_Collections_Generic_IList_1__Common_Contract_Platform_Auth_Output_EndpointAuthorityDto {
      code?: number; 
      msg?: string; 
      data?: Common_Contract_Platform_Auth_Output_EndpointAuthorityDto[]; 
  }

export interface System_Collections_Generic_IList_1__Common_Contract_Platform_Function_Output_FunctionNode {
      code?: number; 
      msg?: string; 
      data?: Common_Contract_Platform_Function_Output_FunctionNode[]; 
  }

export interface System_Collections_Generic_IList_1__Common_Contract_Platform_ProjectUser_Output_ProjectUserOutput {
      code?: number; 
      msg?: string; 
      data?: Common_Contract_Platform_ProjectUser_Output_ProjectUserOutput[]; 
  }

export interface System_Collections_Generic_IList_1__Common_Contract_Platform_Site_Output_SiteOutput {
      code?: number; 
      msg?: string; 
      data?: Common_Contract_Platform_Site_Output_SiteOutput[]; 
  }

export interface System_Collections_Generic_IList_1__Common_Contract_Platform_UiPermission_UiPermissionDto {
      code?: number; 
      msg?: string; 
      data?: Common_Contract_Platform_UiPermission_UiPermissionDto[]; 
  }

export interface System_Collections_Generic_List_1__Common_Contract_Platform_Function_Output_GetHasIntelligentSearchFunctionProjectsOutput {
      code?: number; 
      msg?: string; 
      data?: Common_Contract_Platform_Function_Output_GetHasIntelligentSearchFunctionProjectsOutput[]; 
  }

export interface System_Collections_Generic_List_1__Common_Contract_Platform_Log_Input_GetProjectLogDetailOutput {
      code?: number; 
      msg?: string; 
      data?: Common_Contract_Platform_Log_Input_GetProjectLogDetailOutput[]; 
  }

export interface System_Collections_Generic_List_1__Common_Contract_Platform_Log_Input_ProjectLogHeader {
      code?: number; 
      msg?: string; 
      data?: Common_Contract_Platform_Log_Input_ProjectLogHeader[]; 
  }

export interface System_Collections_Generic_List_1__Common_Contract_Platform_Tenant_LoginHelpCenterFile {
      code?: number; 
      msg?: string; 
      data?: Common_Contract_Platform_Tenant_LoginHelpCenterFile[]; 
  }

export interface System_Collections_Generic_List_1__Platform_Service_ApprovalFlowModule_DTO_Output_ApprovalUserOut {
      code?: number; 
      msg?: string; 
      data?: Platform_Service_ApprovalFlowModule_DTO_Output_ApprovalUserOut[]; 
  }

export interface System_Collections_Generic_List_1__Platform_Service_Controllers_PageListChose {
      code?: number; 
      msg?: string; 
      data?: Platform_Service_Controllers_PageListChose[]; 
  }

export interface System_Collections_Generic_List_1__Platform_Service_Dto_KeyValueDataSource_1__System_Int32 {
      code?: number; 
      msg?: string; 
      data?: System_Int32[]; 
  }

export interface System_Collections_Generic_List_1__Platform_Service_Dto_SystemConfig_Output_BrowserConfigOutput {
      code?: number; 
      msg?: string; 
      data?: Platform_Service_Dto_SystemConfig_Output_BrowserConfigOutput[]; 
  }

export interface System_Object {
      code?: number; 
      msg?: string; 
      data?: null; 
  }

export interface System_String {
      code?: number; 
      msg?: string; 
      data?: string; 
  }

export interface System_String__ {
      code?: number; 
      msg?: string; 
      data?: string[]; 
  }

export interface RealData_Util_Extensions_PrivacyConfigPolicy {
      startIndex?: number; 
      characterCount?: number; 
  }

export interface Synyi_Common_Contract_Result {
      code?: number; 
      msg?: string; 
  }

export interface Synyi_SettingConfig_Dto_PageDto_1__Synyi_SettingConfig_Dto_ConfigHistoryDto {
      code?: number; 
      msg?: string; 
      data?: null; 
  }

export interface Synyi_SettingConfig_Dto_PageDto_1__Synyi_SettingConfig_Dto_SettingListDto {
      code?: number; 
      msg?: string; 
      data?: null; 
  }

export interface Synyi_SettingConfig_Dto_SettingItemDto {
      code?: number; 
      msg?: string; 
      data?: null; 
  }

export interface System_Collections_Generic_List_1__System_String {
      code?: number; 
      msg?: string; 
      data?: string[]; 
  }

export interface Synyi_SettingConfig_Dto_ConfigBackDto {
      id?: number; 
      historyId?: number; 
      isEnvSetting?: boolean; 
  }

export interface Synyi_SettingConfig_Dto_ConfigHistoryDto {
      id?: number; 
      value?: string; 
      updateUserName?: string; 
      updateTime?: string; 
  }

export interface Synyi_SettingConfig_Dto_ConfigSettingBase {
      id?: number; 
      value?: string; 
      isEnvSetting?: boolean; 
  }

export interface Synyi_SettingConfig_Dto_SettingListDto {
      total?: number; 
      lists?: Synyi_SettingConfig_Dto_SettingListDto[]; 
  }

export interface System_IO_Stream {
      canRead?: boolean; 
      canWrite?: boolean; 
      canSeek?: boolean; 
      canTimeout?: boolean; 
      length?: number; 
      position?: number; 
      readTimeout?: number; 
      writeTimeout?: number; 
  }
