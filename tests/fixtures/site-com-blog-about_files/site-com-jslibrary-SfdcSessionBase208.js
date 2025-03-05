/*
 * This code is for Internal Salesforce use only, and subject to change without notice.
 * Customers shouldn't reference this file in any web pages.
 */
this.Sfdc||(Sfdc={});
if("undefined"===typeof SfdcFramework){var SfdcFramework=function(m,b){function y(a,c,d){var e=!1;b.isArray(d)&&(e=!r(d));k[a]={pending:e,name:a,ctr:c,dependencies:d};e?b.require(d,function(){var b=k[a];b&&(b.pending=!1);v(a)}):v(a)}function v(a){if(a in l){for(var c=l[a],d=[],e,f=0;f<c.length;f++)e=s[c[f]],r(e)&&d.push(c[f]);delete l[a];a=d}else a=[];if(b.isArray(a)&&0<a.length)for(c=0;c<a.length;c++)u(a[c],s[a[c]])}function u(a,c){var d=[];b.isArray(c)||(c=[]);for(var e,f,g=0;g<c.length;g++)(e=
k[c[g]])&&!e.pending&&(f=u(e.ctr,e.dependencies)),d.push(f);return a.apply(this,d)}function r(a){b.assert(b.isArray(a),"Required ModulesList is an Array");for(var c,d=0;d<a.length;d++)if(c=a[d],b.isEmpty(c)&&b.error("A specified ModuleName must be a non empty string"),c=k[c],!c||c.pending)return!1;return!0}b||(b={});var w=m.Sizzle,n=m.document,x=[],z=0,q=Object.prototype.toString,k={},s={},l={};b.isDebug=function(){var a=n&&(n.head||n.getElementsByTagName("head")[0]);return a&&"true"===a.getAttribute("debug")}();
b.parseUserAgent=function(a){a=a||m.navigator&&m.navigator.userAgent||"";var b=-1!=a.indexOf("Chromium"),d=-1!=a.indexOf("AppleWebKit"),e=d&&-1!=a.indexOf("Chrome/"),f=d&&!e,g=-1!=a.indexOf("Firefox/"),h=-1!=a.indexOf("MSIE ")||-1!=a.indexOf("Trident/"),p=parseInt(a.split("MSIE")[1],10)||-1;h&&(-1==p&&-1!=a.indexOf("Trident/7.0"))&&(p=11);var k=-1;if(e||b)k=a.match(/Chrom(e|ium)\/([0-9]+)\./)||[],k=parseInt(k[2],10)||-1;var l=-1;g&&(l=a.match(/Firefox\/([0-9]+)\./)||[],l=parseInt(l[1],10)||-1);var n=
-1;if(-1!==a.indexOf("iPhone")||-1!==a.indexOf("iPad"))n=a.match(/\(iP.+; CPU .*OS (\d+)[_\d]*.*\) AppleWebKit\//)||[],n=parseInt(n[1],10)||-1;var q=-1!==a.indexOf("Macintosh;")||-1!==a.indexOf("Mac OS X"),r=-1,t=-1,s=!1;q&&(t=a.match(/\(Macintosh;.*Mac OS X (\d+)_(\d+)[_\d]*.*\) AppleWebKit\//)||[],r=parseInt(t[1],10)||-1,t=parseInt(t[2],10)||-1,s=!!a.match(/^Mozilla\/[\.\d]+ \(Macintosh;.*Mac OS X [_\d]+\) AppleWebKit\/[\.\d]+ \(KHTML, like Gecko\)$/));return{isIE:h,isIE11:h&&11==p,isIE10:h&&10==
p,isIE9:h&&9==p,isIE8:h&&8==p,isIE7:h&&7==p,isIE6:h&&6==p,ieVersion:p,isWebkit:d,isChrome:e,isChromeFrame:e&&"undefined"!=typeof m.externalHost,isChromium:b,chromeVersionMajor:k,isSafari:f,isSafari3:f&&-1!=a.indexOf("Version/3"),isSafariIpad:d&&-1!=a.indexOf("iPad"),isSafariIOS:f&&(-1!=a.indexOf("iPad")||-1!=a.indexOf("iPhone")),iOSVersionMajor:n,isMacOS:q,macOSVersionMajor:r,macOSVersionMinor:t,isMacEmbeddedBrowser:s,isFirefox:g,firefoxVersionMajor:l,isFirefox3:g&&-1!=a.indexOf("Firefox/3"),isOpera:-1!=
a.indexOf("Opera"),isNetscape:-1!=a.indexOf("Netscape/")}};b.userAgent=new function(){return b.parseUserAgent()};b.ns=function(){for(var a=Array.prototype.slice.call(arguments),b=null;a.length;)for(var d=(a.shift()||"").toString().split("."),b=m;d.length;){var e=d.shift();if(!e.length)break;b[e]||(b[e]={});b=b[e]}return b};b.provide=function(a,c){if(a&&c){var d=b.resolve(a);if(!d){var e=a.split("."),d=e.pop(),e=b.ns(e.join("."));c.$constructor&&(b.assert(b.Class,"Sfdc.provide(): Sfdc.Class is required when providing $constructor 'classOrFunction' notation."),
c=new b.Class(c));b.define(a,function(){return c});return e[d]=c}return d}};b.resolve=function(a,b){var d=b||m;if(void 0!=a&&a.length)for(var e=a.split(".");d&&e.length;)d=d[e.shift()];return void 0!=d?d:null};b.apply=function(a,b,d){if(d)for(var e in b)b.hasOwnProperty(e)&&(a[e]=b[e]);else for(var f in b)a.hasOwnProperty(f)||(a[f]=b[f]);return a};b.clone=function(a,c){c=!!c;if(!a)return a;var d=b.isArray(a),e=b.isObject(a);if(!d&&!e)return a;if(c){if(d)for(var d=[],f=0,e=a.length;f<e;f++)d.push(b.clone(a[f],
!0));else for(f in d={},a)a.hasOwnProperty(f)&&(d[f]=b.clone(a[f],!0));return d}return d?a.slice():b.apply({},a)};b.each=function(a,c,d){b.assert(b.Array,"Sfdc.each(): Sfdc.Array is required for calls to Sfdc.each().");if(b.isArray(a))return b.Array.forEach(a,c,d);if("length"in a)return b.Array.forEach(b.Array.toArray(a),c,d);b.error("You tried to iterate over an object that is not yet supported.");return null};b.onReady=function(a){b.assert(b.Dom,"Sfdc.onReady(): Sfdc.Dom is required for calls to Sfdc.onReady().");
return b.Dom.onReady(a)};b.onload=function(a){b.assert(b.Dom,"Sfdc.onload(): Sfdc.Dom is required for calls to Sfdc.onload().");return b.Dom.onload(a)};b.isArray=function(a){return void 0===a||null===a?!1:"[object Array]"===q.call(a)};b.isObject=function(a){return null!=a?"object"===typeof a&&!b.isArray(a):!1};b.isString=function(a){return"[object String]"===q.call(a)};b.isBoolean=function(a){return"[object Boolean]"===q.call(a)};b.isFunction=function(a){return"function"===typeof a};b.isNumber=function(a){return"[object Number]"===
q.call(a)};b.select=function(a,c){b.assert(w,"Sfdc.select(): There is no selection engine specified.");return w(a,c)};b.get=function(a,c){if(!b.isString(a))return a;var d=n;if(/^[>\.#\\]/.test(a))return b.first(a,c);c?d=c.getElementById?c:c.ownerDocument:c=d;d=d.getElementById(a);return null===d||d.getAttribute("id")===a?d:c.all?c.all[a]:null};b.first=function(a,c){return b.select(a,c)[0]||null};b.assert=function(a,c){if(void 0===a||null===a||!1===!!a)throw"error"in b&&b.error(c),Error(c);return a};
b.isDefAndNotNull=function(a){return void 0!==a&&null!==a};b.on=function(a,c,d,e,f){b.assert(b.Event,"Sfdc.on(): Sfdc.Event is required to use Sfdc.on().");b.assert(a,"Sfdc.on(): 'element' must be a valid Object or Node.");b.assert(c,"Sfdc.on(): 'eventName' must be a valid String.");b.Event.add(a,c,d,e,f);return b};b.un=function(a,c,d,e){b.assert(b.Event,"Sfdc.un(): Sfdc.Event is required to use Sfdc.un().");b.assert(a,"Sfdc.un(): 'element' must be a valid Object or Node.");b.assert(c,"Sfdc.un(): 'eventName' must be a valid String.");
b.Event.remove(a,c,d,e);return b};b.getConst=function(a,c){b.assert(void 0!==m[a],"That Constants group does not exist.");return m[a][c]};b.getUID=function(a){if(a.getAttribute){var c=a.getAttribute("data-uidSfdc");if(c)return c;c=b.newUID();a.setAttribute("data-uidSfdc",c);return c}return(c=a["data-uidSfdc"])?c:a["data-uidSfdc"]=b.newUID()};b.hasUID=function(a){return a?a.getAttribute?null!=a.getAttribute("data-uidSfdc"):a.hasOwnProperty?a.hasOwnProperty("data-uidSfdc"):"data-uidSfdc"in a:!1};b.newUID=
function(){return++z};b.log=function(a,b,d){void 0!==a&&x.push({msg:a,level:b,args:d});return x};b.isEmpty=function(a){if(b.isObject(a)){for(var c in a)if(a.hasOwnProperty(c))return!1;return!0}return null===a||void 0===a||""===a||b.isArray(a)&&!a.length};b.inherits=function(a,c){if(!b.isFunction(a))throw Error("Sfdc.inherit(): 'type' must be a valid Function pointer.");for(var d=c;d;){if(a===d||d instanceof a||a===d.constructor)return!0;d=d.prototype}return!1};b.implies=function(a,c,d){if(!b.isObject(a))throw Error("Sfdc.implies(): 'contract' must be a valid Object.");
if(null==c)return d&&(d.reason="Instance was undefined."),!1;var e=null,f=null,g;for(g in a){if(void 0===c[g])return d&&(d.reason=b.String.format("Instance member not implemented. Expected: '{0}{1}'.",[g,b.isFunction(a[g])?b.String.format("({0})",[b.Function.getParameters(a[g]).join(", ")]):""])),!1;if(b.isFunction(a[g])){if(b.inherits(a[g],c[g]))continue;if(b.isFunction(c[g])&&b.isDebug&&(e=b.Function.getParameters(a[g]).join(", "),f=b.Function.getParameters(c[g]).join(", "),e!=f))return d&&(d.reason=
b.String.format("Instance member signature mismatch on '{0}()'. Expected '{0}({1})', found '{0}({2})'.",[g,e,f])),!1}if(b.isObject(a[g])){if(null!==c[g]&&!b.implies(a[g],c[g],d))return d&&(d.reason=b.String.format("Instance member type mismatch on '{0}': {1}",[g,d.reason])),!1}else if(typeof a[g]!==typeof c[g])return d&&(d.reason=b.String.format("Instance member type mismatch on '{0}'. Expected '{1}', found '{2}'.",[g,typeof a[g],typeof c[g]])),!1}return!0};b.isAssignableFrom=function(a,c,d){if(void 0==
a)throw Error("Sfdc.isAssignableFrom(): 'type' must be a valid Function or Object.");if(void 0!=c)switch(typeof a){case "object":if(a.constructor!=Object&&b.inherits(a.constructor,c)||b.implies(a,c,d))return!0;break;case "function":if(b.inherits(a,c))return!0}return!1};b.define=function(a,c,d){b.assert(b.isString(a)&&0<a.length,"ModuleName is required and must be a string of length greater than 0.");b.isFunction(c)?(d=c,c=null):(b.assert(b.isFunction(d),"ModuleConstructor parameter must be a function that returns an instance of the module."),
b.assert(b.isArray(c),"Dependencies for your module must be specified as an Array."));var e=k[a];e?(c=(e.dependencies||[]).toString()===(c||[]).toString(),(e.ctr.toString()!==d.toString()||!c)&&b.error("Cannot redefine an existing module ("+a+").")):y(a,d,c)};b.require=function(a,c){b.assert(!b.isEmpty(a),"Required Modules are required");b.isArray(a)||(a=Array.prototype.slice.call(arguments),c=a.pop());b.assert(b.isFunction(c),"Callback must be a function");if(r(a))u(c,a);else{var d=c,e=a;s[d]=e;
for(var f,g,h=0;h<e.length;h++)if(f=e[h],g=k[f],!g||g.pending)!1===f in l&&(l[f]=[]),l[f].push(d)}};b.error=function(a){throw Error(a);};return b};new SfdcFramework(this,Sfdc)};
Sfdc.provide("Sfdc.JSON",function(g){function k(a,b,f){if(g.isArray(a)){for(var c=f||[],e=0;e<a.length;e++)c.push(k(a[e],b));return c}if(g.isObject(a)){c=a.serId;if(void 0!==c)return a=a.value,e=g.isArray(a)?[]:{},b[c]=e,k(a,b,e);c=a.serRefId;if(void 0!==c)return b[c];c=f||{};for(e in a)a.hasOwnProperty(e)&&(c[e]=k(a[e],b));return c}return a}function m(a,b){var f=null,c=!1;if("string"!==typeof a||g.isEmpty(a))return f;if("undefined"!==typeof JSON&&JSON.parse)try{f=JSON.parse(a),c=!0}catch(e){}if(!c)try{f=
q(a)}catch(d){f=null}f&&b&&(f=k(f,{}));return f}var q=function(){var a,b,f={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},c,e=function(b){throw{name:"SyntaxError",message:b,at:a,text:c};},d=function(p){p&&p!==b&&e("Expected '"+p+"' instead of '"+b+"'");b=c.charAt(a);a+=1;return b},g=function(){var a;a="";"-"===b&&(a="-",d("-"));for(;"0"<=b&&"9">=b;)a+=b,d();if("."===b)for(a+=".";d()&&"0"<=b&&"9">=b;)a+=b;if("e"===b||"E"===b){a+=b;d();if("-"===b||"+"===b)a+=b,d();for(;"0"<=b&&"9">=
b;)a+=b,d()}a=+a;if(isFinite(a))return a;e("Bad number")},k=function(){var a,c,l="",g;if('"'===b)for(;d();){if('"'===b)return d(),l;if("\\"===b)if(d(),"u"===b){for(c=g=0;4>c;c+=1){a=parseInt(d(),16);if(!isFinite(a))break;g=16*g+a}l+=String.fromCharCode(g)}else if("string"===typeof f[b])l+=f[b];else break;else l+=b}e("Bad string")},h=function(){for(;b&&" ">=b;)d()},m=function(){switch(b){case "t":return d("t"),d("r"),d("u"),d("e"),!0;case "f":return d("f"),d("a"),d("l"),d("s"),d("e"),!1;case "n":return d("n"),
d("u"),d("l"),d("l"),null}e("Unexpected '"+b+"'")},n;n=function(){h();switch(b){case "{":var a;a:{var c={};if("{"===b){d("{");h();if("}"===b){d("}");a=c;break a}for(;b;){a=k();h();d(":");Object.hasOwnProperty.call(c,a)&&e('Duplicate key "'+a+'"');c[a]=n();h();if("}"===b){d("}");a=c;break a}d(",");h()}}e("Bad object");a=void 0}return a;case "[":a:{a=[];if("["===b){d("[");h();if("]"===b){d("]");break a}for(;b;){a.push(n());h();if("]"===b){d("]");break a}d(",");h()}}e("Bad array");a=void 0}return a;
case '"':return k();case "-":return g();default:return"0"<=b&&"9">=b?g():m()}};return function(d,f){var g;c=d;a=0;b=" ";g=n();h();b&&e("Syntax error");return"function"===typeof f?function r(a,b){var c,d,e=a[b];if(e&&"object"===typeof e)for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&(d=r(e,c),void 0!==d?e[c]=d:delete e[c]);return f.call(a,b,e)}({"":g},""):g}}();return{parseSafe:function(a,b){return m(a,b)},parse:function(a,b){return m(a,b)},parseWithCSRF:function(a,b){if(!g.isString(a))return null;
var f;a:{f=["while(1);\n","while(1);\n".replace("\n","")];for(var c=0,e=f.length;c<e;c++){var d=f[c];if(0===a.indexOf(d)){f=a.slice(d.length);break a}}g.assert(!1,"CSRF protect string not added to servlet response.");f=void 0}return m(f,b)},stringify:function(a,b,f){if("undefined"!==typeof JSON&&JSON.stringify){if(Array.prototype.toJSON){var c=Array.prototype,e=c.toJSON;delete c.toJSON;var d=JSON.stringify(a,b,f);c.toJSON=e;return d}return JSON.stringify(a,b,f)}if(void 0===a)return"";if(null===a)return"null";
switch(a.constructor){case String:return'"'+a.replace(/\\/g,"\\\\").replace(/\"/g,'\\"').replace(/\r|\n|\f/g,"\\n")+'"';case Array:c=[];for(e=0;e<a.length;e++)c.push(arguments.callee(a[e]));return"["+c.join(",")+"]";case Object:c=[];for(e in a)a.hasOwnProperty(e)&&("undefined"!==typeof a[e]&&"function"!==typeof a[e])&&c.push(arguments.callee(e)+":"+arguments.callee(a[e]));return"{"+c.join(",")+"}";default:return a.toString()}}}}(Sfdc));
(function(e,h){function l(a){if(a.origin.split("://")[1].split(":")[0]===SFDCSessionVars.host&&(a=Sfdc.JSON.parse(a.data))&&a.cmd&&"SfdcSession"==a.msgtype)if("sfdcsession::ready"===a.cmd)f=b.contentWindow,setTimeout(r,0);else{var c=g[a.id];c&&(c.callback&&c.callback(a),delete g[a.id])}}function r(){for(var a=0;a<k.length;a++){var c=g[k.shift()];f.postMessage(Sfdc.JSON.stringify(m(c)),h)}}function m(a){var c={},b;for(b in a)a.hasOwnProperty(b)&&"function"!=typeof a[b]&&(c[b]=a[b]);return c}function d(a){if(!n)if(a.id=
p,g[p++]=a,!b||!f){if(k.push(a.id),!b&&!f){a=e.document;b=a.createElement("iframe");b.setAttribute("title","sessionserver");b.setAttribute("aria-hidden","true");var c=b.style;c.position="absolute";c.left=c.top="-999px";e.addEventListener?e.addEventListener("message",l,!1):e.attachEvent&&e.attachEvent("onmessage",l);a.body.appendChild(b);b.src=h}}else f.postMessage(Sfdc.JSON.stringify(m(a)),h)}var q=!1;try{q=!!e.localStorage}catch(s){console.log("Can't access local storage: "+s)}var n=!(e.postMessage&&
q),b=null,f=null,g={},p=0,k=[];Sfdc.provide("SfdcApp.SfdcSession",{setIdentity:function(a){a||(a={});d({cmd:"sfdcsession::setIdentity",uid:a.uid||null,oid:a.oid||null,identity:a.identity||"",expire:a.expire||0,session:a.session||!1,active:a.active||!1,activeonly:a.activeonly||!1,community:a.community||!1,mydomain:a.mydomain||!1,callback:a.callback||null,retainhint:a.retainhint||!1})},getIdentities:function(a){a||(a={});d({cmd:"sfdcsession::getIdentities",get:a.get||[],callback:a.callback||null})},
active:function(a){a||(a={});d({cmd:"sfdcsession::active",uid:a.uid||null,oid:a.oid||null,callback:a.callback||null})},inactive:function(a){a||(a={});d({cmd:"sfdcsession::inactive",uid:a.uid||null,oid:a.oid||null,callback:a.callback||null,upexp:a.upexp||null,ll:a.ll})},updateAndActivate:function(a){a||(a={});d({cmd:"sfdcsession::updateandactivate",uid:a.uid||null,oid:a.oid||null,expire:a.expire||0,session:a.session||!1,instance:a.instance||null,callback:a.callback||null})},updateLastused:function(a){a||
(a={});d({cmd:"sfdcsession::updatelastused",uid:a.uid||null,oid:a.oid||null,callback:a.callback||null})},updateExpires:function(a){a||(a={});d({cmd:"sfdcsession::updateexpires",uid:a.uid||null,oid:a.oid||null,expire:a.expire||0,callback:a.callback||null})},deleteIdentity:function(a){a||(a={});d({cmd:"sfdcsession::deleteIdentity",uid:a.uid||null,oid:a.oid||null,callback:a.callback||null})},changeDisplay:function(a){a||(a={});d({cmd:"sfdcsession::changeDisplay",uid:a.uid||null,oid:a.oid||null,display:a.display||
null,callback:a.callback||null})},disabled:n})})(this,SFDCSessionVars.server);
(function(){function d(){SFDCSessionVars.success=!0;SFDCSessionVars.callback&&SFDCSessionVars.callback()}function e(){if("a"===a.act){var b={};b.uid=a.uid;b.username=a.un;b.thumbnail=a.photo;b.oid=a.oid;b.instance=a.inst;b.ll=a.ll;var c=a.disp;c&&(b.display=100<c.length?c.substring(0,100):c);SfdcApp.SfdcSession.setIdentity({uid:a.uid,oid:a.oid,identity:b,expire:a.exp,session:!0,active:!0,activeonly:a.ao,community:a.isComm,mydomain:a.isMyDom,callback:d,retainhint:a.rlh})}else"u"===a.act?SfdcApp.SfdcSession.updateExpires({oid:a.oid,
uid:a.uid,expire:a.exp,callback:d}):"t"===a.act&&SfdcApp.SfdcSession.updateAndActivate({oid:a.oid,uid:a.uid,expire:a.exp,session:!0,instance:a.inst,callback:d})}var a=SFDCSessionVars;!window.Sfdc||!Sfdc.require?e():Sfdc.require("SfdcApp.SfdcSession",e)})();

//# sourceMappingURL=/javascript/1703151337812/sfdc/source/SfdcSessionBase208.js.map
