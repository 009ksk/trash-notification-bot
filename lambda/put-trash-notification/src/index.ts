import { Context } from 'aws-lambda';
import { LambdaRequestType, LmabdaResponseType } from './types/LambdaType';
import { validateInput } from './services/validationService';
import { responseService } from './services/responseService';
import { dateService } from './services/dataService';
import { TemplateMessageClass } from './models/ButtonMessageApi';


export const handler = async (event: LambdaRequestType, _: Context): Promise<LmabdaResponseType> => {
    // Verify event
    try{
        if (!validateInput(event)) responseService.badRequest('Invalid event');
    
        const calendarUrl = process.env.CALENDAR_URL || '';
        const separationUrl = process.env.SEPARATION_URL || '';
        const channelAccessToken = process.env.CHANNEL_ACCESS_TOKEN || '';
        const groupId = process.env.GROUP_ID || '';
        
        const todayData = dateService.getData();
        if (!todayData) return responseService.success('No data found');
    
        const messageApi = new TemplateMessageClass(todayData!, calendarUrl, separationUrl);
        await messageApi.sendLineMessage(channelAccessToken, groupId);
    
        return responseService.success('Success');
    }
    catch(error: any){
        return responseService.error(`Error: ${error.message}`);
    }
};
