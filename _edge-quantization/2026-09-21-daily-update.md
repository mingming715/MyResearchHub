---
title: "Edge Device 양자화 / 모델 경량화 업데이트 (2026-09-21)"
date: 2026-09-21
category: edge-quantization
items:
  - title: "LILA: 캘리브레이션 없이 잠재 스펙트럼 기하학으로 LLM을 구조적 프루닝하는 기법"
    type: "논문"
    summary: "기존 structured pruning 기법 다수는 calibration 데이터, gradient 계산, 혹은 별도의 policy network를 필요로 하는데, LILA는 FFN 가중치 행렬의 특이값 분포와 뉴런 제거 후 분포 사이의 Kolmogorov-Smirnov 거리만으로 뉴런 중요도를 계산하는 닫힌 형태의 spectral rule을 제시해 학습이나 calibration 데이터 없이 프루닝을 수행한다. LLaMA-2-7B 25% sparsity 기준으로 fine-tuning 없이도 PruneNet 대비 zero-shot 정확도 1.57pp, WikiText-2로 calibration한 SliceGPT 대비 최대 6.0pp 높은 성능을 보였고, Neural Tangent Kernel 분석으로 random pruning 대비 functional distortion이 22배 줄어든다는 이론적 근거도 제시했다. 양자화 연구가 최근 도메인별 세부 변형으로 쏠려있는 상황에서, 프루닝 쪽은 calibration 의존성 자체를 제거하는 방향으로 독자적으로 발전하고 있음을 보여주는 사례라 실무 배포 파이프라인(calibration 데이터 준비 비용 제거)과 이론 양쪽에서 참고할 가치가 크다."
    source_url: "https://arxiv.org/abs/2609.11163"
  - title: "수동냉각 엣지 SoC의 열 스로틀링을 없애는 경험적 캘리브레이션 DVFS 스케줄러"
    type: "논문"
    summary: "양자화나 프루닝으로 모델 자체를 아무리 가볍게 만들어도, 팬 없이 수동냉각되는 엣지 SoC(Raspberry Pi 5급)에서 장시간 추론을 돌리면 결국 열 스로틀링이 실질 처리량을 깎아먹는다는 시스템 레벨 문제를 다룬 논문이다. 저자들은 시간 영역 가드와 절대 온도 상한, 급격한 온도 상승에 대응하는 미분 트리거를 결합한 state-aware DVFS 스케줄러를 제안했고, YOLOv8n을 30분간 지속 실행하는 실험에서 열 스로틀링 발생을 완전히 제거하면서 온도 반응형 baseline 대비 프레임레이트를 6.8% 높이고 프레임당 에너지 소비는 1.9% 줄였다(Cohen's d=8.73으로 효과 크기도 매우 큼). 다만 주변 온도가 27도 이상으로 올라가면 누설전류 증가로 DVFS만으로는 한계에 부딪힌다는 점도 함께 보고했다. 이는 온디바이스 추론 최적화가 비트폭 줄이기(양자화)에서 끝나지 않고 전력·열 관리까지 공동 설계해야 함을 보여주는, 최근 시리즈에서 다루지 않은 시스템 레벨 관점이라 의미가 있다."
    source_url: "https://arxiv.org/abs/2609.04705"
  - title: "합성 CoT와 난이도 인지 미세조정으로 소형 비디오-언어 모델에 추론 능력을 증류"
    type: "논문"
    summary: "지식 증류는 보통 대량의 데이터와 연산을 필요로 한다는 통념이 있는데, 이 논문은 불확실성 기준으로 선별한 900개 미만의 예시에 4B 크기 teacher가 생성한 synthetic chain-of-thought 근거를 붙여 2B 파라미터 비디오-언어 모델을 미세조정하는 것만으로 A100 한 장, 2시간 이내라는 매우 적은 비용으로 CinePile, ActivityNet-QA, MLVU 세 VideoQA 벤치마크에서 자신보다 4배 큰 모델들을 능가하고 teacher 성능에 근접하는 결과를 보였다. 이는 지식 증류를 양자화나 프루닝과 단순 비교되는 대상이 아니라, 데이터 효율화(uncertainty 기반 샘플 선별 + 난이도 인지 학습) 자체를 통해 증류 파이프라인의 비용을 극적으로 낮출 수 있는 독자적인 경량화 기법으로 보여주는 사례다. 엣지에 배포할 소형 멀티모달 모델을 만들 때 teacher 추론과 라벨링 비용이 병목이 되는 경우가 많은데, 이 결과는 그 병목을 데이터 선별 전략만으로 크게 줄일 수 있음을 시사한다는 점에서 실무적으로도 눈여겨볼 만하다."
    source_url: "https://arxiv.org/abs/2609.16255"
---
