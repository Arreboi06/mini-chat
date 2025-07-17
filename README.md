<p align="center">
  <img width="128px" src=".github/logo.png" />
</p>
<div  align="center">
<h1>Linyu-Mini</h1>
<p>一个轻量级的在线聊天室系统，支持实时消息交流，适合多场景使用。系统采用轻量级架构，具备快速响应能力，同时提供多种实用功能，如用户登录、消息记录、群组聊天等，确保良好的用户体验和高效的沟通效果</p>
<img src="https://img.shields.io/badge/Vue-3.0-42b983?logo=vue.js&logoColor=42b983">
<img src="https://img.shields.io/badge/Vite-5.0-646cff?logo=vite&logoColor=646cff">
<img src="https://img.shields.io/badge/TailwindCSS-3.x-38bdf8?logo=tailwindcss&logoColor=38bdf8">
<img src="https://img.shields.io/badge/Node.js-20.0-339933?logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/🍍Pinia-2.3-42b983">
</div>

## 介绍

林语Mini（Linyu-mini）是一款基于 Vite 5 和 Vue 3 构建的高性能即时通讯在线聊天系统。系统以轻量化设计为核心，具备快速部署和便捷扩展的特点，适用于企业内部协作、团队沟通以及小型社交平台等多种场景。

## 相关环境

- node版本：v20.12.2
- npm版本：10.5.0

## 技术栈

- Vite 5：一款现代化的前端构建工具，具有超快的热更新速度和极致的构建性能，提供了极佳的开发体验和优化后的生产构建，使前端开发更加高效便捷。

- Vue 3：一种渐进式JavaScript框架，采用响应式数据绑定和组件化开发模式，提供简洁的API和强大的功能，帮助开发者构建高性能、可维护的用户界面。

- WebSocket：一种全双工通信协议，专为实时通信应用设计，能够在客户端和服务器之间保持长连接，支持即时消息的实时推送和低延迟传输，确保系统能够快速响应用户操作。

## 技术亮点：WebRTC 实时音视频通信

本项目集成了 WebRTC（Web Real-Time Communication）技术，实现了浏览器端的实时音视频通话功能。WebRTC 是由 Google 推出的开源项目，支持网页之间直接进行高质量的音视频和数据传输，无需安装插件，具有以下亮点：

### 1. 实时音视频通话

- 支持一对一或多人的实时音视频聊天，延迟低、画质高。
- 通过点对点（P2P）连接，数据无需经过中转服务器，保障通信效率和隐私安全。

### 2. 跨平台兼容

- 兼容主流浏览器（Chrome、Firefox、Edge 等），无需额外安装任何插件或软件。
- 支持移动端和桌面端，用户体验一致。

### 3. 自动网络适应

- WebRTC 内置 NAT 穿透（STUN/TURN）机制，能够适应复杂的网络环境，实现公网、内网用户的无障碍通信。
- 动态调整音视频码率，保证在不同网络条件下的通话质量。

### 4. 安全性高

- 所有音视频数据均通过 SRTP（安全实时传输协议）加密，保障通信内容安全。
- 支持 DTLS（数据报传输层安全协议）进行信令加密，防止中间人攻击。

### 5. 易于集成与扩展

- WebRTC 提供丰富的 API，便于与现有的聊天、协作、文件传输等功能无缝集成。
- 支持屏幕共享、文件传输等高级功能，满足多样化的实时通信需求。

## 项目效果

<table>
  <tr>
      <td width="50%" align="center"><b>浅色</b></td>
      <td width="50%" align="center"><b>深色</b></td>
  </tr>
  <tr>
     <td><img src="https://github.com/user-attachments/assets/7460447a-c0ce-41e4-8753-b4c24c61d29f"/></td>
     <td><img src="https://github.com/user-attachments/assets/d5bb00aa-5d42-43d9-ac86-7d848f22589a"/></td>
  </tr>
  <tr>
     <td><img src="https://github.com/user-attachments/assets/87488c61-d9a8-4ef7-bfee-b1cb08aac74b"/></td>
     <td><img src="https://github.com/user-attachments/assets/9e3e8469-46fc-4c6f-9513-9154ec921c9a"/></td>
  </tr>
  <tr>
     <td><img src="https://github.com/user-attachments/assets/591df13b-0b80-4c64-a437-f377ff2a27d3"/></td>
     <td><img src="https://github.com/user-attachments/assets/e682ca36-44eb-4af0-a1cd-0bfdef7a7935"/></td>
  </tr>
</table>

## 安装与运行

```bash
# 克隆linyu-mini项目
git clone https://github.com/linyu-im/linyu-mini-web.git

# 进入项目目录
cd linyu-mini-web

# 安装依赖
npm install

# 服务运行
npm run dev

# 服务打包
npm run build
```
