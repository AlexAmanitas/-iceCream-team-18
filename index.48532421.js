console.log(document.cookie);let e=new IntersectionObserver((function(e){e.forEach((e=>{e.isIntersecting?e.target.classList.add("element-show"):e.target.classList.remove("element-show")}))}),{threshold:[.5]}),t=document.querySelectorAll(".element-animation");for(let o of t)e.observe(o);(()=>{const e={openMenuBtn:document.querySelector(".menu-open__btn"),closeMenuBtn:document.querySelector(".menu-close-btn"),menu:document.querySelector(".burger-menu"),body:document.querySelector("body"),closeMenuLink:document.querySelector("[data-nav-link]"),closeMenuLinkAbout:document.querySelector("[data-nav-link-M]"),closeMenuLinkHome:document.querySelector("[data-nav-link-H]"),closeMenuLinkProduct:document.querySelector("[data-nav-link-P]"),closeMenuLinkContact:document.querySelector("[data-nav-link-C]")};function t(){e.menu.classList.toggle("is-none"),e.menu.classList.toggle("menu-scroll"),e.body.classList.toggle("no-scroll")}e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t),e.closeMenuLink.addEventListener("click",t),e.closeMenuLinkAbout.addEventListener("click",t),e.closeMenuLinkHome.addEventListener("click",t),e.closeMenuLinkProduct.addEventListener("click",t),e.closeMenuLinkContact.addEventListener("click",t)})(),window.onscroll=function(){0!==(window.pageYOffset||document.documentElement.scrollTop)?(document.querySelector(".header-scroll").style.background="rgba(255, 184, 202, 0.7)",document.querySelector(".header").style.backdropFilter="blur(6px)"):(document.querySelector(".header-scroll").style.background="transparent",document.querySelector(".header").style.backdropFilter="none")};const o=document.querySelectorAll('a[href*="#"]');for(let e of o)e.addEventListener("click",(function(t){t.preventDefault();const o=e.getAttribute("href").substr(1);document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"})}));var n;"function"!=typeof(n=window.Element.prototype).matches&&(n.matches=n.msMatchesSelector||n.mozMatchesSelector||n.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof n.closest&&(n.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelector(".body"),n=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var n=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+n+'"]').classList.add("active"),t.classList.add("active"),o.classList.add("no-scroll")}))})),n.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active"),o.classList.remove("no-scroll")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))})),document.addEventListener("DOMContentLoaded",(function(){$(".slider").slick({arrows:!1,dots:!0})}));
//# sourceMappingURL=index.48532421.js.map
