# 任务管理规范

项目的所有任务列表 https://www.teambition.com/project/5eb8b4e2ce8c00002237bb81/tasks/view/all

## 创建卡片

收集到需求或者 bug ，可先提交卡片。需写明标题、备注，最好加上链接（如 github issue）和截图。

卡片的负责人可以先不写，可待项目沟通时再确定。

## 需求和设计

项目沟通会时，确定新卡片的**负责人**。修改卡片信息，拖拽卡片到该阶段。

负责人开始编写需求或设计文档。推荐使用腾讯文档等在线文档，方便大家在线查看。**写完之后，将文档链接添加到卡片的备注中**。

如果需求或者 bug 比较明确且一致，项目组成员一致确认之后，可忽略该步，直接进入下一步。

## 开发中

项目沟通会时，会一起讨论已经写完的需求和设计。如果需求和设计有问题，需明确问题，然后重写。如果没问题，则给出**计划完成时间**，并开始开发。修改卡片信息，并拖拽卡片到这个阶段。

负责人需严格按照 [开发规范](./dev.md) 来开发，自测。

## 提交 PR

开发完成，提交代码，创建 Pull Request 。**将 PR 链接添加到卡片备注中**，并拖拽到卡片到该阶段。

这一步很重要，因为每次合并代码，都会找这个阶段卡片的 PR 。其他的 PR 暂不理会。

## 测试中

代码验证通过，检查通过，最终合并到 dev 分支之后。可将卡片拖拽到该阶段。

## 发布

待 npm 版本正式发布之后，可将卡片拖拽到该阶段，并标志为完成。