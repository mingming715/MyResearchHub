---
title: "자율주행 HW 업데이트 (2026-08-30)"
date: 2026-08-30
category: autonomous-hw
items:
  - title: "샤오미 Xring D100 — 3나노 자율주행 SoC에 2000억 파라미터 온디바이스 LLM을 얹다"
    type: "뉴스"
    summary: "샤오미가 2026년 8월 24일 자체 설계한 3나노 공정 기반 자율주행 전용 SoC Xring D100을 공개했다. 20코어 고성능 CPU와 16코어 NPU, 최대 160GB 통합 메모리를 갖추고 추정 700~1000 TOPS급 연산력으로 최대 2000억 파라미터 규모 모델을 클라우드 연결 없이 차량 내에서 구동하는 것을 목표로 한다. 이는 자율주행 SoC가 단순 인지·제어 가속기를 넘어 대형 언어모델급 온디바이스 추론까지 떠맡는 방향으로 가고 있음을 보여주는 사례로, 연산 효율과 전력·발열 예산, 그리고 대형 다이의 ASIL 안전 인증 확보라는 트레이드오프가 앞으로 더 첨예해질 것임을 시사한다. BYD, XPeng, Nio 등 중국 OEM들이 잇따라 자체 칩 개발에 뛰어드는 흐름 속에서, 2027년 양산을 목표로 한 수직 통합 컴퓨트 스택 경쟁의 최신 사례이기도 하다."
    source_url: "https://cnevpost.com/2026/08/24/xiaomi-unveils-xring-d100-smart-driving-chip/"
  - title: "카메라·라이다 없이 레이더만으로 — Radar4D-VLM이 보여준 4D 레이더 단독 센싱의 가능성"
    type: "논문"
    summary: "이 논문은 카메라나 라이다 없이 연속된 10프레임의 4D 밀리미터파 레이더 포인트클라우드만으로 동작하는 VLM(비전-언어모델) 아키텍처를 제안한다. 기하학적으로 근거 있는 객체 제안을 추출해 객체·장면·운동 상태를 위계적 토큰으로 구성한 뒤, 경량 프로젝터를 통해 Qwen·Phi·Mistral·Llama·Gemma 등 5개 계열의 고정된(frozen) 언어모델 백엔드에 이식 가능하다는 점을 24개 조합 실험으로 검증했으며, K-Radar 검증셋에서 4m 기준 Top-64 제안 리콜 98.13%를 달성해 고정 격자·랜덤 기준선을 6.4~22.83%p 상회했다. 하드웨어 관점에서 중요한 이유는, 악천후에서 성능이 저하되는 카메라·라이다를 배제하고도 레이더 원시 신호만으로 고차원 장면 추론이 가능함을 시사해, 센서 융합 스택의 비용·복잡도·중복성 트레이드오프를 다시 검토하게 만든다는 점이다."
    source_url: "https://arxiv.org/abs/2608.04130"
  - title: "GMSL, 폐쇄형 표준에서 개방형 생태계로 — OpenGMSL v3.0이 노리는 것"
    type: "뉴스"
    summary: "2008년부터 ADI(Analog Devices)의 독점 SerDes 기술로 25개 OEM·50개 Tier1에 10억 개 이상 출하된 GMSL이, ADI·Aptiv·Qualcomm·현대모비스·지리 등이 참여한 OpenGMSL Association을 통해 개방형 표준으로 전환되고 있다. 2026년 3월 공개된 명세 v3.0은 GMSL2/GMSL3 기반의 멀티벤더 상호운용성을 제공하는데, 실제로 Velinktech가 FPGA로 구현한 시리얼라이저가 ADI 디시리얼라이저와 CES 2026에서 상호 연동을 시연했다. 이는 이미 검증된 방대한 설치 기반(brownfield)을 유지하면서 벤더 락인을 해소하려는 접근으로, 완전히 새로 설계된 개방형 표준인 MIPI A-PHY나 중국의 ASA-ML·HSMT와는 다른 전략을 취한다는 점에서, 카메라·라이다를 SoC에 연결하는 인터커넥트 계층에서 표준 경쟁의 구도가 어떻게 재편되는지를 보여주는 사례다."
    source_url: "https://semiiphub.com/news/opengmsl-v3-0-specification-gmsl2-3-ecosystem"
  - title: "10BASE-T1S — 존 아키텍처가 요구하는 '느리지만 단순한' 차량용 이더넷"
    type: "개념정리"
    summary: "10BASE-T1S(IEEE 802.3cg)는 단일 꼬임쌍 케이블에 최대 8개 노드를 멀티드롭으로 연결해 10Mbps로 통신하고 PoDL로 전원까지 함께 공급하는 저속 이더넷 규격이다. 차량이 CAN/LIN 기반 분산 ECU 구조에서 존(zone) 기반 E/E 아키텍처로 전환되면서, 좌석 센서·도어 모듈·저해상도 근접 센서 같은 수많은 저대역 노드를 점대점 배선 없이 이더넷 네이티브 방식으로 존 컨트롤러에 연결해야 하는 문제를 해결한다. 멀티기가급 백본에서의 시간 결정론적 스케줄링을 담당하는 TSN 표준(IEEE 802.1DG)이 있다면, 10BASE-T1S는 그 백본에서 뻗어나가는 '라스트마일' 팬아웃을 맡는 상호보완적 계층으로, 배선 폭증 없이 확장 가능한 센서 네트워킹을 완성하는 데 필요한 조각을 이해하는 데 도움이 된다."
    source_url: "https://www.analog.com/en/resources/analog-dialogue/articles/how-10base-t1s-ethernet-simplifies-zonal-architectures.html"
---
