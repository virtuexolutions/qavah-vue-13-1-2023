<template>
  <div class="">
    <div class="toggle-button-list">
      <div class="toggle-button-item">
        <div class="info">
          <p class="title p-0 m-0">Messages</p>
          <p class="subtitle p-0 m-0">
            Receive a notification when members message you in real-time
          </p>
        </div>

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

          <switches
            v-model="messages"
            theme="custom"
            color="secondary-inverse"
            class="vue-switcher-small"
          ></switches>
        </b-overlay>
      </div>
    </div>
  </div>
</template>

<script>
import Switches from "vue-switches";
import { getCurrentUser } from "@/utils";
import { mapGetters } from "vuex";
import { apiUrl } from "@/constants/config";
import Vue from "vue";
import axios from "axios";
export default {
  props: ["user"],
  components: {
    switches: Switches,
  },
  data() {
    return {
      loader: false,
      messages: true,
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
    updateNotificationSettings() {
      this.loader = true;
      let body = {
        uid: this.currentUser.uid,
        siteNotification: this.messages,
      };

      axios
        .post(`${apiUrl}/settings/notification-update`, body)
        .then((response) => {
          console.log("get subscriptions -> ", response);
          let data = response.data;
          if (response.status === 200) {
            console.log("data -> ", data);
            this.loader = false;
          } else {
            Vue.$toast.error(`${data.error}`);
            this.loader = false;
          }
        })
        .catch((err) => {
          this.loader = false;

          console.log("err -> ", err);
          Vue.$toast.error(`${err}`);
        });
    },
  },
  watch: {
    messages(newval) {
      this.updateNotificationSettings();
    },
    user(newval) {
      if (newval) {
        console.log("get user prop watched!");

        let settings = newval.settings;

        this.messages = settings.siteNotification;
      }
    },
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