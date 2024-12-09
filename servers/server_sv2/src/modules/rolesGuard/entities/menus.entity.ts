import {
  Entity,
  Column,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity('_ERPMenus_WEB')
export class TCAMenusWEB {

  @PrimaryGeneratedColumn()
  Id: number;

  /* Menu Ông */
  @Column({ nullable: true })
  MenuRootId: number;


  /* Menu Cha */
  @Column({ nullable: true })
  MenuSubRootId: number;

  @Column({ nullable: true })
  Key: string;


  @Column({ nullable: true })
  Label: string;


  @Column({ nullable: true })
  Link: string;

  @Column({ nullable: true })
  Type: string;






}
