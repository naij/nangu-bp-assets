var $ = require('jquery')
var _ = require('underscore')
var format = require('app/util/format/format')
var exp = {
  calcDescartes: function (array) {
    if (array.length < 2) return array[0] || []
    return [].reduce.call(array, function (col, set) {
      var res = []
      col.forEach(function (c) {
        set.forEach(function (s) {
          var t = [].concat(Array.isArray(c) ? c : [c])
          t.push(s)
          res.push(t)
        })
      })
      return res
    })
  }
}

_.extend(exp, format)

module.exports = exp