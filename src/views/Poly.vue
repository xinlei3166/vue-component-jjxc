<template>
  <div class="wrap">
    <button @click="popupAlert">弹出</button>
  </div>
</template>

<script>
  export default {
    name: 'Poly',
    methods: {
      popupAlert() {
        this.$Alert.info('这是一条信息')
      }
    }
  }
</script>

<style scoped>
  .wrap {
    margin-top: 50px;
  }
</style>

