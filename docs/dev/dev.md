# 开发规范

针对研发人员的代码开发规范。即接到一个需求或者 bug ，开发代码，最终把代码提交的整个过程，

请一定仔细阅读本文，严格按照规范来执行。

## 获取代码并启动运行

登录 github ，进入项目主页 https://github.com/wangfupeng1988/ts-test-0427 ，fork 项目到自己的空间。

git clone 刚刚 fork 的项目。进入项目目录，确保 `git config user.name` 和 `git config user.email` 是自己的用户名和邮箱，如果不是就修改一下。

进入项目目录，运行 `npm install` 安装所有 npm 插件。

运行 `npm run dev` 可启动项目。

## 开发代码

开发代码时，要保证自己的代码，和最新的 master 同步了？？？？不同仓库如何同步？

### 创建新分支

git 分支规范如下

- `master` 主干分支，当前正在运行的代码。**不可**直接往 `master` 提交代码。
- `dev` 开发分支，当前正在开发、但尚未发布的代码。可以往 `dev` 分支提交 `Pull Request` 。
- `feature-xxx` 新功能分支
- `fix-xxx` 普通 bug 修复分支
- `hotfix-xxx` 线上紧急 bug 修复分支

根据以上规范，创建自己的新分支 `feature-xxx` 或 `fix-xxx` 或 `hotfix-xxx` 。切忌不可不可胡乱取名。

### 编码和测试

写代码，注意两点要求

- 符合编码规范，具体可查看 `.eslintrc.js` ，因为在 `git commit` 时会自动进行 eslint 检查
- 根据 jsdoc 格式编写注释，要让自己的代码变的傻瓜式

### 编写单元测试

编写单元测试和 UI 测试，并运行 `npm run test` 看是否成功。

### 功能测试

待定。。？？？npm link ？？？

但一定要做记录，而且要有规范。

### 编写文档

编写文档，包括开发文档和使用文档

## 提交代码

### git commit

请按照一下步骤提交代码，不要怕麻烦

- `git status` 确认修改的文件，都符合预期
- `git diff` 确认修改的内容，都符合预期
- `git add .`
- `git commit -m "xxx"` 提交代码，此时会自动进行 eslint 和 prettier 的检查和修复，请耐心等待

注意，在执行 `git commit` 之前，**请务必遵守 commit 规范**。如下：

- `feat: xxx` 新功能
- `fix: xxx` bug 修复
- `style: xxx` 修改样式
- `docs: xxx` 修改文档
- `refactor: xxx` 重构某个功能
- `test: xxx` 增加或修改测试用例
- `chore: xxx` 修改辅助功能（如 webpack eslint 等）

例如，你本次 commit 是修复了一个 bug ，那就执行 `git commit -m "fix: 本次修改了哪个 bug"`

PS：有一些工具可以帮助你规范自己的 commit ，如 `commitizen` 。

### git push

把你的分支，提交到远程 github 中。

### Create Pull Request

登录 github ，在自己 fork 的项目中 Create Pull Request ，把自己刚刚提交的分支，申请合并到 wangfupeng1988/ts-test-0427 项目的 `dev` 分支。

注意一定是 `dev` 分支，不能是其他分支！！！

------

- 如何保证自己 fork 的代码，和之前仓库的代码，保持同步？
