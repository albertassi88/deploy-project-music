(this["webpackJsonpproject-musicas"]=this["webpackJsonpproject-musicas"]||[]).push([[0],{23:function(t,e,c){},30:function(t,e,c){},31:function(t,e,c){},32:function(t,e,c){},33:function(t,e,c){},34:function(t,e,c){},35:function(t,e,c){},36:function(t,e,c){"use strict";c.r(e);var n=c(0),s=c.n(n),a=c(16),r=c.n(a),i=c(8),o=c(2),j=Object(n.createContext)(),b=(c(23),c(18)),d=c(1);var u=function(){var t=Object(n.useContext)(j),e=t.hundleInputName,c=t.setLoading;return Object(d.jsx)("div",{className:"container_home",children:Object(d.jsxs)("div",{className:"input_home",children:[Object(d.jsx)("input",{type:"text",placeholder:"O que voc\xea quer ouvir?",onChange:function(t){var n=t.target;return e(n.value.replace(" ",""),c(!0))}}),Object(d.jsx)(i.b,{to:"/artistas",children:Object(d.jsx)(b.a,{})})]})})},l=c(7);c(30);var h=function(){var t=Object(n.useContext)(j).setLoading;function e(){t(!0)}return Object(d.jsx)("header",{className:"Header",children:Object(d.jsxs)("nav",{children:[Object(d.jsx)(i.b,{to:"/",onClick:e,children:"Home"}),Object(d.jsx)(i.b,{to:"/albuns",onClick:e,children:"\xc1lbuns"}),Object(d.jsx)(i.b,{to:"/videos",onClick:e,children:"V\xeddeos"})]})})};c(31);var O=function(){var t=Object(n.useContext)(j).imagemArtista;return Object(d.jsx)("img",{className:"img_capa",src:t,alt:"foto"})};c(32);var x=function(){return Object(d.jsxs)("div",{className:"center",children:[Object(d.jsx)("div",{className:"text",children:"Loading...."}),Object(d.jsx)("div",{className:"ring"})]})};c(33);var m=function(){var t=Object(o.f)(),e=Object(n.useState)([]),c=Object(l.a)(e,2),s=c[0],a=c[1],r=Object(n.useContext)(j),i=r.nameArtista,b=r.setIdArtista,u=r.setImagemArtista,m=r.setLoading,v=r.loading;return Object(n.useEffect)((function(){var t;(t=i,fetch("https://theaudiodb.com/api/v1/json/1/search.php?s=".concat(t)).then((function(t){return t.ok?t.json():Promise.reject(new Error("Api error!"))}))).then((function(t){a(t.artists),b(t.artists[0].idArtist),u(t.artists[0].strArtistBanner),m(!1)})).catch((function(){alert("Artista n\xe3o encontrado!")}))}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)(h,{}),Object(d.jsxs)("div",{className:"container_artistas",children:[v&&Object(d.jsx)(x,{}),s?s.map((function(t,e){return Object(d.jsxs)("div",{className:"box_artistas",children:[Object(d.jsx)(O,{}),Object(d.jsx)("h2",{children:t.strArtist}),Object(d.jsxs)("div",{className:"text_box",children:[Object(d.jsx)("p",{children:t.strBiographyPT}),Object(d.jsx)("img",{className:"img_box",src:t.strArtistFanart,alt:"foto"})]})]},e)})):t.push("/")]})]})};c(34);var v=function(){var t=Object(n.useState)([]),e=Object(l.a)(t,2),c=e[0],s=e[1],a=Object(n.useContext)(j),r=a.nameArtista,i=a.setLoading,o=a.loading;return Object(n.useEffect)((function(){var t;(t=r,fetch("https://theaudiodb.com/api/v1/json/1/discography.php?s=".concat(t)).then((function(t){return t.ok?t.json():Promise.reject(new Error("Api error!"))}))).then((function(t){s(t.album),i(!1)}))}),[]),Object(d.jsxs)("div",{className:"album_center",children:[Object(d.jsx)(h,{}),Object(d.jsx)(O,{}),Object(d.jsx)("h2",{className:"text_album",children:"\xc1lbuns"}),Object(d.jsxs)("div",{className:"container_album",children:[o&&Object(d.jsx)(x,{}),c?c.map((function(t,e){return Object(d.jsxs)("div",{className:"box_album",children:[Object(d.jsx)("h3",{children:"Nome: ".concat(t.strAlbum)}),Object(d.jsx)("h3",{children:"Ano: ".concat(t.intYearReleased)})]},e)})):Object(d.jsx)("h1",{children:"Alb\xfans n\xe3o encontrado!"})]})]})};c(35);var f=function(){var t=Object(n.useState)([]),e=Object(l.a)(t,2),c=e[0],s=e[1],a=Object(n.useContext)(j),r=a.idArtista,i=a.setLoading,o=a.loading;return Object(n.useEffect)((function(){var t;(t=r,fetch("https://theaudiodb.com/api/v1/json/1/mvid.php?i=".concat(t)).then((function(t){return t.ok?t.json():Promise.reject(new Error("Api error!"))}))).then((function(t){s(t.mvids),i(!1)}))}),[]),Object(d.jsxs)("div",{className:"video_center",children:[Object(d.jsx)(h,{}),Object(d.jsx)(O,{}),Object(d.jsxs)("div",{className:"container_video",children:[o&&Object(d.jsx)(x,{}),c?c.map((function(t,e){return Object(d.jsxs)("div",{class:"box_video",children:[Object(d.jsx)("h2",{children:t.strTrack}),Object(d.jsx)("iframe",{src:t.strMusicVid.replace("watch?v=","embed/"),width:"420",title:"video"})]},e)})):Object(d.jsx)("h1",{children:"V\xeddeos n\xe3o encontrado!"})]})]})};var p=function(t){var e=t.children,c=Object(n.useState)(""),s=Object(l.a)(c,2),a=s[0],r=s[1],i=Object(n.useState)(""),o=Object(l.a)(i,2),b=o[0],u=o[1],h=Object(n.useState)(""),O=Object(l.a)(h,2),x=O[0],m=O[1],v=Object(n.useState)(!0),f=Object(l.a)(v,2),p=f[0],g={nameArtista:a,hundleInputName:function(t){r(t)},idArtista:b,setIdArtista:u,setImagemArtista:m,imagemArtista:x,setLoading:f[1],loading:p};return Object(d.jsx)("div",{children:Object(d.jsx)(j.Provider,{value:g,children:e})})};var g=function(){return Object(d.jsx)(i.a,{children:Object(d.jsx)(o.c,{children:Object(d.jsxs)(p,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",component:u}),Object(d.jsx)(o.a,{path:"/artistas",component:m}),Object(d.jsx)(o.a,{path:"/albuns",component:v}),Object(d.jsx)(o.a,{path:"/videos",component:f})]})})})};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.abcda8d9.chunk.js.map