Page({
  data:{
    cartUrls:[],
  },
  getCart:function(){
    let that=this;
    wx.request({
      url: 'http://yapi.demo.qunar.com/mock/63674/api/shoppingCart',
      success:function(res){
        console.log(res);
        that.setData({
          cartUrls:res.data.data.cart,
        })
      }
    })
  },
  onLoad:function(options){
    this.getCart();
  },

})