Page({
  data:{
    sortTitle:["热门推荐","手机数码","母婴用品","家用电器","电脑办公","厨卫电器","生活电器","食品酒水","居家生活","美妆洗护","女装女鞋","男装男鞋","内衣配饰","家装建材","运动户外","童装玩具","汽车生活","皮具箱包","钟表眼镜","珠宝首饰"],
    sortData:[],
    temdata:[{title:"为您推荐",data:[{title1:"iphone",title2:"魅族",title3:"华为",imgUrl1:"http://image1.suning.cn/uimg/asbs/ad/1481556953497_app_list.jpg",imgUrl2:"http://image4.suning.cn/uimg/asbs/ad/1481556924182_app_list.jpg",imgUrl3:"http://image.suning.cn/uimg/asbs/ad/1481556853984_app_list.jpg"},{title1:"电视",title2:"洗衣机",title3:"冰箱",imgUrl1:"http://image2.suning.cn/uimg/asbs/ad/1474442678072_pc_list.jpg",imgUrl2:"http://image3.suning.cn/uimg/cms/img/145334542215523246.jpg",imgUrl3:"http://image5.suning.cn/uimg/cms/img/146962168317907015.jpg"},{title1:"平板",title2:"笔记本",title3:"空调",imgUrl1:"http://sale.suning.com/act/20150514/diannaobangong/4.jpg",imgUrl2:"http://image1.suning.cn/b2c/catentries/000000000136446381_1_120x120.jpg",imgUrl3:"http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000126128410_1_400x400.jpg?ver=2070"}]},{title:"数码电器",data:[{title1:"iphone",title2:"魅族",title3:"华为",imgUrl1:"http://image1.suning.cn/uimg/asbs/ad/1481556953497_app_list.jpg",imgUrl2:"http://image4.suning.cn/uimg/asbs/ad/1481556924182_app_list.jpg",imgUrl3:"http://image.suning.cn/uimg/asbs/ad/1481556853984_app_list.jpg"},{title1:"电视",title2:"洗衣机",title3:"冰箱",imgUrl1:"http://image2.suning.cn/uimg/asbs/ad/1474442678072_pc_list.jpg",imgUrl2:"http://image3.suning.cn/uimg/cms/img/145334542215523246.jpg",imgUrl3:"http://image5.suning.cn/uimg/cms/img/146962168317907015.jpg"},{title1:"平板",title2:"笔记本",title3:"空调",imgUrl1:"http://sale.suning.com/act/20150514/diannaobangong/4.jpg",imgUrl2:"http://image1.suning.cn/b2c/catentries/000000000136446381_1_120x120.jpg",imgUrl3:"http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000126128410_1_400x400.jpg?ver=2070"}]}],
    clientW:0,
    clientH:0,
    sortItem:[1,2,3],
    curId:0,
    iphone:"iphone11"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that=this
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          clientW:res.windowWidth,
          clientH:res.windowHeight
        })
      }
    })
    this.setData({
      sortData:this.data.temdata
    })
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
  sortTitleClick:function(e){
    this.setData({
      curId:e.target.id
    })
    if(e.target.id==0){
      this.setData({
        sortData:this.data.temdata
      })
    }else{
      this.setData({
        sortData:[]
      })
    }
  }
})