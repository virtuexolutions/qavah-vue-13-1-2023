<template>
  <div class="">
    <b-overlay :show="loading" rounded="sm">
      <template #overlay>
        <GridLoader
          class="custom-class"
          color="#93652b"
          :loading="loading"
          :size="10"
          sizeUnit="px"
        />
      </template>

      <div class="searches-container" v-if="searches.length > 0">
        <b-card
          no-body
          class="single-search rounded-lg mb-1"
          v-for="(search, index) in searches"
          :key="index"
        >
          <div class="top">
            <div class="content">
              <p class="p-0 m-0 index">{{ index + 1 }}</p>
              <router-link :to="'/dashboard/saved-seeking/' + search.id"
                ><p class="p-0 m-0 name">
                  {{ search.filter_name }}
                </p></router-link
              >
            </div>

            <span @click="removeSearch(search.id)" class="filter-cancel-icon"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                height="25"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clip-rule="evenodd"
                /></svg
            ></span>
          </div>

          <div class="bottom">
            <b-badge
              class="custom-filter"
              variant="outline-primary"
              pill
              v-for="(filter, index) in search.user_filter"
              :key="index"
            >
              <span class="text-capitalize"
                >{{ filter.key }} :
                <span
                  v-for="(value, index) in JSON.parse(filter.values)"
                  :key="index"
                >
                  {{ value }},
                </span>
              </span>
            </b-badge>
          </div>
        </b-card>
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
        <h2>No Saved Searches</h2>
        <p>
          Give a little, get a little. Send some likes <br />
          to people who've caught your eye!
        </p>
        <b-button to="/dashboard/seeking" class="go-to-search-btn"
          >Go to seeking
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
        ></b-button>
      </div>
    </b-overlay>
  </div>
</template>

<script>
import { GridLoader } from "@saeris/vue-spinners";
import axios from "axios";
import { apiUrl, headers } from "@/constants/config";
import { getCurrentUser } from "@/utils/index";
import { mapGetters } from "vuex";
import Vue from "vue";
export default {
  components: {
    GridLoader,
  },
  data() {
    return {
      loading: false,
      searches: [
        // {
        //   id: 1,
        //   name: "My Search 1",
        // },
        // {
        //   id: 2,
        //   name: "My Search 2",
        // },
        // {
        //   id: 3,
        //   name: "My Search 3",
        // },
        // {
        //   id: 4,
        //   name: "My Search 4",
        // },
      ],
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  methods: {
    getAllSavedSearches() {
      // let data = {
      //   uid: this.currentUser.uid,
      // };

      axios
        .get(`${apiUrl}/seeking/get_saved_all_searches`, { headers })
        .then((res) => {
          debugger;
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              this.searches = data.filters;
            } else {
              this.searchModalLoader = false;
              Vue.$toast.open({
                message: `Error Occurred: ${data.error}`,
                type: "error",
              });
            }
          } else {
            this.searchModalLoader = false;
            Vue.$toast.open({
              message: "Unknown Error Occurred!",
              type: "error",
            });
          }
        })
        .catch((err) => {
          this.searchModalLoader = false;
          console.log(err);
          Vue.$toast.open({
            message: err.message,
            type: "error",
          });
        });
    },
    removeSearch(id) {
      let data = {
        uid: this.currentUser.uid,
        searchId: id,
      };

      console.log("data => ", data);
      axios
        .post(`${apiUrl}/seeking/remove_a_search`, data)
        .then((res) => {
          console.log("get all remove_a_search res -> ", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              Vue.$toast.open({
                message: `Search Has Been Removed!`,
                type: "success",
              });

              this.getAllSavedSearches();
            } else {
              Vue.$toast.open({
                message: `Error Occurred: ${data.error}`,
                type: "error",
              });
            }
          } else {
            Vue.$toast.open({
              message: "Unknown Error Occurred!",
              type: "error",
            });
          }
        })
        .catch((err) => {
          console.log(err);
          Vue.$toast.open({
            message: err.message,
            type: "error",
          });
        });
    },
  },
  mounted() {
    this.getAllSavedSearches();
  },
};
</script>

<style scoped lang="scss">
.go-to-search-btn {
  background-color: #93652b !important;
  outline: none;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: center;
  gap: 0.3rem;
  align-items: center;
  padding: 1rem 2rem;
  transition: all ease 0.5s;
}

.go-to-search-btn:hover {
  background-color: #ac854e !important;
  transform: scale(105%);
}
.no-likes-yet-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 300px;
}

.edit-icon svg {
  stroke: #93652b;
  transition: all ease 0.5s;
}

.edit-icon svg:hover {
  stroke: #be843c;
  transform: scale(104%);
  cursor: pointer;
}

.filter-cancel-icon {
  cursor: pointer;
}

.filter-cancel-icon svg {
  fill: red;
  transition: all ease 0.5s;
}

.filter-cancel-icon svg:hover {
  fill: red;
  transform: scale(104%);
  cursor: pointer;
}

.custom-filter {
  color: #93652b;
  margin: 0.2rem;
  transition: all ease 0.5s;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

.custom-filter:hover {
  transform: scale(110%);
  cursor: pointer;
}

.searches-container {
  .single-search {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .content {
      display: flex;
      gap: 1rem;
    }

    .bottom {
      display: flex;
      flex-wrap: wrap;
    }

    .index {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .name {
      font-size: 1.5rem;
    }
  }
}
</style>