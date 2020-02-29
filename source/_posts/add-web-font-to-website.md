---
title: 为网页添加网络字体
tags:
  - frontend
  - html
date: 2020-02-29 23:29:48
---


在进行网页制作的时候，字体是一个不小的问题，由于不知道用户的电脑上会安装哪些字体，因此只能保守地选择较为安全的，普遍安装的字体，但是这样一来设计效果可能无法达到最好的展现，而网络字体则能够解决这样一个尴尬的问题



<!-- more -->



## 如何使用



目前有非常多的网络字体提供服务，但是存在一个问题，就是万一服务商跑路，那么使用它提供的字体的网页就会遭殃，因此选择就成了很关键的一点



个人推荐是使用 google-fonts ，谷歌提供的服务，在可预见的将来应该是不会跑路的，而国内访问也有办法解决，因而唯一的障碍也不复存在



### 选用字体



首先打开 [google-fonts 官网](https://fonts.google.co )，通过筛选找到想要的字体 ( 目前中文字体挺少的，但是是用起来还是很漂亮的 ) 



![google-fonts-select-font](https://pic.imgdb.cn/item/5e5a81016127cc071357bb67.png)



> 上面的 Sentence 栏内，可以输入一些字符，下面就可以显示这些字符的预览，方便选择



选择好心仪的字体，就可以点击字体右上角的红色加号，选中后右下角会出现一个悬浮窗，点击打开就能看到具体在网页中使用的方法了



### 国内使用



在国内使用的话可能会遇到访问时速度慢甚至无法访问的情况，这种时候就需要反向代理了



可以使用[上海交大镜像源](https://mirrors.sjtug.sjtu.edu.cn)提供的服务，个人感觉是很稳定的



具体如何反代，镜像源内 google-fonts 一栏已经写的很清楚了，我就直接复制粘贴过来



> 本镜像提供了 Google Fonts 的反向代理。
>
> **使用方法**
>
> ```html
> <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
> ```
>
> 改为
>
> ```html
> <link href="https://google-fonts.mirrors.sjtug.sjtu.edu.cn/css?family=Roboto" rel="stylesheet">
> ```



这样几步非常简单的步骤，就可以无忧无虑地使用自己想要的字体了，网页的表达能力自然也提升了一个量级
