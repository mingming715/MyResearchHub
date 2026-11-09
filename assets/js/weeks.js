document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".weekly-banner .title, .weekly-list .title").forEach(humanizeWeekText);

  var panels = document.querySelectorAll(".week-panel");
  var select = document.getElementById("week-select");
  if (!panels.length || !select) return;

  function isoWeek(date) {
    var d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    var day = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - day);
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    var week = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return d.getUTCFullYear() + "-W" + String(week).padStart(2, "0");
  }

  var currentWeek = isoWeek(new Date());
  Array.prototype.forEach.call(select.options, function (o) {
    o.textContent = o.value === currentWeek ? "이번 주 · " + weekLabel(o.value) : weekLabel(o.value);
  });

  var older = document.getElementById("week-older");
  var newer = document.getElementById("week-newer");

  function showWeek(wk) {
    select.value = wk;
    panels.forEach(function (p) { p.hidden = p.dataset.week !== wk; });
    // Options are newest-first, so "older" moves down the list.
    older.disabled = select.selectedIndex === select.options.length - 1;
    newer.disabled = select.selectedIndex === 0;
  }

  select.addEventListener("change", function () { showWeek(select.value); });
  older.addEventListener("click", function () { showWeek(select.options[select.selectedIndex + 1].value); });
  newer.addEventListener("click", function () { showWeek(select.options[select.selectedIndex - 1].value); });

  var values = Array.prototype.map.call(select.options, function (o) { return o.value; });
  showWeek(values.indexOf(currentWeek) !== -1 ? currentWeek : values[0]);
});
