# rdsutbbp

Resource Delegation System Under the Blockchain BaaS Platform.

![image-20220216112604361](https://resource.gocloudcoder.com/image-20220216112604361.png)

在本次毕业设计中, 集成了软件开发过程中包括从设计, 开发实现, 运维等各个层面的内容, 用一年的实习经验完成此次毕业设计.

## Deploy

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



