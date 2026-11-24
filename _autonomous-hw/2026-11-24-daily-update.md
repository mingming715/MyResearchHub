---
title: "자율주행 HW 업데이트 (2026-11-24)"
date: 2026-11-24
category: autonomous-hw
items:
  - title: "같은 칩인데 2000 TOPS도 되고 500 TOPS도 된다 — 자율주행 SoC 스펙 경쟁이 숫자놀음이 되는 이유"
    type: "개념정리"
    summary: "NVIDIA DRIVE Thor 한 칩이 FP4 기준으로는 2000 TOPS, INT8/FP8 기준으로는 1000 TOPS, FP16 기준으로는 500 TOPS로 발표되는 것처럼, 자율주행 SoC의 TOPS 수치는 어떤 정밀도·연산 집계 방식을 쓰느냐에 따라 같은 하드웨어도 4배까지 차이가 난다. Li Auto가 Thor-U 한 칩으로 '2000 TOPS'를 주장했다가 업계에서 검증 공세를 받은 사례가 보여주듯, 실제 추론 처리량은 메모리 대역폭·유틸라이제이션(종종 50% 미만)·워크로드 특성에 더 좌우되며, 같은 조건(정밀도·정확도 목표·레이턴시·전력 범위)을 맞추지 않은 TOPS 비교는 사실상 무의미하다. 벤더 스펙시트의 '최대 TOPS'를 그대로 성능 지표로 읽는 습관 자체를 의심해야 한다는 것이 이 분야를 공부할 때 가장 먼저 익혀야 할 함정이다."
    source_url: "https://semiengineering.com/one-more-time-tops-do-not-predict-inference-throughput"
  - title: "ST, 1.1MP 적외선 글로벌셔터 센서로 차량 실내 모니터링 단가를 끌어내리다"
    type: "뉴스"
    summary: "STMicroelectronics가 운전자·승객 모니터링(DMS/OMS)용 소형 적외선 이미지 센서 'VD56GA'를 공개했다. 1.1MP 해상도에 글로벌 셔터와 3.7×3.2mm급 초소형 패키지를 적용해 기존 2MP급 카메라 모듈 대비 비용을 낮추면서도 동급 성능을 내는 것이 핵심이며, ISO 26262(기능안전)·ISO/SAE 21434(사이버보안) 요건을 지원한다고 밝혔다. 실내 센싱이 더 이상 프리미엄 차량만의 옵션이 아니라 규제·NCAP 트렌드에 따라 대중 차급까지 의무화되는 흐름 속에서, Yole Group은 이 시장이 2031년까지 7천만 대 규모로 커질 것으로 전망한다 — 외부 센서(카메라·라이다·레이더) 중심이었던 자율주행 HW 논의가 실내 센싱 쪽으로도 확장되고 있음을 보여주는 사례다."
    source_url: "https://www.eejournal.com/industry_news/stmicroelectronics-introduces-automotive-image-sensor-to-help-scale-affordable-in-cabin-sensing/"
  - title: "이벤트 카메라로 충돌까지 예측한다 — 자율주행용 최대 규모 이벤트카메라 데이터셋 'eAP'"
    type: "논문"
    summary: "이벤트 카메라는 빛의 변화가 있을 때만 비동기적으로 신호를 내는 센서로, 프레임 카메라가 약한 고휘도 대비 상황(터널 진입, 야간 역광)이나 초고속 반응이 필요한 충돌 직전 상황에서 강점이 있다고 알려져 있지만, 정작 이를 검증할 대규모 자율주행 데이터셋이 거의 없었다. 'eAP'는 이벤트·RGB·LiDAR·GNSS를 함께 수집해 3D 차량 검출과 충돌까지 남은 시간(Time-to-Collision) 추정을 타깃으로 만든, 현재까지 가장 큰 규모의 자율주행용 이벤트카메라 데이터셋이며 IEEE Transactions on Robotics(T-RO)에 게재가 확정됐다. 프레임 기반 인식이 지배적인 현재 자율주행 SW 스택에서 이벤트 센서가 '보조 센서'를 넘어 실제 벤치마크 가능한 입력으로 자리잡을 수 있는지를 가늠하는 기준점이 될 데이터다."
    source_url: "https://arxiv.org/abs/2603.16303"
---
