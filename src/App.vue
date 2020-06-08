<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/form">Form</router-link>
      |
      <router-link to="/display">Display</router-link>
      |
      <router-link to="/table">Table</router-link>
      |
      <router-link to="/tree">Tree</router-link>
      |
      <router-link to="/poly">Poly</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="stylus">
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    margin-top 60px
</style>
