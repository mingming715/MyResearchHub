---
title: "자율주행 SW / AI 모델 업데이트 (2026-09-18)"
date: 2026-09-18
category: autonomous-sw
items:
  - title: "센서가 죽어도 우아하게 — Grace-BEV의 신뢰도 인식 퓨전과 TrustGate Router"
    type: "논문"
    summary: "지금까지 멀티모달 BEV 퓨전 연구는 정상 조건에서의 정확도 경쟁에 집중해왔지만, Grace-BEV는 표준 퓨전 프레임워크가 라이다·카메라 표현을 정적(static)으로 결합하기 때문에 센서 손상에 극도로 취약하며, 라이다 스트림이 망가지면 카메라 정보가 멀쩡히 살아있어도 성능이 재앙적으로 붕괴한다는 문제를 정면으로 짚는다. 해법의 핵심은 TrustGate Router라는 경량 모듈로, 정렬된 BEV 공간에서 라이다 스트림의 기하학적 무결성을 실시간으로 정량화해 각 모달리티의 신뢰도를 능동적으로 평가하고, 이 신뢰도에 따라 FailSafe Fusion Block이 특징 통합 비율을 동적으로 재조정한다. 여기에 한 모달리티가 다른 모달리티를 지배하지 못하도록 Modality Dropout을 포함한 3단계 학습 전략을 더했다. nuScenes-R/-C 실험에서 라이다 완전 실패 시 기존 방법의 mAP가 0.0%로 붕괴하는 반면 Grace-BEV는 34.7%까지 회복했고, 정상 데이터에서도 최대 1.4%p 향상을 보였다. 정확도 극대화가 아니라 '고장 났을 때 얼마나 우아하게 떨어지는가'라는 신뢰성 축을 설계 목표로 삼았다는 점에서, 실차 배치를 전제로 한 안전공학적 퓨전 설계 철학을 보여주는 사례다."
    source_url: "https://arxiv.org/abs/2605.30983"
  - title: "앵커와 NMS를 버리다 — AutoReg3D, 3D 객체 탐지를 시퀀스 생성으로 재정의하다"
    type: "논문"
    summary: "기존 라이다 기반 3D 탐지기는 앵커 할당, NMS(비최대 억제) 같은 수작업 후처리 컴포넌트에 의존하는 proposal head 구조를 갖고 있어 학습 파이프라인이 복잡해지고 확장성이 제한된다는 문제의식에서 AutoReg3D가 나왔다. 이 논문은 탐지를 아예 시퀀스 생성 문제로 재구성해, 포인트 클라우드 특징이 주어지면 객체를 가까운 것부터 먼 것 순(near-to-far, range-causal)으로 하나씩 생성하고, 각 객체를 중심좌표·크기·방향·속도·클래스로 구성된 짧은 이산 토큰 시퀀스로 인코딩한다. 이 near-to-far 순서는 '가까운 물체가 먼 물체를 가리지만 그 반대는 성립하지 않는다'는 라이다 특유의 occlusion 기하 구조를 그대로 반영한 설계여서, 학습 시 teacher forcing과 추론 시 자기회귀적(autoregressive) 디코딩을 자연스럽게 가능케 한다. 앵커나 NMS 없이도 다양한 백본에서 nuScenes 기준 경쟁력 있는 성능을 냈다는 점이 핵심 결과다. PointPillars, CenterPoint로 이어져온 grid/center 기반 탐지 계보에 언어모델식 생성 패러다임이라는 새로운 축을 더한 시도로, 탐지 헤드 설계의 대안적 사고를 보여준다는 점에서 BEV/포인트클라우드 알고리즘을 공부하는 사람에게 참고할 가치가 있다."
    source_url: "https://arxiv.org/abs/2603.07985"
  - title: "교사도 롤아웃을 해야 한다 — HorizonDrive의 반-드리프트 자기회귀 증류"
    type: "논문"
    summary: "폐루프 주행 시뮬레이션은 짧은 오프라인 클립을 넘어서는 실시간 상호작용을 요구하기 때문에 자기회귀(AR) rollout 방식으로 향할 수밖에 없는데, 기존 AR distillation 기법은 두 갈래 한계에 부딪힌다는 것이 HorizonDrive의 출발점이다. frame sink 방식은 자차의 빠른 움직임과 급격한 장면 전환이 많은 주행 환경에 잘 전이되지 않고, student-side degradation 학습은 교사(teacher) 모델이 한 번에 내놓는 출력 길이에 지도(supervision) 범위가 묶여버린다. 이 논문의 핵심 통찰은 '교사 자신도 rollout이 가능하게 만들어, 교사의 자기회귀 rollout 자체로부터 신뢰할 수 있는 지도 신호를 뽑아내자'는 것으로, 이를 anti-drifting 학습-증류 프레임워크로 구현해 action-controllable 생성과 안정적인 장기 AR rollout을 동시에 지원하며 분 단위 실시간 상호작용 시뮬레이션을 가능하게 한다. 앞서 다룬 SafeDrive(궤적 조건부 sparse world model)나 Dash2Sim(대시캠 기반 희귀 시나리오 생성)이 각각 '무엇을 조건으로 줄지', '어떤 데이터로 학습할지'를 다뤘다면, 이 논문은 world model 학습 방법론 자체의 고질적 약점인 '긴 rollout에서의 오차 누적(드리프트)'을 정면으로 겨냥한다는 점에서 시뮬레이션 기반 학습 방법론을 깊이 이해하려는 사람에게 유용하다."
    source_url: "https://arxiv.org/abs/2605.11596"
---
