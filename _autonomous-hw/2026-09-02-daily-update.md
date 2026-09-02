---
title: "자율주행 HW 업데이트 (2026-09-02)"
date: 2026-09-02
category: autonomous-hw
items:
  - title: "Sony, SerDes 트랜스미터를 내장한 자동차용 CMOS 이미지센서 IMX828 공개 — A-PHY 생태계 검증도 진행"
    type: "뉴스"
    summary: "Sony 세미컨덕터솔루션즈가 업계 최초로 MIPI A-PHY SerDes 트랜스미터를 다이 안에 내장한 차량용 CMOS 이미지센서 IMX828을 발표했다. 지금까지 자동차 카메라 모듈은 이미지센서와, 이를 A-PHY나 GMSL 같은 장거리 SerDes 신호로 변환해 ECU까지 보내는 별도의 시리얼라이저 칩을 나란히 배치하는 2칩 구조가 일반적이었는데, IMX828은 이 시리얼라이저 기능을 센서 실리콘 자체에 통합해 부품 수·기판 면적·전력 소비를 동시에 줄인다. 8메가픽셀 해상도에 47,000cd/㎡의 포화 휘도와 150dB HDR을 지원하면서도 주차감시 모드에서는 소비전력을 100mW 이하로 낮출 수 있어, 상시 온(always-on) 감시 카메라 같은 저전력 요구와 고동적범위 주행 카메라 요구를 한 센서로 충족하려는 설계다. 실제로 2026년 6월 AutoSens USA에서는 Sony를 포함한 4개 업체가 8메가픽셀 카메라에서 15m 거리까지 초당 약 8Gbps를 전송하는 A-PHY 상호운용성 데모를 함께 시연하며, 센서 내장형 SerDes 접근이 표준 생태계 안에서 실제로 검증되는 단계로 넘어가고 있음을 보여줬다. 센서-SoC 인터페이스가 '센서 따로, 물리계층 따로'에서 '센서에 물리계층까지 통합'하는 방향으로 이동할 때 카메라 모듈 설계와 원가 구조가 어떻게 바뀌는지 보여주는 사례다."
    source_url: "https://www.sony-semicon.com/en/news/2025/2025102801.html"
  - title: "Hesai, 색상과 거리를 한 칩에서 동시에 측정하는 '6D 풀컬러' SPAD-SoC Picasso 공개"
    type: "뉴스"
    summary: "Hesai가 자사 5세대 라이다 ASIC 플랫폼인 SPAD-SoC 'Picasso'를 공개했다. 기존 카메라-라이다 융합은 각기 다른 두 센서에서 나온 RGB 이미지와 XYZ 포인트클라우드를 사후에 좌표 정합·시간 동기화해 합치는 방식이었던 반면, Picasso는 픽셀 단위에서 컬러 센싱과 ToF(비행시간) 거리 측정을 동일 다이 위에서 수행해 각 포인트가 처음부터 XYZ 좌표와 RGB 색상 정보를 함께 담은 '6D 풀컬러' 포인트클라우드를 출력한다. 40% 이상의 광자검출효율(PDE)로 더 어두운 환경, 더 작은 표적, 더 먼 거리에서도 검출 성능을 유지한다고 밝혔으며, 이 칩을 탑재해 최대 4,320채널까지 지원하는 ETX 라이다 플랫폼도 함께 공개해 2026년 하반기 양산에 들어갈 예정이다. 이는 카메라·레이더·라이다를 각각의 센서로 두고 SoC 단에서 늦게 융합하던 기존 아키텍처와 달리, 융합 자체를 센서 실리콘 안으로 끌어들이는 접근으로, 후단 SoC의 정합·동기화 부담을 줄이는 대신 센서 칩 자체의 복잡도와 원가를 크게 끌어올리는 트레이드오프를 수반한다."
    source_url: "https://www.hesaitech.com/hesai-unveils-picasso-6d-full-color-spad-soc-next-gen-etx-and-innovations-in-spatial-intelligence-and-physical-ai/"
  - title: "Chips&Media, 차량용 비디오 코덱 하드웨어 IP 'WAVE6331X FuSa'로 ISO 26262 ASIL-B 인증 획득"
    type: "뉴스"
    summary: "Chips&Media의 비디오 인코더/디코더 하드웨어 IP인 'WAVE6331X FuSa'가 국제 인증기관 DNV로부터 ISO 26262 ASIL-B 기능안전 인증을 받았다. 서라운드뷰 스티칭, 블랙박스형 영상 기록, IVI(차량 인포테인먼트) 등에 쓰이는 비디오 코덱은 그동안 안전과 직결되지 않는 보조 기능으로 취급돼 별도 인증 없이 탑재되는 경우가 많았는데, 이 IP는 실시간 CRC 무결성 검사와 명령어 흐름 모니터링 같은 안전 메커니즘을 하드웨어 아키텍처 안에 내장해 결함을 탐지하면서도 면적·전력 오버헤드를 최소화하도록 설계됐다는 점이 특징이다. H.264/AVC, H.265/HEVC, VP9, AV1까지 기존 코덱 라인업 전반에 이 안전 설계를 이식할 수 있는 SEooC(Safety Element out of Context) 사전 인증 플랫폼 형태로 제공돼, 완성차 업체가 자체적으로 처음부터 인증 과정을 거치는 부담을 줄여준다. ADAS/자율주행 SoC가 연산 코어뿐 아니라 영상 압축·전송 파이프라인까지 통째로 ASIL 인증 대상에 포함시키는 흐름을 보여주는 사례로, '연산 효율 대 안전 인증'이라는 트레이드오프가 NPU/AP 코어를 넘어 주변 IP 블록까지 확장되고 있음을 시사한다."
    source_url: "https://www.edge-ai-vision.com/2026/09/achieving-iso-26262-asil-b-certification-for-functional-safety-chipsmedias-wave6331x-fusa/"
---
