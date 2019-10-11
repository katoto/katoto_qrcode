<template>
  <p>123123</p>
</template>
<script>
// import QRCode from './qrCode_component'
import QRCode from 'qrcodejs2'

export default {
  data () {
    return {
      isHover: false // mouseenter mouseleave 控制this._move()的开关
    }
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
  },
  methods: {
      // utils func
  },
  mounted () {
    // var oQRCode = new QRCode("test", {
	  //    text : "http://naver.com",
	  //    width : 128,
	  //    height : 128
    // });
    console.log(QRCode)
  },
  beforeDestroy () {
  }
}
</script>