---
title: "AI 전반 업데이트 (2026-10-22)"
date: 2026-10-22
category: ai-general
items:
  - title: "디퓨전 언어모델, '이론상 병렬 생성'과 '실제로는 좌→우로 수렴'하는 간극"
    type: "논문"
    summary: "오토리그레시브(ARM) 방식의 대안으로 주목받는 디퓨전 언어모델(DLM, 대표적으로 마스크 디퓨전 모델 MDM)은 토큰을 한 번에 하나씩 순서대로 뽑는 대신 전체 시퀀스를 여러 차례의 디노이징으로 동시에 다듬는 방식이라, 원칙적으로는 생성 순서를 자유롭게 정할 수 있고 디코딩 단계 수도 줄일 수 있다는 기대를 받아왔다. ICLR 2026에 발표된 'On Powerful Ways to Generate: Autoregression, Diffusion, and Beyond'는 이 기대를 계산 이론으로 정면으로 따져본다. 충분히 긴 컨텍스트를 가진 MDM은 PRAM 모델의 최적 병렬 시간복잡도에 맞춰 계산적으로 보편적(computationally universal)이라는 것을 보이지만, 다른 조건을 통제하면 '순서를 자유롭게 정할 수 있다'는 MDM의 유연성 자체가 ARM이 풀 수 있는 문제 집합을 실제로 넘어서지는 못한다는 점도 함께 증명한다. 즉 순서 자유도는 이론적 상한을 만지는 도구일 뿐 추가적인 표현력을 공짜로 주지는 않는다는 것이다. 이 결과는 2026년 2월 공개된 후속 실증 연구('Why Diffusion Language Models Struggle with Truly Parallel (Non-Autoregressive) Decoding?')가 보여준 현상과도 맞물린다 — 실제로 구현된 빠른 DLM들은 속도를 위해 디코딩을 최적화할수록 오히려 좌→우로 순서대로 토큰을 확정해가는 ARM과 비슷한 동작으로 수렴해버린다는 것이다. 이론은 '병렬성의 상한'을 제시하지만 현실 구현은 그 상한에 도달하지 못하고 다시 순차적 패턴으로 되돌아간다는 이 간극은, Diffusion LLM을 차세대 아키텍처로 평가할 때 '병렬 생성'이라는 마케팅 문구를 얼마나 곧이곧대로 받아들여야 하는지에 대한 중요한 경계 조건을 보여준다."
    source_url: "https://arxiv.org/abs/2510.06190"
  - title: "'무엇을 하는가'와 '어떻게 연결되는가'를 분리해 멀티에이전트 설계 패턴을 현장에서 검증하다"
    type: "논문"
    summary: "LLM 멀티에이전트 시스템(MAS)을 둘러싼 설계 패턴들은 ReAct, 플래너-워커, 토론(debate) 등 제각각의 이름으로 제안되어 왔지만, 실제 산업 현장에 적용했을 때 어떤 패턴이 어떤 이유로 작동하거나 실패하는지를 체계적으로 검증한 사례는 드물었다. Renney 등이 발표한 'LLM-Enabled Multi-Agent Systems: Empirical Evaluation and Insights into Emerging Design Patterns & Paradigms'는 기존 문헌에 흩어져 있던 MAS 설계 패턴과 패러다임을 정리해 공통된 분류 체계로 묶고, 이를 여러 실제 도메인에 적용한 산업 사례 연구를 통해 실증적으로 검증한다. 논문이 강조하는 핵심은 패턴을 고르는 문제가 결국 신뢰성(reliability)·확장성(scalability)·거버넌스(governance) 사이의 트레이드오프로 귀결된다는 것이며, 특히 자율성이 높아질수록 인간의 감독(human oversight)을 구조적으로 어디에 넣을지가 패턴 선택 자체보다 더 중요한 설계 결정이 된다고 지적한다. 멀티에이전트 오케스트레이션을 '어떤 프레임워크를 쓸까'의 문제가 아니라 '신뢰성·확장성·거버넌스를 어떻게 배분할까'의 아키텍처 문제로 보게 해준다는 점에서, 에이전트 시스템을 설계하거나 평가하는 사람에게 실질적인 체크리스트가 된다."
    source_url: "https://arxiv.org/abs/2601.03328"
---
