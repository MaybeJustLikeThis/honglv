const mock = [
  {
    url: "/api/attraction/getAllAttractions",
    method: "get",
    response: () => {
      return {
        status: 200,
        message: "success",
        data: [
          {
            id: 1,
            name: "角子崖",
            decs: "绝美大片打卡地",
            data: "2022-06-15 18:18:05",
            views: 15,
          },
          {
            id: 2,
            name: "吕梁山",
            decs: "四万万人齐蹈厉，同心同德一戎衣",
            data: "2021-02-24 08:20:00",
            views: 18,
          },
          {
            id: 3,
            name: "红豆山庄",
            decs: "大型高端生态恢复示范园",
            data: "2017-02-20 17:38:00",
            views: 16,
          },
          {
            id: 4,
            name: "千佛寺",
            decs: "最富盛名的千年古刹",
            data: "2023-07-14 16:17:00",
            views: 13,
          },
          {
            id: 5,
            name: "古交晋绥八分区(专署)旧址",
            decs: "红色沃土寻初心 革命精神照古今",
            data: "2021-01-22 12:40:00",
            views: 11,
          },
          {
            id: 6,
            name: "古交水泉寨",
            decs: "因有淙淙泉水常年不息而得名",
            data: "2021-03-22 12:38:00",
            views: 11,
          },
          {
            id: 7,
            name: "歇马村武氏宅院",
            decs: "晋西北独一无二的窑洞形制",
            data: "2018-03-23 21:28:47 ",
            views: 8,
          },
          {
            id: 8,
            name: "石千峰",
            decs: "中国远古文明的发祥地",
            data: "2018-07-07 14:44:50",
            views: 13,
          },
          {
            id: 9,
            name: "真能和尚灵塔",
            decs: "古交市重点文物保护单位",
            data: "2019-03-12 15:25:33",
            views: 6,
          },
        ],
      };
    },
  },
];

export default mock;
