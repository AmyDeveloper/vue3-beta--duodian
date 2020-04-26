<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Borrow extends Vue {
  render() {
    return <div class="container home"></div>
  }
}
</script>

<style lang="stylus" scoped>
.home
  background-size 100% auto
  background-image url('~@/assets/images/bg-rain.png')
  background-repeat no-repeat
  background-color rgb(27, 35, 38)
</style>
