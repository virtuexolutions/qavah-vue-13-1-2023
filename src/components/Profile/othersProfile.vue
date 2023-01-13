<template>
  <div
    class=""
    v-if="is_profile_allow(profile.user_privacy, profile.allowed_profile)"
  >
    <!-- Profile Card -->
    <b-card class="profile-card rounded-lg" no-body>
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
            <div class="profile-image-display">
              <b-img
                height="200"
                width="200"
                rounded="lg"
                :src="profile.profile_images[0].url"
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
                :images="profile.profile_images"
                :index="index"
                @close="index = null"
              >
              </vue-gallery-slideshow>
            </div>

            <div class="content">
              <div class="report-section" v-if="profile.useractions">
                <div
                  v-if="
                    profile.useractions === null &&
                    profile.useractions.is_blocked == 0
                  "
                  class="report-icon"
                >
                  <vue-custom-tooltip label="Report User">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      @click="openModal('reportModal')"
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
                </div>
                <!-- Block -->
                <div
                  class="ml-2 block-icon"
                  v-if="
                    profile.useractions && profile.useractions.is_blocked == 0
                  "
                  @click="
                    blockUser(
                      profile.id,
                      profile.profileName,
                      profile.profile_images[0].url
                    )
                  "
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
                </div>

                <!-- Unblock -->
                <!-- <div
                  v-if="profile.status === 'blocked'"
                  @click="
                    unblockUser(
                      profile.id,
                      profile.profileName,
                      profile.profile_images[0].url
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
                </div> -->
              </div>
              <div class="report-section" v-else>
                <div class="report-icon">
                  <vue-custom-tooltip label="Report User">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      @click="openModal('reportModal')"
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
                </div>
                <!-- Block -->
                <div
                  class="ml-2 block-icon"
                  @click="
                    blockUser(
                      profile.id,
                      profile.profileName,
                      profile.profile_images[0].url
                    )
                  "
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
                </div>

                <!-- Unblock -->
                <!-- <div
                  v-if="profile.status === 'blocked'"
                  @click="
                    unblockUser(
                      profile.id,
                      profile.profileName,
                      profile.profile_images[0].url
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
                </div> -->
              </div>
              <div class="d-flex">
                <h2 class="title text-capitalize">
                  {{ profile.profileName }}
                  <svg
                    v-if="
                      profile.user_profile_verified &&
                      profile.user_profile_verified.status == 1
                    "
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="20px"
                    height="20px"
                    viewBox="0 0 96 96"
                    enable-background="new 0 0 96 96"
                    xml:space="preserve"
                  >
                    <g>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        fill="#6BBE66"
                        d="M48,0c26.51,0,48,21.49,48,48S74.51,96,48,96S0,74.51,0,48 S21.49,0,48,0L48,0z M26.764,49.277c0.644-3.734,4.906-5.813,8.269-3.79c0.305,0.182,0.596,0.398,0.867,0.646l0.026,0.025 c1.509,1.446,3.2,2.951,4.876,4.443l1.438,1.291l17.063-17.898c1.019-1.067,1.764-1.757,3.293-2.101 c5.235-1.155,8.916,5.244,5.206,9.155L46.536,63.366c-2.003,2.137-5.583,2.332-7.736,0.291c-1.234-1.146-2.576-2.312-3.933-3.489 c-2.35-2.042-4.747-4.125-6.701-6.187C26.993,52.809,26.487,50.89,26.764,49.277L26.764,49.277z"
                      />
                    </g>
                  </svg>
                </h2>
                <!-- History Icon -->
                <b-dropdown
                  class="p-0 m-0 mb-1"
                  v-if="history"
                  variant="empty"
                  size="lg"
                  right
                  toggle-class="p-0"
                  menu-class="m-0 p-2 rounded-lg"
                  no-caret
                >
                  <template slot="button-content">
                    <i class="history-icon">
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
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        />
                      </svg>
                    </i>
                  </template>
                  <vue-perfect-scrollbar
                    :settings="{
                      suppressScrollX: true,
                      wheelPropagation: false,
                    }"
                  >
                    <!-- <div class="histories p-2">
                      <div
                        class="history-item"
                        v-for="(h, index) in history"
                        :key="index"
                      >
                        <p class="p-0 m-0 title">h.title</p>
                        <p class="p-0 m-0 body">h.body</p>
                        <p class="p-0 m-0 time">formatDate(h.time)</p>
                      </div>
                    </div> -->
                  </vue-perfect-scrollbar>
                </b-dropdown>
              </div>
              <h6 class="info">{{ profile.age }} Years Old</h6>
              <h6 class="info">
                {{ profile.location.city }}
              </h6>
              <p v-if="profile.distance" class="info">
                {{ Math.round(profile.distance) }} miles
              </p>

              <div
                class="my-statuses mt-2"
                v-if="
                  profile.useractions !== null &&
                  profile.useractions.matched === 0
                "
              >
                <!-- <b-badge variant="light" pill v-if="'viewed' === 'viewed'">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="15"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fill-rule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Viewed By You</b-badge
                > -->
                <b-badge
                  variant="secondary"
                  pill
                  v-if="profile.useractions.liked === 1"
                  >Kan By You</b-badge
                >

                <b-badge
                  variant="info"
                  pill
                  v-if="profile.useractions.fancy === 1"
                  >Fancy By You</b-badge
                >
                <b-badge
                  variant="primary"
                  pill
                  v-if="profile.status === 'superfancy'"
                  >Superfancy By You</b-badge
                >
                <b-badge
                  variant="danger"
                  pill
                  v-if="profile.useractions.disliked === 1"
                  >Lo By You</b-badge
                >
                <b-badge
                  variant="danger"
                  pill
                  v-if="profile.status === 'blocked'"
                  >Blocked By You</b-badge
                >
                <b-badge
                  variant="danger"
                  pill
                  v-if="profile.useractions.is_blocked === 1"
                  >Blocked You</b-badge
                >
                <b-badge
                  variant="danger"
                  pill
                  v-if="profile.status === 'removed'"
                  >Removed By You</b-badge
                >
              </div>
              <!-- Target Statuses -->
              <div
                class="my-statuses mt-2"
                v-if="
                  profile.target_useractions !== null &&
                  profile.target_useractions.matched === 0
                "
              >
                <!-- <b-badge variant="light" pill v-if="'viewed' === 'viewed'">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="15"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fill-rule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Viewed You</b-badge
                > -->
                <b-badge
                  variant="secondary"
                  pill
                  v-if="profile.target_useractions.liked === 1"
                  >Kan You</b-badge
                >
                <b-badge
                  variant="info"
                  pill
                  v-if="profile.target_useractions.fancy === 1"
                  >Fancy You</b-badge
                >
                <b-badge
                  variant="primary"
                  pill
                  v-if="profile.target_useractions.superlike === 1"
                  >Superfancy You</b-badge
                >
                <b-badge
                  variant="danger"
                  pill
                  v-if="profile.target_useractions.disliked === 1"
                  >Lo You</b-badge
                >
              </div>
              <div
                v-if="
                  profile.useractions !== null &&
                  profile.target_useractions !== null
                "
              >
                <div
                  class="match-bubble mt-2"
                  v-if="
                    profile.useractions ** profile.useractions.matched === 1 &&
                    profile.useractions.is_blocked === 0 &&
                    profile.target_useractions.matched === 1
                  "
                >
                  <b-badge variant="primary" pill>Matched</b-badge>
                </div>
                <div
                  class="match-bubble mt-2"
                  v-if="
                    profile.useractions &&
                    profile.useractions.matched === 1 &&
                    profile.useractions.is_blocked === 1 &&
                    profile.target_useractions.matched === 1
                  "
                >
                  <b-badge variant="danger" pill>Blocked By You</b-badge>
                </div>
              </div>
              <div class="btns">
                <!-- If You Have Sent Fancy Already -->
                <div v-if="profile.useractions !== null">
                  <b-button
                    class="action-btn action-btn-5"
                    @click="kan(profile.id, profile.profileName)"
                    v-if="
                      profile.useractions.superlike === 1 ||
                      profile.useractions.liked === 1 ||
                      (profile.useractions.fancy === 1 &&
                        profile.useractions.matched !== 1)
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
                  </b-button>
                </div>
                <!-- Fancy Btn -->
                <div
                  v-else-if="
                    profile.useractions === null &&
                    profile.target_useractions !== null
                  "
                >
                  <b-button
                    @click="fancy(profile.id, profile.profileName)"
                    class="action-btn action-btn-4"
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
                  </b-button>
                </div>
                <div v-else>
                  <!-- Love Note -->
                  <b-button
                    class="action-btn action-btn-3"
                    @click="loveNoteProcessing"
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
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </b-button>
                  <b-button
                    class="action-btn action-btn-4"
                    @click="fancy(profile.id, profile.profileName)"
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
                  </b-button>
                </div>
              </div>

              <!-- Love Note Modal -->
              <b-modal
                id="messageModal"
                content-class="rounded-lg"
                body-class="rounded-lg"
                centered
                hide-header
                hide-footer
              >
                <b-overlay :show="loveNoteLoader">
                  <template #overlay>
                    <GridLoader
                      class="custom-class"
                      color="#93652b"
                      :loading="loveNoteLoader"
                      :size="10"
                      sizeUnit="px"
                    />
                  </template>
                  <div class="icon float-right">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      @click="closeModal('messageModal')"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>

                  <div class="top">
                    <h2 class="text-center">Send Love Note</h2>

                    <b-avatar
                      class="user-avatar my-2"
                      size="lg"
                      :src="profile.profile_images[0].url"
                    ></b-avatar>
                    <p class="name text-capitalize my-2">
                      {{ profile.profileName }}
                    </p>
                  </div>

                  <div class="main">
                    <b-form-group>
                      <b-form-textarea
                        class="custom-field-textarea"
                        rows="6"
                        v-model="loveNoteMessage"
                        no-resize
                      ></b-form-textarea>
                    </b-form-group>
                  </div>

                  <div class="btn-container">
                    <b-button
                      class="modal-btn"
                      @click="sendLoveNote(profile.id, profile.profileName)"
                      >Send</b-button
                    >
                  </div>
                </b-overlay>
              </b-modal>
            </div>
          </div>

          <!-- Call me , Match me , Profile -->
          <!-- <b-row class="mt-4">
            <b-col lg="12" md="12" sm="12">
              <div class="btn-container mt-4 mb-4">
                <b-button
                  class="btn-2 m-0"
                  @click="$router.push(`/dashboard/beloved`)"
                  block
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Phone
                </b-button>
                <b-button class="btn-2 m-0" block>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Discrete Mode
                </b-button>
                <b-button class="btn-2 m-0" block>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Public Mode
                </b-button>
                <b-button class="btn-2 m-0" block>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Custom
                </b-button>
                <b-button @click="matchMe" class="btn-2 m-0" block>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Match Me
                </b-button>
              </div>
            </b-col>
          </b-row> -->
        </b-overlay>

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

            <b-row>
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
            </b-row>
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
                      {{ profile.maritalStatus }}
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
                      {{ profile.relationshipIAmSeeking }}
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
                        <path d="M52,37H12a1,1,0,0,0,0,2H52a1,1,0,0,0,0-2Z" />
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
                      {{ profile.livingSituation }}
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
                      {{ profile.doYouHaveChildren }}
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
                      {{ profile.doYouWantMoreChildren }}
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
                      {{ profile.bodyType }}
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
                    <p class="font-weight-bold p-0 m-0" v-if="profile.height">
                      {{ profile.height.feet }}' feet
                      {{ profile.height.inches }}'' inches
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

            <div class="d-flex p-4">
              <div class="last-image rounded-lg" @click="index = 0">
                <span class="image-count"
                  >+ {{ profile.profile_images.length }}
                </span>
                <b-img
                  class="last-profile-image"
                  :src="profile.profile_images[0].url"
                ></b-img>
              </div>
            </div>

            <!-- :images="images"   -->
            <vue-gallery-slideshow
              :images="transformImageArray(profile.profile_images)"
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
              <div v-for="(image, i) in profile.gallery_images" :key="i">
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
                  v-if="image.type == 'video'"
                  :src="image.url"
                ></video>
              </div>

              <!-- :images="galleryImagesDummy" -->
              <vue-gallery-slideshow
                :images="profile.gallery_images"
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
            <h2 class="mt-4">More About Me</h2>

            <b-row>
              <b-col lg="4" md="4" sm="12">
                <div class="info-item">
                  <p class="title">Marital Status</p>
                  <b-badge class="info-bubble" pill variant="outline-primary">
                    {{ profile.maritalStatus }}
                  </b-badge>
                </div>
                <div class="info-item">
                  <p class="title">Living Situation</p>
                  <b-badge class="info-bubble" pill variant="outline-primary">
                    profile.moreAboutMe.livingSituation
                  </b-badge>
                </div>
                <div class="info-item">
                  <p class="title">Do You Have Children</p>
                  <b-badge class="info-bubble" pill variant="outline-primary">
                    {{ profile.doYouHaveChildren }}
                  </b-badge>
                </div>
                <div class="info-item">
                  <p class="title">Do You Want More Children</p>
                  <b-badge class="info-bubble" pill variant="outline-primary">
                    {{ profile.doYouWantMoreChildren }}
                  </b-badge>
                </div>
              </b-col>
              <b-col lg="4" md="4" sm="12">
                <div class="info-item">
                  <p class="title">Relationship You're Seeking</p>
                  <b-badge class="info-bubble" pill variant="outline-primary">
                    {{ profile.relationshipIAmSeeking }}
                  </b-badge>
                </div>
                <div class="info-item">
                  <p class="title">Body Type</p>
                  <b-badge class="info-bubble" pill variant="outline-primary">
                    {{ profile.bodyType }}
                  </b-badge>
                </div>
                <div class="info-item">
                  <p class="title">How Often Do You Exercise</p>
                  <b-badge class="info-bubble" pill variant="outline-primary">
                    {{ profile.howOftenDoYouExercise }}
                  </b-badge>
                </div>
                <div class="info-item">
                  <p class="title">Have Pets</p>
                  <b-badge class="info-bubble" pill variant="outline-primary">
                    {{ profile.havePets }}
                  </b-badge>
                </div>
              </b-col>
              <b-col lg="4" md="4" sm="12">
                <div class="info-item">
                  <p class="title">Do You Drink?</p>
                  <b-badge class="info-bubble" pill variant="outline-primary">
                    {{ profile.doYouDrink }}
                  </b-badge>
                </div>
                <div class="info-item">
                  <p class="title">Do You Smoke?</p>
                  <b-badge class="info-bubble" pill variant="outline-primary">
                    {{ profile.doYouSmoke }}
                  </b-badge>
                </div>
                <div class="info-item">
                  <p class="title">Employment Status</p>
                  <b-badge class="info-bubble" pill variant="outline-primary">
                    {{ profile.employmentStatus }}
                  </b-badge>
                </div>
                <div class="info-item">
                  <p class="title">Willing To Relocate</p>
                  <b-badge class="info-bubble" pill variant="outline-primary">
                    {{ profile.willingToRelocate }}
                  </b-badge>
                </div>
              </b-col>
            </b-row>

            <div
              class="mt-4"
              v-if="
                check_if_subscription_exist('gold') ||
                check_if_subscription_exist('platinum') ||
                check_if_subscription_exist('month_to_month')
              "
            >
              <div class="isrealite-data-unlocked">
                <h2 class="mt-4">LifeStyle</h2>

                <b-row>
                  <b-col lg="4" md="4" sm="12">
                    <div class="info-item">
                      <p class="title">I Believe I Am</p>
                      <b-badge
                        class="info-bubble"
                        pill
                        variant="outline-primary"
                        >{{ profile.iBelieveIAM }}</b-badge
                      >
                    </div>
                    <div class="info-item">
                      <p class="title">Marital Belief System</p>
                      <b-badge
                        class="info-bubble"
                        pill
                        variant="outline-primary"
                        >{{ profile.maritalBeliefSystem }}</b-badge
                      >
                    </div>
                    <div class="info-item-2">
                      <p class="title">Study Habits</p>
                      <span class="info-bubble-3">
                        {{ profile.studyHabits }}
                      </span>
                      <!-- <b-badge
                        class="info-bubble"
                        pill
                        variant="outline-primary"
                        ></b-badge
                      > -->
                    </div>
                  </b-col>
                  <b-col lg="4" md="4" sm="12">
                    <div class="info-item">
                      <p class="title">Years In Truth</p>
                      <b-badge
                        class="info-bubble"
                        pill
                        variant="outline-primary"
                        >{{ profile.yearsInTruth }}</b-badge
                      >
                    </div>
                    <div class="info-item">
                      <p class="title">Any Affiliation</p>
                      <span class="info-bubble-3">
                        {{ profile.anyAffiliation }}
                      </span>
                      <!-- <b-badge
                        class="info-bubble"
                        pill
                        variant="outline-primary"
                        >{{
                          profile.isrealiteFilter.lifestyle.anyAffiliation
                        }}</b-badge
                      > -->
                    </div>
                    <div class="info-item">
                      <p class="title">Spiritual Background</p>
                      <span class="info-bubble-3">
                        {{ profile.spiritualBackground }}
                      </span>
                      <!-- <b-badge
                        class="info-bubble"
                        pill
                        variant="outline-primary"
                        >{{
                          profile.isrealiteFilter.lifestyle.spiritualBackground
                        }}</b-badge
                      > -->
                    </div>
                  </b-col>
                  <b-col lg="4" md="4" sm="12">
                    <div class="info-item">
                      <p class="title">Spiritual Value</p>
                      <b-badge
                        class="info-bubble"
                        pill
                        variant="outline-primary"
                        >{{ profile.spiritualValue }}</b-badge
                      >
                    </div>

                    <div class="info-item">
                      <p class="title">Study Bible</p>
                      <b-badge
                        class="info-bubble"
                        pill
                        variant="outline-primary"
                        >{{ profile.studyBible }}</b-badge
                      >
                    </div>
                  </b-col>
                </b-row>

                <h2 class="mt-4">Values</h2>

                <b-row>
                  <b-col lg="4" md="4" sm="12">
                    <div class="info-item">
                      <p class="title">Israelite Practice Keeping</p>
                      <span
                        class="info-bubble-4"
                        v-for="(
                          tag, index
                        ) in profile.isrealite_practice_keeping"
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
                        v-for="(tag, index) in profile.kingdom_gifts"
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
                        v-for="(tag, index) in profile.passions"
                        :key="index"
                        >{{ tag.options }}</span
                      >
                    </div>
                  </b-col>
                </b-row>
              </div>
            </div>
            <div class="locked-card-container" v-else>
              <div class="isrealite-data">
                <h2 class="mt-4">LifeStyle</h2>

                <b-row>
                  <b-col lg="4" md="4" sm="12">
                    <div class="info-item">
                      <p class="title">I Believe I Am</p>
                      <b-badge
                        class="info-bubble"
                        pill
                        variant="outline-primary"
                      >
                        Package Not allowed to for view
                      </b-badge>
                    </div>
                    <div class="info-item">
                      <p class="title">Spiritual Background</p>
                      <b-badge
                        class="info-bubble"
                        pill
                        variant="outline-primary"
                      >
                        Package Not allowed to for view
                      </b-badge>
                    </div>
                    <div class="info-item">
                      <p class="title">Marital Belief System</p>
                      <b-badge
                        class="info-bubble"
                        pill
                        variant="outline-primary"
                      >
                        Package Not allowed to for view
                      </b-badge>
                    </div>
                  </b-col>
                  <b-col lg="4" md="4" sm="12">
                    <div class="info-item">
                      <p class="title">Any Affiliation</p>
                      <b-badge
                        class="info-bubble"
                        pill
                        variant="outline-primary"
                      >
                        Package Not allowed to for view
                      </b-badge>
                    </div>
                    <div class="info-item">
                      <p class="title">Spiritual value</p>
                      <b-badge
                        class="info-bubble"
                        pill
                        variant="outline-primary"
                      >
                        Package Not allowed to for view
                      </b-badge>
                    </div>
                  </b-col>
                  <b-col lg="4" md="4" sm="12">
                    <div class="info-item">
                      <p class="title">Study Habits</p>
                      <b-badge
                        class="info-bubble"
                        pill
                        variant="outline-primary"
                      >
                        Package Not allowed to for view
                      </b-badge>
                    </div>
                    <div class="info-item">
                      <p class="title">Study Bible</p>
                      <b-badge
                        class="info-bubble"
                        pill
                        variant="outline-primary"
                      >
                        Package Not allowed to for view
                      </b-badge>
                    </div>
                  </b-col>
                </b-row>

                <h2 class="mt-4">Values</h2>

                <b-row>
                  <b-col lg="4" md="4" sm="12">
                    <div class="info-item">
                      <p class="title">Israelite Practice Keeping</p>
                      <b-badge
                        class="info-bubble-4"
                        pill
                        variant="outline-primary"
                        v-for="(tag, index) in person.isrealitePracticeKeeping"
                        :key="index"
                      >
                        Package Not allowed to for view
                      </b-badge>
                    </div>
                  </b-col>
                  <b-col lg="4" md="4" sm="12">
                    <div class="info-item">
                      <p class="title">Kingdom Gifts</p>
                      <b-badge
                        class="info-bubble-4"
                        pill
                        variant="outline-primary"
                        v-for="(tag, index) in person.kingdomGifts"
                        :key="index"
                      >
                        Package Not allowed to for view
                      </b-badge>
                    </div>
                  </b-col>
                  <b-col lg="4" md="4" sm="12">
                    <div class="info-item">
                      <p class="title">Passions</p>
                      <b-badge
                        class="info-bubble-4"
                        pill
                        variant="outline-primary"
                        v-for="(tag, index) in person.passions"
                        :key="index"
                      >
                        Package Not allowed to for view
                      </b-badge>
                    </div>
                  </b-col>
                </b-row>
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
                  This feature is for subscribers only. Please upgrade to avail
                  this feature.
                </p>
                <b-button
                  class="custom-btn-1"
                  @click="$router.push('/dashboard/powerups')"
                  >Upgrade</b-button
                >
              </b-card>
            </div>
          </div>
        </b-card>
      </b-overlay>

      <!-- <outgoingCallComponent/> -->
    </b-card>

    <b-modal
      id="reportModal"
      content-class="rounded-lg"
      body-class="rounded-lg"
      centered
      hide-header
      hide-footer
    >
      <h2 class="text-center">Report</h2>
      <h6 class="text-center">We won't tell {{ profile.profileName || "" }}</h6>

      <div class="mt-4">
        <ul class="report-reasons-list">
          <li>
            <b-link @click="reportUser('Fake profile/Scam')"
              >Fake profile/Scam</b-link
            >
          </li>
          <li>
            <b-link @click="reportUser('Inappropriate profile photo')"
              >Inappropriate profile photo</b-link
            >
          </li>
          <li>
            <b-link @click="reportUser('Inappropriate bio')"
              >Inappropriate bio</b-link
            >
          </li>
          <li>
            <b-link @click="reportUser('Underage user')">Underage user</b-link>
          </li>
          <li>
            <b-link @click="reportUser('Offline behavior')"
              >Offline behavior</b-link
            >
          </li>
          <li>
            <b-link @click="reportUser('Someone is in danger')"
              >Someone is in danger</b-link
            >
          </li>
        </ul>

        <div class="d-flex justify-content-center align-items-center">
          <button block class="custom-btn-1" @click="closeModal('reportModal')">
            Cancel
          </button>
        </div>
      </div>
    </b-modal>
  </div>
  <div v-else>
    <b-card class="rounded-lg">
      <div
        class="d-flex flex-column align-items-center justify-content-center"
        no-body
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="500px"
          height="500px"
        >
          <path
            fill="#c7ede6"
            d="M87.215,56.71C88.35,54.555,89,52.105,89,49.5c0-6.621-4.159-12.257-10.001-14.478C78.999,35.015,79,35.008,79,35c0-11.598-9.402-21-21-21c-9.784,0-17.981,6.701-20.313,15.757C36.211,29.272,34.638,29,33,29c-7.692,0-14.023,5.793-14.89,13.252C12.906,43.353,9,47.969,9,53.5C9,59.851,14.149,65,20.5,65c0.177,0,0.352-0.012,0.526-0.022C21.022,65.153,21,65.324,21,65.5C21,76.822,30.178,86,41.5,86c6.437,0,12.175-2.972,15.934-7.614C59.612,80.611,62.64,82,66,82c4.65,0,8.674-2.65,10.666-6.518C77.718,75.817,78.837,76,80,76c6.075,0,11-4.925,11-11C91,61.689,89.53,58.727,87.215,56.71z"
          />
          <path
            fill="#fff"
            d="M15.5 51h-10C5.224 51 5 50.776 5 50.5S5.224 50 5.5 50h10c.276 0 .5.224.5.5S15.777 51 15.5 51zM18.5 51h-1c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1c.276 0 .5.224.5.5S18.777 51 18.5 51zM23.491 53H14.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8.991c.276 0 .5.224.5.5S23.767 53 23.491 53zM12.5 53h-1c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1c.276 0 .5.224.5.5S12.777 53 12.5 53zM9.5 53h-2C7.224 53 7 52.776 7 52.5S7.224 52 7.5 52h2c.276 0 .5.224.5.5S9.777 53 9.5 53zM15.5 55h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5S15.776 55 15.5 55zM18.5 46c-.177 0-.823 0-1 0-.276 0-.5.224-.5.5s.224.5.5.5c.177 0 .823 0 1 0 .276 0 .5-.224.5-.5S18.776 46 18.5 46zM18.5 48c-.177 0-4.823 0-5 0-.276 0-.5.224-.5.5s.224.5.5.5c.177 0 4.823 0 5 0 .276 0 .5-.224.5-.5S18.776 48 18.5 48zM23.5 50c-.177 0-2.823 0-3 0-.276 0-.5.224-.5.5s.224.5.5.5c.177 0 2.823 0 3 0 .276 0 .5-.224.5-.5S23.776 50 23.5 50zM72.5 24h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5S72.776 24 72.5 24zM76.5 24h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5S76.776 24 76.5 24zM81.5 26h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5S81.777 26 81.5 26zM69.5 26h-1c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1c.276 0 .5.224.5.5S69.776 26 69.5 26zM66.47 26H64.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.97c.276 0 .5.224.5.5S66.746 26 66.47 26zM75.5 22h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5S75.777 22 75.5 22zM72.5 28h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5S72.776 28 72.5 28z"
          />
          <path
            fill="#508ecc"
            d="M51.275,24.017C43.207,24.397,37,31.347,37,39.424V47h6v-7.692c0-4.794,3.617-8.979,8.401-9.289C56.643,29.68,61,33.831,61,39c0,1.657,1.343,3,3,3s3-1.343,3-3C67,30.475,59.889,23.611,51.275,24.017z"
          />
          <path
            fill="#472b29"
            d="M52,24c-0.241,0-0.482,0.006-0.725,0.017C43.207,24.397,37,31.347,37,39.424V47h6v-7.692c0-4.794,3.617-8.979,8.401-9.289C51.602,30.006,51.802,30,52,30c4.971,0,9,4.029,9,9c0,1.657,1.343,3,3,3s3-1.343,3-3C67,30.716,60.284,24,52,24z M64,40.6c-0.882,0-1.6-0.718-1.6-1.6c0-5.735-4.665-10.4-10.4-10.4c-0.228,0-0.458,0.007-0.69,0.022c-5.445,0.353-9.711,5.046-9.711,10.686V45.6h-3.2v-6.176c0-7.513,5.684-13.666,12.941-14.008C51.562,25.405,51.781,25.4,52,25.4c7.499,0,13.6,6.101,13.6,13.6C65.6,39.882,64.882,40.6,64,40.6z"
          />
          <path
            fill="#7dafe2"
            d="M67.6,45.5H36.4c-2.154,0-3.9,1.727-3.9,3.857v13.5c0,5.326,4.365,9.643,9.75,9.643h19.5c5.385,0,9.75-4.317,9.75-9.643v-13.5C71.5,47.227,69.754,45.5,67.6,45.5z"
          />
          <path fill="#f1bc19" d="M33 50H71V56.5H33z" />
          <path
            fill="#508ecc"
            d="M54,62c0-1.105-0.895-2-2-2s-2,0.895-2,2c0,0.653,0.318,1.227,0.801,1.592L50,68h4l-0.801-4.408C53.682,63.227,54,62.653,54,62z"
          />
          <path
            fill="#472b29"
            d="M68,45H36c-2.209,0-4,1.791-4,4v14c0,5.523,4.477,10,10,10h20c5.523,0,10-4.477,10-10V49C72,46.791,70.209,45,68,45z M70.6,63c0,4.742-3.858,8.6-8.6,8.6H42c-4.742,0-8.6-3.858-8.6-8.6V49c0-1.434,1.166-2.6,2.6-2.6h32c1.434,0,2.6,1.166,2.6,2.6V63z"
          />
          <path
            fill="#472b29"
            d="M71 50h-3.5c-.276 0-.5.224-.5.5s.224.5.5.5H71c.276 0 .5-.224.5-.5S71.276 50 71 50zM64.5 51h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5S64.776 51 64.5 51zM59.5 51H33c-.276 0-.5-.224-.5-.5S32.724 50 33 50h26.5c.276 0 .5.224.5.5S59.776 51 59.5 51zM71 57H33c-.276 0-.5-.224-.5-.5S32.724 56 33 56h38c.276 0 .5.224.5.5S71.276 57 71 57zM52 60.35c.91 0 1.65.74 1.65 1.65 0 .517-.241.995-.662 1.313-.106.08-.157.212-.134.342l.726 3.995h-3.161l.726-3.995c.024-.13-.028-.262-.134-.342-.42-.318-.661-.796-.661-1.313C50.35 61.09 51.09 60.35 52 60.35M52 60c-1.105 0-2 .895-2 2 0 .653.318 1.227.801 1.592L50 68h4l-.801-4.408C53.682 63.227 54 62.653 54 62 54 60.895 53.105 60 52 60L52 60z"
          />
          <path
            fill="#472b29"
            d="M31.441 53.322H38.771V53.673H31.441z"
            transform="rotate(-54.984 35.106 53.497)"
          />
          <path
            fill="#472b29"
            d="M35.231 53.322H42.561V53.673H35.231z"
            transform="rotate(-54.984 38.896 53.497)"
          />
          <path
            fill="#472b29"
            d="M38.94 53.322H46.269999999999996V53.673H38.94z"
            transform="rotate(-54.984 42.606 53.497)"
          />
          <path
            fill="#472b29"
            d="M42.73 53.321H50.059999999999995V53.672H42.73z"
            transform="rotate(-54.984 46.395 53.497)"
          />
          <path
            fill="#472b29"
            d="M46.44 53.321H53.769999999999996V53.672H46.44z"
            transform="rotate(-54.984 50.105 53.497)"
          />
          <path
            fill="#472b29"
            d="M50.23 53.321H57.559999999999995V53.672H50.23z"
            transform="rotate(-54.984 53.895 53.496)"
          />
          <path
            fill="#472b29"
            d="M53.94 53.321H61.269999999999996V53.672H53.94z"
            transform="rotate(-54.984 57.605 53.496)"
          />
          <path
            fill="#472b29"
            d="M57.73 53.321H65.06V53.672H57.73z"
            transform="rotate(-54.984 61.395 53.496)"
          />
          <path
            fill="#472b29"
            d="M61.44 53.321H68.77V53.672H61.44z"
            transform="rotate(-54.984 65.105 53.496)"
          />
          <path
            fill="#472b29"
            d="M65.23 53.321H72.56V53.672H65.23z"
            transform="rotate(-54.984 68.895 53.496)"
          />
          <path
            fill="#fdfcef"
            d="M87,67.5c-0.187,0-0.364,0.033-0.545,0.055C86.234,65.835,84.781,64.5,83,64.5c-1.087,0-2.045,0.505-2.687,1.282c0.11-0.412,0.187-0.836,0.187-1.282c0-2.761-2.239-5-5-5c-2.671,0-4.833,2.1-4.973,4.736C69.703,63.186,68.438,62.5,67,62.5c-2.485,0-4.5,2.015-4.5,4.5c0,0.187,0.033,0.364,0.055,0.545C60.282,67.771,58.5,69.667,58.5,72c0,2.485,2.015,4.5,4.5,4.5s7.125,0,7.125,0H77.5c0,0,7.015,0,9.5,0s4.5-2.015,4.5-4.5S89.485,67.5,87,67.5z"
          />
          <path
            fill="#472b29"
            d="M87,67c-0.048,0-0.095,0.002-0.142,0.005C86.411,65.261,84.831,64,83,64c-0.71,0-1.398,0.192-2,0.547c0-0.016,0-0.031,0-0.047c0-3.033-2.467-5.5-5.5-5.5c-2.555,0-4.719,1.76-5.317,4.164C69.293,62.416,68.176,62,67,62c-2.757,0-5,2.243-5,5c0,0.041,0.001,0.082,0.003,0.123C59.689,67.587,58,69.603,58,72c0,2.757,2.243,5,5,5h6.5c0.276,0,0.5-0.224,0.5-0.5S69.776,76,69.5,76H63c-2.206,0-4-1.794-4-4c0-2.051,1.549-3.753,3.605-3.958c0.133-0.013,0.256-0.08,0.34-0.185s0.122-0.239,0.106-0.373l-0.019-0.141C63.017,67.23,63,67.117,63,67c0-2.206,1.794-4,4-4c1.221,0,2.362,0.563,3.133,1.545c0.096,0.123,0.242,0.192,0.392,0.192c0.051,0,0.102-0.008,0.152-0.024c0.199-0.063,0.338-0.242,0.349-0.45C71.153,61.872,73.119,60,75.5,60c2.481,0,4.5,2.019,4.5,4.5c0,0.352-0.054,0.718-0.169,1.153c-0.06,0.227,0.045,0.466,0.254,0.573c0.072,0.038,0.15,0.056,0.228,0.056c0.145,0,0.288-0.064,0.386-0.182C81.277,65.401,82.115,65,83,65c1.496,0,2.768,1.125,2.959,2.618c0.033,0.252,0.249,0.437,0.495,0.437c0.021,0,0.041-0.001,0.062-0.004l0.141-0.019C86.77,68.017,86.883,68,87,68c2.206,0,4,1.794,4,4s-1.794,4-4,4H72.5c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5H87c2.757,0,5-2.243,5-5S89.757,67,87,67z"
          />
          <path
            fill="#472b29"
            d="M84.062 70c-.188 0-.381.022-.584.068C83.323 68.897 82.327 68 81.125 68c-.426 0-.845.119-1.212.341C79.609 66.999 78.403 66 77 66c-.256 0-.517.04-.819.126-.133.038-.21.176-.172.309.032.109.13.182.239.182.023 0 .047-.003.07-.01C76.575 66.534 76.792 66.5 77 66.5c1.288 0 2.377 1.012 2.481 2.305.007.095.067.177.155.212.03.013.061.019.093.019.059 0 .118-.022.165-.063.346-.305.784-.473 1.231-.473 1.034 0 1.875.841 1.875 1.875 0 .08.038.162.102.208.046.034.101.054.156.054.022 0 .045-.003.067-.01.268-.085.509-.127.738-.127 1.268 0 2.33.997 2.419 2.268C86.491 72.899 86.601 73 86.731 73c.006 0 .012 0 .018 0 .137-.01.241-.13.231-.268C86.873 71.2 85.591 70 84.062 70zM63.117 67.5c1.326 0 2.508.897 2.874 2.182.038.133-.039.271-.172.309C65.795 69.997 65.772 70 65.75 70c-.109 0-.209-.072-.24-.182C65.205 68.748 64.221 68 63.117 68c-.117 0-.23.014-.342.029-.012.002-.023.003-.035.003-.121 0-.229-.092-.246-.217-.019-.137.077-.263.214-.281C62.842 67.516 62.978 67.5 63.117 67.5L63.117 67.5z"
          />
          <path
            fill="#fdfcef"
            d="M36.445,60.545C36.473,60.366,36.5,60.187,36.5,60c0-1.933-1.567-3.5-3.5-3.5c-1.032,0-1.95,0.455-2.59,1.165c-0.384-1.808-1.987-3.165-3.91-3.165c-2.209,0-4,1.791-4,4c0,0.191,0.03,0.374,0.056,0.558C22.128,58.714,21.592,58.5,21,58.5c-1.228,0-2.245,0.887-2.455,2.055C18.366,60.527,18.187,60.5,18,60.5c-1.933,0-3.5,1.567-3.5,3.5s1.567,3.5,3.5,3.5s7.5,0,7.5,0h7c0,0,1.567,0,3.5,0s3.5-1.567,3.5-3.5C39.5,62.219,38.165,60.766,36.445,60.545z"
          />
          <path
            fill="#472b29"
            d="M34.25 63C34.112 63 34 62.888 34 62.75c0-1.223.995-2.218 2.218-2.218.034.009.737-.001 1.244.136.133.036.212.173.176.306-.036.134-.173.213-.306.176-.444-.12-1.1-.12-1.113-.118-.948 0-1.719.771-1.719 1.718C34.5 62.888 34.388 63 34.25 63zM27.5 67A.5.5 0 1 0 27.5 68 .5.5 0 1 0 27.5 67z"
          />
          <path
            fill="#472b29"
            d="M36.996,60.142C36.999,60.095,37,60.048,37,60c0-2.206-1.794-4-4-4c-0.845,0-1.666,0.276-2.347,0.774C29.966,55.127,28.331,54,26.5,54c-2.374,0-4.324,1.847-4.489,4.18C21.689,58.061,21.349,58,21,58c-1.289,0-2.412,0.82-2.826,2.006C18.116,60.002,18.059,60,18,60c-2.206,0-4,1.794-4,4s1.794,4,4,4h7.5c0.276,0,0.5-0.224,0.5-0.5S25.776,67,25.5,67H18c-1.654,0-3-1.346-3-3s1.346-3,3-3c0.16,0,0.314,0.025,0.468,0.049c0.273,0.041,0.521-0.138,0.569-0.405C19.208,59.691,20.034,59,21,59c0.449,0,0.878,0.155,1.243,0.448c0.16,0.128,0.377,0.112,0.556,0.01s0.271-0.337,0.242-0.54C23.021,58.78,23,58.643,23,58.5c0-1.93,1.57-3.5,3.5-3.5c1.641,0,3.08,1.165,3.421,2.769c0.039,0.184,0.178,0.33,0.36,0.379c0.179,0.05,0.375-0.009,0.5-0.148c0.581-0.645,1.369-1,2.219-1c1.654,0,3,1.346,3,3c0,0.16-0.025,0.314-0.048,0.468c-0.021,0.133,0.013,0.269,0.094,0.377c0.081,0.108,0.202,0.178,0.336,0.196C37.875,61.232,39,62.504,39,64c0,1.654-1.346,3-3,3h-3.5c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5H36c2.206,0,4-1.794,4-4C40,62.169,38.739,60.59,36.996,60.142z"
          />
          <path
            fill="#472b29"
            d="M30.5,67c-0.159,0-0.841,0-1,0c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5c0.159,0,0.841,0,1,0c0.276,0,0.5-0.224,0.5-0.5S30.776,67,30.5,67z"
          />
        </svg>
        <h2>THIS PROFILE IS HIDDEN...!</h2>
      </div>
    </b-card>
  </div>
</template>
<script>
import { apiUrl, headers } from "@/constants/config";
import axios from "axios";
import { getCurrentUser } from "@/utils";
import { mapGetters } from "vuex";
import { validationMixin } from "vuelidate";
const { required } = require("vuelidate/lib/validators");
import draggable from "vuedraggable";
import { PhotoCollageWrapper } from "vue-photo-collage";
import VueGallerySlideshow from "vue-gallery-slideshow";
// Profile Edit Component
import profileEditPage from "./profileEditPage.vue";
import Vue from "vue";
// Modals
import imageEditModal from "./imageEditModal.vue";
import profileImageUploadModal from "./uploadProfileImage.vue";
import { CometChat } from "@cometchat-pro/chat";
import {
  CometChatIncomingCall,
  CometChatOutgoingCall,
} from "@/cometchat-pro-vue-ui-kit/CometChatWorkspace/src/components/Calls/index";
import Swal from "sweetalert2";

export default {
  components: {
    PhotoCollageWrapper,
    VueGallerySlideshow,
    imageEditModal,
    profileImageUploadModal,
    draggable,
    profileEditPage,
    CometChatIncomingCall,
    CometChatOutgoingCall,
  },
  data() {
    return {
      history: null,
      incomingCall: null,
      outgoingCall: null,
      viewSidebar: false,
      loggedInUser: null,
      loveNoteMessage: "",
      loveNoteLoader: false,
      matchLoader: false,
      showSummaryButtons: false,
      userloader: true,
      dataLoader: false,
      galleryImagesLoader: false,
      profileImagesLoader: false,
      profileImageSectionLoader: false,
      summaryAboutSectionLoader: false,
      profileImageRemoveLoader: false,
      galleryImageRemoveLoader: false,
      imageForEdit: "",
      imageForEditIndex: "",
      profile: null,
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
          "I Can Decorate",
          "Technical Skills",
          "How to start a Business",
          "Business Skills",
          "Effective Communication",
          "How to use a computer",
          "Emergency Preparedness",
          "Basic First Aid",
        ],
        passions: [
          "Singing",
          "Music",
          "Riding Horses",
          "Fitness /Exercising",
          "Bike Riding",
          "Boating ",
          "Canoeing ",
          "Camping ",
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
          text: "No- I study alone",
          value: "No- I study alone",
        },
        {
          text: "I am a Member of an Online Org",
          value: "I am a Member of an Online Org",
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
          text: "I follow a Social I attend an assembly",
          value: "I follow a Social I attend an assembly",
        },
        {
          text: "I follow a ministry on Social Media ",
          value: "I follow a ministry on Social Media ",
        },
      ],
      isrealitePracticeKeepingOptions: [
        { text: "None", value: "N/A" },
        {
          text: "Sabbath days",
          value: "Sabbath days",
        },
        {
          text: "Holy Days",
          value: "Holy Days",
        },
        {
          text: "Feast Days",
          value: "Feast Days",
        },
        {
          text: "New Moons",
          value: "New Moons",
        },
        {
          text: "Eating Clean",
          value: "Eating Clean",
        },
        {
          text: "Set apart living",
          value: "Set apart living",
        },
        {
          text: "Wearing Fringes",
          value: "Wearing Fringes",
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
    notificationsForTarget: null,
  },
  methods: {
    is_profile_allow(privacy, allow_users) {
      debugger;
      if (privacy == null || privacy.value == "public") {
        return true;
      } else if (privacy != null && privacy.value == "private") {
        return false;
      } else if (privacy != null && privacy.value == "choose") {
        if (
          allow_users != null &&
          this.currentUser.id === allow_users.profile_id
        ) {
          return true;
        } else {
          return false;
        }
      }
    },
    check_if_subscription_exist(val) {
      debugger;
      let current_subscription = this.currentUser.subscription;
      debugger;
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
    getLastImage(image) {
      let length = image.length;
      // console.log(image[length - 1]);
      return image[length - 1].url;
    },
    getImagesLength(image) {
      let length = image.length;
      return length;
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
    getProfile() {
      setTimeout(() => {
        axios
          .get(
            `${apiUrl}/user/get_profile_detail?myUid=${this.currentUser.id}&targetUid=${this.$route.params.id}&lat=${this.currentUser.location.latitude}&lng=${this.currentUser.location.longitude}`,
            { headers }
          )
          .then((res) => {
            // console.log("res -> ", res);
            if (res.status === 200) {
              const profile = res.data.user_detail;
              this.profile = profile;
              this.dataLoader = false;
              this.galleryImagesLoader = false;
              this.profileImagesLoader = false;
              this.profileImageSectionLoader = false;
              this.summaryAboutSectionLoader = false;
              // console.log("this. toher profile -> ", this.profile);
              //this.getHistory();
            } else {
              // console.log("something wrong !");
            }
          })
          .catch((err) => {
            console.log("res -> ", err);
          });
      }, 500);
    },
    viewprofile() {
      if (this.currentUser.uid !== this.$route.params.id) {
        let body = {
          uid: this.currentUser.uid,
          targetuid: this.$route.params.id,
          targetName: this.profile.profileName,
        };

        axios
          .post(`${apiUrl}/favoured/view-someone-profile`, body, { headers })
          .then((res) => {
            if (res.status === 200) {
              Vue.$toast.default(
                `You viewed ${this.profile.profileName}'s profile!`
              );
            } else {
              // console.log("something wrong ! -> ");
            }
          })
          .catch((err) => {
            console.log("err -> ", err);
          });
      }
    },
    reportUser(reason) {
      let data = {
        uid: this.currentUser.id,
        targetuid: this.profile.id,
        reason: reason,
      };

      // console.log("body -> ", data);

      axios
        .post(`${apiUrl}/settings/report-profile`, data, { headers })
        .then((response) => {
          // console.log("block user profile -> ", response);
          const data = response.data;
          if (data.status) {
            Vue.$toast.default(data.message);
            this.closeModal("reportModal");
          } else {
            Vue.$toast.error(`${data.error}`);
          }
        })
        .catch((e) => {
          console.log(e);
          Vue.$toast.error(e);
        });
    },
    blockUser(targetUid, targetName, targetImage) {
      this.loader = true;

      let data = {
        myUid: this.currentUser.uid,
        targetsUid: targetUid,
        targetName: targetName,
        targetImage: targetImage,
      };
      axios
        .post(`${apiUrl}/settings/block-profile`, data, { headers })
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
        myUid: this.currentUser.uid,
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
    fancy() {
      this.profileImageSectionLoader = true;

      let data = {
        myUid: this.currentUser.id,
        targetsUid: this.profile.id,
        myName: this.currentUser.profileName,
        targetName: this.profile.profileName,
      };
      debugger;
      // console.log("body -> ", data);

      axios
        .post(`${apiUrl}/swap/fancy`, data, { headers })
        .then((response) => {
          console.log("res -> ", response);
          const data = response.data;
          if (response.status === 200) {
            if (data.status) {
              if (data.matched) {
                Vue.$toast.default(
                  `You are matched with ${this.profile.profileName} successfully!`
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

                  this.getData();
                });
              } else {
                Vue.$toast.default(
                  `You have sent fancy to ${this.profile.profileName}!`
                );
                this.$router.push("/dashboard/favored");
              }
              this.profileImageSectionLoader = false;
            } else {
              this.profileImageSectionLoader = false;
              Vue.$toast.error(data.error);
            }
          } else {
            // console.log(response);
            this.profileImageSectionLoader = false;
            Vue.$toast.error(data.error);
          }
        })
        .catch((err) => {
          this.profileImageSectionLoader = false;
          Vue.$toast.error(err);
        });
    },
    matchMe() {
      this.profileImageSectionLoader = true;

      let data = {
        myUid: this.currentUser.uid,
        targetsUid: this.profile.myUid,
        myName: this.currentUser.displayName,
        targetName: this.profile.profileName,
        targetImage: this.profile.profileImagesPath[0].url,
        myImage: this.currentUser.photoURL,
      };

      // console.log("body -> ", data);

      axios
        .post(`${apiUrl}/swap/matchMe`, data)
        .then((response) => {
          // console.log("res -> ", response);
          const data = response.data;
          if (response.status === 200) {
            if (data.status) {
              this.profileImageSectionLoader = false;

              if (data.matched) {
                Vue.$toast.default(
                  `You are matched with ${this.profile.profileName} successfully!`
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

                  this.getData();
                });
              } else {
                Vue.$toast.default(
                  `You have sent a match me to ${this.profile.profileName}!`
                );
                this.$router.push("/dashboard/favored");
              }
            } else {
              this.profileImageSectionLoader = false;
              Vue.$toast.error(data.error);
            }
          } else {
            console.log(response);
            this.profileImageSectionLoader = false;
            Vue.$toast.error(data.error);
          }
        })
        .catch((err) => {
          this.profileImageSectionLoader = false;
          Vue.$toast.error(err);
        });
    },
    callUser(receiverId, targetName) {
      let body = {
        uid: this.currentUser.uid,
        targetUid: receiverId,
      };

      axios
        .post(`${apiUrl}/user/check-user-in-friend-list`, body)
        .then((res) => {
          // console.log("res -> ", res);
          const data = res.data;

          if (res.status === 200) {
            if (data.status) {
              Vue.$toast.default(data.message);

              const receiverID = receiverId;
              const callType = CometChat.CALL_TYPE.AUDIO;
              const receiverType = CometChat.RECEIVER_TYPE.USER;

              const call = new CometChat.Call(
                receiverID,
                callType,
                receiverType
              );

              CometChat.initiateCall(call).then(
                (outGoingCall) => {
                  console.log("Call initiated successfully:", outGoingCall);
                  let body2 = {
                    uid: this.currentUser.uid,
                    targetuid: receiverId,
                    myName: this.currentUser.displayName,
                    targetName: targetName,
                  };
                  axios
                    .post(`${apiUrl}/notifications/call-notification`, body2)
                    .then((response) => {
                      console.log("response -> ", response);
                      const data2 = response.data;
                      if (response.status === 200) {
                        console.log("Message sent successfully:", message);
                        if (data2.status) {
                          Vue.$toast.success("Love Note Sent!");
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
                  Vue.$toast.error("This user does not have a match with you!");
                  console.log(
                    "Call initialization failed with exception:",
                    error
                  );
                }
              );
            } else {
              Vue.$toast.error(data.error);
            }
          } else {
            console.log("error -> ", res.data);
          }
        })
        .catch((err) => {
          console.log("err -> ", err);
        });
    },
    sendLoveNote(targetUid, targetName) {
      this.loveNoteLoader = true;
      if (this.loveNoteMessage !== "" || this.loveNoteMessage !== null) {
        let body = {
          uid: this.currentUser.id,
          targetUid: targetUid,
          love_note: this.loveNoteMessage,
        };
        axios
          .post(`${apiUrl}/send-love-note`, body, { headers })
          .then((res) => {
            const data = res.data;
            if (res.status === 200) {
              if (data.status) {
                Vue.$toast.default(data.message);
                this.loveNoteMessage = "";
                this.closeModal("messageModal_" + targetUid);
              } else {
                Vue.$toast.error(data.message);
              }
            }
            this.loveNoteLoader = false;
          })
          .catch((err) => {
            console.log("err -> ", err);
            this.loveNoteLoader = false;
          });
      } else {
        Vue.$toast.warning("Please Add Message To Love Note First!");
        this.loveNoteLoader = false;
      }
    },
    sendLoveNote2(targetUid, targetName) {
      this.loveNoteLoader = true;
      let body = {
        uid: this.currentUser.uid,
        targetUid: targetUid,
      };
      axios
        .post(`${apiUrl}/user/check-user-in-friend-list`, body)
        .then((res) => {
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              this.loveNoteLoader = false;

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
                    Vue.$toast.error(error);
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
    getHistory() {
      let body = {
        myUid: this.currentUser.uid,
        targetUid: this.profile.myUid,
      };
      // axios
      //   .post(`${apiUrl}/user/get-history`, body)
      //   .then((res) => {
      //     console.log("target notifications -> ", res);
      //     const data = res.data;
      //     if (data.status) {
      //       console.log("History Data -> ", data.data);
      //       this.history = data.data;
      //     } else {
      //       console.log("err -> ", data.error);
      //     }
      //   })
      //   .catch((err) => {
      //     console.log("err -> ", err);
      //   });
    },
    formatDate(date) {
      let newDate = new Date(date);
      return newDate.toLocaleString();
    },
    loveNoteProcessing() {
      if (this.check_if_subscription_exist("platinum")) {
        this.openModal("messageModal");
      } else if (this.check_if_subscription_exist("gold")) {
        this.openModal("messageModal");
      } else if (this.check_if_subscription_exist("month_to_month")) {
        this.openModal("messageModal");
      } else if (this.check_if_subscription_exist("lovenotes")) {
        this.openModal("messageModal");
      } else {
        console.log("free user");
        Vue.$toast.info(
          "You have to be a premium member or love notes subscriber to avail this feature!"
        );
      }
    },
  },
  computed: {
    ...mapGetters(["currentUser"]),
    showSummary() {
      if (this.profile.aboutMe.length > 500) {
        this.showSummaryButtons = true;
      }
      if (this.showFullSummary) {
        // console.log("showFullSummary -> ", this.showFullSummary);
        return this.profile.aboutMe;
      } else {
        let newText = this.profile.aboutMe;
        let cutout = newText.substring(0, 500);
        // console.log("cutout -> ", cutout);
        return cutout;
      }
    },
    currentUser2() {
      let user = getCurrentUser();
      return user;
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
    profile(newval) {
      if (newval) {
        // console.log("got users profile from watcher !");
        this.userloader = false;
        this.viewprofile();
      }
    },
  },
  mounted() {
    Promise.all([this.getProfile()]).then(() => {});
  },
};
</script>

<style scoped lang="scss">
/* Mobile Screen Classes */
@media only screen and (max-width: 992px) {
  .profile-card {
    width: 100%;
    min-width: 100%;
    min-height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  .profile-card .profile-card-inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

  .btns {
    margin: auto;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 300px;
    max-width: 355px;
    z-index: 1;
  }
}
/* Laptop Screen Classes */

/* Laptop Screen Classes */
@media only screen and (min-width: 992px) {
  .profile-card {
    width: 100%;
    min-width: 100%;
    min-height: 400px;
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

.report-section {
  display: flex;
}
.history-item {
  border-bottom: 1px dotted #333;
  .title {
    font-size: 0.8rem;
    font-weight: bold;
  }
  .body {
    font-size: 0.7rem;
  }
  .time {
    font-size: 0.6rem;
  }
}

.profileImageToggleIcon {
  fill: #fff;
}

.report-reasons-list {
  list-style-type: none;
}

.report-reasons-list li {
  padding: 1rem;
  border: 1px solid #333;
  text-align: center;
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

.report-icon svg {
  fill: #93652b;
  transition: all ease 0.5s;
}

.report-icon svg:hover {
  transform: scale(110%);
  cursor: pointer;
}

.gallery-images-inner {
  display: flex;
  gap: 0.5rem;
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

.profile-image-display {
  position: relative;
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
  height: 150px;
  width: 150px;
  transition: all ease 0.8s;
}

.profile-image:hover {
  transform: scale(102%);
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
  border: 1px solid #ef4444;
  svg {
    stroke: #ef4444;
    fill: #ef4444;
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
  font-weight: 500;
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
