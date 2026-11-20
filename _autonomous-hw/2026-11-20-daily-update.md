---
title: "자율주행 HW 업데이트 (2026-11-20)"
date: 2026-11-20
category: autonomous-hw
items:
  - title: "레이더 신호처리를 센서 밖으로 완전히 꺼낸다 — NVIDIA DRIVE가 '엣지 레이더'라는 전제를 깨는 방법"
    type: "뉴스"
    summary: "지금까지 대부분의 양산 자동차 레이더는 각 센서 안에 들어있는 고정 DSP가 ADC 원시 신호를 바로 처리해 점군(point cloud)만 중앙 컴퓨터로 보내는 '엣지 처리' 구조였다. NVIDIA는 2026년 3월 GTC에서 ChengTech와 함께, 레이더의 원시 ADC 데이터를 그대로 DRIVE AGX Thor의 메모리로 보내고 PVA(프로그래머블 비전 가속기) 위에서 소프트웨어 정의 신호처리 파이프라인을 돌리는 '중앙집중형 레이더 처리' 구조를 실시간 시연했다. 이렇게 하면 레이더 센서 자체는 저가형 트랜시버로 단순화할 수 있고, 거리·도플러·각도 추정 알고리즘을 센서 하드웨어에 고정하지 않고 소프트웨어 업데이트만으로 계속 개선할 수 있으며, 카메라·라이다와의 로우레벨 센서 퓨전도 점군이 아닌 원시 신호 단계에서부터 가능해진다. TI가 같은 시기에 설명한 '위성형(satellite) 레이더' 아키텍처(트랜시버는 차량 곳곳에, 처리는 중앙 프로세서 하나로)도 같은 방향을 가리키고 있어, '센서마다 자체 DSP를 갖는다'는 자동차 레이더의 오랜 설계 전제 자체가 바뀌고 있음을 보여주는 사례다. 다만 성능·비용 수치는 모두 NVIDIA·TI 자체 발표 자료 기준이라는 점은 감안해야 한다."
    source_url: "https://developer.nvidia.com/blog/how-centralized-radar-processing-on-nvidia-drive-enables-safer-smarter-level-4-autonomy/"
---
