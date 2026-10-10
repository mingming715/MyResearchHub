---
title: "자율주행 HW 업데이트 (2026-10-10)"
date: 2026-10-10
category: autonomous-hw
items:
  - title: "AI 칩렛과 안전 칩렛을 한 SoC에 같이 얹으려면 — Renesas가 RegionID로 ASIL-D 간섭을 막는 방법"
    type: "뉴스"
    summary: "소프트웨어 정의 차량(SDV) 시대의 멀티도메인 ECU SoC는 AI 추론과 안전 크리티컬 제어를 하나의 칩 위에서 동시에 돌려야 하는데, 서로 안전 등급이 다른 기능들이 같은 다이(혹은 칩렛 묶음) 안에서 서로 간섭하지 않는다는 것을 증명하기가 어렵다는 게 걸림돌이었다. Renesas는 ISSCC 2026에서 발표한 R-Car X5H용 기술 중 하나로, UCIe 다이투다이 인터페이스에 하드웨어 리소스마다 RegionID를 부여해 동시에 돌아가는 애플리케이션들의 접근 영역을 격리하는 방식을 제시해, 칩렛으로 쪼개진 구성에서도 ASIL D 수준의 간섭 차단을 하드웨어적으로 보장하려 했다. 같은 발표에서 NPU 크기가 이전 세대보다 약 1.5배 커지면서 생긴 클록 분배 문제를 풀기 위해 서브모듈 단위로 mini clock pulse generator를 두는 클록 아키텍처 재설계도 함께 공개했고, 전력 쪽에서는 90개 이상의 전력 도메인으로 밀리와트부터 수십 와트까지 세분화 제어하면서 ring/row형 분할 전력 스위치로 기존 대비 IR드롭을 약 13% 줄이고 게이트 신호 루프백 모니터링으로 고장 시 OFF 상태를 감지하는 안전 설계를 덧붙였다. imec 칩렛 프로그램처럼 패키지 레벨 표준화 논의와는 달리, 실제 양산 SoC 설계에서 칩렛 분할과 ASIL-D 인증을 동시에 만족시키려면 어떤 하드웨어 메커니즘(RegionID 격리, 세분화된 전력 도메인)이 필요한지를 구체적 수치로 보여주는 사례라 SoC/NPU 트레이드오프를 공부하는 데 참고할 만하다."
    source_url: "https://www.eenewseurope.com/en/renesas-advances-automotive-soc-technologies-for-multi-domain-ecus-in-sdv-architectures/"
  - title: "SerDes도 아무 벤더나 섞어 쓸 수 있을까 — MIPI A-PHY 4개사 상호운용 시연이 보여주는 것"
    type: "뉴스"
    summary: "차량용 센서-SoC 연결에 흔히 쓰이는 GMSL(ADI)이나 FPD-Link(TI) 같은 SerDes는 사실상 한 벤더의 송신기와 수신기를 묶어 써야 하는 폐쇄형 생태계여서, 공급망을 한 회사에 묶어두거나 부품을 바꿀 때 재설계가 필요한 lock-in 문제가 있었다. MIPI A-PHY는 처음부터 개방형 표준으로 설계됐지만, 표준 문서가 같다고 해서 서로 다른 회사의 실리콘이 실제로 맞물려 동작한다는 보장은 아니었는데, 2026년 6월 AutoSens USA에서 Sony Semiconductor Solutions·Southchip·Velinktech 세 회사의 A-PHY 송신기가 각각 8MP 카메라 데이터를 약 8Gbps로 15미터 거리에서 Valens Semiconductor의 단일 디시리얼라이저로 동시에 전송하는, 업계 최초의 4개사 상호운용 시연이 공개됐다. 이는 한 달 앞서 시작된 A-PHY Compliance Program(독립 테스트랩 BitifEye가 표준 준수 여부를 검증)과 맞물려, A-PHY가 '문서상 표준'을 넘어 실리콘 단계에서 교차 벤더 호환을 검증받는 단계로 올라섰음을 보여준다. 센서-SoC 인터페이스가 특정 벤더에 종속된 proprietary SerDes에서 PCIe나 USB처럼 교체 가능한 개방형 부품으로 옮겨가는 흐름을 보여주는 이정표라 인터페이스 표준 트렌드를 추적하는 데 의미가 있다."
    source_url: "https://www.mipi.org/press-releases/mipi-a-phy-to-power-industrys-first-four-company-automotive-serdes-interoperability-demonstration-at-autosens-usa"
---
