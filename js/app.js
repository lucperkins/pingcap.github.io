!function(e){function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/js/",n(n.s=3)}([,,,function(e,n,t){e.exports=t(4)},function(e,n,t){"use strict";function a(e){var n=$("header").height();e&&$(e).offset()&&$("html, body").animate({scrollTop:$(e).offset().top-n-20},1e3)}function o(){var e=decodeURIComponent(location.hash);e&&($(".nav-tags").length&&"list"===$(".nav-tags").data("type")||location.href.search("#access_token")<0&&a(e))}function r(){docsearch({apiKey:"ad5e63b76a221558bdc65ab1abbec7a2",indexName:"pingcap",inputSelector:"#search-input",debug:!0,transformData:function(e){function n(e){return/\/.*-cn\//gi.exec(e)}function t(e){var n=/404/gi;return e&&e.lvl1&&n.exec(e.lvl1)}return e.filter(function(e){return"en"===$("#search-input").data("lang")?!n(e.url)&&!t(e.hierarchy):n(e.url)&&!t(e.hierarchy)})}})}function c(){r(),$("#search-input").focusout(function(){$(".ds-dropdown-menu").hide()}),$("#search-input").focus(function(e){e.preventDefault(),e.target&&e.target.value&&$(".ds-dropdown-menu").show()})}function i(){var e=$(".release-banner").data("release");if("undefined"!=typeof Storage){localStorage.getItem("release-version-"+e)||$(".homepage").addClass("banner-active")}else $(".homepage").addClass("banner-active");$(".release-banner__close").click(function(e){if($("body.banner-active")&&$("body").removeClass("banner-active"),"undefined"!=typeof Storage){var n=$(".release-banner").data("release");localStorage.setItem("release-version-"+n,n)}e.preventDefault()})}function l(){$("#wechat").click(function(e){e.preventDefault(),$("#wechat .qr_code_outer").toggleClass("f-hide")}),$("#wechat-mobile").on("touchstart",function(e){e.preventDefault(),$("#wechat-mobile .qr_code_outer").toggleClass("f-hide")})}function s(){var e=$(this).scrollTop(),n=$("header").height();$("body.banner-active")&&e>=n&&$("body.banner-active").addClass("banner-active--scrolled"),$("body.banner-active--scrolled")&&e<n&&$("body").removeClass("banner-active--scrolled"),e>200?$(".back-to-top").addClass("show"):$(".back-to-top").removeClass("show")}function u(){$(".nav-btn.nav-slider").click(function(){$(".overlay").show(),$("nav").toggleClass("open")}),$(".overlay").click(function(){$("nav").hasClass("open")&&$("nav").removeClass("open"),$(this).hide()})}console.log("🦊 Hello! @PingCAP website"),$(document).ready(function(){o(),$(window).on("hashchange",o),$(window).scroll(s),$(".homepage").length&&i(),c(),l(),u(),$(".back-to-top").click(function(){return $("html, body").animate({scrollTop:0},800),!1})})}]);