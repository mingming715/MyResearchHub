---
title: "자율주행 HW 업데이트 (2026-11-16)"
date: 2026-11-16
category: autonomous-hw
items:
  - title: "AI SoC 옆에 '동반 안전 MCU'를 둔다 — Infineon-Qualcomm이 보여준 기능안전 통합의 세 번째 답"
    type: "뉴스"
    summary: "Infineon과 Qualcomm이 2026년 11월 초 발표하고 11월 10~13일 뮌헨 electronica에서 공개한 협업은, Snapdragon Ride/Ride Flex AI SoC 옆에 Infineon의 AURIX 마이크로컨트롤러 기반 '기능안전 서브시스템'을 별도 칩으로 배치해 메인 SoC의 상태를 감시하고 안전 메커니즘·실시간 안전 기능을 전담하도록 하는 구조다. AURIX MCU에 OPTIREG 전력관리 IC, BRIGHTLANE 자동차용 이더넷/USB, Snapdragon Ride 전용으로 인증된 SEMPER NOR 플래시까지 한 세트로 묶었다. 이는 이번 주 다뤘던 NXP S32N7의 '하나의 다이 안에 split-lock 코어로 하드웨어 파티션을 그어 ASIL D를 받는' 방식(2026-11-10)과는 정반대로, '안전 인증이 까다로운 서드파티 AI SoC 자체를 바꾸는 대신 검증된 보조 안전 MCU를 동반 배치한다'는 세 번째 설계 답을 보여준다. 같은 문제 — 강력하지만 인증이 어려운 AI 가속기와 기능안전을 어떻게 공존시키는가 — 를 온다이 파티션, 라이선스 가능한 안전섬 IP, 동반 안전 칩이라는 서로 다른 아키텍처 철학으로 풀고 있다는 점에서 비교해볼 가치가 있다. 다만 실제 완성차 디자인윈이나 양산 적용 시점은 아직 공개되지 않았고, 모든 수치는 양사 발표 기준으로 독립 검증되지 않았다."
    source_url: "https://www.autocarpro.in/news/infineon-and-qualcomm-partner-to-develop-microcontroller-subsystem-for-vehicle-computers-135678"
  - title: "레이더의 비트 주파수부터 라이다의 광자까지 — '측정 물리학'이라는 하나의 틀로 센서 퓨전을 다시 읽는 서베이"
    type: "개념정리"
    summary: "Sensors 저널(26권 12호, 2026년)에 실린 서베이 'A Sensor-Centric Survey of Autonomous Driving: Integrating Measurement Physics, Uncertainty Modeling, and Safety-Critical Multi-Sensor Fusion'은 지금까지 주로 알고리즘 관점에서 다뤄지던 센서 퓨전을 각 센서의 측정 물리학(레이더의 RF 비트 주파수·도플러, 라이다의 광자 비행시간, 카메라의 광학적 한계)에서 불확도 전파, 융합 완전성(integrity), 안전성 입증까지 하나의 체계로 엮는다. 이 서베이는 이질적인 센서·추정 알고리즘·안전 메커니즘을 '하나의 안전-critical 측정 시스템'으로 함께 설계해야 한다고 주장하며, 기존 인식 서베이들이 센서를 고정된 입력으로만 취급해 측정 물리학이 하위 안전성에 어떻게 제약을 거는지 형식화하지 않았다는 공백을 메우려 한다. 이번 주 다뤘던 TI의 레이더 PHY 레벨 시각동기화 백서(2026-11-12)나 Hesai Picasso의 '광자 단계에서 정합을 없애는' 접근(2026-11-14)이 왜 단순한 엔지니어링 디테일이 아니라 센서 하드웨어 설계의 핵심 축인지를 이론적으로 뒷받침해주는 셈이라, 개별 기술 뉴스를 '어떤 물리적 한계를 보완하려는 시도인가'라는 틀로 읽을 수 있게 해주는 좋은 개념 정리다."
    source_url: "https://www.mdpi.com/1424-8220/26/12/3801"
---
