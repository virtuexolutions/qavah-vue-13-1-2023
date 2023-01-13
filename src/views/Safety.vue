<template>
  <div class="safety-page">
    <!-- Navbar -->
    <homepageHeader />

    <b-container class="main-section" v-html="content.middel.description">
      <!-- <h2 class="mb-4">Safety</h2>

      <h4 class="mb-4">Welcome to the Qavah.us Israelite community!</h4>
      <p>
        If you're honest, kind, and respectful to others, you'll always be
        welcome on Qavah. If you have chosen not to be any of those mentioned
        above, you may get removed from our site. Our goal is to allow users to
        express themselves freely as long as it does not impose on others'
        ability to do the same. Everyone is held to the same standard on
        Qavah.us. We're asking you to be considerate, respect other values and
        beliefs, think before you act, and abide by our community guidelines
        both on and offline. Ans Yes: your offline behavior can lead to the
        termination of your Qavah.US account. Below is a list of Qavah.us
        policies. If you violate any of these policies, you might be banned from
        Qavah. We encourage you to report any behavior that violates our
        guidelines and read up on our Safety Tips.
      </p>

      <h4 class="mb-4">Qavah Guidelines</h4>

      <h6>Nudity/Sexual Content</h6>
      <p>
        It goes without saying that the target audience is a spiritual
        community; all profile candidates should be modestly dressed. Please
        keep it classy and appropriate for public consumption. No nudity, no
        sexually explicit content, will be tolerated if reported; We will remove
        your profile! So keep it clean.
      </p>

      <h6>Harassment</h6>
      <p>
        Do not engage or encourage others to engage in any targeted abuse or
        harassment against any other Qavah user. This includes sending any
        unsolicited sexual content to your matches. Reports of stalking,
        threats, bullying, or intimidation are taken very seriously.
      </p>

      <h6>Violence and Physical Harm</h6>
      <p>
        We do not tolerate any violent, graphic, or inappropriate content on
        Qavah.us. Any actions or content that advocate for or threatens violence
        of any violence, including threatening or promoting terrorism. Physical
        assault, coercion, and any acts of violence are strictly prohibited and
        can result in your profile in profile removal.
      </p>

      <h6>Hate Speech</h6>
      <p>
        Qavah.us is a courtship site; therefore, any content that promotes,
        advocates for any of the following: bigotry, hatred, or violence against
        individuals or groups based on factors like (but not limited to) race,
        ethnicity, religious affiliation, disability, gender, age, national
        origin, sexual orientation, or gender identity is strictly prohibited.
      </p>

      <h6>Private Information</h6>

      <p>
        Please keep from divulging any private information, rather it is yours
        or anyone else’s, from the view of the Qavah’s users, and remember to
        use all privacy best practices. The aforementioned includes social
        security numbers, passports, passwords, financial information, or
        unlisted contact information, including phone numbers, email addresses,
        and home/work addresses.
      </p>

      <h6>Spam</h6>
      <p>
        Don’t use Qavah to drive people to external websites via a link or
        otherwise.
      </p>
      <h6>Promotion or Solicitation</h6>
      <p>
        Soliciting other users is prohibited on Qavah. It’s fine to invite your
        connections to something that you’re doing, but if the purpose of your
        profile is to advertise your event or business, non-profit, political
        campaign, contest, or conduct research, we may delete your account.
      </p>
      <h6>Prostitution and Trafficking</h6>
      <p>
        Promoting or advocating for commercial sexual services, human
        trafficking or other non-consensual sexual acts is strictly prohibited
        and will result in your account being banned from Qavah.us.
      </p>
      <h6>Scamming</h6>
      <p>
        Qavah has a zero-tolerance policy on any predatory behavior of any kind.
        Anyone attempting to get other users’ private information for fraudulent
        or illegal activity may be banned. Any user caught sharing their own
        financial account information (PayPal, Venmo, etc.) for the purpose of
        receiving money from other users may also be banned from Qavah.us.
      </p>

      <h6>Impersonation</h6>
      <p>
        Don’t be a Catfish! Don’t pretend to be someone else. Do not impersonate
        or otherwise misrepresent affiliation, connection, or association with
        any person or entity. Those mentioned above also include parody
        accounts.
      </p>

      <h6>Minors</h6>
      <p>
        You must be 18 years of age or older to use Qavah. As such, we do not
        allow images of unaccompanied minors. If you want to post photos of your
        children, please make sure that you are in the photo as well. If you see
        a profile that includes an unaccompanied minor, encourages harm to a
        minor, or depicts a minor in a sexual or suggestive way, please report
        it immediately.
      </p>

      <h6>Copyright and Trademark Infringement</h6>
      <p>
        If it’s not yours, don’t post it. If your Qavah profile includes any
        work that is copyrighted or trademarked by others, don’t display it,
        unless you are allowed to do so.
      </p>

      <h6>Illegal Usage</h6>
      <p>
        Don’t use Qavah to do anything illegal. If it’s illegal IRL, it’s
        illegal on Qavah.
      </p>
      <h6>One Person, One Account</h6>
      <p>
        Qavah accounts cannot have multiple owners, so don’t create an account
        with your friend or significant other. Additionally, please don’t
        maintain multiple Qavah accounts.
      </p>

      <h6>Third-Party Apps</h6>
      <p>
        The use of any apps created by anyone other than Qavah that claim to
        offer our service or unlock special Qavah features (like auto-swipers)
        is not allowed.
      </p>
      <h6>Account Dormancy</h6>
      <p>
        If you don’t log in to your Qavah account in 2 years, we may delete your
        account for inactivity.
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
        .get(`${apiUrl}/saftey`)
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

.safety-page {
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
