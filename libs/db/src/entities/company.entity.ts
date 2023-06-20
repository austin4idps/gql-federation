import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Member } from './member.entity';

@Entity({ name: 'company' })
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  taxId: string;

  @Column({ type: 'varchar', length: 100 })
  companyName: string;

  @ManyToMany(() => Member, (m: Member) => m.companies)
  customers: Member[];
}
