(function(){"use strict";var t={3640:function(t,e,a){var i=a(8935),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container",staticStyle:{"margin-top":"6rem"}},[a("div",{staticClass:"d-flex justify-content-between border-bottom pb-4",staticStyle:{"border-bottom":"2px solid rgb(105 126 161 / 36%)"}},[a("div",{staticClass:"d-flex align-items-center"},[a("div",{staticStyle:{width:"3rem"}},[a("my-logo")],1),a("h4",{staticClass:"text-white mx-3 user-select-none"},[t._v("Lekker weertje hè")])]),t._m(0),a("div",{staticClass:"text-white user-select-none"},[a("span",{class:["metric"===t.unit?"unit-active":"unit-inactive"],on:{click:function(e){return t.storeUnitPreference("metric")}}},[t._v("C °")]),t._v(" | "),a("span",{class:["imperial"===t.unit?"unit-active":"unit-inactive"],on:{click:function(e){return t.storeUnitPreference("imperial")}}},[t._v("F °")])])]),a("div",{staticClass:"mt-5"},[a("div",{staticClass:"mb-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.cityName,expression:"cityName"}],staticClass:"cityInput",attrs:{placeholder:"Voer een stad in..."},domProps:{value:t.cityName},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addCity.apply(null,arguments)},input:function(e){e.target.composing||(t.cityName=e.target.value)}}}),a("button",{staticClass:"citySubmit",on:{click:t.addCity}},[t._v(" Toevoegen ")])]),a("transition-group",{attrs:{name:"list-complete"}},t._l(t.weatherCasts,(function(e,i){return a("weather-card",{key:"weather-card-"+i,attrs:{weather:e,"weather-index":i},on:{remove:t.deleteCity}})})),1)],1)])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{position:"absolute",bottom:"0",right:"0","z-index":"-1"}},[a("img",{attrs:{src:"/bg-blur-2.png"}})])}],s=a(6166),l=a.n(s),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weather-card"},[a("div",{staticClass:"w-show-more"},[a("div",{staticClass:"w-show-more-icon",class:{"rotate-up":t.displayMore},on:{click:function(e){t.displayMore=!t.displayMore}}},[a("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 9l-7 7-7-7"}})])])]),a("div",{staticClass:"w-icon-wrap"},[a("div",{staticClass:"w-icon"},[a("weather-icon",{attrs:{weather:t.weather}})],1)]),a("div",{staticClass:"w-more-info",class:{"show-with-transition":t.displayMore}},[a("h1",{staticClass:"text-white"},[t._v("Insert feature")])]),a("div",{staticClass:"w-info",class:{"hide-with-transition":t.displayMore}},[a("div",{staticClass:"d-flex justify-content-between"},[a("h1",{staticClass:"text-white"},[t._v(" "+t._s(t.weather.name)+" ")]),a("div",{staticClass:"w-icon-close",on:{click:t.remove}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24","stroke-width":"2"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"}})])])]),a("p",{staticClass:"text-capitalize fs-5",staticStyle:{color:"rgb(255 255 255 / 50%)"}},[t._v(" "+t._s(t.weather.weather[0].description)+" ")]),a("p",{staticClass:"fs-2 text-white"},[t._v(" "+t._s(t.temperature)+" "),"metric"===t.unit?a("span",[t._v(" ° C ")]):a("span",[t._v(" ° F ")])]),a("p",{staticStyle:{color:"rgb(255 255 255 / 50%)"}},[a("span",[t._v(t._s(t.minTemperature)+" ° ")]),t._v(" / "),a("span",[t._v(t._s(t.maxTemperature)+" °")])])])])},c=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{attrs:{src:t.currentIcon}})])},h=[],d={props:{weather:{type:Object,required:!0}},data(){return{currentIcon:"/weather-icons/05-partial-cloudy-light.png"}},mounted(){this.currentIcon=`/weather-icons/${this.weather.weather[0].icon}.png`}},p=d,f=a(1001),m=(0,f.Z)(p,u,h,!1,null,null,null),v=m.exports,w={components:{WeatherIcon:v},props:{weather:{type:Object,required:!0},weatherIndex:{type:Number,required:!0},unit:{type:String,default:"metric"}},computed:{temperature(){return Math.round(this.weather.main.temp)},minTemperature(){return Math.round(this.weather.main.temp_min)},maxTemperature(){return Math.round(this.weather.main.temp_max)}},data(){return{displayMore:!1}},methods:{remove(){this.$emit("remove",{defaultCityIndex:this.weather.originIndex,weatherCastIndex:this.weatherIndex})}}},y=w,g=(0,f.Z)(y,o,c,!1,null,null,null),C=g.exports,x=function(t,e){var a=e._c;return a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 375 375",version:"1.0"}},[a("defs",[a("clipPath",{attrs:{id:"a"}},[a("path",{attrs:{d:"M12.61 60H175v255H12.61Zm0 0"}})]),a("clipPath",{attrs:{id:"b"}},[a("path",{attrs:{d:"M177 10.84h17V119h-17Zm0 0"}})]),a("clipPath",{attrs:{id:"c"}},[a("path",{attrs:{d:"M177 256h17v108.09h-17Zm0 0"}})]),a("clipPath",{attrs:{id:"d"}},[a("path",{attrs:{d:"M254 179h108.11v17H254Zm0 0"}})])]),a("g",{attrs:{"clip-path":"url(#a)"}},[a("path",{attrs:{fill:"#fff",d:"M153.117 194.105h11.645l-8.239 8.247-12.125.203Zm3.406-21.476 8.239 8.234h-11.645l-8.719-8.433ZM19.238 194.105h30.957l-16.543 16.008c-2.625 2.532-2.703 6.73-.16 9.364 2.543 2.62 6.727 2.703 9.36.156l26.382-25.528h64.84l-9.066 8.774-5.168.086a6.635 6.635 0 0 0-6.512 6.73 6.603 6.603 0 0 0 2.219 4.836 6.566 6.566 0 0 0 1.828 4.946c2.543 2.62 6.734 2.703 9.36.156l3.718-3.598 12.61-.215-45.852 45.883-36.684.613a6.635 6.635 0 0 0-6.511 6.743c.066 3.656 3.023 6.55 6.734 6.503l23-.39-21.89 21.902c-2.59 2.594-2.59 6.785 0 9.363 2.578 2.594 6.769 2.594 9.359 0l21.89-21.902-.394 23.027c-.055 3.657 2.847 6.672 6.5 6.727h.125c3.597 0 6.547-2.89 6.613-6.504l.617-36.719 45.852-45.882-.215 12.617-3.598 3.722a6.644 6.644 0 0 0 .157 9.368 6.564 6.564 0 0 0 4.964 1.828c1.192 1.324 2.895 2.187 4.81 2.219 3.655.09 6.67-2.848 6.726-6.516l.09-5.168 8.765-9.074v-19.055l-8.441 8.727.215-12.133 8.226-8.246V171.5l-8.226-8.234-.215-12.145 8.441 8.738v-19.07l-8.766-9.07-.09-5.168c-.054-3.625-3.015-6.508-6.613-6.508h-.113c-1.926.02-3.617.887-4.809 2.219-.12-.008-.246-.032-.355-.032a6.62 6.62 0 0 0-4.61 1.86c-2.62 2.539-2.687 6.73-.156 9.363l3.598 3.719.215 12.613-45.852-45.87-.617-36.72c-.066-3.62-3.016-6.511-6.613-6.511h-.125c-3.653.066-6.555 3.082-6.5 6.738l.394 23.016L71.22 68.53a6.617 6.617 0 0 0-4.684-1.937 6.6 6.6 0 0 0-4.676 1.937c-2.59 2.594-2.59 6.785 0 9.367L83.75 99.801l-23-.395h-.125c-3.594 0-6.543 2.895-6.61 6.52a6.612 6.612 0 0 0 6.512 6.726l36.684.63 45.852 45.87-12.61-.214-3.719-3.59a6.603 6.603 0 0 0-4.597-1.864 6.578 6.578 0 0 0-4.762 2.024c-1.336 1.379-1.93 3.183-1.828 4.965-1.324 1.187-2.188 2.882-2.219 4.8-.055 3.66 2.86 6.676 6.512 6.727l5.168.094 9.066 8.77h-64.84l-26.382-25.516a6.61 6.61 0 0 0-9.36.16c-2.543 2.62-2.465 6.816.16 9.363l16.543 15.992H19.238a6.63 6.63 0 0 0-6.625 6.63c0 3.655 2.969 6.612 6.625 6.612"}})]),a("g",{attrs:{"clip-path":"url(#b)"}},[a("path",{attrs:{fill:"#fff",d:"M185.586 118.695c-4.637 0-8.395-3.761-8.395-8.402V19.258a8.395 8.395 0 1 1 16.79 0v91.035c0 4.64-3.758 8.402-8.395 8.402"}})]),a("g",{attrs:{"clip-path":"url(#c)"}},[a("path",{attrs:{fill:"#fff",d:"M185.586 364.113c-4.637 0-8.395-3.761-8.395-8.398V264.68c0-4.64 3.758-8.403 8.395-8.403s8.394 3.762 8.394 8.403v91.035c0 4.637-3.757 8.398-8.394 8.398"}})]),a("path",{attrs:{fill:"#fff",d:"M269.656 341.578a8.393 8.393 0 0 1-7.277-4.2L216.89 258.54a8.403 8.403 0 0 1 3.07-11.476 8.391 8.391 0 0 1 11.469 3.074l45.488 78.84c2.316 4.015.941 9.156-3.074 11.472a8.32 8.32 0 0 1-4.188 1.13M331.176 280a8.35 8.35 0 0 1-4.192-1.125l-78.785-45.52a8.396 8.396 0 0 1-3.074-11.472 8.396 8.396 0 0 1 11.473-3.074l78.785 45.515c4.015 2.317 5.39 7.457 3.074 11.477a8.4 8.4 0 0 1-7.281 4.199"}}),a("g",{attrs:{"clip-path":"url(#d)"}},[a("path",{attrs:{fill:"#fff",d:"M353.707 195.887H262.73c-4.636 0-8.394-3.762-8.394-8.403 0-4.636 3.758-8.398 8.394-8.398h90.977c4.637 0 8.395 3.762 8.395 8.398 0 4.641-3.758 8.403-8.395 8.403"}})]),a("path",{attrs:{fill:"#fff",d:"M252.406 157.29a8.391 8.391 0 0 1-7.281-4.2c-2.32-4.02-.945-9.16 3.074-11.477l78.785-45.515a8.395 8.395 0 0 1 11.473 3.074c2.316 4.016.941 9.156-3.074 11.48l-78.785 45.512a8.35 8.35 0 0 1-4.192 1.125M224.152 129.035a8.369 8.369 0 0 1-4.191-1.125 8.403 8.403 0 0 1-3.07-11.476l45.488-78.84a8.393 8.393 0 0 1 11.465-3.074c4.015 2.32 5.39 7.457 3.074 11.476l-45.488 78.836a8.393 8.393 0 0 1-7.278 4.203M233.148 187.484c0 26.29-21.296 47.586-47.566 47.586v-95.18c26.27 0 47.566 21.31 47.566 47.594"}})])},b=[],_={},k=(0,f.Z)(_,x,b,!0,null,null,null),M=k.exports,I={name:"App",components:{WeatherCard:C,MyLogo:M},data(){return{cityData:null,weatherLookUp:null,defaultCities:["Amsterdam"],weatherCasts:[],unit:"metric",cityName:"",errors:[]}},mounted(){let t=JSON.parse(localStorage.getItem("defaultCities"));t&&(this.defaultCities=t);let e=localStorage.getItem("unitPreference");e&&(this.unit=e),this.getDefaultWeather()},methods:{async searchCity(t){return this.cityData=await l().get(`http://api.openweathermap.org/geo/1.0/direct?q=${t}&limit=1&appid=4d1d1428cb00886d5476c104d3ea1b54`)},async getWeatherByLatLon(t,e){return this.weatherLookUp=await l().get(`https://api.openweathermap.org/data/2.5/weather?lat=${t}&lon=${e}&units=${this.unit}&lang=nl&appid=4d1d1428cb00886d5476c104d3ea1b54`)},async getWeatherByCityName(t){try{let e=await this.searchCity(t);return await this.getWeatherByLatLon(e.data[0].lat,e.data[0].lon)}catch(e){this.errors.push(`Could not find city: ${t}`)}},getDefaultWeather(){this.defaultCities.forEach(((t,e)=>{this.addCityToList(t,e)}))},async addCityToList(t,e){try{let a=await this.getWeatherByCityName(t);a.data["originIndex"]=e,this.weatherCasts.push(a.data),this.defaultCities.push(t),this.storeDefaultCitiesInLocalStorage()}catch(a){this.errors.push(`Failed to add city: ${t}  to the list. Please check your input.`)}},addCity(){this.addCityToList(this.cityName),this.cityName=""},storeDefaultCitiesInLocalStorage(){this.defaultCities=[...new Set(this.defaultCities)],localStorage.setItem("defaultCities",JSON.stringify(this.defaultCities))},storeUnitPreference(t){localStorage.setItem("unitPreference",t),window.location.reload()},deleteCity({defaultCityIndex:t,weatherCastIndex:e}){this.defaultCities.splice(t,1),this.weatherCasts.splice(e,1),this.storeDefaultCitiesInLocalStorage()}}},L=I,S=(0,f.Z)(L,r,n,!1,null,null,null),O=S.exports;i.Z.config.productionTip=!1,new i.Z({render:t=>t(O)}).$mount("#app")}},e={};function a(i){var r=e[i];if(void 0!==r)return r.exports;var n=e[i]={exports:{}};return t[i](n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,i,r,n){if(!i){var s=1/0;for(u=0;u<t.length;u++){i=t[u][0],r=t[u][1],n=t[u][2];for(var l=!0,o=0;o<i.length;o++)(!1&n||s>=n)&&Object.keys(a.O).every((function(t){return a.O[t](i[o])}))?i.splice(o--,1):(l=!1,n<s&&(s=n));if(l){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[i,r,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,n,s=i[0],l=i[1],o=i[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(o)var u=o(a)}for(e&&e(i);c<s.length;c++)n=s[c],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(u)},i=self["webpackChunkWeather_app"]=self["webpackChunkWeather_app"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(3640)}));i=a.O(i)})();
//# sourceMappingURL=app.b79f08e2.js.map