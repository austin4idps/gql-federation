import { MemberTypeEnum } from '@app/enum';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Company } from './company.entity';
import { Profile } from './profile.entity';

@Entity({ name: 'member' })
export class Member {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  displayName: string;

  @Column({ type: 'enum', enum: MemberTypeEnum })
  memberType: MemberTypeEnum;

  @OneToOne(() => Profile)
  // @JoinColumn()
  profile: Profile;

  @ManyToOne(() => Company, (c: Company) => c.contact)
  @JoinColumn()
  company?: Company;

  @ManyToMany(() => Company, (c: Company) => c.customers)
  @JoinTable({
    name: 'companyCustomer', // table name for the junction table of this relation
    joinColumn: {
      name: 'memberId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'companyId',
      referencedColumnName: 'id',
    },
  })
  companies?: Company[];
}
