---
layout: post
title: "Macbook (pro) 이동 시 idle 방치 임에도 뜨겁다면 ..."
date: 2018-09-11
categories:
  - tip
? description
tags: [tip]
---

이전에 new macbook (2015) 사용하다가 최근에 macbook pro (2018) 구매하여 사용하고 있는데, power off 하지 않고 노트북을 가방에 넣고 **이동 시**에 이상하게 발열이 심하게 나는 것이다.

최근 뉴스에서 HW 문제인 쓰로틀링 문제로 인하여 발열 문제가 있다는 것은 들었는데 idle 방치시에 발생할 것 같지는 않고, 검색을 하다가 비슷한 글을 찾았다.

<!--more-->

## Reference Link

- <a href="https://alvinalexander.com/macos/why-is-macbook-warm-when-lid-closed-sleep-mode">Why is my MacBook warm when the lid is closed (in sleep mode)? | alvinalexander.com</a>
- [Determine Why Your Mac Wakes Up From Sleep](http://osxdaily.com/2010/07/17/why-mac-wakes-from-sleep/)

#### Log 에서 sleep wakeup 이유 확인

```bash
log show | grep 'Wake reason'
```

```
2018-09-16 21:57:14.932711+0900 0x74       Default     0x0                  0      0    kernel: (AppleACPIPlatform) AppleACPIPlatformPower Wake reason: EC.Bluetooth (Maintenance)
2018-09-16 21:57:14.932714+0900 0x74       Default     0x0                  0      0    kernel: (AppleACPIPlatform) AppleACPIPlatformPower Wake reason: EC.Bluetooth (Maintenance)
2018-09-16 21:57:16.487413+0900 0xfcc15    Default     0x0                  336    0    corespeechd: [com.apple.corespeech:Framework] -[CSHostDaemon _isWakeReasonVoiceTrigger] Wake reason: <private>
2018-09-16 21:57:16.487418+0900 0xfcc15    Default     0x0                  336    0    corespeechd: [com.apple.corespeech:Framework] -[CSHostDaemon _getPowerAssertionIfWakenByVoiceTriggerNotFromS3Sleep] Wake reason is not VoiceTrigger or it wake from S0i
2018-09-16 21:57:16.841768+0900 0xfcd28    Default     0x0                  0      0    kernel: (AppleTopCaseHIDEventDriver) [HID] [ATC] AppleDeviceManagementHIDEventService::processWakeReason Wake reason: Host (0x01)
2018-09-16 21:57:17.405272+0900 0xfcc14    Default     0x0                  0      0    kernel: (AppleTopCaseHIDEventDriver) [HID] [ATC] AppleDeviceManagementHIDEventService::processWakeReason Wake reason: Host (0x01)
2018-09-16 21:57:32.811808+0900 0x74       Default     0x0                  0      0    kernel: (AppleACPIPlatform) AppleACPIPlatformPower Wake reason: EC.Bluetooth (Maintenance)
2018-09-16 21:57:32.811812+0900 0x74       Default     0x0                  0      0    kernel: (AppleACPIPlatform) AppleACPIPlatformPower Wake reason: EC.Bluetooth (Maintenance)
```

나의 경우에는 bluetooth mouse 로 인하여 wakeup 이 많이 발생하고 있었다.
사용하지 않고, 그냥 가방 안에 넣고, 움직이기만 했는데, 왜 mouse 로 인해서 wake up 을 하지 ????

**Bluetooth mouse 를 off 하지 않은 상태로 가방에 넣어서** 걸어 다닐 떄 움직임으로 이로 인해 마우스 움직임으로 macbook 에 계속 sleep 에서 wakup 을 했다는 것인가 ?

#### MacOS Bluetooth Option

Bluetooth 기기로 sleep wakeup 여부를 설정할 수 있게 되어 있다. 현재는 enable 되어 있는 상태이고, 나의 경우에는 이동 시에 bluetooth mosue 전원을 off 하지 않고, 그대로 가방에 넣고 다녔다.

![bt sleep wakeup option](https://raw.githubusercontent.com/tkhwang/tkhwang-etc/master/img/2018/09/bt-mouse-wake-up.png)

#### 의문점

이전 new macbook (2015) 사용 시에도 동일한 bluetooth mouse 사용하고, OS option 사용하였는데, 왜 문제가 없었는데, new macbook (2018)에서는 문제가 되는 것일까 ?

- (가정 #1) Macbook pro 의 bluetooth 성능이 더 좋아서 가방에 넣고 이동 시에 움직임으로 wakeup 이 잘 된다. 즉, bluetooth 성능이 더 좋다 ?
- ...

일단은 OS 옵션은 그대로 사용하고, **이동 시에 마우스의 전원을 Off**하고 나서 이동을 하니깐 macbook 발열 문제는 거의 없는 것 같다. 다행이다. ㅋㅋ
