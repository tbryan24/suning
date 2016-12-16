Page({
  data:{
    //顶部搜索框参数
    placeholder:"梦想从这里开始",
    //轮播相关参数
    imgUrls: [
      "http://api.chengzhangshiguang.com/Uploads/slider/584501c19e5d2.png",
      "http://api.chengzhangshiguang.com/Uploads/slider/584501d13328c.png",
      "http://api.chengzhangshiguang.com/Uploads/slider/584501e21cb0c.png"
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    current:0,
    //广告相关参数参数
    advContent:"魅族Pro6-plus全新上市！",
    bodyarr:[1,2,3,4]
  },
  slideChange:function(e){//轮播图片变化后触发的事件
    
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