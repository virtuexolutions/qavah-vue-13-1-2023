<template>
  <div>
    <router-link to="#" @click.native.prevent="onThumbClick(0)">
      <img :src="thumb" alt="thumbnail" :class="className" height="50" class="rounded-sm hovering"/>
    </router-link>
    <LightGallery
      :images="[large]"
      :index="photoIndex"
      :disable-scroll="true"
      @close="handleHide()"
    />
  </div>
</template>

<script>
import { LightGallery } from "vue-light-gallery";

export default {
  props: ["thumb", "large", "className","height"],
  components: {
    LightGallery
  },
  data() {
    return {
      photoIndex: null
    };
  },
  methods: {
    onThumbClick(index) {
      this.photoIndex = index;
    },
    handleHide() {
      this.photoIndex = null;
    }
  }
};
</script>



<style scoped>
.hovering {
    transition: all ease 0.5s !important; 
}

.hovering:hover {
   transform: scale(110%) !important;
}
</style>
