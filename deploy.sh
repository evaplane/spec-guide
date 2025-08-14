#!/usr/bin/env sh

# 抛出异常信息
set -e

push_addr= `git remote get-url origin`
commit_info = `git describe --all --always --long`
dist_path = `docs/.vuepress/dist`
push_branch = gh-pages

npm run doc:build #生成静态资源站点

cd $dist_path # 跳转到构建好的静态资源站点

git init # 初始化 Git 仓库
git add -A # 添加所有文件
git commit -m "deploy: $commit_info" # 提交并添加 commit 信息
git push -f $push_addr HEAD: $push_branch # 推到 GitHub Pages 分支

cd - # 回到初始工作目录
rm -rf $dist_path # 删除构建好的静态资源站点