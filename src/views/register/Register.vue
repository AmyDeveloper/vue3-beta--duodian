<script lang="tsx">
  import { Component as VueComponent } from 'vue-tsx-support'
  import { Component } from 'vue-property-decorator'

  @Component
  export default class Register extends VueComponent<{}> {
    render() {
      return <div><van-button type="primary">默认按钮</van-button>
      </div>
    }
  }
</script>
