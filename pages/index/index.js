// index.js
// 获取应用实例
let interstitialAd = null
const app = getApp()
const innerAudioContext = wx.createInnerAudioContext()

Page({
  data: {
    isHidden: false,
    datastr: '地球村',
    currentYear: new Date().getFullYear()
  },
  onLoad() {
    if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-ed54249dd821156d'
      })
      interstitialAd.onLoad(() => {})
      interstitialAd.onError((err) => {})
      interstitialAd.onClose(() => {})
    }
    
    // 在适合的场景显示插屏广告
    if (interstitialAd) {
      interstitialAd.show().catch((err) => {
        console.error(err)
      })
    }
  },
  onShow() {
    const datastr = wx.getStorageSync('datastr')
    if(datastr){
      this.setData({
        datastr: JSON.parse(datastr)
      })
    }
  },
  getUserProfile(e) {

  },
  getUserInfo(e) {

  },
  toSelect() {
    wx.navigateTo({
      url: '/pages/select/select',
    })
  },
  handleHidden() {
    this.setData({
      hidden: true
    })
  },
  showBtn() {
    this.setData({
      hidden: false
    })
  },
})