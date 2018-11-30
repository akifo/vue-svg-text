import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const TEXTURE_LIST = [
  {
    name: 'scratch',
    src: require('@/assets/img/texture/scratch.png')
  },
  {
    name: 'tile',
    src: require('@/assets/img/texture/tile.png')
  }
]

const state = {
  textureList: TEXTURE_LIST,
  currentTextureName: 'scratch'
}

const getters = {
  textureList: state => state.textureList,
  currentTexture: state => {
    const texture = state.textureList.find(t => {
      return t.name === state.currentTextureName
    })
    return texture
  }
}

const mutations = {
  SET_CURRENT_TEXTURE_NAME(state, name) {
    state.currentTextureName = name
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
