---
title: "자율주행 안전·규제 업데이트 (2026-11-09)"
date: 2026-11-09
category: safety-regulation
items:
  - title: "TÜV 라인란드, ISO/PAS 8800 기반 AI 차량 시스템 개발 프로세스 첫 인증"
    type: "뉴스"
    summary: "TÜV 라인란드가 2026년 8월 27일 ISO/PAS 8800(차량용 AI/ML 안전 가이드라인)에 따른 첫 인증을 완료했다고 발표했다. 대상은 둥펑(Dongfeng) 자동차의 제품 개발·연구 조직으로, 인증은 완제품이 아니라 AI 안전 관리 프로세스를 다룬다. ISO/PAS 8800은 기존 ISO 26262(기능안전)와 ISO 21448(SOTIF)이 다루지 못하는 영역, 즉 학습 데이터·모델·훈련 과정·운영 중 거동이 안전에 미치는 영향을 메우기 위해 만들어졌으며, 안전 주장(assurance argumentation)을 AI 수명주기 전반에 걸쳐 요구한다는 점이 핵심이다. 왜 중요한가: AI 기반 주행 시스템이 '왜 안전하다고 믿을 수 있는가'를 구조화된 증거로 제시하도록 요구받는 첫 실제 사례로, 향후 AI 모델을 쓰는 양산 개발팀이 어떤 문서·근거를 준비해야 하는지 가늠하게 해준다. 다만 자료가 TÜV 자체 보도자료 기반이라 인증 범위나 심사 깊이에 대한 독립적 검증은 아직 부족하다."
    source_url: "https://www.tuv.com/press/en/press-releases/development-of-ai-based-vehicle-systems.html"
    pick: true
    pick_reason: "ISO/PAS 8800은 아직 실제 인증 사례가 거의 없는 신생 표준인데, 이번이 세계 최초 인증 사례로 보도되면서 앞으로 AI 기반 주행 시스템 개발팀이 어떤 증거·문서를 준비해야 하는지에 대한 실질적 기준점을 제시한다는 점에서 field-shaping하다."
  - title: "HARA 연계 시나리오 생성으로 CARLA 기반 안전 시뮬레이션의 커버리지 한계 보완"
    type: "논문"
    summary: "'Safety-Centered Scenario Generation for Autonomous Vehicles' 논문은 CARLA 시뮬레이터에서 생성하는 안전-critical 주행 시나리오를 ISO 26262의 위험분석·위험평가(HARA) 항목과 명시적으로 연결하는 프레임워크를 제안한다. 단순히 무작위나 수작업으로 시나리오를 만드는 대신, 각 시나리오가 어떤 기능안전 요구사항과 성능 한계를 검증하는지 추적 가능하게 만들고, time-to-collision 같은 정량적 안전 지표로 결과를 평가한다. 왜 중요한가: 자율주행 검증에서 '얼마나 많은 시나리오를 돌렸는가'보다 '어떤 위험을 실제로 커버했는가'가 핵심 질문인데, 이 연구는 시뮬레이션 기반 검증과 공식 안전 표준(ISO 26262) 사이의 추적성 공백을 메우려는 시도를 보여준다. 다만 초록 기반 정보라 실제 실험 규모나 결과의 일반화 가능성은 원문 확인이 필요하다."
    source_url: "https://arxiv.org/abs/2603.03574"
---
