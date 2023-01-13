<template>
  <div class="seeking-page p-5">
    <b-row>
      <b-col lg="8" md="8" sm="12">
        <b-card class="mb-2 rounded-lg">
          <h2>Notifications</h2>
        </b-card>
        <allNotificationComponent />
      </b-col>
      <b-col lg="4" md="4" sm="12">
        <privatemode class="mb-3" />
        <types class="mb-3" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import privatemode from "@/components/privatemode.vue";
import types from "@/components/theyareyourtype.vue";

import allNotificationComponent from "@/components/Notificational/notificationPageComponent.vue";
export default {
  name: "search",
  components: {
    types,
    privatemode,
    allNotificationComponent,
  },
};
</script>

<style scoped>
.seeking-page {
  min-height: 100vh;
  margin-top: 55px;
}
</style>
