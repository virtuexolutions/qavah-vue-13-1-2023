<template>
  <div class="support-page">
    <!-- Navbar -->
    <homepageHeader />

    <b-container class="main-section">
      <h2>Guide</h2>

      <h6 class="mt-4">Is Qavah free?</h6>

      <p>
        It is free to create an account on Qavah, but if you want to take full
        advantage of the Israelite courting platform, we recommend selecting a
        subscription for premium features on Qavah. A level of premium features
        is available in each plan according to your budget and goal. These
        unique tools are made available after purchasing and subscribing to
        Qavah. If you want to experience the enhanced features of Israelite
        courting, Qavah Gold, Qavah Plus, and Qavah Platinum supply you with
        various tools to aid you in your search.
      </p>

      <h6 class="mt-4">What is the minimum age for registration?</h6>
      <p>
        The minimum age to register at Qavah is 18 years old. You would not be
        able to sign up at Qavah if you do not meet the requirement of minimum
        age.
      </p>

      <h6 class="mt-4">Age-restriction on Qavah</h6>
      <p>
        The minimum age for registering with Qavah is 18 years old. If you are
        not 18 years old, you will not be able to sign up until you have reached
        this requirement. If you got your age wrong while submitting your
        information, and if you are, in fact, above 18, you can change the data
        from your profile settings.
      </p>

      <h6 class="mt-4">Can I retrieve my last “Kan” and “Lo”?</h6>
      <p>
        Only Qavah subscribers can retrieve their last Kan and Lo. To use this
        feature, you have to subscribe to the premium features like Qavah Plus,
        Qavah Gold, and Qavah Platinum.
      </p>

      <h6 class="mt-4">What is the next step after finding the match?</h6>
      <p>
        After both individuals like, accept and share contact details, they are
        ready to step into the next phase of courting each other and getting to
        know each other more thoroughly.
      </p>

      <h6 class="mt-4">Can I use Qavah while I am traveling?</h6>
      <p>
        Suppose you are visiting some other city or traveling across the US. In
        that case, Qavah can easily adjust to your current location and identify
        different Israelite nearby that match your convictions and beliefs.
      </p>

      <h6 class="mt-4">Why do I need to do photo verification?</h6>
      <p>
        Yes, Israelites, we can have an imposter among us. To avoid being
        catfished, we undergo photo verification to get proof of your identity
        and that you are the person in your pictures.
      </p>

      <h6 class="mt-4">What does a gold star on a profile means?</h6>
      <p>
        When your identity and profile are verified, you get a gold start which
        indicates you met all the requirements and standards of Qavah and that
        your profile is wholly authentic.
      </p>

      <h6 class="mt-4">Why do I need to verify my phone number?</h6>
      <p>
        You will be asked to add your phone number during the registration
        process. After that, you will be asked to verify your phone number
        either by message or by calling. If you want to add a new number and
        confirm it, you can do that directly from your account settings.
      </p>

      <p>
        We need to verify your phone number to proceed with the registration
        process and make your profile authentic.
      </p>

      <h6 class="mt-4">
        What happens if my account stays inactive for a long time?
      </h6>
      <p>
        If you have not used your Qavah profile in a long time, like two years,
        we will have to delete your account based on inactivity.
      </p>

      <b-card title="Send Your Feedback">
        <b-form-group>
          <b-form-input
            type="text"
            class="custom-field"
            placeholder="Your Email"
          />
        </b-form-group>
        <b-form-group>
          <b-form-textarea
            class="custom-field-textarea"
            placeholder="Your Valuable Feedback..."
            rows="6"
            no-resize
          ></b-form-textarea>
        </b-form-group>

        <b-button class="custom-btn-1">Send</b-button>
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
