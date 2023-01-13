<template>
  <!-- Footer Section -->
  <div class="section-footer">
    <p class="footer-text m-0 p-0">
      Copyright © 2022 Qavah. All rights reserved
      <!-- - Designed By One Stop
      Designing. -->
    </p>

    <div class="footer-breadcrums">
      <!-- <b-link class="footer-breadcrums-link" to="/blog">Blog</b-link>
      -
      <b-link class="footer-breadcrums-link" to="/success-stories"
        >Success Stories</b-link
      > -->
      <b-link class="footer-breadcrums-link" to="/about">About Us</b-link>
      <b-link class="footer-breadcrums-link" to="/terms-and-conditions"
        >Terms</b-link
      >

      <b-link class="footer-breadcrums-link" to="/privacy-policy"
        >Privacy Policy</b-link
      >

      <b-link class="footer-breadcrums-link" to="/contact">Contact</b-link>

      <div class="footer-breadcrums-social">
        <b-link
          class="m-0 p-0 mr-1"
          variant="empty"
          href="https://facebook.com"
        >
          <b-img src="@/assets/img/login/facebook.png" height="20"></b-img>
        </b-link>
        <b-link class="m-0 p-0 mr-1" variant="empty" href="https://twitter.com">
          <b-img src="@/assets/img/login/twitter.png" height="20"></b-img>
        </b-link>
        <b-link class="m-0 p-0" variant="empty" href="https://google.com">
          <b-img src="@/assets/img/login/google.png" height="20"></b-img>
        </b-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media only screen and (max-width: 992px) {
  .footer-text {
    text-align: center;
  }
  .section-footer {
    margin-top: 2rem;
    display: flex;
    flex-direction: column-reverse;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    padding: 2rem 2rem;
    background-color: #fff;
  }
  .footer-breadcrums {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .footer-breadcrums-social {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
  }
}

@media only screen and (min-width: 992px) {
  .footer-text {
    text-align: left;
  }
  .section-footer {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 2rem;
    background-color: #fff;
  }
  .footer-breadcrums {
    display: flex;
    flex-direction: row;
  }
  .footer-breadcrums-social {
    display: flex;
    flex-direction: row;
  }

  .footer-breadcrums-link::after {
    content: "-";
    padding: 0.2rem;
  }

  .footer-breadcrums-link:last-child {
    content: "";
  }
}

.footer-breadcrums-link {
  color: #333;
}
</style>
