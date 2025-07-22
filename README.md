# 🤖 Telegram MCP Server

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Stars](https://img.shields.io/github/stars/guangxiangdebizi/telegram-mcp.svg)](https://github.com/guangxiangdebizi/telegram-mcp/stargazers)

A comprehensive **Telegram Bot API server** built on the **Model Context Protocol (MCP)**, providing seamless integration with Telegram Bot functionality through a modern, modular architecture.

## 🚀 Features

### 📨 Core Messaging
- ✅ **sendMessage** - Send text messages with rich formatting
- ✅ **forwardMessage** - Forward messages between chats
- ✅ **deleteMessage** - Remove messages from chats

### 🎬 Media Support
- ✅ **sendPhoto** - Share images with captions
- ✅ **sendDocument** - Send files and documents
- ✅ **sendVideo** - Share video content
- ✅ **sendAudio** - Send audio files
- ✅ **sendVoice** - Send voice messages

### 📍 Location & Contacts
- ✅ **sendLocation** - Share geographical coordinates
- ✅ **sendContact** - Share contact information

### ✏️ Message Management
- ✅ **editMessageText** - Edit existing text messages
- ✅ **editMessageCaption** - Modify media captions

## 📁 Project Structure

```
telegram-mcp/
├── src/
│   ├── index.js                 # Main entry point
│   └── tools/
│       ├── basic-messaging.js   # Core messaging tools
│       ├── media.js             # Media handling tools
│       ├── location-contact.js  # Location & contact tools
│       └── message-editing.js   # Message editing tools
├── package.json                 # Dependencies & scripts
├── to-do-list.md               # Development roadmap
└── README.md                   # Project documentation
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Telegram Bot Token ([Get one from @BotFather](https://t.me/botfather))

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/guangxiangdebizi/telegram-mcp.git
   cd telegram-mcp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   Create a `.env` file in the root directory:
   ```env
   TELEGRAM_BOT_TOKEN=your_bot_token_here
   ```

4. **Start the server**
   ```bash
   npm start
   ```

🎉 **Server will start on port 8000** and provide MCP protocol interface!

## 📖 API Usage Examples

### Send Text Message
```json
{
  "tool": "telegram_sendMessage",
  "params": {
    "chatId": "123456789",
    "text": "Hello, World! 🌍",
    "parseMode": "Markdown"
  }
}
```

### Send Photo with Caption
```json
{
  "tool": "telegram_sendPhoto",
  "params": {
    "chatId": "123456789",
    "photo": "https://example.com/image.jpg",
    "caption": "Beautiful sunset 🌅"
  }
}
```

### Share Location
```json
{
  "tool": "telegram_sendLocation",
  "params": {
    "chatId": "123456789",
    "latitude": 39.9042,
    "longitude": 116.4074
  }
}
```

### Edit Message
```json
{
  "tool": "telegram_editMessageText",
  "params": {
    "chatId": "123456789",
    "messageId": 42,
    "text": "Updated message content ✨"
  }
}
```

## 🔧 Tech Stack

| Technology | Purpose | Version |
|------------|---------|----------|
| **Node.js** | Runtime Environment | 18+ |
| **node-telegram-bot-api** | Telegram Bot Client | Latest |
| **@modelcontextprotocol/sdk** | MCP Protocol Support | Latest |
| **supergateway** | MCP Server Gateway | Latest |

## 🗺️ Development Roadmap

Check out our [development roadmap](./to-do-list.md) for detailed progress and upcoming features.

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. 🍴 **Fork** the repository
2. 🌿 **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. 💾 **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. 📤 **Push** to the branch (`git push origin feature/amazing-feature`)
5. 🔄 **Open** a Pull Request

### Issues & Bug Reports
Found a bug? Have a feature request? Please [open an issue](https://github.com/guangxiangdebizi/telegram-mcp/issues)!

## 📞 Contact & Support

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Xingyu%20Chen-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/xingyu-chen-b5b3b0313/)
[![Email](https://img.shields.io/badge/Email-guangxiangdebizi%40gmail.com-red?style=for-the-badge&logo=gmail)](mailto:guangxiangdebizi@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-guangxiangdebizi-black?style=for-the-badge&logo=github)](https://github.com/guangxiangdebizi/)

</div>

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## ⚠️ Important Notes

- 🔑 Ensure your **Telegram Bot Token** is properly configured
- 🛡️ Verify your bot has the **necessary permissions** for the operations you want to perform
- 🔒 Keep your bot token **secure** and never commit it to version control

---

<div align="center">

**Made with ❤️ by [Xingyu Chen](https://github.com/guangxiangdebizi)**

⭐ **Star this repo if you find it helpful!**

</div>