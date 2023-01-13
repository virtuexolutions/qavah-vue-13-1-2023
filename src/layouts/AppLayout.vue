<template>
  <div class="custom-app">
    <topnav />
    <!-- <b-container class="app-body mx-auto"> -->
    <slot></slot>
    <!-- </b-container> -->
    <!-- <footer-component /> -->
  </div>
</template>

<script>
import Topnav from "@/components/dashboardNavbar.vue";
import Footer from "@/components/dashboardFooter.vue";

export default {
  components: {
    topnav: Topnav,
    "footer-component": Footer,
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {
    // setTimeout(() => {
    //   document.body.classList.add("default-transition");
    // }, 100);
  },
};
</script>

<style scoped>
/* /* .custom-app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}



.app-body {
  min-height: 90vh;
  margin-top: 70px;
   padding: 2rem; 
} 

@media only screen and (max-width: 992px) {
  .app-body {
    margin-top: 0 !important;
  }
} */

.custom-app {
  padding: 0;
}
</style>
