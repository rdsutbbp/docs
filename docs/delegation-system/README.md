# delegation-system

资源委托系统的具体实现. 分为两类:

* 主机委托系统
* 链委托系统

本质上是一个 HTTP 服务, 提供对于实际资源的生命周期管理.

## 主机委托系统

主机又可分为三大类:

* 虚拟机
* 物理机
* 容器集群

主机委托系统抽象接口：

* 创建/停止/启动/重启/删除 主机
* 检查端口
* 开放端口
* 执行命令

```yaml
name:
  id: colocation
  text: 'colocation'
  meta:
    tags: 'host'
  description: '基于物理机的主机委托系统'
version: v1_1_26
actions:
  - id: command-host
    name:
      id: command
      text: "执行命令"
      description: "执行命令"
    target: host
    timeout: 120
    isSystem: true
    tag: 'colocation'
exePath: 'exe/delegation'
id: colocationv1_1_26
```

## 链委托系统

不关心采用何种方式部署

链委托系统抽象接口

* 创建/停止/启动/重启/删除 节点
* 部署/调用/冻结/解冻 合约

## 委托系统打包

```shell
./pack.sh [delegationType] [developTag]
# ./pack.sh colocation test
```

## 委托系统上传

采用 stdb 提供的上传委托系统接口进行上传

```shell
/stdb/api/v1/delegation/upload
```

## 委托系统执行

采用 stdb 提供的委托系统执行接口执行委托系统

```shell
/stdb/api/v1/delegation/exec/{DelegationUUID}/{Action}
```