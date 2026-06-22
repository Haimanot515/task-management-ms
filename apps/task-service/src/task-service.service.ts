import {
  Inject,
  Injectable,
} from '@nestjs/common';

import {
  ClientProxy,
} from '@nestjs/microservices';

@Injectable()
export class TasksService {
  constructor(
    @Inject(
      'NOTIFICATION_SERVICE',
    )
    private readonly
      notificationClient:
        ClientProxy,
  ) {}

  async createTask(dto: any) {
    const task = {
      id: Date.now(),
      title: dto.title,
    };

    this.notificationClient.emit(
      'task_created',
      task,
    );

    return task;
  }
}