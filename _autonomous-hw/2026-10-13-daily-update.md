---
title: "자율주행 HW 업데이트 (2026-10-13)"
date: 2026-10-13
category: autonomous-hw
items:
  - title: "한 번의 노출로 140dB를 넘본다 — OmniVision이 8MP 차량용 이미지센서에 건 승부수"
    type: "뉴스"
    summary: "자동차 외장 카메라용 HDR(High Dynamic Range) 이미지센서는 지금까지 여러 번 노출을 겹쳐 찍는 '스태거드(staggered) HDR' 방식이 흔했는데, 이 방식은 추가로 프레임을 더 찍어야 해서 움직이는 물체에 모션 블러나 시간적 샘플링 오류가 생기고, 특히 저조도에서는 다이내믹 레인지 확보 자체가 더 어려워진다는 한계가 있었다. OmniVision이 AutoSens Europe 2026에서 공개한 8메가픽셀 센서 OX08D30은 이중 변환 이득(Dual Conversion Gain) 방식으로 단 한 번의 노출만으로 82dB의 다이내믹 레인지를 확보해, 경쟁사의 스태거드 HDR이 주는 60dB 이하 수준을 넘어선다고 주장한다(업체 자체 claim). 단일 노출 방식은 추가로 LED 플리커(신호등·표지판의 LED가 카메라에는 깜빡이거나 꺼진 것처럼 찍히는 현상)도 줄여준다는 부수 효과가 있어, 저조도·HDR 성능과 LED 신호 인식 안정성을 동시에 잡으려는 최근 자동차 이미지센서 설계의 흐름을 보여준다. 같은 회사가 1월 공개한 3MP 센서 OX03H10이 단일 노출로 140dB를 내는 split-pixel 구조를 쓰는 것과 비교하면, 해상도·픽셀 구조·노출 전략 사이에서 벤더마다 서로 다른 트레이드오프를 택하고 있다는 것도 함께 읽어볼 만하다."
    source_url: "https://www.businesswire.com/news/home/20251007242634/en/OMNIVISION-Introduces-Next-Generation-8-MP-Image-Sensor-For-Exterior-Automotive-Cameras"
  - title: "존형 아키텍처가 양산에 들어가자 복잡도가 사라진 게 아니라 자리를 옮겼다 — 자동차 이더넷 백본의 다음 과제"
    type: "개념정리"
    summary: "소프트웨어 정의 차량(SDV)을 향한 존형(zonal) E/E 아키텍처는 흩어진 도메인 ECU들을 몇 개의 존 컨트롤러로 통합하고 그 사이를 자동차 이더넷으로 연결하는 방식으로, 개념 단계에서는 '복잡도를 줄인다'는 식으로 소개되는 경우가 많았다. Promwad의 2026년 분석 글은 실제 양산 단계에 들어서면 복잡도가 사라지는 게 아니라 ECU 내부 로직에서 네트워크·소프트웨어 계층으로 자리를 옮길 뿐이라고 지적한다. 존 노드는 점점 단순한 I/O 집중기와 실시간 실행기 역할로 축소되고, 실제 기능 로직과 조정·업데이트 책임은 중앙으로 몰리면서, 그만큼 백본 이더넷 네트워크 설계·검증의 부담이 커진다는 것이다. 동시에 이더넷이 센서·조명·오디오·액추에이터 같은 네트워크 가장자리까지 내려오는 추세도 짚는데, Microchip의 10BASE-T1S 엔드포인트가 그 대표 사례로 언급된다. 센서-SoC 인터페이스 표준(GMSL, MIPI A-PHY)이 '점대점 연결'을 다루는 논의였다면, 이 글은 그 연결들이 모여 이루는 '백본 네트워크 전체의 설계'가 SDV 시대에 왜 새로운 도전 과제가 되는지를 보여주는 개념적 출발점이다."
    source_url: "https://promwad.com/news/automotive-ethernet-backbones-what-changes-when-zonal-architectures-move-from-concept-to-production"
---
