---
title: "자율주행 HW 업데이트 (2026-08-19)"
date: 2026-08-19
category: autonomous-hw
items:
  - title: "split-pixel 대신 LOFIC — 자동차용 HDR 카메라 센서의 픽셀 구조 전환"
    type: "개념정리"
    summary: "Sony, OmniVision, onsemi 등 주요 이미지센서 업체들이 2026년 들어 일제히 LOFIC(Lateral Overflow Integration Capacitor) 픽셀 구조를 자동차용 HDR 센서에 적용하고 있다. 기존 split-pixel(대/소 서브픽셀을 동시 노출해 합성) 방식은 모션 아티팩트를 줄이는 대신 픽셀 면적을 나눠 써야 해서 감도와 공정 스케일링에 불리했는데, LOFIC은 단일 포토다이오드에서 넘치는 전하를 픽셀 내 대용량 커패시터에 저장해 단일 노출로 최대 140dB급 다이나믹레인지와 LED 플리커 억제(LFM)를 동시에 달성한다. Sony 반도체가 발표한 2.1μm 픽셀 논문은 서브픽셀 구조와 LOFIC을 결합해 105dB HDR과 LFM을 함께 구현하는 구체적 회로 설계를 보여주는데, 이는 카메라가 라이다·레이더 없이도 야간·터널·LED 신호등 같은 고대비 환경에서 안정적인 단일 프레임을 뽑아내야 하는 자율주행 요구사항에 픽셀 레벨 아키텍처가 어떻게 대응하는지 보여주는 사례다."
    source_url: "https://imagesensors.org/papers/10.60928/g22r-gyff/"
  - title: "ASIL-D를 SoC 전체가 아니라 '안전 아일랜드'에만 몰아주는 이유"
    type: "개념정리"
    summary: "중앙집중형 자율주행 SoC에서 GPU·NPU·Cortex-A 클러스터 전체를 ASIL-D로 인증하는 것은 비용과 검증 부담이 지나치게 크기 때문에, 업계는 ISO 26262-9의 ASIL 분해(decomposition) 조항을 활용해 칩의 극히 일부 영역만 ASIL-D로 격리시키는 '안전 아일랜드(safety island)' 아키텍처로 수렴하고 있다. 메인 컴퓨트 패브릭은 QM~ASIL-B 수준의 지각·추론을 담당하고, 별도 전원·클록 도메인으로 격리된 안전 아일랜드가 워치독·페일세이프 전이·이중화 모니터링을 ASIL-D로 수행하는 구조인데, 이때 NoC(Network-on-Chip)가 타임아웃 체크·아이솔레이션·엔드투엔드 ECC로 두 도메인 사이의 장애 전파를 막는 역할을 맡는다. 이는 RISC-V 인증 비용 문제나 칩렛 ASIL-D 사례와 맞닿아 있는, SoC 설계 단계에서 안전 인증 비용을 어떻게 아키텍처적으로 국소화하는지에 대한 실전적인 설명이다."
    source_url: "https://promwad.com/news/safety-island-design-asil-decomposition-heterogeneous-compute-fabrics"
  - title: "PTP 대신 하드웨어 트리거로 라이다-카메라를 동기화하는 오픈소스 회로"
    type: "논문"
    summary: "독일 Technische Hochschule Ingolstadt 연구진이 공개한 이 논문은 PTP·gPTP 같은 네트워크 프로토콜 기반 동기화 대신, 라이다의 동기화 펄스를 기준 신호로 삼아 각 카메라마다 독립적으로 프로그래밍 가능한 지연 트리거 펄스를 생성하는 오픈소스 하드웨어 회로를 제안한다. 로드사이드 다중 라이다·다중 카메라 시스템에서 검증한 뒤 라이다 1대와 카메라 7대로 구성된 차량 플랫폼까지 확장했는데, 소프트웨어 타임스탬프 정합에 의존하지 않고 물리적 트리거 신호로 노출 시점 자체를 맞추기 때문에 지터가 훨씬 작고 센서 배치나 마운팅 지오메트리가 달라져도 지연 값만 재설정하면 되는 모듈성을 갖는다. 센서 동기화를 '타임스탬프를 얼마나 정확히 맞추는가'의 문제가 아니라 '애초에 노출을 언제 트리거할 것인가'의 하드웨어 설계 문제로 접근한다는 점에서, PTP/gPTP 타이밍 오차 이슈와는 다른 축의 해법을 보여준다."
    source_url: "https://arxiv.org/abs/2607.15889"
---
