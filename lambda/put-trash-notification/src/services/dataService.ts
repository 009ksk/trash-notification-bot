import { TrashScheduleData } from '../types/TrashScheduleDataType';
import { scheduleData } from '../data';
import cronParser from 'cron-parser';
import moment from 'moment';
import 'moment/locale/ja';  // 日本語ロケールをロード

// ロケールを日本語に設定
moment.locale('ja');

export const dateService = {

    getData: (): TrashScheduleData | null => {
        const tomorrow = moment().add(1, 'days').startOf('day');
        for(const trashSchedule of scheduleData.trashSchedules){
            for(const cron of trashSchedule.crons){
                try {
                    const interval = cronParser.parseExpression(cron, { currentDate: new Date() });
                    const nextDate = moment(interval.next().toISOString()).startOf('day');
                    if (tomorrow.isSame(nextDate, 'day')) {
                        const tommorrowString = tomorrow.format('YYYY年MM月DD日 dddd');
                        console.log(`Found trash schedule for ${tommorrowString}`);
                        trashSchedule.text = trashSchedule.text.replace('{date}', tommorrowString);
                        console.log(`Trash schedule: ${JSON.stringify(trashSchedule)}`);
                        return trashSchedule;
                    }
                } 
                catch (error: any) {
                    console.error(`Cron parsing error: ${error.message}`);
                }
            }
        }
        return null;
    }
}