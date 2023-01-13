<template>
  <div class="seeking-page p-5">
    <b-row>
      <b-col lg="8" md="8" sm="12">
        <searchComponent />
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
import searchComponent from "@/components/Seeking/savedSearchPageComponent.vue";
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
  }

  .right-section {
    display: none;
  }
}

/* Laptop Screen Classes */
@media only screen and (min-width: 992px) {
  .seeking-page {
    padding-top: 1rem;
    min-height: 100vh;
    margin-top: 53px;
  }
  .right-section {
    display: block;
  }
}
</style>
