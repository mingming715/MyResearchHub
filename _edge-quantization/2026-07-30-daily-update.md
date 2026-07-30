---
title: "Edge Device 양자화 / 모델 경량화 업데이트 (2026-07-30)"
date: 2026-07-30
category: edge-quantization
items:
  - title: "D²Quant - LLM 서브 4비트 PTQ에서 다운프로젝션 병목을 해결"
    type: "논문"
    summary: "가중치만 양자화하는 PTQ(post-training quantization)를 4비트 미만으로 내리면 정확도가 크게 떨어지는데, 이 논문은 그 원인을 두 가지로 짚는다. 다운프로젝션(down-projection) 행렬이 양자화의 병목이 된다는 것과, 가중치 양자화가 활성값(activation) 분포를 왜곡시킨다는 것이다. D²Quant는 다운프로젝션 전용의 듀얼스케일 양자화기(DSQ)로 가중치 쪽 문제를, LayerNorm 안에서 평균 이동을 보정하는 편차인지보정(DAC)으로 활성값 쪽 문제를 각각 풀어 여러 LLM 계열에서 서브 4비트 PTQ 성능을 끌어올렸다. '양자화 정확도 저하'를 뭉뚱그려 다루지 않고 병목의 위치를 구체적으로 짚어낸 접근이라 PTQ 원리를 이해하는 데 좋은 사례다."
    source_url: "https://arxiv.org/abs/2602.02546"
  - title: "Point4Bit - 포인트클라우드 3D 검출을 위한 최초의 범용 INT4 PTQ"
    type: "논문"
    summary: "복셀 기반 3D 객체 검출기는 정확도는 높지만 연산·메모리 부담이 커서 엣지 디바이스 배포가 어렵고, 기존 PTQ 기법들은 대부분 INT8까지만 지원해 INT4 같은 더 낮은 비트로는 내려가지 못했다. Point4Bit은 포인트클라우드의 희소성과 기하 구조를 활용해 전경(foreground) 포인트의 중요한 특징을 보존하는 FA-PAQ와, 그래디언트 민감도로 중요 가중치를 골라 고정밀 양자화하는 G-KWQ를 결합해 INT4에서도 정확도 손실을 1.5% 미만으로 억제했다. 이미지 도메인에서 검증된 양자화 기법을 그대로 포인트클라우드에 옮기면 왜 잘 안 맞는지, 그리고 그 격차를 어떻게 메우는지를 보여주는 사례로 라이다 파이프라인 경량화를 공부하는 데 유용하다."
    source_url: "https://openreview.net/forum?id=sj5wiTCtu6"
---
