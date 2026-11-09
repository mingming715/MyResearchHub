document.addEventListener("DOMContentLoaded", function () {
  document.title = weekLabelize(document.title);
  document.querySelectorAll(".weekly-title").forEach(humanizeWeekText);

  var content = document.getElementById("weekly-content");
  var highlights = document.getElementById("weekly-highlights");
  var toc = document.getElementById("toc-list");
  if (!content || !highlights) return;

  var CATEGORIES = [
    { match: "HW", cls: "autonomous-hw" },
    { match: "SW", cls: "autonomous-sw" },
    { match: "AI", cls: "ai-general" },
    { match: "양자화", cls: "edge-quantization" },
    { match: "안전", cls: "safety-regulation" }
  ];

  function categoryFor(heading) {
    for (var i = 0; i < CATEGORIES.length; i++) {
      if (heading.indexOf(CATEGORIES[i].match) !== -1) return CATEGORIES[i].cls;
    }
    return null;
  }

  function firstSentence(p) {
    if (!p) return "";
    var text = p.textContent.trim();
    var end = text.indexOf(". ");
    return end === -1 ? text : text.slice(0, end + 1);
  }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  // Group flat h2/p/... children into per-section wrappers (all sections, so each gets a TOC anchor).
  var sections = [];
  var current = null;
  Array.prototype.slice.call(content.children).forEach(function (node) {
    if (node.tagName === "H2") {
      current = { heading: node, cat: categoryFor(node.textContent), nodes: [node] };
      sections.push(current);
    } else if (current) {
      current.nodes.push(node);
    }
  });

  sections.forEach(function (s, i) {
    var wrap = el("section", "weekly-section");
    wrap.id = "s" + (i + 1);
    if (s.cat) wrap.dataset.category = s.cat;
    s.nodes[0].replaceWith(wrap);
    s.nodes.forEach(function (n) { wrap.appendChild(n); });
    s.wrap = wrap;

    var links = wrap.querySelectorAll("a");
    if (toc) {
      var a = el("a", "toc-item");
      a.href = "#" + wrap.id;
      if (s.cat) a.dataset.category = s.cat;
      a.appendChild(el("span", "toc-text", s.heading.textContent));
      if (links.length) a.appendChild(el("span", "toc-count", String(links.length)));
      toc.appendChild(a);
      s.tocLink = a;
    }
  });

  // New-format reports: tag special sections and color per-category h3 blocks.
  sections.forEach(function (s) {
    var h = s.heading.textContent;
    if (h.indexOf("핵심") !== -1) s.wrap.dataset.kind = "key";
    if (h.indexOf("꼭 읽을") !== -1) s.wrap.dataset.kind = "must";

    // Group each h3 with the nodes after it; color by the `카테고리` code tag or the heading text.
    Array.prototype.slice.call(s.wrap.querySelectorAll(":scope > h3")).forEach(function (h3) {
      var tag = h3.querySelector("code");
      var cat = categoryFor(tag ? tag.textContent : h3.textContent);
      var block = el("div", "sub-block");
      if (cat) block.dataset.category = cat;
      h3.before(block);
      var n = h3;
      while (n && !(n !== h3 && n.tagName === "H3")) {
        var next = n.nextElementSibling;
        block.appendChild(n);
        n = next;
      }
    });
  });

  // TL;DR (old-format reports only): first sentence of each category section.
  var tldr = el("div", "tldr");
  tldr.appendChild(el("div", "tldr-label", "이번 주 한 줄 요약"));
  sections.forEach(function (s) {
    if (!s.cat) return;
    var sentence = firstSentence(s.nodes.find(function (n) { return n.tagName === "P"; }));
    if (!sentence) return;
    var row = el("a", "tldr-row");
    row.href = "#" + s.wrap.id;
    row.dataset.category = s.cat;
    row.appendChild(el("span", "cat-tag", s.heading.textContent));
    row.appendChild(el("span", "tldr-text", sentence));
    tldr.appendChild(row);
  });
  if (tldr.children.length > 1) highlights.appendChild(tldr);

  // Every source mentioned this week, grouped by section and collapsed by default.
  var total = 0;
  var details = el("details", "sources");
  var summary = el("summary");
  details.appendChild(summary);
  sections.forEach(function (s) {
    if (!s.cat) return;
    var links = s.wrap.querySelectorAll("a");
    if (!links.length) return;
    var group = el("div", "sources-group");
    group.dataset.category = s.cat;
    group.appendChild(el("div", "cat-tag", s.heading.textContent));
    var ul = el("ul");
    links.forEach(function (link) {
      var li = el("li");
      var a = el("a", null, link.textContent.trim());
      a.href = link.href;
      a.target = "_blank";
      a.rel = "noopener";
      li.appendChild(a);
      ul.appendChild(li);
      total++;
    });
    group.appendChild(ul);
    details.appendChild(group);
  });
  if (total) {
    summary.textContent = "이번 주 다룬 소스 " + total + "개 모아보기";
    highlights.appendChild(details);
  }

  // Body links open in a new tab, like everywhere else on the site.
  content.querySelectorAll("a").forEach(function (a) {
    a.target = "_blank";
    a.rel = "noopener";
  });

  // Highlight the TOC entry for the section currently in view.
  if ("IntersectionObserver" in window && toc) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        sections.forEach(function (s) {
          s.tocLink.classList.toggle("active", s.wrap === e.target);
        });
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    sections.forEach(function (s) { io.observe(s.wrap); });
  }
});
