---
title: "자율주행 SW / AI 모델 업데이트 (2026-08-14)"
date: 2026-08-14
category: autonomous-sw
items:
  - title: "대시캠 영상만으로 폐루프 시뮬레이터를 만드는 Dash2Sim"
    type: "논문"
    summary: "기존 자율주행 시뮬레이션은 소수 도시에서 수집한 데이터나 사람이 직접 설계한 시나리오에 의존해 왔는데, 이는 콘·배럴·바리케이드가 등장하는 공사구간 같은 롱테일 상황을 충분히 담지 못한다는 한계가 있다. Dash2Sim은 임의의 모노큘러 대시캠 영상을 입력받아 미터 단위로 정합된 지오레퍼런스 3D 재구성을 수행하고, 롱테일 객체를 검출·추적·3D 리프팅한 뒤 별도로 관리되는 지도 대비 검증까지 거쳐 별도 라벨링 없이 4D 주행 로그로 변환한다. 이렇게 만들어진 로그는 반응형 에이전트가 포함된 폐루프 시뮬레이션에 바로 투입 가능하며, 연구팀은 이를 17개 도시·4,244개 장면·270만 개 3D 객체 규모의 ROADWork4D 벤치마크로 구축했다. '시나리오를 직접 설계'하는 대신 '이미 존재하는 방대한 실세계 영상을 시뮬레이터 자산으로 변환'한다는 접근이라 합성 데이터 확보 전략의 방향을 보여주는 사례다."
    source_url: "https://arxiv.org/abs/2606.07366"
  - title: "자기예측 드리프트를 정면으로 잡는 자기수정형 자기회귀 주행 월드모델 HorizonDrive"
    type: "논문"
    summary: "자기회귀(autoregressive) 방식의 주행 월드모델은 실시간 폐루프 시뮬레이션을 위해 자기 예측을 계속 이어 붙여야 하는데, 이 과정에서 오차가 누적되어 장기 롤아웃일수록 화질과 일관성이 무너지는 드리프트 문제가 있었다. 기존 distillation 기법은 frame sink 방식이든 student 열화 학습 방식이든 결국 teacher의 단발 출력 길이에 supervision이 묶여 있어 근본 해결이 안 됐다는 것이 저자들의 진단이다. HorizonDrive의 핵심 통찰은 'teacher 자체를 롤아웃 가능하게 만들자'는 것으로, Scheduled Rollout Recovery로 예측이 오염된 과거 히스토리에서도 정답 미래를 복원하도록 훈련해 안정적인 teacher를 만들고, 이 teacher의 장기 롤아웃을 distribution-matching supervision으로 삼아 짧은 윈도우의 student를 teacher rollout distillation으로 효율화한다. 결과적으로 제한된 메모리 안에서 분 단위의 자기회귀 롤아웃을 가능하게 하며, 'teacher-student distillation의 신뢰도는 teacher가 스스로의 오차에 얼마나 강건한가에 달려 있다'는 설계 철학을 보여준다."
    source_url: "https://arxiv.org/abs/2605.11596"
  - title: "단일 경로 모방을 넘어서는 폐루프 가치추정·랭킹 플래너 CLOVER"
    type: "논문"
    summary: "대부분의 E2E 주행 플래너는 로그에 기록된 단 하나의 궤적만을 모방하도록 학습되지만, 실제 평가는 안전성·주행 가능성·진행도·승차감 등을 따지는 규칙 기반 planning metric으로 이뤄져 학습과 평가 사이에 근본적인 불일치가 생긴다. 시연 경로에 가까운 궤적이 규칙을 위반할 수도 있고, 반대로 시연과 먼 대안 궤적이 오히려 규칙상 더 타당하고 점수가 높을 수 있다는 것이다. CLOVER는 이를 generator-scorer 구조로 풀어, 생성기가 다양한 후보 궤적을 만들고 스코어러가 planning metric 하위 점수를 예측해 추론 시점에 랭킹한다. 또한 evaluator가 필터링한 pseudo-expert coverage supervision으로 단일 경로 모방을 세트 단위의 멀티모달 학습으로 확장하고, 스코어러 학습과 teacher 유도 생성기 개선을 번갈아 수행하는 보수적 폐루프 자기증류(self-distillation)를 도입한다. '정답 하나를 흉내내기'에서 '여러 후보를 두고 규칙 기반 피드백으로 고르기'로 패러다임을 옮긴 시도로, 모방학습의 구조적 한계를 다루는 방향성을 잘 보여준다."
    source_url: "https://arxiv.org/abs/2605.15120"
  - title: "형상 완성과 의미 분류를 분리한 희소 표현 occupancy 예측 SparseOcc++"
    type: "논문"
    summary: "3D semantic occupancy 예측에서 dense voxel 표현은 3D 공간의 희소성 때문에 연산 낭비가 크고, BEV·TPV 같은 투영 기반 표현은 반대로 미세한 3D 구조 정보를 잃는다는 딜레마가 있다. 기존 희소 표현 방식인 SparseOcc는 이 문제를 절충했지만, 기하(geometry)와 의미(semantic)를 뒤섞은 표현을 써서 빈 공간까지 고차원 semantic feature를 무차별적으로 전파시켜 voxel 단위 분류로 scene completion을 암묵적으로 수행했고, 이 얽힘이 과도한 활성화와 계산 부담·모호성을 낳았다. SparseOcc++는 scene completion을 semantic classification에서 명시적으로 분리해, sparse anchor voxel 위에서 장면 경계까지의 signed distance를 회귀하는 scene completion field(SCF)를 정의하고, 직교 분해 전략과 이산화 학습 기법으로 복잡한 야외 장면을 강건하게 모델링한다. '형상을 완성하는 문제'와 '의미를 분류하는 문제'는 원래 다른 종류의 문제이니 각각에 맞는 방식(회귀 vs 분류)으로 풀어야 한다는 재설계 철학이 핵심이다."
    source_url: "https://arxiv.org/abs/2607.04732"
---
