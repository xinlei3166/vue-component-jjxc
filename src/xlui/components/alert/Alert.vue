<template>
  <transition-group name="list" tag="div" class="alert">
    <div class="alert-main" v-for="item in notices" :key="item.name">
      <div class="alert-content">{{ item.content }}</div>
    </div>
  </transition-group>
</template>

<script>
  let seed = 0
  function getUuid() {
    return 'alert_' + (seed++)
  }

  export default {
    name: 'xlAlert',
    data() {
      return {
        notices: []
      }
    },
    methods: {
      add (notice) {
        const name = getUuid()

        let _notice = Object.assign({
          name: name
        }, notice)

        this.notices.push(_notice)

        // 定时移除，单位：秒
        const duration = notice.duration
        setTimeout(() => {
          this.remove(name)
        }, duration * 2000)
      },
      remove (name) {
        const notices = this.notices

        for (let i = 0; i < notices.length; i++) {
          if (notices[i].name === name) {
            this.notices.splice(i, 1)
            break
          }
        }
      }
    }
  }
</script>

<style scoped>
  .alert {
    position: fixed;
    width: 100%;
    top: 16px;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .alert-content {
    display: inline-block;
    padding: 8px 16px;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
    margin-bottom: 8px;
  }

  .alert-main {
    transition: all 1s;
  }

  /*.list-enter-active, .list-leave-active {*/
  /*  transition: all 1s;*/
  /*}*/

  .list-leave-active {
    position: absolute;
  }

  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(-100%);
  }
</style>
