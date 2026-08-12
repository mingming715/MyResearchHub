---
title: "자율주행 HW 업데이트 (2026-08-12)"
date: 2026-08-12
category: autonomous-hw
items:
  - title: "Hesai, 색상과 ToF를 픽셀 단위로 융합한 'Picasso' SPAD-SoC 공개 — 카메라-라이다 융합을 칩 레벨로 끌어올리다"
    type: "뉴스"
    summary: "Hesai가 5세대 라이다 ASIC 플랫폼 'Picasso'를 공개했는데, 이 칩은 SPAD(단일광자 애벌란치 다이오드) 어레이에 컬러 감지 기능을 통합해 하나의 다이 위에서 3D 좌표(XYZ)와 색상 정보(RGB)를 픽셀 단위로 동시에 출력하는 '6D 풀컬러' 방식을 구현했다. 기존에는 라이다의 기하 정보와 카메라의 색상 정보를 별도 센서에서 얻은 뒤 외부 캘리브레이션과 시차(parallax) 보정을 거쳐 소프트웨어 단에서 정합해야 했는데, 이 과정에서 두 센서 간 노출 시점 불일치와 캘리브레이션 드리프트가 인식 오류의 원인이 되어 왔다. Picasso는 광자 검출 효율 40% 이상을 유지하면서 색상-거리 정보를 ASIC 레벨에서 원천적으로 정렬시켜, 후처리 융합에 드는 연산 부담과 정합 오차를 동시에 줄이는 방향을 제시한다. 이 플랫폼을 적용한 ETX 라이다 시리즈는 최대 4,320채널, 600m 사거리를 지원하며 2026년 하반기 양산을 앞두고 있어, 센서 융합 아키텍처가 '별도 센서+소프트웨어 정합'에서 '단일 칩 네이티브 융합'으로 이동하는 흐름을 보여주는 사례다."
    source_url: "https://www.morningstar.com/news/pr-newswire/20260420cn38265/hesai-unveils-picasso-6d-full-color-spad-soc-next-gen-etx-and-innovations-in-spatial-intelligence-and-physical-ai"
  - title: "aiMotive, ASIL-B 인증 NPU IP 'aiWare5'를 SEooC로 공급 — SoC 통합 주기와 안전인증 주기를 분리하다"
    type: "뉴스"
    summary: "aiMotive가 ISO 26262 ASIL-B 인증을 받은 세계 최초의 NPU IP 'aiWare5'를 'Safety Element out of Context(SEooC)' 형태로 라이선싱 공급한다고 발표했다. SEooC는 특정 SoC나 완성차 프로젝트에 종속되지 않은 상태에서 미리 안전 인증을 완료한 IP 블록으로, 이를 라이선싱하는 SoC·칩렛 벤더는 NPU 부분의 안전 케이스를 처음부터 새로 쌓는 대신 사전 검증된 안전 문서를 그대로 통합에 활용할 수 있어 인증에 걸리는 시간을 단축시킨다. 이는 안전 인증에 수개월~1년 이상이 걸리는 반면 AI 모델 아키텍처는 훨씬 빠르게 바뀌는 근본적 불일치를 모델 자체를 빠르게 바꾸는 방식이 아니라 '재사용 가능한 인증된 IP 블록' 단위로 문제를 쪼개 대응하는 접근이다. Dynamic FP8 스케일링을 지원해 LLM·비전 트랜스포머·상태공간모델(SSM) 같은 최신 워크로드까지 저전력 범위 안에서 처리하도록 설계됐고, 자동차 SoC뿐 아니라 별도 AI 가속 코프로세서·칩렛으로도 통합 가능하도록 명시된 점은 칩렛 기반 아키텍처 확산과도 맞물린다."
    source_url: "https://www.thailand-business-news.com/pr-news/aimotive-announces-aiware5-delivering-unrivalled-flexibility-and-scalability-for-l2-to-l4-automotive-ai-workloads"
  - title: "AI-Defined Vehicle 시대의 차량 내 이더넷 — TSN 결정론 전송과 MACsec 보안이 같은 대역폭을 놓고 경쟁하는 이유"
    type: "개념정리"
    summary: "존/도메인 아키텍처로 전환되면서 카메라·라이다·레이더 데이터를 실은 자동차용 이더넷이 제동·조향 같은 안전필수 트래픽과 인포테인먼트 같은 베스트에포트 트래픽을 하나의 백본으로 함께 실어 나르게 됐는데, 이때 TSN(시간민감 네트워킹)은 큐잉·트래픽 셰이핑으로 지연시간을 보장하고 MACsec은 회선 속도 암호화로 무단 기기 접속·데이터 위변조를 막는 역할을 각각 담당한다. 문제는 두 메커니즘이 같은 제한된 대역폭을 두고 서로 트레이드오프 관계에 있다는 점으로, MACsec으로 보호된 프레임마다 SecTAG·ICV 헤더 오버헤드가 붙어 실효 대역폭을 갉아먹고, TSN의 결정론적 지연 보장은 링크 이용률이 80%에 근접하면 무너지기 시작한다. 즉 센서 대수가 늘어날수록 대역폭·지연·보안을 동시에 만족시키는 설계 여유가 급격히 줄어들며, 이는 최근 논의되어 온 '센서-컴퓨트 대역폭 격차' 문제에 보안이라는 세 번째 축을 추가하는 셈이다. AI 에이전트가 실시간으로 다중 센서 스트림을 소비하는 차량이 늘어날수록, 네트워크 설계 단계에서부터 결정론과 암호화를 함께 예산에 반영해야 한다는 점을 보여준다."
    source_url: "https://www.indexbox.io/blog/automotive-ethernet-tsn-and-macsec-power-ai-defined-vehicles/"
---
