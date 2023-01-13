<template>
  <div class="Phone-Verification-Page">
    <div class="content">
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
        <h2 class="mt-4">Verify Your Account</h2>
        <div
          class="icon"
          v-if="currentUser.mobile_verified && currentUser.email_verified"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="128"
            height="128"
            viewBox="0 0 256 256"
            xml:space="preserve"
          >
            <defs></defs>
            <g
              style="
                stroke: none;
                stroke-width: 0;
                stroke-dasharray: none;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 10;
                fill: none;
                fill-rule: nonzero;
                opacity: 1;
              "
              transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            >
              <path
                d="M 89.328 2.625 L 89.328 2.625 c -1.701 -2.859 -5.728 -3.151 -7.824 -0.568 L 46.532 45.173 c -0.856 1.055 -2.483 0.997 -3.262 -0.115 l -8.382 -11.97 c -2.852 -4.073 -8.789 -4.335 -11.989 -0.531 l 0 0 c -2.207 2.624 -2.374 6.403 -0.408 9.211 l 17.157 24.502 c 2.088 2.982 6.507 2.977 8.588 -0.011 l 4.925 -7.07 L 89.135 7.813 C 90.214 6.272 90.289 4.242 89.328 2.625 z"
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill: rgb(111, 178, 6);
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
              <path
                d="M 45 90 C 20.187 90 0 69.813 0 45 C 0 20.187 20.187 0 45 0 c 6.072 0 11.967 1.19 17.518 3.538 c 2.034 0.861 2.986 3.208 2.125 5.242 c -0.859 2.035 -3.207 2.987 -5.242 2.126 C 54.842 8.978 49.996 8 45 8 C 24.598 8 8 24.598 8 45 c 0 20.402 16.598 37 37 37 c 20.402 0 37 -16.598 37 -37 c 0 -3.248 -0.42 -6.469 -1.249 -9.573 c -0.57 -2.134 0.698 -4.327 2.832 -4.897 c 2.133 -0.571 4.326 0.698 4.896 2.833 C 89.488 37.14 90 41.055 90 45 C 90 69.813 69.813 90 45 90 z"
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill: rgb(111, 178, 6);
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
            </g>
          </svg>
        </div>
        <div class="icon" v-else>
          <svg
            enable-background="new 0 0 64 64"
            height="200"
            version="1.1"
            viewBox="0 0 64 64"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g id="Grid" />
            <g id="row_3" />
            <g id="row_2">
              <g id="call_x5F_to_x5F_bank">
                <path
                  d="M32,12c11,0,20,9,20,20s-9,20-20,20s-20-9-20-20S21,12,32,12 M32,8C18.7,8,8,18.7,8,32s10.7,24,24,24    s24-10.7,24-24S45.3,8,32,8L32,8z"
                  fill="#FFECB3"
                />
                <path
                  d="M11.7,19.2C15.9,12.5,23.4,8,32,8V6c-9.2,0-17.4,4.9-22,12.2L11.7,19.2z"
                  fill="#F44336"
                />
                <path
                  d="M58.5,32.2h-1C57.5,18.1,46.1,6.7,32,6.7v-1C46.6,5.7,58.5,17.5,58.5,32.2z"
                  fill="#263238"
                />
                <path
                  d="M32,58.7c-14.6,0-26.5-11.9-26.5-26.5h1c0,14.1,11.4,25.5,25.5,25.5V58.7z"
                  fill="#263238"
                />
                <path
                  d="M38.4,21c-0.7-1.2-2-2-3.4-2v-4c3.7,0,6.8,2.6,7.7,6H47c0.8,0.8,1.2,1.2,2,2v18c-0.8,0.8-1.2,1.2-2,2H17    c-0.8-0.8-1.2-1.2-2-2V23c0.8-0.8,1.2-1.2,2-2H38.4z"
                  fill="#FFC107"
                />
                <path
                  d="M17.6,6.5L20.7,5l6,1c0.2,2.8,0.6,5.7,1.1,8.5L22,26.2c0.7,3,1.7,6,3.1,8.9c1.4,2.9,3,5.6,4.9,8.1    l12.8,3.1c1.8,2.2,3.7,4.3,5.8,6.3L45.4,58l-3.2,1.4C33.3,54.5,25.8,46.9,21.2,37C16.5,27.1,15.5,16.4,17.6,6.5z"
                  fill="#01579B"
                />
                <g>
                  <polygon
                    fill="#F44336"
                    points="47.2,44 50.4,39 48,39 44.9,44 48,49 50.4,49    "
                  />
                  <polygon
                    fill="#F44336"
                    points="52,44 55.1,39 52.8,39 49.6,44 52.8,49 55.1,49    "
                  />
                </g>
              </g>
            </g>
            <g id="row_1" />
          </svg>
        </div>

        <p>
          Verifying your account allows us to make sure you are really you, its
          about keeping Qavah safe and secure for everyone.
        </p>

        <p>
          Your information will not be shared with other members, and will not
          be displayed on your profile.
        </p>

        <div class="w-100 d-flex justify-content-center align-items-center">
          <b-button
            class="mt-4 custom-btn-1 mr-2"
            v-if="!currentUser.mobile_verified"
            @click="openSMSOtpModal"
            >Verify My Phone</b-button
          >
          <b-button
            class="mt-4 custom-btn-1"
            v-if="!currentUser.email_verified"
            @click="openEmailOtpModal"
            >Verify My Email</b-button
          >
          <b-button
            class="mt-4 custom-btn-1"
            v-if="currentUser.mobile_verified && currentUser.email_verified"
            @click="$router.push('/dashboard')"
            >Proceed</b-button
          >
        </div>
      </b-overlay>
    </div>

    <!-- OTP popup -->
    <b-modal
      id="otpModal"
      no-close-on-backdrop
      content-class="rounded-lg"
      body-class="rounded-lg"
      size="lg"
      hide-footer
      hide-header
    >
      <b-overlay class="p-2" :show="otpLoader">
        <template #overlay>
          <GridLoader
            class="custom-class"
            color="#93652b"
            :loading="otpLoader"
            :size="10"
            sizeUnit="px"
          />
        </template>

        <div class="d-flex justify-content-end align-items-end">
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              @click="closeModal('otpModal')"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>

        <!-- Heading -->
        <h2 class="mt-4 text-center">Phone Verification</h2>

        <div class="mt-5" v-if="!otpVerified">
          <otp-input
            v-model="userToken"
            class="otp-fields-container"
            :length="4"
            pattern="[^0-9]+"
            :ignorePattern="false"
            fieldClass="otp-field"
            :size="32"
            @valid="isTokenComplete"
            :disabled="false"
          />
        </div>

        <p class="text-center" v-if="!otpVerified && !otpSentAgain">
          Didn't receive an OTP?
          <b-link class="text-center" @click="resendOtp">Resend OTP</b-link>
        </p>

        <p class="text-center" v-if="!otpVerified && !otpSentAgain">
          OTP has been sent to your phone!
        </p>

        <div
          class="mt-5 w-100 d-flex justify-content-center align-items-center"
        >
          <b-button class="custom-btn-1" v-if="!otpVerified" @click="verifyOtp"
            >Verify</b-button
          >
        </div>
      </b-overlay>

      <div class="otp-success" v-if="otpVerified">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>

        <p>OTP has been verified successfully!</p>
        <div class="mt-5 d-flex justify-content-center align-items-center">
          <b-button class="custom-btn-1" @click="closeModal('otpModal')"
            >Proceed</b-button
          >
        </div>
      </div>
    </b-modal>

    <!-- Email OTP popup -->
    <b-modal
      id="emailOtpModal"
      no-close-on-backdrop
      content-class="rounded-lg"
      body-class="rounded-lg"
      size="lg"
      hide-footer
      hide-header
    >
      <b-overlay class="p-2" :show="emailOtpLoader">
        <template #overlay>
          <GridLoader
            class="custom-class"
            color="#93652b"
            :loading="emailOtpLoader"
            :size="10"
            sizeUnit="px"
          />
        </template>

        <div class="icon float-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            @click="closeModal('emailOtpModal')"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <!-- Heading -->
        <p class="title text-center">Email Verification</p>

        <div class="mt-5" v-if="!emailOtpVerified">
          <otp-input
            v-model="emailOtpToken"
            class="otp-fields-container"
            :length="4"
            pattern="[^0-9]+"
            :ignorePattern="false"
            fieldClass="otp-field"
            :size="32"
            @valid="isTokenComplete"
            :disabled="false"
          />
        </div>

        <p class="text-center" v-if="!emailOtpVerified && !emailOtpSentAgain">
          Didn't receive an Email? Check your spam folder or click on
          <b-link class="text-center" @click="resendEmailOtp"
            >Resend Email</b-link
          >
        </p>

        <p class="text-center" v-if="!otpVerified && !otpSentAgain">
          OTP has been sent to your email!
        </p>

        <div class="mt-5 d-flex justify-content-center align-items-center">
          <b-button
            class="custom-btn-1"
            v-if="!emailOtpVerified"
            @click="verifyEmailOtp"
            >Verify</b-button
          >
        </div>
      </b-overlay>

      <div class="otp-success" v-if="emailOtpVerified">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>

        <p>OTP has been verified successfully!</p>
        <div class="mt-5 d-flex justify-content-center align-items-center">
          <b-button class="custom-btn-1" @click="closeModal('otpModal')"
            >Proceed</b-button
          >
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { getCurrentUser } from "@/utils";
import { mapGetters } from "vuex";
import { apiUrl, headers } from "@/constants/config";
import Vue from "vue";
import axios from "axios";
import OTPInput from "@8bu/vue-otp-input";
import "@8bu/vue-otp-input/";
export default {
  components: {
    "otp-input": OTPInput,
  },
  data() {
    return {
      user: null,
      loader: false,
      otpLoader: false,
      userToken: null,
      otpVerified: false,
      otpSentAgain: false,
      emailOtpVerified: false,
      emailOtpSentAgain: false,
      emailOtpLoader: false,
      emailOtpToken: "",
    };
  },
  methods: {
    openSMSOtpModal() {
      this.resendOtpFirstTime();
      this.openModal("otpModal");
    },
    openEmailOtpModal() {
      this.resendEmailOtpFirstTime();
      this.openModal("emailOtpModal");
    },
    getProfile() {
      setTimeout(() => {
        var user = this.currentUser;

        axios
          .get(`${apiUrl}/auth/user`, { headers })
          .then((res) => {
            console.log("res -> ", res);
            if (res.status === 200) {
              const profile = res.data;
              this.user = profile;
            } else {
              console.log("something wrong !");
            }
          })
          .catch((err) => {
            console.log("res -> ", err);
          });
      }, 500);
    },
    SendOtp() {
      let body = {
        uid: this.currentUser.uid,
        phone: this.user.phone,
      };

      this.loader = true;
      axios
        .post(`${apiUrl}/send/mobile_opt`, body, { headers })
        .then((res) => {
          console.log("res -> ", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              this.loader = false;
              this.openModal("otpModal");
            } else {
              this.loader = false;
            }
          } else {
            this.loader = false;
          }
        })
        .catch((err) => {
          this.loader = false;
          console.log(err);
        });
    },
    // OTP Methods
    isTokenComplete(isValid) {
      console.log("isValid -> ", isValid);
    },
    verifyOtp() {
      let body = {
        otp: this.userToken,
        email: this.user.email,
      };

      this.otpLoader = true;
      axios
        .post(`${apiUrl}/auth/verify-otp`, body, { headers })
        .then((res) => {
          console.log("res -> ", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              (this.otpLoader = false), (this.otpVerified = true);
              this.closeModal("otpModal");
              Vue.$toast.open({
                message: "Otp verified successfully!",
                type: "success",
              });

              // this.$router.push("/dashboard");
              this.$router.go();
            } else {
              (this.otpLoader = false), (this.otpVerified = false);
              Vue.$toast.open({
                message: `Error Occurred: ${data.error}`,
                type: "error",
              });
            }
          } else {
            (this.otpLoader = false), (this.otpVerified = false);
            Vue.$toast.open({
              message: "Unknown Error Occurred !",
              type: "error",
            });
          }
        })
        .catch((err) => {
          (this.otpLoader = false), (this.otpVerified = false);
          console.log(err);

          Vue.$toast.open({
            message: err,
            type: "error",
          });
        });
    },
    resendOtpFirstTime() {
      let body = {
        email: this.user.email,
      };
      this.otpLoader = true;
      axios
        .post(`${apiUrl}/send/mobile_opt`, body, { headers })
        .then((res) => {
          console.log("res -> ", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              this.otpLoader = false;
              Vue.$toast.open({
                message: "Otp has been sent!",
                type: "success",
                position: "right",
              });
            } else {
              (this.otpLoader = false), (this.otpVerified = false);
              Vue.$toast.open({
                message: `Error Occurred: ${data.error}`,
                type: "error",
                position: "top",
              });
            }
          } else {
            (this.otpLoader = false), (this.otpVerified = false);
            Vue.$toast.open({
              message: "Unknown Error Occurred!",
              type: "error",
              position: "top",
            });
          }
        })
        .catch((err) => {
          (this.otpLoader = false), (this.otpVerified = false);
          console.log(err);

          Vue.$toast.open({
            message: err,
            type: "error",
            // all of other options may go here
            position: "top",
          });
        });
    },
    resendOtp() {
      let body = {
        email: this.user.email,
      };

      this.otpLoader = true;

      axios
        .post(`${apiUrl}/send/mobile_opt`, body, { headers })
        .then((res) => {
          console.log("res -> ", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              this.otpLoader = false;

              Vue.$toast.open({
                message: "Otp has been sent!",
                type: "success",
                position: "right",
              });

              this.otpSentAgain = true;
            } else {
              (this.otpLoader = false), (this.otpVerified = false);
              Vue.$toast.open({
                message: `Error Occurred: ${data.error}`,
                type: "error",
                position: "top",
              });
            }
          } else {
            (this.otpLoader = false), (this.otpVerified = false);
            Vue.$toast.open({
              message: "Unknown Error Occurred!",
              type: "error",
              position: "top",
            });
          }
        })
        .catch((err) => {
          (this.otpLoader = false), (this.otpVerified = false);
          console.log(err);

          Vue.$toast.open({
            message: err,
            type: "error",
            // all of other options may go here
            position: "top",
          });
        });
    },
    openModal(id) {
      this.$bvModal.show(id);
    },
    closeModal(id) {
      this.$bvModal.hide(id);
    },
    verifyEmailOtp() {
      let body = {
        otp: this.emailOtpToken,
      };

      this.emailOtpLoader = true;

      axios
        .post(`${apiUrl}/auth/verify-email-otp`, body, { headers })
        .then((res) => {
          console.log("res -> ", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              (this.emailOtpLoader = false), (this.emailOtpVerified = true);

              Vue.$toast.open({
                message: "Otp verify successfull!",
                type: "success",
              });

              this.closeModal("emailOtpModal");
              // this.$router.push(`/user/login`);
              // this.openModal("emailOtpModal");
              this.$router.go();

              // this.$router.push("/user/login");
            } else {
              (this.emailOtpLoader = false), (this.emailOtpVerified = false);
              Vue.$toast.open({
                message: `Error Occurred: ${data.error}`,
                type: "error",
              });
            }
          } else {
            (this.emailOtpLoader = false), (this.emailOtpVerified = false);
            Vue.$toast.open({
              message: "Unknown Error Occurred!",
              type: "error",
            });
          }
        })
        .catch((err) => {
          (this.emailOtpLoader = false), (this.emailOtpVerified = false);
          console.log(err);

          Vue.$toast.open({
            message: err,
            type: "error",
          });
        });
    },
    resendEmailOtp() {
      let body = {
        email: this.currentUser.email,
      };

      this.emailOtpLoader = true;

      axios
        .post(`${apiUrl}/auth/send-email-otp`, body, { headers })
        .then((res) => {
          console.log("res -> ", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              this.emailOtpLoader = false;

              Vue.$toast.open({
                message: "Otp email has been sent!",
                type: "success",
                position: "right",
              });

              this.emailOtpSentAgain = true;
            } else {
              (this.otpLoader = false), (this.emailOtpVerified = false);
              Vue.$toast.open({
                message: `Error Occurred: ${data.error}`,
                type: "error",
                position: "top",
              });
            }
          } else {
            (this.emailOtpVerified = false), (this.emailOtpVerified = false);
            Vue.$toast.open({
              message: "Unknown Error Occurred!",
              type: "error",
              position: "top",
            });
          }
        })
        .catch((err) => {
          (this.emailOtpLoader = false), (this.emailOtpVerified = false);
          console.log(err);

          Vue.$toast.error(`${err}`);
        });
    },
    resendEmailOtpFirstTime() {
      let body = {
        email: this.currentUser.email,
      };
      this.emailOtpLoader = true;
      axios
        .post(`${apiUrl}/auth/send-email-otp`, body, { headers })
        .then((res) => {
          console.log("res -> ", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              this.emailOtpLoader = false;

              Vue.$toast.open({
                message: "Otp email has been sent!",
                type: "success",
                position: "right",
              });
            } else {
              (this.otpLoader = false), (this.emailOtpVerified = false);
              Vue.$toast.open({
                message: `Error Occurred: ${data.error}`,
                type: "error",
                position: "top",
              });
            }
          } else {
            (this.emailOtpVerified = false), (this.emailOtpVerified = false);
            Vue.$toast.open({
              message: "Unknown Error Occurred!",
              type: "error",
              position: "top",
            });
          }
        })
        .catch((err) => {
          (this.emailOtpLoader = false), (this.emailOtpVerified = false);
          console.log(err);
          Vue.$toast.error(`${err}`);
        });
    },
    // checkVerifications2() {
    //   debugger
    //   setTimeout(() => {
    //     console.log("checkverifications executed !!!!!");
    //     let user  =  this.currentUser
    //     if(user){

    //     let email_verified = user.email_verified;
    //     let mobile_verified = user.mobile_verified;
    //     if (!email_verified || !mobile_verified) {
    //       this.$router.push("/dashboard/phone-verification");
    //     }
    //    }
    //   }, 1000);
    // },
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  watch: {},
  mounted() {
    this.getProfile();
    // this.checkVerifications2();
  },
};
</script>

<style scoped>
/* Mobile Screen Classes */
@media only screen and (max-width: 992px) {
  .Phone-Verification-Page {
    min-height: 90vh;
    display: flex;
    justify-content: center;
    padding-top: 3rem;
  }
}

/* Laptop Screen Classes */
@media only screen and (min-width: 992px) {
  .Phone-Verification-Page {
    min-height: 90vh;
    margin-top: 55px;
    display: flex;
    justify-content: center;
    padding: 2rem;
    padding-top: 3rem;
  }
}

.otp-success {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.otp-success svg {
  height: 128px;
  fill: #93652b;
}

.otp-success p {
  font-size: 1.2rem;
}

.refresh-icon {
  display: inline;
  stroke: #93652b;
  transition: all ease 0.5s;
}

.refresh-icon:hover {
  cursor: pointer;
  stroke: #ac854e;
}

.remove-icon:hover {
  cursor: pointer;
}

.left {
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.right {
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.otp-success {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.otp-success svg {
  height: 128px;
  fill: #93652b;
}

.otp-success p {
  font-size: 1.2rem;
}

.content {
  max-width: 40%;
  display: flex;
  flex-direction: column;
  text-align: center;
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
  padding: 0.7rem 1.3rem;
  transition: all ease 0.5s;
}

.custom-btn-1:hover {
  cursor: pointer;
  transform: scale(104%);
}
</style>