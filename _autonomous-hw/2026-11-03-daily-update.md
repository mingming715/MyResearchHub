---
title: "자율주행 HW 업데이트 (2026-11-03)"
date: 2026-11-03
category: autonomous-hw
items:
  - title: "빔을 촘촘히 세우면 그림자(grating lobe)가 생긴다 — MIT가 광학 위상 배열 라이다의 오래된 딜레마를 안테나 설계로 푼 방법"
    type: "논문"
    summary: "OPA(광학 위상 배열) 방식 라이다는 기계식 스캐너나 MEMS 미러 없이 안테나 사이의 위상차만 조절해 빔을 조향할 수 있어 '움직이는 부품이 없는' 솔리드스테이트 라이다의 유력한 후보로 꼽혀왔지만, 넓은 시야각(FOV)을 확보하려면 안테나를 반파장 간격으로 촘촘히 배치해야 하는데 이렇게 하면 인접 안테나 사이에 빛이 새어나가는 crosstalk가 생기고, 반대로 간격을 벌리면 원치 않는 가짜 빔인 그레이팅 로브(grating lobe)가 주기적으로 나타나 오탐지와 전력 낭비를 유발하는 근본적인 트레이드오프에 묶여 있었다. MIT 연구팀(Jelena Notaros 그룹)은 Nature Communications에 발표한 연구에서 안테나의 폭과 격자(corrugation) 패턴을 손실 모드 간 결합 이론에 기반해 세 가지로 달리 설계함으로써, 안테나를 반파장 간격까지 촘촘히 배치하면서도 crosstalk를 기존 설계의 약 100%에서 약 1%로 낮추고 그레이팅 로브 없이 넓은 시야각으로 단일 빔을 조향하는 데 성공했다고 보고했다. 이는 이 코너에서 다룬 Pointcloud의 코히런트 FPA(빔 조향 자체를 없애고 수만 개 수신기를 병렬 배치)나 RoboSense의 SPAD 직접 ToF(빔 조향 대신 3D 적층 센서 어레이)와는 또 다른 세 번째 경로 — '빔 조향은 유지하되 안테나 설계로 그 한계를 깨는' 접근으로, 왜 OPA가 이론적 매력에도 불구하고 그동안 양산 라이다에 잘 쓰이지 못했는지, 그리고 그 장벽이 어떻게 좁혀지고 있는지를 보여준다."
    source_url: "https://www.nature.com/articles/s41467-026-71832-y"
    image: "https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41467-026-71832-y/MediaObjects/41467_2026_71832_Fig1_HTML.png"
  - title: "CAN을 대체할 이더넷은 10Gbps가 아니라 10Mbps다 — 10BASE-T1S가 조널 아키텍처의 '말단'을 노리는 이유"
    type: "개념정리"
    summary: "최근 이 코너에서 다룬 TSN(차량 백본용 10G급)이나 MIPI A-PHY(센서-SoC 장거리 링크)는 모두 '더 빠른' 네트워킹을 다뤘지만, 조널(zonal) E/E 아키텍처에는 반대 방향의 문제도 있다 — 램프, 시트, 간단한 액추에이터처럼 애초에 대역폭이 거의 필요 없는 말단 노드까지 굳이 CAN/LIN 대신 이더넷으로 통일해야 하느냐는 질문이다. 10BASE-T1S는 단일 꼬임쌍선(single twisted pair) 위에 10Mbps 멀티드롭 이더넷을 얹고, CSMA/CD 위에 PLCA(Physical Layer Collision Avoidance)라는 스케줄링을 추가해 여러 노드가 충돌 없이 예측 가능한 지연으로 통신하게 만든 표준이다. 이렇게 하면 각 말단 노드가 굳이 비싼 게이트웨이나 별도의 CAN 트랜시버를 거치지 않고도 조널 컨트롤러에 직접 이더넷 프레임으로 붙을 수 있어, 차량 전체 네트워크를 CAN/LIN/이더넷이 섞인 이종 구조 대신 단일 프로토콜 스택으로 수렴시킬 길이 열린다. Microchip의 LAN866x, ADI의 AD330x 같은 엔드포인트 칩들이 이 역할을 노리고 있지만, EMC 내구성과 크로스토크, 상호호환성 테스트가 여전히 걸림돌로 남아 있다는 점은 '표준이 있다'와 '그 표준으로 양산 조달이 가능하다' 사이의 간극을 다시 보여준다 — MIPI A-PHY가 올해 처음 양산 탑재로 그 간극을 건넌 사례와 대비해서 보면 유익하다."
    source_url: "https://www.analog.com/en/resources/analog-dialogue/articles/how-10base-t1s-ethernet-simplifies-zonal-architectures.html"
---
