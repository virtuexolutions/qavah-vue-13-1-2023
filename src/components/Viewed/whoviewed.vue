<template>
  <div class="mt-2">
    <b-link class="" @click="$router.go(-1)"> Go Back...</b-link>
    <h2 class="mt-2 section-heading">Who viewed your profile</h2>
    <p class="section-subtitle">
      Make the best use of Qavah by exploring these profile upgrading power-ups
    </p>

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

      <b-card
        no-body
        class="locked-card"
        v-if="currentUser.subscription.length === 0"
      >
        <div class="peoples">
          <b-card
            no-body
            class="person-item"
            v-for="(person, index) in dummypeoples"
            :key="index"
          >
            <div class="left">
              <b-avatar
                size="lg"
                rounded="lg"
                :src="person.thumbnail"
                badge-variant="primary"
              >
              </b-avatar>
              <div class="info">
                <h4 class="name p-0 m-0">{{ person.name }}</h4>
                <p class="status p-0 m-0" v-if="person.status === 'liked'">
                  You liked her profile, Awaiting for match
                </p>
                <p class="time p-0 m-0">{{ person.time }}</p>
              </div>
            </div>
            <b-button
              class="chat-btn"
              @click="$router.push('/dashboard/beloved')"
              >Chat</b-button
            >
          </b-card>
        </div>
        <div class="top-content">
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
            Your current plan does not include this feature. Please upgrade to
            avail this feature.
          </p>
          <b-button
            class="custom-btn-1"
            @click="$router.push('/dashboard/powerups')"
            >Upgrade</b-button
          >
        </div>
      </b-card>

      <div v-else>
        <div
          v-if="
            check_if_subscription_exist('platinum') ||
            check_if_subscription_exist('gold') ||
            check_if_subscription_exist('month_to_month')
          "
        >
          <div class="people-container" v-if="peoples.length > 0">
            <b-card
              no-body
              class="person-item"
              v-for="(person, index) in peoples"
              :key="index"
            >
              <div class="left">
                <b-avatar
                  size="lg"
                  rounded="lg"
                  v-if="person.profile_images.length > 0"
                  :to="'/dashboard/profile/' + person.id"
                  :src="person.profile_images[0].url"
                  badge-variant="primary"
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
                <div class="info">
                  <router-link :to="'/dashboard/profile/' + person.id">
                    <h4 class="name text-capitalize p-0 m-0">
                      {{ person.profileName }}
                    </h4>
                  </router-link>
                  <p class="status p-0 m-0">Viewed your profile</p>
                  <p class="status p-0 m-0">
                    <time-ago
                      long
                      :datetime="person.who_view_my_profile.created_at"
                    ></time-ago>
                  </p>
                  <!-- 
                  <p class="status p-0 m-0" v-if="person.status === 'kan'">
                    Liked your profile
                  </p>

                  <p class="status p-0 m-0" v-if="person.status === 'fancy'">
                    Sent you fancy
                  </p>
                  <p class="status p-0 m-0" v-if="person.status === 'lo'">
                    Disliked your profile
                  </p>
                  <p class="status p-0 m-0" v-if="person.status === 'match'">
                    Matched
                  </p>
                  <p class="status p-0 m-0" v-if="person.status === 'matchMe'">
                    Sent you match me
                  </p>
                  <p class="status p-0 m-0" v-if="person.status === 'blocked'">
                    Blocked
                  </p>
                  <p
                    class="status p-0 m-0"
                    v-if="person.status === 'superfancy'"
                  >
                    Superfancy Your Profile
                  </p>

                  <p class="time p-0 m-0">
                    {{ formatDate(person.viewed_on) || "" }}
                  </p> -->
                </div>
              </div>

              <div class="actions-btns">
                <!-- Lo -->
                <!-- <b-button
                  class="action-btn action-btn-2"
                  v-if="
                    person.status === 'viewed' ||
                    person.status === 'kan' ||
                    person.status === 'superfancy'
                  "
                  @click="
                    lo(
                      person.id,
                      person.basicInfo.profileName,
                      person.moreAboutMe.profileImagesPath[0].url
                    )
                  "
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </b-button> -->

                <!-- Superfancy -->
                <!-- <b-button
                  class="action-btn action-btn-3"
                  v-if="
                    person.status === 'viewed' ||
                    person.status === 'kan' ||
                    person.status === 'superfancy'
                  "
                  @click="
                    superfancy(
                      person.id,
                      person.basicInfo.profileName,
                      person.moreAboutMe.profileImagesPath[0].url
                    )
                  "
                >
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
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </b-button> -->

                <!-- Kan -->
                <!-- <b-button
                  class="action-btn action-btn-4"
                  v-if="
                    person.status === 'viewed' ||
                    person.status === 'kan' ||
                    person.status === 'superfancy'
                  "
                  @click="
                    kan(
                      person.id,
                      person.basicInfo.profileName,
                      person.moreAboutMe.profileImagesPath[0].url
                    )
                  "
                >
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </b-button> -->

                <!-- Chat -->
                <!-- <b-button
                  v-if="person.status === 'match'"
                  class="chat-btn"
                  to="/dashboard/beloved"
                  >Chat</b-button -->

                <!-- Block -->
                <i
                  v-if="person.status !== 'blocked'"
                  @click="
                    blockUser(
                      person.id,
                      person.profileName,
                      person.profile_images[0].url
                    )
                  "
                  class="ml-2 block-icon"
                >
                  <vue-custom-tooltip position="is-bottom" label="Block User?">
                    <svg
                      viewBox="0 0 32 32"
                      id="blockSVG"
                      height="30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title />
                      <g data-name="Layer 27" id="Layer_27">
                        <path
                          class="cls-1"
                          d="M14,25.18a5,5,0,0,1-5-5V18.36a1,1,0,0,1,.49-.86l3.63-2.18a1,1,0,0,1,1,1.72L11,18.93v1.25a3,3,0,0,0,3,3,1,1,0,0,1,0,2Z"
                        />
                        <path
                          class="cls-1"
                          d="M7,25.18H6a5,5,0,0,1-5-5V18.36a1,1,0,0,1,.49-.86l3.63-2.18a1,1,0,0,1,1,1.72L3,18.93v1.25a3,3,0,0,0,3,3H7a1,1,0,0,1,0,2Z"
                        />
                        <path
                          class="cls-1"
                          d="M10,15A6,6,0,0,1,10,3a1,1,0,0,1,0,2,4,4,0,0,0,0,8,1,1,0,0,1,0,2Z"
                        />
                        <path
                          class="cls-1"
                          d="M18,15a6,6,0,1,1,6-6A6,6,0,0,1,18,15ZM18,5a4,4,0,1,0,4,4A4,4,0,0,0,18,5Z"
                        />
                        <path
                          class="cls-1"
                          d="M24,29a7,7,0,1,1,7-7A7,7,0,0,1,24,29Zm0-12a5,5,0,1,0,5,5A5,5,0,0,0,24,17Z"
                        />
                        <path
                          class="cls-1"
                          d="M19.76,27.24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.41l8.49-8.49A1,1,0,0,1,29,18.46L20.46,27A1,1,0,0,1,19.76,27.24Z"
                        />
                      </g>
                    </svg>
                  </vue-custom-tooltip>
                </i>

                <!-- Unblock -->
                <!-- <i
                  v-if="person.status === 'blocked'"
                  @click="
                    unblockUser(
                      person.id,
                      person.profileName,
                      person.profile_images[0].url
                    )
                  "
                  class="ml-2 unblock-icon"
                >
                  <vue-custom-tooltip
                    position="is-bottom"
                    label="Unblock User?"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="30"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                      />
                    </svg>
                  </vue-custom-tooltip>
                </i> -->

                <!-- Report -->
                <i
                  class="ml-2 report-icon"
                  @click="openModal('reportModal' + person.id)"
                >
                  <vue-custom-tooltip position="is-bottom" label="Report User?">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="30"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </vue-custom-tooltip>
                </i>

                <!-- Remove -->
                <!-- <b-button
                 v-if="person.status === 'match'"
                  class="chat-btn ml-2"
                  @click="unmatch(person.id, person.profileName)"
                  >Remove</b-button
                > -->
              </div>
              <b-modal
                :id="'reportModal' + person.id"
                content-class="rounded-lg"
                body-class="rounded-lg"
                centered
                hide-header
                hide-footer
              >
                <h2 class="text-center">Report</h2>
                <h6 class="text-center">
                  We won't tell
                  {{ person.profileName }}
                </h6>

                <div class="mt-4">
                  <ul class="report-reasons-list">
                    <li>
                      <b-link
                        @click="reportUser('Fake profile/Scam', person.id)"
                        >Fake profile/Scam</b-link
                      >
                    </li>
                    <li>
                      <b-link
                        @click="
                          reportUser('Inappropriate profile photo', person.id)
                        "
                        >Inappropriate profile photo</b-link
                      >
                    </li>
                    <li>
                      <b-link
                        @click="reportUser('Inappropriate bio', person.id)"
                        >Inappropriate bio</b-link
                      >
                    </li>
                    <li>
                      <b-link @click="reportUser('Underage user', person.id)"
                        >Underage user</b-link
                      >
                    </li>
                    <li>
                      <b-link @click="reportUser('Offline behavior', person.id)"
                        >Offline behavior</b-link
                      >
                    </li>
                    <li>
                      <b-link
                        @click="reportUser('Someone is in danger', person.id)"
                        >Someone is in danger</b-link
                      >
                    </li>
                  </ul>

                  <div class="d-flex justify-content-center align-items-center">
                    <button
                      block
                      class="custom-btn-1"
                      @click="closeModal('reportModal' + person.id)"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </b-modal>
            </b-card>
          </div>

          <div v-else class="no-likes-yet-container">
            <svg
              height="50"
              id="Layer_1"
              style="enable-background: new 0 0 512 512"
              version="1.1"
              viewBox="0 0 512 512"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g>
                <path
                  d="M447.1,256.2C401.8,204,339.2,144,256,144c-33.6,0-64.4,9.5-96.9,29.8C131.7,191,103.6,215.2,65,255l-1,1l6.7,6.9   C125.8,319.3,173.4,368,256,368c36.5,0,71.9-11.9,108.2-36.4c30.9-20.9,57.2-47.4,78.3-68.8l5.5-5.5L447.1,256.2z M256,336   c-44.1,0-80-35.9-80-80c0-44.1,35.9-80,80-80c44.1,0,80,35.9,80,80C336,300.1,300.1,336,256,336z"
                />
                <path
                  d="M250.4,226.8c0-6.9,2-13.4,5.5-18.8c-26.5,0-47.9,21.6-47.9,48.2c0,26.6,21.5,48.1,47.9,48.1s48-21.5,48-48.1v0   c-5.4,3.5-11.9,5.5-18.8,5.5C266,261.6,250.4,246,250.4,226.8z"
                />
              </g>
            </svg>
            <h2>No Views Yet</h2>
            <p>
              Give a little, get a little. Send some likes <br />
              to people who've caught your eye!
            </p>
            <b-button
              class="go-to-search-btn"
              @click="$router.push('/dashboard')"
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
          </div>
        </div>
        <b-card no-body class="locked-card" v-else>
          <div class="peoples">
            <b-card
              no-body
              class="person-item"
              v-for="(person, index) in dummypeoples"
              :key="index"
            >
              <div class="left">
                <b-avatar
                  size="lg"
                  rounded="lg"
                  :src="person.thumbnail"
                  badge-variant="primary"
                >
                </b-avatar>
                <div class="info">
                  <h4 class="name p-0 m-0">{{ person.name }}</h4>
                  <p class="status p-0 m-0" v-if="person.status === 'liked'">
                    You liked her profile, Awaiting for match
                  </p>
                  <p class="time p-0 m-0">{{ person.time }}</p>
                </div>
              </div>
              <b-button
                class="chat-btn"
                @click="$router.push('/dashboard/beloved')"
                >Chat</b-button
              >
            </b-card>
          </div>
          <div class="top-content">
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
              Your current plan does not include this feature. Please upgrade to
              avail this feature.
            </p>
            <b-button
              class="custom-btn-1"
              @click="$router.push('/dashboard/powerups')"
              >Upgrade</b-button
            >
          </div>
        </b-card>
      </div>
    </b-overlay>

    <!-- Modals -->
    <b-modal
      id="getQavahPlusModal"
      content-class="rounded-lg"
      body-class="rounded-lg"
      centered
      hide-header
      hide-footer
    >
      <div class="top">
        <h2 class="title">Get Qavah Platinum</h2>
        <p class="subtitle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            class="refresh-icon mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            /></svg
          >Unlimited Say What , Go back and try again.
        </p>
      </div>
      <div class="pricing-cards">
        <div class="price-card">
          <div class="top">
            <p class="p-0 m-0 quantity">12</p>
            <p class="p-0 m-0 title">Months</p>
          </div>
          <p class="p-0 py-2 m-0 price">$19.99/mo</p>
        </div>
        <div class="price-card">
          <div class="top">
            <p class="p-0 m-0 quantity">6</p>
            <p class="p-0 m-0 title">Months</p>
          </div>
          <p class="p-0 py-2 m-0 price">$24.99/mo</p>
        </div>
        <div class="price-card">
          <div class="top">
            <p class="p-0 m-0 quantity">3</p>
            <p class="p-0 m-0 title">Month</p>
          </div>
          <p class="p-0 py-2 m-0 price">32.99$/mo</p>
        </div>
      </div>
      <div class="btn-container">
        <b-button variant="primary" class="custom-btn-1">Continue</b-button>
        <b-button variant="empty" @click="$bvModal.hide('getQavahPlusModal')"
          >Cancel</b-button
        >
      </div>
    </b-modal>

    <b-modal
      id="superLikesModal"
      content-class="rounded-lg"
      body-class="rounded-lg"
      centered
      hide-header
      hide-footer
    >
      <div class="top">
        <h2 class="title">Get Qavah Gold</h2>
        <p class="subtitle">4 Superfancies per month</p>
      </div>
      <div class="pricing-cards">
        <div class="price-card">
          <div class="top">
            <p class="p-0 m-0 quantity">12</p>
            <p class="p-0 m-0 title">Months</p>
          </div>
          <p class="p-0 py-2 m-0 price">$18.00/mo</p>
        </div>
        <div class="price-card">
          <div class="top">
            <p class="p-0 m-0 quantity">6</p>
            <p class="p-0 m-0 title">Months</p>
          </div>
          <p class="p-0 py-2 m-0 price">$24.00/mo</p>
        </div>
        <div class="price-card">
          <div class="top">
            <p class="p-0 m-0 quantity">3</p>
            <p class="p-0 m-0 title">Month</p>
          </div>
          <p class="p-0 py-2 m-0 price">$31.00/mo</p>
        </div>
      </div>
      <div class="btn-container">
        <b-button variant="primary" @click="$router.push('powerups')"
          >Continue</b-button
        >
        <b-button variant="empty" @click="$bvModal.hide('superLikesModal')"
          >Cancel</b-button
        >
      </div>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import { apiUrl, headers } from "@/constants/config";
import { getCurrentUser } from "@/utils";
import Vue from "vue";
import { mapGetters } from "vuex";
import Swal from "sweetalert2";
import { TimeAgo } from "vue2-timeago";

export default {
  data() {
    return {
      loader: false,
      peoples: [],
      dummypeoples: [
        {
          id: "1",
          name: "Indiana Jason",
          status: "liked",
          time: "21 mins ago",
          thumbnail: "https://i.ibb.co/F3ZdMwz/Picture-4.jpg",
        },
        {
          id: "2",
          name: "Indiana Jason",
          status: "liked",
          time: "21 mins ago",
          thumbnail:
            "data:image/jpeg;base64,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",
        },
        {
          id: "3",
          name: "Indiana Jason",
          status: "liked",
          time: "21 mins ago",
          thumbnail:
            "data:image/jpeg;base64,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",
        },
      ],
    };
  },
  components: {
    TimeAgo,
  },
  computed: {
    currentUser2() {
      let user = getCurrentUser();
      return user;
    },
    ...mapGetters(["currentUser"]),
  },
  methods: {
    check_if_subscription_exist(val) {
      let current_subscription = this.currentUser.subscription;

      var valObj = current_subscription.filter(function (elem) {
        if (elem.pkg_catogery == val) {
          return elem;
        }
      });
      if (valObj.length > 0) {
        return true;
      }
      return false;
    },
    formatDate(date) {
      let newdate = new Date(date);
      return newdate.toLocaleString();
    },
    getViewedData() {
      this.loader = true;

      setTimeout(() => {
        if (this.currentUser.id) {
          let data = {
            uid: this.currentUser.id,
          };

          axios
            .post(`${apiUrl}/favoured/someone-viewed-my-profile`, data, {
              headers,
            })
            .then((response) => {
              if (response.status === 200) {
                let data = response.data;
                this.peoples = data.peoples;
                this.loader = false;

                console.log("who viewed me data -> ", data);
              } else {
                this.loader = false;
                console.log(response);
                this.loader = false;
              }
            })
            .catch((err) => {
              this.loader = false;
              console.log("err -> ", err);
            });
        }
      }, 500);
    },
    lo(targetUid, name, targetImage) {
      this.loader = true;

      let data = {
        myName: this.currentUser.displayName,
        id: this.currentUser.uid,
        targetsUid: targetUid,
        targetName: name,
        targetImage: targetImage,
        myImage: this.currentUser.photoURL,
      };

      console.log("body -> ", data);

      axios
        .post(`${apiUrl}/swap/left`, data)
        .then((response) => {
          console.log("res -> ", response);
          const data = response.data;
          if (response.status === 200) {
            if (data.status) {
              this.loader = false;
              Vue.$toast.success(`You have disliked ${name}!`);
              this.getViewedData();
            } else {
              console.log(response);
              Vue.$toast.error(data.error);
              this.loader = false;
            }
          } else {
            console.log(response);
            Vue.$toast.error(data.error);
            this.loader = false;
          }
        })
        .catch((err) => {
          Vue.$toast.error(err.message);
          this.loader = false;
        });
    },
    superfancy(targetUid, name, targetImage) {
      if (this.currentUser.subscriptions.length === 0) {
        this.openModal("superLikesModal");
      } else {
        if (
          this.currentUser.subscriptions.includes("platinum") ||
          this.currentUser.subscriptions.includes("gold")
        ) {
          this.loader = true;

          let data = {
            myName: this.currentUser.displayName,
            id: this.currentUser.uid,
            targetsUid: targetUid,
            targetName: name,
            targetImage: targetImage,
            myImage: this.currentUser.photoURL,
          };

          console.log("body -> ", data);

          axios
            .post(`${apiUrl}/swap/superLiked`, data)
            .then((response) => {
              console.log("res -> ", response);
              const data = response.data;
              if (response.status === 200) {
                if (data.status) {
                  this.loader = false;
                  if (data.matched) {
                    Vue.$toast.default(
                      `You are matched with ${name} successfully!`
                    );
                    Swal.fire({
                      imageUrl:
                        "https://firebasestorage.googleapis.com/v0/b/qavah-d48ad.appspot.com/o/Images%2Ffireworks.gif?alt=media&token=3fd56010-8d22-4920-abee-4c8335ed4dff",
                      imageHeight: 200,
                      title: `HalleluYah! You’ve made an Israelite match!`,
                      html: ` <br> However, this is only part of the process.  Now it’s time to fast, pray and ask TMH Yah to reveal his/her intentions as you test the spirit.`,
                      showConfirmButton: true,
                      confirmButtonColor: "#93652B",
                      denyButtonColor: "#93652B",
                      showDenyButton: true,
                      confirmButtonText: "SEND MESSAGE",
                      denyButtonText: "KEEP SWIPING",
                      buttonsStyling: false,
                    }).then((result) => {
                      /* Read more about isConfirmed, isDenied below */
                      if (result.isConfirmed) {
                        this.$router.push("/dashboard/beloved");
                      } else if (result.isDenied) {
                        this.$router.push("/dashboard/discover");
                      }
                      this.getViewedData();
                    });
                  } else {
                    Vue.$toast.success(`You have superfancy ${name}!`);
                    this.getViewedData();
                  }
                } else {
                  this.loader = false;
                  Vue.$toast.error(`${data.error}`);
                }
              } else {
                this.loader = false;
                console.log(response);
                Vue.$toast.error(data.error);
              }
            })
            .catch((err) => {
              this.loader = false;
              Vue.$toast.error(err);
            });
        } else {
          this.openModal("superLikesModal");
        }
      }
    },
    kan(targetUid, name, targetImage) {
      this.loader = true;

      let data = {
        myName: this.currentUser.displayName,
        id: this.currentUser.uid,
        targetsUid: targetUid,
        targetName: name,
        targetImage: targetImage,
        myImage: this.currentUser.photoURL,
      };

      console.log("body -> ", data);

      axios
        .post(`${apiUrl}/swap/fancy`, data)
        .then((response) => {
          console.log("res -> ", response);

          const data = response.data;
          if (response.status === 200) {
            if (data.status) {
              this.loader = false;

              if (data.matched) {
                Vue.$toast.default(
                  `You are matched with ${name} successfully!`
                );
                Swal.fire({
                  imageUrl:
                    "https://firebasestorage.googleapis.com/v0/b/qavah-d48ad.appspot.com/o/Images%2Ffireworks.gif?alt=media&token=3fd56010-8d22-4920-abee-4c8335ed4dff",
                  imageHeight: 200,
                  title: `HalleluYah! You’ve made an Israelite match!`,
                  html: ` <br> However, this is only part of the process.  Now it’s time to fast, pray and ask TMH Yah to reveal his/her intentions as you test the spirit.`,
                  showConfirmButton: true,
                  confirmButtonColor: "#93652B",
                  denyButtonColor: "#93652B",
                  showDenyButton: true,
                  confirmButtonText: "SEND MESSAGE",
                  denyButtonText: "KEEP SWIPING",
                  buttonsStyling: false,
                }).then((result) => {
                  /* Read more about isConfirmed, isDenied below */
                  if (result.isConfirmed) {
                    this.$router.push("/dashboard/beloved");
                  } else if (result.isDenied) {
                    this.$router.push("/dashboard/discover");
                  }
                  this.getViewedData();
                });
              } else {
                Vue.$toast.success(`You have sent fancy to ${name}!`);
                this.getViewedData();
              }
            } else {
              this.loader = false;
              Vue.$toast.error(`${data.error}`);
            }
          } else {
            this.loader = false;
            console.log(response);
            Vue.$toast.error(data.error);
          }
        })
        .catch((err) => {
          this.loader = false;
          Vue.$toast.error(err);
        });
    },
    sendLoveNote(targetUid, targetName) {
      this.loveNoteLoader = true;
      let body = {
        uid: this.currentUser.uid,
        targetUid: targetUid,
      };

      axios
        .post(`${apiUrl}/user/check-love-note-count`, body)
        .then((res) => {
          // console.log("res -> ", res);
          const data = res.data;

          if (res.status === 200) {
            if (data.status) {
              this.loveNoteLoader = false;
              Vue.$toast.default(data.message);

              let receiverID = targetUid;
              let messageText = this.loveNoteMessage;
              let receiverType = CometChat.RECEIVER_TYPE.USER;
              let textMessage = new CometChat.TextMessage(
                receiverID,
                messageText,
                receiverType
              );

              if (
                this.loveNoteMessage !== "" ||
                this.loveNoteMessage !== null
              ) {
                CometChat.sendMessage(textMessage).then(
                  (message) => {
                    let body2 = {
                      uid: this.currentUser.uid,
                      targetuid: targetUid,
                      myName: this.currentUser.displayName,
                      targetName: targetName,
                    };
                    axios
                      .post(
                        `${apiUrl}/notifications/love-note-notification`,
                        body2
                      )
                      .then((response) => {
                        console.log("response -> ", response);
                        const data2 = response.data;
                        if (response.status === 200) {
                          console.log("Message sent successfully:", message);
                          if (data2.status) {
                            Vue.$toast.default("Love Note Sent!");
                            this.loveNoteMessage = "";
                          } else {
                            Vue.$toast.error(data.error);
                          }
                        } else {
                        }
                      })
                      .catch((err) => {
                        Vue.$toast.error(err);
                        console.log("Error From Love Note Notification");
                      });
                  },
                  (error) => {
                    console.log("Message sending failed with error:", error);
                    Vue.$toast.error(
                      `This user is not a premium user and does'nt have love note functionality yet!`
                    );
                    this.loveNoteLoader = false;
                  }
                );
              } else {
                Vue.$toast.warning("Please Add Message To Love Note First!");
                this.loveNoteLoader = false;
              }
            } else {
              Vue.$toast.error(data.error);
              this.loveNoteLoader = false;
            }
          } else {
            console.log("error -> ", res.data);
            this.loveNoteLoader = false;
          }
        })
        .catch((err) => {
          console.log("err -> ", err);
          this.loveNoteLoader = false;
        });
    },
    openModal(id) {
      this.$bvModal.show(id);
    },
    closeModal(id) {
      this.$bvModal.hide(id);
    },
    blockUser(targetUid, targetName, targetImage) {
      this.loader = true;

      let data = {
        id: this.currentUser.uid,
        targetsUid: targetUid,
        targetName: targetName,
        targetImage: targetImage,
      };

      console.log("body -> ", data);

      axios
        .post(`${apiUrl}/settings/blocked-profiles-by-me`, data, { headers })
        .then((response) => {
          console.log("block user profile -> ", response);
          const data = response.data;
          if (response.status === 200) {
            if (data.status) {
              console.log("block user data -> ", data);
              Vue.$toast.default(`${targetName} is now blocked!`);
              this.loader = false;
              this.$router.go();
            } else {
              // console.log("block user data -> ", data);
              // Vue.$toast.error(data.error);
              console.log("err -> ", data.error);
              Vue.$toast.error(data.error);
              this.loader = false;
            }
          } else {
            console.log(response);
            Vue.$toast.error(data.error);
            this.loader = false;
          }
        })
        .catch((e) => {
          console.log(e);
          Vue.$toast.error(e);
          this.loader = false;
        });
    },
    unblockUser(targetUid, targetName, targetImage) {
      this.loader = true;

      let data = {
        id: this.currentUser.uid,
        targetsUid: targetUid,
        targetName: targetName,
        targetImage: targetImage,
      };

      console.log("body -> ", data);

      axios
        .post(`${apiUrl}/settings/unblock-profile`, data)
        .then((response) => {
          console.log("unblock user profile -> ", response);
          const data = response.data;
          if (response.status === 200) {
            if (data.status) {
              console.log("block user data -> ", data);
              Vue.$toast.default(`${targetName} is now unblocked!`);
              this.loader = false;
              this.$router.go();
            } else {
              // console.log("block user data -> ", data);
              // Vue.$toast.error(data.error);
              console.log("err -> ", data.error);
              Vue.$toast.error(data.error);
              this.loader = false;
            }
          } else {
            console.log(response);
            Vue.$toast.error(data.error);
            this.loader = false;
          }
        })
        .catch((e) => {
          console.log(e);
          Vue.$toast.error(e);
          this.loader = false;
        });
    },
    removeUser(targetUid) {
      this.loader = true;

      let data = {
        id: this.currentUser.uid,
        targetsUid: targetUid,
      };

      console.log("body -> ", data);

      axios
        .post(`${apiUrl}/swap/unmatch_user`, data)
        .then((response) => {
          console.log("block user profile -> ", response);
          const data = response.data;
          if (response.status === 200) {
            if (data.status) {
              console.log("block user data -> ", data);
              Vue.$toast.default("User has been removed!");
              this.loader = false;
              this.$router.go();
            } else {
              // console.log("block user data -> ", data);
              // Vue.$toast.error(data.error);
              console.log("err -> ", data.error);
              Vue.$toast.error(data.error);
              this.loader = false;
            }
          } else {
            console.log(response);
            Vue.$toast.error(data.error);
            this.loader = false;
          }
        })
        .catch((e) => {
          console.log(e);
          Vue.$toast.error(e);
          this.loader = false;
        });
    },
    reportUser(reason, targetuid) {
      let data = {
        uid: this.currentUser.id,
        targetuid: targetuid,
        reason: reason,
      };
      axios
        .post(`${apiUrl}/settings/report-profile`, data, { headers })
        .then((response) => {
          const data = response.data;
          if (data.status) {
            Vue.$toast.default(`User has been reported!`);
            this.closeModal("reportModal" + targetuid);
          } else {
            Vue.$toast.error(`${data.error}`);
            console.log("err -> ", data.error);
          }
        })
        .catch((e) => {
          console.log(e);
          Vue.$toast.error(e);
        });
    },
    unmatch(targetUid, name) {
      this.loader = true;

      let data = {
        id: this.currentUser.uid,
        targetsUid: targetUid,
        myName: this.currentUser.displayName,
        targetName: name,
      };

      // console.log("body -> ", data);

      axios
        .post(`${apiUrl}/swap/unmatch_user`, data)
        .then((response) => {
          // console.log("res -> ", response);
          const data = response.data;
          if (response.status === 200) {
            if (data.status) {
              this.loader = false;
              Vue.$toast.default(`You have removed ${name}!`);
              this.$router.go();
            } else {
              this.loader = false;
              Vue.$toast.error(data.error);
            }
          } else {
            console.log(response);
            this.loader = false;
            Vue.$toast.error(data.error);
          }
        })
        .catch((err) => {
          this.loader = false;
          Vue.$toast.error(err);
        });
    },
  },
  mounted() {
    this.getViewedData();
  },
};
</script>

<style scoped lang="scss">
/* Mobile Screen Classes */
@media only screen and (max-width: 992px) {
}

/* Laptop Screen Classes */
@media only screen and (min-width: 992px) {
}

#blockSVG {
  .cls-1 {
    fill: #101820;
  }
}
.report-reasons-list {
  list-style-type: none;
}

.report-reasons-list li {
  padding: 1rem;
  border: 1px solid #333;
  text-align: center;
}
.report-icon svg {
  transition: all ease 0.5s;
  fill: #c1dc26;
}
.report-icon:hover {
  cursor: pointer;
}

.block-icon svg {
  transition: all ease 0.5s;
}
.block-icon:hover {
  cursor: pointer;
}

.unblock-icon svg {
  transition: all ease 0.5s;
}
.unblock-icon:hover {
  cursor: pointer;
}

.remove-icon svg {
  transition: all ease 0.5s;
}
.remove-icon:hover {
  cursor: pointer;
}
#getQavahPlusModal {
  border-radius: 10px !important;
  .top {
    text-align: center;
    .refresh-icon {
      stroke: #a07134;
      // padding: 0.5rem 0rem;
      // border-radius: 50%;
      // padding: 0.8rem;
      // background-color: #d6d3d1;
      // box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
      // &:hover {
      //   transform: scale(110%);
      // }
      // &:active {
      //   background-color: #635dcb !important;
      // }
    }
  }
  .pricing-cards {
    display: grid;
    grid-template-columns: repeat(3, auto);
    padding: 1rem 0;
    .price-card {
      text-align: center;
      &:hover {
        cursor: pointer;
      }
      // max-width: 30%;
      .top {
        // border-bottom: 1px solid #d4d4d8;
        padding: 0.5rem 0;
        .quantity {
          font-size: 2rem;
        }
        .title {
          font-size: 1rem;
        }
      }
      .price {
        font-size: 1.2rem;
        font-weight: bold;
      }
    }
  }
  .btn-container {
    display: flex;
    flex-direction: column;
    .boost-btn {
      background-color: #2a7dd8;
      color: #fff;
      border: none;
      outline: none;
      font-size: 1rem;
      transition: all ease 0.5s;

      &:hover {
        transform: scale(110%);
      }
    }
    .qavah-gold-btn {
      font-size: 1rem;
      &:hover {
        transform: scale(110%);
      }
    }
    .no-thanks-btn {
      font-size: 1rem;
    }
  }
}

#superLikesModal {
  border-radius: 10px !important;
  .top {
    text-align: center;
    .refresh-icon {
      stroke: #a07134;
      // padding: 0.5rem 0rem;
      // border-radius: 50%;
      // padding: 0.8rem;
      // background-color: #d6d3d1;
      // box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
      // &:hover {
      //   transform: scale(110%);
      // }
      // &:active {
      //   background-color: #635dcb !important;
      // }
    }
  }
  .pricing-cards {
    display: grid;
    grid-template-columns: repeat(3, auto);
    padding: 1rem 0;
    .price-card {
      text-align: center;
      &:hover {
        cursor: pointer;
      }
      // max-width: 30%;
      .top {
        // border-bottom: 1px solid #d4d4d8;
        padding: 0.5rem 0;
        .quantity {
          font-size: 2rem;
        }
        .title {
          font-size: 1rem;
        }
      }
      .price {
        font-size: 1.2rem;
        font-weight: bold;
      }
    }
  }
  .btn-container {
    display: flex;
    flex-direction: column;
    .boost-btn {
      background-color: #2a7dd8;
      color: #fff;
      border: none;
      outline: none;
      font-size: 1rem;
      transition: all ease 0.5s;

      &:hover {
        transform: scale(110%);
      }
    }
    .qavah-gold-btn {
      font-size: 1rem;
      &:hover {
        transform: scale(110%);
      }
    }
    .no-thanks-btn {
      font-size: 1rem;
    }
  }
}

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

.no-likes-yet-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 300px;
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

.section-heading {
  color: #93652b;
}
.section-subtitle {
  color: #d0d1d1;
}

.person-item {
  background-color: #f3f6f8;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
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
  color: #838585;
}

.chat-btn {
  background-color: #93652b !important;
  outline: none;
  border: none;
  border-radius: 10px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 1rem 2rem;  */
}

.custom-tab-btn {
  background-color: #93652b !important;
  outline: none;
  border: none;
  border-radius: 10px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
}

.go-to-search-btn {
  background-color: #93652b !important;
  outline: none;
  border: none;
  border-radius: 10px;
  color: #fff;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
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
</style>
