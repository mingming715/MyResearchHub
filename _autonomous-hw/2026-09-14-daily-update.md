---
title: "자율주행 HW 업데이트 (2026-09-14)"
date: 2026-09-14
category: autonomous-hw
items:
  - title: "MIPI A-PHY, 세계 최초로 양산차에 탑재되는 자동차용 SerDes 표준이 되다"
    type: "뉴스"
    summary: "카메라·라이다 같은 서라운드 센서를 중앙 컴퓨트로 연결하는 롱리치 SerDes 표준 MIPI A-PHY가 글로벌 완성차 업체의 양산 차량에 실제로 탑재되며 '최초로 양산에 들어간 자동차용 SerDes 표준'이라는 이정표를 세웠다. Valens의 VA7000 A-PHY 칩셋이 Mobileye EyeQ6 High 기반 자율주행 프로젝트의 센서-컴퓨트 연결 인프라로 채택된 데 이어, 50개 이상의 기업이 A-PHY 기반 제품을 개발 중이고 상호운용성 컴플라이언스 프로그램까지 가동되기 시작했는데, 이 표준의 의미는 최대 32Gbps·15m 거리라는 스펙 자체보다 그동안 GMSL 같은 벤더 종속적 점대점(point-to-point) 링크가 나눠 맡던 카메라·디스플레이 연결을 단일 표준 케이블 하나로 통합해 여러 반도체 벤더의 부품을 섞어 쓸 수 있게 한다는 데 있다. 이는 SDV(소프트웨어 정의 차량)가 중앙집중형 컴퓨트 아키텍처로 수렴할수록 센서-SoC 인터페이스의 표준화·상호운용성이 배선 복잡도와 공급망 유연성을 동시에 좌우하는 핵심 변수가 된다는 점을 보여주는 실증 사례다."
    source_url: "https://www.mipi.org/press-releases/mipi-a-phy-reaches-milestone-of-first-serdes-standard-to-enter-mass-production-with-global-automotive-oem"
  - title: "CFD 없이도 5% 오차로 — 자동차 인버터 모듈의 실시간급 과도 열해석 모델"
    type: "논문"
    summary: "ADAS/자율주행 SoC뿐 아니라 전력전자 모듈(인버터) 역시 센서 수 증가와 패키지 소형화로 발열 밀도가 10W/cm²를 넘어서는 시대에, 이 논문은 완전한 CFD 시뮬레이션 없이도 실시간에 가까운 속도로 과도(transient) 열 거동을 예측하는 LPLSP(Lumped Parameter Linear Superposition) 방법을 제시한다. 3상 인버터용 MOSFET 6개가 PCB에 실장된 실제 모듈을 대상으로 자연대류·강제대류·가변유량 조건별 Ansys Icepak CFD 결과와 LPLSP 모델, 그리고 LTI 기반 축소모델(ROM)을 비교한 결과 LPLSP가 폭넓은 사용 조건에서 5% 미만의 오차로 CFD에 근접하는 정확도를 보였는데, 이는 SoC/NPU 설계 단계에서 열 시뮬레이션 반복 비용을 크게 낮춰 DVFS·전력 게이팅 같은 열-성능 트레이드오프 설계를 훨씬 빠르게 탐색할 수 있게 한다는 점에서 자율주행 컴퓨트 하드웨어의 열관리 병목을 다루는 실용적 접근이다."
    source_url: "https://arxiv.org/abs/2606.11226"
---
