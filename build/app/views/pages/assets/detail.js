define("app/views/pages/assets/detail",["magix","jquery"],function(a,e,i){{var s=a("magix");a("jquery")}i.exports=s.View.extend({tmpl:'<div class="page-header clearfix"><div class="title-bar"><h2 class="title">\u53d1\u5e03\u8be6\u60c5</h2></div></div><div class="page-body assets-detail"><div class="info-container">{{{info}}}</div></div>',render:function(){var a=this,e=a.param("id");a.request().all([{name:"assets_detail",params:{id:e}}],function(e,i){var s=i.get("data");a.data={info:s.info},a.setView()})}})});