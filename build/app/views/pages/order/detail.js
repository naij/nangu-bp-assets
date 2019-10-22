define("app/views/pages/order/detail",["magix","jquery"],function(t,e,a){{var s=t("magix");t("jquery")}a.exports=s.View.extend({tmpl:'<div class="page-header clearfix"><div class="title-bar"><h2 class="title">\u8ba2\u5355\u8be6\u60c5</h2></div></div><div class="page-body order-detail"><div class="status-wrapper"><div class="order-status">\u8ba2\u5355\u72b6\u6001\uff1a{{order.orderStatus|formatStatus}}</div><a href="/order/refund_detail?id={{orderRefund.id}}" class="refund-status" t-if="orderRefund">{{{orderRefund.status|formatRefundStatus}}}</a></div><div class="order-info"><div class="hd">\u57fa\u672c\u4fe1\u606f</div><div class="table-container"><table class="table"><thead><tr><th class="left">\u8ba2\u5355\u7f16\u53f7</th><th class="left">\u652f\u4ed8\u7f16\u53f7</th><th class="left">\u5fae\u4fe1\u652f\u4ed8\u8ba2\u5355\u53f7</th><th class="left">\u521b\u5efa\u65f6\u95f4</th><th class="left">\u652f\u4ed8\u65f6\u95f4</th><th class="left">\u51fa\u7968\u7c7b\u578b</th></tr></thead><tbody><tr><td class="left">{{order.orderSn}}</td><td class="left">{{order.outTradeNo}}</td><td class="left">{{order.transactionId}}</td><td class="left">{{order.createdAt|formatDate}}</td><td class="left">{{order.payedAt|formatDate}}</td><td class="left">{{order.ticketGenType|formatTicketGenType}}</td></tr></tbody></table></div></div><div class="contact-info"><div class="hd">\u8054\u7cfb\u4eba\u4fe1\u606f</div><div class="table-container"><table class="table"><thead><tr t-class:no-data="list.length == 0"><th class="left">\u59d3\u540d</th><th class="left">\u624b\u673a\u53f7</th><th class="left">\u8eab\u4efd\u8bc1\u53f7</th></tr></thead><tbody><tr><td class="left">{{order.receiverName}}</td><td class="left">{{order.receiverPhoneNumber}}</td><td class="left">{{order.receiverIDNumber}}</td></tr></tbody></table></div></div><div class="product-info"><div class="hd">\u5546\u54c1\u4fe1\u606f</div><div class="table-container"><table class="table"><thead><tr t-class:no-data="list.length == 0"><th class="left">\u56fe\u7247</th><th class="left">\u540d\u79f0</th><th class="left">\u5c5e\u6027</th><th class="left">\u4ef7\u683c</th><th class="left">\u6570\u91cf</th><th class="left">\u603b\u8ba1</th></tr></thead><tbody><tr><td class="left"><img src="{{orderProduct.productCover}}"></td><td class="left">{{orderProduct.productTitle}}</td><td class="left">{{orderProduct.productPropertiesName}}</td><td class="left">\uffe5{{orderProduct.productPrice}}</td><td class="left">{{order.productQuantity}}</td><td class="left"><span class="color-red">\uffe5{{order.paymentAmount}}</span></td></tr></tbody></table></div></div></div>',render:function(){var t=this,e=t.param("orderSn");t.request().all([{name:"order_detail",params:{orderSn:e}}],function(e,a){var s=a.get("data");t.data=s,t.setView()})},filters:{formatTicketGenType:function(t){var e;switch(t){case 0:e="\u81ea\u52a8\u51fa\u7968";break;case 1:e="\u624b\u52a8\u51fa\u7968"}return e},formatStatus:function(t){var e;switch(t){case 0:e="\u5df2\u5173\u95ed";break;case 1:e="\u5f85\u4ed8\u6b3e";break;case 2:e="\u5f85\u5904\u7406";break;case 3:e="\u5df2\u4ed8\u6b3e";break;case 4:e="\u5df2\u5b8c\u6210";break;case 99:e="\u7528\u6237\u5220\u9664"}return e},formatRefundStatus:function(t){var e;switch(t){case 0:e='<span class="color-m">\u9000\u6b3e\u62d2\u7edd</span>';break;case 1:e='<span class="color-red">\u9000\u6b3e\u5f85\u5904\u7406</span>';break;case 2:e='<span class="color-red">\u9000\u6b3e\u4e2d</span>';break;case 3:e='<span class="color-green">\u9000\u6b3e\u6210\u529f</span>'}return e}}})});