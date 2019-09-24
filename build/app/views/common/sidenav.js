define("app/views/common/sidenav",["magix","jquery"],function(a,i,n){var c=a("magix"),t=a("jquery"),e=c.Router,o=[{mainNav:{name:"\u5185\u5bb9\u7ba1\u7406",icon:"iconsucai"},subNav:[{path:"/product/category",name:"\u65b0\u589e\u5546\u54c1",icon:"iconxinzeng",childNav:["/product/publish"]},{path:"/activity/list",name:"\u6d3b\u52a8\u7ba1\u7406",icon:"iconicon3",childNav:["/activity/create","/activity/recyclebin"]},{path:"/roomvoucher/list",name:"\u623f\u5238\u7ba1\u7406",icon:"iconyouhuiquan",childNav:["/roomvoucher/create","/roomvoucher/recyclebin"]},{path:"/photograph/list",name:"\u65c5\u62cd\u7ba1\u7406",icon:"iconpaizhao",childNav:["/photograph/create","/photograph/recyclebin"]},{path:"/picture/list",name:"\u56fe\u7247\u7ba1\u7406",icon:"icontupian"},{path:"/category/list",name:"\u7c7b\u76ee\u7ba1\u7406",icon:"iconleimu",childNav:["/category/create","/attribute/list","/attribute/create"]}]},{mainNav:{name:"\u8ba2\u5355\u7ba1\u7406",icon:"iconorder"},subNav:[{path:"/custom/list",name:"\u5b9a\u5236\u7ba1\u7406",icon:"iconziyuan"}]},{mainNav:{name:"\u7528\u6237\u7ba1\u7406",icon:"iconyonghu"},subNav:[{path:"/member/list",name:"\u6ce8\u518c\u7528\u6237",icon:"iconyonghu"}]},{mainNav:{name:"\u4ee3\u7801\u7ba1\u7406",icon:"icondaima"},subNav:[{path:"/assets/list",name:"\u53d1\u5e03\u5217\u8868",icon:"iconfabu",childNav:["/assets/detail"]}]}];n.exports=c.View.extend({tmpl:'<h1 class="title"><a href="/">\u5357\u8c37\u5c0f\u7a0b\u5e8f\u540e\u53f0</a></h1><ul class="main-nav">{{#for(item in mainNav)}}<li t-class:active="item.active" mx-click="switchMainNav({index:{{__INDEX__}}})"><span class="iconfont {{item.icon}}"></span><span>{{item.name}}</span></li>{{/for}}</ul><ul class="sub-nav">{{#for(item in subNav)}}<li t-class:active="item.active"><a href="{{item.path}}"><span class="iconfont {{item.icon}}"></span>{{item.name}}</a></li>{{/for}}</ul>',ctor:function(){this.observe(null,!0)},render:function(){var a,i,n=this,c=e.parse(),s=c.path,v=[];t.each(o,function(n,c){c.mainNav.active=!1,v.push(c.mainNav),t.each(c.subNav,function(n,e){e.active=!1,e.childNav&&-1!=t.inArray(s,e.childNav)?(e.active=!0,i=!0,a=c.subNav,c.mainNav.active=!0):s===e.path&&(e.active=!0,i=!0,a=c.subNav,c.mainNav.active=!0)})}),i||(a=o[0].subNav,a[0].active=!0),n.data={mainNav:v,subNav:a},n.setView()},"switchMainNav<click>":function(a){var i,n=this,c=a.params.index,e=n.data.mainNav;t.each(e,function(a,i){i.active=!1,c==a&&(i.active=!0)}),t.each(o,function(a,n){c==a&&(i=n.subNav)}),n.data={mainNav:e,subNav:i},n.setView()}})});