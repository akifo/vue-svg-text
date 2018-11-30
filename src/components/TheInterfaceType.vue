<template>
  <div id="TheInterfaceType">
    <div class="inner">
      <!-- シェイプ -->
      <div class="shapeList">
        <div
          v-for="(shape, key) in shapeListWithPoints"
          :key="key"
          @click="setShape(shape.name)"
          class="shapeItem"
        >
          <svg height="100%" width="100%" viewBox="-10 -10 120 120">
            <circle
              v-if="shape.type === 'circle'"
              cx="50"
              cy="50"
              r="47.5"
              stroke-width="0"
              fill="black"
            ></circle>
            <polygon v-else :points="shape.points"></polygon>
          </svg>
        </div>
      </div>

      <!-- 画像 -->
      <div class="imageList">
        <div
          v-for="(image, key) in imageList"
          :key="key"
          @click="setImage(image.name)"
          class="imageItem"
        >
          <img :src="image.src" :alt="image.name">
        </div>
      </div>

      <!-- テクスチャ -->
      <div class="textureList">
        <div
          v-for="(texture, key) in textureList"
          :key="key"
          @click="setTexture(texture.name)"
          class="textureItem"
        >
          <img :src="texture.src" :alt="texture.name">
        </div>
      </div>

      <!-- 色 -->
      <div class="color">
        <div
          v-for="(color, index) in colorList"
          :key="index"
          @click="setColor(index)"
          class="colorItem"
        >
          <div
            class="aa"
            :style="{ backgroundImage: `linear-gradient(${color.angle * 0 + 90}deg, ${color.colorStopListForCss})` }"
          >{{color.colorStopListForCss}}</div>
        </div>
      </div>

      <!-- 文字 -->
      <div>
        <BaseInput :value.sync="msg" @input="$emit('update:msg', $event)"/>
        <BaseInput :value.sync="text1" @input="$emit('update:text1', $event)"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'TheInterfaceType',

  props: {
    msg: {
      type: String,
      default: 'messagea',
      required: false
    },
    text1: {
      type: String,
      default: 'messagea',
      required: false
    }
  },

  computed: {
    ...mapGetters('color', ['colorList', 'currentColor']),
    ...mapGetters('image', ['imageList', 'currentImageName']),
    ...mapGetters('shape', ['shapeListWithPoints', 'currentShapeName']),
    ...mapGetters('texture', ['textureList'])
  },

  methods: {
    ...mapMutations('color', {
      setColor: 'SET_CURRENT_COLOR_INDEX'
    }),
    ...mapMutations('shape', {
      setShape: 'SET_CURRENT_SHAPE_NAME'
    }),
    ...mapMutations('image', {
      setImage: 'SET_CURRENT_IMAGE_NAME'
    }),
    ...mapMutations('texture', {
      setTexture: 'SET_CURRENT_TEXTURE_NAME'
    })
  }
}
</script>

<style lang="stylus" scoped>
#TheInterfaceType
  box-sizing: border-box
  height: 100%
  width: 100%
  padding: 20px
  display: flex
  justify-content: center
  align-items: center
  text-align: center
  background-color: #2c3e50

  .inner
    flex: 1 1 auto

    .shapeList
      display: flex
      flex-wrap: wrap

      .shapeItem
        display: 1 1 100px
        width: 100px

        img
          width: 100%
          height: auto

    .imageList
      display: flex
      flex-wrap: wrap

      .imageItem
        display: 1 1 100px
        width: 100px

        img
          width: 100%
          height: auto

    .textureList
      display: flex
      flex-wrap: wrap

      .textureItem
        display: 1 1 100px
        width: 100px

        img
          width: 100%
          height: auto
</style>
