# 笔墨 AI 拍照机

## 作品介绍

该项目是一款部署在商业综合体的自助 AI 拍照终端应用（Kiosk）。项目采用 Kotlin/Java 混合开发，基于 MVVM 架构。核心功能包括：调用 Camera2 API 进行实时预览与拍摄、集成后端 AIGC 接口（人脸融合、动漫化、四格拼图）生成定制写真、通过 串口 (SerialPort) 控制补光灯硬件、以及适配多种工业级热升华打印机（DNP, Hiti）实现即时照片输出。系统还集成了支付流程、订单本地持久化管理及断网容错机制，保障设备 7x24 小时无人值守稳定运行。

## 技术栈

Android、Java、Kotlin

## 作品截图

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; width: 100%;">
    <img src="/bimoaicamera/1.jpg" alt="" style="width: 100%; height: auto;">
    <img src="/bimoaicamera/2.jpg" alt="" style="width: 100%; height: auto;">
    <img src="/bimoaicamera/3.jpg" alt="" style="width: 100%; height: auto;">
    <img src="/bimoaicamera/4.jpg" alt="" style="width: 100%; height: auto;">
</div>

## 评价

一开始是前同事用 uniapp 开发的，但是运营一直出现意想不到的 bug，最后用 Android 重构了，并且根据供应商提供的各种 Sdk 实现了硬件之间的对接。
