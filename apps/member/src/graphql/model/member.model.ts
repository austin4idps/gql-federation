import { MemberTypeEnum } from '@app/enum';
import { Directive, Field, ObjectType } from '@nestjs/graphql';
import { ProfileModel } from './profile.model';

@ObjectType()
@Directive('@key(fields: "id")')
export class MemberModel {
  @Field()
  id: string;

  @Field()
  displayName: string;

  @Field(() => MemberTypeEnum)
  memberType: MemberTypeEnum;

  @Field({ nullable: true })
  profile: ProfileModel;
}
