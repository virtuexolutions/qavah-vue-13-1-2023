<template>
  <div class="seeking-page p-5">
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
          <h2>
            Mutual Seeking
            <vue-custom-tooltip
              position="is-bottom"
              :multiline="true"
              label="Based on what you told us in your profile, you are looking for someone like them and they are looking for someone like you. If you don't agree, you can update your profile."
            >
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                fill="currentColor"
                viewBox="0 0 29.536 29.536"
                style="enable-background: new 0 0 29.536 29.536"
                xml:space="preserve"
                height="20"
                class="info-icon"
              >
                <g>
                  <path
                    d="M14.768,0C6.611,0,0,6.609,0,14.768c0,8.155,6.611,14.767,14.768,14.767s14.768-6.612,14.768-14.767
		C29.535,6.609,22.924,0,14.768,0z M14.768,27.126c-6.828,0-12.361-5.532-12.361-12.359c0-6.828,5.533-12.362,12.361-12.362
		c6.826,0,12.359,5.535,12.359,12.362C27.127,21.594,21.594,27.126,14.768,27.126z"
                  />
                  <path
                    d="M14.385,19.337c-1.338,0-2.289,0.951-2.289,2.34c0,1.336,0.926,2.339,2.289,2.339c1.414,0,2.314-1.003,2.314-2.339
		C16.672,20.288,15.771,19.337,14.385,19.337z"
                  />
                  <path
                    d="M14.742,6.092c-1.824,0-3.34,0.513-4.293,1.053l0.875,2.804c0.668-0.462,1.697-0.772,2.545-0.772
		c1.285,0.027,1.879,0.644,1.879,1.543c0,0.85-0.67,1.697-1.494,2.701c-1.156,1.364-1.594,2.701-1.516,4.012l0.025,0.669h3.42
		v-0.463c-0.025-1.158,0.387-2.162,1.311-3.215c0.979-1.08,2.211-2.366,2.211-4.321C19.705,7.968,18.139,6.092,14.742,6.092z"
                  />
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
              <!-- <svg
                xmlns="http://www.w3.org/2000/svg"
                class="info-icon"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg> -->
            </vue-custom-tooltip>
          </h2>
        </b-card>
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

import searchComponent from "@/components/Seeking/mutualSeekingComponent.vue";
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
.info-icon {
  fill: darkcyan;
}
</style>
