---
title: "자율주행 SW / AI 모델 업데이트 (2026-11-12)"
date: 2026-11-12
category: autonomous-sw
items:
  - title: "GM '컴파운드 AI': 모듈형과 엔드투엔드 사이 '제3의 길'을 공식화하다"
    type: "개념정리"
    summary: "모듈형(지각-예측-계획-제어 분리)과 엔드투엔드(단일 신경망으로 센서 입력을 바로 제어로 매핑) 중 어느 쪽이 정답이냐는 논쟁은 2026년 들어 양자택일이 아니라 수렴 쪽으로 흐르고 있는데, GM이 2026년 3월 발표한 '컴파운드 AI(Compound AI)'는 이 흐름을 가장 명시적으로 정리한 사례다. 핵심 주장은 엔드투엔드 학습이 주는 확장성(새로운 도로·상황으로의 일반화)은 유지하되, 물리 법칙·교통 규칙·내부 점검(introspection) 같은 구조적 제약을 루프 안에 되돌려 넣어야 안전성 인증이 가능하다는 것이다. 실제로 선두 업체인 Waymo와 Apollo Go도 완전한 엔드투엔드가 아니라 모듈형에 가까운 구조로 배치되어 있다는 분석, 반대로 테슬라 FSD v12처럼 완전 엔드투엔드로 전환한 사례가 '왜 이렇게 판단했는지 증명하기 어렵다'는 검증성 비판을 받는다는 대조가 함께 제시되며, 모듈형 vs 엔드투엔드라는 이분법 자체가 재편되고 있음을 보여준다. 아키텍처 선택이 단순한 기술적 취향이 아니라 안전 인증 가능성과 직결된다는 점에서, 자율주행 SW 스택을 공부하는 사람에게 현재 업계 논쟁의 구도를 정리해 보는 좋은 참고점이 된다."
    source_url: "https://engineering.gm.com/home.detail.html/Pages/news/us/en/engineering/2026/mar/0319-compound-ai.html"
  - title: "엔드투엔드 주행 모델, 사실은 내비게이션 명령을 거의 안 쓰고 있었다"
    type: "논문"
    summary: "2026년 4월 공개된 'Unveiling the Surprising Efficacy of Navigation Understanding in End-to-End Autonomous Driving'(Fudan대·디디추싱·Tsinghua AIR·CASIA)은 기존 엔드투엔드 자율주행 모델에 입력되는 내비게이션 신호('직진', '좌회전' 같은 커맨드)를 제거하거나 교란해도 주행 계획 출력이 거의 바뀌지 않는다는 실험 결과를 보고한다. 즉 많은 E2E 모델이 전역 내비게이션 정보를 실질적으로 쓰지 않고 눈앞 장면 이해에만 과도하게 의존하고 있었다는 것이며, 원인으로 '직진/좌회전' 같은 지나치게 단순화된 커맨드 표현이 로터리나 시야 밖 차선 변경처럼 복잡한 상황에서 전문가 궤적과 인과적 혼동(causal confusion)을 일으킨다는 점을 지목한다. 해법으로 턴바이턴 지시와 경로를 결합한 Sequential Navigation Guidance(SNG), 10만 QA 규모의 SNG-QA 데이터셋, 그리고 이를 학습한 SNG-VLA 모델을 제안해 Bench2Drive에서 UniAD-Base 대비 Driving Score 46.6%, Success Rate 119.4% 향상을 보였다고 주장한다. 벤치마크 점수가 높다고 해서 모델이 의도한 입력을 실제로 '쓰고 있는지'는 전혀 별개의 문제라는 것을 보여주는 반례 연구로, E2E 모델 설계를 검증할 때 어떤 함정을 조심해야 하는지 알려준다."
    source_url: "https://arxiv.org/pdf/2604.12208"
  - title: "포인트필러에서 BEVFusion까지: LiDAR 3D 탐지 알고리즘 3대 계보 정리"
    type: "개념정리"
    summary: "자율주행 인식 스택을 처음 공부할 때 가장 먼저 마주치는 PointPillars, CenterPoint, BEVFusion은 사실 하나로 이어지는 설계 계보다. PointPillars는 포인트 클라우드를 수직 기둥(pillar) 단위로 나눠 PointNet으로 기둥별 특징을 뽑고 2D BEV 가상 이미지에 흩뿌림으로써, 비용이 큰 3D 컨볼루션 없이도 2D 컨볼루션만으로 LiDAR 탐지를 가능하게 한 것이 핵심 아이디어다. CenterPoint는 이 파이프라인의 백본(voxel 또는 pillar 인코더)은 그대로 두되 탐지 헤드를 앵커 없이 물체 중심점을 직접 예측하고 박스 속성을 회귀하는 방식으로 바꿔, 앵커 기반 설계가 안고 있던 복잡한 하이퍼파라미터 튜닝 문제를 없앴다. BEVFusion은 여기에 Lift-Splat 방식으로 이미지 특징을 BEV로 투영하는 카메라 스트림을 LiDAR 스트림과 병렬로 두고 BEV 공간에서 합치는 구조를 택해, 두 센서 중 하나가 고장 나도 나머지 스트림이 독립적으로 동작하도록 만든 것이 설계 철학의 핵심이다(원 논문 기준 PointPillars 대비 mAP +18.4%, NDS +10.6% 개선). 이 세 알고리즘을 아우르는 오픈소스 프레임워크 OpenPCDet은 현재 GitHub 스타 5.8k를 기록하며 LiDAR 3D 탐지 연구의 사실상 표준 실험대가 되었다. 최근 쏟아지는 BEV 퓨전·센서 결함 대응 논문들이 왜 공통적으로 'BEV 공간에서 더 안전하게 합치는 법'을 고민하는지, 그 출발점이 되는 맥락을 짚어준다."
    source_url: "https://arxiv.org/pdf/2205.13790"
    metrics: ["GitHub ★ 5.8k (OpenPCDet)"]
---
