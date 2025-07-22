# Telegram MCP Server

一个基于 Model Context Protocol (MCP) 的 Telegram Bot API 服务器，提供完整的 Telegram Bot 功能集成。

## 功能特性

### 基础消息功能
- ✅ **sendMessage** - 发送文本消息
- ✅ **forwardMessage** - 转发消息
- ✅ **deleteMessage** - 删除消息

### 媒体文件发送
- ✅ **sendPhoto** - 发送图片
- ✅ **sendDocument** - 发送文档
- ✅ **sendVideo** - 发送视频
- ✅ **sendAudio** - 发送音频
- ✅ **sendVoice** - 发送语音消息

### 位置和联系人
- ✅ **sendLocation** - 发送位置信息
- ✅ **sendContact** - 发送联系人信息

### 消息编辑
- ✅ **editMessageText** - 编辑消息文本
- ✅ **editMessageCaption** - 编辑媒体消息标题

## 项目结构

```
telegram-mcp/
├── src/
│   ├── index.js                 # 主入口文件
│   └── tools/
│       ├── basic-messaging.js   # 基础消息工具
│       ├── media.js             # 媒体文件工具
│       ├── location-contact.js  # 位置和联系人工具
│       └── message-editing.js   # 消息编辑工具
├── package.json
├── to-do-list.md
└── README.md
```

## 安装和使用

### 1. 安装依赖
```bash
npm install
```

### 2. 配置环境变量
创建 `.env` 文件并添加你的 Telegram Bot Token：
```
TELEGRAM_BOT_TOKEN=your_bot_token_here
```

### 3. 启动服务器
```bash
npm start
```

服务器将在端口 8000 上启动，并提供 MCP 协议接口。

## API 工具使用示例

### 发送文本消息
```javascript
{
  "tool": "telegram_sendMessage",
  "params": {
    "chatId": "123456789",
    "text": "Hello, World!",
    "parseMode": "Markdown"
  }
}
```

### 发送图片
```javascript
{
  "tool": "telegram_sendPhoto",
  "params": {
    "chatId": "123456789",
    "photo": "https://example.com/image.jpg",
    "caption": "这是一张图片"
  }
}
```

### 发送位置
```javascript
{
  "tool": "telegram_sendLocation",
  "params": {
    "chatId": "123456789",
    "latitude": 39.9042,
    "longitude": 116.4074
  }
}
```

## 技术栈

- **Node.js** - 运行时环境
- **node-telegram-bot-api** - Telegram Bot API 客户端
- **@modelcontextprotocol/sdk** - MCP 协议支持
- **supergateway** - MCP 服务器网关

## 开发计划

查看 [to-do-list.md](./to-do-list.md) 了解详细的开发进度和计划。

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 联系方式

- **LinkedIn**: [Xingyu Chen](https://www.linkedin.com/in/xingyu-chen-b5b3b0313/)
- **Email**: guangxiangdebizi@gmail.com
- **GitHub**: [guangxiangdebizi](https://github.com/guangxiangdebizi/)

## 许可证

MIT License

---

**注意**: 使用前请确保已正确配置 Telegram Bot Token，并且 Bot 具有相应的权限。