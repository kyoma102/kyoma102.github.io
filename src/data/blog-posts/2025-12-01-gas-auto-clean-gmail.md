---
title: 使用 GAS 批量标记 Gmail 邮件为已读
slug: gas-auto-clean-gmail
publishDate: Dec 01, 2025
category: tech
---

Gmail 里躺着 1000 多封未读邮件，需要自动批量标记为已读的方法。于是从 ChatGPT 那里第一次了解到 Google Apps Script（GAS），可以用 Google 自家的云端脚本实现这个需求。

## 什么是 Google Apps Script

「Google Apps Script（GAS）是一种基于 JavaScript 的**云端脚本语言**，由 Google 开发，旨在为 Google Workspace（前称 G Suite）平台提供便捷的自动化、集成和扩展能力。简单来说，它是一种让用户能够编写代码来控制和连接 Google 服务（如 Gmail、Google Docs、Sheets、Calendar、Drive 等）的工具。」

## 如何用 GAS 批量已读 Gmail 的未读邮件

1. 传送门：[https://script.google.com](https://script.google.com/)
2. 新建项目

![image.png](/assets/gas-tutorial/image.png)

3. 编辑器 - 文件，新建一个脚本，粘贴以下代码：

```jsx
function markAllEmailsAsRead() {
  const batchSize = 100; // 每次最多处理 100 个线程，超过会报错
  let threads;

  do {
    threads = GmailApp.search("is:unread", 0, batchSize);

    if (threads.length > 0) {
      GmailApp.markThreadsRead(threads);
      Logger.log(`已处理并标记为已读 ${threads.length} 封邮件`);
    }
  } while (threads.length > 0);

  Logger.log("所有未读邮件已标记为已读。");
}
```

![image 2](/assets/gas-tutorial/image_1.png)

4. 点击运行，执行日志会有 log 输出，等待脚本执行完毕即可

![image.png](/assets/gas-tutorial/image_2.png)