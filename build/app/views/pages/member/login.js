define("app/views/pages/member/login",["magix","jquery"],function(i,e,l){var s=i("magix"),a=i("jquery");l.exports=s.View.extend({tmpl:'<div class="page-login"><div class="login-header">\u5357\u8c37\u540e\u53f0\u767b\u5f55</div><div class="login-panel"><div class="tip tip-alert" t-if="error">{{error}}</div><form id="loginForm"><ul class="union-form"><li class="field"><div class="field-label2">\u7528\u6237\u540d\uff1a</div><input type="text" class="input" name="username"></li><li class="field"><div class="field-label2">\u5bc6\u7801\uff1a</div><input type="password" class="input" name="password"></li><li class="field"><a href="#" class="btn btn-brand btn-large" mx-click="submit()">\u767b \u5f55</a></li></ul></form></div></div>',ctor:function(){this.observe(null,!0)},render:function(){this.setView()},"submit<click>":function(i){i.preventDefault();var e=this,l=a("#loginForm").serializeJSON();e.request().all([{name:"login",params:l}],function(){s.config({isLogined:!0}),e.to("/activity/list")})}})});