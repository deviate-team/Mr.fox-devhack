# Mr.fox devhack

To-do list application that allows users to create, edit, and delete tasks, set due dates and reminders, and categorize tasks into different lists.

Database: \* + Redis

Programming languages: C# + Javascript/Typescript

API communication: REST API or GRPC

# How to run

```bash
docker-compose -f ./bamboo-grpc/docker-compose.yaml up -d
cd bamboo-envoy
docker build -t bamboo-envoy -f . .
docker run -d -p 8080:8080 --link bamboo-grpc:bamboo-grpc --net=bamboo-grpc_bamboo bamboo-envoy 
cd ..
cd bamboo-client
```

> client host: http://localhost:3000


# How to submit

1. Fork this repository
2. Develop the software on a forked repository
3. Create PR with your team information [Create PR](https://github.com/devmountaintechfest/Mr.fox-devhack/pulls)

# Q&A

[Create Issues](https://github.com/devmountaintechfest/Mr.fox-devhack/issues)
