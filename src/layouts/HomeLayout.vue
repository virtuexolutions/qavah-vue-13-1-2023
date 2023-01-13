<template>
  <div class="home-layout-container">
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.home-layout-container {
  position: relative;
  overflow: hidden;
  /* overflow-x: hidden; */
}

/* .floating-btn {
  position: absolute;
  bottom: 0;
  right: 0;
} */
</style>
