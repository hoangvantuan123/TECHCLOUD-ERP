import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('_ERPCompanies') 
export class Company {
  @PrimaryGeneratedColumn()
  CompanyID: number; 

  @Column({ type: 'varchar', length: 50, unique: true })
  CustomKey: string; 

  @Column({ type: 'varchar', length: 255 })
  CompanyName: string; 

  @Column({ type: 'varchar', length: 255, nullable: true })
  Address: string; 

  @Column({ type: 'varchar', length: 20, nullable: true })
  Phone: string; 

  @Column({ type: 'varchar', length: 100, nullable: true })
  Email: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  Website: string; 

  @CreateDateColumn({ type: 'datetime' })
  CreatedAt: Date;

  @UpdateDateColumn({ type: 'datetime' })
  UpdatedAt: Date; 

}
