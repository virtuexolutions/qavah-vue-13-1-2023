<template>
  <footer class="custom-footer">
    <hr />
    <div class="footer-links">
      <b-container>
        <b-row>
          <!-- 1 -->
          <b-col lg="2" md="2" sm="4">
            <ul class="nav-list">
              <li>
                <router-link to="/about">About</router-link>
              </li>
              <li>
                <router-link to="/contact">Contact</router-link>
              </li>
              <li>
                <router-link to="/careers">Careers</router-link>
              </li>
            </ul>
          </b-col>

          <!-- 2 -->
          <b-col lg="2" md="2" sm="4">
            <ul class="nav-list">
              <li>
                <router-link to="/about">Terms Of User</router-link>
              </li>
              <li>
                <router-link to="/privacy-policy">Privacy Policy</router-link>
              </li>
              <li>
                <router-link to="/cookie-policy">Cookie Policy</router-link>
              </li>
            </ul>
          </b-col>

          <!-- 3 -->
          <b-col lg="2" md="2" sm="4">
            <ul class="nav-list">
              <li>
                <router-link to="/learn">Learn</router-link>
              </li>
              <li>
                <router-link to="/safety">Safety</router-link>
              </li>
              <li>
                <router-link to="/media-room">Media Room</router-link>
              </li>
            </ul>
          </b-col>

          <!-- 4 -->
          <b-col lg="2" md="2" sm="4">
            <ul class="nav-list">
              <li>
                <router-link to="/blog">Blog</router-link>
              </li>
              <li>
                <router-link to="/advertise">Advertise</router-link>
              </li>
              <li>
                <router-link to="/success-stories">Success Stories</router-link>
              </li>
            </ul>
          </b-col>

          <!-- 5 -->
          <b-col lg="2" md="2" sm="4">
            <ul class="nav-list">
              <li>
                <router-link to="/cookie-settings"
                  >Cookies Settings</router-link
                >
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="footer-content">
      <b-img src="/assets/logos/logo.png" height="30"></b-img>
      <p class="mb-0 text-muted">@ Copyright{{ currentYear }} Qavah.us</p>
      <ul class="breadcrumb pt-0 pr-0 float-right">
        <div class="social-icons">
          <b-button class="m-0 p-0" variant="empty">
            <b-img src="/assets/img/login/facebook.png" height="20"></b-img>
          </b-button>
          <b-button class="m-0 p-0" variant="empty">
            <b-img src="/assets/img/login/twitter.png" height="20"></b-img>
          </b-button>
          <b-button class="m-0 p-0" variant="empty">
            <b-img src="/assets/img/login/vk.png" height="20"></b-img>
          </b-button>
          <b-button class="m-0 p-0" variant="empty">
            <b-img src="/assets/img/login/google.png" height="20"></b-img>
          </b-button>
        </div>
        <!-- <li class="breadcrumb-item mb-0">
                <a href="#" class="btn-link">
                  <b-img
                    src="/assets/img/login/facebook.png"
                    height="20"
                  ></b-img>
                </a>
              </li>
              <li class="breadcrumb-item mb-0">
                <a href="#" class="btn-link">
                  <b-img
                    src="/assets/img/login/twitter.png"
                    height="20"
                  ></b-img>
                </a>
              </li>
              <li class="breadcrumb-item mb-0">
                <a href="#" class="btn-link">
                  <b-img src="/assets/img/login/vk.png" height="20"></b-img>
                </a>
              </li>
              <li class="breadcrumb-item mb-0">
                <a href="#" class="btn-link">
                  <b-img src="/assets/img/login/google.png" height="20"></b-img>
                </a>
              </li> -->
      </ul>
    </div>
  </footer>
</template>
<script>
export default {
  computed: {
    currentYear() {
      const data = new Date();
      const year = data.getFullYear();
      return year;
    },
  },
};
</script>


<style scoped>
.custom-footer {
  padding: 0rem 2rem;
  width: 100%;
  z-index: 1 !important;
}
.nav-list {
  list-style-type: none;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media only screen and (max-width: 500px) {
  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
