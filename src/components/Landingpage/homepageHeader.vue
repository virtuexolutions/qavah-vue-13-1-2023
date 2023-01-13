<template>
  <!-- Navbar -->

  <b-navbar
    class="navbar-container"
    fixed="top"
    toggleable="lg"
    variant="light"
  >
    <!-- <div class="announcement-banner-web">
      Thank you for taking a sneak peek. We are now on our live dedicated
      server. However, the Qavah courting platform is being tested to ensure
      that all functions and features are working correctly. We will announce as
      soon as services become available
    </div> -->
    <b-container class="for-margin">
      <b-navbar-brand to="/">
        <b-img class="pb-1" :src="content.logo.logo" height="50"></b-img>
        <!-- <b-img class="pb-1" src="@/assets/logos/logo.png" height="50"></b-img> -->
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="custom-nav">
          <b-nav-item-dropdown text="Products" toggle-class="text-center" right>
            <b-dropdown-item to="/premium-features"
              >Premium Features</b-dropdown-item
            >
            <b-dropdown-item to="/pricing-gold">Qavah Gold</b-dropdown-item>
            <b-dropdown-item to="/pricing-platinum"
              >Qavah Platinum</b-dropdown-item
            >
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Learn" toggle-class="text-center" right>
            <b-dropdown-item to="/qavah-live">Qavah Live</b-dropdown-item>
            <b-dropdown-item to="/qavah-court">Qavah Court</b-dropdown-item>
          </b-nav-item-dropdown>

          <router-link class="custom-nav-link" to="/safety">Safety</router-link>
          <router-link class="custom-nav-link" to="/support"
            >Support</router-link
          >
          <a href="https://qavahshop.ad-wize.com/" class="custom-nav-link"
            >Merchandise</a
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav
          v-if="currentUser && currentUser.uid"
          class="ml-auto d-flex justify-content-center align-items-center"
        >
          <p class="p-0 m-0 mr-2 text-capitalize">
            Welcome, {{ currentUser.profileName }}
          </p>
          <b-button class="custom-btn-1" to="/dashboard">Dashboard</b-button>
        </b-navbar-nav>

        <b-navbar-nav v-else class="ml-auto nav-auth-section">
          <b-button variant="empty" style="font-size: 12px" to="/user/login"
            >Login</b-button
          >
          <b-button class="custom-btn-1" to="user/register"
            >User Register</b-button
          >
        </b-navbar-nav>
      </b-collapse>
    </b-container>

    <!-- <div class="announcement-banner-mobile">
      Thank you for taking a sneak peek. We are now on our live dedicated
      server. However, the Qavah courting platform is being tested to ensure
      that all functions and features are working correctly. We will announce as
      soon as services become available
    </div> -->
  </b-navbar>
</template>

<script>
import { getCurrentUser } from "@/utils";
import { mapGetters } from "vuex";
import { apiUrl } from "@/constants/config";
import axios from "axios";
export default {
  data() {
    return {
      content: null,
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),
    currentUser2() {
      let user = getCurrentUser();
      debugger;
      return user;
    },
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
        .get(`${apiUrl}/front/logo`)
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
/* Mobile Screen Classes */
@media only screen and (max-width: 992px) {
  .announcement-banner-web {
    display: none;
  }

  .navbar-container {
    padding-top: 0.5rem;
    display: flex;
    /* flex-direction: column; */
    background-color: #fff;
  }

  #nav-collapse {
    background-color: #fff;
    padding: 1rem;
    border-radius: 20px;
  }

  .nav-auth-section {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}

/* Laptop Screen Classes */
@media only screen and (min-width: 992px) {
  .announcement-banner-mobile {
    display: none;
  }

  .navbar-container {
    display: flex;
    background-color: #fff;
  }

  .nav-auth-section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.announcement-banner-web {
  background-color: red;
  color: #fff;
  font-size: 0.8rem;
  text-align: center;
  padding: 0.5rem;
}

.announcement-banner-mobile {
  background-color: red;
  color: #fff;
  font-size: 0.8rem;
  text-align: center;
  padding: 0.5rem;
}

.custom-nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
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
  font-size: 12px;
}

.custom-btn-1:hover {
  background-color: #ac854e !important;
  transform: scale(110%);
}

.custom-nav-link {
  color: #64748b;
}
.announcement-banner-web {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}

.for-margin {
  margin-top: 20px;
}
</style>
