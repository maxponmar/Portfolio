(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(1),c=a.n(i),n=a(3),s=a.n(n),o=(a(8),a(9),a(10),a(11),a(12),a(0));var l=function(e){var t=e.title,a=e.link;return Object(o.jsx)("ul",{className:"navigation__nav-menu--list",children:Object(o.jsx)("li",{className:"navigation__nav-menu--item",children:Object(o.jsx)("a",{href:a,className:"navigation__nav-menu--link",children:t})})})};var r=function(e){var t=e.title;return Object(o.jsx)("header",{className:"header",children:Object(o.jsxs)("nav",{className:"navigation",children:[Object(o.jsx)("div",{className:"navigation__logo-box",children:Object(o.jsx)("a",{href:"#",className:"navigation__logo-link",children:Object(o.jsx)("h1",{children:t})})}),Object(o.jsx)("input",{type:"checkbox",className:"navigation__nav--checkbox",id:"navi-toggle"}),Object(o.jsx)("label",{htmlFor:"navi-toggle",className:"navigation__nav--button",children:Object(o.jsx)("span",{className:"navigation__nav--icon",children:"\xa0"})}),Object(o.jsx)("div",{className:"navigation__nav-menu",children:[{title:"Home",link:"#"},{title:"About",link:"#about"},{title:"Skills",link:"#skills"},{title:"Projects",link:"#projects"},{title:"Contact",link:"#contact"}].map((function(e){return Object(o.jsx)(l,{title:e.title,link:e.link},e.title)}))})]})})},j=(a(14),a(15),function(e){var t,a,i=e.title.toLowerCase();return Object(o.jsxs)("section",{className:i+" section",id:i,children:[(t=e.title,a=e.subtitle,t&&a?Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"section__subtitle",children:a}),Object(o.jsx)("h2",{className:"section__title",children:t})]}):Object(o.jsx)("div",{})),e.children]})}),m=(a(16),function(e){var t=e.image,a=e.name;return Object(o.jsx)("div",{className:"home__img",children:Object(o.jsx)("img",{src:t,alt:a})})}),d=(a(17),a(18),function(e){var t=e.title,a=e.link;return Object(o.jsx)("div",{className:"button",children:Object(o.jsx)("a",{href:a,children:t})})}),b=function(e){var t=e.name,a=e.description;return Object(o.jsxs)("div",{className:"home__presentation",children:[Object(o.jsx)("h1",{className:"home__presentation--title",children:t}),Object(o.jsx)("p",{className:"home__presentation--description",children:a}),Object(o.jsx)(d,{title:"Contact",link:"#contact"})]})},u=function(e){var t=e.name,a=e.image,i=e.description;return Object(o.jsxs)(j,{title:"home",children:[Object(o.jsx)(m,{name:t,image:a}),Object(o.jsx)(b,{name:t,description:i})]})},p=(a(19),a(20),function(e){var t=e.aboutMe;return Object(o.jsx)("div",{className:"about__data",children:Object(o.jsx)("p",{className:"about__data--description",children:t})})}),g=(a(21),function(e){var t=e.image,a=e.name;return Object(o.jsx)("img",{src:t,alt:a,className:"about__img"})}),h=(a(22),a(23),function(e){return Object(o.jsxs)("div",{className:"about__information--data",children:[Object(o.jsx)("img",{src:e.icon,alt:"User",className:"about__information--icon"}),Object(o.jsx)("span",{children:e.data})]})}),x=a.p+"static/media/user.5438090f.svg",v=a.p+"static/media/envelop.77e89fc7.svg",f=a.p+"static/media/github.a97474da.svg",O=function(e){var t=e.name,a=e.email,i=e.github,c=[{icon:x,data:t},{icon:v,data:a},{icon:f,data:i}];return Object(o.jsxs)("div",{className:"about__information",children:[Object(o.jsx)("h3",{className:"about__information--title",children:"Information"}),c.map((function(e,t){return Object(o.jsx)(h,{icon:e.icon,data:e.data},t)}))]})},_=function(e){var t=e.profile;return Object(o.jsx)(j,{title:"About",subtitle:"My Intro",children:Object(o.jsxs)("div",{className:"about__container",children:[Object(o.jsx)(p,{aboutMe:t.aboutMe}),Object(o.jsx)(g,{image:t.aboutImage,name:t.name}),Object(o.jsx)(O,{name:t.name,email:t.email,github:t.github})]})})},k=(a(24),a(25),function(e){var t=e.skill,a={width:t.percentage+"%"};return Object(o.jsxs)("div",{className:"skills__data",children:[Object(o.jsx)("img",{src:t.icon,alt:t.alt,className:"skills__data--icon"}),Object(o.jsx)("span",{className:"skills__data--name",children:t.name}),Object(o.jsxs)("span",{className:"skills__data--percentage",children:[t.percentage,"%"]}),Object(o.jsx)("span",{className:"skills__data--bar",style:a})]})}),N=(a(26),function(e){var t=e.title,a=e.skills;return Object(o.jsxs)("div",{className:"skills__category",children:[Object(o.jsx)("h3",{className:"skills__category--title",children:t}),a.map((function(e){return Object(o.jsx)(k,{skill:e})}))]})}),S=a.p+"static/media/profile.807bfbd6.webp",M=a.p+"static/media/description.7b3ec74c.webp",y=a.p+"static/media/html5.62320a76.svg",C=a.p+"static/media/css3.87877734.svg",P=a.p+"static/media/javascript.f0490f94.svg",w=a.p+"static/media/angular.299e817a.svg",I=a.p+"static/media/react.2c3ab836.svg",L=a.p+"static/media/vue-dot-js.84b916a5.svg",J=a.p+"static/media/python.4da54d06.svg",A=a.p+"static/media/java.145e5764.svg",B=a.p+"static/media/php.fb046a2a.svg",D=a.p+"static/media/node-dot-js.187c948b.svg",F=a.p+"static/media/microsoft.e4b6be2c.svg",H=a.p+"static/media/django.b18d181c.svg",Q=a.p+"static/media/laravel.c9908ede.svg",T=a.p+"static/media/mysql.c3213cf7.svg",q=a.p+"static/media/postgresql.74bdbade.svg",E=a.p+"static/media/mongodb.daaa6303.svg",G=a.p+"static/media/MecatronicaFromScratch.3af0d74e.webp",z=a.p+"static/media/NumericalMethods.c8e5fa48.webp",R=a.p+"static/media/ScientificMolding.c82ddaba.webp",V=a.p+"static/media/BooksAPI.ae3f4c13.webp",W={name:"Maximiliano Ponce Marquez",description:"Mechatronics Engineer & Web Developer",email:"maxponce.marquez@gmail.com",image:S,aboutMe:"I am a mechatronics engineer student from Tecnol\xf3gico Nacional de M\xe9xico - Instituto Tecnol\xf3gico de Nogales. I love programming, reading and videogames.",aboutImage:M,github:"maxponmar"},U=[{name:"HTML",icon:y,alt:"HTML5",percentage:95},{name:"CSS",icon:C,alt:"CSS3",percentage:95},{name:"Javascript",icon:P,alt:"JS",percentage:95},{name:"Angular",icon:w,alt:"Angular",percentage:90},{name:"React",icon:I,alt:"React",percentage:90},{name:"VueJS",icon:L,alt:"VueJS",percentage:70}],Y=[{name:"C#",icon:C,alt:"C#",percentage:95},{name:"Python",icon:J,alt:"Python",percentage:95},{name:"Java",icon:A,alt:"Java",percentage:95},{name:"PHP",icon:B,alt:"PHP",percentage:50},{name:"NodeJS",icon:D,alt:"NodeJS",percentage:90},{name:".Net Core",icon:F,alt:".Net Core",percentage:90},{name:"Django",icon:H,alt:"Django",percentage:80},{name:"Laravel",icon:Q,alt:"Laravel",percentage:50}],K=[{name:"SQL Server",icon:F,alt:"SQL Server",percentage:90},{name:"MySQL",icon:T,alt:"MySQL",percentage:90},{name:"PostgreSQL",icon:q,alt:"PostgreSQL",percentage:90},{name:"MongoDB",icon:E,alt:"MongoDB",percentage:90}],X=[{title:"Mecatronica From Scratch",link:"https://maxponmar.github.io/MecatronicaFromScratch",image:G},{title:"Scientific Molding",link:"https://maxponmar.github.io/ScientificMolding",image:R},{title:"Numerical Methods C#",link:"https://github.com/maxponmar/NumericalMethodsCsharp",image:z},{title:"BookStore API",link:"https://github.com/maxponmar/BookStore-API",image:V}],Z=function(){return Object(o.jsx)(j,{title:"Skills",subtitle:"Why Choose Me",children:Object(o.jsxs)("div",{className:"skills__container",children:[Object(o.jsx)(N,{title:"Frontend",skills:U},"Frontend"),Object(o.jsx)(N,{title:"Backend",skills:Y},"Backend"),Object(o.jsx)(N,{title:"Databases",skills:K},"Database")]})})},$=(a(27),a(28),function(e){var t=e.title,a=e.image,i=e.link;return Object(o.jsxs)("div",{class:"projects__card",children:[Object(o.jsx)("img",{src:a,alt:t,class:"projects__card--img"}),Object(o.jsxs)("div",{class:"projects__card--data",children:[Object(o.jsx)("a",{href:i,class:"projects__card--link",children:Object(o.jsx)("img",{src:f,alt:"Github",class:"projects__card--icon"})}),Object(o.jsx)("span",{class:"projects__card--title",children:t})]})]})}),ee=function(){return Object(o.jsx)(j,{title:"Projects",subtitle:"My Portfolio",children:Object(o.jsx)("div",{class:"projects__container",children:Object(o.jsx)("div",{class:"projects__cards-container",children:X.map((function(e){return Object(o.jsx)($,{title:e.title,link:e.link,image:e.image})}))})})})},te=(a(29),a(30),function(e){var t=e.profile;return Object(o.jsxs)("div",{class:"contact__card",children:[Object(o.jsx)("img",{src:t.image,alt:t.name}),Object(o.jsx)("h3",{children:t.name}),Object(o.jsx)("p",{children:t.email}),Object(o.jsxs)("a",{href:"mailto:"+t.email+"?subject=Contact from portfolio&body=Hello, "+t.name,class:"button",children:[Object(o.jsx)("img",{src:v,alt:"",class:"contact__card--icon"}),"Send Email"]})]})}),ae=function(e){var t=e.profile;return Object(o.jsx)(j,{title:"Contact",subtitle:"Get in touch",children:Object(o.jsx)("div",{class:"contact__container",children:Object(o.jsx)(te,{profile:t})})})},ie=(a(31),function(e){var t=e.name,a=(new Date).getFullYear();return Object(o.jsx)("footer",{class:"footer",children:Object(o.jsxs)("div",{class:"footer__container",children:[Object(o.jsx)("h2",{class:"footer--title",children:t}),Object(o.jsx)("p",{class:"footer--description",children:"This is my personal website, welcome."}),Object(o.jsx)("div",{class:"footer--social",children:Object(o.jsx)("a",{href:"https://github.com/maxponmar",class:"footer--link",children:Object(o.jsx)("img",{src:f,alt:"Github",class:"footer--icon"})})}),Object(o.jsxs)("p",{class:"footer--copy",children:["\xa9 ",a," Copyright all rights reserved"]})]})})});var ce=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(r,{title:W.name}),Object(o.jsxs)("main",{className:"main",children:[Object(o.jsx)(u,{name:W.name,description:W.description,image:W.image}),Object(o.jsx)(_,{profile:W}),Object(o.jsx)(Z,{}),Object(o.jsx)(ee,{}),Object(o.jsx)(ae,{profile:W})]}),Object(o.jsx)(ie,{name:W.name})]})};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(ce,{})}),document.getElementById("root"))}],[[32,1,2]]]);
//# sourceMappingURL=main.f612096e.chunk.js.map