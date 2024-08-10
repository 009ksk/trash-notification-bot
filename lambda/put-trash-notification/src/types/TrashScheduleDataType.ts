export interface TrashScheduleData {
    altText: string;
    thumbnailImageUrl: string;
    title: string;
    text: string;
    crons: string[];
}

export interface TrashSchedule {
    trashSchedules: TrashScheduleData[];
}