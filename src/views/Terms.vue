<template>
  <div class="terms-page">
    <!-- Navbar -->
    <homepageHeader />

    <b-container class="main-section">
      <h2 class="text-center" v-html="content.middel.section_title">
        <!-- Terms And Conditions -->
      </h2>
      <div v-html="content.middel.description"></div>
      <!-- <h4 class="mt-4">1) Minimum age</h4>
      <p>
        The minimum age for a user to register at Qavah should be 18 years old.
        Qavah will not let any user younger than 18 years old register
        themselves.
      </p>

      <h4 class="mt-4">2) Criminal history</h4>
      <p>
        By registering into Qavah, you represent that you have never been
        involved in criminal acts like a felony or some other offense. Qavah has
        the right to conduct a criminal background check from the public records
        at any time to confirm your agreement.
      </p>

      <h4 class="mt-4">3) No incorrect information</h4>
      <p>
        It is advisable that you should not provide any misleading, false, and
        inaccurate information to Qavah and even to other users. If any
        information offered to Qavah or some other user is deceptive, incorrect,
        or faulty, you are required to notify
      </p>

      <h4 class="mt-4">4) No commercial or advertising</h4>
      <p>
        You are not permissible to solicit or advertise any Qavah user to sell
        or buy any product. You cannot forward any spam email, chain letters, or
        junk to other users. You are not allowed to transmit commercial
        messages. Furthermore, you cannot advertise, sell, or buy user
        information without consent. If these terms are violated, you will be
        treated with applicable law for unsolicited communication, and your
        profile could be removed.
      </p>

      <h4 class="mt-4">5) No harassment of Qavah agents or employees</h4>
      <p>
        You will not annoy, threaten, harass or intimidate any Qavah agents or
        employees engaged in helping and providing you with the services.
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
        .get(`${apiUrl}/terms/and/conditions`)
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
    margin-top: 120px;
  }
}

.main-section::before {
  /* content: '';
  position: fixed;
  min-height: 250vh;
  width: 100vw;
  top: -50vh;
  bottom: 0;
  left: 0;
  right: 0;
  background: url('@/assets/landing-page/letters-black.png') 0 0 repeat;
  backdrop-filter: grayscale(1);
  z-index: 0;
  overflow: hidden;
  background-size: 200px 100px;
  background-position: center;  
  opacity: 0.1;
  transform: rotate(-75deg); */
}

.terms-page {
  background-image: url("@/assets/watermark.jpeg");
}

.custom-nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.main-section {
  min-height: 70vh;
  overflow: hidden;
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
