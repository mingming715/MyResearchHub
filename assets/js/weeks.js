document.addEventListener("DOMContentLoaded", function () {
  var panels = document.querySelectorAll(".week-panel");
  if (!panels.length) return;

  function isoWeek(date) {
    var d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    var day = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - day);
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    var week = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return d.getUTCFullYear() + "-W" + String(week).padStart(2, "0");
  }

  // ISO week "YYYY-Www" -> the Monday that starts that week.
  function isoWeekMonday(wk) {
    var m = wk.match(/^(\d+)-W(\d+)$/);
    var jan4 = new Date(Date.UTC(+m[1], 0, 4));
    var jan4Day = jan4.getUTCDay() || 7;
    var monday = new Date(jan4);
    monday.setUTCDate(jan4.getUTCDate() - jan4Day + 1 + (+m[2] - 1) * 7);
    return monday;
  }

  function weekLabel(wk) {
    var monday = isoWeekMonday(wk);
    var month = monday.getUTCMonth() + 1;
    var weekOfMonth = Math.ceil(monday.getUTCDate() / 7);
    return month + "월 " + weekOfMonth + "주차";
  }

  var buttons = document.querySelectorAll(".week-btn");
  var currentWeek = isoWeek(new Date());
  var available = Array.prototype.map.call(panels, function (p) { return p.dataset.week; });
  var defaultWeek = available.indexOf(currentWeek) !== -1 ? currentWeek : available[0];

  buttons.forEach(function (b) {
    b.textContent = b.dataset.week === currentWeek ? "이번 주" : weekLabel(b.dataset.week);
  });

  function showWeek(wk) {
    panels.forEach(function (p) { p.hidden = p.dataset.week !== wk; });
    buttons.forEach(function (b) { b.classList.toggle("active", b.dataset.week === wk); });
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () { showWeek(b.dataset.week); });
  });

  showWeek(defaultWeek);
});
