define("app/views/common/sidenav",["magix","jquery"],function(a,t,i){var e=a("magix"),n=a("jquery"),c=e.Router,o=[{mainCat:"\u5185\u5bb9\u7ba1\u7406",subCat:[{path:"/activity/list",name:"\u6d3b\u52a8\u7ba1\u7406",icon:"iconicon3",childCat:["/activity/create","/activity/recyclebin"]},{path:"/roomvoucher/list",name:"\u623f\u5238\u7ba1\u7406",icon:"iconyouhuiquan",childCat:["/roomvoucher/create","/roomvoucher/recyclebin"]},{path:"/photograph/list",name:"\u65c5\u62cd\u7ba1\u7406",icon:"iconpaizhao",childCat:["/photograph/create","/photograph/recyclebin"]},{path:"/picture/list",name:"\u56fe\u7247\u7ba1\u7406",icon:"icontupian"}]},{mainCat:"\u8ba2\u5355\u7ba1\u7406",subCat:[{path:"/custom/list",name:"\u5b9a\u5236\u7ba1\u7406",icon:"iconziyuan"}]},{mainCat:"\u7528\u6237\u7ba1\u7406",subCat:[{path:"/member/list",name:"\u6ce8\u518c\u7528\u6237",icon:"iconyonghu"}]},{mainCat:"\u4ee3\u7801\u7ba1\u7406",subCat:[{path:"/assets/list",name:"\u53d1\u5e03\u5217\u8868",icon:"icondaima",childCat:["/assets/detail"]}]}];i.exports=e.View.extend({tmpl:'<h1 class="title"><a href="/">\u5357\u8c37\u5c0f\u7a0b\u5e8f\u540e\u53f0</a></h1><dl class="nav">{{#for(item in menuList)}}<dt>{{item.mainCat}}</dt>{{#for(subitem in item.subCat)}}<dd t-class:active="subitem.active"><a href="{{subitem.path}}"><span class="iconfont {{subitem.icon}}"></span>{{subitem.name}}</a></dd>{{/for}} {{/for}}</dl>',ctor:function(){this.observe(null,!0)},render:function(){var a,t=this,i=c.parse(),e=i.path;n.each(o,function(t,i){n.each(i.subCat,function(t,i){i.active=!1,i.childCat&&-1!=n.inArray(e,i.childCat)?(i.active=!0,a=!0):e===i.path&&(i.active=!0,a=!0)})}),a||(o[0].subCat[0].active=!0),t.data={menuList:o},t.setView()}})});