---
title: arch-sound
tags:
  - linux
date: 2020-02-19 15:49:33
---


在重装了 Arch Linux 后，我的声卡突然无法被识别了， alsa 包已经被正确安装了， aplay -l 却报告无法找到声卡

<!-- more -->

在问了 tg 群里的大佬后，得到了以下解决方法：

```bash
# 重新安装模块
pacman -S linux linux-firmware
# 依然不行的话再安装sof-firmware
pacman -S sof-firmware
# 再检查 /dev/snd/ 内是否正常有好多文件
```
