webpackJsonp([1],{"0HCN":function(t,e){},"3muq":function(t,e){},"7+Yg":function(t,e){},"9hKz":function(t,e){},D4uH:function(t,e,s){"use strict";var n={},a={name:"icon",props:{name:{type:String,validator:function(t){return t?t in n||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+t+'".\nPlesase make sure you have imported this icon before using it.'),!1):(console.warn('Invalid prop: prop "name" is required.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?n[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,s=t.height;return Math.max(e,s)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,e={};return t=t.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,function(t,s){var n="fa-"+(i++).toString(16);return e[s]=n,' id="'+n+'"'}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(t,s,n,a){var i=s||a;return i&&e[i]?"#"+e[i]:t}),t}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(e){e.outerScale=t.normalizedScale});var e=0,s=0;this.$children.forEach(function(t){e=Math.max(e,t.width),s=Math.max(s,t.height)}),this.childrenWidth=e,this.childrenHeight=s,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(s-t.height)/2})}},register:function(t){for(var e in t){var s=t[e];s.paths||(s.paths=[]),s.d&&s.paths.push({d:s.d}),s.polygons||(s.polygons=[]),s.points&&s.polygons.push({points:s.points}),n[e]=s}},icons:n},i=870711;var o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{class:t.klass,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e,n){return s("path",t._b({key:"path-"+n},"path",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e,n){return s("polygon",t._b({key:"polygon-"+n},"polygon",e,!1))}):t._e(),t._v("\b\n    "),t.icon&&t.icon.raw?[s("g",{domProps:{innerHTML:t._s(t.raw)}})]:t._e()])],2)},staticRenderFns:[]};var r=s("VU/8")(a,o,!1,function(t){s("NqbI")},null,null);e.a=r.exports},IjYu:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),a={name:"NavBarItem",props:["ItemInfo"],data:function(){return console.log(this.$store),{}},methods:{scroll:function(t){history.pushState({},this.ItemInfo.name,this.ItemInfo.link),$("html, body").animate({scrollTop:$(this.ItemInfo.link).offset().top},400),this.$store.commit("activate",{title:this.ItemInfo.title})}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"nav-item",class:[t.ItemInfo.isActive?"active":""]},[s("a",{staticClass:"nav-link",attrs:{href:t.ItemInfo.link},on:{click:function(e){e.preventDefault(),t.scroll(e)}}},[t._v("\n        "+t._s(t.ItemInfo.title)+"\n    ")])])},staticRenderFns:[]};var o={name:"NavBar",props:["title"],data:function(){return{links:[]}},components:{NavItem:s("VU/8")(a,i,!1,function(t){s("nEvh")},null,null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-content"},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-dark"},[e("a",{staticClass:"navbar-brand",attrs:{href:""}},[this._v(this._s(this.title))]),this._v(" "),this._m(0),this._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav mr-auto"},this._l(this.$store.state.links,function(t){return e("nav-item",{key:t.id,attrs:{"item-info":t}})}))])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}]};var l=s("VU/8")(o,r,!1,function(t){s("3muq")},"data-v-8f256ae4",null).exports,c={props:{title:{type:String,required:!0,default:"Gomja.readme"},isScrolledOverThreshold:{type:Boolean,required:!0,default:!1}},name:"SiteHeader",data:function(){return{}},components:{NavBar:l},watch:{isScrolledOverThreshold:function(){}}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"banner",class:{"banner-fixed":this.isScrolledOverThreshold},attrs:{id:"intro",role:"banner"}},[e("div",{staticClass:"covered"}),this._v(" "),e("header",[e("nav-bar",{class:{fixed:this.isScrolledOverThreshold},attrs:{title:this.title}})],1),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"col-md-10 col-md-offset-1 m-auto"},[e("div",{staticClass:"banner-text text-center"},[e("h1",[this._v("Gomja.readme")]),this._v(" "),e("p",[this._v("Web / Mobile Application Programmer")])])])])}]};var u=s("VU/8")(c,v,!1,function(t){s("IjYu")},"data-v-42d7f7ea",null).exports,d=s("U0v6"),h=s.n(d),p=s("h17U"),m={name:"FooterVue",data:function(){return{libraries:[{link:"https://router.vuejs.org/kr/",name:"vue-router"},{link:"https://cngu.github.io/vue-typer/",name:"vue-typer"},{link:"https://github.com/FortAwesome/Font-Awesome",name:"vue-fontawesome"},{link:"https://nodemailer.com/about/",name:"nodemailer"}],tools:[{link:"https://vuejs.org/",name:"vue.js"},{link:"https://nodejs.org/ko/",name:"nodejs"},{link:"http://expressjs.com/ko/",name:"express"},{link:"https://getbootstrap.com",name:"bootstrap"}]}},computed:{iFacebook:function(){return p.e},iInstagram:function(){return p.j},iBlog:function(){return p.d},iGithub:function(){return p.h},iSoundcloud:function(){return p.q}},components:{FontAwesomeIcon:h.a}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[s("div",{staticClass:"footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-8 powered border-right"},[s("div",{staticClass:"w-100 text-left mb-10"},[s("h5",{staticClass:"header text-left"},[t._v("Powered by")]),t._v(" "),t._l(t.tools,function(e){return s("span",{key:e.id,staticClass:"libraries"},[s("a",{attrs:{href:e.link}},[t._v(t._s(e.name))])])})],2),t._v(" "),s("div",{staticClass:"w-100 text-left mb-10"},[s("h5",{staticClass:"header text-left"},[t._v("Libraries I use")]),t._v(" "),t._l(t.libraries,function(e){return s("span",{key:e.id,staticClass:"libraries"},[s("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.name))])])})],2)]),t._v(" "),s("div",{staticClass:"col-4 powered"},[s("div",{staticClass:"sns text-left"},[s("a",{attrs:{href:"https://www.facebook.com/kyeongsoo.yoo",target:"_blank"}},[s("font-awesome-icon",{attrs:{icon:t.iFacebook}})],1),t._v(" "),s("a",{attrs:{href:"https://www.instagram.com/gomja_/",tartget:"_blank"}},[s("font-awesome-icon",{attrs:{icon:t.iInstagram}})],1),t._v(" "),s("a",{attrs:{href:"https://yoogomja.tistory.com",target:"_blank"}},[s("font-awesome-icon",{attrs:{icon:t.iBlog}})],1),t._v(" "),s("a",{attrs:{href:"https://github.com/yoogomja/gomja-readme",target:"_blank"}},[s("font-awesome-icon",{attrs:{icon:t.iGithub}})],1),t._v(" "),s("a",{attrs:{href:"httpS://soundcloud.com/gomja_beats",target:"_blank"}},[s("font-awesome-icon",{attrs:{icon:t.iSoundcloud}})],1)]),t._v(" "),s("p",[t._v("all right reserved by yoogomja, 2018")]),t._v(" "),s("p",[t._v("powered by Vue.js, EXPRESS")])])])])])])},staticRenderFns:[]};var _={name:"App",data:function(){return{config:{evt:{threshold_evaluating_scroll_top:56,isScrolledOverThreshold:!1}},title:"Gomja.log"}},methods:{evt_scroll:function(t){var e=jQuery(t.target).scrollTop();1==this.config.evt.isScrolledOverThreshold?0==e&&(this.config.evt.isScrolledOverThreshold=!1):e>this.config.evt.threshold_evaluating_scroll_top&&(this.config.evt.isScrolledOverThreshold=!0)}},components:{HeaderVue:u,FooterVue:s("VU/8")(m,f,!1,function(t){s("0HCN")},"data-v-1be37586",null).exports},created:function(){window.document.addEventListener("scroll",this.evt_scroll)}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("header-vue",{attrs:{title:this.title,isScrolledOverThreshold:this.config.evt.isScrolledOverThreshold}}),this._v(" "),e("router-view"),this._v(" "),e("footer-vue")],1)},staticRenderFns:[]};var C=s("VU/8")(_,g,!1,function(t){s("9hKz")},null,null).exports,b=s("/ocq"),j=s("1P+R"),w=s("Ubyc"),k={name:"ContentAbout",props:[],data:function(){return{}},components:{FontAwesomeIcon:h.a,VueTyper:w.VueTyper},computed:{iCoffee:function(){return j.d},iAppStore:function(){return p.b},iJavascript:function(){return p.k},iJavascriptSquare:function(){return p.l},iDatabase:function(){return j.e},iServer:function(){return j.g},iGitSquare:function(){return p.g}}},x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-about",attrs:{id:"about"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row",staticStyle:{display:"none"}},[s("div",{staticClass:"col-6 container-lang"},[s("font-awesome-icon",{staticClass:"icon",attrs:{icon:t.iAppStore}}),t._v(" "),s("p",[t._v("\n                    iOS Applications with Objective C\n                ")])],1),t._v(" "),s("div",{staticClass:"col-6 container-lang"},[s("font-awesome-icon",{staticClass:"icon",attrs:{icon:t.iJavascriptSquare}}),t._v(" "),s("p",[t._v("\n                    Front-End development with recent libs.\n                ")])],1),t._v(" "),s("div",{staticClass:"col-6 container-lang"},[s("font-awesome-icon",{staticClass:"icon",attrs:{icon:t.iGitSquare}}),t._v(" "),s("p",[t._v("\n                    Cooperation with git and subversion.\n                ")])],1),t._v(" "),s("div",{staticClass:"col-6 container-lang"},[s("font-awesome-icon",{staticClass:"icon",attrs:{icon:t.iServer}}),t._v(" "),s("p",[t._v("\n                    Back-end Development, ASP.NET\n                ")])],1)]),t._v(" "),s("h1",[t._v("\n            Hi! "),s("br"),t._v(" I'm "),s("vue-typer",{attrs:{text:["Yoo.","Web Programmer.","iOS Programmer.","College Student."],repeat:1/0,shuffle:!1,"initial-action":"typing","pre-type-delay":70,"type-delay":70,"pre-erase-delay":3e3,"erase-delay":50,"erase-style":"backspace","erase-on-complete":!1,"caret-animation":"smooth"}})],1),t._v(" "),s("p",[t._v("\n            소프트웨어 개발자입니다. 한국의 경기도 남양주시에 거주 중이고, 현재 삼육대학교 컴퓨터 공학과에 재학중입니다. 아이폰을 중심으로한 모바일 프로그래밍과 웹 프로그래밍 전반에 관심을 갖고있습니다. 산업근무요원을 거쳐 두 곳에서 3년 남짓 직장 생활을 이어오다 다시 학생으로 돌아왔습니다. 최근엔 swift와 VueJS, React 등의 최신 웹 프론트엔드 라이브러리들에 관심이 많아 공부 중입니다.\n        ")])])])},staticRenderFns:[]};var y=s("VU/8")(k,x,!1,function(t){s("ccPJ"),s("pmkk")},"data-v-231c1cce",null).exports,S={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"skill-item-container",attrs:{id:t.itemId}},[s("div",{staticClass:"progress",attrs:{"data-percentage":t.info.lvl}},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"progress-value"},[s("div",[t._v("\n                "+t._s(t.info.lvl)),s("span",[t._v("/100")]),t._v(" "),s("br"),t._v(" "),s("span",[t._v("accomplished")])])])]),t._v(" "),s("p",[t._v("\n        "+t._s(t.info.name)+"\n    ")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"progress-left"},[e("span",{staticClass:"progress-bar"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"progress-right"},[e("span",{staticClass:"progress-bar"})])}]};var E={name:"skill",data:function(){return{skills:[{name:"Javascript",lvl:70,logo:"",cate:"front"},{name:"jQuery",lvl:80,logo:"",cate:"front"},{name:"AngularJS",lvl:80,logo:"",cate:"front"},{name:"ASP.NET",lvl:70,logo:"",cate:"back"},{name:"MSSQL",lvl:60,logo:"back"},{name:"Objective C",lvl:80,logo:"",cate:"mobile"}],skills_row1:[{name:"Javascript",lvl:70,logo:"",cate:"front"},{name:"jQuery",lvl:80,logo:"",cate:"front"},{name:"AngularJS",lvl:80,logo:"",cate:"front"}],skills_row2:[{name:"ASP.NET",lvl:70,logo:"",cate:"back"},{name:"MSSQL",lvl:60,logo:"back"},{name:"Objective C",lvl:80,logo:"",cate:"mobile"}]}},components:{SkillItem:s("VU/8")({name:"SkillItem",props:["info"],data:function(){return{}},created:function(){},computed:{itemId:function(){return"item-"+this.info.name}}},S,!1,function(t){s("PcZZ")},"data-v-5966ca7b",null).exports,FontAwesomeIcon:d.FontAwesomeIcon},computed:{iGit:function(){return p.g},iVue:function(){return p.r},iNode:function(){return p.m},iReact:function(){return p.o},iAngular:function(){return p.a},iHtml5:function(){return p.i},iSass:function(){return p.p},iAWS:function(){return p.c},iFontAwesome:function(){return p.f},iNPM:function(){return p.n}}},I={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"skill"}},[s("div",{staticClass:"container"},[t._m(0),t._v(" "),s("div",{staticClass:"row"},t._l(t.skills_row1,function(t){return s("div",{key:t.id,staticClass:"col"},[s("skill-item",{attrs:{info:t}})],1)})),t._v(" "),s("div",{staticClass:"row"},t._l(t.skills_row2,function(t){return s("div",{key:t.id,staticClass:"col"},[s("skill-item",{attrs:{info:t}})],1)})),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"additional"},[s("span",{attrs:{title:"Git"}},[s("font-awesome-icon",{staticClass:"icon",attrs:{icon:t.iGit}})],1),t._v(" "),s("span",{attrs:{title:"ReactJS"}},[s("font-awesome-icon",{staticClass:"icon",attrs:{icon:t.iReact}})],1),t._v(" "),s("span",{attrs:{title:"VueJS"}},[s("font-awesome-icon",{staticClass:"icon",attrs:{icon:t.iVue}})],1),t._v(" "),s("span",{attrs:{title:"AmazonWebService"}},[s("font-awesome-icon",{staticClass:"icon",attrs:{icon:t.iAWS}})],1),t._v(" "),s("span",{attrs:{title:"HTML5"}},[s("font-awesome-icon",{staticClass:"icon",attrs:{icon:t.iHtml5}})],1),t._v(" "),s("span",{attrs:{title:"nodeJS"}},[s("font-awesome-icon",{staticClass:"icon",attrs:{icon:t.iNode}})],1),t._v(" "),s("span",{attrs:{title:"Sass"}},[s("font-awesome-icon",{staticClass:"icon",attrs:{icon:t.iSass}})],1),t._v(" "),s("span",{attrs:{title:"npm"}},[s("font-awesome-icon",{staticClass:"icon",attrs:{icon:t.iNPM}})],1),t._v(" "),s("span",{attrs:{title:"font-awesome"}},[s("font-awesome-icon",{staticClass:"icon",attrs:{icon:t.iFontAwesome}})],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"header"},[e("h1",[this._v("\n                        Technical skills\n                    ")]),this._v(" "),e("p",[this._v("이런 것들은 좀 다룰줄 압니다")]),this._v(" "),e("hr")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("br"),this._v(" "),e("div",{staticClass:"header"},[e("p",[this._v("그리고 이런 것들에 대해 몇마디 거들 수 있어요")]),this._v(" "),e("hr")])])])}]};var z=s("VU/8")(E,I,!1,function(t){s("OCsn")},"data-v-3f5ab3f6",null).exports,A={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"project"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"header"},[s("h1",[t._v("Contributed Project")]),t._v(" "),s("p",[t._v("이런 작업들에 참여했습니다")]),t._v(" "),s("hr")]),t._v(" "),s("div",{staticClass:"project-content"},[s("h5",{staticClass:"w-100 text-left"},[s("span",{staticClass:"badge badge-danger",staticStyle:{"font-size":"4px"}},[t._v("new !")]),t._v(" "),s("b",{staticClass:"align-middle"},[t._v("SYUNotification")]),t._v(" "),s("a",{staticClass:"badge badge-primary",attrs:{target:"_blank",href:"https://chrome.google.com/webstore/detail/syunotification/icgcbogmfianabccahhdadhcfmenhhik?hl=ko"}},[t._v("link")])]),t._v(" "),s("p",{staticClass:"w-100 text-left"},[t._v("\n                삼육대학교의 공지를 몰아서 볼 수 있는 Chrome 브라우저 확장 프로그램인 SYUNotification을 "),s("span",{staticClass:"text-info font-italic "},[t._v("18년 7월부터 5개월")]),t._v(" 가량 작업했습니다. 토이 프로젝트를 시작으로해 교내 경진대회를 위해 다소 개량을 거쳐서 작업되었고, 교내 경진대회에서 3등에 입상하였습니다. "),s("span",{staticClass:"text-info font-italic "},[t._v("순수 javascript와 AngularJS, Chrome Extention Library")]),t._v("로 이루어진 크롬 확장 프로그램으로 현재 크롬 웹스토어에 등록되어 있습니다. 현재 추가 개발을 진행하고 있습니다.\n            ")])]),t._v(" "),s("div",{staticClass:"project-content"},[s("h5",{staticClass:"w-100 text-left"},[s("span",{staticClass:"badge badge-danger",staticStyle:{"font-size":"4px"}},[t._v("new !")]),t._v(" "),s("b",{staticClass:"align-middle"},[t._v("픽 앤 셀 - ICT 한이음 멘토링 프로젝트")]),t._v(" "),s("a",{staticClass:"badge badge-primary",attrs:{target:"_blank",href:"https://www.youtube.com/watch?v=RbiE0HLi4Xg&feature=youtu.be"}},[t._v("link")])]),t._v(" "),s("p",{staticClass:"w-100 text-left"},[t._v("\n                ICT 한이음 멘토링 프로젝트를 위한 픽&셀 프로젝트를 "),s("span",{staticClass:"text-info font-italic "},[t._v("18년 7월부터 5개월")]),t._v(" 가량 작업했습니다. 중간부터 프로젝트에 참여하게 되었고 실제로 서비스로 이어지진 못했으나, 결국 ICT 프로젝트를 무사히 마무리 짓게 되었습니다."),s("span",{staticClass:"text-info font-italic "},[t._v("Wordpress와  wordpress의 결제 플러그인등의 많은 플러그인으로")]),t._v("로 제작된 Wordpress 홈페이지 였습니다.\n            ")])]),t._v(" "),s("div",{staticClass:"project-content"},[s("h5",{staticClass:"w-100 text-left"},[s("span",{staticClass:"badge badge-danger",staticStyle:{"font-size":"4px"}},[t._v("new !")]),t._v(" "),s("b",{staticClass:"align-middle"},[t._v("교내 C 언어 스터디")]),t._v(" "),s("a",{staticClass:"badge badge-primary",attrs:{target:"_blank",href:"https://github.com/YOOGOMJA/C_LANG_STUDY"}},[t._v("link")])]),t._v(" "),s("p",{staticClass:"w-100 text-left"},[t._v("\n                삼육대학교 컴퓨터 학과 학생 12명 가량을 대상으로 C 언어 스터디를 진행했습니다. 18년 8월부터 1개월 가량 진행했습니다. 스터디장으로 강의 내용 제작과 강의를 담당했습니다. 주차마다 강의를 진행하고 관련된 과제를 제시, 다음 주차에 해설을 하는 식으로 진행되었습니다.\n            ")])]),t._v(" "),s("div",{staticClass:"project-content"},[s("h5",{staticClass:"w-100 text-left"},[s("span",{staticClass:"badge badge-danger",staticStyle:{"font-size":"4px"}},[t._v("new !")]),t._v(" "),s("b",{staticClass:"align-middle"},[t._v("클릭잡 하이브리드 어플리케이션")]),t._v(" "),s("a",{staticClass:"badge badge-primary",attrs:{target:"_blank",href:"http://www.clickjobkorea.com"}},[t._v("link")])]),t._v(" "),s("p",{staticClass:"w-100 text-left"},[t._v("\n                (주)파인 이엔앰의 하이브리드 어플리케이션 개발업무를 "),s("span",{staticClass:"text-info font-italic "},[t._v("18년 3월부터 19년 1월까지 약 10개월")]),t._v(" 가량  외주 업무로 진행하였습니다. "),s("span",{staticClass:"text-info font-italic "},[t._v("cordova, angularJS")]),t._v("로 이루어진 프론트 엔드 페이지와 "),s("span",{staticClass:"text-info font-italic "},[t._v("Objective C기반으로 iOS 파트를 전담하며 ")]),t._v("외주 업무로 진행 되었습니다."),s("br"),s("br"),t._v("\n                2월 오픈 예정으로 아직 앱스토어에 등록되지 않았습니다.\n            ")])]),t._v(" "),s("div",{staticClass:"project-content"},[s("h5",{staticClass:"w-100 text-left"},[s("span",{staticClass:"badge badge-danger",staticStyle:{"font-size":"4px"}},[t._v("new !")]),t._v(" "),s("b",{staticClass:"align-middle"},[t._v("위례 야구 아카데미 홈페이지 개발 , 운영")]),t._v(" "),s("a",{staticClass:"badge badge-primary",attrs:{target:"_blank",href:"http://위례야구아카데미.com"}},[t._v("link")])]),t._v(" "),s("p",{staticClass:"w-100 text-left"},[t._v("\n                신생 기업인 위례 야구 아카데미의 홈페이지 제작을 "),s("span",{staticClass:"text-info font-italic "},[t._v("18년 3월부터 1개월")]),t._v(" 가량 외주 업무로 진행하였습니다. "),s("span",{staticClass:"text-info font-italic "},[t._v("Wordpress")]),t._v("로 이루어진 웹페이지를 만들고 "),s("span",{staticClass:"text-info font-italic "},[t._v("Cafe24 호스팅")]),t._v("되어 있으며, 각종 페이지 작업들을 직접 Angular JS / jQuery등을 활용해 이루어졌습니다. 개발 후 지금까지 직접 운영을 맡고 있습니다.\n            ")])]),t._v(" "),s("div",{staticClass:"project-content"},[s("h5",{staticClass:"w-100 text-left"},[s("b",{staticClass:"align-middle"},[t._v("와이파이도시락(와이드모바일) 하이브리드 어플리케이션")]),t._v(" "),s("a",{staticClass:"badge badge-primary",attrs:{target:"_blank",href:"https://itunes.apple.com/kr/app/%EC%99%80%EC%9D%B4%EB%93%9C%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%99%80%EC%9D%B4%ED%8C%8C%EC%9D%B4%EB%8F%84%EC%8B%9C%EB%9D%BD/id1162744579?mt=8"}},[t._v("link")])]),t._v(" "),s("p",{staticClass:"w-100 text-left"},[t._v("\n                (주)와이드모바일의 모바일 사이트의 리뉴얼 보조 업무와 iOS에서의 하이브리드 어플리케이션 개발업무를 "),s("span",{staticClass:"text-info font-italic "},[t._v("17년 4월부터 9월까지 약 6개월")]),t._v(" 가량 진행하였습니다. "),s("span",{staticClass:"text-info font-italic "},[t._v("ASP.NET MVC3, AngularJS, jQuery")]),t._v("등으로 이루어진 웹페이지와 "),s("span",{staticClass:"text-info font-italic "},[t._v("Objective C기반으로 CocoaPod의 라이브러리들을 이용해 하이브리드 어플리케이션 개발 및 배포")]),t._v("가 이루어졌습니다.\n            ")])]),t._v(" "),s("div",{staticClass:"project-content"},[s("h5",{staticClass:"w-100 text-left"},[s("b",{staticClass:"align-middle"},[t._v("와이파이도시락(와이드모바일) 유지보수")]),t._v(" "),s("a",{staticClass:" badge badge-primary",attrs:{target:"_blank",href:"https://www.wifidosirak.com/"}},[t._v("link")])]),t._v(" "),s("p",{staticClass:"w-100 text-left"},[t._v("\n                (주)와이드모바일의 주요사이트들의 유지보수를 보조를 17년 3월 입사 후 10월 퇴사 전까지 "),s("span",{staticClass:"text-info font-italic"},[t._v("약 8개월 가량 진행")]),t._v("하였습니다. "),s("span",{staticClass:"text-info font-italic"},[t._v("ASP.NET 4.0과 MSSQL")]),t._v("을 사용했으며 주로 "),s("span",{staticClass:"text-info font-italic"},[t._v("jQuery와 바닐라 Javascript를 사용")]),t._v("하였습니다. jQueryUI, SwiperJS등 다양한 자바스크립트 라이브러리들을 사용하였습니다.\n            ")])]),t._v(" "),s("div",{staticClass:"project-content"},[s("h5",{staticClass:"w-100 text-left"},[s("b",{staticClass:"align-middle"},[t._v("U-CRM iOS 주소록 업/다운로드 어플리케이션")]),t._v(" "),s("a",{staticClass:" badge badge-primary",attrs:{target:"_blank",href:"https://itunes.apple.com/kr/app/%EC%9C%A0%EB%B9%84%EC%8A%A4-%EC%97%85-%EB%8B%A4%EC%9A%B4/id593774586?mt=8"}},[t._v("link")])]),t._v(" "),s("p",{staticClass:"w-100 text-left"},[t._v("\n                (주)유씨알엠의 고객관리 서비스 U-bis(유비스)의 주소록 업/다운로드 어플리케이션 개발을 13년도 "),s("span",{staticClass:"text-info font-italic"},[t._v("3개월 가량 진행")]),t._v("하였습니다. "),s("span",{staticClass:"text-info font-italic"},[t._v("개발 및 배포를 담당")]),t._v("하였고, Objective C가 사용되었습니다. \n            ")])]),t._v(" "),s("div",{staticClass:"project-content"},[s("h5",{staticClass:"w-100 text-left"},[s("b",{staticClass:"align-middle"},[t._v("U-CRM 유비스의 리뉴얼 및 유지보수")]),t._v(" "),s("a",{staticClass:" badge badge-primary",attrs:{target:"_blank",href:"https://www.u-pds.com/"}},[t._v("link")])]),t._v(" "),s("p",{staticClass:"w-100 text-left"},[t._v("\n                (주)유씨알엠의 고객관리 서비스 u-bis의 유지보수를 13년부터 15년 8월퇴사까지 "),s("span",{staticClass:"text-info font-italic"},[t._v("2년 8개월 가량 진행")]),t._v("하였고, u-bis서비스의 개편 사이트인 "),s("span",{staticClass:"text-info font-italic"},[t._v("u-pds의 리뉴얼 개발 담당")]),t._v("을 이어받아 리뉴얼을 진행하였습니다. 백엔드에는 "),s("span",{staticClass:"text-info font-italic"},[t._v("ASP.NET 4.0와 MSSQL")]),t._v("을 프론트엔드에서는 "),s("span",{staticClass:"text-info font-italic"},[t._v("AngularJS를 메인으로 jQuery등")]),t._v("의 라이브러리를 사용하였습니다. 결제 모듈 등의 기능 설치 또한 담당하였습니다. \n            ")])])])])}]};var F=s("VU/8")({name:"project",data:function(){return{}}},A,!1,function(t){s("U9mS")},"data-v-9f24388a",null).exports,P=s("PJh5"),N=s.n(P),T={name:"TimelineItem",props:["isInverted","badgeColor","badgeIcon","eventTitle","eventContent","eventDate"],data:function(){return{}},computed:{iClock:function(){return j.b},sDateFromCurrent:function(){var t=new N.a(this.eventDate);return t.format("YYYY.MM")+", "+t.fromNow()}},components:{FontAwesomeIcon:h.a}},O={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{class:{"timeline-inverted":t.isInverted}},[s("div",{staticClass:"timeline-badge",class:t.badgeColor},[s("span",{attrs:{title:""}},[s("font-awesome-icon",{attrs:{icon:t.badgeIcon}})],1)]),t._v(" "),s("div",{staticClass:"timeline-panel"},[s("div",{staticClass:"timeline-heading"},[s("h4",{staticClass:"timeline-title"},[t._v("\n                  "+t._s(t.eventTitle)+"\n              ")]),t._v(" "),s("p",[s("small",{staticClass:"text-muted"},[s("font-awesome-icon",{attrs:{icon:t.iClock}}),t._v("\n                      "+t._s(t.sDateFromCurrent)+"\n                  ")],1)])]),t._v(" "),s("div",{staticClass:"timeline-body"},[s("p",[t._v("\n                  "+t._s(t.eventContent)+"\n              ")])])])])},staticRenderFns:[]};var R={name:"TimelineVue",components:{TimelineItemVue:s("VU/8")(T,O,!1,function(t){s("7+Yg")},null,null).exports},computed:{TimelineInfo:function(){var t=[];return t.push({title:"성결대학교 입학",content:"10학번으로 멀티미디어 공학부에 입학하였습니다",date:new Date("2010-03-01"),badgeColor:"",badgeIcon:j.f,isInverted:!1}),t.push({title:"(주)유씨알엠 입사",content:"사원으로 입사하여 주임으로 퇴직하였습니다.\n약 2년 9개월 가량 재직하였습니다",date:new Date("2013-11-01"),badgeColor:"warning",badgeIcon:j.a,isInverted:!0}),t.push({title:"(주)와이드모바일 입사",content:"사원으로 입사후 약 6개월 가량 재직하였습니다",date:new Date("2017-04-01"),badgeColor:"success",badgeIcon:j.c,isInverted:!1}),t.push({title:"삼육대학교 편입",content:"18년부로 컴퓨터 공학 16학번으로 편입하였습니다",date:new Date("2018-02-26"),badgeColor:"primary",badgeIcon:j.f,isInverted:!0}),t.push({title:"교내 경진 대회 입상",content:"삼육대학교 교내 프로그램 개발 경진대회에서 3등으로 입상하였습니다",date:new Date("2018-11-21"),badgeColor:"primary",badgeIcon:j.c,isInverted:!1}),t}}},V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"timeline"},this._l(this.TimelineInfo,function(t){return e("timeline-item-vue",{key:t.id,attrs:{eventTitle:t.title,eventContent:t.content,eventDate:t.date,badgeColor:t.badgeColor,badgeIcon:t.badgeIcon,isInverted:t.isInverted}})}))},staticRenderFns:[]};var B={name:"career",data:function(){return{}},components:{TimelineVue:s("VU/8")(R,V,!1,function(t){s("XsTs")},null,null).exports}},U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"career"}},[e("div",{staticClass:"container"},[this._m(0),this._v(" "),e("timeline-vue")],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-header"},[e("h1",{attrs:{id:"timeline"}},[this._v("Career")]),this._v(" "),e("p",[this._v("이런 경험들을 겪어왔습니다")]),this._v(" "),e("hr")])}]};var q=s("VU/8")(B,U,!1,function(t){s("WdgY")},null,null).exports,D=s("mtWM"),M=s.n(D),H={name:"ContactVue",data:function(){return{mail:"",phone:"",subject:"",content:"",error:[],mailSendingRequested:!1}},computed:{},components:{},methods:{validate:function(){this.error.splice(0,this.error.length);var t=!0;return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(this.mail)||(this.error.push({type:"mail",mesg:"이메일 형식이 올바르지 않습니다. 다시 확인해주세요"}),t=!1),/^\d{3}-\d{3,4}-\d{4}$/.test(this.phone)||(this.error.push({type:"phone",mesg:"휴대전화 형식이 올바르지 않습니다. 다시 확인해주세요"}),t=!1),(""==this.subject||this.subject.length>=300)&&(this.error.push({type:"subject",mesg:"제목 형식이 올바르지 않습니다. 되도록 300자 이내로 입력해주세요"}),t=!1),(""==this.content||this.content.length>=5e3)&&(this.error.push({type:"content",mesg:"내용이 공백입니다. 되도록 5000자 이내로 작성해주세요"}),t=!1),t},submitMail:function(){var t=this;this.mailSendingRequested?alert("메일을 보내는 중입니다. 잠시만 기다려주세요"):this.validate()&&(this.mailSendingRequested=!0,this.$http.post("https://gomja-log-mailer.herokuapp.com/mailer/send",{mail:this.mail,phone:this.phone,subject:this.subject,content:this.content}).then(function(e){console.log(e),200===e.status?alert("메일이 발송됐습니다! 감사합니다 👍"):alert("메일 발송이 실패했습니다..\n에러 : ["+e.data.data.mesg+"]"),t.mailSendingRequested=!1},function(e){alert("메일 발송이 실패했습니다..\n에러 : ["+e.data.data.mesg+"]"),t.mailSendingRequested=!1}))}}},J={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"contact"}},[s("div",{staticClass:"container"},[t._m(0),t._v(" "),s("div",{staticClass:"row contact-forms"},[s("div",{staticClass:"input-group mb-3 col-12 col-md-6 col-lg-6 col-xl-6"},[t._m(1),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.mail,expression:"mail"}],staticClass:"form-control",attrs:{id:"txtEmail",type:"text",placeholder:"이메일 주소를 적어주세요"},domProps:{value:t.mail},on:{input:function(e){e.target.composing||(t.mail=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"input-group mb-3 col-12 col-md-6 col-lg-6 col-xl-6"},[t._m(2),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control",attrs:{id:"txtHP",type:"tel",placeholder:"전화번호를 적어주세요"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"input-group mb-3 col-12"},[t._m(3),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.subject,expression:"subject"}],staticClass:"form-control",attrs:{id:"txtSubject",type:"text",placeholder:"제목을 적어주세요"},domProps:{value:t.subject},on:{input:function(e){e.target.composing||(t.subject=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"mb-3 col-12"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"form-control",attrs:{id:"txtContent",placeholder:"내용을 적어주세요"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"mb-3 col-12"},[t._l(t.error,function(e){return s("div",{key:e.id,staticClass:"alert alert-danger w-100",attrs:{role:"alert"}},[t._v("\n                        "+t._s(e.mesg)+"\n                ")])}),t._v(" "),s("button",{staticClass:"btn btn-lg btn-mint",attrs:{type:"button"},on:{click:function(e){t.submitMail()}}},[t._v("보내기")])],2)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-header"},[e("h1",{attrs:{id:"timeline"}},[this._v("Contact")]),this._v(" "),e("p",[this._v("언제든지 연락주세요")]),this._v(" "),e("hr")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[this._v("Email")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[this._v("Phone")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[this._v("Subject")])])}]};var W={name:"Content",props:[],data:function(){return{}},components:{ContentAbout:y,ContentSkill:z,ContentProject:F,ContentCareer:q,ContentContact:s("VU/8")(H,J,!1,function(t){s("nTfA")},null,null).exports}},L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("content-about"),this._v(" "),e("content-skill"),this._v(" "),e("content-project"),this._v(" "),e("content-career"),this._v(" "),e("content-contact")],1)},staticRenderFns:[]},G=s("VU/8")(W,L,!1,null,null,null).exports;n.a.use(b.a);var Y=new b.a({mode:"history",routes:[{path:"/",name:"content",component:G}]}),X=(s("NOnh"),s("K3J8"),s("qb6w"),s("bm7V")),Q=s.n(X),K=s("NYxO");n.a.use(K.a);var Z=new K.a.Store({state:{links:[{title:"intro",isActive:!0,link:"#intro"},{title:"about",isActive:!1,link:"#about"},{title:"skill",isActive:!1,link:"#skill"},{title:"project",isActive:!1,link:"#project"},{title:"career",isActive:!1,link:"#career"},{title:"contact",isActive:!1,link:"#contact"}]},mutations:{activate:function(t,e){t.links.forEach(function(t){t.title===e.title?t.isActive=!0:t.isActive=!1})}}}),tt=(s("D/PP"),s("D4uH"));n.a.config.productionTip=!1,n.a.use(Q.a),n.a.prototype.$http=M.a,n.a.component("icon",tt.a),new n.a({el:"#app",store:Z,router:Y,components:{App:C},template:"<App/>"})},NqbI:function(t,e){},OCsn:function(t,e){},PcZZ:function(t,e){},U9mS:function(t,e){},WdgY:function(t,e){},XsTs:function(t,e){},ccPJ:function(t,e){},nEvh:function(t,e){},nTfA:function(t,e){},pmkk:function(t,e){},qb6w:function(t,e){},uslO:function(t,e,s){var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function a(t){return s(i(t))}function i(t){var e=n[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.4dba6cbe546301f39345.js.map