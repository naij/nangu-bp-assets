define("app/ini",["magix","jquery"],function(e){var t=e("magix"),n=t.Router,a=e("jquery"),i={"app/views/layout/default":[{path:"/",needLogin:!0},{path:"/product/category",needLogin:!0},{path:"/product/publish",needLogin:!0},{path:"/activity/list",needLogin:!0},{path:"/activity/recyclebin",needLogin:!0},{path:"/activity/create",needLogin:!0},{path:"/roomvoucher/list",needLogin:!0},{path:"/roomvoucher/recyclebin",needLogin:!0},{path:"/roomvoucher/create",needLogin:!0},{path:"/category/list",needLogin:!0},{path:"/category/create",needLogin:!0},{path:"/attribute/list",needLogin:!0},{path:"/attribute/create",needLogin:!0},{path:"/photograph/list",needLogin:!0},{path:"/photograph/recyclebin",needLogin:!0},{path:"/photograph/create",needLogin:!0},{path:"/picture/list",needLogin:!0},{path:"/custom/list",needLogin:!0},{path:"/member/list",needLogin:!0},{path:"/assets/list",needLogin:!0},{path:"/assets/detail",needLogin:!0}],"app/views/layout/blank":[{path:"/member/login",needLogin:!1}]},o=function(){var e={};return a.each(i,function(t,n){a.each(n,function(n,a){e[a.path]=t})}),e}();return n.on("changed",function(e){e.path&&a.each(i,function(n,i){a.each(i,function(n,a){a.path==e.path.to&&a.needLogin&&t.checkToLogin()})})}),{defaultPath:"/",defaultView:"app/views/layout/default",unmatchView:"app/views/common/404",routes:o,exts:["app/exts","app/vclick","app/plugins/index"]}});