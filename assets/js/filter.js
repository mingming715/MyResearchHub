document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".filter-btn");
  var cards = document.querySelectorAll(".card");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var filter = btn.dataset.filter;
      cards.forEach(function (card) {
        card.hidden = !(filter === "all" ||
          (filter === "pick" ? card.hasAttribute("data-pick") : card.dataset.category === filter));
      });
      document.querySelectorAll(".week-panel").forEach(function (panel) {
        var empty = panel.querySelector(".filter-empty");
        var any = panel.querySelector(".card:not([hidden])");
        if (empty) empty.hidden = !!any || !panel.querySelector(".card");
      });
      markClamped();
    });
  });

  // Summaries are clamped to 2 lines; only show "더보기" where text is actually cut.
  cards.forEach(function (card) {
    var more = card.querySelector(".card-more");
    if (!more) return;
    more.addEventListener("click", function () {
      var open = card.classList.toggle("expanded");
      more.textContent = open ? "접기" : "더보기";
    });
  });
  function markClamped() {
    cards.forEach(function (card) {
      var s = card.querySelector(".card-summary");
      if (s && !card.classList.contains("expanded")) {
        card.classList.toggle("clamped", s.scrollHeight > s.clientHeight + 1);
      }
    });
  }
  // Hidden week panels measure 0, so re-check whenever the week changes.
  markClamped();
  var sel = document.getElementById("week-select");
  if (sel) sel.addEventListener("change", markClamped);
  document.querySelectorAll(".week-step").forEach(function (b) { b.addEventListener("click", markClamped); });
});
