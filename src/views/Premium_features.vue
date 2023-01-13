<template>
  <div class="premium-features-page">
    <!-- Navbar -->
    <homepageHeader />

    <b-container class="main-section">
      <div class="feature-card-container mt-5">
        <b-card class="feature-card rounded-lg" no-body>
          <div class="icon">
            <img :src="content.middel.icon_image_1" />
            <!-- <svg
              xmlns="http://www.w3.org/2000/svg"
              height="35"
              class="icon-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg> -->
          </div>
          <div class="content">
            <h2 class="title" v-html="content.middel.icon_title_1">
              <!-- Let them know you fit the mold they have been praying for -->
            </h2>
            <p class="subtitle" v-html="content.middel.icon_text_1">
              <!-- Step up your courting game by letting your top matches know you
              “Fancy” them. Make the first move by sending one (Fancy) and to be
              fancied in return. Turn up the experience of courting with our
              premium feature of “Fancy.”
              <br />
              It is statistically proven that “Fancy” threefolds the prospect of
              matches and uplifts the proceedings to top-drawer. All Qavah
              subscribers get one free “Fancy” per month. -->
            </p>
          </div>
        </b-card>

        <b-card class="feature-card rounded-lg" no-body>
          <div class="icon">
            <img :src="content.middel.icon_image_2" />
            <!-- <svg
              xmlns="http://www.w3.org/2000/svg"
              height="35"
              class="icon-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clip-rule="evenodd"
              />
            </svg> -->
          </div>
          <div class="content">
            <h2 class="title mb-2" v-html="content.middel.icon_title_2">
              <!-- Switch the Spotlight on yourself -->
            </h2>
            <p class="subtitle" v-html="content.middel.icon_text_2">
              <!-- Put your profile on the top of the pile with the “Spotlight”
              feature to stand out and get noticed by your budding mate. Let
              them know that you are pursuing courtship, so do not hesitate and
              come out of the closet.
              <br />
              The Spotlight will ensure ten times great profile views with just
              a tap. Why not make the most of your courting prospect and your
              time? -->
            </p>
          </div>
        </b-card>
      </div>

      <div class="feature-card-container-2 mt-4">
        <!-- Love Notes -->
        <b-card class="feature-card rounded-lg" no-body>
          <div class="icon">
            <b-img :src="content.bottom.icon_image_1"></b-img>
          </div>
          <div class="content">
            <h2 class="title" v-html="content.bottom.icon_title_1">
              <!-- Love Notes -->
            </h2>
            <p class="subtitle" v-html="content.bottom.icon_text_1">
              <!-- Add a short note to every Super Fancy you make. -->
            </p>
          </div>
        </b-card>

        <!-- Sojorn -->
        <b-card class="feature-card rounded-lg" no-body>
          <div class="icon">
            <b-img :src="content.bottom.icon_image_2"></b-img>
          </div>
          <div class="content">
            <h2 class="title" v-html="content.bottom.icon_title_2">
              <!-- Sojourn -->
            </h2>
            <p class="subtitle" v-html="content.bottom.icon_text_2">
              <!-- Vibe with other Israelites throughout the world using Qavah’s
              Sojourn pass! -->
            </p>
          </div>
        </b-card>

        <!-- Prestige -->
        <b-card class="feature-card rounded-lg" no-body>
          <div class="icon">
            <b-img :src="content.bottom.icon_image_3"></b-img>
          </div>
          <div class="content">
            <h2 class="title" v-html="content.bottom.icon_title_3">
              <!-- Prestige -->
            </h2>
            <p class="subtitle" v-html="content.bottom.icon_text_3">
              <!-- The uniqueness of Qavah Platinum is that it allows your profile to
              be instantly seen by the person or persons that you Fancy and
              Super Fancy. -->
            </p>
          </div>
        </b-card>

        <!-- Exclusive -->
        <b-card class="feature-card rounded-lg" no-body>
          <div class="icon">
            <b-img :src="content.footer.icon_image_1"></b-img>
            <!-- <b-img
            src="data:image.webp;base64,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"
          ></b-img> -->
          </div>
          <div class="content">
            <h2 class="title" v-html="content.footer.icon_title_1">
              <!-- Exclusive -->
            </h2>
            <p class="subtitle" v-html="content.footer.icon_text_3">
              <!-- Glance through the top-ranked profiles attuned especially for you
              every day. -->
            </p>
          </div>
        </b-card>

        <!-- Read Receipts -->
        <b-card class="feature-card rounded-lg" no-body>
          <div class="icon pt-2 pb-3">
            <i>
              <svg
                height="85"
                id="Layer_1"
                style="enable-background: new 0 0 512 512"
                version="1.1"
                viewBox="0 0 512 512"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g id="Layer_1_1_">
                  <circle
                    cx="256.42"
                    cy="251.99"
                    r="243"
                    style="fill: #125e6e"
                  />
                </g>
                <g id="Layer_2">
                  <g id="Favorite" />
                  <g>
                    <polygon
                      points="256,71.599 256,500.659 66.7,500.659     66.7,71.599 96.83,94.399 108.23,77.049 132.02,100.349 154.33,71.599 181.59,93.909 201.71,73.589 226.69,95.389   "
                      style="
                        fill: #ffffff;
                        stroke: #cccccc;
                        stroke-width: 3;
                        stroke-miterlimit: 10;
                      "
                    />
                    <g style="opacity: 0.7; adobe-blending-mode: multiply">
                      <rect
                        height="10.218"
                        style="fill: #8299ce; adobe-blending-mode: normal"
                        width="153.266"
                        x="85.221"
                        y="133.619"
                      />
                    </g>
                    <g style="opacity: 0.7; adobe-blending-mode: multiply">
                      <rect
                        height="10.218"
                        style="fill: #8299ce; adobe-blending-mode: normal"
                        width="83.03"
                        x="84.719"
                        y="394.809"
                      />
                    </g>
                    <g style="opacity: 0.7; adobe-blending-mode: multiply">
                      <rect
                        height="10.218"
                        style="fill: #8299ce; adobe-blending-mode: normal"
                        width="83.03"
                        x="84.719"
                        y="418.483"
                      />
                    </g>
                    <g style="opacity: 0.7; adobe-blending-mode: multiply">
                      <rect
                        height="10.218"
                        style="fill: #8299ce; adobe-blending-mode: normal"
                        width="83.03"
                        x="84.719"
                        y="444.366"
                      />
                    </g>
                    <g style="opacity: 0.7; adobe-blending-mode: multiply">
                      <g style="adobe-blending-mode: normal">
                        <rect
                          height="10.218"
                          style="fill: #8299ce"
                          width="153.266"
                          x="85.221"
                          y="354.299"
                        />
                      </g>
                      <g style="adobe-blending-mode: normal">
                        <rect
                          height="10.218"
                          style="fill: #8299ce"
                          width="153.266"
                          x="85.221"
                          y="332.299"
                        />
                      </g>
                      <g style="adobe-blending-mode: normal">
                        <rect
                          height="10.218"
                          style="fill: #8299ce"
                          width="153.266"
                          x="85.221"
                          y="310.299"
                        />
                      </g>
                      <g style="adobe-blending-mode: normal">
                        <rect
                          height="10.218"
                          style="fill: #8299ce"
                          width="153.266"
                          x="85.221"
                          y="288.299"
                        />
                      </g>
                      <g style="adobe-blending-mode: normal">
                        <rect
                          height="10.218"
                          style="fill: #8299ce"
                          width="153.266"
                          x="85.221"
                          y="266.299"
                        />
                      </g>
                      <g style="adobe-blending-mode: normal">
                        <rect
                          height="10.218"
                          style="fill: #8299ce"
                          width="153.266"
                          x="85.221"
                          y="244.299"
                        />
                      </g>
                      <g style="adobe-blending-mode: normal">
                        <rect
                          height="10.218"
                          style="fill: #8299ce"
                          width="153.266"
                          x="85.221"
                          y="222.299"
                        />
                      </g>
                      <g style="adobe-blending-mode: normal">
                        <rect
                          height="10.218"
                          style="fill: #8299ce"
                          width="153.266"
                          x="85.221"
                          y="200.299"
                        />
                      </g>
                      <g style="adobe-blending-mode: normal">
                        <rect
                          height="10.218"
                          style="fill: #8299ce"
                          width="153.266"
                          x="85.221"
                          y="178.299"
                        />
                      </g>
                      <g style="adobe-blending-mode: normal">
                        <rect
                          height="10.218"
                          style="fill: #8299ce"
                          width="153.266"
                          x="85.221"
                          y="156.299"
                        />
                      </g>
                    </g>
                    <g>
                      <path
                        d="M256,180.389v201.73     l-80.18,10.82c-11.07,1.5-21.44-7.16-23.06-19.22l-11.41-84.65l-3.2-23.67l-2.46-18.19l-3.74-27.76     c-1.63-12.05,6.1-23.16,17.16-24.64l27.81-3.75L256,180.389z"
                        style="
                          opacity: 0.2;
                          fill: #231f20;
                          adobe-blending-mode: multiply;
                          enable-background: new;
                        "
                      />
                    </g>
                    <g>
                      <path
                        d="M470.222,327.189c1.564,11.635-6.206,22.366-17.265,23.863l-186.137,25.09l-82.493,11.129     c-11.069,1.498-21.397-6.8-22.959-18.425l-10.993-81.553l-3.085-22.802l-2.365-17.521l-3.606-26.748     c-1.571-11.614,6.207-22.356,17.268-23.843l27.809-3.748l111.271-15.018l10.505-1.412l119.033-16.051     c11.07-1.488,21.407,6.799,22.969,18.424l17.353,128.645L470.222,327.189z"
                        style="fill: #ba334d"
                      />
                      <path
                        d="M470.222,327.189     c1.564,11.635-6.206,22.366-17.265,23.863l-186.137,25.09l-82.493,11.129c-11.069,1.498-21.397-6.8-22.959-18.425l-10.993-81.553     l-3.085-22.802l-2.365-17.521l-3.606-26.748c-1.571-11.614,6.207-22.356,17.268-23.843l27.809-3.748l111.271-15.018l10.505-1.412     l119.033-16.051c11.07-1.488,21.407,6.799,22.969,18.424l17.353,128.645L470.222,327.189z"
                        style="
                          fill: #d51920;
                          adobe-blending-mode: multiply;
                          enable-background: new;
                        "
                      />
                    </g>
                    <path
                      d="M472.654,324.001c1.564,11.635-6.206,22.366-17.265,23.863l-186.137,25.091l-82.493,11.129    c-11.069,1.498-21.397-6.8-22.959-18.425l-10.993-81.553l-3.085-22.802l-2.365-17.521l-3.606-26.748    c-1.571-11.614,6.207-22.356,17.268-23.843l27.809-3.748l111.271-15.018l10.505-1.412l119.033-16.051    c11.07-1.488,21.407,6.799,22.969,18.424l17.353,128.645L472.654,324.001z"
                      style="fill: #ba334d"
                    />
                    <path
                      d="M244.449,342.31c0.429,3.194-2.224,6.186-5.927,6.684l-49.158,6.608    c-3.703,0.498-7.052-1.688-7.481-4.882l-0.65-4.839c-0.429-3.194,2.224-6.186,5.927-6.684l49.158-6.608    c3.703-0.498,7.052,1.688,7.481,4.882L244.449,342.31z"
                      style="fill: #e3e3e3"
                    />
                    <path
                      d="M314.47,332.898c0.429,3.194-2.224,6.186-5.927,6.684l-49.158,6.608    c-3.703,0.498-7.052-1.688-7.481-4.882l-0.65-4.839c-0.429-3.194,2.224-6.186,5.927-6.684l49.158-6.608    c3.703-0.498,7.052,1.688,7.481,4.882L314.47,332.898z"
                      style="fill: #e3e3e3"
                    />
                    <path
                      d="M385.355,323.37c0.429,3.194-2.224,6.186-5.927,6.684l-49.158,6.608    c-3.703,0.498-7.052-1.688-7.481-4.882l-0.65-4.839c-0.429-3.194,2.224-6.186,5.927-6.684l49.158-6.608    c3.703-0.498,7.052,1.688,7.481,4.882L385.355,323.37z"
                      style="fill: #e3e3e3"
                    />
                    <path
                      d="M455.808,313.9c0.429,3.194-2.224,6.186-5.927,6.684l-49.158,6.608    c-3.703,0.498-7.052-1.688-7.481-4.881l-0.65-4.839c-0.429-3.194,2.224-6.186,5.927-6.684l49.158-6.608    c3.703-0.498,7.052,1.688,7.481,4.881L455.808,313.9z"
                      style="fill: #e3e3e3"
                    />
                    <path
                      d="M322.341,261.791    c0.381,2.831-2.661,5.577-6.794,6.133l-126.398,16.99c-4.133,0.556-7.792-1.289-8.173-4.121l-5.33-39.655    c-0.381-2.831,2.661-5.577,6.794-6.132l126.398-16.99c4.133-0.556,7.792,1.289,8.173,4.121L322.341,261.791z"
                      id="XMLID_1_"
                      style="
                        fill: #f79497;
                        adobe-blending-mode: screen;
                        enable-background: new;
                      "
                    />
                    <g>
                      <g>
                        <path
                          d="M359.72,253.047c1.51,11.197,11.811,19.049,23.007,17.539l27.925-3.766      c11.197-1.51,19.049-11.811,17.539-23.007l-3.766-27.925c-1.51-11.197-11.811-19.049-23.007-17.539l-27.925,3.766      c-11.197,1.51-19.049,11.811-17.539,23.007L359.72,253.047z"
                          id="SVGID_17_"
                          style="fill: #f5ba3d"
                        />
                      </g>
                      <g>
                        <defs>
                          <path
                            d="M359.72,253.047c1.51,11.197,11.811,19.049,23.007,17.539l27.925-3.766       c11.197-1.51,19.049-11.811,17.539-23.007l-3.766-27.925c-1.51-11.197-11.811-19.049-23.007-17.539l-27.925,3.766       c-11.197,1.51-19.049,11.811-17.539,23.007L359.72,253.047z"
                            id="SVGID_1_"
                          />
                        </defs>
                        <clipPath id="SVGID_2_">
                          <use
                            style="overflow: visible"
                            xlink:href="#SVGID_1_"
                          />
                        </clipPath>
                        <path
                          d="M359.72,253.047c1.51,11.197,11.811,19.049,23.007,17.539l27.925-3.766      c11.197-1.51,19.049-11.811,17.539-23.007l-3.766-27.925c-1.51-11.197-11.811-19.049-23.007-17.539l-27.925,3.766      c-11.197,1.51-19.049,11.811-17.539,23.007L359.72,253.047z"
                          style="clip-path: url(#SVGID_2_); fill: #f5ba3d"
                        />
                      </g>
                      <g>
                        <defs>
                          <path
                            d="M359.72,253.047c1.51,11.197,11.811,19.049,23.007,17.539l27.925-3.766       c11.197-1.51,19.049-11.811,17.539-23.007l-3.766-27.925c-1.51-11.197-11.811-19.049-23.007-17.539l-27.925,3.766       c-11.197,1.51-19.049,11.811-17.539,23.007L359.72,253.047z"
                            id="SVGID_3_"
                          />
                        </defs>
                        <clipPath id="SVGID_4_">
                          <use
                            style="overflow: visible"
                            xlink:href="#SVGID_3_"
                          />
                        </clipPath>
                        <circle
                          cx="359.306"
                          cy="238.872"
                          r="41.741"
                          style="clip-path: url(#SVGID_4_); fill: #f5ba3d"
                        />
                      </g>
                      <g>
                        <defs>
                          <path
                            d="M359.72,253.047c1.51,11.197,11.811,19.049,23.007,17.539l27.925-3.766       c11.197-1.51,19.049-11.811,17.539-23.007l-3.766-27.925c-1.51-11.197-11.811-19.049-23.007-17.539l-27.925,3.766       c-11.197,1.51-19.049,11.811-17.539,23.007L359.72,253.047z"
                            id="SVGID_5_"
                          />
                        </defs>
                        <clipPath id="SVGID_6_">
                          <use
                            style="overflow: visible"
                            xlink:href="#SVGID_5_"
                          />
                        </clipPath>
                        <circle
                          cx="425.686"
                          cy="230.807"
                          r="41.741"
                          style="clip-path: url(#SVGID_6_); fill: #f5ba3d"
                        />
                      </g>
                      <g>
                        <defs>
                          <path
                            d="M359.72,253.047c1.51,11.197,11.811,19.049,23.007,17.539l27.925-3.766       c11.197-1.51,19.049-11.811,17.539-23.007l-3.766-27.925c-1.51-11.197-11.811-19.049-23.007-17.539l-27.925,3.766       c-11.197,1.51-19.049,11.811-17.539,23.007L359.72,253.047z"
                            id="SVGID_7_"
                          />
                        </defs>
                        <clipPath id="SVGID_8_">
                          <use
                            style="overflow: visible"
                            xlink:href="#SVGID_7_"
                          />
                        </clipPath>
                        <circle
                          cx="388.464"
                          cy="201.65"
                          r="41.741"
                          style="clip-path: url(#SVGID_8_); fill: #f5ba3d"
                        />
                      </g>
                      <g>
                        <defs>
                          <path
                            d="M359.72,253.047c1.51,11.197,11.811,19.049,23.007,17.539l27.925-3.766       c11.197-1.51,19.049-11.811,17.539-23.007l-3.766-27.925c-1.51-11.197-11.811-19.049-23.007-17.539l-27.925,3.766       c-11.197,1.51-19.049,11.811-17.539,23.007L359.72,253.047z"
                            id="SVGID_9_"
                          />
                        </defs>
                        <clipPath id="SVGID_10_">
                          <use
                            style="overflow: visible"
                            xlink:href="#SVGID_9_"
                          />
                        </clipPath>
                        <circle
                          cx="396.528"
                          cy="268.03"
                          r="41.741"
                          style="clip-path: url(#SVGID_10_); fill: #f5ba3d"
                        />
                      </g>
                    </g>
                    <g style="opacity: 0.7">
                      <path
                        d="M215.583,386.5l-0.19,9.231c6.505,0.426,12.786,2.304,16.434,4.518l-3.149,11.31     c-4.035-2.32-9.727-4.478-16.043-4.608c-5.539-0.114-9.373,1.947-9.453,5.833c-0.076,3.692,2.986,6.089,10.127,8.666     c10.326,3.712,17.319,8.716,17.126,18.143c-0.176,8.552-6.338,15.133-16.777,16.96l-0.19,9.232l-9.523-0.196l0.176-8.552     c-6.505-0.425-10.85-1.875-14.025-3.497l3.045-10.922c2.504,1.12,6.929,3.447,13.925,3.591c6.316,0.13,8.413-2.549,8.469-5.269     c0.066-3.207-3.293-5.318-11.489-8.598c-11.48-4.318-16.034-9.759-15.854-18.505c0.178-8.648,6.451-15.908,17.667-17.622     l0.204-9.911L215.583,386.5z"
                        style="fill: #8dc63f"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </i>
            <!-- <b-img
            src="data:image.webp;base64,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"
          ></b-img> -->
          </div>
          <div class="content">
            <h2 class="title">Read Receipts</h2>
            <p class="subtitle">
              It basically informs the users that their message has been read by
              the recipient.
            </p>
          </div>
        </b-card>
      </div>
      <div class="btn-container mt-4">
        <b-button class="custom-btn-1" @click="proceed"
          >Get Started Now</b-button
        >
      </div>
    </b-container>

    <sectionFooter />
  </div>
</template>

<script>
import homepageHeader from "../components/Landingpage/homepageHeader.vue";
import sectionFooter from "../components/Landingpage/footerComponent.vue";
import { mapGetters } from "vuex";
import { apiUrl } from "@/constants/config";
import axios from "axios";
export default {
  components: {
    sectionFooter,
    homepageHeader,
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  data() {
    return {
      content: null,
    };
  },

  methods: {
    proceed() {
      if (this.currentUser) {
        this.$router.push("/dashboard/powerups");
      } else {
        this.$router.push("/user/login");
      }
    },
    get_content() {
      axios
        .get(`${apiUrl}/product/premium-feature`)
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
    this.get_content();
  },
};
</script>

<style scoped>
/* Global Classes */

/* Mobile Screen Classes */
@media only screen and (max-width: 700px) {
  .feature-card-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
}

/* Laptop Screen Classes */
@media only screen and (min-width: 700px) {
  .feature-card-container {
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 1rem;
  }
}

@media only screen and (max-width: 1150px) {
  .main-section {
    margin-top: 100px;
  }
}

@media only screen and (min-width: 1150px) {
  .main-section {
    margin-top: 100px;
  }
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

.premium-features-page {
  background-image: url("@/assets/watermark.jpeg");
  /* margin-top: 129px; */
}

.content-con {
  text-align: center;
  width: 100%;
  /* max-width: 500px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

.custom-nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.feature-card-container-2 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.feature-card-container-2 .feature-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0.5rem;
  width: 300px;
  padding: 1rem;
}

.feature-card-container-2 .feature-card .content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.feature-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  max-width: 400px;
  min-height: 258px;
  text-align: center;
  padding: 1rem;
}

.feature-card .icon .icon-1 {
  fill: #3bcaf7;
  stroke: #3bcaf7;
}

.feature-card .icon .icon-2 {
  fill: #a31fec;
  stroke: #a31fec;
}

.feature-card .content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.main-section {
  min-height: calc(84vh - 90px);
}
</style>
