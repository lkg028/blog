---
title: 记录生活，分享点滴：通过 Hexo 搭建与使用个人博客
tags:
	- blog
date: 2020-03-05 22:26:30
---

个人博客，一个曾经十分火热的名词，但是在如今似乎已经冷却了下来。究其原因，可能是因为读者越来越喜欢阅读由机器算法推荐的各种内容，因为更加符合他们的胃口，也永远不会有刷完的时候；而创作者则更倾向于使用类似知乎，简书，微信公众号这样的平台来分享，而不是通过自己搭建个人博客。

<!-- more -->

## 为什么要使用个人博客

在我看来，这一切并不代表着个人博客的终结。博客虽说是用来分享的平台，但我觉得更是对于生活的记录总结。博客不一定非要有人来看。没事写写文章，过一段时间后自己回顾自己所写的的博文，会心一笑，岂不美哉。 也因此，即使没有观众，我还是非常喜欢使用个人博客的。

不用注册众多平台的帐号，不用担心审核问题，不用担心文章毫无征兆地消失，能够展现自我，畅所欲言。不仅如此，由于博客完全是个人搭建的，因此所有的内容都可以自定义，把它变成我想要的样子。对于我这种喜欢折腾的人来说，还是非常有吸引力的。

## 平台的选择

对于个人博客的搭建，其实有着非常多的选择余地，像动态的 Typecho，WordPress 等，还有静态的站点，如 Hugo，Jekyll 等。 

这些选择各有各的优缺点，就比如动态站点拥有非常强大的交互能力，能够根据需求返回截然不同的页面，而毋须提前将其全部准备好，但是对服务器要求会比较高一些；而静态站点则正好相反，如果比较复杂，那么管理起来会比较困难，但是访问速度会非常快速（相对而言）。 

此外，动态站点要么付费搭建在他人服务器上，要么自己购买服务器搭建，总而言之要么寄人篱下，要么费时费力，而静态站点则可以免费搭建在像 GitHub 这样的代码托管网站上，相对更为简单便捷。 

而我选择了使用 [Hexo](https://hexo.io/zh-cn/) 来搭建我的个人博客。

![img](https://cdn.sspai.com/2020/03/05/fbeb87d138cc1c32f7c3f5814c79c024.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)Hexo 中文官网

在我看来，它相对于其他的框架，有着以下优势：

1. ﻿这是一款快速，简洁的博客框架，个人感觉操作起来相对其他静态博客框架更为便捷，访问起来非常迅速
2. ﻿完全免费，由于是静态的，不需要自建服务器，也不需要授权费用，相对于动态博客而言有着非常大的优势
3. ﻿官网主页和文档页面有着完整的中文翻译，因此对于新手阅读起来非常友好
4. 有着庞大的社区支持，插件主题等都十分丰富，自定义能力非常强大

鉴于以上几点原因，我个人比较推荐使用 Hexo 来搭建个人博客。

## 搭建前的准备工作

虽然之前提到， Hexo 的搭建非常简单，不过还是需要先提前做一系列准备工作的。接下来的操作都是在命令行中进行的，因此 Windows 用户需要打开 cmd，Mac 和 Linux 用户需要打开终端模拟器。

#### Git

Git 的安装可以在 [这里](https://git-scm.com/downloads) 找到，我就不提太多了，主要说一下安装完成后的各项配置。 Git 在提交更改的时候，会需要提交者的邮箱和用户名，这可以通过以下命令来设置：

```
git config --global user.email "Your email 你的邮箱"
git config --global user.name "Your username 你的用户名"
```

这样会进行全局设置，即以后不管在什么项目下，都会使用这样的配置来提交。而如果想要单独为某一个项目（例如个人博客）配置，可以删除 --global 选项，但需要在项目文件夹中进行。

#### Node.js

接下来要安装的是 Node.js 。Node.js 的安装步骤在 [官网](https://nodejs.org/en/download/) 上有，这里需要提一下的就是，Node.js 自带 npm 包管理器，但是因为一些原因（具体展开太长了这里就不做介绍了）我并不是很喜欢使用，而是使用 Yarn 代替。 

Yarn 的安装方法也在 [官网](https://classic.yarnpkg.com/en/docs/install) 有，请根据系统选择安装方法。需要注意的是， 要记得按照官网说明配置好环境变量，另外不要安装 Yarn 2，因为目前还存在一定的问题，不建议现在就使用。Yarn 的使用同 npm 有一定微小的区别，因此我在下文的安装配置中，会将两种包管理器的使用都写出来。 

## 正式安装

进行了那么多前期准备工作，终于开始正式在本地安装 Hexo 了。 

打开 Hexo 的官网，应该映入眼帘的就是一条命令： `npm install hexo-cli -g` ，这是通过 npm 安装的方法。如果在 Linux 下安装，由于安装的是全局模块，记住需要 root 权限才行，不然会报错。 

如果使用 Yarn 进行安装，那么安装命令将会是： `yarn global add hexo-cli` ，其中记住 global 参数必须在 add 的前面，这样进行的全局安装是安装在用户家目录下的，因此不需要 root 权限。 

![img](https://cdn.sspai.com/2020/03/05/343f135a386c5f0b45c867aacb5b86e0.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)通过 Yarn 安装 Hexo

接下来是初始化 hexo 文件夹，之后所有操作都会在这个文件夹中进行。后文所指的根目录就是代指这里。 

通过 `hexo init` 命令来初始化，之后可以加上文件夹名称来制定初始化的文件夹位置，不然默认将会在当前文件夹进行初始化。初始化的目录下不能有任何文件，否则会报错。

![img](https://cdn.sspai.com/2020/03/05/9225cbb5e0fbfb6b7e63a4143d56f098.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)将 temp 目录做为博客根目录

下图是使用 Yarn 安装的成果，如果使用的是 npm 进行安装，那么 yarn.lock 文件将被 package-lock.json 所替代

![img](https://cdn.sspai.com/2020/03/05/0d5f8b8d3f51e1ef423210b3ea4ac3d6.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)Hexo 根目录

## 简单介绍

完成后进入该文件夹，重要的有以下几个文件夹和文件：

1. **_config.yml** 文件，配置了博客的各项设置
2. **source** 文件夹，里面有所有的博文或是独立页面
3. **themes** 文件夹，包含了一个或多个主题文件夹

接下去我来一一详细介绍一下：

#### _config.yml

这个文件使用的是 yaml 语法写成的，正常情况下不用掌握任何变成知识也能看懂，注意，# 后的内容是注释，将会被无视。文件中我认为比较重要的是 Site， theme 还有 deploy 这几块。deploy 将在之后讲到部署的时候再提。这里就简单说明一下 Site 和 theme

```
title: Hexo    # title 的作用是在浏览其中打开时，显示在标签页上的标题
subtitle: ''    # 副标题在某些主题中会被显示，但更有可能直接无视
description: ''    # 用于被搜索引擎捕获时告知其站点的基本信息
keywords:      # 网站关键词
author: John Doe    # 作者名称，
language: en    # 网站语言，主要看主题是否支持，同时具体书写方式也因主题而异
timezone: ''    # 设置时区，中国可以直接写成 Asia/Shanghai
```

而 theme 则是用于设置博客所使用的主题，具体内容需要完全符合 themes 文件夹中主题文件夹的名称。 

另外需要提醒的是，yaml 语法中， :（冒号）后面需要加上空格，不然会报错。 

#### source 文件夹

在一开始，可能其中只有 _posts 文件夹，这里面是用来存放发表后的博文的，之后如果生成过草稿文件，那么会多出来一个 _drafts 文件夹，用于存放草稿，同时如果生成过独立页面，还会生成与页面名称相同的文件夹。

#### themes 文件夹

这里面存放了所有的主题，每个主题一个文件夹，具体名称可以随意修改，但修改后一定要修改根目录下的 _config.yml 中 theme 条目，不然会出现错误。

一开始 Hexo 自带的主题名为 landscape，因此能够在 themes 文件夹下找到同名文件夹。 

之前提到 _config.yml 中的 language 选项，如果在主题文件夹下发现了 languages 文件夹，那么说明这个主题是支持多种语言的。进入该文件夹，就能发现一些 <language_name>.yml 文件，这时候就需要修改 language 为文件名中的 <language_name> ，例如有 zh.yml，就需要将 language 修改为 zh，没有 zh 但有 zh_cn 时就需要将 zh 改为 zh_cn 。

## Hexo 命令使用

当我们在本地搭建完成后，就需要学习如何具体使用 Hexo 博客框架了。只需要通过几个简单的命令，就可以非常便捷地进行各项操作。

#### hexo init

就是之前初始化文件夹使用到的命令，这里就不多做解释了。

#### hexo new

这个命令是新建一篇博文，具体的使用方法为：`hexo new [layout] `，其中 layout 为可选项，选择这篇博文的布局，常见的有 post 和 draft 两种，post 会将其放置在 _posts 文件夹中，而 draft 则在 _drafts 中。如果不填写，默认将会选择 post。title 则是必选项，会做为文件名称，生成的文件就是 `<title>.md`。

![img](https://cdn.sspai.com/2020/03/05/9af3110a1d0a4c0b1dbf4a556cfdb4db.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

####  hexo publish

 发布命令，会将草稿发布出去，使用方法为 `hexo publish [layout] ` ，layout 可以选择发布时使用的模板，默认为 post。<filename> 则是草稿的文件名，注意不包括后缀名

![img](https://cdn.sspai.com/2020/03/05/b35f9aa62d3a1d7d2bc83570d7e36a14.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

#### hexo server 

这个命令将会启动一个本地服务器，将你的博客暂时可以从本地直接访问，方便查看效果。这个命令执行后，打开浏览器，访问 http://localhost:4000 即可。如果想要停止，按下 ctrl＋c 终止命令。



![img](https://cdn.sspai.com/2020/03/05/65c2757460b1c20c23128400b77b3a10.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)



![img](https://cdn.sspai.com/2020/03/05/44d82b7249e693e54745623d45b6294d.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

> 可被简写为 `hexo s` 。

#### hexo generate 与 hexo deploy 

 这两个命令和部署有关，会在具体将如何部署时展开讲解。

## 文章写作

明白了如何使用 Hexo 生成想要的文件以及如何预览之后，就可以开始进行博文的撰写了。在 source 目录下，可以找到所有生成的文章，可以使用任何喜欢的文本编辑器进行编辑。Hexo 的博文使用的是 markdown 来撰写的，当然也可以插入一些 HTML 代码来进行自定义。 

#### Front-matter

Hexo 每一篇生成的文章开头都会有一段由两行 「---」包裹起来的内容，称为 Front-matter

```
---
title: my-test-draft
date: 2020-03-05 13:47:52
tags:
---
```

title 指的是博文的标题，默认生成的标题与使用 hexo new 命令中输入的 `<title>` 相同，但是可以自行更改。

date 指的是文件被发布的时间，如果是直接生成的时间，那就与生成时间相同，如果是由 draft 通过 hexo publish 命令发布的，那就与 publish 的时间相同。

tags 指的是文章的标签，可以打上多个，如下所示：

```
tags:
    - tag1
    - tag2
    - tag3
```

当然如果不需要使用多个 tag 的情况下，可以直接将唯一的 tag 直接加到 tags 后面，就像这样： 

```
tags: onlyTag 
```

这段内容必须在每篇博文的最顶端，上面可以有空行但是不可以有其他文字，不然会出现错误。

#### 写作技巧 

当然不是指撰写博文内容的技巧，而是一些解决正常写作时不会遇到问题的小技巧。

其一是大标题，由于 Front-matter 中已经有 title ，因此很多主题在渲染的时候，会直接将 title 提取出来做为标题，这样的好处就在于能够保证每一篇博文都有标题，但是如果作者在写作时，依然按照以前的习惯在开头使用 「# 大标题」 这样的书写方式，就会渲染出两个标题，很不美观。因此建议不要再在文章中重复写一遍标题了，而是可以直接进行内容写作。

![img](https://cdn.sspai.com/2020/03/05/3ec582fd624653fbb14c03f26456a775.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

![img](https://cdn.sspai.com/2020/03/05/2afd41fdd156f0227caf26809d6cef77.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

其二就是摘要。每一篇生成的博文应该都会出现在 Hexo 的主页上。如果不使用摘要，那么每一篇文章都会全文显示在主页上，这是很不美观，也很浪费资源的一种方式。如果使用摘要，那么主页上只会显示一小段内容，不仅吸引了读者，还能使得整个博客网站更加优雅。摘要必须写在文章开头，紧接着文件头部。当摘要写作完成后，另起一行输入 `` 即可，这样上面的内容就能被识别，并显示在主页上。不过，这段摘要同样也会在博文页面中被显示出来，需要注意。

![img](https://cdn.sspai.com/2020/03/05/ea1838cfd33e57fd4119c76ccee92707.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)整个首页就被一篇文章所占据

![img](https://cdn.sspai.com/2020/03/05/e4f1538a2c1543d27645f6b08ebb2761.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)这样显然更美观

## 博客部署

写完了文章，自然是要把它部署到网站上去了。文章一开始提到了静态站点的一个优势就是可以免费部署到 GitHub 这种代码托管网站上面。当然如果不差钱，或者已经有自己的服务器，那么想要部署上去也不是不可以。不过这里就先介绍如何部署到 GitHub Pages 上了。

#### 远程仓库配置

首先，需要注册一个 GitHub 帐号（具体怎么注册我应该不用写了吧），然后登录进去后，在顶栏右侧有一个加号，展开下面有一个 New repository 选项，选择它，就可以进入仓库创建页面了。

![img](https://cdn.sspai.com/2020/03/05/f056cdeb6aef74e2cacf458270c28bc1.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

其中，Repository name 一定要填写为 <Username>.github.io ，必须和这个一样，否则不会生成 GitHub Pages。仓库类型要选择为公开 Public，其他内容都毋须改动，最后选择 Create repository 创建仓库。 

![img](https://cdn.sspai.com/2020/03/05/2982e9093188f4a1106e559979626297.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

完成后应该会看到这样一个界面，有两种选择部署，建议不想折腾的使用 HTTPS （但是每次部署都需要输入用户名与密码）。不过下面先介绍一下 SSH 要进行的额外配置，不需要的可以直接跳过这段。

![img](https://cdn.sspai.com/2020/03/05/ed6ad6d7edad6a7be24251a162744ab1.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)要注意默认是 SSH 方式

首先，Windows 用户打开安装完 Git 后自动安装的 Git Bash，而 Mac 或 Linux 用户直接打开终端模拟器即可。在其中输入 `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"` ，将其中的邮箱换成自己的。接下来会出现一系列的选项，直接回车保持默认即可。这样一来就在家目录下生成了 .ssh 这样一个文件夹。

> Windows 用户的家目录在 C 盘的 Users 目录下的 <Username>
>
> Mac 用户的家目录在 /users/<Username>
>
> Linux 用户的家目录在 /home/<Username>
>
> 要快速跳转，需要执行 `cd ~` 命令

![img](https://cdn.sspai.com/2020/03/05/823705aa2002fc3c631e41a57cd3f2a9.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)我这里因为是演示用，邮箱就不换了

打开文件夹，会看到里面有 id_rsa 和 id_rsa.pub 两个文件，前者为私钥，需要小心保存在本地，千万不能丢失，后者为公钥，是要上传到 GitHub 服务器上使用的。（Windows 下可能会奇怪地把 .pub 格式与 office 套件关联，请右键选择直接用记事本打开） 

然后再回到 GitHub ，点开顶栏最右侧头像，选择进入 Settings ，再在左侧 Personal Settings 中进入 SSH and GPG keys，选择 New SSH key，Title 随意填写一个自己能记得住的名字，再在 Key 中复制进刚刚生成的 id_rsa.pub 中的内容，点按 Add SSH key 即添加完毕。

![img](https://cdn.sspai.com/2020/03/05/0086d46e2ca5fcd85e4f0db11f08361b.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

![img](https://cdn.sspai.com/2020/03/05/5701c6b70ddb143c11b48607f3e483a4.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

然后，回到仓库页面。

根据选择的是 HTTPS 还是 SSH，Quick setup 栏下生成的地址信息会有所不同。但是都不需要管，直接复制下来即可。

#### 本地配置

打开本地的 _config.yml，找到 deploy （正常情况下在文件最后），将其修改为：

```
deploy:
    type: git
    repo: <刚刚复制下来的内容>
    branch: master
```

再找到 URL 下的 url（在文件开头处），将其修改为

```
#URL
url: https://<username>.github.io
```

然后在命令行中，进入博客根目录，输入 `yarn add hexo-deployer-git`（使用 Yarn）或是 `npm install hexo-deployer-git --save` （使用 npm）。这样本地配置也就完成了。 

![img](https://cdn.sspai.com/2020/03/05/3374cebf48955944b1ac61dca404b2ee.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)可能会需要等待一会儿

这里有一个非常大的坑，根据官网上的步骤，使用 GitHub 时，branch 需要填写为 gh-pages，但是由于 GitHub Pages 现在只允许 Master branch 生成页面，使用官网上的配置会出错。解决方法就是将它改为 master。

由于官网使用的评论系统是 Disqus，国内无法访问，而解决方法被放在了评论区，所以我在这里必须提一下，防止有人直接去看官网文档，出现了问题不知道如何解决的情况。

最后，在命令行中输入 `hexo deploy`，就会看到非常长的一串输出，结束后就推送完成了。进到 GitHub 页面查看是否大致是这样子的文件结构

![img](https://cdn.sspai.com/2020/03/05/07fd60d4472228dfc24c45998a32203c.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

如果是的话，那么就可以在浏览器中打开 https://<username>.github.io 来查看博客页面了。 如果页面 404，那么过几分钟后再尝试一下。如果依然不行，那么可以先查看一下自己之前有没有什么错误之处，当然 GitHub 官方有时也会发送邮件告诉你部署错误，这时候可以按照邮件内容排查错误。 那么至此，博客的第一次推送部署就完成了。 

使用 `hexo deploy` 命令会同时调用 `hexo generate` 命令，在博客根目录生成一个 public 文件夹，里面的文件就是推送到 GitHub 上的文件。之后想要更新博客内容的话，建议首先使用 `hexo clean` 命令清除掉 public 文件夹，然后再使用 `hexo deploy` 推送。

> `hexo deploy` 可被简写为 `hexo d` ，`hexo generate` 可被简写为 `hexo g` ，`hexo clean` 可被简写为 `hexo c` 。

## 主题与插件

我在最开始提到了 Hexo 具有很强的自定义能力，可以打开 Hexo 的官网，顶栏上就有 [Themes](https://hexo.io/themes/) 和 [Plugins](https://hexo.io/plugins/) 的入口。

要安装主题，首先需要去 Themes 页面找到一款心仪的主题（可以通过点击图片来访问主题的演示站点），然后点击主题的名称进入主题的 GitHub 页面。如果熟悉 Git 的操作，可以通过 git clone 命令将其克隆至博客根目录下的 themes 文件夹，或者通过 GitHub 自带的下载，下载源码的 zip 包，将其解压缩至 themes 文件夹中。

git clone 命令：`git clone https://github.com//` 

![img](https://cdn.sspai.com/2020/03/05/f925f4098bc432b38e18faa873b42ade.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

每个主题文件夹中，都有着自己的 _config.yml，管理着这个主题的一些配置，因此如果想要切换主题，在下载下来后，**一定**要到文件夹中去查看 _config.yml 的配置，并进行自己的个性化修改。同时，GitHub 的仓库页面会显示这个仓库的 README.md 文件，这是这个仓库的说明文件，建议在使用这个主题前提前阅读这个文件，并按照说明安装。

而如果是插件，那么就与主题的安装大不相同了。先找到需要的插件，然后再进入到插件的 GitHub 页面，一般在 README.md 中都会详细介绍如何安装。

Hexo 的插件多由 node.js 写成，因此介绍的安装方法基本都是在博客目录下执行 `npm install  --save` 。如果使用 Yarn 安装，那么需要将其改为 `yarn add ` 。当然，很多时候安装插件都需要更改根目录下的 _config.yml 文件，因插件而异。

这边我就小小地推荐几款主题与插件吧，毕竟那么多的主题插件我也没有全部都体验过，只能说一下这些是我用过并且觉得不错的，或是非常知名的几款主题插件

#### 主题

**[A-Ayer](https://github.com/Shen-Yu/hexo-theme-ayer)**

![img](https://cdn.sspai.com/2020/03/05/9625d408a96ccc0a26cdcdcdc9d9f04f.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

这是我如坑后用得最久的一款主题，因为不喜欢那些爆款主题，太容易撞车了，因此就自己在茫茫的主题海中搜索，最后挑中了这款。个人感觉还是非常不错的，外观简洁的同时各种配置也很齐全。

**[NexT](https://github.com/theme-next/hexo-theme-next)**

![img](https://cdn.sspai.com/2020/03/05/c2d4963152826f55ee8821d7691c6d57.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

这就是我所说的爆款主题了，功能非常强大，配置项非常齐备，因此深受喜爱，使用的站点也特别的多。如果不怕撞车，那么毫无疑问这款主题就是最佳的选择了，甚至可以说没有之一。

#### 插件

**[hexo-generator-searchdb](https://github.com/theme-next/hexo-generator-searchdb)**

这款插件被非常多的主题用来制作搜索界面，能够生成整个博客博文的索引以供使用。

**[hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed)**

少数派应该是人均 RSS 用户？（误）
这款插件能够生成 RSS 链接，生成的地址为 <site url>/atom.xml ，例如 yoursite.github.io/atom.xml ，是很好用的一个插件。

**[hexo-reference](https://github.com/quentin-chen/hexo-reference)**

Hexo 默认不支持脚注的 markdown 语法，需要安装这个插件来辅助支持。

具体语法如下：

```
这是一些莫名其妙的话[^1]
[^1]: 这里就是脚注
```

由于脚注语法不知道什么时候就可能会用上，因此也比较建议安装。

**[hexo-filter-mathjax](https://github.com/stevenjoezhang/hexo-filter-mathjax)**

这款插件为 Hexo 的 markdown 开启了数学公式支持，如果对于数学公式有需求的话建议安装（这款插件需要一些额外配置，记得一定要看文档）。

做为 Hexo 的用户，我自己也是写过一个 [主题](https://github.com/Pcrab/hexo-theme-quark) 的，不过在自定义上还有一些 bug ，也比较简陋，因此就不在这里放出来献丑了，如果有兴趣的话可以点进去看看，欢迎 issue 和 pr 。

## 一些最后想说的话

我是从去年入的个人博客的坑，当中尝试过很多不同的方式，也碰到过好不容易写完的博文说没就没了的尴尬场面。但我最后还是选择继续用下去，因为我觉得写博文真的是一件非常快乐的事情，虽然可能没有听众，但是把自己知道的，摸索出来的东西写下来，分享出来，并不单单是想要别人来看，更有一种记录生活的感觉。

如果是像我一样喜欢折腾的人，那么选择自己搭建个人博客，势必会走上一条曲折的道路。自己跟着教程一步步走下来，最后得到的，却也许并不是原先期望的那样。不喜欢折腾的人也许就会将就着用下去，但我倔强地坚持要得到我想要的。自己不断寻找问题，解决问题，那么在解决的那一刻真的是浑身舒畅。但是然后呢？我选择把整个过程或是解决方案记录下来，放在博客里。每次折腾势必会看到，告诉我自己已经解决了那么多的困难，这一次也一定能成功。它能够激励我不断走下去。

那对与不喜欢折腾的人来说呢？这样的记录就毫无意义了吗？显然并不是这样。如我开头所言，将生活记录下来，过一段时间再打开，回想起当时的情形，真的是让我感到很温暖的一件事情。人们喜欢拍照，录像，通过照片与视频将生活记录下来。而我觉得，通过文字记录生活更是一个不错的选择。况且上传到博客上，说不定哪天就有人看到，留下自己的看法，或者能够一起讨论，似乎也很美好。

也因此，我写了这样的一篇文章，希望有更多的人能喜欢上个人博客这样的记录方式。提到自建，许多人的第一反应就是麻烦，复杂，因此我尽可能地详细写了搭建的各个步骤，就是希望能够让更多的人跨过这道门槛，通过个人博客的方式，记录生活，分享生活。