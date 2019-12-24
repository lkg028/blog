---
title: 本地初始化本blog
date: 2019-12-24 13:09:34
tags:
---

这是一篇记录，或者说是备份，记录如何安装本blog

<!-- more -->

## 下载并安装hexo

本blog是由hexo驱动的，因此想要使用，需要在本地也安装hexo才能使用

hexo的安装需要nodejs和git的支持，因此首先需要安装这两个软件

### 准备

#### Windows

Windows下推荐使用scoop作为包管理器来安装这两个软件，因为scoop可以做到仅对当前用户安装，同时管理与升级也十分便捷好用，具体安装步骤可以参阅[官网](https://scoop.sh/)

> scoop推荐需要使用powershell来安装

然后可以使用scoop来安装nodejs和git了

```powershell
scoop install nodejs
scoop install git
```

#### Linux

Linux各个发行版不同，安装nodejs的方法也不尽相同，一般都是通过各个发行版各自的包管理器来安装，以下仅列举一些常见发行版的安装方法

- Debian系

> apt命令适用于Debian和基于Debian的发行版

```bash
apt install nodejs npm
```

- 红帽系

> 红帽系有CentOS，RHEL，Fedora等发行版，其中Fedora的包管理器用的是dnf，与其他两者不同

```bash
# CentOS & RHEL
yum install nodejs npm

# Fedora
dnf install nodejs npm
```

- arch系

> 包括archlinux，manjaro等

```bash
pacman -S nodejs npm
```

#### macOS

可以使用[homebrew](https://brew.sh/)安装

```homebrew
brew install node
```

### 安装hexo

git和nodejs安装完成后，就可以安装hexo了

```sh
npm install -g hexo-cli
```

## 初始化hexo

```shell
hexo init <folder>
cd <folder>
npm install
```

如此就完成了hexo的初始化工作

## 将本博客下载到本地

```shell
git clone https://github.com/Pcrab/blog
```

然后在Windows下，需要将clone下来的东西全部覆盖复制到初始化好的文件夹里去，而在linux中，需要使用

```shell
cp -r blog/* <folder>
cp -r blog/.git <folder>
```

来复制，记住一定要执行下面这行，不然只执行上一行不会复制git文件夹过去

然后安装需要的插件和模块

```shell
npm install hexo-generator-searchdb --save
npm install hexo-generator-feed --save
```

## 部署

部署本博客非常简单，只需要执行

```shell
hexo g
```

即可
