import { Module } from '@nestjs/common';
import { SqsModule } from '@ssut/nestjs-sqs';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    SqsModule.register({
      consumers: [], // Reference: https://www.npmjs.com/package/@ssut/nestjs-sqs
      producers: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
