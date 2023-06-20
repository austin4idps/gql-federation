import { DbModule } from '@app/db';
import { Company } from '@app/db/entities/company.entity';
import { Member } from '@app/db/entities/member.entity';
import { Profile } from '@app/db/entities/profile.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyService } from './company.service';
import { CompanyResolver } from './company.resolver';

@Module({
  imports: [DbModule, TypeOrmModule.forFeature([Member, Profile, Company])],
  controllers: [CompanyResolver],
  providers: [CompanyService],
})
export class CompanyModule {}
