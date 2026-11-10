---
title: "자율주행 HW 업데이트 (2026-11-10)"
date: 2026-11-10
category: autonomous-hw
items:
  - title: "카메라 센서 안에 SerDes를 박아넣다 — onsemi와 Valens가 MIPI A-PHY를 이미지센서 칩 레벨로 끌어내린 이유"
    type: "뉴스"
    summary: "onsemi와 Valens Semiconductor가 발표한 협업은 지금까지 별도 부품이던 MIPI A-PHY 트랜시버를 3메가픽셀급 자동차용 이미지센서 안에 직접 통합하는 것을 목표로 한다. 자동차 카메라는 지금도 대부분 1~3메가픽셀대 저해상도 센서를 쓰는데, 센서 칩과 SerDes 칩을 따로 두면 부품 수·보드 면적·전력이 늘어나기 때문에, 표준화된 인터페이스(A-PHY)를 센서 실리콘 레벨로 끌어내리면 카메라 모듈 전체를 더 싸고 작게 만들 수 있다. GMSL 같은 벤더 종속적 SerDes와 달리 A-PHY는 MIPI 얼라이언스가 만든 개방형 표준이라 onsemi·Valens 등 여러 공급사가 호환 부품을 만들 수 있다는 점이, 완성차 업체 입장에서 특정 벤더에 묶이지 않는 공급망을 짤 수 있게 해주는 이유다. 센서-SoC 인터페이스 표준화가 '보드 위의 커넥터 규격'에서 '센서 칩 자체의 설계 선택'으로 한 단계 더 내려가는 흐름을 보여주는 사례다."
    source_url: "https://www.automotiveworld.com/news/valens-semiconductor-and-onsemi-to-co-develop-a-phy-sensor/"
  - title: "칩렛으로 쪼개는 대신 하나의 다이에 '안전 파티션'을 그린다 — NXP S32N7이 8개 도메인을 ASIL D로 통합한 방법"
    type: "뉴스"
    summary: "NXP가 공개한 S32N7 프로세서는 최대 8개의 split-lock Arm Cortex-A78AE 코어와 12개의 split-lock Cortex-R52 코어, 그리고 eIQ Neutron NPU를 하나의 다이에 올리면서, 독립된 '안전 시스템 매니저'가 SoC 전체 파티션에 걸쳐 기능안전을 관리하도록 설계됐다. 최근 다뤘던 UCIe 칩렛 방식(2026-11-05, 2026-11-07)은 안전영역을 물리적으로 분리된 다이로 쪼개는 접근이었던 반면, S32N7은 반대로 '하나의 모놀리식 칩 안에서 하드웨어적으로 간섭을 차단하는 파티션'을 그어 ASIL D 등급을 받는 방식이라 같은 문제(여러 안전 등급이 섞인 도메인을 한 칩에 통합하기)를 정반대 설계 철학으로 풀고 있다. NPU로 추론을 돌리면서도 그 결과가 조향·제동 같은 ASIL D 기능에 영향을 줄 수 있다는 점에서, 'AI 가속기를 안전 인증 체계 안에 어떻게 집어넣는가'는 자동차 SoC 설계의 핵심 트레이드오프로 계속 남아 있다."
    source_url: "https://www.nxp.com/products/S32N7"
---
