---
title: "Edge Device 양자화 / 모델 경량화 업데이트 (2026-10-18)"
date: 2026-10-18
category: edge-quantization
items:
  - title: "라이다 양자화는 왜 INT8에서 멈춰 있었나 — Point4bit가 연 포인트클라우드 3D 검출의 INT4 시대"
    type: "논문"
    summary: "지금까지 이 아카이브에서 다뤄온 PTQ 기법들(ADMM-Q, Qronos, ConQuR 등)은 모두 이미지 기반 LLM·비전 모델을 대상으로 했는데, 라이다 포인트클라우드는 이미지와 근본적으로 다른 문제를 안고 있다. 복셀(voxel) 기반 3D 객체 검출기는 공간이 극도로 희소(sparse)하고 기하학적으로 불규칙해서, 기존 PTQ 기법들이 이미지 도메인에서 당연하게 쓰던 '전체 채널에 걸친 분포 추정' 같은 전제가 잘 들어맞지 않는다. 그 결과 라이다 검출기용 PTQ는 지금까지 사실상 INT8에서 멈춰 있었다. 퉁지대학교·카네기멜런대 연구진이 NeurIPS 2025에 발표한 Point4bit은 이 벽을 INT4까지 밀어붙인 첫 범용 프레임워크로, 두 가지 장치를 쓴다. 활성값 쪽에는 포인트클라우드의 희소성을 '전경(foreground) 구조'를 활용해 구간별로 나눠 양자화하는 Foreground-aware Piecewise Activation Quantization을, 가중치 쪽에는 그래디언트 분석으로 태스크에 민감한 '핵심 가중치'만 선별해 보호하는 Gradient-guided Key Weight Quantization을 적용한다. 이는 최근 다룬 pQuant의 '파라미터 평등화' 문제의식—극단적 저비트에서 민감한 파라미터와 둔감한 파라미터의 구분이 무너진다—와도 맞닿아 있는데, Point4bit은 이 구분을 라이다 도메인의 '전경/배경'이라는 구조적 특성으로 다시 세우려는 시도로 읽을 수 있다. INT4까지 내려가도 정확도 저하가 1.5% 미만이라고 보고하며, 포인트클라우드 분류·세그멘테이션에도 일반화된다고 밝힌다. 자율주행 센서 파이프라인에서 카메라·LLM 쪽 양자화 연구가 이미 2~4비트로 깊이 들어간 반면 비-이미지 센서 모달리티는 상대적으로 뒤처져 있었다는 점에서, 이 연구는 양자화 연구의 다음 전선이 어디로 옮겨가는지를 보여주는 구체적 사례다."
    source_url: "https://proceedings.neurips.cc/paper_files/paper/2025/file/f1922bd718528ac3eab114eabbbfa7a0-Paper-Conference.pdf"
---
