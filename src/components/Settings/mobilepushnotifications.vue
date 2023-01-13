<template>
  <div class="">
    <div class="toggle-button-list">
      <div class="toggle-button-item">
        <div class="info">
          <p class="title p-0 m-0">Top Picks</p>
          <p class="subtitle p-0 m-0">
            Be notified when your Top Picks are ready to view
          </p>
        </div>

        <switches
          v-model="local"
          theme="custom"
          color="secondary-inverse"
          class="vue-switcher-small"
        ></switches>
      </div>
      <div class="toggle-button-item">
        <div class="info">
          <p class="title p-0 m-0">Kan</p>
          <p class="subtitle p-0 m-0">
            Find out when someone likes you in real-time
          </p>
        </div>

        <switches
          v-model="shorties"
          theme="custom"
          color="secondary-inverse"
          class="vue-switcher-small"
        ></switches>
      </div>
      <div class="toggle-button-item">
        <div class="info">
          <p class="title p-0 m-0">Super Fancy</p>
          <p class="subtitle p-0 m-0">
            Get updated when someone sends you a Super fancy
          </p>
        </div>

        <switches
          v-model="prospect"
          theme="custom"
          color="secondary-inverse"
          class="vue-switcher-small"
        ></switches>
      </div>
      <div class="toggle-button-item">
        <div class="info">
          <p class="title p-0 m-0">Interest Summary</p>
          <p class="subtitle p-0 m-0">
            Get a weekly remainder of members who showed interest in you
          </p>
        </div>

        <switches
          v-model="prospect"
          theme="custom"
          color="secondary-inverse"
          class="vue-switcher-small"
        ></switches>
      </div>
      <div class="toggle-button-item">
        <div class="info">
          <p class="title p-0 m-0">Tips & Announcements</p>
          <p class="subtitle p-0 m-0">
            Be an insider with success tips. feature announcements and more
          </p>
        </div>

        <switches
          v-model="prospect"
          theme="custom"
          color="secondary-inverse"
          class="vue-switcher-small"
        ></switches>
      </div>
      <div class="toggle-button-item">
        <div class="info">
          <p class="title p-0 m-0">Qavah Offers</p>
          <p class="subtitle p-0 m-0">
            Get discounts to subscriptions, feature and more
          </p>
        </div>

        <switches
          v-model="prospect"
          theme="custom"
          color="secondary-inverse"
          class="vue-switcher-small"
        ></switches>
      </div>
      <div class="toggle-button-item">
        <div class="info">
          <p class="title p-0 m-0">Qavah Events</p>
          <p class="subtitle p-0 m-0">
            Find out about upcoming singles events in your area
          </p>
        </div>

        <switches
          v-model="prospect"
          theme="custom"
          color="secondary-inverse"
          class="vue-switcher-small"
        ></switches>
      </div>
      <div class="toggle-button-item">
        <div class="info">
          <p class="title p-0 m-0">Qavah Talks</p>
          <p class="subtitle p-0 m-0">
            Discover exclusive dating talks and expert advice
          </p>
        </div>

        <switches
          v-model="prospect"
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
    align-items: center;

    .info {
      .subtitle {
        font-size: 0.8rem;
        color: #c6c6c7;
      }
    }
  }
}
</style>