---
title: "자율주행 SW / AI 모델 업데이트 (2026-10-23)"
date: 2026-10-23
category: autonomous-sw
items:
  - title: "탐지·추적·예측을 각각 풀던 시대는 끝나나 — 모듈형 대신 '하나의 모델'로 묶는 통합 인식의 세 갈래"
    type: "논문"
    summary: "자율주행 인식은 보통 탐지→추적→예측을 별도 모듈로 나눠 순차적으로 처리해 왔지만, 각 단계의 오차가 누적되고 지연이 커지는 문제가 있다. 이 서베이는 이 세 작업을 하나의 모델로 합치는 '통합 인식(Unified Perception)' 접근을 작업 통합 수준·추적 방식·표현 흐름이라는 세 기준으로 분류해 Early/Late/Full Unified Perception이라는 세 갈래로 정리한 첫 체계적 프레임워크다. 모듈형 파이프라인의 해석 가능성과 end-to-end 모델의 효율성 사이에서 업계가 실제로 어느 지점을 택하고 있는지 가늠할 좋은 지도 역할을 한다."
    source_url: "https://arxiv.org/abs/2508.20892"
  - title: "차량들이 모든 걸 공유할 필요는 없다 — FocalComm이 '놓치기 쉬운 대상'만 골라 보내는 이유"
    type: "논문"
    summary: "V2X 협력 인식(collaborative perception)은 보통 차량·인프라 센서가 전체 특징맵을 통째로 주고받는 방식이라 통신량이 크고, 실제로 중요한 건 보행자처럼 놓치기 쉬운 '어려운 인스턴스'인데도 쉬운 객체와 동등하게 취급된다는 문제가 있다. FocalComm(WACV 2026)은 학습 가능한 점진적 하드 인스턴스 마이닝 모듈로 false negative를 줄이는 데 실제로 기여하는 특징만 골라 쿼리 기반으로 융합하며, V2X-Real·DAIR-V2X의 차량 중심·인프라 중심 설정 모두에서 기존 기법을 앞서고 특히 보행자 탐지에서 두드러진 개선을 보였다. '다 같이 보면 좋다'는 전제 대신 '무엇을 공유해야 하는가'를 실제 구조로 풀어낸 사례다."
    source_url: "https://openaccess.thecvf.com/content/WACV2026/html/Shenkut_FocalComm_Hard_Instance-Aware_Multi-Agent_Perception_WACV_2026_paper.html"
---
