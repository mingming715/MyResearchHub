---
title: "자율주행 HW 업데이트 (2026-09-20)"
date: 2026-09-20
category: autonomous-hw
items:
  - title: "안테나 크로스토크 100%→1%로 억제 — MIT, 광위상배열(OPA) 라이다의 시야각 한계 풀다"
    type: "논문"
    summary: "MIT 연구진이 광위상배열(OPA) 기반 실리콘 포토닉스 라이다의 고질적 한계였던 좁은 시야각 문제를 해결하는 안테나 설계를 Nature Communications에 발표했다. 기존 OPA 라이다는 안테나를 촘촘히 배치할수록 채널 간 누설(크로스토크)이 커져 그레이팅 로브(원치 않는 부방향 빔)가 발생하고, 이를 피하려면 안테나 간격을 넓혀야 해 결과적으로 시야각이 좁아지는 트레이드오프에 갇혀 있었다. 연구팀은 전파 상수(propagation constant)가 서로 다른 세 가지 형태의 격자 기반 안테나를 나란히 배치해 인접 안테나 간 결합을 100%에서 1% 수준으로 낮추는 데 성공했고, 이를 통해 그레이팅 로브 없이 넓은 시야각과 저노이즈를 동시에 달성했다. 이는 기계식 스캐닝이나 MEMS 없이 반도체 칩 위에서 빔을 전자적으로 조향하는 솔리드스테이트 라이다 진영에서, 최근 주목받는 SPAD 플래시나 스위치트리 방식과는 별개로 OPA 방식이 시야각·노이즈 한계를 극복하며 다시 경쟁력을 확보할 수 있음을 보여주는 사례다."
    source_url: "https://news.mit.edu/2026/photonics-advance-could-enable-compact-high-performance-lidar-sensors-0507"
  - title: "기계식 스캐닝도 OPA도 아니다 — 루모티브, 메타서피스로 빛을 조향하는 180도 솔리드스테이트 라이다 상용화"
    type: "뉴스"
    summary: "루모티브(Lumotive)가 자사의 LCM(Light Control Metasurface) 광반도체 플랫폼 'LM10'과 Adaps Photonics의 dToF 센서 'Hawk(ADS6311)'를 결합해 완전 솔리드스테이트 180도 라이다 플랫폼을 공개했다. LCM은 메타서피스(나노구조 표면)에 전압을 인가해 반도체 스위칭 속도로 빛의 방향을 굴절시키는 방식으로, 회전 미러 같은 기계적 스캐닝은 물론 위상 어레이(OPA) 특유의 그레이팅 로브·좁은 시야각 문제도 우회한다는 점이 핵심이다. 이 조합으로 일반 dToF 라이다의 통상 15fps 대비 두 배인 30fps에서 180도 수평 시야각과 최대 50m 레인지를 구현했고, 다중경로(멀티패스)·블루밍·센서 간 간섭 같은 포인트클라우드 품질 저하 요인도 줄였다고 주장한다. 최근 다뤄진 OPA(MIT), 스위치트리(Kyber), FMCW 온칩(Voyant) 방식에 이어, 메타서피스 빔조향이 솔리드스테이트 라이다의 네 번째 경쟁 아키텍처로 부상하고 있음을 보여주는 사례다."
    source_url: "https://lumotive.com/press-releases/lumotives-lcm-optical-semiconductor-platform-enables-first-solid-state-180-dtof-lidar-at-30-fps/"
  - title: "10~1200TOPS를 하나의 패밀리로 — TI, UCIe 칩렛·ASIL-D 락스텝 결합한 TDA5 자율주행 SoC 공개"
    type: "뉴스"
    summary: "텍사스인스트루먼트(TI)가 자동차용 고성능 컴퓨팅 SoC 패밀리 'TDA5'를 공개했다. 자체 C7 NPU 기반으로 10TOPS부터 1200TOPS까지 스케일링이 가능하면서도 24TOPS/W의 전력 효율을 유지해, 액체냉각 없이도 레벨3급 자율주행 연산을 처리할 수 있다고 밝혔다. 안전 측면에서는 최대 8개의 Cortex-A720AE 애플리케이션 코어와 최대 6개의 Cortex-R52+ 실시간 코어에 락스텝(lockstep) 구조를 적용해 ISO 26262 ASIL-D를 만족시켰고, 업계 표준 UCIe 인터페이스를 탑재해 칩렛 단위로 타사 IP와 조합할 수 있게 설계했다. 이는 최근 다뤄진 르네사스 R-Car X5H(단일 벤더 3나노 칩렛)나 ZF/SiliconAuto의 벤더 중립 I/O 칩렛과 마찬가지로, 자율주행 SoC 설계의 무게중심이 '단일 다이의 성능 극대화'에서 '표준 인터페이스 기반 칩렛 조합으로 성능·전력·안전을 동시에 스케일링하는 것'으로 옮겨가고 있음을 보여주는 또 다른 사례다."
    source_url: "https://www.ti.com/about-ti/newsroom/news-releases/2026/2026-01-05-ti-accelerates-the-shift-toward-autonomous-vehicles-with-expanded-automotive-portfolio.html"
---
