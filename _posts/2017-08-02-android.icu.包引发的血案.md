---
layout:     post
title:      android.icu.包引发的血案
subtitle:   android.icu.包引发的血案
date:       2017-08-02
author:     WQ
header-img: img/post-bg-hacker.jpg
catalog: true
tags:
    - Android
    - 自定义控件
    - 版本兼容
	- android.icu
---

最近同事遇到一个自定义控件,在低版本下导致闪退的问题,
原因是加载没有成功,之前以为是使用了高版本Api(似乎是5.0开始引入的),几经排查后,发现是使用的大数字计算的类`BigDecimal` 引入的包不对.
使用的是这个类.

```
android.icu.math.BigDecimal
```


`android.icu.*` 包中包含许多原`java.*` 中的工具类和方法,但只在高版本中可以使用.在导入包时需要注意区分.
就目前看而言,`android.icu.*`中做了一些缓存和优化工作,二者并没有太大的区别

icu下包含的包.
![这里写图片描述](http://img.blog.csdn.net/20170802182802215?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYTk3NjExMjY0Mw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
在使用java.math等包下的类时一定要注意区分.
