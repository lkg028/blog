---
title: 解决 Linux 端 Spotify 突然无法打开的问题
tags: － linux
date: 2020-03-02 13:49:24
---


今天打开 Spotify 想听音乐的时候，忽然 Spotify 无法打开，并且跳出了一句提示



> Failed to execute child process……  (后面具体内容有些记不清了)



经过一番搜索最终解决了这个问题



<!-- more -->



解决方案是在 [LinuxQuestion.org](https://www.linuxquestions.org/) 上找到的，上面有个人遇到了类似的报错，虽然并不是 Spotify 的，但我觉得可能也有一定的参考价值，就去尝试了一下，果然成功解决了



我在终端下可以正常打开软件，而通过桌面环境则无法正常打开，因此可以判断是桌面环境打开软件的时候出了问题



桌面环境打开软件一般是通过 `/usr/share/applications` 下的 `.desktop` 文件控制的，因此我在其中找到了 Spotify 的文件



```shell
[Desktop Entry]
Type=Application
Name=Spotify
GenericName=Music Player
Icon=spotify-client
TryExec=spotify
Exec=spotify %U
Terminal=false
MimeType=x-scheme-handler/spotify;
Categories=Audio;Music;Player;AudioVideo;
StartupWMClass=spotify
```



其中用于配置打开方式的是 `TryExec` 这一项，通过 `whereis spotify` 命令找到 Spotify 可执行文件的位置，例如我的系统中是在 `/usr/bin/spotify` ，那么就将上面的单纯的 Spotify 改为找到的位置，然后注销重新登录即可