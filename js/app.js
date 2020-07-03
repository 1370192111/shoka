Object.assign(HTMLElement.prototype,{wrap:function(e){this.parentNode.insertBefore(e,this);this.parentNode.removeChild(this);e.appendChild(this)},height:function(){return this.getBoundingClientRect().height},top:function(){return this.getBoundingClientRect().top},attr:function(e,t){if(t){return this.setAttribute(e,t)}else{return this.getAttribute(e)}}});const e=function(e){if(e.indexOf("#")>0){return document.getElementById(e.replace("#",""))}return document.querySelector(e)};e.all=function(e){return document.querySelectorAll(e)};e.each=function(t,n){return e.all(t).forEach(n)};const t=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var n=CONFIG.assets.indexOf("//")>0?CONFIG.assets:CONFIG.root;var i={x:"undefined",y:"undefined"};var a=0;var o,s;const c=e("body > .container");const r=e(".container > header nav");const l=r.height();const d=e(".container > header");const u=d.height();const f=u-l;const h=e(".back-to-top");const p=e(".container > header .brand .meta");const m=e("main .sidebar");const v=function(){return e("main > .inner").offsetHeight};const g=function(t){var n=v();if(n>document.body.offsetHeight){e(".sidebar .quick").style.display="flex";e(".sidebar .panels").style.height="100vh"}else{e(".sidebar .quick").style.display="none"}};const y=function(t){var n=window.innerHeight;var o=v();var s=o>n?o-n:document.body.scrollHeight-n;var c=window.pageYOffset>f;if(c){e('meta[name="theme-color"]').setAttribute("content","#FFF")}else{e('meta[name="theme-color"]').setAttribute("content","#222")}r.classList.toggle("show",c);p.classList.toggle("affix",window.pageYOffset>0);m.classList.toggle("affix",c&&document.body.offsetWidth>991);if(typeof i.y=="undefined"){i.y=window.pageYOffset}a=i.y-window.pageYOffset;if(a<0){r.classList.remove("up");r.classList.toggle("down",c)}else if(a>0){r.classList.remove("down");r.classList.toggle("up",c)}else{}i.y=window.pageYOffset;var l=Math.round(Math.min(100*window.pageYOffset/s,100))+"%";h.querySelector("span").innerText=l;e(".percent").style.width=l};const w=function(t){e(".toggle.menu").classList.toggle("close");var n=m.classList.contains("on")?"transition.slideRightOut":"transition.slideRightIn";Velocity(m,n,{duration:200,complete:function(){m.classList.toggle("on")}})};const b=function(){e.each(".menu .item",function(e){var t=e.querySelector("a[href]");if(!t)return;var n=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html","");var i=!CONFIG.root.startsWith(t.pathname)&&location.pathname.startsWith(t.pathname);e.classList.toggle("active",t.hostname===location.hostname&&(n||i))})};const L=function(){var t=e(".sidebar .inner");var n=e.all(".sidebar .panel");if(e(".sidebar ul.tab")){t.removeChild(e(".sidebar ul.tab"))}var i=document.createElement("ul"),a="active";i.className="tab";["contents","related","overview"].forEach(function(t){var n=e(".sidebar .panel."+t);if(n.innerHTML.length<1){return}var o=document.createElement("li");var s=document.createElement("span");var c=document.createTextNode(n.attr("data-title"));s.appendChild(c);o.appendChild(s);o.classList.add(t);if(a){n.classList.add(a);o.classList.add(a)}else{n.classList.remove("active")}o.addEventListener("click",function(t){var n=event.currentTarget;if(n.classList.contains("active"))return;e.each(".sidebar .tab li",function(e){e.classList.remove("active")});e.each(".sidebar .panel",function(e){e.classList.remove("active")});e(".sidebar .panel."+n.className).classList.add("active");Velocity(e(".sidebar .panels > .inner"),"finish");Velocity(e(".sidebar .panels > .inner"),"transition.slideUpBigIn");n.classList.add("active")});i.appendChild(o);a=""});if(i.childNodes.length>1){t.insertBefore(i,t.childNodes[0]);e(".sidebar .panels").style.paddingTop=""}else{e(".sidebar .panels").style.paddingTop="10px"}};const N=function(){var t=e.all(".contents li");if(t.length<1){return}var n=Array.prototype.slice.call(t)||[];var i=null;n=n.map(function(t,n){var a=t.querySelector("a.toc-link");var o=function(t){t.preventDefault();var a=e(t.currentTarget.attr("href"));i=n;x(window.pageYOffset+a.top()-a.height()-f-l,function(){s(n);i=null})};a.addEventListener("click",o);e(a.attr("href")).querySelector("a.anchor").addEventListener("click",o);return e(a.attr("href"))});var o=e(".sidebar .panels .inner");var s=function(i,a){var s=t[i];if(!s)return;if(s.classList.contains("current")){return}e.each(".toc .active",function(e){e.classList.remove("active","current")});n.forEach(function(e){e.classList.remove("active")});s.classList.add("active","current");n[i].classList.add("active");var c=s.parentNode;while(!c.matches(".contents")){if(c.matches("li")){c.classList.add("active");var r=e(c.querySelector("a.toc-link").attr("href"));if(r){r.classList.add("active")}}c=c.parentNode}Velocity(s,"scroll",{container:o,offset:-(o.offsetHeight/2)})};var c=function(e){var t=0;var i=e[t];if(i.boundingClientRect.top>0){t=n.indexOf(i.target);return t===0?0:t-1}for(;t<e.length;t++){if(e[t].boundingClientRect.top<=0){i=e[t]}else{return n.indexOf(i.target)}}return n.indexOf(i.target)};var r=function(){var e=new IntersectionObserver(function(e,t){var n=c(e)+(a<0?1:0);if(i===null){s(n)}},{rootMargin:"0px 0px -100% 0px",threshold:0});n.forEach(function(t){t&&e.observe(t)})};r()};const C=function(){window.mediumZoom(".post-body :not(a) > img, .post-body > img",{background:"var(--grey-1)"});e.each("li ruby",function(e){var t=e.parentNode;if(e.parentNode.tagName!="li"){t=e.parentNode.parentNode}t.classList.add("ruby")});e.each("figure.highlight",function(e){const t=e.querySelector("figcaption");if(t){t.insertAdjacentHTML("afterBegin",'<div class="carbon"><div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div></div>')}e.insertAdjacentHTML("beforeend",'<div class="copy-btn"><i class="ic i-clipboard fa-fw"></i></div>');var n=e.querySelector(".copy-btn");n.addEventListener("click",function(e){var t=e.currentTarget;var n=t.parentNode.querySelector("pre.code").innerText;var i=document.createElement("textarea");i.style.top=window.scrollY+"px";i.style.position="absolute";i.style.opacity="0";i.readOnly=true;i.value=n;document.body.append(i);const a=document.getSelection();const o=a.rangeCount>0?a.getRangeAt(0):false;i.select();i.setSelectionRange(0,n.length);i.readOnly=false;var s=document.execCommand("copy");t.querySelector("i").className=s?"ic i-check":"ic i-times";i.blur();t.blur();if(o){a.removeAllRanges();a.addRange(o)}document.body.removeChild(i)});n.addEventListener("mouseleave",function(e){setTimeout(function(){e.target.querySelector("i").className="ic i-clipboard"},300)})});e.each("table",function(e){const t=document.createElement("div");t.className="table-container";e.wrap(t)});e.each("pre.mermaid > svg",function(e){e.style.maxWidth=""});e.each(".reward button",function(t){t.addEventListener("click",function(t){t.preventDefault();var n=e("#qr");if(n.style.display==="inline-flex"){Velocity(n,"fadeOut")}else{Velocity(n,"transition.slideUpBigIn",{display:"inline-flex"})}})});e.each(".quiz > ul.options li",function(e){e.addEventListener("click",function(t){if(e.classList.contains("correct")){e.classList.toggle("right");e.parentNode.parentNode.classList.add("show")}else{e.classList.toggle("wrong")}})});e.each(".quiz > p",function(e){e.addEventListener("click",function(t){e.parentNode.classList.toggle("show")})});S()};const x=function(t,n){Velocity(e("main .content"),"scroll",{duration:500,offset:t,complete:n||function(){}})};const E=function(){x(-u)};const k=function(){x(v()+e(".container > footer").offsetHeight)};const O=function(e,t,n){if(n){t()}else{var i=document.createElement("script");i.onload=i.onreadystatechange=function(e,n){if(n||!i.readyState||/loaded|complete/.test(i.readyState)){i.onload=i.onreadystatechange=null;i=undefined;if(!n&&t)setTimeout(t,0)}};i.src=e;document.head.appendChild(i)}};const I=function(e){return(CONFIG[e].indexOf("npm")>-1?"//cdn.jsdelivr.net/":n)+CONFIG[e]};const T=function(e,t,n){if(CONFIG[e]){O(I(e),t||function(){window[e]=true},n||window[e])}};const F=function(e,t){if(window[e])return;if(CONFIG[e]){var n=document.createElement("link");n.setAttribute("rel","stylesheet");n.href=I(e);document.head.appendChild(n);window[e]=true}};const S=function(){var t=e("#comments");if(!t){return}var n=new IntersectionObserver(function(n,i){T("valine",function(){var a=n[0];if(a.isIntersecting){var o=CONFIG.comments;o.el="#comments";o.path=t.attr("data-id");new Valine(o);Velocity(e("#comments"),"transition.bounceUpIn");i.disconnect()}},window.Valine)});n.observe(t)};const q=function(e){window.sessionStorage.setItem(e,i.y-f-l)};const G=function(t){var n=instantsearch({indexName:CONFIG.search.indexName,searchClient:algoliasearch(CONFIG.search.appID,CONFIG.search.apiKey),searchFunction:function(t){var n=e(".search-input");if(n.value){t.search()}}});n.on("render",function(){t.refresh(e("#search-hits"))});n.addWidgets([instantsearch.widgets.configure({hitsPerPage:CONFIG.search.hits.per_page||10}),instantsearch.widgets.searchBox({container:".search-input-container",placeholder:CONFIG.search.labels.input_placeholder,showReset:false,showSubmit:false,showLoadingIndicator:false,cssClasses:{input:"search-input"}}),instantsearch.widgets.stats({container:"#search-stats",templates:{text:function(e){var t=CONFIG.search.labels.hits_stats.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS);return t+'<span class="algolia-powered"></span><hr>'}}}),instantsearch.widgets.hits({container:"#search-hits",templates:{item:function(e){var t=e.categories.join('<i class="ic i-angle-right"></i>');return'<a href="'+CONFIG.root+e.path+'"><span>'+t+"</span>"+e._highlightResult.title.value+"</a>"},empty:function(e){return'<div id="hits-empty">'+CONFIG.search.labels.hits_empty.replace(/\$\{query}/,e.query)+"</div>"}},cssClasses:{item:"item"}}),instantsearch.widgets.pagination({container:"#search-pagination",scrollTo:false,showFirst:false,showLast:false,templates:{first:'<i class="ic i-angle-double-left"></i>',last:'<i class="ic i-angle-double-right"></i>',previous:'<i class="ic i-angle-left"></i>',next:'<i class="ic i-angle-right"></i>'},cssClasses:{root:"pagination",item:"pagination-item",link:"page-number",selectedItem:"current",disabledItem:"disabled-item"}})]);n.start();e.each(".search-btn",function(t){t.addEventListener("click",function(){document.body.style.overflow="hidden";Velocity(e(".search"),"transition.shrinkIn",{duration:200,complete:function(){e(".search-input").focus()}})})});const i=function(){document.body.style.overflow="";Velocity(e(".search"),"transition.shrinkOut")};e(".search").addEventListener("click",function(t){if(t.target===e(".search")){i()}});e(".close-btn").addEventListener("click",i);window.addEventListener("pjax:success",i);window.addEventListener("keyup",function(e){if(e.key==="Escape"){i()}})};const H={timer:null,lock:false,show:function(){clearTimeout(this.timer);document.body.classList.remove("loaded");Velocity(e(".loading"),"fadeIn",{display:"flex",complete:function(){H.lock=false}})},hide:function(e){this.timer=setTimeout(this.vanish,e||3e3)},vanish:function(){if(H.lock)return;Velocity(e(".loading"),"fadeOut");M();H.lock=true}};const M=function(){document.body.classList.add("loaded");var t=e("main > .inner > .content > .wrap").style.display;Velocity(e("main > .inner > .content > .wrap"),"transition.bounceUpIn",{display:t})};const V=function(){if(!e("#copyright"))return;var t=document.getElementsByTagName("body")[0];var n;if(window.getSelection){n=window.getSelection()}else if(document.getSelection){n=document.getSelection()}else if(document.selection){n=document.selection.createRange().text}else{n=""}var i=e("#copyright").innerHTML;var a=n+"<br>-----------<br>"+i;var o=document.createElement("div");o.style.left="-99999px";o.style.position="absolute";t.appendChild(o);o.innerHTML=a;n.selectAllChildren(o);window.setTimeout(function(){t.removeChild(o)},0)};const R=function(){e.each("span.exturl",function(e){var t=document.createElement("a");t.href=decodeURIComponent(atob(e.dataset.url).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));t.rel="noopener external nofollow noreferrer";t.target="_blank";t.className=e.className;t.title=e.title||e.innerText;t.innerHTML=e.innerHTML;if(e.dataset.backgroundImage){t.dataset.backgroundImage=e.dataset.backgroundImage}e.parentNode.replaceChild(t,e)})};const j=function(){q(window.location.href);if(m.classList.contains("on")){Velocity(m,"transition.slideRightOut",{duration:200,complete:function(){m.classList.remove("on");e(".toggle.menu").classList.remove("close")}})}e(".content").innerHTML="";var t=e(".loading").cloneNode(true);Velocity(t,"fadeIn",{duration:200});e(".content").appendChild(t)};const A=function(e){var t=e.text||e.textContent||e.innerHTML||"";var n=e.parentNode;n.removeChild(e);var i=document.createElement("script");if(e.id){i.id=e.id}if(e.className){i.className=e.className}if(e.type){i.type=e.type}if(e.src){i.src=e.src;i.async=false}if(e.dataset.pjax!==undefined){i.dataset.pjax=""}if(t!==""){i.appendChild(document.createTextNode(t))}n.appendChild(i)};const B=function(t){F("katex");T("copy_tex");F("mermaid");T("chart");if(!t){e.each("script[data-pjax]",A)}o=document.title;g();b();L();N();C();R();lozad("img").observe();lozad("[data-background-image]").observe();H.hide();var n=window.sessionStorage.getItem(window.location.href);if(n){x(n);window.sessionStorage.removeItem(window.location.href)}M();e.each(".card",function(t){["mouseenter","touchstart"].forEach(function(n){t.addEventListener(n,function(n){if(e(".card.active")){e(".card.active").classList.remove("active")}t.classList.add("active")})});["mouseleave"].forEach(function(e){t.addEventListener(e,function(e){t.classList.remove("active")})})})};const Y=function(){document.body.oncopy=V;var t=new Pjax({selectors:["head title",".languages",".pjax","script[data-config]"],analytics:false,cacheBust:false});quicklink.listen(CONFIG.quicklink);document.addEventListener("visibilitychange",function(){switch(document.visibilityState){case"hidden":e('[rel="icon"]').attr("href",n+CONFIG.favicon.hidden);document.title=CONFIG.favicon.hide;H.show();clearTimeout(s);break;case"visible":e('[rel="icon"]').attr("href",n+CONFIG.favicon.normal);document.title=CONFIG.favicon.show;H.hide(1e3);s=setTimeout(function(){document.title=o},2e3);break}});e(".toggle.menu").addEventListener("click",w);e(".dimmer").addEventListener("click",w);e(".quick .up").addEventListener("click",E);e(".quick .down").addEventListener("click",k);e(".loading").addEventListener("click",H.vanish);window.addEventListener("scroll",y);h.addEventListener("click",E);window.addEventListener("resize",g);window.addEventListener("pjax:send",j);window.addEventListener("pjax:success",B);window.addEventListener("beforeunload",function(){q(window.location.href)});G(t);B(1)};window.addEventListener("DOMContentLoaded",Y);