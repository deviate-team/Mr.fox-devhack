import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { TodoClient as _todo_TodoClient, TodoDefinition as _todo_TodoDefinition } from './todo/Todo';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Empty: MessageTypeDefinition
    }
  }
  todo: {
    DeleteTodoRequest: MessageTypeDefinition
    GetTodoReply: MessageTypeDefinition
    GetTodoRequest: MessageTypeDefinition
    GetTodosReply: MessageTypeDefinition
    PostTodoRequest: MessageTypeDefinition
    PutTodoRequest: MessageTypeDefinition
    Todo: SubtypeConstructor<typeof grpc.Client, _todo_TodoClient> & { service: _todo_TodoDefinition }
  }
}

