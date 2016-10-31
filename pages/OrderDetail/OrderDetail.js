Page({
  data:{
    // text:"这是一个页面"
    hidden:false,
    transHidden:false
  },
  openOrderDetail:function(){
      var hid = !this.data.hidden;
      this.setData({hidden:hid,transHidden:false});
  },
  openTransDetail:function(){
      var hid2 = !this.data.transHidden;
      this.setData({hidden:false,transHidden:hid2});
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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
  }
})