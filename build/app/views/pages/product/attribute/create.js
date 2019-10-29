define("app/views/pages/product/attribute/create",["magix","jquery","app/mixins/dialog"],function(t,e,a){var i=t("magix"),l=t("jquery"),s=t("app/mixins/dialog");a.exports=i.View.extend({tmpl:'<div class="page-header clearfix"><div class="title-bar"><h2 class="title" t-if="attributeId">\u7f16\u8f91\u5c5e\u6027</h2><h2 class="title" t-if="!attributeId">\u65b0\u589e\u5c5e\u6027</h2></div></div><div class="page-body spu-create"><form id="attribute-create-form"><input type="hidden" name="categoryId" value="{{categoryId}}"> <input type="hidden" name="type" value="{{type}}"><ul class="union-form"><li class="field"><p class="field-label2">\u5c5e\u6027\u540d\u79f0</p><input type="text" class="input" name="name" value="{{name}}"></li><li class="field"><p class="field-label2">\u5c5e\u6027\u503c\u7684\u5f55\u5165\u65b9\u5f0f</p><label class="mr10" mx-click="switchInputType({value:0})"><input name="inputType" class="mr10" checked="{{inputType==0}}" type="radio" value="0"/><span>\u624b\u5de5\u5f55\u5165</span></label><label mx-click="switchInputType({value:1})"><input name="inputType" class="mr10" checked="{{inputType==1}}" type="radio" value="1"/><span>\u4ece\u4e0b\u9762\u5217\u8868\u4e2d\u9009\u62e9</span></label></li><li class="field" t-if="inputType==1"><p class="field-label2">\u5c5e\u6027\u503c\u53ef\u9009\u503c\u5217\u8868</p><textarea name="inputList" class="textarea">{{inputList|formatInputList}}</textarea></li><li class="field"><p class="field-label2">\u6392\u5e8f</p><input type="number" class="input" name="sort" value="{{sort}}"></li><li class="field"><a href="#" class="btn btn-brand btn-large" mx-click="submit()">\u63d0\u4ea4</a></li></ul></form></div>',mixins:[s],render:function(){var t=this,e=t.param("attributeId"),a=t.param("categoryId"),i=t.param("type");e?t.request().all([{name:"attribute_detail",params:{attributeId:e}}],function(e,a){var i=a.get("data");t.data=i,t.setView()}):(t.data={inputType:0,categoryId:a,type:i},t.setView())},"switchInputType<click>":function(t){this.data.inputType=t.params.value,this.setView()},"submit<click>":function(t){t.preventDefault();var e,a=this,i=a.data.attributeId,s=a.data.categoryId,p=a.data.type,n=l("#attribute-create-form").serializeJSON({useIntKeysAsArrayIndex:!0}),r=n.inputList;r?(r=r.split(/[(\r\n)\r\n]+/),n.inputList=r.join()):n.inputList="",i?(n.attributeId=i,e="attribute_update"):e="attribute_create",a.request().all([{name:e,params:n}],function(){a.to("/product/attribute/list?categoryId="+s+"&type="+p)})},filters:{formatInputList:function(t){return t?t.split(",").join("\r\n"):""}}})});