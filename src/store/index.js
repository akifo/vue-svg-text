import Vue from 'vue'
import Vuex from 'vuex'
// modules
import color from './modules/color'
import image from './modules/image'
import shape from './modules/shape'
import texture from './modules/texture'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    color,
    image,
    shape,
    texture
  }
})
