<template>
  <div class="my-header">
      <div class="top">
          <div class="nav clear">
              <div class="option left"><i class="iconfont icon-option2"></i></div>
              <ul class="tab left clear">
                  <li>我的</li>
                  <li>音乐馆</li>
                  <li>发现</li>
              </ul>
              <div class="add right"><i class="iconfont icon-add"></i></div>
          </div>
          <div class="search">
              <i class="iconfont icon-search1">搜索</i>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'my-header',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.top
    height 140px
    background #31c37c
    padding 60px 25px 0
    min-width 300px
    font-size 28px
    color #fff
    .nav
        position relative
        .tab
            position absolute
            left 50%
            transform translateX(-50%)
            li
                margin-right 30px
                float left
    .search
        height 60px
        background #2daf71
        margin-top 20px
        text-align center
        font-size 25px
        border-radius 8px
        line-height 60px

</style>
