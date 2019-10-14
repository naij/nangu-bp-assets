define("app/views/pages/product/update",["magix","jquery","app/coms/editor/editor","app/mixins/dialog","app/util/index"],function(e,t,i){var a=e("magix"),l=e("jquery"),s=e("app/coms/editor/editor"),n=e("app/mixins/dialog"),c=e("app/util/index");i.exports=a.View.extend({tmpl:'<div class="page-header clearfix"><div class="title-bar"><h2 class="title">\u66f4\u65b0\u5546\u54c1</h2></div></div><div class="page-body product-publish"><form id="product-create-form"><ul class="union-form"><li class="field"><p class="field-label2">\u6807\u9898</p><input type="text" class="input" name="title" value="{{title}}"/></li><li class="field"><p class="field-label2">\u4ef7\u683c</p><input type="number" class="input" name="price" value="{{price}}"/></li><li class="field"><p class="field-label2">\u63a8\u8350\u8bbe\u7f6e</p><label class="mr10" mx-click="switchRecommandStatus({value:0})"><input name="recommandStatus" class="mr10" checked="{{recommandStatus==0}}" type="radio" value="0"/><span>\u4e0d\u8bbe\u7f6e\u6210\u63a8\u8350</span></label><label mx-click="switchRecommandStatus({value:1})"><input name="recommandStatus" class="mr10" checked="{{recommandStatus==1}}" type="radio" value="1"/><span>\u8bbe\u7f6e\u6210\u63a8\u8350</span></label></li><li class="field"><p class="field-label2">\u51fa\u7968\u8bbe\u7f6e</p><label class="mr10" mx-click="switchTicketGenType({value:0})"><input name="ticketGenType" class="mr10" checked="{{ticketGenType==0}}" type="radio" value="0"/><span>\u81ea\u52a8\u51fa\u7968</span></label><label mx-click="switchTicketGenType({value:1})"><input name="ticketGenType" class="mr10" checked="{{ticketGenType==1}}" type="radio" value="1"/><span>\u624b\u52a8\u51fa\u7968</span></label></li><li class="field"><p class="field-label2">\u5c01\u9762\u56fe</p><div class="cover clearfix">{{^if(cover)}}<div class="img-placeholder" mx-click="pickCover()"><span class="iconfont iconhao"></span><div>\u6dfb\u52a0\u5c01\u9762</div></div>{{/if}} {{#if(cover)}}<div class="img-container"><div class="mask" mx-click="pickCover()">\u91cd\u65b0\u9009\u62e9\u56fe\u7247</div><img src="{{cover}}" class="img"> <input type="hidden" name="cover" value="{{cover}}"></div>{{/if}}</div></li><li class="field"><p class="field-label2">\u8f6e\u64ad\u56fe</p><div class="slide clearfix">{{#if(slide.length > 0)}} {{#for(item in slide)}}<div class="img-container"><div class="mask" mx-click="pickSlide({index:{{__INDEX__}}})">\u91cd\u65b0\u9009\u62e9\u56fe\u7247</div><img src="{{item}}" class="img"> <input type="hidden" name="slide[{{__INDEX__}}]" value="{{item}}"></div>{{/for}} {{/if}} {{^if(slide.length >= 2)}}<div class="img-placeholder" mx-click="pickSlide()"><span class="iconfont iconhao"></span><div>\u6dfb\u52a0\u8f6e\u64ad\u56fe</div></div>{{/if}}</div></li><li class="field"><p class="field-label2">\u5546\u54c1\u89c4\u683c</p><div class="attribute-container">{{#for(item in attributeList)}}<div class="attribute-item"><p class="field-label2">{{item.name}}</p><div><input placeholder="\u8bf7\u8f93\u5165\u81ea\u5b9a\u4e49{{item.name}}\u540d\u79f0" class="input mr10" id="J_attr_value_{{item.attributeId}}"><button class="btn btn-brand btn-large" mx-click="addAttributeValue({attributeId:{{item.attributeId}}})">+\u6dfb\u52a0</button><div class="attribute-value-container clearfix" t-if="item.attributeValueList.length>0">{{#for((index, subitem) in item.attributeValueList)}}<div class="attribute-value-item">{{subitem.value}}<span class="iconfont iconguanbi close" mx-click="delAttributeValue({attributeId:{{item.attributeId}},index:{{index}}})"></span></div>{{/for}}</div></div></div>{{/for}}</div><div class="sku-container table-container" t-if="skuList.length>0"><table class="table"><thead><tr>{{#for(item in attributeList)}}<th class="left" width="150">{{item.name}}</th>{{/for}}<th class="left" width="150">\u4ef7\u683c</th><th class="left" width="150">\u5e93\u5b58</th></tr></thead><tbody>{{#for((index,item) in skuList)}}<tr>{{#for((subindex,subitem) in item)}} {{#if(subindex!=(item.length - 1))}}<td class="left">{{#if(subitem.input)}} <input placeholder="{{subitem.fieldLabel}}" type="number" class="input input-narrow" value="{{subitem.fieldValue}}" mx-change="skuFieldChange({index:{{index}},field:\'{{subitem.fieldName}}\'})"> {{/if(subitem.input)}} {{^if(subitem.input)}} {{subitem.value}} {{/if(subitem.input)}}</td>{{/if}} {{/for}}</tr>{{/for}}</tbody></table></div></li>{{#for(item in detailfieldList)}} {{#if(item.fieldType == 0)}}<li class="field"><p class="field-label2">{{item.fieldLabel}}</p><div id="{{item.fieldName}}-editor"></div></li>{{/if}} {{#if(item.fieldType == 1)}}<li class="field"><p class="field-label2">\u5730\u7406\u4f4d\u7f6e\u5730\u5740</p><input type="text" class="input" name="location" value="{{detail.location}}"></li><li class="field"><p class="field-label2">\u5730\u7406\u4f4d\u7f6e\u7ecf\u7eac\u5ea6</p><input type="text" class="input" name="locationPointer" value="{{detail.locationPointer}}"></li>{{/if}} {{/for}}<li class="field"><a href="#" class="btn btn-brand btn-large mr10" mx-click="submit()">\u4fdd\u5b58</a></li></ul></form></div>',mixins:[n],render:function(){var e=this,t=e.param("productSn");e.request().all([{name:"product_detail",params:{productSn:t}}],function(t,i){var a=i.get("data");a.originSkuList=a.skuList,a.skuList=e._preparseSku(a),a.deletedAttributeValueList=[],a.deletedSkuList=[],e.data=a,e.setView().then(function(){e._rendered()})})},_rendered:function(){var e=this,t=e.data.detailfieldList,i=e.data.detail;l.each(t,function(t,a){if(0==a.fieldType){var l=new s("#"+a.fieldName+"-editor");e._customInsertImg(l),l.create(),l.txt.html(i[a.fieldName]),e[a.fieldName+"Editor"]=l}})},_customInsertImg:function(e){var t=this;e.customConfig.onInsertImg=function(e){t.mxDialog("app/views/pages/common/imgpicker",{width:700,limit:1,callback:function(t){e(t[0].picPath)}})}},_getEditorContent:function(){var e=this,t={},i=e.data.detailfieldList;return l.each(i,function(i,a){if(0==a.fieldType){var l=e[a.fieldName+"Editor"];t[a.fieldName]=l.txt.html().replace(/[\r\n]/g,"").replace(/<style(([\s\S])*?)<\/style>/g,"").replace(/\<img/gi,'<img style="width:100%;height:auto" ').replace(/<p>/gi,'<p class="p_class">')}}),t},_preparseSku:function(e){var t=e.originSkuList,i=e.attributeList,a=[];return t.forEach(function(e){var t=e.properties.split(";");t.shift();var l=[];t.forEach(function(e){var t=e.split(":");i.forEach(function(e){e.attributeId==t[0]&&e.attributeValueList.forEach(function(e){e.attributeValueId==t[1]&&l.push(e)})})}),l.push({fieldName:"price",fieldLabel:"\u4ef7\u683c",fieldValue:e.price,input:!0},{fieldName:"stock",fieldLabel:"\u5e93\u5b58",fieldValue:e.stock,input:!0},{skuSn:e.skuSn}),a.push(l)}),a},_parseSku:function(){var e=this.data.attributeList,t=[];l.each(e,function(e,i){t.push(i.attributeValueList)});var i=c.calcDescartes(t),a=this.data.skuList;l.each(i,function(e,t){var i=JSON.stringify(t);i=i.substr(0,i.length-1),t.push({fieldName:"price",fieldLabel:"\u4ef7\u683c",fieldValue:"",input:!0},{fieldName:"stock",fieldLabel:"\u5e93\u5b58",fieldValue:"",input:!0},{skuSn:""}),l.each(a,function(e,a){var l=JSON.stringify(a);a.input||-1!=l.indexOf(i)&&(t[t.length-3].fieldValue=a[a.length-3].fieldValue,t[t.length-2].fieldValue=a[a.length-2].fieldValue,t[t.length-1].skuSn=a[a.length-1].skuSn)})}),this.data.skuList=i},"addAttributeValue<click>":function(e){e.preventDefault();var t,i=this,a=e.params.attributeId,s=i.data.attributeList,n=l("#J_attr_value_"+a).val();if(n){l.each(s,function(e,i){i.attributeValueList||(i.attributeValueList=[]),i.attributeId==a&&(t=i)});var c=t.attributeValueList;c.push({attributeId:a,value:n}),t.attributeValueList=c,i._parseSku(),i.setView()}},"delAttributeValue<click>":function(e){e.preventDefault();var t,i=this,a=e.params.index,s=e.params.attributeId,n=i.data.attributeList,c=i.data.originSkuList;l.each(n,function(e,i){i.attributeId==s&&(t=i)});var d=t.attributeValueList,u=d.splice(a,1)[0],r=[];u.attributeValueId&&r.push(u.attributeValueId),i.data.deletedAttributeValueList=r;var p=[];l.each(c,function(e,t){-1!=t.properties.indexOf(u.attributeValueId)&&p.push(t.skuSn)}),i.data.deletedSkuList=p,i._parseSku(),i.setView()},"skuFieldChange<change>":function(e){var t=this,i=e.params.index,a=e.params.field,s=l(e.eventTarget),n=t.data.skuList[i];l.each(n,function(e,t){t.fieldName==a&&(t.fieldValue=s.val())})},"pickCover<click>":function(e){e.preventDefault();var t=this;t.mxDialog("app/views/pages/common/imgpicker",{width:700,limit:1,callback:function(e){t.data.cover=e[0].picPath,t.setView()}})},"pickSlide<click>":function(e){e.preventDefault();var t=this,i=e.params.index;t.mxDialog("app/views/pages/common/imgpicker",{width:700,limit:1,callback:function(e){"undefined"!=typeof i?t.data.slide.splice(i,1,e[0].picPath):t.data.slide.push(e[0].picPath),t.setView()}})},"switchRecommandStatus<click>":function(e){this.data.recommandStatus=e.params.value,this.setView()},"switchTicketGenType<click>":function(e){this.data.ticketGenType=e.params.value,this.setView()},"submit<click>":function(e){e.preventDefault();var t=this,i=t.param("productSn"),a=t.data.attributeList,s=t.data.deletedAttributeValueList,n=t.data.deletedSkuList,c=t.data.skuList,d=l("#product-create-form").serializeJSON({useIntKeysAsArrayIndex:!0}),u=t._getEditorContent();d.location&&l.extend(u,{location:d.location,locationPointer:d.locationPointer}),l.extend(d,{productSn:i,attributeList:a,deletedAttributeValueList:s,deletedSkuList:n,skuList:c,detail:u}),t.request().all([{name:"product_update",params:d}],function(){t.to("/product/successful?type=update")})}})});