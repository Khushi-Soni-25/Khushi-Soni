(function () {
  var S = window.SITE;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var page = document.body.dataset.page; // home | case | volunteer
  var isHome = page === "home";

  /* ---------- light / dark ---------- */
  var DARK = "tokyo", LIGHT = "cream";
  var theme = LIGHT;
  try { var sv = localStorage.getItem("ks-theme"); theme = sv === DARK ? DARK : LIGHT; } catch (e) {}
  document.documentElement.setAttribute("data-theme", theme);
  function applyTheme(t) {
    theme = t;
    document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem("ks-theme", t); } catch (e) {}
    var b = $("#themeBtn");
    if (b) { b.textContent = t === DARK ? "☀" : "☾"; b.setAttribute("aria-label", t === DARK ? "Switch to light theme" : "Switch to dark theme"); }
  }

  /* ---------- nav ---------- */
  var LINKS = [["about", "About"], ["skills", "Skills"], ["experience", "Experience"], ["work", "Work"], ["education", "Education"], ["awards", "Awards"], ["volunteer", "Volunteering"], ["contact", "Contact"]];
  function href(id) { return id === "volunteer" ? "volunteer.html" : (isHome ? "" : "index.html") + "#" + id; }
  function buildNav() {
    var nav = document.createElement("header");
    nav.className = "nav";
    nav.innerHTML = '<div class="wrap"><a class="logo" href="' + (isHome ? "#top" : "index.html") + '">' + esc(S.initials) + "</a>" +
      '<ul id="links">' + LINKS.map(function (l) { return '<li><a data-id="' + l[0] + '" href="' + href(l[0]) + '">' + l[1] + "</a></li>"; }).join("") + "</ul>" +
      '<button class="themebtn" id="themeBtn"></button>' +
      '<a class="btn resume-btn" href="' + S.resume + '" download>Résumé PDF ↓</a>' +
      '<button class="menu-btn" id="menuBtn" aria-label="Menu">☰</button></div>';
    document.body.prepend(nav);
    $("#menuBtn").onclick = function () { $("#links").classList.toggle("open"); };
    $$("#links a").forEach(function (a) { a.onclick = function () { $("#links").classList.remove("open"); }; });
    $("#themeBtn").onclick = function () { applyTheme(theme === DARK ? LIGHT : DARK); };
    applyTheme(theme);
    if (page === "volunteer") $('#links a[data-id="volunteer"]').classList.add("active");
  }

  /* ---------- helpers ---------- */
  function tags(arr) { return arr && arr.length ? '<div class="tags">' + arr.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") + "</div>" : ""; }
  function linkIf(url, label, cls) { return url ? '<a class="btn ' + (cls || "") + '" href="' + esc(url) + '" target="_blank" rel="noopener">' + label + " ↗</a>" : ""; }
  function imgTag(src, alt) { return '<img src="' + esc(src) + '" alt="' + esc(alt) + '" loading="lazy" onerror="this.parentNode.style.display=\'none\'">'; }

  /* one stacked list, used for education / awards / certifications */
  function stack(arr) {
    return '<div class="list">' + arr.map(function (e) {
      var fig = e.img ? '<div class="fig">' + imgTag(e.img, e.title) + "</div>" : "";
      return '<article class="item rv' + (e.img ? " has-img" : "") + '">' + fig + "<div><h3>" + esc(e.title) + '</h3><div class="pl">' + esc(e.place || "") + "</div>" +
        (e.meta ? '<div class="mt">' + esc(e.meta) + "</div>" : "") + (e.note ? '<p class="nt">' + esc(e.note) + "</p>" : "") +
        (e.link ? '<a class="lk" href="' + esc(e.link) + '" target="_blank" rel="noopener">View ↗</a>' : "") + "</div></article>";
    }).join("") + "</div>";
  }

  /* ---------- home ---------- */
  function home() {
    var photo = S.photo ? '<img src="' + esc(S.photo) + '" alt="' + esc(S.name) + '" onerror="this.outerHTML=\'<div class=ini>' + esc(S.initials) + '</div>\'">' : '<div class="ini">' + esc(S.initials) + "</div>";
    var h = "";
    h += '<section class="hero" id="top"><div class="wrap"><div class="loc">' + esc(S.location) + "</div><h1><span>" + esc(S.first) + "</span><span>" + esc(S.last) + "</span></h1><p>" + S.pitch + '</p><div class="row"><a class="btn primary" href="#work">See the work</a><a class="btn" href="#contact">Get in touch</a></div></div></section>';
    h += '<section id="about"><div class="wrap"><div class="eyebrow rv">About</div><h2 class="rv">Hi there!</h2><div class="about"><div class="rv"><div class="photo">' + photo + '</div><div class="cap">' + esc(S.photoCaption) + '</div></div><div class="about-text rv">' + S.about.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div></div></div></section>";
    h += '<section id="skills"><div class="wrap"><div class="eyebrow rv">Toolbox</div><h2 class="rv">What I build with</h2>' +
      S.skills.map(function (g) {
        return '<div class="skill-group rv"><h3>' + esc(g.group) + '</h3><div class="chips">' + g.items.map(function (i) {
          var img = i[1] ? '<img alt="" loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/' + i[1] + "/" + i[1] + '-original.svg" onerror="this.remove()">' : "";
          return '<span class="chip">' + img + esc(i[0]) + "</span>";
        }).join("") + "</div></div>";
      }).join("") + "</div></section>";
    h += '<section id="experience"><div class="wrap"><div class="eyebrow rv">Experience</div><h2 class="rv">Where I\'ve been</h2><ol class="jobs-index rv" style="list-style:none">' +
      S.experience.map(function (j) { return '<li><a href="#job-' + j.id + '"><b>' + esc(j.org) + "</b><span>" + esc(j.role) + " · " + j.year + "</span></a></li>"; }).join("") + "</ol>" +
      S.experience.map(function (j) {
        return '<article class="job rv" id="job-' + j.id + '"><div class="meta">' + esc(j.when) + " · " + esc(j.where) + "</div><h3>" + esc(j.role) + " — " + esc(j.org) + '</h3><p class="sum">' + esc(j.summary) + '</p><button class="more">Show details</button><ul>' + j.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul>" + tags(j.stack) + "</article>";
      }).join("") + '<a class="more-link rv" href="volunteer.html">See my volunteer experience →</a></div></section>';
    h += '<section id="work"><div class="wrap"><div class="eyebrow rv">Selected work</div><h2 class="rv">Four things worth opening</h2><p class="section-lead rv">Each one has a write-up with highlights, stack and links.</p>' +
      S.projects.map(function (p) {
        var th = p.shots && p.shots.length ? imgTag(p.shots[0], p.title + " screenshot") : '<div class="ph"><b>' + esc(p.title) + "</b><span>screenshot coming soon</span></div>";
        var links = linkIf(p.demo, "Live demo", "primary") + linkIf(p.repo, "GitHub");
        return '<article class="card rv"><a class="thumb" href="project.html?p=' + p.slug + '">' + th + '</a><div><div class="no">' + p.num + " / " + p.year + " · " + p.type + "</div><h3>" + esc(p.title) + '</h3><p class="tl">' + esc(p.tagline) + '</p><p class="bl">' + esc(p.blurb) + "</p>" + (p.badge ? '<span class="badge">🏆 ' + esc(p.badge) + "</span>" : "") + tags(p.stack) +
          '<div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;margin-top:18px"><a class="link" style="margin:0" href="project.html?p=' + p.slug + '">Read the write-up →</a>' + links + "</div></div></article>";
      }).join("") + "</div></section>";
    h += '<section id="education"><div class="wrap"><div class="eyebrow rv">Education</div><h2 class="rv">Where I studied</h2>' + stack(S.education) + "</div></section>";
    h += '<section id="awards"><div class="wrap"><div class="eyebrow rv">Awards &amp; activities</div><h2 class="rv">Recognition</h2>' + stack(S.awards) + "</div></section>";
    h += '<section id="certifications"><div class="wrap"><div class="eyebrow rv">Certifications</div><h2 class="rv">Courses &amp; certificates</h2>' + stack(S.certifications) + "</div></section>";
    var social = linkIf(S.github, "GitHub") + linkIf(S.linkedin, "LinkedIn") + '<a class="btn" href="' + S.resume + '" download>Résumé ↓</a>';
    h += '<section id="contact" class="contact"><div class="wrap"><div class="eyebrow rv">Contact</div><h2 class="rv">Let\'s build <i>something.</i></h2><p class="rv">Open to internships and interesting problems in AI/ML. Email is the fastest way to reach me.</p><a class="mail rv" href="mailto:' + S.email + '">' + S.email + '</a><div class="row rv">' + social + "</div></div></section>";
    $("#app").innerHTML = h;

    $$(".job .more").forEach(function (b) {
      b.onclick = function () { var j = b.closest(".job"); j.classList.toggle("open"); b.textContent = j.classList.contains("open") ? "Hide details" : "Show details"; };
    });
    $$(".jobs-index a").forEach(function (a) {
      a.addEventListener("click", function () { var j = $(a.getAttribute("href")); if (j && !j.classList.contains("open")) $(".more", j).click(); });
    });
  }

  /* ---------- case study ---------- */
  function caseStudy() {
    var slug = new URLSearchParams(location.search).get("p");
    var idx = S.projects.findIndex(function (p) { return p.slug === slug; });
    var main = $("#app");
    if (idx < 0) { main.innerHTML = '<div class="wrap case"><h1>Not found</h1><p><a class="link" href="index.html#work">← All work</a></p></div>'; return; }
    var p = S.projects[idx], next = S.projects[(idx + 1) % S.projects.length];
    document.title = p.title + " — " + S.name;
    var shots = p.shots && p.shots.length ? p.shots : [null];
    var h = '<div class="wrap case"><a class="link" href="index.html#work" style="border-bottom:1.5px solid var(--accent)">← All work</a>' +
      '<div class="yr" style="margin-top:36px">' + p.year + " · " + p.type + "</div><h1>" + esc(p.title) + '</h1><p class="tg">' + esc(p.tagline) + "</p>" + (p.badge ? '<span class="badge">🏆 ' + esc(p.badge) + "</span>" : "") +
      '<div class="slider"><div class="slide" id="slide"></div>' + (shots.length > 1 ? '<div class="sl-ctrl"><button id="prev" aria-label="Previous">←</button><span id="cnt"></span><button id="next" aria-label="Next">→</button></div>' : "") + "</div>" +
      "<h2>What it does</h2><ul>" + p.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul><h2>Built with</h2>" + tags(p.stack) +
      '<div class="row">' + linkIf(p.demo, "Live demo", "primary") + linkIf(p.repo, "GitHub") + "</div>" +
      '<div class="pn"><a class="link" href="index.html#work">← Back to all work</a><a class="link" href="project.html?p=' + next.slug + '">Next: ' + esc(next.title) + " →</a></div></div>";
    main.innerHTML = h;
    var i = 0;
    function show() {
      var s = shots[i];
      $("#slide").innerHTML = s ? '<img src="' + esc(s) + '" alt="' + esc(p.title) + " screenshot " + (i + 1) + '">' : '<div class="ph"><b>' + esc(p.title) + "</b><span>screenshot coming soon</span></div>";
      if ($("#cnt")) $("#cnt").textContent = (i + 1) + " / " + shots.length;
    }
    if ($("#prev")) { $("#prev").onclick = function () { i = (i - 1 + shots.length) % shots.length; show(); }; $("#next").onclick = function () { i = (i + 1) % shots.length; show(); }; }
    show();
  }

  /* ---------- volunteer page ---------- */
  function volunteer() {
    document.title = "Volunteer experience — " + S.name;
    var h = '<div class="wrap"><div class="vol-head"><div class="eyebrow">Giving back</div><h1>Volunteer experience</h1><p>Community service, leadership and training outside the classroom.</p></div><div class="vol">' +
      S.volunteer.map(function (v) {
        return '<article class="v rv"><div class="meta">' + esc(v.when) + " · " + esc(v.where) + "</div><h3>" + esc(v.role) + " — " + esc(v.org) + "</h3><ul>" +
          v.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul>" + (v.img ? '<div class="fig">' + imgTag(v.img, v.org) + "</div>" : "") + "</article>";
      }).join("") + '</div><p style="padding-bottom:64px"><a class="more-link" href="index.html">← Back to portfolio</a></p></div>';
    $("#app").innerHTML = h;
  }

  function footer() {
    var f = document.createElement("footer");
    f.innerHTML = '<div class="wrap"><span>' + esc(S.name) + " · " + esc(S.location) + "</span><span>Thanks for stopping by :)</span></div>";
    document.body.appendChild(f);
    var t = document.createElement("button"); t.className = "top"; t.setAttribute("aria-label", "Back to top"); t.textContent = "↑";
    t.onclick = function () { window.scrollTo({ top: 0 }); };
    document.body.appendChild(t);
    window.addEventListener("scroll", function () { t.classList.toggle("show", window.scrollY > 600); }, { passive: true });
  }

  function effects() {
    var els = $$(".rv");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }); }, { threshold: 0.12 });
    els.forEach(function (e) { io.observe(e); });
    if (isHome) {
      var ids = ["about", "skills", "experience", "work", "education", "awards", "contact"];
      window.addEventListener("scroll", function () {
        var y = window.scrollY + 140, cur = null;
        ids.forEach(function (id) { var s = document.getElementById(id); if (s && s.offsetTop <= y) cur = id; });
        if (y >= (document.getElementById("certifications") || {}).offsetTop && cur !== "contact") cur = "awards";
        $$("#links a").forEach(function (a) { a.classList.toggle("active", a.dataset.id === cur); });
      }, { passive: true });
    }
  }

  buildNav();
  if (isHome) home(); else if (page === "case") caseStudy(); else volunteer();
  footer();
  effects();
})();
