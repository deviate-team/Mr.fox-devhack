// Original file: proto/authentication.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AuthenticateResponse as _authentication_AuthenticateResponse, AuthenticateResponse__Output as _authentication_AuthenticateResponse__Output } from '../authentication/AuthenticateResponse';
import type { LoginRequest as _authentication_LoginRequest, LoginRequest__Output as _authentication_LoginRequest__Output } from '../authentication/LoginRequest';
import type { RegisterRequest as _authentication_RegisterRequest, RegisterRequest__Output as _authentication_RegisterRequest__Output } from '../authentication/RegisterRequest';

export interface AuthenticationClient extends grpc.Client {
  Login(argument: _authentication_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authentication_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _authentication_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authentication_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _authentication_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authentication_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _authentication_LoginRequest, callback: grpc.requestCallback<_authentication_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _authentication_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authentication_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _authentication_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authentication_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _authentication_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authentication_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _authentication_LoginRequest, callback: grpc.requestCallback<_authentication_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  
  Register(argument: _authentication_RegisterRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authentication_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _authentication_RegisterRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authentication_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _authentication_RegisterRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authentication_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _authentication_RegisterRequest, callback: grpc.requestCallback<_authentication_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _authentication_RegisterRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authentication_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _authentication_RegisterRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authentication_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _authentication_RegisterRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authentication_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _authentication_RegisterRequest, callback: grpc.requestCallback<_authentication_AuthenticateResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthenticationHandlers extends grpc.UntypedServiceImplementation {
  Login: grpc.handleUnaryCall<_authentication_LoginRequest__Output, _authentication_AuthenticateResponse>;
  
  Register: grpc.handleUnaryCall<_authentication_RegisterRequest__Output, _authentication_AuthenticateResponse>;
  
}

export interface AuthenticationDefinition extends grpc.ServiceDefinition {
  Login: MethodDefinition<_authentication_LoginRequest, _authentication_AuthenticateResponse, _authentication_LoginRequest__Output, _authentication_AuthenticateResponse__Output>
  Register: MethodDefinition<_authentication_RegisterRequest, _authentication_AuthenticateResponse, _authentication_RegisterRequest__Output, _authentication_AuthenticateResponse__Output>
}
