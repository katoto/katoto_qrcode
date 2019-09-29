<template>
  <div ref="wrap">
    <div :style="leftSwitch" v-if="isHorizontal" :class="leftSwitchClass" @click="leftSwitchClick">
      <slot name="left-switch"></slot>
    </div>
    <div :style="rightSwitch" v-if="isHorizontal" :class="rightSwitchClass" @click="rightSwitchClick">
      <slot name="right-switch"></slot>
    </div>
    <div ref="realBox" :style="pos" @mouseenter="enter" @mouseleave="leave" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <div ref="slotList" :style="float">
        <slot></slot>
      </div>
      <div v-html="copyHtml" :style="float"></div>
    </div>
  </div>
</template>
<script>
import QRCode from '../../libs/qrcode.min.js'
export default {
  name: 'katoto-scroll',
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
    console.log(QRCode)
    console.log(QRCode)
  },
  watch: {
    data (newData, oldData) {
    }
  },
  beforeDestroy () {
  }
}
</script>