---
title: "자율주행 HW 업데이트 (2026-09-26)"
date: 2026-09-26
category: autonomous-hw
items:
  - title: "센서-컴퓨팅 링크가 진짜 병목이다 — MIPI A-PHY와 차량용 이더넷의 역할 분리"
    type: "개념정리"
    summary: "카메라 한 대가 초당 2.5~6Gbps를 쏟아내고 다음 세대 차량이 카메라 8~12대에 레이더·라이다까지 합치면 전체 센서 데이터가 40~60Gbps에 달하는데, 기존 자동차 이더넷은 원래 존(zone) 간 백본 라우팅용으로 설계되어 센서 엣지 구간에는 오버헤드가 크다는 문제를 짚는다. MIPI A-PHY v2.0은 다운링크 32Gbps, 브리징 없는 데이지체인 토폴로지, 패킷 오류율 1E-19라는 안전 지향 스펙으로 센서-SoC 구간을 전담하고 이더넷은 백본 역할만 맡는 식으로 역할을 분리하는 아키텍처가 2026년 Valens 등의 OEM 채택과 함께 굳어지고 있어, 인터페이스 표준을 어느 구간에 쓸지가 대역폭만큼 중요한 설계 결정임을 보여준다."
    source_url: "https://www.semiconductor-digest.com/the-2026-connectivity-gap-why-sensor-to-compute-links-are-the-real-adas-bottleneck/"
  - title: "칩렛으로 쪼개도 ASIL-D는 지킨다 — 르네사스 RegionID가 푸는 칩렛 간섭 격리 문제"
    type: "뉴스"
    summary: "UCIe 같은 표준 다이-투-다이 칩렛 인터페이스는 원래 어떤 코어가 어떤 자원에 접근하는지 식별하는 RegionID를 다이 경계 너머로 전달하는 기능이 없어서, SoC를 칩렛으로 쪼개 안전 필수 코어와 일반 AI 코어를 물리적으로 분리해도 'Freedom from Interference(FFI)'를 보장하기 어렵다는 근본적 한계가 있었다. 르네사스는 ISSCC 2026에서 RegionID를 물리 주소 공간에 매핑해 UCIe 리전에 인코딩·전송하는 독자 메커니즘을 발표해 MMU와 리얼타임 코어 수준에서 접근 제어를 가능케 했고, 51.2GB/s 다이 간 대역폭에서도 ASIL-D 격리를 유지하면서 90여 개 전력 도메인 세분화로 IR 드롭을 13% 개선했다고 밝혔다. 3nm 공정·400TOPS급 SoC를 칩렛으로 확장하려는 흐름에서 '성능 확장'과 '기능안전 인증'을 동시에 만족시키는 실제 회로 수준 해법이라는 점이 핵심이다."
    source_url: "https://www.renesas.com/en/about/newsroom/renesas-develops-soc-technologies-automotive-multi-domain-ecus-essential-sdv-era"
  - title: "레이더도 로우데이터로 — 엣지 처리 대신 중앙집중형 위성 레이더 아키텍처가 뜨는 이유"
    type: "개념정리"
    summary: "기존 엣지(edge) 레이더는 센서 안에서 FFT·타겟 검출까지 끝내고 압축된 포인트클라우드만 중앙 ECU로 보내는데, 장거리 레이더 기준 프레임당 로우 ADC 데이터는 약 6MB인 반면 포인트클라우드는 0.064MB에 불과해 거의 100배 차이가 나는 것이 그동안 로우데이터 전송을 막아온 이유였다. 이제 대역폭이 넓어진 새 인터페이스를 발판으로, 레이더 센서를 얇은 '위성(satellite)'으로 두고 로우 ADC 데이터를 그대로 강력한 중앙 ECU에 모아 카메라·라이다와 신호 레벨에서 조기/딥 퓨전을 하는 중앙집중형 아키텍처로 전환하는 흐름이 커지고 있다. 센서 자체의 연산·발열·비용 부담을 중앙 컴퓨팅과 네트워크 대역폭으로 옮기는 전형적인 트레이드오프이며, 어디서 연산을 하느냐가 곧 퓨전 품질의 상한을 정한다는 점을 잘 보여주는 사례다."
    source_url: "https://semiengineering.com/centralized-architecture-for-automotive-adas-ad-radar-based-on-raw-adc-data/"
  - title: "라이다에도 도플러가 필요한 이유 — FMCW 코히런트 검출과 ToF의 경쟁 구도"
    type: "개념정리"
    summary: "현재 양산 라이다 대부분은 빛의 비행시간(ToF)으로 거리만 직접 재고 속도는 연속 프레임 차분이나 무거운 AI 추론으로 간접 추정하는데, FMCW(주파수변조 연속파) 라이다는 도플러 주파수 편이를 이용해 한 번의 코히런트 측정으로 거리와 속도를 동시에 얻어 후단 연산 부담을 구조적으로 줄이고, 코히런트 검출 특성상 태양광이나 다른 차량 라이다의 간섭에도 강하다는 장점을 가진다. 다만 좁은 광대역 특성 때문에 거친 표면에서 스페클(speckle) 현상으로 신호 균일도가 떨어지는 약점이 있어, PLC 포토닉스 기반 광집적으로 비용·전력을 낮추는 것이 ToF 대비 상용화 경쟁력의 관건이라는 점에서 두 방식의 아키텍처적 트레이드오프가 뚜렷하게 갈린다."
    source_url: "https://www.laserfocusworld.com/test-measurement/article/55332748/fmcw-lidar-is-the-future-of-high-performance-sensing"
  - title: "라이다 펄스를 기준 삼아 카메라를 물리는 법 — 오픈소스 하드웨어 트리거 동기화 회로"
    type: "논문"
    summary: "노변(인프라) 다중 라이다·다중 카메라 센서 시스템에서는 시간 정렬 오차가 곧바로 융합 데이터의 위치 오차로 이어지는데, 이 논문은 라이다의 동기화 펄스를 기준 신호로 삼아 카메라마다 독립적으로 프로그래밍 가능한 지연 트리거 펄스를 생성하는 오픈소스·모듈형 하드웨어 회로를 제안한다. PTP 같은 소프트웨어 기반 시간 동기화 대신 저비용 하드웨어 트리거로 각 카메라의 노출 시작 시점을 직접 제어하고, 트리거 지연값을 체계적으로 바꿔가며 공간-시간 정렬 정확도에 미치는 영향을 실측했다는 점에서 차량 탑재 센서뿐 아니라 도로 인프라 센서 배치에도 바로 적용할 수 있는 실용적인 동기화 하드웨어 설계 사례를 제공한다."
    source_url: "https://arxiv.org/abs/2607.15889"
---
