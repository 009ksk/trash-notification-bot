#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { TrashNotificationBotStack } from '../lib/trash-notification-bot-stack';

const app = new cdk.App();
new TrashNotificationBotStack(app, 'SrcStack', {

});