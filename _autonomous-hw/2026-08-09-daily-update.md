---
title: "자율주행 HW 업데이트 (2026-08-09)"
date: 2026-08-09
category: autonomous-hw
items:
  - title: "센서-컴퓨트 대역폭 격차 — 카메라 8~12대 시대, 자동차 이더넷이 감당 못 하는 이유"
    type: "개념정리"
    summary: "Valens Semiconductor의 Daniel Shwartzberg가 Semiconductor Digest에 기고한 분석은 차세대 ADAS/AD 차량에서 벌어지는 '커넥티비티 갭' 문제를 짚는다. 카메라 한 대가 초당 2.5~6Gbps의 원시 데이터를 쏟아내는데, 차세대 차량은 카메라 8~12대에 레이더·라이다까지 더해 센서 전체 데이터량이 차량당 40~60Gbps에 달할 것으로 예상된다는 것이 핵심 문제 제기다. 원래 중앙 컴퓨트와 존(zonal) 컨트롤러 사이의 백본 라우팅용으로 설계된 자동차 이더넷을 센서 엣지의 비대칭적 포인트투포인트 트래픽에 억지로 끌어쓰려면 노드마다 스위치를 추가해야 하고, 이는 지연시간과 처리 오버헤드로 이어져 프로토콜의 원래 설계 가정과 어긋난다고 지적한다. 대안으로 제시되는 MIPI A-PHY는 CSI-2 신호를 장거리로 손실 없이 전송하도록 설계된 SerDes 표준으로, 레인당 최대 32Gbps 대역폭과 데이지체인 토폴로지를 지원한다. 최근 다룬 OpenGMSL v3.0이나 10BASE-T1S가 각각 카메라 링크·저비용 존형 네트워킹이라는 좁은 문제를 푸는 표준이었다면, 이 글은 그보다 상위 레벨에서 '왜 지금 센서-컴퓨트 연결 대역폭 자체가 병목이 되는가'라는 구조적 배경을 짚어준다는 점에서 함께 읽을 만하다. 다만 필자가 A-PHY 진영인 Valens 소속이라는 점은 감안해서 읽을 필요가 있다."
    source_url: "https://www.semiconductor-digest.com/the-2026-connectivity-gap-why-sensor-to-compute-links-are-the-real-adas-bottleneck/"
  - title: "MIPI A-PHY 컴플라이언스 프로그램 출범 — 자동차 SerDes 표준, 상호운용성 검증 단계로"
    type: "뉴스"
    summary: "MIPI Alliance가 2026년 5월 A-PHY 컴플라이언스 프로그램을 공식 출범시키고 BitifEye Digital Test Solutions를 공인시험기관(ATL)으로 지정했다고 발표했다. 이 프로그램은 서로 다른 벤더가 만든 A-PHY 송수신 칩이 규격대로 동작하는지를 표준화된 절차로 검증해 다중 벤더 통합·기능안전·EMI 강건성을 보장하고 개발 기간과 비용을 줄이는 것을 목표로 한다. 실효성은 6월 AutoSens USA에서 열린 4개사(Sony Semiconductor Solutions, Southchip, Valens, Velinktech) 상호운용성 시연에서 확인됐는데, Sony IMX828 8MP 이미지 센서에서 나온 데이터를 4개 벤더의 서로 다른 송신 칩이 15미터 케이블로 각각 거의 8Gbps씩 전송해 Valens 수신 칩 하나로 받아내는 데 성공했다. GMSL 계열 표준이 사실상 소수 벤더 중심 생태계로 굳어져 있던 것과 달리 A-PHY는 처음부터 개방형 다중 벤더 표준을 표방해 왔는데, 컴플라이언스 프로그램은 그 개방성이 말뿐인 표준이 아니라 실제 상호운용 가능한 생태계로 자리잡고 있음을 보여주는 이정표다. 2026년 여러 완성차 OEM이 A-PHY 칩셋을 채택한 모델의 양산을 시작하는 시점과 맞물려, 센서-SoC 인터페이스 표준의 성숙도를 가늠하는 데 참고할 만한 소식이다."
    source_url: "https://www.mipi.org/press-releases/mipi-alliance-launches-compliance-program-to-strengthen-a-phy-automotive-ecosystem"
  - title: "MIT, 집적형 광위상배열 라이다의 고질적 트레이드오프 해결 — 크로스토크 100%에서 1%로 줄여 광시야각 확보"
    type: "논문"
    summary: "MIT 연구진(Henry Crawford-Eng, Andres Garcia Coleto, Benjamin M. Mazur, Daniel M. DeSantis, Tal Sneh, Jelena Notaros)이 Nature Communications에 발표한 논문은 집적형 광위상배열(OPA) 라이다가 오랫동안 겪어온 근본 딜레마, 즉 넓은 시야각을 얻으려면 안테나 간격을 좁혀야 하는데 그러면 인접 안테나 간 크로스토크가 커져 그레이팅 로브(원치 않는 부가 빔)가 생기면서 빔 품질이 무너지는 트레이드오프를 정면으로 다뤘다. 연구진은 폭과 코러게이션(주름) 형태를 서로 다르게 설계한 세 가지 안테나를 반복 배치하는 방식을 고안했는데, 안테나마다 전파 계수가 달라지면서 인접 안테나 간 간섭이 상쇄돼 반파장 간격(half-wavelength pitch)에서도 크로스토크를 100%에서 1%로 낮추는 데 성공했다. 그 결과 그레이팅 로브 없이 넓은 시야각과 정밀한 단일 빔 조향을 동시에 만족하는 집적 OPA를 실증했다. 최근 다룬 Kyber Photonics의 라이다-온-칩이나 자가보정 FMCW 라이다 칩이 각각 다른 방식으로 solid-state 라이다의 실용화를 노렸다면, 이 연구는 그보다 더 근본적인 안테나 소자 설계 단에서 기계식 스캐닝 없는 OPA 라이다의 오랜 물리적 제약을 푸는 접근이라, 향후 solid-state 라이다가 넓은 FOV와 높은 해상도를 동시에 달성하는 데 쓰일 기초 기술로 주목할 만하다."
    source_url: "https://www.nature.com/articles/s41467-026-71832-y"
---
