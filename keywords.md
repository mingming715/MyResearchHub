---
layout: default
title: 키워드 — MyResearchHub
permalink: /keywords/
---
<section class="hero">
  <h1>키워드</h1>
  <p>주간 리포트에서 뽑은 핵심 키워드를 모았습니다. 여러 주에 걸쳐 등장한 키워드는 주차별로 함께 묶입니다.</p>
</section>

{% assign reports = site.weekly | sort: 'date' | reverse %}
{% assign slugs = "" | split: "," %}
{% for r in reports %}{% for k in r.keywords %}
  {% unless slugs contains k.slug %}{% assign slugs = slugs | push: k.slug %}{% endunless %}
{% endfor %}{% endfor %}

{% if slugs.size == 0 %}
<p class="empty-state">아직 키워드가 없습니다. 주간 리포트가 생성되면 채워집니다.</p>
{% else %}
<nav class="kw-chips">
{% for slug in slugs %}
  {% assign latest = nil %}{% assign n = 0 %}
  {% for r in reports %}{% for k in r.keywords %}{% if k.slug == slug %}
    {% unless latest %}{% assign latest = k %}{% endunless %}{% assign n = n | plus: 1 %}
  {% endif %}{% endfor %}{% endfor %}
  <a href="#{{ slug }}" data-category="{{ latest.category }}">{{ latest.name }}{% if n > 1 %} <b>{{ n }}</b>{% endif %}</a>
{% endfor %}
</nav>

{% for slug in slugs %}
{% assign latest = nil %}
{% for r in reports %}{% for k in r.keywords %}{% if k.slug == slug %}{% unless latest %}{% assign latest = k %}{% endunless %}{% endif %}{% endfor %}{% endfor %}
<section class="kw-entry" id="{{ slug }}" data-category="{{ latest.category }}">
  <header class="kw-entry-head">
    {% if latest.image %}<img class="kw-thumb{% if latest.image contains 'arxiv.org' %} is-figure{% endif %}" src="{{ latest.image }}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">{% endif %}
    <div>
      <span class="cat-tag">{{ site.data.categories[latest.category] }}</span>
      <h2>{{ latest.name }}</h2>
      <p>{{ latest.summary }}</p>
    </div>
  </header>
  {% for r in reports %}{% for k in r.keywords %}{% if k.slug == slug %}
  <div class="kw-week">
    <a class="kw-week-title" href="{{ r.url | relative_url }}">{{ r.title }}</a>
    {% include keyword-items.html urls=k.items %}
  </div>
  {% endif %}{% endfor %}{% endfor %}
</section>
{% endfor %}
{% endif %}
