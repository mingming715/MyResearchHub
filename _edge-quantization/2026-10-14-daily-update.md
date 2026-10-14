---
title: "Edge Device 양자화 / 모델 경량화 업데이트 (2026-10-14)"
date: 2026-10-14
category: edge-quantization
items:
  - title: "GPTQ의 '탐욕적 근사'를 다시 풀다 — ADMM으로 2비트까지 버티는 새 PTQ 양자화기"
    type: "논문"
    summary: "post-training quantization(PTQ)은 결국 레이어별로 '원래 가중치와 양자화된 가중치 사이의 오차(헤시안 가중 재구성 오차)를 최소화하는 조합최적화 문제'를 어떻게 근사해서 푸느냐의 싸움인데, 널리 쓰이는 RTN은 헤시안 정보를 아예 무시하고(단위행렬 취급), GPTQ는 열(column) 단위로 그리디하게 근사한다는 한계가 있다. MIT 연구진이 2026년 5월 공개한 ADMM-Q는 같은 문제를 ADMM(Alternating Direction Method of Multipliers) 기반으로 다시 풀어, 가중치를 연속적으로 업데이트하면서 양자화 제약을 점진적으로 강제하는 방식을 택했다. 여기에 LLM 규모에서도 실용적으로 돌아가도록 페널티 스케줄링·사전조건화(preconditioning)·로컬 서치 후처리를 더했고, 기존 양자화 파이프라인 안에 GPTQ 대신 바로 꽂아 넣을 수 있는 모듈형 구조로 설계했다. Qwen3-8B 실험에서 3비트 가중치 단독 양자화(W3A16)의 WikiText-2 perplexity를 GPTQ 대비 큰 폭으로 낮추고, 2~4비트급 공격적 설정(W2A4KV4)에서도 개선을 보고했는데, 이는 온디바이스 LLM 배포가 점점 2~4비트 영역으로 내려가면서 기존 RTN·GPTQ가 정확도를 크게 잃는 지점을 정면으로 겨냥한 결과라는 점에서 의미가 있다."
    source_url: "https://arxiv.org/abs/2605.11222"
---
