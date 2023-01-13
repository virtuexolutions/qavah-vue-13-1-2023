<template>
  <div class="profile-page p-5">
    <b-row>
      <b-col lg="8" md="8" sm="12">
        <b-link @click="$router.go(-1)"> Go Back</b-link>
        <otherProfileSection class="mt-2" :user="profile" />
      </b-col>
      <b-col class="types-section" lg="4" md="4" sm="12">
        <types class="mb-3" />
      </b-col>
    </b-row>
  </div>
</template>
<script>
import otherProfileSection from "@/components/Profile/othersProfile.vue";
import profileViewOptions from "@/components/Profile/profileViewSettingsCard.vue";
import types from "@/components/types.vue";
import axios from "axios";
import { apiUrl, headers } from "@/constants/config";
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
    otherProfileSection,
  },
  computed: {
    currentUser() {
      let user = getCurrentUser();
      return user;
    },
  },
  // methods: {
  //   getProfile() {
  //     console.log("this.currentUser.uid -> ", this.currentUser);
  //     axios
  //       .get(`${apiUrl}/auth/user`, {
  //         headers,
  //       })
  //       .then((res) => {
  //         console.log("res -> ", res);
  //         if (res.status === 200) {
  //           debugger;
  //           const profile = res.data;
  //           this.profile = profile;
  //           console.log("this.profile -> ", this.profile);
  //         } else {
  //         }
  //       })
  //       .catch((err) => {
  //         console.log("res -> ", err);
  //       });
  //   },
  // },
  // mounted() {
  //   this.getProfile();
  // },
};
</script>

<style scoped>
/* Mobile Screen Classes */
@media only screen and (max-width: 992px) {
  .profile-page {
    min-height: 100vh;
    padding: 2rem;
  }
  .types-section {
    display: none;
  }
}
/* Laptop Screen Classes */

/* Laptop Screen Classes */
@media only screen and (min-width: 992px) {
  .profile-page {
    min-height: 100vh;
    margin-top: 55px;
    padding: 2rem;
    padding-top: 3rem;
  }
  .types-section {
    display: block;
  }
}
</style>
