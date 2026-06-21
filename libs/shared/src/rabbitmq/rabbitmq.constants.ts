export const RMQ={
    URL:'amqp://localhost:5672',
    TASK_QUEUE:'task_queue',
    NOTIFICATION_QUEUE:'notification_queue',
    TASK_DLQ:'task_dlq',
    PATTERNS:{
        GET_TASKS:'get_tasks',
        TASK_CREATED:'task_created',
    },
};
