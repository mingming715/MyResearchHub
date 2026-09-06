---
title: "자율주행 SW / AI 모델 업데이트 (2026-09-06)"
date: 2026-09-06
category: autonomous-sw
items:
  - title: "GraphBEV++: 캘리브레이션이 완벽하다는 가정을 버린 BEV 정렬"
    type: "논문"
    summary: "BEVFusion류 라이다-카메라 융합은 두 센서가 정확히 캘리브레이션돼 있다는 전제를 깔고 있지만, 실제 차량에서는 진동이나 온도 변화로 미세한 정렬 오차가 상시 발생한다. GraphBEV++는 그래프 매칭으로 국소 오정렬을 잡는 LocalAlign-v2와, LSS 방식엔 명시적 오프셋을 학습시키고 쿼리 기반 BEV(BEVFormer류)엔 노이즈를 주입했다가 디노이징으로 복원하는 GlobalAlign-v2를 결합해 '정렬 강건성'을 아키텍처에 무관하게 끼워 넣을 수 있는 모듈로 분리했다. nuScenes·Waymo·Argoverse2에서 정렬 오차 노이즈 하에서도 성능을 지키고 occupancy 예측과 매핑·예측·플래닝을 아우르는 풀스택 엔드투엔드까지 확장 가능함을 보여, 센서 퓨전 알고리즘 설계가 '이상적 캘리브레이션'을 전제하던 단계에서 '오정렬을 기본값으로 다루는' 단계로 넘어가고 있음을 보여준다."
    source_url: "https://arxiv.org/abs/2606.16354"
  - title: "QueryOcc: 라이다 라벨 없이 쿼리만으로 3D occupancy를 학습하다"
    type: "논문"
    summary: "3D occupancy 예측은 보통 라이다 기반의 조밀한 3D 라벨이 필요해 데이터 구축 비용이 큰 문제를 안고 있었다. QueryOcc(CVPR 2026)는 인접 프레임에서 뽑은 4D 시공간 쿼리를 독립적으로 샘플링해 연속적인 3D semantic occupancy를 직접 학습하는 자가지도 프레임워크로, 실제 라이다 포인트든 비전 파운데이션 모델이 만든 pseudo point cloud든 어느 쪽으로도 지도가 가능하도록 설계했고, 가까운 영역은 세밀하게 먼 영역은 압축해 표현하는 contractive scene representation을 도입했다. Occ3D-nuScenes 자가지도 벤치마크에서 기존 카메라 기반 방법 대비 semantic RayIoU를 26% 끌어올리면서도 11.6FPS로 동작해, '라벨 없는 occupancy 학습'이 실전 속도까지 갖출 수 있음을 보여준 사례다."
    source_url: "https://arxiv.org/abs/2511.17221"
  - title: "Driving with DINO: 시뮬레이션을 실사로 바꿀 때의 '일관성이냐 사실감이냐' 딜레마"
    type: "논문"
    summary: "시뮬레이션 영상을 학습용 실사 데이터로 바꾸는 sim-to-real 생성 모델들은 엣지·깊이 같은 저수준 신호를 조건으로 쓰면 구조는 정확히 유지되지만 합성 흔적이 그대로 '구워져' 사실감이 떨어지고, 깊이·시맨틱 같은 고수준 프라이어를 쓰면 사실감은 좋아지지만 구조 일관성이 흐트러지는 Consistency-Realism Dilemma에 부딪혀 왔다. Driving with DINO(DwD)는 DINOv3 같은 비전 파운데이션 모델의 특징을 시뮬레이션-실제 도메인을 잇는 공통 다리로 삼아, 텍스처 정보가 새어드는 고주파 성분은 Principal Subspace Projection으로 걷어내고 Random Channel Tail Drop으로 구조 정보 손실을 막아 두 요구를 동시에 만족시키려 한다. 시뮬레이터의 기하학적 레이아웃을 그대로 지키면서 사실적인 학습 영상을 대량 생성할 수 있다는 점에서, 합성 데이터 기반 학습 방법론에 새로운 절충안을 제시한다."
    source_url: "https://arxiv.org/abs/2602.06159"
---
