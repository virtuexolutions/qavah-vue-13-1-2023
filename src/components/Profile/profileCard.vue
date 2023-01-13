<template>
  <div style="background: transparent !important">
    <!-- Profile Card -->
    <b-card class="profile-card rounded-lg" no-body>
      <b-tabs align="right" style="background-color: transparent !important">
        <b-tab
          title="View"
          style="background-color: transparent !important"
          active
        >
          <div>
            <!-- Profile Image Section -->
            <b-overlay :show="profileImageSectionLoader">
              <template #overlay>
                <GridLoader
                  class="custom-class"
                  color="#93652b"
                  :loading="profileImageSectionLoader"
                  :size="10"
                  sizeUnit="px"
                />
              </template>
              <div class="profile-card-inner pt-3">
                <div
                  class="profile-image-display"
                  v-if="user.profile_images.length > 0"
                >
                  <b-img
                    height="200"
                    width="200"
                    rounded="lg"
                    :src="user.profile_images[0].url"
                  ></b-img>

                  <div class="count-bubble">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="profileImageToggleIcon"
                      @click="index = 0"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>

                  <vue-gallery-slideshow
                    :images="user.profile_images"
                    :index="index"
                    @close="index = null"
                  >
                  </vue-gallery-slideshow>
                </div>
                <div class="profile-image-display" v-else>
                  <b-img height="200" width="200" rounded="lg"></b-img>

                  <div class="count-bubble">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="profileImageToggleIcon"
                      @click="index = 0"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <div class="content">
                  <h2 class="title text-capitalize">
                    {{ user.profileName || "" }}
                  </h2>
                  <h6 class="info">{{ user.age }} Years Old</h6>
                  <!-- {{ user.basicInfo.location.city }} -->
                  <p class="info">
                    {{ user.location.city }},
                    {{ user.location.state_abbr }}
                  </p>
                </div>
              </div>
            </b-overlay>

            <!-- Summary & About me Section -->
            <b-overlay :show="summaryAboutSectionLoader">
              <template #overlay>
                <GridLoader
                  class="custom-class"
                  color="#93652b"
                  :loading="summaryAboutSectionLoader"
                  :size="10"
                  sizeUnit="px"
                />
              </template>
              <div class="summary mt-4">
                <h2 class="mb-4">Summary</h2>
                <!-- <b-row>
                  <b-col lg="10" md="12" sm="12">
                    <p>{{ showSummary }}</p>

                    <b-link
                      v-if="!showFullSummary && showSummaryButtons"
                      @click="showFullSummary = true"
                      >See more...</b-link
                    >

                    <b-link
                      v-if="showFullSummary && showSummaryButtons"
                      @click="showFullSummary = false"
                      >See less...</b-link
                    >
                  </b-col>
                </b-row> -->
              </div>

              <div class="about mt-4">
                <h2 class="mb-4">About Me</h2>

                <b-row class="icons-container">
                  <!-- Marital Status -->
                  <b-col lg="6" md="6" sm="12">
                    <div class="icon-item">
                      <div class="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="10"
                          viewBox="0 0 64 64"
                        >
                          <title />
                          <g data-name="Outline putus" id="Outline_putus">
                            <path
                              d="M41.8906,15.2275a1,1,0,1,0-.8613,1.8047,20.9992,20.9992,0,1,1-17.252-.3642,18.5173,18.5173,0,0,1,1.7618-.6568,21.366,21.366,0,0,1,11.8427-.3134l.06.02a.9972.9972,0,0,0,1.2666-.6294.96.96,0,0,0,.03-.2417l2.19-5.4751A1,1,0,0,0,40.707,8.293l-3-3-.01-.0069a1.0226,1.0226,0,0,0-.1561-.1043.9909.9909,0,0,0-.1739-.1088c-.0058-.0023-.0094-.0073-.0152-.01a.9569.9569,0,0,0-.1613-.0257A.9747.9747,0,0,0,37,5H27a.9993.9993,0,0,0-.707.293l-3,3a1,1,0,0,0-.15,1.2216l2.6145,4.3577c-.2763.0777-.5559.1464-.8284.2346a20.3172,20.3172,0,0,0-1.94.7232,23.0013,23.0013,0,1,0,18.9023.3974ZM26.8215,7.5924,27.496,9H25.4136ZM28.7545,7h6.8023l-.75,2h-5.094Zm9.831,2H36.9432l.448-1.1946Zm-1.4968,4.5839q-.8645-.1958-1.7429-.3243L36.1932,11h1.9292ZM34.0568,11l-.7676,2.0469q-.8261-.0456-1.6531-.0327L30.671,11ZM26.366,11h2.0882l1.0291,2.1479q-.8463.0915-1.6811.2455Z"
                            />
                            <path
                              d="M19.6875,24.2358a1,1,0,0,0-1.4092.1148,17.9862,17.9862,0,1,0,3.1348-2.9092,1,1,0,1,0,1.1777,1.6162,16.0065,16.0065,0,1,1-2.789,2.5879A.9994.9994,0,0,0,19.6875,24.2358Z"
                            />
                          </g>
                        </svg>
                      </div>
                      <div
                        class="
                          d-flex
                          flex-column
                          justify-content-start
                          align-items-start
                        "
                      >
                        <p class="p-0 m-0">Marital Status:</p>
                        <p class="font-weight-bold p-0 m-0">
                          {{ user.maritalStatus }}
                        </p>
                      </div>
                    </div>
                  </b-col>
                  <!-- Relationship Seeking -->
                  <b-col lg="6" md="6" sm="12">
                    <div class="icon-item">
                      <div class="icon">
                        <svg
                          viewBox="0 0 24 24"
                          height="10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title />
                          <g id="Card">
                            <path
                              class="cls-1"
                              d="M17,15a3,3,0,1,0-3-3,3,3,0,0,0,3,3,5,5,0,0,0-5,5v1a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V20A5,5,0,0,0,17,15Zm-1-3a1,1,0,1,1,1,1A1,1,0,0,1,16,12Zm-2,8h0a3,3,0,0,1,6,0Z"
                            />
                            <path
                              class="cls-1"
                              d="M3,15h8a1,1,0,0,0,1-1V13A5,5,0,0,0,7,8,3,3,0,1,0,4,5,3,3,0,0,0,7,8a5,5,0,0,0-5,5v1A1,1,0,0,0,3,15ZM6,5A1,1,0,1,1,7,6,1,1,0,0,1,6,5ZM4,13a3,3,0,0,1,6,0H4Z"
                            />
                            <path
                              class="cls-1"
                              d="M21,2H13a1,1,0,0,0,0,2h7V6a1,1,0,0,0,2,0V3A1,1,0,0,0,21,2Z"
                            />
                            <path
                              class="cls-1"
                              d="M10,22a1,1,0,0,0,0-2H4V18a1,1,0,0,0-2,0v3a1,1,0,0,0,1,1Z"
                            />
                          </g>
                        </svg>
                      </div>

                      <div
                        class="
                          d-flex
                          flex-column
                          justify-content-start
                          align-items-start
                        "
                      >
                        <p class="p-0 m-0">Relationship You Are Seeking:</p>
                        <p class="font-weight-bold p-0 m-0">
                          {{ user.relationshipIAmSeeking }}
                        </p>
                      </div>
                    </div>
                  </b-col>
                  <!-- Living Situation -->
                  <b-col lg="6" md="6" sm="12">
                    <div class="icon-item">
                      <div class="icon">
                        <svg
                          viewBox="0 0 64 64"
                          height="10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title />
                          <g id="House">
                            <path
                              d="M48,41H40a1,1,0,0,0-1,1V52a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V42A1,1,0,0,0,48,41Zm-1,2v2H41V43Zm-6,8V47h6v4Z"
                            />
                            <path
                              d="M52,37H12a1,1,0,0,0,0,2H52a1,1,0,0,0,0-2Z"
                            />
                            <path
                              d="M32,35a4,4,0,1,0-4-4A4,4,0,0,0,32,35Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,32,29Z"
                            />
                            <path
                              d="M60,59H58V30s0-.07,0-.11a1.18,1.18,0,0,0,0-.2.67.67,0,0,0-.08-.17.91.91,0,0,0-.11-.16.67.67,0,0,0-.15-.14s-.05-.06-.09-.08l-25-15a1,1,0,0,0-1,0l-25,15s-.06.06-.09.08a.67.67,0,0,0-.15.14.91.91,0,0,0-.11.16.67.67,0,0,0-.08.17,1.18,1.18,0,0,0,0,.2S6,30,6,30V59H4a1,1,0,0,0,0,2H60a1,1,0,0,0,0-2ZM17,59V43h8V59Zm10,0V42a1,1,0,0,0-1-1H16a1,1,0,0,0-1,1V59H8V30.57l24-14.4,24,14.4V59Z"
                            />
                          </g>
                        </svg>
                      </div>

                      <div
                        class="
                          d-flex
                          flex-column
                          justify-content-start
                          align-items-start
                        "
                      >
                        <p class="p-0 m-0">Living Situation:</p>
                        <p class="font-weight-bold p-0 m-0">
                          {{ user.livingSituation }}
                        </p>
                      </div>
                    </div>
                  </b-col>
                  <!-- Do You Have Children -->
                  <b-col lg="6" md="6" sm="12">
                    <div class="icon-item">
                      <div class="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          id="Icons"
                          style="enable-background: new 0 0 32 32"
                          version="1.1"
                          viewBox="0 0 32 32"
                          xml:space="preserve"
                          height="10"
                        >
                          <path class="st0" d="M11.2,21c0.4,1.2,1.5,2,2.8,2" />
                          <line class="st0" x1="13" x2="13" y1="17" y2="19" />
                          <line class="st0" x1="19" x2="19" y1="17" y2="19" />
                          <path
                            class="st0"
                            d="M17.9,3.3c2.3,1.9,3.1,5.2,1.7,7.9c-1.3,2.5-4.4,3.4-6.8,2.1c-2-1-2.7-3.5-1.7-5.5c0.8-1.6,2.8-2.2,4.4-1.4  c1.3,0.7,1.8,2.2,1.1,3.5"
                          />
                          <path
                            class="st0"
                            d="M11.9,6.8c-3.2,1.3-5.6,4-6.5,7.3C4,14.3,3,15.5,3,17c0,1.5,1,2.7,2.4,2.9C6.7,24.6,10.9,28,16,28  s9.3-3.4,10.6-8.1C28,19.7,29,18.5,29,17c0-1.5-1-2.7-2.4-2.9c-0.9-3.3-3.3-6-6.5-7.3"
                          />
                        </svg>
                      </div>

                      <div
                        class="
                          d-flex
                          flex-column
                          justify-content-start
                          align-items-start
                        "
                      >
                        <p class="p-0 m-0">Do You Have Children:</p>
                        <p class="font-weight-bold p-0 m-0">
                          {{ user.doYouHaveChildren }}
                        </p>
                      </div>
                    </div>
                  </b-col>
                  <!-- Do You Want More Children -->
                  <b-col lg="6" md="6" sm="12">
                    <div class="icon-item">
                      <div class="icon">
                        <svg
                          id="Icons_Baby"
                          height="10"
                          overflow="hidden"
                          version="1.1"
                          viewBox="0 0 96 96"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <circle cx="48" cy="20.5" r="12.5" />
                          <path
                            d=" M 57 62.5 C 57 62.6 57 62.7 57 62.8 C 53.5 63.1 50.9 66 51 69.5 C 51 70.5 51.3 71.5 51.8 72.3 C 50.7 72.7 49.3 72.9 47.8 72.9 C 46.2 72.9 44.9 72.7 43.9 72.3 C 45.4 70.1 45.4 67.1 43.8 64.8 C 42.6 63.2 40.9 62.2 39 62 L 39 60 L 57 60 L 57 62.5 Z M 76.2 44.2 L 59 35.2 C 58.6 35.1 58.2 35 57.8 35 L 39 35 C 38.5 35 38.1 35.1 37.6 35.2 L 19.6 45.2 C 17.5 46 16.5 48.3 17.2 50.3 C 17.8 52 19.4 53 21 53 C 21.5 53 21.9 52.9 22.4 52.8 L 35 46.2 C 35 46.2 35 62.7 35 63 C 34.8 63.1 26.8 68.7 26.8 68.7 C 25.1 69.9 24.6 72.3 25.7 74.1 L 32.7 85.1 C 33.9 87 36.4 87.5 38.2 86.3 C 40 85.1 40.6 82.6 39.4 80.8 L 36 75.3 L 38.2 75.3 C 38.9 75.3 39.6 75.2 40.3 75 C 42.1 76.2 44.5 76.9 47.7 76.9 C 50.7 76.9 53.1 76.2 55 75.2 C 55.8 75.6 56.8 75.7 57.8 75.7 L 59.6 75.6 L 56 80.6 C 54.7 82.4 55.1 84.9 56.9 86.2 C 58.7 87.5 61.2 87.1 62.5 85.3 L 70.5 74.3 C 70.6 74.2 70.7 74.1 70.7 73.9 C 71.8 72 71.1 69.5 69.2 68.4 L 61 63.8 C 61 63.4 61 45.8 61 45.8 L 73.8 51.9 C 74.2 52 74.6 52.1 75 52.1 C 76.7 52.1 78.3 51 78.8 49.3 C 79.5 47.1 78.3 44.9 76.2 44.2 Z"
                          />
                        </svg>
                      </div>
                      <div
                        class="
                          d-flex
                          flex-column
                          justify-content-start
                          align-items-start
                        "
                      >
                        <p class="p-0 m-0">Do You Want More Children?</p>
                        <p class="font-weight-bold p-0 m-0">
                          {{ user.doYouWantMoreChildren }}
                        </p>
                      </div>
                    </div>
                  </b-col>

                  <!-- Body Type -->
                  <b-col lg="6" md="6" sm="12">
                    <div class="icon-item">
                      <div class="icon">
                        <svg
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                          height="10"
                        >
                          <circle
                            cx="256"
                            cy="56"
                            fill="none"
                            r="40"
                            stroke="#000"
                            stroke-miterlimit="10"
                            stroke-width="32"
                          />
                          <path
                            d="M199.3,295.62h0l-30.4,172.2a24,24,0,0,0,19.5,27.8,23.76,23.76,0,0,0,27.6-19.5l21-119.9v.2s5.2-32.5,17.5-32.5h3.1c12.5,0,17.5,32.5,17.5,32.5v-.1l21,119.9a23.92,23.92,0,1,0,47.1-8.4l-30.4-172.2-4.9-29.7c-2.9-18.1-4.2-47.6.5-59.7,4-10.4,14.13-14.2,23.2-14.2H424a24,24,0,0,0,0-48H88a24,24,0,0,0,0,48h92.5c9.23,0,19.2,3.8,23.2,14.2,4.7,12.1,3.4,41.6.5,59.7Z"
                            fill="none"
                            stroke="#000"
                            stroke-miterlimit="10"
                            stroke-width="32"
                          />
                        </svg>
                      </div>

                      <div
                        class="
                          d-flex
                          flex-column
                          justify-content-start
                          align-items-start
                        "
                      >
                        <p class="p-0 m-0">Body Type:</p>
                        <p class="font-weight-bold p-0 m-0">
                          {{ user.bodyType }}
                        </p>
                      </div>
                    </div>
                  </b-col>

                  <!-- Height -->
                  <b-col lg="6" md="6" sm="12">
                    <div class="icon-item">
                      <div class="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          enable-background="new 0 0 64 64"
                          height="10"
                          version="1.1"
                          viewBox="0 0 64 64"
                          xml:space="preserve"
                        >
                          <g id="Layer_2">
                            <g>
                              <line
                                fill="none"
                                stroke="#231F20"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="2"
                                x1="16.044"
                                x2="19.782"
                                y1="17.44"
                                y2="19.313"
                              />
                              <line
                                fill="none"
                                stroke="#231F20"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="2"
                                x1="16.976"
                                x2="18.85"
                                y1="20.246"
                                y2="16.507"
                              />
                            </g>
                            <g>
                              <line
                                fill="none"
                                stroke="#231F20"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="2"
                                x1="45.739"
                                x2="49.478"
                                y1="42.361"
                                y2="44.235"
                              />
                              <line
                                fill="none"
                                stroke="#231F20"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="2"
                                x1="46.672"
                                x2="48.545"
                                y1="45.167"
                                y2="41.429"
                              />
                            </g>
                            <g>
                              <line
                                fill="none"
                                stroke="#231F20"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                x1="24.389"
                                x2="26.475"
                                y1="18.018"
                                y2="19.063"
                              />
                              <line
                                fill="none"
                                stroke="#231F20"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                x1="24.909"
                                x2="25.955"
                                y1="19.583"
                                y2="17.497"
                              />
                            </g>
                            <g>
                              <line
                                fill="none"
                                stroke="#231F20"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                x1="38.272"
                                x2="40.358"
                                y1="43.881"
                                y2="44.927"
                              />
                              <line
                                fill="none"
                                stroke="#231F20"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                x1="38.792"
                                x2="39.838"
                                y1="45.447"
                                y2="43.361"
                              />
                            </g>
                          </g>
                          <g id="Layer_1">
                            <g>
                              <rect
                                fill="none"
                                height="48.075"
                                stroke="#231F20"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="2"
                                transform="matrix(0.7071 0.7071 -0.7071 0.7071 32 -13.2548)"
                                width="9.121"
                                x="27.439"
                                y="7.962"
                              />
                              <g>
                                <line
                                  fill="none"
                                  stroke="#231F20"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-miterlimit="10"
                                  stroke-width="2"
                                  x1="29.062"
                                  x2="32.793"
                                  y1="33.926"
                                  y2="37.657"
                                />
                                <line
                                  fill="none"
                                  stroke="#231F20"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-miterlimit="10"
                                  stroke-width="2"
                                  x1="28.026"
                                  x2="30.29"
                                  y1="37.896"
                                  y2="40.16"
                                />
                                <line
                                  fill="none"
                                  stroke="#231F20"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-miterlimit="10"
                                  stroke-width="2"
                                  x1="25.46"
                                  x2="27.723"
                                  y1="40.463"
                                  y2="42.727"
                                />
                                <line
                                  fill="none"
                                  stroke="#231F20"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-miterlimit="10"
                                  stroke-width="2"
                                  x1="21.416"
                                  x2="25.146"
                                  y1="41.573"
                                  y2="45.303"
                                />
                                <line
                                  fill="none"
                                  stroke="#231F20"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-miterlimit="10"
                                  stroke-width="2"
                                  x1="20.38"
                                  x2="22.644"
                                  y1="45.542"
                                  y2="47.806"
                                />
                                <path
                                  d="     M20.077,50.373"
                                  fill="none"
                                  stroke="#231F20"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-miterlimit="10"
                                  stroke-width="2"
                                />
                                <path
                                  d="     M17.814,48.109"
                                  fill="none"
                                  stroke="#231F20"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-miterlimit="10"
                                  stroke-width="2"
                                />
                                <line
                                  fill="none"
                                  stroke="#231F20"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-miterlimit="10"
                                  stroke-width="2"
                                  x1="44.383"
                                  x2="48.114"
                                  y1="18.605"
                                  y2="22.336"
                                />
                                <path
                                  d="     M50.603,19.846"
                                  fill="none"
                                  stroke="#231F20"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-miterlimit="10"
                                  stroke-width="2"
                                />
                                <path
                                  d="     M48.34,17.583"
                                  fill="none"
                                  stroke="#231F20"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-miterlimit="10"
                                  stroke-width="2"
                                />
                                <line
                                  fill="none"
                                  stroke="#231F20"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-miterlimit="10"
                                  stroke-width="2"
                                  x1="43.347"
                                  x2="45.611"
                                  y1="22.575"
                                  y2="24.839"
                                />
                                <line
                                  fill="none"
                                  stroke="#231F20"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-miterlimit="10"
                                  stroke-width="2"
                                  x1="40.781"
                                  x2="43.045"
                                  y1="25.142"
                                  y2="27.405"
                                />
                                <line
                                  fill="none"
                                  stroke="#231F20"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-miterlimit="10"
                                  stroke-width="2"
                                  x1="36.737"
                                  x2="40.468"
                                  y1="26.251"
                                  y2="29.982"
                                />
                                <line
                                  fill="none"
                                  stroke="#231F20"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-miterlimit="10"
                                  stroke-width="2"
                                  x1="35.701"
                                  x2="37.965"
                                  y1="30.221"
                                  y2="32.485"
                                />
                                <line
                                  fill="none"
                                  stroke="#231F20"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-miterlimit="10"
                                  stroke-width="2"
                                  x1="33.135"
                                  x2="35.398"
                                  y1="32.788"
                                  y2="35.051"
                                />
                              </g>
                            </g>
                          </g>
                          <g id="Layer_3" />
                        </svg>
                      </div>

                      <div
                        class="
                          d-flex
                          flex-column
                          justify-content-start
                          align-items-start
                        "
                      >
                        <p class="p-0 m-0">Height:</p>
                        <p class="font-weight-bold p-0 m-0">
                          {{ user.height.feet }}' feet &
                          {{ user.height.inches }}'' inches
                        </p>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </div>
            </b-overlay>
          </div>

          <!-- Profile Images -->
          <b-overlay :show="profileImagesLoader">
            <template #overlay>
              <GridLoader
                class="custom-class"
                color="#93652b"
                :loading="profileImagesLoader"
                :size="10"
                sizeUnit="px"
              />
            </template>
            <div>
              <div class="profile-images mt-4">
                <h2 class="mb-4">Profile Images</h2>

                <div class="d-flex p-4" v-if="user.profile_images.length > 0">
                  <div class="last-image rounded-lg" @click="index = 0">
                    <span class="image-count"
                      >+
                      {{ user.profile_images.length }}
                    </span>
                    <b-img
                      class="last-profile-image"
                      :src="user.profile_images[0].url"
                    ></b-img>
                  </div>
                </div>

                <!-- :images="images"   -->
                <vue-gallery-slideshow
                  :images="transformImageArray(user.profile_images)"
                  :index="index"
                  @close="index = null"
                >
                </vue-gallery-slideshow>
              </div>
            </div>
          </b-overlay>

          <!-- Gallery Images -->
          <b-overlay :show="galleryImagesLoader">
            <template #overlay>
              <GridLoader
                class="custom-class"
                color="#93652b"
                :loading="galleryImagesLoader"
                :size="10"
                sizeUnit="px"
              />
            </template>
            <div class="mt-4">
              <div class="profile-images mt-4">
                <h2 class="mb-4">Gallery</h2>

                <div class="gallery-images-inner p-5">
                  <draggable
                    class="images-container row"
                    v-model="user.gallery_images"
                    draggable=".image-wrapper"
                    @update="galleryImagesDragEvent($event)"
                  >
                    <div
                      class="image-wrapper"
                      v-for="(image, i) in user.gallery_images"
                      :key="i"
                    >
                      <b-img
                        class="profile-image rounded-lg"
                        fluid
                        v-if="image.type == 'image'"
                        :src="image.url"
                        @click="galleryImagesIndex = i"
                      ></b-img>

                      <video
                        class="profile-image rounded-lg"
                        controls
                        v-else
                        :src="image.url"
                      ></video>
                    </div>
                  </draggable>

                  <vue-gallery-slideshow
                    :images="transformGalleryImageArray(user.gallery_images)"
                    :index="galleryImagesIndex"
                    @close="galleryImagesIndex = null"
                  >
                  </vue-gallery-slideshow>
                </div>
              </div>
            </div>
          </b-overlay>

          <b-overlay :show="dataLoader">
            <template #overlay>
              <GridLoader
                class="custom-class"
                color="#93652b"
                :loading="dataLoader"
                :size="10"
                sizeUnit="px"
              />
            </template>
            <b-card>
              <div class="more mt-4">
                <h2 class="my-4 text-center">More About Me</h2>

                <b-row>
                  <b-col lg="4" md="4" sm="12">
                    <div class="info-item">
                      <p class="title">Do You Drink?</p>
                      <b-badge
                        class="info-bubble"
                        pill
                        variant="outline-primary"
                        >{{ user.doYouDrink }}</b-badge
                      >
                    </div>
                    <div class="info-item">
                      <p class="title">How Often Do You Exercise</p>
                      <b-badge
                        class="info-bubble"
                        pill
                        variant="outline-primary"
                        >{{ user.howOftenDoYouExercise }}</b-badge
                      >
                    </div>
                    <!-- <div class="info-item">
                      <p class="title">Marital Status</p>
                      <b-badge
                        class="info-bubble"
                        pill
                        variant="outline-primary"
                        >{{ user.moreAboutMe.maritalStatus }}</b-badge
                      >
                    </div>
                    <div class="info-item">
                      <p class="title">Do You Have Children</p>
                      <b-badge
                        class="info-bubble"
                        pill
                        variant="outline-primary"
                        >{{ user.moreAboutMe.doYouHaveChildren }}</b-badge
                      >
                    </div> -->
                  </b-col>
                  <b-col lg="4" md="4" sm="12">
                    <!-- <div class="info-item">
                      <p class="title">Relationship you're seeking*</p>
                      <b-badge
                        class="info-bubble"
                        pill
                        variant="outline-primary"
                        >{{ user.moreAboutMe.relationshipIAmSeeking }}</b-badge
                      >
                    </div>
                    <div class="info-item">
                      <p class="title">Do You Want More Children</p>
                      <b-badge
                        class="info-bubble"
                        pill
                        variant="outline-primary"
                        >{{ user.moreAboutMe.doYouWantMoreChildren }}</b-badge
                      >
                    </div> -->
                    <div class="info-item">
                      <p class="title">Do You Smoke?</p>
                      <b-badge
                        class="info-bubble"
                        pill
                        variant="outline-primary"
                        >{{ user.doYouSmoke }}</b-badge
                      >
                    </div>

                    <div class="info-item">
                      <p class="title">Have Pets</p>
                      <b-badge
                        class="info-bubble"
                        pill
                        variant="outline-primary"
                        >{{ user.havePets }}</b-badge
                      >
                    </div>
                  </b-col>
                  <b-col lg="4" md="4" sm="12">
                    <!-- <div class="info-item">
                      <p class="title">Living Situation</p>
                      <b-badge
                        class="info-bubble"
                        pill
                        variant="outline-primary"
                        >{{ user.moreAboutMe.livingSituation }}</b-badge
                      >
                    </div>

                    <div class="info-item">
                      <p class="title">Body Type</p>
                      <b-badge
                        class="info-bubble"
                        pill
                        variant="outline-primary"
                        >{{ user.moreAboutMe.bodyType }}</b-badge
                      >
                    </div> -->
                    <div class="info-item">
                      <p class="title">Employment Status</p>
                      <b-badge
                        class="info-bubble"
                        pill
                        variant="outline-primary"
                        >{{ user.employmentStatus }}</b-badge
                      >
                    </div>
                    <div class="info-item">
                      <p class="title">Willing To Relocate</p>
                      <b-badge
                        class="info-bubble"
                        pill
                        variant="outline-primary"
                        >{{ user.willingToRelocate }}</b-badge
                      >
                    </div>
                  </b-col>
                </b-row>

                <div class="mt-4">
                  <div class="isrealite-data-unlock">
                    <h2 class="my-4 text-center">LifeStyle</h2>

                    <b-row>
                      <b-col lg="4" md="4" sm="12">
                        <div class="info-item">
                          <p class="title">I Believe I Am</p>
                          <b-badge
                            class="info-bubble"
                            pill
                            variant="outline-primary"
                            >{{ user.iBelieveIAM }}</b-badge
                          >
                        </div>
                        <div class="info-item">
                          <p class="title">Marital Belief System</p>
                          <b-badge
                            class="info-bubble"
                            pill
                            variant="outline-primary"
                            >{{ user.maritalBeliefSystem }}</b-badge
                          >
                        </div>
                        <div class="info-item">
                          <p class="title">Study Habits</p>

                          <span class="info-bubble-3">
                            {{ user.studyHabits }}
                          </span>
                        </div>
                      </b-col>
                      <b-col lg="4" md="4" sm="12">
                        <div class="info-item">
                          <p class="title">Years In Truth</p>
                          <b-badge
                            class="info-bubble"
                            pill
                            variant="outline-primary"
                            >{{ user.yearsInTruth }}</b-badge
                          >
                        </div>
                        <div class="info-item">
                          <p class="title">Any Affiliation</p>

                          <span class="info-bubble-3">
                            {{ user.anyAffiliation }}
                          </span>
                        </div>
                        <div class="info-item">
                          <p class="title">Spiritual Background</p>

                          <span class="info-bubble-3">
                            {{ user.spiritualBackground }}
                          </span>
                        </div>
                      </b-col>
                      <b-col lg="4" md="4" sm="12">
                        <div class="info-item">
                          <p class="title">Spiritual Value</p>
                          <b-badge
                            class="info-bubble"
                            pill
                            variant="outline-primary"
                            >{{ user.spiritualValue }}</b-badge
                          >
                        </div>

                        <div class="info-item">
                          <p class="title">Study Bible</p>
                          <b-badge
                            class="info-bubble"
                            pill
                            variant="outline-primary"
                            >{{ user.studyBible }}</b-badge
                          >
                        </div>
                      </b-col>
                    </b-row>

                    <h2 class="my-4 text-center">Values</h2>

                    <b-row>
                      <b-col lg="4" md="4" sm="12">
                        <div class="info-item">
                          <p class="title">Israelite Practice Keeping</p>
                          <span
                            class="info-bubble-4"
                            v-for="(
                              tag, index
                            ) in user.isrealite_practice_keeping"
                            :key="index"
                            >{{ tag.options }}</span
                          >
                        </div>
                      </b-col>
                      <b-col lg="4" md="4" sm="12">
                        <div class="info-item">
                          <p class="title">Kingdom Gifts</p>
                          <span
                            class="info-bubble-4"
                            v-for="(tag, index) in user.kingdom_gifts"
                            :key="index"
                            >{{ tag.options }}</span
                          >
                        </div>
                      </b-col>
                      <b-col lg="4" md="4" sm="12">
                        <div class="info-item">
                          <p class="title">Passions</p>
                          <span
                            class="info-bubble-4"
                            v-for="(tag, index) in user.passions"
                            :key="index"
                            >{{ tag.options }}</span
                          >
                        </div>
                      </b-col>
                    </b-row>
                  </div>
                </div>
              </div>
            </b-card>
          </b-overlay>
        </b-tab>
        <b-tab title="Edit" style="background-color: transparent !important">
          <profileEditPage
            :user="user"
            @profile-images-reordered="this.getProfile"
            @profile-updated="this.getProfile"
            @profile-image-removed="this.getProfile"
          />
        </b-tab>
      </b-tabs>
    </b-card>

    <!-- Modals -->
    <imageEditModal :oldimage="imageForEdit" :index="imageForEditIndex" />
  </div>
</template>

<script>
import { apiUrl, headers } from "@/constants/config";
import axios from "axios";
import { getCurrentUser } from "@/utils";
import { validationMixin } from "vuelidate";
const { required } = require("vuelidate/lib/validators");
import draggable from "vuedraggable";
import { PhotoCollageWrapper } from "vue-photo-collage";
import VueGallerySlideshow from "vue-gallery-slideshow";
import { mapGetters } from "vuex";

// Profile Edit Component
import profileEditPage from "./profileEditPage.vue";

// Modals
import imageEditModal from "./imageEditModal.vue";
import profileImageUploadModal from "./uploadProfileImage.vue";

import Vue from "vue";

export default {
  components: {
    PhotoCollageWrapper,
    VueGallerySlideshow,
    imageEditModal,
    profileImageUploadModal,
    draggable,
    profileEditPage,
  },
  data() {
    return {
      user: null,
      dataLoader: true,
      galleryImagesLoader: true,
      profileImagesLoader: true,
      profileImageSectionLoader: true,
      summaryAboutSectionLoader: true,
      premium: false,
      profileImagesIndex: 0,
      profileImageRemoveLoader: false,
      galleryImageRemoveLoader: false,
      imageForEdit: "",
      imageForEditIndex: "",
      imagesAfterSorting: [],

      galleryImagesIndex: null,
      index: null,
      collage: {
        width: "100%",
        height: ["150px", "150px"],
        layout: [2, 3],
        photos: [
          {
            source:
              "https://images.unsplash.com/photo-1517088455889-bfa75135412c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5548929376f93d8b1b7a21097df03bd&auto=format&fit=crop&w=749&q=80",
          },
          {
            source:
              "https://images.unsplash.com/photo-1526656892012-7b336603ed46?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=31c8e58b58c25dfcc18452ed29b52951&auto=format&fit=crop&w=334&q=80",
          },
          {
            source:
              "https://images.unsplash.com/photo-1521024221340-efe7d7fa239b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9ad8a99d809d3fa3a9e8dff3ecc81878&auto=format&fit=crop&w=750&q=80",
          },
          {
            source:
              "https://images.unsplash.com/photo-1523038793606-2fd28f837a85?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=919b76f4229e41416653aeb10e84e94a&auto=format&fit=crop&w=334&q=80",
          },
          {
            source:
              "https://images.unsplash.com/photo-1516832970803-325be7a92aa5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=93d7ac9abad6167aecb49ebd67fd5b6d&auto=format&fit=crop&w=751&q=80",
          },
          {
            source:
              "https://images.unsplash.com/photo-1526938972776-11558ad4de30?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=973795a277e861265b0fabbf4a96afe2&auto=format&fit=crop&w=750&q=80",
          },
          {
            source:
              "https://images.unsplash.com/photo-1464550838636-1a3496df938b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f22dbf6c13ea7c21e803aa721437b691&auto=format&fit=crop&w=888&q=80",
          },
        ],
        showNumOfRemainingPhotos: true,
      },
      url: null,
      showFullSummary: false,
      showSummaryButtons: false,
      person: {
        profileName: "Shalum",
        governmentName: "Andria",
        email: "shalum@4slash.com",
        password: "omair",
        birthday: "1996-02-12",
        height: {
          height: "5",
          inches: "12",
        },
        livingSituation: "Live Alone",
        doYouHaveChildren: "No",
        doYouWantMoreChildren: "No",
        iAm: "man",
        seeking: "women",
        profileImage:
          "data:image/jpeg;base64,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",

        age: "23",
        location: "GreenBoro, NC",

        summary:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis culpa consectetur minima repudiandae natus maximeexpedita. Architecto aliquid exercitationem ullam incidunt,corporis delectus, commodi nihil, distinctio repellat corruptieos accusamus maiores labore provident modi doloribus voluptasvoluptatem autem laboriosam iste vero porro quae at. Eius dictanulla impedit est fuga unde quia modi aperiam, suscipit expeditadignissimos voluptatem quis. Ut impedit modi, molestiasaspernatur nulla est amet reprehenderit suscipit facerecupiditate accusantium obcaecati similique recusandae verofacilis eaque maiores dolore, aut et provident eum rem. Nequequibusdam recusandae perferendis distinctio, expedita commodi!Alias expedita praesentium ex, consequatur sint fuga eveniet!",
        profileImages: [
          "https://cdn.britannica.com/01/166601-138-594B1683/discussion-Riches-DuSable-Museum-of-African-American.jpg?w=800&h=450&c=crop",
          "https://daily.jstor.org/wp-content/uploads/2021/07/the_social_distance_between_africa_and_african_americans_1050x700.jpg",
          "https://images.squarespace-cdn.com/content/v1/5e875f6f608bdc72a92cea19/1601932001141-XTNUDV9H28GXFOPG571V/image1.png",
        ],
        galleryImages: [
          "https://cdn.britannica.com/01/166601-138-594B1683/discussion-Riches-DuSable-Museum-of-African-American.jpg?w=800&h=450&c=crop",
          "https://daily.jstor.org/wp-content/uploads/2021/07/the_social_distance_between_africa_and_african_americans_1050x700.jpg",
          "https://images.squarespace-cdn.com/content/v1/5e875f6f608bdc72a92cea19/1601932001141-XTNUDV9H28GXFOPG571V/image1.png",
        ],
        maritalStatus: "Never Married",
        livingSituation: "Live Alone",
        doYouHaveChildren: "No",
        doYouWantMoreChildren: "No",
        bodyType: "Slim",
        aboutMe: "Very nice guy",
        doYouDrink: "Don't Drink",
        doYouSmoke: "Dont't Smoke",
        employmentStatus: "",
        willingToRelocate: "Not Willing To Relocate",
        relationshipIAmSeeking: "Friendship",
        havePets: "Cats",
        havePetsOthers: "",
        howOftenDoYouExercise: "No answer",
        iBelieveIAM: "i am a diaspora isrealite",
        spiritualBackground: "i was an orthodox jew",
        maritalBeliefSystem: "monogamy",
        anyAffiliation: "i go to an assembly",
        spiritualValue: "messianic",
        studyHabits: "torah only",
        studyBible: "king james version",
        isrealitePracticeKeeping: ["Sabbath days", "New Moons"],
        kingdomGifts: [
          "House Keeping",
          "Cooking",
          "Wellness Planning",
          "I Can Teach Meditation ",
          "I am a Herbalist ",
          "Sewing",
          "Home Repairs",
        ],
        passions: [
          "Singing",
          "Music",
          "Riding Horses",
          "Fitness /Exercising",
          "Bike Riding",
        ],
      },
      maritalStatusOptions: [
        {
          text: "Never Married",
          value: "Never Married",
        },
        {
          text: "Currently Seperated",
          value: "Currently Seperated",
        },
        {
          text: "Currently Engaged",
          value: "Currently Engaged",
        },
        {
          text: "Widowed",
          value: "Widowed",
        },
        {
          text: "Divorced",
          value: "Divorced",
        },
        {
          text: "Put away",
          value: "Put away",
        },
        {
          text: "It’s complicated",
          value: "It’s complicated",
        },
        {
          text: "Poly Marriage",
          value: "Poly Marriage",
        },
      ],
      doYouWantMoreChildrenOptions: [
        {
          text: "Yes",
          value: "Yes",
        },
        {
          text: "Not Sure",
          value: "Not Sure",
        },
        {
          text: "No",
          value: "No",
        },
      ],
      doYouHaveChildrenOptions: [
        {
          text: "Yes - They don't live at home",
          value: "Yes - They don't live at home",
        },
        {
          text: "Yes - They sometimes live at home",
          value: "Yes - They sometimes live at home",
        },
        {
          text: "Yes - They live at home",
          value: "Yes - They live at home",
        },
        {
          text: "No",
          value: "No",
        },
      ],
      livingSituationOptions: [
        { text: "None", value: "N/A" },
        {
          text: "Live alone",
          value: "Live alone",
        },
        {
          text: "Live with friends",
          value: "Live with friends",
        },
        {
          text: "Live with family",
          value: "Live with family",
        },
        {
          text: "Live with kids",
          value: "Live with kids",
        },
        {
          text: "Live with spouse",
          value: "Live with spouse",
        },
        {
          text: "Live as sister wife",
          value: "Live as sister wife",
        },
        {
          text: "Other",
          value: "Other",
        },
        {
          text: "Prefer not to say",
          value: "Prefer not to say",
        },
      ],
      bodyTypeOptions: [
        { text: "Petite", value: "Petite" },
        { text: "Slim", value: "Slim" },
        { text: "Athletic", value: "Athletic" },
        { text: "Average", value: "Average" },
        { text: "Few Extra Pounds", value: "Few Extra Pounds" },
        { text: "Full Figured", value: "Full Figured" },
        { text: "Large and Lovely", value: "Large and Lovely" },
      ],
      studyHabitsOptions: [
        { text: "None", value: "N/A" },
        {
          text: "Torah only",
          value: "Torah only",
        },
        {
          text: "Torah & Tanakh",
          value: "Torah & Tanakh",
        },
        {
          text: "66 only",
          value: "66 only",
        },
        {
          text: "66 and Apocrypha",
          value: "66 and Apocrypha",
        },
        {
          text: "66, Apocrypha, and any other considered (Lost books)",
          value: "66, Apocrypha, and any other considered (Lost books)",
        },
      ],
      doYouDrinkOptions: [
        {
          text: "Don’t Drink",
          value: "Don’t Drink",
        },
        {
          text: "I drink Socially",
          value: "I drink Socially",
        },
        {
          text: "On Special Occasions",
          value: "On Special Occasions",
        },
        {
          text: "I Will Drink By Myself",
          value: "I Will Drink By Myself",
        },
      ],
      doYouSmokeOptions: [
        {
          text: "I don’t smoke",
          value: "I don’t smoke",
        },
        {
          text: "Occasionally smoke",
          value: "Occasionally smoke",
        },
        {
          text: "Only cannabis",
          value: "Only cannabis",
        },
        {
          text: "Only cigars",
          value: "Only cigars",
        },
      ],
      willingToRelocateOptions: [
        {
          text: "Willing to relocate within my state",
          value: "Willing to relocate within my state",
        },
        {
          text: "Not willing to relocate",
          value: "Not willing to relocate",
        },
        {
          text: "Not sure about relocating",
          value: "Not sure about relocating",
        },
      ],
      relationshipIAmSeekingOptions: [
        {
          text: "Spouse",
          value: "Spouse",
        },
        {
          text: "Community",
          value: "Community",
        },
        {
          text: "Sister wife",
          value: "Sister wife",
        },
        {
          text: "Friendship",
          value: "Friendship",
        },
        {
          text: "Study Partner",
          value: "Study Partner",
        },
      ],
      havePetsOptions: [
        {
          text: "Birds",
          value: "Birds",
        },
        {
          text: "Cats",
          value: "Cats",
        },
        {
          text: "Dogs",
          value: "Dogs",
        },
        {
          text: "Exotic Pets",
          value: "Exotic Pets",
        },
        {
          text: "Fish",
          value: "Fish",
        },
        {
          text: "Horses",
          value: "Horses",
        },
        {
          text: "Others",
          value: "Others",
        },
      ],
      howOftenDoYouExerciseOptions: [
        {
          text: "I don’t exercise regularly",
          value: "I don’t exercise regularly",
        },
        {
          text: "I exercise 1-2 times per week",
          value: "I exercise 1-2 times per week",
        },
        {
          text: "I exercise 3-4 times per week",
          value: "I exercise 3-4 times per week",
        },
        {
          text: "I exercise 5 or more times per week",
          value: "I exercise 5 or more times per week",
        },
        {
          text: "No answer",
          value: "No answer",
        },
      ],
      passionsTags: [
        "Singing",
        "Music",
        "Riding Horses",
        "Fitness /Exercising",
        "Bike Riding",
        "Boating ",
        "Canoeing ",
        "Camping ",
        "Snowboarding ",
        "Mountain Climbing",
        "Fishing ",
        "Sports ",
        "Traveling",
        "Road Trips",
        "RVing ",
        "Exercise",
        "Going to the theater",
        "Dancing",
        "Cooking",
        "Doing Stuff Outdoors",
        "Hanging out with Family/Friends ",
        "Hosting Cookouts",
        "Pets",
        "Dog Parks",
        "Photography",
        "DIY Projects",
        "Gardening",
        "Interior Design",
        "Fashion",
        "Home Improvement",
        "Jewelry Making",
        "Knitting ",
        "Sewing ",
        "Graphic Design",
        "Photo editing",
        "Couponing",
        "Meditation",
        "Swimming",
        "Skating",
        "Reading",
        "History Buff",
        "Jazz",
      ],
      kingdomGiftsTags: [
        "House Keeping",
        "Cooking",
        "Wellness Planning",
        "I Can Teach Meditation ",
        "I am a Herbalist ",
        "Sewing",
        "Home Repairs",
        "I Can Decorate",
        "Technical Skills",
        "How to start a Business",
        "Business Skills",
        "Effective Communication",
        "How to use a computer",
        "Emergency Preparedness",
        "Basic First Aid",
        "I Can Deliver a Baby",
        "I can stitch a wound",
        "Survival Skills",
        "Sustainability Efforts",
        "How to read a map",
        "Basic car repair",
        "How to make fire",
        "Land Husbandry",
        "Animal Husbandry",
        "I Can Homestead ",
        "I Can Build a House",
        "I Know Carpentry",
        "I am a Handyman ",
        "I Know Construction ",
        "I Know How to Grow Stuff",
        "I can maintain a garden",
        "I’m a Good Hunter ",
        "I Can Catch Fish",
        "I Can Home School Children",
        "Money Management Skills",
        "Avoid/Get out of Debt",
        "How to use coupons",
        "How to Balancing a bank account",
        "Money/Management Investing",
        "Prepare taxes",
        "Effective Negotiation",
        "Self-Awareness Skills",
        "Relationship Skills ",
        "Listening and Communicating",
        "Expressing Love ",
        "Expressing Respect",
        "Emotional Intelligence ",
        "Critical Thinking & Problem Solving",
        "Self- Discipline ",
        "Exercise & Nutrition ",
        "Self Care Sleep & Hygiene",
        "Family Protection ",
        "Community Law Enforcement",
        "I know gun safety ",
        "I can shoot and teach shooting",
      ],
      iBelieveIAMOptions: [
        { text: "None", value: "N/A" },
        {
          text: "I am a diaspora israelite",
          value: "I am a diaspora israelite",
        },
        {
          text: "Grafted in",
          value: "Grafted in",
        },
        {
          text: "I believe i am of the 12 tribes",
          value: "I believe i am of the 12 tribes",
        },
        {
          text: "Of the northern tribe",
          value: "Of the northern tribe",
        },
        {
          text: "Of the southern tribe",
          value: "Of the southern tribe",
        },
      ],
      maritalBeliefSystemOptions: [
        { text: "None", value: "N/A" },
        {
          text: "Monogamy",
          value: "Monogamy",
        },
        {
          text: "Polygyny",
          value: "Polygyny",
        },

        {
          text: "Still on the fence",
          value: "Still on the fence",
        },
        {
          text: "I believe in polygyny but don’t practice it",
          value: "I believe in polygyny but don’t practice it",
        },
      ],
      spiritualValueOptions: [
        { text: "None", value: "N/A" },
        {
          text: "Messianic",
          value: "Messianic",
        },
        {
          text: "Non-Messianic",
          value: "Non-Messianic",
        },
      ],
      studyHabitsOptions: [
        { text: "None", value: "N/A" },
        {
          text: "Torah only",
          value: "Torah only",
        },
        {
          text: "Torah & Tanakh",
          value: "Torah & Tanakh",
        },
        {
          text: "66 only",
          value: "66 only",
        },
        {
          text: "66 and Apocrypha",
          value: "66 and Apocrypha",
        },
        {
          text: "66, Apocrypha, and any other considered (Lost books)",
          value: "66, Apocrypha, and any other considered (Lost books)",
        },
      ],
      studyBibleOptions: [
        { text: "None", value: "N/A" },
        {
          text: "King James Version",
          value: "King James Version",
        },
        {
          text: "1611 King James w/Apocrypha",
          value: "1611 King James w/Apocrypha",
        },
        {
          text: "Cepher Bible",
          value: "Cepher Bible",
        },
        {
          text: "Scriptures",
          value: "Scriptures",
        },
        {
          text: "Other",
          value: "Other",
        },
      ],
      anyAffiliationOptions: [
        { text: "None", value: "N/A" },

        {
          text: "No- i study alone",
          value: "No- i study alone",
        },
        {
          text: "I am a member of an online org",
          value: "I am a member of an online org",
        },
        {
          text: "I go to an assembly",
          value: "I go to an assembly",
        },
        {
          text: "I am a member of a camp or group",
          value: "I am a member of a camp or group",
        },
        {
          text: "I follow a social I attend an assembly",
          value: "I follow a social I attend an assembly",
        },
        {
          text: "I follow a ministry on social media ",
          value: "I follow a ministry on social media ",
        },
        {
          text: "Ask me when we talk",
          value: "Ask me when we talk",
        },
        {
          text: "I am seeking a fellowship",
          value: "I am seeking a fellowship",
        },
      ],
      isrealitePracticeKeepingOptions: [
        { text: "None", value: "N/A" },
        {
          text: "Sabbath days",
          value: "Sabbath days",
        },
        {
          text: "Holy days",
          value: "Holy days",
        },
        {
          text: "Feast days",
          value: "Feast days",
        },
        {
          text: "New moons",
          value: "New Moons",
        },
        {
          text: "Eating clean",
          value: "Eating clean",
        },
        {
          text: "Set apart living",
          value: "Set apart living",
        },
        {
          text: "Wearing fringes",
          value: "Wearing fringes",
        },
        {
          text: "Women don’t wear pants",
          value: "Women don’t wear pants",
        },
        {
          text: "Lunar sabbath keeper",
          value: "Lunar sabbath keeper",
        },
        {
          text: "Friday sundown to Sat sundown 24 hr sabbath",
          value: "Friday sundown to Sat sundown 24 hr sabbath",
        },
        {
          text: "Sat sun up to Sat sun down 12 hr sabbath",
          value: "Sat sun up to Sat sun down 12 hr sabbath",
        },
        {
          text: "I submit to my spouse in Yah as head",
          value: "I submit to my spouse in Yah as head",
        },
        {
          text: "I service and provide for my household buck stops with me",
          value: "I service and provide for my household buck stops with me",
        },
      ],
      spiritualBackgroundOptions: [
        { text: "None", value: "N/A" },
        {
          text: "I came out of the christian church",
          value: "I came out of the christian church",
        },
        {
          text: "I came out of islam",
          value: "I came out of islam",
        },
        {
          text: "I came out of the nation of islam",
          value: "I came out of the nation of islam",
        },
        {
          text: "I did not believe in anything",
          value: "I did not believe in anything",
        },
        {
          text: "I came out of pan - africanism",
          value: "I came out of pan - africanism",
        },
        {
          text: "I was orthodox jew",
          value: "I was orthodox jew",
        },
        {
          text: "Ask me later",
          value: "Ask me later",
        },
      ],
      step2: {
        maritalStatusOptions: [
          {
            text: "Never married",
            value: "Never married",
          },
          {
            text: "Currently seperated",
            value: "Currently seperated",
          },
          {
            text: "Widowed",
            value: "Widowed",
          },
          {
            text: "Divorced",
            value: "Divorced",
          },
          {
            text: "Put away",
            value: "Put away",
          },
          {
            text: "It’s complicated",
            value: "It’s complicated",
          },
          {
            text: "Poly marriage",
            value: "Poly marriage",
          },
        ],
        relationshipIAmSeekingOptions: [
          {
            text: "Spouse",
            value: "Spouse",
          },
          {
            text: "Community",
            value: "Community",
          },
          {
            text: "Sister wife",
            value: "Sister wife",
          },
          {
            text: "Friendship",
            value: "Friendship",
          },
          {
            text: "Study partner",
            value: "Study partner",
          },
          {
            text: "My poly family is available for courtship",
            value: "My poly family is available for courtship",
          },
          {
            text: "Concubine",
            value: "Concubine",
          },
          {
            text: "Non working wife - to manage home affairs",
            value: "Non working wife - to manage home affairs",
          },
          {
            text: "Working wife",
            value: "Working wife",
          },
          {
            text: "Husband - allows me to run business",
            value: "Husband - allows me to run business",
          },
        ],
        doYouHaveChildrenOptions: [
          {
            text: "Yes - They don't live at home",
            value: "Yes - They don't live at home",
          },
          {
            text: "Yes - They sometimes live at home",
            value: "Yes - They sometimes live at home",
          },
          {
            text: "Yes - They live at home",
            value: "Yes - They live at home",
          },
          {
            text: "No",
            value: "No",
          },
        ],
        doYouWantMoreChildrenOptions: [
          {
            text: "Yes",
            value: "Yes",
          },
          {
            text: "Not Sure",
            value: "Not Sure",
          },
          {
            text: "No",
            value: "No",
          },
        ],
        livingSituationOptions: [
          { text: "None", value: "N/A" },
          {
            text: "Live alone",
            value: "Live alone",
          },
          {
            text: "Live with friends",
            value: "Live with friends",
          },
          {
            text: "Live with family",
            value: "Live with family",
          },
          {
            text: "Live with kids",
            value: "Live with kids",
          },
          {
            text: "Live with spouse",
            value: "Live with spouse",
          },
          {
            text: "Live as sister wife",
            value: "Live as sister wife",
          },
          {
            text: "Other",
            value: "Other",
          },
          {
            text: "Prefer not to say",
            value: "Prefer not to say",
          },
        ],
        bodyTypeOptions: [
          { text: "Petite", value: "Petite" },
          { text: "Slim", value: "Slim" },
          { text: "Athletic", value: "Athletic" },
          { text: "Average", value: "Average" },
          { text: "Few Extra Pounds", value: "Few Extra Pounds" },
          { text: "Full Figured", value: "Full Figured" },
          { text: "Large and Lovely", value: "Large and Lovely" },
        ],
        doYouDrinkOptions: [
          {
            text: "Don’t Drink",
            value: "Don’t Drink",
          },
          {
            text: "I drink Socially",
            value: "I drink Socially",
          },
          {
            text: "On Special Occasions",
            value: "On Special Occasions",
          },
          {
            text: "I Will Drink By Myself",
            value: "I Will Drink By Myself",
          },
        ],
        doYouSmokeOptions: [
          {
            text: "I don’t smoke",
            value: "I don’t smoke",
          },
          {
            text: "Occasionally smoke",
            value: "Occasionally smoke",
          },
          {
            text: "Only cannabis",
            value: "Only cannabis",
          },
          {
            text: "Only cigars",
            value: "Only cigars",
          },
        ],
        employmentStatusOptions: [
          { text: "None", value: "N/A" },
          {
            text: "Full time",
            value: "Full time",
          },
          {
            text: "Part time",
            value: "Part time",
          },
          {
            text: "Self employed",
            value: "Self employed",
          },
          {
            text: "Retired",
            value: "Retired",
          },
          {
            text: "Homemaker",
            value: "Homemaker",
          },
          {
            text: "Not employed",
            value: "Not employed",
          },
          {
            text: "Prefer not to say",
            value: "Prefer not to say",
          },
        ],
        willingToRelocateOptions: [
          {
            text: "Willing to relocate within my state",
            value: "Willing to relocate within my state",
          },
          {
            text: "Willing to relocate out of state",
            value: "Willing to relocate out of state",
          },
          {
            text: "Not willing to relocate",
            value: "Not willing to relocate",
          },
          {
            text: "Not sure about relocating",
            value: "Not sure about relocating",
          },
        ],
        havePetsOptions: [
          {
            text: "Birds",
            value: "Birds",
          },
          {
            text: "Cats",
            value: "Cats",
          },
          {
            text: "Dogs",
            value: "Dogs",
          },
          {
            text: "Exotic pets",
            value: "Exotic pets",
          },
          {
            text: "Fish",
            value: "Fish",
          },
          {
            text: "Horses",
            value: "Horses",
          },
          {
            text: "Horses",
            value: "Horses",
          },
          {
            text: "No",
            value: "No",
          },
          {
            text: "No i am allergic",
            value: "No i am allergic",
          },
          {
            text: "Others",
            value: "Others",
          },
        ],
        howOftenDoYouExerciseOptions: [
          {
            text: "I don’t exercise regularly",
            value: "I don’t exercise regularly",
          },
          {
            text: "I exercise 1-2 times per week",
            value: "I exercise 1-2 times per week",
          },
          {
            text: "I exercise 3-4 times per week",
            value: "I exercise 3-4 times per week",
          },
          {
            text: "I exercise 5 or more times per week",
            value: "I exercise 5 or more times per week",
          },
          {
            text: "No answer",
            value: "No answer",
          },
        ],
        form: {
          maritalStatus: "",
          livingSituation: "",
          doYouHaveChildren: "",
          doYouWantMoreChildren: "",
          relationshipIAmSeeking: "",
          bodyType: "",
          aboutMe: "",
          doYouDrink: "",
          doYouSmoke: "",
          employmentStatus: "",
          willingToRelocate: "",
          havePets: "",
          havePetsOthers: "",
          howOftenDoYouExercise: "",
        },
      },
      step3: {
        loader: false,
        selectedShowMe: [],
        showMeChecked: [],

        passionsTags: [
          "Singing",
          "Music",
          "Riding Horses",
          "Fitness /Exercising",
          "Bike Riding",
          "Boating ",
          "Canoeing ",
          "Camping ",
          "Snowboarding ",
          "Mountain Climbing",
          "Fishing ",
          "Sports ",
          "Traveling",
          "Road Trips",
          "RVing ",
          "Exercise",
          "Going to the theater",
          "Dancing",
          "Cooking",
          "Doing Stuff Outdoors",
          "Hanging out with Family/Friends ",
          "Hosting Cookouts",
          "Pets",
          "Dog Parks",
          "Photography",
          "DIY Projects",
          "Gardening",
          "Interior Design",
          "Fashion",
          "Home Improvement",
          "Jewelry Making",
          "Knitting ",
          "Sewing ",
          "Graphic Design",
          "Photo editing",
          "Couponing",
          "Meditation",
          "Swimming",
          "Skating",
          "Reading",
          "History Buff",
          "Jazz",
        ],
        kingdomGiftsTags: [
          "House Keeping",
          "Cooking",
          "Wellness Planning",
          "I Can Teach Meditation ",
          "I am a Herbalist ",
          "Sewing",
          "Home Repairs",
          "I Can Decorate",
          "Technical Skills",
          "How to start a Business",
          "Business Skills",
          "Effective Communication",
          "How to use a computer",
          "Emergency Preparedness",
          "Basic First Aid",
          "I Can Deliver a Baby",
          "I can stitch a wound",
          "Survival Skills",
          "Sustainability Efforts",
          "How to read a map",
          "Basic car repair",
          "How to make fire",
          "Land Husbandry",
          "Animal Husbandry",
          "I Can Homestead ",
          "I Can Build a House",
          "I Know Carpentry",
          "I am a Handyman ",
          "I Know Construction ",
          "I Know How to Grow Stuff",
          "I can maintain a garden",
          "I’m a Good Hunter ",
          "I Can Catch Fish",
          "I Can Home School Children",
          "Money Management Skills",
          "Avoid/Get out of Debt",
          "How to use coupons",
          "How to Balancing a bank account",
          "Money/Management Investing",
          "Prepare taxes",
          "Effective Negotiation",
          "Self-Awareness Skills",
          "Relationship Skills ",
          "Listening and Communicating",
          "Expressing Love ",
          "Expressing Respect",
          "Emotional Intelligence ",
          "Critical Thinking & Problem Solving",
          "Self- Discipline ",
          "Exercise & Nutrition ",
          "Self Care Sleep & Hygiene",
          "Family Protection ",
          "Community Law Enforcement",
          "I know gun safety ",
          "I can shoot and teach shooting",
        ],
        iBelieveIAMOptions: [
          { text: "None", value: "N/A" },
          {
            text: "I am a diaspora israelite",
            value: "I am a diaspora israelite",
          },
          {
            text: "Grafted in",
            value: "Grafted in",
          },
          {
            text: "I believe i am of the 12 tribes",
            value: "I believe i am of the 12 tribes",
          },
        ],
        maritalBeliefSystemOptions: [
          { text: "None", value: "N/A" },
          {
            text: "Monogamy",
            value: "Monogamy",
          },
          {
            text: "Polygyny",
            value: "Polygyny",
          },

          {
            text: "Still on the fence",
            value: "Still on the fence",
          },
          {
            text: "I believe in polygyny but don’t practice it",
            value: "I believe in polygyny but don’t practice it",
          },
        ],
        spiritualValueOptions: [
          { text: "None", value: "N/A" },
          {
            text: "Messianic",
            value: "Messianic",
          },
          {
            text: "Non-Messianic",
            value: "Non-Messianic",
          },
        ],
        studyHabitsOptions: [
          { text: "None", value: "N/A" },
          {
            text: "Torah only",
            value: "Torah only",
          },
          {
            text: "Torah & Tanakh",
            value: "Torah & Tanakh",
          },
          {
            text: "66 only",
            value: "66 only",
          },
          {
            text: "66 and Apocrypha",
            value: "66 and Apocrypha",
          },
          {
            text: "66, Apocrypha, and any other considered (Lost books)",
            value: "66, Apocrypha, and any other considered (Lost books)",
          },
        ],
        studyBibleOptions: [
          { text: "None", value: "N/A" },
          {
            text: "King James Version",
            value: "King James Version",
          },
          {
            text: "1611 King James w/Apocrypha",
            value: "1611 King James w/Apocrypha",
          },
          {
            text: "Cepher Bible",
            value: "Cepher Bible",
          },
          {
            text: "Scriptures",
            value: "Scriptures",
          },
          {
            text: "I have a library",
            value: "I have a library",
          },
          {
            text: "Book of rememberance",
            value: "Book of rememberance",
          },
          {
            text: "Ask me when we talk",
            value: "Ask me when we talk",
          },
          {
            text: "Other",
            value: "Other",
          },
        ],
        anyAffiliationOptions: [
          { text: "None", value: "N/A" },

          {
            text: "No- i study alone",
            value: "No- i study alone",
          },
          {
            text: "I am a member of an online org",
            value: "I am a member of an online org",
          },
          {
            text: "I go to an assembly",
            value: "I go to an assembly",
          },
          {
            text: "I am a member of a camp or group",
            value: "I am a member of a camp or group",
          },
          {
            text: "I follow a social I attend an assembly",
            value: "I follow a social I attend an assembly",
          },
          {
            text: "I follow a ministry on social media ",
            value: "I follow a ministry on social media ",
          },
        ],
        isrealitePracticeKeepingOptions: [
          { text: "None", value: "N/A" },
          {
            text: "Sabbath days",
            value: "Sabbath days",
          },
          {
            text: "Holy days",
            value: "Holy days",
          },
          {
            text: "Feast days",
            value: "Feast days",
          },
          {
            text: "New moons",
            value: "New Moons",
          },
          {
            text: "Eating clean",
            value: "Eating clean",
          },
          {
            text: "Set apart living",
            value: "Set apart living",
          },
          {
            text: "Wearing fringes",
            value: "Wearing fringes",
          },
          {
            text: "Women don’t wear pants",
            value: "Women don’t wear pants",
          },
        ],
        spiritualBackgroundOptions: [
          { text: "None", value: "N/A" },
          {
            text: "I came out of the christian church",
            value: "I came out of the christian church",
          },
          {
            text: "I came out of islam",
            value: "I came out of islam",
          },
          {
            text: "I came out of the nation of islam",
            value: "I came out of the nation of islam",
          },
          {
            text: "I did not believe in anything",
            value: "I did not believe in anything",
          },
          {
            text: "I came out of pan - africanism",
            value: "I came out of pan - africanism",
          },
          {
            text: "I was orthodox jew",
            value: "I was orthodox jew",
          },
        ],
        yearsInTruthOptions: [
          { text: "None", value: "N/A" },
          {
            text: "1 year",
            value: "1 year",
          },
          {
            text: "2 year",
            value: "2 year",
          },
          {
            text: "3 year",
            value: "3 year",
          },
          {
            text: "4 year",
            value: "4 year",
          },
          {
            text: "5 year",
            value: "5 year",
          },
          {
            text: "6 year",
            value: "6 year",
          },
          {
            text: "7 year",
            value: "7 year",
          },
          {
            text: "8 year",
            value: "8 year",
          },
          {
            text: "9 year",
            value: "9 year",
          },
          {
            text: "10+ years",
            value: "10+ years",
          },
        ],
        campMemberOptions: [
          { text: "None", value: "N/A" },
          {
            text: "I.U.I.C",
            value: "I.U.I.C",
          },
          {
            text: "G.O.C.C",
            value: "G.O.C.C",
          },
          {
            text: "Dimona",
            value: "Dimona",
          },
          {
            text: "The light of Zion",
            value: "The light of Zion",
          },
          {
            text: "Sicarri",
            value: "Sicarri",
          },
          {
            text: "Other",
            value: "Other",
          },
        ],
        campMember: "",
        campMemberSelected: false,
        form: {
          iBelieveIAM: "",
          maritalBeliefSystem: "",
          spiritualValue: "",
          studyHabits: "",
          studyBible: "",
          anyAffiliation: "",
          yearsInTruth: "",
          isrealitePracticeKeeping: [],
          spiritualBackground: "",
          selectedkingdomGiftsTags: [],
          selectedPassions: [],
        },
      },
    };
  },
  mixins: [validationMixin],
  validations: {
    step2: {
      form: {
        bodyType: {
          required,
        },
        aboutMe: {},
        maritalStatus: {
          required,
        },
        livingSituation: {
          required,
        },
        doYouHaveChildren: {
          required,
        },
        doYouWantMoreChildren: {},
        relationshipIAmSeeking: { required },
        doYouDrink: { required },
        doYouSmoke: { required },
        employmentStatus: {},
        willingToRelocate: { required },
        howOftenDoYouExercise: { required },
      },
    },
    step3: {
      form: {
        iBelieveIAM: { required },
        maritalBeliefSystem: { required },
        spiritualValue: { required },
        studyHabits: {},
        studyBible: {},
        anyAffiliation: {},
        selectedkingdomGiftsTags: {},
        selectedPassions: {},
        isrealitePracticeKeeping: { required },
        spiritualBackground: {},
      },
    },
  },
  methods: {
    convertProfileUrl(url) {
      if (url) {
        let breakurl = url.split("?")[0];
        let broken = url.split("?")[1];
        let dotsplit = breakurl.split(".");
        dotsplit[dotsplit.length - 2] = `${
          dotsplit[dotsplit.length - 2]
        }_800x1000`;
        let finalurl = `${dotsplit.join(".")}?${broken}`;
        return finalurl;
      } else {
        return "";
      }
    },
    isImage(url) {
      // console.log("url before triming -> ", url);
      let sturl = String(url);
      let reak = sturl.split("?")[0];
      let dotsplit = reak.split(".");

      let filetype = dotsplit[dotsplit.length - 1];

      // console.log("filetype -> ", filetype);
      // console.log("dotsplit -> ", dotsplit);

      if (
        filetype === "jpg" ||
        filetype === "png" ||
        filetype === "gif" ||
        filetype === "jpeg"
      ) {
        return true;
      } else {
        return false;
      }
    },
    editProfileImage() {
      this.openModal("profileImageUploadModal");
    },
    editImage(index, image) {
      this.imageForEdit = image;
      this.imageForEditIndex = index;
      this.openModal("imageEdit");
    },
    removeImage(index, image) {
      this.profileImageRemoveLoader = true;
      this.images.splice(index, 1);

      setTimeout(() => {
        this.profileImageRemoveLoader = false;
      }, 2000);
    },
    editGalleryImage(index, image) {
      this.imageForEdit = image;
      this.imageForEditIndex = index;
      this.openModal("imageEdit");
    },
    removeGalleryImage(index, image) {
      this.galleryImageRemoveLoader = true;
      this.galleryImagesDummy.splice(index, 1);

      setTimeout(() => {
        this.galleryImageRemoveLoader = false;
      }, 2000);
    },
    clickedOnGallery() {
      // console.log("clicked on gallery");
    },
    itemClickHandler(data, i) {
      // click event
      // console.log("data -> ", data);
      // console.log("i -> ", i);
    },
    onFileChange(e) {
      const file = e.target.files[0];
      if (file) {
        this.url = URL.createObjectURL(file);
      } else {
        this.url = null;
      }
    },
    openModal(id) {
      this.$bvModal.show(id);
    },
    closeModal(id) {
      this.$bvModal.hide(id);
    },
    selectTag(i) {
      const index = this.step3.form.selectedPassions.indexOf(i);
      if (index === -1) {
        this.step3.form.selectedPassions.push(i);
      } else {
        this.step3.form.selectedPassions.splice(index, 1);
      }
    },
    selectKingdomGiftsTag(tag) {
      const index = this.step3.form.selectedkingdomGiftsTags.indexOf(tag);
      if (index === -1) {
        this.step3.form.selectedkingdomGiftsTags.push(tag);
      } else {
        this.step3.form.selectedkingdomGiftsTags.splice(index, 1);
      }
    },
    getLastImage(image) {
      let length = image.length;
      // console.log(image[length - 1]);
      return image[length - 1].url;
    },
    getImagesLength(image) {
      let length = image.length;
      return length;
    },
    getProfile() {
      //console.log("this.currentUser.uid -> ", this.currentUser2);
      axios
        .get(`${apiUrl}/auth/user`, {
          headers,
        })
        .then((res) => {
          // console.log("profile card -> get profile ->", res);
          if (res.status === 200) {
            const profile = res.data;
            this.user = profile;
            this.dataLoader = false;
            this.galleryImagesLoader = false;
            this.profileImagesLoader = false;
            this.profileImageSectionLoader = false;
            this.summaryAboutSectionLoader = false;
          } else {
            // console.log("profile card -> get profile -> something wrong !");
          }
        })
        .catch((err) => {
          console.log("profile card -> get profile ->", err);
        });
    },
    calculateAge(birthday) {
      let bday = new Date(birthday._seconds);
      let birthyear = bday.getFullYear();
      let now = new Date();
      let current = now.getFullYear();

      let difference = Math.abs(parseInt(birthyear) - parseInt(current));
      return difference;
    },
    transformImageArray(array) {
      let oldarray = array;
      // console.log("array -> ", array);

      return oldarray.map((x) => {
        return x.url;
      });
    },
    transformGalleryImageArray(array) {
      let galleryimagesarray = array;
      let arrayWithOutVideo = [];

      galleryimagesarray.forEach((image, index) => {
        let sturl = String(image.url);
        let reak = sturl.split("?")[0];
        let dotsplit = reak.split(".");
        let filetype = dotsplit[dotsplit.length - 1];

        if (
          filetype === "jpg" ||
          filetype === "png" ||
          filetype === "gif" ||
          filetype === "jpeg"
        ) {
          arrayWithOutVideo.push(image);
        }
      });

      return arrayWithOutVideo;
    },
    galleryImagesDragEvent(event) {
      this.galleryImagesLoader = true;

      let data = {
        newGalleryImages: this.user.gallery_images,
      };
      debugger;

      // console.log("reorder data -> ", data);
      axios
        .post(`${apiUrl}/user/reorder-gallery-images`, data, { headers })
        .then((res) => {
          // console.log("profile card -> reorder-gallery-images ->", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              this.galleryImagesLoader = false;
              this.$emit("profile-images-reordered");
              Vue.$toast.open({
                message: "Gallery Images Reordered!",
                type: "success",
              });
            } else {
              this.galleryImagesLoader = false;
              Vue.$toast.open({
                message: `Error Occurred: ${data.error}`,
                type: "error",
              });
            }
          } else {
            this.galleryImagesLoader = false;
            Vue.$toast.open({
              message: "Unknown Error Occurred!",
              type: "error",
            });
          }
        })
        .catch((err) => {
          this.galleryImagesLoader = false;
          console.log("profile card error -> reorder-gallery-images ->", err);
          Vue.$toast.open({
            message: err,
            type: "error",
          });
        });
    },
  },
  computed: {
    ...mapGetters(["currentUser"]),
    currentUser2() {
      let user = getCurrentUser();
      return user;
    },
    showSummary() {
      if (this.user.moreAboutMe.aboutMe.length > 500) {
        this.showSummaryButtons = true;
      }

      if (this.showFullSummary) {
        // console.log("showFullSummary -> ", this.showFullSummary);
        return this.user.moreAboutMe.aboutMe;
      } else {
        let newText = this.user.moreAboutMe.aboutMe;
        let cutout = newText.substring(0, 500);
        // console.log("cutout -> ", cutout);
        return cutout;
      }
    },
    countSelectedCount() {
      return this.step3.form.selectedPassions.length;
    },
    countSelectedKingdomGiftsCount() {
      return this.step3.form.selectedkingdomGiftsTags.length;
    },
    getLastImageIndex() {
      let length = this.images.length;
      // console.log("length -> ", length);
      return length;
    },
  },
  watch: {
    // currentUser(val) {
    //   if (val.uid) {
    //   }
    // },
  },
  mounted() {
    this.getProfile();
  },
};
</script>

<style scoped lang="scss">
/* Mobile Screen Classes */
@media only screen and (max-width: 992px) {
  .profile-card {
    width: 100%;
    display: flex;
    padding: 1rem;
  }

  .profile-card .profile-card-inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    /* align-items: center; */
    /* justify-content: center; */
  }

  .profile-card .profile-card-inner .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .profile-edit {
    .profile-card-inner {
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 1rem;
      position: relative;
      /* align-items: center; */
      /* justify-content: center; */
    }

    .profile-card-inner .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
}

/* Laptop Screen Classes */
@media only screen and (min-width: 992px) {
  .profile-card {
    width: 100%;
    display: flex;
    padding: 1rem;
  }

  .profile-card .profile-card-inner {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    position: relative;
    /* align-items: center; */
    /* justify-content: center; */
  }

  .profile-card .profile-card-inner .content {
    display: flex;
    flex-direction: column;
  }

  .profile-edit {
    .profile-card-inner {
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 1rem;
      position: relative;
      /* align-items: center; */
      /* justify-content: center; */
    }

    .profile-card-inner .content {
      display: flex;
      flex-direction: column;
    }

    .content {
      display: flex;
      flex-direction: row;
    }
  }
}

.info-bubble-3 {
  transition: all ease 0.5s;
  border: 1px solid #93652b;
  color: #93652b;
  text-align: center;
  padding: 0.3rem;
  padding-right: 1.25em;
  padding-left: 1.25em;
  display: flex;
  width: fit-content;
  border-radius: 20rem;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  vertical-align: baseline;
  margin: 0.2rem 0.2rem;
}

.info-bubble-3:hover {
  transform: scale(115%);
  cursor: pointer;
}

.info-bubble-4 {
  transition: all ease 0.5s;
  background-color: #93652b;
  color: #fff;
  text-align: center;
  padding: 0.4rem;
  padding-right: 1.25em;
  padding-left: 1.25em;
  display: flex;
  width: fit-content;
  border-radius: 20rem;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  vertical-align: baseline;
  margin: 0.2rem 0.2rem;
}

.info-bubble-4:hover {
  transform: scale(115%);
  cursor: pointer;
  background-color: #fff;
  color: #93652b;
}

.profileImageToggleIcon {
  fill: #fff;
}
.locked-card-container {
  position: relative;
}

.isrealite-data {
  filter: blur(8px);
  -webkit-filter: blur(8px);
}

.locked-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 2rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.profile-image-display {
  position: relative;
}

.gallery-images-inner {
  // height: 600px;
}

.last-image {
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: rgba(0, 0, 0, 0.2);
  position: relative;
  height: 150px;
  width: 150px;
  transition: all ease 0.5s;
  .image-count {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.2);
    height: 150px;
    width: 150px;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.7rem;
    color: #fff;
    z-index: 2;
  }
  .last-profile-image {
    position: absolute;
    border-radius: 25px;
    height: 150px;
    width: 150px;
    top: 0;
    left: 0;
    // z-index: -1;
  }

  &:hover {
    transform: scale(110%);
    cursor: pointer;
  }
}

.count-bubble {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: #2ae4bd;
  position: absolute;
  top: -2px;
  right: -2px;
  transition: all ease 0.5s;
}

.count-bubble:hover {
  cursor: pointer;
  transform: scale(104%);
}

.count-bubble svg {
}

.icon svg {
  transition: all ease 0.5s;
}

.icon svg:hover {
  stroke: #93652b;
  transform: scale(110%);
  cursor: pointer;
}

.profileImageUpload {
  position: relative;
}

.profileImageUpload .edit-icon {
  z-index: 2;
  position: absolute;
  bottom: 0px;
  left: 0px;
  background-color: #93652b;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease 0.8s;
}

.images-container span {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.images-container {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.image-wrapper {
  position: relative;
}

.image-wrapper:hover {
  // transform: scale(110%);
}

.remove-icon {
  z-index: 2;
  position: absolute;
  bottom: 0px;
  left: 0px;
  background-color: #dc2626;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease 0.8s;
}

.remove-icon:hover {
  transform: scale(110%);
  cursor: pointer;
}

.remove-icon svg {
  stroke: #fff;
  fill: #fff;
  transition: all ease 0.8s;
}

.edit-icon {
  z-index: 2;
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: #93652b;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease 0.8s;
}

.edit-icon:hover {
  transform: scale(110%);
  cursor: pointer;
}

.edit-icon svg {
  stroke: #fff;
  transition: all ease 0.8s;
}

.profile-image {
  max-height: 150px;
  transition: all ease 0.8s;
}

.profile-image:hover {
  transform: scale(110%);
  cursor: pointer;
}

.last-image {
  height: 150px;
  width: 150px;
  background-color: rgba(0, 0, 0, 0.2);
}

.fields-container {
  padding: 0 1rem;
  display: flex;
  gap: 1rem;
  flex-direction: row;
  flex-wrap: wrap;
}

.btns {
  margin: auto;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 300px;
  max-width: 355px;
  z-index: 1;
}

.action-btn {
  outline: none;
  border: none;
  border-radius: 50%;
  padding: 0.8rem;
  margin: 0 0.1rem;
  background-color: #f1f5f9;
  transition: all ease 0.5s;
  // box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  z-index: 9999;

  &:hover {
    transform: scale(110%);
  }

  svg {
    height: 25px;
  }

  &:active {
    background-color: #635dcb !important;
  }
}

.action-btn-1 {
  border: 1px solid #93652b;
  svg {
    stroke: #93652b;
  }
}

.action-btn-2 {
  border: 1px solid #dc2626;
  svg {
    stroke: #dc2626;
    fill: #dc2626;
  }
}

.action-btn-3 {
  border: 1px solid #3acdf5;
  svg {
    stroke: #3acdf5;
    fill: #3acdf5;
  }
}

.action-btn-4 {
  border: 1px solid #2ae4bd;
  svg {
    fill: #2ae4bd;
    stroke: #2ae4bd;
  }
}

.action-btn-5 {
  border: 1px solid #a31fec;
  svg {
    stroke: #a31fec;
    fill: #a31fec;
  }
}

#messageModal .icon svg:hover {
  fill: #93652b;
  cursor: pointer;
  transform: scale(110%);
}

#messageModal .top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#messageModal .main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}

#messageModal .main .message-field {
  min-width: 300px;
}
#messageModal .main .name {
  font-size: 2rem;
}
.modal-btn {
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

.modal-btn:hover {
  background-color: #b69873;
}

p {
  margin: 0;
  padding: 0;
}

.info-bubble {
  margin: 0.2rem 0.2rem;
  transition: all ease 0.5s;
}

.info-bubble:hover {
  transform: scale(115%);
  cursor: pointer;
}

.info-bubble-2 {
  background-color: #93652b;
  color: #fff;
  margin: 0.2rem 0.2rem;
  transition: all ease 0.5s;
}

.info-bubble-2:hover {
  background-color: #fff;
  color: #93652b;
  transform: scale(115%);
  cursor: pointer;
}

/* FIELDS */
.custom-field-test {
  border-radius: 25px !important;
  height: 35px !important;
  border-color: #93652b !important;
  font-size: 10px;
  outline: none;
}
.custom-field {
  border-radius: 25px !important;
  height: 35px !important;
  border-color: #93652b !important;
  padding: 15px !important;
  font-size: 10px;
}

.custom-field-textarea {
  border-radius: 25px !important;
  border-color: #93652b !important;
  outline: none;
  font-size: 10px;
}

#menu-dropdown {
  position: absolute;
  top: 0;
  right: 0;
}

.icons-container .icon-item svg {
  height: 35px;
}

.icons-container .icon-item {
  font-size: 1rem;
  // font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
}

.icons-container .icon-item p {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

// .actions-btns {
//   display: flex;
//   gap: 1rem;
// }

.st0 {
  fill: none;
  stroke: #000000;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st1 {
  fill: none;
  stroke: #000000;
  stroke-width: 2;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}

.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.btn-1 {
  outline: none;
  border: none;
  /* padding: 1rem; */
  border-radius: 10px;
  background-color: #c16bf9;
  color: #fff;
}

.btn-1:hover {
  background-color: #c885f5;
}

.btn-2 {
  outline: none;
  border: none;
  /* padding: 1rem; */
  border-radius: 10px;
  background-color: #fff;
  color: #333;
}

.btn-2:hover {
  background-color: rgb(218, 216, 216);
}

.passion-continue-btn {
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

.passion-continue-btn:hover {
  background-color: #b69873;
}

/* Passion Tags */
.passion-tag {
  color: #c070f6;
  border: 1px solid #c070f6;
  margin: 0.5rem 0.2rem;
}

.passion-tag:hover {
  background-color: #c070f6;
  color: #fff;
  margin: 0.5rem 0.2rem;
  cursor: pointer;
}

.passion-tag.selected {
  background-color: #c070f6;
  color: #fff;
  margin: 0.5rem 0.2rem;
}

/* Passion Tags */
.kingdom-gifts-tag {
  color: #c070f6;
  border: 1px solid #c070f6;
  margin: 0.5rem 0.2rem;
}

.kingdom-gifts-tag:hover {
  background-color: #c070f6;
  color: #fff;
  margin: 0.5rem 0.2rem;
  cursor: pointer;
}

.kingdom-gifts-tag.selected {
  background-color: #c070f6;
  color: #fff;
  margin: 0.5rem 0.2rem;
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

.add-btn svg {
  fill: #fff;
  stroke: #fff;
}

.add-btn:hover {
  background-color: #ac854e !important;
  transform: scale(105%);
}

.add-btn {
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
}
</style>
