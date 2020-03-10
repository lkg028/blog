---
title: git 强制从远端仓储拉取代码
tags:
  - git
date: 2020-03-10 16:59:28
---


有时候我会把本地的代码彻底搞乱，因此需要放弃本地修改，选择从远端仓库拉取代码覆盖

<!-- more -->

具体操作如下

```bash
git fetch --all
git reset --hard origin/[branch-name]
git pull
```
