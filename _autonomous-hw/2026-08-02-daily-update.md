---
title: "자율주행 HW 업데이트 (2026-08-02)"
date: 2026-08-02
category: autonomous-hw
items:
  - title: "MIT, 크로스토크 억제 안테나로 반도체 라이다의 '시야각 vs 노이즈' 딜레마 해결"
    type: "논문"
    summary: "MIT 옐레나 노타로스(Jelena Notaros) 연구팀이 실리콘 포토닉스 기반 광위상배열(optical phased array, OPA) 라이다가 오랫동안 안고 있던 근본적 트레이드오프를 해결하는 안테나 설계를 네이처 커뮤니케이션즈에 발표했다. OPA 방식은 기계적 스캐닝 없이 칩 위에서 위상 제어만으로 빔을 조향하는 완전 고체형(solid-state) 라이다 아키텍처로 자동차용으로 각광받고 있지만, 넓은 시야각을 얻으려면 안테나(도파로) 간격을 반파장 수준으로 촘촘히 배치해야 하고, 이때 인접 안테나 사이에 빛이 새어나가는 크로스토크가 커져 노이즈가 급증하는 문제가 있었다. 연구팀은 방사 계수가 서로 다른 세 종류의 격자형(grating-based) 안테나를 설계해 인접 안테나 간 결합률을 100%에서 1% 수준으로 낮췄고, 이를 반파장 피치 OPA에 적용해 그레이팅 로브(허상 빔) 없이 넓은 시야각과 낮은 노이즈를 동시에 달성했다. 특정 벤더의 제품이 아니라 고체형 라이다의 핵심 광학 아키텍처 자체를 개선한 기초 연구로, 향후 자동차용 반도체 라이다가 기계식·MEMS 스캐닝 없이도 더 넓은 시야각과 신뢰성을 확보하는 방향으로 나아갈 수 있음을 보여준다는 점에서 센서 하드웨어 아키텍처를 공부하는 사람에게 의미가 크다."
    source_url: "https://news.mit.edu/2026/photonics-advance-could-enable-compact-high-performance-lidar-sensors-0507"
  - title: "imec, 완성차용 칩렛 프로그램을 '자율주행 엣지 칩렛 프로그램'으로 확장"
    type: "뉴스"
    summary: "벨기에 반도체 연구기관 imec이 2026년 7월, 기존의 자동차용 칩렛 프로그램(Automotive Chiplet Program, ACP)을 로보틱스·항공우주 등을 포괄하는 자율주행 엣지 칩렛 프로그램(Autonomous Edge Chiplet Program, AECP)으로 확대한다고 발표했다. 자율주행 SoC는 연산량이 계속 늘어나는 반면, 하나의 거대한 단일(모놀리식) 다이로 이를 감당하려 하면 첨단 공정에서의 수율 저하, 큰 리티클 면적으로 인한 비용 상승, 차종·세그먼트별로 다른 성능·전력·가격 요구에 유연하게 대응하기 어렵다는 한계가 있다. 칩렛 아키텍처는 연산 코어, 안전 아일랜드, 메모리, I/O, AI 가속기 등을 별도 다이로 나눠 필요에 따라 공정 노드를 달리 제작한 뒤 다이-투-다이 인터커넥트로 재조합함으로써 수율과 비용, 제품 확장성을 동시에 개선하는 접근으로, Arm·Audi·BMW·Bosch·Cadence·Cariad·GlobalFoundries·Infineon 등 22개 파트너사가 참여하고 있다. 이는 앞서 다룬 '고정기능 vs 프로그래머블 NPU' 논쟁과는 결이 다른, SoC를 물리적으로 어떻게 분할·재구성해 안전인증과 비용·성능 요구를 동시에 만족시킬지에 대한 아키텍처 레벨의 산업 방향성을 보여준다는 점에서 자율주행 SoC 설계 트렌드를 추적하는 데 참고할 가치가 있다."
    source_url: "https://www.imec-int.com/en/articles/horsepower-high-performance-compute-automotive-chiplets-take-leap-towards-autonomous-edge"
---
