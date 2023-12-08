### 调试准备工作
1. github pull源码 & npm i
2. 在项目的example中建立demo文件夹编写调试脚本
3. vscode中 配置node调试的launch.json
```
 {
    // 使用 IntelliSense 了解相关属性。 
    // 悬停以查看现有属性的描述。
    // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "启动程序",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}/examples/demo/build.js",
        }
    ]
}
```