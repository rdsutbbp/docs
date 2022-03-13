# docset

## 本地部署测试

```shell
git clone https://github.com/rdsutbbp/docset.git
cd docset
docker run -d -p 88:80 -v $PWD/docs/.vuepress/dist:/usr/share/nginx/html --name docset-rdsutbbp nginx
```

## 运行

```shell
yarn
# or npm i

npm run docs:dev
```

## 打包

```shell
npm run docs:build
```

将生成 docs/.vuepress/dist 可直接在服务器上部署

## devops

采用 github actions, 提交后将自动部署到服务器上

访问: http://rdsutbbp.jaronnie.com