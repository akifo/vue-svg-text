import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const IMAGE_LIST = [
  {
    name: 'cafe',
    src: require('@/assets/img/image/cafe.jpg')
  },
  {
    name: 'dolphin',
    src: require('@/assets/img/image/dolphin.jpg')
  },
  {
    name: 'fire',
    src: require('@/assets/img/image/fire.jpg')
  }
]

const state = {
  imageList: IMAGE_LIST,
  currentImageName: 'cafe'
}

const getters = {
  imageList: state => state.imageList,
  currentImage: state => {
    const image = state.imageList.find(i => i.name === state.currentImageName)
    return image
  }
}

const mutations = {
  SET_CURRENT_IMAGE_NAME(state, name) {
    state.currentImageName = name
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
