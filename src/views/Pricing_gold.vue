<template>
  <div class="pricing-gold-page">
    <!-- Navbar -->
    <homepageHeader />

    <b-container class="main-section">
      <div class="top-heading-container pt-4">
        <div class="top-heading">
          <h1 class="text-center" v-html="content.middel.bullet_heading_1">
            <!-- Choose Qavah Gold and <br />
            see who has eyes for you! -->
          </h1>

          <p class="text-center mt-2" v-html="content.middel.bullet_text_1">
            <!-- We know that this “Truth Walk” can be lonely sometimes. However,
            while we wait on Yah to act, we must “make our partitions known”.
            With the Qavah Gold additional features are added designed to save
            time by letting you know who likes you. Qavah Gold also allows you
            to Match, Pass, and expand photos to complete profiles with one
            simple tap. With all your admirers in one location, it is the best
            way to evaluate who best fits the description you have been
            believing Yah to obtain. See Feature List Below: -->
          </p>
        </div>
      </div>

      <div class="feature-card-container">
        <b-card class="feature-card rounded-lg" no-body>
          <div class="icon">
            <b-img :src="content.bottom.icon_image_1"></b-img>
          </div>
          <div class="content">
            <h2 class="title" v-html="content.bottom.icon_title_1">
              <!-- Sojourn -->
            </h2>
            <p class="subtitle" v-html="content.bottom.icon_text_1">
              <!-- Vibe with other Israelites throughout the world using Qavah’s
              Sojourn pass! -->
            </p>
          </div>
        </b-card>

        <b-card class="feature-card rounded-lg" no-body>
          <div class="icon">
            <b-img :src="content.bottom.icon_image_2"></b-img>
          </div>
          <div class="content">
            <h2 class="title" v-html="content.bottom.icon_title_2">
              <!-- Fancy -->
            </h2>
            <p class="subtitle" v-html="content.bottom.icon_text_2">
              <!-- Capture their attention with unlimited Fancys’ to let them know
              you are interested. -->
            </p>
          </div>
        </b-card>

        <b-card class="feature-card rounded-lg" no-body>
          <div class="icon">
            <b-img :src="content.bottom.icon_image_3"></b-img>
          </div>
          <div class="content">
            <h2 class="title" v-html="content.bottom.icon_title_3">
              <!-- Super Fancys -->
            </h2>
            <p class="subtitle" v-html="content.bottom.icon_text_3">
              <!-- Capture their immediate attention with expression! This feature
              adds a little extra on to your intent. Says I really really like
              you! -->
            </p>
          </div>
        </b-card>

        <b-card class="feature-card rounded-lg" no-body>
          <div class="icon">
            <b-img :src="content.footer.icon_image_1"></b-img>
          </div>
          <div class="content">
            <h2 class="title" v-html="content.footer.icon_title_1">
              <!-- Spotlight -->
            </h2>
            <p class="subtitle" v-html="content.bottom.icon_text_1">
              <!-- Put your profile on the top tier and gain more attention. -->
            </p>
          </div>
        </b-card>

        <b-card class="feature-card rounded-lg" no-body>
          <div class="icon">
            <b-img :src="content.footer.icon_image_2"></b-img>
          </div>
          <div class="content">
            <h2 class="title" v-html="content.footer.icon_title_2">
              <!-- Say What? -->
            </h2>
            <p class="subtitle" v-html="content.bottom.icon_text_2">
              <!-- Go back and retrieve your last Kan or Lo. -->
            </p>
          </div>
        </b-card>
      </div>

      <div class="btn-container mt-4">
        <b-button class="custom-btn-1" @click="proceed"
          >Get Started Now</b-button
        >
      </div>
    </b-container>

    <sectionFooter />
  </div>
</template>

<script>
import homepageHeader from "../components/Landingpage/homepageHeader.vue";
import sectionFooter from "../components/Landingpage/footerComponent.vue";
import { mapGetters } from "vuex";
import { apiUrl } from "@/constants/config";
import axios from "axios";
export default {
  components: {
    sectionFooter,
    homepageHeader,
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  data() {
    return {
      content: null,
    };
  },
  methods: {
    proceed() {
      if (this.currentUser) {
        this.$router.push("/dashboard/powerups");
      } else {
        this.$router.push("/user/login");
      }
    },
    get_content() {
      axios
        .get(`${apiUrl}/product/prcing-gold`)
        .then((res) => {
          if (res.status == 200) {
            this.content = res.data.content;
          }
        })
        .catch((err) => {
          console.log("err -> ", err);
        });
    },
  },
  mounted() {
    this.get_content();
  },
};
</script>

<style scoped>
/* Global Classes */

/* Mobile Screen Classes */
@media only screen and (max-width: 700px) {
  .top-heading {
    max-width: 100%;
    text-align: center;
  }
}

/* Laptop Screen Classes */
@media only screen and (min-width: 700px) {
  .top-heading {
    max-width: 60%;
    text-align: center;
  }
}

@media only screen and (max-width: 1150px) {
  .main-section {
    margin-top: 100px;
  }
}

@media only screen and (min-width: 1150px) {
  .main-section {
    margin-top: 99px;
  }
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
  font-size: 14px;
}

.custom-btn-1:hover {
  background-color: #ac854e !important;
  transform: scale(110%);
}
.pricing-gold-page {
  background-image: url("@/assets/watermark.jpeg");
}

.top-heading-container {
  display: flex;
  justify-content: center;
  align-items: center;
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
  flex-wrap: wrap;
}

.feature-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0.5rem;
  width: 300px;
  padding: 1rem;
}

.feature-card .content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.main-section {
  min-height: 70vh;
}
</style>
