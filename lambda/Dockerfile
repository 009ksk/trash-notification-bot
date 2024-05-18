FROM golang:1.21-alpine3.19 as builder

RUN mkdir /src
WORKDIR /src
COPY . /src

# RUN go get -d -v ./...
# RUN GOOS=linux GOARCH=amd64 go build -ldflags="-s -w" -o /main main.go

# FROM public.ecr.aws/lambda/provided:al2023

# COPY --from=builder /src/main /main

# ENTRYPOINT [ "/usr/local/bin/aws-lambda-rie", "/main" ]
