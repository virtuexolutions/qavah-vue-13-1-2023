<template>
  <div class="">
    <b-tabs
      pills
      nav-wrapper-class="w-20"
      active-nav-item-class="font-weight-bold "
      nav-class=""
      vertical
    >
      <b-tab active>
        <!-- Title -->
        <template #title>
          <span> Blocked Profile </span>
        </template>

        <b-card class="rounded-lg" title="Blocked Profiles">
          <blockedprofile />
        </b-card>
      </b-tab>
      <!-- <b-tab title="Removed Profiles"
        ><b-card class="rounded-lg" title="Removed Profiles">
          <removedprofile /> </b-card
      ></b-tab> -->
      <b-tab>
        <template #title>
          <span
            >Manage Subscriptions
            <b-badge variant="danger" v-if="subscriptionsCount > 0">{{
              subscriptionsCount
            }}</b-badge>
          </span>
        </template>
        <b-card class="rounded-lg" title="Manage Subscriptions">
          <managesubscription /> </b-card
      ></b-tab>
      <b-tab title="Email Notifications">
        <b-card class="rounded-lg" title="Email Notifications">
          <emailnotifications /> </b-card
      ></b-tab>
      <!-- <b-tab title="Mobile Push Notifications"
        ><b-card title="Mobile Push Notifications">
          <mobilepushnotifications /></b-card
      ></b-tab> -->
      <b-tab title="Site Notifications"
        ><b-card class="rounded-lg" title="Site Notifications">
          <sitenotifications /></b-card
      ></b-tab>
      <b-tab>
        <template #title>
          <span
            >Verify Your Account
            <b-badge variant="danger" v-if="verifyAccountCount > 0">{{
              verifyAccountCount
            }}</b-badge>
          </span>
        </template>
        <b-card class="rounded-lg" title="Verify Your Account">
          <verifyaccount /> </b-card
      ></b-tab>
      <!-- <b-tab title="Community Settings"
        ><b-card title="Stir Single Parents Community">
          <communitysettings /> </b-card
      ></b-tab> -->
    </b-tabs>
  </div>
</template>

<script>
import blockedprofile from "@/components/Settings/blockedprofiles.vue";
import removedprofile from "@/components/Settings/removedprofiles.vue";
import managesubscription from "@/components/Settings/managesubscription.vue";
import emailnotifications from "@/components/Settings/emailnotifications.vue";
import mobilepushnotifications from "@/components/Settings/mobilepushnotifications.vue";
import sitenotifications from "@/components/Settings/sitenotifications.vue";
import verifyaccount from "@/components/Settings/verifyyouraccount.vue";
import communitysettings from "@/components/Settings/communitysettings.vue";

import { getCurrentUser } from "@/utils";
import { mapGetters } from "vuex";
import { apiUrl } from "@/constants/config";
import Vue from "vue";
import axios from "axios";

export default {
  components: {
    blockedprofile,
    removedprofile,
    managesubscription,
    emailnotifications,
    mobilepushnotifications,
    sitenotifications,
    verifyaccount,
    communitysettings,
  },
  data() {
    return {
      profile: null,
      subscriptionsCount: 0,
      verifyAccountCount: 0,
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
    // async getNotificationCount() {
    //   const db = firebase.firestore();
    //   const nofiticationRef = db
    //     .collection("notifications")
    //     .doc(this.currentUser.uid)
    //     .collection("notifications");
    //   await nofiticationRef
    //     .where("read", "==", false)
    //     .get()
    //     .then((snapshot) => {
    //       if (!snapshot.empty) {
    //         let notifications = [];
    //         let subscriptionNotifications = [];
    //         let verifyAccountNotifications = [];
    //         snapshot.forEach((x) => {
    //           // Subscription Notifications
    //           if (x.type === "subscription" || x.type === "payment") {
    //             subscriptionNotifications.push(x.data());
    //           }
    //           // Subscription Notifications
    //           if (x.type === "bluetick") {
    //             verifyAccountNotifications.push(x.data());
    //           }
    //           notifications.push(x.data());
    //         });
    //         if (
    //           subscriptionNotifications &&
    //           subscriptionNotifications.length > 0
    //         ) {
    //           this.subscriptionsCount = subscriptionNotifications.length;
    //           console.log(
    //             "subscriptionNotifications.length -> ",
    //             subscriptionNotifications.length
    //           );
    //         }
    //         if (
    //           verifyAccountNotifications &&
    //           verifyAccountNotifications.length > 0
    //         ) {
    //           this.verifyAccountCount = verifyAccountNotifications.length;
    //           console.log(
    //             "verifyAccountNotifications.length -> ",
    //             verifyAccountNotifications.length
    //           );
    //         }
    //       }
    //     })
    //     .catch((err) => {
    //       console.log("err -> ", err.message);
    //     });
    // },
  },
  mounted() {
    this.getNotificationCount();
  },
};
</script>

<style scoped>
</style>