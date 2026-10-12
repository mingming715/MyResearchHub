---
title: "자율주행 HW 업데이트 (2026-10-12)"
date: 2026-10-12
category: autonomous-hw
items:
  - title: "레이더 신호를 어디서 처리할까 — Ambarella의 '중앙집중형 4D 레이더'가 던진 안테나 채널 수 논쟁"
    type: "뉴스"
    summary: "4D 이미징 레이더는 고해상도 포인트클라우드를 얻기 위해 보통 MIMO 안테나 채널 수를 늘리는 방향으로 발전해왔는데, 이는 그만큼 데이터량과 전력 소비를 키우는 트레이드오프를 동반한다. Ambarella가 공개한 중앙집중형 4D 레이더 아키텍처는 반대로 안테나 MIMO 채널 수를 경쟁 제품 대비 '한 자릿수' 줄이고, 대신 레이더 원시 데이터를 중앙 프로세서로 보내 카메라·라이다·초음파와 저수준(low-level) 융합을 수행하는 방식으로 대역폭과 전력을 낮췄다고 주장한다. 이는 NXP가 192개 가상 안테나로 단거리·중거리·장거리를 한 센서에서 동시에 처리하는 '고채널 단일칩' 노선이나 중국 Fullway의 4,096포인트급 센서와는 정반대 방향의 선택으로, Yole Intelligence가 짚은 것처럼 '레이더 처리를 센서 엣지에서 할지 중앙 ECU에서 할지'를 가르는 업계의 아키텍처 분기점을 구체적인 제품 사례로 보여준다. 센서 하드웨어 스펙 경쟁 이면에 있는 '어디서 연산할 것인가'라는 질문이 4D 레이더에서도 카메라·라이다와 똑같이 반복되고 있다는 점이 눈에 띈다."
    source_url: "https://www.everythingrf.com/news/details/15566-ambarella-unveils-world-s-first-4d-imaging-radar-architecture-for-autonomous-mobility-systems"
  - title: "1밀리초 오차가 28mm의 차이를 만든다 — 멀티 ECU 센서 동기화에서 PTP·gPTP가 깨지는 지점"
    type: "개념정리"
    summary: "센서 퓨전은 서로 다른 센서의 데이터가 같은 시간 기준 위에 있다고 전제하는데, 시속 100km에서 1밀리초의 타임스탬프 오차가 약 28mm의 차량 이동 거리 오차로 이어진다는 사실이 왜 서브밀리초 단위의 동기화가 필요한지를 잘 보여준다. 이를 위해 자동차 업계는 IEEE 1588 PTP(Sync·Follow_Up·Delay_Req·Delay_Resp 메시지 교환으로 지연을 추정하는 범용 시간동기 프로토콜)의 자동차·산업용 프로파일인 IEEE 802.1AS gPTP(TSN 패밀리의 일부로, AUTOSAR가 정적 지연 설정 등 옵션을 추가로 규정)를 표준으로 채택해왔다. Promwad의 분석 글은 이 프로토콜들이 '이론적으로는' 문제없이 동작하지만, 하드웨어 타임스탬핑 위치, 그랜드마스터 이중화(여러 클록 도메인 간 전환 시 지연 문제), 서로 다른 벤더의 소프트웨어 스택이 뒤섞이는 실제 멀티 ECU 토폴로지에서는 프로토콜이 전제한 조건과 어긋나며 동기화가 깨진다고 지적한다. 센서·SoC 인터페이스 표준(GMSL, MIPI A-PHY)이 '데이터를 어떻게 옮길까'를 다루는 반면, 이 문제는 '그 데이터에 찍힌 시간을 얼마나 믿을 수 있을까'라는 센서 퓨전의 또 다른 전제조건을 다룬다는 점에서 함께 봐야 할 주제다."
    source_url: "https://promwad.com/news/sensor-timestamping-clock-synchronization-multi-ecu-ptp-gptp"
---
