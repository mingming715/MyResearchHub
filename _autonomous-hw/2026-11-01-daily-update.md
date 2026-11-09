---
title: "자율주행 HW 업데이트 (2026-11-01)"
date: 2026-11-01
category: autonomous-hw
items:
  - title: "GMSL도 FPD-Link도 아닌 '공개 표준'으로 — MIPI A-PHY가 양산차에 올라탄 이유"
    type: "뉴스"
    summary: "지난 10여 년간 자율주행차의 카메라·라이다를 SoC에 연결하는 장거리 SerDes 링크는 Maxim(현 ADI)의 GMSL이나 TI의 FPD-Link 같은 벤더 전용(proprietary) 규격이 독점해, OEM이 한번 특정 벤더의 브리지 칩을 선택하면 복수 소스 조달이나 가격 경쟁을 기대하기 어려웠다. MIPI A-PHY는 이 구조를 깨려고 만든 업계 최초의 개방형 장거리 SerDes 표준으로, 올해 중국 지리(Geely) 산하 Lynk & Co의 06 Relive 모델에 Velinktech의 A-PHY 칩셋이 실제로 양산 탑재되면서 '표준이 종이 위에만 머물지 않는다'는 걸 처음 증명했다. 뒤이어 모빌아이가 EyeQ6 플랫폼에 Valens의 A-PHY 칩셋을 채택했고, 5월에는 MIPI 얼라이언스가 상호호환성을 검증하는 컴플라이언스 프로그램을 공식 출범시켰으며, 6월 AutoSens USA에서는 Sony·Southchip·Valens·Velinktech 네 개 회사의 송신 칩이 섞여도 8MP 카메라에서 15m 케이블로 8Gbps에 가까운 전송이 가능함을 보여줬다. 소니가 A-PHY를 이미지 센서에 직접 내장해 외부 직렬화(serializer) 칩 자체를 없애려는 움직임까지 더해지면서, 센서-SoC 인터페이스가 '벤더가 묶어 파는 블랙박스'에서 '여러 벤더를 섞어 쓸 수 있는 개방형 레이어'로 넘어가는 변곡점을 보여준다."
    source_url: "https://www.eenewseurope.com/en/mipi-a-phy-enters-mass-production-as-first-automotive-serdes-standard/"
    image: "https://cdn.eenewseurope.com/wp-content/uploads/2025/09/A-PHY-News-Global-OEM-NoCTA-English-LI-Website.jpg"
  - title: "락스텝 복제 대신 '파이프라인 수술' — Strix가 NPU 안전 인증 비용을 슬로다운 1.04배로 낮춘 방법"
    source_url: "https://arxiv.org/abs/2604.10484"
    image: "https://arxiv.org/html/2604.10484v1/overview.png"
    type: "논문"
    summary: "자동차용 NPU가 ASIL-D 같은 기능안전 등급을 받으려면 지금까지는 코어 전체를 통째로 복제해 결과를 대조하는 '락스텝(lockstep)' 방식이 가장 흔한 해법이었는데, 이는 실리콘 면적과 전력을 거의 두 배로 늘리는 비용을 치른다 — 최근 Arm Ethos-U55 NPU를 RTL 레벨에서 고장 주입 테스트한 다른 연구에서도 선택적 이중화가 락스텝 대비 약 38%의 면적 오버헤드만으로 같은 안전 목표에 도달할 수 있음을 보였듯, '어디까지 복제하고 어디는 다른 방법을 쓸지'가 NPU 안전 설계의 핵심 트레이드오프로 떠오르고 있다. Strix는 NPU를 하나의 덩어리로 보지 않고 추론 파이프라인의 단계별로 쪼개 마이크로아키텍처·ISA·소프트웨어 전 스택에 걸쳐 각 단계에 맞춘 보호 기법을 적용하는 풀스택 설계를 오픈소스 SoC 위에서 제안했다. TSMC 28nm 공정 합성 평가에서 고장 위치 추적(fault localization)과 검출·정정을 1마이크로초 이내에 끝내면서도 슬로다운은 1.04배에 그쳤고, 면적·전력 오버헤드도 워크로드에 따라 약 9~21% 수준으로 억제했다고 보고했다. 전체 코어 복제라는 '무차별 이중화'와 선택적 보호 사이에서 세 번째 길을 제시한 셈으로, TOPS/W 효율과 기능안전 인증 비용 사이의 트레이드오프를 다루는 자동차 NPU 설계에 직접 참고가 될 연구다."
---
