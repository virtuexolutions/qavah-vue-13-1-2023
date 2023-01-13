<template>
  <div class="login-container">
    <div class="form-side">
      <router-link class="mb-4" to="/">
        <!-- <span class="logo-single" /> -->
        <b-img height="75" src="@/assets/logos/logo.png"></b-img>
      </router-link>

      <div>
        <!-- <p class="title p-0 m-0">{{ $t("login_page.welcome_back") }} ,</p> -->
        <p class="title p-0 m-0">Welcome Back</p>

        <p class="subtitle p-0 mt-2 ml-1">Login to your account</p>

        <b-form
          @submit.prevent="formSubmit"
          class="mt-4 av-tooltip tooltip-label-bottom"
        >
          <!-- Email -->
          <b-form-group class="mb-4">
            <b-form-input
              type="text"
              class="custom-field"
              placeholder="Email"
              v-model="$v.form.email.$model"
              :state="!$v.form.email.$error"
            />
            <b-form-invalid-feedback v-if="!$v.form.email.required"
              >Please enter your email address</b-form-invalid-feedback
            >
            <b-form-invalid-feedback v-else-if="!$v.form.email.email"
              >Please enter a valid email address</b-form-invalid-feedback
            >
            <b-form-invalid-feedback v-else-if="!$v.form.email.minLength"
              >Your email must be minimum 4 characters</b-form-invalid-feedback
            >
          </b-form-group>

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
            <span class="label"
              >Login
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

          <div class="mt-4 text-center">
            <router-link tag="a" to="/user/forgot-password"
              >Forgot Password?</router-link
            >
          </div>

          <div class="social-icons mt-4">
            <b-button class="m-0 p-0" variant="empty">
              <b-img src="@/assets/img/login/facebook.png" height="35"></b-img>
            </b-button>
            <b-button class="m-0 p-0" variant="empty">
              <b-img src="@/assets/img/login/twitter.png" height="35"></b-img>
            </b-button>
            <b-button class="m-0 p-0" variant="empty">
              <b-img src="@/assets/img/login/google.png" height="35"></b-img>
            </b-button>
            <b-button class="m-0 p-0" variant="empty">
              <b-img src="@/assets/img/login/vk.png" height="35"></b-img>
            </b-button>
          </div>

          <p class="mt-4 text-center">
            Don't have an account?
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

      <!-- language -->
      <!-- <b-dropdown
        id="language-selection"
        class="ml-2"
        variant="empty"
        size="sm"
        dropup
        toggle-class="language-button"
      >
        <template slot="button-content">
          <span class="name">{{ $i18n.locale.toUpperCase() }}</span>
        </template>
        <b-dropdown-item
          v-for="(l, index) in localeOptions"
          :key="index"
          @click="changeLocale(l.id, l.direction)"
          >{{ l.name }}</b-dropdown-item
        >
      </b-dropdown> -->
    </div>

    <div class="right-side">
      <div class="area">
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
      </div>
      <video autoplay loop muted>
        <source src="@/assets/Qavah Promo Final.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <!-- <vue-flux
        :options="vfOptions"
        :images="vfImages"
        :transitions="vfTransitions"
        style="height: 100vh"
        ref="slider"
      >
        <template v-slot:preloader>
          <flux-preloader />
        </template>

        <template v-slot:caption>
          <flux-caption />
        </template>

        <template v-slot:controls>
          <flux-controls />
        </template>

        <template v-slot:pagination>
          <flux-pagination />
        </template>
      </vue-flux> -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { localeOptions } from "../../constants/config";
import { validationMixin } from "vuelidate";
import Vue from "vue";
import {
  VueFlux,
  FluxCaption,
  FluxControls,
  FluxIndex,
  FluxPagination,
  FluxPreloader,
} from "vue-flux";
const {
  required,
  maxLength,
  minLength,
  email,
} = require("vuelidate/lib/validators");

export default {
  components: {
    VueFlux,
    FluxCaption,
    FluxControls,
    FluxIndex,
    FluxPagination,
    FluxPreloader,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      showPassword: false,
      slide: 0,
      sliding: null,
      vfOptions: {
        autoplay: true,
        infinite: true,
      },
      vfImages: [],
      vfTransitions: ["fade"],
      vfCaptions: [
        "Caption for image 1",
        "Caption for image 2",
        "Caption for image 3",
      ],
      localeOptions,
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
      email: {
        required,
        email,
        minLength: minLength(4),
      },
    },
  },
  computed: {
    ...mapGetters(["currentUser", "processing", "loginError"]),
  },
  methods: {
    ...mapActions(["login", "setLang"]),
    formSubmit() {
      this.$v.$touch();
      // this.form.email = "piaf-vue@coloredstrategies.com";
      // this.form.password = "piaf123";
      this.$v.form.$touch();
      // if (!this.$v.form.$anyError) {
      this.login({
        email: this.form.email,
        password: this.form.password,
      });
      //}
    },
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    changeLocale(locale, direction) {
      // const currentDirection = getDirection().direction;
      // if (direction !== currentDirection) {
      //   setDirection(direction);
      // }

      this.setLang(locale);
    },
  },
  watch: {
    currentUser(val) {
      if (val) {
        debugger;
        setTimeout(() => {
          this.$router
            .push("/dashboard")
            .then(() => {
              Vue.$toast.default("Logged In!");
            })
            .then(() => {
              this.$router.go();
            })
            .catch((err) => console.log(err));
        }, 200);
      }
    },
    loginError(val) {
      if (val != null) {
        Vue.$toast.default(`Login Failed - ${val}!`);
      }
    },
    "$i18n.locale"(to, from) {
      if (from !== to) {
        this.$router.go(this.$route.path);
      }
    },
  },
};
</script>


<style scoped>
/* Global Classes */

/* Mobile Screen Classes */
@media only screen and (max-width: 800px) {
  .login-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .form-side {
    /* width: 100%; */
    /* height: 100%; */
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    border-radius: 20px;
    min-width: 80%;
    position: relative;
    /* align-items: center; */
  }

  .right-side {
    display: none;
  }

  .svg_divider {
    display: none;
  }
}

/* Laptop Screen Classes */
@media only screen and (min-width: 800px) {
  .login-container {
    display: flex;
    flex-direction: row;
    height: 100vh;
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
    position: relative;
    /* align-items: center; */
  }

  .right-side {
    width: 100%;
    height: 100%;
    background: transparent;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .svg_divider {
    position: absolute;
    height: 100%;
    width: 60px;
    top: 0;
    left: 100%;
    transform: rotate(180deg);
    z-index: 2;
    color: #fff;
  }
}

#carousel-1 .carousal-images {
  height: 100vh;
}

#language-selection {
  position: absolute;
  bottom: 0;
  left: 0;
}

.right-side .area {
  background: #e1e1e1;
  /* background: -webkit-linear-gradient(to left, #fdba74, #e2e8f0); */
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
}

.right-side .circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.right-side .circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(112, 60, 8, 0.9);
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.right-side .circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.right-side .circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.right-side .circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.right-side .circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.right-side .circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.right-side .circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.right-side .circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.right-side .circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.right-side .circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.right-side .circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}

.right-side video {
  /* height: 100vh; */
  width: 100%;
  z-index: 0;
  /* max-width:80vw; */
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
  font-size: 14px;
  border-radius: 25px;
}

.login-btn:hover {
  background-color: #b69873;
  transform: scale(101%);
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
