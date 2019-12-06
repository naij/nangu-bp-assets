define("app/views/pages/content/ad/list",["magix","jquery","app/mixins/dialog"],function(t,e,a){var i=t("magix"),s=(t("jquery"),t("app/mixins/dialog"));a.exports=i.View.extend({tmpl:'<div class="page-header clearfix"><div class="title-bar"><h2 class="title">\u5e7f\u544a\u4f4d\u7ba1\u7406</h2></div></div><div class="page-body table-container"><div class="toolbar clearfix"><a href="/content/ad/create?position={{position}}" class="btn btn-brand btn-large">\u65b0\u589e</a></div><table class="table"><thead><tr><th class="left">\u56fe\u7247</th><th class="left" width="100">\u94fe\u63a5\u7c7b\u578b</th><th class="left" width="450">\u94fe\u63a5\u5730\u5740</th><th class="left" width="70">\u6392\u5e8f</th><th class="center" width="120">\u64cd\u4f5c</th></tr></thead><tbody>{{#for(item in list)}}<tr><td class="left"><img src="{{item.imageUrl}}?x-oss-process=style/p_30"></td><td class="left">{{item.urlType|formatUrlType}}</td><td class="left"><a target="_blank" class="color-blue" href="{{item.url}}" t-if="item.urlType==0">{{item.url}}</a><span t-if="item.urlType==1">{{item.url}}</span></td><td class="left">{{item.sort}}</td><td class="center"><a href="/content/ad/create?position={{position}}&id={{item.id}}" class="color-blue mr10">\u7f16\u8f91</a><a href="#" mx-click="remove({id:{{item.id}}})" class="color-blue">\u5220\u9664</a></td></tr>{{/for}} {{#if(list.length == 0)}}<tr class="none"><td class="center" colspan="4">\u6682\u65e0\u6570\u636e</td></tr>{{/if}}</tbody></table></div>',mixins:[s],render:function(){var t=this,e=t.param("position");t.request().all([{name:"ad_list",params:{position:e}}],function(a,i){var s=i.get("data");t.data={position:e,list:s.list},t.setView()})},"remove<click>":function(t){t.preventDefault();var e=t.params.id,a=this;a.confirm("\u786e\u5b9a\u8981\u5220\u9664\u6b64\u6570\u636e\uff1f\u5220\u9664\u540e\u4e0d\u53ef\u590d\u539f\uff01",function(){a.request().all([{name:"ad_remove",params:{id:e}}],function(){a.render()})})},filters:{formatUrlType:function(t){var e;switch(t){case 0:e="\u8df3\u8f6c\u7f51\u9875";break;case 1:e="\u8df3\u8f6c\u5c0f\u7a0b\u5e8f"}return e}}})});