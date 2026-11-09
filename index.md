---
layout: default
title: MyResearchHub
---
<section class="hero">
  <h1>MyResearchHub</h1>
  <p>{{ site.description }}. 매일 아침 자동으로 채워집니다.</p>
</section>

{% assign latest_weekly = site.weekly | sort: 'date' | reverse | first %}
{% if latest_weekly %}
<a class="weekly-banner" href="{{ latest_weekly.url | relative_url }}">
  <span class="label">이번 주 리포트</span>
  <span class="title">{{ latest_weekly.title }}</span>
  <span class="arrow" aria-hidden="true">→</span>
</a>
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

{% if week_keys.size > 0 %}
<div class="toolbar">
  <nav class="filter-nav" id="filter-nav">
    <button class="filter-btn active" data-filter="all">전체</button>
    <button class="filter-btn pick-btn" data-filter="pick">★ Claude 추천</button>
    {% for c in site.data.categories %}
    <button class="filter-btn" data-filter="{{ c[0] }}" data-category="{{ c[0] }}">{{ c[1] }}</button>
    {% endfor %}
  </nav>
  <div class="week-picker">
    <button class="week-step" id="week-older" type="button" aria-label="이전 주">‹</button>
    <select id="week-select" aria-label="주 선택">
      {% for wk in week_keys %}<option value="{{ wk }}">{{ wk }}</option>{% endfor %}
    </select>
    <button class="week-step" id="week-newer" type="button" aria-label="다음 주">›</button>
  </div>
</div>

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
<div class="card-list">
{% comment %}Two passes: Claude picks first, then everything else.{% endcomment %}
{% for pass in (1..2) %}
{% for doc in week_cards %}
  {% for item in doc.items %}
  {% if pass == 1 and item.pick != true %}{% continue %}{% endif %}
  {% if pass == 2 and item.pick == true %}{% continue %}{% endif %}
  <article class="card" data-category="{{ doc.category }}"{% if item.pick %} data-pick{% endif %}>
    <div class="card-meta">
      {% if item.pick %}<span class="pick-badge">★ Claude 추천</span>{% endif %}
      <span class="cat-tag">{{ site.data.categories[doc.category] }}</span>
      <span class="card-type">{{ item.type }}</span>
      <time>{{ doc.date | date: "%m.%d" }}</time>
    </div>
    <h3 class="card-title"><a href="{{ item.source_url }}" target="_blank" rel="noopener">{{ item.title }}</a></h3>
    {% if item.pick_reason %}<p class="pick-reason"><strong>추천 이유</strong> {{ item.pick_reason }}</p>{% endif %}
    <p class="card-summary">{{ item.summary }}</p>
    <button class="card-more" type="button">더보기</button>
  </article>
  {% endfor %}
{% endfor %}
{% endfor %}
</div>
{% if week_cards.size == 0 %}<p class="empty-state">이 주에는 업데이트가 없습니다.</p>{% endif %}
<p class="empty-state filter-empty" hidden>이 주에는 해당하는 항목이 없습니다.</p>

<h2 class="section-heading">X 피드</h2>
{% if week_feed.size > 0 %}
<div class="feed-grid">
{% for doc in week_feed %}
  {% for item in doc.items %}
  <a class="feed-card" href="{{ item.source_url }}" target="_blank" rel="noopener">
    <div class="feed-meta">
      <span class="feed-author">{{ item.author }}</span>
      <time>{{ doc.date | date: "%m.%d" }}</time>
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
