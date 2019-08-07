define("app/util/format/format",function(n,s,e){e.exports={formatFloat:function(n){if(null===n||void 0===n)return"";if("number"==typeof n&&(n=this.formatNumber(n).join(".")),n.indexOf(".")>-1){n=n.split(".");var s=n[0],e=n[1];return'<span class="integer">'+s+'</span><span class="pointer">.</span><span class="decimal">'+e+"</span>"}return'<span class="integer">'+n+'</span><span class="pointer">.</span><span class="decimal">0</span>'},formatNumber:function(n,s){s=s||",";var e=typeof n;if("number"!==e&&"string"!==e&&"function"!==e)return["--"];if("function"===e&&(n=n()),"string"===e&&/[^\d\.\-]/.test(n))return["--"];if(isNaN(n))return["--"];var r=n.toFixed(2).toString(10),t=r.indexOf("-")>-1;t&&(r=r.slice(1));var a=r.split("."),i=a[0].split("").reverse().join(""),p=i.match(/\-?\d{3}/g)||[],o=i.length,l=i.slice(o-o%3),u=[];l&&p.push(l);for(var c=0;c<p.length;c++)p[c]=p[c].split("").reverse().join("");return u.push(t?"-"+p.reverse().join(s):p.reverse().join(s)),a[1]&&(a[1]=a[1].slice(0,2),1===a[1].length&&(a[1]=a[1]+"0"),u.push(a[1])),u},percentage:function(n){return n=n.match(/^[\d\.]{1,6}(?=%)/),n?'<span class="num">'+n[0]+'</span><span class="symbol">%</span>':void 0}}});