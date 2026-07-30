---
layout: default
title: MyResearchHub
---

# MyResearchHub

자율주행 HW/SW, AI, Edge 양자화, 안전·규제 분야 리서치 아카이브.
매일 아침 자동 업데이트되며, 매주 월요일 한 주 요약이 올라옵니다.

## 이번 주 요약
{% assign weekly = site.weekly | sort: 'date' | reverse %}
{% if weekly.size > 0 %}
- [{{ weekly[0].title }}]({{ weekly[0].url }})
{% else %}
- 아직 없음
{% endif %}

## 카테고리별 최신 업데이트

{% for col in site.collections %}
{% unless col.label == 'weekly' or col.label == 'posts' %}
### {{ col.label }}
{% assign items = col.docs | sort: 'date' | reverse | slice: 0, 5 %}
{% for item in items %}
- [{{ item.title }}]({{ item.url }})
{% endfor %}
{% endunless %}
{% endfor %}

## 전체 주간 리포트
{% for w in weekly %}
- [{{ w.title }}]({{ w.url }})
{% endfor %}
