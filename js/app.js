Object.assign(HTMLElement.prototype,{wrap:function(e){this.parentNode.insertBefore(e,this);this.parentNode.removeChild(this);e.appendChild(this)},height:function(){return this.getBoundingClientRect().height},top:function(){return this.getBoundingClientRect().top},attr:function(e,t){if(t){return this.setAttribute(e,t)}else{return this.getAttribute(e)}}});const e=function(e){if(e.indexOf("#")>0){return document.getElementById(e.replace("#",""))}return document.querySelector(e)};e.all=function(e){return document.querySelectorAll(e)};e.each=function(t,n){return e.all(t).forEach(n)};const t=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var n={x:"undefined",y:"undefined"};var i=0;var a,s;const o=e("body > .container");const c=e(".container > header nav");const r=c.height();const l=e(".container > header");const d=l.height();const u=d-r;const f=e(".back-to-top");const h=function(){return e("main > .inner > .content").offsetHeight};const v=function(t){var n=h();if(n>document.body.offsetHeight){e(".sidebar .quick").style.display="flex";e(".sidebar .panels").style.height=document.body.offsetHeight+"px"}else{e(".sidebar .quick").style.display="none"}};const g=function(t){var a=window.innerHeight;var s=h();var r=s>a?s-a:document.body.scrollHeight-a;var l=o.scrollTop>u;c.classList.toggle("show",l);e("main .sidebar").classList.toggle("affix",l&&document.body.offsetWidth>991);if(typeof n.y=="undefined"){n.y=o.scrollTop}i=n.y-o.scrollTop;if(i<0){c.classList.remove("up");c.classList.toggle("down",l)}else if(i>0){c.classList.remove("down");c.classList.toggle("up",l)}else{}n.y=o.scrollTop;var d=Math.round(Math.min(100*o.scrollTop/r,100))+"%";f.querySelector("span").innerText=d;e(".quick .percent").style.width=d};const p=function(t){const n=e("main .sidebar");e(".toggle.menu").classList.toggle("close");var i=n.classList.contains("on")?"transition.slideRightOut":"transition.slideRightIn";Velocity(n,i,{duration:200,complete:function(){n.classList.toggle("on")}})};const m=function(){e.each(".menu .item",function(e){var t=e.querySelector("a[href]");if(!t)return;var n=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html","");var i=!CONFIG.root.startsWith(t.pathname)&&location.pathname.startsWith(t.pathname);e.classList.toggle("active",t.hostname===location.hostname&&(n||i))})};const w=function(){var t=e(".sidebar .inner");var n=e.all(".sidebar .panel");if(e(".sidebar ul.tab")){t.removeChild(e(".sidebar ul.tab"))}var i=document.createElement("ul"),a="active";i.className="tab";["contents","related","overview"].forEach(function(t){var n=e(".sidebar .panel."+t);if(n.innerHTML.length<1){return}var s=document.createElement("li");var o=document.createElement("span");var c=document.createTextNode(n.attr("data-title"));o.appendChild(c);s.appendChild(o);s.classList.add(t);if(a){n.classList.add(a);s.classList.add(a)}else{n.classList.remove("active")}s.addEventListener("click",function(t){var n=event.currentTarget;if(n.classList.contains("active"))return;e.each(".sidebar .tab li",function(e){e.classList.remove("active")});e.each(".sidebar .panel",function(e){e.classList.remove("active")});e(".sidebar .panel."+n.className).classList.add("active");n.classList.add("active")});i.appendChild(s);a=""});if(i.childNodes.length>1){t.insertBefore(i,t.childNodes[0]);e(".sidebar .panels").style.paddingTop="68px"}else{e(".sidebar .panels").style.paddingTop="10px"}};const y=function(){var t=e.all(".contents li");if(t.length<1){return}var n=Array.prototype.slice.call(t)||[];var a=null;n=n.map(function(t,n){var i=t.querySelector("a.toc-link");i.addEventListener("click",function(t){t.preventDefault();var i=e(t.currentTarget.attr("href"));a=n;L(o.scrollTop+i.top()-i.height()-u-r,function(){c(n);a=null})});return e(i.attr("href"))});var s=e(".contents.panel");var c=function(i,a){var o=t[i];if(!o)return;if(o.classList.contains("current")){return}e.each(".toc .active",function(e){e.classList.remove("active","current")});n.forEach(function(e){e.classList.remove("active")});o.classList.add("active","current");n[i].classList.add("active");var c=o.parentNode;while(!c.matches(".contents")){if(c.matches("li")){c.classList.add("active");var r=e(c.querySelector("a.toc-link").attr("href"));if(r){r.classList.add("active")}}c=c.parentNode}Velocity(o,"scroll",{duration:200,container:s})};var l=function(e){var t=0;var i=e[t];if(i.boundingClientRect.top>0){t=n.indexOf(i.target);return t===0?0:t-1}for(;t<e.length;t++){if(e[t].boundingClientRect.top<=0){i=e[t]}else{return n.indexOf(i.target)}}return n.indexOf(i.target)};var d=function(){var e=new IntersectionObserver(function(e,t){var n=l(e)+(i>0?0:1);if(a===null)c(n)},{root:o,threshold:0});n.forEach(function(t){t&&e.observe(t)})};d()};const b=function(){e.each("figure.highlight",function(e){const t=e.querySelector("figcaption");if(t){t.insertAdjacentHTML("afterBegin",'<div class="carbon"><div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div></div>')}e.insertAdjacentHTML("beforeend",'<div class="copy-btn"><i class="fa fa-clipboard fa-fw"></i></div>');var n=e.querySelector(".copy-btn");n.addEventListener("click",function(e){var t=e.currentTarget;var n=t.parentNode.querySelector("pre.code").innerText;var i=document.createElement("textarea");i.style.top=window.scrollY+"px";i.style.position="absolute";i.style.opacity="0";i.readOnly=true;i.value=n;document.body.append(i);const a=document.getSelection();const s=a.rangeCount>0?a.getRangeAt(0):false;i.select();i.setSelectionRange(0,n.length);i.readOnly=false;var o=document.execCommand("copy");t.querySelector("i").className=o?"fa fa-check fa-fw":"fa fa-times fa-fw";i.blur();t.blur();if(s){a.removeAllRanges();a.addRange(s)}document.body.removeChild(i)});n.addEventListener("mouseleave",function(e){setTimeout(function(){e.target.querySelector("i").className="fa fa-clipboard fa-fw"},300)})});e.each("table",function(e){const t=document.createElement("div");t.className="table-container";e.wrap(t)});e.each("pre.mermaid > svg",function(e){e.style.maxWidth=""});e.each(".reward button",function(t){t.addEventListener("click",function(t){t.preventDefault();e("#qr").classList.toggle("show")})});e.each(".options li",function(e){e.addEventListener("click",function(t){if(e.classList.contains("correct")){e.classList.toggle("right");e.parentNode.parentNode.classList.toggle("show")}else{e.classList.toggle("wrong")}})});e.each(".quiz.true, .quiz.false, .quiz.essay",function(e){e.addEventListener("click",function(t){e.classList.toggle("show")})});N()};const L=function(t,n){Velocity(e("main .content"),"scroll",{duration:500,container:o,offset:t,complete:n||function(){}})};const E=function(){L(-d)};const C=function(){L(h()+e(".container > footer").offsetHeight)};const N=function(){var t=e("#comments");if(!t){return}var n=new IntersectionObserver(function(e,n){var i=e[0];if(i.isIntersecting){var a=CONFIG.comments;a.el="#comments";a.path=t.attr("data-id");new Valine(a);n.disconnect()}});n.observe(t);return n};const x=function(){var e=t(1,4);[1,2,3,4].forEach(function(t){l.classList.toggle("bg"+t,t==e)})};const I=function(e){window.sessionStorage.setItem(e,n.y-u-r)};const k=function(t){var n=instantsearch({indexName:CONFIG.search.indexName,searchClient:algoliasearch(CONFIG.search.appID,CONFIG.search.apiKey),searchFunction:function(t){var n=e(".search-input");if(n.value){t.search()}}});n.on("render",function(){t.refresh(e("#search-hits"))});n.addWidgets([instantsearch.widgets.configure({hitsPerPage:CONFIG.search.hits.per_page||10}),instantsearch.widgets.searchBox({container:".search-input-container",placeholder:CONFIG.search.labels.input_placeholder,showReset:false,showSubmit:false,showLoadingIndicator:false,cssClasses:{input:"search-input"}}),instantsearch.widgets.stats({container:"#search-stats",templates:{text:function(e){var t=CONFIG.search.labels.hits_stats.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS);return t+'<span class="algolia-powered">'+'<img src="'+CONFIG.root+'images/algolia_logo.svg" alt="Algolia"></span><hr>'}}}),instantsearch.widgets.hits({container:"#search-hits",templates:{item:function(e){var t=e.categories.join('<i class="fa fa-angle-right"></i>');return'<a href="'+CONFIG.root+e.path+'"><span>'+t+"</span>"+e._highlightResult.title.value+"</a>"},empty:function(e){return'<div id="hits-empty">'+CONFIG.search.labels.hits_empty.replace(/\$\{query}/,e.query)+"</div>"}},cssClasses:{item:"item"}}),instantsearch.widgets.pagination({container:"#search-pagination",scrollTo:false,showFirst:false,showLast:false,templates:{first:'<i class="fa fa-angle-double-left"></i>',last:'<i class="fa fa-angle-double-right"></i>',previous:'<i class="fa fa-angle-left"></i>',next:'<i class="fa fa-angle-right"></i>'},cssClasses:{root:"pagination",item:"pagination-item",link:"page-number",selectedItem:"current",disabledItem:"disabled-item"}})]);n.start();e.each(".search-btn",function(t){t.addEventListener("click",function(){document.body.style.overflow="hidden";e(".search").classList.add("active");e(".search-input").focus()})});const i=function(){document.body.style.overflow="";e(".search").classList.remove("active")};e(".search").addEventListener("click",function(t){if(t.target===e(".search")){i()}});e(".close-btn").addEventListener("click",i);window.addEventListener("pjax:success",i);window.addEventListener("keyup",function(e){if(e.key==="Escape"){i()}})};const O={timer:null,show:function(){clearTimeout(this.timer);Velocity(e(".loading"),"fadeIn",{display:"flex"})},hide:function(t){this.timer=setTimeout(function(){Velocity(e(".loading"),"fadeOut")},t||3e3)}};const T=function(){var e=window.sessionStorage.getItem(window.location.href);if(e){L(e);window.sessionStorage.removeItem(window.location.href)}a=document.title;m();w();y();b();v();O.hide()};const q=function(){var t=new Pjax({selectors:["head title",".languages",".pjax"],analytics:false,cacheBust:false});document.addEventListener("visibilitychange",function(){switch(document.visibilityState){case"hidden":e('[rel="icon"]').attr("href",CONFIG.favicon.hidden);document.title=CONFIG.favicon.hide;O.show();clearTimeout(s);break;case"visible":e('[rel="icon"]').attr("href",CONFIG.favicon.normal);document.title=CONFIG.favicon.show;O.hide(1e3);s=setTimeout(function(){document.title=a},2e3);break}});e(".toggle.menu").addEventListener("click",p);e(".dimmer").addEventListener("click",p);e(".quick .up").addEventListener("click",E);e(".quick .down").addEventListener("click",C);setInterval(x,3e4);o.addEventListener("scroll",g);f.addEventListener("click",E);window.addEventListener("resize",v);window.addEventListener("pjax:send",function(){I(window.location.href)});window.addEventListener("pjax:success",T);window.addEventListener("beforeunload",function(){I(window.location.href)});k(t);T()};window.addEventListener("DOMContentLoaded",q);