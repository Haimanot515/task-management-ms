import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class TasksController {
  @MessagePattern('get_tasks')
  getTasks() {
    return [
      {
        id: 1,
        title: 'Learn RabbitMQ',
      },
      {
        id: 2,
        title: 'Learn NestJS',
      },
    ];
  }
}