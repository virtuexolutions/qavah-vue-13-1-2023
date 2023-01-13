<template>
  <div>
    <b-card class="rounded-lg">
      <h2>They’re your type</h2>
      <hr />

      <b-overlay :show="loader">
        <template #overlay>
          <GridLoader
            class="custom-class"
            color="#93652b"
            :loading="loader"
            :size="10"
            sizeUnit="px"
          />
        </template>

        <div class="people-container" v-if="peoples">
          <b-media
            class="person-item"
            v-for="(person, index) in peoples"
            :key="index"
          >
            <template #aside>
              <!-- <b-img :src="person.thumbnail" width="64" alt="placeholder"></b-img> -->
              <b-avatar
                :to="'/dashboard/profile/' + person.myUid"
                v-if="person.profile_images.length > 0"
                :src="person.profile_images[0].url"
                size="lg"
                rounded="lg"
              >
              </b-avatar>
              <b-avatar
                :to="'/dashboard/profile/' + person.id"
                v-else
                src="@/assets/profiles/empty.png"
                size="lg"
                rounded="lg"
              >
              </b-avatar>
            </template>

            <div class="content">
              <router-link :to="'/dashboard/profile/' + person.id">
                <h5 class="m-0 p-0 text-capitalize">
                  {{ person.profileName }}
                </h5>
              </router-link>
              <h6 class="mb-0 pb-0">
                {{ person.age }} - {{ person.location.city }},
                {{ person.location.state_abbr }}
              </h6>
              <p class="m-0 p-0">
                {{ Math.round(person.distance) }} Miles Away
              </p>
              <!-- <p class="m-0 p-0">{{ person.distance }} Miles Away</p> -->
            </div>
          </b-media>
        </div>

        <div v-else class="no-likes-yet-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <h2>Could Not Found Any Similar Users</h2>
          <p>
            Give a little, get a little. Send some likes <br />
            to people who've caught your eye!
          </p>
          <!-- <b-button class="go-to-search-btn"
            >Go to search
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              /></svg
          ></b-button> -->
        </div>
      </b-overlay>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
import { apiUrl, headers } from "@/constants/config";
import { mapGetters } from "vuex";
import Vue from "vue";
export default {
  data() {
    return {
      loader: false,
      peoples: null,
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  methods: {
    getData() {
      this.loader = true;
      // console.log("they are your type =? ", this.currentUser.uid);

      setTimeout(() => {
        if (this.currentUser.uid) {
          let data = {
            uid: this.currentUser.uid,
          };

          axios
            .post(`${apiUrl}/seeking/theyareyourtype`, data, { headers })
            .then((response) => {
              if (response.status === 200) {
                this.loader = false;

                // console.log("they are your type -> ", response);
                let data = response.data.peoples;
                // console.log("data -> ", data);
                this.peoples = data;
              } else {
                this.loader = false;
                // console.log(response);
              }
            })
            .catch((err) => {
              this.loader = false;
              console.log("err -> ", err);
            });
        }
      }, 800);
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.no-likes-yet-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 300px;
}

.person-item {
  margin: 0.5rem 0;
}

.person-item .content {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
}
</style>