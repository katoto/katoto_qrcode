<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <qrCode />  
    <katotoQrcode :qrWidth="200" :codeMsg="codeMsg"> </katotoQrcode>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import qrCode from './components/qrcode.vue'
// import katotoQrcode from 'katoto_qrcode'
import katotoQrcode from '../src copy/index'

export default {
  name: 'App',
  components: {
    HelloWorld,
    qrCode,
    katotoQrcode
  },
  data(){
    return{
      codeMsg: ['1', '2', '3']
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
