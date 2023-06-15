import { Controller, Get } from '@nestjs/common';
import { MemberService } from './member.service';

@Controller()
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get()
  getHealthCheck(): string {
    return `I'm Alive`;
  }
}
