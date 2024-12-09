import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  Timestamp,
} from 'typeorm';

@Entity('_ERPRolesUsers_WEB')
export class TCARolesUsersWEB {

  @PrimaryGeneratedColumn()
  Id: number;

  @Column({ default: false })
  View: boolean;

  @Column({ default: false })
  Edit: boolean;

  @Column({ default: false })
  Create: boolean;

  @Column({ default: false })
  Delete: boolean;

  @Column({ nullable: true })
  RootMenuId: number;

  @Column({ nullable: true })
  MenuId: number;

  @Column({ nullable: true })
  GroupId: number;

  @Column({ nullable: true })
  UserId: string;

  @Column({ nullable: true })
  Type: string;

  @Column({ nullable: true })
  Name: string;




}
