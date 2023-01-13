<template>
  <div class="whoviewed-page p-5">
    <b-row>
      <b-col lg="8" md="8" sm="12">
        <whoviewed />
      </b-col>
      <b-col class="right-section" lg="4" md="4" sm="12">
        <privatemode class="mb-3" />
        <types class="mb-3" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import privatemode from "@/components/privatemode.vue";
import types from "@/components/types.vue";
import whoviewed from "@/components/Viewed/whoviewed.vue";
export default {
  name: "search",
  components: {
    types,
    privatemode,
    whoviewed,
  },
  methods: {
    getProfile() {
      let body = {};

      axios
        .get(`${apiUrl}/discover/getPeople`)
        .then((res) => {
          console.log("res -> ", res);
        })
        .catch((err) => {
          console.log("res -> ", err);
        });
    },
  },
};
</script>

<style scoped>
/* Mobile Screen Classes */
@media only screen and (max-width: 800px) {
  .whoviewed-page {
    min-height: 100vh;
  }

  .right-section {
    display: none;
  }
}

/* Laptop Screen Classes */
@media only screen and (min-width: 800px) {
  .whoviewed-page {
    min-height: 100vh;
    margin-top: 55px;
  }

  .right-section {
    display: block;
  }
}
</style>
