<template>
  <div class="hello">
    <div class="test">
      字体效果
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../common/stylus/index.styl"
  .hello
    background red
    .test
      width 700px
      margin 0 auto
      height 80px
      text-align center
      color yellow
      font-size 30px
      background blue
</style>
