import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const SHAPE_LIST = [
  // {
  //   name: 'triangle',
  //   type: 'polygon',
  //   pointsArray: [[50, 0], [0, 100], [100, 100]]
  // },
  // {
  //   name: 'trapezoid',
  //   type: 'polygon',
  //   pointsArray: [[20, 0], [80, 0], [100, 100], [0, 100]]
  // },
  // {
  //   name: 'parallelogram',
  //   type: 'polygon',
  //   pointsArray: [[25, 0], [100, 0], [75, 100], [0, 100]]
  // },
  // {
  //   name: 'rhombus',
  //   type: 'polygon',
  //   pointsArray: [[50, 0], [100, 50], [50, 100], [0, 50]]
  // },
  // {
  //   name: 'pentagon',
  //   type: 'polygon',
  //   pointsArray: [[50, 0], [100, 38], [82, 100], [18, 100], [0, 38]]
  // },
  // {
  //   name: 'hexagon',
  //   type: 'polygon',
  //   pointsArray: [[50, 0], [100, 25], [100, 75], [50, 100], [0, 75], [0, 25]]
  // },
  {
    name: 'square',
    type: 'polygon',
    pointsArray: [[0, 0], [100, 0], [100, 100], [0, 100]]
  },
  {
    name: 'circle',
    type: 'circle',
    pointsArray: []
  }
]

const state = {
  shapeList: SHAPE_LIST,
  currentShapeName: 'circle'
}

const getters = {
  shapeList: state => state.shapeList,
  shapeListWithPoints: state => {
    return state.shapeList.map(shape => {
      const newShape = { ...shape }
      newShape.points = newShape.pointsArray.join(' ')
      return newShape
    })
  },
  currentShape: state => {
    const shape = state.shapeList.find(s => s.name === state.currentShapeName)
    return shape
  },
  currentShapeWithPoints: state => {
    const shape = state.shapeList.find(s => {
      return s.name === state.currentShapeName
    })
    const newShape = { ...shape }
    newShape.points = shape.pointsArray.join(' ')
    return newShape
  }
}

const mutations = {
  SET_CURRENT_SHAPE_NAME(state, name) {
    state.currentShapeName = name
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
