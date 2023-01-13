<template>
  <div class="payment-cancel-page p-5">
    <div class="header">
      <i class="reject-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          height="100"
        >
          <path
            fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clip-rule="evenodd"
          />
        </svg>
      </i>
      <!-- <p class="text-primary heading mt-4">Thank you for your payment</p> -->
      <p class="text-primary heading mt-4">
        Your payment has been unsuccessfull!
      </p>

      <b-button class="custom-btn-1 mt-4" @click="$router.push('/dashboard')"
        >Proceed</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("query -> ", this.$route.query);
  },
};
</script>

<style scoped>
.reject-icon svg {
  fill: red;
}

.payment-cancel-page {
  min-height: 80vh;
  margin-top: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
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