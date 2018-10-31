import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg组件

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
//一个包含svg文件夹（不包含子文件夹）下面的所有以‘.svg’结尾的能被require请求到的文件上下文
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
