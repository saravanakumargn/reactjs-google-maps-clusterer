(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{212:function(e,a,t){e.exports=t(549)},217:function(e,a,t){},421:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},422:function(e,a,t){},549:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(23),o=t.n(c),s=(t(217),t(201)),i=t(202),l=t(203),u=t(210),d=t(204),m=t(211),g=t(208),b=t.n(g),h=t(87),f=t(206),p=t.n(f),v=(t(377),t(209)),k=t.n(v),w=t(207),E=t.n(w),C=t(38),j=t.n(C),y=(t(379),t(58)),O=(t(421),t(422),Object(h.a)(Object(h.c)({googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyARtVW-A41AQRDz0Zm9WAva78ZgV5TAARQ&v=3.exp&libraries=geometry,drawing,places",loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"400px"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})}),Object(h.b)({onMarkerClustererClick:function(){return function(e){var a=e.getMarkers();console.log("Current clicked markers length: ".concat(a.length)),console.log(a)}}}),y.withScriptjs,y.withGoogleMap)(function(e){return r.a.createElement(y.GoogleMap,{defaultZoom:3,defaultCenter:{lat:25.0391667,lng:121.525}},r.a.createElement(p.a,{onClick:e.onMarkerClustererClick,averageCenter:!0,enableRetinaIcons:!0,gridSize:60},e.markers.map(function(e){return r.a.createElement(y.Marker,{key:e.id,position:{lat:parseFloat(e.latitude),lng:parseFloat(e.longitude)}})})))})),A=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={numberCount:100,isLoading:!1},t.onChange=function(){t.state.isLoading||t.setState({isLoading:!0,markers:[]},function(){var e="";switch(t.state.numberCount){case 100:e="https://gist.githubusercontent.com/saravanakumargn/416de2c54af114c54f1cca8d161b5a39/raw/215034acca7f3d8be0ecd77ad6d2a2a2826e4545/data_100.json";break;case 500:e="https://gist.githubusercontent.com/saravanakumargn/a3a6f67f0fad2dbd310a67dad9edf163/raw/03f1e3561a734d7b55bbd7888c7749bbb02258a5/data_500.json";break;case 1e3:e="https://gist.githubusercontent.com/saravanakumargn/f0aa9985935504c70dfc4f11dea3a0e0/raw/8e495c6c1d0e9b7ecf9904b60d26a9e993c5e840/data_1000.json";break;case 2e3:e="https://gist.githubusercontent.com/saravanakumargn/98e4657b58a400f653eb53b0cc3e905a/raw/8affea8c43e177f66aa179ba1329d477551ff2e4/data_2000.json";break;case 4e3:e="https://gist.githubusercontent.com/saravanakumargn/1525eda6e8cc33c2ef6dc5dde9a20347/raw/20b2ccb75caffdebdcc9c2184263ecd599501b1d/data_4000.json";break;case 6e3:e="https://gist.githubusercontent.com/saravanakumargn/1fa7121c3a8ca53d4117abde5e03595e/raw/8383068132b9a27e649e945bf40a62a5bcfc347c/data_6000.json";break;default:e="https://gist.githubusercontent.com/saravanakumargn/416de2c54af114c54f1cca8d161b5a39/raw/215034acca7f3d8be0ecd77ad6d2a2a2826e4545/data_100.json"}fetch(e).then(function(e){return e.json()}).then(function(e){console.log(e),t.setState({markers:e,isLoading:!1})})})},t.handleChange=function(e){return function(a){t.setState(Object(s.a)({},e,a.target.value))}},t.handleChange=function(e){t.setState({numberCount:e.target.value})},t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"componentWillMount",value:function(){this.setState({markers:[]})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(O,{markers:this.state.markers}),r.a.createElement("div",{className:"controls"},r.a.createElement(E.a,{value:this.state.numberCount,onChange:this.handleChange,inputProps:{name:"age",id:"age-simple"}},r.a.createElement(j.a,{value:100},"100"),r.a.createElement(j.a,{value:500},"500"),r.a.createElement(j.a,{value:1e3},"1000"),r.a.createElement(j.a,{value:2e3},"2000"),r.a.createElement(j.a,{value:4e3},"4000"),r.a.createElement(j.a,{value:6e3},"6000")),r.a.createElement("div",{className:"wrapper"},r.a.createElement(b.a,{variant:"contained",color:"primary",disabled:this.state.isLoading,onClick:function(){return e.onChange()}},"Generate"),this.state.isLoading&&r.a.createElement(k.a,{size:24,className:"buttonProgress"}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[212,2,1]]]);
//# sourceMappingURL=main.b0296d5e.chunk.js.map