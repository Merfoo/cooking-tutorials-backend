webpackJsonp([1],{0:function(t,e,n){n(91);var i=n(3)(n(46),n(900),null,null);t.exports=i.exports},25:function(t,e,n){"use strict";var i=n(38),a=n.n(i),o=n(101),r=n.n(o);n.d(e,"b",function(){return a.a}),n.d(e,"a",function(){return s}),a.a.initializeApp({apiKey:"AIzaSyCClhpNC_ft9ptq-kNNMZi_oyAGUa0Zupw",authDomain:"cooking-tutorials.firebaseapp.com"});var s=new r.a.auth.AuthUI(a.a.auth())},40:function(t,e,n){"use strict";var i=n(24),a=n.n(i),o=n(25),r=function(){return new a.a(function(t,e){var n=!1;o.b.auth.onAuthStateChanged(function(){n=!0,t()}),setTimeout(function(){n||e(new Error("Attachement of firebase auth failed!"))})})};e.a=r},41:function(t,e,n){"use strict";var i=n(16),a=n(908),o=n(895),r=n.n(o),s=n(893),c=n.n(s),u=n(894),l=n.n(u),p=n(896),h=n.n(p),f=n(897),d=n.n(f);i.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"Hello",component:r.a},{path:"/about",name:"About",component:c.a},{path:"/contact",name:"Contact",component:l.a},{path:"/login",name:"Login",component:h.a},{path:"/policies",name:"Policies",component:d.a}]})},42:function(t,e){},44:function(t,e,n){var i=n(3)(n(47),n(905),null,null);t.exports=i.exports},45:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(24),a=n.n(i),o=(n(43),n(16)),r=n(44),s=n.n(r),c=n(41),u=n(40);n(42),o.a.config.productionTip=!1,a.a.all([u.a]).then(function(){new o.a({el:"#app",router:c.a,template:"<App/>",components:{App:s.a}})},function(t){console.log(t)})},46:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(16),a={};e.default={name:"icon",props:{name:{type:String,validator:function(t){return t?t in a||(i.a.util.warn('Invalid prop: prop "icon" is referring to an unregistered icon "'+t+'".\nPlesase make sure you have imported this icon before using it.',this),!1):null}},scale:[Number,String],spin:Boolean,inverse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(i.a.util.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},clazz:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse}},icon:function(){return this.name?a[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,n=t.height;return Math.max(e,n)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(e){e.outerScale=t.normalizedScale});var e=0,n=0;this.$children.forEach(function(t){e=Math.max(e,t.width),n=Math.max(n,t.height)}),this.childrenWidth=e,this.childrenHeight=n,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(n-t.height)/2})}},register:function(t){for(var e in t){var n=t[e];n.paths||(n.paths=[]),n.d&&n.paths.push({d:n.d}),n.polygons||(n.polygons=[]),n.points&&n.polygons.push({points:n.points}),a[e]=n}},icons:a}},47:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(891),a=n.n(i),o=n(890),r=n.n(o);e.default={name:"app",components:{HeaderBar:a.a,FooterBar:r.a}}},48:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"footer-bar"}},49:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=n.n(i);e.default={name:"header-bar",components:{Icon:a.a}}},50:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{sitekey:"6LfBeyAUAAAAAOg5qF3ULlNpdMy6JJC1i0NavQ1t",recaptchaId:0}},mounted:function(){window.grecaptcha&&(this.recaptchaId=grecaptcha.render(document.getElementsByClassName("g-recaptcha")[0],{sitekey:this.sitekey}))}}},51:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"about"}},52:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(892),a=n.n(i);e.default={name:"contact",components:{Recaptcha:a.a},methods:{onSubmit:function(){$.post("/contact",{name:document.getElementById("name-input").value,email:document.getElementById("email-input").value,content:document.getElementById("content-input").value,"g-recaptcha-response":grecaptcha.getResponse()}).done(function(t){var e=$("#message");t.success?(e.text("Success!"),e.css("color","green"),$(".user-input").val("")):(e.text("Fill out the ReCaptcha!"),e.css("color","red"))}),grecaptcha.reset()}}}},53:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"home"}},54:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(25);e.default={name:"login",mounted:function(){i.a.start("#firebase-auth-container",{signInSuccessUrl:"/",signInOptions:[i.b.auth.GoogleAuthProvider.PROVIDER_ID,i.b.auth.FacebookAuthProvider.PROVIDER_ID,i.b.auth.TwitterAuthProvider.PROVIDER_ID],tosUrl:"cookingtutorials.net"})}}},55:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"policies"}},89:function(t,e){},890:function(t,e,n){n(89);var i=n(3)(n(48),n(898),null,null);t.exports=i.exports},891:function(t,e,n){n(90);var i=n(3)(n(49),n(899),null,null);t.exports=i.exports},892:function(t,e,n){n(94);var i=n(3)(n(50),n(903),null,null);t.exports=i.exports},893:function(t,e,n){n(92);var i=n(3)(n(51),n(901),null,null);t.exports=i.exports},894:function(t,e,n){n(93);var i=n(3)(n(52),n(902),null,null);t.exports=i.exports},895:function(t,e,n){var i=n(3)(n(53),n(906),null,null);t.exports=i.exports},896:function(t,e,n){n(95);var i=n(3)(n(54),n(904),null,null);t.exports=i.exports},897:function(t,e,n){n(96);var i=n(3)(n(55),n(907),null,null);t.exports=i.exports},898:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"link-container"},[n("router-link",{staticClass:"footer-link",attrs:{to:"/about"}},[t._v("About")]),t._v(" "),n("router-link",{staticClass:"footer-link",attrs:{to:"/policies"}},[t._v("Policies")]),t._v(" "),n("router-link",{staticClass:"footer-link",attrs:{to:"/contact"}},[t._v("Contact")])],1)])},staticRenderFns:[]}},899:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("router-link",{staticClass:"site-title-link",attrs:{to:"/"}},[n("Icon",{attrs:{name:"cutlery"}}),t._v(" "),n("h1",{staticClass:"site-title"},[t._v("Cooking Tutorials")])],1),t._v(" "),n("router-link",{staticClass:"login-link",attrs:{to:"/login"}},[n("Icon",{attrs:{name:"sign-in"}}),t._v("\n    Login\n  ")],1)],1)},staticRenderFns:[]}},90:function(t,e){},900:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{class:t.clazz,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e){return n("path",t._b({},"path",e))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e){return n("polygon",t._b({},"polygon",e))}):t._e(),t._v("\b\n    "),t.icon&&t.icon.raw?[n("g",{domProps:{innerHTML:t._s(t.icon.raw)}})]:t._e()])],2)},staticRenderFns:[]}},901:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("article",{attrs:{id:"about"}},[n("h2",[t._v("About")]),t._v(" "),n("p",[t._v("\n      Cooking tutorials is a website meant to contain cooking tutorials\n      submitted by users.\n    ")])])])}]}},902:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact"},[n("div",{staticClass:"contact-contaner"},[n("div",{attrs:{id:"message"}}),t._v(" "),n("h2",[t._v("Contact Us")]),t._v(" "),n("form",{staticClass:"contact-form",attrs:{action:"/contact/",method:"POST"},on:{submit:function(e){e.preventDefault(),t.onSubmit(e)}}},[n("label",{attrs:{for:"name"}},[t._v("Name")]),t._v(" "),n("input",{staticClass:"user-input",attrs:{id:"name-input",type:"text",name:"name",placeholder:"First and last name",maxlength:"20",required:""}}),t._v(" "),n("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),n("input",{staticClass:"user-input",attrs:{id:"email-input",type:"email",name:"email",placeholder:"Email to respond to",maxlength:"50",required:""}}),t._v(" "),n("label",{attrs:{for:"content"}},[t._v("Content")]),t._v(" "),n("textarea",{staticClass:"user-input",attrs:{id:"content-input",type:"textarea",name:"content",placeholder:"The message you want to send to us",maxlength:"140",required:""}}),t._v(" "),n("Recaptcha"),t._v(" "),n("br"),t._v(" "),n("input",{attrs:{type:"submit",value:"Submit"}})],1)])])},staticRenderFns:[]}},903:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"g-recaptcha",attrs:{"data-sitekey":t.sitekey}})},staticRenderFns:[]}},904:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("div",{attrs:{id:"firebase-auth-container"}})])}]}},905:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("HeaderBar"),t._v(" "),n("div",{staticClass:"router-view-container"},[n("router-view")],1),t._v(" "),n("FooterBar")],1)},staticRenderFns:[]}},906:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"home"})},staticRenderFns:[]}},907:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"policies"},[n("article",{attrs:{id:"official-web-disclaimer"}},[n("h2",[t._v("Official Web Disclaimer")]),t._v(" "),n("p",[t._v("\n        Information contained in this website is for general Information\n        purposes only. Information provided will be accurate and kept\n        up-to-date to the best of our ability, though we can't guarantee \n        it always will be.\n    ")]),t._v(" "),n("p",[t._v("\n        Unless noted otherwise, information on the site does not officially \n        represent us.\n    ")])]),t._v(" "),n("article",{attrs:{id:"acceptable-use"}},[n("h2",[t._v("Acceptable Use")]),t._v(" "),n("p",[t._v("\n        We support an environment of equal rights and opportunities through\n        the use of computers, phones, laptops, networks, and tablets.\n    ")])]),t._v(" "),n("article",{attrs:{id:"return-policy"}},[n("h2",[t._v("Return Policy")]),t._v(" "),n("p",[t._v("\n        No items are returnable. Buy at your own risk.\n    ")])])])}]}},91:function(t,e){},92:function(t,e){},93:function(t,e){},94:function(t,e){},95:function(t,e){},96:function(t,e){}},[45]);
//# sourceMappingURL=app.bfa5cb0fa78cabbbb540.js.map