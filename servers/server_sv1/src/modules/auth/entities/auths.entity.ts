import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('_TCAUser_WEB')
export class TCAUserWEB {

    @Column({  nullable: true })
    CompanySeq: number | null;

    @PrimaryColumn({ type: 'int' })
    UserSeq: number;

    @Column({  length: 100, nullable: true })
    UserId: string | null;

    @Column({ type: 'int' })
    UserType: number;

    @Column({  length: 100, nullable: true })
    UserName: string | null;

    @Column({  nullable: true })
    EmpSeq: number | null;

    @Column({  nullable: true })
    LoginPwd: string | null;

    @Column({   nullable: true })
    Password1: string | null;

    @Column({   nullable: true })
    Password2: string | null;

    @Column({   nullable: true })
    Password3: string | null;

    @Column({  nullable: true })
    CustSeq: number | null;

    @Column({  nullable: true })
    DeptSeq: number | null;

    @Column({  nullable: true })
    UserSecu: number | null;

    @Column({  nullable: true })
    LoginStatus: number | null;

    @Column({  length: 8, nullable: true })
    LoginDate: string | null;

    @Column({  length: 8, nullable: true })
    PwdChgDate: string | null;

    @Column({  length: 2000, nullable: true })
    PassHis: string | null;

    @Column({  length: 50, nullable: true })
    PwdMailAdder: string | null;

    @Column({  nullable: true })
    LoginFailCnt: number | null;

    @Column({  length: 1, nullable: true })
    PwdType: string | null;

    @Column({  nullable: true })
    LoginType: number | null;

    @Column({  nullable: true })
    ManagementType: number | null;

    @Column({  nullable: true })
    LastUserSeq: number | null;

    @Column({  nullable: true })
    LastDateTime: Date | null;

    @Column({  length: 20, nullable: true })
    Dsn: string | null;

    @Column({  length: 100, nullable: true })
    Remark: string | null;

    @Column({  length: 8, nullable: true })
    UserlimitDate: string | null;

    @Column({  nullable: true })
    LoginFailFirstTime: Date | null;

    @Column({  nullable: true })
    IsLayoutAdmin: number | null;

    @Column({  length: 1, nullable: true })
    IsGroupWareUser: string | null;

    @Column({  nullable: true })
    SMUserType: number | null;

    @Column({  nullable: true })
    LicenseType: number | null;
}
