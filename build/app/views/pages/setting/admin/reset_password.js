define("app/views/pages/setting/admin/reset_password",["magix","jquery","app/mixins/dialog"],function(s,a,i){var e=s("magix"),l=s("jquery"),r=s("app/mixins/dialog");i.exports=e.View.extend({tmpl:'<div class="page-header clearfix"><div class="title-bar"><h2 class="title">\u91cd\u7f6e\u5bc6\u7801</h2></div></div><div class="page-body"><form id="password-create-form"><ul class="union-form"><li class="field"><p class="field-label2">\u539f\u5bc6\u7801</p><input type="password" class="input" name="originPassword"></li><li class="field"><p class="field-label2">\u65b0\u5bc6\u7801</p><input type="password" class="input" name="newPassword"></li><li class="field"><p class="field-label2">\u786e\u8ba4\u65b0\u5bc6\u7801</p><input type="password" class="input" name="confirmPassword"></li><li class="field"><a href="#" class="btn btn-brand btn-large" mx-click="submit()">\u63d0\u4ea4</a></li></ul></form></div>',mixins:[r],render:function(){this.setView()},"submit<click>":function(s){s.preventDefault();var a=this,i=(a.data.id,l("#password-create-form").serializeJSON({useIntKeysAsArrayIndex:!0}));a.request().all([{name:"admin_reset_password",params:i}],function(s){a.alert(s&&s.msg?s.msg:"\u5bc6\u7801\u91cd\u7f6e\u6210\u529f")})}})});