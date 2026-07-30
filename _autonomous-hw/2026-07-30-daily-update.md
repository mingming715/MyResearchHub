---
title: "자율주행 HW 업데이트 (2026-07-30)"
date: 2026-07-30
category: autonomous-hw
items:
  - title: "MIPI A-PHY 자동차용 SerDes 컴플라이언스 프로그램 출범"
    type: "뉴스"
    summary: "MIPI Alliance가 2026년 5월 A-PHY 컴플라이언스 프로그램을 공식 출범시키고, 6월 AutoSens USA에서 Sony Semiconductor, Southchip, Valens, Velinktech 등 4개사가 참여한 상호운용성 시연을 진행했다. A-PHY는 최대 15m까지 카메라·디스플레이 등 센서를 컴퓨트 유닛에 연결하는 장거리 SerDes 표준으로, 기능안전과 보안을 내장한 MASS(MIPI Automotive SerDes Solutions) 프레임워크의 기반이다. 지금까지는 벤더마다 독자 SerDes 칩셋을 써서 카메라와 컴퓨트 유닛을 벤더 종속적으로 묶어야 했는데, 표준화된 PHY와 컴플라이언스 인증이 갖춰지면 서로 다른 회사의 송신기·수신기를 섞어 쓸 수 있게 되어 차량 내 센서 네트워킹의 벤더 락인 문제를 구조적으로 완화한다는 점에서, 왜 인터페이스 표준화가 하드웨어 아키텍처 발전의 중요한 축인지 보여주는 사례다."
    source_url: "https://www.mipi.org/press-releases/mipi-a-phy-to-power-industrys-first-four-company-automotive-serdes-interoperability-demonstration-at-autosens-usa"
  - title: "NPU 설계에서 고정 기능 vs 프로그래머블 아키텍처의 트레이드오프"
    type: "개념정리"
    summary: "SoC 설계 사이클은 24~36개월이 걸리는 반면 최신 AI 모델 아키텍처는 매달 바뀌기 때문에, 오늘 실리콘을 확정해도 3년 뒤 어떤 워크로드를 돌릴지 알 수 없는 근본적인 불확실성이 자동차용 NPU 설계를 지배한다. 이 글은 이런 배경에서 고정 기능(fixed-function) 가속기와 범용 프로그래머블 NPU 사이의 선택, 그리고 특화된 엔진과 명시적 데이터 이동에 의존하는 이기종(heterogeneous) 설계와 하나의 프로그래머블 패브릭 안에서 유연성을 추구하는 통합(unified) 설계 사이의 트레이드오프를 정리한다. 인식·센서 퓨전·경로 계획을 모두 하나의 SoC가 처리해야 하는 자율주행 컴퓨트 아키텍처를 이해하는 데 있어, 벤더의 스펙 수치보다 이런 설계 철학의 차이를 아는 것이 훨씬 오래가는 지식이다."
    source_url: "https://semiengineering.com/addressing-critical-tradeoffs-in-npu-design/"
---
