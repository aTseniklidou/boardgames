webpackJsonp([2],{35:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function l(){return{type:n,payload:{}}}function u(){var e=arguments.length<=0||void 0===arguments[0]?s:arguments[0],t=arguments[1],a=d[t.type];return a?a(e,t):e}Object.defineProperty(t,"__esModule",{value:!0}),t.ALTER_STATE=void 0;var r=a(75),i=o(r);t.changeTheme=l,t["default"]=u;var n=t.ALTER_STATE="ALTER_STATE",d=(0,i["default"])({},n,function(e,t){return"material"==e.theme?{theme:"bootstrap",toggled:!1}:{theme:"material",toggled:!0}}),s={theme:"material",toggled:!0}},75:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var l=a(111),u=o(l);t["default"]=function(e,t,a){return t in e?(0,u["default"])(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},111:function(e,t,a){e.exports={"default":a(112),__esModule:!0}},112:function(e,t,a){a(114);var o=a(48).Object;e.exports=function(e,t,a){return o.defineProperty(e,t,a)}},114:[1092,93,56,57],315:function(e,t){e.exports={image:"Rules__image___7QqS8",rules:"Rules__rules___KbdzI"}},429:function(e,t,a){e.exports=a.p+"8fe7e913adac15ae05a0b0f652b171d2.jpg"},430:function(e,t,a){e.exports=a.p+"dc7779a9bddef78601b48c89e08d48f3.png"},431:function(e,t,a){e.exports=a.p+"e689888dea28f8a555ec89b0756798a7.png"},443:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.HomeView=void 0;var l=a(16),u=o(l),r=a(1),i=(o(r),a(430)),n=(o(i),a(431)),d=(o(n),a(429)),s=o(d),c=a(315),f=o(c),m=a(25),p=o(m),h=a(445),v=(0,u["default"])("h2",{},void 0,"Rules of Randix."),g=(0,u["default"])("a",{href:"https://en.wikipedia.org/wiki/TacTix",target:"_blank"},void 0,(0,u["default"])("strong",{},void 0," here")),y=t.HomeView=function(){return(0,u["default"])("div",{},void 0,v,(0,u["default"])("img",{alt:"Game Image",className:f["default"].image,src:s["default"]}),(0,u["default"])("p",{className:f["default"].rules},void 0,"Randix is a a two-player game, where players take turns removing pieces from the board. The goal is to force the other player to remove the last piece. On your turn you may remove as many sequentially ",(0,u["default"])("span",{},void 0,(0,u["default"])(p["default"],{zDepth:5,circle:!0,style:h.styles.marble}))," as you like either horizontally or vertically. You must remove at least one piece on your turn and as many as you want from that row or column (but not both) unless you encounter a ",(0,u["default"])("span",{},void 0,(0,u["default"])(p["default"],{zDepth:5,circle:!1,style:h.styles.obstacle}))," that blocks your path."),(0,u["default"])("p",{className:f["default"].rules},void 0,"Click and drag your mouse to select the pieces you want to remove."),(0,u["default"])("p",{className:f["default"].rules},void 0,"Randix is a variation of the popular computational game TacTix played in a NxN board. In this variation however, pieces are placed randomly on the board. There are also obstacles blocking the path preventing players from cutting a whole row or column. You can read more about the original game (now in the public domain) ",g,"."))};t["default"]=y},444:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.HomeView=void 0;var l=a(16),u=o(l),r=a(1),i=(o(r),a(430)),n=o(i),d=a(431),s=o(d),c=a(429),f=o(c),m=a(315),p=o(m),h=(0,u["default"])("h2",{},void 0,"Rules of Randix."),v=(0,u["default"])("span",{},void 0,(0,u["default"])("img",{alt:"pieces",src:n["default"]})),g=(0,u["default"])("span",{},void 0,(0,u["default"])("img",{alt:"stone",src:s["default"]})),y=(0,u["default"])("a",{href:"https://en.wikipedia.org/wiki/TacTix",target:"_blank"},void 0,(0,u["default"])("strong",{},void 0," here")),b=t.HomeView=function(){return(0,u["default"])("div",{},void 0,h,(0,u["default"])("img",{alt:"Game Image",className:p["default"].image,src:f["default"]}),(0,u["default"])("p",{className:p["default"].rules},void 0,"Randix is a a two-player game, where players take turns removing pieces from the board. The goal is to force the other player to remove the last piece. On your turn you may remove as many sequentially ",v," as you like either horizontally or vertically. You must remove at least one piece on your turn and as many as you want from that row or column (but not both) unless you encounter a ",g," that blocks your path."),(0,u["default"])("p",{className:p["default"].rules},void 0,"Click and drag your mouse to select the pieces you want to remove."),(0,u["default"])("p",{className:p["default"].rules},void 0,"Randix is a variation of the popular computational game TacTix played in a NxN board. In this variation however, pieces are placed randomly on the board. There are also obstacles blocking the path preventing players from cutting a whole row or column. You can read more about the original game (now in the public domain) ",y,"."))};t["default"]=b},445:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.styles={marble:{backgroundColor:"#E0E0E0",height:50,width:50,textAlign:"center",display:"inline-block"},obstacle:{backgroundColor:"#A1887F",height:50,width:50,textAlign:"center",display:"inline-block"}}},446:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.RulesOld=t.Rules=void 0;var l=a(443),u=o(l),r=a(444),i=o(r);t.Rules=u["default"],t.RulesOld=i["default"]},461:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.HomeView=void 0;var l=a(16),u=o(l),r=a(1),i=(o(r),a(446)),n=a(125),d=(0,u["default"])(i.Rules,{}),s=(0,u["default"])(i.RulesOld,{}),c=t.HomeView=function(e){var t=e.changeTheme,a=e.view;return(0,u["default"])("div",{},void 0,(0,u["default"])(n.Toggle,{label:"Switch View",onToggle:t,toggled:a.toggled}),"material"==a.theme?d:s)};t["default"]=c},462:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HomeView=void 0;var o=a(40),l=a(35),u=a(461),r={changeTheme:l.changeTheme},i=function(e){return{view:e.view}};t.HomeView=(0,o.connect)(i,r)(u.HomeView)}});