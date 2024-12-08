import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    Timestamp,
  } from 'typeorm';

@Entity('_TCAGroups_WEB')
export class TCAGroupsWEB {

    @PrimaryGeneratedColumn()
    Id: number;
  
    @Column({ nullable: true })
    Name: string;

    @Column({ nullable: true })
    Comment: string;
    @Column({  nullable: true })
    ProjectType: string | null;
}
