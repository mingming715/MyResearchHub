---
title: "자율주행 HW 업데이트 (2026-11-17)"
date: 2026-11-17
category: autonomous-hw
items:
  - title: "메인 SoC 대신 '칩' 하나가 센서를 먼저 받는다 — ZF·SiliconAuto의 실시간 I/O 칩이 자율주행 컴퓨팅을 쪼개는 방법"
    type: "뉴스"
    summary: "ZF와 SiliconAuto가 2026년 3월 Embedded World에서 공개한 이 I/O 칩은 카메라 ISP와 레이더 신호처리 같은 센서 전처리를 메인 인식 SoC가 아니라 별도 칩에서 실시간으로 끝낸다. SiliconAuto의 XMotiv M3 마이크로컨트롤러가 부팅·전원·클럭을 담당하는 안전 컨트롤러로 붙고, 이 I/O 칩은 Ethernet·PCIe 같은 표준 링크로 어떤 성능급 SoC와도 연결되도록 설계돼, CSI-2 같은 네이티브 센서 인터페이스가 없는 범용 SoC도 자율주행에 쓸 수 있게 한다. 더 중요한 건 로드맵이다: 두 회사는 향후 UCIe 같은 개방형 다이-투-다이 인터커넥트를 붙여 이 칩을 완전한 칩렛으로 전환할 계획인데, 이는 '하나의 거대한 자율주행 SoC'를 깎는 대신 기능별로 쪼갠 칩렛들을 패키지 안에서 묶는 방향이 업계 표준 옵션으로 자리잡고 있음을 보여준다. 센서-SoC 인터페이스와 차량용 컴퓨팅 아키텍처의 트레이드오프를 공부하는 사람에게는, GMSL/MIPI A-PHY 같은 '센서→보드' 표준 다음 단계인 '칩→칩' 표준화가 어디로 가는지 보여주는 사례다."
    source_url: "https://www.eenewseurope.com/en/zf-and-siliconauto-introduce-real-time-i-o-chip-for-autonomous-driving/"
  - title: "스피닝 미러 없는 라이다, 가격이 10분의 1로 떨어지다 — Seyond Hummingbird D1이 보여주는 솔리드스테이트 라이다의 양산 전환점"
    type: "뉴스"
    summary: "Seyond(옛 Innovusion)는 기계식 스캐닝 부품이 없는 완전 솔리드스테이트 라이다 Hummingbird D1을 공개했고, 중국 톱티어 완성차의 프리미엄 브랜드 양산 모델에 탑재가 결정됐다고 밝혔다(2026년 양산 목표). 업계 보도에 따르면 솔리드스테이트 라이다는 유닛당 400~500달러까지 내려왔는데, 이는 스피닝 미러 방식 라이다(5,000~10,000달러)의 10분의 1 수준이다. 다만 이 수치와 '탑재 완성차', '양산 개시' 등은 모두 회사 측 발표나 이를 받아쓴 보도에 근거하며, 어느 자료도 독립적으로 물량이나 브랜드명을 검증하지는 못했다는 점은 유의해야 한다. 그럼에도 이 흐름이 중요한 이유는, 라이다를 자율주행 센서 스택에 넣을지 말지의 논쟁이 '기술 성숙도'가 아니라 '기계식 스캐너를 없애서 비용과 신뢰성 문제를 동시에 푸는가'로 옮겨가고 있다는 신호이기 때문이다 — 센서 하드웨어의 다음 세대 트레이드오프를 가격·신뢰성 축으로 다시 그려볼 좋은 사례다."
    source_url: "https://news.metal.com/newscontent/103464438/Seyond-designated-by-top-tier-Chinese-automaker-to-supply-new-gen-solid-state-LiDAR"
---
