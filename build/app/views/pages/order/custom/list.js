define("app/views/pages/order/custom/list",["magix","jquery"],function(t,e,a){{var i=t("magix");t("jquery")}a.exports=i.View.extend({tmpl:'<div class="page-header clearfix"><div class="title-bar"><h2 class="title">\u5b9a\u5236\u9700\u6c42\u5217\u8868</h2></div></div><div class="page-body table-container"><table class="table"><thead><tr t-class:no-data="list.length == 0"><th class="left" width="150">\u6d3b\u52a8\u5c01\u9762</th><th class="left">\u6d3b\u52a8\u6807\u9898</th><th class="left" width="100">\u6d3b\u52a8\u7c7b\u578b</th><th class="left" width="150">\u53d1\u5e03\u65f6\u95f4</th><th class="left" width="100">\u53d1\u5e03\u72b6\u6001</th><th class="center" width="150">\u64cd\u4f5c</th></tr></thead><tbody>{{#for(item in list)}}<tr><td class="left"><img src="{{item.cover}}"></td><td class="left">{{item.title}}</td><td class="left">{{item.type|formatType}}</td><td class="left">{{item.updatedAt|formatDate}}</td><td class="left">{{{item.status|formatStatus}}}</td><td class="center"><a href="#" mx-click="online({id:{{item.id}}})" class="color-blue mr10" t-if="item.status==2">\u4e0a\u7ebf</a><a href="#" mx-click="offline({id:{{item.id}}})" class="color-blue mr10" t-if="item.status==1">\u4e0b\u7ebf</a><a href="/activity/create?id={{item.id}}" class="color-blue mr10">\u7f16\u8f91</a><a href="#" mx-click="remove({id:{{item.id}}})" class="color-blue">\u5220\u9664</a></td></tr>{{/for}} {{#if(list.length == 0)}}<tr class="none"><td class="center" colspan="6">\u6682\u65e0\u6570\u636e</td></tr>{{/if}}</tbody></table><div class="tfoot"><div class="pager-container" mx-view="app/coms/pagination/pagination?total={{totalCount}}&size={{pageSize}}&page={{pageNo}}" mx-change="pageChange()"></div></div></div>',ctor:function(){this.observe(["pageNo"])},render:function(){{var t=this;t.param("pageNo")||1}t.data={list:[]},t.setView()},"pageChange<change>":function(t){this.to({pageNo:t.state.page})}})});