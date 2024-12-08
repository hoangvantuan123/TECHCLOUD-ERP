```
export const sqlServerITMV20240117: TypeOrmModuleOptions = {
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'sa',
  password: 'YourStrongPassword!',
  database: 'ITMV20240117',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  logging: true,
  cache: true,
  extra: {
    trustServerCertificate: true,
    encrypt: false,
    connectionTimeout: 5000,
    max: 100,
    min: 10,
    idleTimeoutMillis: 30000,
  },
  maxQueryExecutionTime: 1000
}


```



export const sqlServerITMV20240117: TypeOrmModuleOptions = {
  type: 'mssql',
  host: '192.168.35.150',
  port: 14233,
  username: 'genuine',
  password: 'Itmv209#',
  database: 'ITMV20240117',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: false,
  logging: true,
  cache: true,
  extra: {
    trustServerCertificate: true,
    encrypt: false,
    connectionTimeout: 5000,
    max: 100,
    min: 10,
    idleTimeoutMillis: 30000,
  },
  maxQueryExecutionTime: 1000
}
````



WITH GroupIDs AS (
    SELECT DISTINCT GroupId 
    FROM _TCARolesUsers_WEB 
    WHERE UserId = 'VM32402882'
)
SELECT 
    r.*,
    m.[Key] AS MenuKey,  -- from _TCAMenus_WEB
    m.Label AS MenuLabel,  
    m.Link AS MenuLink,
    m.Type AS MenuType,
 --------------------------------------------------------------
    rm.[Key] AS RootMenuKey,  -- from _TCARootMenus_WEB
    rm.Label AS RootMenuLabel,  
    rm.Icon AS RootMenuIcon, 
    rm.Link AS RootMenuLink, 
    rm.Utilities AS RootMenuUtilities  
FROM _TCARolesUsers_WEB r
LEFT JOIN _TCAMenus_WEB m 
    ON r.MenuId = m.Id AND r.Type = 'menu'
LEFT JOIN _TCARootMenus_WEB rm 
    ON r.RootMenuId = rm.Id AND r.Type = 'rootmenu'
WHERE r.GroupId IN (SELECT GroupId FROM GroupIDs)
AND r.Type IN ('rootmenu', 'menu');

````


 EXEC GetFilteredTCAUserWEB 
        @UserId = N'',
        @UserName = N'';





 --  
/******************************************        
 HOANG VAN TUAN VM32402882    
 *******************************************/        
  -- SP lay du lieu user web   
CREATE PROCEDURE GetFilteredTCAUserWEB  
    @UserId NVARCHAR(50) = NULL,    
    @UserName NVARCHAR(100) = NULL  
AS  
BEGIN  
    SELECT   
        CompanySeq,  
        UserSeq,  
        UserId,  
        UserType,  
        UserName,  
        EmpSeq,  
        LoginPwd,  
        CustSeq,  
        DeptSeq,  
        UserSecu,  
        LoginStatus,  
        LoginDate,  
        PwdChgDate,  
        LoginFailCnt,  
        PwdType,  
        LoginType,  
        ManagementType,  
        LastUserSeq,  
        LastDateTime,  
        Dsn,  
        Remark,  
        UserlimitDate,  
        LoginFailFirstTime,  
        IsLayoutAdmin,  
        IsGroupWareUser,  
        SMUserType,  
        LicenseType  
    FROM   
        _TCAUser_WEB  
    WHERE  
        (@UserId IS NULL OR CAST(UserId AS NVARCHAR(50)) LIKE '%' + @UserId + '%') AND  
        (@UserName IS NULL OR UserName LIKE '%' + @UserName + '%')  
    ORDER BY EmpSeq DESC  
    -- OFFSET 0 ROWS FETCH NEXT 50 ROWS ONLY;    
END;  