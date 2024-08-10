import axios from 'axios';
import { TrashScheduleData } from '../types/TrashScheduleDataType';

type UriAction = {
  type: 'uri';
  label: string;
  uri: string;
};

type ButtonsTemplate = {
  type: 'buttons';
  thumbnailImageUrl: string;
  imageAspectRatio: 'rectangle' | 'square';
  imageSize: 'cover' | 'contain';
  imageBackgroundColor: string;
  title: string;
  text: string;
  actions: UriAction[];
};

type TemplateMessage = {
  type: 'template';
  altText: string;
  template: ButtonsTemplate;
};

export class TemplateMessageClass implements TemplateMessage {
  type: 'template';
  altText: string;
  template: ButtonsTemplate;

  constructor(
    scheduleData: TrashScheduleData,
    calendarUri: string,
    sortingUri: string
  ) {
    this.type = 'template';
    this.altText = scheduleData.altText;
    this.template = {
      type: 'buttons',
      thumbnailImageUrl: scheduleData.thumbnailImageUrl,
      imageAspectRatio: 'square',
      imageSize: 'cover',
      imageBackgroundColor: '#FFFFFF',
      title: scheduleData.title,
      text: scheduleData.text,
      actions: [
        {
          type: 'uri',
          label: 'カレンダー',
          uri: calendarUri
        },
        {
          type: 'uri',
          label: '分別',
          uri: sortingUri
        }
      ]
    };
  }

  // Line Messaging APIを呼び出すメソッド
  async sendLineMessage(channelAccessToken: string, userId: string): Promise<void> {
    const url = 'https://api.line.me/v2/bot/message/push';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${channelAccessToken}`
    };
    const data = {
      to: userId,
      messages: [this]
    };
    console.log(data);
    try {
      const response = await axios.post(url, data, { headers });
      console.log('Message sent:', response.data);
    } catch (error: any) {
      console.error('Error sending message:', error.response ? error.response.data : error.message);
    }
  }
}
