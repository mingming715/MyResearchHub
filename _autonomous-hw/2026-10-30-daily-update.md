---
title: "자율주행 HW 업데이트 (2026-10-30)"
date: 2026-10-30
category: autonomous-hw
items:
  - title: "레이더 데이터큐브의 FFT를 비전 프로세서 밖으로 — Cadence Vision 4DR가 4D 이미징 레이더에 거는 전용 가속기"
    type: "뉴스"
    summary: "4D 이미징 레이더는 거리·속도·방위각에 '고도' 축을 더하면서 안테나 수가 늘고 레이더 데이터큐브도 커지는데, 이걸 쓸 만하게 만들려면 매 스윕마다 거리·도플러·방위각·고도 네 방향으로 FFT를 돌려야 해서 연산 부담이 크다. Cadence의 Vision 4DR는 이 FFT 연산만 전담하는 하드웨어 오프로드 엔진으로, Vision DSP와 결합하면 전체 FFT 체인 처리가 최대 3.7배 빨라져 비전 프로세서가 다른 AI 추론 작업에 쓸 여유를 번다. TI가 CES 2026에서 내놓은 8x8 트랜시버 통합 레이더 칩 AWR2188이나 NXP의 3세대 영상 레이더 프로세서 S32R47도 비슷하게 '레이더 전용 가속'과 '중앙 AI 컴퓨트'를 분리하는 방향을 취하고 있어, 4D 레이더가 ADAS의 표준 구성 요소로 자리잡을수록 이런 이종 컴퓨트 분업이 왜 당연한 설계 선택이 되어가는지를 보여준다."
    source_url: "https://semiengineering.com/accelerating-4d-imaging-radar-with-vision-4dr/"
  - title: "센서 하나가 1Gbps를 넘기 시작하자 — Fraunhofer IPMS가 차량용 TSN을 10G로 올린 이유"
    type: "뉴스"
    summary: "4D 이미징 레이더나 고해상도 라이다는 raw 데이터만으로도 1Gbps를 가볍게 넘기는 경우가 흔해지면서, 기존 1G TSN(시간 민감 네트워킹) IP로는 ADAS·인포테인먼트·중앙 컴퓨터를 하나로 묶는 차량 백본이 버거워지고 있다. Fraunhofer IPMS가 2026년 2월 발표한 10G TSN 엔드포인트 IP 코어는 처리량을 기존 대비 10배로 올리면서도 IEEE 802.1AS(gPTP) 기반 하드웨어 시간 동기화, 802.1Qbv 시간 제어 스케줄링, 802.1CB(FRER) 이중화 전송 같은 결정성 보장 기능은 그대로 유지한다. 센서 대수와 해상도가 계속 늘어나는 상황에서 '빠른 이더넷'만으로는 부족하고 '빠르면서도 지연시간이 보장되는' 네트워킹이 왜 따로 필요한지를 잘 보여주는 사례다."
    source_url: "https://www.design-reuse.com/news/202530095-fraunhofer-ipms-develops-new-10g-tsn-endpoint-ip-core-for-deterministic-high-speed-ethernet-networks"
---
