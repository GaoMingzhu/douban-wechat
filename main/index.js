Page({
  data: {
    imgUrls: [],
    bannerUrls: [],
    goodsUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500,
    b_color: "rgba(0,0,0,.5)",
    d_color:"#fff",
    circular:true,
    itemImg:[],
  },
  getBanner:function(){
    let that=this;
    wx.request({
      url: 'http://yapi.demo.qunar.com/mock/63674/api/main',
      success: function(res) {
        that.setData({
          bannerUrls:res.data.data.banner,
          goodsUrls:res.data.data.goods,
        })
      },
    })
  },
  toCart:function(){
    wx.navigateTo({
      url:'/pages/cart/index'
    })
  },
  toDetail:function(){
    wx.navigateTo({
      url: '/pages/detail/index',
    })
  },
  toBanner:function(){
    
  },
  onLoad:function (options) {
    this.getBanner();
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})