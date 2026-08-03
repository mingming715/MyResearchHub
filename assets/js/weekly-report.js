document.addEventListener("DOMContentLoaded", function () {
  var content = document.getElementById("weekly-content");
  var highlights = document.getElementById("weekly-highlights");
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

  // Group flat h2/p/... children into per-section wrappers, colored by category.
  var sections = [];
  var current = null;
  Array.prototype.slice.call(content.children).forEach(function (el) {
    if (el.tagName === "H2") {
      current = { heading: el, cat: categoryFor(el.textContent), nodes: [el] };
      sections.push(current);
    } else if (current) {
      current.nodes.push(el);
    }
  });

  sections.forEach(function (s) {
    if (!s.cat) return;
    var wrap = document.createElement("div");
    wrap.className = "weekly-section";
    wrap.dataset.category = s.cat;
    s.nodes[0].replaceWith(wrap);
    s.nodes.forEach(function (n) { wrap.appendChild(n); });
  });

  // Highlight strip: first sentence of each topic section, quoted.
  var quotes = document.createElement("div");
  quotes.className = "weekly-quotes";
  sections.forEach(function (s) {
    if (!s.cat) return;
    var p = s.nodes.find(function (n) { return n.tagName === "P"; });
    var sentence = firstSentence(p);
    if (!sentence) return;
    var card = document.createElement("div");
    card.className = "highlight-card";
    card.dataset.category = s.cat;
    card.innerHTML =
      '<div class="highlight-label">' + s.heading.textContent + "</div>" +
      '<p class="highlight-quote">“' + sentence + '”</p>';
    quotes.appendChild(card);
  });
  if (quotes.children.length) highlights.appendChild(quotes);

  // Keyword cloud: every linked phrase mentioned this week, deduped.
  var seen = {};
  var terms = [];
  content.querySelectorAll("a").forEach(function (a) {
    var t = a.textContent.trim();
    if (t && !seen[t]) { seen[t] = true; terms.push(t); }
  });
  if (terms.length) {
    var cloud = document.createElement("div");
    cloud.className = "weekly-keywords";
    var cloudLabel = document.createElement("div");
    cloudLabel.className = "weekly-keywords-label";
    cloudLabel.textContent = "이번 주 키워드";
    highlights.appendChild(cloudLabel);
    terms.forEach(function (t) {
      var chip = document.createElement("span");
      chip.className = "keyword-chip";
      var size = Math.max(0.75, Math.min(1.1, 1.3 - t.length / 40));
      chip.style.fontSize = size + "rem";
      chip.textContent = t;
      cloud.appendChild(chip);
    });
    highlights.appendChild(cloud);
  }
});
