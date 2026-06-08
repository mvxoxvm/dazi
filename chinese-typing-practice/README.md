# 中文打字练习

一个离线可用的中文打字练习小项目，重点处理中文输入法候选词确认后的判断流程。

## 打开方式

直接打开 `index.html` 即可使用。

也可以在项目目录启动本地静态服务：

```bash
python -m http.server 5173
```

然后访问：

```text
http://127.0.0.1:5173
```

## 已实现

- 短句、短文、诗词、短古文四类中文练习文本
- 常用字拼音模式，覆盖 3500 个一级常用汉字
- 当前字符、正确字符、错误字符实时高亮
- 汉字卡片显示常用普通话拼音，可切换是否显示拼音
- 拼音输入按空格分隔，速度按音节/分钟统计
- 中文输入法组合态处理
- 速度、准确率、用时、进度统计
- 完成后的错字复盘
- 本地历史记录
- 重新开始、换一段、是否包含标点
- 禁止粘贴整段文本
- 水墨纸纹视觉资产和响应式工具布局

## GitHub 参考

- [HKAHYIN/PinyinType](https://github.com/HKAHYIN/PinyinType)：中文拼音打字练习工具，方向最接近本项目。
- [zwsnail/pinyin](https://github.com/zwsnail/pinyin)：面向中文学习者的拼音输入练习。
- [liuhqs/dazi](https://github.com/liuhqs/dazi)：综合打字训练平台，包含中文、拼音和多输入法训练方向。

## 数据来源

- 常用字：[`shengdoushi/common-standard-chinese-characters-table`](https://github.com/shengdoushi/common-standard-chinese-characters-table) 的 `level-1.txt`，共 3500 字。
- 拼音：[`mozillazg/pinyin-data`](https://github.com/mozillazg/pinyin-data) 的 `kMandarin_8105.txt` 常用普通话读音数据。

## 后续扩展

- 自定义练习文本
- 每日目标和连续练习天数
- 错字专项复练
- 更多词库分类
- 拼音声调输入训练
- 双拼方案训练
- React + TypeScript 版本
- 账号、排行榜和云端同步

## GitHub Pages 部署

这是纯静态项目，可以直接部署到 GitHub Pages。

1. 新建一个 GitHub 仓库。
2. 把本目录中的文件提交到仓库根目录。
3. 在仓库 `Settings -> Pages` 中选择 `Deploy from a branch`。
4. 分支选择 `main`，目录选择 `/root`。
5. 保存后等待 GitHub Pages 生成访问地址。
