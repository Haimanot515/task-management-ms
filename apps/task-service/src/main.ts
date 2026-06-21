import {NestFactory} from '@nestjs/core';
import {Transport} from '@nestjs/microservices';
import {AppModule} from './app.module';
import {RMQ} from '@app/shared/rabbitmq/rabbitmq.constants';

async function bootstrap(){
  const app=await NestFactory.createMicroservice(
    AppModule,
    {
      transport:Transport.RMQ,
      options:{
        urls:[RMQ.URL],
        queue:RMQ.TASK_QUEUE,
        noAck:false,

        queueOptions:{
          durable:true,

          deadLetterExchange:'',
          deadLetterRoutingKey:RMQ.TASK_DLQ,
        },
      },
    },
  );
  app.listen();
}
bootstrap();
