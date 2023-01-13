<template>
  <div class="help-page p-5">
    <b-container class="main-section">
      <h2>Help</h2>

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

      <b-card title="Send Your Feedback" class="rounded-lg">
        <b-overlay :show="loader">
          <template #overlay>
            <GridLoader
              class="custom-class"
              color="#93652b"
              :loading="loader"
              :size="10"
              sizeUnit="px"
            />
          </template>
          <p>feedback@qavah.us</p>
          <b-form-group>
            <b-form-input
              type="text"
              v-model="feedback.email"
              class="custom-field"
              placeholder="Your Email"
            />
          </b-form-group>
          <b-form-group>
            <b-form-textarea
              class="custom-field-textarea"
              placeholder="Your Valuable Feedback..."
              v-model="feedback.body"
              rows="6"
              no-resize
            ></b-form-textarea>
          </b-form-group>

          <b-button class="custom-btn-1" @click="sendFeedback">Send</b-button>
        </b-overlay>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import { apiUrl, headers } from "@/constants/config";
import axios from "axios";
import { getCurrentUser } from "@/utils";
import { mapGetters } from "vuex";
import { validationMixin } from "vuelidate";
const { required } = require("vuelidate/lib/validators");
// Profile Edit Component
import Vue from "vue";
export default {
  data() {
    return {
      feedback: {
        email: "",
        body: "",
      },
    };
  },
  mixins: [validationMixin],
  validations: {
    feedback: {
      email: { required },
      body: { required },
    },
  },
  notificationsForTarget: null,
  methods: {
    sendFeedback() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        alert("validation error");
      } else {
        let data = this.feedback;
        axios
          .post(`${apiUrl}/settings/feedback`, this.feedback, { headers })
          .then((res) => {
            debugger;
          });
      }
    },
  },
};
</script>

<style scoped>
.help-page {
  background-image: url("@/assets/watermark.jpeg");
  min-height: 100vh;
  margin-top: 70px;
}
</style>
