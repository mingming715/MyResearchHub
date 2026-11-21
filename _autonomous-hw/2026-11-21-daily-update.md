---
title: "자율주행 HW 업데이트 (2026-11-21)"
date: 2026-11-21
category: autonomous-hw
items:
  - title: "타겟 없이 캘리브레이션한다 — 카메라·라이다·4D 레이더를 하나의 네트워크로 동시에 맞추는 CLRNet"
    type: "논문"
    summary: "센서 퓨전 하드웨어 아키텍처에서 가장 지저분한 실무 문제 중 하나는 센서가 늘어날수록 외부 파라미터(extrinsic) 캘리브레이션 조합도 함께 늘어난다는 점이다. CLRNet은 카메라·라이다·4D 레이더 세 센서를 별도 타겟이나 수작업 기준점 없이 딥러닝 하나로 동시에 캘리브레이션하는 end-to-end 네트워크로, 공유 feature space와 equirectangular depth map 투영, 카메라 기반 depth 예측, loop closure loss를 결합했다. 포인트가 희소해 특히 다루기 어려운 레이더까지 포함한 멀티모달 캘리브레이션을 소프트웨어로 풀었다는 점에서, 벤더의 센서 발표보다 '양산 차량에 센서를 실제로 달 때 생기는 조정 비용'이라는 실무적 트레이드오프를 이해하는 데 도움이 된다."
    source_url: "https://arxiv.org/abs/2603.15767"
  - title: "체커보드 뒤에 코너 리플렉터를 붙인다 — 4D-CAAL이 레이더-카메라 캘리브레이션과 라벨링을 타겟 하나로 푸는 법"
    type: "논문"
    summary: "같은 레이더-카메라 캘리브레이션 문제를 CLRNet과 반대 방향, 즉 소프트웨어가 아니라 하드웨어 지그(治具) 설계로 접근한 연구다. 앞면엔 카메라용 체커보드, 뒷면 중앙엔 레이더용 코너 리플렉터를 붙인 양면 타겟 하나로 두 센서를 동시에 맞추고, 카메라의 시맨틱 세그멘테이션 결과를 기하학적으로 투영해 희소한 레이더 포인트클라우드에 자동으로 라벨까지 붙인다. 기존 방식이 센서마다 다른 타겟을 써서 매칭이 꼬이고 레이더 수작업 라벨링은 느리고 신뢰도가 낮았던 두 문제를 타겟 하나로 묶어 해결한 것이 핵심이며, CLRNet과 나란히 보면 같은 문제를 알고리즘 쪽과 지그 쪽에서 각각 어떻게 푸는지 대조할 수 있다."
    source_url: "https://arxiv.org/abs/2601.21454"
  - title: "그랜드마스터를 하나 더 둔다 — 타이밍 단일 장애점을 없애려는 IEEE 802.1ASed 표준화 작업"
    type: "개념정리"
    summary: "PTP/gPTP 기반 멀티 ECU 센서 동기화는 그랜드마스터 하나가 전체 시간 기준을 책임지기 때문에, 그 하나가 고장 나면 동기화 전체가 흔들리는 단일 장애점(SPOF) 문제를 안고 있다. IEEE 802.1AS 계열의 후속 표준화 작업(802.1ASed, 'Fault-Tolerant Timing with Time Integrity')은 두 개 이상의 gPTP 도메인을 병렬로 운용하면서 페어링된 그랜드마스터들이 서로 시간을 맞춰두고, 한쪽이 죽어도 유효한 중복 도메인을 가려낼 수 있도록 하는 방향을 다룬다. 일부 제안에는 비잔틴 결함 허용(Byzantine fault tolerance) 방식의 그랜드마스터 시간 합의까지 등장하는데, 이는 분산 센서/ECU 아키텍처가 '그랜드마스터 하나 믿기'에서 '합의 기반 다중 그랜드마스터'로 넘어가려는 구체적 방향을 보여준다. 표준 발행 시점 자체는 소스마다 표현이 엇갈려 확정으로 보기 어렵지만, 다루는 문제와 해법의 방향성은 참고할 가치가 있다."
    source_url: "https://community.nwtime.org/t/ieee-publishes-ieee-std-802-1ased-2026-fault-tolerant-timing-with-time-integrity-portion-of-tsn-standard/395"
  - title: "범용이냐 전용이냐 — 카메라 한 대 연결에도 GMSL·A-PHY·오토모티브 이더넷 중 고민이 필요한 이유"
    type: "개념정리"
    summary: "MIPI A-PHY가 양산차에 들어가기 시작했다는 소식은 이미 다뤘지만, '그래서 GMSL·A-PHY·오토모티브 이더넷 중 뭘 써야 하나'라는 아키텍처 선택 자체는 별도로 정리할 만하다. GMSL은 카메라-디스플레이 전용 point-to-point 시리얼 링크로 코엑스 케이블의 비용·경량성을 내세우고, MIPI A-PHY는 벤더 종속 없는 표준화된 장거리 SerDes PHY를 지향하지만 다중 공급사 생태계가 아직 성숙 중이며, 오토모티브 이더넷(특히 100BASE-T1)은 범용성과 단일 쌍 케이블의 저비용이 강점이지만 고해상도 카메라 영상 대역폭에는 아직 못 미친다. 결국 '범용 네트워크 vs 센서 전용 링크'라는 근본적 트레이드오프가 이 세 표준의 구도로 구체화되어 있고, 조닝(zonal) 아키텍처에서 카메라 데이터를 중앙 컴퓨트까지 어떤 물리 계층으로 끌고 갈지 결정하는 실제 설계 고민과 직결된다."
    source_url: "https://www.analog.com/en/resources/analog-dialogue/articles/gigabit-multimedia-serial-link-gmsl-cameras.html"
  - title: "스위치 안에 락스텝 코어를 넣는다 — ASIL B 인증까지 포함한 Microchip 차량용 이더넷 스위치가 노리는 것"
    type: "뉴스"
    summary: "Microchip이 최대 18개 포트·30Gbps 용량의 오토모티브 이더넷 TSN 스위치 패밀리(LAN9324x·LAN9322x)를 공개했다. 모든 포트에 MACsec 보안을 넣고 ISO 26262 ASIL B 기능안전 인증까지 받은 것이 핵심인데, 예전엔 스위치가 통신만 담당하고 안전 로직은 별도 MCU가 맡는 구조가 흔했던 것과 달리 이제는 스위치 ASIC 자체가 락스텝/안전 메커니즘과 보안을 함께 흡수해 조닝 아키텍처의 BOM과 인증 범위를 줄이려는 흐름을 보여준다. 센서-SoC 인터페이스 표준이라는 서브토픽에서 '표준 자체'보다 '그 표준을 구현하는 실리콘이 안전·보안 요구를 어떻게 흡수하는가'를 보여주는 사례다."
    source_url: "https://embeddedcomputing.com/application/automotive/vehicle-networking/microchip-introduces-automotive-ethernet-switch-families-for-software-defined-vehicles"
---
