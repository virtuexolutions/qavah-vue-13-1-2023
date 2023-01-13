<template>
  <div class="privacy-page">
    <!-- Navbar -->
    <homepageHeader />

    <b-container class="main-section">
      <h2 class="text-center" v-html="content.middel.section_title">
        <!-- Security and privacy -->
      </h2>
      <div v-html="content.middel.description"></div>
      <!-- <h4 class="mt-4">1) Your personal information</h4>
      <p>
        When you register yourself at Qavah, you provide various personal
        information that may include your contact information like your name,
        address, date of birth, email, dating preferences, contact information,
        mailing address, etc. During the process of profile creation, you are
        asked to upload a photo. If you have subscribed to one of the premium
        features that allow you to video chat with your match, your ID and your
        IP address will be recorded strictly to provide this service. To buy the
        premium feature, we require your name, address, email ID, phone number,
        and payment information which may include the information of your debit
        or credit card.
      </p>

      <h4 class="mt-4">2) Cookies</h4>
      <p>
        Qavah uses cookies to monitor information while using or accessing any
        of our services. The cookies work to let us count the number of new
        visitors to our website. They let us track the trends and preferences of
        the users. Qavah relies on cookies for the convenient operation of its
        website. Therefore if you or your browser will not accept cookies, the
        website may not function appropriately.
      </p>

      <h4 class="mt-4">3) Mobile notification</h4>
      <p>
        A choice can be made in your preference to receive mobile notifications
        the notifications will consist of information about our potential
        matches, making you aware of any message you have received or any other
        related news. If you do not want such communication, you can simply turn
        them off.
      </p>

      <h4 class="mt-4">4) Incomplete information</h4>
      <p>
        If you don’t complete all the required personal questions, this will
        undoubtedly result in a limited ability to complete the application
        process essential for our services. For instance, we won’t be able to
        consider your payment or match you with the correct user if ALL the
        required information has not been provided.
      </p>

      <h4 class="mt-4">5) Your information is used for</h4>
      <p>
        Qavah uses the information you have provided to us for various reasons
        outlined below.
      </p>
      <ul>
        <li>To provide our offerings.</li>
        <li>To establish your profile and manage the user accounts.</li>
        <li>
          To publically display your profile to your fancies that may include a
          user name, login data, and other profile content like videos and
          photos.
        </li>
        <li>
          To offer customer support, troubleshoot issues, and respond to
          comments, requests and questions.
        </li>
        <li>To process every transaction that includes renewal and refund.</li>
        <li>For administrative messages and services announcements.</li>
        <li>
          For communication regarding the newsletter, special discounts,
          promotions, new product news, and event notifications.
        </li>
        <li>And for some other purposes with user consent.</li>
      </ul> -->
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
        .get(`${apiUrl}/privacy`)
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

.privacy-page {
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
