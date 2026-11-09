---
title: "자율주행 SW / AI 모델 업데이트 (2026-10-31)"
date: 2026-10-31
category: autonomous-sw
items:
  - title: "인식이 궤적을 따라다니게 하다 — VeteranAD가 '플래닝 먼저, 인식은 그다음' 순서로 바꾼 이유"
    type: "논문"
    summary: "기존 엔드투엔드 주행 모델 대부분은 '인식 → 예측 → 플래닝' 순서로 파이프라인을 쌓는다. AAAI 2026에 발표된 VeteranAD(Fudan 대학)는 이 순서를 뒤집어, 여러 후보 궤적(anchored trajectory)을 먼저 가정해 '플래닝 사전지식(prior)'으로 쓰고, 인식 모듈이 그 궤적들을 따라가며 실제로 마주칠 가능성이 높은 교통 요소에 연산을 집중하게 만든다. NAVSIM navtest 기준 PDM Score 90.2로, 카메라만 쓰는 조건에서 널리 쓰이는 베이스라인 UniAD보다 6.8점 높은 점수를 냈다. 이 발상이 중요한 이유는, '장면을 다 이해한 뒤에 계획을 세운다'는 당연해 보이는 순서가 사실 연산을 장면 전체에 고르게 쓰느라 중요한 부분을 놓치게 만들 수 있다는 걸 짚었기 때문이다 — 플래닝이 인식에 '어디를 봐야 하는지'를 미리 알려주는 쪽이 더 효율적일 수 있다는 설계 철학의 전환이다."
    source_url: "https://arxiv.org/abs/2508.11488"
    image: "https://arxiv.org/html/2508.11488v1/fig_vis_1.png"
  - title: "속도계만 보고 '관성 주행'을 외우는 모델 — AdaptiveAD가 BEV에서 ego status를 떼어낸 이유"
    type: "논문"
    summary: "엔드투엔드 주행 모델을 학습시키면 모델이 '현재 내 차의 속도·과거 궤적(ego status)'만 보고 다음 궤적을 거의 그대로 이어서 찍어버리는 지름길(shortcut)을 배우는 경우가 많다 — 장면을 실제로 이해하지 않아도 로그 데이터에서는 그럴듯한 점수가 나오기 때문이다. AAAI 2026에 발표된 AdaptiveAD(Fudan·Zhejiang Leapmotor)는 이 문제를 구조적으로 막기 위해 아예 두 개의 분기로 나눈다: 하나는 ego status를 BEV 인코딩에서 빼고 순수하게 장면만 보는 분기, 다른 하나는 ego status 자체를 보는 분기. 두 분기의 결과를 장면 인지 정도에 따라 적응적으로 섞는 융합 모듈과, BEV 단방향 증류·자기회귀적 온라인 매핑 같은 보조 과제를 더해 nuScenes 오픈루프 플래닝에서 최고 성능을 내면서도 ego status 의존도를 낮췄다고 보고한다. '모델이 셋을 잘 맞춘다'는 벤치마크 숫자 뒤에 '왜 잘 맞췄는지'를 따로 검증해야 하는 이유를 잘 보여주는 사례다."
    source_url: "https://arxiv.org/abs/2511.13079"
    image: "https://arxiv.org/html/2511.13079v2/Tang_fig1a.png"
---
