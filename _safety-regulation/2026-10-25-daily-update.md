---
title: "자율주행 안전·규제 업데이트 (2026-10-25)"
date: 2026-10-25
category: safety-regulation
items:
  - title: "시뮬레이션 결과를 얼마나 믿어도 되는가 — EVIDENT 2가 '신뢰도'에 숫자를 매기려는 이유"
    type: "뉴스"
    summary: "스웨덴 AstaZero가 주관하고 IPG Automotive, Volvo Cars, Aptiv가 참여하는 EVIDENT 2 프로젝트가 2026년부터 2028년까지 진행된다. 목표는 ADAS·자율주행 기능의 가상 검증(virtual validation)이 실제 물리 시험과 얼마나 맞아떨어지는지를 체계적으로 비교하고, 그 '신뢰도'를 숫자로 정량화하는 방법을 만드는 것이다. 지금까지 시뮬레이션 기반 검증은 '물리 시험보다 훨씬 많은 시나리오를 저렴하게 돌릴 수 있다'는 장점 때문에 각종 표준(UN R171, Euro NCAP 2026 프로토콜 등)에서 점점 더 큰 역할을 맡고 있지만, 그 시뮬레이션 결과를 규제 당국이 '증거'로 받아들이려면 먼저 '이 시뮬레이터가 이 상황에서 현실을 얼마나 정확히 재현하는가'를 증명해야 한다는 선결 문제가 남아있었다. EVIDENT 2는 가상-물리 시험 간 상관관계를 맞추는 방법론과 신뢰도(credibility) 지표, 하위 모델(서브모델) 검증 방법을 만들고 Euro NCAP과 긴밀히 협력하는데, 이는 자율주행 검증이 '시뮬레이션을 더 많이 쓰자'는 단계를 지나 '그 시뮬레이션을 왜 믿어도 되는지 증명하자'는 다음 단계로 넘어가고 있음을 보여준다."
    source_url: "https://www.vinnova.se/en/p/evident-2---enabling-virtual-validation-and-verification-for-adas-and-ad-features-2"
  - title: "VLA 모델에도 안전 논증이 필요하다 — SimLingo로 본 '설명 안 되는 모델'의 안전 케이스"
    type: "논문"
    summary: "'Safety Case Patterns for VLA-based driving systems: Insights from SimLingo'는 비전-언어-행동(VLA) 모델처럼 센서 입력에서 곧바로 주행 행동을 내놓는 엔드투엔드형 AI 주행 시스템에, 전통적인 안전 케이스(safety case) 작성 방식을 어떻게 적용할 수 있는지를 다룬다. 기존 안전 케이스는 '이 모듈이 이 조건에서 이렇게 동작한다'는 식으로 모듈 단위의 명확한 인과 사슬을 전제하는데, VLA 모델은 인지·판단·제어가 하나의 신경망 안에 뒤섞여 있어 '왜 이 상황에서 이 행동을 골랐는가'를 그런 식으로 분해해 설명하기 어렵다. 저자들은 자율주행 VLA 연구용 벤치마크인 SimLingo에서 얻은 통찰을 바탕으로, 모듈 분해 대신 쓸 수 있는 안전 케이스 패턴—특정 행동 분포에 대한 통계적 보증, 실패 모드별 모니터링 근거 등—을 제안한다. 최근 이 지면에서 다룬 'UN R171 NATM 멀티필러 프레임워크'나 'AI 어슈어런스 논증의 한계' 논의가 공통적으로 짚는 문제—AI가 왜 그렇게 판단했는지 설명할 수 없을 때 안전을 어떻게 논증하는가—를, 엔드투엔드 주행 모델이라는 가장 어려운 사례에 직접 적용해본 시도다."
    source_url: "https://arxiv.org/abs/2603.16013"
---
