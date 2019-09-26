define("app/views/pages/product/publish",["magix","jquery","app/coms/editor/editor","app/mixins/dialog","app/util/index"],function(i,t,e){var a=i("magix"),l=i("jquery"),s=i("app/coms/editor/editor"),c=i("app/mixins/dialog"),d=i("app/util/index");e.exports=a.View.extend({tmpl:'<div class="page-header clearfix"><div class="title-bar"><h2 class="title">\u53d1\u5e03\u5546\u54c1</h2></div></div><div class="page-body product-publish"><form id="product-create-form"><ul class="union-form"><li class="field"><p class="field-label2">\u6807\u9898</p><input type="text" class="input" name="title" value="{{title}}"></li><li class="field"><p class="field-label2">\u5546\u54c1\u89c4\u683c</p><div class="attribute-container">{{#for(item in attributeList)}}<div class="attribute-item"><p class="field-label2">{{item.name}}</p><div><input placeholder="\u8bf7\u8f93\u5165\u81ea\u5b9a\u4e49{{item.name}}\u540d\u79f0" class="input mr10" id="J_attr_value_{{item.attributeId}}"><button class="btn btn-brand btn-large" mx-click="addAttributeValue({attributeId:{{item.attributeId}}})">+\u6dfb\u52a0</button><div class="attribute-value-container clearfix" t-if="item.attributeValues.length>0">{{#for(subitem in item.attributeValues)}}<div class="attribute-value-item">{{subitem.value}}<span class="iconfont iconguanbi close" mx-click="delAttributeValue({attributeId:{{item.attributeId}},index:{{subitem.index}}})"></span></div>{{/for}}</div></div></div>{{/for}}</div><div class="sku-container table-container" t-if="skuList.length>0"><table class="table"><thead><tr>{{#for(item in attributeList)}}<th class="left" width="150">{{item.name}}</th>{{/for}}<th class="left" width="150">\u4ef7\u683c</th><th class="left" width="150">\u5e93\u5b58</th></tr></thead><tbody>{{#for((index,item) in skuList)}}<tr>{{#for(subitem in item)}}<td class="left">{{#if(subitem.input)}} <input placeholder="{{subitem.fieldLabel}}" type="number" class="input input-narrow" value="{{subitem.fieldValue}}" mx-change="skuFieldChange({index:{{index}},field:\'{{subitem.fieldName}}\'})"> {{/if(subitem.input)}} {{^if(subitem.input)}} {{subitem.value}} {{/if(subitem.input)}}</td>{{/for}}</tr>{{/for}}</tbody></table></div></li><li class="field"><p class="field-label2">\u5c01\u9762\u56fe</p><div class="cover clearfix">{{^if(cover)}}<div class="img-placeholder" mx-click="pickCover()"><span class="iconfont iconhao"></span><div>\u6dfb\u52a0\u5c01\u9762</div></div>{{/if}} {{#if(cover)}}<div class="img-container"><div class="mask" mx-click="pickCover()">\u91cd\u65b0\u9009\u62e9\u56fe\u7247</div><img src="{{cover}}" class="img"> <input type="hidden" name="cover" value="{{cover}}"></div>{{/if}}</div></li><li class="field"><p class="field-label2">\u8f6e\u64ad\u56fe</p><div class="slide clearfix">{{#if(slide.length > 0)}} {{#for(item in slide)}}<div class="img-container"><div class="mask" mx-click="pickSlide({index:{{__INDEX__}}})">\u91cd\u65b0\u9009\u62e9\u56fe\u7247</div><img src="{{item}}" class="img"> <input type="hidden" name="slide[{{__INDEX__}}]" value="{{item}}"></div>{{/for}} {{/if}} {{^if(slide.length >= 2)}}<div class="img-placeholder" mx-click="pickSlide()"><span class="iconfont iconhao"></span><div>\u6dfb\u52a0\u8f6e\u64ad\u56fe</div></div>{{/if}}</div></li>{{#for(item in detailfieldList)}} {{#if(item.fieldType == 0)}}<li class="field"><p class="field-label2">{{item.fieldLabel}}</p><div id="{{item.fieldName}}-editor"></div></li>{{/if}} {{#if(item.fieldType == 1)}}<li class="field"><p class="field-label2">\u5730\u7406\u4f4d\u7f6e\u5730\u5740</p><input type="text" class="input" name="location" value="{{location}}"></li><li class="field"><p class="field-label2">\u5730\u7406\u4f4d\u7f6e\u7ecf\u7eac\u5ea6</p><input type="text" class="input" name="locationPointer" value="{{locationPointer}}"></li>{{/if}} {{/for}}<li class="field"><a href="#" class="btn btn-brand btn-large mr10" mx-click="submit()">\u53d1\u5e03</a></li></ul></form></div>',mixins:[c],render:function(){var i=this,t=i.param("categoryId");i.request().all([{name:"attribute_list",params:{categoryId:t,type:0}},{name:"detailfield_list",params:{categoryId:t}}],function(t,e,a){i.data={attributeList:e.get("data").list,detailfieldList:a.get("data").list,slide:[]},i.setView().then(function(){i._rendered()})})},_rendered:function(){var i=this,t=i.data.detailfieldList;l.each(t,function(t,e){if(0==e.fieldType){var a=new s("#"+e.fieldName+"-editor");i._customInsertImg(a),a.create(),i[e.fieldName+"Editor"]=a}})},_customInsertImg:function(i){var t=this;i.customConfig.onInsertImg=function(i){t.mxDialog("app/views/pages/common/imgpicker",{width:700,limit:1,callback:function(t){i(t[0].picPath)}})}},_getEditorContent:function(){var i=this,t={},e=i.data.detailfieldList;return l.each(e,function(e,a){if(0==a.fieldType){var l=i[a.fieldName+"Editor"];t[a.fieldName]=l.txt.html().replace(/[\r\n]/g,"").replace(/<style(([\s\S])*?)<\/style>/g,"").replace(/\<img/gi,'<img style="width:100%;height:auto" ').replace(/<p>/gi,'<p class="p_class">')}}),t},_parseSku:function(){var i=this.data.attributeList,t=[];l.each(i,function(i,e){t.push(e.attributeValues)});var e=d.calcDescartes(t);l.each(e,function(i,t){t.push({fieldName:"price",fieldLabel:"\u4ef7\u683c",fieldValue:"",input:!0}),t.push({fieldName:"stock",fieldLabel:"\u5e93\u5b58",fieldValue:"",input:!0})}),this.data.skuList=e},"addAttributeValue<click>":function(i){i.preventDefault();var t,e=this,a=i.params.attributeId,s=e.data.attributeList,c=l("#J_attr_value_"+a).val();if(c){l.each(s,function(i,e){e.attributeValues||(e.attributeValues=[]),e.attributeId==a&&(t=e)});var d=t.attributeValues;d.push({attributeId:a,value:c}),l.each(d,function(i,t){t.index=i}),t.attributeValues=d,e._parseSku(),e.setView()}},"delAttributeValue<click>":function(i){i.preventDefault();var t,e=this,a=i.params.index,s=i.params.attributeId,c=e.data.attributeList;l.each(c,function(i,e){e.attributeId==s&&(t=e)});var d=t.attributeValues;d.splice(a,1),l.each(d,function(i,t){t.index=i}),e._parseSku(),e.setView()},"skuFieldChange<change>":function(i){var t=this,e=i.params.index,a=i.params.field,s=l(i.eventTarget),c=t.data.skuList[e];l.each(c,function(i,t){t.fieldName==a&&(t.fieldValue=s.val())})},"pickCover<click>":function(i){i.preventDefault();var t=this;t.mxDialog("app/views/pages/common/imgpicker",{width:700,limit:1,callback:function(i){t.data.cover=i[0].picPath,t.setView()}})},"pickSlide<click>":function(i){i.preventDefault();var t=this,e=i.params.index;t.mxDialog("app/views/pages/common/imgpicker",{width:700,limit:1,callback:function(i){"undefined"!=typeof e?t.data.slide.splice(e,1,i[0].picPath):t.data.slide.push(i[0].picPath),t.setView()}})},"submit<click>":function(i){i.preventDefault();var t=this,e=t.param("categoryId"),a=t.data.attributeList,s=t.data.skuList,c=l("#product-create-form").serializeJSON({useIntKeysAsArrayIndex:!0}),d=t._getEditorContent();c.location&&l.extend(d,{location:c.location,locationPointer:c.locationPointer}),l.extend(c,{categoryId:e,attributeList:a,skuList:s,detail:d}),t.request().all([{name:"product_create",params:c}],function(){t.to("/product/successful")})}})});