<template>
  <div class="profile-page p-5">
    <b-row style="background-color: transparent !important">
      <b-col lg="8" md="8" sm="12">
        <b-link @click="$router.go(-1)"> Go Back</b-link>
        <profileSection class="mt-2" />
      </b-col>
      <b-col class="right-section" lg="4" md="4" sm="12">
        <profileViewOptions class="mb-3" />
        <types class="mb-3" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import profileSection from "@/components/Profile/profileCard.vue";
import profileViewOptions from "@/components/privatemode.vue";
import types from "@/components/types.vue";

import { getCurrentUser } from "@/utils";
export default {
  name: "search",
  data() {
    return {
      profile: null,
    };
  },
  components: {
    types,
    profileViewOptions,
    profileSection,
  },
  computed: {
    currentUser() {
      let user = getCurrentUser();
      return user;
    },
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
/* Mobile Screen Classes */
@media only screen and (max-width: 992px) {
  .profile-page {
    background-image: url("@/assets/watermark.jpeg");
    min-height: 100vh;
    padding: 2rem;
  }

  .right-section {
    display: none;
  }
}

/* Laptop Screen Classes */
@media only screen and (min-width: 992px) {
  .profile-page {
    background-image: url("@/assets/watermark.jpeg");
    min-height: 100vh;
    margin-top: 55px;
    padding: 2rem;
    padding-top: 3rem;
  }

  .right-section {
    display: block;
  }
}
</style>
