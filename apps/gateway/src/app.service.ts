import { Member } from '@app/db/entities/src/member.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Member)
    private memberRepo: Repository<Member>
  ){}
  async getHello()  {
    return await this.memberRepo.find()
  }
}
