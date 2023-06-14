import { DbModule } from '@app/db';
import { Member } from '@app/db/entities/src/member.entity';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  DbModule,
  TypeOrmModule.forFeature([Member])
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
