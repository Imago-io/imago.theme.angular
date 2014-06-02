/*
 AngularJS v1.3.0-build.2707+sha.63f284a
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(M,T,r){'use strict';function B(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.0-build.2707+sha.63f284a/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function fb(b){if(null==
b||Da(b))return!1;var a=b.length;return 1===b.nodeType&&a?!0:y(b)||N(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d;if(b)if(P(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(b.forEach&&b.forEach!==q)b.forEach(a,c);else if(fb(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Yb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}
function ed(b,a,c){for(var d=Yb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Zb(b){return function(a,c){b(c,a)}}function gb(){for(var b=ka.length,a;b;){b--;a=ka[b].charCodeAt(0);if(57==a)return ka[b]="A",ka.join("");if(90==a)ka[b]="0";else return ka[b]=String.fromCharCode(a+1),ka.join("")}ka.unshift("0");return ka.join("")}function $b(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function F(b){var a=b.$$hashKey;q(arguments,function(a){a!==b&&q(a,function(a,c){b[c]=a})});$b(b,a);return b}
function U(b){return parseInt(b,10)}function ac(b,a){return F(new (F(function(){},{prototype:b})),a)}function w(){}function Ea(b){return b}function ca(b){return function(){return b}}function I(b){return"undefined"===typeof b}function C(b){return"undefined"!==typeof b}function V(b){return null!=b&&"object"===typeof b}function y(b){return"string"===typeof b}function Fa(b){return"number"===typeof b}function pa(b){return"[object Date]"===ya.call(b)}function N(b){return"[object Array]"===ya.call(b)}function P(b){return"function"===
typeof b}function hb(b){return"[object RegExp]"===ya.call(b)}function Da(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function fd(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function gd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function hd(b,a,c){var d=[];q(b,function(b,f,h){d.push(a.call(c,b,f,h))});return d}function ib(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Ga(b,a){var c=ib(b,
a);0<=c&&b.splice(c,1);return a}function da(b,a){if(Da(b)||b&&b.$evalAsync&&b.$watch)throw Qa("cpws");if(a){if(b===a)throw Qa("cpi");if(N(b))for(var c=a.length=0;c<b.length;c++)a.push(da(b[c]));else{c=a.$$hashKey;q(a,function(b,c){delete a[c]});for(var d in b)a[d]=da(b[d]);$b(a,c)}}else(a=b)&&(N(b)?a=da(b,[]):pa(b)?a=new Date(b.getTime()):hb(b)?a=RegExp(b.source):V(b)&&(a=da(b,{})));return a}function bc(b,a){a=a||{};for(var c in b)!b.hasOwnProperty(c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=
b[c]);return a}function za(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(N(b)){if(!N(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!za(b[d],a[d]))return!1;return!0}}else{if(pa(b))return pa(a)&&b.getTime()==a.getTime();if(hb(b)&&hb(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Da(b)||Da(a)||N(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!P(b[d])){if(!za(b[d],
a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==r&&!P(a[d]))return!1;return!0}return!1}function cc(){return T.securityPolicy&&T.securityPolicy.isActive||T.querySelector&&!(!T.querySelector("[ng-csp]")&&!T.querySelector("[data-ng-csp]"))}function jb(b,a){var c=2<arguments.length?qa.call(arguments,2):[];return!P(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(qa.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?
a.apply(b,arguments):a.call(b)}}function id(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=r:Da(a)?c="$WINDOW":a&&T===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function ra(b,a){return"undefined"===typeof b?r:JSON.stringify(b,id,a?"  ":null)}function dc(b){return y(b)?JSON.parse(b):b}function Ra(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=z(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function ia(b){b=E(b).clone();try{b.empty()}catch(a){}var c=
E("<div>").append(b).html();try{return 3===b[0].nodeType?z(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+z(b)})}catch(d){return z(c)}}function ec(b){try{return decodeURIComponent(b)}catch(a){}}function fc(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.split("="),d=ec(c[0]),C(d)&&(b=C(c[1])?ec(c[1]):!0,a[d]?N(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Db(b){var a=[];q(b,function(b,d){N(b)?q(b,function(b){a.push(Aa(d,!0)+(!0===b?"":"="+Aa(b,!0)))}):
a.push(Aa(d,!0)+(!0===b?"":"="+Aa(b,!0)))});return a.length?a.join("&"):""}function kb(b){return Aa(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Aa(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function jd(b,a){var c,d,e=gc.length;b=E(b);for(d=0;d<e;++d)if(c=gc[d]+a,y(c=b.attr(c)))return c;return null}function kd(b,a){function c(a){a&&d.push(a)}var d=[b],e,f,h={},g=["ng:app",
"ng-app","x-ng-app","data-ng-app"],p=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;q(g,function(a){g[a]=!0;c(T.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(q(b.querySelectorAll("."+a),c),q(b.querySelectorAll("."+a+"\\:"),c),q(b.querySelectorAll("["+a+"]"),c))});q(d,function(a){if(!e){var b=p.exec(" "+a.className+" ");b?(e=a,f=(b[2]||"").replace(/\s+/g,",")):q(a.attributes,function(b){!e&&g[b.name]&&(e=a,f=b.value)})}});e&&(h.strictDi=null!==jd(e,"strict-di"),a(e,f?[f]:[],h))}function hc(b,
a,c){V(c)||(c={});c=F({strictDi:!1},c);var d=function(){b=E(b);if(b.injector()){var d=b[0]===T?"document":ia(b);throw Qa("btstrpd",d);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");d=Eb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},e=/^NG_DEFER_BOOTSTRAP!/;if(M&&!e.test(M.name))return d();M.name=M.name.replace(e,"");Sa.resumeBootstrap=
function(b){q(b,function(b){a.push(b)});d()}}function lb(b,a){a=a||"_";return b.replace(ld,function(b,d){return(d?a:"")+b.toLowerCase()})}function md(){var b;(sa=M.jQuery)&&sa.fn.on?(E=sa,F(sa.fn,{scope:Ha.scope,isolateScope:Ha.isolateScope,controller:Ha.controller,injector:Ha.injector,inheritedData:Ha.inheritedData}),b=sa.cleanData,b=b.$$original||b,sa.cleanData=function(a){for(var c=0,d;null!=(d=a[c]);c++)sa(d).triggerHandler("$destroy");b(a)},sa.cleanData.$$original=b):E=W;Sa.element=E}function Fb(b,
a,c){if(!b)throw Qa("areq",a||"?",c||"required");return b}function Ta(b,a,c){c&&N(b)&&(b=b[b.length-1]);Fb(P(b),a,"not a function, got "+(b&&"object"==typeof b?b.constructor.name||"Object":typeof b));return b}function Ba(b,a){if("hasOwnProperty"===b)throw Qa("badname",a);}function ic(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,h=0;h<f;h++)d=a[h],b&&(b=(e=b)[d]);return!c&&P(b)?jb(e,b):b}function Gb(b){var a=b[0];b=b[b.length-1];if(a===b)return E(a);var c=[a];do{a=a.nextSibling;if(!a)break;
c.push(a)}while(a!==b);return E(c)}function nd(b){var a=B("$injector"),c=B("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||B;return b.module||(b.module=function(){var b={};return function(e,f,h){if("hasOwnProperty"===e)throw c("badname","module");f&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e,f){f||(f=c);return function(){f[e||"push"]([a,d,arguments]);return m}}if(!f)throw a("nomod",e);var c=[],d=[],l=[],n=b("$injector","invoke","push",d),m={_invokeQueue:c,
_configBlocks:d,_runBlocks:l,requires:f,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide","constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:n,run:function(a){l.push(a);return this}};h&&n(h);return m}())}}())}function od(b){F(b,{bootstrap:hc,copy:da,
extend:F,equals:za,element:E,forEach:q,injector:Eb,noop:w,bind:jb,toJson:ra,fromJson:dc,identity:Ea,isUndefined:I,isDefined:C,isString:y,isFunction:P,isObject:V,isNumber:Fa,isElement:fd,isArray:N,version:pd,isDate:pa,lowercase:z,uppercase:Ia,callbacks:{counter:0},$$minErr:B,$$csp:cc});Ua=nd(M);try{Ua("ngLocale")}catch(a){Ua("ngLocale",[]).provider("$locale",qd)}Ua("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:rd});a.provider("$compile",jc).directive({a:sd,input:kc,textarea:kc,
form:td,script:ud,select:vd,style:wd,option:xd,ngBind:yd,ngBindHtml:zd,ngBindTemplate:Ad,ngClass:Bd,ngClassEven:Cd,ngClassOdd:Dd,ngCloak:Ed,ngController:Fd,ngForm:Gd,ngHide:Hd,ngIf:Id,ngInclude:Jd,ngInit:Kd,ngNonBindable:Ld,ngPluralize:Md,ngRepeat:Nd,ngShow:Od,ngStyle:Pd,ngSwitch:Qd,ngSwitchWhen:Rd,ngSwitchDefault:Sd,ngOptions:Td,ngTransclude:Ud,ngModel:Vd,ngList:Wd,ngChange:Xd,required:lc,ngRequired:lc,ngValue:Yd,ngModelOptions:Zd}).directive({ngInclude:$d}).directive(Hb).directive(mc);a.provider({$anchorScroll:ae,
$animate:be,$browser:ce,$cacheFactory:de,$controller:ee,$document:fe,$exceptionHandler:ge,$filter:nc,$interpolate:he,$interval:ie,$http:je,$httpBackend:ke,$location:le,$log:me,$parse:ne,$rootScope:oe,$q:pe,$sce:qe,$sceDelegate:re,$sniffer:se,$templateCache:te,$timeout:ue,$window:ve,$$rAF:we,$$asyncCallback:xe})}])}function Va(b){return b.replace(ye,function(a,b,d,e){return e?d.toUpperCase():d}).replace(ze,"Moz$1")}function Ae(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Ib.test(b)){c=c||e.appendChild(a.createElement("div"));
d=(Be.exec(b)||["",""])[1].toLowerCase();d=fa[d]||fa._default;c.innerHTML=d[1]+b.replace(Ce,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=f.concat(qa.call(c.childNodes,void 0));c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";q(f,function(a){e.appendChild(a)});return e}function W(b){if(b instanceof W)return b;y(b)&&(b=aa(b));if(!(this instanceof W)){if(y(b)&&"<"!=b.charAt(0))throw Jb("nosel");return new W(b)}if(y(b)){var a;a=T;var c;b=(c=De.exec(b))?
[a.createElement(c[1])]:(c=Ae(b,a))?c.childNodes:[]}oc(this,b)}function Kb(b){return b.cloneNode(!0)}function Ja(b){pc(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Ja(b[a])}function qc(b,a,c,d){if(C(d))throw Jb("offargs");var e=la(b,"events");la(b,"handle")&&(I(a)?q(e,function(a,c){Wa(b,c,a);delete e[c]}):q(a.split(" "),function(a){I(c)?(Wa(b,a,e[a]),delete e[a]):Ga(e[a]||[],c)}))}function pc(b,a){var c=b[mb],d=Xa[c];d&&(a?delete Xa[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),
qc(b)),delete Xa[c],b[mb]=r))}function la(b,a,c){var d=b[mb],d=Xa[d||-1];if(C(c))d||(b[mb]=d=++Ee,d=Xa[d]={}),d[a]=c;else return d&&d[a]}function rc(b,a,c){var d=la(b,"data"),e=C(c),f=!e&&C(a),h=f&&!V(a);d||h||la(b,"data",d={});if(e)d[a]=c;else if(f){if(h)return d&&d[a];F(d,a)}else return d}function Lb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function nb(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",
aa((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+aa(a)+" "," ")))})}function ob(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(a.split(" "),function(a){a=aa(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",aa(c))}}function oc(b,a){if(a){a=a.nodeName||!C(a.length)||Da(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function sc(b,a){return pb(b,"$"+(a||"ngController")+"Controller")}function pb(b,a,c){b=
E(b);9==b[0].nodeType&&(b=b.find("html"));for(a=N(a)?a:[a];b.length;){for(var d=b[0],e=0,f=a.length;e<f;e++)if((c=b.data(a[e]))!==r)return c;b=E(d.parentNode||11===d.nodeType&&d.host)}}function tc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ja(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function uc(b,a){var c=qb[a.toLowerCase()];return c&&vc[b.nodeName]&&c}function Fe(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=
function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||T);if(I(c.defaultPrevented)){var f=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var h=bc(a[e||c.type]||[]);q(h,function(a){a.call(b,c)});8>=X?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=
b;return c}function Ka(b){var a=typeof b,c;"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=b.$$hashKey():c===r&&(c=b.$$hashKey=gb()):c=b;return a+":"+c}function Ya(b){q(b,this.put,this)}function Ge(b){return(b=b.toString().replace(wc,"").match(xc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Mb(b,a,c){var d;if("function"==typeof b){if(!(d=b.$inject)){d=[];if(b.length){if(a)throw y(c)&&c||(c=b.name||Ge(b)),La("strictdi",c);a=b.toString().replace(wc,"");a=a.match(xc);
q(a[1].split(He),function(a){a.replace(Ie,function(a,b,c){d.push(c)})})}b.$inject=d}}else N(b)?(a=b.length-1,Ta(b[a],"fn"),d=b.slice(0,a)):Ta(b,"fn",!0);return d}function Eb(b,a){function c(a){return function(b,c){if(V(b))q(b,Zb(a));else return a(b,c)}}function d(a,b){Ba(a,"service");if(P(b)||N(b))b=m.instantiate(b);if(!b.$get)throw La("pget",a);return n[a+p]=b}function e(a,b){return d(a,{$get:b})}function f(a){var b=[],c;q(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],
f=m.get(e[0]);f[e[1]].apply(f,e[2])}}if(!l.get(a)){l.put(a,!0);try{y(a)?(c=Ua(a),b=b.concat(f(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):P(a)?b.push(m.invoke(a)):N(a)?b.push(m.invoke(a)):Ta(a,"module")}catch(e){throw N(a)&&(a=a[a.length-1]),e.message&&(e.stack&&-1==e.stack.indexOf(e.message))&&(e=e.message+"\n"+e.stack),La("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a){if(b.hasOwnProperty(a)){if(b[a]===g)throw La("cdep",k.join(" <- "));
return b[a]}try{return k.unshift(a),b[a]=g,b[a]=c(a)}catch(e){throw b[a]===g&&delete b[a],e;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[];g=Mb(b,a,g);var p,k,l;k=0;for(p=g.length;k<p;k++){l=g[k];if("string"!==typeof l)throw La("itkn",l);h.push(f&&f.hasOwnProperty(l)?f[l]:d(l))}b.$inject||(b=b[p]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=function(){};d.prototype=(N(a)?a[a.length-1]:a).prototype;d=new d;a=e(a,d,b,c);return V(a)||P(a)?
a:d},get:d,annotate:Mb,has:function(a){return n.hasOwnProperty(a+p)||b.hasOwnProperty(a)}}}a=!0===a;var g={},p="Provider",k=[],l=new Ya,n={$provide:{provider:c(d),factory:c(e),service:c(function(a,b){return e(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return e(a,ca(b))}),constant:c(function(a,b){Ba(a,"constant");n[a]=b;s[a]=b}),decorator:function(a,b){var c=m.get(a+p),d=c.$get;c.$get=function(){var a=t.invoke(d,c);return t.invoke(b,null,{$delegate:a})}}}},m=n.$injector=
h(n,function(){throw La("unpr",k.join(" <- "));},a),s={},t=s.$injector=h(s,function(a){var b=m.get(a+p);return t.invoke(b.$get,b,r,a)},a);q(f(b),function(a){t.invoke(a||w)});return t}function ae(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;q(a,function(a){b||"a"!==z(a.nodeName)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=h.getElementById(b))?d.scrollIntoView():(d=e(h.getElementsByName(b)))?d.scrollIntoView():
"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function xe(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function Je(b,a,c,d){function e(a){try{a.apply(null,qa.call(arguments,1))}finally{if(t--,0===t)for(;J.length;)try{J.pop()()}catch(b){c.error(b)}}}function f(a,b){(function rb(){q(A,function(a){a()});D=b(rb,a)})()}function h(){v=
null;x!=g.url()&&(x=g.url(),q(Z,function(a){a(g.url())}))}var g=this,p=a[0],k=b.location,l=b.history,n=b.setTimeout,m=b.clearTimeout,s={};g.isMock=!1;var t=0,J=[];g.$$completeOutstandingRequest=e;g.$$incOutstandingRequestCount=function(){t++};g.notifyWhenNoOutstandingRequests=function(a){q(A,function(a){a()});0===t?a():J.push(a)};var A=[],D;g.addPollFn=function(a){I(D)&&f(100,n);A.push(a);return a};var x=k.href,G=a.find("base"),v=null;g.url=function(a,c){k!==b.location&&(k=b.location);l!==b.history&&
(l=b.history);if(a){if(x!=a)return x=a,d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),G.attr("href",G.attr("href"))):(v=a,c?k.replace(a):k.href=a),g}else return v||k.href.replace(/%27/g,"'")};var Z=[],O=!1;g.onUrlChange=function(a){if(!O){if(d.history)E(b).on("popstate",h);if(d.hashchange)E(b).on("hashchange",h);else g.addPollFn(h);O=!0}Z.push(a);return a};g.baseHref=function(){var a=G.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var R={},L="",S=g.baseHref();g.cookies=
function(a,b){var d,e,f,g;if(a)b===r?p.cookie=escape(a)+"=;path="+S+";expires=Thu, 01 Jan 1970 00:00:00 GMT":y(b)&&(d=(p.cookie=escape(a)+"="+escape(b)+";path="+S).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(p.cookie!==L)for(L=p.cookie,d=L.split("; "),R={},f=0;f<d.length;f++)e=d[f],g=e.indexOf("="),0<g&&(a=unescape(e.substring(0,g)),R[a]===r&&(R[a]=unescape(e.substring(g+1))));return R}};g.defer=function(a,b){var c;
t++;c=n(function(){delete s[c];e(a)},b||0);s[c]=!0;return c};g.defer.cancel=function(a){return s[a]?(delete s[a],m(a),e(w),!0):!1}}function ce(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new Je(b,d,a,c)}]}function de(){this.$get=function(){function b(b,d){function e(a){a!=n&&(m?m==a&&(m=a.n):m=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw B("$cacheFactory")("iid",b);var h=0,g=F({},d,{id:b}),p={},k=d&&d.capacity||Number.MAX_VALUE,
l={},n=null,m=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=l[a]||(l[a]={key:a});e(c)}if(!I(b))return a in p||h++,p[a]=b,h>k&&this.remove(m.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=l[a];if(!b)return;e(b)}return p[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=l[a];if(!b)return;b==n&&(n=b.p);b==m&&(m=b.n);f(b.n,b.p);delete l[a]}delete p[a];h--},removeAll:function(){p={};h=0;l={};n=m=null},destroy:function(){l=g=p=null;delete a[b]},info:function(){return F({},g,{size:h})}}}
var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function te(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function jc(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,f=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,h=gd("ngSrc,ngSrcset,src,srcset"),g=/^(on[a-z]+|formaction)$/;this.directive=function k(a,e){Ba(a,"directive");y(a)?(Fb(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,
["$injector","$exceptionHandler",function(b,d){var e=[];q(c[a],function(c,f){try{var g=b.invoke(c);P(g)?g={compile:ca(g)}:!g.compile&&g.link&&(g.compile=ca(g.link));g.priority=g.priority||0;g.index=f;g.name=g.name||a;g.require=g.require||g.controller&&g.name;g.restrict=g.restrict||"A";e.push(g)}catch(h){d(h)}});return e}])),c[a].push(e)):q(a,Zb(k));return this};this.aHrefSanitizationWhitelist=function(b){return C(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=
function(b){return C(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,n,m,s,t,J,A,D,x,G,v){function Z(a,b,c,d,e){a instanceof E||(a=E(a));q(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=E(b).wrap("<span></span>").parent()[0])});var f=R(a,b,a,c,d,e);O(a,"ng-scope");return function(b,
c,d){Fb(b,"scope");var e=c?Ha.clone.call(a):a;q(d,function(a,b){e.data("$"+b+"Controller",a)});d=0;for(var g=e.length;d<g;d++){var h=e[d].nodeType;1!==h&&9!==h||e.eq(d).data("$scope",b)}c&&c(e,b);f&&f(b,e,e);return e}}function O(a,b){try{a.addClass(b)}catch(c){}}function R(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,n,s,A;f=c.length;var D=Array(f);for(n=0;n<f;n++)D[n]=c[n];A=n=0;for(s=h.length;n<s;A++)if(k=D[A],c=h[n++],f=h[n++],l=E(k),c){c.scope?(m=a.$new(),l.data("$scope",m)):m=a;if(c.transcludeOnThisElement||
!e&&b)e=L(a,c.transclude||b);c(f,m,k,d,e)}else f&&f(a,k.childNodes,r,e)}for(var h=[],k,l,m,n,s=0;s<a.length;s++)k=new Nb,l=S(a[s],[],k,0===s?d:r,e),(f=l.length?ea(l,a[s],k,b,c,null,[],[],f):null)&&f.scope&&O(E(a[s]),"ng-scope"),k=f&&f.terminal||!(m=a[s].childNodes)||!m.length?null:R(m,f?f.transclude:b),h.push(f,k),n=n||f||k,f=null;return n?g:null}function L(a,b){return function(c,d,e){var f=!1;c||(c=a.$new(),f=c.$$transcluded=!0);d=b(c,d,e);if(f)d.on("$destroy",jb(c,c.$destroy));return d}}function S(a,
b,c,d,g){var h=c.$attr,k;switch(a.nodeType){case 1:C(b,ma(Ma(a).toLowerCase()),"E",d,g);var l,m,n;k=a.attributes;for(var s=0,A=k&&k.length;s<A;s++){var D=!1,t=!1;l=k[s];if(!X||8<=X||l.specified){m=l.name;n=ma(m);ta.test(n)&&(m=lb(n.substr(6),"-"));var J=n.replace(/(Start|End)$/,"");n===J+"Start"&&(D=m,t=m.substr(0,m.length-5)+"end",m=m.substr(0,m.length-6));n=ma(m.toLowerCase());h[n]=m;c[n]=l=aa(l.value);uc(a,n)&&(c[n]=!0);Q(a,b,l,n);C(b,n,"A",d,g,D,t)}}a=a.className;if(y(a)&&""!==a)for(;k=f.exec(a);)n=
ma(k[2]),C(b,n,"C",d,g)&&(c[n]=aa(k[3])),a=a.substr(k.index+k[0].length);break;case 3:M(b,a.nodeValue);break;case 8:try{if(k=e.exec(a.nodeValue))n=ma(k[1]),C(b,n,"M",d,g)&&(c[n]=aa(k[2]))}catch(x){}}b.sort(B);return b}function u(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return E(d)}function ba(a,b,c){return function(d,e,f,g,h){e=u(e[0],
b,c);return a(d,e,f,g,h)}}function ea(a,c,d,e,f,g,h,k,m){function s(a,b,c,d){if(a){c&&(a=ba(a,c,d));a.require=H.require;a.directiveName=F;if(L===H||H.$$isolateScope)a=zc(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=ba(b,c,d));b.require=H.require;b.directiveName=F;if(L===H||H.$$isolateScope)b=zc(b,{isolateScope:!0});k.push(b)}}function A(a,b,c,d){var e,f="data",g=!1;if(y(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),"^"==e&&(f="inheritedData"),g=g||"?"==e;e=null;d&&"data"===f&&(e=d[b]);e=e||c[f]("$"+
b+"Controller");if(!e&&!g)throw ja("ctreq",b,a);}else N(b)&&(e=[],q(b,function(b){e.push(A(a,b,c,d))}));return e}function D(a,e,f,g,m){function s(a,b){var c;2>arguments.length&&(b=a,a=r);Na&&(c=Z);return m(a,b,c)}var x,v,yc,u,ba,S,Z={},ea;x=c===f?d:bc(d,new Nb(E(f),d.$attr));v=x.$$element;if(L){var Q=/^\s*([@=&])(\??)\s*(\w*)\s*$/;g=E(f);S=e.$new(!0);!R||R!==L&&R!==L.$$originalDirective?g.data("$isolateScopeNoTemplate",S):g.data("$isolateScope",S);O(g,"ng-isolate-scope");q(L.scope,function(a,c){var d=
a.match(Q)||[],f=d[3]||c,g="?"==d[2],d=d[1],h,k,m,n;S.$$isolateBindings[c]=d+f;switch(d){case "@":x.$observe(f,function(a){S[c]=a});x.$$observers[f].$$scope=e;x[f]&&(S[c]=b(x[f])(e));break;case "=":if(g&&!x[f])break;k=t(x[f]);n=k.literal?za:function(a,b){return a===b};m=k.assign||function(){h=S[c]=k(e);throw ja("nonassign",x[f],L.name);};h=S[c]=k(e);S.$watch(function(){var a=k(e);n(a,S[c])||(n(a,h)?m(e,a=S[c]):S[c]=a);return h=a},null,k.literal);break;case "&":k=t(x[f]);S[c]=function(a){return k(e,
a)};break;default:throw ja("iscp",L.name,c,a);}})}ea=m&&s;G&&q(G,function(a){var b={$scope:a===L||a.$$isolateScope?S:e,$element:v,$attrs:x,$transclude:ea},c;ba=a.controller;"@"==ba&&(ba=x[a.name]);c=J(ba,b);Z[a.name]=c;Na||v.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});g=0;for(yc=h.length;g<yc;g++)try{u=h[g],u(u.isolateScope?S:e,v,x,u.require&&A(u.directiveName,u.require,v,Z),ea)}catch(Ke){n(Ke,ia(v))}g=e;L&&(L.template||null===L.templateUrl)&&(g=S);a&&a(g,f.childNodes,
r,m);for(g=k.length-1;0<=g;g--)try{u=k[g],u(u.isolateScope?S:e,v,x,u.require&&A(u.directiveName,u.require,v,Z),ea)}catch(C){n(C,ia(v))}}m=m||{};for(var x=-Number.MAX_VALUE,v,G=m.controllerDirectives,L=m.newIsolateScopeDirective,R=m.templateDirective,ea=m.nonTlbTranscludeDirective,C=!1,Na=m.hasElementTranscludeDirective,K=d.$$element=E(c),H,F,Q,z=e,B,M=0,ta=a.length;M<ta;M++){H=a[M];var Za=H.$$start,U=H.$$end;Za&&(K=u(c,Za,U));Q=r;if(x>H.priority)break;if(Q=H.scope)v=v||H,H.templateUrl||($a("new/isolated scope",
L,H,K),V(Q)&&(L=H));F=H.name;!H.templateUrl&&H.controller&&(Q=H.controller,G=G||{},$a("'"+F+"' controller",G[F],H,K),G[F]=H);if(Q=H.transclude)C=!0,H.$$tlb||($a("transclusion",ea,H,K),ea=H),"element"==Q?(Na=!0,x=H.priority,Q=u(c,Za,U),K=d.$$element=E(T.createComment(" "+F+": "+d[F]+" ")),c=K[0],sb(f,E(qa.call(Q,0)),c),z=Z(Q,e,x,g&&g.name,{nonTlbTranscludeDirective:ea})):(Q=E(Kb(c)).contents(),K.empty(),z=Z(Q,e));if(H.template)if($a("template",R,H,K),R=H,Q=P(H.template)?H.template(K,d):H.template,
Q=Ac(Q),H.replace){g=H;Q=Ib.test(Q)?E(W(H.type,aa(Q))):[];c=Q[0];if(1!=Q.length||1!==c.nodeType)throw ja("tplrt",F,"");sb(f,K,c);ta={$attr:{}};Q=S(c,[],ta);var X=a.splice(M+1,a.length-(M+1));L&&rb(Q);a=a.concat(Q).concat(X);w(d,ta);ta=a.length}else K.html(Q);if(H.templateUrl)$a("template",R,H,K),R=H,H.replace&&(g=H),D=I(a.splice(M,a.length-M),K,d,f,z,h,k,{controllerDirectives:G,newIsolateScopeDirective:L,templateDirective:R,nonTlbTranscludeDirective:ea}),ta=a.length;else if(H.compile)try{B=H.compile(K,
d,z),P(B)?s(null,B,Za,U):B&&s(B.pre,B.post,Za,U)}catch(Y){n(Y,ia(K))}H.terminal&&(D.terminal=!0,x=Math.max(x,H.priority))}D.scope=v&&!0===v.scope;D.transcludeOnThisElement=C;D.transclude=z;m.hasElementTranscludeDirective=Na;return D}function rb(a){for(var b=0,c=a.length;b<c;b++)a[b]=ac(a[b],{$$isolateScope:!0})}function C(b,e,f,g,h,l,m){if(e===h)return null;h=null;if(c.hasOwnProperty(e)){var s;e=a.get(e+d);for(var A=0,D=e.length;A<D;A++)try{s=e[A],(g===r||g>s.priority)&&-1!=s.restrict.indexOf(f)&&
(l&&(s=ac(s,{$$start:l,$$end:m})),b.push(s),h=s)}catch(t){n(t)}}return h}function w(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,f){"class"==f?(O(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function I(a,b,c,d,e,f,g,h){var k=[],l,n,A=b[0],
D=a.shift(),t=F({},D,{templateUrl:null,transclude:null,replace:null,$$originalDirective:D}),J=P(D.templateUrl)?D.templateUrl(b,c):D.templateUrl,v=D.type;b.empty();m.get(x.getTrustedResourceUrl(J),{cache:s}).success(function(m){var s,x;m=Ac(m);if(D.replace){m=Ib.test(m)?E(W(v,aa(m))):[];s=m[0];if(1!=m.length||1!==s.nodeType)throw ja("tplrt",D.name,J);m={$attr:{}};sb(d,b,s);var G=S(s,[],m);V(D.scope)&&rb(G);a=G.concat(a);w(c,m)}else s=A,b.html(m);a.unshift(t);l=ea(a,s,c,e,b,D,f,g,h);q(d,function(a,
c){a==s&&(d[c]=b[0])});for(n=R(b[0].childNodes,e);k.length;){m=k.shift();x=k.shift();var u=k.shift(),ba=k.shift(),G=b[0];if(x!==A){var Z=x.className;h.hasElementTranscludeDirective&&D.replace||(G=Kb(s));sb(u,E(x),G);O(E(G),Z)}x=l.transclude?L(m,l.transclude):ba;l(n,m,G,d,x)}k=null}).error(function(a,b,c,d){throw ja("tpload",d.url);});return function(a,b,c,d,e){k?(k.push(b),k.push(c),k.push(d),k.push(e)):l(n,b,c,d,e)}}function B(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<
b.name?-1:1:a.index-b.index}function $a(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,ia(d));}function M(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:ca(function(a,b){var c=b.parent(),e=c.data("$binding")||[];e.push(d);O(c.data("$binding",e),"ng-binding");a.$watch(d,function(a){b[0].nodeValue=a})})})}function W(a,b){a=z(a||"html");switch(a){case "svg":case "math":var c=T.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function Na(a,
b){if("srcdoc"==b)return x.HTML;var c=Ma(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return x.RESOURCE_URL}function Q(a,c,d,e){var f=b(d,!0);if(f){if("multiple"===e&&"SELECT"===Ma(a))throw ja("selmulti",ia(a));c.push({priority:100,compile:function(){return{pre:function(c,d,k){d=k.$$observers||(k.$$observers={});if(g.test(e))throw ja("nodomevents");if(f=b(k[e],!0,Na(a,e),h[e]))k[e]=f(c),(d[e]||(d[e]=[])).$$inter=!0,(k.$$observers&&k.$$observers[e].$$scope||c).$watch(f,
function(a,b){"class"===e&&a!=b?k.$updateClass(a,b):k.$set(e,a)})}}}})}}function sb(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;break}f&&f.replaceChild(c,d);a=T.createDocumentFragment();a.appendChild(d);c[E.expando]=d[E.expando];d=1;for(e=b.length;d<e;d++)f=b[d],E(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function zc(a,b){return F(function(){return a.apply(null,
arguments)},a,b)}var Nb=function(a,b){this.$$element=a;this.$attr=b||{}};Nb.prototype={$normalize:ma,$addClass:function(a){a&&0<a.length&&G.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&G.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Bc(a,b),d=Bc(b,a);0===c.length?G.removeClass(this.$$element,d):0===d.length?G.addClass(this.$$element,c):G.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=uc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=
b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=lb(a,"-"));e=Ma(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=v(b,"src"===a);!1!==c&&(null===b||b===r?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&q(c[a],function(a){try{a(b)}catch(c){n(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);A.$evalAsync(function(){e.$$inter||b(c[a])});return function(){Ga(e,b)}}};var U=b.startSymbol(),Y=
b.endSymbol(),Ac="{{"==U||"}}"==Y?Ea:function(a){return a.replace(/\{\{/g,U).replace(/}}/g,Y)},ta=/^ngAttr[A-Z]/;return Z}]}function ma(b){return Va(b.replace(Le,""))}function Bc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var h=d[f],g=0;g<e.length;g++)if(h==e[g])continue a;c+=(0<c.length?" ":"")+h}return c}function ee(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){Ba(a,"controller");V(a)?F(b,a):b[a]=d};this.$get=["$injector","$window",function(c,
d){return function(e,f){var h,g,p;y(e)&&(h=e.match(a),g=h[1],p=h[3],e=b.hasOwnProperty(g)?b[g]:ic(f.$scope,g,!0)||ic(d,g,!0),Ta(e,g,!0));h=c.instantiate(e,f,g);if(p){if(!f||"object"!=typeof f.$scope)throw B("$controller")("noscp",g||e.name,p);f.$scope[p]=h}return h}}]}function fe(){this.$get=["$window",function(b){return E(b.document)}]}function ge(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Cc(b){var a={},c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=
b.indexOf(":");c=z(aa(b.substr(0,e)));d=aa(b.substr(e+1));c&&(a[c]=a[c]?a[c]+(", "+d):d)});return a}function Dc(b){var a=V(b)?b:r;return function(c){a||(a=Cc(b));return c?a[z(c)]||null:a}}function Ec(b,a,c){if(P(c))return c(b,a);q(c,function(c){b=c(b,a)});return b}function je(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){y(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=dc(d)));return d}],
transformRequest:[function(a){return V(a)&&"[object File]"!==ya.call(a)&&"[object Blob]"!==ya.call(a)?ra(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:da(d),put:da(d),patch:da(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},f=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,l,n){function m(a){function c(a){var b=F({},a,{data:Ec(a.data,a.headers,d.transformResponse)});return 200<=a.status&&
300>a.status?b:l.reject(b)}var d={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},f=function(a){function b(a){var c;q(a,function(b,d){P(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=F({},a.headers),f,g,c=F({},c.common,c[z(a.method)]);b(c);b(d);a:for(f in c){a=z(f);for(g in d)if(z(g)===a)continue a;d[f]=c[f]}return d}(a);F(d,a);d.headers=f;d.method=Ia(d.method);(a=Ob(d.url)?b.cookies()[d.xsrfCookieName||e.xsrfCookieName]:r)&&(f[d.xsrfHeaderName||
e.xsrfHeaderName]=a);var h=[function(a){f=a.headers;var b=Ec(a.data,Dc(f),a.transformRequest);I(a.data)&&q(f,function(a,b){"content-type"===z(b)&&delete f[b]});I(a.withCredentials)&&!I(e.withCredentials)&&(a.withCredentials=e.withCredentials);return s(a,b,f).then(c,c)},r],k=l.when(d);for(q(A,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&h.push(a.response,a.responseError)});h.length;){a=h.shift();var p=h.shift(),k=k.then(a,p)}k.success=
function(a){k.then(function(b){a(b.data,b.status,b.headers,d)});return k};k.error=function(a){k.then(null,function(b){a(b.data,b.status,b.headers,d)});return k};return k}function s(b,c,f){function g(a,b,c,e){q&&(200<=a&&300>a?q.put(ba,[a,b,Cc(c),e]):q.remove(ba));p(b,a,c,e);d.$$phase||d.$apply()}function p(a,c,d,e){c=Math.max(c,0);(200<=c&&300>c?s.resolve:s.reject)({data:a,status:c,headers:Dc(d),config:b,statusText:e})}function n(){var a=ib(m.pendingRequests,b);-1!==a&&m.pendingRequests.splice(a,
1)}var s=l.defer(),A=s.promise,q,u,ba=t(b.url,b.params);m.pendingRequests.push(b);A.then(n,n);(b.cache||e.cache)&&(!1!==b.cache&&"GET"==b.method)&&(q=V(b.cache)?b.cache:V(e.cache)?e.cache:J);if(q)if(u=q.get(ba),C(u)){if(u.then)return u.then(n,n),u;N(u)?p(u[1],u[0],da(u[2]),u[3]):p(u,200,{},"OK")}else q.put(ba,A);I(u)&&a(b.method,ba,c,g,f,b.timeout,b.withCredentials,b.responseType);return A}function t(a,b){if(!b)return a;var c=[];ed(b,function(a,b){null===a||I(a)||(N(a)||(a=[a]),q(a,function(a){V(a)&&
(a=ra(a));c.push(Aa(b)+"="+Aa(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var J=c("$http"),A=[];q(f,function(a){A.unshift(y(a)?n.get(a):n.invoke(a))});m.pendingRequests=[];(function(a){q(arguments,function(a){m[a]=function(b,c){return m(F(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){m[a]=function(b,c,d){return m(F(d||{},{method:a,url:b,data:c}))}})})("post","put");m.defaults=e;return m}]}function Me(b){if(8>=X&&(!b.match(/^(get|post|head|put|delete|options)$/i)||
!M.XMLHttpRequest))return new M.ActiveXObject("Microsoft.XMLHTTP");if(M.XMLHttpRequest)return new M.XMLHttpRequest;throw B("$httpBackend")("noxhr");}function ke(){this.$get=["$browser","$window","$document",function(b,a,c){return Ne(b,Me,b.defer,a.angular.callbacks,c[0])}]}function Ne(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),h=null;f.type="text/javascript";f.src=a;f.async=!0;h=function(a){Wa(f,"load",h);Wa(f,"error",h);e.body.removeChild(f);f=null;var g=-1,t="unknown";a&&("load"!==
a.type||d[b].called||(a={type:"error"}),t=a.type,g="error"===a.type?404:200);c&&c(g,t)};tb(f,"load",h);tb(f,"error",h);e.body.appendChild(f);return h}var h=-1;return function(e,p,k,l,n,m,s,t){function J(){D=h;G&&G();v&&v.abort()}function A(a,d,e,f,g){O&&c.cancel(O);G=v=null;0===d&&(d=e?200:"file"==ua(p).protocol?404:0);a(1223===d?204:d,e,f,g||"");b.$$completeOutstandingRequest(w)}var D;b.$$incOutstandingRequestCount();p=p||b.url();if("jsonp"==z(e)){var x="_"+(d.counter++).toString(36);d[x]=function(a){d[x].data=
a;d[x].called=!0};var G=f(p.replace("JSON_CALLBACK","angular.callbacks."+x),x,function(a,b){A(l,a,d[x].data,"",b);d[x]=w})}else{var v=a(e);v.open(e,p,!0);q(n,function(a,b){C(a)&&v.setRequestHeader(b,a)});v.onreadystatechange=function(){if(v&&4==v.readyState){var a=null,b=null;D!==h&&(a=v.getAllResponseHeaders(),b="response"in v?v.response:v.responseText);A(l,D||v.status,b,a,v.statusText||"")}};s&&(v.withCredentials=!0);if(t)try{v.responseType=t}catch(r){if("json"!==t)throw r;}v.send(k||null)}if(0<
m)var O=c(J,m);else m&&m.then&&m.then(J)}}function he(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(f,k,l,n){n=!!n;for(var m,s,t=0,J=[],A=[],D=[],x=f.length,q=!1,v=!1,Z=[],O={},R={};t<x;)if(-1!=(m=f.indexOf(b,t))&&-1!=(s=f.indexOf(a,m+h)))t!==m&&(v=!0),J.push(f.substring(t,m)),t=f.substring(m+h,s),A.push(t),D.push(c(t)),t=s+g,q=!0;else{t!==x&&(v=!0,
J.push(f.substring(t)));break}J.length===A.length&&J.push("");if(l&&q&&(v||1<A.length))throw Fc("noconcat",f);if(!k||q){Z.length=J.length+A.length;var L=function(a){for(var b=0,c=A.length;b<c;b++)Z[2*b]=J[b],Z[2*b+1]=a[b];Z[2*c]=J[c];return Z.join("")},S=function(a){return a=l?e.getTrusted(l,a):e.valueOf(a)},u=function(a){if(I(a)||null===a)a="";"string"!=typeof a&&(a=ra(a));return a};return F(function(a){var b=a&&a.$id||"notAScope",c=O[b],e=R[b],g=0,h=A.length,k=Array(h),l,m=e===r?!0:!1;c||(c=[],
m=!0,a&&a.$on&&a.$on("$destroy",function(){O[b]=null;R[b]=null}));try{for(;g<h;g++){l=S(D[g](a));if(n&&I(l))return;l=u(l);l!==c[g]&&(m=!0);k[g]=l}m&&(O[b]=k,R[b]=e=L(k))}catch(s){a=Fc("interr",f,s.toString()),d(a)}return e},{exp:f,separators:J,expressions:A})}}var h=b.length,g=a.length;f.startSymbol=function(){return b};f.endSymbol=function(){return a};return f}]}function ie(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,h,g,p){var k=a.setInterval,l=a.clearInterval,n=c.defer(),
m=n.promise,s=0,t=C(p)&&!p;g=C(g)?g:0;m.then(null,null,d);m.$$intervalId=k(function(){n.notify(s++);0<g&&s>=g&&(n.resolve(s),l(m.$$intervalId),delete e[m.$$intervalId]);t||b.$apply()},h);e[m.$$intervalId]=n;return m}var e={};d.cancel=function(a){return a&&a.$$intervalId in e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],!0):!1};return d}]}function qd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,
minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),
AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Pb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=kb(b[a]);return b.join("/")}function Gc(b,a,c){b=ua(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=U(b.port)||Oe[b.protocol]||null}function Hc(b,a,c){var d="/"!==b.charAt(0);d&&
(b="/"+b);b=ua(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=fc(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function na(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function ab(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Qb(b){return b.substr(0,ab(b).lastIndexOf("/")+1)}function Ic(b,a){this.$$html5=!0;a=a||"";var c=Qb(b);Gc(b,this,b);this.$$parse=function(a){var e=
na(c,a);if(!y(e))throw Rb("ipthprfx",a,c);Hc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Db(this.$$search),b=this.$$hash?"#"+kb(this.$$hash):"";this.$$url=Pb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=na(b,d))!==r)return d=e,(e=na(a,e))!==r?c+(na("/",e)||e):b+d;if((e=na(c,d))!==r)return c+e;if(c==d+"/")return c}}function Sb(b,a){var c=Qb(b);Gc(b,this,b);this.$$parse=function(d){var e=na(b,
d)||na(c,d),e="#"==e.charAt(0)?na(a,e):this.$$html5?e:"";if(!y(e))throw Rb("ihshprfx",d,a);Hc(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Db(this.$$search),e=this.$$hash?"#"+kb(this.$$hash):"";this.$$url=Pb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(ab(b)==ab(a))return a}}function Tb(b,a){this.$$html5=
!0;Sb.apply(this,arguments);var c=Qb(b);this.$$rewrite=function(d){var e;if(b==ab(d))return d;if(e=na(c,d))return b+a+e;if(c===d+"/")return c};this.$$compose=function(){var c=Db(this.$$search),e=this.$$hash?"#"+kb(this.$$hash):"";this.$$url=Pb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function ub(b){return function(){return this[b]}}function Jc(b,a){return function(c){if(I(c))return this[b];this[b]=a(c);this.$$compose();return this}}function le(){var b="",a=!1;this.hashPrefix=function(a){return C(a)?
(b=a,this):b};this.html5Mode=function(b){return C(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function h(a){c.$broadcast("$locationChangeSuccess",g.absUrl(),a)}var g,p,k=d.baseHref(),l=d.url(),n;a?(n=l.substring(0,l.indexOf("/",l.indexOf("//")+2))+(k||"/"),p=e.history?Ic:Tb):(n=ab(l),p=Sb);g=new p(n,"#"+b);g.$$parse(g.$$rewrite(l));f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var e=E(a.target);"a"!==z(e[0].nodeName);)if(e[0]===
f[0]||!(e=e.parent())[0])return;var h=e.prop("href");V(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=ua(h.animVal).href);if(p===Tb){var k=e.attr("href")||e.attr("xlink:href");if(0>k.indexOf("://"))if(h="#"+b,"/"==k[0])h=n+h+k;else if("#"==k[0])h=n+h+(g.path()||"/")+k;else{for(var l=g.path().split("/"),k=k.split("/"),m=0;m<k.length;m++)"."!=k[m]&&(".."==k[m]?l.pop():k[m].length&&l.push(k[m]));h=n+h+l.join("/")}}l=g.$$rewrite(h);h&&(!e.attr("target")&&l&&!a.isDefaultPrevented())&&(a.preventDefault(),
l!=d.url()&&(g.$$parse(l),c.$apply(),M.angular["ff-684208-preventDefault"]=!0))}});g.absUrl()!=l&&d.url(g.absUrl(),!0);d.onUrlChange(function(a){g.absUrl()!=a&&(c.$evalAsync(function(){var b=g.absUrl();g.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(g.$$parse(b),d.url(b)):h(b)}),c.$$phase||c.$digest())});var m=0;c.$watch(function(){var a=d.url(),b=g.$$replace;m&&a==g.absUrl()||(m++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",g.absUrl(),a).defaultPrevented?g.$$parse(a):
(d.url(g.absUrl(),b),h(a))}));g.$$replace=!1;return m});return g}]}function me(){var b=!0,a=this;this.debugEnabled=function(a){return C(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||w;a=!1;try{a=!!e.apply}catch(p){}return a?function(){var a=[];q(arguments,
function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function ga(b,a){if("constructor"===b)throw Ca("isecfld",a);return b}function bb(b,a){if(b){if(b.constructor===b)throw Ca("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw Ca("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw Ca("isecdom",
a);}return b}function vb(b,a,c,d,e){e=e||{};a=a.split(".");for(var f,h=0;1<a.length;h++){f=ga(a.shift(),d);var g=b[f];g||(g={},b[f]=g);b=g;b.then&&e.unwrapPromises&&(va(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===r&&(b.$$v={}),b=b.$$v)}f=ga(a.shift(),d);return b[f]=c}function Kc(b,a,c,d,e,f,h){ga(b,f);ga(a,f);ga(c,f);ga(d,f);ga(e,f);return h.unwrapPromises?function(g,h){var k=h&&h.hasOwnProperty(b)?h:g,l;if(null==k)return k;(k=k[b])&&k.then&&(va(f),"$$v"in k||(l=k,l.$$v=r,l.then(function(a){l.$$v=
a})),k=k.$$v);if(!a)return k;if(null==k)return r;(k=k[a])&&k.then&&(va(f),"$$v"in k||(l=k,l.$$v=r,l.then(function(a){l.$$v=a})),k=k.$$v);if(!c)return k;if(null==k)return r;(k=k[c])&&k.then&&(va(f),"$$v"in k||(l=k,l.$$v=r,l.then(function(a){l.$$v=a})),k=k.$$v);if(!d)return k;if(null==k)return r;(k=k[d])&&k.then&&(va(f),"$$v"in k||(l=k,l.$$v=r,l.then(function(a){l.$$v=a})),k=k.$$v);if(!e)return k;if(null==k)return r;(k=k[e])&&k.then&&(va(f),"$$v"in k||(l=k,l.$$v=r,l.then(function(a){l.$$v=a})),k=k.$$v);
return k}:function(f,h){var k=h&&h.hasOwnProperty(b)?h:f;if(null==k)return k;k=k[b];if(!a)return k;if(null==k)return r;k=k[a];if(!c)return k;if(null==k)return r;k=k[c];if(!d)return k;if(null==k)return r;k=k[d];return e?null==k?r:k=k[e]:k}}function Pe(b,a){ga(b,a);return function(a,d){return null==a?r:(d&&d.hasOwnProperty(b)?d:a)[b]}}function Qe(b,a,c){ga(b,c);ga(a,c);return function(c,e){if(null==c)return r;c=(e&&e.hasOwnProperty(b)?e:c)[b];return null==c?r:c[a]}}function Lc(b,a,c){if(Ub.hasOwnProperty(b))return Ub[b];
var d=b.split("."),e=d.length,f;if(a.unwrapPromises||1!==e)if(a.unwrapPromises||2!==e)if(a.csp)f=6>e?Kc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,f){var g=0,h;do h=Kc(d[g++],d[g++],d[g++],d[g++],d[g++],c,a)(b,f),f=r,b=h;while(g<e);return h};else{var h="var p;\n";q(d,function(b,d){ga(b,c);h+="if(s == null) return undefined;\ns="+(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':
"")});var h=h+"return s;",g=new Function("s","k","pw",h);g.toString=ca(h);f=a.unwrapPromises?function(a,b){return g(a,b,va)}:g}else f=Qe(d[0],d[1],c);else f=Pe(d[0],c);"hasOwnProperty"!==b&&(Ub[b]=f);return f}function ne(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=function(b){return C(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return C(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer",
"$log",function(c,d,e){a.csp=d.csp;va=function(b){a.logPromiseWarnings&&!Mc.hasOwnProperty(b)&&(Mc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];e=new Vb(a);e=(new cb(e,c,a)).parse(d,!1);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return w}}}]}function pe(){this.$get=["$rootScope","$exceptionHandler",
function(b,a){return Re(function(a){b.$evalAsync(a)},a)}]}function Re(b,a){function c(a){return a}function d(a){return h(a)}var e=function(){var h=[],k,l;return l={resolve:function(a){if(h){var c=h;h=r;k=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],k.then(a[0],a[1],a[2])})}},reject:function(a){l.resolve(g(a))},notify:function(a){if(h){var c=h;h.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,f,g){var l=e(),J=function(d){try{l.resolve((P(b)?
b:c)(d))}catch(e){l.reject(e),a(e)}},A=function(b){try{l.resolve((P(f)?f:d)(b))}catch(c){l.reject(c),a(c)}},D=function(b){try{l.notify((P(g)?g:c)(b))}catch(d){a(d)}};h?h.push([J,A,D]):k.then(J,A,D);return l.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,f){var g=null;try{g=(a||c)()}catch(h){return b(h,!1)}return g&&P(g.then)?g.then(function(){return b(e,f)},function(a){return b(a,!1)}):
b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},f=function(a){return a&&P(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},h=function(a){var b=e();b.reject(a);return b.promise},g=function(c){return{then:function(f,g){var h=e();b(function(){try{h.resolve((P(g)?g:d)(c))}catch(b){h.reject(b),a(b)}});return h.promise}}};return{defer:e,reject:h,when:function(g,k,l,n){var m=e(),s,t=function(b){try{return(P(k)?k:c)(b)}catch(d){return a(d),
h(d)}},J=function(b){try{return(P(l)?l:d)(b)}catch(c){return a(c),h(c)}},A=function(b){try{return(P(n)?n:c)(b)}catch(d){a(d)}};b(function(){f(g).then(function(a){s||(s=!0,m.resolve(f(a).then(t,J,A)))},function(a){s||(s=!0,m.resolve(J(a)))},function(a){s||m.notify(A(a))})});return m.promise},all:function(a){var b=e(),c=0,d=N(a)?[]:{};q(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}
function we(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function oe(){var b=10,a=B("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&
(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,f,h){function g(){this.$id=gb();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}function p(b){if(m.$$phase)throw a("inprog",m.$$phase);m.$$phase=b}function k(a,b){var c=f(a);
Ta(c,b);return c}function l(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}g.prototype={constructor:g,$new:function(a){a?(a=new g,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(this.$$childScopeClass||(this.$$childScopeClass=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=gb();this.$$childScopeClass=
null},this.$$childScopeClass.prototype=this),a=new this.$$childScopeClass);a["this"]=a;a.$parent=this;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=k(a,"watch"),f=this.$$watchers,g={fn:b,last:n,get:e,exp:a,eq:!!d};c=null;if(!P(b)){var h=k(b||w,"listener");g.fn=function(a,b,c){h(c)}}if("string"==typeof a&&e.constant){var l=g.fn;g.fn=function(a,b,c){l.call(this,a,b,c);Ga(f,
g)}}f||(f=this.$$watchers=[]);f.unshift(g);return function(){Ga(f,g);c=null}},$watchGroup:function(a,b){var c=Array(a.length),d=Array(a.length),e=[],f=0,g=this;q(a,function(a,b){e.push(g.$watch(a,function(a,e){d[b]=a;c[b]=e;f++}))},this);e.push(g.$watch(function(){return f},function(){b(d,c,g)}));return function(){q(e,function(a){a()})}},$watchCollection:function(a,b){var c=this,d,e,g,h=1<b.length,k=0,l=f(a),m=[],p={},n=!0,q=0;return this.$watch(function(){d=l(c);var a,b;if(V(d))if(fb(d))for(e!==
m&&(e=m,q=e.length=0,k++),a=d.length,q!==a&&(k++,e.length=q=a),b=0;b<a;b++)e[b]!==e[b]&&d[b]!==d[b]||e[b]===d[b]||(k++,e[b]=d[b]);else{e!==p&&(e=p={},q=0,k++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?e[b]!==d[b]&&(k++,e[b]=d[b]):(q++,e[b]=d[b],k++));if(q>a)for(b in k++,e)e.hasOwnProperty(b)&&!d.hasOwnProperty(b)&&(q--,delete e[b])}else e!==d&&(e=d,k++);return k},function(){n?(n=!1,b(d,d,c)):b(d,g,c);if(h)if(V(d))if(fb(d)){g=Array(d.length);for(var a=0;a<d.length;a++)g[a]=d[a]}else for(a in g=
{},d)Nc.call(d,a)&&(g[a]=d[a]);else g=d})},$digest:function(){var d,f,g,h,k=this.$$asyncQueue,l=this.$$postDigestQueue,q,v,r=b,O,R=[],L,C,u;p("$digest");c=null;do{v=!1;for(O=this;k.length;){try{u=k.shift(),u.scope.$eval(u.expression)}catch(E){m.$$phase=null,e(E)}c=null}a:do{if(h=O.$$watchers)for(q=h.length;q--;)try{if(d=h[q])if((f=d.get(O))!==(g=d.last)&&!(d.eq?za(f,g):"number"==typeof f&&"number"==typeof g&&isNaN(f)&&isNaN(g)))v=!0,c=d,d.last=d.eq?da(f):f,d.fn(f,g===n?f:g,O),5>r&&(L=4-r,R[L]||(R[L]=
[]),C=P(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,C+="; newVal: "+ra(f)+"; oldVal: "+ra(g),R[L].push(C));else if(d===c){v=!1;break a}}catch(F){m.$$phase=null,e(F)}if(!(h=O.$$childHead||O!==this&&O.$$nextSibling))for(;O!==this&&!(h=O.$$nextSibling);)O=O.$parent}while(O=h);if((v||k.length)&&!r--)throw m.$$phase=null,a("infdig",b,ra(R));}while(v||k.length);for(m.$$phase=null;l.length;)try{l.shift()()}catch(y){e(y)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");
this.$$destroyed=!0;this!==m&&(q(this.$$listenerCount,jb(null,l,this)),a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=
[],this.$destroy=this.$digest=this.$apply=w,this.$on=this.$watch=this.$watchGroup=function(){return w})}},$eval:function(a,b){return f(a)(this,b)},$evalAsync:function(a){m.$$phase||m.$$asyncQueue.length||h.defer(function(){m.$$asyncQueue.length&&m.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return p("$apply"),this.$eval(a)}catch(b){e(b)}finally{m.$$phase=null;try{m.$digest()}catch(c){throw e(c),c;}}},
$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[ib(c,b)]=null;l(e,1,a)}},$emit:function(a,b){var c=[],d,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=[h].concat(qa.call(arguments,1)),l,m;do{d=f.$$listeners[a]||c;h.currentScope=f;l=0;for(m=
d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(p){e(p)}else d.splice(l,1),l--,m--;if(g)break;f=f.$parent}while(f);return h},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(qa.call(arguments,1)),h,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){e(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||
c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return f}};var m=new g;return m}]}function rd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file|blob):|data:image\//;this.aHrefSanitizationWhitelist=function(a){return C(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return C(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!X||8<=X)if(f=ua(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function Se(b){if("self"===
b)return b;if(y(b)){if(-1<b.indexOf("***"))throw wa("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(hb(b))return RegExp("^"+b.source+"$");throw wa("imatcher");}function Oc(b){var a=[];C(b)&&q(b,function(b){a.push(Se(b))});return a}function re(){this.SCE_CONTEXTS=ha;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Oc(a));return b};this.resourceUrlBlacklist=
function(b){arguments.length&&(a=Oc(b));return a};this.$get=["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw wa("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var f=d(),h={};h[ha.HTML]=d(f);h[ha.CSS]=d(f);h[ha.URL]=d(f);h[ha.JS]=d(f);h[ha.RESOURCE_URL]=
d(h[ha.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw wa("icontext",a,b);if(null===b||b===r||""===b)return b;if("string"!==typeof b)throw wa("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===r||""===d)return d;var f=h.hasOwnProperty(c)?h[c]:null;if(f&&d instanceof f)return d.$$unwrapTrustedValue();if(c===ha.RESOURCE_URL){var f=ua(d.toString()),l,n,m=!1;l=0;for(n=b.length;l<n;l++)if("self"===b[l]?Ob(f):b[l].exec(f.href)){m=!0;break}if(m)for(l=
0,n=a.length;l<n;l++)if("self"===a[l]?Ob(f):a[l].exec(f.href)){m=!1;break}if(m)return d;throw wa("insecurl",d.toString());}if(c===ha.HTML)return e(d);throw wa("unsafe");},valueOf:function(a){return a instanceof f?a.$$unwrapTrustedValue():a}}}]}function qe(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw wa("iequirks");var e=da(ha);e.isEnabled=function(){return b};e.trustAs=
d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Ea);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var f=e.parseAs,h=e.getTrusted,g=e.trustAs;q(ha,function(a,b){var c=z(b);e[Va("parse_as_"+c)]=function(b){return f(a,b)};e[Va("get_trusted_"+c)]=function(b){return h(a,b)};e[Va("trust_as_"+c)]=function(b){return g(a,b)}});return e}]}function se(){this.$get=["$window",
"$document",function(b,a){var c={},d=U((/android (\d+)/.exec(z((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},h=f.documentMode,g,p=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=f.body&&f.body.style,l=!1,n=!1;if(k){for(var m in k)if(l=p.exec(m)){g=l[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in k&&"webkit");l=!!("transition"in k||g+"Transition"in k);n=!!("animation"in k||g+"Animation"in k);!d||l&&n||(l=y(f.body.style.webkitTransition),
n=y(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!h||7<h),hasEvent:function(a){if("input"==a&&9==X)return!1;if(I(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:cc(),vendorPrefix:g,transitions:l,animations:n,android:d,msie:X,msieDocumentMode:h}}]}function ue(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,g,p){var k=c.defer(),l=k.promise,n=C(p)&&!p;g=a.defer(function(){try{k.resolve(e())}catch(a){k.reject(a),
d(a)}finally{delete f[l.$$timeoutId]}n||b.$apply()},g);l.$$timeoutId=g;f[g]=k;return l}var f={};e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),delete f[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function ua(b,a){var c=b;X&&(Y.setAttribute("href",c),c=Y.href);Y.setAttribute("href",c);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,
""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:"/"+Y.pathname}}function Ob(b){b=y(b)?ua(b):b;return b.protocol===Pc.protocol&&b.host===Pc.host}function ve(){this.$get=ca(M)}function nc(b){function a(d,e){if(V(d)){var f={};q(d,function(b,c){f[c]=a(c,b)});return f}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Qc);a("date",Rc);a("filter",Te);a("json",Ue);a("limitTo",
Ve);a("lowercase",We);a("number",Sc);a("orderBy",Tc);a("uppercase",Xe)}function Te(){return function(b,a,c){if(!N(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Sa.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Nc.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});
var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var h in a)(function(b){"undefined"!=typeof a[b]&&
e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(h);break;case "function":e.push(a);break;default:return b}d=[];for(h=0;h<b.length;h++){var g=b[h];e.check(g)&&d.push(g)}return d}}function Qc(b){var a=b.NUMBER_FORMATS;return function(b,d){I(d)&&(d=a.CURRENCY_SYM);return Uc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Sc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Uc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Uc(b,a,c,d,e){if(null==b||!isFinite(b)||
V(b))return"";var f=0>b;b=Math.abs(b);var h=b+"",g="",p=[],k=!1;if(-1!==h.indexOf("e")){var l=h.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&l[3]>e+1?h="0":(g=h,k=!0)}if(k)0<e&&(-1<b&&1>b)&&(g=b.toFixed(e));else{h=(h.split(Vc)[1]||"").length;I(e)&&(e=Math.min(Math.max(a.minFrac,h),a.maxFrac));h=Math.pow(10,e+1);b=Math.floor(b*h+5)/h;b=(""+b).split(Vc);h=b[0];b=b[1]||"";var l=0,n=a.lgSize,m=a.gSize;if(h.length>=n+m)for(l=h.length-n,k=0;k<l;k++)0===(l-k)%m&&0!==k&&(g+=c),g+=h.charAt(k);for(k=l;k<h.length;k++)0===
(h.length-k)%n&&0!==k&&(g+=c),g+=h.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(g+=d+b.substr(0,e))}p.push(f?a.negPre:a.posPre);p.push(g);p.push(f?a.negSuf:a.posSuf);return p.join("")}function wb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return wb(e,a,d)}}function xb(b,a){return function(c,d){var e=c["get"+b](),f=Ia(a?"SHORT"+b:b);return d[f][e]}}
function Wc(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function Xc(b){return function(a){var c=Wc(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return wb(a,b)}}function Rc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,h=0,g=b[8]?a.setUTCFullYear:a.setFullYear,p=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=U(b[9]+b[10]),h=U(b[9]+b[11]));g.call(a,U(b[1]),U(b[2])-1,U(b[3]));f=U(b[4]||0)-f;h=U(b[5]||
0)-h;g=U(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));p.call(a,f,h,g,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var f="",h=[],g,p;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;y(c)&&(c=Ye.test(c)?U(c):a(c));Fa(c)&&(c=new Date(c));if(!pa(c))return c;for(;e;)(p=Ze.exec(e))?(h=h.concat(qa.call(p,1)),e=h.pop()):(h.push(e),e=null);q(h,function(a){g=$e[a];f+=g?g(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,
"").replace(/''/g,"'")});return f}}function Ue(){return function(b){return ra(b,!0)}}function Ve(){return function(b,a){if(!N(b)&&!y(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):U(a);if(y(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Tc(b){return function(a,c,d){function e(a,b){return Ra(b)?function(b,c){return a(c,b)}:a}function f(a,b){var c=
typeof a,d=typeof b;return c==d?("string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!N(a)||!c)return a;c=N(c)?c:[c];c=hd(c,function(a){var c=!1,d=a||Ea;if(y(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var g=d();return e(function(a,b){return f(a[g],b[g])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var h=[],g=0;g<a.length;g++)h.push(a[g]);return h.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=
c[d](a,b);if(0!==e)return e}return 0},d))}}function xa(b){P(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ca(b)}function Yc(b,a,c,d){function e(a,c){c=c?"-"+lb(c,"-"):"";d.removeClass(b,(a?yb:zb)+c);d.addClass(b,(a?zb:yb)+c)}var f=this,h=b.parent().controller("form")||Ab,g=0,p=f.$error={},k=[];f.$name=a.name||a.ngForm;f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;h.$addControl(f);b.addClass(Oa);e(!0);f.$commitViewValue=function(){q(k,function(a){a.$commitViewValue()})};f.$addControl=
function(a){Ba(a.$name,"input");k.push(a);a.$name&&(f[a.$name]=a)};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];q(p,function(b,c){f.$setValidity(c,!0,a)});Ga(k,a)};f.$setValidity=function(a,b,c){var d=p[a];if(b)d&&(Ga(d,c),d.length||(g--,g||(e(b),f.$valid=!0,f.$invalid=!1),p[a]=!1,e(!0,a),h.$setValidity(a,!0,f)));else{g||e(b);if(d){if(-1!=ib(d,c))return}else p[a]=d=[],g++,e(!1,a),h.$setValidity(a,!1,f);d.push(c);f.$valid=!1;f.$invalid=!0}};f.$setDirty=function(){d.removeClass(b,
Oa);d.addClass(b,Bb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.removeClass(b,Bb);d.addClass(b,Oa);f.$dirty=!1;f.$pristine=!0;q(k,function(a){a.$setPristine()})}}function oa(b,a,c,d){b.$setValidity(a,c);return c?d:r}function af(b,a,c){var d=c.prop("validity");V(d)&&b.$parsers.push(function(c){if(b.$error[a]||!(d.badInput||d.customError||d.typeMismatch)||d.valueMissing)return c;b.$setValidity(a,!1)})}function db(b,a,c,d,e,f){var h=a.prop("validity"),g=a[0].placeholder,p=
{};if(!e.android){var k=!1;a.on("compositionstart",function(a){k=!0});a.on("compositionend",function(){k=!1;l()})}var l=function(e){if(!k){var f=a.val(),m=e&&e.type;if(X&&"input"===(e||p).type&&a[0].placeholder!==g)g=a[0].placeholder;else if(Ra(c.ngTrim||"T")&&(f=aa(f)),d.$viewValue!==f||h&&""===f&&!h.valueMissing)b.$$phase?d.$setViewValue(f,m):b.$apply(function(){d.$setViewValue(f,m)})}};if(e.hasEvent("input"))a.on("input",l);else{var n,m=function(a){n||(n=f.defer(function(){l(a);n=null}))};a.on("keydown",
function(a){var b=a.keyCode;91===b||(15<b&&19>b||37<=b&&40>=b)||m(a)});if(e.hasEvent("paste"))a.on("paste cut",m)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var q=c.ngPattern;q&&((e=q.match(/^\/(.*)\/([gim]*)$/))?(q=RegExp(e[1],e[2]),e=function(a){return oa(d,"pattern",d.$isEmpty(a)||q.test(a),a)}):e=function(c){var e=b.$eval(q);if(!e||!e.test)throw B("ngPattern")("noregexp",q,e,ia(a));return oa(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),
d.$parsers.push(e));if(c.ngMinlength){var t=U(c.ngMinlength);e=function(a){return oa(d,"minlength",d.$isEmpty(a)||a.length>=t,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var J=U(c.ngMaxlength);e=function(a){return oa(d,"maxlength",d.$isEmpty(a)||a.length<=J,a)};d.$parsers.push(e);d.$formatters.push(e)}}function Cb(b,a){return function(c){var d;return pa(c)?c:y(c)&&(b.lastIndex=0,c=b.exec(c))?(c.shift(),d={yyyy:0,MM:1,dd:1,HH:0,mm:0},q(c,function(b,c){c<a.length&&(d[a[c]]=+b)}),
new Date(d.yyyy,d.MM-1,d.dd,d.HH,d.mm)):NaN}}function eb(b,a,c,d){return function(e,f,h,g,p,k,l){db(e,f,h,g,p,k);g.$parsers.push(function(d){if(g.$isEmpty(d))return g.$setValidity(b,!0),null;if(a.test(d))return g.$setValidity(b,!0),c(d);g.$setValidity(b,!1);return r});g.$formatters.push(function(a){return pa(a)?l("date")(a,d):""});h.min&&(e=function(a){var b=g.$isEmpty(a)||c(a)>=c(h.min);g.$setValidity("min",b);return b?a:r},g.$parsers.push(e),g.$formatters.push(e));h.max&&(e=function(a){var b=g.$isEmpty(a)||
c(a)<=c(h.max);g.$setValidity("max",b);return b?a:r},g.$parsers.push(e),g.$formatters.push(e))}}function Wb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],l=0;l<b.length;l++)if(e==b[l])continue a;c.push(e)}return c}function e(a){if(!N(a)){if(y(a))return a.split(" ");if(V(a)){var b=[];q(a,function(a,c){a&&b.push(c)});return b}}return a}return{restrict:"AC",link:function(f,h,g){function p(a,b){var c=h.data("$classCounts")||{},d=[];
q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});h.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!l){var q=p(k,1);g.$addClass(q)}else if(!za(b,l)){var t=e(l),q=d(k,t),k=d(t,k),k=p(k,-1),q=p(q,1);0===q.length?c.removeClass(h,k):0===k.length?c.addClass(h,q):c.setClass(h,q,k)}}l=da(b)}var l;f.$watch(g[b],k,!0);g.$observe("class",function(a){k(f.$eval(g[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var h=c&1;if(h!==
d&1){var k=e(f.$eval(g[b]));h===a?(h=p(k,1),g.$addClass(h)):(h=p(k,-1),g.$removeClass(h))}})}}}]}var z=function(b){return y(b)?b.toLowerCase():b},Nc=Object.prototype.hasOwnProperty,Ia=function(b){return y(b)?b.toUpperCase():b},X,E,sa,qa=[].slice,bf=[].push,ya=Object.prototype.toString,Qa=B("ng"),Sa=M.angular||(M.angular={}),Ua,Ma,ka=["0","0","0"];X=U((/msie (\d+)/.exec(z(navigator.userAgent))||[])[1]);isNaN(X)&&(X=U((/trident\/.*; rv:(\d+)/.exec(z(navigator.userAgent))||[])[1]));w.$inject=[];Ea.$inject=
[];var aa=function(){return String.prototype.trim?function(b){return y(b)?b.trim():b}:function(b){return y(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Ma=9>X?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Ia(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var gc=["ng-","data-ng-","ng:","x-ng-"],ld=/[A-Z]/g,pd={full:"1.3.0-build.2707+sha.63f284a",major:1,minor:3,dot:0,codeName:"snapshot"},Xa=W.cache={},mb=W.expando="ng-"+
(new Date).getTime(),Ee=1,tb=M.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},Wa=M.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};W._data=function(b){return this.cache[b[this.expando]]||{}};var ye=/([\:\-\_]+(.))/g,ze=/^moz([A-Z])/,Jb=B("jqLite"),De=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Ib=/<|&#?\w+;/,Be=/<([\w:]+)/,Ce=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
fa={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};fa.optgroup=fa.option;fa.tbody=fa.tfoot=fa.colgroup=fa.caption=fa.thead;fa.th=fa.td;var Ha=W.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===T.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),W(M).on("load",a))},
toString:function(){var b=[];q(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?E(this[b]):E(this[this.length+b])},length:0,push:bf,sort:[].sort,splice:[].splice},qb={};q("multiple selected checked disabled readOnly required open".split(" "),function(b){qb[z(b)]=b});var vc={};q("input select option textarea button form details".split(" "),function(b){vc[Ia(b)]=!0});q({data:rc,inheritedData:pb,scope:function(b){return E(b).data("$scope")||pb(b.parentNode||b,["$isolateScope",
"$scope"])},isolateScope:function(b){return E(b).data("$isolateScope")||E(b).data("$isolateScopeNoTemplate")},controller:sc,injector:function(b){return pb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Lb,css:function(b,a,c){a=Va(a);if(C(c))b.style[a]=c;else{var d;8>=X&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=X&&(d=""===d?r:d);return d}},attr:function(b,a,c){var d=z(a);if(qb[d])if(C(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));
else return b[a]||(b.attributes.getNamedItem(a)||w).specified?d:r;else if(C(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?r:b},prop:function(b,a,c){if(C(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(I(d))return e?b[e]:"";b[e]=d}var a=[];9>X?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(I(a)){if("SELECT"===Ma(b)&&b.multiple){var c=[];q(b.options,function(a){a.selected&&
c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(I(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Ja(d[c]);b.innerHTML=a},empty:tc},function(b,a){W.prototype[a]=function(a,d){var e,f;if(b!==tc&&(2==b.length&&b!==Lb&&b!==sc?a:d)===r){if(V(a)){for(e=0;e<this.length;e++)if(b===rc)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;f=e===r?Math.min(this.length,1):this.length;for(var h=0;h<f;h++){var g=b(this[h],a,d);e=
e?e+g:g}return e}for(e=0;e<this.length;e++)b(this[e],a,d);return this}});q({removeData:pc,dealoc:Ja,on:function a(c,d,e,f){if(C(f))throw Jb("onargs");var h=la(c,"events"),g=la(c,"handle");h||la(c,"events",h={});g||la(c,"handle",g=Fe(c,h));q(d.split(" "),function(d){var f=h[d];if(!f){if("mouseenter"==d||"mouseleave"==d){var l=T.body.contains||T.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):
a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};h[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||g(a,d)})}else tb(c,d,g),h[d]=[];f=h[d]}f.push(e)})},off:qc,one:function(a,c,d){a=E(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ja(a);q(new W(c),function(c){d?e.insertBefore(c,d.nextSibling):
e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){q(new W(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;q(new W(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=E(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ja(a);
var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;q(new W(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:ob,removeClass:nb,toggleClass:function(a,c,d){c&&q(c.split(" "),function(c){var f=d;I(f)&&(f=!Lb(a,c));(f?ob:nb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?
a.getElementsByTagName(c):[]},clone:Kb,triggerHandler:function(a,c,d){c=(la(a,"events")||{})[c];d=d||[];var e=[{preventDefault:w,stopPropagation:w}];q(c,function(c){c.apply(a,e.concat(d))})}},function(a,c){W.prototype[c]=function(c,e,f){for(var h,g=0;g<this.length;g++)I(h)?(h=a(this[g],c,e,f),C(h)&&(h=E(h))):oc(h,a(this[g],c,e,f));return C(h)?h:this};W.prototype.bind=W.prototype.on;W.prototype.unbind=W.prototype.off});Ya.prototype={put:function(a,c){this[Ka(a)]=c},get:function(a){return this[Ka(a)]},
remove:function(a){var c=this[a=Ka(a)];delete this[a];return c}};var xc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,He=/,/,Ie=/^\s*(_?)(\S+?)\1\s*$/,wc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,La=B("$injector");Eb.$$annotate=Mb;var cf=B("$animate"),be=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw cf("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=
a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",function(a,d){return{enter:function(a,c,h,g){h?h.after(a):c.prepend(a);g&&d(g)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,g){this.enter(a,c,d,g)},addClass:function(a,c,h){c=y(c)?c:N(c)?c.join(" "):"";q(a,function(a){ob(a,c)});h&&d(h)},removeClass:function(a,c,h){c=y(c)?c:N(c)?c.join(" "):"";q(a,function(a){nb(a,c)});h&&d(h)},setClass:function(a,c,h,g){q(a,function(a){ob(a,c);nb(a,h)});
g&&d(g)},enabled:w}}]}],ja=B("$compile");jc.$inject=["$provide","$$sanitizeUriProvider"];var Le=/^(x[\:\-_]|data[\:\-_])/i,Fc=B("$interpolate"),df=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Oe={http:80,https:443,ftp:21},Rb=B("$location");Tb.prototype=Sb.prototype=Ic.prototype={$$html5:!1,$$replace:!1,absUrl:ub("$$absUrl"),url:function(a,c){if(I(a))return this.$$url;var d=df.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:ub("$$protocol"),
host:ub("$$host"),port:ub("$$port"),path:Jc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(y(a))this.$$search=fc(a);else if(V(a))this.$$search=a;else throw Rb("isrcharg");break;default:I(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Jc("$$hash",Ea),replace:function(){this.$$replace=!0;return this}};var Ca=B("$parse"),Mc={},va,Pa={"null":function(){return null},"true":function(){return!0},
"false":function(){return!1},undefined:w,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return C(d)?C(e)?d+e:d:C(e)?e:r},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(C(d)?d:0)-(C(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":w,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,
c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},ef={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},
Vb=function(a){this.options=a};Vb.prototype={constructor:Vb,lex:function(a){this.text=a;this.index=0;this.ch=r;this.lastCh=":";this.tokens=[];var c;for(a=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent(),this.was("{,")&&("{"===a[0]&&(c=this.tokens[this.tokens.length-1]))&&(c.json=-1===c.text.indexOf("."));
else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch,json:this.was(":[,")&&this.is("{[")||this.is("}]:,")}),this.is("{[")&&a.unshift(this.ch),this.is("}]")&&a.shift(),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{var d=this.ch+this.peek(),e=d+this.peek(2),f=Pa[this.ch],h=Pa[d],g=Pa[e];g?(this.tokens.push({index:this.index,text:e,fn:g}),this.index+=3):h?(this.tokens.push({index:this.index,text:d,fn:h}),this.index+=2):f?(this.tokens.push({index:this.index,
text:this.ch,fn:f,json:this.was("[,:")&&this.is("+-")}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===
a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=C(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw Ca("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=z(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=
d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,json:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,h,g;this.index<this.text.length;){g=this.text.charAt(this.index);if("."===g||this.isIdent(g)||this.isNumber(g))"."===g&&(e=this.index),c+=g;else break;
this.index++}if(e)for(f=this.index;f<this.text.length;){g=this.text.charAt(f);if("("===g){h=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(g))f++;else break}d={index:d,text:c};if(Pa.hasOwnProperty(c))d.fn=Pa[c],d.json=Pa[c];else{var p=Lc(c,this.options,this.text);d.fn=F(function(a,c){return p(a,c)},{assign:function(d,e){return vb(d,c,e,a.text,a.options)}})}this.tokens.push(d);h&&(this.tokens.push({index:e,text:".",json:!1}),this.tokens.push({index:e+1,text:h,json:!1}))},
readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var h=this.text.charAt(this.index),e=e+h;if(f)"u"===h?(h=this.text.substring(this.index+1,this.index+5),h.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+h+"]"),this.index+=4,d+=String.fromCharCode(parseInt(h,16))):d=(f=ef[h])?d+f:d+h,f=!1;else if("\\"===h)f=!0;else{if(h===a){this.index++;this.tokens.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}d+=
h}this.index++}this.throwError("Unterminated quote",c)}};var cb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};cb.ZERO=F(function(){return 0},{constant:!0});cb.prototype={constructor:cb,parse:function(a,c){this.text=a;this.json=c;this.tokens=this.lexer.lex(a);c&&(this.assignment=this.logicalOR,this.functionCall=this.fieldAccess=this.objectIndex=this.filterChain=function(){this.throwError("is not valid json",{text:a,index:0})});var d=c?this.primary():this.statements();0!==this.tokens.length&&
this.throwError("is an unexpected token",this.tokens[0]);d.literal=!!d.literal;d.constant=!!d.constant;return d},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.json&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?
(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw Ca("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw Ca("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],h=f.text;if(h===a||h===c||h===d||h===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,
e))?(this.json&&!a.json&&this.throwError("is not valid json",a),this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return F(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return F(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return F(function(e,f){return c(e,f,a,d)},{constant:a.constant&&d.constant})},
statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0;f<a.length;f++){var h=a[f];h&&(e=h(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());else{var e=
function(a,e,g){g=[g];for(var p=0;p<d.length;p++)g.push(d[p](a,e));return c.apply(a,g)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();
if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},
relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(cb.ZERO,a.fn,
this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Lc(d,this.options,this.text);return F(function(c,d,g){return e(g||a(c,d))},{assign:function(e,h,g){return vb(a(e,g),d,h,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return F(function(e,f){var h=a(e,f),g=d(e,f),p;if(!h)return r;(h=bb(h[g],c.text))&&(h.then&&c.options.unwrapPromises)&&(p=h,"$$v"in h||(p.$$v=r,p.then(function(a){p.$$v=
a})),h=h.$$v);return h},{assign:function(e,f,h){var g=d(e,h);return bb(a(e,h),c.text)[g]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(f,h){for(var g=[],p=c?c(f,h):f,k=0;k<d.length;k++)g.push(d[k](f,h));k=a(f,h,p)||w;bb(p,e.text);bb(k,e.text);g=k.apply?k.apply(p,g):k(g[0],g[1],g[2],g[3],g[4]);return bb(g,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;
var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return F(function(c,d){for(var h=[],g=0;g<a.length;g++)h.push(a[g](c,d));return h},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return F(function(c,d){for(var e={},p=0;p<
a.length;p++){var k=a[p];e[k.key]=k.value(c,d)}return e},{literal:!0,constant:c})}};var Ub={},wa=B("$sce"),ha={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Y=T.createElement("a"),Pc=ua(M.location.href,!0);nc.$inject=["$provide"];Qc.$inject=["$locale"];Sc.$inject=["$locale"];var Vc=".",$e={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:xb("Month"),MMM:xb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",
1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:xb("Day"),EEE:xb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(wb(Math[0<a?"floor":"ceil"](a/60),2)+wb(Math.abs(a%60),2))},ww:Xc(2),w:Xc(1)},Ze=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,Ye=/^\-?\d+$/;Rc.$inject=["$locale"];var We=
ca(z),Xe=ca(Ia);Tc.$inject=["$parse"];var sd=ca({restrict:"E",compile:function(a,c){8>=X&&(c.href||c.name||c.$set("href",""),a.append(T.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===ya.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}),Hb={};q(qb,function(a,c){if("multiple"!=a){var d=ma("ng-"+c);Hb[d]=function(){return{priority:100,link:function(a,f,h){a.$watch(h[d],function(a){h.$set(c,
!!a)})}}}}});q(["src","srcset","href"],function(a){var c=ma("ng-"+a);Hb[c]=function(){return{priority:99,link:function(d,e,f){var h=a,g=a;"href"===a&&"[object SVGAnimatedString]"===ya.call(e.prop("href"))&&(g="xlinkHref",f.$attr[g]="xlink:href",h=null);f.$observe(c,function(a){a&&(f.$set(g,a),X&&h&&e.prop(h,f[g]))})}}}});var Ab={$addControl:w,$removeControl:w,$setValidity:w,$setDirty:w,$setPristine:w};Yc.$inject=["$element","$attrs","$scope","$animate"];var Zc=function(a){return["$timeout",function(c){return{name:"form",
restrict:a?"EAC":"E",controller:Yc,compile:function(){return{pre:function(a,e,f,h){if(!f.action){var g=function(c){a.$apply(function(){h.$commitViewValue()});c.preventDefault?c.preventDefault():c.returnValue=!1};tb(e[0],"submit",g);e.on("$destroy",function(){c(function(){Wa(e[0],"submit",g)},0,!1)})}var p=e.parent().controller("form"),k=f.name||f.ngForm;k&&vb(a,k,h,k);if(p)e.on("$destroy",function(){p.$removeControl(h);k&&vb(a,k,r,k);F(h,Ab)})}}}}}]},td=Zc(),Gd=Zc(!0),ff=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
gf=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,hf=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,$c=/^(\d{4})-(\d{2})-(\d{2})$/,ad=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)$/,Xb=/^(\d{4})-W(\d\d)$/,bd=/^(\d{4})-(\d\d)$/,cd=/^(\d\d):(\d\d)$/,jf=/(\s+|^)default(\s+|$)/,dd={text:db,date:eb("date",$c,Cb($c,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":eb("datetimelocal",ad,Cb(ad,["yyyy","MM","dd","HH","mm"]),"yyyy-MM-ddTHH:mm"),time:eb("time",cd,Cb(cd,["HH","mm"]),"HH:mm"),week:eb("week",Xb,function(a){if(pa(a))return a;
if(y(a)){Xb.lastIndex=0;var c=Xb.exec(a);if(c){a=+c[1];var d=+c[2],c=Wc(a),d=7*(d-1);return new Date(a,0,c.getDate()+d)}}return NaN},"yyyy-Www"),month:eb("month",bd,Cb(bd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,h){db(a,c,d,e,f,h);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||hf.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return r});af(e,"number",c);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=
parseFloat(d.min);return oa(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return oa(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return oa(e,"number",e.$isEmpty(a)||Fa(a),a)})},url:function(a,c,d,e,f,h){db(a,c,d,e,f,h);a=function(a){return oa(e,"url",e.$isEmpty(a)||ff.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,f,h){db(a,c,d,e,f,h);
a=function(a){return oa(e,"email",e.$isEmpty(a)||gf.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){I(d.name)&&c.attr("name",gb());c.on("click",function(f){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value,f&&f.type)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var f=d.ngTrueValue,h=d.ngFalseValue;y(f)||(f=!0);y(h)||(h=!1);c.on("click",function(d){a.$apply(function(){e.$setViewValue(c[0].checked,
d&&d.type)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==f};e.$formatters.push(function(a){return a===f});e.$parsers.push(function(a){return a?f:h})},hidden:w,button:w,submit:w,reset:w,file:w},kc=["$browser","$sniffer","$filter",function(a,c,d){return{restrict:"E",require:["?ngModel"],link:function(e,f,h,g){g[0]&&(dd[z(h.type)]||dd.text)(e,f,h,g[0],c,a,d)}}}],zb="ng-valid",yb="ng-invalid",Oa="ng-pristine",Bb="ng-dirty",kf=["$scope","$exceptionHandler","$attrs",
"$element","$parse","$animate","$timeout",function(a,c,d,e,f,h,g){function p(a,c){c=c?"-"+lb(c,"-"):"";h.removeClass(e,(a?yb:zb)+c);h.addClass(e,(a?zb:yb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var k=f(d.ngModel),l=k.assign,n=null,m=this;if(!l)throw B("ngModel")("nonassign",d.ngModel,ia(e));this.$render=w;this.$isEmpty=function(a){return I(a)||
""===a||null===a||a!==a};var s=e.inheritedData("$formController")||Ab,t=0,r=this.$error={};e.addClass(Oa);p(!0);this.$setValidity=function(a,c){r[a]!==!c&&(c?(r[a]&&t--,t||(p(!0),m.$valid=!0,m.$invalid=!1)):(p(!1),m.$invalid=!0,m.$valid=!1,t++),r[a]=!c,p(c,a),s.$setValidity(a,c,m))};this.$setPristine=function(){m.$dirty=!1;m.$pristine=!0;h.removeClass(e,Bb);h.addClass(e,Oa)};this.$rollbackViewValue=function(){g.cancel(n);m.$viewValue=m.$$lastCommittedViewValue;m.$render()};this.$commitViewValue=function(){var d=
m.$viewValue;m.$$lastCommittedViewValue=d;g.cancel(n);m.$pristine&&(m.$dirty=!0,m.$pristine=!1,h.removeClass(e,Oa),h.addClass(e,Bb),s.$setDirty());q(m.$parsers,function(a){d=a(d)});m.$modelValue!==d&&(m.$modelValue=d,l(a,d),q(m.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};this.$setViewValue=function(a,c){m.$viewValue=a;m.$options&&!m.$options.updateOnDefault||m.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(a){var c=0,d=m.$options;d&&C(d.debounce)&&(d=d.debounce,
Fa(d)?c=d:Fa(d[a])?c=d[a]:Fa(d["default"])&&(c=d["default"]));g.cancel(n);c?n=g(function(){m.$commitViewValue()},c):m.$commitViewValue()};a.$watch(function(){var c=k(a);if(m.$modelValue!==c){var d=m.$formatters,e=d.length;for(m.$modelValue=c;e--;)c=d[e](c);m.$viewValue!==c&&(m.$viewValue=m.$$lastCommittedViewValue=c,m.$render())}return c})}],Vd=function(){return{require:["ngModel","^?form","^?ngModelOptions"],controller:kf,link:{pre:function(a,c,d,e){e[2]&&(e[0].$options=e[2].$options);var f=e[0],
h=e[1]||Ab;h.$addControl(f);a.$on("$destroy",function(){h.$removeControl(f)})},post:function(a,c,d,e){var f=e[0];if(f.$options&&f.$options.updateOn)c.on(f.$options.updateOn,function(c){a.$apply(function(){f.$$debounceViewValueCommit(c&&c.type)})})}}}},Xd=ca({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),lc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var f=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",
!1);else return e.$setValidity("required",!0),a};e.$formatters.push(f);e.$parsers.unshift(f);d.$observe("required",function(){f(e.$viewValue)})}}}},Wd=function(){return{require:"ngModel",link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!I(a)){var c=[];a&&q(a.split(f),function(a){a&&c.push(aa(a))});return c}});e.$formatters.push(function(a){return N(a)?a.join(", "):r});e.$isEmpty=function(a){return!a||!a.length}}}},lf=/^(true|false|\d+)$/,
Yd=function(){return{priority:100,compile:function(a,c){return lf.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},Zd=function(){return{controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==r?(this.$options.updateOnDefault=!1,this.$options.updateOn=aa(this.$options.updateOn.replace(jf,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=
!0}]}},yd=xa(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==r?"":a)})}),Ad=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],zd=["$sce","$parse",function(a,c){return function(d,e,f){e.addClass("ng-binding").data("$binding",f.ngBindHtml);var h=c(f.ngBindHtml);d.$watch(function(){return(h(d)||"").toString()},
function(c){e.html(a.getTrustedHtml(h(d))||"")})}}],Bd=Wb("",!0),Dd=Wb("Odd",0),Cd=Wb("Even",1),Ed=xa({compile:function(a,c){c.$set("ngCloak",r);a.removeClass("ng-cloak")}}),Fd=[function(){return{scope:!0,controller:"@",priority:500}}],mc={};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=ma("ng-"+a);mc[c]=["$parse",function(d){return{compile:function(e,f){var h=d(f[c]);return function(c,
d,e){d.on(z(a),function(a){c.$apply(function(){h(c,{$event:a})})})}}}}]});var Id=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,h){var g,p,k;c.$watch(e.ngIf,function(f){Ra(f)?p||(p=c.$new(),h(p,function(c){c[c.length++]=T.createComment(" end ngIf: "+e.ngIf+" ");g={clone:c};a.enter(c,d.parent(),d)})):(k&&(k.remove(),k=null),p&&(p.$destroy(),p=null),g&&(k=Gb(g.clone),a.leave(k,function(){k=null}),g=null))})}}}],Jd=["$http","$templateCache",
"$anchorScroll","$animate","$sce",function(a,c,d,e,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Sa.noop,compile:function(h,g){var p=g.ngInclude||g.src,k=g.onload||"",l=g.autoscroll;return function(g,h,q,r,J){var A=0,D,x,G,v=function(){x&&(x.remove(),x=null);D&&(D.$destroy(),D=null);G&&(e.leave(G,function(){x=null}),x=G,G=null)};g.$watch(f.parseAsResourceUrl(p),function(f){var p=function(){!C(l)||l&&!g.$eval(l)||d()},q=++A;f?(a.get(f,{cache:c}).success(function(a){if(q===
A){var c=g.$new();r.template=a;a=J(c,function(a){v();e.enter(a,null,h,p)});D=c;G=a;D.$emit("$includeContentLoaded");g.$eval(k)}}).error(function(){q===A&&v()}),g.$emit("$includeContentRequested")):(v(),r.template=null)})}}}}],$d=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){d.html(f.template);a(d.contents())(c)}}}],Kd=xa({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Ld=xa({terminal:!0,priority:1E3}),Md=["$locale",
"$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,h){var g=h.count,p=h.$attr.when&&f.attr(h.$attr.when),k=h.offset||0,l=e.$eval(p)||{},n={},m=c.startSymbol(),s=c.endSymbol(),r=/^when(Minus)?(.+)$/;q(h,function(a,c){r.test(c)&&(l[z(c.replace("when","").replace("Minus","-"))]=f.attr(h.$attr[c]))});q(l,function(a,e){n[e]=c(a.replace(d,m+g+"-"+k+s))});e.$watch(function(){var c=parseFloat(e.$eval(g));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-k));return n[c](e)},function(a){f.text(a)})}}}],
Nd=["$parse","$animate",function(a,c){var d=B("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,f,h,g,p){var k=h.ngRepeat,l=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,m,s,r,C,A,D={$id:Ka};if(!l)throw d("iexp",k);h=l[1];g=l[2];(l=l[3])?(n=a(l),m=function(a,c,d){A&&(D[A]=a);D[C]=c;D.$index=d;return n(e,D)}):(s=function(a,c){return Ka(c)},r=function(a){return a});l=h.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",
h);C=l[3]||l[1];A=l[2];var x={};e.$watchCollection(g,function(a){var g,h,l=f[0],n,D={},F,u,y,w,z,K,B=[];if(fb(a))z=a,n=m||s;else{n=m||r;z=[];for(y in a)a.hasOwnProperty(y)&&"$"!=y.charAt(0)&&z.push(y);z.sort()}F=z.length;h=B.length=z.length;for(g=0;g<h;g++)if(y=a===z?g:z[g],w=a[y],w=n(y,w,g),Ba(w,"`track by` id"),x.hasOwnProperty(w))K=x[w],delete x[w],D[w]=K,B[g]=K;else{if(D.hasOwnProperty(w))throw q(B,function(a){a&&a.scope&&(x[a.id]=a)}),d("dupes",k,w);B[g]={id:w};D[w]=!1}for(y in x)x.hasOwnProperty(y)&&
(K=x[y],g=Gb(K.clone),c.leave(g),q(g,function(a){a.$$NG_REMOVED=!0}),K.scope.$destroy());g=0;for(h=z.length;g<h;g++){y=a===z?g:z[g];w=a[y];K=B[g];B[g-1]&&(l=B[g-1].clone[B[g-1].clone.length-1]);if(K.scope){u=K.scope;n=l;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);K.clone[0]!=n&&c.move(Gb(K.clone),null,E(l));l=K.clone[K.clone.length-1]}else u=e.$new();u[C]=w;A&&(u[A]=y);u.$index=g;u.$first=0===g;u.$last=g===F-1;u.$middle=!(u.$first||u.$last);u.$odd=!(u.$even=0===(g&1));K.scope||p(u,function(a){a[a.length++]=
T.createComment(" end ngRepeat: "+k+" ");c.enter(a,null,E(l));l=a;K.scope=u;K.clone=a;D[K.id]=K})}x=D})}}}],Od=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Ra(c)?"removeClass":"addClass"](d,"ng-hide")})}}],Hd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Ra(c)?"addClass":"removeClass"](d,"ng-hide")})}}],Pd=xa(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Qd=["$animate",
function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var h=[],g=[],p=[],k=[];c.$watch(e.ngSwitch||e.on,function(d){var n,m;n=0;for(m=p.length;n<m;++n)p[n].remove();n=p.length=0;for(m=k.length;n<m;++n){var s=g[n];k[n].$destroy();p[n]=s;a.leave(s,function(){p.splice(n,1)})}g.length=0;k.length=0;if(h=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),q(h,function(d){var e=c.$new();k.push(e);d.transclude(e,function(c){var e=d.element;g.push(c);
a.enter(c,e.parent(),e)})})})}}}],Rd=xa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Sd=xa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Ud=xa({link:function(a,c,d,e,f){if(!f)throw B("ngTransclude")("orphan",ia(c));f(function(a){c.empty();
c.append(a)})}}),ud=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],mf=B("ngOptions"),Td=ca({terminal:!0}),vd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:w};return{restrict:"E",require:["select","?ngModel"],
controller:["$element","$scope","$attrs",function(a,c,d){var p=this,k={},l=e,n;p.databound=d.ngModel;p.init=function(a,c,d){l=a;n=d};p.addOption=function(c){Ba(c,'"option value"');k[c]=!0;l.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};p.removeOption=function(a){this.hasOption(a)&&(delete k[a],l.$viewValue==a&&this.renderUnknownOption(a))};p.renderUnknownOption=function(c){c="? "+Ka(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};p.hasOption=function(a){return k.hasOwnProperty(a)};
c.$on("$destroy",function(){p.renderUnknownOption=w})}],link:function(e,h,g,p){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(w.parent()&&w.remove(),c.val(a),""===a&&A.prop("selected",!0)):I(a)&&A?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){w.parent()&&w.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new Ya(d.$viewValue);q(c.find("option"),function(c){c.selected=C(a.get(c.value))})};a.$watch(function(){za(e,
d.$viewValue)||(e=da(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];q(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(){var a={"":[]},c=[""],d,k,r,t,u;t=g.$modelValue;u=A(e)||[];var E=n?Yb(u):u,F,z,B;z={};r=!1;var G,I;if(s)if(v&&N(t))for(r=new Ya([]),B=0;B<t.length;B++)z[m]=t[B],r.put(v(e,z),t[B]);else r=new Ya(t);for(B=0;F=E.length,B<F;B++){k=B;if(n){k=E[B];if("$"===k.charAt(0))continue;z[n]=k}z[m]=
u[k];d=p(e,z)||"";(k=a[d])||(k=a[d]=[],c.push(d));s?d=C(r.remove(v?v(e,z):q(e,z))):(v?(d={},d[m]=t,d=v(e,d)===v(e,z)):d=t===q(e,z),r=r||d);G=l(e,z);G=C(G)?G:"";k.push({id:v?v(e,z):n?E[B]:B,label:G,selected:d})}s||(y||null===t?a[""].unshift({id:"",label:"",selected:!r}):r||a[""].unshift({id:"?",label:"",selected:!0}));z=0;for(E=c.length;z<E;z++){d=c[z];k=a[d];w.length<=z?(t={element:x.clone().attr("label",d),label:k.label},u=[t],w.push(u),f.append(t.element)):(u=w[z],t=u[0],t.label!=d&&t.element.attr("label",
t.label=d));G=null;B=0;for(F=k.length;B<F;B++)r=k[B],(d=u[B+1])?(G=d.element,d.label!==r.label&&G.text(d.label=r.label),d.id!==r.id&&G.val(d.id=r.id),d.selected!==r.selected&&G.prop("selected",d.selected=r.selected)):(""===r.id&&y?I=y:(I=D.clone()).val(r.id).attr("selected",r.selected).text(r.label),u.push({element:I,label:r.label,id:r.id,selected:r.selected}),G?G.after(I):t.element.append(I),G=I);for(B++;u.length>B;)u.pop().element.remove()}for(;w.length>z;)w.pop()[0].element.remove()}var k;if(!(k=
t.match(d)))throw mf("iexp",t,ia(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],p=c(k[3]||""),q=c(k[2]?k[1]:m),A=c(k[7]),v=k[8]?c(k[8]):null,w=[[{element:f,label:""}]];y&&(a(y)(e),y.removeClass("ng-scope"),y.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=A(e)||[],d={},h,k,l,p,t,x,u;if(s)for(k=[],p=0,x=w.length;p<x;p++)for(a=w[p],l=1,t=a.length;l<t;l++){if((h=a[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(v)for(u=0;u<c.length&&(d[m]=c[u],v(e,d)!=h);u++);else d[m]=c[h];k.push(q(e,
d))}}else{h=f.val();if("?"==h)k=r;else if(""===h)k=null;else if(v)for(u=0;u<c.length;u++){if(d[m]=c[u],v(e,d)==h){k=q(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=q(e,d);1<w[0].length&&w[0][1].id!==h&&(w[0][1].selected=!1)}g.$setViewValue(k)})});g.$render=h;e.$watch(h)}if(p[1]){var m=p[0];p=p[1];var s=g.multiple,t=g.ngOptions,y=!1,A,D=E(T.createElement("option")),x=E(T.createElement("optgroup")),w=D.clone();g=0;for(var v=h.children(),F=v.length;g<F;g++)if(""===v[g].value){A=y=v.eq(g);break}m.init(p,y,
w);s&&(p.$isEmpty=function(a){return!a||0===a.length});t?n(e,h,p):s?l(e,h,p):k(e,h,p,m)}}}}],xd=["$interpolate",function(a){var c={addOption:w,removeOption:w};return{restrict:"E",priority:100,compile:function(d,e){if(I(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),l=k.data("$selectController")||k.parent().data("$selectController");l&&l.databound?d.prop("selected",!1):l=c;f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&l.removeOption(c);l.addOption(a)}):
l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],wd=ca({restrict:"E",terminal:!1});M.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(md(),od(Sa),E(T).ready(function(){kd(T,hc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.3.0-build.2707+sha.63f284a
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(s,f,Q){'use strict';f.module("ngAnimate",["ng"]).factory("$$animateReflow",["$$rAF","$document",function(f,s){return function(h){return f(function(){h()})}}]).config(["$provide","$animateProvider",function(ca,H){function h(h){for(var g=0;g<h.length;g++){var f=h[g];if(f.nodeType==Z)return f}}function E(g){return f.element(h(g))}var t=f.noop,g=f.forEach,R=H.$$selectors,Z=1,m="$$ngAnimateState",J="ng-animate",n={running:!0};ca.decorator("$animate",["$delegate","$injector","$sniffer","$rootElement",
"$$asyncCallback","$rootScope","$document",function(x,s,Y,K,F,I,Q){function S(a){if(a){var b=[],d={};a=a.substr(1).split(".");(Y.transitions||Y.animations)&&b.push(s.get(R[""]));for(var c=0;c<a.length;c++){var e=a[c],g=R[e];g&&!d[e]&&(b.push(s.get(g)),d[e]=!0)}return b}}function L(a,b,d){function c(a,b){var d=a[b],c=a["before"+b.charAt(0).toUpperCase()+b.substr(1)];if(d||c)return"leave"==b&&(c=d,d=null),A.push({event:b,fn:d}),l.push({event:b,fn:c}),!0}function e(b,c,e){var h=[];g(b,function(a){a.fn&&
h.push(a)});var k=0;g(h,function(b,u){var G=function(){a:{if(c){(c[u]||t)();if(++k<h.length)break a;c=null}e()}};switch(b.event){case "setClass":c.push(b.fn(a,y,B,G));break;case "addClass":c.push(b.fn(a,y||d,G));break;case "removeClass":c.push(b.fn(a,B||d,G));break;default:c.push(b.fn(a,G))}});c&&0===c.length&&e()}var h=a[0];if(h){var m="setClass"==b,n=m||"addClass"==b||"removeClass"==b,y,B;f.isArray(d)&&(y=d[0],B=d[1],d=y+" "+B);var z=a.attr("class")+" "+d;if(M(z)){var p=t,D=[],l=[],C=t,k=[],A=[],
z=(" "+z).replace(/\s+/g,".");g(S(z),function(a){!c(a,b)&&m&&(c(a,"addClass"),c(a,"removeClass"))});return{node:h,event:b,className:d,isClassBased:n,isSetClassOperation:m,before:function(a){p=a;e(l,D,function(){p=t;a()})},after:function(a){C=a;e(A,k,function(){C=t;a()})},cancel:function(){D&&(g(D,function(a){(a||t)(!0)}),p(!0));k&&(g(k,function(a){(a||t)(!0)}),C(!0))}}}}}function q(a,b,d,c,e,h,n){function t(c){var e="$animate:"+c;C&&(C[e]&&0<C[e].length)&&F(function(){d.triggerHandler(e,{event:a,
className:b})})}function y(){t("before")}function B(){t("after")}function s(){t("close");n&&F(function(){n()})}function p(){p.hasBeenRun||(p.hasBeenRun=!0,h())}function D(){if(!D.hasBeenRun){D.hasBeenRun=!0;var c=d.data(m);c&&(l&&l.isClassBased?z(d,b):(F(function(){var c=d.data(m)||{};q==c.index&&z(d,b,a)}),d.data(m,c)));s()}}var l=L(d,a,b);if(l){b=l.className;var C=f.element._data(l.node),C=C&&C.events;c||(c=e?e.parent():d.parent());var k=d.data(m)||{};e=k.active||{};var A=k.totalActive||0,x=k.last;
if(l.isClassBased&&(k.disabled||x&&!x.isClassBased)||N(d,c))p(),y(),B(),D();else{c=!1;if(0<A){k=[];if(l.isClassBased)"setClass"==x.event?(k.push(x),z(d,b)):e[b]&&(v=e[b],v.event==a?c=!0:(k.push(v),z(d,b)));else if("leave"==a&&e["ng-leave"])c=!0;else{for(var v in e)k.push(e[v]),z(d,v);e={};A=0}0<k.length&&g(k,function(a){a.cancel()})}!l.isClassBased||(l.isSetClassOperation||c)||(c="addClass"==a==d.hasClass(b));if(c)p(),y(),B(),s();else{if("leave"==a)d.one("$destroy",function(a){a=f.element(this);var b=
a.data(m);b&&(b=b.active["ng-leave"])&&(b.cancel(),z(a,"ng-leave"))});d.addClass(J);var q=O++;A++;e[b]=l;d.data(m,{last:l,active:e,index:q,totalActive:A});y();l.before(function(c){var e=d.data(m);c=c||!e||!e.active[b]||l.isClassBased&&e.active[b].event!=a;p();!0===c?D():(B(),l.after(D))})}}}else p(),y(),B(),D()}function T(a){if(a=h(a))a=f.isFunction(a.getElementsByClassName)?a.getElementsByClassName(J):a.querySelectorAll("."+J),g(a,function(a){a=f.element(a);(a=a.data(m))&&a.active&&g(a.active,function(a){a.cancel()})})}
function z(a,b){if(h(a)==h(K))n.disabled||(n.running=!1,n.structural=!1);else if(b){var d=a.data(m)||{},c=!0===b;!c&&(d.active&&d.active[b])&&(d.totalActive--,delete d.active[b]);if(c||!d.totalActive)a.removeClass(J),a.removeData(m)}}function N(a,b){if(n.disabled)return!0;if(h(a)==h(K))return n.disabled||n.running;do{if(0===b.length)break;var d=h(b)==h(K),c=d?n:b.data(m)||{},c=c.disabled||c.running?!0:c.last&&!c.last.isClassBased;if(d||c)return c;if(d)break}while(b=b.parent());return!0}var O=0;K.data(m,
n);I.$$postDigest(function(){I.$$postDigest(function(){n.running=!1})});var P=H.classNameFilter(),M=P?function(a){return P.test(a)}:function(){return!0};return{enter:function(a,b,d,c){this.enabled(!1,a);x.enter(a,b,d);I.$$postDigest(function(){a=E(a);q("enter","ng-enter",a,b,d,t,c)})},leave:function(a,b){T(a);this.enabled(!1,a);I.$$postDigest(function(){q("leave","ng-leave",E(a),null,null,function(){x.leave(a)},b)})},move:function(a,b,d,c){T(a);this.enabled(!1,a);x.move(a,b,d);I.$$postDigest(function(){a=
E(a);q("move","ng-move",a,b,d,t,c)})},addClass:function(a,b,d){a=E(a);q("addClass",b,a,null,null,function(){x.addClass(a,b)},d)},removeClass:function(a,b,d){a=E(a);q("removeClass",b,a,null,null,function(){x.removeClass(a,b)},d)},setClass:function(a,b,d,c){a=E(a);q("setClass",[b,d],a,null,null,function(){x.setClass(a,b,d)},c)},enabled:function(a,b){switch(arguments.length){case 2:if(a)z(b);else{var d=b.data(m)||{};d.disabled=!0;b.data(m,d)}break;case 1:n.disabled=!a;break;default:a=!n.disabled}return!!a}}}]);
H.register("",["$window","$sniffer","$timeout","$$animateReflow",function(m,n,E,K){function F(a,u){v&&v();U.push(u);v=K(function(){g(U,function(a){a()});U=[];v=null;k={}})}function I(a,u){var b=h(a);a=f.element(b);V.push(a);b=Date.now()+u;b<=aa||(E.cancel($),aa=b,$=E(function(){J(V);V=[]},u,!1))}function J(a){g(a,function(a){(a=a.data(p))&&(a.closeAnimationFn||t)()})}function S(a,b){var c=b?k[b]:null;if(!c){var w=0,h=0,l=0,X=0,p,r,f,n;g(a,function(a){if(a.nodeType==Z){a=m.getComputedStyle(a)||{};
f=a[d+R];w=Math.max(L(f),w);n=a[d+W];p=a[d+y];h=Math.max(L(p),h);r=a[e+y];X=Math.max(L(r),X);var b=L(a[e+R]);0<b&&(b*=parseInt(a[e+B],10)||1);l=Math.max(b,l)}});c={total:0,transitionPropertyStyle:n,transitionDurationStyle:f,transitionDelayStyle:p,transitionDelay:h,transitionDuration:w,animationDelayStyle:r,animationDelay:X,animationDuration:l};b&&(k[b]=c)}return c}function L(a){var b=0;a=f.isString(a)?a.split(/\s*,\s*/):[];g(a,function(a){b=Math.max(parseFloat(a)||0,b)});return b}function q(a,b,c){a=
0<=["ng-enter","ng-leave","ng-move"].indexOf(c);var w,g=b.parent(),l=g.data(ba);l||(g.data(ba,++A),l=A);w=l+"-"+h(b).getAttribute("class");var g=w+" "+c,l=k[g]?++k[g].total:0,f={};if(0<l){var m=c+"-stagger",f=w+" "+m;(w=!k[f])&&b.addClass(m);f=S(b,f);w&&b.removeClass(m)}b.addClass(c);var m=b.data(p)||{},r=S(b,g);w=r.transitionDuration;r=r.animationDuration;if(a&&0===w&&0===r)return b.removeClass(c),!1;c=a&&0<w;a=0<r&&0<f.animationDelay&&0===f.animationDuration;b.data(p,{stagger:f,cacheKey:g,running:m.running||
0,itemIndex:l,blockTransition:c,blockAnimation:a,closeAnimationFn:t});b=h(b);c&&(b.style[d+W]="none");a&&(b.style[e]="none 0s");return!0}function T(a,u,G,w){function f(a){u.off(F,m);u.removeClass(n);M(u,G);a=h(u);for(var b in v)a.style.removeProperty(v[b])}function m(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(D));Math.max(a-E,0)>=B&&b>=t&&w()}var k=h(u);a=u.data(p);if(-1!=k.getAttribute("class").indexOf(G)&&a){a.blockTransition&&
(k.style[d+W]="");a.blockAnimation&&(k.style[e]="");var n="";g(G.split(" "),function(a,b){n+=(0<b?" ":"")+a+"-active"});u.addClass(n);var r=S(u,a.eventCacheKey+" "+n),t=Math.max(r.transitionDuration,r.animationDuration);if(0===t)u.removeClass(n),M(u,G),w();else{var y=Math.max(r.transitionDelay,r.animationDelay),s=a.stagger,x=a.itemIndex,B=y*C,q="",v=[];if(0<r.transitionDuration){var A=r.transitionPropertyStyle;-1==A.indexOf("all")&&(q+=b+"transition-property: "+A+";",q+=b+"transition-duration: "+
r.transitionDurationStyle+";",v.push(b+"transition-property"),v.push(b+"transition-duration"))}0<x&&(0<s.transitionDelay&&0===s.transitionDuration&&(q+=b+"transition-delay: "+z(r.transitionDelayStyle,s.transitionDelay,x)+"; ",v.push(b+"transition-delay")),0<s.animationDelay&&0===s.animationDuration&&(q+=b+"animation-delay: "+z(r.animationDelayStyle,s.animationDelay,x)+"; ",v.push(b+"animation-delay")));0<v.length&&(r=k.getAttribute("style")||"",k.setAttribute("style",r+" "+q));var E=Date.now(),F=
H+" "+c;u.on(F,m);a.closeAnimationFn=function(){f();w()};k=(x*(Math.max(s.animationDelay,s.transitionDelay)||0)+(y+t)*l)*C;a.running++;I(u,k);return f}}else w()}function z(a,b,c){var d="";g(a.split(","),function(a,e){d+=(0<e?",":"")+(c*b+parseInt(a,10))+"s"});return d}function N(a,b,c,d){if(q(a,b,c,d))return function(a){a&&M(b,c)}}function O(a,b,c,d){if(b.data(p))return T(a,b,c,d);M(b,c);d()}function P(a,b,c,d){var e=N(a,b,c);if(e){var f=e;F(b,function(){f=O(a,b,c,d)});return function(a){(f||t)(a)}}d()}
function M(a,b){a.removeClass(b);var c=a.data(p);c&&(c.running&&c.running--,c.running&&0!==c.running||a.removeData(p))}function a(a,b){var c="";a=f.isArray(a)?a:a.split(/\s+/);g(a,function(a,d){a&&0<a.length&&(c+=(0<d?" ":"")+a+b)});return c}var b="",d,c,e,H;s.ontransitionend===Q&&s.onwebkittransitionend!==Q?(b="-webkit-",d="WebkitTransition",c="webkitTransitionEnd transitionend"):(d="transition",c="transitionend");s.onanimationend===Q&&s.onwebkitanimationend!==Q?(b="-webkit-",e="WebkitAnimation",
H="webkitAnimationEnd animationend"):(e="animation",H="animationend");var R="Duration",W="Property",y="Delay",B="IterationCount",ba="$$ngAnimateKey",p="$$ngAnimateCSS3Data",D=3,l=1.5,C=1E3,k={},A=0,U=[],v,$=null,aa=0,V=[];return{enter:function(a,b){return P("enter",a,"ng-enter",b)},leave:function(a,b){return P("leave",a,"ng-leave",b)},move:function(a,b){return P("move",a,"ng-move",b)},beforeSetClass:function(b,c,d,e){c=a(d,"-remove")+" "+a(c,"-add");if(c=N("setClass",b,c))return F(b,e),c;e()},beforeAddClass:function(b,
c,d){if(c=N("addClass",b,a(c,"-add")))return F(b,d),c;d()},beforeRemoveClass:function(b,c,d){if(c=N("removeClass",b,a(c,"-remove")))return F(b,d),c;d()},setClass:function(b,c,d,e){d=a(d,"-remove");c=a(c,"-add");return O("setClass",b,d+" "+c,e)},addClass:function(b,c,d){return O("addClass",b,a(c,"-add"),d)},removeClass:function(b,c,d){return O("removeClass",b,a(c,"-remove"),d)}}}])}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/*
 AngularJS v1.3.0-build.2707+sha.63f284a
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(H,d,A){'use strict';function C(g,q){q=q||{};d.forEach(q,function(d,h){delete q[h]});for(var h in g)!g.hasOwnProperty(h)||"$"===h.charAt(0)&&"$"===h.charAt(1)||(q[h]=g[h]);return q}var w=d.$$minErr("$resource"),B=/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;d.module("ngResource",["ng"]).provider("$resource",function(){var g=this;this.defaults={stripTrailingSlashes:!0,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}}};
this.$get=["$http","$q",function(q,h){function s(d,k){this.template=d;this.defaults=t({},g.defaults,k);this.urlParams={}}function v(x,k,l,m){function f(b,c){var f={};c=t({},k,c);r(c,function(a,c){u(a)&&(a=a());var d;if(a&&a.charAt&&"@"==a.charAt(0)){d=b;var e=a.substr(1);if(null==e||""===e||"hasOwnProperty"===e||!B.test("."+e))throw w("badmember",e);for(var e=e.split("."),n=0,k=e.length;n<k&&d!==A;n++){var h=e[n];d=null!==d?d[h]:A}}else d=a;f[c]=d});return f}function E(b){return b.resource}function e(b){C(b||
{},this)}var F=new s(x,m);l=t({},g.defaults.actions,l);r(l,function(b,c){var k=/^(POST|PUT|PATCH)$/i.test(b.method);e[c]=function(a,c,m,x){var n={},g,l,y;switch(arguments.length){case 4:y=x,l=m;case 3:case 2:if(u(c)){if(u(a)){l=a;y=c;break}l=c;y=m}else{n=a;g=c;l=m;break}case 1:u(a)?l=a:k?g=a:n=a;break;case 0:break;default:throw w("badargs",arguments.length);}var s=this instanceof e,p=s?g:b.isArray?[]:new e(g),z={},v=b.interceptor&&b.interceptor.response||E,B=b.interceptor&&b.interceptor.responseError||
A;r(b,function(b,a){"params"!=a&&("isArray"!=a&&"interceptor"!=a)&&(z[a]=G(b))});k&&(z.data=g);F.setUrlParams(z,t({},f(g,b.params||{}),n),b.url);n=q(z).then(function(a){var c=a.data,f=p.$promise;if(c){if(d.isArray(c)!==!!b.isArray)throw w("badcfg",b.isArray?"array":"object",d.isArray(c)?"array":"object");b.isArray?(p.length=0,r(c,function(a){p.push(new e(a))})):(C(c,p),p.$promise=f)}p.$resolved=!0;a.resource=p;return a},function(a){p.$resolved=!0;(y||D)(a);return h.reject(a)});n=n.then(function(a){var b=
v(a);(l||D)(b,a.headers);return b},B);return s?n:(p.$promise=n,p.$resolved=!1,p)};e.prototype["$"+c]=function(a,b,d){u(a)&&(d=b,b=a,a={});a=e[c].call(this,a,this,b,d);return a.$promise||a}});e.bind=function(b){return v(x,t({},k,b),l)};return e}var D=d.noop,r=d.forEach,t=d.extend,G=d.copy,u=d.isFunction;s.prototype={setUrlParams:function(g,k,l){var m=this,f=l||m.template,h,e,q=m.urlParams={};r(f.split(/\W/),function(b){if("hasOwnProperty"===b)throw w("badname");!/^\d+$/.test(b)&&(b&&RegExp("(^|[^\\\\]):"+
b+"(\\W|$)").test(f))&&(q[b]=!0)});f=f.replace(/\\:/g,":");k=k||{};r(m.urlParams,function(b,c){h=k.hasOwnProperty(c)?k[c]:m.defaults[c];d.isDefined(h)&&null!==h?(e=encodeURIComponent(h).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"%20").replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),f=f.replace(RegExp(":"+c+"(\\W|$)","g"),function(b,a){return e+a})):f=f.replace(RegExp("(/?):"+c+"(\\W|$)","g"),function(b,a,c){return"/"==c.charAt(0)?
c:a+c})});m.defaults.stripTrailingSlashes&&(f=f.replace(/\/+$/,"")||"/");f=f.replace(/\/\.(?=\w+($|\?))/,".");g.url=f.replace(/\/\\\./,"/.");r(k,function(b,c){m.urlParams[c]||(g.params=g.params||{},g.params[c]=b)})}};return v}]})})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map

/*
 AngularJS v1.3.0-build.2707+sha.63f284a
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,e,A){'use strict';function x(s,g,k){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,b,c,f,w){function y(){p&&(p.remove(),p=null);h&&(h.$destroy(),h=null);l&&(k.leave(l,function(){p=null}),p=l,l=null)}function v(){var c=s.current&&s.current.locals;if(e.isDefined(c&&c.$template)){var c=a.$new(),d=s.current;l=w(c,function(d){k.enter(d,null,l||b,function(){!e.isDefined(t)||t&&!a.$eval(t)||g()});y()});h=d.scope=c;h.$emit("$viewContentLoaded");h.$eval(u)}else y()}
var h,l,p,t=c.autoscroll,u=c.onload||"";a.$on("$routeChangeSuccess",v);v()}}}function z(e,g,k){return{restrict:"ECA",priority:-400,link:function(a,b){var c=k.current,f=c.locals;b.html(f.$template);var w=e(b.contents());c.controller&&(f.$scope=a,f=g(c.controller,f),c.controllerAs&&(a[c.controllerAs]=f),b.data("$ngControllerController",f),b.children().data("$ngControllerController",f));w(a)}}}n=e.module("ngRoute",["ng"]).provider("$route",function(){function s(a,b){return e.extend(new (e.extend(function(){},
{prototype:a})),b)}function g(a,e){var c=e.caseInsensitiveMatch,f={originalPath:a,regexp:a},k=f.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,e,c,b){a="?"===b?b:null;b="*"===b?b:null;k.push({name:c,optional:!!a});e=e||"";return""+(a?"":e)+"(?:"+(a?e:"")+(b&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");f.regexp=RegExp("^"+a+"$",c?"i":"");return f}var k={};this.when=function(a,b){k[a]=e.extend({reloadOnSearch:!0},b,a&&g(a,b));if(a){var c=
"/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";k[c]=e.extend({redirectTo:a},g(c,b))}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(a,b,c,f,g,n,v,h){function l(){var d=p(),m=r.current;if(d&&m&&d.$$route===m.$$route&&e.equals(d.pathParams,m.pathParams)&&!d.reloadOnSearch&&!u)m.params=d.params,e.copy(m.params,c),a.$broadcast("$routeUpdate",m);else if(d||m)u=!1,a.$broadcast("$routeChangeStart",
d,m),(r.current=d)&&d.redirectTo&&(e.isString(d.redirectTo)?b.path(t(d.redirectTo,d.params)).search(d.params).replace():b.url(d.redirectTo(d.pathParams,b.path(),b.search())).replace()),f.when(d).then(function(){if(d){var a=e.extend({},d.resolve),b,c;e.forEach(a,function(d,b){a[b]=e.isString(d)?g.get(d):g.invoke(d,null,null,b)});e.isDefined(b=d.template)?e.isFunction(b)&&(b=b(d.params)):e.isDefined(c=d.templateUrl)&&(e.isFunction(c)&&(c=c(d.params)),c=h.getTrustedResourceUrl(c),e.isDefined(c)&&(d.loadedTemplateUrl=
c,b=n.get(c,{cache:v}).then(function(a){return a.data})));e.isDefined(b)&&(a.$template=b);return f.all(a)}}).then(function(b){d==r.current&&(d&&(d.locals=b,e.copy(d.params,c)),a.$broadcast("$routeChangeSuccess",d,m))},function(b){d==r.current&&a.$broadcast("$routeChangeError",d,m,b)})}function p(){var a,c;e.forEach(k,function(f,k){var q;if(q=!c){var g=b.path();q=f.keys;var l={};if(f.regexp)if(g=f.regexp.exec(g)){for(var h=1,p=g.length;h<p;++h){var n=q[h-1],r="string"==typeof g[h]?decodeURIComponent(g[h]):
g[h];n&&r&&(l[n.name]=r)}q=l}else q=null;else q=null;q=a=q}q&&(c=s(f,{params:e.extend({},b.search(),a),pathParams:a}),c.$$route=f)});return c||k[null]&&s(k[null],{params:{},pathParams:{}})}function t(a,b){var c=[];e.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var e=a.match(/(\w+)(.*)/),f=e[1];c.push(b[f]);c.push(e[2]||"");delete b[f]}});return c.join("")}var u=!1,r={routes:k,reload:function(){u=!0;a.$evalAsync(l)}};a.$on("$locationChangeSuccess",l);return r}]});n.provider("$routeParams",
function(){this.$get=function(){return{}}});n.directive("ngView",x);n.directive("ngView",z);x.$inject=["$route","$anchorScroll","$animate"];z.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

/*
 AngularJS v1.3.0-build.2707+sha.63f284a
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(y,u,z){'use strict';function t(h,k,s){r.directive(h,["$parse","$swipe",function(b,d){var p=75,m=0.3,g=30;return function(f,q,e){function l(a){if(!c)return!1;var b=Math.abs(a.y-c.y);a=(a.x-c.x)*k;return v&&b<p&&0<a&&a>g&&b/a<m}var a=b(e[h]),c,v,n=["touch"];u.isDefined(e.ngSwipeDisableMouse)||n.push("mouse");d.bind(q,{start:function(a,b){c=a;v=!0},cancel:function(a){v=!1},end:function(c,b){l(c)&&f.$apply(function(){q.triggerHandler(s);a(f,{$event:b})})}},n)}}])}var r=u.module("ngTouch",[]);
r.factory("$swipe",[function(){function h(b){var d=b.touches&&b.touches.length?b.touches:[b];b=b.changedTouches&&b.changedTouches[0]||b.originalEvent&&b.originalEvent.changedTouches&&b.originalEvent.changedTouches[0]||d[0].originalEvent||d[0];return{x:b.clientX,y:b.clientY}}function k(b,d){var p=[];u.forEach(b,function(b){(b=s[b][d])&&p.push(b)});return p.join(" ")}var s={mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},touch:{start:"touchstart",move:"touchmove",end:"touchend",cancel:"touchcancel"}};
return{bind:function(b,d,p){var m,g,f,q,e=!1;p=p||["mouse","touch"];b.on(k(p,"start"),function(a){f=h(a);e=!0;g=m=0;q=f;d.start&&d.start(f,a)});var l=k(p,"cancel");if(l)b.on(l,function(a){e=!1;d.cancel&&d.cancel(a)});b.on(k(p,"move"),function(a){if(e&&f){var c=h(a);m+=Math.abs(c.x-q.x);g+=Math.abs(c.y-q.y);q=c;10>m&&10>g||(g>m?(e=!1,d.cancel&&d.cancel(a)):(a.preventDefault(),d.move&&d.move(c,a)))}});b.on(k(p,"end"),function(a){e&&(e=!1,d.end&&d.end(h(a),a))})}}}]);r.config(["$provide",function(h){h.decorator("ngClickDirective",
["$delegate",function(k){k.shift();return k}])}]);r.directive("ngClick",["$parse","$timeout","$rootElement",function(h,k,s){function b(a,c,b){for(var n=0;n<a.length;n+=2)if(Math.abs(a[n]-c)<g&&Math.abs(a[n+1]-b)<g)return a.splice(n,n+2),!0;return!1}function d(a){if(!(Date.now()-q>m)){var c=a.touches&&a.touches.length?a.touches:[a],d=c[0].clientX,c=c[0].clientY;1>d&&1>c||l&&l[0]===d&&l[1]===c||(l&&(l=null),"label"===a.target.tagName.toLowerCase()&&(l=[d,c]),b(e,d,c)||(a.stopPropagation(),a.preventDefault(),
a.target&&a.target.blur()))}}function p(a){a=a.touches&&a.touches.length?a.touches:[a];var c=a[0].clientX,b=a[0].clientY;e.push(c,b);k(function(){for(var a=0;a<e.length;a+=2)if(e[a]==c&&e[a+1]==b){e.splice(a,a+2);break}},m,!1)}var m=2500,g=25,f="ng-click-active",q,e,l;return function(a,c,k){function n(){m=!1;c.removeClass(f)}var l=h(k.ngClick),m=!1,g,r,t,w;c.on("touchstart",function(a){m=!0;g=a.target?a.target:a.srcElement;3==g.nodeType&&(g=g.parentNode);c.addClass(f);r=Date.now();a=a.touches&&a.touches.length?
a.touches:[a];a=a[0].originalEvent||a[0];t=a.clientX;w=a.clientY});c.on("touchmove",function(a){n()});c.on("touchcancel",function(a){n()});c.on("touchend",function(a){var l=Date.now()-r,f=a.changedTouches&&a.changedTouches.length?a.changedTouches:a.touches&&a.touches.length?a.touches:[a],h=f[0].originalEvent||f[0],f=h.clientX,h=h.clientY,x=Math.sqrt(Math.pow(f-t,2)+Math.pow(h-w,2));m&&(750>l&&12>x)&&(e||(s[0].addEventListener("click",d,!0),s[0].addEventListener("touchstart",p,!0),e=[]),q=Date.now(),
b(e,f,h),g&&g.blur(),u.isDefined(k.disabled)&&!1!==k.disabled||c.triggerHandler("click",[a]));n()});c.onclick=function(a){};c.on("click",function(b,c){a.$apply(function(){l(a,{$event:c||b})})});c.on("mousedown",function(a){c.addClass(f)});c.on("mousemove mouseup",function(a){c.removeClass(f)})}}]);t("ngSwipeLeft",-1,"swipeleft");t("ngSwipeRight",1,"swiperight")})(window,window.angular);
//# sourceMappingURL=angular-touch.min.js.map

var app;

app = angular.module('app', ['ngRoute', 'ngAnimate', 'ngTouch', 'templatesApp']);

app.config(function($routeProvider, $httpProvider, $sceProvider, $locationProvider) {
  $sceProvider.enabled(false);
  $httpProvider.defaults.cache = true;
  $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
  $httpProvider.defaults.headers.common['NexClient'] = 'public';
  return $locationProvider.html5Mode(true);
});

app.directive('imagoImage', function() {
  return {
    replace: true,
    templateUrl: '/app/directives/views/image-widget.html',
    controller: function($scope, $element, $attrs, $transclude) {},
    compile: function(tElement, tAttrs, transclude) {
      return {
        pre: function(scope, iElement, iAttrs, controller) {
          var assetRatio, backgroundSize, dpr, height, r, servingSize, sizemode, width, wrapperRatio;
          this.defaults = {
            align: 'center center',
            sizemode: 'fit',
            hires: true,
            scale: 1,
            lazy: true,
            maxSize: 2560,
            noResize: false,
            mediasize: false,
            width: 'auto',
            height: 'auto'
          };
          angular.forEach(this.defaults, function(value, key) {
            return this[key] = value;
          });
          angular.forEach(iAttrs, function(value, key) {
            return this[key] = value;
          });
          this.image = angular.copy(scope[this.source]);
          if (!this.image.serving_url) {
            return;
          }
          width = this.width || iElement[0].clientWidth;
          height = this.height || iElement[0].clientHeight;
          sizemode = this.sizemode;
          scope.elementStyle = {};
          if (angular.isString(this.image.resolution)) {
            r = this.image.resolution.split('x');
            this.resolution = {
              width: r[0],
              height: r[1]
            };
          }
          assetRatio = this.resolution.width / this.resolution.height;
          if (width === 'auto' || height === 'auto') {
            if (angular.isNumber(width) && angular.isNumber(height)) {

            } else if (height === 'auto' && angular.isNumber(width)) {
              height = width / assetRatio;
              scope.elementStyle.height = height;
            } else if (width === 'auto' && angular.isNumber(height)) {
              width = height * assetRatio;
              scope.elementStyle.width = width;
            } else {
              width = iElement[0].clientWidth;
              height = iElement[0].clientHeight;
            }
          }
          wrapperRatio = width / height;
          dpr = Math.ceil(window.devicePixelRatio) || 1;
          if (sizemode === 'crop') {
            if (assetRatio <= wrapperRatio) {
              servingSize = Math.round(Math.max(width, width / assetRatio));
            } else {
              servingSize = Math.round(Math.max(height, height * assetRatio));
            }
          } else {
            if (assetRatio <= wrapperRatio) {
              servingSize = Math.round(Math.max(height, height * assetRatio));
            } else {
              servingSize = Math.round(Math.max(width, width / assetRatio));
            }
          }
          servingSize = parseInt(Math.min(servingSize * dpr, this.maxSize));
          this.servingSize = servingSize;
          this.servingUrl = "" + this.image.serving_url + "=s" + (this.servingSize * this.scale);
          if (sizemode === 'crop') {
            backgroundSize = assetRatio < wrapperRatio ? "100% auto" : "auto 100%";
          } else {
            backgroundSize = assetRatio > wrapperRatio ? "100% auto" : "auto 100%";
          }
          return scope.imageStyle = {
            "background-image": "url(" + this.servingUrl + ")",
            "background-size": backgroundSize,
            "background-position": this.align,
            "display": "inline-block",
            "width": "100%",
            "height": "100%"
          };
        },
        post: function(scope, iElement, iAttrs, controller) {}
      };
    },
    link: function(scope, iElement, iAttrs) {}
  };
});

app.directive('imagoSlider', function(imagoUtils) {
  return {
    replace: true,
    templateUrl: '/app/directives/views/slider-widget.html',
    controller: function($scope, $element, $attrs, $window) {
      $scope.$watch('assets', function(assetsData) {
        var item, _i, _len, _ref;
        if (assetsData) {
          $scope.loadedData = true;
          $scope.slideSource = [];
          for (_i = 0, _len = assetsData.length; _i < _len; _i++) {
            item = assetsData[_i];
            if (item.serving_url) {
              $scope.slideSource.push(item);
            }
          }
          if (((_ref = $scope.slideSource) != null ? _ref.length : void 0) <= 1 || !$scope.slideSource) {
            $scope.confSlider.enablearrows = false;
            $scope.confSlider.enablekeys = false;
          }
          return this.id = imagoUtils.uuid();
        }
      });
      $scope.currentIndex = 0;
      $scope.setCurrentSlideIndex = function(index) {
        return $scope.currentIndex = index;
      };
      $scope.isCurrentSlideIndex = function(index) {
        return $scope.currentIndex === index;
      };
      $scope.goPrev = function() {
        return $scope.currentIndex = $scope.currentIndex < $scope.slideSource.length - 1 ? ++$scope.currentIndex : 0;
      };
      $scope.goNext = function() {
        return $scope.currentIndex = $scope.currentIndex > 0 ? --$scope.currentIndex : $scope.slideSource.length - 1;
      };
      return angular.element($window).on('keydown', function(e) {
        if (!$scope.confSlider.enablekeys) {
          return;
        }
        switch (e.keyCode) {
          case 37:
            return $scope.$apply(function() {
              return $scope.goPrev();
            });
          case 39:
            return $scope.$apply(function() {
              return $scope.goNext();
            });
        }
      });
    },
    compile: function(tElement, tAttrs, transclude) {
      return {
        pre: function(scope, iElement, iAttrs, controller) {
          scope.confSlider = {};
          this.defaults = {
            animation: 'fade',
            sizemode: 'fit',
            current: 0,
            enablekeys: true,
            enablearrows: true,
            enablehtml: true,
            subslides: false,
            loop: true,
            noResize: false,
            current: 0,
            lazy: false,
            align: 'center center'
          };
          angular.forEach(this.defaults, function(value, key) {
            return scope.confSlider[key] = value;
          });
          angular.forEach(iAttrs, function(value, key) {
            return scope.confSlider[key] = value;
          });
          return scope.elementStyle = scope.confSlider.animation;
        }
      };
    }
  };
});

app.directive('imagoVideo', function(imagoUtils) {
  return {
    replace: true,
    scope: true,
    templateUrl: '/app/directives/views/video-widget.html',
    controller: function($scope, $element, $attrs, $transclude, $window) {
      var compile, detectCodec, pad, renderVideo, resize, updateTime, videoElement;
      $scope.videoWrapper = $element[0].children[1];
      $scope.time = '00:00';
      $scope.seekTime = 0;
      $scope.volumeInput = 100;
      $scope.$watch($attrs['source'], function(video) {
        if (video && video.kind === "Video") {
          return compile(video);
        } else {
          return $scope.videoBackground = {
            "display": "none"
          };
        }
      });
      angular.element($scope.videoWrapper).bind('timeupdate', function(e) {
        return $scope.$apply(function() {
          $scope.seekTime = $scope.videoWrapper.currentTime / $scope.videoWrapper.duration * 100;
          return updateTime($scope.videoWrapper.currentTime);
        });
      });
      angular.element($window).bind('resize', function(e) {
        return $scope.$apply(function() {
          return resize();
        });
      });
      compile = function(video) {
        this.options = {};
        this.defaults = {
          autobuffer: null,
          autoplay: false,
          controls: true,
          preload: 'none',
          size: 'hd',
          align: 'left top',
          sizemode: 'fit',
          lazy: true
        };
        angular.forEach(this.defaults, function(value, key) {
          return this.options[key] = value;
        });
        angular.forEach($attrs, function(value, key) {
          return this.options[key] = value;
        });
        $scope.optionsVideo = this.options;
        if (this.options.controls) {
          $scope.controls = angular.copy($scope.optionsVideo.controls);
        }
        $scope.videoBackground = {
          "background-position": "" + this.options.align
        };
        renderVideo(video);
        videoElement(video);
        return resize();
      };
      renderVideo = function(video) {
        var dpr, height, r, width;
        console.log(video);
        dpr = this.hires ? Math.ceil(window.devicePixelRatio) || 1 : 1;
        width = $scope.optionsVideo.width || $element[0].clientWidth;
        height = $scope.optionsVideo.height || $element[0].clientHeight;
        this.serving_url = video.serving_url;
        this.serving_url += "=s" + (Math.ceil(Math.min(Math.max(width, height) * dpr, 1600)));
        if (angular.isString(video.resolution)) {
          r = video.resolution.split('x');
          $scope.optionsVideo.resolution = {
            width: r[0],
            height: r[1]
          };
        }
        $scope.videoBackground["background-image"] = "url(" + this.serving_url + ")";
        $scope.videoBackground["background-repeat"] = "no-repeat";
        $scope.videoBackground["background-size"] = "auto 100%";
        if (angular.isNumber(width)) {
          $scope.videoBackground["width"] = width;
        }
        if (angular.isNumber(height)) {
          $scope.videoBackground["height"] = height;
        }
        $scope.styleFormats = {
          "autoplay": $scope.optionsVideo["autoplay"],
          "preload": $scope.optionsVideo["preload"],
          "autobuffer": $scope.optionsVideo["autobuffer"],
          "x-webkit-airplay": 'allow',
          "webkitAllowFullscreen": 'true'
        };
        return this.id = imagoUtils.uuid();
      };
      pad = function(num) {
        if (num < 10) {
          return "0" + num;
        }
        return num;
      };
      updateTime = function(sec) {
        var calc, hours, minutes, result, seconds;
        calc = [];
        minutes = Math.floor(sec / 60);
        hours = Math.floor(sec / 3600);
        seconds = (sec === 0 ? 0 : sec % 60);
        seconds = Math.round(seconds);
        if (hours > 0) {
          calc.push(pad(hours));
        }
        calc.push(pad(minutes));
        calc.push(pad(seconds));
        result = calc.join(":");
        return $scope.time = result;
      };
      $scope.play = function() {
        $scope.videoWrapper.play();
        return $scope.optionsVideo.state = 'playing';
      };
      $scope.togglePlay = function() {
        if ($scope.optionsVideo.state === 'playing') {
          return $scope.videoWrapper.pause();
        } else {
          return $scope.videoWrapper.play();
        }
      };
      $scope.pause = function() {
        $scope.videoWrapper.pause();
        return $scope.optionsVideo.state = 'pause';
      };
      ({
        setSize: function(size) {}
      });
      $scope.toggleSize = function() {
        if ($scope.optionsVideo.size === 'hd') {
          return $scope.optionsVideo.size = 'sd';
        } else {
          return $scope.optionsVideo.size = 'hd';
        }
      };
      $scope.seek = function(e) {
        var seek;
        seek = parseFloat(e / 100);
        $scope.seekTime = parseFloat($scope.videoWrapper.duration * seek);
        return $scope.videoWrapper.currentTime = angular.copy($scope.seekTime);
      };
      $scope.onVolumeChange = function(e) {
        return $scope.videoWrapper.volume = parseFloat(e / 100);
      };
      $scope.fullScreen = function() {
        if ($scope.videoWrapper.requestFullscreen) {
          return $scope.videoWrapper.requestFullscreen();
        } else if ($scope.videoWrapper.webkitRequestFullscreen) {
          return $scope.videoWrapper.webkitRequestFullscreen();
        } else if ($scope.videoWrapper.mozRequestFullScreen) {
          return $scope.videoWrapper.mozRequestFullScreen();
        } else if ($scope.videoWrapper.msRequestFullscreen) {
          return $scope.videoWrapper.msRequestFullscreen();
        }
      };
      resize = function() {
        var assetRatio, height, width, wrapperRatio;
        if (!$scope.optionsVideo) {
          return;
        }
        assetRatio = $scope.optionsVideo.resolution.width / $scope.optionsVideo.resolution.height;
        if ($scope.optionsVideo.sizemode === "crop") {
          width = $element[0].clientWidth;
          height = $element[0].clientHeight;
          wrapperRatio = width / height;
          if (assetRatio < wrapperRatio) {
            if (imagoUtils.isiOS()) {
              $scope.styleFormats["width"] = "100%";
              $scope.styleFormats["height"] = "100%";
            }
            if ($scope.optionsVideo.align === "center center") {
              $scope.styleFormats["top"] = "0";
              $scope.styleFormats["left"] = "0";
            } else {
              $scope.styleFormats["width"] = "100%";
              $scope.styleFormats["height"] = "auto";
            }
            if ($scope.optionsVideo.align === "center center") {
              $scope.styleFormats["top"] = "50%";
              $scope.styleFormats["left"] = "auto";
              $scope.styleFormats["margin-top"] = "-" + (width / assetRatio / 2) + "px";
              $scope.styleFormats["margin-left"] = "0px";
            }
            $scope.videoBackground["background-size"] = "100% auto";
            return $scope.videoBackground["background-position"] = $scope.optionsVideo.align;
          } else {
            if (imagoUtils.isiOS()) {
              $scope.styleFormats["width"] = "100%";
              $scope.styleFormats["height"] = "100%";
            }
            if ($scope.optionsVideo.align === "center center") {
              $scope.styleFormats["top"] = "0";
              $scope.styleFormats["left"] = "0";
            } else {
              $scope.styleFormats["width"] = "auto";
              $scope.styleFormats["height"] = "100%";
            }
            if ($scope.optionsVideo.align === "center center") {
              $scope.styleFormats["top"] = "auto";
              $scope.styleFormats["left"] = "50%";
              $scope.styleFormats["margin-top"] = "0px";
              $scope.styleFormats["margin-left"] = "-" + (height * assetRatio / 2) + "px";
            }
            $scope.videoBackground["background-size"] = "auto 100%";
            return $scope.videoBackground["background-position"] = $scope.optionsVideo.align;
          }
        } else {
          width = $element[0].clientWidth;
          height = $element[0].clientHeight;
          wrapperRatio = width / height;
          if (assetRatio > wrapperRatio) {
            $scope.styleFormats["width"] = '100%';
            $scope.styleFormats["height"] = imagoUtils.isiOS() ? '100%' : 'auto';
            $scope.videoBackground["background-size"] = '100% auto';
            $scope.videoBackground["background-position"] = $scope.optionsVideo.align;
            $scope.videoBackground["width"] = "" + width + "px";
            return $scope.videoBackground["height"] = "" + (parseInt(width / assetRatio, 10)) + "px";
          } else {
            $scope.styleFormats["width"] = imagoUtils.isiOS() ? '100%' : 'auto';
            $scope.styleFormats["height"] = '100%';
            $scope.videoBackground["background-size"] = 'auto 100%';
            $scope.videoBackground["background-position"] = $scope.optionsVideo.align;
            $scope.videoBackground["width"] = "" + (parseInt(height * assetRatio, 10)) + "px";
            return $scope.videoBackground["height"] = "" + height + "px";
          }
        }
      };
      videoElement = function(video) {
        var codec, format, i, result, _i, _len, _ref, _results;
        $scope.videoFormats = [];
        this.codecs = ['mp4', 'webm'];
        codec = detectCodec();
        video.formats.sort(function(a, b) {
          return b.height - a.height;
        });
        _ref = video.formats;
        _results = [];
        for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
          format = _ref[i];
          if (codec !== format.codec) {
            continue;
          }
          _results.push($scope.videoFormats.push(result = {
            "src": "http://" + tenant + ".imagoapp.com/assets/api/play_redirect?uuid=" + video.id + "&codec=" + format.codec + "&quality=hd&max_size=" + format.size,
            "size": format.size,
            "codec": format.codec,
            "type": "video/" + codec
          }));
        }
        return _results;
      };
      return detectCodec = function() {
        var codecs, key, tag, value;
        tag = document.createElement('video');
        if (!tag.canPlayType) {
          return;
        }
        codecs = {
          mp4: 'video/mp4; codecs="mp4v.20.8"',
          mp4: 'video/mp4; codecs="avc1.42E01E"',
          mp4: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
          webm: 'video/webm; codecs="vp8, vorbis"',
          ogg: 'video/ogg; codecs="theora"'
        };
        for (key in codecs) {
          value = codecs[key];
          if (tag.canPlayType(value)) {
            return key;
          }
        }
      };
    }
  };
});

app.directive('navigation', function() {
  return {
    replace: true,
    transclude: true,
    restrict: 'AE',
    templateUrl: '/app/directives/views/navigation.html',
    controller: function($scope, $element, $attrs, $transclude, $location, $timeout) {
      var currentLink, i, l, link, links, onClass, url, urlMap, _i, _len;
      links = $element.find("a");
      onClass = "active";
      currentLink = void 0;
      urlMap = {};
      for (i = _i = 0, _len = links.length; _i < _len; i = ++_i) {
        l = links[i];
        link = angular.element(links[i]);
        url = link.attr("href");
        if ($location.$$html5) {
          urlMap[url] = link;
        } else {
          urlMap[url.replace("/^#[^/]*/", "")] = link;
        }
      }
      return $scope.$on("$routeChangeStart", function() {
        var path, pathLink;
        path = $location.path();
        pathLink = urlMap[$location.path()];
        if (pathLink) {
          if (currentLink) {
            currentLink.removeClass(onClass);
          }
          currentLink = pathLink;
          return currentLink.addClass(onClass);
        } else if (path === "/" && currentLink) {
          return currentLink.removeClass(onClass);
        }
      });
    }
  };
});

app.controller('About', function($scope, $http, imagoPanel) {
  return imagoPanel.getData().then((function(_this) {
    return function(response) {
      $scope.info = response[0];
      return $scope.assets = response[0].items;
    };
  })(this));
});

app.controller('artistView', function($scope, $http, imagoPanel) {
  imagoPanel.getData().then((function(_this) {
    return function(response) {
      return $scope.assets = response[0];
    };
  })(this));
  $scope.zoomIn = function(asset) {
    $scope.zoomInSrc = "" + asset + "=s1000";
    return $scope.zoom = true;
  };
  return $scope.zoomOut = function(asset) {
    return $scope.zoom = false;
  };
});

app.controller('Artists', function($scope, $http, imagoPanel, $location) {
  return imagoPanel.getData().then((function(_this) {
    return function(response) {
      return $scope.assets = response[0].items;
    };
  })(this));
});

app.controller('body', function($scope, $http, imagoPanel) {});

app.controller('Contact', function($scope, $http, imagoPanel) {
  return imagoPanel.getData().then((function(_this) {
    return function(response) {
      return $scope.info = response[0];
    };
  })(this));
});

app.controller('Exhibitions', function($scope, $http, imagoPanel, $location) {
  return imagoPanel.getData().then((function(_this) {
    return function(response) {
      return $scope.assets = response[0].items;
    };
  })(this));
});

app.controller('HelloWorld', function($scope, $http, imagoUtils, imagoPanel) {
  $scope.message = 'Test';
  return imagoPanel.getData('/docs/assets').then((function(_this) {
    return function(response) {
      return $scope.assets = response[0].items;
    };
  })(this));
});

app.controller('Home', function($scope, $http, imagoUtils, imagoPanel, $location) {
  return imagoPanel.getData('/home').then((function(_this) {
    return function(response) {
      return $scope.assets = response[0].items;
    };
  })(this));
});

app.controller('News', function($scope, $http, imagoPanel) {
  return imagoPanel.getData().then((function(_this) {
    return function(response) {
      return $scope.assets = response[0];
    };
  })(this));
});

app.filter("meta", function() {
  return function(input) {
    var resources;
    if (!input) {
      return;
    }
    resources = input.split('.');
    if (resources.length !== 2) {
      console.log('Not enough data for meta');
      return;
    }
    if (!this[resources[0]]) {
      return;
    }
    if (this[resources[0]].meta[resources[1]].value.type) {
      return this[resources[0]].meta[resources[1]].value.value;
    } else {
      return this[resources[0]].meta[resources[1]].value;
    }
  };
});

app.factory('imagoPanel', function($http, imagoUtils, $q, $location) {
  return {
    search: function(query) {
      var params;
      params = this.objListToDict(query);
      return $http.post(this.getSearchUrl(), angular.toJson(params));
    },
    getData: function(query) {
      if (!query) {
        query = $location.$$path;
      }
      if (!query) {
        return console.log("Panel: query is empty, aborting " + query);
      }
      this.query = query;
      if (angular.isString(query)) {
        this.query = [
          {
            path: query
          }
        ];
      }
      this.query = imagoUtils.toArray(this.query);
      this.promises = [];
      this.data = [];
      angular.forEach(this.query, (function(_this) {
        return function(value) {
          return _this.promises.push(_this.search(value).success(function(data) {
            var result;
            if (data.length === 1 && data[0].kind === 'Collection') {
              return _this.data.push(data[0]);
            } else {
              result = {
                items: data,
                count: data.length
              };
              return _this.data.push(result);
            }
          }));
        };
      })(this));
      return $q.all(this.promises).then(((function(_this) {
        return function(response) {
          return _this.data;
        };
      })(this)));
    },
    objListToDict: function(obj_or_list) {
      var elem, key, querydict, value, _i, _j, _len, _len1, _ref;
      querydict = {};
      if (angular.isArray(obj_or_list)) {
        for (_i = 0, _len = obj_or_list.length; _i < _len; _i++) {
          elem = obj_or_list[_i];
          for (key in elem) {
            value = elem[key];
            querydict[key] || (querydict[key] = []);
            querydict[key].push(value);
          }
        }
      } else {
        for (key in obj_or_list) {
          value = obj_or_list[key];
          querydict[key] = angular.isArray(value) ? value : [value];
        }
      }
      _ref = ['page', 'pagesize'];
      for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
        key = _ref[_j];
        if (querydict.hasOwnProperty(key)) {
          querydict[key] = querydict[key][0];
        }
      }
      return querydict;
    },
    getMeta: function(field) {},
    getSearchUrl: function() {
      if (data === 'online' && debug) {
        return "http://" + tenant + ".imagoapp.com/api/v3/search";
      } else {
        return "/api/v3/search";
      }
    }
  };
});

app.factory('imagoUtils', function() {
  var CURRENCY_MAPPING, KEYS, SYMBOLS, alphanum;
  KEYS = {
    '16': 'onShift',
    '18': 'onAlt',
    '17': 'onCommand',
    '91': 'onCommand',
    '93': 'onCommand',
    '224': 'onCommand',
    '13': 'onEnter',
    '32': 'onSpace',
    '37': 'onLeft',
    '38': 'onUp',
    '39': 'onRight',
    '40': 'onDown',
    '46': 'onDelete',
    '8': 'onBackspace',
    '9': 'onTab',
    '188': 'onComma',
    '190': 'onPeriod',
    '27': 'onEsc',
    '186': 'onColon',
    '65': 'onA',
    '67': 'onC',
    '86': 'onV',
    '88': 'onX',
    '68': 'onD',
    '187': 'onEqual',
    '189': 'onMinus'
  };
  SYMBOLS = {
    EUR: '&#128;',
    USD: '&#36;',
    SEK: 'SEK',
    YEN: '&#165;',
    GBP: '&#163;',
    GENERIC: '&#164;'
  };
  CURRENCY_MAPPING = {
    "United Arab Emirates": "AED",
    "Afghanistan": "AFN",
    "Albania": "ALL",
    "Armenia": "AMD",
    "Angola": "AOA",
    "Argentina": "ARS",
    "Australia": "AUD",
    "Aruba": "AWG",
    "Azerbaijan": "AZN",
    "Bosnia and Herzegovina": "BAM",
    "Barbados": "BBD",
    "Bangladesh": "BDT",
    "Bulgaria": "BGN",
    "Bahrain": "BHD",
    "Burundi": "BIF",
    "Bermuda": "BMD",
    "Brunei": "BND",
    "Bolivia": "BOB",
    "Brazil": "BRL",
    "Bahamas": "BSD",
    "Bhutan": "BTN",
    "Botswana": "BWP",
    "Belarus": "BYR",
    "Belize": "BZD",
    "Canada": "CAD",
    "Switzerland Franc": "CHF",
    "Chile": "CLP",
    "China": "CNY",
    "Colombia": "COP",
    "Costa Rica": "CRC",
    "Cuba Convertible": "CUC",
    "Cuba Peso": "CUP",
    "Cape Verde": "CVE",
    "Czech Republic": "CZK",
    "Djibouti": "DJF",
    "Denmark": "DKK",
    "Dominican Republic": "DOP",
    "Algeria": "DZD",
    "Egypt": "EGP",
    "Eritrea": "ERN",
    "Ethiopia": "ETB",
    "Autria": "EUR",
    "Fiji": "FJD",
    "United Kingdom": "GBP",
    "Georgia": "GEL",
    "Guernsey": "GGP",
    "Ghana": "GHS",
    "Gibraltar": "GIP",
    "Gambia": "GMD",
    "Guinea": "GNF",
    "Guatemala": "GTQ",
    "Guyana": "GYD",
    "Hong Kong": "HKD",
    "Honduras": "HNL",
    "Croatia": "HRK",
    "Haiti": "HTG",
    "Hungary": "HUF",
    "Indonesia": "IDR",
    "Israel": "ILS",
    "Isle of Man": "IMP",
    "India": "INR",
    "Iraq": "IQD",
    "Iran": "IRR",
    "Iceland": "ISK",
    "Jersey": "JEP",
    "Jamaica": "JMD",
    "Jordan": "JOD",
    "Japan": "JPY",
    "Kenya": "KES",
    "Kyrgyzstan": "KGS",
    "Cambodia": "KHR",
    "Comoros": "KMF",
    "North Korea": "KPW",
    "South Korea": "KRW",
    "Kuwait": "KWD",
    "Cayman Islands": "KYD",
    "Kazakhstan": "KZT",
    "Laos": "LAK",
    "Lebanon": "LBP",
    "Sri Lanka": "LKR",
    "Liberia": "LRD",
    "Lesotho": "LSL",
    "Lithuania": "LTL",
    "Latvia": "LVL",
    "Libya": "LYD",
    "Morocco": "MAD",
    "Moldova": "MDL",
    "Madagascar": "MGA",
    "Macedonia": "MKD",
    "Mongolia": "MNT",
    "Macau": "MOP",
    "Mauritania": "MRO",
    "Mauritius": "MUR",
    "Malawi": "MWK",
    "Mexico": "MXN",
    "Malaysia": "MYR",
    "Mozambique": "MZN",
    "Namibia": "NAD",
    "Nigeria": "NGN",
    "Nicaragua": "NIO",
    "Norway": "NOK",
    "Nepal": "NPR",
    "New Zealand": "NZD",
    "Oman": "OMR",
    "Panama": "PAB",
    "Peru": "PEN",
    "Papua New Guinea": "PGK",
    "Philippines": "PHP",
    "Pakistan": "PKR",
    "Poland": "PLN",
    "Paraguay": "PYG",
    "Qatar": "QAR",
    "Romania": "RON",
    "Serbia": "RSD",
    "Russia": "RUB",
    "Rwanda": "RWF",
    "Saudi Arabia": "SAR",
    "Solomon Islands": "SBD",
    "Seychelles": "SCR",
    "Sudan": "SDG",
    "Sweden": "SEK",
    "Singapore": "SGD",
    "Saint Helena": "SHP",
    "Suriname": "SRD",
    "El Salvador": "SVC",
    "Syria": "SYP",
    "Swaziland": "SZL",
    "Thailand": "THB",
    "Tajikistan": "TJS",
    "Turkmenistan": "TMT",
    "Tunisia": "TND",
    "Tonga": "TOP",
    "Turkey": "TRY",
    "Trinidad and Tobago": "TTD",
    "Tuvalu": "TVD",
    "Taiwan": "TWD",
    "Tanzania": "TZS",
    "Ukraine": "UAH",
    "Uganda": "UGX",
    "United States": "USD",
    "Uruguay": "UYU",
    "Uzbekistan": "UZS",
    "Venezuela": "VEF",
    "Vietnam": "VND",
    "Vanuatu": "VUV",
    "Samoa": "WST",
    "Yemen": "YER",
    "South Africa": "ZAR",
    "Zambia": "ZMW",
    "Zimbabwe": "ZWD",
    "Austria": "EUR",
    "Belgium": "EUR",
    "Bulgaria": "EUR",
    "Croatia": "EUR",
    "Cyprus": "EUR",
    "Czech Republic": "EUR",
    "Denmark": "EUR",
    "Estonia": "EUR",
    "Finland": "EUR",
    "France": "EUR",
    "Germany": "EUR",
    "Greece": "EUR",
    "Hungary": "EUR",
    "Ireland": "EUR",
    "Italy": "EUR",
    "Latvia": "EUR",
    "Lithuania": "EUR",
    "Luxembourg": "EUR",
    "Malta": "EUR",
    "Netherlands": "EUR",
    "Poland": "EUR",
    "Portugal": "EUR",
    "Romania": "EUR",
    "Slovakia": "EUR",
    "Slovenia": "EUR",
    "Spain": "EUR"
  };
  return {
    toType: function(obj) {
      return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    },
    requestAnimationFrame: (function() {
      var request;
      request = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
        return window.setTimeout(callback, 1000 / 60);
      };
      return function(callback) {
        return request.call(window, callback);
      };
    })(),
    cookie: function(name, value) {
      var cookie, _i, _len, _ref;
      if (!value) {
        _ref = document.cookie.split(';');
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          cookie = _ref[_i];
          if (cookie.indexOf(name) === 1) {
            return cookie.split('=')[1];
          }
        }
        return false;
      }
      return document.cookie = "" + name + "=" + value + "; path=/";
    },
    sha: function() {
      var i, possible, text, _i;
      text = '';
      possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
      for (i = _i = 0; _i <= 56; i = ++_i) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    },
    uuid: function() {
      var S4;
      S4 = function() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      };
      return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
    },
    urlify: function(query) {
      return console.log('urlify');
    },
    queryfy: function(url) {
      var facet, filter, key, query, value, _i, _len, _ref;
      query = [];
      _ref = url.split('+');
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        filter = _ref[_i];
        filter || (filter = 'collection:/');
        facet = filter.split(':');
        key = facet[0].toLowerCase();
        value = decodeURIComponent(facet[1] || '');
        facet = {};
        facet[key] = value;
        query.push(facet);
      }
      return query;
    },
    pluralize: function(str) {
      return str + 's';
    },
    singularize: function(str) {
      return str.replace(/s$/, '');
    },
    normalize: function(s) {
      var mapping, r, str;
      mapping = {
        'ä': 'ae',
        'ö': 'oe',
        'ü': 'ue',
        '&': 'and',
        'é': 'e',
        'ë': 'e',
        'ï': 'i',
        'è': 'e',
        'à': 'a',
        'ù': 'u',
        'ç': 'c',
        'ø': 'o'
      };
      s = s.toLowerCase();
      r = new RegExp(Object.keys(mapping).join('|'), 'g');
      str = s.trim().replace(r, function(s) {
        return mapping[s];
      }).toLowerCase();
      return str.replace(/[',:;#]/g, '').replace(/[^\/\w]+/g, '-').replace(/\W?\/\W?/g, '\/').replace(/^-|-$/g, '');
    },
    alphaNumSort: alphanum = function(a, b) {
      var aa, bb, c, chunkify, d, x;
      chunkify = function(t) {
        var i, j, m, n, tz, x, y;
        tz = [];
        x = 0;
        y = -1;
        n = 0;
        i = void 0;
        j = void 0;
        while (i = (j = t.charAt(x++)).charCodeAt(0)) {
          m = i === 46 || (i >= 48 && i <= 57);
          if (m !== n) {
            tz[++y] = "";
            n = m;
          }
          tz[y] += j;
        }
        return tz;
      };
      aa = chunkify(a);
      bb = chunkify(b);
      x = 0;
      while (aa[x] && bb[x]) {
        if (aa[x] !== bb[x]) {
          c = Number(aa[x]);
          d = Number(bb[x]);
          if (c === aa[x] && d === bb[x]) {
            return c - d;
          } else {
            return (aa[x] > bb[x] ? 1 : -1);
          }
        }
        x++;
      }
      return aa.length - bb.length;
    },
    isiOS: function() {
      return !!navigator.userAgent.match(/iPad|iPhone|iPod/i);
    },
    isiPad: function() {
      return !!navigator.userAgent.match(/iPad/i);
    },
    isiPhone: function() {
      return !!navigator.userAgent.match(/iPhone/i);
    },
    isiPod: function() {
      return !!navigator.userAgent.match(/iPod/i);
    },
    isChrome: function() {
      return !!navigator.userAgent.match(/Chrome/i);
    },
    isIE: function() {
      return !!navigator.userAgent.match(/MSIE/i);
    },
    isFirefox: function() {
      return !!navigator.userAgent.match(/Firefox/i);
    },
    isOpera: function() {
      return !!navigator.userAgent.match(/Presto/i);
    },
    isSafari: function() {
      return !!navigator.userAgent.match(/Safari/i) && !this.isChrome();
    },
    isEven: function(n) {
      return this.isNumber(n) && (n % 2 === 0);
    },
    isOdd: function(n) {
      return this.isNumber(n) && (n % 2 === 1);
    },
    isNumber: function(n) {
      return n === parseFloat(n);
    },
    toFloat: function(value, decimal) {
      var floats, ints;
      if (decimal == null) {
        decimal = 2;
      }
      if (!decimal) {
        return value;
      }
      value = String(value).replace(/\D/g, '');
      floats = value.slice(value.length - decimal);
      while (floats.length < decimal) {
        floats = '0' + floats;
      }
      ints = value.slice(0, value.length - decimal) || '0';
      return "" + ints + "." + floats;
    },
    toPrice: function(value, currency) {
      var price, symbol;
      price = this.toFloat(value).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
      symbol = this.getCurrencySymbol(currency);
      return "" + symbol + " " + price;
    },
    isEmail: function(value) {
      var pattern;
      pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return !!value.match(pattern);
    },
    getAssetKind: function(id) {
      var kind;
      if (id.indexOf('Collection-') === 0) {
        kind = 'Collection';
      } else if (id.indexOf('Proxy-') === 0) {
        kind = 'Proxy';
      } else if (id.indexOf('Order-') === 0) {
        kind = 'Order';
      } else if (id.indexOf('Generic') === 0) {
        kind = 'Generic';
      } else if (id.match(/[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}/)) {
        kind = 'Image';
      } else if (id.match(/[0-9a-z]{56}/)) {
        kind = 'Video';
      }
      return kind;
    },
    getKeyName: function(e) {
      return KEYS[e.which];
    },
    getURLParameter: function(name) {
      var regex, results;
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
      results = regex.exec(location.search);
      if (results == null) {
        return "";
      } else {
        return decodeURIComponent(results[1].replace(/\+/g, " "));
      }
    },
    inUsa: function(value) {
      var _ref;
      return (_ref = value != null ? value.toLowerCase() : void 0) === 'usa' || _ref === 'united states' || _ref === 'united states of america';
    },
    getCurrencySymbol: function(currency) {
      return SYMBOLS[currency] || SYMBOLS.GENERIC;
    },
    getCurrency: function(country) {
      return CURRENCY_MAPPING[country];
    },
    toArray: function(elem) {
      if (angular.isArray(elem)) {
        return elem;
      } else {
        return [elem];
      }
    }
  };
});

app.factory('widgetImage', function($log) {
  ({
    defaults: {
      align: 'center center',
      sizemode: 'fit',
      hires: true,
      scale: 1,
      lazy: true,
      maxSize: 2560,
      noResize: false,
      mediasize: false,
      width: 'auto',
      height: 'auto'
    }
  });
  angular.forEach(defaults, function(value, key) {
    return this[key] = value;
  });
  if (!this.src) {
    return $log('Error: image widget rquires src');
  }
  if (!this.resolution) {
    return $log('Error: image widget rquires resolution');
  }
});
