export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  APP_ID:"wx4b2e04b3d3772b55",

  // 公众号APP_SECRET
  APP_SECRET:"6834bf6a4b2d843b565b363b39200e60",

 
  USERS: [
    {
      // 想要发送的人的名字
      name: "淼淼",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oji1s5vDDUTgiNZoCSgFpRwKWe3s",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "	SswHUX3zml6y2Xmpc-4NBo79bwMEkPSb0Zrjwmbr2hI",
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "www.weather.com.cn"
    }
  ],

  // 回调消息模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "zjVglIuCXo34CsraXWEio1i3P7sZJ7IQEES93lDsgc4yOU",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "自己",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oji1s5vDDUTgiNZoCSgFpRwKWe3s",
    }, 
  ],
 
  // 所在省份
  PROVINCE: "河北",
  // 所在城市
  CITY: "衡水",

  
  FESTIVALS: [
    {"type": "生日", "name": "淼淼", "year": "2004", "date": "01-01"},
    
    {"type": "生日", "name": "杨玉东", "year": "2003", "date": "01-05"},
    {"type": "节日", "name": "纪念日", "year": "2021", "date": "12-30"},
  ],

 
  FESTIVALS_LIMIT: 3,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }} 
    * */
 /* CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    {"keyword": "love_day", date: "2021-12-30"},
    
  ],*/

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }} 
    * */
  SLOT_LIST: [
    
   /* // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "因为太喜欢你，所以看谁都像是情敌。",
      "申请成为你爱里的永久居民。",
      "你很傻，你很笨，可我还是很羡慕你，因为你有我",
      "遇见你，就好像捡到了100斤的运气",
    ]},
  ],*/

  /** 每日一言 */

  // 好文节选的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: ""


}
