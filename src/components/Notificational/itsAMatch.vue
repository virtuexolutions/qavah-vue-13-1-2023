<template>
  <div class="">
    <b-modal
      hide-footer
      hide-header
      centered
      content-class="rounded-lg"
      body-class="rounded-lg"
      id="itsAMatch"
    >
      <div class="fireworks">
        <!-- <iframe src="https://embed.lottiefiles.com/animation/61314" height="100" width="100"></iframe> -->
        <lottie-player
          src="https://assets1.lottiefiles.com/packages/lf20_tv7hg5gn.json"
          background="transparent"
          speed="0.4"
          style="height: 150px"
          loop
          autoplay
        ></lottie-player>
      </div>
      <p class="text-center title font-weight-bold">HalleluYah</p>

      <p class="text-center">You made a isrealite connection!</p>
      <p class="text-center">Now test the spirits and prove a friend</p>

      <p class="text-center mt-2">Messaging is the next step</p>

      <div class="avatars">
        <b-avatar size="128" :src="details.myImage"></b-avatar>
        <b-avatar size="128" :src="details.targetImage"></b-avatar>
      </div>

      <div class="btn-container">
        <b-button class="custom-btn-1" @click="goToChat" block
          >SEND MESSAGE</b-button
        >
        <b-button
          class="custom-btn-2"
          @click="goToDiscover"
          variant="outline-primary"
          block
          >KEEP SWIPING</b-button
        >
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["details"],
  methods: {
    closeModal(id) {
      this.$bvModal.hide(id);
    },
    goToChat() {
      this.$router
        .push("/dashboard/beloved")
        .then(() => {
          this.closeModal("itsAMatch");
        })
        .catch((err) => {
          console.log("err -> ", err);
        });
    },
    goToDiscover() {
      this.$router
        .push("/dashboard/discover")
        .then(() => {
          this.closeModal("itsAMatch");
        })
        .catch((err) => {
          console.log("err -> ", err);
        });
    },
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  mounted() {
    // console.log("details-> ", this.details);
  },
};
</script>

<style scoped lang="scss">
.title {
  font-size: 2rem;
}

.avatars {
  padding: 2rem 0;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
}

.btn-container {
  display: flex;
  flex-direction: column;
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
  transition: all ease 0.7s;
  font-size: 14px;
}

.custom-btn-1:hover {
  background-color: #ac854e !important;
  transform: scale(110%);
}

.custom-btn-2 {
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7rem 1.3rem;
  transition: all ease 0.7s;
  font-size: 14px;
}

.custom-btn-2:hover {
  transform: scale(110%);
}
</style>