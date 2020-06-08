const code = `
  <template>
    <div>
        <input v-model="message">
        <span>{{ message }}</span>
    </div>
  </template>
  <script>
    export default {
        data () {
            return {
                message: ''
            }
        }
    }
  </script>
  <style scoped>
    span {
      color: hotpink;
    }
  </style>
`

export default code
