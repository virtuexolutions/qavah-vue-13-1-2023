<template>
  <div class="">
    <div class="toggle-button-list">
      <div class="toggle-button-item">
        <div class="">
          <p>Display my profile to single parents on stir</p>
        </div>

        <switches
          v-model="local"
          theme="custom"
          color="secondary-inverse"
          class="vue-switcher-small"
        ></switches>
      </div>
    </div>
  </div>
</template>

<script>
import Switches from "vue-switches";
export default {
  components: {
    switches: Switches,
  },
  data() {
    return {
      selected: "",
      savedsearch: "",
      local: false,
      shorties: false,
      prospect: false,
    };
  },
};
</script>

<style scoped lang="scss">
.toggle-button-list {
  display: flex;
  flex-direction: column;
  .toggle-button-item {
    display: flex;
    justify-content: space-between;
  }
}
</style>