<template>
  <div class="about-page">
    <!-- Navbar -->
    <homepageHeader />

    <b-container class="main-section">
      <h2 class="text-center">Hi. How can we help?</h2>

      <div class="mt-4">
        <!-- <b-tabs pills card align="center">
          <b-tab
            title="A Guide To Qavah"
            @click="$router.push('/guide-to-qavah')"
            active
          >
          </b-tab>
          <b-tab
            title="Troublesshooting"
            @click="$router.push('/troubleshoot')"
          >
          </b-tab>
          <b-tab
            title="Security & Privacy"
            @click="$router.push('/privacy-policy')"
          >
          </b-tab>
          <b-tab title="Safely & Reporting" @click="$router.push('/safely')">
          </b-tab>
        </b-tabs> -->

        <div class="d-flex justify-content-center align-items-center">
          <b-button class="custom-btn-1 mr-2" to="/guide-to-qavah"
            >A Guide To Qavah</b-button
          >
          <b-button class="custom-btn-1 mr-2" to="/troubleshoot"
            >Troublesshooting</b-button
          >
          <b-button class="custom-btn-1 mr-2" to="/privacy-policy"
            >Security & Privacy</b-button
          >
          <b-button class="custom-btn-1" to="/safety"
            >Safely & Reporting</b-button
          >
        </div>
      </div>
    </b-container>

    <sectionFooter />
  </div>
</template>

<script>
import homepageHeader from "../components/Landingpage/homepageHeader.vue";
import sectionFooter from "../components/Landingpage/footerComponent.vue";
export default {
  components: {
    sectionFooter,
    homepageHeader,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
@media only screen and (max-width: 1150px) {
  .main-section {
    margin-top: 100px;
  }
}

@media only screen and (min-width: 1150px) {
  .main-section {
    margin-top: 100px;
  }
}

.round-card {
  border-radius: 10px;
}

.custom-btn-1 {
  background-color: #93652b !important;
  outline: none;
  border: none;
  border-radius: 10px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7rem 1.3rem;
  transition: all ease 0.5s;
}

.custom-btn-1:hover {
  background-color: #ac854e !important;
  transform: scale(105%);
}

.custom-field {
  border-radius: 25px !important;
  height: 35px !important;
  border-color: #93652b !important;
  padding: 15px !important;
  font-size: 10px;
}
.custom-field-textarea {
  border-radius: 25px !important;
  border-color: #93652b !important;
  outline: none;
  font-size: 10px;
}

.about-page {
  background-image: url("@/assets/watermark.jpeg");
}

.content-con {
  text-align: center;
  width: 100%;
  /* max-width: 500px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

.custom-nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.feature-card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.feature-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  max-width: 400px;
  min-height: 258px;
  text-align: center;
  padding: 1rem;
}

.feature-card .icon .icon-1 {
  fill: #3bcaf7;
  stroke: #3bcaf7;
}

.feature-card .icon .icon-2 {
  fill: #a31fec;
  stroke: #a31fec;
}

.feature-card .content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.main-section {
  min-height: 70vh;
}

.custom-btn-1 {
  background-color: #93652b !important;
  outline: none;
  border: none;
  border-radius: 10px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
}
</style>
