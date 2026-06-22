import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  async sendNotification(
    task: any,
  ) {
    let retryCount = 0;

    while (retryCount < 3) {
      try {
        console.log(
          `Sending notification for ${task.title}`,
        );

        return;
      } catch {
        retryCount++;

        await new Promise(
          (resolve) =>
            setTimeout(
              resolve,
              retryCount * 5000,
            ),
        );
      }
    }

    throw new Error(
      'Retries exhausted',
    );
  }
}