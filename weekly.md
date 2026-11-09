---
layout: default
title: 주간 리포트 — MyResearchHub
permalink: /weekly/
---
<section class="hero">
  <h1>주간 리포트</h1>
  <p>한 주의 업데이트를 카테고리별로 묶어 정리합니다. 매주 월요일 아침 자동 생성.</p>
</section>
{% assign reports = site.weekly | sort: 'date' | reverse %}
{% if reports.size > 0 %}
<ul class="weekly-list">
{% for report in reports %}
  <li><a href="{{ report.url | relative_url }}">
    <span class="title">{{ report.title }}</span>
    <time>{{ report.date | date: "%Y.%m.%d" }}</time>
  </a></li>
{% endfor %}
</ul>
{% else %}
<p class="empty-state">아직 주간 리포트가 없습니다. 매주 월요일 아침 자동으로 생성됩니다.</p>
{% endif %}
