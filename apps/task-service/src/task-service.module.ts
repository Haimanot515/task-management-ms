import { Module } from '@nestjs/common';

import {
  ClientsModule,
  Transport,
} from '@nestjs/microservices';

import { TasksService } from './tasks.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name:
          'NOTIFICATION_SERVICE',

      transport: Transport.RMQ,

        options: {
          urls: [
            'amqp://localhost:5672',
          ],

          queue:
            'notification_queue',

          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],

  providers: [TasksService],
})
export class TasksModule {}