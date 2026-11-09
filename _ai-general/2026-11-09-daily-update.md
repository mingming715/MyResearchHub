---
title: "AI 전반 업데이트 (2026-11-09)"
date: 2026-11-09
category: ai-general
items:
  - title: "OpenAI와 Anthropic, AI가 27년 된 계산복잡도 가설(ETH) 반증을 주장"
    type: "논문"
    summary: "2026년 10월 26~27일, OpenAI와 Anthropic이 거의 동시에 '지수시간 가설(Exponential Time Hypothesis, ETH)'을 반증하는 결과를 발표했다. Anthropic은 자사 내부 연구용 Claude 모델이 사람의 개입 없이 14M 토큰을 사용해 10월 16일 3-SAT를 2^o(n) 시간에 푸는 결정론적 알고리즘을 찾아냈다고 밝혔고, 논문과 Lean 4 형식 검증 코드를 anthropics/formal-math 저장소에 공개했다. OpenAI도 같은 날 유사한 결론의 논문을 내놓았다. ETH는 1999년 제안된 이래 복잡도 이론과 암호학적 하한의 기반이 되어온 가정이라, 이것이 사실로 확인되면 이론전산학에 큰 파장을 일으킨다. 다만 두 결과 모두 아직 동료 검토를 거치지 않았고, Anthropic 측도 이 결과가 '순수하게 점근적(asymptotic)'이라 실제로 브루트포스보다 빨라지는 지점이 변수 개수 10^10,000 이상이라는 한계를 명시했다. 복잡도 이론가 Lance Fortnow는 접근 방식이 '유망해 보인다'고 평가했고, ETH에 대한 대표적 회의론자였던 Ryan Williams는 자신의 입장이 옳았다는 점에서 '검증된 느낌'이라고 반응했다. AI를 공부하는 입장에서 이 사건이 중요한 이유는, 프론티어 모델이 단순 코딩/튜닝을 넘어 이론전산학 수준의 독창적 증명을 (아직 검증 전이지만) 생성할 수 있다는 신호인 동시에, formal verification과 실제 동료 검토 사이의 간극을 보여주는 사례이기 때문이다."
    source_url: "https://github.com/anthropics/formal-math/blob/main/eth/paper.pdf"
    pick: true
    pick_reason: "아직 동료 검토 전이지만, 프론티어 모델이 27년 묵은 복잡도 이론 가설 반증을 독자적으로 시도했다는 사실 자체가 이론전산학의 토대를 흔드는 field-shaping 사건이며, TechCrunch·HackerNoon 등 다수의 독립 매체와 복잡도 이론가들이 동시에 다루는 등 보기 드물게 폭넓은 논의가 일었다."
---
