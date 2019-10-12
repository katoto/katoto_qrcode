# katoto_qrcode
基于qrcodejs的npm包，进行了简易封装，支持多个二维码展示。

###  使用方法
+ 安装
```
npm install --save katoto_qrcode
```
+ 使用 components方式引入

```
<template>
  <div id="app">
    <katotoQrcode :qrWidth="200" :codeMsg="codeMsg"> </katotoQrcode>
  </div>
</template>
<script>
import katotoQrcode from 'katoto_qrcode'
export default {
  components: {
    katotoQrcode
  },
  data(){
    return{
      codeMsg: ['1', '2', '3']
    }
  }
}
</script>
```

###  参数列表

参数名 | 类型 | 默认值 | 说明
---|---|--|--
qrWidth | Number | 200 | 二维码的图像宽度
qrHeight | Number | 200 | 二维码的图像高度
colorDark | String | #000000 | 二维码前景色
colorLight | String | #ffffff | 二维码背景色
codeMsg | String \| Array | 123 | 二维码数据，如果传入的是数组，就展示多个二维码
scanMargin | String \| Number | 20 | 二维码边角的间距, 写0就不展示边角样式

### 效果图
![效果图](https://raw.githubusercontent.com/katoto/katoto_qrcode/master/img.png)

### 参考
[qrcode.js](https://github.com/davidshimjs/qrcodejs/)


### demopage是目录测试目录
