import * as cdk from 'aws-cdk-lib';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as ecr from 'aws-cdk-lib/aws-ecr'
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class TrashNotificationBotStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const ecrRepository = ecr.Repository.fromRepositoryName(this, 'EcrRepository', '');

    const getTrashCollectionScheduleLambda = new lambda.Function(this, 'GetTrashCollectionScheduleLambda', {
      code: lambda.Code.fromEcrImage(ecrRepository, {
        tagOrDigest: 'latest'
      }),
      handler: lambda.Handler.FROM_IMAGE,
      runtime: lambda.Runtime.FROM_IMAGE,
    });
    const  api = new apigw.RestApi(this, 'TrashNotificationBotApi', {
      restApiName: 'TrashNotificationBotApi',
      description: 'TrashNotificationBotApi'
    });
    const trashPickupScheduleResource = api.root.addResource('trash-collection-schedule');
    trashPickupScheduleResource.addMethod('POST');
    trashPickupScheduleResource.addMethod('GET');
    const bucket = new s3.Bucket(this, 'trash-notification-bot-bucket');
  }
}
