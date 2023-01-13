<template>
  <div class="">
    <div>
      <p>Manage who shows up in your search - and who does not.</p>

      <h6 class="mt-4">Want to give them a second chance?</h6>

      <p>
        Select members you want to stop hiding from your search. Removed
        profiles will automatically be deleted after one year.
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
                <div class="left">
                  <div class="image">
                    <b-avatar size="lg" :src="user.thumbnail"></b-avatar>
                  </div>
                  <div class="info">
                    <div class="name">{{ user.name }}</div>
                    <div class="age">{{ user.age }}- {{ user.location }}</div>
                  </div>
                </div>
                <div class="right">
                  <b-link>Unblock</b-link>
                </div>
              </div>
            </div>
          </vue-perfect-scrollbar>
        </div>
        <div class="blocked-users-inner" v-else>
          <h4>No Removed User Yet.</h4>
        </div>
      </b-overlay>
    </div>

    <!-- <div class="upgrade-banner mb-4" v-else>
      <div class="left">
        <h2>This feature is only available to subscribers</h2>
        <p class="m-0 p-0">Upgrade to remove users from your search results.</p>
      </div>
      <div class="right">
        <b-button class="custom-btn-1">Upgrade</b-button>
      </div>
    </div> -->
  </div>
</template>

<script>
import { getCurrentUser } from "@/utils";
import { apiUrl } from "@/constants/config";
import Vue from "vue";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      loader: false,
      premium: false,
      users: [],
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),
    currentUser2() {
      let user = getCurrentUser();
      return user;
    },
  },
  methods: {
    getBlockedProfiles() {
      this.loader = true;
      let body = {
        uid: this.currentUser.uid,
      };

      axios
        .post(`${apiUrl}/settings/removed-profiles`, body)
        .then((response) => {
          let data = response.data;
          if (response.status === 200) {
            console.log("res -> ", response);
            console.log("data -> ", data);
            this.loader = false;
            this.users = data;
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
    },
  },
  mounted() {
    this.getBlockedProfiles();
  },
};
</script>

<style scoped lang="scss">
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
</style>