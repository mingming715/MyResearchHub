---
title: "자율주행 HW 업데이트 (2026-10-07)"
date: 2026-10-07
category: autonomous-hw
items:
  - title: "락스텝은 AI 가속기에 안 맞는다 — Siemens EDA가 던진 ASIL-D 대안 세 가지"
    type: "개념정리"
    summary: "자동차용 ASIL-D 인증은 전통적으로 두 코어가 같은 연산을 반복해 결과를 비교하는 듀얼코어 락스텝(DCLS)에 의존하지만, 대규모 병렬 행렬연산으로 이루어진 NPU/GPU에 이를 그대로 적용하면 실리콘 면적과 전력이 거의 두 배로 늘어나고 주기적 소프트웨어 자가진단도 효용이 떨어진다. Siemens EDA가 2026년 2월 공개한 백서는 이 문제를 정면으로 다루며, NPU 고유의 병렬성을 활용해 연산 유닛 일부만 선택적으로 중복시키는 선택적 중복화, 출력 분포를 통계적으로 감시해 이상치를 잡는 통계적 모니터링, 오류 발생 시 성능을 서서히 낮춰가며 동작을 지속하는 점진적 성능저하 세 가지 대안을 제시하고 RTL 모델과 Veloce 에뮬레이션으로 정량 검증했다고 밝힌다. 저자인 Ken Boorom은 2015년부터 ISO 26262 표준위원회 위원으로 활동해온 인물로, 이는 '안전 아일랜드로 메인 가속기를 감싸는' 기존 패턴과는 결이 다른, 가속기 내부 설계 자체에서 안전성과 성능/전력 효율을 동시에 만족시키려는 접근이라 SoC/NPU 트레이드오프를 공부하는 사람에게 핵심 레퍼런스가 된다."
    source_url: "https://blogs.sw.siemens.com/eda-consulting-services/2026/02/02/functional-safety-whitepaper-developing-safety-architectures-for-ai-accelerators/"
  - title: "시리얼라이저 칩이 사라진다 — onsemi·Valens, A-PHY를 이미지센서 다이 안으로 통째로 넣다"
    type: "뉴스"
    summary: "지금까지 MIPI A-PHY 기반 자동차 카메라 모듈은 '이미지 센서 + 별도의 A-PHY 시리얼라이저 칩'이라는 2칩 구조가 기본이었는데, 2026년 9월 onsemi와 Valens Semiconductor는 A-PHY 커넥티비티 블록을 이미지 센서 다이 자체에 통합하는 공동개발 협력을 발표했다. 타깃은 현재 차량용 카메라 시장의 대다수를 차지하는 1~3메가픽셀 구간으로, 부품 수를 줄여 모듈 설계를 단순화하고 비용·전력·보드 면적을 동시에 낮추는 것이 목표다. 아직 양산 제품이 아닌 협력 발표 단계이지만, 센서-SoC 인터페이스 표준이 '칩 간 연결 규격'에서 '센서에 내장되는 IP 블록'으로 진화하는 흐름을 보여주는 사례라서, A-PHY/GMSL 생태계가 앞으로 어떻게 통합·저가화될지 가늠하는 좋은 참고가 된다."
    source_url: "https://www.prnewswire.com/il/news-releases/valens-semiconductor-to-collaborate-with-onsemi-on-a-cost-optimized-integrated-sensor-based-on-the-mipi-a-phy-standard-302885844.html"
  - title: "기계부품도, SPAD도 아니다 — 실리콘 포토닉스 칩 하나로 빔을 조향하는 4D FMCW 라이다"
    type: "뉴스"
    summary: "Voyant Photonics가 공개한 'Helium' 플랫폼은 MEMS 미러나 회전 모터 같은 기계적 스캐닝도, 최근 주류가 된 SPAD 기반 플래시/ToF 방식도 아닌 제3의 접근으로, 실리콘 포토닉스 칩(PIC) 위에 2D 발광 어레이와 온칩 빔 조향 회로를 집적해 완전한 고체상태(solid-state) 스캐닝을 구현했다. FMCW(주파수변조 연속파) 방식을 쓰기 때문에 거리뿐 아니라 픽셀 단위 상대속도(도플러)까지 동시에 얻어 진짜 의미의 4D 포인트클라우드를 생성하며, 움직이는 기계부품이 없어 평균고장시간(MTBF)이 기존 구조 대비 약 20배 길다고 주장한다(업체 자체 추정치). 150g, 50cm³ 이하까지 소형화가 가능하다는 점에서, 'solid-state lidar'의 정의 자체가 SPAD-SoC 계열과 코히런트 포토닉스 계열로 분기되고 있음을 보여주는 좋은 비교 사례다."
    source_url: "https://www.businesswire.com/news/home/20251216762450/en/"
  - title: "레이더-카메라 퓨전, 연산을 어디서 나눠 맡을까 — TI·Lattice·NVIDIA 레퍼런스 스택 해부"
    type: "뉴스"
    summary: "2026년 4월 공개된 이 공동 레퍼런스 스택은 TI의 IWR6243 레이더가 원시 신호를 처리하고, Lattice의 저전력 FPGA(CertusPro-NX)가 레이더-카메라 데이터를 동기화해 GPU 접근 가능한 메모리로 직접 흘려보내는 브리지 역할을 하며, NVIDIA Jetson Thor와 Holoscan SDK가 스트리밍·AI 런타임을, D3 Embedded가 애플리케이션 소프트웨어를 맡는 식으로 역할을 분담한 구조다. 이는 '모든 센서 데이터를 하나의 고성능 SoC로 몰아넣는' 중앙집중형 설계와 '센서 옆에서 1차 가공한 뒤 넘기는' 엣지 전처리형 설계 사이에서, FPGA를 저지연 브리지로 끼워 넣는 중간 지점의 실제 구현 예시를 제공한다. 로보틱스용으로 소개됐지만 레이더-카메라 피처 레벨 퓨전의 지연시간·대역폭·컴퓨팅 비용 트레이드오프 구조는 자율주행 센서 융합 아키텍처에도 그대로 적용되는 내용이라, 벤더별 하드웨어가 파이프라인에서 각각 어떤 역할을 맡는지 구체적으로 보여주는 드문 사례로 참고할 만하다."
    source_url: "https://www.edge-ai-vision.com/2026/04/texas-instruments-d3-embedded-lattice-and-nvidia-show-a-practical-radar-camera-fusion-stack-for-robotics/"
---
