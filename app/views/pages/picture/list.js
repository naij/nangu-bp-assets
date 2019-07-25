var Magix = require('magix')
var $ = require('jquery')
var Dialog = require('app/mixins/dialog')

module.exports = Magix.View.extend({
  tmpl: '@list.html',
  mixins: [Dialog],
  ctor: function() {
    this.observe(['type'])
  },
  render: function() {
    var me = this
    var type = me.param('type') || 'f2e'

    // me.request().all([{
    //   name: 'article_list',
    //   params: {
    //     type: type
    //   }
    // }], function(e, MesModel) {
    //   var data = MesModel.get('data')

    //   me.data = {
    //     list: data
    //   }
      me.setView()
    // })
  },
  'upload<click>': function(e) {
    e.preventDefault()
    var me = this
    me.mxDialog('app/views/pages/picture/upload', {width: 700, callback: function() {
      me.render()
    }})
  }
})