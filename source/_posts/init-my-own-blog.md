---
title: 本地初始化本blog
tags:
	- blog
date: 2020-03-01 11:58:34
---

这是一篇记录，或者说是备份，记录如何在本地安装 hexo blog

<!-- more -->

## 下载并安装hexo

本 blog 是由 hexo 驱动的，因此想要使用，需要在本地也安装 hexo 才能使用

hexo 的安装需要 nodejs 和 git 的支持，因此首先需要安装这两个软件，同时由于 nodejs 自带的包管理器 npm 并不是很好用，推荐安装 yarn 替代

由于 yarn 依赖与 nodejs，因此以下的安装步骤省略了安装 nodejs 的过程，它会在安装 yarn 的同时自动安装好

### 准备

#### Windows

Windows 下推荐使用 scoop 作为包管理器来安装这两个软件，因为 scoop 可以做到仅对当前用户安装，同时管理与升级也十分便捷好用，具体安装步骤可以参阅 [官网](https://scoop.sh/)

> scoop 推荐需要使用 powershell 来安装

然后可以使用 scoop 来安装 nodejs 和 git 了

```powershell
scoop install git
scoop install yarn
```

#### Linux

Linux 各个发行版不同，安装 nodejs 的方法也不尽相同，一般都是通过各个发行版各自的包管理器来安装，以下仅列举一些常见发行版的安装方法

- Debian 系

> apt 命令适用于 Debian，Ubuntu 和基于 Debian 和 Ubuntu 的发行版，

```bash
# 配置源
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
# 安装
apt update && apt install yarn git
```

- 红帽系

> 红帽系有 CentOS，RHEL，Fedora 等发行版，包管理器用的是 dnf

```bash
curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -
dnf install yarn git
```

- arch系

> 包括archlinux，manjaro等

```bash
pacman -S git nodejs yarn
```

#### macOS

> 可以使用[homebrew](https://brew.sh/)安装

```homebrew
brew install yarn git
```

### 检查

可以通过以下命令检查是否安装成功

```bash
git --version
yarn -v
```

### 安装hexo

git和nodejs安装完成后，就可以安装hexo了

```sh
# yarn 与 npm 不同，npm 的 -g 参数可以放在任意位置，yarn 的 global 必须在 add 前面
yarn global add hexo-cli
```

## 初始化hexo

```bash
# <folder> 指的是你的 hexo blog 文件夹位置，不指定的话默认为当前文件夹
hexo init <folder>
cd <folder>
```

如此就完成了hexo的初始化工作

## 将本博客下载到本地

如果你之前已经有 blog ，想要在当前系统中继续写作，那么就需要把远程仓库 clone 下来，再进行迁移

不知道为什么，直接 clone 下来，不用 hexo 初始化，hexo 会不认识这个 blog 文件夹，因此上面的安装步骤必不可少

```shell
git clone https://github.com/<UserName>/<RepoName>
```

然后在Windows下，需要用文件管理器将clone下来的东西全部覆盖复制到初始化好的文件夹里去，而在linux中，需要使用

```shell
cp -r blog/* <folder>
cp -r blog/.git <folder>
```

来复制，记住一定要执行下面这行，不然只执行上一行不会复制隐藏文件过去

之后安装插件，如果是克隆下来而非全新安装，则需要执行

```shell
yarn
```

来安装插件，而如果是重新安装，则需要手动安装需要的插件。( 这里安装的插件因人而异，并且一定要看插件的文档来安装与配置，以下是我个人使用的一些插件 )

```shell
yarn add hexo-generator-searchdb
yarn add hexo-generator-feed
yarn add hexo-reference
yarn add hexo-filter-mathjax
```

## 本地部署

部署本博客非常简单，只需要执行

```shell
hexo g
```

即可，在 blog 下的 public 文件夹中就能找到生成的文件
