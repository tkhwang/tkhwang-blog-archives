---
layout: post
title: adbg (adb guest) for dual-persona
img: "assets/img/portfolio/adbg.png"
feature-img: "assets/img/pexels/markus-spiske-666904-unsplash-shrinked.jpg"
date: 22 Jul 2017
tags: [android, adb]
---

[tkhwang/dual-persona: adb script for dual persona phone](https://github.com/tkhwang/dual-persona)

# adbg (adb guest)

adb wrapper to communicate indirectly between HostPC and GuestOS.

```
+-------------------------------------------------------------------+
                                         for T-Persona Premium
   _____ ____  _____
  |  _  |    \| __  |___    Legacy : PC <=> HostOS <=> GuestOS
  |     |  |  | __ -| . |   adbg   : PC <============> GuestOS
  |__|__|____/|_____|_  |
                    |___|
+-------------------------------------------------------------------+
adbg version = 0.1

> adbg init : adb setup for remote GuestOS.
              Only once for the 1st connection after the phone booting.
> adbg command : syntax is the same as legacy adb.

device commands:
  adbg logcat          - View GuestOS logcat.
  adbg logcat log      - View and save GuestOS logcat.
  adbg logcat dual     - View HostOS and GuestOS logcat.
  adbg logcat dual log - View and save HostOS and GuestOS logcat.

  adbg install         - Push this package file to the device and install it.
  adbg push <local> <remote>   - copy file/dir to device.
  adbg pull <remote> [<local>] - copy file/dir from device.
+-------------------------------------------------------------------+
```

- Now adb connection for GuestOS is only possible via HostOS.
- If some action can be **handled via HostOS automatically**, HostPC can indirectly communicate with GuestOS !
- `adbg` script just hide the tedious work in MasterOS for you.
- Usually temprary folder `/data/local/tmp` is used.
- Now only tested in **userdebug** binary and not tested in **user** mode binary. - Some problem may occur for accessing `/data/local/tmp` temp directory.

## Prerequite

- **bash**
- **Python** required for coloring logcat.

## INSTALL

- Now please execute `adbg` in `/adbg` folder locally.
- The global usage will be supported later.

##Platform Compatibility

`adbg` has been tested on:

- (X)Ubuntu 13.10
- Mac OS X 10.9.1
- Cygwin (x64) for Windows

## USAGE

### 1st connection

```language
adbg init
```

### Command

More commands will be supported if `adbg` is helpful. :)

#### logcat

```language
adbg logcat
adbg logcat log
```

- `adbg logcat` : colored logcat print by using the [python open source](http://jsharkey.org/blog/2009/04/22/modifying-the-android-logcat-stream-for-full-color-debugging/).
- `adbg logcat log` : View logcat and store it.
- `adbg logcat dual` : View both HostOS and GuestOS logcat together.
- `adbg logcat dual log`

#### install

```language
adbg install
```

#### push

```language
adbg push <local> <remote>
```

#### pull

```language
adbg pull <remote> [<local>]
```

## Technical Details

### HostOS

- `adb` for HostOS in PC

```sh
    adb command ...
```

### GuestOS

- `adb` for GuestOS should be used via **wireless** TcpIp in HostOS

```language
    adb connect 10.23.0.3:5553
```

- `adb` command for GuestOS - `adb` in HostOS
  `sh adb shell command`
  - `adb` in PC
  ```sh
  adb shell adb shell command
  ```
  - `adbg` in PC : Same syntax as legacy `adb` usage in PC.
  ````bash
  adbg command
  		```
  ````
