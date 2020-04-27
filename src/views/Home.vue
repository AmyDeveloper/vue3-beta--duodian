<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Borrow extends Vue {
  render() {
    return (
      <div class="container home">
        <div class="header-location">
          <div class="header-content">
            <img src={require('@/assets/images/location.png')} />
            <span>北京</span>
          </div>
          <div class="header-content refresh">
            <img src={require('@/assets/images/refresh.png')} />
            <span>刚刚更新</span>
          </div>
        </div>
        <div class="now-weather"></div>
      </div>
    )
  }
}
</script>

<style lang="stylus" scoped>
.home
  color #fff
  background-size cover
  background-image url('~@/assets/images/bg-rain.png')
  background-repeat no-repeat
  background-color rgb(27, 35, 38)
  .header-location
    padding-top 20px
    display flex
    justify-content space-between
    img
      width 24px
      margin-right 5px
    .header-content
      display flex
      justify-content flex-end
      align-items center
    .refresh
      font-size 20px
</style>
