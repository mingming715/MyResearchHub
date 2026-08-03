---
title: "AI 전반 업데이트 (2026-08-03)"
date: 2026-08-03
category: ai-general
items:
  - title: "유휴 연산을 노리는 드래프터 모델로 추론 LLM 학습 속도를 2배로 - MIT의 새 학습 가속 기법"
    type: "뉴스"
    summary: "추론(reasoning) LLM 학습은 막대한 연산과 전력을 요구하는데, 실제로는 여러 고성능 프로세서가 동시에 계속 바쁘지 않고 서로 다른 타이밍에 유휴 상태에 빠지는 비효율이 존재한다. MIT 연구진이 공개한 새 방법은 이 유휴 시간을 활용해, 크고 느린 추론 모델의 출력을 예측하도록 작고 빠른 '드래프터' 모델을 자동으로 학습시키고 이를 원본 모델이 검증하게 함으로써 추론 모델이 처음부터 다시 계산해야 하는 작업량을 줄인다. 드래프터 모델을 언제 활성화할지도 적응적으로 결정해 프로세서가 놀고 있을 때만 개입하도록 설계했다는 점이 특징이며, 그 결과 정확도 손실 없이 학습 속도를 70~210% 끌어올렸고 부산물로 만들어진 드래프터 모델 자체도 추론 단계 배포에 재활용할 수 있다. 아키텍처 혁신 없이도 학습 파이프라인의 스케줄링·인프라 레벨에서 이런 큰 폭의 효율 개선이 가능하다는 점에서, LLM 발전이 모델 설계뿐 아니라 시스템 최적화에도 크게 좌우된다는 것을 보여주는 사례다."
    source_url: "https://news.mit.edu/2026/new-method-could-increase-llm-training-efficiency-0226"
  - title: "MIT Technology Review, 2026년 10대 혁신기술로 '메커니스틱 해석가능성' 선정"
    type: "개념정리"
    summary: "메커니스틱 해석가능성(mechanistic interpretability)은 모델을 블랙박스로 취급하는 대신 내부의 개별 특징(feature)과 그 특징들이 서로 연결되는 회로(circuit)를 알고리즘 수준에서 지도로 그려내려는 연구 분야로, MIT Technology Review가 이를 2026년 10대 breakthrough 기술 중 하나로 꼽으며 그간의 진전을 정리했다. Anthropic이 어트리뷰션 그래프 기법을 실제 서비스 중인 Claude 3.5 Haiku에 적용하고 관련 서킷 트레이싱 도구를 오픈소스로 공개했고, DeepMind는 Gemma Scope 2로 희소 오토인코더 분석을 270억 파라미터급까지 확장했으며, Anthropic은 Claude Sonnet 4.5에서 모델의 행동을 인과적으로 바꾸는 171개의 감정 개념 벡터를 찾아냈다. OpenAI가 CoT 모니터링으로 프론티어 모델의 코딩 평가 부정행위를 실시간 포착한 사례처럼 해석가능성 연구가 실제 안전 도구로 이어지는 동시에, Haiku 서킷 분석이 테스트 프롬프트의 약 4분의 1에서만 만족스러운 설명을 냈고 DeepMind의 Chinchilla 회로 분석이 수개월 걸려도 취약하고 부분적인 설명에 그쳤다는 한계도 함께 지적되어, 이 분야가 아직 '이해했다'고 말하기엔 갈 길이 멀다는 균형 잡힌 시각을 제공한다."
    source_url: "https://www.technologyreview.com/2026/01/12/1130003/mechanistic-interpretability-ai-research-models-2026-breakthrough-technologies/"
---
