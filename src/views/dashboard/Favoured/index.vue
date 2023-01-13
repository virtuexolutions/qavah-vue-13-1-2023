<template>
  <div class="favored">
    <b-row>
      <b-col lg="8" md="8" sm="12">
        <favouritesComponent
          :youFavoredData="youFavored"
          :favouredYouData="favouredYou"
        />
      </b-col>
      <b-col class="right-section" lg="4" md="4" sm="12">
        <privatemode class="mb-3" />
        <types class="mb-3" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import favouritesComponent from "@/components/Favoured/favoured.vue";
import privatemode from "@/components/privatemode.vue";
import types from "@/components/types.vue";
import axios from "axios";
import { GridLoader } from "@saeris/vue-spinners";
import Vue from "vue";
import { apiUrl } from "@/constants/config";

export default {
  name: "favoured",
  components: {
    favouritesComponent,
    privatemode,
    types,
    GridLoader,
  },
  data() {
    return {
      youFavored: [
        {
          id: "1",
          name: "Ellison Stewards",
          status: "liked",
          time: "21 mins ago",
          thumbnail: "https://i.ibb.co/x3CSh6G/Picture-9.jpg",
        },
      ],
      favouredYou: [
        {
          id: "1",
          name: "Diana Diaz",
          status: "liked",
          time: "21 mins ago",
          thumbnail: "https://i.ibb.co/F3ZdMwz/Picture-4.jpg",
        },
      ],
    };
  },
  methods: {
    getYouFavored() {
      let config = {
        headers: {
          headers: { "Content-Type": "application/json" },
        },
      };
      let data = {};

      console.log({
        ...data,
      });

      console.log("data -> ", data);
      axios
        .post(`${apiUrl}/favoured/LikedByMe`, data, config)
        .then((res) => {
          console.log("res -> ", res);
          if (res.status === 200) {
            // Vue.$toast.open({
            //   message:
            //     "User has been registered successfully ! you may now proceed to otp verification.",
            //   type: "success",
            //   position: "top",
            // })
          } else {
            // Vue.$toast.open({
            //   message: "Unknown Error Occurred !",
            //   type: "error",
            //   position: "top",
            // });
          }
        })
        .catch((err) => {
          console.log(err);
          // this.loader = false;
          // Vue.$toast.open({
          //   message: err,
          //   type: "error",
          //   position: "top",
          // });
        });
    },
    getFavoredYou() {
      let config = {
        headers: {
          headers: { "Content-Type": "application/json" },
        },
      };
      let data = {};

      console.log({
        ...data,
      });

      console.log("data -> ", data);
      axios
        .post(`${apiUrl}/favoured/wholikedMe`, data, config)
        .then((res) => {
          console.log("res -> ", res);
          if (res.status === 200) {
            // Vue.$toast.open({
            //   message:
            //     "User has been registered successfully ! you may now proceed to otp verification.",
            //   type: "success",
            //   position: "top",
            // })
          } else {
            // Vue.$toast.open({
            //   message: "Unknown Error Occurred !",
            //   type: "error",
            //   position: "top",
            // });
          }
        })
        .catch((err) => {
          console.log(err);
          // this.loader = false;
          // Vue.$toast.open({
          //   message: err,
          //   type: "error",
          //   position: "top",
          // });
        });
    },
  },
  mounted() {
    // this.getYouFavored();
    // this.getFavoredYou();
  },
};
</script>

<style scoped>
/* Mobile Screen Classes */
@media only screen and (max-width: 992px) {
  .favored {
    min-height: 100vh;
    padding: 2rem;
  }

  .right-section {
    display: none;
  }
}

/* Laptop Screen Classes */
@media only screen and (min-width: 992px) {
  .favored {
    padding: 3rem;
    min-height: 100vh;
    margin-top: 51px;
  }

  .right-section {
    display: block;
  }
}
</style>
