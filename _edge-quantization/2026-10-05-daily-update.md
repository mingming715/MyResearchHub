---
title: "Edge Device 양자화 / 모델 경량화 업데이트 (2026-10-05)"
date: 2026-10-05
category: edge-quantization
items:
  - title: "ViT 양자화 실패 지도 — 왜 특정 연산자에서만 정확도가 무너지는가"
    type: "논문"
    summary: "Vision Transformer의 post-training quantization이 왜 항상 같은 지점에서 깨지는지를 83편의 선행 연구를 분석해 Driver-Strategy 프레임워크로 정리한 서베이. residual accumulation, Softmax·GELU 비선형성, Q/K/V attention-path의 결합된 취약성, LayerNorm 경계 불안정성, outlier가 지배하는 양자화 range, 6비트 이하에서의 brittleness, mixed-precision 할당 비용, 커널 가용성에 따른 backend 제약이라는 8가지 '실패 드라이버'를 식별하고 이에 대응하는 6개 전략 계열을 1:1로 매칭한다. 특정 PTQ 기법 하나를 홍보하는 논문이 아니라 'ViT 양자화가 어디서, 왜 깨지는가'를 구조적으로 이해하게 해주는 체크리스트에 가까워, 온디바이스 ViT 배포를 다루는 사람에게 실질적인 참조 자료가 된다."
    source_url: "https://www.sciencedirect.com/science/article/pii/S138376212600319X"
  - title: "포인트클라우드 3D 디텍터, INT4까지 내려가도 버틴다 — Point4Bit의 전경 인식 양자화"
    type: "논문"
    summary: "복셀 기반 3D 객체 검출기는 LiDAR 포인트클라우드의 극단적 희소성 때문에 이미지용 PTQ 기법을 그대로 가져오면 4비트 근처에서 성능이 급격히 무너진다. NeurIPS 2025에서 발표된 Point4Bit은 전경(foreground) 포인트의 구조적 단서로 희소 activation을 구간별로 나눠 양자화하는 Foreground-aware Piecewise Activation Quantization과, gradient 민감도로 과제에 중요한 weight만 선별 보호하는 Gradient-guided Key Weight Quantization을 결합해, INT4에서도 정확도 손실을 1.5% 이내로 묶었다. 이미지 도메인의 양자화 직관이 포인트클라우드에는 그대로 통하지 않는다는 것을 구체적 수치로 보여주는 사례다."
    source_url: "https://openreview.net/forum?id=sj5wiTCtu6"
  - title: "3D Gaussian Splatting도 가지치기와 양자화를 한 번에 — GETA-3DGS"
    type: "논문"
    summary: "실시간 novel-view synthesis의 사실상 표준이 된 3D Gaussian Splatting은 장면 하나당 수백 MB~수 GB를 차지해 모바일·XR 플랫폼에 올리기 어렵다. 기존 압축 기법들은 pruning·quantization·entropy coding을 분리된 단계로 다루고 opacity threshold나 고정 비트폭 같은 수작업 휴리스틱에 의존해 장면마다 다시 튜닝해야 했다. GETA-3DGS는 각 Gaussian을 속성별 서브노드로 나눈 quantization-aware dependency graph와 렌더링 기여도 기반 saliency를 이용해 구조적 pruning과 속성별 mixed-precision quantization을 하나의 파이프라인에서 공동 최적화하고, 타겟 비트레이트만 지정하면 장면별 수작업 없이 Vanilla 3DGS 대비 약 5배 용량을 줄인다. 이미지·LLM 중심이던 'pruning+quantization 공동 최적화' 논의를 3D 표현 모델로 확장한 사례라는 점이 흥미롭다."
    source_url: "https://arxiv.org/abs/2605.02086"
  - title: "같은 INT8인데 결과가 다르다 — Whisper 양자화를 가르는 건 라이브러리의 구현 선택"
    type: "논문"
    summary: "PyTorch, Optimum-Quanto, HQQ, bitsandbytes 네 라이브러리로 동일한 Whisper-small에 PTQ를 적용했을 때, scheme(dynamic/static)·method(symmetric/asymmetric)·granularity(per-tensor/per-channel)·bit-width 선택이 제각각이라 단어 오류율과 속도가 라이브러리별로 크게 벌어진다는 것을 체계적으로 밝힌 cross-library 평가 연구. Quanto의 dynamic INT8은 모델 크기를 57% 줄이면서도 baseline보다 오류율이 낮아지는 반면, static quantization은 LayerNorm·Softmax용 저비트 커널이 없어 오히려 성능이 떨어지고, NF4·INT3 같은 공격적 포맷은 71%까지 압축되지만 잡음 환경에서 정확도가 무너진다. '양자화 기법'이 아니라 '양자화를 구현하는 방식'이 결과를 가른다는 것을 보여주는 실무적으로 유용한 반증 사례."
    source_url: "https://arxiv.org/abs/2511.08093"
  - title: "NAS와 양자화를 따로 풀면 진다 — 구조와 비트폭을 동시에 찾는 LLM 압축"
    type: "논문"
    summary: "지금까지는 NAS로 '최적 구조'를 먼저 찾은 뒤 그 구조에 양자화를 적용하는 순차적 파이프라인이 당연하게 여겨졌지만, 구조 탐색 단계에서 양자화 민감도를 고려하지 않으면 양자화 이후 성능이 역전되는 문제가 반복적으로 보고돼 왔다. 이 논문은 LLM 선형 레이어의 아키텍처 설정과 mixed-precision 양자화 정책을 하나의 미분 가능한 탐색 공간에서 동시에 최적화하는 프레임워크를 제안해, 동일한 정확도에서 순차적 NAS-후-양자화 대비 최대 1.4배 빠른 추론을, 동일한 레이턴시에서는 7개 추론 과제 평균 최대 6%p 높은 정확도를 달성한다. '최적 모델을 먼저 찾고 나중에 압축한다'는 표준 관행 자체가 최적이 아닐 수 있음을 정량적으로 보여준다."
    source_url: "https://arxiv.org/abs/2606.04063"
---
