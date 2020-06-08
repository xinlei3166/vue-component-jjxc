<template>
  <Tree :data="data" :showCheckbox="true"/>
</template>

<script>
  export default {
    data () {
      return {
        data: [
          { title: '商品', children: [{ title: '西瓜' }, { title: '苹果' }]},
          { title: '款式', children: [{ title: '通用' }, { title: '可爱' }]},
          { title: '分类', children: [{ title: '精致' }, { title: '柔美' }]}
        ]
      }
    }
  }
</script>

<style scoped>

</style>
