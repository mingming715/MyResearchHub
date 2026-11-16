---
title: "자율주행 SW / AI 모델 업데이트 (2026-11-16)"
date: 2026-11-16
category: autonomous-sw
items:
  - title: "엔드투엔드 주행 모델도 속은 3단으로 쪼갰다 — Autoware 재단의 완전 오픈소스 'AutoE2E'가 보여주는 절충"
    type: "뉴스"
    summary: "Autoware 재단의 Robotaxi Working Group이 TIER IV 후원으로 2026년 11월 11일 공개한 AutoE2E v1.0은 소스코드를 Apache 2.0으로, 체크포인트를 Hugging Face로 공개한 카메라 우선(camera-first) 엔드투엔드 주행 모델이다. 흥미로운 점은 '엔드투엔드'를 표방하면서도 내부적으로는 10Hz로 도는 약 8천만 파라미터급 반응형(Reactive) 모델 — 서라운드 카메라 6대를 BEV 그리드로 변환해 6.4초 궤적을 생성 — 과, 아직 개발 중인 더 느린 주기의 World Action·Reasoning 모델로 역할을 나눈 3단 구조를 쓴다는 점이다. 이는 지금까지 이 코너가 다뤄온 '모듈형 vs 엔드투엔드' 논쟁이 이분법이 아니라, 엔드투엔드 모델 내부에서도 빠른 반응 루프와 느린 추론 루프를 분리하는 절충이 하나의 설계 패턴으로 자리잡고 있음을 보여준다. KITScenes-Multimodal 검증셋 기준 공개된 오픈루프 벤치마크에서 평균변위오차(ADE) 0.744m(파인튠)를 기록했지만 이는 녹화된 데이터 위에서의 경로 예측 정확도일 뿐 실제 주행 성능은 아니며, 실차 closed-loop 테스트는 2027년 온로드 시험을 목표로 아직 진행 중이다. 또한 체크포인트 일부는 선행 가중치(nuPlan 등)의 라이선스 제약으로 비상업적 CC BY-NC-SA 4.0에 묶여 있어, '오픈소스 주행 모델'이 실제로 어디까지 자유롭게 쓸 수 있는지 따져볼 좋은 사례이기도 하다."
    source_url: "https://github.com/autowarefoundation/auto_e2e"
---
