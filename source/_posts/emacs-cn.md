---
title: 解决 Emacs GUI 下无法输入中文的问题
tags:
  - software
  - linux
  - emacs
date: 2020-04-14 08:53:26
---


我使用的是 Arch Linux 下通过 pacman 安装的 Emacs，在打开后无法使用 fcitx 下的搜狗拼音输入中文，发现是 locale 的一些问题，由于是英文环境导致无法输入。

<!-- more -->

目前找到的最简单的方法是修改 /usr/share/applications/emacs.desktop 文件，将 Exec 后面的内容改为

```
Exec=env LC_CTYPE=zh_CN.UTF-8 emacs %F
```

然后重新启动 Emacs 即可，非常简单。