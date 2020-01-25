---
title: Caps 键与 Esc 键交换
date: 2020-01-14 10:51:11
tags:
  - linux
  - vim
---


经常使用 vim 的人会知道，Esc 键的位置太远了，而平时都会不停地去按，因此会考虑将 Caps 键与 Esc 键交换，方便平时使用

<!-- more -->

> 首先需要安装xorg包组来完成下列步骤

## 查看键位

可以使用 `xmodmap` 命令来查看一些重要的键位，输出可能如下：

```sh
xmodmap:  up to 4 keys per modifier, (keycodes in parentheses):

shift       Shift_L (0x32),  Shift_R (0x3e)
lock        Caps_Lock (0x9)
control     Control_L (0x25),  Control_R (0x69)
mod1        Alt_L (0x40),  Alt_R (0x6c),  Meta_L (0xcd)
mod2        Num_Lock (0x4d)
mod3
mod4        Super_L (0x85),  Super_R (0x86),  Super_L (0xce),  Hyper_L (0xcf)
mod5        ISO_Level3_Shift (0x5c),  Mode_switch (0xcb)
```

或者还不够的话，可以使用 `xmodmap -pke` 输出所有键位，具体输出太长了这里就不写出来了

## 修改键位

首先，如果不熟悉各个键位keycoded话，可以先使用 `xmodmap -pke > ~/.xmodmap` 将keycode输出到文件中，再进行更改

记住，每次更改前都需要先 clear 掉原来的，不然会重复给予某个按键功能，例如按下 caps 后，既有 caps 的效果，也有 esc 的效果

修改后的 .xmodmap 文件如下:

```sh
keycode 66 = Caps_Lock
keycode 9 = Escape
remove Lock = Caps_Lock
add Lock = Escape
keycode 9 = Caps_Lock
keycode 66 = Escape
```

然后使用 `xmodmap ~/.xmodmap` 命令来使其生效
