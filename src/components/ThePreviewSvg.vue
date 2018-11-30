<template>
  <div id="ThePreviewSvg">
    <svg height="500" width="500" viewBox="-3 -3 106 106">
      <!-- 参照: 描画時に参照されるエフェクトたち -->
      <defs>
        <!-- :gradientTransform="`rotate(${currentColor.angle * 0})`" -->
        <linearGradient id="effectGradient" gradientUnits="userSpaceOnUse">
          <stop
            v-for="(c, index) in currentColor.colorStopList"
            :key="index"
            :offset="c.offset"
            :stop-color="c.color"
          ></stop>
        </linearGradient>

        <pattern
          id="effectPattern"
          patternUnits="userSpaceOnUse"
          x="-3"
          y="-3"
          width="106"
          height="106"
        >
          <image
            width="106"
            height="106"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            :xlink:href="currentTexture.src"
          ></image>
        </pattern>

        <mask id="effectMask">
          <rect x="-5" y="-5" width="110" height="110" fill="url(#effectPattern)"></rect>
        </mask>

        <path id="effectTextpathCurveMain" d="M0 55 Q 50 45 100 55"></path>
        <path id="effectTextpathCurveSub" d="M0 80 Q 50 70 100 80"></path>
      </defs>

      <!-- 参照: 画像の切り抜き範囲 -->
      <clipPath id="clipPath">
        <circle v-if="shape.type === 'circle'" cx="50" cy="50" r="50" stroke-width="0" fill="black"></circle>
        <polygon v-else :points="points" stroke-width="6"></polygon>
      </clipPath>

      <!-- 描画: 画像 -->
      <image
        :xlink:href="currentImage.src"
        x="-3"
        y="-3"
        width="106"
        height="106"
        clip-path="url(#clipPath)"
      ></image>

      <!-- 描画: 線 -->
      <g stroke="url(#effectGradient)" mask="url(#effectMask)" fill="none">
        <!-- polygon で円を書けないかな -->
        <template v-if="shape.type === 'circle'">
          <circle cx="50" cy="50" r="47" stroke-width="6"></circle>
          <path d="M8 40 Q 50 30 92 40" stroke-width="2"></path>
          <path d="M8 65 Q 50 55 92 65" stroke-width="2"></path>
        </template>
        <template v-else>
          <polygon :points="points" stroke-width="6"></polygon>
          <path d="M20 40 H 80 Z" stroke-width="2"></path>
          <path d="M20 60 H 80 Z" stroke-width="2"></path>
        </template>
      </g>

      <!-- 描画: 文字 -->
      <g mask="url(#effectMask)" fill="url(#effectGradient)">
        <text x="50" y="50">
          <textPath href="#effectTextpathCurveMain">{{ text }}</textPath>
        </text>
        <text x="50" :style="styleObj">
          <textPath href="#effectTextpathCurveSub">{{ text1 }}</textPath>
        </text>
      </g>
    </svg>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ThePreviewSvg',

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
    ...mapGetters('color', ['currentColor']),
    ...mapGetters('shape', {
      shape: 'currentShapeWithPoints'
    }),
    ...mapGetters('image', ['currentImage']),
    ...mapGetters('texture', ['currentTexture']),
    points() {
      return this.shape.points
    },
    linearGradientAttr() {
      return {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 1
      }
    }
  },

  watch: {
    msg(val) {
      this.text = ''
      this.$nextTick(() => {
        this.text = val
      })
    }
  },

  data() {
    return {
      text: '',
      styleObj: {
        'font-size': '7px'
      }
    }
  },

  created() {
    this.text = this.msg
  }
}
</script>

<style lang="stylus" scoped>
#ThePreviewSvg
  height: 100%
  width: 100%
  display: flex
  justify-content: center
  align-items: center

  svg
    margin: 10px auto

  text
    dominant-baseline: middle
    text-anchor: middle
    font-size: 12px
    font-weight: 800
</style>
