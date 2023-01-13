<template>
  <div class="">
    <!-- Navbar -->
    <b-navbar toggleable="lg" type="dark" variant="light">
      <b-container>
        <b-navbar-brand to="/">
          <b-img src="@/assets/logos/logo.png" height="75"></b-img>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav> </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav
            class="ml-auto d-flex justify-content-center align-items-center"
          >
            <b-button variant="empty" to="/user/login">Login</b-button>
            <b-button class="custom-btn-1" to="user/register"
              >Register</b-button
            >
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <b-container class="main-section mt-4">
      <h2>Blog</h2>
    </b-container>

    <sectionFooter />
  </div>
</template>

<script>
import sectionFooter from "@/components/Landingpage/footerComponent.vue";
export default {
  components: {
    sectionFooter,
  },
};
</script>

<style scoped>
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
