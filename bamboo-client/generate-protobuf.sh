PROTO_DIR=./src/generated

# Generate Types
npx proto-loader-gen-types --longs=String --enums=String \
  --defaults --oneofs --grpcLib=@grpc/grpc-js \
  --outDir=${PROTO_DIR} proto/*.proto

# Generate JS and TS code
protoc -I=./proto ./proto/*.proto \
  --js_out=import_style=es6,binary:${PROTO_DIR} \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:${PROTO_DIR}