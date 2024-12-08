import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('_TCAUser_WEB')
export class TCAUserWEB {

    @Column({ nullable: true })
    CompanySeq: number;

    @PrimaryColumn({ type: 'int' })
    UserSeq: number;

    @Column({ length: 100, nullable: true })
    UserId: string;

    @Column({ type: 'int' })
    UserType: number;

    @Column({ length: 100, nullable: true })
    UserName: string;

    @Column({ nullable: true })
    EmpSeq: number;

    @Column({ nullable: true })
    LoginPwd: string;

    @Column({ nullable: true })
    Password1: string;

    @Column({ nullable: true })
    Password2: string;

    @Column({ nullable: true })
    Password3: string;

    @Column({ nullable: true })
    CustSeq: number;

    @Column({ nullable: true })
    DeptSeq: number;

    @Column({ nullable: true })
    UserSecu: number;

    @Column({ nullable: true })
    LoginStatus: number;

    @Column({ length: 8, nullable: true })
    LoginDate: string;

    @Column({ length: 8, nullable: true })
    PwdChgDate: string;

    @Column({ length: 2000, nullable: true })
    PassHis: string;

    @Column({ length: 50, nullable: true })
    PwdMailAdder: string;

    @Column({ nullable: true })
    LoginFailCnt: number;

    @Column({ length: 1, nullable: true })
    PwdType: string;

    @Column({ nullable: true })
    LoginType: number;

    @Column({ nullable: true })
    ManagementType: number;

    @Column({ nullable: true })
    LastUserSeq: number;

    @Column({ nullable: true })
    LastDateTime: Date;

    @Column({ length: 20, nullable: true })
    Dsn: string;

    @Column({ length: 100, nullable: true })
    Remark: string;

    @Column({ length: 8, nullable: true })
    UserlimitDate: string;

    @Column({ nullable: true })
    LoginFailFirstTime: Date;

    @Column({ nullable: true })
    IsLayoutAdmin: number;

    @Column({ length: 1, nullable: true })
    IsGroupWareUser: string;

    @Column({ nullable: true })
    SMUserType: number;

    @Column({ nullable: true })
    LicenseType: number;


    /* Theem */

    @Column({ default: false })
    CheckPass1: boolean;
    @Column({ default: false })
    StatusAcc: boolean;
    @Column({ nullable: true })
    Status: string;
    @Column({ default: false })
    Active: boolean;
}
