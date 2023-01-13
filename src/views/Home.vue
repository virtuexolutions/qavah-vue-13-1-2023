<template>
  <div class="">
    <home-layout>
      <!-- Navbar -->
      <homepageHeader />
      <div class="stars" aria-hidden="true"></div>
      <div class="starts2" aria-hidden="true"></div>
      <div class="stars3" aria-hidden="true"></div>
      <!-- Section 1 -->
      <section
        id="home"
        class="section-1"
        :style="'background-image:url(' + content.slider.slider_image + ')'"
      >
        <div class="content mt-4 w-100">
          <div class="letters d-flex justify-content-center align-items-center">
            <b-img
              class="top-images"
              id="hebrewLettersImage"
              :src="content.slider.left_image"
            ></b-img>
          </div>
          <div class="logo d-flex justify-content-center align-items-center">
            <b-img
              :src="content.slider.right_image"
              id="qavahLogoImage"
              class="top-images"
            ></b-img>
          </div>
        </div>
        <div class="bottom">
          <div
            class="title mb-4"
            v-html="content.slider.slider_content_1"
          ></div>
          <!-- <div class="subtitle mb-2">Israelite Courting Platform</div> -->
          <div
            class="description"
            v-html="content.slider.slider_content_2"
          ></div>
        </div>
      </section>

      <!-- Section 2 -->
      <div class="section-2">
        <b-row>
          <!-- <b-col lg="12" md="12" sm="12">
            <div class="center-logo">
              <b-img src="@/assets/logos/logo.png" height="150"></b-img>
            </div>
          </b-col> -->
          <!-- <b-col lg="12" md="12" sm="12">
            <div class="p-2 m-2 text-center">
              <h2 class="coming-soon">IOS and Android app coming soon !</h2>
            </div>
          </b-col>
          <b-col lg="12" md="12" sm="12">
            <div class="images-container">
              <b-img
                src="@/assets/img/landing-page/mobile.png"
                height="250"
              ></b-img>

              <b-img
                src="@/assets/img/landing-page/laptop.png"
                height="250"
              ></b-img>
            </div>
          </b-col> -->
          <b-col lg="12" md="12" sm="12">
            <div class="video-container">
              <iframe
                width="560"
                height="315"
                :src="content.video.video_url"
                title="Qavah Mobile"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </b-col>
        </b-row>
      </div>

      <!-- Section 3 -->
      <div class="section-3">
        <b-row>
          <b-col cols="12">
            <div class="items-container">
              <div class="item">
                <div class="icon">
                  <img :src="content.middel.icon_image_1" />
                  <!-- <svg
                    height="100px"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m416 512h-320c-53.023438 0-96-42.976562-96-96v-320c0-53.023438 42.976562-96 96-96h320c53.023438 0 96 42.976562 96 96v320c0 53.007812-42.992188 96-96 96zm0 0"
                      fill="#ffe6e2"
                    ></path>
                    <path
                      d="m312.71875 138c-23.085938 0-44.335938 11.167969-57.390625 29.375-13.054687-18.191406-34.304687-29.375-57.390625-29.375-38.929688 0-70.609375 31.617188-70.609375 70.464844 0 69.136718 105.535156 151.566406 115.023437 158.832031 3.390626 3.421875 8.0625 5.359375 12.976563 5.359375 4.910156 0 9.582031-1.9375 12.976563-5.359375 9.488281-7.265625 115.023437-89.695313 115.023437-158.832031 0-38.847656-31.679687-70.464844-70.609375-70.464844zm0 0"
                      fill="#fc573b"
                    ></path>
                  </svg> -->
                </div>
                <div class="title" v-html="content.middel.icon_title_1"></div>
                <div class="description" v-html="content.middel.icon_text_1">
                  Based on your location, we find best and suitable matches for
                  you.
                </div>
              </div>
              <div class="item">
                <div class="icon">
                  <img :src="content.middel.icon_image_2" />

                  <!-- <svg
                    height="100"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="BG">
                      <path
                        d="m26 32h-20c-3.314 0-6-2.686-6-6v-20c0-3.314 2.686-6 6-6h20c3.314 0 6 2.686 6 6v20c0 3.314-2.686 6-6 6z"
                        fill="#f5e6fe"
                      ></path>
                    </g>
                    <g id="bold">
                      <g fill="#be63f9">
                        <path
                          d="m9.159 14.051c-.137 0-.275-.057-.374-.168-.184-.206-.165-.522.041-.706 1.678-1.493 3.938-2.141 6.216-1.712.271.051.45.313.399.584s-.312.45-.584.399c-1.977-.373-3.917.187-5.366 1.477-.095.084-.213.126-.332.126z"
                        ></path>
                        <path
                          d="m8.486 16.592c-.098 0-.196-.029-.283-.088-.227-.157-.285-.468-.128-.695 1.273-1.848 3.359-2.952 5.583-2.952.533 0 1.042.06 1.516.177.268.066.432.337.366.605-.066.269-.342.432-.605.365-.396-.098-.826-.147-1.277-.147-1.894 0-3.673.942-4.758 2.519-.098.14-.254.216-.414.216z"
                        ></path>
                        <path
                          d="m12.402 24c-.127 0-.254-.048-.351-.144-.089-.087-2.16-2.153-2.16-4.16 0-2.094 1.689-3.797 3.766-3.797s3.766 1.703 3.766 3.797c0 .276-.224.5-.5.5s-.5-.224-.5-.5c0-1.542-1.241-2.797-2.766-2.797s-2.766 1.255-2.766 2.797c0 1.588 1.843 3.43 1.862 3.449.196.194.198.511.004.707-.098.098-.226.148-.355.148z"
                        ></path>
                        <path
                          d="m9.974 23.261c-.145 0-.289-.063-.388-.185-.788-.97-1.204-2.139-1.204-3.381 0-1.473.615-2.894 1.686-3.897 1.074-1.006 2.469-1.502 3.94-1.411.749.049 1.462.26 2.118.626.242.134.327.439.193.68-.135.241-.439.329-.68.193-.526-.293-1.096-.462-1.697-.501-1.193-.083-2.322.328-3.191 1.143-.87.815-1.369 1.97-1.369 3.168 0 1.01.339 1.961.98 2.751.174.214.141.529-.073.703-.092.074-.204.111-.315.111z"
                        ></path>
                        <path
                          d="m14.911 24c-.984 0-3.268-1.827-3.489-3.862-.078-.734.149-1.457.622-1.986.419-.469.989-.729 1.604-.732h.015c.595 0 1.155.231 1.579.652.434.431.673 1.007.673 1.623v.253c0 .564.451 1.023 1.006 1.023.271 0 .522-.105.708-.296.199-.195.304-.45.304-.727v-.084c0-.795-.204-1.576-.591-2.262-.057-.081-.09-.179-.09-.285 0-.276.221-.5.497-.5h.007c.179 0 .344.095.433.25.488.846.745 1.813.745 2.797v.084c0 .548-.212 1.057-.596 1.433-.367.377-.873.59-1.416.59-1.106 0-2.006-.908-2.006-2.023v-.253c0-.348-.134-.672-.378-.914-.237-.235-.548-.345-.883-.362-.422.002-.703.218-.865.399-.281.314-.421.768-.374 1.213.174 1.599 2.083 2.969 2.495 2.969.276 0 .5.224.5.5s-.224.5-.5.5z"
                        ></path>
                        <path
                          d="m16.39 23.239c-1.479 0-3.264-1.694-3.264-3.797 0-.276.224-.5.5-.5s.5.224.5.5c0 1.544 1.37 2.797 2.264 2.797.276 0 .5.224.5.5s-.224.5-.5.5z"
                        ></path>
                      </g>
                      <path
                        d="m23.659 9.217-3.5-1.19c-.105-.036-.217-.036-.322 0l-3.5 1.19c-.202.069-.339.259-.339.473v2.679c0 3.27 3.649 4.858 3.804 4.925.062.026.129.04.196.04s.133-.013.196-.04c.155-.066 3.804-1.655 3.804-4.925v-2.679c-.001-.214-.137-.404-.339-.473zm-1.428 2.25-2 2.667c-.087.116-.22.188-.365.199-.012.001-.024.001-.035.001-.132 0-.259-.052-.354-.146l-1.333-1.333c-.195-.195-.195-.512 0-.707s.512-.195.707 0l.926.926 1.654-2.206c.166-.22.479-.265.7-.1.221.164.265.478.1.699z"
                        fill="#d9a4fc"
                      ></path>
                    </g>
                  </svg> -->
                </div>
                <div class="title" v-html="content.middel.icon_title_2"></div>
                <div class="description" v-html="content.middel.icon_text_2">
                  Based on your location, we find best and suitable matches for
                  you.
                </div>
              </div>
              <div class="item">
                <div class="icon">
                  <img :src="content.middel.icon_image_3" />
                  <!-- <svg
                    height="100"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m26 32h-20c-3.314 0-6-2.686-6-6v-20c0-3.314 2.686-6 6-6h20c3.314 0 6 2.686 6 6v20c0 3.314-2.686 6-6 6z"
                      fill="#e3f8fa"
                    ></path>
                    <path
                      d="m20.5 14h-.5v-2c0-2.206-1.794-4-4-4s-4 1.794-4 4v2h-.5c-.827 0-1.5.673-1.5 1.5v7c0 .827.673 1.5 1.5 1.5h9c.827 0 1.5-.673 1.5-1.5v-7c0-.827-.673-1.5-1.5-1.5zm-7.167-2c0-1.47 1.196-2.667 2.667-2.667s2.667 1.197 2.667 2.667v2h-5.334zm3.334 7.148v1.519c0 .368-.298.667-.667.667s-.667-.299-.667-.667v-1.519c-.397-.231-.667-.656-.667-1.148 0-.735.598-1.333 1.333-1.333s1.333.598 1.333 1.333c.001.491-.269.917-.665 1.148z"
                      fill="#26c6da"
                    ></path>
                  </svg> -->
                </div>
                <div class="title" v-html="content.middel.icon_title_3"></div>
                <div class="description" v-html="content.middel.icon_text_3">
                  Based on your location, we find best and suitable matches for
                  you.
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>

      <!-- Section 4 -->
      <div class="section-4">
        <b-card class="info-card">
          <div class="dt_get_start_circle-1"></div>
          <div class="dt_get_start_circle-2"></div>
          <div class="dt_get_start_circle-3"></div>
          <b-row class="mb-4">
            <b-col class="left" lg="6" md="6" sm="6">
              <p class="custom-title" v-html="content.bottom.section_title">
                <!-- Three Basic <br />
                Enrollment Steps -->
              </p>
              <div class="center-logo">
                <!-- <b-img src="@/assets/logos/logo.png" height="150"></b-img> -->
                <iframe
                  width="90%"
                  height="300"
                  :src="content.bottom.video_url"
                  title="Qavah"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </b-col>
            <b-col class="right" lg="6" md="6" sm="6">
              <div class="">
                <div class="">
                  <div
                    class="title"
                    v-html="content.bottom.bullet_heading_1"
                  ></div>
                  <div
                    class="description"
                    v-html="content.bottom.bullet_text_1"
                  >
                    <!-- Begin your courtship by completing the basic profile info
                    such as your height, age, etc. -->
                  </div>
                </div>
                <div class="dt_how_it_works_arrow">
                  <img src="@/assets/img/landing-page/red-arrow.png" />
                </div>
              </div>

              <div class="">
                <div class="">
                  <div class="title" v-html="content.bottom.bullet_heading_2">
                    Step-2
                  </div>
                  <div
                    class="description"
                    v-html="content.bottom.bullet_text_2"
                  >
                    <!-- Next, you will complete the required more about info,
                    routine,employment, portion of the registration. This
                    process will also include uploading upto five profile photos
                    with a headshot and full-body pictures. Keep in mind this is
                    a courting site, so please use a modest mindset when
                    selecting Kingdom-worthy images. -->
                  </div>
                </div>
                <div class="dt_how_it_works_arrow">
                  <img src="@/assets/img/landing-page/red-arrow.png" />
                </div>
              </div>

              <div class="">
                <div class="title" v-html="content.bottom.bullet_heading_3">
                  <!-- Step-3 -->
                </div>
                <div class="description" v-html="content.bottom.bullet_text_3">
                  <!-- Using the Qavah filters, you can now engage like-minded
                  Israelites looking for courtship using the card deck swipe
                  right or swipe left features
                  <span class="extra-hightlight">"Kan"</span> for Yes and
                  <span class="extra-hightlight">"Lo"</span> for No. -->
                </div>
              </div>
            </b-col>
          </b-row>
          <hr class="mb-5" />
          <p class="heading m-0 p-0" v-html="content.bottom.bottam_para">
            <!-- Start your courtship by posting your profile today, and then wait
            actively for
            <span class="d-inline font-weight-bold">"The Most High YAH"</span>
            to act. -->
          </p>
          <div class="get-started-btn p-0 m-0">
            <b-button class="get-started-btn custom-btn-1" to="/dashboard"
              >Get Started</b-button
            >
          </div>
        </b-card>
      </div>
      <sectionFooter />

      <!-- Start Modal -->
      <b-modal
        content-class="rounded-lg"
        body-class="rounded-lg"
        id="startModal"
        size="xl"
        centered
        hide-header
        hide-footer
      >
        <h2 class="text-center" v-html="content.popup.section_title"></h2>
        <div v-html="content.popup.description"></div>
        <!-- <h4 class="text-center mt-4">Shalom Mishpacha!</h4>
        <p class="text-justify">
          Thank you for visiting this Israelite Courtship Platform. To those
          traditional Hebrew naysayers, I want to put your mind at ease. Qavah
          is
          <span class="font-weight-bold font-underline"><u>NOT</u></span> a
          secular or a casual dating site that mimics Babylonian culture, but a
          platform for us to engage one another. This unique site is “For Us By
          Us,” designed as a workaround while the world experiences these
          modern-day plagues that limit and restrict our interactions.
        </p>

        <p class="text-justify">
          Qavah understands that there are many beliefs and convictions. This
          site attempts to capture all the primary Israelite doctrines, ideas,
          and core values essential to Israelites, making courtship selection
          less complicated by filtering out the beliefs less desired by you. By
          completing your Israelite beliefs and values section in addition to
          the basic profile information, we hope to find or match single
          Israelites who are evenly yoked with your core beliefs or convictions.
        </p>

        <p class="text-justify">
          Please make no mistake about it; like in any other engagements, you
          still <span class="font-weight-bold"><u>MUST</u></span> Test every
          Spirits you encounter while using this platform. Although Qavah will
          not be responsible for whom you choose to engage, we will not tolerate
          <span class="font-weight-bold"><u>ANY</u></span> abusive men or women
          in word or deed on this platform.
        </p>

        <br />
        <p class="text-center">
          <span class="font-weight-bold"
            >Qavah will focus on the following:</span
          >
          <em style="font-size: 0.7rem"
            >(Search the Hebrew meaning of the word “Qavah”)</em
          >
        </p>

        <div class="d-flex justify-content-center align-items-center">
          <ul class="">
            <li>
              To provide tools to aid your search for a suitable Israelite
              spouse within our belief community .
            </li>
            <li>To Build strong family units growing in Truth of Yah.</li>
            <li>
              To Match like-minded Israelites using filters, distance, and
              algorithms to search for the best match
            </li>
            <li>
              To bring blended families units together in a “Committed Marriage”
              under Yah’s Laws, Statutes, and Commandments.
            </li>
            <li>
              To Consolidate our scattered community by helping us find one
              another.
            </li>
          </ul>
        </div>

        <p>
          Our initial launch will be a computer-based application that can be
          viewed on a mobile device but not optimized for mobile use; however,
          an application optimized for Android and Apple IOS will follow
          shortly, Yah willing.
        </p>

        <h4 class="text-center">Rules of Engagement</h4>

        <p class="text-justify">
          Users must be at least 18 years or older. This site is expressly for
          the Dispersed Israelite Nation. However, If you are gentile, you must
          commit to taking hold of the covenant and following Israelite heritage
          to be a member of the Qavah courtship site.
        </p> -->

        <div class="btn-container">
          <b-button class="custom-btn-1" @click="closeModal('startModal')"
            >I Agree</b-button
          >
        </div>
      </b-modal>

      <go-top
        :size="scrollbtnOptions.size"
        :fg-color="scrollbtnOptions.fg_color"
        :bg-color="scrollbtnOptions.bg_color"
        :weight="scrollbtnOptions.weight"
      ></go-top>

      <vue-cookie-accept-decline
        :debug="false"
        :disableDecline="false"
        :showPostponeButton="false"
        @clicked-accept="cookieClickedAccept"
        @clicked-decline="cookieClickedDecline"
        @clicked-postpone="cookieClickedPostpone"
        @removed-cookie="cookieRemovedCookie"
        @status="cookieStatus"
        elementId="myPanel1"
        position="bottom-left"
        ref="myPanel1"
        transitionName="slideFromBottom"
        type="floating"
      >
        <!-- Optional -->
        <template #postponeContent>&times;</template>

        <!-- Optional -->
        <template #message>
          We use cookies to ensure you get the best experience on our website.
          <a href="https://cookiesandyou.com/" target="_blank">Learn More...</a>
        </template>

        <!-- Optional -->
        <template #declineContent>Later</template>

        <!-- Optional -->
        <template #acceptContent>Got It!</template>
      </vue-cookie-accept-decline>
    </home-layout>
  </div>
</template>

<script>
import HomeLayout from "@/layouts/HomeLayout.vue";
import homepageHeader from "@/components/Landingpage/homepageHeader.vue";
import sectionFooter from "@/components/Landingpage/footerComponent.vue";
import GoTop from "@inotom/vue-go-top";
import { mapGetters } from "vuex";
import { apiUrl } from "@/constants/config";
import axios from "axios";

export default {
  components: {
    "home-layout": HomeLayout,
    sectionFooter,
    homepageHeader,
    GoTop,
  },
  data() {
    return {
      scrollbtnOptions: {
        size: 40,
        fg_color: "#DFE1E3",
        bg_color: "#93652B",
        weight: "bold",
      },
      content: null,
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  methods: {
    openModal(id) {
      this.$bvModal.show(id);
    },
    closeModal(id) {
      this.$bvModal.hide(id);
    },
    cookieClickedAccept() {
      console.log("cookie accepted");
    },
    cookieClickedDecline() {
      console.log("cookie decline");
    },
    cookieClickedPostpone() {
      console.log("cookie postpone");
    },
    cookieRemovedCookie() {
      console.log("cookie removed");
    },
    cookieStatus() {
      console.log("Cookie Status");
    },
    popupShowedLanding() {
      setTimeout(() => {
        debugger;
        var data = this.currentUser;
        let body = {
          uid: this.currentUser.uid,
        };
        debugger;
        axios
          .post(`${apiUrl}/swap/popup-showed-landing`, body)
          .then((res) => {
            console.log("res -> ", res);
            const data = res.data;
            if (data.status) {
              console.log("popup showed -> ", data.message);
              let popupShowed = this.currentUser.popupShowedLanding;
              if (!popupShowed) {
                this.openModal("startModal");
              }
            } else {
              console.log("err -> ", err);
            }
          })
          .catch((err) => {
            console.log("err -> ", err);
          });
      }, 2000);
    },
    get_content() {
      axios
        .get(`${apiUrl}/home/cms`)
        .then((res) => {
          if (res.status == 200) {
            this.content = res.data.content;
          }
        })
        .catch((err) => {
          console.log("err -> ", err);
        });
    },
  },
  mounted() {
    this.popupShowedLanding();
    this.get_content();
  },
  beforeDestroy() {},
};
</script>

<style scoped>
/* Global Classes */
.section-1 .top-images {
  filter: drop-shadow(5px 5px 10px #000);
}

/* Mobile Screen Classes */
@media only screen and (max-width: 700px) {
  .section-3 .items-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  .section-3 .items-container .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 350px;
  }

  .section-3 .items-container .item .description {
    text-align: center;
  }

  .section-1 {
    padding-top: 30px;
    /* padding-bottom: 100px; */
    background-image: url("@/assets/landing-page/banner-3-min.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .section-1 #hebrewLettersImage {
    height: 100px;
  }

  .section-1 #qavahLogoImage {
    height: 100px;
  }

  .section-1 .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }

  .section-1 .bottom {
    padding-bottom: 50px;
  }

  .section-1 .title {
    font-size: 2rem;
    font-weight: bold;
    /* font-style: italic; */
    color: #fff;
    text-align: center;
    filter: drop-shadow(5px 5px 10px #000);
  }

  .section-1 .subtitle {
    font-size: 2rem;
    font-weight: bold;
    /* font-style: italic; */
    color: #fff;
    text-align: center;
    filter: drop-shadow(5px 5px 10px #000);
  }

  .section-1 .description {
    font-size: 1rem;
    font-weight: bold;
    /* font-style: italic; */
    text-align: center;
    color: #fff;
    filter: drop-shadow(5px 5px 10px #000);
  }
}

/* Laptop Screen Classes */
@media only screen and (min-width: 700px) {
  .section-3 .items-container {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  .section-3 .items-container .item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    max-width: 350px;
  }

  .section-1 {
    padding-top: 30px;
    /* padding-bottom: 100px; */
    background-image: url("@/assets/landing-page/banner-3-min.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .section-1 #hebrewLettersImage {
    height: 130px;
  }

  .section-1 #qavahLogoImage {
    height: 150px;
  }

  .section-1 .content {
    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }

  .section-1 .bottom {
    padding-bottom: 50px;
  }

  .section-1 .top-images {
    filter: drop-shadow(5px 5px 10px #000);
  }

  .section-1 .title {
    font-size: 2.4rem;
    font-weight: bold;
    /* font-style: italic; */
    color: #fff;
    text-align: center;
    filter: drop-shadow(5px 5px 10px #000);
  }

  .section-1 .subtitle {
    font-size: 2.4rem;
    font-weight: bold;
    /* font-style: italic; */
    color: #fff;
    text-align: center;
    filter: drop-shadow(5px 5px 10px #000);
  }

  .section-1 .description {
    font-size: 1rem;
    font-weight: bold;
    /* font-style: italic; */
    text-align: center;
    color: #fff;
    filter: drop-shadow(5px 5px 10px #000);
  }
}

/* Customizations */
@media only screen and (max-width: 1150px) {
  .section-1 {
    margin-top: 80px;
  }
}

@media only screen and (min-width: 1150px) {
  .section-1 {
    margin-top: 90px;
  }
}

.video-container {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.coming-soon {
  color: #93652b;
}

.images-container {
  width: 100%;
  display: flex;
  /* gap: 2rem; */
  justify-content: center;
  gap: 5rem;
  align-items: center;
  /* max-width: 100%; */
  max-height: 300px;
}

#startModal .btn-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-3 {
  padding: 5rem 2rem;
  background-color: #fff;
}

.section-3 .items-container .item .icon svg {
  border-radius: 50%;
}

.section-3 .items-container .item .title {
  margin-top: 1rem;
  font-size: 1.5rem;
}

.section-4 {
  padding: 2rem 0;
  background-color: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dt_get_start_circle-1 {
  position: absolute;
  top: -315px;
  right: 0;
  width: 600px;
  height: 400px;
  background: radial-gradient(#fbdaf7, #ae36a1);
  border-radius: 50%;
  opacity: 0.15;
}
.dt_get_start_circle-2 {
  position: absolute;
  top: -55px;
  right: -90px;
  width: 250px;
  height: 250px;
  background: radial-gradient(#fce4ec, #e91e63);
  border-radius: 50%;
  opacity: 0.1;
}
.dt_get_start_circle-3 {
  position: absolute;
  bottom: 25px;
  left: 25px;
  width: 100px;
  height: 100px;
  background: radial-gradient(#ffe0b2, #ff9800);
  border-radius: 50%;
  opacity: 0.08;
}
.dt_how_it_works_arrow img {
  transform: rotate(87deg) scaleY(-1);
  height: 50px;
  margin: 0 0 0 -50px;
  pointer-events: none;
  user-select: none;
}

.section-4 .info-card {
  max-width: 80%;
  overflow: hidden;
}

.section-4 .info-card .left {
  display: flex;
  flex-direction: column;
}

.section-4 .info-card .left .custom-title {
  font-size: 3rem;
  font-weight: 300;
  height: auto;
  line-height: 1;
}

.section-4 .info-card .left .logo {
  display: block;
}

.center-logo {
  padding-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-4 .heading {
  /* display: flex;
  justify-content: center;
  align-items: center; */
  text-align: center;
  font-size: 1rem;
}

.extra-hightlight {
  color: red;
  font-weight: bold;
}

.extra-hightlight-2 {
  font-weight: bold;
}

.section-4 .get-started-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  font-size: 14px;
}

.section-4 .left {
  display: flex;
  /* justify-content: center;
  align-items: center; */
}

.section-4 .right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
}

.section-4 .right .title {
  font-size: 1.2rem;
  color: #93652b;
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

.stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 1983px 1070px #fff, 1625px 734px #fff, 1505px 1218px #fff,
    1288px 1382px #fff, 1023px 982px #fff, 184px 1501px #fff, 1352px 1072px #fff,
    966px 577px #fff, 1928px 1505px #fff, 284px 1863px #fff, 871px 390px #fff,
    1591px 1017px #fff, 1919px 1315px #fff, 1552px 697px #fff,
    1775px 1722px #fff, 61px 321px #fff, 1108px 1281px #fff, 1795px 22px #fff,
    1808px 716px #fff, 797px 374px #fff, 796px 1149px #fff, 952px 1px #fff,
    1361px 1185px #fff, 1110px 1577px #fff, 1058px 1925px #fff,
    160px 1987px #fff, 1274px 1205px #fff, 39px 85px #fff, 1835px 484px #fff,
    495px 1670px #fff, 986px 691px #fff, 2px 1486px #fff, 719px 805px #fff,
    1601px 89px #fff, 591px 565px #fff, 1317px 1604px #fff, 1805px 1486px #fff,
    703px 236px #fff, 1950px 1089px #fff, 1527px 1923px #fff, 1690px 36px #fff,
    1252px 245px #fff, 343px 903px #fff, 143px 874px #fff, 939px 1705px #fff,
    1733px 372px #fff, 362px 830px #fff, 1580px 1181px #fff, 251px 535px #fff,
    1666px 1111px #fff, 1276px 1530px #fff, 958px 1989px #fff, 75px 987px #fff,
    256px 217px #fff, 635px 1194px #fff, 1004px 1546px #fff, 1910px 878px #fff,
    520px 506px #fff, 1000px 210px #fff, 1455px 1027px #fff, 417px 1714px #fff,
    1376px 674px #fff, 1744px 1390px #fff, 195px 283px #fff, 621px 1638px #fff,
    962px 997px #fff, 283px 1219px #fff, 1591px 1953px #fff, 160px 652px #fff,
    1430px 948px #fff, 1589px 1722px #fff, 614px 1305px #fff, 167px 342px #fff,
    1172px 1861px #fff, 1097px 1249px #fff, 1094px 1743px #fff,
    1988px 1361px #fff, 461px 694px #fff, 1096px 584px #fff, 1876px 1984px #fff,
    315px 245px #fff, 441px 258px #fff, 1219px 1887px #fff, 480px 245px #fff,
    285px 819px #fff, 1753px 1833px #fff, 816px 1780px #fff, 245px 1927px #fff,
    715px 1523px #fff, 475px 1595px #fff, 1162px 66px #fff, 543px 1758px #fff,
    112px 1847px #fff, 1604px 1243px #fff, 1888px 1758px #fff, 162px 1385px #fff,
    1587px 1863px #fff, 1059px 48px #fff, 1161px 1650px #fff, 1881px 289px #fff,
    475px 363px #fff, 160px 911px #fff, 487px 291px #fff, 496px 70px #fff,
    1107px 90px #fff, 731px 1771px #fff, 1517px 918px #fff, 1013px 716px #fff,
    1832px 882px #fff, 107px 393px #fff, 1503px 1860px #fff, 31px 94px #fff,
    1640px 1112px #fff, 697px 1657px #fff, 435px 81px #fff, 1526px 1467px #fff,
    602px 1001px #fff, 1409px 306px #fff, 1631px 1005px #fff, 302px 1886px #fff,
    1262px 522px #fff, 1606px 776px #fff, 1813px 1471px #fff, 1784px 1953px #fff,
    499px 1841px #fff, 805px 1191px #fff, 786px 864px #fff, 940px 1562px #fff,
    1016px 1362px #fff, 1036px 961px #fff, 1666px 173px #fff, 1214px 979px #fff,
    54px 1293px #fff, 231px 710px #fff, 434px 1321px #fff, 259px 1716px #fff,
    1463px 380px #fff, 1406px 1130px #fff, 913px 611px #fff, 1489px 1218px #fff,
    1777px 61px #fff, 967px 63px #fff, 1598px 1504px #fff, 1528px 1134px #fff,
    1641px 111px #fff, 1980px 1181px #fff, 945px 1698px #fff, 430px 1617px #fff,
    482px 85px #fff, 554px 1473px #fff, 1112px 614px #fff, 1030px 1349px #fff,
    1666px 1753px #fff, 1049px 978px #fff, 1817px 1144px #fff, 759px 1687px #fff,
    1371px 1720px #fff, 1393px 461px #fff, 26px 983px #fff, 85px 1821px #fff,
    1193px 321px #fff, 240px 64px #fff, 220px 973px #fff, 607px 312px #fff,
    1102px 679px #fff, 1314px 329px #fff, 1802px 1079px #fff, 1997px 85px #fff,
    782px 479px #fff, 1647px 52px #fff, 1945px 514px #fff, 938px 351px #fff,
    1140px 1813px #fff, 1348px 1582px #fff, 1188px 1188px #fff,
    1494px 1341px #fff, 1552px 834px #fff, 1592px 1952px #fff, 450px 98px #fff,
    581px 1213px #fff, 1736px 1193px #fff, 944px 1950px #fff, 526px 1044px #fff,
    1869px 788px #fff, 911px 1295px #fff, 1521px 1135px #fff, 1725px 1438px #fff,
    1691px 110px #fff, 1903px 1777px #fff, 643px 1826px #fff, 222px 1810px #fff,
    1613px 1035px #fff, 201px 24px #fff, 1325px 557px #fff, 1169px 1652px #fff,
    385px 290px #fff, 1733px 168px #fff, 1886px 438px #fff, 1533px 315px #fff,
    388px 960px #fff, 312px 1818px #fff, 1605px 6px #fff, 231px 1794px #fff,
    686px 1810px #fff, 1301px 577px #fff, 1583px 474px #fff, 1916px 756px #fff,
    694px 1494px #fff, 1877px 1341px #fff, 25px 6px #fff, 1717px 316px #fff,
    1906px 1307px #fff, 1555px 316px #fff, 699px 690px #fff, 1335px 368px #fff,
    1871px 668px #fff, 301px 492px #fff, 1899px 747px #fff, 680px 444px #fff,
    654px 1063px #fff, 45px 1797px #fff, 826px 281px #fff, 1041px 1859px #fff,
    1690px 7px #fff, 797px 1473px #fff, 1697px 1680px #fff, 1704px 572px #fff,
    144px 49px #fff, 1099px 264px #fff, 789px 1804px #fff, 186px 741px #fff,
    306px 1496px #fff, 473px 209px #fff, 1763px 127px #fff, 116px 288px #fff,
    450px 385px #fff, 210px 457px #fff, 1433px 1540px #fff, 1766px 1459px #fff,
    1426px 215px #fff, 1313px 296px #fff, 410px 81px #fff, 1809px 593px #fff,
    515px 216px #fff, 1903px 1912px #fff, 564px 1545px #fff, 99px 302px #fff,
    164px 1465px #fff, 1560px 801px #fff, 1839px 663px #fff, 191px 1903px #fff,
    5px 537px #fff, 1150px 38px #fff, 1310px 647px #fff, 1257px 555px #fff,
    487px 1470px #fff, 1769px 1121px #fff, 1698px 1155px #fff,
    1176px 1916px #fff, 1192px 583px #fff, 1778px 1511px #fff, 1330px 354px #fff,
    705px 737px #fff, 449px 665px #fff, 89px 1486px #fff, 751px 1974px #fff,
    1733px 1742px #fff, 1289px 1386px #fff, 1621px 1363px #fff,
    571px 1861px #fff, 1697px 1850px #fff, 504px 624px #fff, 889px 238px #fff,
    1627px 1435px #fff, 1379px 1367px #fff, 872px 550px #fff, 472px 532px #fff,
    466px 1997px #fff, 932px 1896px #fff, 1044px 83px #fff, 1262px 1593px #fff,
    1953px 1478px #fff, 1127px 1716px #fff, 325px 176px #fff, 1742px 1505px #fff,
    1088px 288px #fff, 1212px 472px #fff, 1365px 985px #fff, 1086px 803px #fff,
    256px 263px #fff, 1300px 1444px #fff, 1673px 201px #fff, 188px 1133px #fff,
    404px 483px #fff, 59px 1006px #fff, 1013px 1651px #fff, 947px 239px #fff,
    18px 178px #fff, 1430px 1851px #fff, 763px 1777px #fff, 1737px 196px #fff,
    643px 977px #fff, 1335px 1275px #fff, 1513px 1200px #fff, 497px 659px #fff,
    1929px 800px #fff, 1481px 283px #fff, 1232px 331px #fff, 1518px 1754px #fff,
    515px 869px #fff, 1127px 1290px #fff, 726px 1453px #fff, 864px 267px #fff,
    313px 1634px #fff, 1562px 606px #fff, 91px 1803px #fff, 40px 1789px #fff,
    1097px 944px #fff, 1949px 1949px #fff, 17px 1495px #fff, 1786px 93px #fff,
    577px 1866px #fff, 1252px 546px #fff, 564px 151px #fff, 1096px 1675px #fff,
    1743px 1694px #fff, 1332px 311px #fff, 1935px 1625px #fff, 1251px 900px #fff,
    840px 1126px #fff, 763px 669px #fff, 1414px 1146px #fff, 32px 1287px #fff,
    950px 739px #fff, 1730px 856px #fff, 1032px 1754px #fff, 155px 201px #fff,
    1999px 1250px #fff, 1811px 1488px #fff, 805px 281px #fff, 875px 1358px #fff,
    1757px 86px #fff, 1824px 605px #fff, 429px 453px #fff, 1955px 1159px #fff,
    19px 1874px #fff, 1549px 109px #fff, 1684px 145px #fff, 1973px 685px #fff,
    338px 839px #fff, 659px 46px #fff, 1600px 344px #fff, 838px 994px #fff,
    337px 1918px #fff, 583px 740px #fff, 687px 251px #fff, 1900px 1031px #fff,
    1296px 449px #fff, 1268px 592px #fff, 383px 1226px #fff, 868px 101px #fff,
    891px 67px #fff, 1957px 940px #fff, 74px 1445px #fff, 1432px 898px #fff,
    430px 1783px #fff, 954px 185px #fff, 359px 1455px #fff, 635px 1786px #fff,
    1186px 1259px #fff, 1445px 1505px #fff, 1177px 781px #fff, 1407px 603px #fff,
    1257px 980px #fff, 96px 562px #fff, 1999px 1560px #fff, 1153px 1554px #fff,
    1033px 672px #fff, 1051px 546px #fff, 753px 876px #fff, 1763px 145px #fff,
    1704px 1207px #fff, 34px 1261px #fff, 817px 1041px #fff, 247px 1674px #fff,
    121px 429px #fff, 515px 570px #fff, 1762px 1489px #fff, 234px 940px #fff,
    1095px 1028px #fff, 720px 1119px #fff, 1238px 334px #fff, 91px 113px #fff,
    147px 897px #fff, 1029px 1805px #fff, 1680px 1957px #fff, 475px 1503px #fff,
    1557px 917px #fff, 1458px 1762px #fff, 612px 1707px #fff, 1329px 393px #fff,
    160px 1167px #fff, 1631px 1887px #fff, 1125px 141px #fff, 257px 376px #fff,
    809px 26px #fff, 1349px 199px #fff, 1805px 88px #fff, 69px 1953px #fff,
    1206px 529px #fff, 646px 227px #fff, 1097px 1664px #fff, 42px 1261px #fff,
    1604px 360px #fff, 1939px 187px #fff, 1220px 1264px #fff, 1044px 995px #fff,
    1005px 16px #fff, 1648px 1612px #fff, 847px 1014px #fff, 339px 1584px #fff,
    1329px 1304px #fff, 961px 1970px #fff, 711px 221px #fff, 888px 566px #fff,
    53px 704px #fff, 1369px 846px #fff, 1261px 1775px #fff, 737px 1277px #fff,
    1071px 1570px #fff, 77px 1872px #fff, 1268px 1501px #fff, 598px 1640px #fff,
    1769px 297px #fff, 1074px 656px #fff, 1006px 1154px #fff, 672px 1969px #fff,
    922px 243px #fff, 622px 773px #fff, 1875px 804px #fff, 1873px 600px #fff,
    1844px 1794px #fff, 1253px 1995px #fff, 616px 1198px #fff,
    1829px 1743px #fff, 1321px 504px #fff, 1340px 566px #fff, 1520px 1825px #fff,
    1696px 1333px #fff, 537px 158px #fff, 1106px 162px #fff, 25px 514px #fff,
    1022px 422px #fff, 1955px 391px #fff, 1126px 1741px #fff, 754px 905px #fff,
    1217px 1696px #fff, 351px 270px #fff, 950px 1260px #fff, 1847px 658px #fff,
    23px 684px #fff, 1295px 572px #fff, 257px 1053px #fff, 87px 303px #fff,
    798px 1748px #fff, 1150px 142px #fff, 48px 1641px #fff, 1492px 1328px #fff,
    1385px 1766px #fff, 296px 1726px #fff, 1299px 1780px #fff, 1316px 522px #fff,
    1953px 1526px #fff, 1007px 1089px #fff, 1824px 1598px #fff,
    1720px 480px #fff, 555px 1942px #fff, 367px 432px #fff, 957px 1162px #fff,
    384px 1044px #fff, 738px 618px #fff, 1568px 1432px #fff, 211px 788px #fff,
    198px 1761px #fff, 745px 177px #fff, 1700px 159px #fff, 316px 498px #fff,
    65px 1610px #fff, 1948px 1638px #fff, 936px 1461px #fff, 1656px 622px #fff,
    575px 1437px #fff, 336px 1424px #fff, 1215px 690px #fff, 1641px 1542px #fff,
    998px 1685px #fff, 952px 1274px #fff, 1448px 1165px #fff, 904px 1783px #fff,
    1788px 1404px #fff, 1748px 1717px #fff, 793px 922px #fff, 1032px 355px #fff,
    1158px 38px #fff, 1573px 1855px #fff, 751px 1199px #fff, 1284px 227px #fff,
    391px 416px #fff, 55px 204px #fff, 962px 1918px #fff, 668px 1347px #fff,
    613px 1215px #fff, 615px 732px #fff, 1442px 1752px #fff, 1086px 1779px #fff,
    532px 320px #fff, 1228px 1321px #fff, 1796px 1906px #fff, 150px 715px #fff,
    1694px 1005px #fff, 1509px 391px #fff, 262px 303px #fff, 1743px 909px #fff,
    1966px 1203px #fff, 707px 1033px #fff, 82px 1332px #fff, 104px 794px #fff,
    246px 759px #fff, 507px 1380px #fff, 1227px 616px #fff, 917px 1354px #fff,
    1941px 759px #fff, 451px 852px #fff, 17px 131px #fff, 780px 476px #fff,
    816px 211px #fff, 1039px 1245px #fff, 1521px 1036px #fff, 1509px 1542px #fff,
    1368px 960px #fff, 1104px 1437px #fff, 1171px 976px #fff, 681px 1305px #fff,
    1741px 579px #fff, 953px 704px #fff, 1810px 328px #fff, 1960px 1396px #fff,
    1098px 295px #fff, 1409px 919px #fff, 1830px 1176px #fff, 492px 1063px #fff,
    1277px 515px #fff, 602px 1546px #fff, 1832px 236px #fff, 1513px 274px #fff,
    1983px 794px #fff, 2000px 1505px #fff, 920px 382px #fff, 1374px 1235px #fff,
    692px 310px #fff, 1028px 1782px #fff, 1007px 887px #fff, 1492px 858px #fff,
    877px 1817px #fff, 1024px 1942px #fff, 658px 82px #fff, 526px 742px #fff,
    755px 880px #fff, 301px 1186px #fff, 318px 31px #fff, 1517px 1244px #fff,
    1996px 1126px #fff, 464px 1861px #fff, 334px 674px #fff, 768px 1103px #fff,
    628px 890px #fff, 1054px 1534px #fff, 59px 1576px #fff, 189px 693px #fff,
    16px 1097px #fff, 563px 1186px #fff, 428px 523px #fff, 1047px 1231px #fff,
    1940px 1262px #fff, 643px 971px #fff, 611px 1794px #fff, 1676px 21px #fff,
    1882px 1523px #fff, 258px 1584px #fff, 768px 295px #fff, 1253px 1431px #fff,
    1855px 362px #fff, 576px 987px #fff, 1904px 470px #fff, 895px 1390px #fff,
    771px 966px #fff, 1034px 1815px #fff, 203px 1292px #fff, 566px 893px #fff,
    63px 913px #fff, 1340px 1416px #fff, 528px 967px #fff, 1965px 444px #fff,
    1961px 132px #fff, 1049px 577px #fff, 459px 1031px #fff, 261px 1780px #fff,
    1092px 1480px #fff, 286px 759px #fff, 1014px 1604px #fff, 144px 1461px #fff,
    1180px 1694px #fff, 1348px 613px #fff, 518px 1479px #fff, 478px 649px #fff,
    1303px 629px #fff, 1713px 258px #fff, 1912px 501px #fff, 300px 227px #fff,
    989px 1068px #fff, 197px 158px #fff, 244px 420px #fff, 889px 486px #fff,
    1517px 1812px #fff, 965px 308px #fff, 409px 1293px #fff, 47px 1400px #fff,
    1473px 1150px #fff, 311px 1711px #fff, 1938px 1000px #fff, 717px 1331px #fff,
    282px 881px #fff, 1305px 382px #fff, 1639px 52px #fff, 1466px 1228px #fff,
    574px 26px #fff, 1310px 899px #fff, 15px 1795px #fff, 1138px 941px #fff,
    1235px 1416px #fff, 27px 375px #fff, 1333px 1470px #fff, 1462px 1837px #fff,
    1830px 1217px #fff, 1521px 1848px #fff, 730px 515px #fff, 514px 1869px #fff,
    468px 1906px #fff, 1931px 259px #fff, 1612px 151px #fff, 1495px 735px #fff,
    710px 1096px #fff, 1976px 546px #fff, 50px 741px #fff, 1313px 381px #fff,
    54px 102px #fff, 1873px 1009px #fff, 1696px 688px #fff, 626px 922px #fff,
    244px 1438px #fff, 1746px 1787px #fff, 1824px 1437px #fff,
    1730px 1219px #fff, 785px 198px #fff, 1174px 931px #fff, 909px 517px #fff,
    1283px 662px #fff, 1074px 194px #fff, 847px 1945px #fff, 113px 427px #fff,
    728px 352px #fff, 1205px 1316px #fff, 786px 668px #fff, 64px 427px #fff,
    548px 1370px #fff, 1102px 616px #fff, 676px 1192px #fff, 1652px 1264px #fff,
    649px 69px #fff, 1593px 645px #fff, 1651px 816px #fff, 1914px 977px #fff,
    80px 1006px #fff, 1252px 742px #fff, 1291px 981px #fff, 1325px 273px #fff,
    831px 1581px #fff, 344px 1503px #fff, 1885px 1849px #fff, 745px 1030px #fff,
    764px 1396px #fff, 1241px 829px #fff, 1281px 160px #fff, 1210px 1860px #fff,
    1998px 411px #fff, 1752px 1816px #fff, 21px 1656px #fff, 1863px 1988px #fff,
    1860px 331px #fff, 79px 512px #fff;
  animation: animStar 50s linear infinite;
}

.stars:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 1983px 1070px #fff, 1625px 734px #fff, 1505px 1218px #fff,
    1288px 1382px #fff, 1023px 982px #fff, 184px 1501px #fff, 1352px 1072px #fff,
    966px 577px #fff, 1928px 1505px #fff, 284px 1863px #fff, 871px 390px #fff,
    1591px 1017px #fff, 1919px 1315px #fff, 1552px 697px #fff,
    1775px 1722px #fff, 61px 321px #fff, 1108px 1281px #fff, 1795px 22px #fff,
    1808px 716px #fff, 797px 374px #fff, 796px 1149px #fff, 952px 1px #fff,
    1361px 1185px #fff, 1110px 1577px #fff, 1058px 1925px #fff,
    160px 1987px #fff, 1274px 1205px #fff, 39px 85px #fff, 1835px 484px #fff,
    495px 1670px #fff, 986px 691px #fff, 2px 1486px #fff, 719px 805px #fff,
    1601px 89px #fff, 591px 565px #fff, 1317px 1604px #fff, 1805px 1486px #fff,
    703px 236px #fff, 1950px 1089px #fff, 1527px 1923px #fff, 1690px 36px #fff,
    1252px 245px #fff, 343px 903px #fff, 143px 874px #fff, 939px 1705px #fff,
    1733px 372px #fff, 362px 830px #fff, 1580px 1181px #fff, 251px 535px #fff,
    1666px 1111px #fff, 1276px 1530px #fff, 958px 1989px #fff, 75px 987px #fff,
    256px 217px #fff, 635px 1194px #fff, 1004px 1546px #fff, 1910px 878px #fff,
    520px 506px #fff, 1000px 210px #fff, 1455px 1027px #fff, 417px 1714px #fff,
    1376px 674px #fff, 1744px 1390px #fff, 195px 283px #fff, 621px 1638px #fff,
    962px 997px #fff, 283px 1219px #fff, 1591px 1953px #fff, 160px 652px #fff,
    1430px 948px #fff, 1589px 1722px #fff, 614px 1305px #fff, 167px 342px #fff,
    1172px 1861px #fff, 1097px 1249px #fff, 1094px 1743px #fff,
    1988px 1361px #fff, 461px 694px #fff, 1096px 584px #fff, 1876px 1984px #fff,
    315px 245px #fff, 441px 258px #fff, 1219px 1887px #fff, 480px 245px #fff,
    285px 819px #fff, 1753px 1833px #fff, 816px 1780px #fff, 245px 1927px #fff,
    715px 1523px #fff, 475px 1595px #fff, 1162px 66px #fff, 543px 1758px #fff,
    112px 1847px #fff, 1604px 1243px #fff, 1888px 1758px #fff, 162px 1385px #fff,
    1587px 1863px #fff, 1059px 48px #fff, 1161px 1650px #fff, 1881px 289px #fff,
    475px 363px #fff, 160px 911px #fff, 487px 291px #fff, 496px 70px #fff,
    1107px 90px #fff, 731px 1771px #fff, 1517px 918px #fff, 1013px 716px #fff,
    1832px 882px #fff, 107px 393px #fff, 1503px 1860px #fff, 31px 94px #fff,
    1640px 1112px #fff, 697px 1657px #fff, 435px 81px #fff, 1526px 1467px #fff,
    602px 1001px #fff, 1409px 306px #fff, 1631px 1005px #fff, 302px 1886px #fff,
    1262px 522px #fff, 1606px 776px #fff, 1813px 1471px #fff, 1784px 1953px #fff,
    499px 1841px #fff, 805px 1191px #fff, 786px 864px #fff, 940px 1562px #fff,
    1016px 1362px #fff, 1036px 961px #fff, 1666px 173px #fff, 1214px 979px #fff,
    54px 1293px #fff, 231px 710px #fff, 434px 1321px #fff, 259px 1716px #fff,
    1463px 380px #fff, 1406px 1130px #fff, 913px 611px #fff, 1489px 1218px #fff,
    1777px 61px #fff, 967px 63px #fff, 1598px 1504px #fff, 1528px 1134px #fff,
    1641px 111px #fff, 1980px 1181px #fff, 945px 1698px #fff, 430px 1617px #fff,
    482px 85px #fff, 554px 1473px #fff, 1112px 614px #fff, 1030px 1349px #fff,
    1666px 1753px #fff, 1049px 978px #fff, 1817px 1144px #fff, 759px 1687px #fff,
    1371px 1720px #fff, 1393px 461px #fff, 26px 983px #fff, 85px 1821px #fff,
    1193px 321px #fff, 240px 64px #fff, 220px 973px #fff, 607px 312px #fff,
    1102px 679px #fff, 1314px 329px #fff, 1802px 1079px #fff, 1997px 85px #fff,
    782px 479px #fff, 1647px 52px #fff, 1945px 514px #fff, 938px 351px #fff,
    1140px 1813px #fff, 1348px 1582px #fff, 1188px 1188px #fff,
    1494px 1341px #fff, 1552px 834px #fff, 1592px 1952px #fff, 450px 98px #fff,
    581px 1213px #fff, 1736px 1193px #fff, 944px 1950px #fff, 526px 1044px #fff,
    1869px 788px #fff, 911px 1295px #fff, 1521px 1135px #fff, 1725px 1438px #fff,
    1691px 110px #fff, 1903px 1777px #fff, 643px 1826px #fff, 222px 1810px #fff,
    1613px 1035px #fff, 201px 24px #fff, 1325px 557px #fff, 1169px 1652px #fff,
    385px 290px #fff, 1733px 168px #fff, 1886px 438px #fff, 1533px 315px #fff,
    388px 960px #fff, 312px 1818px #fff, 1605px 6px #fff, 231px 1794px #fff,
    686px 1810px #fff, 1301px 577px #fff, 1583px 474px #fff, 1916px 756px #fff,
    694px 1494px #fff, 1877px 1341px #fff, 25px 6px #fff, 1717px 316px #fff,
    1906px 1307px #fff, 1555px 316px #fff, 699px 690px #fff, 1335px 368px #fff,
    1871px 668px #fff, 301px 492px #fff, 1899px 747px #fff, 680px 444px #fff,
    654px 1063px #fff, 45px 1797px #fff, 826px 281px #fff, 1041px 1859px #fff,
    1690px 7px #fff, 797px 1473px #fff, 1697px 1680px #fff, 1704px 572px #fff,
    144px 49px #fff, 1099px 264px #fff, 789px 1804px #fff, 186px 741px #fff,
    306px 1496px #fff, 473px 209px #fff, 1763px 127px #fff, 116px 288px #fff,
    450px 385px #fff, 210px 457px #fff, 1433px 1540px #fff, 1766px 1459px #fff,
    1426px 215px #fff, 1313px 296px #fff, 410px 81px #fff, 1809px 593px #fff,
    515px 216px #fff, 1903px 1912px #fff, 564px 1545px #fff, 99px 302px #fff,
    164px 1465px #fff, 1560px 801px #fff, 1839px 663px #fff, 191px 1903px #fff,
    5px 537px #fff, 1150px 38px #fff, 1310px 647px #fff, 1257px 555px #fff,
    487px 1470px #fff, 1769px 1121px #fff, 1698px 1155px #fff,
    1176px 1916px #fff, 1192px 583px #fff, 1778px 1511px #fff, 1330px 354px #fff,
    705px 737px #fff, 449px 665px #fff, 89px 1486px #fff, 751px 1974px #fff,
    1733px 1742px #fff, 1289px 1386px #fff, 1621px 1363px #fff,
    571px 1861px #fff, 1697px 1850px #fff, 504px 624px #fff, 889px 238px #fff,
    1627px 1435px #fff, 1379px 1367px #fff, 872px 550px #fff, 472px 532px #fff,
    466px 1997px #fff, 932px 1896px #fff, 1044px 83px #fff, 1262px 1593px #fff,
    1953px 1478px #fff, 1127px 1716px #fff, 325px 176px #fff, 1742px 1505px #fff,
    1088px 288px #fff, 1212px 472px #fff, 1365px 985px #fff, 1086px 803px #fff,
    256px 263px #fff, 1300px 1444px #fff, 1673px 201px #fff, 188px 1133px #fff,
    404px 483px #fff, 59px 1006px #fff, 1013px 1651px #fff, 947px 239px #fff,
    18px 178px #fff, 1430px 1851px #fff, 763px 1777px #fff, 1737px 196px #fff,
    643px 977px #fff, 1335px 1275px #fff, 1513px 1200px #fff, 497px 659px #fff,
    1929px 800px #fff, 1481px 283px #fff, 1232px 331px #fff, 1518px 1754px #fff,
    515px 869px #fff, 1127px 1290px #fff, 726px 1453px #fff, 864px 267px #fff,
    313px 1634px #fff, 1562px 606px #fff, 91px 1803px #fff, 40px 1789px #fff,
    1097px 944px #fff, 1949px 1949px #fff, 17px 1495px #fff, 1786px 93px #fff,
    577px 1866px #fff, 1252px 546px #fff, 564px 151px #fff, 1096px 1675px #fff,
    1743px 1694px #fff, 1332px 311px #fff, 1935px 1625px #fff, 1251px 900px #fff,
    840px 1126px #fff, 763px 669px #fff, 1414px 1146px #fff, 32px 1287px #fff,
    950px 739px #fff, 1730px 856px #fff, 1032px 1754px #fff, 155px 201px #fff,
    1999px 1250px #fff, 1811px 1488px #fff, 805px 281px #fff, 875px 1358px #fff,
    1757px 86px #fff, 1824px 605px #fff, 429px 453px #fff, 1955px 1159px #fff,
    19px 1874px #fff, 1549px 109px #fff, 1684px 145px #fff, 1973px 685px #fff,
    338px 839px #fff, 659px 46px #fff, 1600px 344px #fff, 838px 994px #fff,
    337px 1918px #fff, 583px 740px #fff, 687px 251px #fff, 1900px 1031px #fff,
    1296px 449px #fff, 1268px 592px #fff, 383px 1226px #fff, 868px 101px #fff,
    891px 67px #fff, 1957px 940px #fff, 74px 1445px #fff, 1432px 898px #fff,
    430px 1783px #fff, 954px 185px #fff, 359px 1455px #fff, 635px 1786px #fff,
    1186px 1259px #fff, 1445px 1505px #fff, 1177px 781px #fff, 1407px 603px #fff,
    1257px 980px #fff, 96px 562px #fff, 1999px 1560px #fff, 1153px 1554px #fff,
    1033px 672px #fff, 1051px 546px #fff, 753px 876px #fff, 1763px 145px #fff,
    1704px 1207px #fff, 34px 1261px #fff, 817px 1041px #fff, 247px 1674px #fff,
    121px 429px #fff, 515px 570px #fff, 1762px 1489px #fff, 234px 940px #fff,
    1095px 1028px #fff, 720px 1119px #fff, 1238px 334px #fff, 91px 113px #fff,
    147px 897px #fff, 1029px 1805px #fff, 1680px 1957px #fff, 475px 1503px #fff,
    1557px 917px #fff, 1458px 1762px #fff, 612px 1707px #fff, 1329px 393px #fff,
    160px 1167px #fff, 1631px 1887px #fff, 1125px 141px #fff, 257px 376px #fff,
    809px 26px #fff, 1349px 199px #fff, 1805px 88px #fff, 69px 1953px #fff,
    1206px 529px #fff, 646px 227px #fff, 1097px 1664px #fff, 42px 1261px #fff,
    1604px 360px #fff, 1939px 187px #fff, 1220px 1264px #fff, 1044px 995px #fff,
    1005px 16px #fff, 1648px 1612px #fff, 847px 1014px #fff, 339px 1584px #fff,
    1329px 1304px #fff, 961px 1970px #fff, 711px 221px #fff, 888px 566px #fff,
    53px 704px #fff, 1369px 846px #fff, 1261px 1775px #fff, 737px 1277px #fff,
    1071px 1570px #fff, 77px 1872px #fff, 1268px 1501px #fff, 598px 1640px #fff,
    1769px 297px #fff, 1074px 656px #fff, 1006px 1154px #fff, 672px 1969px #fff,
    922px 243px #fff, 622px 773px #fff, 1875px 804px #fff, 1873px 600px #fff,
    1844px 1794px #fff, 1253px 1995px #fff, 616px 1198px #fff,
    1829px 1743px #fff, 1321px 504px #fff, 1340px 566px #fff, 1520px 1825px #fff,
    1696px 1333px #fff, 537px 158px #fff, 1106px 162px #fff, 25px 514px #fff,
    1022px 422px #fff, 1955px 391px #fff, 1126px 1741px #fff, 754px 905px #fff,
    1217px 1696px #fff, 351px 270px #fff, 950px 1260px #fff, 1847px 658px #fff,
    23px 684px #fff, 1295px 572px #fff, 257px 1053px #fff, 87px 303px #fff,
    798px 1748px #fff, 1150px 142px #fff, 48px 1641px #fff, 1492px 1328px #fff,
    1385px 1766px #fff, 296px 1726px #fff, 1299px 1780px #fff, 1316px 522px #fff,
    1953px 1526px #fff, 1007px 1089px #fff, 1824px 1598px #fff,
    1720px 480px #fff, 555px 1942px #fff, 367px 432px #fff, 957px 1162px #fff,
    384px 1044px #fff, 738px 618px #fff, 1568px 1432px #fff, 211px 788px #fff,
    198px 1761px #fff, 745px 177px #fff, 1700px 159px #fff, 316px 498px #fff,
    65px 1610px #fff, 1948px 1638px #fff, 936px 1461px #fff, 1656px 622px #fff,
    575px 1437px #fff, 336px 1424px #fff, 1215px 690px #fff, 1641px 1542px #fff,
    998px 1685px #fff, 952px 1274px #fff, 1448px 1165px #fff, 904px 1783px #fff,
    1788px 1404px #fff, 1748px 1717px #fff, 793px 922px #fff, 1032px 355px #fff,
    1158px 38px #fff, 1573px 1855px #fff, 751px 1199px #fff, 1284px 227px #fff,
    391px 416px #fff, 55px 204px #fff, 962px 1918px #fff, 668px 1347px #fff,
    613px 1215px #fff, 615px 732px #fff, 1442px 1752px #fff, 1086px 1779px #fff,
    532px 320px #fff, 1228px 1321px #fff, 1796px 1906px #fff, 150px 715px #fff,
    1694px 1005px #fff, 1509px 391px #fff, 262px 303px #fff, 1743px 909px #fff,
    1966px 1203px #fff, 707px 1033px #fff, 82px 1332px #fff, 104px 794px #fff,
    246px 759px #fff, 507px 1380px #fff, 1227px 616px #fff, 917px 1354px #fff,
    1941px 759px #fff, 451px 852px #fff, 17px 131px #fff, 780px 476px #fff,
    816px 211px #fff, 1039px 1245px #fff, 1521px 1036px #fff, 1509px 1542px #fff,
    1368px 960px #fff, 1104px 1437px #fff, 1171px 976px #fff, 681px 1305px #fff,
    1741px 579px #fff, 953px 704px #fff, 1810px 328px #fff, 1960px 1396px #fff,
    1098px 295px #fff, 1409px 919px #fff, 1830px 1176px #fff, 492px 1063px #fff,
    1277px 515px #fff, 602px 1546px #fff, 1832px 236px #fff, 1513px 274px #fff,
    1983px 794px #fff, 2000px 1505px #fff, 920px 382px #fff, 1374px 1235px #fff,
    692px 310px #fff, 1028px 1782px #fff, 1007px 887px #fff, 1492px 858px #fff,
    877px 1817px #fff, 1024px 1942px #fff, 658px 82px #fff, 526px 742px #fff,
    755px 880px #fff, 301px 1186px #fff, 318px 31px #fff, 1517px 1244px #fff,
    1996px 1126px #fff, 464px 1861px #fff, 334px 674px #fff, 768px 1103px #fff,
    628px 890px #fff, 1054px 1534px #fff, 59px 1576px #fff, 189px 693px #fff,
    16px 1097px #fff, 563px 1186px #fff, 428px 523px #fff, 1047px 1231px #fff,
    1940px 1262px #fff, 643px 971px #fff, 611px 1794px #fff, 1676px 21px #fff,
    1882px 1523px #fff, 258px 1584px #fff, 768px 295px #fff, 1253px 1431px #fff,
    1855px 362px #fff, 576px 987px #fff, 1904px 470px #fff, 895px 1390px #fff,
    771px 966px #fff, 1034px 1815px #fff, 203px 1292px #fff, 566px 893px #fff,
    63px 913px #fff, 1340px 1416px #fff, 528px 967px #fff, 1965px 444px #fff,
    1961px 132px #fff, 1049px 577px #fff, 459px 1031px #fff, 261px 1780px #fff,
    1092px 1480px #fff, 286px 759px #fff, 1014px 1604px #fff, 144px 1461px #fff,
    1180px 1694px #fff, 1348px 613px #fff, 518px 1479px #fff, 478px 649px #fff,
    1303px 629px #fff, 1713px 258px #fff, 1912px 501px #fff, 300px 227px #fff,
    989px 1068px #fff, 197px 158px #fff, 244px 420px #fff, 889px 486px #fff,
    1517px 1812px #fff, 965px 308px #fff, 409px 1293px #fff, 47px 1400px #fff,
    1473px 1150px #fff, 311px 1711px #fff, 1938px 1000px #fff, 717px 1331px #fff,
    282px 881px #fff, 1305px 382px #fff, 1639px 52px #fff, 1466px 1228px #fff,
    574px 26px #fff, 1310px 899px #fff, 15px 1795px #fff, 1138px 941px #fff,
    1235px 1416px #fff, 27px 375px #fff, 1333px 1470px #fff, 1462px 1837px #fff,
    1830px 1217px #fff, 1521px 1848px #fff, 730px 515px #fff, 514px 1869px #fff,
    468px 1906px #fff, 1931px 259px #fff, 1612px 151px #fff, 1495px 735px #fff,
    710px 1096px #fff, 1976px 546px #fff, 50px 741px #fff, 1313px 381px #fff,
    54px 102px #fff, 1873px 1009px #fff, 1696px 688px #fff, 626px 922px #fff,
    244px 1438px #fff, 1746px 1787px #fff, 1824px 1437px #fff,
    1730px 1219px #fff, 785px 198px #fff, 1174px 931px #fff, 909px 517px #fff,
    1283px 662px #fff, 1074px 194px #fff, 847px 1945px #fff, 113px 427px #fff,
    728px 352px #fff, 1205px 1316px #fff, 786px 668px #fff, 64px 427px #fff,
    548px 1370px #fff, 1102px 616px #fff, 676px 1192px #fff, 1652px 1264px #fff,
    649px 69px #fff, 1593px 645px #fff, 1651px 816px #fff, 1914px 977px #fff,
    80px 1006px #fff, 1252px 742px #fff, 1291px 981px #fff, 1325px 273px #fff,
    831px 1581px #fff, 344px 1503px #fff, 1885px 1849px #fff, 745px 1030px #fff,
    764px 1396px #fff, 1241px 829px #fff, 1281px 160px #fff, 1210px 1860px #fff,
    1998px 411px #fff, 1752px 1816px #fff, 21px 1656px #fff, 1863px 1988px #fff,
    1860px 331px #fff, 79px 512px #fff;
}

.stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 1124px 1500px #fff, 916px 1039px #fff, 1281px 2000px #fff,
    1702px 518px #fff, 246px 953px #fff, 1889px 287px #fff, 1438px 1139px #fff,
    1824px 1739px #fff, 1090px 1205px #fff, 1514px 392px #fff, 87px 1797px #fff,
    342px 25px #fff, 134px 1624px #fff, 1246px 426px #fff, 453px 559px #fff,
    609px 308px #fff, 506px 972px #fff, 684px 733px #fff, 85px 1641px #fff,
    1576px 320px #fff, 145px 809px #fff, 1822px 1000px #fff, 21px 1512px #fff,
    173px 1775px #fff, 1283px 1564px #fff, 224px 1353px #fff, 451px 785px #fff,
    703px 1983px #fff, 508px 1345px #fff, 957px 1209px #fff, 698px 162px #fff,
    159px 1835px #fff, 712px 227px #fff, 1234px 295px #fff, 310px 958px #fff,
    889px 31px #fff, 1321px 1156px #fff, 501px 274px #fff, 914px 96px #fff,
    1637px 1954px #fff, 774px 1326px #fff, 304px 550px #fff, 1249px 425px #fff,
    649px 1851px #fff, 723px 1114px #fff, 1115px 1524px #fff, 1937px 1932px #fff,
    44px 1353px #fff, 850px 1872px #fff, 1175px 1628px #fff, 318px 248px #fff,
    291px 521px #fff, 1246px 1707px #fff, 1640px 1608px #fff, 1961px 343px #fff,
    964px 1144px #fff, 1729px 361px #fff, 1493px 799px #fff, 1503px 1030px #fff,
    426px 1162px #fff, 991px 1700px #fff, 697px 630px #fff, 897px 1692px #fff,
    457px 1816px #fff, 667px 729px #fff, 1753px 1618px #fff, 1132px 1095px #fff,
    954px 1846px #fff, 1938px 1179px #fff, 135px 434px #fff, 1134px 1216px #fff,
    491px 543px #fff, 525px 1114px #fff, 1769px 1830px #fff, 1641px 1422px #fff,
    873px 548px #fff, 1519px 1249px #fff, 934px 1084px #fff, 753px 1528px #fff,
    1139px 478px #fff, 1533px 356px #fff, 264px 1956px #fff, 899px 487px #fff,
    1932px 1084px #fff, 1846px 64px #fff, 46px 1255px #fff, 102px 1775px #fff,
    678px 1579px #fff, 1406px 368px #fff, 1808px 32px #fff, 741px 775px #fff,
    225px 1338px #fff, 124px 731px #fff, 411px 135px #fff, 1640px 1276px #fff,
    54px 1998px #fff, 1126px 1912px #fff, 1896px 1754px #fff, 819px 827px #fff,
    1063px 125px #fff, 955px 1357px #fff, 945px 1808px #fff, 777px 1591px #fff,
    508px 1351px #fff, 966px 983px #fff, 168px 9px #fff, 1700px 533px #fff,
    785px 1700px #fff, 558px 749px #fff, 56px 1463px #fff, 1482px 371px #fff,
    1201px 1930px #fff, 207px 240px #fff, 538px 146px #fff, 893px 1156px #fff,
    662px 973px #fff, 1126px 641px #fff, 354px 1792px #fff, 1483px 1367px #fff,
    1032px 1516px #fff, 322px 1338px #fff, 1804px 1170px #fff, 1899px 561px #fff,
    698px 1947px #fff, 1377px 1501px #fff, 1966px 1196px #fff, 108px 1889px #fff,
    790px 1309px #fff, 1206px 42px #fff, 1903px 373px #fff, 465px 113px #fff,
    1776px 1878px #fff, 1363px 639px #fff, 1142px 1969px #fff, 1427px 840px #fff,
    212px 1412px #fff, 1333px 1905px #fff, 817px 261px #fff, 1590px 1046px #fff,
    1139px 89px #fff, 1852px 311px #fff, 1618px 1155px #fff, 387px 1975px #fff,
    290px 1660px #fff, 1094px 957px #fff, 1145px 1157px #fff, 825px 1179px #fff,
    1456px 1133px #fff, 1214px 922px #fff, 290px 1880px #fff, 852px 1027px #fff,
    275px 557px #fff, 1115px 724px #fff, 1713px 1698px #fff, 1819px 1196px #fff,
    1778px 179px #fff, 401px 610px #fff, 1288px 1286px #fff, 1603px 493px #fff,
    497px 306px #fff, 457px 1005px #fff, 675px 1814px #fff, 850px 1719px #fff,
    467px 932px #fff, 1312px 1366px #fff, 812px 1643px #fff, 356px 1170px #fff,
    1915px 787px #fff, 1923px 1453px #fff, 542px 860px #fff, 1496px 832px #fff,
    1689px 90px #fff, 1404px 73px #fff, 991px 357px #fff, 1534px 1469px #fff,
    1036px 822px #fff, 595px 819px #fff, 432px 1908px #fff, 221px 1519px #fff,
    1744px 1507px #fff, 505px 564px #fff, 1220px 1959px #fff, 544px 1880px #fff,
    744px 516px #fff, 547px 307px #fff, 1862px 247px #fff, 1560px 410px #fff,
    736px 282px #fff, 986px 1452px #fff, 808px 1942px #fff, 194px 1307px #fff,
    639px 842px #fff, 717px 272px #fff, 580px 103px #fff, 566px 1916px #fff,
    1847px 91px #fff, 1583px 629px #fff, 1270px 1517px #fff, 1452px 1905px #fff,
    1161px 1965px #fff;
  animation: animStar 100s linear infinite;
}

.stars2:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 1124px 1500px #fff, 916px 1039px #fff, 1281px 2000px #fff,
    1702px 518px #fff, 246px 953px #fff, 1889px 287px #fff, 1438px 1139px #fff,
    1824px 1739px #fff, 1090px 1205px #fff, 1514px 392px #fff, 87px 1797px #fff,
    342px 25px #fff, 134px 1624px #fff, 1246px 426px #fff, 453px 559px #fff,
    609px 308px #fff, 506px 972px #fff, 684px 733px #fff, 85px 1641px #fff,
    1576px 320px #fff, 145px 809px #fff, 1822px 1000px #fff, 21px 1512px #fff,
    173px 1775px #fff, 1283px 1564px #fff, 224px 1353px #fff, 451px 785px #fff,
    703px 1983px #fff, 508px 1345px #fff, 957px 1209px #fff, 698px 162px #fff,
    159px 1835px #fff, 712px 227px #fff, 1234px 295px #fff, 310px 958px #fff,
    889px 31px #fff, 1321px 1156px #fff, 501px 274px #fff, 914px 96px #fff,
    1637px 1954px #fff, 774px 1326px #fff, 304px 550px #fff, 1249px 425px #fff,
    649px 1851px #fff, 723px 1114px #fff, 1115px 1524px #fff, 1937px 1932px #fff,
    44px 1353px #fff, 850px 1872px #fff, 1175px 1628px #fff, 318px 248px #fff,
    291px 521px #fff, 1246px 1707px #fff, 1640px 1608px #fff, 1961px 343px #fff,
    964px 1144px #fff, 1729px 361px #fff, 1493px 799px #fff, 1503px 1030px #fff,
    426px 1162px #fff, 991px 1700px #fff, 697px 630px #fff, 897px 1692px #fff,
    457px 1816px #fff, 667px 729px #fff, 1753px 1618px #fff, 1132px 1095px #fff,
    954px 1846px #fff, 1938px 1179px #fff, 135px 434px #fff, 1134px 1216px #fff,
    491px 543px #fff, 525px 1114px #fff, 1769px 1830px #fff, 1641px 1422px #fff,
    873px 548px #fff, 1519px 1249px #fff, 934px 1084px #fff, 753px 1528px #fff,
    1139px 478px #fff, 1533px 356px #fff, 264px 1956px #fff, 899px 487px #fff,
    1932px 1084px #fff, 1846px 64px #fff, 46px 1255px #fff, 102px 1775px #fff,
    678px 1579px #fff, 1406px 368px #fff, 1808px 32px #fff, 741px 775px #fff,
    225px 1338px #fff, 124px 731px #fff, 411px 135px #fff, 1640px 1276px #fff,
    54px 1998px #fff, 1126px 1912px #fff, 1896px 1754px #fff, 819px 827px #fff,
    1063px 125px #fff, 955px 1357px #fff, 945px 1808px #fff, 777px 1591px #fff,
    508px 1351px #fff, 966px 983px #fff, 168px 9px #fff, 1700px 533px #fff,
    785px 1700px #fff, 558px 749px #fff, 56px 1463px #fff, 1482px 371px #fff,
    1201px 1930px #fff, 207px 240px #fff, 538px 146px #fff, 893px 1156px #fff,
    662px 973px #fff, 1126px 641px #fff, 354px 1792px #fff, 1483px 1367px #fff,
    1032px 1516px #fff, 322px 1338px #fff, 1804px 1170px #fff, 1899px 561px #fff,
    698px 1947px #fff, 1377px 1501px #fff, 1966px 1196px #fff, 108px 1889px #fff,
    790px 1309px #fff, 1206px 42px #fff, 1903px 373px #fff, 465px 113px #fff,
    1776px 1878px #fff, 1363px 639px #fff, 1142px 1969px #fff, 1427px 840px #fff,
    212px 1412px #fff, 1333px 1905px #fff, 817px 261px #fff, 1590px 1046px #fff,
    1139px 89px #fff, 1852px 311px #fff, 1618px 1155px #fff, 387px 1975px #fff,
    290px 1660px #fff, 1094px 957px #fff, 1145px 1157px #fff, 825px 1179px #fff,
    1456px 1133px #fff, 1214px 922px #fff, 290px 1880px #fff, 852px 1027px #fff,
    275px 557px #fff, 1115px 724px #fff, 1713px 1698px #fff, 1819px 1196px #fff,
    1778px 179px #fff, 401px 610px #fff, 1288px 1286px #fff, 1603px 493px #fff,
    497px 306px #fff, 457px 1005px #fff, 675px 1814px #fff, 850px 1719px #fff,
    467px 932px #fff, 1312px 1366px #fff, 812px 1643px #fff, 356px 1170px #fff,
    1915px 787px #fff, 1923px 1453px #fff, 542px 860px #fff, 1496px 832px #fff,
    1689px 90px #fff, 1404px 73px #fff, 991px 357px #fff, 1534px 1469px #fff,
    1036px 822px #fff, 595px 819px #fff, 432px 1908px #fff, 221px 1519px #fff,
    1744px 1507px #fff, 505px 564px #fff, 1220px 1959px #fff, 544px 1880px #fff,
    744px 516px #fff, 547px 307px #fff, 1862px 247px #fff, 1560px 410px #fff,
    736px 282px #fff, 986px 1452px #fff, 808px 1942px #fff, 194px 1307px #fff,
    639px 842px #fff, 717px 272px #fff, 580px 103px #fff, 566px 1916px #fff,
    1847px 91px #fff, 1583px 629px #fff, 1270px 1517px #fff, 1452px 1905px #fff,
    1161px 1965px #fff;
}

.stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 1106px 1979px #fff, 1572px 505px #fff, 25px 1324px #fff,
    650px 558px #fff, 558px 1555px #fff, 782px 1910px #fff, 95px 1646px #fff,
    1794px 169px #fff, 1104px 1373px #fff, 965px 1386px #fff, 1818px 948px #fff,
    1848px 760px #fff, 1789px 937px #fff, 761px 1565px #fff, 945px 1788px #fff,
    1553px 93px #fff, 1344px 281px #fff, 832px 138px #fff, 819px 412px #fff,
    386px 1164px #fff, 36px 1157px #fff, 1150px 651px #fff, 63px 1824px #fff,
    338px 202px #fff, 1203px 764px #fff, 1825px 1211px #fff, 204px 1892px #fff,
    228px 313px #fff, 1511px 783px #fff, 497px 522px #fff, 744px 96px #fff,
    511px 1254px #fff, 179px 1572px #fff, 988px 411px #fff, 1539px 1119px #fff,
    687px 1122px #fff, 1615px 475px #fff, 512px 399px #fff, 816px 1040px #fff,
    341px 103px #fff, 450px 505px #fff, 1161px 742px #fff, 1926px 1476px #fff,
    764px 1893px #fff, 995px 1047px #fff, 572px 593px #fff, 143px 499px #fff,
    963px 861px #fff, 575px 178px #fff, 1492px 424px #fff, 1890px 1467px #fff,
    612px 1453px #fff, 573px 346px #fff, 1151px 945px #fff, 107px 45px #fff,
    345px 593px #fff, 1659px 456px #fff, 1984px 1612px #fff, 1103px 350px #fff,
    696px 908px #fff, 1227px 1093px #fff, 1525px 1198px #fff, 294px 648px #fff,
    955px 378px #fff, 1553px 114px #fff, 1355px 1009px #fff, 911px 1568px #fff,
    1807px 27px #fff, 933px 1952px #fff, 493px 1501px #fff, 1573px 1849px #fff,
    962px 471px #fff, 1078px 1745px #fff, 711px 381px #fff, 1617px 574px #fff,
    666px 1277px #fff, 1589px 1435px #fff, 41px 21px #fff, 1427px 252px #fff,
    748px 351px #fff, 1826px 261px #fff, 730px 1705px #fff, 30px 459px #fff,
    953px 1573px #fff, 725px 1653px #fff, 1628px 1144px #fff, 1070px 1879px #fff,
    362px 603px #fff, 605px 714px #fff, 749px 1979px #fff, 1569px 1753px #fff,
    335px 491px #fff, 1618px 1237px #fff, 362px 1735px #fff, 105px 489px #fff,
    806px 836px #fff, 1523px 781px #fff, 411px 1405px #fff, 858px 220px #fff,
    273px 89px #fff;
  animation: animStar 150s linear infinite;
}

.stars3:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 1106px 1979px #fff, 1572px 505px #fff, 25px 1324px #fff,
    650px 558px #fff, 558px 1555px #fff, 782px 1910px #fff, 95px 1646px #fff,
    1794px 169px #fff, 1104px 1373px #fff, 965px 1386px #fff, 1818px 948px #fff,
    1848px 760px #fff, 1789px 937px #fff, 761px 1565px #fff, 945px 1788px #fff,
    1553px 93px #fff, 1344px 281px #fff, 832px 138px #fff, 819px 412px #fff,
    386px 1164px #fff, 36px 1157px #fff, 1150px 651px #fff, 63px 1824px #fff,
    338px 202px #fff, 1203px 764px #fff, 1825px 1211px #fff, 204px 1892px #fff,
    228px 313px #fff, 1511px 783px #fff, 497px 522px #fff, 744px 96px #fff,
    511px 1254px #fff, 179px 1572px #fff, 988px 411px #fff, 1539px 1119px #fff,
    687px 1122px #fff, 1615px 475px #fff, 512px 399px #fff, 816px 1040px #fff,
    341px 103px #fff, 450px 505px #fff, 1161px 742px #fff, 1926px 1476px #fff,
    764px 1893px #fff, 995px 1047px #fff, 572px 593px #fff, 143px 499px #fff,
    963px 861px #fff, 575px 178px #fff, 1492px 424px #fff, 1890px 1467px #fff,
    612px 1453px #fff, 573px 346px #fff, 1151px 945px #fff, 107px 45px #fff,
    345px 593px #fff, 1659px 456px #fff, 1984px 1612px #fff, 1103px 350px #fff,
    696px 908px #fff, 1227px 1093px #fff, 1525px 1198px #fff, 294px 648px #fff,
    955px 378px #fff, 1553px 114px #fff, 1355px 1009px #fff, 911px 1568px #fff,
    1807px 27px #fff, 933px 1952px #fff, 493px 1501px #fff, 1573px 1849px #fff,
    962px 471px #fff, 1078px 1745px #fff, 711px 381px #fff, 1617px 574px #fff,
    666px 1277px #fff, 1589px 1435px #fff, 41px 21px #fff, 1427px 252px #fff,
    748px 351px #fff, 1826px 261px #fff, 730px 1705px #fff, 30px 459px #fff,
    953px 1573px #fff, 725px 1653px #fff, 1628px 1144px #fff, 1070px 1879px #fff,
    362px 603px #fff, 605px 714px #fff, 749px 1979px #fff, 1569px 1753px #fff,
    335px 491px #fff, 1618px 1237px #fff, 362px 1735px #fff, 105px 489px #fff,
    806px 836px #fff, 1523px 781px #fff, 411px 1405px #fff, 858px 220px #fff,
    273px 89px #fff;
}

@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
}
</style>
