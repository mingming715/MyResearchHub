---
title: "자율주행 SW / AI 모델 업데이트 (2026-11-19)"
date: 2026-11-19
category: autonomous-sw
items:
  - title: "레이더를 더하기 전에 '얼마나 믿을지'부터 묻는다 — RPGFusion의 4D 레이더 사전지도 융합"
    type: "논문"
    summary: "카메라-레이더 퓨전에서 레이더는 보통 희소한 포인트를 BEV 특징으로 변환해 카메라 특징과 단순히 더하는 식으로 합쳐졌는데, CVPR 2026에 채택된 RPGFusion은 그 전에 레이더 데이터로부터 '이 픽셀이 얼마나 믿을 만한가(공간 신뢰도)'와 '이 픽셀이 얼마나 먼가(깊이)'를 먼저 추정한 레이더 사전지도(prior map)를 만들고, 이를 이미지→BEV 변환 과정 자체에 주입해 기하 정렬과 의미 융합을 함께 보정한다. View-of-Delft와 TJ4DRadSet이라는 두 4D 레이더 벤치마크에서 기존 레이더-카메라 융합 방법들을 능가했다고 보고한다(저자 보고치, 독립 검증 아님). 지금까지 이 코너가 다룬 라이다 중심 BEV 퓨전 계보(PointPillars→CenterPoint→BEVFusion, 11/12)와 달리, 레이더라는 저해상도·노이즈 센서의 '물리적 불확실성'을 먼저 추정해 융합 신호로 바꾸는 접근이라는 점에서 4D 레이더 특유의 퓨전 설계 축을 보여준다."
    source_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Qiu_RPGFusion_4D_Radar_Prior-Guided_Multi-Modal_Fusion_for_3D_Detection_CVPR_2026_paper.html"
  - title: "E2E 주행 모델에도 '포스트트레이닝'이라는 독립된 설계 공간이 있다"
    type: "개념정리"
    summary: "LLM 쪽에서는 사전학습 이후 SFT·RLHF·테스트타임 스케일링 같은 '포스트트레이닝' 단계가 이미 독립된 연구 주제로 자리잡았지만, 엔드투엔드(E2E) 자율주행 모델에서는 학습이 끝난 플래너를 어떻게 더 다듬을 것인가에 대한 논의가 여러 논문에 흩어져 있어 공통된 틀이 없었다. 2026년 7월 공개된 이 서베이는 E2E 주행 모델의 포스트트레이닝 기법을 증류(distillation)·선호 기반 정렬(preference-based alignment)·강화학습(RL)·테스트타임 정제(test-time refinement) 네 갈래로 분류한다. 이는 지난주 다룬 RAD-2(디퓨전 생성기와 RL 판별기를 분리한 구조, 11/13)가 이 네 갈래 중 정확히 어디에 속하고, 다른 갈래(증류나 선호 정렬)로는 같은 문제를 어떻게 풀 수 있는지를 비교해볼 수 있는 지도를 제공한다. 개별 신모델 하나를 아는 것보다, '학습이 끝난 E2E 플래너를 더 안전하고 사람 선호에 맞게 다듬는다'는 질문 자체가 독립된 설계 공간으로 떠오르고 있음을 보여주는 사례다."
    source_url: "https://arxiv.org/abs/2607.08072"
---
