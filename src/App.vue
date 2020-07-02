<script lang="tsx">
import { Component as VueComponent } from 'vue-tsx-support'
import { Component } from 'vue-property-decorator'

import TabBar from '@/components/TabBar.vue'

@Component({
  components: { TabBar },
})
export default class App extends VueComponent<{}> {
  render() {
    return (
      <div id="app">
        <router-view />
        <TabBar />
      </div>
    )
  }
}
</script>
