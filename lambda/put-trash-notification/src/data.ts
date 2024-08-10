import { TrashSchedule } from './types/TrashScheduleDataType'

export const scheduleData: TrashSchedule =
{
  trashSchedules: [
    {
      altText: "明日は燃えるゴミの日です。",
      thumbnailImageUrl : "https://placehold.jp/A9C89D/ffffff/1024x1024.jpg?text=%E7%87%83%E3%81%88%E3%82%8B%E3%82%B4%E3%83%9F",
      title: "燃えるゴミ",
      text: "{date} は 燃えるゴミの日です。",
      crons: ["0 0 * * 2,5"]
    },
    {
      altText: "明日はプラスチックごみの日です。",
      thumbnailImageUrl : "https://placehold.jp/E8C0D2/ffffff/1024x1024.jpg?text=%E3%83%97%E3%83%A9%E3%82%B9%E3%83%81%E3%83%83%E3%82%AF",
      title: "プラスチック",
      text: "{date} は プラスチックゴミの日です。",
      crons: ["0 0 * * 1"]
    },
    {
      altText: "明日は燃やせないゴミの日です。 ",
      thumbnailImageUrl : "https://placehold.jp/6FD0F6/ffffff/1024x1024.jpg?text=%E7%87%83%E3%82%84%E3%81%9B%E3%81%AA%E3%81%84%E3%82%B4%E3%83%9F",
      title: "燃やせないゴミ",
      text: "{date} は 燃やせないゴミの日です。",
      crons: ["0 0 * * 3#2"]
    },
    {
      altText: "明日は有害ゴミの日です。",
      thumbnailImageUrl : "https://placehold.jp/FFF686/ffffff/1024x1024.jpg?text=%E6%9C%89%E5%AE%B3%E3%82%B4%E3%83%9F",
      title: "有害ゴミ",
      text: "{date} は 有害ゴミの日です。",
      crons: [
        "0 9 27 6 * 2024",
        "0 9 24 10 * 2024",
        "0 9 27 2 * 2025"
      ]
    },
    {
      altText: "明日は資源ゴミA（紙類）の日です。",
      thumbnailImageUrl : "https://placehold.jp/E2B796/ffffff/1024x1024.jpg?text=%E8%B3%87%E6%BA%90%E3%82%B4%E3%83%9FA",
      title: "資源ゴミA",
      text: "{date} は 資源ゴミA（紙類）の日です。",
      crons: [
        "0 0 * * 3#1",
        "0 0 * * 3#3",
      ]
    },
    {
      altText: "明日は資源資源ごみB（かん・びん・ペットボトル・衣類）の日です。",
      thumbnailImageUrl : "https://placehold.jp/CDAA99/ffffff/1024x1024.jpg?text=%E8%B3%87%E6%BA%90%E3%82%B4%E3%83%9FB",
      title: "資源ゴミB",
      text: "{date} は 資源資源ごみB（かん・びん・ペットボトル・衣類）の日です。",
      crons: [
        "0 0 * * 4#1",
        "0 0 * * 4#3",
      ]
    }
  ]
}
