/* ============================================================
   Shared logic for all pages.
   Reads content from window.SITE_DATA (data.js) and renders
   whichever blocks exist on the current page.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Theme (shared across pages via localStorage) ---------- */
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = saved || (prefersDark ? "dark" : "light");

  function bindThemeToggle() {
    const btn = document.getElementById("themeBtn");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      localStorage.setItem("theme", next);
    });
  }

  /* ---------- Helpers ---------- */
  const $ = id => document.getElementById(id);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const esc = s => String(s).replace(/[&<>"]/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const ICONS = {
    arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
    repo: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 8.84 21.5c.5.08.66-.22.66-.48v-1.7c-2.77.6-3.36-1.34-3.36-1.34-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.2-.25-4.52-1.1-4.52-4.9 0-1.08.39-1.96 1.03-2.65-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.69 1.03 1.57 1.03 2.65 0 3.81-2.33 4.65-4.55 4.9.36.31.68.92.68 1.85v2.74c0 .27.16.57.67.48A10 10 0 0 0 12 2z"/></svg>`
  };

  /* ---------- Renderers (each guards on its container) ---------- */
  function renderHero(d) {
    const m = d.meta || {};
    const name = $("heroName");
    if (name && m.name) {
      const parts = m.name.split(" ");
      name.innerHTML = esc(parts[0]) + "<br><span class='accent'>" +
        esc(parts.slice(1).join(" ")) + "</span>";
    }
    const role = $("heroRole");
    if (role) role.innerHTML = "I'm a <strong>" + esc(m.role || "developer") +
      "</strong> based in " + esc(m.location || "") + ".";
    const tag = $("heroTag");
    if (tag) tag.textContent = m.tagline || "";

    const status = $("heroStatus");
    if (status) {
      if (m.available && m.availableText) {
        const t = $("availText"); if (t) t.textContent = m.availableText;
      } else { status.style.display = "none"; }
    }
  }

  function renderSocials(d, containerId) {
    const c = $(containerId);
    if (!c) return;
    (d.socials || []).forEach(s => {
      const a = el("a", null, esc(s.label));
      a.href = s.url; a.target = "_blank"; a.rel = "noopener";
      c.appendChild(a);
    });
  }

  function renderMarquee(d) {
    const mq = $("marquee");
    if (!mq) return;
    const words = (d.stack || []).flatMap(g => g.items).slice(0, 12);
    const set = words.length ? words : ["Python", "FastAPI", "React"];
    const make = () => set.map(w => `<span>${esc(w)}</span>`).join("");
    mq.innerHTML = make() + make();
  }

  function renderAbout(d) {
    const at = $("aboutText");
    if (at) (d.meta.intro || []).forEach((p, i) =>
      at.appendChild(el("p", i === 0 ? "lead" : "muted", esc(p))));

    const st = $("stats");
    if (st) (d.stats || []).forEach(s => {
      const box = el("div", "stat");
      box.appendChild(el("div", "value", esc(s.value)));
      box.appendChild(el("div", "label", esc(s.label)));
      st.appendChild(box);
    });
  }

  function renderStack(d) {
    const sl = $("stackList");
    if (!sl) return;
    (d.stack || []).forEach(g => {
      const row = el("div", "stack-row");
      row.appendChild(el("div", "stack-group", esc(g.group)));
      const chips = el("div", "chips");
      (g.items || []).forEach(i => chips.appendChild(el("span", "chip", esc(i))));
      row.appendChild(chips);
      sl.appendChild(row);
    });
  }

  function renderServices(d) {
    const sv = $("services");
    if (!sv) return;
    (d.services || []).forEach((s, i) => {
      const c = el("div", "service");
      c.appendChild(el("div", "num", String(i + 1).padStart(2, "0")));
      c.appendChild(el("h3", null, esc(s.title)));
      c.appendChild(el("p", null, esc(s.body)));
      sv.appendChild(c);
    });
  }

  function projectRow(p, i) {
    const row = el("div", "project");
    row.appendChild(el("div", "p-num", String(i + 1).padStart(2, "0")));

    const main = el("div", "p-main");
    const titleRow = el("div", "p-title-row");
    titleRow.appendChild(el("h3", null, esc(p.title)));
    if (p.category) titleRow.appendChild(el("span", "p-cat", esc(p.category)));
    main.appendChild(titleRow);
    if (p.description) main.appendChild(el("p", "p-desc", esc(p.description)));
    if (p.tags) {
      const tags = el("div", "p-tags");
      p.tags.forEach(t => tags.appendChild(el("span", null, esc(t))));
      main.appendChild(tags);
    }
    row.appendChild(main);

    const side = el("div", "p-side");
    if (p.year) side.appendChild(el("div", "p-year", esc(p.year)));
    const links = el("div", "p-links");
    if (p.url && p.url !== "#") {
      const a = el("a", null, ICONS.link);
      a.href = p.url; a.target = "_blank"; a.rel = "noopener";
      a.setAttribute("aria-label", "Live site"); links.appendChild(a);
    }
    if (p.repo && p.repo !== "#") {
      const a = el("a", null, ICONS.repo);
      a.href = p.repo; a.target = "_blank"; a.rel = "noopener";
      a.setAttribute("aria-label", "Source"); links.appendChild(a);
    }
    side.appendChild(links);
    row.appendChild(side);
    return row;
  }

  function renderProjects(d) {
    const full = $("projects");
    if (full) (d.projects || []).forEach((p, i) => full.appendChild(projectRow(p, i)));

    const teaser = $("projectsTeaser");
    if (teaser) {
      const featured = (d.projects || []).filter(p => p.featured);
      const list = featured.length ? featured : (d.projects || []).slice(0, 3);
      list.forEach((p, i) => teaser.appendChild(projectRow(p, i)));
    }
  }

  function renderTimeline(d) {
    const tl = $("timeline");
    if (!tl) return;
    (d.experience || []).forEach(e => {
      const item = el("div", "tl-item");
      item.appendChild(el("div", "tl-period", esc(e.period)));
      item.appendChild(el("h3", null, esc(e.role)));
      item.appendChild(el("div", "tl-company", esc(e.company)));
      item.appendChild(el("p", null, esc(e.description)));
      tl.appendChild(item);
    });
  }

  function renderWriting(d) {
    const wr = $("writing");
    if (!wr) return;
    (d.writing || []).forEach(w => {
      const a = el("a", "write-item");
      a.href = w.url || "#";
      if (w.url && w.url !== "#") { a.target = "_blank"; a.rel = "noopener"; }
      const txt = el("div");
      txt.appendChild(el("h3", null, esc(w.title)));
      if (w.summary) txt.appendChild(el("p", null, esc(w.summary)));
      a.appendChild(txt);
      a.appendChild(el("span", "write-date", esc(w.date || "")));
      wr.appendChild(a);
    });
  }

  function renderContact(d) {
    const m = d.meta || {};
    const mail = $("bigMail");
    if (mail && m.email) { mail.textContent = m.email; mail.href = "mailto:" + m.email; }
    renderSocials(d, "contactSocials");

    // Simple mailto-based form
    const form = $("contactForm");
    if (form) {
      form.addEventListener("submit", e => {
        e.preventDefault();
        const name = form.elements.name.value.trim();
        const from = form.elements.email.value.trim();
        const msg = form.elements.message.value.trim();
        const subject = encodeURIComponent(`Portfolio message from ${name || "someone"}`);
        const body = encodeURIComponent(`${msg}\n\n— ${name} (${from})`);
        window.location.href = `mailto:${m.email}?subject=${subject}&body=${body}`;
        const note = $("formNote");
        if (note) note.textContent = "Opening your email app…";
      });
    }
  }

  function renderMeta(d) {
    const m = d.meta || {};
    // Fill any element tagged with data-bind="meta.key"
    document.querySelectorAll("[data-bind]").forEach(node => {
      const key = node.getAttribute("data-bind").replace("meta.", "");
      if (m[key] != null) node.textContent = m[key];
    });
    const y = $("year"); if (y) y.textContent = new Date().getFullYear();
  }

  /* ---------- Nav: scroll shadow, mobile toggle, active link ---------- */
  function bindNav() {
    const nav = $("nav");
    const navLinks = $("navLinks");
    const toggle = $("navToggle");
    if (toggle && navLinks) {
      toggle.addEventListener("click", () => navLinks.classList.toggle("open"));
      navLinks.querySelectorAll("a").forEach(a =>
        a.addEventListener("click", () => navLinks.classList.remove("open")));
    }
    if (nav) {
      window.addEventListener("scroll", () =>
        nav.classList.toggle("scrolled", window.scrollY > 8), { passive: true });
    }
    // Active link by current filename
    if (navLinks) {
      const page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
      navLinks.querySelectorAll("a").forEach(a => {
        const href = (a.getAttribute("href") || "").toLowerCase();
        if (href === page || (page === "" && href === "index.html")) a.classList.add("active");
      });
    }
  }

  /* ---------- Reveal on scroll ---------- */
  function bindReveal() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(n => io.observe(n));
  }

  /* ---------- Init ---------- */
  function init() {
    const d = window.SITE_DATA;
    bindThemeToggle();
    bindNav();
    if (d) {
      renderMeta(d);
      renderHero(d);
      renderSocials(d, "heroSocials");
      renderMarquee(d);
      renderAbout(d);
      renderStack(d);
      renderServices(d);
      renderProjects(d);
      renderTimeline(d);
      renderWriting(d);
      renderContact(d);
      document.title = (d.meta.name || "Portfolio") +
        (document.body.dataset.page ? " — " + document.body.dataset.page : " — " + (d.meta.role || ""));
    }
    bindReveal();
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", init);
  else init();
})();
