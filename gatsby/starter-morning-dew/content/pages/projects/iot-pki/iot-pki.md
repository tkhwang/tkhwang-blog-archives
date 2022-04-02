---
title: project - iot-pki
slug: projects/iot-pki
cover:
disqus: true
type: page
---

IoT Device 보안 강화를 위한 HW Security 기반 상호 인증 TLS 이용한 SKT IoT PKI 구축 및 운영

- [🏠 SKT-IoT-PKI 안내 페이지 iotpki.sktelecom.com/](http://iotpki.sktelecom.com/)
- @SKTelecom, March. 2017 ~ Dec. 2017

주요 특징

- SKT IoT 디바이스 인증을 위한 PKI infra-structure 구축 (RootCA/CA/RA).
- HW Security (TPM, SecurityIC) 이용한 상호 인증 TLS를 위한 디바이스 및 라이브러리 개발.
- device-server TLS mutual (two-way) authentication : HTTP over TLS, MQTT over TLS

## 1. Overview

![img](https://raw.githubusercontent.com/tkhwang/tkhwang-etc/master/img/2017/iot-pki/skt-iot-pki-overview.png)

## 2. TLS vs 상호 인증 (mutual authentication) TLS 비교

![img](https://raw.githubusercontent.com/tkhwang/tkhwang-etc/master/img/2017/iot-pki/single-page-introduction.png)

## 3. 상호 인증 실패 시

![img](https://raw.githubusercontent.com/tkhwang/tkhwang-etc/master/img/2017/iot-pki/connection-fail.png)
