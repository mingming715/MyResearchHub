---
layout: default
title: 주간 리포트 — MyResearchHub
permalink: /weekly/
---
{% assign reports = site.weekly | sort: 'date' | reverse %}
{% if reports.size > 0 %}
<ul class="weekly-list">
{% for report in reports %}
  <li><a href="{{ report.url | relative_url }}">{{ report.title }}</a></li>
{% endfor %}
</ul>
{% else %}
<p class="empty-state">아직 주간 리포트가 없습니다. 매주 월요일 아침 자동으로 생성됩니다.</p>
{% endif %}
