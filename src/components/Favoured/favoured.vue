<template>
  <div>
    <b-link @click="$router.go(-1)">
      <i>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="15"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </i>
      Go Back</b-link
    >
    <b-tabs class="mt-2" pills no-nav-style>
      <b-tab title="Favored You" title-item-class="font-weight-bold" active>
        <hr />
        <favoredYou />
        <!-- <div v-if="favouredYouData.length === 0" class="no-likes-yet-container">
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
          <h2>No Likes Yet</h2>
          <p>
            Give a little, get a little. Send some likes <br />
            to people who've caught your eye!
          </p>
          <b-button class="go-to-search-btn"
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
          ></b-button>
        </div> -->
      </b-tab>
      <b-tab title="You Favored" title-item-class="font-weight-bold">
        <hr />
        <youfavored />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import favoredYou from "./favoredYou.vue";
import youfavored from "./youfavored.vue";
import axios from "axios";
import { GridLoader } from "@saeris/vue-spinners";
import Vue from "vue";

export default {
  name: "favoured-component",
  props: ["youFavoredData", "favouredYouData"],
  components: {
    favoredYou,
    youfavored,
  },
  data() {
    return {
      loader: false,
      favouredYouDataDummy: [
        {
          id: "1",
          name: "Indiana Jason",
          status: "liked",
          time: "21 mins ago",
          thumbnail: "https://i.ibb.co/F3ZdMwz/Picture-4.jpg",
        },
        {
          id: "2",
          name: "Jasson Andria",
          status: "matched",
          time: "21 mins ago",
          thumbnail:
            "data:image/jpeg;base64,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",
        },
      ],
    };
  },
  methods: {
    // getData() {
    //   let body = {};

    //   axios
    //     .post("", body)
    //     .then()
    //     .catch(() => {});
    // },
    formSubmit3() {
      this.loader = true;

      let config = {
        headers: {
          headers: { "Content-Type": "application/json" },
        },
      };
      let data = {};

      // console.log({
      //   ...data,
      // });

      // console.log("data -> ", data);
      axios
        .post(`${apiUrl}/auth/register`, data, config)
        .then((res) => {
          // console.log("res -> ", res);
          if (res.status === 200) {
            // this.setRegisteredUser(data);

            // Toast.fire({
            //   icon: "success",
            //   title: "Success",
            // });

            app.$toast.open({
              message:
                "User has been registered successfully ! you may now proceed to otp verification.",
              type: "success",
              // all of other options may go here
              position: "top",
            });

            this.$router.push("/user/login");
          } else {
            // Toast.fire({
            //   icon: "error",
            //   title: "Error",
            //   text: err,
            // });

            Vue.$toast.open({
              message: "Unknown Error Occurred!",
              type: "error",
              // all of other options may go here
              position: "top",
            });
            this.loader = false;
          }

          // this.$router.push("/app");
        })
        .catch((err) => {
          console.log(err);
          this.loader = false;
          Vue.$toast.open({
            message: err,
            type: "error",
            // all of other options may go here
            position: "top",
          });
        });
    },
  },
  watch: {
    youFavored(newval) {
      // console.log("newval -> ", this.youFavored);
    },
    favouredYou(newval) {
      // console.log("newval -> ", this.favouredYou);
    },
  },
};
</script>

<style scoped>
.locked-card {
  position: relative;
}

.locked-card .peoples {
  /* Add the blur effect */
  filter: blur(8px);
  -webkit-filter: blur(8px);
}

.locked-card .top-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent !important;
}

.person-item {
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  border-radius: 10px;
}

.person-item .left {
  display: flex;
  gap: 0.5rem;
}

.person-item .left .info .status {
  font-size: 0.8rem;
}

.person-item .left .info .time {
  font-size: 0.7rem;
  color: #c3c5c5;
}

.chat-btn {
  background-color: #93652b !important;
  outline: none;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease 0.5s;
}

.chat-btn:hover {
  background-color: #ac854e !important;
  transform: scale(105%);
}

.custom-tab-btn {
  background-color: #93652b !important;
  outline: none;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7rem 1.3rem;
  transition: all ease 0.5s;
}

.custom-tab-btn:hover {
  background-color: #ac854e !important;
  transform: scale(105%);
}

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

.add-icon {
  cursor: pointer;
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
  transition: all ease 0.5s;
}

.custom-btn-1:hover {
  background-color: #ac854e !important;
  transform: scale(105%);
}
</style>
