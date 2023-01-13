<template>
  <div class="error-container">
    <div class="form-side">
      <router-link tag="a" to="/">
        <span class="logo-single" />
      </router-link>
      <h6 class="mb-4">{{ $t("unauthorized.title") }}</h6>
      <p class="mb-0 text-muted text-small mb-0">
        {{ $t("unauthorized.detail") }}
      </p>
      <p class="display-1 font-weight-bold mb-5">503</p>
      <b-button
        type="submit"
        variant="primary"
        size="lg"
        class="custom-btn-1"
        @click="goBack"
        >{{ $t("pages.go-back-home") }}</b-button
      >
    </div>
  </div>
</template>
<script>
import {} from "../constants/config";
export default {
  methods: {
    goBack() {
      this.$router.push("/dashboard");
    },
  },
  mounted: function () {
    document.body.classList.add("background");
  },
  beforeDestroy() {
    document.body.classList.remove("background");
  },
};
</script>

<style scoped>
.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form-side {
  display: flex;
  flex-direction: column;
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
  padding: 1rem 2rem;
}
</style>
