---
title: "자율주행 HW 업데이트 (2026-10-24)"
date: 2026-10-24
category: autonomous-hw
items:
  - title: "CPU를 건너뛰고 레이더 데이터가 GPU 메모리로 바로 들어간다 — TI·Lattice·NVIDIA가 보여준 '로우 센서 퓨전' 아키텍처"
    type: "뉴스"
    summary: "TI의 mmWave 레이더 칩 IWR6243과 카메라를 NVIDIA Holoscan 플랫폼 위에서 결합하는 레퍼런스 아키텍처가 공개됐다. 핵심은 '어디서 퓨전하느냐'다. 지금까지 많은 양산 설계는 레이더와 카메라가 각자 객체(바운딩박스·트랙)를 뽑아낸 뒤 그 결과만 합치는 객체 레벨 퓨전이었는데, 이 구조는 레이더의 로우 신호(포인트클라우드 단계)를 CSI-2로 뽑아 Lattice의 CertusPro-NX FPGA 브리지보드를 거쳐 GPU가 바로 읽을 수 있는 메모리로 흘려보내고, Holoscan이 레이더 신호처리·카메라 전처리·신경망 추론·멀티모달 퓨전을 하나의 그래프 파이프라인으로 스케줄링한다. CPU를 최대한 배제하고 센서 원시 데이터를 GPU로 직접 공급하는 이 '로우 레벨 퓨전' 방식은 비가 오거나 역광·저조도처럼 카메라가 흔들리는 상황에서 레이더가 더 일찍, 더 깊게 보정에 개입할 수 있게 하는데, 이는 자율주행에서 왜 '퓨전 시점'이 센서 종류 자체보다 더 중요한 아키텍처 결정인지를 잘 보여주는 사례다. 데모는 로보틱스/휴머노이드를 겨냥했지만 쓰인 레이더 칩 자체가 자동차급이고 퓨전 구조는 차량 ADAS 설계에도 그대로 옮겨갈 수 있는 문제다."
    source_url: "https://www.edge-ai-vision.com/2026/04/texas-instruments-d3-embedded-lattice-and-nvidia-show-a-practical-radar-camera-fusion-stack-for-robotics/"
  - title: "NPU 블록 하나가 ASIL B를 받았다고 칩 전체가 안전해지는 건 아니다 — VeriSilicon NPU IP 인증이 짚는 '경계'"
    source_url: "https://www.businesswire.com/news/home/20251126894825/en/VeriSilicons-NPU-IP-VIP9000NanoOi-FS-has-Achieved-ISO-26262-ASIL-B-Certification"
    type: "뉴스"
    summary: "VeriSilicon의 NPU IP 'VIP9000NanoOi-FS'가 SGS-TÜV Saar로부터 ISO 26262 ASIL B 인증을 받았다. 이 NPU는 프로그래머블 SIMD 비전 파이프라인으로 ASIL B가 요구하는 결정론적 레이턴시(같은 입력이면 항상 같은 시간 내에 결과가 나오는 성질)를 보장하도록 설계됐고, OpenVX·OpenCL 같은 표준 스택을 지원해 ADAS용 CNN·LLM 추론에 올라간다. 그런데 여기서 중요한 건 '이 인증이 정확히 무엇을 보장하느냐'다. ASIL B는 IP 블록 단독으로 받을 수 있는 인증의 상한선에 가깝고, 완성차가 요구하는 ASIL D는 이 NPU IP가 들어간 SoC 전체, 그리고 그 SoC가 들어간 ECU·소프트웨어까지 합쳐진 시스템 레벨에서만 입증될 수 있다. 즉 IP 벤더의 ASIL B 인증은 '이 블록은 안전 설계 프로세스를 거쳤고 고장 거동이 문서화돼 있다'는 재료 인증이고, 이를 ASIL D 시스템으로 끌어올리는 책임은 그대로 SoC 통합사와 완성차에 남는다. 자율주행 SoC/NPU 생태계에서 왜 'IP 레벨 인증' 뉴스가 계속 나오는지, 그리고 그게 왜 '안전 인증 끝'을 의미하지 않는지를 이해하는 데 좋은 사례다."
---
