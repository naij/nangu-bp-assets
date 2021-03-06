var Magix = require('magix')
var $ = require('jquery')
var Dialog = require('app/mixins/dialog')

module.exports = Magix.View.extend({
  tmpl: '@img_picker.html',
  mixins: [Dialog],
  init: function(extra) {
    this.extraData = extra
  },
  render: function() {
    var me = this
    var pageNo = me.pageNo || 1
    var pageSize = 10
    me.request().all([{
      name: 'picture_list',
      params: {
        pageNo: pageNo,
        pageSize: pageSize
      }
    }], function(e, MesModel) {
      var data = MesModel.get('data')

      me.data = {
        list: data.list,
        selectedList: [],
        pageNo: pageNo,
        pageSize: pageSize,
        totalCount: data.totalCount
      }
      me.setView()
    })
  },
  'pick<click>': function(e) {
    var me = this
    var limit = me.extraData.limit
    var index = e.params.index
    var list = me.data.list
    var selectedList = me.data.selectedList
    var selectedIndex

    $.each(selectedList, function(i, v) {
      if (v.id == list[index].id) {
        selectedIndex = i
      }
    })

    if (typeof(selectedIndex) != "undefined") {
      selectedList.splice(selectedIndex, 1)
    } else if (selectedList.length < limit) {
      selectedList.push(list[index])
    } else {
      selectedList.shift()
      selectedList.push(list[index])
    }

    $.each(list, function(i, v) {
      v.selected = false
      $.each(selectedList, function(subi, subv) {
        if (v.id == subv.id) {
          v.selected = true
        }
      })
    })

    me.data = {
      list: list,
      selectedList: selectedList
    }
    me.setView()
  },
  'upload<click>': function(e) {
    e.preventDefault()
    var me = this
    me.mxDialog('app/views/pages/picture/upload', {
      width: 700, 
      callback: function() {
        me.render()
      }
    })
  },
  'pageChange<change>': function(e) {
    this.pageNo = e.state.page
    this.data.selectedList = []
    this.render()
  },
  'submit<click>': function (e) {
    e.preventDefault()
    this.extraData.dialog.close()
    this.extraData.callback(this.data.selectedList)
  },
  'cancel<click>': function (e) {
    e.preventDefault()
    this.extraData.dialog.close()
  }
})