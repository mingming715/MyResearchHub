---
layout: default
title: MyResearchHub
---
{% assign latest_weekly = site.weekly | sort: 'date' | reverse | first %}
{% if latest_weekly %}
<div class="weekly-banner-wrap">
<a class="weekly-banner" href="{{ latest_weekly.url | relative_url }}">
  <div class="label">이번 주 리포트</div>
  <div class="title">{{ latest_weekly.title }}</div>
</a>
</div>
{% endif %}

{% assign all = site.autonomous-hw | concat: site.autonomous-sw | concat: site.ai-general | concat: site.edge-quantization | concat: site.safety-regulation | sort: 'date' | reverse %}
{% assign xfeed = site.x-feed | sort: 'date' | reverse %}

{% assign week_keys = "" | split: "," %}
{% for doc in all %}
  {% assign wk = doc.date | date: "%G-W%V" %}
  {% unless week_keys contains wk %}{% assign week_keys = week_keys | push: wk %}{% endunless %}
{% endfor %}
{% for doc in xfeed %}
  {% assign wk = doc.date | date: "%G-W%V" %}
  {% unless week_keys contains wk %}{% assign week_keys = week_keys | push: wk %}{% endunless %}
{% endfor %}
{% assign week_keys = week_keys | sort | reverse %}

{% if week_keys.size > 1 %}
<nav class="week-nav" id="week-nav">
{% for wk in week_keys %}
  <button class="week-btn" data-week="{{ wk }}">{{ wk }}</button>
{% endfor %}
</nav>
{% endif %}

{% if week_keys.size > 0 %}
{% for wk in week_keys %}
{% assign week_cards = "" | split: "," %}
{% for doc in all %}
  {% assign doc_wk = doc.date | date: "%G-W%V" %}
  {% if doc_wk == wk %}{% assign week_cards = week_cards | push: doc %}{% endif %}
{% endfor %}
{% assign week_feed = "" | split: "," %}
{% for doc in xfeed %}
  {% assign doc_wk = doc.date | date: "%G-W%V" %}
  {% if doc_wk == wk %}{% assign week_feed = week_feed | push: doc %}{% endif %}
{% endfor %}
<section class="week-panel" data-week="{{ wk }}" hidden markdown="0">
<div class="card-row">
{% for doc in week_cards %}
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
{% if week_cards.size == 0 %}<p class="empty-state">이 주에는 업데이트가 없습니다.</p>{% endif %}

<h2 class="section-heading">X 피드</h2>
{% if week_feed.size > 0 %}
<div class="feed-grid">
{% for doc in week_feed %}
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
<p class="empty-state">이 주에는 X 피드가 없습니다.</p>
{% endif %}
</section>
{% endfor %}
{% else %}
<p class="empty-state">아직 업데이트가 없습니다. 매일 아침 자동으로 채워집니다.</p>
{% endif %}
