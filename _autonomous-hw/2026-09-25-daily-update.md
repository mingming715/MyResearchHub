---
title: "자율주행 HW 업데이트 (2026-09-25)"
date: 2026-09-25
category: autonomous-hw
items:
  - title: "헤사이, 컬러 센싱과 ToF 거리 측정을 픽셀 단위로 ASIC에 융합한 'Picasso' SPAD-SoC 공개 — 6D 풀컬러 라이다 시대 예고"
    type: "뉴스"
    summary: "헤사이가 발표한 Picasso SPAD-SoC는 단일 칩에서 SPAD 기반 ToF 거리 측정과 컬러 감지를 픽셀 레벨로 동시에 처리해, 기존에는 라이다 포인트클라우드(XYZ)와 카메라 컬러 정보(RGB)를 소프트웨어 단에서 별도로 정합해야 했던 문제를 센서-SoC 아키텍처 차원에서 원천적으로 해결한다. 40%를 넘는 광자검출효율(PDE)과 오검출을 억제하는 'Photon Isolation 2.0' 회로를 하드웨어에 내장했으며, 이를 기반으로 한 차세대 ETX 라이다는 최대 4320채널·600m 레인지를 지원해 2026년 하반기 양산을 목표로 한다. 이는 센서 퓨전을 후단 알고리즘의 문제가 아니라 칩 설계 단계의 문제로 끌어올린 사례로, '어느 단계에서 모달리티를 융합할 것인가'라는 센서 퓨전 아키텍처의 핵심 트레이드오프를 실리콘 레벨에서 보여준다."
    source_url: "https://www.hesaitech.com/hesai-unveils-picasso-6d-full-color-spad-soc-next-gen-etx-and-innovations-in-spatial-intelligence-and-physical-ai/"
  - title: "Valens, MIPI A-PHY 기반 VA7000 칩셋으로 중국 시장 프리미엄 완성차 4번째 설계 수주 — 개방형 SerDes 표준의 현재 위치"
    type: "뉴스"
    summary: "Valens Semiconductor가 자사 MIPI A-PHY 표준 준수 SerDes 칩셋 VA7000의 네 번째 완성차 설계 수주를 발표했다. VA7000은 최대 15m 배선에서 최대 8Gbps(로드맵상 향후 48Gbps까지)의 카메라·레이더·라이다 연결을 CSI-2 기반으로 지원하며, GMSL 같은 독점 SerDes 대비 '벤더 중립적 개방형 표준'이라는 점이 A-PHY의 핵심 차별점이다. 이번 수주는 2027년 양산 예정으로, 아직 GMSL·자동차 이더넷이 시장을 주도하는 센서-SoC 인터페이스 경쟁 구도에서 표준화된 SerDes가 실제 양산 설계에 얼마나 침투하고 있는지를 보여주는 지표라는 점에서, 개별 벤더 소식을 넘어 인터페이스 표준 경쟁의 흐름을 읽는 데 유용하다."
    source_url: "https://www.prnewswire.com/news-releases/valens-semiconductor-secures-4th-va7000-mipi-a-phy-design-win-with-a-premium-carmaker-serving-the-chinese-market-302653778.html"
  - title: "GMSL2와 차량용 이더넷, 카메라 연결에 뭘 써야 하나 — 점대점 SerDes와 스위치드 네트워크의 근본적 트레이드오프"
    type: "개념정리"
    summary: "이 기술 비교 글은 자율주행 카메라 연결에서 가장 널리 쓰이는 두 인터페이스, GMSL2(점대점 SerDes)와 자동차 이더넷(스위치드 멀티드롭 네트워크)의 아키텍처 차이를 정리한다. GMSL2는 카메라마다 전용 링크를 두어 대역폭 경쟁이 없고 최대 6~12Gbps(GMSL3)의 저지연 처리와 강한 EMC 내성을 제공하는 반면, 자동차 이더넷은 스위치를 통해 여러 센서가 대역폭을 공유하므로 트래픽이 몰리면 지연이 튈 수 있지만 개방 표준이라 벤더 종속이 적고 기존 인프라·툴체인을 재사용할 수 있다는 장점이 있다. 단순한 스펙 비교가 아니라 '전용 링크로 결정론적 지연을 확보할 것인가, 공유 네트워크로 유연성과 확장성을 확보할 것인가'라는 센서-SoC 인터페이스 설계의 근본적 트레이드오프를 정리해주는 기초 자료다."
    source_url: "https://www.e-consystems.com/blog/camera/technology/gmsl2-cameras-vs-ethernet-cameras-a-detailed-comparison/"
  - title: "Seyond, 기계식 부품 없는 완전 고체 라이다 'Hummingbird D1'으로 양산차 OEM 설계 수주 확보 — 고체 라이다 상용화의 다음 단계"
    type: "뉴스"
    summary: "라이다 업체 Seyond가 MEMS나 회전 미러 같은 기계식 스캐닝 요소를 전혀 쓰지 않는 완전 전자식 스캐닝 아키텍처의 단거리 고체 라이다 Hummingbird D1으로, 회사가 '업계 최초'라 밝힌 양산 승용차 OEM 설계 수주를 확보했다. 140°x100° 시야각을 소형 폼팩터에 담았고, 원시 데이터를 출력해 중앙 집중형 컴퓨팅 유닛에서 처리하는 '새틀라이트(satellite)' 아키텍처를 지원해 차량 전체 센서 배치 설계의 자유도를 넓힌다. 그간 고체 라이다는 데모·샘플 단계에 머무르는 경우가 많았는데, 이번 수주는 기계식 부품 제거가 신뢰성(MTBF) 향상뿐 아니라 실제 양산 설계 채택으로도 이어지고 있음을 보여주는 사례라는 점에서 의미가 있다."
    source_url: "https://www.automotiveworld.com/news/seyond-debuts-solid-state-lidar-series-at-ces-2026/"
  - title: "GNSS 타임스탬프로 이기종 센서를 정밀 동기화하는 전용 하드웨어 'SyncBox' 제안 — 멀티모달 센서 동기화의 하드웨어적 해법"
    type: "논문"
    summary: "이 논문은 IMU/INS/GNSS, 카메라, 라이다처럼 서로 다른 내부 클럭과 데이터 특성을 가진 이기종 센서를 정밀 동기화하기 위해 'SyncBox'라는 전용 동기화·전원분배 유닛을 설계하고, 외부 클럭을 지원하지 않는 센서까지 GNSS 유래 타임스탬프로 맞추는 하드웨어·소프트웨어 통합 시스템(Sensor-Head)을 제안한다. 소프트웨어 후처리로 타임스탬프를 보정하는 기존 접근과 달리 센서 마운트 프레임과 동기화 회로를 물리적으로 함께 설계해 정렬 오차와 클럭 드리프트를 원천에서 줄이는 방식으로, 멀티센서 퓨전의 정확도가 결국 알고리즘이 아니라 타이밍 하드웨어의 정밀도에 얼마나 좌우되는지를 잘 보여주는 사례다."
    source_url: "https://ieeexplore.ieee.org/document/11349398/"
---
