<template>
  <div class="learn-page">
    <homepageHeader />
    <div class="learn-page-inner p-5">
      <b-container v-html="content.middel.description">
        <!-- <h2>Qavah Live</h2>
        <p>Coming Soon!</p>

        <h6>What is Qavah Live?</h6>

        <p>
          Qavah.us is an Israelite united platform with an express intent to
          open our lines of communication. That being said, to ensure that
          Qavah.us remains a safe and effective way for Israelites to unite, we
          are commissioning "Qavah Live." This live feed will be a moderated
          open discussion that will allow for honest feedback that Israelite
          singles encounter on their journey to meet their suitable spouse.
          While we won't allow personal attacks, we can constructively discuss
          current issues that divide us that Israelites face "All In Love" on a
          safe and secure platform.
        </p>

        <p>
          We intend to post the weekly schedule and agenda topics for our live
          discussions on our events page. Qavah Live will also facilitate a way
          to take suggestions for current events topics that call for us to
          apply our faith and belief structure to allow Israelites to navigate
          our current climate.
        </p>

        <p>
          We look forward to our Qavah family discussions and hope to see you
          all there.
        </p>

        <p>Shalawam!</p> -->
      </b-container>
    </div>

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
        .get(`${apiUrl}/qavah/live`)
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
@media only screen and (max-width: 1150px) {
  .learn-page-inner {
    margin-top: 80px;
  }
}

@media only screen and (min-width: 1150px) {
  .learn-page-inner {
    margin-top: 90px;
  }
}

.learn-page-inner {
  min-height: 80vh;
}
.learn-page-inner::before {
  content: "";
  position: fixed;
  min-height: 250vh;
  width: 100vw;
  top: -50vh;
  bottom: 0;
  left: 0;
  right: 0;
  background: url("@/assets/landing-page/letters-black.png") 0 0 repeat;
  z-index: -1;
  background-size: 200px 100px;
  background-position: center;
  opacity: 0.1;
  transform: rotate(-75deg);
}

.learn-page {
  background-image: url("@/assets/watermark.jpeg");
}

.custom-nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.sections {
}

.main-section {
  min-height: 70vh;
  background: transparent;
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
