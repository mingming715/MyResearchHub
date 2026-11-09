---
title: "자율주행 SW / AI 모델 업데이트 (2026-11-06)"
date: 2026-11-06
category: autonomous-sw
items:
  - title: "같은 벤치마크 1위도 분포가 바뀌면 뒤집힌다 — BevAD가 E2E 드라이빙 플래너의 '무엇이 중요한가'를 다시 물은 이유"
    type: "논문"
    summary: "CVPR Findings 2026에 채택된 'What Matters for Scalable and Robust Learning in End-to-End Driving Planners?'는 end-to-end 주행 플래너의 아키텍처 선택들을 체계적으로 해부하고, 그 결과물로 가볍고 확장 가능한 BevAD를 제시한다. 핵심은 평가 방식 자체를 바꾼 데 있다 — Bench2Drive 같은 기존 폐루프(closed-loop) 벤치마크의 in-distribution 성능만 보면 PlanT 2.0이 BevAD를 근소하게 앞서지만(Driving Score 87.8 대 87.4), 분포가 바뀐 상황에서의 일반화를 재는 Fail2Drive 벤치마크에서는 순위가 완전히 뒤집혀 BevAD가 82.3점으로 PlanT 2.0(73.3점)을 크게 앞섰다. 즉 같은 벤치마크 1위가 실제 로버스트성과는 다른 이야기일 수 있다는 것으로, E2E 주행 모델을 공부하거나 평가할 때 단일 리더보드 점수만으로 '어떤 설계가 더 낫다'고 판단하는 관행 자체에 의문을 던지는 결과다."
    source_url: "https://arxiv.org/abs/2603.15185"
    image: "https://arxiv.org/html/2603.15185v1/method_a1.png"
  - title: "'이유를 설명하는 모델'이 정말 그 이유대로 운전하는가 — 우버가 VLA 주행모델의 추론-행동 인과관계를 뜯어본 벤치마크"
    type: "논문"
    summary: "우버 AV Labs가 공개한 VLADriveBench는 기존 VLA 주행모델 평가가 '설명(Chain-of-Thought)이 행동과 표면적으로 얼마나 일치하는가(alignment)'만 쟀을 뿐, 그 설명이 실제로 행동을 '유발'했는지는 검증하지 않았다는 문제를 짚는다. 이를 위해 관찰 지표에 더해 CoT를 의도적으로 바꿔 끼우는 개입(intervention) 프로토콜을 추가해 ORION, Alpamayo v1.5, Alpamayo-R1 세 모델을 비교했는데, 결과가 역설적이다 — alignment 점수가 가장 높았던 ORION은 오히려 추론이 행동에 주는 실제 인과효과가 거의 없었고(행동 헤드가 CoT를 사실상 무시하며 둘 다 같은 시각입력에 따로 반응했을 뿐), alignment 점수가 더 낮았던 Alpamayo v1.5는 CoT가 궤적에 실질적인 인과적 영향을 미쳤다. 겉으로 '설명을 잘하는 모델'이 실제로는 그 설명대로 운전하지 않을 수 있다는 뜻으로, VLA 주행모델의 해석가능성·설명가능성을 액면 그대로 믿어서는 안 된다는 경고를 준다. 다만 평가 환경이 모델별로 완전히 동일하지 않았다는 2차 소스의 지적이 있어, 효과 크기는 상한선으로 보고 원문 검증이 필요하다."
    source_url: "https://arxiv.org/abs/2606.12706"
    image: "https://arxiv.org/static/base/1.0.1/images/funders/simons-foundation.png"
---
