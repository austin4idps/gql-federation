import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CreateUserInput } from './graphql/input/create-member.input';
import { MemberType } from './graphql/type/member.type';
import { ProfileType } from './graphql/type/profile.type';
import { MemberService } from './member.service';

@Resolver((of) => MemberType)
export class MemberResolver {
  constructor(private memberService: MemberService) {}
  @Query(() => MemberType)
  async member(@Args('id') id: string): Promise<MemberType> {
    return await this.memberService.getUser(id);
  }

  @ResolveField('profile', () => ProfileType)
  async pofile(@Parent() member: MemberType): Promise<ProfileType> {
    return await this.memberService.getPofile(member.id);
  }

  @Mutation(() => MemberType)
  async createMember(@Args('input') input: CreateUserInput) {
    return await this.memberService.createUser(input);
  }
}
