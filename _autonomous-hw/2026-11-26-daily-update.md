---
title: "자율주행 HW 업데이트 (2026-11-26)"
date: 2026-11-26
category: autonomous-hw
items:
  - title: "체크로직을 데이터패스 안에 넣지 않는다 — Synopsys·SiMa.ai가 멀티다이 자동차 NPU에 '병렬 감시' 칩렛을 더한 이유"
    type: "개념정리"
    summary: "자동차용 AI 가속기는 ASIL 안전 요구와 ML 추론 처리량을 동시에 만족해야 하는데, 안전 로직을 추론 데이터패스 안에 섞으면 검증이 어려워지고 성능도 깎인다. Synopsys와 SiMa.ai는 UCIe 기반 베이스다이 위에 ML 가속 칩렛과 별도로, 추론 경로와 '병렬로' 감시만 전담하는 안전 칩렛을 얹는 구조를 제안한다. 고속 데이터용 인터페이스와 저지연 안전신호용 인터페이스를 분리해, 성능 다이는 자유롭게 최적화하면서 안전 인증은 별도 블록에서 독립적으로 받을 수 있게 한다는 설계 철학이 핵심이다. 칩렛 단위로 안전과 성능을 분리하는 이런 접근은 최근 본 Arm Zena CSS(사전통합 플랫폼)나 Renesas의 RegionID 접근제어와는 다른 각도에서 'SoC 인증 기간을 줄이는' 같은 문제를 푸는 사례라서, 자동차 SoC 설계의 트레이드오프를 이해하는 데 보완적인 참고가 된다."
    source_url: "https://www.synopsys.com/blogs/chip-design/safety-aware-multi-die-ml-architectures-ai-vehicles.html"
---
