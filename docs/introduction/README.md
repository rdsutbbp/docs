# rdsutbbp

区块链 BaaS 平台下的资源委托系统

Resource Delegation System Under the Blockchain BaaS Platform.

在本次毕业设计中, 集成了软件开发过程中包括从设计, 开发实现, 运维等各个方面的内容, 用一年的实习经验完成此次毕业设计, 并对相关实现进一步优化, 为了提升自身的水平以及反补在公司所做的相关工作, 本系统也将持续维护更新, 并不断的优化系统, 

## 资源委托系统介绍

区块链服务的部署是及其复杂的, 为了满足企业用户一键式部署区块链资源, 我们需要设计一种平台, 能够通过让用户仅通过少量配置即可满足对区块链服务的部署, 更多的精力花在区块链业务之上.

我们知道部署一个服务, 首先是需要主机资源, 而主机资源的类型繁多, 分为以下三大类:

* 物理机
* 虚拟机
* 容器集群

区块链资源同样非常多, 为了满足企业用户在不同主机资源下适配不同的区块链底层平台, 需要抽象出资源委托系统, 将其与主要框架解耦, 这样不仅能提高开发效率, 更是提高了系统部署后的维护工作.

类似于电脑, cpu 是核心, 那么 usb 接口即是抽象出来的资源委托系统, 那么键盘鼠标等设备即是具体的资源委托系统实现.

![](https://resource.gocloudcoder.com/rdsutbbp-module.drawio.svg)

## deploy

[deploy](https://github.com/rdsutbbp/deploy) 用于部署系统所有需要的服务, 采用 docker-compose 一键部署.

### 第三方服务
* mysql
* nats
* minio
* etcd

### 系统服务

* core
* stdb
  
## core

资源委托系统核心服务 [core](https://github.com/rdsutbbp/core), 采用 Go 语言编写.


## delegation-host-colocation

主机委托系统 [colocation](https://github.com/rdsutbbp/delegation-host-colocation) 的实现

## stdb

资源委托系统标准后端服务 [stdb](https://github.com/rdsutbbp/stdb) , 采用 java 语言编写。



