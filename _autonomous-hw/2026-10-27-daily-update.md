---
title: "자율주행 HW 업데이트 (2026-10-27)"
date: 2026-10-27
category: autonomous-hw
items:
  - title: "AI 컴퓨트는 Nvidia·AMD에 맡기고, 센서 퓨전만 따로 — Waymo가 자체 ASIC을 만든 이유"
    type: "뉴스"
    summary: "Waymo가 Hot Chips 2026에서 공개한 자체 설계 5nm 센서 퓨전 ASIC('carTPU')은, 차량 전체 컴퓨트를 하나의 중앙 SoC로 통합하려는 최근 업계 흐름(BYD의 자체 설계 스마트드라이빙 SoC 등)과는 다른 길을 보여준다. Waymo는 범용 AI 추론은 여전히 Nvidia·AMD 칩에 맡기면서, 13개 카메라·4개 라이다·레이더 스트림을 실시간으로 정렬·융합하는 작업만 따로 떼어내 전용 칩을 만들었다. 이 칩은 카메라 백본(MIPI로 원시 데이터를 받아 DRAM에 적재한 뒤 융합용 그레이스케일 정합 피라미드를 구성), 레이더 백본, 퓨전 백본으로 나뉘어 있고, 레이더·라이다는 공통 수신단을 거쳐 GPU 스테이지에서 무거운 센서 연산을 처리한다. 공개된 사양은 칩당 INT8 160TOPS, FP16 80TFLOPS, 소비전력 75W 미만, 5nm 공정 208mm² 다이 — Waymo 블로그가 내세우는 '1000TOPS 이상'은 차량에 탑재된 여러 ASIC을 합산한 수치로, 이 칩 하나의 스펙과는 다르다. 이 사례는 '왜 센서 퓨전이라는 특정 연산 패턴은 범용 NPU/GPU보다 전용 ASIC을 따로 만들 만한 가치가 있는가'라는, SoC 설계에서 범용화와 전용화 사이의 선택 문제를 잘 보여준다."
    source_url: "https://blog.waymo.com/blog/2026/08/look-under-our-trunk"
---
