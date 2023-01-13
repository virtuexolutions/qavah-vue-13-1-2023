<template>
  <div class="about-page">
    <!-- Navbar -->
    <homepageHeader />

    <b-container class="main-section" v-html="content.middel.description">
      <!-- <h2>About</h2>

      <p>
        Shalom Family! If you seek marriage within the Israelite community but
        have no idea where to start, consider posting your profile on Qavah.us.
        Qavah is a courting and match-making site exclusively for the
        African-Diaspora Israelite individual seeking a fulfilling marriage that
        The “Most High Yah” has ordained.
      </p>

      <p>
        Qavah is an Israelite courting site expressly for the African Diaspora
        Hebrew and Israelite +community in the United States. If you are ready
        to find someone who is like-minded and with whom you want to spend the
        rest of your life, then this Hebrew Matchmaking and Hebrew Israelite
        Courting site will aid you in finding your marriage match.
      </p>

      <p>
        Qavah is an Israelite inspired and well-thought-out match-making website
        for the “so-called African Americans,” Hebrews, and/or scattered
        Diaspora Israelites living in the USA. This site is “For us and by Us,”
        Although joining is free, please consider subscribing with Qavah and
        divesting in those carnal sites. Your subscriptions help us to target
        our advertising and grow your selection audience. If you are serious
        about your search, put All your trust in TMH and realize the true
        meaning behind Qavah.
      </p>

      <p>
        Qavah knows that every individual has developed his/her own conviction
        and belief structure. This website aims to have a filter for all primary
        Israelite ideas, core values, and doctrines that sometimes divide us and
        derail our search. Qavah.us hopes to narrow your selection process to
        Israelites that follow sound biblical principles. The team here at Qavah
        would admonish you to fast and pray, testing ALL spirits. Qavah helps to
        identify worthy candidates; the rest will be up to you!
      </p>

      <p>Steps for starting your courtship!</p>
      <h6>1. Create your match-making profile</h6>
      <p>
        It is crucial to complete all the steps for making a profile, as this is
        what brings value to the Israelite courting site and sets Qavah apart
        from those other carnal sites. Our diverse audience includes identifying
        markers such as Hebrews, Eber, Moors, Israelites, and others within the
        African Diasporas that call on TMH as their Elohim. Only those within
        Qavah’s network of Israelite communities who are used as potential
        matches can see your profile; otherwise, the privacy policy is in full
        effect at all times.
      </p>
      <p>
        You will have to be open and honest when providing essential information
        about your beliefs and values to take full advantage of our filters and
        algorithms. Honesty makes it possible to get a well-compatible match for
        your selection.
      </p>

      <h6>2.Now you can select matchmakers</h6>
      <p>
        If you have opted to be a subscriber, you can elect to have up to two
        dedicated and experienced matchmakers. They will reach out to you to
        better understand your dating or courting requirements beyond the
        profile.
      </p>

      <h6>You can then accept matches</h6>
      <p>
        With the proper use of our filters, you don't have to waste a lot of
        effort, money, and time on useless candidates that those carnal sites
        produce. Our site aimed at the African Diaspora Israelite community will
        search for matches and send you suggestions based on the filter
        preferences you have provided Qavah from your completed profile. If you
        like the candidate, you can save the match, or if not, then decline.
      </p>

      <h6>Start courting</h6>
      <p>
        When both individuals like, accept and share contact details, you are
        good to step into the next phase of the process, courting each other and
        getting to know each other more thoroughly. We suggest that you fast and
        pray as you set a date to meet each other.
      </p>
      <p>
        Through the Qavah.us site, you can search, send and select matches,
        therefore creating an efficient and straightforward dating or courting
        experience.
      </p>

      <p>
        <span class="font-weight-bold">Note:</span>Establishing your profile in
        Qavah.us is free. But to take full advantage of the features of our
        Israelite courting community, it is recommended to get a subscription
        with Qavah.us and be involved with shaping your courtship preferences.
      </p>

      <p>
        All Israelite, “African Diaspora,” and Hebrew communities are targeted
        for our marketing to build our community within the USA so our users
        will get the most bang for the buck when seeking and selecting a partner
        for marriage. So don't wait; post your profile with us today! The one
        you seek is looking for you also.
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
        .get(`${apiUrl}/about_us`)
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
