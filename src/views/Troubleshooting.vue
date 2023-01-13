<template>
  <div class="support-page">
    <!-- Navbar -->
    <homepageHeader />

    <b-container class="main-section">
      <h2>Troubleshooting</h2>

      <b-card class="round-card">
        <h6 class="text-center">Let us know your issue</h6>
        <div class="d-flex justify-content-center align-items-center">
          <b-form-radio-group
            v-model="troubleshooting.type"
            :options="options"
            class="mb-3"
            value-field="item"
            text-field="name"
            disabled-field="notEnabled"
          ></b-form-radio-group>
        </div>

        <b-form-group label="Issue:" v-if="troubleshooting.type === 'Other'">
          <b-form-textarea
            class="custom-field-textarea"
            v-model="troubleshooting.otherIssue"
            rows="6"
            no-resize
          ></b-form-textarea>
        </b-form-group>

        <b-row>
          <b-col lg="6" md="6" sm="12">
            <b-form-group label="Name">
              <b-form-input
                type="text"
                class="custom-field"
                v-model="troubleshooting.name"
                placeholder="Your Name"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col lg="6" md="6" sm="12">
            <b-form-group label="Email">
              <b-form-input
                type="text"
                class="custom-field"
                v-model="troubleshooting.email"
                placeholder="Your Email"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-form-group label="Details">
          <b-form-textarea
            class="custom-field-textarea"
            v-model="troubleshooting.details"
            rows="10"
            no-resize
          ></b-form-textarea>
        </b-form-group>

        <div class="d-flex justify-content-center align-items-center">
          <b-button class="custom-btn-1">Submit</b-button>
        </div>
      </b-card>
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
    return {
      troubleshooting: {
        type: "",
        name: "",
        email: "",
        message: "",
      },
      options: [
        { item: "Account Issue", name: "Account Issue" },
        { item: "Payment Issue", name: "Payment Issue" },
        { item: "Other", name: "Other" },
      ],
    };
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
    margin-top: 120px;
  }
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

.support-page {
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
  transition: all ease 0.5s;
}

.custom-btn-1:hover {
  transform: scale(110%);
  cursor: pointer;
}
</style>
