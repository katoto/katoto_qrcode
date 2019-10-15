<template>
<div>
  <template v-if="Array.isArray(codeMsg)">
    <div class="qrCode qrCodeLine" v-for="(item, index) in codeMsg" :key="index" 
      :style="{'width': parseInt(qrWidth) + parseInt(scanMargin) + 'px', 'height': parseInt(qrHeight) + parseInt(scanMargin) + 'px'}"></div>
  </template>
  <div v-else class="qrCode qrCodeLine"
    :style="{'width': parseInt(qrWidth) + parseInt(scanMargin) + 'px', 'height': parseInt(qrHeight) + parseInt(scanMargin) + 'px'}"
  ></div>
</div>
</template>
<script>
import QRCode from 'qrcodejs2'

export default {
  name: 'katoto-qrcode',
  props: {
    qrWidth:{
      type: [String , Number],
      default: "200"
    },
    qrHeight:{
      type: [String , Number],
      default: "200"
    },
    colorDark:{
      type: String,
      default: "#000000"
    },
    colorLight: {
      type: String,
      default: "#ffffff"
    },
    codeMsg: {
      type: [String , Array],
      default: "123"
    },
    scanMargin: {
      type: [String , Number],
      default: "20"
    }
  },
  methods: {
      // utils func
    showQRCode(codeMsg = 'hello', dom) {
      setTimeout(() => {
        const qrCode = new QRCode(dom, {
          width: parseInt(this.qrWidth), // 图像宽度
          height: parseInt(this.qrHeight), // 图像高度
          colorDark: this.colorDark, // 前景色
          colorLight: this.colorLight, // 背景色
          correctLevel: QRCode.CorrectLevel.H // 容错级别
        })
        qrCode.clear()
        qrCode.makeCode(codeMsg)
      }, 0)
    },
  },
  mounted () {
    if(Array.isArray(this.codeMsg)){
      this.codeMsg.forEach((msg, index)=>{
        this.showQRCode(msg, document.querySelectorAll('.qrCode')[index])
      })
    } else {
      this.showQRCode(this.codeMsg, document.querySelectorAll('.qrCode')[0])
    }
  }
}
</script>

<style>
  .qrCode, .qrCode img, .qrCode canvas{
    text-align: center;
    margin: auto;
    display: block;
  }
  .qrCodeLine{
    background: linear-gradient(#17161C, #17161C) left top,
    linear-gradient(#17161C, #17161C) left top,
    linear-gradient(#17161C, #17161C) right top,
    linear-gradient(#17161C, #17161C) right top,
    linear-gradient(#17161C, #17161C) right bottom,
    linear-gradient(#17161C, #17161C) right bottom,
    linear-gradient(#17161C, #17161C) left bottom,
    linear-gradient(#17161C, #17161C) left bottom;
    background-repeat: no-repeat;
    background-size: 4px 15px, 15px 4px;
    display: flex;
    margin: 10px auto;
  }
</style>