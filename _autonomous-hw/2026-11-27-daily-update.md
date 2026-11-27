---
title: "자율주행 HW 업데이트 (2026-11-27)"
date: 2026-11-27
category: autonomous-hw
items:
  - title: "스핀들 미러 없이도 된다 — 솔리드스테이트 라이다가 가격을 1/10로 끌어내리는 법"
    type: "뉴스"
    summary: "MicroVision의 솔리드스테이트 라이다 Movia S는 양산 단가를 200달러 미만으로 설계하고 있고, Hesai의 솔리드스테이트 유닛도 대당 400~500달러 수준으로, 기존 스피닝 미러 방식(대당 5,000~10,000달러)의 10분의 1 수준이다. 핵심은 회전부 없는 FMCW, 광학 위상 배열(OPA), 하이브리드 세 가지 아키텍처로 기계적 신뢰성 문제와 BOM 비용을 동시에 해결하는 것인데, Seyond의 신제품 Hummingbird D1과 Hesai의 ATX(400만대 이상 수주, 2026년 4월 양산)가 이미 다수 OEM과 양산 계약을 맺으며 이 가격 구조가 실제 공급망에 반영되고 있음을 보여준다. 최근 다뤘던 FMCW 코히런트 라이다의 링크버짓/컴퓨트 트레이드오프(Waymo 분석)와 짝을 이뤄, '성능'이 아니라 '비용 구조'가 라이다 대중화의 다음 관문임을 보여주는 사례다."
    source_url: "https://spectrum.ieee.org/solid-state-lidar-microvision-adas"
  - title: "15m 링크 하나로 카메라와 이더넷을 함께 보낸다 — MIPI A-PHY, 표준화 SerDes로는 처음 양산에 들어가다"
    type: "뉴스"
    summary: "MIPI A-PHY는 GMSL 같은 사실상 표준 대신 업계 공동 표준으로 만들어진 장거리(최대 15m) 자동차용 SerDes 물리계층으로, 2.0 버전부터는 비디오 최대 32Gbps와 함께 1G 이더넷 제어 채널을 올릴 수 있는 업링크 기어를 추가해 Automotive Ethernet·CAN 등 상위 프로토콜을 캡슐화해 얹을 수 있게 했다. 2026년 5월 MIPI 얼라이언스가 업계 최초로 자동차 SerDes 표준에 대한 공식 컴플라이언스 프로그램(물리계층 전기적 특성 검증)을 가동했고, Velinktech 칩셋이 Lynk & Co 06 Relive SUV에 실제로 양산 적용되는 등 '표준화된' SerDes가 벤더 종속적 솔루션을 밀어내는 첫 사례가 되고 있다. 최근 짧게 다뤘던 GMSL·A-PHY·Automotive Ethernet 선택 고민(범용이냐 전용이냐) 기사의 후속으로, 표준화 트랙이 실제로 어디까지 왔는지 보여주는 소식이다."
    source_url: "https://www.mipi.org/press-releases/mipi-a-phy-reaches-milestone-of-first-serdes-standard-to-enter-mass-production-with-global-automotive-oem"
  - title: "카메라·라이다·레이더의 미세한 시간차를 공격한다 — DejaVu가 드러낸 센서 퓨전의 '시간 취약점'"
    type: "논문"
    summary: "카메라(30~60Hz)·라이다(10~20Hz)·레이더가 서로 다른 주기로 데이터를 생성하는 한, 퓨전 모델은 '이 신호들이 같은 순간을 가리킨다'는 암묵적 가정에 의존하게 된다. 이 논문은 네트워크 지연을 이용해 센서 스트림 사이에 미세한 시간 오차(temporal misalignment)를 주입하는 DejaVu 공격을 제시하고, 이것이 멀티모달 인식 모델의 성능을 크게 떨어뜨릴 수 있음을 보인다. 저자들은 방어 기법 AION도 함께 제안하는데, 모달리티 간 시간적 일관성을 모니터링해 공격을 탐지하는 방식으로 AUROC 0.92~0.98을 보고한다. 지금까지 이 카테고리에서 센서 캘리브레이션·퓨전 알고리즘은 자주 다뤘지만 '타이밍 자체가 공격 표면이 된다'는 각도는 처음으로, 센서 동기화 기술의 중요성을 안전이 아니라 보안 관점에서 재조명한다."
    source_url: "https://arxiv.org/abs/2507.09095"
---
