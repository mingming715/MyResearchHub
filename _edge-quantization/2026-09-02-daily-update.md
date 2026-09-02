---
title: "Edge Device 양자화 / 모델 경량화 업데이트 (2026-09-02)"
date: 2026-09-02
category: edge-quantization
items:
  - title: "'배포 대상 중심'으로 다시 짠 QAT 서베이 — 왜 하나의 QAT 레시피가 모두에게 맞지 않는가"
    type: "논문"
    summary: "양자화 인식 학습(QAT)을 기법 계보가 아니라 '배포 대상(target)' 축으로 재구성한 서베이다. STE(straight-through estimator) 근사, 그래디언트 처리, 캘리브레이션 전략 같은 QAT의 핵심 설계 요소들이 대상 모델 규모(소형 CNN vs. 수십억 파라미터 LLM)와 배포 하드웨어(범용 GPU vs. 저전력 NPU/MCU)에 따라 왜 다른 선택을 요구하는지를 이론적 근거와 함께 정리한다. 특정 툴킷이나 벤치마크 수치 나열이 아니라 'QAT가 실제로 무엇을 근사하고 있으며 그 근사가 언제 깨지는가'라는 원리 수준에서 조망하기 때문에, 개별 QAT 변형 논문들을 읽기 전에 전체 지형을 잡는 데 유용한 참고 자료다."
    source_url: "https://arxiv.org/abs/2608.29667"
  - title: "Whisper-small PTQ 4개 라이브러리 실측 — 정적 양자화가 오히려 성능을 깎아먹는 이유"
    type: "논문"
    summary: "PyTorch, Optimum-Quanto, HQQ, bitsandbytes 네 개 라이브러리를 동일 기준으로 맞춰 Whisper-small에 PTQ를 적용하고, 양자화 스킴·방식·세분화 단위·비트폭을 바꿔가며 단어 오류율(WER) 변화를 측정한 교차 라이브러리 실증 연구다. 가장 눈에 띄는 결과는 동적(dynamic) INT8이 모델 크기를 57% 줄이면서 WER을 베이스라인보다 오히려 개선시킨 반면, 정적(static) 양자화는 Transformer 특유의 활성화 분포 때문에 성능이 더 나빠졌다는 점이다. NF4·INT3 같은 공격적 포맷은 최대 71%까지 압축할 수 있지만 잡음이 섞인 오디오에서 정확도가 크게 흔들렸고, Whisper-base/tiny로 확장한 실험에서도 같은 경향(저비트일수록 열화 심화)이 재현됐다. 이미지·LLM 중심의 양자화 논의와 달리 음성 인식이라는 비-이미지 도메인에서 '정적 vs 동적'이라는 흔한 설계 선택이 실제로 어떤 방향으로 갈리는지를 구체적 수치로 보여준다."
    source_url: "https://arxiv.org/abs/2511.08093"
  - title: "EdgeRazor — 혼합정밀도 양자화와 지식증류를 엮어 1.88비트 LLM이 2비트 SOTA를 앞서다"
    type: "논문"
    summary: "EdgeRazor는 레이어별로 비트폭을 세밀하게 배분하는 Structural Quantization with Mixed Precision, 가장 정보량이 큰 특징만 골라 정렬하는 Layer-Adaptive Feature Distillation, forward/reverse KL 균형을 맞추는 Entropy-Aware KL Divergence 세 모듈을 결합한 QAT+증류 프레임워크다. Qwen3-0.6B를 1.88비트까지 낮춰도 기존 2비트 SOTA 대비 11.27점, 가장 강한 3비트 베이스라인 대비도 4.38점 높은 성능을 보였고, 1.58비트에서는 저장공간을 1.11GB에서 0.19GB로 줄이면서 디코딩 속도를 FP16 대비 15.16배 끌어올렸다. MobileLLM-350M에서도 기존 QAT 파인튜닝 기법(ParetoQ)을 전 비트폭에서 앞서면서 학습 비용은 4~10배 낮아, '양자화와 증류를 그냥 순서대로 붙이는' 방식이 아니라 극저비트 구간에서 어떤 특징을 어떻게 정렬해야 하는지에 대한 구체적 설계 지침을 제시한다는 점에서 의미가 있다."
    source_url: "https://arxiv.org/abs/2605.04062"
---
