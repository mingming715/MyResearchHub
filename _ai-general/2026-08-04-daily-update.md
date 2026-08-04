---
title: "AI 전반 업데이트 (2026-08-04)"
date: 2026-08-04
category: ai-general
items:
  - title: "'유연성의 함정' - 확산 언어모델의 임의 순서 생성이 오히려 추론을 방해한다 (ICML 2026 최우수논문)"
    type: "논문"
    summary: "확산 대형언어모델(diffusion LLM)은 좌에서 우로만 토큰을 생성하는 기존 트랜스포머와 달리 임의의 순서로 토큰을 생성할 수 있어, 이 순서 유연성이 추론 능력에도 유리할 것이라는 기대가 있었다. 그러나 ICML 2026 Outstanding Paper Award를 받은 이 논문은 강화학습(RL)으로 dLLM의 추론력을 끌어올리는 과정에서, 이 유연성이 오히려 모델로 하여금 탐색적으로 중요한 고불확실성 토큰을 회피하게 만들어 해 공간(solution space)이 조기에 붕괴하는 '유연성 함정'을 유발함을 실증했다. 저자들은 해결책으로 RL 탐색 단계에서만 dLLM을 표준 좌→우 순서로 제약하는 극히 단순한 학습법 JustGRPO를 제안했는데, dLLM 전용 RL 기법을 전혀 쓰지 않았음에도 GSM8K에서 기존 최고 기법 SPG 대비 3.0%p, MATH-500에서 ESPO 대비 6.1%p 높은 정확도를 기록했고 병렬 디코딩 속도 이점과 일반 벤치마크 성능도 그대로 유지했다. '아키텍처가 유연할수록 좋다'는 통념을 정면으로 반박하며, 트랜스포머의 유력한 대안으로 떠오른 확산 언어모델 계열의 학습 방법론에 중요한 시사점을 던지는 연구다."
    source_url: "https://arxiv.org/abs/2601.15165"
  - title: "AdamW 이후 첫 근본적 옵티마이저 - Muon이 DeepSeek-V4·GLM-5·Kimi K2의 표준이 되다"
    type: "뉴스"
    summary: "2024년 말 제안된 Muon(Momentum Orthogonalized by Newton-Schulz)은 약 20년간 사실상 표준이었던 AdamW 이후 처음 등장한 근본적인 옵티마이저 혁신으로 꼽히는데, 2026년 들어 실제 프론티어 모델 학습에 본격 채택되며 그 효과가 대규모로 검증되고 있다. AdamW가 파라미터별 2차 모멘트를 독립적으로 적응시키는 것과 달리, Muon은 모멘텀 버퍼를 뉴턴-슐츠 반복법으로 가장 가까운 직교행렬에 근사시켜 업데이트 방향을 모든 차원에서 등방적으로 만들고 가중치 변화의 스펙트럼 특성을 정규화함으로써 더 적은 스텝으로 동일 손실에 도달하게 한다. 1.6조 파라미터급 DeepSeek-V4는 임베딩·헤드 등 일부 모듈을 제외한 대부분을 Muon으로 학습해 수렴 속도와 안정성을 확보했고, 744B 규모의 GLM-5와 Kimi K2 역시 Muon을 채택했으며, NVIDIA가 Megatron Core에 이를 통합해 검증한 결과 Kimi K2 학습에서 Muon(1,080 TFLOPs/s/GPU)이 AdamW(1,051 TFLOPs/s/GPU)보다 오히려 높은 연산 활용률을 보였다. 아키텍처 혁신 못지않게 학습 알고리즘 자체의 개선이 프론티어 모델의 비용과 안정성을 좌우하는 핵심 축이 되었음을 보여주는 사례다."
    source_url: "https://developer.nvidia.com/blog/advancing-emerging-optimizers-for-accelerated-llm-training-with-nvidia-megatron/"
  - title: "LLM 다음 패러다임을 향한 10억 달러 베팅 - 얀 르쿤의 JEPA와 '월드모델' 아키텍처"
    type: "개념정리"
    summary: "튜링상 수상자이자 12년간 메타의 수석 AI 과학자였던 얀 르쿤은 2022년부터 자기회귀(autoregressive) 방식의 LLM이 인간 수준 지능으로 가는 길이 아니라고 주장해 왔고, 2025년 11월 메타를 떠나 2026년 3월 자신의 스타트업 AMI Labs를 통해 유럽 최대 규모인 10억 3천만 달러 시드 투자를 유치하며 이 베팅을 본격화했다. 그가 제시하는 대안 아키텍처 JEPA(Joint Embedding Predictive Architecture)는 다음 토큰이나 픽셀을 직접 예측하는 생성형 모델과 달리 입력을 추상적인 잠재 표현으로 인코딩한 뒤 행동에 따라 그 표현이 어떻게 변화하는지를 예측하도록 학습되며, 언어에 국한된 LLM과 달리 비디오·이미지·센서 데이터 등 멀티모달 입력을 다루고 '다음 단어 맞히기'가 아니라 '세계가 어떻게 변하는가'를 학습 목표로 삼는다는 점에서 물리적 상식과 계획(planning) 능력에 강점이 있다는 것이 핵심 주장이다. 르쿤 스스로도 의미 있는 결과까지 수년에서 최대 10년이 걸릴 것이라 인정할 만큼 단기 성과를 노리는 방향은 아니지만, 트랜스포머·LLM 패러다임이 한계에 봉착했다는 문제의식 아래 최정상급 연구자가 대규모 자본을 걸고 추진하는 대안 아키텍처라는 점에서 LLM 이후 다음 패러다임 논쟁을 이해하는 데 필요한 배경지식이다."
    source_url: "https://techcrunch.com/2026/03/09/yann-lecuns-ami-labs-raises-1-03-billion-to-build-world-models/"
---
