<template>
  <div>
    <h3>动态渲染 .vue 文件的组件—— Display</h3>
    <Display :code="code"></Display>
  </div>
</template>

<script>
  import Display from '../../xlui/src/components/display/Display'
  import code from './code'

  export default {
    components: { Display },
    data() {
      return {
        code: code
      }
    }
  }
</script>
