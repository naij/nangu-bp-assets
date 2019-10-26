define("app/views/pages/order/refund_reason_create",["magix","jquery","app/mixins/dialog"],function(a,e,s){var i=a("magix"),t=a("jquery"),l=a("app/mixins/dialog");s.exports=i.View.extend({tmpl:'<div class="page-header clearfix"><div class="title-bar"><h2 class="title" t-if="id">\u7f16\u8f91\u9000\u6b3e\u539f\u56e0</h2><h2 class="title" t-if="!id">\u65b0\u589e\u9000\u6b3e\u539f\u56e0</h2></div></div><div class="page-body"><form id="refund-reason-create-form"><ul class="union-form"><li class="field"><p class="field-label2">\u540d\u79f0</p><input type="text" class="input" name="name" value="{{name}}"></li><li class="field"><p class="field-label2">\u72b6\u6001</p><label class="mr10" mx-click="switchStatus({value:0})"><input name="status" class="mr10" checked="{{status==0}}" type="radio" value="0"/><span>\u4e0d\u542f\u7528</span></label><label mx-click="switchStatus({value:1})"><input name="status" class="mr10" checked="{{status==1}}" type="radio" value="1"/><span>\u542f\u7528</span></label></li><li class="field"><p class="field-label2">\u6392\u5e8f</p><input type="number" class="input" name="sort" value="{{sort}}"></li><li class="field"><a href="#" class="btn btn-brand btn-large" mx-click="submit()">\u63d0\u4ea4</a></li></ul></form></div>',mixins:[l],render:function(){var a=this,e=a.param("id");e?a.request().all([{name:"order_refund_reason_detail",params:{id:e}}],function(e,s){var i=s.get("data");a.data=i,a.setView()}):(a.data={status:1},a.setView())},"switchStatus<click>":function(a){this.data.status=a.params.value,this.setView()},"submit<click>":function(a){a.preventDefault();var e,s=this,i=s.data.id,l=t("#refund-reason-create-form").serializeJSON({useIntKeysAsArrayIndex:!0});i?(l.id=i,e="order_refund_reason_update"):e="order_refund_reason_create",s.request().all([{name:e,params:l}],function(){s.to("/order/refund_reason_list")})}})});