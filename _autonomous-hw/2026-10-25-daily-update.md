---
title: "자율주행 HW 업데이트 (2026-10-25)"
date: 2026-10-25
category: autonomous-hw
items:
  - title: "표준 하나로는 부족하다 — MIPI가 A-PHY에 '컴플라이언스 프로그램'을 얹은 이유"
    type: "뉴스"
    summary: "MIPI 얼라이언스가 자동차용 SerDes 표준 A-PHY를 위한 정식 컴플라이언스(적합성 인증) 프로그램을 출범시키고, BitifEye Digital Test Solutions를 첫 공인 테스트 연구소(ATL)로 지정했다. A-PHY는 카메라·레이더·라이다 같은 센서를 최대 15m 거리에서 연결하는 장거리 SerDes 규격으로, CSI-2 프로토콜을 자동차 환경으로 확장해 이미 Mobileye EyeQ6 양산 프로그램에 채택되며 '양산에 들어간 첫 자동차용 SerDes 표준'이 됐다. 그런데 사양서(스펙)가 나왔다고 끝이 아니다. 여러 반도체·케이블 벤더가 각자 'A-PHY 호환'이라고 주장해도, 실제로 서로 다른 벤더의 트랜시버·수신기를 섞어 쓰면 타이밍이나 전기적 여유도 차이로 상호운용이 깨질 수 있다. 공인 테스트 랩을 통한 컴플라이언스 인증은 '사양을 따랐다'는 자체 선언이 아니라 '실측으로 검증됐다'는 제3자 보증을 제공해, 완성차·Tier1이 여러 공급사의 부품을 섞어 설계할 때의 리스크를 줄인다. 센서 인터페이스 표준이 실험실 데모에서 양산 생태계로 넘어가려면 왜 '표준화'와 '적합성 인증 체계 구축'이 별개의, 그리고 둘 다 필요한 단계인지를 보여주는 사례다."
    source_url: "https://www.businesswire.com/news/home/20260527039964/en/MIPI-Alliance-Launches-Compliance-Program-to-Strengthen-A-PHY-Automotive-Ecosystem"
  - title: "레벨3 자율주행에는 TOPS가 얼마나 필요한가 — TI가 TDA5로 답한 숫자"
    type: "뉴스"
    summary: "Texas Instruments가 CES 2026에서 레벨3 자율주행을 겨냥한 TDA5 SoC 패밀리를 공개했다. Arm Cortex-A720AE CPU 코어와 자체 설계한 C7 NPU를 묶어 최대 1,200 TOPS의 연산 성능을 내는 구조로, 패밀리의 첫 제품인 TDA5x-Q1은 2026년 말 일부 완성차 고객에게 샘플이 제공될 예정이다. 이 숫자 자체보다 중요한 건 '레벨2 보조운전까지는 수십~수백 TOPS면 충분했지만, 핸즈오프가 허용되는 레벨3부터는 왜 TOPS 요구량이 한 자릿수 이상 뛰는가'라는 질문이다. 레벨3는 시스템이 스스로 위험을 감지해 운전자에게 제어권을 넘기는 '안전한 이양(fallback)'까지 실시간으로 책임져야 하기 때문에, 중복 인식 경로와 더 무거운 센서 퓨전·예측 모델을 동시에 돌릴 연산 여유가 필요해진다. SoC 벤더들이 왜 매 세대마다 TOPS 숫자를 경쟁적으로 올리는지, 그리고 그 숫자가 실제로 어떤 자율주행 레벨의 요구사항과 연결되는지를 가늠하는 데 참고할 만한 사례다."
    source_url: "https://www.automotiveworld.com/news/ti-unveils-automotive-soc-and-radar-chip-at-ces-2026/"
---
