<template>
  <div class="settings-page">
    <b-link class="ml-2" @click="$router.go(-1)"> Go Back...</b-link>
    <h2 class="mb-4 ml-1">Account Settings</h2>

    <allsettings />
  </div>
</template>

<script>
import allsettings from "@/components/Settings/allsettings.vue";
export default {
  components: {
    allsettings,
  },
};
</script>

<style scoped>
/* Mobile Screen Classes */
@media only screen and (max-width: 992px) {
  .settings-page {
    background-image: url("@/assets/watermark.jpeg");
    min-height: 100vh;
    padding: 2rem;
  }
}

/* Laptop Screen Classes */
@media only screen and (min-width: 992px) {
  .settings-page {
    background-image: url("@/assets/watermark.jpeg");
    min-height: 100vh;
    margin-top: 55px;
    padding: 2rem;
    padding-top: 3rem;
  }
}
</style>
