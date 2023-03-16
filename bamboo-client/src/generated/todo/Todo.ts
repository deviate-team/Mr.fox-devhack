// Original file: proto/todo.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DeleteTodoRequest as _todo_DeleteTodoRequest, DeleteTodoRequest__Output as _todo_DeleteTodoRequest__Output } from '../todo/DeleteTodoRequest';
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../google/protobuf/Empty';
import type { GetTodoReply as _todo_GetTodoReply, GetTodoReply__Output as _todo_GetTodoReply__Output } from '../todo/GetTodoReply';
import type { GetTodoRequest as _todo_GetTodoRequest, GetTodoRequest__Output as _todo_GetTodoRequest__Output } from '../todo/GetTodoRequest';
import type { GetTodosReply as _todo_GetTodosReply, GetTodosReply__Output as _todo_GetTodosReply__Output } from '../todo/GetTodosReply';
import type { PostTodoRequest as _todo_PostTodoRequest, PostTodoRequest__Output as _todo_PostTodoRequest__Output } from '../todo/PostTodoRequest';
import type { PutTodoRequest as _todo_PutTodoRequest, PutTodoRequest__Output as _todo_PutTodoRequest__Output } from '../todo/PutTodoRequest';

export interface TodoClient extends grpc.Client {
  Delete(argument: _todo_DeleteTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Delete(argument: _todo_DeleteTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Delete(argument: _todo_DeleteTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Delete(argument: _todo_DeleteTodoRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  delete(argument: _todo_DeleteTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  delete(argument: _todo_DeleteTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  delete(argument: _todo_DeleteTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  delete(argument: _todo_DeleteTodoRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  Get(argument: _todo_GetTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_GetTodoReply__Output>): grpc.ClientUnaryCall;
  Get(argument: _todo_GetTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_GetTodoReply__Output>): grpc.ClientUnaryCall;
  Get(argument: _todo_GetTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_GetTodoReply__Output>): grpc.ClientUnaryCall;
  Get(argument: _todo_GetTodoRequest, callback: grpc.requestCallback<_todo_GetTodoReply__Output>): grpc.ClientUnaryCall;
  get(argument: _todo_GetTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_GetTodoReply__Output>): grpc.ClientUnaryCall;
  get(argument: _todo_GetTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_GetTodoReply__Output>): grpc.ClientUnaryCall;
  get(argument: _todo_GetTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_GetTodoReply__Output>): grpc.ClientUnaryCall;
  get(argument: _todo_GetTodoRequest, callback: grpc.requestCallback<_todo_GetTodoReply__Output>): grpc.ClientUnaryCall;
  
  GetAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_GetTodosReply__Output>): grpc.ClientUnaryCall;
  GetAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_GetTodosReply__Output>): grpc.ClientUnaryCall;
  GetAll(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_GetTodosReply__Output>): grpc.ClientUnaryCall;
  GetAll(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_todo_GetTodosReply__Output>): grpc.ClientUnaryCall;
  getAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_GetTodosReply__Output>): grpc.ClientUnaryCall;
  getAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_GetTodosReply__Output>): grpc.ClientUnaryCall;
  getAll(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_GetTodosReply__Output>): grpc.ClientUnaryCall;
  getAll(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_todo_GetTodosReply__Output>): grpc.ClientUnaryCall;
  
  GetByUserId(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_GetTodosReply__Output>): grpc.ClientUnaryCall;
  GetByUserId(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_GetTodosReply__Output>): grpc.ClientUnaryCall;
  GetByUserId(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_GetTodosReply__Output>): grpc.ClientUnaryCall;
  GetByUserId(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_todo_GetTodosReply__Output>): grpc.ClientUnaryCall;
  getByUserId(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_GetTodosReply__Output>): grpc.ClientUnaryCall;
  getByUserId(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_GetTodosReply__Output>): grpc.ClientUnaryCall;
  getByUserId(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_GetTodosReply__Output>): grpc.ClientUnaryCall;
  getByUserId(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_todo_GetTodosReply__Output>): grpc.ClientUnaryCall;
  
  Post(argument: _todo_PostTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Post(argument: _todo_PostTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Post(argument: _todo_PostTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Post(argument: _todo_PostTodoRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  post(argument: _todo_PostTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  post(argument: _todo_PostTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  post(argument: _todo_PostTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  post(argument: _todo_PostTodoRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  Put(argument: _todo_PutTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Put(argument: _todo_PutTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Put(argument: _todo_PutTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Put(argument: _todo_PutTodoRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  put(argument: _todo_PutTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  put(argument: _todo_PutTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  put(argument: _todo_PutTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  put(argument: _todo_PutTodoRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
}

export interface TodoHandlers extends grpc.UntypedServiceImplementation {
  Delete: grpc.handleUnaryCall<_todo_DeleteTodoRequest__Output, _google_protobuf_Empty>;
  
  Get: grpc.handleUnaryCall<_todo_GetTodoRequest__Output, _todo_GetTodoReply>;
  
  GetAll: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _todo_GetTodosReply>;
  
  GetByUserId: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _todo_GetTodosReply>;
  
  Post: grpc.handleUnaryCall<_todo_PostTodoRequest__Output, _google_protobuf_Empty>;
  
  Put: grpc.handleUnaryCall<_todo_PutTodoRequest__Output, _google_protobuf_Empty>;
  
}

export interface TodoDefinition extends grpc.ServiceDefinition {
  Delete: MethodDefinition<_todo_DeleteTodoRequest, _google_protobuf_Empty, _todo_DeleteTodoRequest__Output, _google_protobuf_Empty__Output>
  Get: MethodDefinition<_todo_GetTodoRequest, _todo_GetTodoReply, _todo_GetTodoRequest__Output, _todo_GetTodoReply__Output>
  GetAll: MethodDefinition<_google_protobuf_Empty, _todo_GetTodosReply, _google_protobuf_Empty__Output, _todo_GetTodosReply__Output>
  GetByUserId: MethodDefinition<_google_protobuf_Empty, _todo_GetTodosReply, _google_protobuf_Empty__Output, _todo_GetTodosReply__Output>
  Post: MethodDefinition<_todo_PostTodoRequest, _google_protobuf_Empty, _todo_PostTodoRequest__Output, _google_protobuf_Empty__Output>
  Put: MethodDefinition<_todo_PutTodoRequest, _google_protobuf_Empty, _todo_PutTodoRequest__Output, _google_protobuf_Empty__Output>
}
