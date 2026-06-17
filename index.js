import{S as p,a as m,i as n}from"./assets/vendor-Ciugd6XU.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const c=document.querySelector(".gallery"),l=document.querySelector(".loader-container"),y=new p(".gallery a",{captionsData:"alt",captionDelay:250});function h(a){const r=a.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:s,comments:d,downloads:f})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${i}">
        <img class="gallery-image" src="${o}" alt="${e}" loading="lazy" />
      </a>
      <div class="info-box">
        <p class="info-item">Likes<span>${t}</span></p>
        <p class="info-item">Views<span>${s}</span></p>
        <p class="info-item">Comments<span>${d}</span></p>
        <p class="info-item">Downloads<span>${f}</span></p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",r),y.refresh()}function g(){c.innerHTML=""}function L(){l.classList.remove("is-hidden")}function b(){l.classList.add("is-hidden")}const S="https://pixabay.com/api",v="47550347-a44441999a35f73cd42751acc";function P(a){return m.get(S,{params:{key:v,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(r=>r.data)}const u=document.querySelector(".form");u.addEventListener("submit",$);function $(a){a.preventDefault();const r=a.currentTarget.elements["search-text"].value.trim();r&&(g(),L(),P(r).then(o=>{if(o.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(o.hits)}).catch(o=>{console.error(o),n.error({message:"Sorry, an error occurred. Please try again!",position:"topRight"})}).finally(()=>{b(),u.reset()}))}
//# sourceMappingURL=index.js.map
