---
title: vscode vim模式caps键映射
date: 2019-12-24 16:27:33
tags:
---

在使用 vscode 的时候，会碰到使用vim插件且将caps键映射为esc键时，按caps键无效的问题

<!-- more -->

## 解决方法

在 vscode 的配置文件中配置如下代码：

```json
"keyboard.dispatch": "keyCode"
```

重启后即可生效
