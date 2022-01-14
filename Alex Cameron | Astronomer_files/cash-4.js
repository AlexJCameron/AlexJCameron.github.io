/* MIT https://github.com/kenwheeler/cash */
(function(){
'use strict';var e=document,g=window,k=e.createElement("div"),l=Array.prototype,m=l.filter,n=l.indexOf,aa=l.map,q=l.push,r=l.reverse,u=l.slice,v=l.some,ba=l.splice,ca=/^#[\w-]*$/,da=/^\.[\w-]*$/,ea=/<.+>/,fa=/^\w+$/;function x(a,b){void 0===b&&(b=e);return b&&9===b.nodeType||b&&1===b.nodeType?da.test(a)?b.getElementsByClassName(a.slice(1)):fa.test(a)?b.getElementsByTagName(a):b.querySelectorAll(a):[]}
var y=function(){function a(a,c){void 0===c&&(c=e);if(a){if(a instanceof y)return a;var b=a;if(z(a)){if(b=c instanceof y?c[0]:c,b=ca.test(a)?b.getElementById(a.slice(1)):ea.test(a)?A(a):x(a,b),!b)return}else if(B(a))return this.ready(a);if(b.nodeType||b===g)b=[b];this.length=b.length;a=0;for(c=this.length;a<c;a++)this[a]=b[a]}}a.prototype.init=function(b,c){return new a(b,c)};return a}(),C=y.prototype.init;C.fn=C.prototype=y.prototype;y.prototype.length=0;y.prototype.splice=ba;
"function"===typeof Symbol&&(y.prototype[Symbol.iterator]=Array.prototype[Symbol.iterator]);y.prototype.get=function(a){return void 0===a?u.call(this):this[0>a?a+this.length:a]};y.prototype.eq=function(a){return C(this.get(a))};y.prototype.first=function(){return this.eq(0)};y.prototype.last=function(){return this.eq(-1)};y.prototype.map=function(a){return C(aa.call(this,function(b,c){return a.call(b,c,b)}))};y.prototype.slice=function(){return C(u.apply(this,arguments))};var ha=/-([a-z])/g;
function ia(a,b){return b.toUpperCase()}function D(a){return a.replace(ha,ia)}C.camelCase=D;function E(a,b){for(var c=0,d=a.length;c<d&&!1!==b.call(a[c],c,a[c]);c++);}C.each=E;y.prototype.each=function(a){E(this,a);return this};y.prototype.removeProp=function(a){return this.each(function(b,c){delete c[a]})};function F(a){for(var b=1;b<arguments.length;b++);b=arguments;for(var c=b.length,d=2>c?0:1;d<c;d++)for(var f in b[d])a[f]=b[d][f];return a}y.prototype.extend=function(a){return F(C.fn,a)};
C.extend=F;C.guid=1;function G(a,b){var c=a&&(a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector);return!!c&&c.call(a,b)}C.matches=G;function H(a,b,c){for(var d=[],f=0,h=a.length;f<h;f++)for(var p=a[f][b];null!=p;){d.push(p);if(!c)break;p=p[b]}return d}function I(a){return!!a&&a===a.window}function B(a){return"function"===typeof a}function z(a){return"string"===typeof a}function J(a){return!isNaN(parseFloat(a))&&isFinite(a)}var K=Array.isArray;
C.isWindow=I;C.isFunction=B;C.isString=z;C.isNumeric=J;C.isArray=K;y.prototype.prop=function(a,b){if(a){if(z(a))return 2>arguments.length?this[0]&&this[0][a]:this.each(function(c,f){f[a]=b});for(var c in a)this.prop(c,a[c]);return this}};function L(a){return z(a)?function(b,c){return G(c,a)}:B(a)?a:a instanceof y?function(b,c){return a.is(c)}:function(b,c){return c===a}}y.prototype.filter=function(a){if(!a)return C();var b=L(a);return C(m.call(this,function(a,d){return b.call(a,d,a)}))};
function M(a,b){return b&&a.length?a.filter(b):a}var ja=/\S+/g;function N(a){return z(a)?a.match(ja)||[]:[]}y.prototype.hasClass=function(a){return a&&v.call(this,function(b){return b.classList.contains(a)})};y.prototype.removeAttr=function(a){var b=N(a);return b.length?this.each(function(a,d){E(b,function(a,b){d.removeAttribute(b)})}):this};
y.prototype.attr=function(a,b){if(a){if(z(a)){if(2>arguments.length){if(!this[0])return;var c=this[0].getAttribute(a);return null===c?void 0:c}return void 0===b?this:null===b?this.removeAttr(a):this.each(function(c,f){f.setAttribute(a,b)})}for(c in a)this.attr(c,a[c]);return this}};y.prototype.toggleClass=function(a,b){var c=N(a),d=void 0!==b;return c.length?this.each(function(a,h){E(c,function(a,c){d?b?h.classList.add(c):h.classList.remove(c):h.classList.toggle(c)})}):this};
y.prototype.addClass=function(a){return this.toggleClass(a,!0)};y.prototype.removeClass=function(a){return arguments.length?this.toggleClass(a,!1):this.attr("class","")};function O(a){return 1<a.length?m.call(a,function(a,c,d){return n.call(d,a)===c}):a}C.unique=O;y.prototype.add=function(a,b){return C(O(this.get().concat(C(a,b).get())))};function P(a,b,c){if(a&&1===a.nodeType&&b)return a=g.getComputedStyle(a,null),b?c?a.getPropertyValue(b)||void 0:a[b]:a}
function Q(a,b){return parseInt(P(a,b),10)||0}var R=/^--/,S={},ka=k.style,la=["webkit","moz","ms","o"];function ma(a,b){void 0===b&&(b=R.test(a));if(b)return a;if(!S[a]){b=D(a);var c=""+b.charAt(0).toUpperCase()+b.slice(1);b=(b+" "+la.join(c+" ")+c).split(" ");E(b,function(b,c){if(c in ka)return S[a]=c,!1})}return S[a]}C.prefixedProp=ma;var na={animationIterationCount:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0};
function oa(a,b,c){void 0===c&&(c=R.test(a));return c||na[a]||!J(b)?b:b+"px"}y.prototype.css=function(a,b){if(z(a)){var c=R.test(a);a=ma(a,c);if(2>arguments.length)return this[0]&&P(this[0],a,c);if(!a)return this;b=oa(a,b,c);return this.each(function(d,h){h&&1===h.nodeType&&(c?h.style.setProperty(a,b):h.style[a]=b)})}for(var d in a)this.css(d,a[d]);return this};function pa(a,b){a=a.dataset?a.dataset[b]||a.dataset[D(b)]:a.getAttribute("data-"+b);try{return JSON.parse(a)}catch(c){}return a}var qa=/^data-(.+)/;
y.prototype.data=function(a,b){var c=this;if(!a){if(!this[0])return;var d={};E(this[0].attributes,function(a,b){(a=b.name.match(qa))&&(d[a[1]]=c.data(a[1]))});return d}if(z(a))return void 0===b?this[0]&&pa(this[0],a):this.each(function(c,d){c=b;try{c=JSON.stringify(c)}catch(w){}d.dataset?d.dataset[D(a)]=c:d.setAttribute("data-"+a,c)});for(var f in a)this.data(f,a[f]);return this};
function ra(a,b){return Q(a,"border"+(b?"Left":"Top")+"Width")+Q(a,"padding"+(b?"Left":"Top"))+Q(a,"padding"+(b?"Right":"Bottom"))+Q(a,"border"+(b?"Right":"Bottom")+"Width")}E(["Width","Height"],function(a,b){y.prototype["inner"+b]=function(){if(this[0])return I(this[0])?g["inner"+b]:this[0]["client"+b]}});
E(["width","height"],function(a,b){y.prototype[b]=function(c){if(!this[0])return void 0===c?void 0:this;if(!arguments.length)return I(this[0])?this[0][D("outer-"+b)]:this[0].getBoundingClientRect()[b]-ra(this[0],!a);var d=parseInt(c,10);return this.each(function(c,h){h&&1===h.nodeType&&(c=P(h,"boxSizing"),h.style[b]=oa(b,d+("border-box"===c?ra(h,!a):0)))})}});
E(["Width","Height"],function(a,b){y.prototype["outer"+b]=function(c){if(this[0])return I(this[0])?g["outer"+b]:this[0]["offset"+b]+(c?Q(this[0],"margin"+(a?"Top":"Left"))+Q(this[0],"margin"+(a?"Bottom":"Right")):0)}});var T={};
y.prototype.toggle=function(a){return this.each(function(b,c){if(void 0!==a?a:"none"===P(c,"display")){if(c.style.display="","none"===P(c,"display")){b=c.style;c=c.tagName;if(T[c])c=T[c];else{var d=e.createElement(c);e.body.appendChild(d);var f=P(d,"display");e.body.removeChild(d);c=T[c]="none"!==f?f:"block"}b.display=c}}else c.style.display="none"})};y.prototype.hide=function(){return this.toggle(!1)};y.prototype.show=function(){return this.toggle(!0)};
function sa(a,b){return!b||!v.call(b,function(b){return 0>a.indexOf(b)})}var U={focus:"focusin",blur:"focusout"},ta={mouseenter:"mouseover",mouseleave:"mouseout"},ua=/^(?:mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;function va(a,b,c,d,f){f.guid=f.guid||C.guid++;var h=a.__cashEvents=a.__cashEvents||{};h[b]=h[b]||[];h[b].push([c,d,f]);a.addEventListener(b,f)}function V(a){a=a.split(".");return[a[0],a.slice(1).sort()]}
function W(a,b,c,d,f){var h=a.__cashEvents=a.__cashEvents||{};if(b)h[b]&&(h[b]=h[b].filter(function(h){var p=h[0],ya=h[1];h=h[2];if(f&&h.guid!==f.guid||!sa(p,c)||d&&d!==ya)return!0;a.removeEventListener(b,h)}));else{for(b in h)W(a,b,c,d,f);delete a.__cashEvents}}y.prototype.off=function(a,b,c){var d=this;void 0===a?this.each(function(a,b){return W(b)}):(B(b)&&(c=b,b=""),E(N(a),function(a,h){a=V(ta[h]||U[h]||h);var f=a[0],w=a[1];d.each(function(a,d){return W(d,f,w,b,c)})}));return this};
y.prototype.on=function(a,b,c,d){var f=this;if(!z(a)){for(var h in a)this.on(h,b,a[h]);return this}B(b)&&(c=b,b="");E(N(a),function(a,h){a=V(ta[h]||U[h]||h);var p=a[0],w=a[1];f.each(function(a,h){a=function za(a){if(!a.namespace||sa(w,a.namespace.split("."))){var f=h;if(b){for(var t=a.target;!G(t,b);){if(t===h)return;t=t.parentNode;if(!t)return}f=t;a.__delegate=!0}a.__delegate&&Object.defineProperty(a,"currentTarget",{configurable:!0,get:function(){return f}});t=c.call(f,a,a.data);d&&W(h,p,w,b,za);
!1===t&&(a.preventDefault(),a.stopPropagation())}};a.guid=c.guid=c.guid||C.guid++;va(h,p,w,b,a)})});return this};y.prototype.one=function(a,b,c){return this.on(a,b,c,!0)};y.prototype.ready=function(a){function b(){return a(C)}"loading"!==e.readyState?setTimeout(b):e.addEventListener("DOMContentLoaded",b);return this};
y.prototype.trigger=function(a,b){if(z(a)){var c=V(a);a=c[0];c=c[1];var d=ua.test(a)?"MouseEvents":"HTMLEvents";var f=e.createEvent(d);f.initEvent(a,!0,!0);f.namespace=c.join(".")}else f=a;f.data=b;var h=f.type in U;return this.each(function(a,b){if(h&&B(b[f.type]))b[f.type]();else b.dispatchEvent(f)})};function wa(a){return a.multiple&&a.options?H(m.call(a.options,function(a){return a.selected&&!a.disabled&&!a.parentNode.disabled}),"value"):a.value||""}
var xa=/%20/g,Aa=/file|reset|submit|button|image/i,Ba=/radio|checkbox/i;y.prototype.serialize=function(){var a="";this.each(function(b,c){E(c.elements||[c],function(b,c){c.disabled||!c.name||"FIELDSET"===c.tagName||Aa.test(c.type)||Ba.test(c.type)&&!c.checked||(b=wa(c),void 0!==b&&(b=K(b)?b:[b],E(b,function(b,d){b=a;d="&"+encodeURIComponent(c.name)+"="+encodeURIComponent(d).replace(xa,"+");a=b+d})))})});return a.substr(1)};
y.prototype.val=function(a){return void 0===a?this[0]&&wa(this[0]):this.each(function(b,c){if("SELECT"===c.tagName){var d=K(a)?a:null===a?[]:[a];E(c.options,function(a,b){b.selected=0<=d.indexOf(b.value)})}else c.value=null===a?"":a})};y.prototype.clone=function(){return this.map(function(a,b){return b.cloneNode(!0)})};y.prototype.detach=function(){return this.each(function(a,b){b.parentNode&&b.parentNode.removeChild(b)})};var Ca=/^\s*<(\w+)[^>]*>/,Da=/^\s*<(\w+)\s*\/?>(?:<\/\1>)?\s*$/,X;
function A(a){if(!X){var b=e.createElement("table"),c=e.createElement("tr");X={"*":k,tr:e.createElement("tbody"),td:c,th:c,thead:b,tbody:b,tfoot:b}}if(!z(a))return[];if(Da.test(a))return[e.createElement(RegExp.$1)];b=Ca.test(a)&&RegExp.$1;b=X[b]||X["*"];b.innerHTML=a;return C(b.childNodes).detach().get()}C.parseHTML=A;y.prototype.empty=function(){return this.each(function(a,b){for(;b.firstChild;)b.removeChild(b.firstChild)})};
y.prototype.html=function(a){return void 0===a?this[0]&&this[0].innerHTML:this.each(function(b,c){c.innerHTML=a})};y.prototype.remove=function(){return this.detach().off()};y.prototype.text=function(a){return void 0===a?this[0]?this[0].textContent:"":this.each(function(b,c){c.textContent=a})};y.prototype.unwrap=function(){this.parent().each(function(a,b){a=C(b);a.replaceWith(a.children())});return this};var Ea=e.documentElement;
y.prototype.offset=function(){var a=this[0];if(a)return a=a.getBoundingClientRect(),{top:a.top+g.pageYOffset-Ea.clientTop,left:a.left+g.pageXOffset-Ea.clientLeft}};y.prototype.offsetParent=function(){return C(this[0]&&this[0].offsetParent)};y.prototype.position=function(){var a=this[0];if(a)return{left:a.offsetLeft,top:a.offsetTop}};y.prototype.children=function(a){var b=[];this.each(function(a,d){q.apply(b,d.children)});return M(C(O(b)),a)};
y.prototype.contents=function(){var a=[];this.each(function(b,c){q.apply(a,"IFRAME"===c.tagName?[c.contentDocument]:c.childNodes)});return C(O(a))};y.prototype.find=function(a){for(var b=[],c=0,d=this.length;c<d;c++){var f=x(a,this[c]);f.length&&q.apply(b,f)}return C(O(b))};var Fa=/^$|^module$|\/(?:java|ecma)script/i,Ga=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
function Y(a){a=C(a);a.filter("script").add(a.find("script")).each(function(a,c){!c.src&&Fa.test(c.type)&&c.ownerDocument.documentElement.contains(c)&&eval(c.textContent.replace(Ga,""))})}function Z(a,b,c){E(a,function(a,f){E(b,function(b,d){b=a?d.cloneNode(!0):d;c?f.insertBefore(b,c&&f.firstChild):f.appendChild(b);Y(b)})})}y.prototype.append=function(){var a=this;E(arguments,function(b,c){Z(a,C(c))});return this};y.prototype.appendTo=function(a){Z(C(a),this);return this};
y.prototype.insertAfter=function(a){var b=this;C(a).each(function(a,d){var c=d.parentNode;c&&b.each(function(b,f){b=a?f.cloneNode(!0):f;c.insertBefore(b,d.nextSibling);Y(b)})});return this};y.prototype.after=function(){var a=this;E(r.apply(arguments),function(b,c){r.apply(C(c).slice()).insertAfter(a)});return this};y.prototype.insertBefore=function(a){var b=this;C(a).each(function(a,d){var c=d.parentNode;c&&b.each(function(b,f){b=a?f.cloneNode(!0):f;c.insertBefore(b,d);Y(b)})});return this};
y.prototype.before=function(){var a=this;E(arguments,function(b,c){C(c).insertBefore(a)});return this};y.prototype.prepend=function(){var a=this;E(arguments,function(b,c){Z(a,C(c),!0)});return this};y.prototype.prependTo=function(a){Z(C(a),r.apply(this.slice()),!0);return this};y.prototype.replaceWith=function(a){return this.before(a).remove()};y.prototype.replaceAll=function(a){C(a).replaceWith(this);return this};
y.prototype.wrapAll=function(a){if(this[0]){a=C(a);this.first().before(a);for(a=a[0];a.children.length;)a=a.firstElementChild;this.appendTo(a)}return this};y.prototype.wrap=function(a){return this.each(function(b,c){var d=C(a)[0];C(c).wrapAll(b?d.cloneNode(!0):d)})};y.prototype.wrapInner=function(a){return this.each(function(b,c){b=C(c);c=b.contents();c.length?c.wrapAll(a):b.append(a)})};
y.prototype.has=function(a){var b=z(a)?function(b,d){return!!x(a,d).length}:function(b,d){return d.contains(a)};return this.filter(b)};y.prototype.is=function(a){if(!a||!this[0])return!1;var b=L(a),c=!1;this.each(function(a,f){c=b.call(f,a,f);return!c});return c};y.prototype.next=function(a,b){return M(C(O(H(this,"nextElementSibling",b))),a)};y.prototype.nextAll=function(a){return this.next(a,!0)};
y.prototype.not=function(a){if(!a||!this[0])return this;var b=L(a);return this.filter(function(a,d){return!b.call(d,a,d)})};y.prototype.parent=function(a){return M(C(O(H(this,"parentNode"))),a)};y.prototype.index=function(a){var b=a?C(a)[0]:this[0];a=a?this:C(b).parent().children();return n.call(a,b)};y.prototype.closest=function(a){if(!a||!this[0])return C();var b=this.filter(a);return b.length?b:this.parent().closest(a)};
y.prototype.parents=function(a){return M(C(O(H(this,"parentElement",!0))),a)};y.prototype.prev=function(a,b){return M(C(O(H(this,"previousElementSibling",b))),a)};y.prototype.prevAll=function(a){return this.prev(a,!0)};y.prototype.siblings=function(a){var b=[];this.each(function(a,d){q.apply(b,C(d).parent().children(function(a,b){return b!==d}))});return M(C(O(b)),a)};"undefined"!==typeof exports?module.exports=C:g.cash=g.$=C;
})();