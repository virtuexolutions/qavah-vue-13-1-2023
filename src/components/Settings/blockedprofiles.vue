<template>
  <div class="">
    <div>
      <p>Blocking prevents members from sending you messages and likes.</p>

      <p>
        Want to give them a second changes? Unblock to start communication with
        them.
      </p>

      <b-overlay :show="loader">
        <template #overlay>
          <GridLoader
            class="custom-class"
            color="#93652b"
            :loading="loader"
            :size="10"
            sizeUnit="px"
          />
        </template>
        <div class="blocked-users-container" v-if="users.length > 0">
          <vue-perfect-scrollbar
            class=""
            :settings="{
              suppressScrollX: true,
              wheelPropagation: false,
            }"
            ref="webLeftScroll1"
          >
            <div class="blocked-users-inner">
              <div
                class="blocked-user-card"
                v-for="(user, index) in users"
                :key="index"
              >
                <div class="left" v-if="user !== null">
                  <div class="image">
                    <b-avatar
                      :to="'/dashboard/profile/' + user.who_i_blocked.id"
                      v-if="user.who_i_blocked.profile_images.length > 0"
                      size="lg"
                      :src="user.who_i_blocked.profile_images[0].url"
                    ></b-avatar>
                    <b-avatar
                      :to="'/dashboard/profile/' + user.who_i_blocked.id"
                      v-else
                      src="@/assets/profiles/empty.png"
                      size="lg"
                      rounded="lg"
                    >
                    </b-avatar>
                  </div>
                  <div class="info">
                    <h6>
                      {{ user.who_i_blocked.profileName }}
                    </h6>
                    <div class="age">
                      {{ user.who_i_blocked.age }} -
                      {{ user.who_i_blocked.location.city }}
                    </div>
                  </div>
                </div>
                <div class="right" v-if="user !== null">
                  <b-link
                    @click="
                      unblockUser(
                        user.who_i_blocked.uid,
                        user.who_i_blocked.profileName,
                        user.who_i_blocked.profile_images[0].url
                      )
                    "
                    >Unblock</b-link
                  >
                </div>
              </div>
            </div>
          </vue-perfect-scrollbar>
        </div>
        <div class="blocked-users-inner" v-else>
          <h4>No Blocked User Yet.</h4>
        </div>
      </b-overlay>
    </div>
    <!-- <div class="upgrade-banner mb-4" v-else>
      <div class="left">
        <h2>This feature is only available to subscribers</h2>
        <p class="m-0 p-0">Upgrade to block users from your search results.</p>
      </div>
      <div class="right">
        <b-button
          class="custom-btn-1"
          @click="$router.push('/dashboard/powerups')"
          >Upgrade</b-button
        >
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { apiUrl, headers } from "@/constants/config";
import Vue from "vue";
import axios from "axios";
export default {
  data() {
    return {
      loader: false,
      users: [],
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  methods: {
    getBlockedProfiles() {
      this.loader = true;

      setTimeout(() => {
        let body = {
          uid: this.currentUser.uid,
        };

        axios
          .post(`${apiUrl}/settings/blocked-profiles`, body, { headers })
          .then((response) => {
            let data = response.data;
            if (data.status) {
              debugger;
              this.loader = false;
              this.users = data.blocked_profiles;
            } else {
              console.log(data.error);
              this.loader = false;
              Vue.$toast.error(`${data.error}`);
            }
          })
          .catch((err) => {
            this.loader = false;
            console.log("err -> ", err);
            Vue.$toast.error(`${err}`);
          });
      }, 500);
    },
    unblockUser(targetUid, targetName, targetImage) {
      this.loader = true;

      let data = {
        myUid: this.currentUser.uid,
        targetsUid: targetUid,
        targetName: targetName,
        targetImage: targetImage,
      };
      debugger;
      axios
        .post(`${apiUrl}/settings/unblock-profile`, data, { headers })
        .then((response) => {
          console.log("unblock user profile -> ", response);
          const data = response.data;
          if (response.status === 200) {
            if (data.status) {
              console.log("block user data -> ", data);
              Vue.$toast.default(`${targetName} is now unblocked!`);
              this.loader = false;
              this.getBlockedProfiles();
            } else {
              // console.log("block user data -> ", data);
              // Vue.$toast.error(data.error);
              console.log("err -> ", data.error);
              Vue.$toast.error(data.error);
              this.loader = false;
            }
          } else {
            console.log(response);
            Vue.$toast.error(data.error);
            this.loader = false;
          }
        })
        .catch((e) => {
          console.log(e);
          Vue.$toast.error(e);
          this.loader = false;
        });
    },
  },
  mounted() {
    this.getBlockedProfiles();
  },
};
</script>

<style scoped lang="scss">
.blocked-users-container {
  min-width: 300px;
  max-width: 400px;
  .blocked-users-inner {
    height: 600px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .blocked-user-card {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;

      .info {
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
      }
    }
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.custom-btn-1:hover {
  background-color: #ac854e !important;
  transform: scale(105%);
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
  padding: 0.7rem 1.3rem;
  transition: all ease 0.5s;
}

.upgrade-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #e8e9ff;
  border-radius: 10px;
}
</style>