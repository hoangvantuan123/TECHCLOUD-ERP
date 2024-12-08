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