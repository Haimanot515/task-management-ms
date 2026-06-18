import { Module } from '@nestjs/common';
import { ApiGatwayController } from './api-gatway.controller';
import { ApiGatwayService } from './api-gatway.service';

@Module({
  imports: [],
  controllers: [ApiGatwayController],
  providers: [ApiGatwayService],
})
export class ApiGatwayModule {}
