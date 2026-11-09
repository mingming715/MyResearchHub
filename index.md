---
layout: default
title: MyResearchHub
main_class: wide
---
{% assign latest_weekly = site.weekly | sort: 'date' | reverse | first %}
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

<div class="home" id="home" data-tab="research">
<div class="home-main">

<section class="hero">
  <h1>MyResearchHub</h1>
  <p>{{ site.description }}. 매일 아침 자동으로 채워집니다.</p>
</section>

{% if latest_weekly %}
<a class="weekly-banner narrow-only" href="{{ latest_weekly.url | relative_url }}">
  <span class="label">이번 주 리포트</span>
  <span class="title">{{ latest_weekly.title }}</span>
  <span class="arrow" aria-hidden="true">→</span>
</a>
{% endif %}

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

<div class="home-tabs narrow-only" role="tablist">
  <button type="button" role="tab" data-tab="research" aria-selected="true">연구 피드</button>
  <button type="button" role="tab" data-tab="x" aria-selected="false">X 피드</button>
</div>

{% for wk in week_keys %}
{% assign week_cards = "" | split: "," %}
{% for doc in all %}
  {% assign doc_wk = doc.date | date: "%G-W%V" %}
  {% if doc_wk == wk %}{% assign week_cards = week_cards | push: doc %}{% endif %}
{% endfor %}
<section class="week-panel research-panel" data-week="{{ wk }}" hidden markdown="0">
<div class="card-list">
{% comment %}Two passes: Claude picks first, then everything else.{% endcomment %}
{% for pass in (1..2) %}
{% for doc in week_cards %}
  {% for item in doc.items %}
  {% if pass == 1 and item.pick != true %}{% continue %}{% endif %}
  {% if pass == 2 and item.pick == true %}{% continue %}{% endif %}
  <article class="card" data-category="{{ doc.category }}"{% if item.pick %} data-pick{% endif %}>
    <a class="card-thumb{% if item.image contains 'arxiv.org' %} is-figure{% endif %}" href="{{ item.source_url }}" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true">
      <span class="thumb-label">{{ item.type }}</span>
      {% if item.image %}<img src="{{ item.image }}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">{% endif %}
    </a>
    <div class="card-body">
      <div class="card-meta">
        {% if item.pick %}<span class="pick-badge">★ Claude 추천</span>{% endif %}
        <span class="cat-tag">{{ site.data.categories[doc.category] }}</span>
        <span class="card-type">{{ item.type }}</span>
        <time>{{ doc.date | date: "%m.%d" }}</time>
      </div>
      <h3 class="card-title"><a href="{{ item.source_url }}" target="_blank" rel="noopener">{{ item.title }}</a></h3>
      {% if item.pick_reason %}<p class="pick-reason"><strong>추천 이유</strong> {{ item.pick_reason }}</p>{% endif %}
      {% if item.metrics %}<div class="metric-row">{% for m in item.metrics %}<span class="metric">{{ m }}</span>{% endfor %}</div>{% endif %}
      <p class="card-summary">{{ item.summary }}</p>
      <button class="card-more" type="button">더보기</button>
    </div>
  </article>
  {% endfor %}
{% endfor %}
{% endfor %}
</div>
{% if week_cards.size == 0 %}<p class="empty-state">이 주에는 업데이트가 없습니다.</p>{% endif %}
<p class="empty-state filter-empty" hidden>이 주에는 해당하는 항목이 없습니다.</p>
</section>
{% endfor %}

{% comment %}Narrow screens only: the X feed lives behind the "X 피드" tab.{% endcomment %}
{% for wk in week_keys %}
{% assign week_feed = "" | split: "," %}
{% for doc in xfeed %}{% assign doc_wk = doc.date | date: "%G-W%V" %}{% if doc_wk == wk %}{% assign week_feed = week_feed | push: doc %}{% endif %}{% endfor %}
<section class="week-panel x-inline" data-week="{{ wk }}" hidden markdown="0">
{% include x-list.html posts=week_feed %}
</section>
{% endfor %}
{% else %}
<p class="empty-state">아직 업데이트가 없습니다. 매일 아침 자동으로 채워집니다.</p>
{% endif %}
</div>

<aside class="home-side" aria-label="사이드바">
  {% if latest_weekly %}
  {% assign hero_kw = latest_weekly.keywords | first %}
  <a class="side-card side-report" href="{{ latest_weekly.url | relative_url }}">
    {% if hero_kw.image %}<span class="side-report-img{% if hero_kw.image contains 'arxiv.org' %} is-figure{% endif %}"><img src="{{ hero_kw.image }}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.parentNode.remove()"></span>{% endif %}
    <span class="side-eyebrow">이번 주 리포트</span>
    <span class="side-report-title">{{ latest_weekly.title }}</span>
    <span class="side-link">핵심 3가지 · 꼭 읽을 것 보기 →</span>
  </a>
  {% endif %}
  {% if week_keys.size > 0 %}
  <section class="side-card side-x">
    <h2 class="side-title">X 피드</h2>
    {% for wk in week_keys %}
    {% assign week_feed = "" | split: "," %}
    {% for doc in xfeed %}{% assign doc_wk = doc.date | date: "%G-W%V" %}{% if doc_wk == wk %}{% assign week_feed = week_feed | push: doc %}{% endif %}{% endfor %}
    <div class="week-panel" data-week="{{ wk }}" hidden>
      {% include x-list.html posts=week_feed %}
    </div>
    {% endfor %}
  </section>
  {% endif %}
  {% if latest_weekly %}
  {% if latest_weekly.keywords %}
  <section class="side-card">
    <h2 class="side-title">이번 주 키워드</h2>
    <ul class="side-kw">
    {% for kw in latest_weekly.keywords limit: 5 %}
      <li data-category="{{ kw.category }}"><a href="{{ '/keywords/' | relative_url }}#{{ kw.slug }}">
        <span class="side-kw-cat">{{ site.data.categories[kw.category] }} · 관련 {{ kw.items.size }}개</span>
        <b>{{ kw.name }}</b>
      </a></li>
    {% endfor %}
    </ul>
    <a class="side-more" href="{{ '/keywords/' | relative_url }}">키워드 더 보기</a>
  </section>
  {% endif %}
  {% endif %}

</aside>
</div>
