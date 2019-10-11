import qrCode from './components/qrcode.vue'

qrCode.install = function(Vue, options = {}){
    Vue.component(options.componentName || qrCode.name, qrCode)
}
if(typeof window !== 'undefined' && window.Vue){
    Vue.component(qrCode.name, qrCode)
}

export default qrCode