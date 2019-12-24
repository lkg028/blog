---
title: 选择VPS
date: 2019-12-10 08:59:42
tags:
---
VPS的选择很大程度上决定了使用这台vps的方便程度以及需要付出的精力和金钱，因此选择合适自己的vps服务商与发行版就变得十分重要

<!--more-->

## 选择VPS服务商

## 国内vps

如果需要全天候可以被访问的话，那么势必需要一个VPS。目前国内也不少，主流的一些包括

1. [华为云](https://intl.huaweicloud.com/zh-cn/)
2. [腾讯云](https://cloud.tencent.com/)
3. [阿里云](https://www.aliyun.com/)

等等……

一般国内主流的服务器也不能说便宜但也不算特别贵，但是要注意基本都**要备案**，也**不能拿来做些奇奇怪怪的事情**，不然后果自负

## 国外vps

除了国内的，还可以选择国外的一些VPS，其中比较出名的有

1. [Vultr](https://www.vultr.com/)
2. [搬瓦工](https://bandwagonhost.com/)
3. [Digital Ocean](https://www.digitalocean.com/)

要注意的是，**有些服务商提供支付宝或微信支付**，如Vultr，但有些没有，需要自己注意，同时，由于一些原因，**一些ip地址可能无法ping通**，这时就需要重新建立一台VPS再尝试，因此使用前一定要注意先尝试ping一下自己的服务器

另外，还可以在[这里](https://www.10besty.com/best-vps-hosting-services/)看看推荐的国外VPS（不保证其时效性和正确性）

一般普通用户，除非要搭建的东西在文档中说明了最低需求，选择最便宜的其实就够用了，然后**ipv6 only**的千万别选，目前世界上绝大多数地方都没有ipv6，因此选了这台服务器没人访问得到

## 选择VPS的系统

## Windows还是Linux

一般用作服务器的话，建议选择Linux，更加稳定高效。Windows用作服务器还是比较少见的，网上的教程和社区也比较难找，而Linux已经基本占领了服务器领域，因此更建议使用Linux

## Linux发行版选择

服务商一般会提供许多的Linux发行版，如果**有经验**的话可以自行选择，甚至用没有提供的发行版的iso自己定制也行，但如果**没有经验**的话，可以参考以下内容：

1. CentOS![centos](https://i.loli.net/2019/11/04/sm1NDV3Yalr6byQ.png)：目前可以说是在个人的服务器范围内使用最广泛的Linux发行版了，它源自RedHat，一家专业为企业提供稳定服务的Linux发行版，因此十分稳定，基本不会出现什么问题
2. Ubuntu Server![ubuntu](https://i.loli.net/2019/11/04/afdP1RBeozynFuH.png)：同CentOS一样都是十分稳定的发行版，虽说是基于Debian但是Ubuntu和Debian还是有着很大差别的，已经完全可以视为两个系统了

目前绝大多数的个人用户所使用的都是这两个发行版吧，网上有关的教程也非常全面，非常适合新手入门

还有就是，如果你已经确定了要拿这台vps做什么，且vps服务商也提供了相关的application，直接选择就可以，一般都不会有什么问题，且不用自己再搭建具体内容了，方便快捷
