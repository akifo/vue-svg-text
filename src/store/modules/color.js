import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const COLOR_LIST = [
  {
    angle: 45,
    colorStopList: [
      {
        offset: 0.1,
        color: '#2ecc71'
      },
      {
        offset: 0.9,
        color: '#3498db'
      }
    ]
  },
  {
    angle: 80,
    colorStopList: [
      {
        offset: 0.1,
        color: '#9b59b6'
      },
      {
        offset: 0.9,
        color: '#c0392b'
      }
    ]
  },
  {
    angle: 150,
    colorStopList: [
      {
        offset: 0.1,
        color: '#d35400'
      },
      {
        offset: 0.9,
        color: '#2c3e50'
      }
    ]
  },
  {
    angle: 0,
    colorStopList: [
      {
        offset: 0.1,
        color: '#2980b9'
      },
      {
        offset: 0.9,
        color: '#27ae60'
      }
    ]
  }
]

const state = {
  colorList: COLOR_LIST,
  currentColorIndex: 0
}

const getters = {
  colorList: state => {
    return state.colorList.map(color => {
      color.colorStopListForCss = color.colorStopList
        .map(c => {
          return `${c.color} ${c.offset * 100}%`
        })
        .join(', ')
      return color
    })
  },
  currentColor: state => {
    return state.colorList[state.currentColorIndex]
  }
}

const mutations = {
  SET_CURRENT_COLOR_INDEX(state, index) {
    state.currentColorIndex = index
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
