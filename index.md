---
layout: default
title: MyResearchHub
---
{% assign latest_weekly = site.weekly | sort: 'date' | reverse | first %}
{% if latest_weekly %}
<a class="weekly-banner" href="{{ latest_weekly.url | relative_url }}">
  <div class="label">이번 주 리포트</div>
  <div class="title">{{ latest_weekly.title }}</div>
</a>
{% endif %}

{% assign all = site.autonomous-hw | concat: site.autonomous-sw | concat: site.ai-general | concat: site.edge-quantization | concat: site.safety-regulation | sort: 'date' | reverse %}
{% if all.size > 0 %}
<div class="card-row">
{% for doc in all %}
  {% for item in doc.items %}
  <a class="card" data-category="{{ doc.category }}" href="{{ item.source_url }}" target="_blank" rel="noopener">
    <div class="card-meta">
      <span class="card-type">{{ item.type }}</span>
      <span>{{ doc.date | date: "%Y-%m-%d" }}</span>
    </div>
    <h3 class="card-title">{{ item.title }}</h3>
    <p class="card-summary">{{ item.summary }}</p>
  </a>
  {% endfor %}
{% endfor %}
</div>
{% else %}
<p class="empty-state">아직 업데이트가 없습니다. 매일 아침 자동으로 채워집니다.</p>
{% endif %}

<h2 class="section-heading">X 피드</h2>
{% assign xfeed = site.x-feed | sort: 'date' | reverse %}
{% if xfeed.size > 0 %}
<div class="feed-grid">
{% for doc in xfeed %}
  {% for item in doc.items %}
  <a class="feed-card" href="{{ item.source_url }}" target="_blank" rel="noopener">
    <div class="feed-meta">
      <span class="feed-author">{{ item.author }}</span>
      <span>{{ doc.date | date: "%Y-%m-%d" }}</span>
    </div>
    <p class="feed-text">{{ item.text }}</p>
  </a>
  {% endfor %}
{% endfor %}
</div>
{% else %}
<p class="empty-state">아직 X 피드가 없습니다.</p>
{% endif %}
