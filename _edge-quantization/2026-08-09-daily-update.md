---
title: "Edge Device 양자화 / 모델 경량화 업데이트 (2026-08-09)"
date: 2026-08-09
category: edge-quantization
items:
  - title: "Prune-then-Quantize or Quantize-then-Prune? — 압축 단계 순서가 성능을 좌우한다"
    type: "논문"
    summary: "pruning과 quantization을 함께 적용할 때 어떤 순서가 나은지에 대해 기존 연구들은 상반된 결론(어떤 논문은 pruning을 먼저, 다른 논문은 quantization을 먼저 해야 한다고 주장)을 내놓았을 뿐, 일반적인 세팅에서 순서 효과 자체를 체계적으로 분석한 연구는 없었다는 공백을 짚는다. 이 논문(ICLR 2026)은 '약한 섭동을 먼저, 강한 섭동을 나중에 적용해야 한다'는 Progressive Intensity Hypothesis를 제시하고, 두 압축 기법의 sensitivity가 서로 겹치지 않을 때(disjoint sensitivity) 순서 효과가 두 기법 간 성능 격차에 비례해 커진다는 것을 이론적으로 증명한다. LLM은 WikiText-2 perplexity, 비전 모델은 이미지 분류 정확도를 기준으로 다양한 pruning granularity·rotation 기반 양자화·weight-update 방식에 걸쳐 가설이 일관되게 성립함을 실증했다. 실무에서 흔히 임의로 정해지는 '먼저 가지치기냐 먼저 양자화냐' 파이프라인 순서가 실제로는 최종 정확도에 유의미한 영향을 미치는 설계 변수라는 것을 보여준다는 점에서, 양자화를 단일 기법이 아니라 경량화 파이프라인 전체의 한 단계로 봐야 한다는 관점을 제공한다."
    source_url: "https://arxiv.org/abs/2603.18426"
  - title: "Prune-Quantize-Distill — 가지치기·양자화·지식증류를 순서화된 파이프라인으로 결합"
    type: "논문"
    summary: "가지치기, 양자화, 지식 증류를 각각 독립적으로 연구하거나 순서를 특별히 고민하지 않고 결합하는 기존 관행과 달리, 이 논문은 unstructured pruning → INT8 quantization-aware training(QAT) → knowledge distillation(KD) 순서를 명시적으로 설계하고 그 근거를 제시한다. Pruning은 이후 저정밀도 최적화에서 노이즈 누적을 줄이는 capacity-reduction 전처리 역할을 하고, INT8 QAT가 실제 배포 성능 향상의 핵심 동력이며, KD는 마지막 단계에서 sparse INT8 상태로 제약된 모델의 정확도를 배포 비용 변경 없이 회복시키는 역할을 맡는다는 구조다. ResNet-18, WRN-28-10, VGG-16-BN을 CIFAR-10/100에서 검증한 결과, 단일 기법이나 비순서화된 조합 대비 accuracy-size-latency 트레이드오프가 일관되게 우수했고 CPU 추론 레이턴시 0.99~1.42ms를 달성했다. 20/40/40 에폭 배분을 고정한 순서 교체 실험(ordering ablation)에서도 제안된 순서가 다른 순열보다 대체로 우수해, 파라미터·FLOP 수치만으로 압축 전략을 판단하기보다 실측 레이턴시와 단계 순서를 함께 고려해야 한다는 점을 강조한다."
    source_url: "https://arxiv.org/abs/2604.04988"
---
