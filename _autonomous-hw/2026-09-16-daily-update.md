---
title: "자율주행 HW 업데이트 (2026-09-16)"
date: 2026-09-16
category: autonomous-hw
items:
  - title: "OPA를 버리다 — MIT 스핀오프 Kyber Photonics, 스위치 트리 방식 라이다-온-칩 공개"
    type: "뉴스"
    summary: "DARPA 지원을 받는 MIT 스핀오프 Kyber Photonics가 기존 광학 위상 배열(OPA)과는 다른 구조의 솔리드스테이트 라이다-온-칩 아키텍처를 공개했다. 근적외선 레이저를 마흐-젠더 간섭계(MZI) 스위치들로 이뤄진 트리 구조로 라우팅한 뒤, 평면 렌즈가 빛을 집속·조향하고 격자(grating)로 외부 산란시켜 2차원 스캔을 만드는 방식으로, OPA가 안고 있던 위상 캘리브레이션 부담 없이 훨씬 넓은 시야각을 단순한 제어로 구현하는 것이 핵심이다. 웨이퍼 스케일 실리콘 포토닉스 공정으로 제작 가능해 대량생산 단가를 낮출 잠재력이 있다는 점에서, '기계적 요소 없이 빔을 어떻게 저비용·고신뢰로 조향할 것인가'라는 솔리드스테이트 라이다의 오랜 난제에 대한 또 하나의 아키텍처 대안을 보여준다."
    source_url: "https://spectrum.ieee.org/kyber-photonics-solid-state-lidar-on-a-chip-system"
  - title: "센서 인터페이스를 SoC에서 떼어내다 — ZF·SiliconAuto의 벤더 비종속형 I/O 칩렛"
    type: "뉴스"
    summary: "ZF와 SiliconAuto가 Embedded World 2026에서 공개한 새 I/O 인터페이스 칩은 카메라 ISP와 온칩 레이더 신호처리, 각종 센서 인터페이스 IP를 하나의 칩에 통합하면서도 PCIe·Ethernet 등 표준 링크를 통해 OEM이 고른 어떤 컴퓨트 SoC와도 연결되도록 설계됐다. 센서 획득·전처리 부담을 저비용 공정의 별도 칩으로 옮겨 성능 SoC는 인지·주행판단 연산에만 집중하게 하고, 향후에는 UCIe 같은 개방형 다이-투-다이 표준으로 컴퓨트·AI 추론·I/O 모듈을 시스템 전체 재설계 없이 개별 교체하는 것을 목표로 한다. 이는 자율주행 컴퓨트 플랫폼이 단일 SoC 중심에서 '센서 인터페이스와 컴퓨트 다이를 분리하는' 칩렛형 아키텍처로 이동하는 흐름을 잘 보여주는 사례다."
    source_url: "https://www.automotiveworld.com/news/zf-and-siliconauto-debut-i-o-chip-for-adas-compute/"
  - title: "GMSL vs FPD-Link vs MIPI A-PHY — 카메라 SerDes를 고를 때 실제로 따지는 것들"
    type: "개념정리"
    summary: "이 글은 왜 카메라를 SoC에서 멀리 떨어뜨려 설치해야 하는 자동차에서는 휴대폰·노트북에 쓰이는 짧은 거리용 MIPI CSI-2를 그대로 쓸 수 없는지에서 출발해, 이를 장거리 링크로 바꿔주는 SerDes(직렬화/역직렬화) 계층의 세 표준 GMSL·FPD-Link·MIPI A-PHY를 비교한다. Maxim(현 ADI)의 GMSL과 TI의 FPD-Link는 이미 검증된 독점 생태계와 높은 대역폭·긴 전송거리를 제공하지만 벤더 록인이 뒤따르는 반면, MIPI A-PHY는 벤더 중립적 표준화를 목표로 상호운용성을 확보하려 한다는 대조가 핵심이다. '표준화로 얻는 상호운용성'과 '이미 성숙한 독점 생태계의 성능·안정성' 사이에서 완성차 업체가 실제로 무엇을 저울질하는지 이해하는 데 좋은 개념정리 자료다."
    source_url: "https://ologn.tech/blog/cameras/2025/12/28/serdes.html"
---
