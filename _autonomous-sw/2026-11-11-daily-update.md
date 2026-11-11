---
title: "자율주행 SW / AI 모델 업데이트 (2026-11-11)"
date: 2026-11-11
category: autonomous-sw
items:
  - title: "백본 구조로 나누던 분류법을 버리다 — E2E 자율주행을 '플래닝 기여도' 기준으로 다시 묶은 서베이"
    type: "논문"
    summary: "지금까지 end-to-end 자율주행 연구를 정리한 서베이들은 대개 백본 아키텍처(트랜스포머냐, BEV냐 등)를 기준으로 시스템을 분류해왔는데, 이 서베이는 기준 자체를 '입력·출력·감독 방식·평가'로 바꿔, 각 시스템이 안전하고 feasible하며 route를 준수하는 planning에 어떻게 기여하는가로 재분류한다. behavior cloning, conditional imitation learning, BEV·벡터화 planning, 월드모델 기반 planner까지 2015년부터 2026년 6월까지의 흐름을 TransFuser→UniAD→VAD 계보로 추적하면서, NAVSIM·Bench2Drive·WOD-E2E 세 벤치마크 사이의 불일치와 '언어가 closed-loop planning을 실제로 개선하는가'라는 논쟁까지 짚는다. 지난주 다룬 BevAD의 '같은 벤치마크 1위도 분포가 바뀌면 뒤집힌다'는 문제의식과 맞물려, E2E 주행 연구를 '어떤 모델이 더 좋은가'가 아니라 '무엇을 기준으로 좋다고 말할 수 있는가'부터 다시 세우려는 시도로 읽을 수 있다."
    source_url: "https://arxiv.org/abs/2608.20111"
  - title: "문장으로 생각하지 말고 토큰 몇 개로 행동하라 — XCoT-VLA가 자연어 CoT를 실시간 제어에서 걷어낸 이유"
    type: "논문"
    summary: "지난주 다룬 VLADriveBench가 'VLA 주행모델의 설명(CoT)이 실제로 행동을 유발하는가'를 검증 프로토콜로 캐물었다면, XPeng Foundation Model Team이 내놓은 XCoT-VLA는 그 질문 이전에 '애초에 길게 쓰인 자연어 추론 자체가 실시간 제어에 맞지 않는다'는 전제에서 출발한다. 완전한 문장을 생성하는 대신 2~6개의 짧은 '의미-행동(semantic-action)' 토큰만 내놓고, 이 토큰이 곧바로 궤적 생성을 조건화하도록 설계했다 — 비-궤적 토큰은 Reason FFN이, 궤적 쿼리는 Control FFN이 각각 처리해 추론과 제어 경로를 공유 멀티모달 셀프어텐션 뒤에서 분기시킨다. 주행 과제를 POMDP로 프레이밍하고, 오프라인 주행 로그에서 토큰 시퀀스를 자동으로 끌어와 학습 데이터를 구성한다는 점도 특징이다. CoT를 '사람이 읽을 수 있게' 만드는 것과 '빠르게 실행 가능하게' 만드는 것이 서로 다른 목표일 수 있다는 걸 보여주는 사례로, VLA 주행모델의 추론 방식을 둘러싼 설계 철학이 또 한 축으로 갈라지고 있음을 시사한다."
    source_url: "https://arxiv.org/abs/2608.10976"
---
