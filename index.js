import{a as d,S as f,i}from"./assets/vendor-CaRFiM55.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="51708087-f8f02a96469b9e03eb4d8b8de",m="https://pixabay.com/api/";function h(s){return d.get(m,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader");let y=new f(".gallery a");function g(s){const o=s.map(r=>`
    <a class="gallery-item" href="${r.largeImageURL}">
      <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy">
      <div class="info">
        <p>Likes: ${r.likes}</p>
        <p>Views: ${r.views}</p>
        <p>Comments: ${r.comments}</p>
        <p>Downloads: ${r.downloads}</p>
      </div>
    </a>
  `).join("");l.insertAdjacentHTML("beforeend",o),y.refresh()}function L(){l.innerHTML=""}function b(){u.classList.remove("hidden")}function w(){u.classList.add("hidden")}const a=document.querySelector(".form"),v=a.querySelector("[name='search-text']");a.addEventListener("submit",s=>{s.preventDefault();const o=v.value.trim();if(!o){i.error({message:"Please enter a search term",position:"topRight"});return}L(),b(),h(o).then(r=>{if(r.hits.length===0){i.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(r.hits)}).catch(r=>{i.error({message:"An error occurred while fetching images",position:"topRight"}),console.error(r)}).finally(()=>{w(),a.reset()})});
//# sourceMappingURL=index.js.map
