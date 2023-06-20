import { DbModule } from '@app/db';
import { Company } from '@app/db/entities/company.entity';
import { Member } from '@app/db/entities/member.entity';
import { Profile } from '@app/db/entities/profile.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';

@Module({
  imports: [DbModule, TypeOrmModule.forFeature([Member, Profile, Company])],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
