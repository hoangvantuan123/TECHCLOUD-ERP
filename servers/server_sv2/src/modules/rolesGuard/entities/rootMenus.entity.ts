import {
    Entity,
    Column,
    PrimaryGeneratedColumn
  } from 'typeorm';

  @Entity('_TCARootMenus_WEB')
  export class TCARootMenusWEB {
  
    @PrimaryGeneratedColumn()
    Id: number;
  
    @Column({ nullable: true })
    Key: string;
  
  
    @Column({ nullable: true })
    Label: string;

    @Column({ nullable: true })
    Icon: string;
  
  
    @Column({ nullable: true })
    Link: string;
  
   

  
    @Column({ default: true, nullable: true})
    Utilities: boolean;
  
  
  
  }
  