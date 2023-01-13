<template>
  <div class="" v-if="!currentUser.user_profile_verified">
    <div class="wrapper" v-if="!isCameraOpen">
      <h2 class="text-center">Verify your account</h2>
      <div class="icon">
        <svg viewBox="0 0 24 24" height="80" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.71,6.29l-5.3,5.3L8.29,9.47a1,1,0,1,0-1.41,1.41l2.83,2.83a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29l6-6a1,1,0,0,0,0-1.42A1,1,0,0,0,15.71,6.29ZM19,2H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H16.59l3.7,3.71A1,1,0,0,0,21,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,22,21V5A3,3,0,0,0,19,2Zm1,16.59-2.29-2.3A1,1,0,0,0,17,16H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"
            fill="#A1722E"
          />
        </svg>
      </div>

      <p>
        It's easy, Verifying your account with a phone number allows us to make
        sure you are really you. This helps keep everyone safe & secure.
      </p>

      <p>
        We won't share your number with anyone. but we will put a special badge
        on your profile so members know you're legit. Win-win.
      </p>

      <b-button class="custom-btn-1" @click="toggleCamera">Continue</b-button>
    </div>
    <div class="wrapper" v-else>
      <div class="camera-box">
        <div style="display: flex; justify-content: center">
          <img
            style="height: 25px"
            v-if="isCameraOpen"
            src="https://img.icons8.com/material-outlined/50/000000/camera--v2.png"
            class="button-img camera-shoot"
            @click="capture"
          />
          <div class="camera-button">
            <button
              type="button"
              class="button is-rounded cam-button"
              style="margin-left: 40%; background-color: white; border: 0px"
              @click="toggleCamera"
            >
              <span v-if="!isCameraOpen"
                ><img
                  style="height: 25px"
                  class="button-img"
                  src="https://img.icons8.com/material-outlined/50/000000/camera--v2.png"
              /></span>
              <span v-else
                ><img
                  style="height: 25px"
                  class="button-img"
                  src="https://img.icons8.com/material-outlined/50/000000/cancel.png"
              /></span>
            </button>
          </div>
        </div>
        <div>
          <div v-if="isCameraOpen" class="camera-canvas">
            <video
              ref="camera"
              :width="canvasWidth"
              :height="canvasHeight"
              autoplay
            ></video>
            <canvas
              v-show="false"
              id="photoTaken"
              ref="canvas"
              :width="canvasWidth"
              :height="canvasHeight"
            ></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="wrapper" v-if="currentUser.user_profile_verified.status == 1">
      <h2 class="text-center">Your Account Has Been Verified</h2>
      <div class="icon">
        <!-- <svg viewBox="0 0 24 24" height="80" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.71,6.29l-5.3,5.3L8.29,9.47a1,1,0,1,0-1.41,1.41l2.83,2.83a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29l6-6a1,1,0,0,0,0-1.42A1,1,0,0,0,15.71,6.29ZM19,2H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H16.59l3.7,3.71A1,1,0,0,0,21,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,22,21V5A3,3,0,0,0,19,2Zm1,16.59-2.29-2.3A1,1,0,0,0,17,16H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"
            fill="#A1722E"
          />
        </svg> -->
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="96px"
          height="96px"
          viewBox="0 0 96 96"
          enable-background="new 0 0 96 96"
          xml:space="preserve"
        >
          <g>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="#6BBE66"
              d="M48,0c26.51,0,48,21.49,48,48S74.51,96,48,96S0,74.51,0,48 S21.49,0,48,0L48,0z M26.764,49.277c0.644-3.734,4.906-5.813,8.269-3.79c0.305,0.182,0.596,0.398,0.867,0.646l0.026,0.025 c1.509,1.446,3.2,2.951,4.876,4.443l1.438,1.291l17.063-17.898c1.019-1.067,1.764-1.757,3.293-2.101 c5.235-1.155,8.916,5.244,5.206,9.155L46.536,63.366c-2.003,2.137-5.583,2.332-7.736,0.291c-1.234-1.146-2.576-2.312-3.933-3.489 c-2.35-2.042-4.747-4.125-6.701-6.187C26.993,52.809,26.487,50.89,26.764,49.277L26.764,49.277z"
            />
          </g>
        </svg>
      </div>
    </div>
    <div class="wrapper" v-if="currentUser.user_profile_verified.status == 2">
      <h2 class="text-center">Your account verification is in process</h2>
      <div class="icon">
        <svg viewBox="0 0 24 24" height="80" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.71,6.29l-5.3,5.3L8.29,9.47a1,1,0,1,0-1.41,1.41l2.83,2.83a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29l6-6a1,1,0,0,0,0-1.42A1,1,0,0,0,15.71,6.29ZM19,2H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H16.59l3.7,3.71A1,1,0,0,0,21,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,22,21V5A3,3,0,0,0,19,2Zm1,16.59-2.29-2.3A1,1,0,0,0,17,16H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"
            fill="#A1722E"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import Switches from "vue-switches";
import { getCurrentUser } from "@/utils";
import { mapGetters } from "vuex";
import { apiUrl, headers } from "@/constants/config";
import Vue from "vue";
import axios from "axios";
export default {
  data() {
    return {
      loader: false,
      isCameraOpen: false,
      canvasHeight: 500,
      canvasWidth: 500,
      items: [],
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  methods: {
    toggleCamera() {
      if (this.isCameraOpen) {
        this.isCameraOpen = false;
        this.stopCameraStream();
      } else {
        this.isCameraOpen = true;
        this.startCameraStream();
      }
    },
    startCameraStream() {
      const constraints = (window.constraints = {
        audio: false,
        video: true,
      });
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          this.$refs.camera.srcObject = stream;
        })
        .catch((error) => {
          alert("Browser doesn't support or there is some errors. \n" + error);
        });
    },
    stopCameraStream() {
      let tracks = this.$refs.camera.srcObject.getTracks();
      tracks.forEach((track) => {
        track.stop();
      });
    },
    capture() {
      debugger;
      const FLASH_TIMEOUT = 50;
      let self = this;
      setTimeout(() => {
        const context = self.$refs.canvas.getContext("2d");
        context.drawImage(
          self.$refs.camera,
          0,
          0,
          self.canvasWidth,
          self.canvasHeight
        );
        debugger;
        const dataUrl = self.$refs.canvas
          .toDataURL("image/jpeg")
          .replace("image/jpeg", "image/octet-stream");
        // self.addToPhotoGallery(dataUrl);
        self.uploadPhoto(dataUrl);
        // self.isCameraOpen = false;
        self.stopCameraStream();
      }, FLASH_TIMEOUT);
    },
    // addToPhotoGallery(dataURI) {
    //   this.items.push({
    //     src: dataURI,
    //     thumbnail: dataURI,
    //     w: this.canvasWidth,
    //     h: this.canvasHeight,
    //     alt: "some numbers on a grey background", // optional alt attribute for thumbnail image
    //   });
    // },
    uploadPhoto(dataURL) {
      let uniquePictureName = this.generateCapturePhotoName();
      let capturedPhotoFile = this.dataURLtoFile(
        dataURL,
        uniquePictureName + ".jpg"
      );
      let formData = new FormData();
      formData.append("file", capturedPhotoFile);
      axios
        .post(`${apiUrl}/user/verification_image`, formData, { headers })
        .then((response) => {
          const data = response.data;
          if (response.status === 200) {
            if (data.status) {
              Vue.$toast.success(data.message);
              this.$router.go();
              this.loader = false;
              this.isCameraOpen = false;
            } else {
              Vue.$toast.default(data.message);
              this.loader = false;
              this.isCameraOpen = false;
            }
          } else {
            Vue.$toast.error(data.error);
            this.isCameraOpen = false;
          }
        })
        .catch((e) => {
          console.log(e);
          Vue.$toast.error(e);
          this.loader = false;
          this.isCameraOpen = false;
        });
    },

    generateCapturePhotoName() {
      return Math.random().toString(36).substring(2, 15);
    },

    dataURLtoFile(dataURL, filename) {
      let arr = dataURL.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    },
  },
};
</script>

<style scoped>
.custom-btn-1:hover {
  background-color: #ac854e !important;
  transform: scale(105%);
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
}
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>