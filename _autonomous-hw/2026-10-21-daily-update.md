---
title: "자율주행 HW 업데이트 (2026-10-21)"
date: 2026-10-21
category: autonomous-hw
items:
  - title: "칩렛으로 쪼개도 안전 인증은 하나의 칩처럼 — 르네사스가 UCIe에 RegionID를 얹어 ASIL D를 지킨 방법"
    type: "뉴스"
    summary: "자동차 SoC도 이제 컴퓨트 다이·AI 가속 다이·I/O 다이를 따로 만들어 붙이는 칩렛 구조로 넘어가는 추세지만, 문제는 표준 다이 간 인터커넥트인 UCIe 자체가 '이 접근이 어느 애플리케이션 것인지'를 전달하지 못한다는 점이다. 서로 다른 안전 등급의 소프트웨어가 물리적으로 분리된 칩 사이를 오갈 때 상호 간섭이 없다는 것(freedom from interference)을 증명하지 못하면 ISO 26262 ASIL D 인증 자체가 불가능해진다. 르네사스가 ISSCC 2026에서 발표한 구조는 RegionID를 물리 주소 공간에 매핑해 UCIe 영역에 실어 보내고, 수신 측 MMU와 실시간 코어(이중 락스텝 Cortex-R52)가 이를 검사해 접근을 통제하는 방식으로 이 공백을 메운다. 51.2GB/s 전송 속도를 유지하면서도 칩 경계를 넘는 안전 격리를 구현했다는 점이, 차세대 SDV 중앙집중형 컴퓨팅 플랫폼인 R-Car X5H(최대 400TOPS)에 실리는 이유다. 이는 '칩렛으로 쪼개면 공정 선택과 수율은 유리해지지만 안전 인증 경계가 애매해진다'는, SoC 설계가 칩렛 시대로 넘어가며 공통으로 마주치는 트레이드오프를 보여주는 구체적 사례다."
    source_url: "https://www.businesswire.com/news/home/20260218380401/en/Renesas-Develops-SoC-Technologies-for-Automotive-Multi-Domain-ECUs-Essential-for-the-SDV-Era"
  - title: "기계식 스캔도 MEMS 거울도 없이 — OPA와 분산을 합쳐 한 번의 스윕으로 3D를 찍으려는 라이다"
    type: "논문"
    summary: "FMCW 라이다의 빔 조향 방식은 크게 기계식 회전, MEMS 거울, 그리고 완전 고체 상태인 광위상배열(OPA)로 나뉘는데, 순수 OPA는 움직이는 부품이 없어 신뢰성과 소형화에 유리한 대신 시야각과 출력 확보가 어려워 단독으로는 실용화가 더뎠다. Okano, Chong, Hashemi가 Optics Express(2026)에 발표한 'Solid-state Swept Source Lidar'는 파장을 넓게 스윕하는 레이저의 분산(dispersion)을 한 축의 빔 조향에 쓰고 OPA를 다른 축에 결합해, 여러 번 스캔을 반복하지 않고 한 번의 스윕만으로 프레임당 3D 포인트클라우드를 구성하는 접근을 제시한다. 이는 2020년 같은 저자들이 내놓은 스윕소스 라이다 연구의 후속으로, 회전 미러나 MEMS 없이도 포인트 획득 속도와 FOV를 동시에 확보하려는 '완전 고체 상태 라이다'로 가는 한 경로를 보여준다. 자율주행용 라이다가 결국 비용·신뢰성 때문에 무가동부 구조로 수렴할 수밖에 없다는 업계 전망에서, 이런 조향 메커니즘 자체의 연구가 왜 중요한지를 보여주는 사례다."
    source_url: "https://opg.optica.org/oe/abstract.cfm?doi=10.1364/OE.582856"
---
