---
title: "Edge Device 양자화 / 모델 경량화 업데이트 (2026-11-02)"
date: 2026-11-02
category: edge-quantization
items:
  - title: "연산이 아니라 '읽어오는 속도'가 병목이었다 — LeanStream이 온디바이스 LLM 메모리를 4.8배 줄인 방법"
    type: "논문"
    summary: "온디바이스 LLM 추론에서 모델이 디바이스 메모리를 넘어서면 지연시간이 모델 크기 증가량보다 훨씬 가파르게 치솟는다. 원인은 연산이 아니라 플래시/디스크에서 가중치를 읽어오는 I/O다. LeanStream은 '추측하고 정제하는(speculate-and-refine)' 스트리밍 방식으로 GPU 연산과 저장장치 I/O를 겹쳐 실행하면서, 부분적인 GPU 결과를 보고 어떤 가중치를 먼저 로드하고 캐시에 남길지를 그때그때 조정한다. 그 결과 기존 최고 성능 기법 대비 메모리 사용량을 4.8~7.5배 줄이면서도 토큰 생성 처리량은 1.6~2.1배 끌어올렸다고 보고한다. 양자화·가지치기가 '모델을 작게 만드는' 축이라면, 이 연구는 '무엇을 언제 읽어올지'를 최적화하는 전혀 다른 축의 레버라서, 온디바이스 추론을 레이턴시-메모리-전력 트레이드오프로 이해하려는 사람에게는 양자화와 상호보완적으로 알아둘 만한 기법이다."
    source_url: "https://arxiv.org/abs/2609.03079"
    image: "https://arxiv.org/html/2609.03079v2/intro_beta.png"
  - title: "이미지용 양자화 기준을 그대로 쓰면 무너진다 — PointPillars를 레이어 민감도로 쪼갠 Mixed-Precision TensorRT 파이프라인"
    type: "논문"
    summary: "포인트클라우드 3D 디텍터(PointPillars류)를 양자화할 때는 2D 비전 모델과 달리 레이어마다 양자화에 대한 민감도 차이가 크게 갈려서, 균일한 저비트 양자화를 그대로 적용하면 정확도가 쉽게 무너진다. 이 연구는 가장 양자화에 취약한 레이어들만 골라 부동소수점으로 남기고, 나머지 레이어 조합을 그리디 탐색으로 좁혀가며 PTQ 또는 QAT로 마무리하는 Mixed-Precision 파이프라인을 TensorRT 위에서 구현했다. 이미지 도메인의 양자화 레시피가 point cloud 같은 비-이미지 도메인에 그대로 옮겨지지 않는 이유와, 레이어별 민감도를 체계적으로 찾아내는 실전적인 방법을 보여준다는 점에서 의미 있는 사례다."
    source_url: "https://arxiv.org/abs/2601.12638"
    image: "https://arxiv.org/html/2601.12638v2/figures/overview2.png"
---
