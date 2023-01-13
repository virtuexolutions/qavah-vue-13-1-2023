<template>
  <div class="contact-page">
    <!-- Navbar -->
    <homepageHeader />

    <b-container class="main-section">
      <h2 class="text-center" v-html="content.middel.section_title">
        <!-- Contact Us -->
      </h2>
      <div v-html="content.middel.description"></div>
      <!--  <h4 class="mt-4">Signing-up for Qavah.US</h4>
      <p>
        Qavah is an Israelite courting site expressly for the African Diaspora
        Hebrew and Israelite +community in the United States. If you are ready
        to find someone who is like-minded and with whom you want to spend the
        rest of your life, then this Hebrew Matchmaking Israelite Courting site
        will aid you in finding your marriage match.
      </p>

      <p>
        If you encounter issues creating your profile at Qavah or have any other
        concerns regarding pricing or services, you can contact us. Furthermore,
        if you require help logging in to your profile, we are here at your
        service.
      </p> -->
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
        .get(`${apiUrl}/contact_us`)
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
  .main-section {
    margin-top: 100px;
  }
}

@media only screen and (min-width: 1150px) {
  .main-section {
    margin-top: 100px;
  }
}

.contact-page {
  background-image: url("@/assets/watermark.jpeg");
}

.custom-nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.main-section {
  min-height: calc(84vh - 90px);
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
