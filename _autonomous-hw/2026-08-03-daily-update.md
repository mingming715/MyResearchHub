---
title: "자율주행 HW 업데이트 (2026-08-03)"
date: 2026-08-03
category: autonomous-hw
items:
  - title: "Lumotive, 메타서피스 기반 완전 고체상태 180도 dTOF 라이다 플랫폼 공개"
    type: "뉴스"
    summary: "Lumotive가 자사의 LM10 광제어 메타서피스(LCM)와 Adaps Photonics의 dTOF 센서 ADS6311 'Hawk'를 결합해, 기계식 스캐닝이나 고정 채널 VCSEL 배열의 한계를 넘어서는 완전 고체상태 180도 수평 시야각 라이다를 30fps로 구현했다고 발표했다. 반도체 속도로 빛을 전자적으로 조향하는 LCM 플랫폼 덕분에 일반적인 dTOF 구현(약 15fps)보다 프레임률이 두 배로 높아졌고, 수직 시야각도 소프트웨어로 최대 140도까지 조정할 수 있어 사각지대를 없애고 빠르게 움직이는 객체 추적 성능을 높였다는 점이 특징이다. 기계식 부품 없이 넓은 시야각과 높은 프레임률을 동시에 달성했다는 것은 센서 개수를 줄여 전체 시스템 원가와 신뢰성 문제를 완화할 수 있다는 뜻이어서, 차세대 솔리드스테이트 라이다가 어떤 방향의 트레이드오프를 풀어가고 있는지 보여주는 사례다."
    source_url: "https://www.embedded.com/lumotive-enables-180-solid-state-lidar-at-30-fps/"
  - title: "Hesai, 공간·색상 정보를 ASIC 레벨에서 융합하는 '피카소' SPAD-SoC와 4320채널 차세대 ETX 라이다 공개"
    type: "뉴스"
    summary: "Hesai가 세계 최초의 6D 풀컬러 초고감도 라이다 SPAD-SoC인 '피카소(Picasso)'를 공개했는데, 이는 공간(깊이) 정보와 색상 정보를 별도 센서로 늦게 합치는 대신 반도체 칩 자체에서 원시 데이터 단계부터 융합하는 방식이다. 이를 기반으로 한 차세대 ETX 라이다는 채널 수를 4320개까지 늘렸고 2026년 하반기 양산에 들어가 다수 완성차 모델의 L3 자율주행 시스템에 탑재될 예정이다. 색상 인지가 가능한 라이다는 신호등이나 차선처럼 기존에는 카메라에 의존해야 했던 정보까지 단일 센서로 포착할 수 있어, 카메라-라이다 센서 융합 아키텍처 자체를 단순화할 잠재력이 있다는 점에서 눈여겨볼 만하다."
    source_url: "https://www.hesaitech.com/hesai-unveils-picasso-6d-full-color-spad-soc-next-gen-etx-and-innovations-in-spatial-intelligence-and-physical-ai/"
  - title: "자율주행 AI 칩에서 ASIL D 인증을 받으려면 - 락스텝, 세이프티 아일랜드, 그리고 AI 가속기의 딜레마"
    type: "개념정리"
    summary: "브레이크·조향처럼 가장 엄격한 ASIL D 등급이 요구되는 기능은 전통적으로 두 코어가 동일한 명령어 스트림을 실행하고 비교 로직이 불일치를 감시하는 듀얼코어 락스텝(DCLS) 방식으로 구현되어 왔는데, 이 구조를 AI 가속기(NPU)에 그대로 적용하기는 쉽지 않다는 문제를 다룬 설명글이다. 현재 대부분의 자동차 아키텍처는 AI 가속기를 최고 안전 등급 경계 바깥에 두고 별도의 ASIL D '세이프티 아일랜드'가 그 출력을 검증하게 하는 식으로 우회하며, 서로 다른 아키텍처의 코어 두 개가 같은 연산을 병렬 수행하는 '다이버스 락스텝'으로 결함 탐지력을 높이려는 시도도 나오고 있다. 다만 무작위 하드웨어 결함은 락스텝으로 잡아낼 수 있어도, AI 특유의 '결함이 없는데도 위험한' SOTIF 문제는 중복 설계만으로는 해결되지 않는다는 지적이 핵심으로, NPU 설계가 연산 효율과 안전 인증 사이에서 어떤 근본적 트레이드오프에 부딪히는지를 잘 정리해준다."
    source_url: "https://www.arteris.com/blog/achieving-asil-compliance-in-automotive-ai-systems/"
---
