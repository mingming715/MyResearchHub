---
title: "자율주행 HW 업데이트 (2026-08-11)"
date: 2026-08-11
category: autonomous-hw
items:
  - title: "테레다인 FLIR, ASIL-B 인증 받은 열화상 카메라 'Tura' 공개 — 카메라·라이다·레이더에 이어 네 번째 센서로"
    type: "뉴스"
    summary: "테레다인 FLIR OEM이 ISO 26262 기반 ASIL-B 인증을 받은 세계 최초의 자동차용 LWIR(장파장 적외선) 열화상 카메라 'Tura'를 공개했다. 640×512 해상도의 무셔터(shutterless) FIR 센서를 탑재했고 24°/42°/70° 화각 옵션을 제공하며, GMSL2·FPD-Link 등 기존 카메라 SerDes 인터페이스를 그대로 활용해 기존 센서 스택에 통합되도록 설계됐다. 카메라·라이다·레이더 조합이 안개·역광·완전 암흑 등 저조도·악천후 상황에서 보행자·동물 등 사각지대 대상 검출에 한계를 보이는 지점을 열화상으로 보완하는 것이 핵심이며, ASIL-B 인증은 이 센서가 단순 보조 장치가 아니라 AEB 같은 안전 필수 기능의 입력값으로 정식 채택될 수 있음을 의미한다. 4개 모달리티(카메라·라이다·레이더·열화상) 융합이 옵션이 아니라 표준 스펙으로 자리잡아가는 흐름을 보여주는 사례다."
    source_url: "https://www.businesswire.com/news/home/20260105915824/en/Tura"
  - title: "MLCommons, 자율주행 SoC용 첫 표준 벤치마크 'MLPerf Automotive' 공개 — 안전·실시간 제약을 성능 지표로 환산"
    type: "논문"
    summary: "MLCommons와 Autonomous Vehicle Compute Consortium(AVCC)이 공동 개발한 'MLPerf Automotive'는 ADAS/AD 및 IVI용 임베디드 컴퓨터를 대상으로 한 최초의 표준화된 공개 벤치마크로, UC Davis·Arm·Samsung·Qualcomm·NVIDIA·AMD 등이 참여했다. 2D 객체 검출, 2D 시맨틱 분할, 3D 객체 검출 등 인지 태스크를 다루며, 일반 ML 벤치마크와 달리 정확도 임계값을 99.9%로 높게 설정하고 지연시간(latency)을 핵심 KPI로 삼아 '실시간·기능안전 시스템'이라는 자동차 특유의 제약을 반영한 점이 특징이다. 단일 스트림(순수 처리량)과 정속 스트림(요청 간격 고정, 지연시간 측정) 두 시나리오로 평가하며, 저해상도 라이다와 고해상도 카메라를 조합한 센서 구성을 기본 전제로 삼는다. 그동안 자율주행 SoC/NPU 성능은 벤더별 TOPS 수치로만 비교되어 왔는데, 이 벤치마크는 업계가 처음으로 합의한 공정한 비교 잣대라는 점에서 SoC 설계의 연산 효율·안전 트레이드오프를 이해하는 데 중요한 참고 자료다."
    source_url: "https://arxiv.org/abs/2510.27065"
---
