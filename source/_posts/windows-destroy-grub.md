---
title: 解决 Windows 升级时 grub 出错的问题
tags:
  - linux
date: 2020-02-09 12:54:23
---


先骂一句辣鸡 Windows

 <!-- more -->

## 起因

我的电脑装的是双系统， Windows 和 Arch Linux ，用的 grub ，但是最近在进行 Windows 更新的时候，突然在重启时 grub 报告了 `unknown filesystem` 的错误，在经过一番搜寻后，最终解决了问题

## 解决

这个问题是因为 Windows 不认 grub 而导致的，在升级的时候往 efi 分区内做了一些事情，导致 grub 的错误

首先需要先进 BIOS ，调整启动顺序，改为 Windows 引导，将升级先完成掉

然后再通过 Arch Linux 的 Live CD 来修复 grub 的错误

1. 挂载 Linux 的分区和 efi 分区
2. arch-chroot 进入系统
3. 重新按照 Arch Wiki 上的 [grub](https://wiki.archlinux.org/index.php/GRUB) 的内容再安装一遍 grub
4. 调整回原先的启动顺序，重启电脑

这样应该就能正常启动了

