<template>
  <div>
    <input type="text" :value="value" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    value: {
      type: String,
      default: '',
      required: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
</style>
