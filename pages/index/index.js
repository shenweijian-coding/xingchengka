// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {

  },
  onLoad() {
    this.setData({
      datastr: JSON.parse(wx.getStorageSync('datastr'))
    })
  },
  getUserProfile(e) {

  },
  getUserInfo(e) {

  }
})
