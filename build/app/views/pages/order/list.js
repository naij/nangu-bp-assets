define("app/views/pages/order/list",["magix","jquery"],function(t,a,e){{var s=t("magix");t("jquery")}e.exports=s.View.extend({tmpl:'<div class="page-header clearfix"><div class="title-bar"><h2 class="title">\u8ba2\u5355\u5217\u8868</h2></div></div><div class="page-body table-container"><table class="table"><thead><tr t-class:no-data="list.length == 0"><th class="left">\u5546\u54c1\u4fe1\u606f</th><th class="left" width="80">\u5355\u4ef7</th><th class="left" width="80">\u6570\u91cf</th><th class="left" width="80">\u5b9e\u6536\u6b3e</th><th class="left" width="100">\u4e70\u5bb6\u6635\u79f0</th><th class="left" width="80">\u552e\u540e</th><th class="left" width="80">\u4ea4\u6613\u72b6\u6001</th><th class="center" width="100">\u64cd\u4f5c</th></tr></thead><tbody>{{#for(item in list)}}<tr class="purple"><td class="left" colspan="8"><span class="mr20">\u8ba2\u5355\u7f16\u53f7\uff1a{{item.orderSn}}</span><span>\u521b\u5efa\u65f6\u95f4\uff1a{{item.createdAt|formatDate}}</span></td></tr><tr><td class="left"><div class="order-product-info"><img class="img" src="{{item.productInfo.productCover}}"><div class="attr"><div class="title">{{item.productInfo.productTitle}}</div><div class="properties">{{item.productInfo.productPropertiesName}}</div></div></div></td><td class="left">\uffe5{{item.productInfo.productPrice}}</td><td class="left">{{item.productQuantity}}</td><td class="left"><strong>\uffe5{{item.paymentAmount}}</strong></td><td class="left">{{item.memberNickname}}</td><td class="left">{{#if(item.refundInfo)}}<a href="/order/refund_detail?id={{item.refundInfo.id}}" class="color-blue mr10">{{{item.refundInfo.status|formatRefundStatus}}}</a>{{/if}}</td><td class="left">{{{item.orderStatus|formatStatus}}}</td><td class="center"><a href="/order/detail?orderSn={{item.orderSn}}" class="color-blue mr10">\u67e5\u770b\u8ba2\u5355</a></td></tr>{{/for}} {{#if(list.length == 0)}}<tr class="none"><td class="center" colspan="8">\u6682\u65e0\u6570\u636e</td></tr>{{/if}}</tbody></table><div class="tfoot"><div class="pager-container" mx-view="app/coms/pagination/pagination?total={{totalCount}}&size={{pageSize}}&page={{pageNo}}" mx-change="pageChange()"></div></div></div>',ctor:function(){this.observe(["pageNo"])},render:function(){var t=this,a=t.param("pageNo")||1,e=10;t.request().all([{name:"order_list",params:{pageNo:a,pageSize:e}}],function(s,r){var l=r.get("data");t.data={list:l.list,pageNo:a,pageSize:e,totalCount:l.totalCount},t.setView()})},"pageChange<change>":function(t){this.to({pageNo:t.state.page})},filters:{formatStatus:function(t){var a;switch(t){case 0:a='<span class="color-m">\u5df2\u5173\u95ed</span>';break;case 1:a='<span class="color-orange">\u5f85\u4ed8\u6b3e</span>';break;case 2:a='<span class="color-orange">\u5f85\u5904\u7406</span>';break;case 3:a='<span class="color-green">\u5df2\u4ed8\u6b3e</span>';break;case 4:a='<span class="color-green">\u5df2\u5b8c\u6210</span>'}return a},formatRefundStatus:function(t){var a;switch(t){case 0:a='<span class="color-m">\u9000\u6b3e\u62d2\u7edd</span>';break;case 1:a='<span class="color-orange">\u9000\u6b3e\u5f85\u5904\u7406</span>';break;case 2:a='<span class="color-orange">\u9000\u6b3e\u4e2d</span>';break;case 3:a='<span class="color-green">\u9000\u6b3e\u6210\u529f</span>'}return a}}})});