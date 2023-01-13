<template>
  <div class="">
    <b-overlay :show="loading" rounded="sm">
      <template #overlay>
        <GridLoader
          class="custom-class"
          color="#93652b"
          :loading="loading"
          :size="10"
          sizeUnit="px"
        />
      </template>

      <vue-perfect-scrollbar
        v-if="notifications.length > 0"
        class="inner-chat-container scroll"
        :settings="{ suppressScrollX: true, wheelPropagation: false }"
        ref="chatArea"
      >
        <div class="searches-container pr-2">
          <b-card
            no-body
            class="single-search rounded-lg mb-1"
            v-for="(notification, index) in notifications"
            :key="index"
          >
            <div class="top">
              <div class="content">
                <p class="p-0 m-0 name text-capitalize">
                  {{ index + 1 }}- {{ notification.title }}
                </p>
                <p class="p-0 m-0 body">{{ notification.body }}</p>
                <p class="p-0 m-0 time">
                  <time-ago long :datetime="notification.created_at"></time-ago>
                </p>
              </div>

              <div class="">
                <span
                  @click="removeSearch(notification.id)"
                  class="filter-cancel-icon"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="25"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clip-rule="evenodd"
                    /></svg
                ></span>

                <span
                  v-if="notification.is_viewed != 1"
                  @click="readNotification(notification.id)"
                  class="notification-read-icon"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="25"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                </span>

                <!-- <span
                  v-if="notification.is_viewed"
                   class="notification-read-icon"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="25"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                </span> -->
              </div>
            </div>
          </b-card>
        </div>
      </vue-perfect-scrollbar>
      <div v-else class="no-likes-yet-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <h2>No Saved Searches</h2>
        <p>
          Give a little, get a little. Send some likes <br />
          to people who've caught your eye!
        </p>
        <b-button to="/dashboard/seeking" class="go-to-search-btn"
          >Go to seeking
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
    </b-overlay>
  </div>
</template>

<script>
import { GridLoader } from "@saeris/vue-spinners";
import axios from "axios";
import { apiUrl, headers } from "@/constants/config";
import { getCurrentUser } from "@/utils/index";
import { mapGetters } from "vuex";
import Vue from "vue";
import { TimeAgo } from "vue2-timeago";

export default {
  components: {
    GridLoader,
    TimeAgo,
  },
  data() {
    return {
      loading: false,
      notifications: [],
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  methods: {
    removeSearch(id) {
      let data = {
        id: id,
      };
      axios
        .post(`${apiUrl}/settings/remove_notification`, data, { headers })
        .then((res) => {
          const data = res.data;
          debugger;
          if (res.status === 200) {
            if (data.status) {
              Vue.$toast.open({
                message: `notification Has Been Removed!`,
                type: "success",
              });

              this.getNotificationCount();
            } else {
              Vue.$toast.open({
                message: `Error Occurred: ${data.error}`,
                type: "error",
              });
            }
          } else {
            Vue.$toast.open({
              message: "Unknown Error Occurred!",
              type: "error",
            });
          }
        })
        .catch((err) => {
          console.log(err);
          Vue.$toast.open({
            message: err.message,
            type: "error",
          });
        });
    },
    getNotificationCount() {
      axios
        .get(`${apiUrl}/settings/notification`, { headers })
        .then((response) => {
          debugger;
          this.notifications = response.data.notification;
        });
      // const db = firebase.firestore();
      // const nofiticationRef = db
      //   .collection("notifications")
      //   .doc(this.currentUser.uid)
      //   .collection("notifications");
      // nofiticationRef
      //   .where("read", "==", false)
      //   .orderBy("created", "desc")
      //   .get()
      //   .then((snapshot) => {
      //     if (!snapshot.empty) {
      //       let notifications = [];
      //       snapshot.forEach((x) => notifications.push(x.data()));
      //       this.notifications = notifications;
      //       console.log("notifications -> ", notifications);
      //     }
      //   })
      //   .catch((err) => {
      //     console.log("err -> ", err.message);
      //   });
    },
    formatDate(date) {
      let newDate = new Date(date);
      return newDate.toLocaleString();
    },
    readNotification(id) {
      let data = {
        id: id,
      };

      console.log("data => ", data);
      axios
        .post(`${apiUrl}/settings/view_notication`, data, { headers })
        .then((res) => {
          console.log("get all read_notification res -> ", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              Vue.$toast.open({
                message: `notification has been read!`,
                type: "success",
              });

              this.getNotificationCount();
            } else {
              Vue.$toast.open({
                message: `Error Occurred: ${data.error}`,
                type: "error",
              });
            }
          } else {
            Vue.$toast.open({
              message: "Unknown Error Occurred!",
              type: "error",
            });
          }
        })
        .catch((err) => {
          console.log(err);
          Vue.$toast.open({
            message: err.message,
            type: "error",
          });
        });
    },
    unreadNotification(id) {
      let data = {
        id: id,
      };
      console.log("data => ", data);
      axios
        .post(`${apiUrl}/settings/unread_notification`, data, { headers })
        .then((res) => {
          console.log("unread_notification res -> ", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              Vue.$toast.open({
                message: `notification has been unread!`,
                type: "success",
              });

              this.getNotificationCount();
            } else {
              Vue.$toast.open({
                message: `Error Occurred: ${data.error}`,
                type: "error",
              });
            }
          } else {
            Vue.$toast.open({
              message: "Unknown Error Occurred!",
              type: "error",
            });
          }
        })
        .catch((err) => {
          console.log(err);
          Vue.$toast.open({
            message: err.message,
            type: "error",
          });
        });
    },
  },
  watch: {
    currentUser(val) {
      console.log("Watching Current User -> ", val);
    },
  },
  mounted() {
    // this.getAllSavedSearches();
    this.getNotificationCount();
  },
};
</script>

<style scoped lang="scss">
.go-to-search-btn {
  background-color: #93652b !important;
  outline: none;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: center;
  gap: 0.3rem;
  align-items: center;
  padding: 1rem 2rem;
  transition: all ease 0.5s;
}

.go-to-search-btn:hover {
  background-color: #ac854e !important;
  transform: scale(105%);
}
.no-likes-yet-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 300px;
}

.edit-icon svg {
  stroke: #93652b;
  transition: all ease 0.5s;
}

.edit-icon svg:hover {
  stroke: #be843c;
  transform: scale(104%);
  cursor: pointer;
}

.notification-read-icon {
  cursor: pointer;
}

.notification-read-icon svg {
  fill: darkturquoise;
  transition: all ease 0.5s;
}

.notification-read-icon svg:hover {
  fill: darkturquoise;
  transform: scale(104%);
  cursor: pointer;
}

.filter-cancel-icon {
  cursor: pointer;
}

.filter-cancel-icon svg {
  fill: red;
  transition: all ease 0.5s;
}

.filter-cancel-icon svg:hover {
  fill: red;
  transform: scale(104%);
  cursor: pointer;
}

.custom-filter {
  color: #93652b;
  margin: 0.2rem;
  transition: all ease 0.5s;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

.custom-filter:hover {
  transform: scale(110%);
  cursor: pointer;
}

.searches-container {
  height: 500px;
  .single-search {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      //   gap: 1rem;
    }

    .index {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .name {
      font-size: 1.5rem;
    }
  }
}
</style>