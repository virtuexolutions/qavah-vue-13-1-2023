<template>
  <div class="beloved-page p-5">
    <div
      class="no-likes-yet-container"
      v-if="currentUser.subscriptions.length === 0"
    >
      <i>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          />
        </svg>
      </i>
      <h2>Current Plan Doest Not Include Messaging</h2>
      <p>
        Please subscribe to Qavah Gold , Qavah Platinum or Qavah Love Notes to
        avail the feature
      </p>
      <b-button class="custom-btn-1"
        >Upgrade Your Account
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          /></svg
      ></b-button>
    </div>

    <div v-else>
      <div
        v-if="
          currentUser.subscriptions.includes('platinum') ||
          currentUser.subscriptions.includes('gold') ||
          currentUser.subscriptions.includes('lovenotes')
        "
      >
        <chatTest />
      </div>
    </div>
  </div>
</template>

<script>
import chatTest from "@/components/Beloved/chatUI.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    chatTest,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  methods: {},
  mounted() {},
  beforeDestroy() {},
  watch: {},
};
</script>

<style scoped>
.fil1 {
  fill: #fefefe;
}
.fil0 {
  fill: #201e1e;
}
.beloved-page {
  /* min-height: 100vh; */
  margin-top: 100px;
}

.no-likes-yet-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 300px;
}

.custom-btn-1 {
  background-color: #93652b !important;
  outline: none;
  border: none;
  border-radius: 10px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  transition: all ease 0.5s;
}

.custom-btn-1:hover {
  background-color: #ac854e !important;
  transform: scale(105%);
}
</style>
