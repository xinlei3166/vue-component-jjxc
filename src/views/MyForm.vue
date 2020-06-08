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
      <FormItem prop="e" label="e">
        <Checkbox v-model="form.e" :trueValue="1" :falseValue="0"></Checkbox>
      </FormItem>
      <FormItem prop="f" label="f">
        <CheckboxGroup v-model="form.f">
          <Checkbox label="苹果">苹果</Checkbox>
          <Checkbox label="香蕉">香蕉</Checkbox>
          <Checkbox label="西瓜">西瓜</Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem>
        <button @click="handleSubmit">提交</button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  export default {
    name: 'MyForm',
    data () {
      return {
        form: {
          a: '',
          b: '',
          c: '',
          d: '',
          e: 1,
          f: []
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
          ],
          f: [
            { required: true, message: '请输入f', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit (e) {
        this.$refs.form.validate((valid) => {
          if (valid) {
            console.log('提交成功')
            e.preventDefault()
          } else {
            console.log('表单校验失败')
            e.preventDefault()
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
