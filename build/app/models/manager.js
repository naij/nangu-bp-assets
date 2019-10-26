define("app/models/manager",["app/models/service"],function(e,a,r){var t=e("app/models/service");t.add([{name:"login",url:"/api/member/admin/login.json",method:"POST"},{name:"logout",url:"/api/member/admin/logout.json"},{name:"pubinfo",url:"/api/member/admin/pubinfo.json"},{name:"member_list",url:"/api/member/member/list.json"},{name:"activity_list",url:"/api/wxapp/activity/list.json"},{name:"roomvoucher_list",url:"/api/wxapp/roomvoucher/list.json"},{name:"category_list",url:"/api/wxapp/category/list.json"},{name:"category_detail",url:"/api/wxapp/category/detail.json"},{name:"category_create",url:"/api/wxapp/category/create.json",method:"POST"},{name:"category_update",url:"/api/wxapp/category/update.json",method:"POST"},{name:"category_remove",url:"/api/wxapp/category/remove.json",method:"POST"},{name:"attribute_list",url:"/api/wxapp/attribute/list.json"},{name:"attribute_detail",url:"/api/wxapp/attribute/detail.json"},{name:"attribute_create",url:"/api/wxapp/attribute/create.json",method:"POST"},{name:"attribute_update",url:"/api/wxapp/attribute/update.json",method:"POST"},{name:"attribute_remove",url:"/api/wxapp/attribute/remove.json",method:"POST"},{name:"detailfield_list",url:"/api/wxapp/detailfield/list.json"},{name:"detailfield_detail",url:"/api/wxapp/detailfield/detail.json"},{name:"detailfield_create",url:"/api/wxapp/detailfield/create.json",method:"POST"},{name:"detailfield_update",url:"/api/wxapp/detailfield/update.json",method:"POST"},{name:"detailfield_remove",url:"/api/wxapp/detailfield/remove.json",method:"POST"},{name:"product_list",url:"/api/wxapp/product/list.json"},{name:"product_detail",url:"/api/wxapp/product/detail.json"},{name:"product_create",url:"/api/wxapp/product/create.json",method:"POST"},{name:"product_update",url:"/api/wxapp/product/update.json",method:"POST"},{name:"product_online",url:"/api/wxapp/product/online.json",method:"POST"},{name:"product_offline",url:"/api/wxapp/product/offline.json",method:"POST"},{name:"product_remove",url:"/api/wxapp/product/remove.json",method:"POST"},{name:"product_remove_complete",url:"/api/wxapp/product/remove_complete.json",method:"POST"},{name:"order_list",url:"/api/wxapp/order/list.json"},{name:"order_detail",url:"/api/wxapp/order/detail.json"},{name:"order_update_status",url:"/api/wxapp/order/update_status.json",method:"POST"},{name:"order_refund_detail",url:"/api/wxapp/order/refund_detail.json"},{name:"order_refund",url:"/api/wxapp/payment/refund.json",method:"POST"},{name:"order_refund_refuse",url:"/api/wxapp/order/refund_refuse.json",method:"POST"},{name:"order_refund_reason_list",url:"/api/wxapp/order/refund_reason_list.json"},{name:"order_refund_reason_detail",url:"/api/wxapp/order/refund_reason_detail.json"},{name:"order_refund_reason_create",url:"/api/wxapp/order/refund_reason_create.json",method:"POST"},{name:"order_refund_reason_update",url:"/api/wxapp/order/refund_reason_update.json",method:"POST"},{name:"order_refund_reason_remove",url:"/api/wxapp/order/refund_reason_remove.json",method:"POST"},{name:"picture_list",url:"/api/tool/pic/list.json"},{name:"picture_remove",url:"/api/tool/pic/remove.json",method:"POST"},{name:"assets_list",url:"/api/tool/assets/list.json"},{name:"assets_detail",url:"/api/tool/assets/detail.json"}]),r.exports=t});