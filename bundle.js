require=function e(t,r,n){function l(c,i){if(!r[c]){if(!t[c]){var h="function"==typeof require&&require;if(!i&&h)return h(c,!0);if(a)return a(c,!0);var s=new Error("Cannot find module '"+c+"'");throw s.code="MODULE_NOT_FOUND",s}var o=r[c]={exports:{}};t[c][0].call(o.exports,function(e){var r=t[c][1][e];return l(r?r:e)},o,o.exports,e,t,r,n)}return r[c].exports}for(var a="function"==typeof require&&require,c=0;c<n.length;c++)l(n[c]);return l}({"./src/index.js":[function(e,t){var r=e("react"),n=e("./Header"),l=r.createClass({displayName:"Index",render:function(){return r.createElement("div",null,r.createElement(n,null),r.createElement("div",{className:"spacer"}))}});t.exports=l},{"./Header":1,react:void 0}],1:[function(e,t){function r(e){return{transform:e,WebkitTransform:e}}function n(){return!("object"==typeof window&&!window.isMobile)}function l(e,t){if(n())return{};if(0>e)return r("translate3d(0,"+-e+"px,0)");var l=Math.min(1,e/t),a=Math.max(0,Math.min(1,1.4*e/t-.2)),c=(1+Math.cos(Math.PI*a))/2,i=100*((1-Math.cos(2*Math.PI*a))/2),h=Math.min(t,e)-(1-l)*e*Math.sin(2*Math.PI*l)-e;return r("translate3d(0,"+h+"px,"+i+"px)rotateZ("+(-.25+.25*c)+"turn)rotateX("+(.5-.5*c)+"turn)translateZ(3px)")}function a(e,t){if(n())return{};var l=Math.min(1,e/t),a=Math.max(0,Math.min(1,1.4*e/t-.2)),c=(1+Math.cos(Math.PI*a))/2,i=100*((1-Math.cos(2*Math.PI*a))/2),h=Math.min(t,e)-(1-l)*e*Math.sin(2*Math.PI*l)-e;return r("translate3d(0,"+h+"px,"+i+"px)rotateZ("+(-.25+.25*c)+"turn)rotateX("+(1-.5*c)+"turn)rotateZ(90deg)")}function c(e,t){if(n())return{};var l=Math.min(1,e/t),a=Math.max(0,Math.min(1,1.4*e/t-.2)),c=(1+Math.cos(Math.PI*a))/2,i=100*((1-Math.cos(2*Math.PI*a))/2),h=Math.min(t,e)-(1-l)*e*Math.sin(2*Math.PI*l)-e;return r("translate3d(0,"+h+"px,0)translate3d(0,0,"+i+"px)rotateZ("+(-.25+.25*c)+"turn)rotateX("+(1-.5*c)+"turn)translateY(-50%)rotateX(0.25turn)")}function i(e){var t=e||1;return function(e,r){return t=279470273*t%4294967291,r+(e-r)*(t/4294967295)}}function h(e,t){0>e&&(e=0);var n=e*t(-12,12),l=Math.max(0,1+e*t(-.05,-.01));return r("translateX("+(n-535)+"px) scaleX("+l+") translateX(535px)")}function s(e,t){0>e&&(e=0);var n=e*t(-6,6),l=Math.max(0,1+e*t(-.05,-.01));return r("translateY("+n+"px) scaleY("+l+")")}function o(e,t){0>e&&(e=0);var n=e*t(-5,5),l=Math.max(0,1+e*t(-.05,-.01));return r("rotate(-30deg) translateY("+n+"px) scaleY("+l+") rotate(30deg)")}function y(e){0>e&&(e=0);var t=-12*e;return r("translateX("+t+"px)")}function m(e){0>e&&(e=0);var t=7*e;return r("translateX("+t+"px)")}function d(e){0>e&&(e=0);var t=-7,n=e*t*M,l=e*t*v;return r("translate("+n+"px,"+l+"px)")}function E(e){0>e&&(e=0);var t=6,n=e*t*M,l=e*t*v;return r("translate("+n+"px,"+l+"px)")}function g(e){0>e&&(e=0);var t=.4*e,n=1+.01*e;return r("scale("+n+") translateX("+t+"px) rotateX("+.3*e+"deg)")}function u(e,t){0>e&&(e=0);var n=-3*e,l=1+.01*e;return r("rotate("+.1*t*e+"deg) scale("+l+") translateX("+n+"px)")}function x(e,t){0>e&&(e=0);var n=e*t*.3,l=.15*e;return r("scale("+(1+.003*e)+") translateX("+-2*e*t+"px) translateY("+-n+"px) rotate("+l+"deg) translateY("+n+"px)")}var p=e("react"),w=p.createClass({displayName:"Header",getInitialState:function(){return{scroll:"object"==typeof window&&window.scrollY||0,height:"object"==typeof document&&document.documentElement.clientHeight||800}},componentDidMount:function(){document.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleScroll)},componentWillUnmount:function(){document.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleScroll)},handleScroll:function(){if(!this._running){var e=window.scrollY,t=2*document.documentElement.clientHeight;t>e&&(this._running=!0,window.requestAnimationFrame(function(){this._running=!1;var e=window.scrollY,t=document.documentElement.clientHeight;this.setState({scroll:e,height:t})}.bind(this)))}},render:function(){var e=this.state.scroll,t=e-(n()?10:50),r=this.state.height,w=i(1234567890);return p.createElement("div",{className:"card"},p.createElement("div",{className:"cardFront",style:l(e,r,w)},p.createElement("svg",{className:"logo",version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1124 142"},p.createElement("g",{transform:"translate(562, 71)"},p.createElement("g",{fill:"#FF744C"},p.createElement("rect",{opacity:"0.70",style:y(t-30),x:"-562",y:"37",width:"94",height:"32"}),p.createElement("polygon",{opacity:"0.70",style:u(t-90,-1),points:"-221,-69 -311.4,-69 -311.2,-68.4 -312,-68.4 -312,69 -278,69 -278,-37 -221,-37"}),p.createElement("path",{opacity:"0.70",style:x(t-120,1),d:"M-74.6,-14h-28.7V-69H-135l0,138h60.4c22.8,0,41.3-18.8,41.3-41.7C-33.3,4.5,-51.8,-14,-74.6,-14z"}),p.createElement("path",{opacity:"0.70",style:m(t-180),d:"M202.1,12c22.2,0,40.3-18.3,40.3-40.5c0-22.2-18-40.5-40.3-40.5H137v81H202.1z"}),p.createElement("circle",{opacity:"0.70",style:g(t-210),cx:"339.7",cy:"0",r:"71"})),p.createElement("g",{fill:"#6DA9B6"},p.createElement("polygon",{opacity:"0.70",style:u(t-60,1),points:"-412,37 -412,-69 -446,-69 -446,69 -352,69 -352,37"}),p.createElement("polygon",{opacity:"0.70",style:x(t-150,-1),points:"71,-69 28,11 28,69 64,69 64,11 107,-69"}),p.createElement("polygon",{opacity:"0.70",style:E(t-190),points:"241.6,69 203.3,69 172.7,18.4 211,18.4"}),p.createElement("polygon",{opacity:"0.70",style:d(t-240),points:"561.6,69 522.3,69 436.7,-69 475.9,-69"})),p.createElement("g",{opacity:"0.55",fill:"#262628"},p.createElement("rect",{style:s(t-15,w),x:"-562",y:"-69",width:"2.5",height:"138"}),p.createElement("rect",{style:s(t-18,w),x:"-554.6",y:"-69",width:"2.5",height:"138"}),p.createElement("rect",{style:s(t-21,w),x:"-547.1",y:"-69",width:"2.5",height:"138"}),p.createElement("rect",{style:s(t-24,w),x:"-539.7",y:"-69",width:"2.5",height:"138"}),p.createElement("rect",{style:s(t-27,w),x:"-532.2",y:"-69",width:"2.5",height:"138"}),p.createElement("rect",{style:h(t-50,w),x:"-446",y:"-69",width:"91",height:"2.5"}),p.createElement("rect",{style:h(t-53,w),x:"-446",y:"-61.6",width:"91",height:"2.5"}),p.createElement("rect",{style:h(t-56,w),x:"-446",y:"-54.1",width:"91",height:"2.5"}),p.createElement("rect",{style:h(t-59,w),x:"-446",y:"-46.7",width:"91",height:"2.5"}),p.createElement("rect",{style:h(t-62,w),x:"-446",y:"-39.5",width:"91",height:"2.5"}),p.createElement("rect",{style:h(t-70,w),x:"-446",y:"-16.5",width:"85",height:"2.5"}),p.createElement("rect",{style:h(t-73,w),x:"-446",y:"-9.1",width:"85",height:"2.5"}),p.createElement("rect",{style:h(t-76,w),x:"-446",y:"-1.6",width:"85",height:"2.5"}),p.createElement("rect",{style:h(t-79,w),x:"-446",y:"5.8",width:"85",height:"2.5"}),p.createElement("rect",{style:h(t-82,w),x:"-446",y:"13.3",width:"85",height:"2.5"}),p.createElement("rect",{style:h(t-90,w),x:"-446",y:"37",width:"94",height:"2.5"}),p.createElement("rect",{style:h(t-93,w),x:"-446",y:"44.4",width:"94",height:"2.5"}),p.createElement("rect",{style:h(t-96,w),x:"-446",y:"51.9",width:"94",height:"2.5"}),p.createElement("rect",{style:h(t-99,w),x:"-446",y:"59.3",width:"94",height:"2.5"}),p.createElement("rect",{style:h(t-102,w),x:"-446",y:"66.5",width:"94",height:"2.5"}),p.createElement("rect",{style:h(t-132,w),x:"-312",y:"-69",width:"91",height:"2.5"}),p.createElement("rect",{style:h(t-129,w),x:"-312",y:"-61.6",width:"91",height:"2.5"}),p.createElement("rect",{style:h(t-126,w),x:"-312",y:"-54.1",width:"91",height:"2.5"}),p.createElement("rect",{style:h(t-123,w),x:"-312",y:"-46.7",width:"91",height:"2.5"}),p.createElement("rect",{style:h(t-120,w),x:"-312",y:"-39.5",width:"91",height:"2.5"}),p.createElement("rect",{style:h(t-112,w),x:"-312",y:"-16.5",width:"85",height:"2.5"}),p.createElement("rect",{style:h(t-109,w),x:"-312",y:"-9.1",width:"85",height:"2.5"}),p.createElement("rect",{style:h(t-106,w),x:"-312",y:"-1.6",width:"85",height:"2.5"}),p.createElement("rect",{style:h(t-103,w),x:"-312",y:"5.8",width:"85",height:"2.5"}),p.createElement("rect",{style:h(t-100,w),x:"-312",y:"13.3",width:"85",height:"2.5"}),p.createElement("rect",{style:h(t-92,w),x:"-312",y:"37",width:"94",height:"2.5"}),p.createElement("rect",{style:h(t-89,w),x:"-312",y:"44.4",width:"94",height:"2.5"}),p.createElement("rect",{style:h(t-86,w),x:"-312",y:"51.9",width:"94",height:"2.5"}),p.createElement("rect",{style:h(t-83,w),x:"-312",y:"59.3",width:"94",height:"2.5"}),p.createElement("rect",{style:h(t-80,w),x:"-312",y:"66.5",width:"94",height:"2.5"}),p.createElement("rect",{style:s(t-110,w),x:"-113.1",y:"-69",width:"2.5",height:"138"}),p.createElement("rect",{style:s(t-113,w),x:"-120.6",y:"-69",width:"2.5",height:"138"}),p.createElement("rect",{style:s(t-116,w),x:"-128",y:"-69",width:"2.5",height:"138"}),p.createElement("rect",{style:s(t-119,w),x:"-135",y:"-69",width:"2.5",height:"138"}),p.createElement("rect",{style:s(t-122,w),x:"-105.9",y:"-69",width:"2.7",height:"79.5"}),p.createElement("rect",{style:s(t-125,w),x:"-98.1",y:"-69",width:"2.7",height:"79.5"}),p.createElement("rect",{style:s(t-128,w),x:"-90.3",y:"-69",width:"2.7",height:"79.5"}),p.createElement("path",{style:s(t-131,w),d:"M-80.9,-69h-1.6v79.5l1.6,0c0.4,0,0.7,0,1.1,0V-68.9C-80.1,-69,-80.4,-69,-80.9,-69z"}),p.createElement("path",{style:s(t-134,w),d:"M-74.7,-68.4V10c0.9-0.1,1.8-0.3,2.7-0.5V-67.9C-73,-68.1,-73.8,-68.3,-74.7,-68.4z"}),p.createElement("path",{style:s(t-137,w),d:"M-67,-66.4V8c0.9-0.3,1.8-0.7,2.7-1.1V-65.2C-65.2,-65.6,-66.1,-66,-67,-66.4z"}),p.createElement("path",{style:s(t-140,w),d:"M-59.2,-62.4V4c0.9-0.6,1.8-1.2,2.7-1.9V-60.5C-57.4,-61.2,-58.3,-61.8,-59.2,-62.4z"}),p.createElement("path",{style:s(t-143,w),d:"M-51.4,-55.7v53.1c0.9-1,1.8-2.1,2.7-3.3V-52.4C-49.6,-53.6,-50.5,-54.7,-51.4,-55.7z"}),p.createElement("path",{style:s(t-147,w),d:"M-43.6,-42.8c1.6,4.3,2.4,8.8,2.4,13.6c0,4.8-0.8,9.4-2.4,13.6"}),p.createElement("polygon",{style:o(t-140,w),points:"31,11 -16.9,-69 -19.9,-69 28,11"}),p.createElement("polygon",{style:o(t-144,w),points:"39.2,11 -8.7,-69 -11.7,-69 36.2,11"}),p.createElement("polygon",{style:o(t-148,w),points:"47.5,11 -0.4,-69 -3.4,-69 44.5,11"}),p.createElement("polygon",{style:o(t-152,w),points:"55.8,11 7.9,-69 4.9,-69 52.8,11"}),p.createElement("polygon",{style:o(t-156,w),points:"64,11 16.1,-69 13.1,-69 61,11"}),p.createElement("rect",{style:s(t-183,w),x:"137",y:"-69",width:"2.5",height:"138"}),p.createElement("rect",{style:s(t-187,w),x:"144.4",y:"-69",width:"2.5",height:"138"}),p.createElement("rect",{style:s(t-191,w),x:"151.9",y:"-69",width:"2.5",height:"138"}),p.createElement("rect",{style:s(t-195,w),x:"159.3",y:"-69",width:"2.5",height:"138"}),p.createElement("rect",{style:s(t-199,w),x:"166.8",y:"-69",width:"2.5",height:"138"}),p.createElement("path",{style:s(t-200,w),d:"M273.6,-26v52c0.8,1.9,1.6,3.8,2.5,5.6V-31.6C275.2,-29.8,274.4,-27.9,273.6,-26z"}),p.createElement("path",{style:s(t-202,w),d:"M281,-39.9v79.9c0.8,1.2,1.6,2.3,2.5,3.4V-43.4C282.6,-42.2,281.8,-41.1,281,-39.9z"}),p.createElement("path",{style:s(t-204,w),d:"M288.4,-49V49c0.8,0.9,1.6,1.7,2.5,2.5v-103C290,-50.7,289.2,-49.9,288.4,-49z"}),p.createElement("path",{style:s(t-206,w),d:"M295.7,-55.7v111.5c0.8,0.6,1.7,1.3,2.5,1.9V-57.6C297.4,-57,296.6,-56.4,295.7,-55.7z"}),p.createElement("path",{style:s(t-208,w),d:"M303.1,-60.9v121.7c0.8,0.5,1.7,1,2.5,1.4V-62.3C304.8,-61.8,303.9,-61.3,303.1,-60.9z"}),p.createElement("path",{style:s(t-210,w),d:"M311.3,-65.1v130.1c0.8,0.4,1.7,0.7,2.5,1V-66.1C312.9,-65.8,312.1,-65.4,311.3,-65.1z"}),p.createElement("path",{style:s(t-212,w),d:"M318.2,-67.7v135.4c0.8,0.3,1.7,0.5,2.5,0.7V-68.4C319.9,-68.2,319,-67.9,318.2,-67.7z"}),p.createElement("path",{style:s(t-214,w),d:"M325.6,-69.6v139.2c0.8,0.2,1.7,0.3,2.5,0.4V-70C327.2,-69.9,326.4,-69.8,325.6,-69.6z"}),p.createElement("path",{style:s(t-216,w),d:"M332.9,-70.7v141.3c0.8,0.1,1.7,0.1,2.5,0.2V-70.9C334.6,-70.8,333.8,-70.8,332.9,-70.7z"}),p.createElement("path",{style:s(t-218,w),d:"M340.3,-71v142c0.8,0,1.7,0,2.5-0.1V-70.9C342,-71,341.2,-71,340.3,-71z"}),p.createElement("path",{style:s(t-220,w),d:"M347.7,-70.5v141.1c0.8-0.1,1.7-0.2,2.5-0.3V-70.2C349.4,-70.3,348.5,-70.4,347.7,-70.5z"}),p.createElement("rect",{style:s(t-233,w),x:"436.7",y:"-69",width:"2.5",height:"138"}),p.createElement("rect",{style:s(t-236,w),x:"443.7",y:"-69",width:"2.5",height:"138"}),p.createElement("rect",{style:s(t-239,w),x:"451.1",y:"-69",width:"2.5",height:"138"}),p.createElement("rect",{style:s(t-242,w),x:"458.5",y:"-69",width:"2.5",height:"138"}),p.createElement("rect",{style:s(t-245,w),x:"466",y:"-69",width:"2.5",height:"138"}),p.createElement("rect",{style:s(t-247,w),x:"473.4",y:"-69",width:"2.5",height:"138"}),p.createElement("rect",{style:s(t-253,w),x:"522.3",y:"-69",width:"2.5",height:"138"}),p.createElement("rect",{style:s(t-256,w),x:"529.3",y:"-69",width:"2.5",height:"138"}),p.createElement("rect",{style:s(t-259,w),x:"536.8",y:"-69",width:"2.5",height:"138"}),p.createElement("rect",{style:s(t-262,w),x:"544.2",y:"-69",width:"2.5",height:"138"}),p.createElement("rect",{style:s(t-265,w),x:"551.7",y:"-69",width:"2.5",height:"138"}),p.createElement("rect",{style:s(t-262,w),x:"559.1",y:"-69",width:"2.5",height:"138"}))))),p.createElement("div",{className:"cardBottomEdge",style:c(e,r,w)},p.createElement("div",{className:"edge"})),p.createElement("div",{className:"cardBack",style:a(e,r,w)},p.createElement("hr",null),p.createElement("em",null,"Design Technologist"),p.createElement("br",null),p.createElement("br",null),p.createElement("a",{href:"https://twitter.com/leeb",target:"_blank"},"@leeb"),p.createElement("br",null),p.createElement("a",{href:"http://leebyron.com/"},"leebyron.com"),p.createElement("br",null),p.createElement("a",{href:"mailto:l%65e@leebyron.com"},"lee@leebyron.com"),p.createElement("br",null),p.createElement("a",{href:"https://github.com/leebyron",target:"_blank"},"github.com/leebyron"),p.createElement("br",null)))}}),f=Math.PI/180,M=Math.sin(30*f),v=Math.cos(30*f);t.exports=w},{react:void 0}],react:[function(e,t){(function(e){t.exports=e.React}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},["./src/index.js"]);
//# sourceMappingURL=maps/bundle.js.map