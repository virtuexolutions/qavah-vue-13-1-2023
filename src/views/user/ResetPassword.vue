<template>
  <div class="login-container">
    <div class="form-side">
      <router-link class="mb-4" to="/">
        <!-- <span class="logo-single" /> -->
        <b-img height="75" src="@/assets/logos/logo.png"></b-img>
      </router-link>

      <div>
        <p class="title p-0 m-0">Set Your Password</p>
        <!-- <p class="subtitle p-0 mt-2 ml-1">Login to your account</p> -->

        <b-form
          @submit.prevent="formSubmit"
          class="mt-4 av-tooltip tooltip-label-bottom"
        >
          <!-- Password -->
          <b-form-group class="mb-4">
            <b-form-input
              class="custom-field"
              placeholder="Password"
              v-bind:type="showPassword ? 'text' : 'password'"
              v-model="$v.form.password.$model"
              :state="!$v.form.password.$error"
            />
            <b-form-invalid-feedback v-if="!$v.form.password.required"
              >Please enter your password</b-form-invalid-feedback
            >
            <b-form-invalid-feedback
              v-else-if="
                !$v.form.password.minLength || !$v.form.password.maxLength
              "
              >Your password must be between 4 and 16
              characters</b-form-invalid-feedback
            >
          </b-form-group>

          <!-- Confirm Password -->
          <b-form-group class="mb-4">
            <b-form-input
              class="custom-field"
              placeholder="Confirm Password"
              v-bind:type="showPassword2 ? 'text' : 'password'"
              v-model="$v.form.passwordAgain.$model"
              :state="!$v.form.passwordAgain.$error"
            />
            <b-form-invalid-feedback v-if="!$v.form.passwordAgain.required"
              >Please enter your password</b-form-invalid-feedback
            >
            <b-form-invalid-feedback
              v-else-if="!$v.form.passwordAgain.sameAsPassword"
              >Passwords Doest Not Match!</b-form-invalid-feedback
            >
          </b-form-group>

          <b-button
            type="submit"
            variant="primary"
            class="login-btn"
            block
            size="lg"
            :disabled="processing"
            :class="{
              'btn-multiple-state btn-shadow': true,
              'show-spinner': processing,
              'show-success': !processing && loginError === false,
              'show-fail': !processing && loginError,
            }"
          >
            <span class="spinner d-inline-block">
              <span class="bounce1"></span>
              <span class="bounce2"></span>
              <span class="bounce3"></span>
            </span>
            <span class="icon success">
              <i class="simple-icon-check"></i>
            </span>
            <span class="icon fail">
              <i class="simple-icon-exclamation"></i>
            </span>
            <span class="label">
              Set Password
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                /></svg
            ></span>
          </b-button>

          <p class="mt-4 text-center">
            Dont have a account?
            <router-link to="/user/register">Register now...</router-link>
          </p>
        </b-form>
      </div>

      <svg
        class="svg_divider"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        version="1.1"
      >
        <path
          d="M0,0 L100,0 L100,100 L0,100 C66.6666667,83.3333333 100,66.6666667 100,50 C100,33.3333333 66.6666667,16.6666667 0,0 Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
    <div class="right-side">
      <!-- <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div> -->
      <video autoplay loop muted>
        <source src="@/assets/Qavah Promo Final.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { validationMixin } from "vuelidate";
const {
  required,
  maxLength,
  minLength,
  email,
  sameAs,
} = require("vuelidate/lib/validators");

export default {
  data() {
    return {
      form: {
        password: "",
        passwordAgain: "",
      },
      showPassword: false,
      showPassword2: false,
    };
  },
  mixins: [validationMixin],
  validations: {
    form: {
      password: {
        required,
        maxLength: maxLength(16),
        minLength: minLength(4),
      },
      passwordAgain: {
        required,
        sameAsPassword: sameAs("password"),
      },
    },
  },
  computed: {
    ...mapGetters([
      "currentUser",
      "processing",
      "loginError",
      "resetPasswordSuccess",
    ]),
  },
  methods: {
    ...mapActions(["resetPassword"]),
    formSubmit() {
      this.$v.form.$touch();
      if (!this.$v.form.$anyError) {
        this.resetPassword({
          newPassword: this.form.password,
          resetPasswordCode: this.$route.params.token || "",
        });
      }
    },
  },
  watch: {
    loginError(val) {
      if (val != null) {
        this.$notify("error", "Reset Password Error", val, {
          duration: 3000,
          permanent: false,
        });
      }
    },
    resetPasswordSuccess(val) {
      if (val) {
        this.$notify(
          "success",
          "Reset Password Success",
          "Reset password success",
          {
            duration: 3000,
            permanent: false,
          }
        );
        this.$router.push("/user/login");
      }
    },
  },
};
</script>


<style scoped>
.login-container {
  display: flex;
  height: 100vh;
}
.svg_divider {
  position: absolute;
  height: 100%;
  width: 60px;
  top: 0;
  left: 100%;
  transform: rotate(180deg);
  z-index: 9999;
  color: #fff;
}
.form-side {
  /* width: 100%; */
  /* height: 100%; */
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  border-radius: -15px;
  min-width: 40%;
  /* align-items: center; */
}

.right-side {
  width: 100%;
  height: 100%;
  background: url("@/assets/img/login/bg.jpg");
  background-size: cover;
}

.login-btn {
  background-color: #93652b;
  outline: none;
  border: none;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
}

.login-btn:hover {
  background-color: #b69873;
}

.title {
  font-size: 2rem;
}

.subtitle {
  font-size: 1rem;
}

.social-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
}

.custom-field {
  border-radius: 25px;
  height: 45px;
  padding: 20px;
  border-color: #93652b;
}

.custom-field:active {
  /* border-color: #93652b;
  outline-color: #93652b; */
}
</style>
