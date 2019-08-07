define("app/views/pages/activity/list",["magix","jquery"],function(t,a,e){{var i=t("magix");t("jquery")}e.exports=i.View.extend({tmpl:{html:'<div class="page-header clearfix"><div class="title-bar"><h2 class="title">\u6d3b\u52a8\u5217\u8868</h2></div></div><div class="page-body table-container"><div class="toolbar clearfix"><a href="/activity/recyclebin" class="btn btn-white btn-large fr">\u56de\u6536\u7ad9</a><a href="/activity/create" class="btn btn-brand btn-large">\u65b0\u589e\u6d3b\u52a8</a></div><table class="table"><thead><tr t-class:no-data="list.length == 0"><th class="left" width="150">\u6d3b\u52a8\u5c01\u9762</th><th class="left">\u6d3b\u52a8\u6807\u9898</th><th class="left" width="100">\u6d3b\u52a8\u7c7b\u578b</th><th class="left" width="150">\u53d1\u5e03\u65f6\u95f4</th><th class="left" width="100">\u53d1\u5e03\u72b6\u6001</th><th class="center" width="150">\u64cd\u4f5c</th></tr></thead><tbody>{{#for(item in list)}}<tr><td class="left"><img mx-guid="g13" src="{{item.cover}}"></td><td class="left">{{item.title}}</td><td class="left">{{item.type|formatType}}</td><td class="left">{{item.updatedAt|formatDate}}</td><td class="left">{{{item.status|formatStatus}}}</td><td class="center"><a href="#" mx-click="online({id:{{item.id}}})" class="color-blue mr10" t-if="item.status==2">\u4e0a\u7ebf</a><a href="#" mx-click="offline({id:{{item.id}}})" class="color-blue mr10" t-if="item.status==1">\u4e0b\u7ebf</a><a href="/activity/create?id={{item.id}}" class="color-blue mr10">\u7f16\u8f91</a><a href="#" mx-click="remove({id:{{item.id}}})" class="color-blue">\u5220\u9664</a></td></tr>{{/for}} {{#if(list.length == 0)}}<tr class="none"><td class="center" colspan="6">\u6682\u65e0\u6570\u636e</td></tr>{{/if}}</tbody></table><div class="tfoot"><div class="pager-container" mx-view="app/coms/pagination/pagination?total={{totalCount}}&size={{pageSize}}&page={{pageNo}}" mx-change="pageChange()"></div></div></div>',subs:[]},ctor:function(){this.observe(["pageNo"])},render:function(){var t=this,a=t.param("pageNo")||1,e=10;t.request().all([{name:"activity_list",params:{status:[1,2],pageNo:a,pageSize:e}}],function(i,s){var l=s.get("data");t.data={list:l.list,pageNo:a,pageSize:e,totalCount:l.totalCount},t.setView()})},"online<click>":function(t){t.preventDefault();var a=t.params.id,e=this;e.request().all([{name:"activity_online",params:{id:a}}],function(){e.render()})},"offline<click>":function(t){t.preventDefault();var a=t.params.id,e=this;e.request().all([{name:"activity_offline",params:{id:a}}],function(){e.render()})},"remove<click>":function(t){t.preventDefault();var a=t.params.id,e=this;e.request().all([{name:"activity_remove",params:{id:a}}],function(){e.render()})},"pageChange<change>":function(t){this.to({pageNo:t.state.page})},filters:{formatType:function(t){var a;switch(t){case 1:a="\u5408\u4f5c\u6d3b\u52a8";break;case 2:a="\u81ea\u8425\u6d3b\u52a8"}return a},formatStatus:function(t){var a;switch(t){case 1:a='<span class="color-green">\u6b63\u5f0f\u53d1\u5e03</span>';break;case 2:a='<span class="color-l">\u5df2\u4e0b\u7ebf</span>'}return a}}})});