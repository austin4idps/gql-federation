import { DbModule } from '@app/db';
import { Company } from '@app/db/entities/company.entity';
import { Member } from '@app/db/entities/member.entity';
import { Profile } from '@app/db/entities/profile.entity';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberController } from './member.controller';
import { MemberResolver } from './member.resolver';
import { MemberService } from './member.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DbModule,
    TypeOrmModule.forFeature([Member, Profile, Company]),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
  ],
  controllers: [MemberController],
  providers: [MemberService, MemberResolver],
})
export class MemberModule {}
