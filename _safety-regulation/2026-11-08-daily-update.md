---
title: "자율주행 안전·규제 업데이트 (2026-11-08)"
date: 2026-11-08
category: safety-regulation
items:
  - title: "안전 등급이 'QM'이라 검토조차 안 받았다 — 퀄컴이 AI 인식 부품에도 SOTIF를 적용해야 한다고 주장한 이유"
    type: "논문"
    summary: "ISO 26262에서 'QM(Quality Management)' 등급을 받은 부품은 안전 무관으로 분류돼 엄격한 안전성 검토 대상에서 빠진다. 그런데 퀄컴 연구진은 AI 인식 모듈처럼 QM으로 분류된 부품도 성능 한계나 '기능 부족(functional insufficiency)'으로 위험 허용 기준을 넘는 위해를 일으킬 수 있다고 지적한다. ISO 26262는 체계적/무작위 고장만 다루고 이런 성능 한계는 다루지 않기 때문에, ISO/PAS 8800의 AI 안전 가이드를 끌어와 QM 부품에도 SOTIF(ISO 21448) 분석을 적용해야 한다고 주장한다. '안전 등급이 낮다고 분류된 AI 부품'이 실제로는 안전 검토의 사각지대일 수 있다는 점에서, 기능안전 프로세스 설계 자체를 다시 보게 만드는 논문이다."
    source_url: "https://arxiv.org/abs/2602.05157"
    image: "https://arxiv.org/html/2602.05157v2/SOTIF_Risk.png"
  - title: "같은 장면도 '순서'가 다르면 다른 위험이다 — 시간순서 커버리지가 조합 커버리지보다 위반을 3배 더 잡아낸 이유"
    type: "논문"
    summary: "기존 시나리오 커버리지 지표는 '비·보행자·좌회전'처럼 특징의 조합(존재 여부)만 세는 경우가 많아, 같은 요소들이 다른 '순서'로 벌어지는 상황은 같은 시나리오로 취급해버린다. 에든버러대 연구진은 Apollo·Autoware급 자율주행 스택을 대상으로, 운전 기동(maneuver)들이 벌어지는 시간 순서 자체를 커버리지로 측정하는 '기동 순서 커버리지(maneuver sequence coverage)'를 제안했다. 4단계 시간순서 커버리지는 위반·위협 상황의 100%를 포착했지만, 같은 4단계 조합 커버리지는 35%, 기존 ComOpt 지표는 약 30%에 그쳤다. 검증·테스트 방법론에서 '커버리지를 어떻게 재는가'가 실제 결함 발견율에 얼마나 큰 차이를 만드는지 보여주는 사례다."
    source_url: "https://conf.researchr.org/details/seams-2026/seams-2026-research-track/23/Maneuver-Sequence-Coverage-of-Scenarios-for-Autonomous-Driving-System"
---
