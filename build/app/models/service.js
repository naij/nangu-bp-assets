define("app/models/service",["magix","jquery"],function(e,o,t){var a=e("magix"),r=e("jquery"),n=a.Service.extend(function(e,o){var t={method:"GET",dataType:"json"},n=e.get("params")||e.get("formParams")||e.get("urlParams")||{},s=e.get("url"),d=e.get("method")||t.method,p=e.get("dataType")||t.dataType,c=[];if("POST"==d.toUpperCase()&&(n._csrf=a.config("csrf")),r.extend(n,{t:+new Date}),"object"==typeof n){for(var i in n)n.hasOwnProperty(i)&&c.push("object"==typeof n[i]?i+"="+encodeURIComponent(JSON.stringify(n[i])):i+"="+encodeURIComponent(n[i]));n=c.join("&")}r.ajax({url:a.toUrl(s),dataType:p,data:n,type:d,complete:function(t,a){if("error"===a)console.log("error....");else{var n=r.parseJSON(t.responseText);n.code&&200===n.code?(e.set("data",n.data),o()):n.code&&403===n.code?location.href="/user/admin/login":o({msg:n.message})}}})});t.exports=n});