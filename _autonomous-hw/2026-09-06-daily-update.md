---
title: "자율주행 HW 업데이트 (2026-09-06)"
date: 2026-09-06
category: autonomous-hw
items:
  - title: "Seyond, 기계부품 없는 완전 고체상태 라이다 Hummingbird D1로 세계 최초 OEM 양산 수주"
    type: "뉴스"
    summary: "라이다 업계가 '솔리드스테이트'라 부르던 제품 상당수는 사실 MEMS 미러 등 미세한 기계 구동부를 여전히 품고 있어 신뢰성·수명 문제에서 완전히 자유롭지 못했는데, Seyond가 CES 2026에서 공개한 Hummingbird D1은 기계 스캐닝 부품을 아예 배제한 완전 전자식 스캐닝 아키텍처를 채택해 마모나 고장 가능성을 구조적으로 없앴다는 점에서 의미가 있다. 140도x100도의 넓은 시야각과 10cm 미만의 근접 사각지대, raw data를 뽑아 중앙에서 처리하는 새틀라이트(satellite) 아키텍처를 지원하며, 이미 완성차 OEM향 세계 최초 양산 설계 수주를 확보해 승용차 대량 탑재로 가는 실질적 이정표를 세웠다. 라이다 원가·신뢰성 논쟁이 '기계식 대 반고체 대 완전고체'라는 구도로 이어져 온 만큼, 완전 전자식 스캐닝이 양산 단가와 신뢰성 두 마리 토끼를 동시에 잡을 수 있는지 지켜볼 가치가 있다."
    source_url: "https://www.roboticstomorrow.com/news/2025/12/31/seyond-to-showcase-complete-end-to-end-lidar-portfolio-and-mass-production-ready-solid-state-lidar-at-ces-2026/25947/"
  - title: "MIPI, A-PHY 자동차 SerDes 표준에 정식 상호운용성 컴플라이언스 프로그램 출범"
    type: "뉴스"
    summary: "MIPI A-PHY는 센서(카메라·레이더·라이다)를 중앙 컴퓨터에 긴 거리로 연결하는 차세대 자동차용 SerDes 표준인데, 지금까지는 벤더마다 사양 해석이 조금씩 달라도 이를 공식적으로 검증할 방법이 없어 완성차·Tier1이 멀티벤더 조합을 신뢰하고 채택하기 어려웠다는 문제가 있었다. 2026년 5월 출범한 MIPI A-PHY 컴플라이언스 프로그램은 BitifEye를 공인 시험소로 지정해 기능안전·EMI 강건성·상호운용성을 표준화된 절차로 검증하도록 했고, 실제로 같은 해 6월 AutoSens USA에서 Sony·Southchip·Valens·Velinktech 4개사 부품이 서로 호환되는 것을 실증하는 업계 최초의 4사 상호운용성 데모가 이루어졌다. 이는 GMSL 같은 벤더 종속형 SerDes와 달리 A-PHY가 '진짜 개방형 멀티벤더 생태계'로 자리잡을 수 있을지를 가늠하는 시험대라는 점에서, 센서-SoC 인터페이스 표준 경쟁의 흐름을 보여주는 사건이다."
    source_url: "https://www.embedded.com/mipi-launches-a-phy-compliance-program-for-automotive-serdes-devices"
  - title: "TI, 10~1200TOPS까지 확장 가능한 칩렛 기반 자율주행 SoC 패밀리 TDA5 공개"
    type: "뉴스"
    summary: "자율주행 SoC 설계의 오랜 딜레마는 저사양 ADAS부터 레벨3까지 폭넓은 차급에 대응하려면 매번 다른 다이를 새로 설계해야 해 개발비가 커진다는 점인데, TI가 CES 2026에서 공개한 TDA5 패밀리는 칩렛(chiplet) 방식으로 동일 아키텍처를 재사용하면서 10TOPS급 저사양부터 1200TOPS급 레벨3 컴퓨트까지 하나의 제품군으로 확장할 수 있게 설계했다는 점이 핵심이다. ASIL-D 인증 가능한 안전 마이크로컨트롤러, 자체 C7 NPU, 범용 CPU, 비전 전처리 파이프라인을 하나의 이종 아키텍처로 묶어 24TOPS/W의 전력효율과 결정론적(deterministic) 동작을 동시에 노리는데, 이는 '안전인증 가능한 고정 로직'과 '성능을 위한 유연한 AI 가속기'를 별도 칩으로 쪼개지 않고 한 다이 안에서 공존시키려는 시도로, SoC 설계에서 연산 확장성과 안전 인증을 함께 푸는 방향성을 보여준다."
    source_url: "https://www.ti.com/about-ti/newsroom/news-releases/2026/2026-01-05-ti-accelerates-the-shift-toward-autonomous-vehicles-with-expanded-automotive-portfolio.html"
  - title: "센서 중심 관점에서 자율주행 멀티센서 융합을 재정리한 서베이 논문"
    type: "논문"
    summary: "카메라·라이다·레이더·GNSS/IMU를 조합하는 양산 센서 스택이 실제 도로에서 자꾸 흔들리는 이유는 개별 모델 성능이 아니라 모달리티별 고유 실패 모드, 캘리브레이션·타이밍 드리프트, 분포 밖(OOD) 상황이 서로 얽혀 있기 때문이라는 문제의식에서 출발한 리뷰 논문이다. 저자들은 각 센서가 '물리적으로 무엇을 측정하는가'부터 다시 정리한 뒤, 확률적·에비덴셜·컨포멀 불확실성 표현을 통일된 틀로 묶고 칼만필터·팩터그래프·BEV·트랜스포머·상태공간모델 기반 융합 아키텍처를 강건성과 성능 저하(degradation) 관점에서 비교한다. 센서 스택을 개별 모듈의 느슨한 조합이 아니라 신뢰도 정보를 끝까지 전달하는 하나의 안전 계측 파이프라인으로 봐야 한다는 주장은, 개별 센서나 알고리즘 벤치마크에만 집중하기 쉬운 하드웨어 트렌드 추적에 상위 프레임을 제공해준다."
    source_url: "https://www.mdpi.com/1424-8220/26/12/3801"
---
