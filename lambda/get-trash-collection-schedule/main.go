package main

import (
	"context"
	"fmt"
	"github.com/aws/aws-lambda-go/lambda"
)

// func handler(ctx context.Context, request events.APIGatewayProxyRequest) (response events.APIGatewayProxyResponse, err error){
func handler(ctx context.Context, request string) (string, error){
	fmt.Println("Hello World.")
	fmt.Println("request: " request)
	return "Hello, World!", nil
}

func main (){
	lambda.Start(handler)
}