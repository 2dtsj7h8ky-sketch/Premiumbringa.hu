/* =========================================================================
   Premium Bringa: közös logika minden oldalhoz.
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
  /* Akció: ha van `regiAr` és nagyobb a jelenlegi árnál → áthúzott régi ár + jelvény */
  const isAkcio = b => b.ar && b.regiAr && Number(b.regiAr) > Number(b.ar);
  const arSzoveg = b => (b.ar && Number(b.ar) > 0)
    ? `${isAkcio(b) ? `<s class="ar-old">${huFt(b.regiAr)}</s> ` : ""}${huFt(b.ar)} <small>Ft</small>`
    : `<small class="ar-soon">Ár: érdeklődj</small>`;
  const condBadge = b => b.allapot ? `<span class="${condClass(b.allapot)}">${esc(b.allapot)}</span>` : "";
  const akcioBadge = b => isAkcio(b) ? '<span class="akcio">Akció</span>' : "";
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
  const param = key => new URLSearchParams(location.search).get(key);
  /* ---- "Eladva": a darab az eladástól számított 14 napig még látszik (limitált érzet),
         utána magától lekerül a készletről. ---- */
  const SOLD_MS = 14 * 864e5;
  const isEladva = b => !!b.eladva;
  const eladvaTime = b => b.eladva ? new Date(b.eladva).getTime() : 0;
  const soldExpired = b => isEladva(b) && (Date.now() - eladvaTime(b)) > SOLD_MS;
  const data = ((typeof KESZLET !== "undefined") ? KESZLET : []).filter(b => !soldExpired(b));

  /* ---- "Friss" felvétel: a legújabb feltöltéshez képest 14 napon belül ---- */
  const felveTime = b => b.felveve ? new Date(b.felveve).getTime() : 0;
  const maxFelve = data.filter(b => !isEladva(b)).reduce((m, b) => Math.max(m, felveTime(b)), 0);
  const FRESH_MS = 14 * 864e5;
  const isFriss = b => !isEladva(b) && !!b.felveve && maxFelve > 0 && (maxFelve - felveTime(b)) <= FRESH_MS;

  /* ---- termékkártya (showroom + készlet) ---- */
  function bikeCard(b){
    const media = `<span class="bk-wheel"></span><span class="bk-wheel two"></span>`
      + imgTag(b, `${b.model}${b.allapot ? ", "+b.allapot+" állapot" : ""}`);
    const meta = [b.ev, b.meret].filter(Boolean).join(" · ");
    return `
    <a class="bike reveal${isEladva(b) ? " sold" : ""}" href="bringa.html?id=${encodeURIComponent(b.id)}" data-szegmens="${esc(b.szegmens)}" data-allapot="${esc(b.allapot||"")}">
      <div class="img">${media}${isEladva(b) ? '<span class="soldstamp">Eladva</span>' : (isFriss(b) ? '<span class="fresh"><i></i>Friss</span>' : "") + akcioBadge(b)}<span class="cat">${esc(b.kategoria)}</span>${condBadge(b)}</div>
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
    const dd = $(".nav-dd"), ddt = dd && dd.querySelector(".nav-dd-t");
    const closeDD = () => { if(dd){ dd.classList.remove("open"); if(ddt) ddt.setAttribute("aria-expanded","false"); } };
    if(ddt){
      ddt.addEventListener("click", e => {
        e.stopPropagation();
        const o = dd.classList.toggle("open");
        ddt.setAttribute("aria-expanded", o ? "true" : "false");
      });
      document.addEventListener("click", e => { if(dd && !dd.contains(e.target)) closeDD(); });
    }
    if(burger && menu){
      const close = () => { menu.classList.remove("open"); burger.setAttribute("aria-expanded","false"); };
      burger.addEventListener("click", () => {
        const open = menu.classList.toggle("open");
        burger.setAttribute("aria-expanded", open ? "true" : "false");
      });
      menu.addEventListener("click", e => { if(e.target.closest("a")){ close(); closeDD(); } });
      document.addEventListener("keydown", e => { if(e.key === "Escape"){ close(); closeDD(); } });
    } else {
      document.addEventListener("keydown", e => { if(e.key === "Escape") closeDD(); });
    }
  }

  /* ---- Logó-jelvény (bringa-jel) a fejléc szóvédjegye mellé ---- */
  const BRINGA_SVG = `<svg viewBox="85 95 850 850" aria-hidden="true" focusable="false">
    <g fill="none" stroke="#D6D4D0" stroke-width="34"><circle cx="285" cy="600" r="150"/><circle cx="735" cy="600" r="150"/></g>
    <g fill="none" stroke="#C2895A" stroke-width="30" stroke-linecap="round" stroke-linejoin="round">
      <path d="M285 600 L402 352"/><path d="M402 352 L508 600"/><path d="M508 600 L285 600"/>
      <path d="M402 352 L636 360"/><path d="M636 360 L508 600"/><path d="M636 360 L735 600"/>
      <path d="M402 352 L398 322"/><path d="M636 360 L628 306"/>
      <path d="M338 316 L452 308"/><path d="M560 292 L690 304"/>
    </g>
    <g fill="#C2895A"><circle cx="285" cy="600" r="16"/><circle cx="508" cy="600" r="16"/><circle cx="735" cy="600" r="16"/></g>
  </svg>`;
  function initBadge(){
    $$(".logo").forEach(logo => {
      if(logo.querySelector(".brand-badge")) return;
      const badge = document.createElement("span");
      badge.className = "brand-badge";
      badge.setAttribute("aria-hidden", "true");
      badge.innerHTML = BRINGA_SVG;
      logo.insertBefore(badge, logo.firstChild);
    });
  }

  /* ---- HOME: kiemelt darab ---- */
  function initFeature(){
    const host = $("#hero-feature");
    if(!host) return;
    const b = data.find(x => x.kiemelt && !isEladva(x)) || data.find(x => !isEladva(x)) || data[0];
    if(!b){ host.remove(); return; }
    const media = `<span class="wheel two"></span><span class="wheel"></span>`
      + `<img src="${esc(bikeKep(b))}" alt="${esc(b.model)} · kiemelt darab" decoding="async" onerror="${coverOnerr(b)}">`;
    const catline = [b.kategoria, b.ev, b.meret].filter(Boolean).join(" · ");
    host.innerHTML = `
    <a class="feature" href="bringa.html?id=${encodeURIComponent(b.id)}">
      <div class="ph">${media}<span class="tag">★ Kiemelt darab</span>${akcioBadge(b)}${condBadge(b)}</div>
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
    const sorrend = data.slice().sort((a,b) => (isEladva(a)?1:0) - (isEladva(b)?1:0));
    grid.innerHTML = sorrend.slice(0, n).map(bikeCard).join("");
    observeReveals();
  }

  /* ---- KÉSZLET: teljes, szűrhető + rendezhető ---- */
  function initKeszlet(){
    const grid = $("#keszlet-grid");
    if(!grid) return;
    const segBox = $("#seg-filters");
    const condBox = $("#cond-filters");
    const meretBox = $("#size-filters");
    const sortSel = $("#sort");
    const countEl = $("#count");

    let aktivSzeg = param("szegmens") && SZEGMENSEK.some(s => s.kulcs === param("szegmens")) ? param("szegmens") : "mind";
    let aktivAllapot = "mind";
    let aktivMeret = "mind";

    function renderSeg(){
      const keszleten = new Set(data.map(b => b.szegmens));
      segBox.innerHTML = SZEGMENSEK
        .filter(s => s.kulcs === "mind" || keszleten.has(s.kulcs))
        .map(s => `<button class="chip seg${s.fo?" fo":""}${s.kulcs===aktivSzeg?" on":""}" type="button" data-v="${s.kulcs}" aria-pressed="${s.kulcs===aktivSzeg}">${esc(s.nev)}</button>`)
        .join("");
    }
    function renderCond(){
      if(!condBox) return;
      const opts = [{k:"mind",n:"Minden állapot"}].concat(ALLAPOTOK.map(a => ({k:a,n:a})));
      condBox.innerHTML = opts.map(o =>
        `<button class="chip${o.k===aktivAllapot?" on":""}" type="button" data-v="${esc(o.k)}" aria-pressed="${o.k===aktivAllapot}">${esc(o.n)}</button>`
      ).join("");
    }
    function renderMeret(){
      if(!meretBox) return;
      meretBox.innerHTML = MERETEK.map(s =>
        `<button class="chip${s.kulcs===aktivMeret?" on":""}" type="button" data-v="${s.kulcs}" aria-pressed="${s.kulcs===aktivMeret}">${esc(s.nev)}</button>`
      ).join("");
    }
    function current(){
      let list = data.slice();
      if(aktivSzeg !== "mind") list = list.filter(b => b.szegmens === aktivSzeg);
      if(aktivAllapot !== "mind") list = list.filter(b => b.allapot === aktivAllapot);
      if(aktivMeret !== "mind"){
        const band = MERETEK.find(s => s.kulcs === aktivMeret);
        if(band && band.h) list = list.filter(b => Array.isArray(b.magassag) && b.magassag[0] <= band.h[1] && b.magassag[1] >= band.h[0]);
      }
      const sort = sortSel ? sortSel.value : "friss";
      if(sort === "friss") list.sort((a,b)=>felveTime(b)-felveTime(a));
      else if(sort === "ar-asc") list.sort((a,b)=>a.ar-b.ar);
      else if(sort === "ar-desc") list.sort((a,b)=>b.ar-a.ar);
      else if(sort === "ev-desc") list.sort((a,b)=>b.ev-a.ev);
      /* az eladott darabok mindig a lista végére (stabil rendezés) */
      list.sort((a,b) => (isEladva(a)?1:0) - (isEladva(b)?1:0));
      return list;
    }
    function render(){
      const list = current();
      grid.innerHTML = list.length ? list.map(bikeCard).join("")
        : `<p class="empty">Erre a szűrésre jelenleg nincs elérhető kerékpár. Próbálj tágabb szűrőt, vagy <a href="kapcsolat.html">jelezd, mit keresel</a>.</p>`;
      if(countEl){
        const elerheto = list.filter(b => !isEladva(b)).length, elkelt = list.length - elerheto;
        countEl.textContent = `${elerheto} kerékpár` + (elkelt ? ` · ${elkelt} nemrég elkelt` : "");
      }
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
    if(meretBox) meretBox.addEventListener("click", e => {
      const c = e.target.closest(".chip"); if(!c) return;
      aktivMeret = c.dataset.v; renderMeret(); render();
    });
    if(sortSel) sortSel.addEventListener("change", render);
    const updEl = document.getElementById("updated");
    if(updEl && maxFelve > 0){
      updEl.textContent = "Készlet frissítve: " + new Date(maxFelve).toLocaleDateString("hu-HU");
    }
    renderSeg(); renderCond(); renderMeret(); render();
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
    document.title = `${b.model} · Premium Bringa`;
    const mainImg = `<img id="pmain-img" src="${esc(bikeKep(b))}" alt="${esc(b.model)}" decoding="async" onerror="${coverOnerr(b)}">`;
    const galMain = `<span class="bk-wheel"></span><span class="bk-wheel two"></span><span class="ghost">${esc(b.marka||b.model)}</span>` + mainImg;
    const thumbs = bikeGaleria(b).map((src,i) =>
      `<button class="pthumb${i===0?' on':''}" type="button" data-src="${esc(src)}" aria-label="Fotó ${i+1}"><img src="${esc(src)}" alt="" loading="lazy" onerror="this.closest('.pthumb').remove()"></button>`
    ).join("");
    /* Kulcs-adatok csík (bolti stílus) */
    const keys = [["Évjárat", b.ev], ["Vázméret", b.meret], ["Súly", b.suly], ["Kerék", b.kerekmeret]].filter(k => k[1]);
    const keySpecs = keys.length
      ? `<div class="pkeys">${keys.map(k => `<div class="pkey"><span class="pk-lab">${esc(k[0])}</span><span class="pk-val">${esc(String(k[1]))}</span></div>`).join("")}</div>`
      : "";

    /* Felszereltség: csoportosított (bolti) vagy egyszerű fallback */
    let specInner = "";
    if(Array.isArray(b.reszletek) && b.reszletek.length){
      specInner = b.reszletek.map(g =>
        `<div class="pspec-grp"><h4>${esc(g.cs)}</h4><table class="spec-table"><tbody>${g.t.map(r => `<tr><th>${esc(r[0])}</th><td>${esc(String(r[1]))}</td></tr>`).join("")}</tbody></table></div>`
      ).join("");
    } else {
      const rows = [["Váz", b.vaz], ["Villa", b.villa], ["Hajtás", b.hajtas], ["Fék", b.fek], ["Kerék", b.kerek]].filter(r => r[1]);
      specInner = rows.length ? `<table class="spec-table"><tbody>${rows.map(r => `<tr><th>${esc(r[0])}</th><td>${esc(String(r[1]))}</td></tr>`).join("")}</tbody></table>` : "";
    }
    const specTabla = specInner ? `<div class="pspec"><h3 class="pspec-h">Teljes felszereltség &amp; gyári adatok</h3><div class="pspec-body">${specInner}</div></div>` : "";

    /* Állapot-besorolás (grafikus háromfokú skála) */
    const condDesc = (typeof ALLAPOT_LEIRAS !== "undefined" && b.allapot && ALLAPOT_LEIRAS[b.allapot]) || "";
    const condBlock = b.allapot ? `
          <div class="pcond-scale">
            <span class="pcs-lab">Állapot-besorolás</span>
            <div class="pcs-track">${ALLAPOTOK.map(a => `<span class="pcs-step${a===b.allapot?" on":""}">${esc(a)}</span>`).join("")}</div>
            ${condDesc ? `<p class="pcs-desc">${esc(condDesc)}</p>` : ""}
          </div>` : "";

    /* Gyári méretajánlás + a testalkat-eltérés kiemelése */
    const sizeRange = Array.isArray(b.magassag) ? `${b.magassag[0]}–${b.magassag[1]} cm` : "";
    const sizeBlock = (b.meret || sizeRange) ? `
          <div class="psize">
            <span class="ps-lab">Gyári méretajánlás</span>
            <div class="ps-val">${b.meret ? `<em>${esc(b.meret)}</em>` : ""}${sizeRange ? `<span class="ps-range"> · kb. ${esc(sizeRange)} testmagassághoz</span>` : ""}</div>
            <p class="ps-note">Ez a <b>gyári</b> ajánlás; az ideális méret testalkattól, üléshelyzettől és igénytől függően eltérhet. Kérdezz, és segítünk pontosan kiválasztani, majd a méretedre beállítani.</p>
          </div>` : "";

    host.innerHTML = `
    <div class="wrap">
      <nav class="crumb" aria-label="Útvonal"><a href="index.html">Főoldal</a> <span>/</span> <a href="keszlet.html">Készlet</a> <span>/</span> <b>${esc(b.model)}</b></nav>
      <div class="product">
        <div class="pgallery">
          <div class="pmain${isEladva(b) ? " sold" : ""}">${galMain}${b.allapot ? `<span class="${condClass(b.allapot)} pcond">${esc(b.allapot)}</span>` : ""}${isEladva(b) ? '<span class="soldstamp psold-stamp">Eladva</span>' : (isAkcio(b) ? '<span class="akcio pakcio">Akció</span>' : "")}</div>
          <div class="pthumbs" id="pthumbs">${thumbs}</div>
          <p class="preal"><span class="pr-dot"></span><span>A fotók a <b>tényleges</b> kerékpárt mutatják, és hűen tükrözik annak állapotát; az esetleges esztétikai hibákról szívesen küldünk közelebbi képet is.</span></p>
          ${isEladva(b) ? '<p class="pnote">Ez a darab elkelt. A <a href="keszlet.html">készletben</a> megnézheted az elérhető kerékpárokat.</p>' : '<p class="pnote">Amíg megjelenik, elérhető. További információért az <a href="kapcsolat.html">elérhetőségnél</a> nyugodtan érdeklődj.</p>'}
        </div>
        <div class="pinfo">
          <span class="kick">${esc(b.kategoria)}</span>
          <h1>${esc(b.model)}</h1>
          <div class="pprice">${arSzoveg(b)}</div>
          ${keySpecs}
          <p class="plead">${b.leiras ? esc(b.leiras) : "A részletes leírás hamarosan, a hirdetés adatai alapján."}</p>
          ${b.megjegyzes ? `<div class="pdisc"><span class="pdisc-ic" aria-hidden="true"></span><p><b>Fontos.</b> ${esc(b.megjegyzes)}</p></div>` : ""}
          ${isEladva(b) ? `<div class="psold"><b>Ez a kerékpár elkelt.</b><span>Hasonló darabot rendszeresen hozunk. Írd meg, mit keresel, és szólunk, amint befut.</span><a class="btn btn-1" href="kapcsolat.html">Szólj, mit keresel →</a></div>` : `<div class="buybox">
            <a class="btn btn-1" href="tel:+36204360307">Érdeklődöm telefonon →</a>
            <a class="btn btn-2" href="kapcsolat.html">Időpont kipróbálásra</a>
          </div>`}
          ${condBlock}
          ${sizeBlock}
          ${specTabla}
          <p class="pguar">✓ 30 napos garancia · ✓ Beállítva, átnézve · ✓ Szállítás Magyar Postával (utánvét)</p>
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
      const rel = data.filter(x => x.id !== b.id && !isEladva(x) && x.szegmens === b.szegmens).slice(0,3);
      const pool = rel.length ? rel : data.filter(x => x.id !== b.id && !isEladva(x)).slice(0,3);
      relHost.innerHTML = pool.map(bikeCard).join("");
    }
    observeReveals();
  }


  /* ---- Lightbox: kép megnyitása, lapozás, zoom (csak transform/opacity) ---- */
  function initLightbox(){
    const thumbs = $$("#pthumbs .pthumb");
    const main   = document.querySelector(".pmain");
    if(!main || !thumbs.length) return;
    const srcs = thumbs.map(t => t.dataset.src);
    const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const EASE = "cubic-bezier(.22,.8,.2,1)";
    const TR = `transform .4s ${EASE}, opacity .24s ease`;

    let el, img, cnt, idx = 0, open = false;
    let sc = 1, tx = 0, ty = 0;
    let drag = false, px = 0, py = 0, ox = 0, oy = 0, moved = 0;
    let pinch = 0, pinchSc = 1;

    function build(){
      el = document.createElement("div");
      el.className = "lbx";
      el.setAttribute("role","dialog");
      el.setAttribute("aria-modal","true");
      el.setAttribute("aria-label","Fotónézegető");
      el.innerHTML =
        '<div class="lbx-bd"></div>' +
        '<img class="lbx-img" alt="" decoding="async">' +
        '<button class="lbx-x" type="button" aria-label="Bezárás"></button>' +
        '<button class="lbx-nav lbx-prev" type="button" aria-label="Előző fotó"></button>' +
        '<button class="lbx-nav lbx-next" type="button" aria-label="Következő fotó"></button>' +
        '<div class="lbx-count"></div>';
      document.body.appendChild(el);
      img = el.querySelector(".lbx-img");
      cnt = el.querySelector(".lbx-count");

      el.querySelector(".lbx-x").addEventListener("click", close);
      el.querySelector(".lbx-bd").addEventListener("click", close);
      el.querySelector(".lbx-prev").addEventListener("click", e => { e.stopPropagation(); go(-1); });
      el.querySelector(".lbx-next").addEventListener("click", e => { e.stopPropagation(); go(1); });

      img.addEventListener("dblclick", e => { e.preventDefault(); zoomAt(e.clientX, e.clientY, sc > 1 ? 1 : 2.6); });
      el.addEventListener("wheel", e => {
        if(!open) return;
        e.preventDefault();
        zoomAt(e.clientX, e.clientY, sc * (e.deltaY < 0 ? 1.18 : 1/1.18));
      }, { passive:false });

      img.addEventListener("pointerdown", e => {
        if(pinch) return;
        drag = true; moved = 0;
        px = e.clientX; py = e.clientY; ox = tx; oy = ty;
        img.setPointerCapture(e.pointerId);
        img.style.transition = "none";
      });
      img.addEventListener("pointermove", e => {
        if(!drag || pinch) return;
        const dx = e.clientX - px, dy = e.clientY - py;
        moved = Math.max(moved, Math.abs(dx) + Math.abs(dy));
        if(sc > 1){ tx = ox + dx; ty = oy + dy; clamp(); apply(false); }
        else { tx = dx * .35; ty = 0; apply(false); }
      });
      img.addEventListener("pointerup", e => {
        if(!drag) return;
        drag = false;
        try{ img.releasePointerCapture(e.pointerId); }catch(_){}
        if(sc === 1){
          const dx = e.clientX - px;
          if(Math.abs(dx) > 60) go(dx < 0 ? 1 : -1);
          else { tx = 0; apply(true); }
        }
      });
      img.addEventListener("pointercancel", () => { drag = false; if(sc === 1){ tx = 0; apply(true); } });

      /* pinch */
      el.addEventListener("touchstart", e => {
        if(e.touches.length === 2){ pinch = dist(e.touches); pinchSc = sc; drag = false; }
      }, { passive:true });
      el.addEventListener("touchmove", e => {
        if(pinch && e.touches.length === 2){
          e.preventDefault();
          const d = dist(e.touches);
          const m = midp(e.touches);
          zoomAt(m.x, m.y, pinchSc * (d / pinch), false);
        }
      }, { passive:false });
      el.addEventListener("touchend", e => { if(e.touches.length < 2) pinch = 0; }, { passive:true });

      document.addEventListener("keydown", e => {
        if(!open) return;
        if(e.key === "Escape") close();
        else if(e.key === "ArrowRight") go(1);
        else if(e.key === "ArrowLeft") go(-1);
      });
    }

    const dist = t => Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);
    const midp = t => ({ x:(t[0].clientX + t[1].clientX)/2, y:(t[0].clientY + t[1].clientY)/2 });

    function apply(anim){
      img.style.transition = anim && !RM ? TR : "none";
      img.style.transform = `translate3d(${tx}px,${ty}px,0) scale(${sc})`;
    }
    function clamp(){
      const w = img.clientWidth * sc, h = img.clientHeight * sc;
      const mx = Math.max(0, (w - innerWidth) / 2), my = Math.max(0, (h - innerHeight) / 2);
      tx = Math.min(mx, Math.max(-mx, tx));
      ty = Math.min(my, Math.max(-my, ty));
    }
    function zoomAt(cx, cy, ns, anim){
      ns = Math.min(4, Math.max(1, ns));
      const mx = innerWidth/2, my = innerHeight/2;
      const ix = (cx - mx - tx) / sc, iy = (cy - my - ty) / sc;
      tx = cx - mx - ix * ns; ty = cy - my - iy * ns;
      sc = ns;
      if(sc === 1){ tx = 0; ty = 0; }
      clamp(); apply(anim !== false);
      el.classList.toggle("zoomed", sc > 1);
    }
    function reset(){ sc = 1; tx = 0; ty = 0; el.classList.remove("zoomed"); apply(false); }

    function preload(){
      [idx-1, idx+1].forEach(i => {
        const s = srcs[(i + srcs.length) % srcs.length];
        if(s){ const p = new Image(); p.src = s; }
      });
    }
    function show(n){
      idx = (n + srcs.length) % srcs.length;
      reset();
      cnt.innerHTML = `<b>${idx+1}</b> / ${srcs.length}`;
      const pre = new Image();
      const swap = () => { img.src = srcs[idx]; img.style.opacity = "1"; };
      img.style.transition = RM ? "none" : "opacity .18s ease";
      img.style.opacity = "0";
      pre.src = srcs[idx];
      if(pre.complete) setTimeout(swap, RM ? 0 : 110); else pre.onload = () => setTimeout(swap, RM ? 0 : 110);
      preload();
    }

    function openAt(i, from){
      if(!el) build();
      idx = i; open = true;
      reset();
      cnt.innerHTML = `<b>${idx+1}</b> / ${srcs.length}`;
      img.src = srcs[idx];
      img.style.opacity = "1";
      el.classList.add("on");
      document.documentElement.classList.add("lbx-lock");
      preload();
      if(from && !RM){
        const run = () => {
          const r = from.getBoundingClientRect(), t = img.getBoundingClientRect();
          if(!t.width || !r.width) return;
          const s = Math.max(r.width / t.width, r.height / t.height);
          const dx = (r.left + r.width/2) - (t.left + t.width/2);
          const dy = (r.top + r.height/2) - (t.top + t.height/2);
          img.style.transition = "none";
          img.style.transform = `translate3d(${dx}px,${dy}px,0) scale(${s})`;
          requestAnimationFrame(() => {
            img.style.transition = `transform .44s ${EASE}`;
            img.style.transform = "translate3d(0,0,0) scale(1)";
          });
        };
        img.complete ? requestAnimationFrame(run) : (img.onload = () => requestAnimationFrame(run));
      }
    }
    function go(d){ show(idx + d); }
    function close(){
      if(!open) return;
      open = false;
      el.classList.remove("on");
      document.documentElement.classList.remove("lbx-lock");
      setTimeout(() => { if(!open){ reset(); img.removeAttribute("src"); } }, 300);
    }

    /* megnyitás: főkép + bélyegképek */
    main.addEventListener("click", e => {
      if(e.target.closest("button")) return;
      const cur = document.getElementById("pmain-img");
      if(!cur || cur.style.display === "none") return;
      const i = Math.max(0, srcs.indexOf(cur.getAttribute("src")));
      openAt(i, cur);
    });
    main.style.cursor = "zoom-in";
    $$("#pthumbs .pthumb").forEach((t, i) => {
      t.addEventListener("dblclick", () => openAt(i, t.querySelector("img") || t));
    });
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

  /* ---- mozgás: progress-sáv, szám-felpörgetés, scrollra rajzolódó görbe ---- */
  function initMotion(){
    const rm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if(!rm){
      const bar = document.createElement("div");
      bar.className = "site-progress"; bar.setAttribute("aria-hidden","true");
      document.body.appendChild(bar);
      const tick = () => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        const p = max > 0 ? (h.scrollTop || document.body.scrollTop) / max : 0;
        bar.style.width = (Math.max(0, Math.min(1, p)) * 100).toFixed(2) + "%";
      };
      document.addEventListener("scroll", tick, { passive:true });
      window.addEventListener("resize", tick);
      tick();
    }

    const countUp = el => {
      if(el.dataset.counted) return; el.dataset.counted = "1";
      const target = parseInt(el.getAttribute("data-count"), 10) || 0;
      const pre = el.getAttribute("data-prefix") || "", suf = el.getAttribute("data-suffix") || "";
      if(rm){ el.textContent = pre + target + suf; return; }
      const dur = 1150; let start = null;
      const step = ts => {
        if(!start) start = ts;
        const t = Math.min(1, (ts - start) / dur), e = 1 - Math.pow(1 - t, 3);
        el.textContent = pre + Math.round(e * target) + suf;
        if(t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    $$(".mx-curve").forEach(p => { try{ const L = Math.ceil(p.getTotalLength()); p.style.strokeDasharray = L; p.style.strokeDashoffset = rm ? 0 : L; }catch(e){} });

    const draws = $$(".draw-on-scroll"), nums = $$("[data-count]");
    const fire = t => {
      if(t.classList.contains("draw-on-scroll")){
        t.classList.add("drawn");
        t.querySelectorAll(".mx-curve").forEach(c => { c.style.strokeDashoffset = "0"; });
      }
      if(t.hasAttribute("data-count")) countUp(t);
    };
    if(!draws.length && !nums.length) return;
    if(!("IntersectionObserver" in window)){ draws.forEach(fire); nums.forEach(fire); return; }
    const mio = new IntersectionObserver(es => es.forEach(en => {
      if(en.isIntersecting){ fire(en.target); mio.unobserve(en.target); }
    }), { threshold:.3 });
    draws.forEach(el => mio.observe(el));
    nums.forEach(el => mio.observe(el));
  }

  /* ---- indítás ---- */
  document.addEventListener("DOMContentLoaded", () => {
    initNav();
    initMotion();
    initBadge();
    initFeature();
    initHomeGrid();
    initKeszlet();
    initProduct();
    initLightbox();
    initCopy();
    initScrollSpy();
    observeReveals();
  });
})();
