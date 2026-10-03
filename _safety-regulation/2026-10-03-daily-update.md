---
title: "자율주행 안전·규제 업데이트 (2026-10-03)"
date: 2026-10-03
category: safety-regulation
items:
  - title: "ISO/PAS 8800, 이제 칩 단위까지 내려오다 — Synopsys MACsec IP 세계 최초 컴포넌트 인증"
    type: "뉴스"
    summary: "지금까지 ISO/PAS 8800 인증은 완성차 업체의 AI 개발 프로세스나 전체 AI 시스템 단위에서만 이루어졌는데, SGS TÜV Saar가 Synopsys의 차량용 이더넷 보안 IP 'MACsec'을 반도체 IP 블록 단위로 평가해 인증한 것은 이번이 처음이다. AI 기반 주행 기능은 센서-프로세서 간 통신이 변조되거나 지연되면 오작동할 수 있기 때문에, 데이터를 암호화하는 보안 IP조차 '예측 가능한 타이밍'을 보장해야 AI 안전 요구사항을 만족한다는 점을 이번 인증이 보여준다. 이에 따라 반도체 IP 공급사는 품질 매뉴얼, AI 안전 분석, AI 안전 주장(assurance argument), 평가 보고서를 세트로 제공해야 하고, 완성차 업체는 이런 칩 단위 안전 증거를 모아 시스템 레벨 안전 케이스를 구축해야 하는 식으로, 공급망 전체에 안전 증거 요구가 확산되는 신호로 해석된다."
    source_url: "https://www.synopsys.com/blogs/chip-design/macsec-ip-iso-pas-8800-automotive.html"
  - title: "표준은 나왔는데 '증거'를 어떻게 만드나 — Keysight-요크대, SDV용 AI 안전 평가 방법론 공동연구"
    type: "뉴스"
    summary: "ISO/PAS 8800은 AI 요소에 대한 안전 증거 제시를 요구하지만, 그 증거를 구체적으로 어떤 테스트와 지표로 만들어야 하는지는 표준 본문에 명시돼 있지 않다는 업계의 공백을 겨냥해, Keysight와 University of York의 Centre for Assuring Autonomy(CfAA)가 소프트웨어 정의 차량(SDV)용 AI 안전 평가 방법론을 공동 개발하기로 했다. 핵심은 '측정 가능한 안전 점수화(safety-scoring)' 체계를 만들어 정성적 서술에 머물던 안전 논증(safety argument)을 수치화된 테스트 결과로 뒷받침하려는 시도다. 연구 결과는 Keysight의 AI Software Integrity Builder 제품에 반영될 예정이어서, 개발팀이 AI 모델 출시 전 거쳐야 할 테스트 체크리스트가 한층 구체화될 전망이다. 즉 표준이 먼저 나오고 '어떻게 증명할지'는 산업계가 거꾸로 채워나가야 하는 현재 상황을 잘 보여주는 사례다."
    source_url: "https://www.keysight.com/us/en/about/newsroom/catalog/news-release.2026.0903_pr26-092_keysight-collaborates-with-the-centre-for-assuring-autonomy-at-the-university-of-york-to-advance-ai-safety-assurance-for-software-defined-vehicles.html"
  - title: "차량에 LLM을 넣으려면 ISO 21448만으론 부족하다 — Talk2Drive로 본 LLM 특화 안전 결함"
    type: "논문"
    summary: "차량 제어에 LLM(대형언어모델)을 통합하려는 시도가 늘면서, 기존 SOTIF(ISO 21448)가 다루는 지연시간 등 '엔지니어링적 불충분성'만으로는 안전을 담보할 수 없고, ISO/PAS 8800이 짧게만 언급하는 정렬(alignment) 문제 같은 LLM 특유의 결함 모드가 자동차 안전 논의에서 빠져 있다는 점을 오픈소스 LLM 기반 주행 프레임워크 'Talk2Drive' 사례로 분석한 논문이다. 연구진은 LLM이 운전 중 위험한 자연어 지시를 그대로 수행하거나, 모델 업데이트로 응답이 예측과 달라지는 구체적 위험 시나리오에 대해 안전 논증(safety argument)을 시범 구축했는데, 결과적으로 "정렬 문제는 자동차 안전 문헌에서 아직 거의 다뤄지지 않았다"는 공백을 드러냈다. 이는 LLM 기반 기능을 차량에 넣으려는 개발팀에게 기존 표준 체크리스트 통과만으로는 충분한 안전 근거가 되지 않으며, 별도의 정렬·강건성 테스트와 논증을 추가해야 한다는 제약을 시사한다."
    source_url: "https://arxiv.org/abs/2606.14327"
  - title: "위험장(Risk Field)으로 희귀 시나리오를 솎아낸다 — 디지털 트윈 기반 자율주행 안전검증 프레임워크"
    type: "논문"
    summary: "실도로 주행 테스트만으로는 비용이 크고 재현이 어려운 데다, 안전에 결정적인 희귀·극단 시나리오를 충분히 노출시키기 어렵다는 검증의 근본적 한계를 해결하기 위해, 장애물·차선이탈·도로경계·TTC(충돌까지 시간)·승차감 위험을 하나의 '주행 위험장(driving risk field)'으로 통합 표현하는 폐루프 디지털 트윈 검증 프레임워크가 제안됐다. 이 위험장은 디지털 트윈 시나리오 라이브러리 안에서 고위험 시나리오를 자동으로 순위화하고, 강화학습 기반 주행정책 학습에 기존 보상-페널티 방식보다 더 밀도 높고 구체적인 안전 가이드를 제공한다. 다만 연구진도 이 방법의 실효성이 결국 가상 모델의 충실도, 위험 보정(calibration), 시뮬레이션-실차 간 전이(sim-to-real) 격차에 의해 제약된다는 점을 인정해, 디지털 트윈 기반 검증이 SOTIF가 요구하는 '엣지 케이스 커버리지'를 얼마나 신뢰성 있게 대체할 수 있는지는 여전히 열린 문제로 남는다."
    source_url: "https://arxiv.org/abs/2607.09772"
---
