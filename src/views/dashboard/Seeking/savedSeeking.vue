<template>
  <div class="seeking-page">
    <b-row>
      <b-col lg="8" md="8" sm="12">
        <b-link @click="$router.go(-1)">
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </i>
          Go Back</b-link
        >
        <b-card class="mt-2 mb-2 rounded-lg">
          <h2>Saved Seeking</h2>
        </b-card>
        <searchComponent />
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
import types from "@/components/theyareyourtype.vue";

import searchComponent from "@/components/Seeking/saveSearches.vue";
export default {
  name: "search",
  components: {
    types,
    privatemode,
    searchComponent,
  },
};
</script>

<style scoped>
/* Mobile Screen Classes */
@media only screen and (max-width: 992px) {
  .seeking-page {
    min-height: 100vh;
    padding: 2rem;
  }

  .right-section {
    display: none;
  }
}

/* Laptop Screen Classes */
@media only screen and (min-width: 992px) {
  .seeking-page {
    min-height: 100vh;
    margin-top: 53px;
    padding: 2rem;
    padding-top: 3rem;
  }
  .right-section {
    display: block;
  }
}
</style>
