import {
  Entity,
  Column,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity('_TCAMenus_WEB')
export class TCAMenusWEB {

  @PrimaryGeneratedColumn()
  Id: number;

  /* Menu Ông */
  @Column({ nullable: true })
  MenuRootId: string;
  /* Menu Cha */
  @Column({ nullable: true })
  MenuSubRootId: string;

  @Column({ nullable: true })
  Key: string;


  @Column({ nullable: true })
  Label: string;


  @Column({ nullable: true })
  Link: string;

  @Column({ nullable: true })
  Type: string;


  @Column({  nullable: true })
  ProjectType: string | null;




}
