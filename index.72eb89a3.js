!function(){console.log(document.cookie);var e=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting?e.target.classList.add("element-show"):e.target.classList.remove("element-show")}))}),{threshold:[.5]}),t=document.querySelectorAll(".element-animation"),n=!0,o=!1,c=void 0;try{for(var r,l=t[Symbol.iterator]();!(n=(r=l.next()).done);n=!0){var a=r.value;e.observe(a)}}catch(e){o=!0,c=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw c}}!function(){var e={openMenuBtn:document.querySelector(".menu-open__btn"),closeMenuBtn:document.querySelector(".menu-close-btn"),menu:document.querySelector(".burger-menu"),body:document.querySelector("body"),closeMenuLink:document.querySelector("[data-nav-link]"),closeMenuLinkAbout:document.querySelector("[data-nav-link-M]"),closeMenuLinkHome:document.querySelector("[data-nav-link-H]"),closeMenuLinkProduct:document.querySelector("[data-nav-link-P]"),closeMenuLinkContact:document.querySelector("[data-nav-link-C]")};function t(){e.menu.classList.toggle("is-none"),e.menu.classList.toggle("menu-scroll"),e.body.classList.toggle("no-scroll")}e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t),e.closeMenuLink.addEventListener("click",t),e.closeMenuLinkAbout.addEventListener("click",t),e.closeMenuLinkHome.addEventListener("click",t),e.closeMenuLinkProduct.addEventListener("click",t),e.closeMenuLinkContact.addEventListener("click",t)}(),window.onscroll=function(){0!==(window.pageYOffset||document.documentElement.scrollTop)?(document.querySelector(".header-scroll").style.background="rgba(255, 184, 202, 0.7)",document.querySelector(".header").style.backdropFilter="blur(6px)"):(document.querySelector(".header-scroll").style.background="transparent",document.querySelector(".header").style.backdropFilter="none")};var s,u=document.querySelectorAll('a[href*="#"]'),i=!0,d=!1,m=void 0;try{for(var v,y=function(e,t){var n=t.value;n.addEventListener("click",(function(e){e.preventDefault();var t=n.getAttribute("href").substr(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}))},f=u[Symbol.iterator]();!(i=(v=f.next()).done);i=!0)y(0,v)}catch(e){d=!0,m=e}finally{try{i||null==f.return||f.return()}finally{if(d)throw m}}"function"!=typeof(s=window.Element.prototype).matches&&(s.matches=s.msMatchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||function(e){for(var t=this,n=(t.document||t.ownerDocument).querySelectorAll(e),o=0;n[o]&&n[o]!==t;)++o;return Boolean(n[o])}),"function"!=typeof s.closest&&(s.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),n=document.querySelector(".body"),o=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var o=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+o+'"]').classList.add("active"),t.classList.add("active"),n.classList.add("no-scroll")}))})),o.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active"),n.classList.remove("no-scroll")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))})),document.addEventListener("DOMContentLoaded",(function(){$(".slider").slick({arrows:!1,dots:!0})}))}();
//# sourceMappingURL=index.72eb89a3.js.map
