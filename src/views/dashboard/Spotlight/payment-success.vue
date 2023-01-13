<template>
  <div class="payment-success-page">
    <div class="header">
      <i class="success-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          height="100"
        >
          <path
            fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clip-rule="evenodd"
          />
        </svg>
      </i>
      <!-- <p class="text-primary heading mt-4">Thank you for your payment</p> -->
      <p class="text-primary heading mt-4">Your payment has been received!</p>

      <b-button class="custom-btn-1 mt-4" @click="$router.push('/dashboard')"
        >Proceed</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openModal(id) {
      this.$bvModal.show(id);
    },
    closeModal(id) {
      this.$bvModal.hide(id);
    },
  },
  mounted() {
    console.log("query -> ", this.$route.query);
    // this.openModal("welcomeToQavah");
  },
};
</script>

<style scoped>
/* Mobile Screen Classes */
@media only screen and (max-width: 992px) {
  .payment-success-page {
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

/* Laptop Screen Classes */
@media only screen and (min-width: 992px) {
  .payment-success-page {
    min-height: 80vh;
    margin-top: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.success-icon svg {
  fill: #a3e635;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.heading {
  font-size: 2.5rem;
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
  font-size: 14px;
}

.custom-btn-1:hover {
  background-color: #ac854e !important;
  transform: scale(110%);
}
</style>