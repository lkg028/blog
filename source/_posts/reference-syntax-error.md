---
title: hexo-reference 插件使用的注意事项
tags:
	- blog
date: 2020-03-06 08:09:07
---

之前安装了一款 Hexo 的插件 hexo-reference ，使用下来效果也非常不错，但是使用上有几个问题需要注意。

<!-- more -->

之前写了介绍如何搭建 Hexo 博客的文章，链接在 [这里](https://pcrab.ml/2020/03/05/hexo-tutor/) ，其中有介绍这个插件的部分，但是我在写完介绍脚注语法的部分后，渲染出现了问题，导致介绍的后面所有内容都被选染成了脚注的内容。同时结合之前文章中遇到的问题，总结了以下两点：

1. 尽量不要在文章的**摘要**中写上脚注，不然会在主界面显示，但是点击脚注无法显示或跳转。
2. 在介绍这款插件的时候，需要用其他方式使其无效化（单纯在前面加上反斜杠是无效的），也就意味着必须破坏整体美观，并提醒读者在使用的时候记得删掉加上去的内容。不然后文所有内容都会被当作脚注。