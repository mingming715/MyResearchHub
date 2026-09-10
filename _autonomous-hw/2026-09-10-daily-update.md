---
title: "자율주행 HW 업데이트 (2026-09-10)"
date: 2026-09-10
category: autonomous-hw
items:
  - title: "Chips&Media, 카메라 프론트엔드용 영상처리 NPU IP로 ISO 26262 ASIL-B 인증 획득"
    type: "뉴스"
    summary: "Chips&Media가 자사의 이미지 프로세싱 NPU IP인 'WAVE6331X FuSa'에 대해 DNV로부터 ISO 26262 ASIL-B 기능안전 인증을 받았다. 주목할 점은 인증 대상이 SoC 전체나 별도 안전 아일랜드가 아니라, 카메라 센서에서 들어온 원시 영상을 인식 모델에 넘기기 전 전처리하는 ISP 성격의 특화 NPU 블록이라는 것이다. SEooC(맥락 외 안전요소) 패키지와 세이프티 매뉴얼이 함께 제공되어 SoC 통합사가 자체 검증 부담 없이 인증된 IP를 그대로 끼워 넣을 수 있다. 이는 최근 논의되어온 \"칩렛/IP 블록 단위 안전 인증\"이 GPU·NPU 코어를 넘어 인식 파이프라인의 맨 앞단인 영상 전처리 단계까지 확장되고 있음을 보여주는 사례로, ASIL-D 인식 스택을 구성할 때 어느 블록까지 사전 인증된 IP로 조립할 수 있는지의 경계가 계속 넓어지고 있다는 신호다."
    source_url: "https://www.edge-ai-vision.com/2026/09/achieving-iso-26262-asil-b-certification-for-functional-safety-chipsmedias-wave6331x-fusa/"
  - title: "카메라-라이다 시간 오정렬 공격을 잡아내는 소프트웨어 방어기법 AION, ICLR 2026 포스터로 공개"
    type: "논문"
    summary: "최근 화제였던 DejaVu류 공격(카메라·라이다 타임스탬프를 프레임 단위로 미세하게 어긋나게 해 융합 인식을 무력화하는 공격)에 대응하는 탐지 기법 \"AION\"이 ICLR 2026에 포스터로 발표됐다. 대조학습으로 학습된 공유 멀티모달 표현 인코더(shared multimodal representation encoder)에 각 센서 스트림의 특징을 투영해 슬라이딩 윈도우 상에서 모달리티 간 시간적 유사도를 계산하고, 이 값이 급격히 낮아지면 동기화 이상으로 판정한다. 특정 센서 조합이나 백본 아키텍처에 종속되지 않고 일반화되며 실시간 인식 파이프라인에 추가 지연을 거의 유발하지 않는 것을 핵심 설계 목표로 삼았다. 앞서 다룬 물리적 트리거 회로 기반 하드웨어 동기화 검증과 달리 순수 알고리즘/소프트웨어 계층에서 타이밍 무결성을 감시하는 접근으로, 향후 센서 동기화 보안이 하드웨어(트리거 회로, gPTP 이중화)와 소프트웨어(런타임 이상탐지) 이중 방어 체계로 발전해가는 흐름을 보여준다."
    source_url: "https://openreview.net/forum?id=SWlCJab9gZ"
---
