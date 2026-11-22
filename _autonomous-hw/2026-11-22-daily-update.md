---
title: "자율주행 HW 업데이트 (2026-11-22)"
date: 2026-11-22
category: autonomous-hw
items:
  - title: "안전인증을 실리콘 안에서만 풀지 않는다 — Arm Zena CSS가 '사전통합 플랫폼'으로 자동차 SoC 인증 기간을 줄이려는 법"
    type: "개념정리"
    summary: "지금까지 이 코너가 다룬 안전-성능 트레이드오프(Renesas의 워크로드별 선택적 락스텝, 11/18)는 '어느 연산 유닛을 이중화할 것인가'라는 실리콘 설계 축에 있었는데, Arm의 Zena CSS(Compute Subsystem)는 다른 축을 공략한다. CPU·GPU·인터커넥트를 묶은 컴퓨트 서브시스템 전체를 Arm이 미리 통합·검증해두고, 거기에 전용 Cortex-R82AE 코어로 구성된 '안전 아일랜드(Safety Island)'를 더해 ADAS·도메인 컨트롤러용 ASIL 요구사항을 만족시키는 구조다. 이는 개별 SoC 벤더(Renesas, NXP, TI 등)가 저마다 락스텝·칩렛 접근제어 같은 안전 메커니즘을 처음부터 다시 설계·검증해야 했던 반복 비용을, '검증이 끝난 블록을 가져다 쓴다'는 방식으로 줄이려는 시도다. 다만 실제 인증 기간 단축 효과를 뒷받침하는 독립된 수치는 아직 공개되지 않았고, Arm 자체 발표에 의존한 주장이라는 점은 감안해야 한다. 안전 인증이 SoC 설계에서 얼마나 큰 비용 축인지, 그리고 그 비용을 줄이는 방법이 반드시 '더 똑똑한 하드웨어'가 아니라 '사전 검증된 조립품'일 수도 있다는 걸 보여주는 사례다."
    source_url: "https://newsroom.arm.com/blog/arm-zena-css-ai-defined-vehicle-compute-platform"
  - title: "8Tx8Rx가 표준이 된다 — NXP·TI·Infineon이 한 칩에 담은 4D 이미징 레이더 트랜시버 경쟁"
    type: "뉴스"
    summary: "지금까지 이 코너가 다룬 레이더 이야기는 처리 방식(NVIDIA DRIVE의 중앙집중형 신호처리, 11/20)에 초점이 맞춰져 있었는데, 그 중앙집중형 처리를 실제로 가능하게 만드는 트랜시버 칩 쪽에서도 올해 비슷한 시기에 8개 송신·8개 수신(8Tx8Rx) 채널을 하나의 다이에 집적한 제품들이 잇따라 나왔다. NXP의 3세대 이미징 레이더 TEF8388은 최대 576개 안테나 채널 구성을 지원한다고 밝혔고, TI는 올해 1월 캐스케이드 가능한 단일칩 8x8 트랜시버 AWR2188을 내놨으며, Infineon의 RASIC CTRX8188F는 스스로 '업계 최초의 8Tx8Rx 이미징 레이더 MMIC 양산'이라 주장하며 양산에 들어갔다. 채널 수를 늘리는 경쟁이 과거엔 여러 칩을 캐스케이드로 묶어야 가능했던 고해상도 이미징 레이더를, 이제는 단일 칩 집적만으로 상당 부분 해결하려는 방향으로 가고 있다는 걸 보여준다 — 이는 라이다보다 저렴한 비용으로 유사한 각도 분해능에 다가가려는 4D 레이더의 핵심 경쟁축이자, 레이더 원시 신호를 중앙 컴퓨트로 그대로 보내는 아키텍처가 현실적인 채널 밀도를 갖추게 됐다는 뜻이기도 하다. 다만 '업계 최초' 같은 표현은 각 벤더 자체 보도자료에 근거한 것이라 교차 검증은 안 돼 있다."
    source_url: "https://www.eejournal.com/industry_news/infineon-rasic-ctrx8188f-enters-mass-production-as-automotive-industrys-first-8tx8rx-imaging-radar-mmic-accelerating-the-shift-to-centralized-radar-architectures/"
---
