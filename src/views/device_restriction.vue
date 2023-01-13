<template>
  <div class="container">
    <div
      class="
        d-flex
        flex-nowrap flex-column
        align-items-center
        justify-content-center
        h-100
      "
    >
      <img src="../assets/sad.gif" class="img-fluid w-25" />
      <h2 class="text-center text-primary">
        This application is only for desktop & laptop .
      </h2>
    </div>
  </div>
</template>
<script>
import AppLayout from "@/layouts/AppLayout";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["currentUser"]),
  },
  methods: {
    openModal(id) {
      this.$bvModal.show(id);
    },
    closeModal(id) {
      this.$bvModal.hide(id);
    },
  },
  mounted() {
    // this.openModal("announcement");
  },
};
</script>

<style scoped lang="scss">
#app {
  height: 100%;
}
</style>
