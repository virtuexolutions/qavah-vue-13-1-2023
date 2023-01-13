<template>
  <div class="navbar-container" style="width: 100%">
    <nav class="custom-navbar fixed-top">
      <!-- <div class="announcement-banner">
        Thank you for taking a sneak peek. We are now on our live dedicated
        server. However, the Qavah courting platform is being tested to ensure
        that all functions and features are working correctly. We will announce
        as soon as services become available
      </div> -->
      <div class="custom-navbar-inner-web">
        <div class="custom-logo">
          <router-link to="/">
            <b-img src="@/assets/logos/logo-white.png" height="75"></b-img>
          </router-link>

          <!-- User Profile -->
          <b-dropdown
            class="p-0 m-0 ml-5"
            variant="empty"
            size="lg"
            right
            toggle-class="p-0 header-icon notificationButton"
            menu-class="m-0 p-2"
            no-caret
          >
            <template slot="button-content">
              <b-avatar
                v-if="currentUser.profile_images.length > 0"
                :src="currentUser.profile_images[0].url"
                rounded="lg"
                :badge="notifications"
                badge-variant="info"
                size="64px"
                variant="primary"
              ></b-avatar>
            </template>

            <b-dropdown-item to="/dashboard/profile">Me</b-dropdown-item>
            <b-dropdown-item to="/dashboard/views"
              >Who Viewed Me?
            </b-dropdown-item>
            <b-dropdown-item to="/dashboard/powerups"
              >Subscribe Now</b-dropdown-item
            >
            <b-dropdown-item to="/dashboard/notifications"
              >Notifications
              <!-- <b-badge variant="info" v-if="notifications.length > 0">{{
                notifications
              }}</b-badge> -->
            </b-dropdown-item>
            <b-dropdown-item to="/dashboard/lovenotes"
              >Lovenotes
              <!-- <b-badge variant="info" v-if="notifications.length > 0">{{
                notifications
              }}</b-badge> -->
            </b-dropdown-item>

            <!-- <b-dropdown-item to="/app/premium-benefits"
              >Premium Benefits
              <b-badge variant="danger">2</b-badge></b-dropdown-item
            > -->
          </b-dropdown>
        </div>
        <div class="custom-navigation">
          <!-- Discover -->
          <b-link class="custom-nav-link" to="/dashboard/discover">
            <div class="icon">
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <div class="title">Discover</div>
          </b-link>

          <!-- Seeking -->
          <b-dropdown
            class="p-0 m-0"
            variant="empty"
            size="sm"
            right
            toggle-class="p-0 header-icon notificationButton"
            menu-class="m-0 p-2"
            no-caret
          >
            <template slot="button-content">
              <div class="custom-nav-link" to="/dashboard/seeking">
                <div class="icon">
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <div class="title">Seeking</div>
              </div>
            </template>

            <b-dropdown-item to="/dashboard/seeking">Seeking</b-dropdown-item>

            <b-dropdown-item to="/dashboard/mutual-seeking"
              >Mutual Seeking</b-dropdown-item
            >
            <b-dropdown-item to="/dashboard/reversed-seeking"
              >Reversed Seeking</b-dropdown-item
            >
            <b-dropdown-item to="/dashboard/saved-seeking"
              >Saved Seeking</b-dropdown-item
            >
          </b-dropdown>

          <!-- Favored -->
          <b-link class="custom-nav-link" to="/dashboard/favored">
            <div class="icon">
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <div class="title">Favored</div>
            <!-- Notifications Count -->
            <!-- <span class="notification-bubble" 
            v-if="favouredCount > 0">{{
              favouredCount
            }}</span> -->
          </b-link>
          <!-- <b-dropdown
            class="p-0 m-0"
            variant="empty"
            size="sm"
            right
            toggle-class="p-0 header-icon notificationButton"
            menu-class="m-0 p-2"
            no-caret
          >
            <template slot="button-content">
              
            </template>

            <b-dropdown-item to="favoured"
              >Favored <b-badge variant="danger">2</b-badge></b-dropdown-item
            >
          </b-dropdown> -->

          <!-- Beloved -->
          <b-link class="custom-nav-link" to="/dashboard/beloved">
            <div class="icon">
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
                  d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </div>
            <div class="title">Beloved</div>
            <!-- Notifications Count -->
            <!-- <span class="notification-bubble" v-if="belovedCount > 0">{{
              belovedCount
            }}</span> -->
          </b-link>

          <!-- Events -->
          <b-link class="custom-nav-link" to="/dashboard/events">
            <div class="icon">
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div class="title">Events</div>
            <!-- Notifications Count -->
            <!-- <span class="notification-bubble" v-if="eventsCount > 0">{{
              eventsCount
            }}</span> -->
          </b-link>
        </div>
        <div class="custom-user">
          <!-- Spotlight Me -->
          <b-button
            class="powerup-btn"
            @click="$router.push('/dashboard/powerups')"
            >Spotlight Me</b-button
          >

          <!-- Activate Spotlight -->
          <!-- <b-button
            class="powerup-btn"
            v-if="currentUser.active_spotlights == null"
            @click="activateSpotlight"
          >
            <b-overlay :show="spotlightActivateLoader">
              Activate Spotlight
            </b-overlay>
          </b-button> -->
          <!-- currentUser.subscriptions.includes('spotlight') && -->

          <!-- <b-button
            class="powerup-btn"
            disabled
            v-if="currentUser.active_spotlights != null"
          >
            Spotlight Activated
          </b-button> -->

          <!-- Views -->
          <b-link class="custom-nav-link" to="/dashboard/views">
            <div class="icon">
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <div class="title">Views</div>
            <!-- Notifications Count -->
            <!-- <span class="notification-bubble" v-if="viewsCount > 0">{{
              viewsCount
            }}</span> -->
          </b-link>

          <!-- Settings -->
          <b-dropdown
            class="p-0 m-0"
            variant="empty"
            size="sm"
            right
            toggle-class="p-0"
            menu-class="m-0 p-0"
            no-caret
          >
            <template slot="button-content">
              <svg
                version="1.1"
                id="Layer_1"
                class="settings-icon"
                height="40"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 55.09 55.09"
                style="enable-background: new 0 0 55.09 55.09"
                xml:space="preserve"
              >
                <g>
                  <path
                    d="M46.4,13.15c1.07,9.88-3.78,16.88-11.29,17.59c-2.73,0.26-3.07,1.61-3.55,3.57c-0.99,3.99-15.68,14.76-19.72,14.37
              c-2.55-0.24-3.78-1.8-3.13-4.42c1.71-6.87,0.8-14.57,6.21-20.26c1.53-1.6,0.39-2.64-0.53-3.75c-2.9-3.49-2.44-7.66-2.38-11.75
              c0.01-0.94-0.05-2.18,1.36-2.08c1.32,0.09,1.32,1.34,1.29,2.26c-0.38,12.07,10.25,13.41,17.5,17.53c3.76,2.14,7.43-1.06,9.69-4.63
              C43.28,19.33,44.41,16.88,46.4,13.15z M11.27,44.84c5.72-0.77,8.94-4.72,13.3-6.35c2.95-1.1,5.05-3.6,4.31-6.86
              c-0.8-3.5-3.46-6.04-6.95-6.89c-3.27-0.8-5.4,1.83-6.3,4.32C13.83,34.01,12.77,39.24,11.27,44.84z"
                  />
                </g>
              </svg>
            </template>

            <b-dropdown-item to="/dashboard/settings"
              >Settings
              <!-- <b-badge variant="danger" v-if="settingsCount > 0">{{
                settingsCount
              }}</b-badge> -->
            </b-dropdown-item>
            <b-dropdown-item to="/dashboard/help">Help</b-dropdown-item>
            <b-dropdown-item @click="logout">Logout</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </nav>

    <b-navbar class="custom-navbar-mobile" variant="primary" toggleable="lg">
      <b-navbar-brand to="/">
        <b-img src="@/assets/logos/logo-white.png" height="50"></b-img>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse">
        <template #default="{}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </template>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav justified>
          <b-nav-item class="custom-nav-link" to="/dashboard/discover"
            >Discover</b-nav-item
          >
          <b-nav-item-dropdown text="Seeking" right>
            <b-dropdown-item class="text-center" to="seeking"
              >Seeking</b-dropdown-item
            >
            <b-dropdown-item class="text-center" to="mutual-seeking"
              >Mutual Seeking</b-dropdown-item
            >
            <b-dropdown-item class="text-center" to="reversed-seeking"
              >Reversed Seeking</b-dropdown-item
            >
            <b-dropdown-item class="text-center" to="saved-seeking"
              >Saved</b-dropdown-item
            >
          </b-nav-item-dropdown>

          <b-nav-item class="custom-nav-link" to="favored">Favored</b-nav-item>
          <b-nav-item class="custom-nav-link" to="beloved">Beloved</b-nav-item>
          <b-nav-item class="custom-nav-link" to="events">Events</b-nav-item>
          <b-nav-item class="custom-nav-link" to="views">Views</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" justified>
          <b-nav-item-dropdown no-caret right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <b-avatar
                :src="currentUser.photoURL"
                rounded="lg"
                size="lg"
                variant="primary"
              ></b-avatar>
            </template>
            <b-dropdown-item class="text-center" to="/dashboard/profile"
              >Me</b-dropdown-item
            >
            <!-- <b-badge variant="danger">2</b-badge> -->
            <b-dropdown-item class="text-center" to="/dashboard/views"
              >Who Viewed Me?
            </b-dropdown-item>
            <b-dropdown-item class="text-center" to="/dashboard/powerups"
              >Boost</b-dropdown-item
            >
          </b-nav-item-dropdown>

          <!-- Settings -->
          <b-nav-item-dropdown no-caret right>
            <template slot="button-content">
              <svg
                version="1.1"
                id="Layer_1"
                class="settings-icon"
                height="40"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 55.09 55.09"
                style="enable-background: new 0 0 55.09 55.09"
                xml:space="preserve"
              >
                <g>
                  <path
                    d="M46.4,13.15c1.07,9.88-3.78,16.88-11.29,17.59c-2.73,0.26-3.07,1.61-3.55,3.57c-0.99,3.99-15.68,14.76-19.72,14.37
              c-2.55-0.24-3.78-1.8-3.13-4.42c1.71-6.87,0.8-14.57,6.21-20.26c1.53-1.6,0.39-2.64-0.53-3.75c-2.9-3.49-2.44-7.66-2.38-11.75
              c0.01-0.94-0.05-2.18,1.36-2.08c1.32,0.09,1.32,1.34,1.29,2.26c-0.38,12.07,10.25,13.41,17.5,17.53c3.76,2.14,7.43-1.06,9.69-4.63
              C43.28,19.33,44.41,16.88,46.4,13.15z M11.27,44.84c5.72-0.77,8.94-4.72,13.3-6.35c2.95-1.1,5.05-3.6,4.31-6.86
              c-0.8-3.5-3.46-6.04-6.95-6.89c-3.27-0.8-5.4,1.83-6.3,4.32C13.83,34.01,12.77,39.24,11.27,44.84z"
                  />
                </g>
              </svg>
            </template>

            <b-dropdown-item class="text-center" to="/dashboard/settings"
              >Settings</b-dropdown-item
            >
            <b-dropdown-item class="text-center" to="/dashboard/help"
              >Help</b-dropdown-item
            >
            <b-dropdown-item class="text-center" @click="logout"
              >Logout</b-dropdown-item
            >
          </b-nav-item-dropdown>

          <b-button
            class="powerup-btn"
            @click="$router.push('/dashboard/powerups')"
            >Subscribe Now</b-button
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Switches from "vue-switches";
import { mapGetters, mapMutations, mapActions } from "vuex";
import { CometChat } from "@cometchat-pro/chat";
import { apiUrl, localeOptions, headers } from "@/constants/config";
import Vue from "vue";
import axios from "axios";
export default {
  components: {
    switches: Switches,
  },
  data() {
    return {
      localeOptions,
      notifications: null,
      discoverCount: 0,
      favouredCount: 0,
      belovedCount: 0,
      eventsCount: 0,
      viewsCount: 0,
      settingsCount: 0,
      subscriptionsCount: 0,
    };
  },
  methods: {
    // ...mapMutations(["changeSideMenuStatus", "changeSideMenuForMobile"]),
    ...mapActions(["setLang", "signOut"]),
    changeLocale(locale, direction) {
      const currentDirection = getDirection().direction;
      if (direction !== currentDirection) {
        setDirection(direction);
      }

      this.setLang(locale);
    },
    logout() {
      this.signOut().then(() => {
        this.$router.push("/user/login").then(() => {
          CometChat.logout().then(
            () => {
              // console.log("Logout completed successfully");
            },
            (error) => {
              console.log("Logout failed with exception:", { error });
              this.$router.push("/user/login").then(() => {
                Vue.$toast.open({
                  message: `You are logged out!`,
                  type: "success",
                });
              });
            }
          );
        });
      });
    },
    goToRoutes(route) {
      this.$router.push(route).catch((err) => {
        console.log("err -> ", err);
      });
    },
    activateSpotlight() {
      this.spotlightActivateLoader = true;
      let body = {
        uid: this.currentUser.id,
      };
      axios
        .post(`${apiUrl}/swap/activate_spotlight`, body, { headers })
        .then((res) => {
          // console.log("activate_spotlight ->", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              this.spotlightActivateLoader = false;

              Vue.$toast.success(`${data.message}`);
              this.$router.go();
            } else {
              this.spotlightActivateLoader = false;

              Vue.$toast.error(`${data.error}`);
            }
          } else {
            // console.log("activate_spotlight !");
            this.spotlightActivateLoader = false;

            Vue.$toast.error(`${data.error}`);
          }
        })
        .catch((err) => {
          console.log("activate_spotlight ->", err);
          this.spotlightActivateLoader = false;
        });
    },
    getNotificationCount() {
      // if (!snapshot.empty) {
      //   let notifications = [];
      //   let favouredNotifications = [];
      //   let belovedNotifications = [];
      //   let viewsNotifications = [];
      //   let eventsNotifications = [];
      //   let settingsNotifications = [];
      //   let subscriptionNotifications = [];
      //   snapshot.forEach((x) => {
      //     // Favoured Notifications
      //     if (
      //       x.data().type === "kan" ||
      //       x.data().type === "lo" ||
      //       x.data().type === "superfancy" ||
      //       x.data().type === "fancy" ||
      //       x.data().type === "skip" ||
      //       x.data().type === "match" ||
      //       x.data().type === "matchMe"
      //     ) {
      //       favouredNotifications.push(x.data());
      //     }
      //     //  belovedNotifications
      //     if (
      //       x.data().type === "call" ||
      //       x.data().type === "lovenote" ||
      //       x.data().type === "match"
      //     ) {
      //       belovedNotifications.push(x.data());
      //     }
      //     // viewsNotifications
      //     if (x.type === "viewed") {
      //       viewsNotifications.push(x.data());
      //     }
      //     // Events Notifications
      //     if (x.type === "event") {
      //       eventsNotifications.push(x.data());
      //     }
      //     // Settings Notifications
      //     if (x.type === "subscription" || x.type === "setting") {
      //       settingsNotifications.push(x.data());
      //     }
      //     // Subscription Notifications
      //     if (x.type === "subscription" || x.type === "payment") {
      //       subscriptionNotifications.push(x.data());
      //     }
      //     notifications.push(x.data());
      //   });
      //   if (favouredNotifications && favouredNotifications.length > 0) {
      //     this.favouredCount = favouredNotifications.length;
      //     console.log(
      //       "favouredNotifications.length -> ",
      //       favouredNotifications.length
      //     );
      //   }
      //   if (belovedNotifications && belovedNotifications.length > 0) {
      //     this.belovedCount = belovedNotifications.length;
      //     console.log(
      //       "belovedNotifications.length -> ",
      //       belovedNotifications.length
      //     );
      //   }
      //   if (viewsNotifications && viewsNotifications.length > 0) {
      //     this.viewsCount = viewsNotifications.length;
      //     console.log(
      //       "viewsNotifications.length -> ",
      //       viewsNotifications.length
      //     );
      //   }
      //   if (eventsNotifications && eventsNotifications.length > 0) {
      //     this.eventsCount = eventsNotifications.length;
      //     console.log(
      //       "eventsNotifications.length -> ",
      //       eventsNotifications.length
      //     );
      //   }
      //   if (settingsNotifications && settingsNotifications.length > 0) {
      //     this.settingsCount = settingsNotifications.length;
      //     console.log(
      //       "settingsNotifications.length -> ",
      //       settingsNotifications.length
      //     );
      //   }
      //   if (subscriptionNotifications && subscriptionNotifications.length > 0) {
      //     this.subscriptionsCount = subscriptionNotifications.length;
      //     console.log(
      //       "subscriptionNotifications.length -> ",
      //       subscriptionNotifications.length
      //     );
      //   }
      //   let length = snapshot.size;
      //   this.notifications = length;
      //   // console.log("Notification Count -> ", this.notifications);
      // } else {
      //   this.notifications = 0;
      //   // console.log("Notification Count -> ", this.notifications);
      // }
    },
    convertProfileUrl(url) {
      if (url) {
        let breakurl = url.split("?")[0];
        let broken = url.split("?")[1];
        let dotsplit = breakurl.split(".");
        dotsplit[dotsplit.length - 2] = `${
          dotsplit[dotsplit.length - 2]
        }_800x1000`;
        let finalurl = `${dotsplit.join(".")}?${broken}`;
        return finalurl;
      } else {
        return "";
      }
    },
  },
  computed: {
    ...mapGetters({
      currentUser: "currentUser",
    }),
  },
  beforeDestroy() {},
  created() {},
  mounted() {
    //this.getNotificationCount();
  },
  watch: {
    "$i18n.locale"(to, from) {
      if (from !== to) {
        this.$router.go(this.$route.path);
      }
    },
  },
};
</script>


<style scoped>
.notification-bubble {
  background-color: red;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  font-weight: bold;
  top: 0px;
  right: 0px;
}

.announcement-banner {
  background-color: red;
  color: #fff;
  font-size: 0.8rem;
  text-align: center;
  padding: 0.5rem;
  /* border-radius: 20px; */
}

/* Navbar On Mobile */
.navbar-container {
}

.custom-user {
  display: flex;
  gap: 1rem;
}

.custom-navbar-inner-mobile .top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.custom-navbar-inner-mobile .top .nav-toggler svg {
  fill: #fff;
  transition: all ease 0.5s;
}

.custom-navbar-inner-mobile .after-toggled {
}

.custom-navbar {
  /* padding: 0rem 1rem 0.5rem 1rem; */
  padding-bottom: 0.5rem;
  background-color: #a07134;
}

.custom-user {
  display: flex;
  gap: 1rem;
}

#nav-collapse {
  border-radius: 10px;
  background-color: #fff !important;
  padding: 1rem;
  z-index: 999999;
}

.navbar-toggler {
  color: #f5f5f4 !important;
  border-color: #f5f5f4 !important;
}

.custom-navbar-mobile {
  padding: 0 1rem;
}

.custom-navbar-mobile .custom-nav-link {
  color: #333 !important;
  font-weight: bold;
}

@media only screen and (max-width: 992px) {
  .custom-navbar {
    display: none;
  }
}

@media only screen and (min-width: 992px) {
  .custom-navbar-mobile {
    display: none;
  }
}

@media only screen and (max-width: 400px) {
  .custom-navigation {
    margin-top: 1rem;
    padding: 0 1rem;
    flex-wrap: wrap;
  }

  .custom-user {
    margin-top: 1rem;
    display: flex;
  }
}

@media only screen and (min-width: 600px) {
  .custom-navbar .custom-navbar-inner-web {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 90%;
  }
}

@media only screen and (max-width: 600px) {
  .custom-navbar .custom-navbar-inner-web {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.custom-navigation {
  display: flex;
  gap: 1.2rem;
}

.custom-nav-link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  transition: all ease 0.5s;
  position: relative;
}

.custom-nav-link svg {
  /* height:30px; */
}

.custom-nav-link:hover {
  transform: scale(115%);
}

.custom-navigation .custom-nav-link .title {
  /* font-weight: 500; */
  margin-top: 5px;
}

.settings-icon {
  fill: #fff;
  stroke: #fff;
  cursor: pointer;
  transition: all ease 0.5s;
  height: 60px;
}
.settings-icon:hover {
  stroke: #e2e8f0;
  transform: scale(115%);
}

@media only screen and (max-width: 992px) {
  .settings-icon {
    stroke: #333;
    cursor: pointer;
  }
}

.powerup-btn {
  outline: none;
  border: none;
  background-color: #0f1415;
  border-radius: 10px;
  transition: all ease 0.5s;
  font-size: 12px;
}

.powerup-btn:hover {
  transform: scale(110%);
  background-color: #fff;
  color: #1e293b;
}
</style>
