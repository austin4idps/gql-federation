import { MemberTypeEnum } from '@app/enum';
import { Field, InputType } from '@nestjs/graphql';
import { CreateProfileInput } from './create-profile.input';

@InputType()
export class CreateUserInput {
  @Field()
  displayName: string;

  @Field(() => MemberTypeEnum)
  memberType: MemberTypeEnum;

  @Field({ nullable: true })
  profile?: CreateProfileInput;
}
