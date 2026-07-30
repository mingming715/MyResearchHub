document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".filter-btn");
  var cards = document.querySelectorAll(".card");
  if (!buttons.length || !cards.length) return;

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var filter = btn.dataset.filter;
      cards.forEach(function (card) {
        var show = filter === "all" || card.dataset.category === filter;
        card.style.display = show ? "" : "none";
      });
    });
  });
});
