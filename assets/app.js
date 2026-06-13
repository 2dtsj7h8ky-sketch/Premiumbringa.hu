/* =========================================================================
   Premium Bringa — közös logika minden oldalhoz.
   A funkciók elemek megléte szerint indulnak, így ugyanez a fájl minden
   oldalon betölthető (data.js után).
   ========================================================================= */
(function(){
  "use strict";

  /* ---- segédek ---- */
  const huFt = n => Number(n).toLocaleString("hu-HU");
  const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const condClass = a => a && a.toLowerCase() === "újszerű" ? "cond o" : "cond";

  /* Élő képösszeköttetés.
     - mappa megadva: a fotók az assets/kepek/<mappa>/ alól jönnek, sorrendben 1..10.
       A borító az 1.jpg; ha még nincs 1.jpg, automatikusan a 2.jpg-re vált.
     - kep megadva: azt használjuk (felülír mindent).
     - különben: assets/kepek/<id>.jpg.
     Ha egy fájl hiányzik, az <img> eltűnik és marad a textúrás placeholder. */
  const KEPDIR = "assets/kepek";
  const GAL_MAX = 10;
  function bikeKep(b){
    if(b.kep && String(b.kep).trim()) return b.kep;
    if(b.mappa) return `${KEPDIR}/${b.mappa}/1.jpg`;
    return `${KEPDIR}/${b.id}.jpg`;
  }
  function bikeGaleria(b){
    if(Array.isArray(b.kepek) && b.kepek.length) return b.kepek.slice();
    if(b.mappa){ const a=[]; for(let n=1;n<=GAL_MAX;n++) a.push(`${KEPDIR}/${b.mappa}/${n}.jpg`); return a; }
    return [bikeKep(b)];
  }
  /* borító onerror: 1.jpg → 2.jpg → eltűnik (amíg nincs feltöltve az 1.jpg) */
  const coverOnerr = b => b.mappa
    ? `if(this.dataset.fb){this.style.display='none'}else{this.dataset.fb=1;this.src='${KEPDIR}/${b.mappa}/2.jpg'}`
    : `this.style.display='none'`;
  const imgTag = (b, alt) =>
    `<img src="${esc(bikeKep(b))}" alt="${esc(alt)}" loading="lazy" decoding="async" onerror="${coverOnerr(b)}">`;

  /* Hiánytűrő mezők (amíg a hirdetésből nem töltjük az adatot) */
  const arSzoveg = b => (b.ar && Number(b.ar) > 0) ? `${huFt(b.ar)} <small>Ft</small>` : `<small class="ar-soon">Ár: érdeklődj</small>`;
  const condBadge = b => b.allapot ? `<span class="${condClass(b.allapot)}">${esc(b.allapot)}</span>` : "";
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
  const param = key => new URLSearchParams(location.search).get(key);
  const data = (typeof KESZLET !== "undefined") ? KESZLET : [];

  /* ---- termékkártya (showroom + készlet) ---- */
  function bikeCard(b){
    const media = `<span class="bk-wheel"></span><span class="bk-wheel two"></span>`
      + imgTag(b, `${b.model}${b.allapot ? " — "+b.allapot+" állapot" : ""}`);
    const meta = [b.ev, b.meret].filter(Boolean).join(" · ");
    return `
    <a class="bike reveal" href="bringa.html?id=${encodeURIComponent(b.id)}" data-szegmens="${esc(b.szegmens)}" data-allapot="${esc(b.allapot||"")}">
      <div class="img">${media}<span class="cat">${esc(b.kategoria)}</span>${condBadge(b)}</div>
      <div class="bd">
        <h3>${esc(b.model)}</h3>
        <div class="spec">${esc(b.spec || b.kategoria)}</div>
        <div class="foot"><span class="price">${arSzoveg(b)}</span><span class="yr">${esc(meta)}</span></div>
      </div>
    </a>`;
  }

  /* ---- fade-in scrollra ---- */
  let io;
  function observeReveals(){
    if(!("IntersectionObserver" in window)){ $$(".reveal").forEach(el => el.classList.add("in")); return; }
    if(!io){
      io = new IntersectionObserver(es => es.forEach(en => {
        if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); }
      }), { threshold:.12, rootMargin:"0px 0px -8% 0px" });
    }
    $$(".reveal:not(.in)").forEach(el => io.observe(el));
  }

  /* ---- NAV: mobilmenü ---- */
  function initNav(){
    const burger = $(".burger"), menu = $("#menu");
    if(!burger || !menu) return;
    const close = () => { menu.classList.remove("open"); burger.setAttribute("aria-expanded","false"); };
    burger.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.addEventListener("click", e => { if(e.target.closest("a")) close(); });
    document.addEventListener("keydown", e => { if(e.key === "Escape") close(); });
  }

  /* ---- Logó-jelvény (bringa-jel) a fejléc szóvédjegye mellé ---- */
  const BRINGA_SVG = `<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
    <g fill="none" stroke="#D6D4D0" stroke-width="3.4" stroke-linecap="round">
      <circle cx="20" cy="40" r="11.5"/><circle cx="44" cy="40" r="11.5"/>
    </g>
    <g fill="none" stroke="#C2895A" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 40 L24 22 L32 40 L40 22 L44 40"/>
      <path d="M24 22 L40 22"/>
      <path d="M18.5 20 L29 20 M24 22 L24 20"/>
      <path d="M35 20 L45.5 20 M40 22 L40 20"/>
    </g>
    <circle cx="32" cy="40" r="2.3" fill="#C2895A"/>
  </svg>`;
  function initBadge(){
    const logo = $(".nav .logo");
    if(!logo || logo.querySelector(".brand-badge")) return;
    const badge = document.createElement("span");
    badge.className = "brand-badge";
    badge.setAttribute("aria-hidden", "true");
    badge.innerHTML = BRINGA_SVG;
    logo.insertBefore(badge, logo.firstChild);
  }

  /* ---- HOME: kiemelt darab ---- */
  function initFeature(){
    const host = $("#hero-feature");
    if(!host) return;
    const b = data.find(x => x.kiemelt) || data[0];
    if(!b){ host.remove(); return; }
    const media = `<span class="wheel two"></span><span class="wheel"></span>`
      + imgTag(b, `${b.model} — kiemelt darab`);
    const catline = [b.kategoria, b.ev, b.meret].filter(Boolean).join(" · ");
    host.innerHTML = `
    <a class="feature" href="bringa.html?id=${encodeURIComponent(b.id)}">
      <div class="ph">${media}<span class="tag">★ Kiemelt darab</span>${condBadge(b)}</div>
      <div class="bd">
        <div class="cat">${esc(catline)}</div>
        <h3>${esc(b.model)}</h3>
        <div class="spec">${esc(b.spec || b.kategoria)}</div>
        <div class="foot"><span class="price">${arSzoveg(b)}</span><span class="btn btn-1">Részletek →</span></div>
      </div>
    </a>`;
  }

  /* ---- HOME: készlet-előnézet (első N) ---- */
  function initHomeGrid(){
    const grid = $("#home-grid");
    if(!grid) return;
    const n = parseInt(grid.dataset.limit || "6", 10);
    grid.innerHTML = data.slice(0, n).map(bikeCard).join("");
    observeReveals();
  }

  /* ---- KÉSZLET: teljes, szűrhető + rendezhető ---- */
  function initKeszlet(){
    const grid = $("#keszlet-grid");
    if(!grid) return;
    const segBox = $("#seg-filters");
    const condBox = $("#cond-filters");
    const sortSel = $("#sort");
    const countEl = $("#count");

    let aktivSzeg = param("szegmens") && SZEGMENSEK.some(s => s.kulcs === param("szegmens")) ? param("szegmens") : "mind";
    let aktivAllapot = "mind";

    function renderSeg(){
      segBox.innerHTML = SZEGMENSEK.map(s =>
        `<button class="chip${s.kulcs===aktivSzeg?" on":""}" type="button" data-v="${s.kulcs}" aria-pressed="${s.kulcs===aktivSzeg}">${esc(s.nev)}</button>`
      ).join("");
    }
    function renderCond(){
      if(!condBox) return;
      const opts = [{k:"mind",n:"Minden állapot"}].concat(ALLAPOTOK.map(a => ({k:a,n:a})));
      condBox.innerHTML = opts.map(o =>
        `<button class="chip${o.k===aktivAllapot?" on":""}" type="button" data-v="${esc(o.k)}" aria-pressed="${o.k===aktivAllapot}">${esc(o.n)}</button>`
      ).join("");
    }
    function current(){
      let list = data.slice();
      if(aktivSzeg !== "mind") list = list.filter(b => b.szegmens === aktivSzeg);
      if(aktivAllapot !== "mind") list = list.filter(b => b.allapot === aktivAllapot);
      const sort = sortSel ? sortSel.value : "ajanlott";
      if(sort === "ar-asc") list.sort((a,b)=>a.ar-b.ar);
      else if(sort === "ar-desc") list.sort((a,b)=>b.ar-a.ar);
      else if(sort === "ev-desc") list.sort((a,b)=>b.ev-a.ev);
      return list;
    }
    function render(){
      const list = current();
      grid.innerHTML = list.length ? list.map(bikeCard).join("")
        : `<p class="empty">Erre a szűrésre jelenleg nincs elérhető kerékpár. Próbálj tágabb szűrőt, vagy <a href="kapcsolat.html">jelezd, mit keresel</a>.</p>`;
      if(countEl) countEl.textContent = `${list.length} kerékpár`;
      observeReveals();
    }
    if(segBox) segBox.addEventListener("click", e => {
      const c = e.target.closest(".chip"); if(!c) return;
      aktivSzeg = c.dataset.v; renderSeg(); render();
    });
    if(condBox) condBox.addEventListener("click", e => {
      const c = e.target.closest(".chip"); if(!c) return;
      aktivAllapot = c.dataset.v; renderCond(); render();
    });
    if(sortSel) sortSel.addEventListener("change", render);
    renderSeg(); renderCond(); render();
  }

  /* ---- BRINGA: termék-részlet ---- */
  function initProduct(){
    const host = $("#product");
    if(!host) return;
    const b = data.find(x => x.id === param("id"));
    if(!b){
      host.innerHTML = `<div class="wrap" style="padding:90px 30px"><p class="empty" style="color:var(--haze)">Ez a kerékpár nem található vagy már elkelt. <a href="keszlet.html">Vissza a készlethez →</a></p></div>`;
      return;
    }
    document.title = `${b.model} — Premium Bringa`;
    const mainImg = `<img id="pmain-img" src="${esc(bikeKep(b))}" alt="${esc(b.model)}" decoding="async" onerror="${coverOnerr(b)}">`;
    const galMain = `<span class="bk-wheel"></span><span class="bk-wheel two"></span><span class="ghost">${esc(b.marka||b.model)}</span>` + mainImg;
    const thumbs = bikeGaleria(b).map((src,i) =>
      `<button class="pthumb${i===0?' on':''}" type="button" data-src="${esc(src)}" aria-label="Fotó ${i+1}"><img src="${esc(src)}" alt="" loading="lazy" onerror="this.closest('.pthumb').remove()"></button>`
    ).join("");
    const rows = [
      ["Márka", b.marka], ["Kategória", b.kategoria], ["Évjárat", b.ev],
      ["Méret", b.meret], ["Váz", b.vaz], ["Villa", b.villa],
      ["Hajtás", b.hajtas], ["Fék", b.fek], ["Kerék", b.kerek], ["Állapot", b.allapot]
    ].filter(r => r[1]);
    const specTabla = rows.length
      ? `<table class="spec-table"><tbody>${rows.map(r => `<tr><th>${esc(r[0])}</th><td>${esc(String(r[1]))}</td></tr>`).join("")}</tbody></table>`
      : `<p class="plead" style="color:var(--fog)">A részletes specifikáció hamarosan, a hirdetés adatai alapján.</p>`;
    host.innerHTML = `
    <div class="wrap">
      <nav class="crumb" aria-label="Útvonal"><a href="index.html">Főoldal</a> <span>/</span> <a href="keszlet.html">Készlet</a> <span>/</span> <b>${esc(b.model)}</b></nav>
      <div class="product">
        <div class="pgallery">
          <div class="pmain">${galMain}${b.allapot ? `<span class="${condClass(b.allapot)} pcond">${esc(b.allapot)}</span>` : ""}</div>
          <div class="pthumbs" id="pthumbs">${thumbs}</div>
          <p class="pnote">A bringát személyesen, Debrecenben kipróbálhatod.</p>
        </div>
        <div class="pinfo">
          <span class="kick">${esc(b.kategoria)}</span>
          <h1>${esc(b.model)}</h1>
          <div class="pprice">${arSzoveg(b)}</div>
          <p class="plead">${b.leiras ? esc(b.leiras) : "A részletes leírás hamarosan, a hirdetés adatai alapján."}</p>
          <div class="buybox">
            <a class="btn btn-1" href="tel:+36204360307">Érdeklődöm telefonon →</a>
            <a class="btn btn-2" href="kapcsolat.html">Időpont kipróbálásra</a>
          </div>
          ${specTabla}
          <p class="pguar">✓ 30 napos garancia · ✓ Átvizsgálva · ✓ Szállítás Magyar Postával (utánvét)</p>
        </div>
      </div>
    </div>`;

    // galéria: bélyegkép kattintás → főkép csere
    const pmainImg = document.getElementById("pmain-img");
    const pthumbs = document.getElementById("pthumbs");
    if(pmainImg && pthumbs){
      pthumbs.addEventListener("click", e => {
        const t = e.target.closest(".pthumb"); if(!t) return;
        pmainImg.dataset.fb = "1";
        pmainImg.style.display = "";
        pmainImg.src = t.dataset.src;
        pthumbs.querySelectorAll(".pthumb").forEach(x => x.classList.remove("on"));
        t.classList.add("on");
      });
    }

    // kapcsolódó darabok (azonos szegmens, max 3)
    const relHost = $("#related-grid");
    if(relHost){
      const rel = data.filter(x => x.id !== b.id && x.szegmens === b.szegmens).slice(0,3);
      const pool = rel.length ? rel : data.filter(x => x.id !== b.id).slice(0,3);
      relHost.innerHTML = pool.map(bikeCard).join("");
    }
    observeReveals();
  }

  /* ---- KAPCSOLAT: e-mail másolása ---- */
  function initCopy(){
    const btn = $("#copy"), link = $("#email");
    if(!btn || !link) return;
    btn.addEventListener("click", async () => {
      const addr = link.textContent.trim();
      try{ await navigator.clipboard.writeText(addr); }
      catch(_){
        const r = document.createRange(); r.selectNode(link);
        const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
        try{ document.execCommand("copy"); }catch(__){}
        sel.removeAllRanges();
      }
      const old = btn.textContent;
      btn.textContent = "Másolva ✓"; btn.classList.add("done");
      setTimeout(() => { btn.textContent = old; btn.classList.remove("done"); }, 1800);
    });
  }

  /* ---- HOME: aktív menüpont scrollra (csak ha vannak #szakasz linkek) ---- */
  function initScrollSpy(){
    const links = $$('.nav-menu a[href^="#"]');
    if(!links.length || !("IntersectionObserver" in window)) return;
    const map = {};
    links.forEach(a => { const id = a.getAttribute("href").slice(1); if(id) map[id] = a; });
    const secs = Object.keys(map).map(id => document.getElementById(id)).filter(Boolean);
    const spy = new IntersectionObserver(es => es.forEach(en => {
      if(en.isIntersecting){
        links.forEach(a => a.classList.remove("active"));
        if(map[en.target.id]) map[en.target.id].classList.add("active");
      }
    }), { rootMargin:"-45% 0px -50% 0px", threshold:0 });
    secs.forEach(s => spy.observe(s));
  }

  /* ---- indítás ---- */
  document.addEventListener("DOMContentLoaded", () => {
    initNav();
    initBadge();
    initFeature();
    initHomeGrid();
    initKeszlet();
    initProduct();
    initCopy();
    initScrollSpy();
    observeReveals();
  });
})();
