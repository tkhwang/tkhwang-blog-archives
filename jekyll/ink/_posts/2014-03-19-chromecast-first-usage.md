---
layout: post
title: "[Review] 크롬캐스트 Chromecast 첫 느낌"
date: 2014-03-19
categories:
  - review
description: 
image: https://unsplash.it/2000/1200?image=773
image-sm: https://unsplash.it/500/300?image=773
---

그동안 한국 발매가 안 되서 쓰고 싶었지만 사용하지 못하던 chromecast.
Amazon 에서 구매를 할까는 몇 번 참으며 한국 정식 발매를 기다리다… 드디어 한국 발매가 되어서 바로 지름.

<!--more--> 

![img](http://i947.photobucket.com/albums/ad312/tkhwang/blog1/20140517-DSC_0370.jpg?fit=600%2C461)

![img](http://i947.photobucket.com/albums/ad312/tkhwang/blog1/20140517-DSC_0374.jpg?fit=600%2C461)

안드로이드 앱 (유튜브, 호핀, …)과 크롬 앱으로 노트북에서 바로 TV 연결해주는 동글.

집에 있는 TV가 wifi 연결이 안 되는 예전 모델이라서 WIFI 동글을 직접 사서 연결해보긴 했는데, 솔직히 WIFI 동글 사서 몇 번 써본 이후에는 사용하지 않았던 것 같다. 플레이하다가 끊어지고.. 소프트웨어가 사용하기 너무 불편했었는데…

Chromecast 는 하루 정도 사용해보기로는 너무 좋군요. :)
아래는 대략적인 느낌…


### (Updated 05.30) 뜨거운 논쟁 : Screen Mirroring vs Streaming

솔직히 기술적으로 자세한 내용은 사실 하나도 모른다.

처음에는 개별 앱에서 화면 전송을 해서 한계가 있구나.. 개별 앱이 아니라 전체 시스템에서 해주면 더 편할테데.. 구글 앱이나 chromecast SDK 를 사용하여 만든 개인 앱은 단말 시스템 앱 서명을 하지 못해서 self-signing한 앱에서 보내도록 선택을 했구나라고 생각을 했었는데…

단순한 화면 공유가 아니라 contents 를 어디서 decoding 하는지와 성능에 대해서 생각을 해보니 관점이 많이 달라지는 것 같다. 화면 공유 입장에서는 개별 앱보다는 시스템에서 frame buffer 를 공유하는 편이 더 좋겠지만 이는 많은 공들여서 압축 기술을 적용한 contents 를 decoding 한 최후 raw frame buffer 라서 data 양도 많을 것 같고.. 앞으로 4K 이니 하는 큰 사이즈 지원을 위해서는 아무래도 성능도 많이 필요로 할 것 같다.

따라서 이를 decoding 한 이후 data 의 screen mirroring 이 아니라 app data 에서 streaming 처럼 TV 로 data 로 보내고, TV dongle 에서 decoding 을 해서 play 를 해준다면 (물론 아직 chromecast 가 실제로 이렇게 하는지는 모르겠다.) 단말 성능이 낮은 경우에도 가장 좋은 성능이 나오지 싶다.

이 모두를 고려해서 구글은 성능을 선택했고, 개별 앱에서 decoding 하기 이전의 데이터를 보내고 이를 TV dongle 에서 decoding 하도록 구현하도록 선택한 것이 아닐까 ?
아니면 어쩌지… ㅋㅋ

#### 장점

- Chromecast 지원하는 앱에서 컨텐츠를 TV 화면에 전송하여 바로 볼 수 있음.
- 연결을 위하여 DLNA, WIFI Direct 와 같은 어려운 기술적인 내용 잘 몰라도 된다. WIFI만 연결하니깐 바로 플레이됨.
- 성능 측면에서 더 좋을 듯.

#### 아쉬운 점

- 개별 앱에서 화면을 전송함.
	- 개별 앱이 아니라 시스템에서 화면 프레임 버퍼를 직접 전송하면 앱에서 지원과 무관하게 화면 전송이 가능할 것도 같은데, 이를 위해서는 system 권한이 필요해서 self-signed 된 개별 앱에서는 샌드박싱 보호로 자신의 화면만 액세스할 수 있기 때문일까 ?
- 호핀에서는 컨텐츠에 따라서 chromecast 를 통하여 TV 전송을 막는 경우가 있더라.
	- 이거야 chromecast 의 문제가 아니라 이를 지원하는 앱의 DRM 정책에 의한 것이겠지만 단말 플레이만 허용하고, 굳이 TV 전송을 막아야 하는 이유가 있을까 ?
- 당연히 로컬 파일를 TV 전송할 필요가 있을 것 같은데, 이 부분은 몇 가지 방법이 있는 듯한데 좀더 살펴볼 필요가 있음.
	- Chrome 에서는 확장 프로그램 : File Manager extension 을 사용.
	- 조금 시간이 지나면 local file 도 chromecast 로 mirroring 하는 app 도 나오지 않을까 싶네요.

#### 단점

아직은 잘 모르겠다.

[Android Wear](http://developer.android.com/wear/preview/start.html) 도 그렇고, [Chromecast](https://developers.google.com/cast/) 도 비슷한데, 이를 보고 있는 느낌은 구글은 역시 다른 제조사와는 많이 다른 것 같다. 기본적으로는 일반 제조사들은 제품이 최종 결과물이라고 한다면 구글은 일반적인 제조사는 아니니깐 단순히 제품이 최종 결과물이라긴 보다는 제품을 만들 수 있는 개발환경, SDK 가 그들의 최종 제품이 아닐까 생각이 된다.

이로부터 나오는 제품도 직접 판매할 수는 있지만 이는 레퍼런스로 최종 결과물인 SDK 의 부산물이 아닐까 ? 최종 결과물이 제품이 아니라 이를 개발하는 환경, SDK 인만큼 그 결과물의 품질 역시 다를 수 밖에 없을 것 같다는 생각이 점점 든다. 즉, 이들 회사를 직접 비교하기에는 서로 다른 룰에 따라서 게임을 하고 있는 다른 회사라는 것이다.

