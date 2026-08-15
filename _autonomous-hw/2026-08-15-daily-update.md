---
title: "자율주행 HW 업데이트 (2026-08-15)"
date: 2026-08-15
category: autonomous-hw
items:
  - title: "OpenGMSL 협회, 사양 v3.0 공개 — 독점 SerDes였던 GMSL을 멀티벤더 개방형 표준으로"
    type: "뉴스"
    summary: "카메라·센서를 SoC에 연결하는 SerDes 링크 GMSL(Gigabit Multimedia Serial Link)은 그동안 사실상 Maxim(현 Analog Devices) 단일 벤더가 시리얼라이저·디시리얼라이저 칩셋을 모두 공급하는 독점 생태계였는데, 이를 개방하기 위해 결성된 OpenGMSL 협회가 2026년 3월 GMSL2/GMSL3와 완전한 하위 호환을 유지하는 사양 v3.0을 공개했다. 실제로 CES 2026에서는 회원사 Velinktech가 사양 공개 3개월 만에 FPGA로 구현한 시리얼라이저를 ADI의 디시리얼라이저와 상호 연동시켜 영상을 송출하는 데 성공했다고 밝혀, 서로 다른 실리콘 벤더 간 호환이 실제로 동작함을 보여줬다. MIPI A-PHY가 처음부터 개방형 표준으로 설계된 것과 달리, GMSL은 이미 수천만 대의 차량에 깔린 압도적 설치기반을 유지한 채로 사후에 개방을 추진한다는 점이 다르며, 이는 카메라·레이더용 센서-SoC 인터커넥트를 설계하는 입장에서 벤더 락인 리스크와 세컨드소싱 가능성을 가늠하는 데 직접적인 영향을 준다."
    source_url: "https://semiiphub.com/news/opengmsl-v3-0-specification-gmsl2-3-ecosystem"
  - title: "FMCW를 넘어서: 차세대 자동차 레이더 변조 방식(PMCW/DCM, OFDM, OTFS)을 통합 비교한 서베이 논문"
    type: "논문"
    summary: "Remote Sensing지에 게재된 이 서베이는 자동차 레이더가 오랫동안 표준으로 써온 FMCW(주파수변조 연속파) 방식이 겪는 구조적 한계 — 모호속도 제한, TX 다중화 제약, 상호간섭 취약성 — 을 짚고, 이를 대체할 수 있는 PC-FMCW, PMCW(위상코드 변조, Uhnder의 Digital Code Modulation이 이 계열), OFDM, OCDM, OTFS 등 디지털 변조 방식들을 하나의 통일된 신호 모델 위에서 정량 비교한다. 특히 PMCW 계열은 CDMA 코드로 반송파를 변조해 거리-도플러 모호성이 없고 다중 송신기 동시 운용(MIMO)에 유리한 반면 신호처리 복잡도와 실리콘 비용이 올라가는 트레이드오프를 갖는데, 이는 차량마다 레이더 채널 수가 늘고 4D 이미징 레이더가 확산되는 지금 왜 여러 업체가 FMCW를 벗어나려 하는지 설명해주는 이론적 배경이 된다. 특정 제품 발표가 아니라 변조 방식 자체를 체계적으로 정리한 자료라, 개별 칩 뉴스를 접할 때 그 설계 선택이 어느 트레이드오프 축 위에 있는지 판단하는 기준으로 삼기 좋다."
    source_url: "https://www.mdpi.com/2072-4292/17/8/1355"
---
