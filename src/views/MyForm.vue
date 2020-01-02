<template>
  <div>
    <Form ref="form" :model="form" :rules="rules">
      <FormItem prop="a" label="a">
        <Input v-model="form.a"/>
      </FormItem>
      <FormItem prop="b" label="b">
        <Input v-model="form.b"/>
      </FormItem>
      <FormItem prop="c" label="c">
        <Input v-model="form.c"/>
      </FormItem>
      <FormItem prop="d" label="d">
        <Input v-model="form.d"/>
      </FormItem>
      <FormItem>
        <button @click="handleSubmit">提交</button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  import Form from '../components/form/Form'
  import FormItem from '../components/form/FormItem'
  import Input from '../components/input/Input'
  export default {
    name: 'MyForm',
    components: { FormItem, Form, Input },
    data() {
      return {
        form: {
          a: '',
          b: '',
          c: '',
          d: ''
        },
        rules: {
          a: [
            { required: true, message: '请输入a', trigger: 'blur' }
          ],
          b: [
            { required: true, message: '请输入b', trigger: 'blur' }
          ],
          c: [
            { required: true, message: '请输入c', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit (e) {
        this.$refs.form.validate((valid) => {
          if (valid) {
            console.log('提交成功');
            console.log(this.from)
            e.preventDefault()
          } else {
            console.log('表单校验失败');
            e.preventDefault()
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
