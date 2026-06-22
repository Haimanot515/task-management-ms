import {
  Controller,
} from '@nestjs/common';

import {
  EventPattern,
  Payload,
  Ctx,
  RmqContext,
} from '@nestjs/microservices';

import { NotificationService }
from './notification.service';

@Controller()
export class NotificationController {
  constructor(
    private readonly
      notificationService:
        NotificationService,
  ) {}

  @EventPattern(
    'task_created',
  )
  async handleTaskCreated(
    @Payload() task: any,
    @Ctx() context: RmqContext,
  ) {
    const channel =
      context.getChannelRef();

    const message =
      context.getMessage();

    try {
      await this
        .notificationService
        .sendNotification(task);

      channel.ack(message);
    } catch {
      channel.nack(
        message,
        false,
        false,
      );
    }
  }
}