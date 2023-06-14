import { DbModule } from '@app/db';
import { Member } from '@app/db/entities/src/member.entity';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberController } from './member.controller';
import { MemberService } from './member.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DbModule,
    TypeOrmModule.forFeature([Member])
  ],
  controllers: [MemberController],
  providers: [MemberService],
})
export class MemberModule {}
