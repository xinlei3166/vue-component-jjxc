<template>
  <Table :columns="columns" :data="data">
    <template slot-scope="{ row, index }" slot="name">
      <input type="text" v-model="editName" v-if="editIndex === index" />
      <span v-else>{{ row.name }}</span>
    </template>
  </Table>
</template>

<script>
  export default {
    data () {
      return {
        columns: [
          { title: '姓名', key: 'name', slot: 'name' },
          { title: '性别', key: 'gender', render: (h, { row, index }) => {
              let edit
              if (this.editIndex === index) {
                edit = [h('input', {
                  domProps: {
                    value: row.gender
                  },
                  on: {
                    input: (event) => {
                      this.editGender = event.target.value
                    }
                  }
                })]
              } else {
                edit = row.gender
              }
              return h('div', [edit])
            } },
          { title: '年龄', key: 'age', render: (h, { row, index }) => {
              let edit
              if (this.editIndex === index) {
                edit = [h('input', {
                  domProps: {
                    value: row.age
                  },
                  on: {
                    input: (event) => {
                      this.editAge = event.target.value
                    }
                  }
                })]
              } else {
                edit = row.age
              }
              return h('div', [edit])
            } },
          {
            title: '操作', render: (h, { row, index }) => {
              if (this.editIndex === index) {
                return [
                  h('button', {
                    on: {
                      click: () => {
                        this.data[index].name = this.editName
                        this.data[index].gender = this.editGender
                        this.data[index].age = this.editAge
                        this.editIndex = -1
                      }
                    }
                  }, '保存'),
                  h('button', {
                    style: {
                      marginLeft: '6px'
                    },
                    on: {
                      click: () => {
                        this.editIndex = -1
                      }
                    }
                  }, '取消')
                ]
              } else {
                return [
                  h('button', {
                    on: {
                      click: () => {
                        this.editName = row.name
                        this.editGender = row.gender
                        this.editAge = row.age
                        this.editIndex = index
                      }
                    }
                  }, '修改')
                ]
              }
            }
          }
        ],
        data: [
          { name: '美丽', gender: 'female', age: 18 },
          { name: '小柔', gender: 'female', age: 17 },
          { name: '灵儿', gender: 'female', age: 17 }
        ],
        editName: '',
        editGender: '',
        editAge: '',
        editIndex: -1
      }
    }
  }
</script>

<style scoped>

</style>
