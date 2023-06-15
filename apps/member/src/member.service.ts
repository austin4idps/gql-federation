import { Member } from '@app/db/entities/src/member.entity';
import { Profile } from '@app/db/entities/src/profile.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './graphql/input/create-member.input';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private memberRepo: Repository<Member>,
    @InjectRepository(Profile)
    private profileRepo: Repository<Profile>,
  ) {}

  async getUser(id: string) {
    const existMember = await this.memberRepo
      .createQueryBuilder('m')
      .where('m.id = :id', { id })
      .getOne();
    return { ...existMember };
  }

  async getPofile(id: string) {
    const existProfile = await this.profileRepo
      .createQueryBuilder('p')
      .where('p.memberId = :id', { id })
      .getOne();

    return existProfile;
  }

  async createUser(input: CreateUserInput) {
    const newMember = await this.memberRepo.save(input);

    const newMemberProfile = new Profile();
    newMemberProfile.firstName = input.profile.firstName;
    newMemberProfile.lastName = input.profile.lastName;
    newMemberProfile.email = input.profile.email;
    newMemberProfile.member = newMember;

    await this.profileRepo.save(newMemberProfile);

    return { ...newMember };
  }
}
