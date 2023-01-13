<template>
  <div>
    <b-modal
      id="profileImageUploadModal"
      content-class="rounded-lg"
      body-class="rounded-lg"
      hide-header
      hide-footer
    >
      <div class="icon float-right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          @click="closeModal('profileImageUploadModal')"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>

      <div class="d-flex justify-content-center align-items-center">
        <b-img
          width="200"
          height="200"
          class="rounded-lg"
          :src="url ? url : profileimage"
        ></b-img>
      </div>

      <b-form-group class="mt-4">
        <b-form-file
          v-model="newImage"
          :state="Boolean(newImage)"
          @change="onFileChange($event)"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
        ></b-form-file>
        <div class="mt-3">
          Selected file: {{ newImage ? newImage.name : "" }}
        </div>
      </b-form-group>

      <div class="d-flex justify-content-center align-items-center">
        <b-button class="custom-btn-1" @click="update">Update</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { apiUrl } from "@/constants/config";
import axios from "axios";

export default {
  props: ["profileimage"],
  data() {
    return {
      newImage: [],
      url: "",
    };
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },
    openModal(id) {
      this.$bvModal.show(id);
    },
    closeModal(id) {
      this.$bvModal.hide(id);
    },
    update() {
      this.closeModal("profileImageUploadModal");

      let body = {};
    },
    getData() {
      let myUid = "mVRs3F4Y0UWERFwuL88pJvSDTYg2";

      axios
        .get(`${apiUrl}/favoured/who-viewed-me?myUid=${myUid}`)
        .then((response) => {
          if (response.status === 200) {
            console.log("res -> ", response);
            let data = response.data;
            console.log("data -> ", data);
          } else {
            console.log(response);
          }
        })
        .catch((e) => console.log(e));
    },
  },
  mounted() {},
};
</script>

<style scoped>
.icon svg {
  transition: all ease 0.5s;
}

.icon svg:hover {
  stroke: #93652b;
  transform: scale(110%);
  cursor: pointer;
}

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
</style>