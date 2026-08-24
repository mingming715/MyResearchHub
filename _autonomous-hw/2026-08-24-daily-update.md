---
title: "자율주행 HW 업데이트 (2026-08-24)"
date: 2026-08-24
category: autonomous-hw
items:
  - title: "ViT 대신 MobileNet, Transformer 대신 SSM 하이브리드 — 코크핏 NPU에 맞춰 통째로 다시 설계한 자동차용 VLM 'AutoNeural'"
    type: "논문"
    summary: "자동차용 NPU(예: 퀄컴 SA8295P 코크핏 SoC)는 정수 연산만 효율적으로 처리하고, 어텐션이 많은 아키텍처는 양자화가 잘 안 맞는다는 근본적 제약이 있다. 대부분의 비전-언어모델(VLM)은 이런 제약을 고려하지 않고 설계된 뒤 나중에 이식되면서 큰 양자화 오차와 지연시간을 떠안는다. AutoNeural은 처음부터 NPU 제약을 염두에 두고 아키텍처를 공동설계했다: ViT의 양자화 비친화적 어텐션 패턴 대신 MobileNetV5 스타일 CNN 비전 인코더를 쓰고, 언어 백본은 Transformer와 상태공간모델(SSM)을 결합한 하이브리드 구조를 택했다. 실제 SA8295P 실리콘에서 ViT-Transformer 기반 대비 첫 토큰 생성 14배, 디코딩 처리량 3배, 양자화 오차 7배 감소를 보였고, 해상도도 InterVL 2B(448x448)보다 높은 768x768을 지원한다. 'NPU가 실제로 효율적으로 실행할 수 있는 것'과 '모델 아키텍처 설계자가 선택할 수 있는 것' 사이의 트레이드오프를 구체적으로 보여주는 사례로, 자동차용 SoC/NPU 설계 제약을 이해하는 데 유용하다."
    source_url: "https://arxiv.org/abs/2512.02924"
  - title: "TOPS 숫자만으로는 비교할 수 없다 — MLCommons, 자동차 AI 가속 하드웨어 최초의 표준 벤치마크 'MLPerf Automotive' 공개"
    type: "개념정리"
    summary: "MLCommons가 Autonomous Vehicle Computing Consortium과 함께, 자동차용 AI 가속 하드웨어를 위한 최초의 공개 표준 벤치마크를 정의했다. 2D 객체 탐지, 2D 시맨틱 분할, 3D 객체 탐지를 다루며, 데이터센터용 ML 벤치마크가 처리량(throughput) 중심인 것과 달리 자동차의 실시간·안전 제약을 반영해 지연시간(latency) 중심 지표를 채택했고, 표준화된 전력 측정 프로토콜과 실리콘 이전(pre-silicon) 평가를 위한 제출 카테고리까지 마련했다. NVIDIA·퀄컴·모빌아이·르네사스 등이 내세우는 TOPS 수치는 측정 조건이 제각각이라 서로 비교가 불가능한데, 이 벤치마크는 그런 벤더 주장들을 동일 선상에서 비교할 수 있게 하는 공통 잣대를 제공한다는 점에서 SoC/NPU 설계·성능 트레이드오프를 이해하는 데 기초가 되는 자료다."
    source_url: "https://arxiv.org/abs/2510.27065"
---
