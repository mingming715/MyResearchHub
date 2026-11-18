---
title: "자율주행 HW 업데이트 (2026-11-18)"
date: 2026-11-18
category: autonomous-hw
items:
  - title: "GMSL·FPD-Link 독점 생태계에 처음 균열 — MIPI A-PHY 기반 SerDes, 양산차에 실제로 들어가다"
    type: "뉴스"
    summary: "MIPI A-PHY는 최대 15m 거리에서 고속 카메라·디스플레이 링크를 표준화하기 위해 만들어진 자동차용 장거리 SerDes 규격으로, 지금까지 이 영역은 Maxim(현 Analog Devices)의 GMSL이나 Sony의 FPD-Link 같은 벤더 독점 칩셋이 지배해왔다. 최근 보도에 따르면 Velinktech의 A-PHY 기반 SerDes 칩셋이 실제 양산 차량(Lynk & Co 06 Relive)에 탑재되며 '표준 기반 자동차 SerDes가 양산에 들어간 첫 사례'로 소개됐고, MIPI 얼라이언스도 올해 처음으로 상호호환성 컴플라이언스 프로그램을 가동했다. 이는 단순한 제품 소식이 아니라, 센서-SoC 인터페이스가 폐쇄형 벤더 생태계에서 벗어나 여러 공급사의 송신·수신 칩을 섞어 쓸 수 있는 개방형 표준으로 넘어가는 전환점을 보여준다는 점에서 의미가 있다 — 개방 표준화가 실제 조달·설계 유연성에 어떤 변화를 주는지 지켜볼 만하다."
    source_url: "https://eenewseurope.com/en/mipi-a-phy-enters-mass-production-as-first-automotive-serdes-standard"
  - title: "NPU를 통째로 두 배로 복제하지 않는다 — Renesas가 '필요한 순간에만' 락스텝을 켜는 방법"
    type: "개념정리"
    summary: "ASIL-D 같은 최고 안전무결성 수준을 만족시키려면 전통적으로 연산 유닛을 완전히 이중화한 '락스텝(lockstep)' 구조가 요구됐지만, 거대한 MAC 연산 블록으로 이루어진 NPU/딥러닝 가속기를 그대로 통째로 복제하면 면적과 전력 비용이 감당하기 어려워진다. Renesas는 이 문제를 두 개의 CNNA(컨볼루션 신경망 가속기)를 소프트웨어로 동적으로 전환해, 주변 환경 인식처럼 안전이 중요한 연산을 수행할 때만 두 유닛이 락스텝으로 동작하고 나머지 구간에서는 독립적으로 전체 성능을 쓰는 방식으로 풀었다. Arm 역시 코어 전체가 아니라 DSU(공유 유닛) 수준에서만 락스텝을 걸고 코어는 독립 실행하는 '하이브리드' 모드로 비슷한 절충을 시도하고 있어, 업계 전반이 '완전 이중화 대 성능'이라는 이분법에서 '워크로드별 선택적 이중화'로 옮겨가는 흐름을 보여준다. 자율주행 SoC를 공부할 때 TOPS 숫자보다 이런 안전-성능 트레이드오프 설계가 실제 아키텍처 차별화의 핵심이라는 걸 보여주는 사례다."
    source_url: "https://www.renesas.com/en/blogs/high-reliable-and-performance-deep-learning-accelerator-adas-and-autonomous-driving-systems"
  - title: "PTP/gPTP만으로는 못 푸는 것 — 멀티 ECU 센서 동기화에서 '그랜드마스터 단일 장애점'이 문제가 되는 이유"
    type: "개념정리"
    summary: "자율주행차는 카메라·라이다·레이더를 각기 다른 ECU에 연결하면서도 하나의 시간 기준으로 맞춰야 하는데, 이를 위해 흔히 IEEE 1588(PTP)이나 차량용 프로파일인 IEEE 802.1AS(gPTP)를 쓴다. 그런데 실제로는 시간 동기화를 책임지는 '그랜드마스터' 하나가 멈추면 전체 네트워크의 시간 기준이 흔들리는 단일 장애점 문제, 그리고 경로상의 모든 이더넷 PHY가 하드웨어 타임스탬핑을 지원하지 않으면 정밀도가 깨지는 문제가 실무에서 반복적으로 나타난다. 그래서 실제 양산 설계에서는 PTP 마스터·슬레이브를 이중화하거나, 카메라·라이다·레이더를 PPS 같은 하드웨어 트리거 신호로 한 번 더 못박아 소프트웨어 타임스탬프의 오차를 줄이는 보완이 함께 들어간다. 센서 퓨전 알고리즘 성능만 보고 센서 동기화를 '이미 해결된 배관 문제'로 넘기기 쉬운데, 실제로는 표준 프로토콜 하나로 끝나지 않는 까다로운 시스템 설계 영역이라는 걸 보여주는 내용이다."
    source_url: "https://promwad.com/news/sensor-timestamping-clock-synchronization-multi-ecu-ptp-gptp"
---
