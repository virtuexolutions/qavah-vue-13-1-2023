<template>
  <div class="spotlight-page">
    <div class="header">
      <h2 class="text-primary">Subscribe Addons</h2>
    </div>

    <b-row>
      <b-col lg="12" md="12" sm="12">
        <b-card>
          <b-row>
            <b-col lg="12" md="12" sm="12">
              <h2 class="my-4">Power up your profile</h2>
            </b-col>
            <b-col lg="12" md="12" sm="12">
              <div class="addons-container">
                <div v-for="(addon, index) in addons" :key="index">
                  <b-card
                    v-if="checkQueryExists(addon.type)"
                    :title="addon.name"
                    :img-src="addon.image"
                    img-alt="Image"
                    img-height="350"
                    img-top
                    tag="article"
                    style="max-width: 20rem"
                    class="addons-card"
                  >
                    <b-card-text>
                      <h2>{{ addon.title }}</h2>

                      <p>
                        {{ addon.subtitle }}
                      </p>

                      <b-form-checkbox
                        :id="'select-box-' + addon.id"
                        :name="'select-box-' + addon.id"
                        v-model="addon.selected"
                      >
                        <p class="p-0 m-0">{{ addon.label }}</p>
                        <p class="p-0 m-0 font-weight-bold">
                          ${{ addon.billing }}/Month
                        </p>
                      </b-form-checkbox>
                    </b-card-text>

                    <b-button
                      class="text-center"
                      v-b-toggle="'collapse-1' + addon.id"
                      variant="empty"
                      >Learn more</b-button
                    >
                    <b-collapse :id="'collapse-1' + addon.id" class="mt-2">
                      <p style="white-space: pre-line;">
                        {{ addon.description }}
                      </p>
                      <p>
                      <span style="font-weight:bolder;">{{ addon.descriptionrulename }}</span>
                      </p>
                      <ul>
                        <li>{{ addon.descriptionlineone }}</li>
                        <li>{{ addon.descriptionlinetwo }}</li>
                        <li>{{ addon.descriptionlinethree }}</li>
                      </ul>
                    </b-collapse>
                  </b-card>
                </div>
              </div>
            </b-col>
            <b-col lg="12" md="12" sm="12">
              <div class="d-flex flex-column align-items-end">
                <b-button class="custom-btn-1 mt-4" @click="proceed"
                  >Continue</b-button
                >
                <b-link class="mt-4" @click="proceed">No Thanks</b-link>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "powerups",
  data() {
    return {
      selected: "",
      addons: [
        {
          id: 1,
          name: "Discrete Mode",
          title: "Control who sees your profile.",
          subtitle:
            "Discrete Mode makes you visible only to the people you choose.",
          description: "In Discrete Mode, your profile is 100% unseen or hidden while you explore and see different profiles for just $10.00 more monthly or enjoy this feature for free on the Gold Plan.",
          descriptionrulename: "Discrete Mode Rules:",
          descriptionlineone: "You can send a Fancy or a Love Note to someone to make your profile visible only to them.",
          descriptionlinetwo: "You can change the discretion mode from on or off in the profile settings.",
          descriptionlinethree: "You can see who can view your profile.",
          billing: "10.00",
          image1: "@/assets/img/powerups/privacy.png",
          image:
            "https://firebasestorage.googleapis.com/v0/b/qavah-d48ad.appspot.com/o/CDN%2FdiscreteMode.jpg?alt=media&token=7c03aaa8-2d29-4759-888a-e3c06c57a53a",
          selected: false,
          type: "discretemode",
          label: "Discrete Mode",
        },
        {
          id: 2,
          name: "Love Notes",
          title: "Send love notes to your loved ones!",
          subtitle: "Add a short note to every Super Fancy you make.",
          description: "Love Notes is Qavah’s direct messaging feature only accessible on the Platinum Plan. When searching for matches on the Seeking or Discover Page, you can send Love Notes by clicking on the user’s profile name and clicking the blue message icon.",
          descriptionrulename: "Love Notes Rules:",
          descriptionlineone: "You can send Love Notes, but the recipient has the option to accept or decline.",
          descriptionlinetwo: "You can send Love Notes, but the recipient has the option to ignore your Love Note",
          descriptionlinethree: "If they accept your Love Note, you and that user can send Love Notes back and forth.",
          billing: "7.00",
          image1: "@/assets/img/powerups/privacy.png",
          image:
            "https://firebasestorage.googleapis.com/v0/b/qavah-d48ad.appspot.com/o/CDN%2Fmail-01.png?alt=media&token=8e69dfe1-5908-4055-a363-d04a08c7ed8d",
          selected: false,
          type: "lovenotes",
          label: "Love Notes",
        },
      ],
    };
  },
  methods: {
    getProfile() {
      let body = {};

      axios
        .get(`${apiUrl}/discover/getPeople`)
        .then((res) => {
          console.log("res -> ", res);
        })
        .catch((err) => {
          console.log("res -> ", err);
        });
    },
    proceed() {
      let query = this.$route.query;
      let addonsdata = this.addons;

      let acceptedAdons = addonsdata.filter((x) => {
        return x.selected === true;
      });

      let data;

      if (acceptedAdons && acceptedAdons.length === 1) {
        data = {
          path: "/dashboard/payment",
          query: { ...query, addon: acceptedAdons[0].type },
        };
      } else if (acceptedAdons && acceptedAdons.length === 2) {
        data = {
          path: "/dashboard/payment",
          query: { ...query, addon: "discretemode", addon1: "lovenotes" },
        };
      } else {
        data = { path: "/dashboard/payment", query: query };
      }

      console.log("data -> ", data);
      this.$router.push(data);
    },
    checkQueryExists(type) {
      let query = this.$route.query;

      if (query.type !== type) {
        return true;
      } else {
        return false;
      }
    },
  },
  watch: {
    addons: {
      deep: true,
      handler(newval) {
        console.log("newval -> ", newval);
      },
    },
  },
};
</script>

<style scoped>
/* Mobile Screen Classes */
@media only screen and (max-width: 992px) {
  .spotlight-page {
    min-height: 100vh;
    padding: 2rem;
  }
}

/* Laptop Screen Classes */
@media only screen and (min-width: 992px) {
  .spotlight-page {
    min-height: 100vh;
    margin-top: 55px;
    padding: 2rem;
    padding-top: 3rem;
  }
}

.addons-container {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
}

.addons-card {
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
  font-size: 14px;
}

.custom-btn-1:hover {
  background-color: #ac854e !important;
  transform: scale(110%);
}

.bottom-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.subtotal-section {
  display: flex;
  flex-direction: column;
}

.subtotal-section .subtotal-section-row {
  display: flex;
  justify-content: space-between;
}

.subscribe-btn {
  background-color: #93652b;
  outline: none;
  border: none;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 14px;
  border-radius: 25px;
}

.subscribe-btn:hover {
  background-color: #b69873;
}

.custom-field {
  border-radius: 25px !important;
  height: 35px !important;
  border-color: #93652b !important;
  padding: 20px !important;
  font-size: 12px;
}

.premium-section {
  padding: 1rem;
  border-radius: 10px;
}

.standard-section {
  padding: 1rem;
  border-radius: 10px;
}

.price-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}

.price-card .months {
  font-size: 1.2rem;
  font-weight: bold;
}

.price-card .price {
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.price-card .price .per-month {
  font-size: 0.8rem;
  color: #a499a3;
}

.price-card .save {
  font-size: 1.2rem;
  font-weight: bold;
  color: #ab44e9;
}

.tick {
  fill: #93652b;
}

.list-item-row {
  background-color: #eff0fd;
}

.list-item-heading {
  font-size: 0.8rem;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-heading-with-icon {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
}

.card-heading-with-icon-2 {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
}

.powerup-btn {
  background-color: #93652b;
  outline: none;
  border: none;
  border-radius: 10px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
}

.powerup-btn:hover {
  background-color: #b69873;
}
</style>
