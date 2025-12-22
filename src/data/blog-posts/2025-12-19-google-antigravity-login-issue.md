---
title: Google Antigravity 登录受限问题与解决实践
slug: google-antigravity-login-issue
publishDate: Dec 19, 2025
category: tech
---

# 代理环境

- 使用美国节点
- 启用 Tun Mode

# Google 账号国家 / 地区

- 如果账号所属国家或地区不符合要求，登录时会提示：
Sorry, this account is ineligible to use Antigravity.
- 可通过以下页面查看当前 Google 账号关联的国家 / 地区：
https://policies.google.com/terms
- 我的 Google 账号所属国家为中国，需要通过 Google 官方表单申请更改国家 / 地区：
https://policies.google.com/country-association-form
- 提交申请后，大约一小时收到 Google 审核通过的邮件

![image.png](/assets/google-antigravity-tutorial/image.png)

# 再次登录

- 地区修改生效后，再次尝试登录 Antigravity，已可以正常进入并使用

![image-copy.png](/assets/google-antigravity-tutorial/image-copy.png)
