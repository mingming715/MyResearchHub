---
title: "자율주행 안전·규제 업데이트 (2026-08-13)"
date: 2026-08-13
category: safety-regulation
items:
  - title: "NHTSA-SAE, 자율주행 '객관적 성능기준' 부재 해소 위해 ASCEND 컨소시엄 출범"
    type: "뉴스"
    summary: "NHTSA가 SAE Industry Technologies Consortia와 손잡고 3년·500만 달러 규모의 ASCEND(Advancing America's Safety and Competitiveness for the Evolution of National Deployments) 컨소시엄을 출범시켰다. 핵심 배경은 미국 자동차안전법이 안전기준을 객관적 수치로 명시하도록 요구하는데도, 자율주행시스템의 \"운전 역량\"을 정량적으로 측정할 성능기준 자체가 지금까지 존재하지 않았다는 점이다. 이 공백 때문에 주(州)별·사업자별 패치워크 규제가 이어져 왔고, 컨소시엄은 정상주행 하에서 반복측정 가능한 운전능력 지표와 사고의 선행지표가 될 대리안전지표(surrogate safety metrics)를 업계-정부 공동으로 개발해 향후 연방자동차안전기준(FMVSS)에 반영하는 것을 목표로 한다. 자율주행 개발자 입장에서는 \"우리 시스템이 안전하다\"는 주장을 앞으로는 정성적 논증이 아니라 수치화된 성능기준 충족 여부로 입증해야 하는 시대로 넘어가는 신호탄이라는 점에서, 표준 부재가 실제로 어떤 규제 공백과 개발 불확실성을 낳는지 보여주는 사례다."
    source_url: "https://www.nhtsa.gov/press-releases/cutting-red-tape-safely-fast-track-automated-vehicle"
  - title: "VLA(비전-언어-행동) 기반 자율주행 모델 전용 안전 사례(Safety Case) 패턴 'RAISE' 제안"
    type: "논문"
    summary: "인지-추론-계획을 하나의 파운데이션 모델로 통합하는 VLA(Vision-Language-Action) 기반 자율주행은 기존의 모듈별 요구사항 분해에 기반한 안전 케이스 작성 방식과 구조적으로 맞지 않는다는 문제를 다룬 논문이다. 저자들은 RAISE(assuRance of vlA-based drIving SystEms)라는 프레임워크를 제안해, 확장된 HARA(위해분석 및 위험평가) 결과와 재사용 가능한 안전 논증 패턴을 결합하고, 실제 VLA 주행 모델인 SimLingo를 사례연구 삼아 구조화된 안전 논증을 구축하는 과정을 시연한다. end-to-end AI가 인지부터 조향까지 한 번에 처리하는 아키텍처로 옮겨갈수록 \"왜 안전한가\"를 뒷받침할 전통적 근거(모듈별 요구사항 추적)가 사라지는데, 이 논문은 ISO/PAS 8800 이후 다음 단계인 \"파운데이션 모델 시대의 assurance case\"를 구체적 패턴 언어로 메우려는 초기 시도 중 하나라 눈여겨볼 만하다."
    source_url: "https://arxiv.org/abs/2603.16013"
  - title: "시뮬레이션 통계적 확신을 넘어: 고속도로 주행 안전성 수학적 전수검증을 위한 하이브리드 시공간 논리(HSTL)"
    type: "논문"
    summary: "기존 시나리오 기반 시뮬레이션 검증은 아무리 케이스를 많이 돌려도 결국 \"어디까지 확인했는가\"라는 통계적 확신에 머무른다는 한계가 있는데, 이 논문은 차량 개별 식별과 과거 위치까지 참조 가능한 하이브리드 시공간 논리(HSTL)를 정의하고, 안전 추종거리·안전 교차로 통과·추월·군집주행(platooning) 같은 고속도로 시나리오의 안전 속성을 모델체킹으로 수학적으로 전수 검증하는 알고리즘을 제시한다. 도달 가능 상태와 전이만 탐색하도록 최적화한 알고리즘은 기본 알고리즘 대비 기하급수적 성능 개선을 보였다. SOTIF/시뮬레이션 기반 검증이 \"커버리지가 얼마나 넓은가\"라는 확률적 논증에 머무는 반면 형식검증(formal verification)은 \"이 속성을 위반하는 상태가 원천적으로 존재하지 않음\"을 증명하는 다른 차원의 보증을 제공하며, 실무에서는 계산 비용 때문에 어떤 안전 속성까지 형식검증으로 커버할지 스코프를 정하는 것 자체가 개발 설계에 걸리는 실질적 제약이라는 점을 시사한다."
    source_url: "https://arxiv.org/abs/2603.24443"
---
