<template>
  <div class="learn-page">
    <homepageHeader />
    <div class="learn-page-inner p-5">
      <b-container v-html="content.middel.description">
        <!-- <h2>Qavah Court</h2>
        <p>Coming Soon!</p>

        <h6>What is Qavah Court?</h6>

        <p>
          Qavah Court is intended to be part of our accountability strategy; As
          part of our process, we intend to facilitate discussions with the
          accuser and anyone accused of bad acting or rude behavior while using
          the Qavah site.
        </p>

        <p>
          Reference Deuteronomy 19:15
          <em
            >"A single witness shall not suffice against a person for any crime
            or for any wrong in connection with any offense that he or she has
            committed. Only on the evidence of two or three witnesses shall a
            charge be established.”</em
          >
        </p>

        <p>
          Qavah is serious about maintaining a safe environment for all
          Israelites and the stranger taking hold of the covenant. So in keeping
          with this command, Qavah intends to select Israelites of solid
          character to moderate discussions between the accused and the accuser
          when a profile is reported through the proper channels within the
          Qavah Site.
        </p>

        <p>
          A Qavah admin will then flag the offender's profile and request an
          appropriate time to discuss the issue; this is why we call it "Qavah
          Court"
        </p>

        <p>
          Lastly, if the complaint is deemed a worthy issue, the Qavah admin
          will send a calendar request to the offender and the accuser to appear
          on the “Qavah Court Platform'' that will be simulcasted on the Qavah
          platform as well as the Youtube channel. If the offense is worthy of
          additional action, He or she may have their profile temporarily
          blocked or permanently banned from utilizing our courting tools and
          platform.
        </p> -->
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
        .get(`${apiUrl}/qavah/court`)
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
