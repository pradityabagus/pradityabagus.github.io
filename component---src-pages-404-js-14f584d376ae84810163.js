(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{137:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(146);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOPE"),r.a.createElement("p",null,"Nothing here..."))}},142:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),u=n.n(i),o=n(141),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var l=n(143),d=n.n(l);n.d(t,"PageRenderer",function(){return d.a});var s=n(33);n.d(t,"parsePath",function(){return s.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},143:function(e,t,n){var a;e.exports=(a=n(145))&&a.default||a},144:function(e){e.exports={data:{site:{siteMetadata:{title:"Hi there! I'm adit"},buildTimeZone:"Wed, 24 Oct 2018 06:13 PM"}}}},145:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),u=n.n(i),o=n(49),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=l},146:function(e,t,n){"use strict";var a=n(144),r=n(0),i=n.n(r),u=n(4),o=n.n(u),c=n(147),l=n.n(c),d=n(142),s=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"#e87d24",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0,color:"white"}},t)))},m=n(148),p=n.n(m),f=n(149),h=n.n(f);new p.a(h.a).injectStyles();var g=function(e){var t=e.children;return i.a.createElement(d.StaticQuery,{query:"2035816732",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Hello there, this is my personal website."}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(s,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t,i.a.createElement("div",{style:{margin:"60px 10px auto"}},"Updated on: ",e.site.buildTimeZone)),i.a.createElement("div",null))},data:a})};g.propTypes={children:o.a.node.isRequired};t.a=g}}]);
//# sourceMappingURL=component---src-pages-404-js-14f584d376ae84810163.js.map