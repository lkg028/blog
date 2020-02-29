---
title: 使用 zplug 作为 zsh 插件管理器
tags:
    - linux
date: 2020-02-07 16:35:39
---


## zplug 简介

根据[官网](http://zplug.github.io)上的简介， zplug 是一款下一代的 zsh 插件管理器（听起来就很厉害的样子）

> A next-generation plugin manager for zsh

它非常强大，能够管理几乎所有的事情，也非常快速，安装也很简单，个人非常推荐使用

## 安装

### 推荐安装方法

```shell
curl -sL --proto-redir -all,https https://raw.githubusercontent.com/zplug/installer/master/installer.zsh | zsh
```

### Arch

如果使用的是 Arch Linux 的话，可以使用 aur 中的`zplug` 包安装，不过使用这种方式安装的话就你的 `.zshrc` 文件就不能在别的发行版上通用了，因此可以考虑不用这种方式安装，而使用推荐方法

## 简单配置

`zplug` 的自定义能力十分强大，这里只简单介绍一些

```bash
# 自动安装 zplug
if [[ ! -d ~/.zplug ]]; then
  git clone https://github.com/zplug/zplug ~/.zplug
  source ~/.zplug/init.zsh && zplug update --self
fi

# 重要
source $HOME/.zplug/init.zsh

# 使用双引号将插件名称括起来，防止特殊字符导致的错误
# 例子：
zplug "zsh-users/zsh-syntax-highlighting"

# 如果要安装 oh-my-zsh 的插件
zplug "plugins/git",  from:oh-my-zsh, as:plugin
zplug "plugins/brew", from:oh-my-zsh

# 安装 zsh 主题
zplug romkatv/powerlevel10k, as:theme, depth:1

# 检查插件是否已被安装，并安装缺失的插件
if ! zplug check --verbose; then
    printf "Install? [y/N]: "
    if read -q; then
        echo; zplug install
    else
        echo
    fi
fi

# 结束配置并装载
zplug load

#然后再写其他 zshrc 的配置内容

```

## 总结

`zplug` 是我无意中找到的一款 zsh 插件管理器，但是一用上就发现了它的优秀之处，并且配置起来很方便，因而十分建议现在就开始使用它

