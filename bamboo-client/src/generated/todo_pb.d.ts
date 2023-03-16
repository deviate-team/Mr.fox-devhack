import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class GetTodoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetTodoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTodoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTodoRequest): GetTodoRequest.AsObject;
  static serializeBinaryToWriter(message: GetTodoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTodoRequest;
  static deserializeBinaryFromReader(message: GetTodoRequest, reader: jspb.BinaryReader): GetTodoRequest;
}

export namespace GetTodoRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetTodoReply extends jspb.Message {
  getId(): string;
  setId(value: string): GetTodoReply;

  getTitle(): string;
  setTitle(value: string): GetTodoReply;

  getDescription(): string;
  setDescription(value: string): GetTodoReply;

  getDueDate(): string;
  setDueDate(value: string): GetTodoReply;

  getStatus(): string;
  setStatus(value: string): GetTodoReply;

  getPriority(): string;
  setPriority(value: string): GetTodoReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTodoReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetTodoReply): GetTodoReply.AsObject;
  static serializeBinaryToWriter(message: GetTodoReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTodoReply;
  static deserializeBinaryFromReader(message: GetTodoReply, reader: jspb.BinaryReader): GetTodoReply;
}

export namespace GetTodoReply {
  export type AsObject = {
    id: string,
    title: string,
    description: string,
    dueDate: string,
    status: string,
    priority: string,
  }
}

export class GetTodosReply extends jspb.Message {
  getTodosList(): Array<GetTodoReply>;
  setTodosList(value: Array<GetTodoReply>): GetTodosReply;
  clearTodosList(): GetTodosReply;
  addTodos(value?: GetTodoReply, index?: number): GetTodoReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTodosReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetTodosReply): GetTodosReply.AsObject;
  static serializeBinaryToWriter(message: GetTodosReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTodosReply;
  static deserializeBinaryFromReader(message: GetTodosReply, reader: jspb.BinaryReader): GetTodosReply;
}

export namespace GetTodosReply {
  export type AsObject = {
    todosList: Array<GetTodoReply.AsObject>,
  }
}

export class PostTodoRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): PostTodoRequest;

  getDescription(): string;
  setDescription(value: string): PostTodoRequest;

  getDueDate(): string;
  setDueDate(value: string): PostTodoRequest;

  getStatus(): string;
  setStatus(value: string): PostTodoRequest;

  getPriority(): string;
  setPriority(value: string): PostTodoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostTodoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostTodoRequest): PostTodoRequest.AsObject;
  static serializeBinaryToWriter(message: PostTodoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostTodoRequest;
  static deserializeBinaryFromReader(message: PostTodoRequest, reader: jspb.BinaryReader): PostTodoRequest;
}

export namespace PostTodoRequest {
  export type AsObject = {
    title: string,
    description: string,
    dueDate: string,
    status: string,
    priority: string,
  }
}

export class PutTodoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): PutTodoRequest;

  getTitle(): string;
  setTitle(value: string): PutTodoRequest;

  getDescription(): string;
  setDescription(value: string): PutTodoRequest;

  getDueDate(): string;
  setDueDate(value: string): PutTodoRequest;

  getStatus(): string;
  setStatus(value: string): PutTodoRequest;

  getPriority(): string;
  setPriority(value: string): PutTodoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutTodoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutTodoRequest): PutTodoRequest.AsObject;
  static serializeBinaryToWriter(message: PutTodoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutTodoRequest;
  static deserializeBinaryFromReader(message: PutTodoRequest, reader: jspb.BinaryReader): PutTodoRequest;
}

export namespace PutTodoRequest {
  export type AsObject = {
    id: string,
    title: string,
    description: string,
    dueDate: string,
    status: string,
    priority: string,
  }
}

export class DeleteTodoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteTodoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTodoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTodoRequest): DeleteTodoRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTodoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTodoRequest;
  static deserializeBinaryFromReader(message: DeleteTodoRequest, reader: jspb.BinaryReader): DeleteTodoRequest;
}

export namespace DeleteTodoRequest {
  export type AsObject = {
    id: string,
  }
}

