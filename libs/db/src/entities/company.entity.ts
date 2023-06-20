import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Member } from './member.entity';

@Entity({ name: 'company' })
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  taxId?: string;

  @Column({ type: 'varchar', length: 100 })
  companyName: string;

  @Column({ type: 'varchar', length: 100 })
  phoneNumber: string;

  @OneToMany(() => Member, (m: Member) => m.company)
  contact?: Member[];

  @ManyToMany(() => Member, (m: Member) => m.companies)
  customers?: Member[];
}
