(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"4pCV":function(t,e,s){"use strict";s.r(e);var a=s("jjHS"),n=s("umMm"),i=(s("sMBO"),s("uzYq")),r={data:function(){return{loading:!1,name:"",email:"",message:""}},methods:{submit:function(){var t=this;this.loading=!0;var e={subject:"Hello, New contact enquiry is here.",body:{name:this.name,email:this.email,message:this.message}};i.a.post("https://formail-api.ortigan-dev.xyz/api/send",e,{headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest",apikey:"9DDAjSGvoJFAxOCS"}}).then((function(e){t.loading=!1,t.$vs.notification({square:!0,duration:6e3,color:"success",position:"bottom-center",title:"🌟 Enquiry Sent Successfully",text:"👏 Thank you for contacting! Our representative will contact you on the provided details."}),t.$router.push("/"),t.clearFields()})).catch((function(e){t.loading=!1,t.$vs.notification({square:!0,duration:6e3,color:"danger",position:"bottom-center",title:" Some Error Occured",text:"Some error occcured. Please try again"})}))},clearFields:function(){var t=this;this.name=this.email=this.message=null,this.$nextTick((function(){t.$refs.form.reset()}))}}},o=(s("sj9f"),s("KHd+")),l=Object(o.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-full",staticStyle:{position:"relative"}},[s("ValidationObserver",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.invalid;return[s("form",{staticClass:"overflow-y-hidden w-full"},[s("div",{staticClass:"my-6"},[s("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"block w-full textarea text-md px-4 py-2",attrs:{type:"text",name:"name",placeholder:"Enter your name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),s("div",{staticClass:"text-red-300 font-base text-xs h-2 pt-1"},[t._v("\n            "+t._s(a[0])+"\n          ")])]}}],null,!0)})],1),s("div",{staticClass:"my-6"},[s("ValidationProvider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"block w-full textarea text-md px-4 py-2",attrs:{type:"text",name:"email",placeholder:"Enter your email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),s("div",{staticClass:"text-red-300 font-base text-xs h-2 pt-1"},[t._v("\n            "+t._s(a[0])+"\n          ")])]}}],null,!0)})],1),s("div",{staticClass:"my-6"},[s("ValidationProvider",{attrs:{rules:""},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"w-full textarea text-md px-4 py-2",staticStyle:{resize:"none"},attrs:{name:"message",placeholder:"Write your message",cols:"20",rows:"6"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),s("div",{staticClass:"text-red-300 font-base text-xs h-2 pt-1"},[t._v("\n            "+t._s(a[0])+"\n          ")])]}}],null,!0)})],1),s("div",{staticClass:"flex justify-center flex-row w-full my-3"},[s("button",{staticClass:"rounded-md",class:a?"flex text-md px-3 py-2 bg-gray-300 text-dark focus:outline-none focus:shadow-outline cursor-not-allowed":"flex text-md px-4 py-2 bg-secondary text-dark focus:outline-none focus:shadow-outline hover:bg-secondaryDark",attrs:{disabled:a,type:"submit"}},[s("p",[t._v("Submit")]),t.loading?s("p",{staticClass:"ml-2"},[s("half-circle-spinner",{attrs:{"animation-duration":1e3,size:20,color:"#fff"}})],1):t._e()])])])]}}])})],1)}),[],!1,null,"552cd7d0",null).exports,c={components:{MainLayout:a.a,ContactForm:l,Title:n.a}},d=(s("xAMe"),Object(o.a)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-dark"},[s("MainLayout",[s("div",{staticClass:"absolute opacity-20 left-0 top-0 h-full transform -translate-y-10 lg:translate-x-1/2 lg:-translate-y-1/4"},[s("g-image",{staticClass:"min-h-screen w-full",attrs:{src:"https://res.cloudinary.com/vitwit-technologies/image/upload/v1634126756/Vitwit%20Website/backgrounds/Blobs-Free/lhs_green_free_wf9rja.svg"}})],1),s("section",[s("div",{staticClass:"py-16 px-4 lg:container min-h-screen relative text-gray-300"},[s("Title",[t._v("Contact Us")]),s("div",{staticClass:"text-sm lg:text-lg font-thin"},[s("g-link",{attrs:{to:"/"}},[t._v("Home")]),s("span",{staticClass:"text-secondary"},[t._v(" / Contact Us")])],1),s("div",{staticClass:"flex flex-row-reverse flex-wrap justify-center"},[s("div",{staticClass:"w-full md:w-1/2"},[s("g-image",{staticClass:"mt-10 md:mt-0",attrs:{src:"https://res.cloudinary.com/vitwit-technologies/image/upload/v1638448525/Vitwit%20Website/vitwit%20raw%20assets/contact_us_illustration_ef01ik.png"}})],1),s("div",{staticClass:"w-full md:w-1/2 p-2"},[s("div",{staticClass:"customBlurBg rounded-md p-6 my-4"},[s("div",{staticClass:"my-1 flex flex-row"},[s("p",{staticClass:"font-semibold mr-1"},[t._v("Business Email: ")]),t._v(" contact@vitwit.com")]),s("div",{staticClass:"my-1 flex flex-row"},[s("p",{staticClass:"font-semibold mr-1"},[t._v("Career Email: ")]),t._v(" careers@vitwit.com")]),s("div",{staticClass:"my-1 flex flex-row"},[s("p",{staticClass:"font-semibold mr-1"},[t._v("Phone No: ")]),t._v(" +91 85001 92539")])]),s("div",{staticClass:"block md:hidden text-secondary text-lg mt-10"},[t._v("Drop us enquiry here")]),s("ContactForm")],1)])],1)])])],1)}),[],!1,null,null,null));e.default=d.exports},"8XvG":function(t,e,s){"use strict";s("lwGs")},CYRe:function(t,e,s){},X4f0:function(t,e,s){},cTb8:function(t,e,s){},jjHS:function(t,e,s){"use strict";var a={data:function(){return{isOpen:!1,showItems:!1,scrollPx:""}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){t.scrollPx=window.scrollY}))},methods:{hideNavOnScrollFunc:function(){return"/"!=this.$route.path||this.scrollPx>100},openNav:function(){this.isOpen=!0,this.showItems=!0,document.getElementById("mainNav").style.background="#fff"},closeNav:function(){this.showItems=!1,this.isOpen=!1,document.getElementById("mainNav").style.background=""},updateScroll:function(){this.scrollPosition=window.scrollY,this.scrollPosition>100?(document.getElementById("mainNav").style.background="#1a202c",document.getElementById("mainNav").style.height="70px"):document.getElementById("mainNav").style.background=""}}},n=(s("n8h7"),s("KHd+")),i={components:{Navbar:Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("transition",{attrs:{name:"fade"}},[t.hideNavOnScrollFunc()?s("nav",{staticClass:"fixed top-0 w-full mb-6 z-10",staticStyle:{"transition-duration":"0.3s","z-index":"9999999"},attrs:{id:"mainNav"}},[s("div",{staticClass:"h-16",class:t.scrollPx>50?"shadow navBg":"",staticStyle:{transition:"ease all 0.4s"}}),s("div",{staticClass:"bg-transparent top-0 absolute w-full z-40"},[s("div",{staticClass:"\n            px-4\n            md:container\n            flex flex-row\n            justify-between\n            items-center\n            h-16\n          "},[s("div",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#home",expression:"'#home'"}]},[s("router-link",{staticClass:"flex flex-row items-center",attrs:{to:"/"}},[s("div",{staticClass:"w-32"},[s("g-image",{attrs:{alt:"logo",src:"https://res.cloudinary.com/vitwit-technologies/image/upload/v1639302733/Vitwit%20Website/vitwit_logo/0._logo_vitwit_ortigan_rbjh4x.svg"}})],1)])],1),s("div",{staticClass:"w-full flex flex-row justify-end items-center"},[s("div",{staticClass:"hidden lg:block ml-4"},[s("div",{staticClass:"flex items-center font-light text-gray-300",staticStyle:{transition:"ease all 0.2s"}},[s("router-link",{staticClass:"ml-8 hover:font-semibold hover:text-gray-100 w-12",attrs:{"exact-active-class":"text-secondary hover:text-secondary",to:"/"}},[s("p",[t._v("Home")])]),s("router-link",{staticClass:"\n                    text-center\n                    ml-8\n                    hover:font-semibold hover:text-gray-100\n                    w-20\n                  ",attrs:{"exact-active-class":"text-secondary hover:text-secondary",to:"/about-us"}},[s("p",[t._v("About Us")])]),s("router-link",{staticClass:"\n                    text-center\n                    ml-8\n                    hover:font-semibold hover:text-gray-100\n                    w-16\n                  ",attrs:{"exact-active-class":"text-secondary hover:text-secondary",to:"/services"}},[s("p",[t._v("Services")])]),s("router-link",{staticClass:"\n                    text-center\n                    ml-8\n                    hover:font-semibold hover:text-gray-100\n                    w-16\n                  ",attrs:{"exact-active-class":"text-secondary hover:text-secondary",to:"/products"}},[s("p",[t._v("Products")])]),s("router-link",{staticClass:"\n                    text-center\n                    ml-8\n                    hover:font-semibold hover:text-gray-100\n                    w-16\n                  ",attrs:{"exact-active-class":"text-secondary hover:text-secondary",to:"/partners"}},[s("p",[t._v("Partners")])]),s("router-link",{staticClass:"\n                    text-center\n                    ml-8\n                    hover:font-semibold hover:text-gray-100\n                    w-12\n                  ",attrs:{"exact-active-class":"text-secondary hover:text-secondary",to:"/blogs"}},[s("p",[t._v("Blogs")])]),s("router-link",{staticClass:"\n                    text-center\n                    ml-8\n                    hover:font-bold hover:text-gray-100\n                    w-12\n                  ",attrs:{"exact-active-class":"text-secondary hover:text-secondary",to:"/careers"}},[s("p",[t._v("Careers")])]),s("router-link",{staticClass:"\n                    text-center\n                    ml-8\n                    hover:font-bold hover:text-gray-100\n                    w-24\n                  ",attrs:{"exact-active-class":"text-secondary hover:text-secondary",to:"/contact"}},[s("p",[t._v("Contact Us")])])],1)])]),s("div",{staticClass:"lg:hidden"},[s("button",{staticClass:"block text-gray-500 hover: focus: focus:outline-none",attrs:{type:"button",name:"nav-button"}},[t.isOpen?t._e():s("svg",{staticClass:"h-6 w-6 fill-current",attrs:{viewBox:"0 0 24 24"},on:{click:function(e){return t.openNav()}}},[s("path",{attrs:{fill:"#fff","fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"}})]),t.isOpen?s("svg",{staticClass:"h-6 w-6 fill-current",attrs:{viewBox:"0 0 24 24"},on:{click:function(e){return t.closeNav()}}},[s("path",{attrs:{fill:"#fff","fill-rule":"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"}})]):t._e()])])]),s("div",{staticClass:"bg-dark -mt-16 flex justify-center h-screen",class:t.isOpen?"block":"hidden"},[s("transition",{attrs:{duration:{enter:800,leave:800},name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showItems,expression:"showItems"}],staticClass:"flex flex-col justify-center items-center",on:{click:function(e){return t.closeNav()}}},[s("router-link",{staticClass:"\n                  px-2\n                  py-1\n                  text-gray-300 text-base\n                  tracking-wider\n                  rounded\n                  navItem\n                ",staticStyle:{"text-transform":"uppercase"},attrs:{"exact-active-class":"text-secondary hover:text-secondary",to:"/"}},[t._v("Home")]),s("router-link",{staticClass:"\n                  mt-1\n                  block\n                  px-2\n                  py-1\n                  text-gray-300\n                  font-base\n                  tracking-wider\n                  rounded\n                  navItem\n                ",staticStyle:{"text-transform":"uppercase"},attrs:{"exact-active-class":"text-secondary hover:text-secondary",to:"/about-us"}},[t._v("About Us")]),s("router-link",{staticClass:"\n                  mt-1\n                  block\n                  px-2\n                  py-1\n                  text-gray-300\n                  font-base\n                  tracking-wider\n                  rounded\n                  navItem\n                ",staticStyle:{"text-transform":"uppercase"},attrs:{"exact-active-class":"text-secondary hover:text-secondary",to:"/services"}},[t._v("Services")]),s("router-link",{staticClass:"\n                  mt-1\n                  block\n                  px-2\n                  py-1\n                  text-gray-300\n                  font-base\n                  tracking-wider\n                  rounded\n                  navItem\n                ",staticStyle:{"text-transform":"uppercase"},attrs:{"exact-active-class":"text-secondary hover:text-secondary",to:"/products"}},[t._v("Products")]),s("router-link",{staticClass:"\n                  mt-1\n                  block\n                  px-2\n                  py-1\n                  text-gray-300\n                  font-base\n                  tracking-wider\n                  rounded\n                  navItem\n                ",staticStyle:{"text-transform":"uppercase"},attrs:{"exact-active-class":"text-secondary hover:text-secondary",to:"/partners"}},[t._v("Partners")]),s("router-link",{staticClass:"\n                  mt-1\n                  block\n                  px-2\n                  py-1\n                  text-gray-300\n                  font-base\n                  tracking-wider\n                  rounded\n                  navItem\n                ",staticStyle:{"text-transform":"uppercase"},attrs:{"exact-active-class":"text-secondary hover:text-secondary",to:"/blogs"}},[t._v("Blogs")]),s("router-link",{staticClass:"\n                  mt-1\n                  block\n                  px-2\n                  py-1\n                  text-gray-300\n                  font-base\n                  tracking-wider\n                  rounded\n                  navItem\n                ",staticStyle:{"text-transform":"uppercase"},attrs:{"exact-active-class":"text-secondary hover:text-secondary",to:"/careers"}},[t._v("Careers")]),s("router-link",{staticClass:"\n                  mt-1\n                  block\n                  px-2\n                  py-1\n                  text-gray-300\n                  font-base\n                  tracking-wider\n                  rounded\n                  navItem\n                ",staticStyle:{"text-transform":"uppercase"},attrs:{"exact-active-class":"text-secondary hover:text-secondary",to:"/contact"}},[t._v("Contact Us")])],1)])],1)])]):t._e()])],1)}),[],!1,null,"6b67f12b",null).exports,Footer:Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-gray-100 text-sm py-10"},[e("footer",[e("div",{staticClass:"\n        container\n        w-full\n        flex flex-col\n        md:flex-row\n        items-center\n        justify-center\n        md:justify-between\n      "},[e("div",{staticClass:"w-full flex flex-row justify-center md:w-2/5 my-3 md:my-0"},[e("g-image",{staticClass:"w-56 md:w-full",attrs:{src:"https://res.cloudinary.com/vitwit-technologies/image/upload/v1635195566/Vitwit%20Website/vitwit_logo/footer_vitwit_logo.svg"}})],1),e("div",{staticClass:"\n          w-full\n          md:w-1/5\n          my-3\n          flex flex-row\n          justify-center\n          md:flex-col\n          px-0\n          md:px-4\n        "},[e("div",{staticClass:"flex flex-row justify-start md:justify-center"},[e("a",{attrs:{href:"https://g.page/vitwit?share",target:"_blank"}},[e("g-image",{staticClass:"ml-2 md:m-1 h-10 md:h-14",attrs:{src:"https://res.cloudinary.com/vitwit-technologies/image/upload/v1635195491/Vitwit%20Website/icons/location_icon.svg"}})],1),e("a",{attrs:{href:"tel:+918500192539",target:"_blank"}},[e("g-image",{staticClass:"ml-2 md:m-1 h-10 md:h-14",attrs:{src:"https://res.cloudinary.com/vitwit-technologies/image/upload/v1635195491/Vitwit%20Website/icons/contact_logo.svg"}})],1)]),e("div",{staticClass:"flex flex-row justify-start md:justify-center"},[e("a",{attrs:{href:"https://wa.me/918500192539?text=Hello%20Vitwit",target:"_blank"}},[e("g-image",{staticClass:"ml-2 md:m-1 h-10 md:h-14",attrs:{src:"https://res.cloudinary.com/vitwit-technologies/image/upload/v1635195491/Vitwit%20Website/icons/whatsapp_logo.svg"}})],1),e("a",{attrs:{href:"mailto:contact@vitwit.com",target:"_blank"}},[e("g-image",{staticClass:"ml-2 md:m-1 h-10 md:h-14",attrs:{src:"https://res.cloudinary.com/vitwit-technologies/image/upload/v1635195490/Vitwit%20Website/icons/email_logo.svg"}})],1)])]),e("div",{staticClass:"\n          w-full\n          md:w-2/5\n          my-3\n          text-center\n          md:text-left\n          text-xs\n          md:text-base\n          font-thin\n        "},[e("p",{staticClass:"text-white mb-2"},[this._v("\n          Copyright © "+this._s((new Date).getFullYear())+" Vitwit. All Rights\n          Reserved.\n        ")]),e("p",{staticClass:"text-gray-400 cursor-pointer"},[this._v("\n          Privacy Policy - Terms & Conditions\n        ")]),this._m(0)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n          Designed & Developed By\n          "),e("a",{attrs:{href:"https://www.ortigan.com/",target:"__blank"}},[e("span",{staticClass:"italic font-semibold"},[this._v("Ortigan")])])])}],!1,null,null,null).exports},data:function(){return{scrollPx:0}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){t.scrollPx=window.scrollY}))},methods:{scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},r=(s("qIVM"),Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-dark relative overflow-hidden font-primary"},[s("Navbar"),s("transition",{attrs:{name:"fade","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut",mode:"out-in",appear:""}},[s("main",[t._t("default")],2)]),t.scrollPx>150?s("div",{staticClass:"scrollToTopBlurBg fixed rounded bottom-0 right-0 mr-4 mb-4 2xl:mb-8 2xl:mr-8 justify-center items-center",staticStyle:{"z-index":"999999",transition:"ease all 0.5s","animation-timing-function":"ease-in-out"}},[s("button",{staticClass:" flex justify-center items-center w-10 h-10 rounded",on:{click:function(e){return t.scrollToTop()}}},[s("g-image",{attrs:{src:"https://res.cloudinary.com/vitwit-technologies/image/upload/v1639296677/Vitwit%20Website/Global_utility_icon/7_gototop_icon_dormant_vitwit_ortigan_vbrvpf.svg"}})],1)]):t._e(),s("Footer")],1)}),[],!1,null,null,null));e.a=r.exports},lwGs:function(t,e,s){},n8h7:function(t,e,s){"use strict";s("CYRe")},qIVM:function(t,e,s){"use strict";s("X4f0")},sgzO:function(t,e,s){},sj9f:function(t,e,s){"use strict";s("sgzO")},umMm:function(t,e,s){"use strict";s("8XvG");var a=s("KHd+"),n=Object(a.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"page-title text-white mt-5"},[this._t("default")],2)}),[],!1,null,"682a87e2",null);e.a=n.exports},uzYq:function(t,e,s){"use strict";var a=s("vDqi"),n=s.n(a);e.a=n.a.create({headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},baseURL:""})},xAMe:function(t,e,s){"use strict";s("cTb8")}}]);