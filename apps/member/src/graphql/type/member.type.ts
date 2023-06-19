import { MemberTypeEnum } from '@app/enum';
import { Directive, Field, ObjectType } from '@nestjs/graphql';
import { ProfileType } from './profile.type';

@ObjectType()
@Directive('@key(fields: "id")')
export class MemberType {
  @Field()
  id: string;

  @Field()
  displayName: string;

  @Field(() => MemberTypeEnum)
  memberType: MemberTypeEnum;

  @Field({ nullable: true })
  profile: ProfileType;
}
