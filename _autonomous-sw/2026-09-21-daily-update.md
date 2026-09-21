---
title: "자율주행 SW / AI 모델 업데이트 (2026-09-21)"
date: 2026-09-21
category: autonomous-sw
items:
  - title: "희소 어텐션 기반 경량 BEV 3D 객체 탐지: Sparse-BEVNet"
    type: "논문"
    summary: "BEV 기반 멀티뷰 3D 객체 탐지는 이미지에서 BEV로 변환하는 조밀한(dense) 뷰 프로젝션과 멀티스케일 특징 추출 과정에서 연산량이 매우 크다는 고질적 병목이 있다. 이 논문은 이미지 백본에 Bi-Level Routing Attention을 도입해 불필요한 영역의 연산을 건너뛰고, Cascaded Group Attention으로 계층 간 특징 융합을 추가 연산 없이 강화하며, 기존의 조밀한 뷰 프로젝션 대신 Sparse Spatial Cross-Attention으로 카메라-BEV 변환 자체를 희소화한다. nuScenes에서 mAP 45.2%, NDS 54.5%를 달성해 경량화와 성능을 동시에 확보했다고 주장한다. 핵심 논점은 '정확한 인식을 위해 모든 픽셀·모든 BEV 셀을 조밀하게 계산해야 하는가'라는 질문에 대해 라우팅과 희소화로 연산을 선택적으로 배분하는 설계 철학을 제시했다는 점으로, 온보드 실시간성이 필수인 자율주행 인식 스택에서 반복적으로 등장하는 정확도-연산량 트레이드오프를 다시 짚어준다."
    source_url: "https://arxiv.org/abs/2609.14185"
  - title: "GraphBEV++: 그래프 매칭 기반 카메라-라이다 BEV 정합 프레임워크"
    type: "논문"
    summary: "카메라와 라이다를 BEV에서 융합할 때 발생하는 근본적 문제 중 하나는 depth 추정 오차와 캘리브레이션 불확실성으로 인해 두 모달리티의 BEV 특징이 서로 어긋나는 '투영 유발 정합 오류'다. ECCV 2024의 GraphBEV를 확장한 이 논문은 LocalAlign-v2(그래프 신경망으로 이웃 인식 depth 특징을 추출해 라이다의 depth를 명시적으로 지도학습에 활용, 국소 정합 오차를 보정)와 GlobalAlign-v2(LSS 기반 BEV의 전역 정합 오차를 학습된 오프셋으로 교정하는 Deformable 변형, 쿼리 기반 BEV의 암묵적 정합 오차까지 다루는 Diffusion 변형)를 제안한다. BEVFusion류 알고리즘이 흔히 센서가 정확히 정렬돼 있다는 전제 위에서 설계되는 데 반해, 이 연구는 그 전제가 실제 차량 환경에서는 항상 깨진다는 점을 정면으로 다룬다는 점에서 설계 철학적으로 의미가 있다. 즉 융합 알고리즘의 실질적 성능은 새로운 백본 구조보다 '정합 오차를 얼마나 명시적으로 모델링하느냐'에 좌우될 수 있다는 시사점을 준다."
    source_url: "https://arxiv.org/abs/2606.16354"
  - title: "위험 인지 점유(risk-aware occupancy)로 안전 지향 End-to-End 주행을 재설계한 ROIDrive"
    type: "논문"
    summary: "최근 End-to-End 자율주행 스택 상당수는 인식 결과를 객체·차선 등 이산적(sparse) 요소 집합으로 표현하는데, 이는 혼잡하고 가려짐이 심한 장면에서 비정형 장애물이나 불확실 영역을 놓치는 안전 리스크로 이어진다는 문제의식에서 출발한 연구다. ROIDrive는 전역 장면 점유, 지도 기반 주행 제약, 미래 동적 에이전트 점유를 하나의 통합 BEV 맵으로 인코딩하는 '위험 인지 점유'라는 조밀한(dense) 중간 표현을 제안하고, 이를 독립 브랜치로 예측한 뒤 플래닝 쿼리에 직접 주입해 궤적 생성에 반영한다. 이를 검증하기 위해 nuScenes와 Occ3D-nuScenes를 기반으로 RiskOcc4D-nuScenes 벤치마크를 새로 구축했고, UniAD 지표 기준 상대 충돌률 52.9% 감소, ST-P3 기준 35.0% 감소라는 결과를 제시했다. 이 연구가 흥미로운 지점은 world model이나 VLA 같은 거대 모델이 아니라 '인식-플래닝 인터페이스로 무엇을 쓸 것인가(sparse vs dense occupancy)' 자체를 안전성의 핵심 변수로 다시 끄집어냈다는 것으로, E2E 아키텍처 설계에서 중간 표현 선택이 여전히 미해결 설계 질문임을 보여준다."
    source_url: "https://arxiv.org/abs/2609.21470"
---
