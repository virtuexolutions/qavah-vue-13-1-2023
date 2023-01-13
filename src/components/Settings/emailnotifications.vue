<template>
  <div class="">
    <h6>You're receiving Qavah emails at:</h6>
    <p v-if="!editMode">
      {{ currentUser.email }}
      <span class="pencil-icon"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          @click="editMode = true"
          height="15"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          /></svg
      ></span>
    </p>

    <!-- Edit Email -->
    <div class="d-flex align-items-center">
      <b-form-input
        v-if="editMode"
        class="custom-field"
        v-model="editEmail"
        placeholder="Enter New Email Here..."
      ></b-form-input>
      <span class="remove-icon ml-2" v-if="editMode">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          @click="editMode = false"
          height="15"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clip-rule="evenodd"
          />
        </svg>
      </span>

      <b-button v-if="editMode" @click="changeEmail">
        Send Verification Link
      </b-button>
    </div>

    <h6 class="mt-4">Member recommendations to your inbox</h6>

    <b-form-group>
      <b-form-radio v-model="membersRecommendations" value="Daily"
        >Daily</b-form-radio
      >
      <b-form-radio v-model="membersRecommendations" value="3x a week"
        >3x a week</b-form-radio
      >
      <b-form-radio v-model="membersRecommendations" value="Once a week"
        >Once a week</b-form-radio
      >
      <b-form-radio v-model="membersRecommendations" value="Never"
        >Never</b-form-radio
      >
    </b-form-group>

    <h6 class="mt-4">Saved Search</h6>
    <p>Receive up to three of your favorite searches</p>

    <div class="toggle-button-list">
      <div class="toggle-button-item">
        <p>Local</p>

        <switches
          v-model="savedsearch.local"
          theme="custom"
          color="secondary-inverse"
          class="vue-switcher-small"
        ></switches>
      </div>
      <div class="toggle-button-item">
        <p>Shorties</p>

        <switches
          v-model="savedsearch.shorties"
          theme="custom"
          color="secondary-inverse"
          class="vue-switcher-small"
        ></switches>
      </div>
      <div class="toggle-button-item">
        <p>Prospect</p>

        <switches
          v-model="savedsearch.prospect"
          theme="custom"
          color="secondary-inverse"
          class="vue-switcher-small"
        ></switches>
      </div>
    </div>

    <h6 class="mt-4">Notifications</h6>

    <div class="toggle-button-list">
      <div class="toggle-button-item">
        <div class="info">
          <p class="title p-0 m-0">Top Picks</p>
          <p class="subtitle p-0 m-0">
            Be notified when your Top Picks are ready to view
          </p>
        </div>

        <switches
          v-model="notifications.topPicks"
          theme="custom"
          color="secondary-inverse"
          class="vue-switcher-small"
        ></switches>
      </div>
      <div class="toggle-button-item">
        <div class="info">
          <p class="title p-0 m-0">Kan</p>
          <p class="subtitle p-0 m-0">
            Find out when someone Kan you in real-time
          </p>
        </div>

        <switches
          v-model="notifications.kan"
          theme="custom"
          color="secondary-inverse"
          class="vue-switcher-small"
        ></switches>
      </div>
      <div class="toggle-button-item">
        <div class="info">
          <p class="title p-0 m-0">Super Fancy</p>
          <p class="subtitle p-0 m-0">
            Get updated when someone sends you a Super Fancy
          </p>
        </div>

        <switches
          v-model="notifications.superFancy"
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
          v-model="notifications.interestSummary"
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
import { getCurrentUser } from "@/utils";
import { mapGetters } from "vuex";
import { apiUrl, headers } from "@/constants/config";
import Vue from "vue";
import axios from "axios";
export default {
  props: ["user"],
  components: {
    switches: Switches,
  },
  data() {
    return {
      editMode: "",
      editEmail: "",
      selected: "",
      membersRecommendations: "",
      savedsearch: {
        local: false,
        shorties: false,
        prospect: false,
      },
      notifications: {
        topPicks: false,
        kan: false,
        superFancy: false,
        interestSummary: false,
      },
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
    updateMemberRecommendationsSettings() {
      this.loader = true;

      let body = {
        uid: this.currentUser.uid,
        membersRecommendations: this.membersRecommendations,
      };

      axios
        .post(`${apiUrl}/settings/notification-update`, body, { headers })
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
    updateSaveedSearchSettings() {
      let body = {
        uid: this.currentUser.uid,
        savedsearch: this.savedsearch,
      };

      axios
        .post(`${apiUrl}/settings/notification-update`, body, { headers })
        .then((response) => {
          console.log("get subscriptions -> ", response);
          let data = response.data;
          if (response.status === 200) {
            console.log("data -> ", data);
          } else {
            Vue.$toast.error(`${data.error}`);
          }
        })
        .catch((err) => {
          console.log("err -> ", err);
          Vue.$toast.error(`${err}`);
        });
    },
    updateNotificationSettings() {
      let body = {
        uid: this.currentUser.uid,
        notifications: this.notifications,
      };

      axios
        .post(`${apiUrl}/settings/notification-update`, body, { headers })
        .then((response) => {
          console.log("get subscriptions -> ", response);
          let data = response.data;
          if (response.status === 200) {
            console.log("data -> ", data);
          } else {
            Vue.$toast.error(`${data.error}`);
          }
        })
        .catch((err) => {
          console.log("err -> ", err);
          Vue.$toast.error(`${err}`);
        });
    },
    changeEmail() {
      let body = {
        uid: this.currentUser.id,
        oldemail: this.currentUser.email,
        email: this.editEmail,
      };
      axios
        .post(`${apiUrl}/settings/change-email`, body, { headers })
        .then((response) => {
          let data = response.data;
          if (response.status === 200) {
            if (data.status) {
              Vue.$toast.success(`${data.message}`);
              this.$router.go();
            } else {
              Vue.$toast.warning(`${data.message}`);
            }
          } else {
            Vue.$toast.error(`${data.error}`);
          }
        })
        .catch((err) => {
          console.log("err -> ", err);
          Vue.$toast.error(`${err}`);
        });
    },
  },
  watch: {
    user(newval) {
      if (newval) {
        let settings = newval.settings;
        this.membersRecommendations = settings.membersRecommendations;
        this.savedsearch = settings.savedsearch;
        this.notifications = settings.notifications;
      }
    },
    membersRecommendations(newval) {
      if (newval) {
        this.updateMemberRecommendationsSettings();
      }
    },
    savedsearch: {
      deep: true,
      handler(val) {
        this.updateSaveedSearchSettings();
      },
    },
    notifications: {
      deep: true,
      handler(val) {
        this.updateNotificationSettings();
      },
    },
  },
  mounted() {
    this.membersRecommendations =
      this.currentUser.settings.membersRecommendations;
    this.savedsearch = this.currentUser.settings.savedsearch;
    this.notifications = this.currentUser.settings.notifications;
  },
};
</script>

<style scoped lang="scss">
.custom-field {
  border-radius: 25px !important;
  height: 35px !important;
  border-color: #93652b !important;
  padding: 15px !important;
  font-size: 10px;
  max-width: 300px;
}

.remove-icon svg {
  fill: red;
  transition: all ease 0.5s;
}

.remove-icon svg:hover {
  transform: scale(110%);
  cursor: pointer;
}

.pencil-icon svg {
  stroke: #a1722e;
  transition: all ease 0.5s;
}

.pencil-icon svg:hover {
  transform: scale(110%);
  cursor: pointer;
}

.toggle-button-list {
  display: flex;
  flex-direction: column;
  .toggle-button-item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .info {
      .title {
      }
      .subtitle {
        // font-style: italic;
        font-size: 0.8rem;
        color: #c6c6c7;
      }
    }
  }
}
</style>