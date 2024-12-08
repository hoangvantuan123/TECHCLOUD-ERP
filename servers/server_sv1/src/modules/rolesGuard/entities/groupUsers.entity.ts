import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    Timestamp,
  } from 'typeorm';

@Entity('_TCAGroupUsers_WEB')
export class TCAGroupUsersWEB {

    @PrimaryGeneratedColumn()
    Id: number;
  
    @Column({ nullable: false })
    Name: string;
   
    @Column({ nullable: true })
    EmpSeq: number | null;

    @Column({ nullable: true })
    UserSeq: number;

    @Column({  nullable: true })
    UserId: string | null;

    @Column({ nullable: true })
    GroupId: number;

    @Column({ nullable: true })
    ProjectType: string | null;

}
