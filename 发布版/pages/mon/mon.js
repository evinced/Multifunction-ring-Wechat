
Page({

  data: {
    opacity: 0.4,
    disabled: true,
    threshold: 0,
    rule: 'up',
  },

  getDataFromOneNet: function () {
    //从oneNET请求我们的Wi-Fi气象站的数据
    const requestTask = wx.request({
      url: 'https://api.heclouds.com/devices/23352750/datapoints?datastream_id=Light,Temperature,Humidity&limit=50',
      header: {
        'content-type': 'application/json',
        'api-key': 'IwBneW9xSKK1iBQVmxC0SAt=ppI='
      },
      success: function (res) {
        //console.log(res.data)
        //拿到数据后保存到全局数据
        var app = getApp()
        app.globalData.temperature = res.data.data.datastreams[0]
        app.globalData.light = res.data.data.datastreams[1]
        app.globalData.humidity = res.data.data.datastreams[2]
        console.log(app.globalData.light)
        //跳转到天气页面，根据拿到的数据绘图
        wx.navigateTo({
          url: '../wifi_station/tianqi/tianqi',
        })
      }})},

    getDataFromOneNet1: function () {
        //从oneNET请求我们的Wi-Fi气象站的数据
        const requestTask = wx.request({
          url: 'https://api.heclouds.com/devices/23352750/datapoints?datastream_id=Light,Temperature,Humidity&limit=10',
          header: {
            'content-type': 'application/json',
            'api-key': 'IwBneW9xSKK1iBQVmxC0SAt=ppI='
          },
          success: function (res) {
            //console.log(res.data)
            //拿到数据后保存到全局数据
            var app = getApp()
            app.globalData.temperature = res.data.data.datastreams[0]
            app.globalData.light = res.data.data.datastreams[1]
            app.globalData.humidity = res.data.data.datastreams[2]
            console.log(app.globalData.light)
            //跳转到天气页面，根据拿到的数据绘图
            wx.navigateTo({
              url: '../wifi_station/tianqi/tianqi',
            })
          },

          fail: function (res) {
            console.log("fail!!!")
          },

          complete: function (res) {
            console.log("end")
          }
        })
      },

    getDataFromOneNet2: function () {
      //从oneNET请求我们的Wi-Fi气象站的数据
      const requestTask = wx.request({
        url: 'https://api.heclouds.com/devices/23352750/datapoints?datastream_id=Light,Temperature,Humidity&limit=20',
        header: {
          'content-type': 'application/json',
          'api-key': 'IwBneW9xSKK1iBQVmxC0SAt=ppI='
        },
        success: function (res) {
          //console.log(res.data)
          //拿到数据后保存到全局数据
          var app = getApp()
          app.globalData.temperature = res.data.data.datastreams[0]
          app.globalData.light = res.data.data.datastreams[1]
          app.globalData.humidity = res.data.data.datastreams[2]
          console.log(app.globalData.light)
          //跳转到天气页面，根据拿到的数据绘图
          wx.navigateTo({
            url: '../wifi_station/tianqi/tianqi',
          })
        },

        fail: function (res) {
          console.log("fail!!!")
        },

        complete: function (res) {
          console.log("end")
        }
      })
    },


  getDataFromOneNet3: function () {
    //从oneNET请求我们的Wi-Fi气象站的数据
    const requestTask = wx.request({
      url: 'https://api.heclouds.com/devices/23352750/datapoints?datastream_id=Light,Temperature,Humidity&limit=30',
      header: {
        'content-type': 'application/json',
        'api-key': 'IwBneW9xSKK1iBQVmxC0SAt=ppI='
      },
      success: function (res) {
        //console.log(res.data)
        //拿到数据后保存到全局数据
        var app = getApp()
        app.globalData.temperature = res.data.data.datastreams[0]
        app.globalData.light = res.data.data.datastreams[1]
        app.globalData.humidity = res.data.data.datastreams[2]
        console.log(app.globalData.light)
        //跳转到天气页面，根据拿到的数据绘图
        wx.navigateTo({
          url: '../wifi_station/tianqi/tianqi',
        })
      },

      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },


  getDataFromOneNet4: function () {
    //从oneNET请求我们的Wi-Fi气象站的数据
    const requestTask = wx.request({
      url: 'https://api.heclouds.com/devices/23352750/datapoints?datastream_id=Light,Temperature,Humidity&limit=40',
      header: {
        'content-type': 'application/json',
        'api-key': 'IwBneW9xSKK1iBQVmxC0SAt=ppI='
      },
      success: function (res) {
        //console.log(res.data)
        //拿到数据后保存到全局数据
        var app = getApp()
        app.globalData.temperature = res.data.data.datastreams[0]
        app.globalData.light = res.data.data.datastreams[1]
        app.globalData.humidity = res.data.data.datastreams[2]
        console.log(app.globalData.light)
        //跳转到天气页面，根据拿到的数据绘图
        wx.navigateTo({
          url: '../wifi_station/tianqi/tianqi',
        })
      },

      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },

  change: function (e) {
    //当有输入时激活发送按钮，无输入则禁用按钮
    if (e.detail.value != "") {
      this.setData({
        threshold: e.detail.value,
        opacity: 1,
        disabled: false,
      })
    } else {
      this.setData({
        threshold: 0,
        opacity: 0.4,
        disabled: true,
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
