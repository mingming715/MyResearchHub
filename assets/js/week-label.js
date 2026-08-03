// Shared by weeks.js and weekly-report.js.
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

function weekLabelize(text) {
  return text.replace(/(\d{4})-W(\d{2})/, function (_, y, w) {
    return weekLabel(y + "-W" + w);
  });
}

function humanizeWeekText(el) {
  el.textContent = weekLabelize(el.textContent);
}
