/* eslint-disable */
<template>
  <div class="display-parent-page">
    <!-- <div v-if="this.gotLocation"> -->
    <tinder-card
      v-bind:users="this.peoples"
      :myprofile="profile"
      :isUS="us"
      :packages="packages"
      :geolocationerror="geolocationerror"
      :current-position="currentPosition"
      @refresh="getDataForCards"
    />
    <!-- </div> -->

    <b-modal
      id="welcomeToQavah"
      hide-header
      hide-footer
      content-class="rounded-lg"
      body-class="rounded-lg"
      centered
    >
      <h2 class="text-center mt-2">Welcome To Qavah.us!</h2>

      <b-img src="@/assets/landing-page/banner-3-min.png" fluid></b-img>

      <h2 class="text-center mt-2">Shalom Mishpacha!</h2>

      <p>
        Thank you for becoming a member of Qavah.us! We hope this platform will
        aid you in finding the specific Israelite standards that are important
        to you. This platform was designed <strong>“For Us By Us,”</strong> for
        the serious Men, <strong><em>“the seekers”</em></strong> looking for
        <strong>Committed Marriage Covenants</strong> with the Daughters of
        <strong>“TMH Yah”</strong> waiting for your discovery!
      </p>

      <h2 class="text-center mt-2">Remember!</h2>

      <h6 class="text-center my-3">
        <em>Be polite - Be Respectful - Be Courteous!</em>
      </h6>

      <p class="text-center">
        <em>
          And Test All Spirits because as we all know... All Israel ain’t
          Israel.
        </em>
      </p>
      <p class="text-center">May Yah bless your search!</p>
      <p class="text-center">Shalawam!</p>

      <div class="d-flex justify-content-center align-items-center">
        <b-button class="custom-btn-1" @click="closeModal('welcomeToQavah')"
          >Discover Now</b-button
        >
      </div>
    </b-modal>
  </div>
</template>

<script>
import tinderCard from "@/components/Discover/tinderCard.vue";
import axios from "axios";
import { apiUrl, apiKey, headers } from "@/constants/config";
import { getCurrentUser } from "@/utils";
import { mapGetters } from "vuex";
import Vue from "vue";
export default {
  name: "",
  data() {
    return {
      us: false,
      gotLocation: false,
      currentPosition: {
        lat: "",
        lng: "",
        zipcode: "",
        country: "",
      },
      packages: null,
      geolocationerror: false,
      peoples: null,
      loader: false,
      profile: null,
      // dummy: [
      //   {
      //     myUid: "15a61d58sa4d65a1561",
      //     accountInfo: {
      //       profileName: "Alexendria Lawson",
      //       governmentName: "Signia Lawson",
      //       email: "alexa@gmail.com",
      //       password: "test123",
      //       emailVerified: false,
      //       googleAuthenticated: false,
      //       channelSubscribed: false,
      //       type: "user",
      //     },
      //     basicInfo: {
      //       birthday: "1986-06-11",
      //       height: {
      //         feet: "5",
      //         inches: "8",
      //       },
      //       livingSituation: "Live Alone",
      //       doYouHaveChildren: "No",
      //       doYouWantMoreChildren: "No",
      //       iAm: "women",
      //       seeking: "man",
      //     },
      //     moreAboutMe: {
      //       bodyType: "Slim",
      //       maritalStatus: "Never Married",
      //       aboutMe: "Im a good looking women",
      //       doYouDrink: "No",
      //       doYouSmoke: "No",
      //       employmentStatus: "",
      //       willingToRelocate: "Not Willing To Relocate",
      //       relationshipIAmSeeking: "Friendship",
      //       havePets: "Cats",
      //       havePetsOthers: "",
      //       howOftenDoYouExercise: "I Exercise 1-2 Times A Week",
      //       profileImagesPath: [],
      //       galleryImagesPath: [],
      //     },
      //     isrealiteFilter: {
      //       lifestyle: {
      //         iBelieveIAM: "I am a diaspora isrealite",
      //         spiritualBackground: "i did not belived in anything",
      //         maritalBeliefSystem: "Monogamy",
      //         anyAffiliation: "No- I Study Alone",
      //         spiritualValue: "non-messianic",
      //         yearsInTruth: "20 years and more",
      //       }, // [] ->
      //       Studyhabits: {
      //         studyHabits: "None",
      //         studyBible: "None",
      //       }, //string
      //       values: {
      //         isrealitePracticeKeeping: ["Sabbath days", "New Moons"],
      //         kingdomGifts: [
      //           "House Keeping",
      //           "Cooking",
      //           "Wellness Planning",
      //           "I Can Teach Meditation ",
      //           "I am a Herbalist ",
      //           "Sewing",
      //           "Home Repairs",
      //           "I Can Decorate",
      //           "Technical Skills",
      //           "How to start a Business",
      //           "Business Skills",
      //           "Effective Communication",
      //           "How to use a computer",
      //           "Emergency Preparedness",
      //           "Basic First Aid",
      //         ],
      //         passions: [
      //           "Singing",
      //           "Music",
      //           "Riding Horses",
      //           "Fitness /Exercising",
      //           "Bike Riding",
      //           "Boating ",
      //           "Canoeing ",
      //           "Camping ",
      //         ],
      //       }, // []
      //     },
      //   },
      //   {
      //     myUid: "a1dsa56d4a89ds4a89",
      //     accountInfo: {
      //       profileName: "Alexendria Lawson 2",
      //       governmentName: "Signia Lawson",
      //       email: "alexa@gmail.com",
      //       password: "test123",
      //       emailVerified: false,
      //       googleAuthenticated: false,
      //       channelSubscribed: false,
      //       type: "user",
      //     },
      //     basicInfo: {
      //       birthday: "1986-06-11",
      //       height: {
      //         feet: "5",
      //         inches: "8",
      //       },
      //       livingSituation: "Live Alone",
      //       doYouHaveChildren: "No",
      //       doYouWantMoreChildren: "No",
      //       iAm: "women",
      //       seeking: "man",
      //     },
      //     moreAboutMe: {
      //       bodyType: "Slim",
      //       maritalStatus: "Never Married",
      //       aboutMe: "Im a good looking women",
      //       doYouDrink: "No",
      //       doYouSmoke: "No",
      //       employmentStatus: "",
      //       willingToRelocate: "Not Willing To Relocate",
      //       relationshipIAmSeeking: "Friendship",
      //       havePets: "Cats",
      //       havePetsOthers: "",
      //       howOftenDoYouExercise: "I Exercise 1-2 Times A Week",
      //       profileImagesPath: [
      //         "https://ggsc.s3.amazonaws.com/images/uploads/Can_Identifying_as_a_%E2%80%9CStrong_Black_Woman%E2%80%9D_Protect_Your_Health.jpg",
      //       ],
      //       galleryImagesPath: [],
      //     },
      //     isrealiteFilter: {
      //       lifestyle: {
      //         iBelieveIAM: "I am a diaspora isrealite",
      //         spiritualBackground: "i did not belived in anything",
      //         maritalBeliefSystem: "Monogamy",
      //         anyAffiliation: "No- I Study Alone",
      //         spiritualValue: "non-messianic",
      //         yearsInTruth: "20 years and more",
      //       }, // [] ->
      //       Studyhabits: {
      //         studyHabits: "None",
      //         studyBible: "None",
      //       }, //string
      //       values: {
      //         isrealitePracticeKeeping: ["Sabbath days", "New Moons"],
      //         kingdomGifts: [
      //           "House Keeping",
      //           "Cooking",
      //           "Wellness Planning",
      //           "I Can Teach Meditation ",
      //           "I am a Herbalist ",
      //           "Sewing",
      //           "Home Repairs",
      //           "I Can Decorate",
      //           "Technical Skills",
      //           "How to start a Business",
      //           "Business Skills",
      //           "Effective Communication",
      //           "How to use a computer",
      //           "Emergency Preparedness",
      //           "Basic First Aid",
      //         ],
      //         passions: [
      //           "Singing",
      //           "Music",
      //           "Riding Horses",
      //           "Fitness /Exercising",
      //           "Bike Riding",
      //           "Boating ",
      //           "Canoeing ",
      //           "Camping ",
      //         ],
      //       }, // []
      //     },
      //   },
      //   {
      //     myUid: "ad4as8d89as1d89as1d89s",
      //     accountInfo: {
      //       profileName: "Alexendria Lawson 3",
      //       governmentName: "Signia Lawson",
      //       email: "alexa@gmail.com",
      //       password: "test123",
      //       emailVerified: false,
      //       googleAuthenticated: false,
      //       channelSubscribed: false,
      //       type: "user",
      //     },
      //     basicInfo: {
      //       birthday: "1986-06-11",
      //       height: {
      //         feet: "5",
      //         inches: "8",
      //       },
      //       livingSituation: "Live Alone",
      //       doYouHaveChildren: "No",
      //       doYouWantMoreChildren: "No",
      //       iAm: "women",
      //       seeking: "man",
      //     },
      //     moreAboutMe: {
      //       bodyType: "Slim",
      //       maritalStatus: "Never Married",
      //       aboutMe: "Im a good looking women",
      //       doYouDrink: "No",
      //       doYouSmoke: "No",
      //       employmentStatus: "",
      //       willingToRelocate: "Not Willing To Relocate",
      //       relationshipIAmSeeking: "Friendship",
      //       havePets: "Cats",
      //       havePetsOthers: "",
      //       howOftenDoYouExercise: "I Exercise 1-2 Times A Week",
      //       profileImagesPath: [],
      //       galleryImagesPath: [],
      //     },
      //     isrealiteFilter: {
      //       lifestyle: {
      //         iBelieveIAM: "I am a diaspora isrealite",
      //         spiritualBackground: "i did not belived in anything",
      //         maritalBeliefSystem: "Monogamy",
      //         anyAffiliation: "No- I Study Alone",
      //         spiritualValue: "non-messianic",
      //         yearsInTruth: "20 years and more",
      //       }, // [] ->
      //       Studyhabits: {
      //         studyHabits: "None",
      //         studyBible: "None",
      //       }, //string
      //       values: {
      //         isrealitePracticeKeeping: ["Sabbath days", "New Moons"],
      //         kingdomGifts: [
      //           "House Keeping",
      //           "Cooking",
      //           "Wellness Planning",
      //           "I Can Teach Meditation ",
      //           "I am a Herbalist ",
      //           "Sewing",
      //           "Home Repairs",
      //           "I Can Decorate",
      //           "Technical Skills",
      //           "How to start a Business",
      //           "Business Skills",
      //           "Effective Communication",
      //           "How to use a computer",
      //           "Emergency Preparedness",
      //           "Basic First Aid",
      //         ],
      //         passions: [
      //           "Singing",
      //           "Music",
      //           "Riding Horses",
      //           "Fitness /Exercising",
      //           "Bike Riding",
      //           "Boating ",
      //           "Canoeing ",
      //           "Camping ",
      //         ],
      //       }, // []
      //     },
      //   },
      // ],
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  components: {
    tinderCard,
  },
  methods: {
    getProfile() {
      setTimeout(() => {
        axios
          .get(`${apiUrl}/auth/user`, { headers })
          .then((res) => {
            // console.log("res -> ", res);
            const data = res.data;
            if (res.status === 200) {
              const profile = res.data;
              this.profile = profile;
              console.log("Got Profile!");
              // console.lo g("this.profile -> ", this.profile);

              // Vue.$toast.default(`Users Processed !`);
            } else {
              // Vue.$toast.default(`No Nearby User Found At This Moment`);
            }
          })
          .catch((err) => {
            console.log("res -> ", err);
            // Vue.$toast.default(`No Nearby User Found At This Moment - ${err}`);
          });
      }, 500);
    },
    get_packages() {
      let body = {};
      axios
        .get(`${apiUrl}/packages`, { headers })
        .then((res) => {
          this.packages = res.data.packages;
        })
        .catch((err) => {});
    },
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // console.log("position -> ", position);
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;

            // this.currentPosition = {
            //   lat: lat,
            //   lng: lng,
            // };

            // Test Override (Harrison)
            // lat = 36.229794;
            // lng = -93.107674;

            // Test Override (New York)
            lat = 40.73061;
            lng = -73.935242;

            // Test Override
            // lat = 37.050793;
            // lng = -111.621094;

            axios
              .post(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&result_type=country|administrative_area_level_1|locality|postal_code&key=${apiKey}`
              )
              .then((res) => {
                console.log("geolocation api  -> ", res);
                const data = res.data;
                const results = data.results;
                const postalCodeData = results[0];
                //debugger
                let formatedAddress = postalCodeData.formatted_address;
                let FromaddressComponents = postalCodeData.address_components;
                let FromCountry;
                let FromPostalCode;
                let FromCity;
                let FromCountryCode;
                // console.log("formatedAddress -> ", formatedAddress);
                // console.log("FromaddressComponents -> ", FromaddressComponents);

                FromaddressComponents.forEach((x) => {
                  let types = x.types;
                  let checkCountry = types.includes("country");
                  let checkPostal = types.includes("postal_code");
                  let checkCity = types.includes("locality");
                  if (checkCountry) {
                    FromCountry = x.long_name;
                    FromCountryCode = x.short_name;
                  }
                  if (checkPostal) {
                    FromPostalCode = x.long_name;
                  }
                  if (checkCity) {
                    FromCity = x.long_name;
                  }
                });

                // console.log("FromPostalCode -> ", FromPostalCode);
                // console.log("FromCountryCode -> ", FromCountryCode);

                if (FromCountryCode !== "US") {
                  console.log("not US");
                  this.us = false;
                } else {
                  this.us = true;
                  this.currentPosition = {
                    lat: lat,
                    lng: lng,
                    country: FromCountry,
                    zipcode: FromPostalCode,
                    city: FromCity,
                  };

                  console.log("this.currentPosition -> ", this.currentPosition);
                }
              })
              .catch((err) => {
                console.log(err);
                Vue.$toast.error(err);
              });
          },
          (err) => {
            this.showError(err);

            console.log("error", err);
          }
        );
      } else {
        Vue.$toast.error(`Geolocation is not supported by this browser`);
      }
    },
    showError(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          Vue.$toast.default(`User denied the request for Geolocation.`);
          this.geolocationerror = `User denied the request for Geolocation.`;
          break;
        case error.POSITION_UNAVAILABLE:
          Vue.$toast.default(`Location information is unavailable.`);
          this.geolocationerror = `Location information is unavailable.`;
          break;
        case error.TIMEOUT:
          Vue.$toast.default(`The request to get user location timed out.`);
          this.geolocationerror = `The request to get user location timed out.`;
          break;
        case error.UNKNOWN_ERROR:
          Vue.$toast.default(`An unknown error occurred.`);
          this.geolocationerror = `An unknown error occurred.`;
          break;
      }
    },
    openModal(id) {
      this.$bvModal.show(id);
    },
    closeModal(id) {
      this.$bvModal.hide(id);
    },
    onEnter() {
      console.log("Enter Key Pressed!");
    },
    getDataForCards() {
      // this.loader = true;
      console.log("currentUser -> ", this.currentUser);

      let city = this.currentPosition.city;
      let zipcode = this.currentPosition.zipcode;
      let lat = this.currentPosition.lat;
      let lng = this.currentPosition.lng;

      axios
        .get(
          `${apiUrl}/discover/getPeople?myUid=${this.currentUser.uid}&seeking=${this.currentUser.seeking}&lat=${this.currentPosition.lat}&lng=${this.currentPosition.lng}&city=${this.currentPosition.city}&zipcode=${this.currentPosition.zipcode}`,
          { headers }
        )
        .then((res) => {
          if (res.status === 200) {
            let data = res.data.peoples;
            this.peoples = data;
            let names = this.peoples.map((x) => {
              return x.profileName;
            });

            console.log("names -> ", names);
            // this.loader = false;
          } else {
            // Vue.$toast.default(`No Suitable User In Database Found !`);
            // this.loader = false;
          }
        })
        .catch((err) => {
          // Vue.$toast.default(`No Suitable User In Database Found - ${err}`);
          // this.loader = false;
          console.log("res -> ", err);
        });
    },
    popupShowed() {
      setTimeout(() => {
        // let popupShowed = this.currentUser.popupShowed;
        // if (!popupShowed) {
        //   this.openModal("welcomeToQavah");
        // }
        // let body = {
        //   uid: this.currentUser.uid,
        // };
        // axios
        //   .post(`${apiUrl}/swap/popup-showed`, body)
        //   .then((res) => {
        //     console.log("res -> ", res);
        //     const data = res.data;
        //     if (data.status) {
        //       console.log("popup showed -> ", data.message);
        //     } else {
        //       console.log("err -> ", err);
        //     }
        //   })
        //   .catch((err) => {
        //     console.log("err -> ", err);
        //   });
      }, 1000);
    },
  },
  watch: {
    // currenUser(val) {
    //   if (val) {
    //     console.log("Got Current User ! -> ",val);
    //   }
    // },
    currentPosition: {
      // This will let Vue know to look inside the array
      deep: true,
      // We have to move our method to a handler field
      handler(value) {
        if (
          value.lat !== "" &&
          value.lat !== null &&
          value.lng !== "" &&
          value.lng !== null
        ) {
          this.gotLocation = true;
          this.getDataForCards();
        } else {
          this.gotLocation = false;
        }
      },
    },
    profile(newval) {
      if (newval !== null) {
        Promise.all([this.getLocation()])
          .then(() => {
            // if (this.us) {
            //   this.getDataForCards();
            // }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
  mounted() {
    this.getProfile();
    this.get_packages();
    this.getLocation();
    this.popupShowed();
    // this.getDataForCards();

    // this.openModal("itsAMatch");
    // const customapp = window.document.querySelector('.custom-app');
    // customapp.style.backgroundImage = '@/assets/watermark.jpeg';
    // console.log('customapp -> ',customapp);
  },
  updated() {
    // this.getDataForCards();
  },
};
</script>

<style scoped lang="scss">
// .display-parent-page {
//   background-color: darkorchid;
// }

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

.display-parent-page {
  background-image: url("@/assets/watermark.jpeg");
  min-height: calc(100vh - 107px);
  padding-top: 78px;
}

@media only screen and (max-width: 992px) {
  .display-parent-page {
    padding-top: 6px;
  }
}

@media only screen and (min-width: 992px) {
  .display-parent-page {
    padding-top: 78px;
  }
}
</style>