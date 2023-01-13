<template>
  <div class="events-page p-5">
    <b-card class="event-banner-card mb-4 text-white" no-body>
      <img src="@/assets/img/event-banner.jpg" class="card-img" />
      <div class="card-img-overlay">
        <div class="content">
          <h5 class="title">Want More First Dates ?</h5>
          <p class="subtitle p-0 m-0">
            Skip sstraight to "In-person" with match event
          </p>
          <b-button
            class="mt-4 banner-btn"
            v-if="currentUser.subscription.length > 0"
            v-b-modal.EventModal
            >Post an Event</b-button
          >
        </div>
      </div>
    </b-card>

    <div class="events">
      <eventComponent />
    </div>

    <b-modal
      id="EventModal"
      content-class="rounded-lg"
      body-class="rounded-lg"
      centered
      size="lg"
      hide-header
      hide-footer
    >
      <h2 class="text-left">Fill the Event form</h2>
      <h6 class="text-left"></h6>
      <div class="mt-4">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <label for="validationCustom01" class="form-label"
                >Event Title</label
              >
              <input
                type="text"
                class="form-control"
                v-model="events.title"
                id="validationCustom01"
                value="Mark"
                required
              />
            </div>
            <div class="col-md-6">
              <label class="form-label">Event Start Date</label>
              <input
                type="datetime-local"
                v-model="events.date"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-6">
              <label class="form-label">Event End Date</label>
              <input
                type="datetime-local"
                v-model="events.end_date"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-12 mt-3 mb-3">
              <label class="form-label">Ticketing URL</label>
              <input type="url" v-model="events.link" class="form-control" />
            </div>
            <div class="col-md-12 mt-3 mb-3">
              <label for="validationCustom02" class="form-label"
                >Event Banner</label
              >
              <input
                type="file"
                class="form-control"
                id="validationCustom02"
                @change="onFileChange"
                required
              />
            </div>
            <div class="col-md-12 mt-3 mb-3">
              <label for="validationCustom02" class="form-label"
                >Event Description</label
              >
              <textarea class="form-control" v-model="events.description">
              </textarea>
            </div>
            <div class="col-12">
              <button
                class="btn btn-primary"
                v-if="profileSettingLoader"
                type="button"
                disabled
              >
                Loading...
              </button>
              <button
                class="btn btn-primary"
                v-else
                type="button"
                @click="submit"
              >
                Submit form
              </button>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import eventComponent from "@/components/Events/eventComponent.vue";
import DatePicker2 from "vue2-datepicker";
import Vue from "vue";
import axios from "axios";
import { apiUrl, Resources_Url, headers } from "@/constants/config";
import { getCurrentUser } from "@/utils/index";
import { mapGetters, mapActions } from "vuex";
import { GridLoader } from "@saeris/vue-spinners";

export default {
  name: "events",
  components: {
    eventComponent,
    DatePicker2,
    GridLoader,
  },
  data() {
    return {
      events: {
        title: "",
        banner: null,
        date: "",
        end_date: "",
        link: "",
        description: "",
      },
      profileSettingLoader: false,
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.events.banner = files[0];
    },
    submit() {
      this.profileSettingLoader = true;
      let form = new FormData();
      form.append("banner", this.events.banner);
      form.append("title", this.events.title);
      form.append("date", this.events.date);
      form.append("end_date", this.events.end_date);
      form.append("description", this.events.description);
      form.append("link", this.events.link);

      axios
        .post(`${apiUrl}/event/add`, form, { headers })
        .then((res) => {
          let data = res.data;
          if (data.status) {
            Vue.$toast.success(`${data.message}`);
            this.$router.go();
          } else {
            Vue.$toast.default(`${data.message}`);
          }
          this.profileSettingLoader = false;
        })
        .catch((e) => {
          console.log(e);
          Vue.$toast.error(e);
          this.profileSettingLoader = false;
        });
    },
    // createImage(file) {
    //   var image = new Image();
    //   var reader = new FileReader();
    //   var vm = this;

    //   reader.onload = (e) => {
    //     vm.image = e.target.result;
    //   };
    //   reader.readAsDataURL(file);
    // },
    // removeImage: function (e) {
    //   this.image = "";
    // },
  },
};
</script>

<style scoped>
.events-page {
  min-height: 100vh;
  margin-top: 47px;
}

.event-banner-card .content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.event-banner-card .content .title {
  font-size: 1.2rem;
  font-weight: bold;
}

.banner-btn {
  outline: none;
  border: 1px solid #fff;
  border-radius: 10px;
  background: transparent !important;
  color: #fff;
  font-weight: bold;
  transition: all ease 0.5s;
}

.banner-btn:hover {
  background-color: #fff !important;
  color: #333;
  transform: scale(105%);
}
</style>
