<template>
  <div class="">
    <div class="heading-filters">
      <h2 class="section-heading" v-if="currentUser.subscription.length > 0">
        Upcoming Events
      </h2>
      <!-- <div class="filters" v-if="currentUser.subscription.length > 0">
        <b-dropdown
          variant="empty"
          right
          toggle-class="p-0"
          menu-class="m-0 p-0"
          no-caret
        >
          <template slot="button-content">
            <b-button class="filter-btn"
              >Weekdays
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="15"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                /></svg
            ></b-button>
          </template>

          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
        </b-dropdown>
        <b-dropdown
          variant="empty"
          right
          toggle-class="p-0"
          menu-class="m-0 p-0"
          no-caret
        >
          <template slot="button-content">
            <b-button class="filter-btn"
              >Event Type
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="15"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                /></svg
            ></b-button>
          </template>

          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
        </b-dropdown>
        <b-dropdown
          variant="empty"
          right
          toggle-class="p-0"
          menu-class="m-0 p-0"
          no-caret
        >
          <template slot="button-content">
            <b-button class="filter-btn"
              >Any Category
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="15"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                /></svg
            ></b-button>
          </template>

          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
        </b-dropdown>
      </div> -->
    </div>

    <div class="events-container" v-if="currentUser.subscription.length > 0">
      <b-card
        class="event-card mb-4"
        v-for="(event, index) in events"
        :key="index"
        no-body
      >
        <a :href="event.link">
          <div class="position-relative">
            <img :src="event.thumbnail" class="card-img-top" />
            <!-- <b-badge
              variant="primary"
              pill
              class="position-absolute badge-top-left"
              >NEW</b-badge
            >
            <b-badge
              variant="secondary"
              pill
              class="position-absolute badge-top-left-2"
              >TRENDING</b-badge
            > -->
          </div>
          <b-card-body class="event-card-body">
            <p class="date p-0 m-0">
              <small>Start On : </small>
              <b>{{ event.date }}</b>
            </p>
            <p class="date p-0 m-0">
              <small>End On : </small>
              <b>{{ event.end_date }}</b>
            </p>
            <h6 class="name p-0 m-0">
              {{ event.title }}
            </h6>
            <p class="description m-0 p-0">
              {{ event.description }}
            </p>
          </b-card-body>
        </a>
      </b-card>
    </div>
    <div class="locked-card-container" v-else>
      <div class="events-container-dummy">
        <b-card
          class="event-card mb-4"
          v-for="(event, index) in events"
          :key="index"
          no-body
        >
          <div class="position-relative">
            <img :src="event.thumbnail" class="card-img-top" />
            <!-- <b-badge
            variant="primary"
            pill
            class="position-absolute badge-top-left"
            >NEW</b-badge
          >
          <b-badge
            variant="secondary"
            pill
            class="position-absolute badge-top-left-2"
            >TRENDING</b-badge
          > -->
          </div>
          <b-card-body class="event-card-body">
            <p class="date p-0 m-0">
              {{ event.date }}
            </p>
            <h6 class="name p-0 m-0">
              {{ event.name }}
            </h6>
            <p class="description m-0 p-0">
              {{ event.description }}
            </p>
          </b-card-body>
        </b-card>
      </div>

      <b-card no-body class="locked-card">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clip-rule="evenodd"
          />
        </svg>
        <p class="my-3">
          This feature is for subscribers only. Please upgrade to avail this
          feature.
        </p>
        <b-button
          class="custom-btn-1"
          @click="$router.push('/dashboard/powerups')"
          >Upgrade</b-button
        >
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { apiUrl, headers } from "@/constants/config";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      premium: false,
      events: [
        {
          id: "1",
          thumbnail:
            "https://overdrivestudiosdotes.files.wordpress.com/2014/09/people-concert-wallpaper-1080p-backgrounds-concert-people-background-25952.jpg",
          name: "The World - Lets Talk",
          date: "March 18",
          description:
            "If you want to see Adele sing the songs of her new album 30 this year, your best bet is to plan a trip to Las Vegas",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  methods: {
    getEventData() {
      axios
        .get(`${apiUrl}/events/getEvents`, { headers })
        .then((response) => {
          let data = response.data;
          debugger;
          if (data.status) {
            this.events = data.events;
          } else {
            // console.log(response.data)
          }
        })
        .catch((e) => console.log(e));
    },
  },
  async mounted() {
    this.getEventData();
  },
};
</script>

<style scoped>
.locked-card-container {
  position: relative;
}

.events-container-dummy {
  filter: blur(8px);
  -webkit-filter: blur(8px);
}

.locked-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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
  transform: scale(110%);
  cursor: pointer;
}

/* .events-container {
  display: grid;
  grid-template-columns: repeat(1, auto);
  row-gap: 1rem;
  column-gap: 1rem;
} */

.event-card {
  max-width: 300px;
}

.event-card .event-card-body {
  background-color: #f3f6f8;
}

.event-card .event-card-body .date {
  color: #c070f6;
}

.event-card .event-card-body .description {
  color: #d0d1d1;
  font-size: 0.7rem;
  line-height: 1.2;
  margin-top: 5px;
}

.heading-filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 0;
}

.filter-btn {
  background-color: #f1f3f5;
  color: #c3c5c5;
  border: none;
  outline: none;
  border-radius: 5px;
  transition: all ease 0.5s;
}

.filter-btn:active {
  background-color: #f1f3f5 !important;
  color: #333 !important;
}

.filter-btn:focus {
  background-color: #f1f3f5 !important;
  color: #333 !important;
}

.filter-btn:hover {
  color: #333;
}

@media only screen and (max-width: 600px) {
  .events-container {
    display: grid;
    grid-template-columns: repeat(1, auto) !important;
    row-gap: 1rem;
    column-gap: 1rem;
  }
}

@media only screen and (max-width: 772px) {
  .heading-filters {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1.5rem 0;
  }

  .filter {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media only screen and (max-width: 992px) {
  .events-container {
    display: grid;
    grid-template-columns: repeat(2, auto) !important;
    row-gap: 1rem;
    column-gap: 1rem;
  }
}

@media only screen and (max-width: 1200px) {
  .events-container {
    display: grid;
    grid-template-columns: repeat(3, auto) !important;
    row-gap: 1rem;
    column-gap: 1rem;
  }
}

@media only screen and (min-width: 1200px) {
  .events-container {
    display: grid;
    grid-template-columns: repeat(4, auto) !important;
    row-gap: 1rem;
    column-gap: 1rem;
  }
}
</style>
