var subjectUtil = require('../../utils/subjectUtil.js');
Page({
  data:{
    // text:"这是一个页面"
    movie:{}
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.loadMovie();
    console.log(options);
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
 
  loadMovie:function(){
      var movieId = wx.getStorageSync('movieId');
      
    //   var page = this;
    //   wx.request({
    //       url:'https://api.douban.com/v2/movie/subject/26280528',
    //       header: {
    //         'Content-Type': 'application/json'
    //         },
    //          success: function(res) {
    //              console.log(res.data)
    //         }
    //   });
      var object = { "rating": {
        "max": 10,
        "average": 5.5,
        "stars": "30",
        "min": 0 },
        "reviews_count": 2681,
        "wish_count": 12175,
        "douban_site": "",
        "year": "2016",
        "images": {
            "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2382076389.jpg",
            "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2382076389.jpg",
            "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2382076389.jpg"
        },
        "alt": "https://movie.douban.com/subject/26280528/",
        "id": "26280528",
        "mobile_url": "https://movie.douban.com/subject/26280528/mobile",
        "title": "从你的全世界路过",
        "do_count": null,
        "share_url": "https://m.douban.com/movie/subject/26280528",
        "seasons_count": null,
        "schedule_url": "https://movie.douban.com/subject/26280528/cinema/",
        "episodes_count": null,
        "countries": [
            "中国大陆"
        ],
        "genres": [
            "喜剧",
            "爱情"
        ],
        "collect_count": 76081,
        "casts": [
            {
                "alt": "https://movie.douban.com/celebrity/1274235/",
                "avatars": {
                    "small": "https://img3.doubanio.com/img/celebrity/small/805.jpg",
                    "large": "https://img3.doubanio.com/img/celebrity/large/805.jpg",
                    "medium": "https://img3.doubanio.com/img/celebrity/medium/805.jpg"
                },
                "name": "邓超",
                "id": "1274235"
            },
            {
                "alt": "https://movie.douban.com/celebrity/1275542/",
                "avatars": {
                    "small": "https://img1.doubanio.com/img/celebrity/small/21559.jpg",
                    "large": "https://img1.doubanio.com/img/celebrity/large/21559.jpg",
                    "medium": "https://img1.doubanio.com/img/celebrity/medium/21559.jpg"
                },
                "name": "白百何",
                "id": "1275542"
            },
            {
                "alt": "https://movie.douban.com/celebrity/1276051/",
                "avatars": {
                    "small": "https://img3.doubanio.com/img/celebrity/small/1435567211.65.jpg",
                    "large": "https://img3.doubanio.com/img/celebrity/large/1435567211.65.jpg",
                    "medium": "https://img3.doubanio.com/img/celebrity/medium/1435567211.65.jpg"
                },
                "name": "杨洋",
                "id": "1276051"
            },
            {
                "alt": "https://movie.douban.com/celebrity/1353578/",
                "avatars": {
                    "small": "https://img1.doubanio.com/img/celebrity/small/1458201743.67.jpg",
                    "large": "https://img1.doubanio.com/img/celebrity/large/1458201743.67.jpg",
                    "medium": "https://img1.doubanio.com/img/celebrity/medium/1458201743.67.jpg"
                },
                "name": "张天爱",
                "id": "1353578"
            }
        ],
        "current_season": null,
        "original_title": "从你的全世界路过",
        "summary": "陈末（邓超 饰）被称为全城最贱，每天和王牌DJ小容（杜鹃 饰）针锋相对，谁也不知道他们的仇恨从何而来。陈末的两个兄弟，分别是全城最傻的猪头（岳云鹏 饰），全城最纯的茅十八（杨洋 饰），三人每天横冲直撞，以为可以自在生活，结果都面临人生最大的转折点。陈末相遇了最神秘的幺鸡（张天爱 饰），猪头打造了最惨烈的婚礼，茅十八经历了最悲伤的别离，这群人的生活一点点崩塌，往事一点点揭开。梦想，爱情，友情都离陈末远去。一个失去所有的人，已经弄丢自己的路，直到听到来自全世界的一段语音……",
        "subtype": "movie",
        "directors": [
            {
                "alt": "https://movie.douban.com/celebrity/1275554/",
                "avatars": {
                    "small": "https://img3.doubanio.com/img/celebrity/small/11460.jpg",
                    "large": "https://img3.doubanio.com/img/celebrity/large/11460.jpg",
                    "medium": "https://img3.doubanio.com/img/celebrity/medium/11460.jpg"
                },
                "name": "张一白",
                "id": "1275554"
            }
        ],
        "comments_count": 43287,
        "ratings_count": 72419,
        "aka": [
            "I Belonged to You"
        ]
};
     subjectUtil.processSubject(object);
  this.setData({movie:object});




  }

})