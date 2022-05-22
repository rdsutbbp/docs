# deploy

用于部署资源委托系统所有的服务.

## 服务

### 第三方服务

* etcd(系统配置中心)
* minio(远程文件系统)
* myql(关系型数据库)
* harbor(私有化仓库)
* nats(消息中间件)
* centos(centos7 容器)

### 系统服务

* core(核心服务)
* stdb(标准后端服务)

## 使用文档 

* 一键安装服务
    ```shell
    sudo make start
    ```
* 一键卸载服务
    ```shell
    sudo make stop
    ```    
* 停止指定服务
    ```shell
    make stop.core
    ```    
* 启动指定服务
    ```shell
    make start.core
    ```      
* 重启指定服务
    ```shell
    make restart.core
    ```
* 更新指定服务
    ```shell
    make update.core
    ```  




