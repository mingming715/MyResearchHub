---
title: "자율주행 HW 업데이트 (2026-10-02)"
date: 2026-10-02
category: autonomous-hw
items:
  - title: "경쟁하면서도 손잡는다 — MIPI A-PHY와 ASA-ML, 카메라 SerDes 표준 전쟁의 묘한 공존"
    type: "개념정리"
    summary: "자율주행 카메라·센서를 중앙 SoC에 연결하는 장거리 SerDes PHY 표준을 두고 MIPI 진영의 A-PHY와, A-PHY 표준화 과정에서 자사 기술이 채택되지 못한 업체들이 모여 만든 경쟁 컨소시엄 ASA(Automotive SerDes Alliance)의 ASA-ML이 정면으로 경쟁해왔다. 그런데 2026년 두 진영은 리에종 협정을 맺어 MIPI의 카메라 인터페이스 규격인 CSI-2를 ASA-ML PHY 위에서도 네이티브로 구현할 수 있게 했는데, 이는 PHY(물리계층) 자체는 계속 경쟁하되 그 위의 프로토콜 계층에서는 상호운용성을 열어 벤더가 PHY 선택과 무관하게 동일한 카메라 소프트웨어 스택을 쓸 수 있게 하려는 실용적 타협이다. A-PHY는 이미 글로벌 완성차와 양산 적용 1호 SerDes 표준이라는 이정표를 세웠지만, 표준 전쟁이 '단일 승자 독식'이 아니라 계층별로 경쟁과 협력이 분리되는 방향으로 수렴할 수 있다는 점에서 하드웨어 설계자가 인터페이스를 고를 때 참고할 만한 사례다."
    source_url: "https://www.mipi.org/press-releases/mipi-asa-enter-liaison-agreement-to-enable-native-mipi-csi-2-implementation"
  - title: "레이더 원시 데이터를 100배 압축해도 정확도는 그대로 — AdaRadar의 적응형 스펙트럼 압축"
    type: "논문"
    summary: "4D 이미징 레이더가 ADC 원시 신호(range-Doppler 텐서)를 그대로 중앙 SoC로 보내면 대역폭이 수 Gbps까지 치솟아 센서-컴퓨트 인터페이스의 병목이 되는데, AdaRadar는 DCT 기반 스펙트럼 프루닝·양자화와 다운스트림 인식 성능을 피드백으로 압축률을 실시간 조절하는 적응형 코덱을 제안해 RADIal에서 101배, CARRADA에서 117배 압축을 하면서도 성능 저하를 1%포인트 안팎으로 억제했다. 'raw-ADC 중앙집중 처리' 아키텍처가 실제로 부딪히는 대역폭 문제에 대한 소프트웨어적 해법으로, 센서단 전처리 없이 원시 신호의 정보 손실을 최소화해 중앙 SoC로 보낼 수 있다는 점에서 레이더-SoC 인터페이스 트레이드오프를 재구성한다. CVPR 2026 채택 논문."
    source_url: "https://arxiv.org/abs/2603.17979"
  - title: "최초의 기능안전 인증 열화상 카메라 — Teledyne FLIR Tura가 여는 ASIL-B 나이트비전"
    type: "뉴스"
    summary: "Teledyne FLIR OEM이 ISO 26262 기준 ASIL-B 인증을 받은 최초의 장파장 적외선(LWIR) 자동차 카메라 Tura를 공개했다. 640x512 해상도 열화상 센서로 완전한 암흑·역광·안개 속에서도 가시광 카메라와 레이더가 놓치는 보행자를 감지하도록 설계됐다. 열화상 카메라는 그동안 기능안전 등급 없이 공급되는 틈새 센서로 취급되어 왔는데, 이번 인증은 열화상이 가시광·레이더와 동급의 안전 책임을 지는 1급 센서 모달리티로 격상되고 있음을 보여주며, 센서 융합 아키텍처에서 '4번째 모달리티'의 하드웨어 성숙도가 어디까지 왔는지 가늠하게 한다."
    source_url: "https://oem.flir.com/about/news/teledyne-flir-oem-debuts-tura-automotive-qualified-thermal-camera-at-ces-for-avs-and-adas/"
  - title: "이기종 컴퓨팅에서 ASIL-D 만들기 — 안전 아일랜드와 ASIL 분해(decomposition) 설계 패턴"
    type: "개념정리"
    summary: "NPU·GPU·DSP 등 고성능 연산 블록은 대부분 ASIL-D 수준으로 개발되지 않기 때문에, 자율주행 SoC는 칩 전체를 ASIL-D로 끌어올리는 대신 작은 '안전 아일랜드'에 최고 안전등급을 집중시키고 나머지 연산 블록은 QM이나 ASIL-B/C로 남겨두는 ASIL 분해(decomposition) 전략을 쓴다. 메모리 보호 유닛·버스 방화벽·독립 클록 트리로 하드웨어 수준 도메인 격리를 구현해 ASIL-B+ASIL-B 조합이 ASIL-D 요구사항을 만족함을 증명하는 방식으로, 독립 전원 도메인·ECC 메모리·파티션별 락스텝 모니터링 등 실제 ASIL-D 인증 사례들이 이 패턴을 공유한다. 특정 벤더의 칩렛 구현 한 사례를 넘어, 왜 이런 아키텍처가 업계 표준 해법으로 수렴했는지를 설명하는 일반 원리다."
    source_url: "https://promwad.com/news/safety-island-design-asil-decomposition-heterogeneous-compute-fabrics"
  - title: "LED 깜빡임까지 잡아내는 HDR 이미지 센서 — OmniVision OX08D30의 LOFIC·듀얼 컨버전 게인"
    type: "뉴스"
    summary: "OmniVision이 공개한 8MP 자동차 외장 카메라용 이미지 센서 OX08D30은 2.1마이크론 픽셀에 LOFIC(lateral overflow integration capacitor)과 듀얼 컨버전 게인을 결합한 TheiaCel 기술로 단일 노출만으로 넓은 다이내믹레인지를 확보하면서, PWM으로 점멸하는 LED 신호등·표지판이 카메라에 깜빡이거나 사라져 보이는 LED flicker 문제를 완화한다. 야간·역광 등 극한 조도에서 신호등·표지판을 안정적으로 인식해야 하는 안전 요구를 픽셀 레벨 하드웨어로 해결하려는 시도로, HDR 처리를 ISP 소프트웨어가 아니라 센서 자체의 전하 저장 구조로 끌어내린 설계 방향을 보여준다."
    source_url: "https://www.ovt.com/press-releases/omnivision-announces-new-theiacel-image-sensor-with-industry-leading-led-flicker-mitigation-in-exterior-automotive-cameras/"
---
