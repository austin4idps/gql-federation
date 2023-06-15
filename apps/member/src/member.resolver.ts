import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CreateUserInput } from './graphql/input/create-member.input';
import { MemberModel } from './graphql/model/member.model';
import { ProfileModel } from './graphql/model/profile.model';
import { MemberService } from './member.service';

@Resolver((of) => MemberModel)
export class MemberResolver {
  constructor(private memberService: MemberService) {}
  @Query(() => MemberModel)
  async getMember(@Args('id') id: string): Promise<MemberModel> {
    return await this.memberService.getUser(id);
  }

  @ResolveField('profile', () => ProfileModel)
  async getPofile(@Parent() member: MemberModel): Promise<ProfileModel> {
    return await this.memberService.getPofile(member.id);
  }

  @Mutation(() => MemberModel)
  async createMember(@Args('input') input: CreateUserInput) {
    return await this.memberService.createUser(input);
  }
}
