---
title: "자율주행 SW / AI 모델 업데이트 (2026-09-03)"
date: 2026-09-03
category: autonomous-sw
items:
  - title: "CausalVAD, E2E 주행 플래너의 '상관관계 학습'을 인과 개입으로 교정"
    type: "논문"
    summary: "VAD류 planning-oriented E2E 모델들은 데이터에 존재하는 통계적 상관관계를 학습하는데, 저자들은 이를 두고 모델이 진짜 인과관계 대신 데이터셋 편향을 지름길로 삼는 '인과 혼동(causal confusion)' 문제라 규정한다. CausalVAD는 이를 교정하기 위해 경량 플러그인 모듈인 희소 인과 개입 기법(SCIS, Sparse Causal Intervention Scheme)을 제안하는데, 잠재적 주행 맥락을 대표하는 프로토타입 딕셔너리를 구성한 뒤 이를 이용해 모델의 희소 벡터화 쿼리에 개입함으로써 교란 요인(confounder)이 만든 허위 상관을 인과추론의 backdoor adjustment 이론에 따라 능동적으로 제거한다. nuScenes 검증셋에서 평균 L2 오차 0.54m로 최고 성능을 냈고, 특히 데이터가 희소한 회전 구간에서 베이스라인(VAD-tiny)이 0.75m에서 1.07m로 크게 악화되는 반면 CausalVAD는 0.69m로 안정적인 성능을 유지했다. '더 많은 데이터'나 '더 큰 모델'이 아니라 '학습 신호 자체의 인과적 순수성'을 겨냥했다는 점에서, 최근 화두인 추론 능력·시나리오 강건성 논쟁에 인과추론이라는 다른 축을 제시하는 연구다.",
    source_url: "https://arxiv.org/abs/2603.18561"
  - title: "SafeDrive, '하나의 궤적 예측' 대신 '여러 후보를 랭킹'하는 해석 가능한 안전 추론으로 CVPR 2026 하이라이트 선정"
    type: "논문"
    summary: "서울대 최준원 교수팀이 개발한 SafeDrive는 대부분의 E2E 플래너가 단일 최적 궤적을 바로 회귀 예측하는 방식과 달리, 후보 궤적 여러 개를 생성한 뒤 각각의 안전성을 정량 평가해 순위를 매기고 최적 경로를 선택하는 구조를 취한다. ProposalNet이 안전 조건에 맞는 후보 궤적 집합을 우선 걸러내면, SWNet(Sparse World Network)이 각 후보별로 주변 객체의 미래 움직임과 자차와의 상호작용을 인스턴스 중심으로 모델링한 '희소 월드'를 구성하고, FRNet(Fine-grained Reasoning Network)이 쌍별 충돌 없음(No Collision) 점수와 시간대별 주행가능영역 준수 점수를 계산해 왜 이 경로가 더 안전한지를 시간 축을 따라 설명 가능하게 제시한다. CVPR 2026 전체 논문의 약 3%에게만 주어지는 하이라이트 논문으로 선정됐고, 산업통상자원부 지원 하에 한국 자율주행 기업들과 실차 검증이 진행 중인 EAD(Evolutionary Autonomous Driving) 참조 모델에도 통합됐다. E2E 모델의 고질적 약점인 '왜 이 판단을 내렸는지 설명할 수 없다'는 문제를, 아키텍처를 모듈형으로 되돌리지 않고도 랭킹·근거 점수화라는 형태로 푼 사례라는 점에서 주목할 만하다.",
    source_url: "https://arxiv.org/abs/2602.18887"
  - title: "GuideFlow, 생성형 플래너에 물리·안전 제약을 명시적으로 주입해 궤적 모드 붕괴를 해결"
    type: "논문"
    summary: "모방학습 기반 E2E 플래너는 다양한 주행 방식(차선 유지, 추월, 회피 등)이 뒤섞인 데이터를 학습하면서 하나의 평균적 궤적으로 수렴해버리는 '모드 붕괴(mode collapse)' 문제를 겪는 반면, 확산·플로우 매칭 같은 생성형 플래너는 다양한 궤적을 생성할 수 있지만 안전·물리 제약을 암묵적으로만 학습해 명시적으로 강제하기 어렵다는 상반된 약점을 갖는다. GuideFlow는 플로우 매칭 생성 과정 자체에 제약을 직접 주입하는 세 가지 장치를 결합하는데, 사전에 제약을 만족하는 속도장을 사용하는 CVF(Constraining the Velocity Field), 제약을 벗어난 플로우 경로를 교정하는 CF(Constraining the Flow States), 에너지 기반 모델로 최종 궤적을 다듬는 RFE(Refining the Flow by EBM)로 구성된다. 이 구조 덕분에 주행 공격성(aggressiveness)을 생성 과정의 제어 신호로 파라미터화해 스타일을 조절할 수 있으며, NavSim·Bench2Drive 폐루프 벤치마크에서 최고 성능과 함께 nuScenes·ADV-nuScenes에서 낮은 충돌률을 동시에 달성했다. '다양성이냐 안전 제약 준수냐'라는 생성형 E2E 플래너의 근본적 트레이드오프에 대해 암묵적 학습이 아닌 명시적 제약 주입이라는 답을 제시했다는 점에서 설계 철학적으로 의미가 크다.",
    source_url: "https://arxiv.org/abs/2511.18729"
---
