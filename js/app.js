var e={hostname:"shoka.lostyu.me",root:"/",statics:"//cdn.jsdelivr.net/gh/amehime/shoka@latest/",favicon:{normal:"images/favicon.ico",hidden:"images/failure.ico"},js:{valine:"js/valine.js",chart:"npm/frappe-charts@1.5.0/dist/frappe-charts.min.iife.min.js",copy_tex:"npm/katex@0/dist/contrib/copy-tex.min.js",mediumzoom:"npm/medium-zoom@1.0.5/dist/medium-zoom.min.js"},css:{valine:"css/comment.css",katex:"npm/katex@0/dist/katex.min.css",mermaid:"css/mermaid.css"},search:{appID:"8AVSL3TE18",apiKey:"439b6e54d1a5364824e689b5ca5a55db",indexName:"shoka",hits:{per_page:10}},quicklink:{timeout:3e3,priority:true},audio:["563563649 || 花の戦士 - 樱花大战~炽热之血","430208037 || 偽りの空の先にあるもの - KOKIA"]};Object.assign(HTMLElement.prototype,{wrap:function(e){this.parentNode.insertBefore(e,this);this.parentNode.removeChild(this);e.appendChild(this)},height:function(e){if(e){this.style.height=typeof e=="number"?e+"px":e}return this.getBoundingClientRect().height},width:function(e){if(e){this.style.width=typeof e=="number"?e+"px":e}return this.getBoundingClientRect().width},top:function(){return this.getBoundingClientRect().top},left:function(){return this.getBoundingClientRect().left},attr:function(e,t){if(t){return this.setAttribute(e,t)}else{return this.getAttribute(e)}},insertAfter:function(e){var t=this.parentNode;if(t.lastChild==this){t.appendChild(e)}else{t.insertBefore(e,this.nextSibling)}},display:function(e){this.style.display=e}});const t=function(e){if(e.indexOf("#")===0){return document.getElementById(e.replace("#",""))}return document.querySelector(e)};t.all=function(e){return document.querySelectorAll(e)};t.each=function(e,n){return t.all(e).forEach(n)};const n=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var i=e.statics.indexOf("//")>0?e.statics:e.root;var a={x:"undefined",y:"undefined"};var s=0;var o,r;const c=document.getElementsByTagName("body")[0];const l=t("body > .container");const d=t(".container > header nav");const u=d.height();const f=t(".container > header");const p=f.height();const m=p-u;const h=t(".back-to-top");const v=t(".chat");const g=t(".container > header .brand .meta");const y=t(".container > header .tool");const L=t(".container > header .tool .player");const w=t("main .sidebar");const b=function(){return t("main > .inner").offsetHeight};const x=function(e){var n=b();if(n>document.body.offsetHeight){t(".sidebar .quick").display("flex");t(".sidebar .panels").height("100vh")}else{t(".sidebar .quick").display("none")}t.each("pre.code span.marked",function(e){e.style.width=null;setTimeout(function(){e.style.width=e.parentNode.scrollWidth-1+"px"},300)})};const k=function(e){var n=window.innerHeight;var i=b();var o=i>n?i-n:document.body.scrollHeight-n;var r=window.pageYOffset>m;var c=window.pageYOffset>0;if(r){t('meta[name="theme-color"]').setAttribute("content","#FFF")}else{t('meta[name="theme-color"]').setAttribute("content","#222")}d.classList.toggle("show",r);g.classList.toggle("affix",c);y.classList.toggle("affix",c);w.classList.toggle("affix",r&&document.body.offsetWidth>991);if(typeof a.y=="undefined"){a.y=window.pageYOffset}s=a.y-window.pageYOffset;if(s<0){d.classList.remove("up");d.classList.toggle("down",r)}else if(s>0){d.classList.remove("down");d.classList.toggle("up",r)}else{}a.y=window.pageYOffset;var l=Math.round(Math.min(100*window.pageYOffset/o,100))+"%";h.querySelector("span").innerText=l;t(".percent").style.width=l};const E=function(e){t(".toggle.menu").classList.toggle("close");var n=w.classList.contains("on")?"transition.slideRightOut":"transition.slideRightIn";Velocity(w,n,{duration:200,complete:function(){w.classList.toggle("on")}})};const C=function(){t.each(".menu .item",function(t){var n=t.querySelector("a[href]");if(!n)return;var i=n.pathname===location.pathname||n.pathname===location.pathname.replace("index.html","");var a=!e.root.startsWith(n.pathname)&&location.pathname.startsWith(n.pathname);t.classList.toggle("active",n.hostname===location.hostname&&(i||a))})};const T=function(){var e=t(".sidebar .inner");var n=t.all(".sidebar .panel");if(t(".sidebar ul.tab")){e.removeChild(t(".sidebar ul.tab"))}var i=document.createElement("ul"),a="active";i.className="tab";["contents","related","overview"].forEach(function(e){var n=t(".sidebar .panel."+e);if(n.innerHTML.replace(/(^\s*)|(\s*$)/g,"").length<1){return}var s=document.createElement("li");var o=document.createElement("span");var r=document.createTextNode(n.attr("data-title"));o.appendChild(r);s.appendChild(o);s.classList.add(e);if(a){n.classList.add(a);s.classList.add(a)}else{n.classList.remove("active")}s.addEventListener("click",function(e){var n=event.currentTarget;if(n.classList.contains("active"))return;t.each(".sidebar .tab li",function(e){e.classList.remove("active")});t.each(".sidebar .panel",function(e){e.classList.remove("active")});t(".sidebar .panel."+n.className).classList.add("active");Velocity(t(".sidebar .panels > .inner"),"finish");Velocity(t(".sidebar .panels > .inner"),"transition.slideUpBigIn");n.classList.add("active")});i.appendChild(s);a=""});if(i.childNodes.length>1){e.insertBefore(i,e.childNodes[0]);t(".sidebar .panels").style.paddingTop=""}else{t(".sidebar .panels").style.paddingTop="10px"}};const O=function(){var e=t.all(".contents li");if(e.length<1){return}var n=Array.prototype.slice.call(e)||[];var i=null;n=n.map(function(e,n){var a=e.querySelector("a.toc-link");var s=t(decodeURI(a.attr("href")));var r=s.querySelector("a.anchor");var c=function(e){e.preventDefault();var a=t(decodeURI(e.currentTarget.attr("href")));i=n;A(window.pageYOffset+a.top()-a.height()-m-u,function(){o(n);i=null})};a.addEventListener("click",c);r&&r.addEventListener("click",c);return s});var a=t(".sidebar .panels .inner");var o=function(i,s){var o=e[i];if(!o)return;if(o.classList.contains("current")){return}t.each(".toc .active",function(e){e.classList.remove("active","current")});n.forEach(function(e){e.classList.remove("active")});o.classList.add("active","current");n[i].classList.add("active");var r=o.parentNode;while(!r.matches(".contents")){if(r.matches("li")){r.classList.add("active");var c=t(r.querySelector("a.toc-link").attr("href"));if(c){c.classList.add("active")}}r=r.parentNode}Velocity(o,"scroll",{container:a,offset:-(a.offsetHeight/2)})};var r=function(e){var t=0;var i=e[t];if(i.boundingClientRect.top>0){t=n.indexOf(i.target);return t===0?0:t-1}for(;t<e.length;t++){if(e[t].boundingClientRect.top<=0){i=e[t]}else{return n.indexOf(i.target)}}return n.indexOf(i.target)};var c=function(){var e=new IntersectionObserver(function(e,t){var n=r(e)+(s<0?1:0);if(i===null){o(n)}},{rootMargin:"0px 0px -100% 0px",threshold:0});n.forEach(function(t){t&&e.observe(t)})};c()};const N=function(){t.each(".post .body img",function(e){var t;if(t=e.attr("title")){var n=document.createElement("span");var i=document.createTextNode(t);n.appendChild(i);n.classList.add("image-info");e.insertAfter(n)}});if(t(".post .body :not(a) > img, .post .body > img")){LOCAL["mediumzoom"]=true;H("mediumzoom",function(){window.mediumZoom(".post .body :not(a) > img, .post .body > img",{background:"rgba(0, 0, 0, 0.6)"})},window.mediumZoom)}t.each("li ruby",function(e){var t=e.parentNode;if(e.parentNode.tagName!="LI"){t=e.parentNode.parentNode}t.classList.add("ruby")});t.each("figure.highlight",function(e){const t=e.querySelector("figcaption");var n=e.querySelector(".code-container");if(t){t.insertAdjacentHTML("afterBegin",'<div class="carbon"><div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div></div>')}if(n&&n.height()>300){n.style.maxHeight="300px";n.insertAdjacentHTML("beforeend",'<div class="show-btn"><i class="ic i-angle-down up-down"></i></div>');var i=n.querySelector(".show-btn");var a=i.querySelector("i");i.addEventListener("click",function(e){if(i.classList.contains("open")){n.style.maxHeight="300px";i.classList.remove("open");a.classList.add("i-angle-down");a.classList.remove("i-angle-up");Velocity(n.parentNode,"scroll")}else{n.style.maxHeight="";i.classList.add("open");a.classList.remove("i-angle-down");a.classList.add("i-angle-up")}})}e.insertAdjacentHTML("beforeend",'<div class="copy-btn"><i class="ic i-clipboard fa-fw"></i></div>');var s=e.querySelector(".copy-btn");s.addEventListener("click",function(e){var t=e.currentTarget;var n=t.parentNode.querySelector("pre.code").innerText;var i=document.createElement("textarea");i.style.top=window.scrollY+"px";i.style.position="absolute";i.style.opacity="0";i.readOnly=true;i.value=n;document.body.append(i);const a=document.getSelection();const s=a.rangeCount>0?a.getRangeAt(0):false;i.select();i.setSelectionRange(0,n.length);i.readOnly=false;var o=document.execCommand("copy");t.querySelector("i").className=o?"ic i-check":"ic i-times";i.blur();t.blur();if(s){a.removeAllRanges();a.addRange(s)}document.body.removeChild(i)});s.addEventListener("mouseleave",function(e){setTimeout(function(){e.target.querySelector("i").className="ic i-clipboard"},300)})});t.each("table",function(e){const t=document.createElement("div");t.className="table-container";e.wrap(t)});t.each("pre.mermaid > svg",function(e){e.style.maxWidth=""});t.each(".reward button",function(e){e.addEventListener("click",function(e){e.preventDefault();var n=t("#qr");if(n.style.display==="inline-flex"){Velocity(n,"fadeOut")}else{Velocity(n,"transition.slideUpBigIn",{display:"inline-flex"})}})});t.each(".quiz > ul.options li",function(e){e.addEventListener("click",function(t){if(e.classList.contains("correct")){e.classList.toggle("right");e.parentNode.parentNode.classList.add("show")}else{e.classList.toggle("wrong")}})});t.each(".quiz > p",function(e){e.addEventListener("click",function(t){e.parentNode.classList.toggle("show")})});R()};const A=function(e,n){Velocity(t("main .content"),"scroll",{duration:500,offset:e,complete:n||function(){}})};const S=function(){A(-p)};const I=function(){A(b()+t(".container > footer").offsetHeight)};const q=function(){A(window.pageYOffset+t("#comments").top()-u)};const M=function(e,t,n){if(n){t()}else{var i=document.createElement("script");i.onload=i.onreadystatechange=function(e,n){if(n||!i.readyState||/loaded|complete/.test(i.readyState)){i.onload=i.onreadystatechange=null;i=undefined;if(!n&&t)setTimeout(t,0)}};i.src=e;document.head.appendChild(i)}};const j=function(t,n){return(e[t][n].indexOf("npm")>-1?"//cdn.jsdelivr.net/":i)+e[t][n]};const H=function(e,t,n){if(LOCAL[e]){M(j("js",e),t||function(){window[e]=true},n||window[e])}};const V=function(e,t){if(window["css"+e])return;if(LOCAL[e]){var n=document.createElement("link");n.setAttribute("rel","stylesheet");n.href=j("css",e);document.head.appendChild(n);window["css"+e]=true}};const R=function(){var e=t("#comments");if(!e){v.display("none");return}else{v.display("")}var n=new IntersectionObserver(function(n,i){H("valine",function(){var a=n[0];V("valine");if(a.isIntersecting){var s={appId:"GfnpjP6kVt5Hwl5FDnWDCEX3-gzGzoHsz",appKey:"5VPzAxojlyJTTif1RMYNBBQy",placeholder:"ヽ(○´∀`)ﾉ♪",avatar:"mp",pageSize:10,lang:"zh-CN",visitor:true,recordIP:true,serverURLs:null,requiredFields:["nick","mail"],enableQQ:true,masters:["ameosly@gmail.com"],masterTag:"主人",tips:"昵称框中填入QQ号，将自动获取QQ昵称&邮箱&头像；其他邮箱由Gavatar提供头像。"};s.el="#comments";s.path=e.attr("data-id");new Valine(s);Velocity(t("#comments"),"transition.bounceUpIn");i.disconnect()}},window.Valine)});n.observe(e)};const z=function(e){window.sessionStorage.setItem(e,a.y-m-u)};const B=function(n){if(e.search===null)return;var i=instantsearch({indexName:e.search.indexName,searchClient:algoliasearch(e.search.appID,e.search.apiKey),searchFunction:function(e){var n=t(".search-input");if(n.value){e.search()}}});i.on("render",function(){n.refresh(t("#search-hits"))});i.addWidgets([instantsearch.widgets.configure({hitsPerPage:e.search.hits.per_page||10}),instantsearch.widgets.searchBox({container:".search-input-container",placeholder:LOCAL.search.placeholder,showReset:false,showSubmit:false,showLoadingIndicator:false,cssClasses:{input:"search-input"}}),instantsearch.widgets.stats({container:"#search-stats",templates:{text:function(e){var t=LOCAL.search.stats.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS);return t+'<span class="algolia-powered"></span><hr>'}}}),instantsearch.widgets.hits({container:"#search-hits",templates:{item:function(t){var n=t.categories.join('<i class="ic i-angle-right"></i>');return'<a href="'+e.root+t.path+'"><span>'+n+"</span>"+t._highlightResult.title.value+"</a>"},empty:function(e){return'<div id="hits-empty">'+LOCAL.search.empty.replace(/\$\{query}/,e.query)+"</div>"}},cssClasses:{item:"item"}}),instantsearch.widgets.pagination({container:"#search-pagination",scrollTo:false,showFirst:false,showLast:false,templates:{first:'<i class="ic i-angle-double-left"></i>',last:'<i class="ic i-angle-double-right"></i>',previous:'<i class="ic i-angle-left"></i>',next:'<i class="ic i-angle-right"></i>'},cssClasses:{root:"pagination",item:"pagination-item",link:"page-number",selectedItem:"current",disabledItem:"disabled-item"}})]);i.start();t.each(".search-btn",function(e){e.addEventListener("click",function(){document.body.style.overflow="hidden";Velocity(t(".search"),"transition.shrinkIn",{duration:200,complete:function(){t(".search-input").focus()}})})});const a=function(){document.body.style.overflow="";Velocity(t(".search"),"transition.shrinkOut")};t(".search").addEventListener("click",function(e){if(e.target===t(".search")){a()}});t(".close-btn").addEventListener("click",a);window.addEventListener("pjax:success",a);window.addEventListener("keyup",function(e){if(e.key==="Escape"){a()}})};const P={timer:null,lock:false,show:function(){clearTimeout(this.timer);document.body.classList.remove("loaded");Velocity(t(".loading"),"fadeIn",{display:"flex",complete:function(){P.lock=false}})},hide:function(e){this.timer=setTimeout(this.vanish,e||3e3)},vanish:function(){if(P.lock)return;Velocity(t(".loading"),"fadeOut");Y();P.lock=true}};const Y=function(){document.body.classList.add("loaded");var e=t("main > .inner > .content > .wrap").style.display;Velocity(t("main > .inner > .content > .wrap"),"transition.bounceUpIn",{display:e})};const U=function(e){if(!e)return;var t=document.createElement("div");t.innerHTML=e;t.classList.add("tip");c.appendChild(t);window.setTimeout(function(){c.removeChild(t)},3e3)};const D=function(){t.each("span.exturl",function(e){var t=document.createElement("a");t.href=decodeURIComponent(atob(e.dataset.url).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));t.rel="noopener external nofollow noreferrer";t.target="_blank";t.className=e.className;t.title=e.title||e.innerText;t.innerHTML=e.innerHTML;if(e.dataset.backgroundImage){t.dataset.backgroundImage=e.dataset.backgroundImage}e.parentNode.replaceChild(t,e)})};const F=function(){z(window.location.href);if(w.classList.contains("on")){Velocity(w,"transition.slideRightOut",{duration:200,complete:function(){w.classList.remove("on");t(".toggle.menu").classList.remove("close")}})}t(".content").innerHTML="";var e=t(".loading").cloneNode(true);Velocity(e,"fadeIn",{duration:200});t(".content").appendChild(e)};const Q=function(e){var t=e.text||e.textContent||e.innerHTML||"";var n=e.parentNode;n.removeChild(e);var i=document.createElement("script");if(e.id){i.id=e.id}if(e.className){i.className=e.className}if(e.type){i.type=e.type}if(e.src){i.src=e.src;i.async=false}if(e.dataset.pjax!==undefined){i.dataset.pjax=""}if(t!==""){i.appendChild(document.createTextNode(t))}n.appendChild(i)};const W=function(e){if(e){window.document.documentElement.setAttribute("data-theme",e)}else{window.document.documentElement.removeAttribute("data-theme")}};const _=function(){window.matchMedia("(prefers-color-scheme: dark)").addListener(function(e){if(e.matches){W("dark")}else{W()}});t(".theme-btn").addEventListener("click",function(e){var t=e.currentTarget.querySelector(".ic");if(t.classList.contains("i-sun")){W("dark");t.classList.remove("i-sun");t.classList.add("i-moon")}else{W();t.classList.remove("i-moon");t.classList.add("i-sun")}})};const K=function(){document.addEventListener("visibilitychange",function(){switch(document.visibilityState){case"hidden":t('[rel="icon"]').attr("href",i+e.favicon.hidden);document.title=LOCAL.favicon.hide;P.show();clearTimeout(r);break;case"visible":t('[rel="icon"]').attr("href",i+e.favicon.normal);document.title=LOCAL.favicon.show;P.hide(1e3);r=setTimeout(function(){document.title=o},2e3);break}})};const $=function(e){var t=this,n={btns:["play-pause","music"],events:{"play-pause":function(e){if(t.player.media.paused){t.player.play()}else{t.player.pause()}},music:function(e){var n="transition.slideRightIn";if(t.player.list.classList.contains("on")){n="transition.slideRightOut"}Velocity(t.player.list,"finish");Velocity(t.player.list,n,{duration:500,complete:function(){t.player.list.classList.toggle("on")}})}}};t.player={id:Math.floor(Math.random()*1e5),index:-1,media:null,buttons:{},utils:{random:function(e){return Math.floor(Math.random()*e)},list:function(e){return e.map(function(e){var e=e.split("||");var t=e[0].trim();return{url:t.indexOf("//")>0?t:"http://music.163.com/song/media/outer/url?id="+t+".mp3",title:e[1].trim()}})}},getSource:function(e){var n=this.options.mediaList.length;var i=function(e){if(e+1==n){e=-1}t.player.index=++e};switch(e){case"random":var a=this.utils.random(n);if(this.index!==a){this.index=a}else{i(this.index)}break;case"next":i(this.index);break}return this.options.mediaList[this.index]},refresh:function(e){if(e){e=this.utils.list(e);if(this.options.mediaList!==e){this.options.mediaList=e;this.set("random");this.setPlayList()}}},set:function(e){var t=this.getSource(e);var n=false;if(!this.media.paused){n=true;this.stop()}this.media.attr("src",t.url);this.media.attr("title",t.title);if(n==true){this.play()}},setPlayList:function(){t.player.list.innerHTML="";this.options.mediaList.forEach(function(e,n){var i=document.createElement("li");i.innerHTML=e.title;i.addEventListener("click",function(e){var i=t.player.options.mediaList[t.player.index];if(t.player.index==n&&i.progress){t.player.media.currentTime=t.player.media.duration*Math.floor(e.clientX-i.element.left())/i.element.width();return}t.player.setCurrent(n);t.player.play()});t.player.options.mediaList[n].element=i;t.player.list.appendChild(i)});t.player.setCurrent(t.player.index)},setCurrent:function(e){if(e!=this.index){var t=this.options.mediaList[this.index];t.element&&t.element.classList.remove("current");t.progress&&t.element.removeChild(t.progress);if(e){this.index=e;this.set()}else{this.set("next")}}var n=this.options.mediaList[this.index];n.element.classList.add("current");var i=document.createElement("div");n.element.appendChild(i);n.progress=i;this.options.mediaList[this.index]=n},pause:function(){this.media.pause()},play:function(){this.media.play()},stop:function(){this.media.pause();this.media.currentTime=0}};var i={button:function(e){if(!t.player.buttons[e]){var n=document.createElement("div");n.classList.add(e);n.addEventListener("click",t.player.options.events[e]||function(){});t.appendChild(n);t.player.buttons[e]=n}},audio:function(){if(!t.player.media){var e=document.createElement("audio");e.attr("muted",true);e.addEventListener("play",function(){t.classList.add("playing");U(t.player.media.attr("title"))});e.addEventListener("pause",function(){t.classList.remove("playing")});e.addEventListener("timeupdate",function(){var n=Math.floor(e.currentTime/e.duration*100);t.player.options.mediaList[t.player.index].progress.width(n+"%");if(n==100){t.player.setCurrent();t.player.play()}});t.appendChild(e);t.player.media=e}},list:function(){if(!t.player.list){var e=document.createElement("ul");e.id="player-"+t.player.id;e.classList.add("play-list");t.insertAfter(e);t.player.list=e}}},a=function(e){if(t.player.created)return;else t.player.created=true;t.player.options=Object.assign(n,e);t.player.options.btns.forEach(i.button);i.audio();i.list()};a()};Object.assign(HTMLElement.prototype,{initPlayer:$});const G=function(n){V("katex");H("copy_tex");V("mermaid");H("chart");if(!n){t.each("script[data-pjax]",Q)}o=document.title;x();C();T();O();N();D();L.player.refresh(LOCAL.audio||e.audio||{});lozad(t.all("img, [data-background-image]"),{loaded:function(e){e.classList.add("lozaded")}}).observe();P.hide();var i=window.sessionStorage.getItem(window.location.href);if(i){A(i);window.sessionStorage.removeItem(window.location.href)}Y();t.each(".card",function(e){["mouseenter","touchstart"].forEach(function(n){e.addEventListener(n,function(n){if(t(".card.active")){t(".card.active").classList.remove("active")}e.classList.add("active")})});["mouseleave"].forEach(function(t){e.addEventListener(t,function(t){e.classList.remove("active")})})})};const X=function(){document.body.oncopy=function(){U(LOCAL.copyright)};var n=new Pjax({selectors:["head title",".languages",".pjax","script[data-config]"],analytics:false,cacheBust:false});e.quicklink.ignores=LOCAL.ignores;quicklink.listen(e.quicklink);K();_();t(".toggle.menu").addEventListener("click",E);t(".dimmer").addEventListener("click",E);t(".quick .down").addEventListener("click",I);t(".quick .up").addEventListener("click",S);h.addEventListener("click",S);t(".loading").addEventListener("click",P.vanish);window.addEventListener("scroll",k);v.addEventListener("click",q);L.initPlayer();window.addEventListener("resize",x);window.addEventListener("pjax:send",F);window.addEventListener("pjax:success",G);window.addEventListener("beforeunload",function(){z(window.location.href)});B(n);G(1)};window.addEventListener("DOMContentLoaded",X);