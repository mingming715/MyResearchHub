---
title: "자율주행 SW / AI 모델 업데이트 (2026-10-19)"
date: 2026-10-19
category: autonomous-sw
items:
  - title: "월드모델과 플래너를 아예 하나의 잠재공간에 합치다 — DriveWorld-VLA가 '상상'과 '결정'을 연결한 방식"
    type: "논문"
    summary: "바로 전날 다룬 DriveVLA-W0처럼 최근 운전 VLA들은 월드모델을 보조 손실(auxiliary objective)로 붙여 쓰는 경우가 많은데, 이는 월드모델의 '미래 예측'과 VLA의 '행동 결정'이 출력 단계에서만 느슨하게 연결된다는 한계를 갖는다. ICML 2026에 채택된 DriveWorld-VLA는 이 둘을 표현(representation) 수준에서 통째로 묶는다 — 월드모델이 만든 잠재 상태 자체를 VLA 플래너의 의사결정 상태로 그대로 사용해, 후보 행동을 취했을 때 장면이 어떻게 바뀔지를 픽셀 단위 복원 없이 잠재공간 안에서 바로 평가하게 한다. 1단계 학습에서 미래 BEV 상상과 행동 예측을 하나의 공유 표현으로부터 동시에 학습시키며, NAVSIMv1에서 PDMS 91.3, NAVSIMv2에서 EPDMS 86.8, nuScenes에서 3초 평균 충돌률 0.16을 보고했다. 월드모델과 플래너를 '느슨하게 연결'하던 흐름에서 '표현 자체를 공유'하는 흐름으로 한 걸음 더 나간 사례로, 운전 월드모델 설계가 어디로 향하고 있는지를 보여주는 논문이다."
    source_url: "https://arxiv.org/abs/2602.06521"
  - title: "박스를 다 그려놓고 추려내는 대신, 애초에 겹치지 않게 예측한다 — PillarDETR가 PointPillars에 올린 DETR 헤드"
    type: "논문"
    summary: "2018년 공개된 PointPillars는 포인트클라우드를 수직 기둥(pillar)으로 나눠 2D CNN으로 처리하고, 앵커 기반 헤드가 쏟아낸 후보 박스를 비최대억제(NMS)라는 휴리스틱으로 추려내는 구조였는데, 이 NMS 단계는 미분 불가능하고 임계값에 민감해 오랫동안 파이프라인의 약점으로 지적돼 왔다. PillarDETR는 pillar 인코딩 자체는 유지하되, 백본을 YOLOv8 계열의 CSP 네트워크로 바꾸고 헤드를 RT-DETR 스타일의 트랜스포머 디코더로 교체해 NMS 없이 집합(set) 단위로 박스를 한 번에 예측하도록 했다. KITTI와 nuScenes에서 PointPillars 베이스라인 대비 개선을 보고했는데, 이는 2D 객체 탐지에서 이미 자리 잡은 '앵커+NMS에서 DETR식 집합 예측으로'라는 흐름이 포인트클라우드·BEV 3D 탐지 쪽으로도 옮겨오고 있음을 보여주는 구체적인 사례다. PointPillars·CenterPoint 같은 고전적인 라이다 파이프라인이 트랜스포머 탐지 헤드로 어떻게 현대화되고 있는지를 보고 싶다면 참고할 만하다."
    source_url: "https://arxiv.org/abs/2606.01757"
---
