(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,n,t){},QfWi:function(e,n,t){"use strict";t.r(n);t("L1EO");var a={searchForm:document.querySelector("#search-form"),photosGallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-more-btn")},o=t("tKTQ"),l=t.n(o);var r=function(e){var n=l()(e);a.photosGallery.insertAdjacentHTML("beforeend",n)},s=(t("JBxO"),t("FdtR"),{page:1,searchQuery:"",fetchPhotos:function(){var e=this,n="https://pixabay.com/api/?image_type=photo&orientation=horizontal&q="+this.query+"&page="+this.page+"&per_page=12&key=19732926-c388afddba2de31b45aabc7bd";return fetch(n).then((function(e){return e.json()})).then((function(n){var t=n.hits;return e.incrementPage(),t}))},get query(){return this.searchQuery},set query(e){this.searchQuery=e},incrementPage:function(){this.page+=1},resetPage:function(){this.page=1}}),c=(t("bzha"),t("zrP5"),t("QJ3N"));function i(e,n){var t=Object(c.alert)({type:""+n,text:""+e,mode:"light",delay:2e3,sticker:!1,maxTextHeight:null,addClass:"notification"});t.on("click",(function(){t.close()}))}var u={showSuccessMessage:function(){i("Photos uploaded. To get more, click 'Load more' button","success")},showErrorMessage:function(){i("No matches found. Please specify your query","error")},showInfoMessage:function(){i("No more matches found","info")}},d=(t("PzF0"),t("dcBu"));var m=function(e){var n=e.target.nodeName;if("IMG"===n||"BUTTON"===n){var t=e.target.dataset.source;d.create('<img src="'+t+'">').show()}};function h(){a.loadMoreBtn.classList.add("is-hidden"),s.fetchPhotos().then((function(e){""===a.photosGallery.innerHTML||0!==e.length?0!==e.length?(r(e),u.showSuccessMessage(),a.loadMoreBtn.classList.remove("is-hidden"),scrollTo({top:document.documentElement.offsetHeight,behavior:"smooth"})):u.showErrorMessage():u.showInfoMessage()}))}a.searchForm.addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget;s.query=n.elements.query.value,a.photosGallery.innerHTML="",s.resetPage(),h(),n.reset()})),a.loadMoreBtn.addEventListener("click",h),a.photosGallery.addEventListener("click",m)},tKTQ:function(e,n,t){var a=t("mp5j");e.exports=(a.default||a).template({1:function(e,n,t,a,o){var l,r=null!=n?n:e.nullContext||{},s=e.hooks.helperMissing,c="function",i=e.escapeExpression,u=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<li class="photo-card-item col">\r\n    <div class="photo-card card h-100 border-success justify-content-end">\r\n        <img src="'+i(typeof(l=null!=(l=u(t,"webformatURL")||(null!=n?u(n,"webformatURL"):n))?l:s)===c?l.call(r,{name:"webformatURL",hash:{},data:o,loc:{start:{line:4,column:18},end:{line:4,column:34}}}):l)+'" class="card-img" alt="'+i(typeof(l=null!=(l=u(t,"tags")||(null!=n?u(n,"tags"):n))?l:s)===c?l.call(r,{name:"tags",hash:{},data:o,loc:{start:{line:4,column:58},end:{line:4,column:66}}}):l)+'" data-source="'+i(typeof(l=null!=(l=u(t,"largeImageURL")||(null!=n?u(n,"largeImageURL"):n))?l:s)===c?l.call(r,{name:"largeImageURL",hash:{},data:o,loc:{start:{line:4,column:81},end:{line:4,column:98}}}):l)+'" />\r\n        <div class="stats card-body d-flex justify-content-around align-items-end">\r\n            <p class="stats-item card-text">\r\n                <i class="material-icons">thumb_up</i>\r\n                '+i(typeof(l=null!=(l=u(t,"likes")||(null!=n?u(n,"likes"):n))?l:s)===c?l.call(r,{name:"likes",hash:{},data:o,loc:{start:{line:8,column:16},end:{line:8,column:25}}}):l)+'\r\n            </p>\r\n            <p class="stats-item card-text">\r\n                <i class="material-icons">visibility</i>\r\n                '+i(typeof(l=null!=(l=u(t,"views")||(null!=n?u(n,"views"):n))?l:s)===c?l.call(r,{name:"views",hash:{},data:o,loc:{start:{line:12,column:16},end:{line:12,column:25}}}):l)+'\r\n            </p>\r\n            <p class="stats-item card-text">\r\n                <i class="material-icons">comment</i>\r\n                '+i(typeof(l=null!=(l=u(t,"comments")||(null!=n?u(n,"comments"):n))?l:s)===c?l.call(r,{name:"comments",hash:{},data:o,loc:{start:{line:16,column:16},end:{line:16,column:28}}}):l)+'\r\n            </p>\r\n            <p class="stats-item card-text">\r\n                <i class="material-icons">cloud_download</i>\r\n                '+i(typeof(l=null!=(l=u(t,"downloads")||(null!=n?u(n,"downloads"):n))?l:s)===c?l.call(r,{name:"downloads",hash:{},data:o,loc:{start:{line:20,column:16},end:{line:20,column:29}}}):l)+'\r\n            </p>\r\n        </div>\r\n        <button type="button" class="btn btn-secondary large-photo-btn" data-source=\''+i(typeof(l=null!=(l=u(t,"largeImageURL")||(null!=n?u(n,"largeImageURL"):n))?l:s)===c?l.call(r,{name:"largeImageURL",hash:{},data:o,loc:{start:{line:23,column:85},end:{line:23,column:102}}}):l)+"'>View full\r\n            picture</button>\r\n    </div>\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,a,o){var l;return null!=(l=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:1,column:0},end:{line:27,column:9}}}))?l:""},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.c5162ebffced39bdcfcd.js.map