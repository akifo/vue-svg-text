<template>
  <div id="app">
    <div class="preview">
      <ThePreviewSvg :msg="msg" :text1.sync="text1"/>
    </div>
    <div class="interface">
      <TheInterfaceType :msg.sync="msg" :text1.sync="text1"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Awesome',
      text1: '2018.12.01'
    }
  }
}
</script>

// VS code で stylus 2つかけないので、とりあえず css で
<style lang="css">
body {
  margin: 0;
  padding: 0;
}
</style>

<style lang="stylus" scoped>
#app
  width: 100vw
  height: 100vh
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  display: grid
  grid-template-columns: 50% 50%
  grid-template-rows: 50vh 1fr

.preview
  grid-column: 1 / 2
  grid-row: 1 / 10

.interface
  grid-column: 2 / 3
  grid-row: 1 / 10
</style>
