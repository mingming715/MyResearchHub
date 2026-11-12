---
title: "자율주행 HW 업데이트 (2026-11-12)"
date: 2026-11-12
category: autonomous-hw
items:
  - title: "오픈 표준 SerDes 'ASA-ML', GMSL·FPD-Link 중심의 폐쇄형 생태계에 도전"
    type: "뉴스"
    summary: "Marelli와 Microchip이 2026년 9월 Automotive SerDes Alliance(ASA)의 개방형 표준 ASA Motion Link(ASA-ML)를 기반으로 차량용 디스플레이 연결 데모를 공개했다. Microchip의 VS7000 시리얼라이저가 중앙 컴퓨트에서 영상을 송출하고 Marelli가 디스플레이 측 디시리얼라이저를 구성해, 최대 16Gbps 대역에서 링크 계층 인증·암호화와 무손실 전송을 구현했다. 지금까지 차량 내 카메라·디스플레이용 SerDes 시장은 Analog Devices의 GMSL, TI의 FPD-Link처럼 공급사별 폐쇄형 생태계가 지배했는데, ASA에는 BMW·포드·GM·현대차·스텔란티스 등 175개 이상의 OEM·반도체사가 참여해 서로 다른 벤더의 칩셋이 상호 호환되는 개방형 PHY 표준을 밀고 있다. 센서-SoC 인터페이스가 특정 벤더에 종속된 전용 링크에서 교체 가능한 '커머디티 링크'로 바뀌는 흐름은 자율주행 하드웨어의 공급망 구조 자체를 흔들 수 있어 주목할 만하다."
    source_url: "https://www.eetasia.com/marelli-and-microchip-advance-open-display-connectivity-for-software-defined-vehicles/"
    pick: true
    pick_reason: "GMSL·FPD-Link 같은 벤더 전용 폐쇄형 SerDes 생태계에 BMW·포드·GM·현대차·스텔란티스 등 175개 이상의 OEM·반도체사가 참여한 개방형 표준이 실제 데모로 도전장을 던진 사례로, automotiveworld·eetasia·ledinside 등 여러 독립 매체가 동시에 다룰 만큼 주목받고 있다(근거: 다수의 독립 매체 보도). 센서-SoC 인터페이스의 공급망 구조 자체를 바꿀 수 있는 아키텍처 전환이라 꼭 짚고 넘어갈 만하다."
  - title: "레이더 센서들의 '동시 처프'를 맞추는 법: 이더넷 PHY 레벨 시각 동기화"
    type: "개념정리"
    summary: "TI가 2026년 10월 공개한 백서 'TSN and MACsec in Automotive Radar Applications'는 다중 레이더 센서를 하나의 퓨전 파이프라인으로 묶을 때 왜 나노초 단위의 시각 동기화가 필요한지를 설명한다. 소프트웨어 기반 타임스탬핑은 수백 마이크로초~밀리초의 오차를 갖고, SoC MAC 계층에서 찍으면 수십 마이크로초, PHY 칩에서 직접 찍으면 나노초 수준까지 오차가 줄어든다. 백서는 IEEE 802.1AS(gPTP)를 이더넷 PHY에 구현해 여러 레이더 헤드가 동일한 기준 시각에 맞춰 처프(chirp)를 동시에 시작하게 하는 방식과, 레이더 원시 데이터가 전송 중 조작되지 않도록 링크 계층에서 IEEE 802.1AE(MACsec)로 보호하는 방식을 함께 제시한다. 레이더가 조널 아키텍처의 중앙 컴퓨트로 집중될수록 센서 간 타이밍 오차가 곧바로 퓨전 성능 저하로 이어지므로, PHY 레벨 타임스탬핑과 보안을 함께 묶는 이 접근은 향후 레이더 네트워킹 설계의 기본 패턴이 될 가능성이 크다."
    source_url: "https://www.ti.com/lit/pdf/STDA052"
---
