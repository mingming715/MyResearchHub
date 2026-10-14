---
title: "자율주행 HW 업데이트 (2026-10-14)"
date: 2026-10-14
category: autonomous-hw
items:
  - title: "L2용과 L4용 NPU를 따로 만들 필요가 있을까 — aiWare5가 던진 '하나의 IP로 전부' 승부수"
    type: "뉴스"
    summary: "자율주행 SoC용 NPU는 지금까지 처리해야 할 연산량과 요구되는 안전 등급이 서로 다르다는 이유로, 운전자 보조(L2)용과 완전자율(L4)용을 사실상 다른 IP로 설계해온 경우가 많았다. 헝가리 aiMotive가 2026년 5월 정식 출시한 NPU IP 'aiWare5'는 이 구분 자체를 하나의 확장 가능한 아키텍처로 흡수하겠다는 방향을 제시한다. 엣지 센서 전처리칩부터 차량 중앙 집중형 고성능 컴퓨팅 플랫폼까지 같은 IP를 성능 스케일링만으로 재사용할 수 있다고 주장하며, 여기에 LLM·비전 트랜스포머·상태공간모델(SSM) 같은 최신 워크로드를 동적 FP8 연산으로 처리하는 기능까지 얹었다. 전작 aiWare4가 세계 최초로 ISO 26262 ASIL B 인증을 받은 NPU IP였던 만큼, aiWare5도 완성차·Tier 1이 자사 안전 콘텍스트에 맞춰 재인증할 수 있는 'Safety Element out of Context(SEooC)' 형태로 공급되며, 동작이 결정론적(deterministic)이라는 점이 인증에 유리하다고 설명한다. 실리콘이 나오기 전에 GPU 기반 에뮬레이터로 성능을 5% 오차 내로 미리 추정해 소프트웨어를 검증하는 'aiWare Studio' 툴체인도 함께 제공된다. 이는 SoC 설계에서 'IP 재사용성'과 '안전 인증 비용'이라는 두 트레이드오프를 동시에 풀어보려는 업계의 한 시도를 보여주지만, 구체적 TOPS·전력 수치 등 독립적으로 검증된 벤치마크는 아직 공개되지 않은 업체 자체 발표라는 점은 감안해야 한다."
    source_url: "https://www.automotiveworld.com/news/aimotive-launches-aiware5-for-l2-to-l4-driving-ai/"
---
