var Magix = require('magix')
var $ = require('jquery')
var Dialog = require('app/mixins/dialog')

module.exports = Magix.View.extend({
  tmpl: '@list.html',
  mixins: [Dialog],
  ctor: function() {
    this.observe(['pageNo'])
  },
  render: function() {
    var me = this
    var pageNo = me.param('pageNo') || 1
    var pageSize = 10

    me.request().all([{
      name: 'order_list',
      params: {
        pageNo: pageNo,
        pageSize: pageSize
      }
    }], function(e, MesModel) {
      var data = MesModel.get('data')
      me.data = {
        list: data.list,
        pageNo: pageNo,
        pageSize: pageSize,
        totalCount: data.totalCount
      }
      me.setView()
    })
  },
  'pageChange<change>': function(e) {
    this.to({pageNo: e.state.page})
  },
  'verification<click>': function(e) {
    e.preventDefault()
    var me = this
    var orderSn = e.params.orderSn
    me.confirm('确定要核销此商品吗？', function() {
      me.request().all([{
        name: 'order_update_status',
        params: {
          orderSn: orderSn,
          orderStatus: 4
        }
      }], function(e, MesModel) {
        me.render()
      })
    })
  },
  filters: {
    formatStatus: function(value) {
      var status
      switch(value) {
        case 0 :
          status = '<span class="color-m">已关闭</span>'
          break
        case 1 :
          status = '<span class="color-orange">待付款</span>'
          break
        case 2 :
          status = '<span class="color-orange">待处理</span>'
          break
        case 3 :
          status = '<span class="color-green">已付款</span>'
          break
        case 4 :
          status = '<span class="color-green">已完成</span>'
          break
      }
      return status
    },
    formatRefundStatus: function(value) {
      var status
      switch(value) {
        case 0 :
          status = '<span class="color-m">退款拒绝</span>'
          break
        case 1 :
          status = '<span class="color-orange">退款待处理</span>'
          break
        case 2 :
          status = '<span class="color-orange">退款中</span>'
          break
        case 3 :
          status = '<span class="color-green">退款成功</span>'
          break
      }
      return status
    }
  }
})