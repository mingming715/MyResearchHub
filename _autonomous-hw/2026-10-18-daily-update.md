---
title: "자율주행 HW 업데이트 (2026-10-18)"
date: 2026-10-18
category: autonomous-hw
items:
  - title: "GMSL 혼자 쓰던 시절은 끝났다 — A-PHY가 '표준 하나로 네 업체 칩을 섞어 쓰는' 그림을 처음 실증하다"
    type: "뉴스"
    summary: "지금까지 차량용 카메라·센서를 SoC에 연결하는 고속 SerDes(직렬화-역직렬화) 링크는 사실상 특정 벤더의 독자 규격(예: 맥심의 GMSL)에 묶이는 구조였다. 신호 송신기(serializer)와 수신기(deserializer)가 서로 다른 회사 제품이면 호환이 안 되는 게 당연했다는 뜻이다. MIPI 얼라이언스가 2026년 6월 9~11일 디트로이트 AutoSens USA에서 공개한 데모는 이 구도를 정면으로 깨는 시도로, 소니 세미컨덕터·사우스칩·벨린크테크 세 회사가 각자 만든 A-PHY 송신기가 8MP 카메라의 영상(약 8Gbps)을 15미터 케이블로 전송하고, 이를 네 번째 회사인 벨런스의 역직렬화 칩이 받아내는 것을 보여줬다. 즉 '표준만 지키면 어느 회사 칩끼리든 섞어 써도 된다'는 SerDes 상호운용성을 네 개 회사·실제 하드웨어로 처음 입증한 사례다. MIPI는 이에 앞서 2026년 5월 회원사가 자사 제품의 표준 준수 여부를 검증할 수 있는 'A-PHY 컴플라이언스 프로그램'도 발족시켰는데, 이는 호환성 주장을 데모 수준이 아니라 인증 체계로 뒷받침하려는 움직임이다. 완성차·Tier 1 입장에서 이는 특정 SerDes 벤더에 묶이는 '락인(lock-in)'에서 벗어나 센서·칩 공급사를 유연하게 조합할 수 있다는 의미이며, 센서-SoC 인터페이스 표준화가 '스펙 문서'에서 '실제로 섞어 써도 동작하는 생태계' 단계로 넘어가고 있음을 보여주는 구체적 이정표다."
    source_url: "https://www.mipi.org/press-releases/mipi-a-phy-to-power-industrys-first-four-company-automotive-serdes-interoperability-demonstration-at-autosens-usa"
---
