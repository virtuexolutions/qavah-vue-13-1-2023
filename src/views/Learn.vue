<template>
  <div class="learn-page">
    <homepageHeader />
    <div class="learn-page-inner">
      <!-- Navbar -->
      <b-container class="mt-4">
        <h2>So, Why Choose Qavah.us?</h2>

        <h4 class="my-2">Shalom Family!</h4>

        <p>
          When it comes to dating apps, our team at Qavah.us understands you
          have options: Badoo, Bumble, Hinge, Match, POF, OK Cupid, and many
          more. However, our command is to "Come out and be ye separated," This
          means now you have no excuses. Divest from those other carnal sites
          and fully support Qavah.us to find your mate and build our community
          connections. The more support (Subscribers) we get from the Israelite
          community, the better we can make your user experience with the web
          and phone application and features.
        </p>

        <p>
          So, what options do you have? Qavah is not a dating site but the only
          Israelite-specific web-based Courting site designed for us and by us,
          this means (The Diaspora Israelite ) community within these United
          States. Our Israelite filters will aid you in direct engagement with
          individuals having the same convictions you have selected that are
          also seeking marriage. Qavah intends to facilitate connections that
          start the Israelite courtships process.
        </p>
      </b-container>

      <b-container>
        <b-row class="sections">
          <b-col lg="6" md="6" sm="12">
            <div class="section">
              <h4>Finding your Queen/King</h4>
              <p>
                Family, The Israelite community, is very diverse, and doctrines
                differ vastly, and with that in mind, we are not judging
                anyone’s convictions. Qavah understands that we all have our
                beliefs and convictions and, therefore, have focused on creating
                filters that aid you in selecting your convictions that are
                important to you. Qavah site tries to capture all the primary
                Israelite doctrines, ideas, and core values essential to
                Israelites, making courtship selection less complicated by
                filtering out the beliefs less desired by you. By completing
                your Israelite beliefs and values section in addition to the
                basic profile information, we hope to make available Israelites
                more evenly yoked with your convictions.
              </p>

              <p>
                Begin your courtship by completing the required doctrine
                beliefs, values, portion of the registration.
              </p>

              <p>
                Next, you will complete the basic profile info such as your
                height, age, etc. This process will also include uploading at
                least three photos with a headshot and full-body pictures.
                Please understand this is a courting site, so please use a
                modest mindset when selecting Kingdom-worthy images.
              </p>

              <p>
                Using the Qavah filters, you can engage like-minded Israelites
                looking for courtship using the card deck swipe right or swipe
                left features <span class="font-weight-bold">"Kan"</span> for
                Yes and <span class="font-weight-bold">"Lo"</span> for No.
              </p>

              <p>
                Posting a profile is free, but subscriptions help us improve the
                user experience and develop the most desired features by our
                Israelite community.
              </p>
            </div>
          </b-col>

          <b-col lg="6" md="6" sm="12">
            <div class="section">
              <h4>Go With Us Anywhere</h4>

              <p>
                Rather you are visiting the next city over or having traveled
                across the US, Qavah can adjust to your desired location and
                identify Israelites nearby with your same beliefs and
                convictions. Chat with people near and far with features that
                let you match anywhere within the USA.
              </p>
            </div>
            <div class="section">
              <h4>Date Safer With Face to Face</h4>

              <p>
                Qavah.US knows that this can be a lonely walk, and single people
                have it extra hard with the new Covid -19 restrictions. Whatever
                your beliefs you have, this means putting safety first. As we
                increase our subscription, we will add Face to Face video to our
                apps, thus allowing you to meet anywhere to connect with your
                beloved.
              </p>
            </div>
            <div class="section">
              <h4>Catfish Prevention</h4>

              <p>
                Yes, Israelites, even we have imposters amongst us. To remedy
                this, Qavah’s Photo Verification lets you prove you’re the
                person in your photos. When you see people on our Qavah site
                with a gold star, they have met the standards for being
                authentic.
              </p>
            </div>

            <div class="section">
              <h4>See Who Likes You</h4>

              <p>
                Is anticipation getting the best of you? We get it. A Qavah
                Platnim subscription lets you see all the people who Like you,
                saving you valuable time as you can check the dashboard to see
                if your admirer is agreeable to your convictions.
              </p>
            </div>
          </b-col>
          <b-col lg="6" md="6" sm="12"> </b-col>
        </b-row>
      </b-container>
    </div>

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
};
</script>

<style scoped>
@media only screen and (max-width: 1150px) {
  .learn-page-inner {
    margin-top: 100px;
  }
}

@media only screen and (min-width: 1150px) {
  .learn-page-inner {
    margin-top: 100px;
  }
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
