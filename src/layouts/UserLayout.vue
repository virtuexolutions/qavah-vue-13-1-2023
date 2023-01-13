<template>
  <div id="root">
    <slot></slot>
  </div>
</template>
<script>
export default {
  mounted() {
    // document.body.classList.add("background");
  },
  beforeDestroy() {
    // document.body.classList.remove("background");
  },
};
</script>
