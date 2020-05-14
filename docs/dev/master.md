# 发布项目

针对软件管理者的发布规范。即收集本次的所有代码修改，检查测试，直到最后发布为 npm 新版本的整个过程。

## 收集 PR 合并代码

[任务列表](https://www.teambition.com/project/5eb8b4e2ce8c00002237bb81/tasks/view/all) 中找到“提交 PR”阶段的卡片，这些卡片的 PR 就是本次发布的内容。

确定这些 PR 都是合并到 dev 分支，而非其他分支。

## 代码走查

要重点关注的：

- 代码逻辑是否合理
- 代码注释是否规范且合理
- 单元测试和 UI 测试，用例是否完整
- 开发文档，使用文档，是否齐全

## 合并代码

代码走查没问题的话，就合并 PR 到 dev 。

全部合并完成之后，查看 [travis](https://travis-ci.org/wangfupeng1988/ts-test-0427) 是否执行成功。

## 回归测试

（如何自动部署一个测试环境？？？）

## 发布到 npm

将 dev 代码合并到 master

升级版本，使用 `npm version major|minor|patch` （会自动 commit 并且打 tag ，需要手动 push 到远程）

master 远程代码有改动，自动触发 travis 流程，发布到 npm
