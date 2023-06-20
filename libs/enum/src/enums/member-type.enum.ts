import { registerEnumType } from '@nestjs/graphql';

export enum MemberTypeEnum {
  Admin = 'Admin',
  Customer = 'Customer',
  Vender = 'Vendor',
}

registerEnumType(MemberTypeEnum, {
  name: 'MemberTypeEnum',
});
