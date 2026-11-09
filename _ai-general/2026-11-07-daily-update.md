---
title: "AI 전반 업데이트 (2026-11-07)"
date: 2026-11-07
category: ai-general
items:
  - title: "데이터 증강 대신 '생각'을 시켰다 — 테스트타임 추론이 reversal curse 너머까지 일반화하는 이유"
    type: "논문"
    summary: "모델이 학습한 지식을 다른 맥락에서 재조합해 쓰지 못하는 'latent generalization' 실패(대표적으로 reversal curse)는 지금까지 주로 학습 시점 데이터 증강으로 때워왔는데, 이 방식은 태스크마다 증강을 새로 설계해야 해서 범용성이 떨어진다. Google DeepMind의 Arslan Chaudhry, Sridhar Thiagarajan, Andrew Lampinen은 정답 여부에 대한 강화학습만으로 모델이 테스트 시점에 긴 사고 과정(chain-of-thought)을 생성하도록 학습시켰고, 이렇게 얻어진 '사고'는 RL 학습에 전혀 쓰이지 않은 새로운 지식 조합에도 일반화되는 반면, 데이터 증강 베이스라인은 RL을 추가해도 분포 밖 일반화에 실패했다. 테스트타임 추론을 단순히 '더 맞히기 위한 트릭'이 아니라 모델이 이미 가진 파라메트릭 지식을 재조합하는 메커니즘으로 볼 수 있다는 근거를 더했다는 점에서, 왜 최근 추론 모델들이 단순 정답률 외의 능력(지식 전이)에서도 차이를 보이는지 이해하는 데 유용하다."
    source_url: "https://arxiv.org/abs/2604.01430"
    image: "https://arxiv.org/html/2604.01430v1/train_vs_test_latent_learning_comparison.png"
  - title: "환경이 다양할수록 월드모델이 '한 번도 안 가본 곳'에 적응한다 — ICL이 켜지는 조건을 찾은 L2World"
    type: "논문"
    summary: "LLM의 in-context learning(ICL)은 많이 연구됐지만, 월드모델이 맥락만 보고 새 환경에 적응하는 능력이 언제 왜 생기는지는 불명확했다. 이 ICLR 2026 논문은 이 능력을 '환경 인식(environment recognition, 이미 본 환경을 맥락에서 식별)'과 '환경 학습(environment learning, 맥락 안에서 새 환경의 동역학을 실제로 배우는 것)'이라는 두 메커니즘으로 쪼개고, 학습에 쓰인 환경의 다양성·복잡성과 맥락 길이가 늘어날수록 후자(진짜 ICL)가 창발한다는 걸 보여준다. 이를 바탕으로 만든 선형 어텐션 기반 장문맥 월드모델 L2World는 내비게이션 과제의 장기 시퀀스 관측 예측에서 새로운 SOTA를 기록했다. LLM에서만 논의되던 '창발'이 월드모델에서도 비슷한 조건(다양성·길이)으로 설명된다는 점에서, 시뮬레이션·에이전트 학습에 쓰이는 월드모델을 이해하는 데도 참고할 만하다."
    source_url: "https://arxiv.org/abs/2509.22353"
    image: "https://arxiv.org/html/2509.22353v2/figure_mstruct_all.png"
---
