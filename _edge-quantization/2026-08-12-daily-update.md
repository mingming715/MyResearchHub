---
title: "Edge Device 양자화 / 모델 경량화 업데이트 (2026-08-12)"
date: 2026-08-12
category: edge-quantization
items:
  - title: "PTQ는 왜 실패하고 QAT는 왜 복구되는가: 손실 지형 기하학으로 본 양자화 이론"
    type: "논문"
    summary: "이 논문은 full-precision 학습이 넓은 계곡 안의 평평한 basin을 따라 진행된다는 기하학적 모델을 세우고, 양자화 격자 간격이 이 basin의 폭과 비슷해지는 순간 PTQ가 근처에 더 나은 양자화 지점이 있음에도 basin 밖의 고손실 지점을 선택하는 실패 모드를 이론적으로 구성한다. 반면 straight-through-estimator 기반 QAT는 latent 가중치를 갱신하면서도 gradient를 실제 배포되는 양자화 가중치 지점에서 평가하기 때문에, 그 gradient가 계곡 벽을 감지해 basin 안쪽으로 되돌아오는 성분을 획득하게 되고 이것이 QAT의 복구 메커니즘이라는 점을 유한시간 수렴 증명과 함께 제시한다. Vision·language 모델과 여러 양자화 방식에 걸친 실험이 이 basin-crossing 실패와 복구 메커니즘을 뒷받침한다. 특정 bit-width나 레이어에서 PTQ가 왜 예측 불가능하게 무너지고 QAT가 언제 반드시 필요한지에 대해 경험적 벤치마크를 넘어선 원리적 근거를 제공한다는 점에서, 양자화 기법 자체의 한계를 이해하려는 이들에게 중요한 참고점이 된다."
    source_url: "https://arxiv.org/abs/2606.09012"
  - title: "소형 VLM 양자화 민감도의 구성요소별 해부: MoE vs Dense, 인코더-커널-하드웨어 상호작용"
    type: "논문"
    summary: "이 연구는 3B급 Vision-Language Model의 vision encoder, projector, LLM backbone을 독립적으로 분리해 Jetson Orin NX/AGX에서 통제 실험으로 양자화 민감도를 측정한 첫 사례로, 양자화 민감도가 모델 규모보다 구조적 패러다임(MoE vs dense)에 좌우되며 MoE 백본이 오히려 INT4 노이즈를 완화한다는 점을 밝힌다. SigLIP 인코더가 Jetson Ampere에서 INT8 양자화 시 비대칭적으로 큰 레이턴시를 보이는 것은 인코더 자체 결함이 아니라 인코더-커널-하드웨어 간 상호작용 문제이며, INT4 LLM 양자화가 VRAM은 줄이지만 역양자화 오버헤드로 토큰 생성 속도는 오히려 느려질 수 있다는 역설도 함께 드러난다. 복합 양자화 오차는 대체로 가산적이지만 modality-alignment 경로에서만 아키텍처 의존적으로 비가산적이라는 발견은 정밀도를 어디에 배분해야 하는지에 대한 실용적 지침을 제공한다. '양자화는 단일 손실'이라는 통념을 깨고 구성요소별·하드웨어별 정밀도 할당이 필요함을 실증했다는 점에서, 멀티모달 온디바이스 배포 연구에 구체적 방향을 제시한다."
    source_url: "https://arxiv.org/abs/2607.08029"
  - title: "kiloVAD: 프루닝·자기증류·각도 기반 QAT를 결합한 2.1K 파라미터 초경량 음성 활동 감지기"
    type: "논문"
    summary: "상시 대기(always-on) 음성 파이프라인의 트리거인 VAD(Voice Activity Detection)를 다루는 이 연구는, 기존 경량 VAD들이 학습형 필터뱅크나 순환 레이어처럼 널리 지원되지 않는 구성요소에 의존해 실제 임베디드 배포에서는 취약하다는 문제를 지적한다. CNN만으로 구성된 causal 구조에 레이어별 구조적 프루닝, 자기증류(self-distillation), 그리고 표준 QAT보다 1~4%p 높은 성능을 내는 각도 기반(angle-based) 양자화 인식 학습을 하나의 파이프라인으로 결합해 설계했다. 그 결과물인 kiloVAD는 단 2.1천 개 파라미터와 200ms 컨텍스트만으로 AVA-Speech에서 causal 조건 기준 SOTA AUC 0.850을 달성한다. 프루닝·증류·양자화를 개별 기법이 아니라 극한의 파라미터 예산 안에서 상호보완적으로 엮은 사례로, 오디오라는 비-이미지 도메인에서 MCU급 프론트엔드 최적화가 어디까지 갈 수 있는지 보여준다."
    source_url: "https://arxiv.org/abs/2607.25870"
  - title: "NVFP4 저정밀도 포맷의 정확도 손실을 지식증류로 회복하는 Quantization-Aware Distillation"
    type: "논문"
    summary: "4비트 부동소수점 포맷 NVFP4로 LLM/VLM을 양자화할 때 발생하는 정확도 저하를 복구하기 위해, 이 논문은 기존 QAT 대신 지식증류 기반의 Quantization-Aware Distillation(QAD)을 제안한다. Full-precision teacher에서 양자화된 student로 KL divergence 손실을 통해 지식을 전이하는 방식으로, SFT·RL·모델 병합 등 다단계 post-training을 거친 실제 서비스급 모델에서 기존 QAT가 겪는 엔지니어링 복잡성과 학습 불안정성 문제를 우회한다. 전체 학습 데이터셋 없이도 데이터 품질과 커버리지 변화에 강건하게 정확도를 회복할 수 있다는 점이 실무적으로 중요하며, Nemotron Nano V2 VL을 포함한 여러 post-trained 모델에서 BF16에 근접한 정확도 복구를 보인다. 3비트대 초저정밀도 포맷이 확산되는 흐름 속에서, 불안정한 QAT를 대체할 수 있는 증류 기반 실용 대안을 제시했다는 점이 주목할 만하다."
    source_url: "https://arxiv.org/abs/2601.20088"
---
