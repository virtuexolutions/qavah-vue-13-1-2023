<template>
  <div>
    <!-- Matches & Infinite Scroll -->
    <b-card class="rounded-lg px-3 py-1" no-body>
      <div class="match-and-switch">
        <p class="p-0 m-0" v-if="peoples.length < 99">
          {{ peoples.length }} Matches
        </p>
        <p class="p-0 m-0" v-else>{{ peoples.length }}+ Matches</p>
        <div class="infinite-switch">
          <p class="p-0 m-0">Infinite Scroll</p>
          <switches
            v-model="infinteScrollSwitch"
            theme="custom"
            color="secondary-inverse"
            class="vue-switcher-small"
          ></switches>
        </div>
      </div>
    </b-card>

    <!-- With Infinte Scroll -->
    <div v-if="infinteScrollSwitch">
      <!-- People Cards Container -->
      <b-overlay :show="render" rounded="sm">
        <template #overlay>
          <GridLoader
            class="custom-class"
            color="#93652b"
            :loading="render"
            :size="10"
            sizeUnit="px"
          />
        </template>

        <vue-loadmore
          v-if="peoples.length > 0"
          :on-loadmore="onLoad"
          :finished="finished"
          pulling-text="Loading..."
          loosing-text="Loading... "
          loading-text="Loading..."
          success-text="Success"
          finished-text="All Data Has Been Loaded!"
          error-text="Error..."
        >
          <div class="cards-container mt-3">
            <b-card
              no-body
              class="person-card rounded-lg"
              v-for="(person, index) in loadData"
              :key="index"
            >
              <div
                class="image-container"
                :style="
                  'background-image: url(' +
                  person.profile_images[0].url +
                  '); background-size:cover;'
                "
              >
                <!-- <b-img fluid :src="person.moreAboutMe.profileImagesPath[0]"></b-img> -->
                <div class="info">
                  <div class="content">
                    <i v-if="person.spotlight_status > 0" class="top-pick">
                      <svg
                        data-name="Layer 1"
                        height="25"
                        class="mr-2"
                        id="toppick_icon"
                        viewBox="0 0 128 128"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title />
                        <path
                          class="cls-1"
                          d="M73.87,65.49l22-24.85a2.22,2.22,0,0,1,3.47,0l17.54,24.85"
                        />
                        <path
                          class="cls-1"
                          d="M11.14,65.49,28.68,40.63a2.22,2.22,0,0,1,3.47,0l22,24.85"
                        />
                        <path
                          class="cls-2"
                          d="M118.71,42.91,96.14,60.78,65.71,24a2.22,2.22,0,0,0-3.41,0L31.86,60.78,9.29,42.91A2.22,2.22,0,0,0,5.7,44.84L10.63,102a2.22,2.22,0,0,0,2.21,2H115.16a2.22,2.22,0,0,0,2.21-2l4.93-57.14A2.22,2.22,0,0,0,118.71,42.91Z"
                        />
                        <g class="cls-3">
                          <path
                            class="cls-1"
                            d="M115.9,69.46C104.73,90.7,88.33,96.8,70.71,99.74L31.86,104h83.3a2.22,2.22,0,0,0,2.21-2L121.16,58Z"
                          />
                        </g>
                        <path
                          class="cls-4"
                          d="M9.29,42.91A2.22,2.22,0,0,0,5.7,44.84L10.63,102a300.29,300.29,0,0,1,1.19-57.06Z"
                        />
                        <path
                          class="cls-5"
                          d="M94.16,58.06l1.55-3.44a.67.67,0,0,1,1.23,0l1.55,3.44,3.44,1.55a.67.67,0,0,1,0,1.23l-3.44,1.55-1.55,3.44a.67.67,0,0,1-1.23,0l-1.55-3.44-3.44-1.55a.67.67,0,0,1,0-1.23Z"
                        />
                        <polygon
                          class="cls-6"
                          points="51.81 62.75 51.81 81.6 64 88.56 76.12 81.61 76.19 62.75 64 55.71 51.81 62.75"
                        />
                        <polygon
                          class="cls-7"
                          points="56.24 66.17 56.24 78.17 64 82.8 71.76 78.34 71.76 66.17 64 61.7 56.24 66.17"
                        />
                        <polygon
                          class="cls-8"
                          points="76.12 81.61 71.76 78.34 64 82.8 64 88.56 76.12 81.61"
                        />
                        <polygon
                          class="cls-9"
                          points="64 55.71 64 61.7 56.24 66.17 51.81 62.75 64 55.71"
                        />
                      </svg>
                    </i>
                    <b-link
                      class="title text-capitalize"
                      :to="'/dashboard/profile/' + person.id"
                      target="_blank"
                      >{{ person.profileName }}</b-link
                    >
                    <div class="subtitle">
                      {{ person.age }} - {{ person.city }}
                    </div>
                    <div class="subtitle">{{ person.distance }} Miles Away</div>
                  </div>
                  <div class="">
                    <div class="images-count">
                      {{ getImagesLength(person.gallery_images) }}
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
                          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <!-- <pan class="custom-filter-mutual">Mutual</pan> -->
                  </div>
                </div>
              </div>
              <div class="person-footer">
                <!-- If User Have Subscription -->
                <div
                  class="icon message-icon"
                  v-if="
                    check_if_subscription_exist('platinum') ||
                    check_if_subscription_exist('lovenotes')
                  "
                  @click="openModal('messageModal_' + person.id)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <!-- For Free Plan -->
                <div
                  class="icon message-icon"
                  v-else
                  @click="freePlanLoveNotes"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>

                <div
                  class="icon like-icon"
                  v-if="!person.fancy"
                  @click="
                    kan(
                      person.id,
                      person.profileName,
                      person.profile_images[0].url
                    )
                  "
                >
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
                </div>

                <div class="icon fancied-icon" v-if="person.fancy">
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
                </div>

                <!-- Message Modal -->
                <b-modal
                  :id="'messageModal_' + person.id"
                  content-class="rounded-lg"
                  body-class="rounded-lg"
                  centered
                  hide-header
                  hide-footer
                >
                  <b-overlay :show="loveNoteLoader" rounded="sm">
                    <template #overlay>
                      <GridLoader
                        class="custom-class"
                        color="#93652b"
                        :loading="loveNoteLoader"
                        :size="10"
                        sizeUnit="px"
                      />
                    </template>
                    <div class="userMessageModal">
                      <div class="icon float-right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          @click="closeModal('messageModal_' + person.id)"
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
                        <h2 class="text-center">Send Love Notes</h2>

                        <b-avatar
                          class="my-2"
                          size="lg"
                          v-if="person.profile_images.length > 0"
                          :src="person.profile_images[0].url"
                        ></b-avatar>
                        <b-avatar
                          :to="'/dashboard/profile/' + person.id"
                          v-else
                          src="@/assets/profiles/empty.png"
                          size="lg"
                          rounded="lg"
                        >
                        </b-avatar>
                        <p class="name text-capitalize my-2">
                          {{ person.profileName }}
                        </p>
                      </div>

                      <div class="main">
                        <b-form-group>
                          <b-form-textarea
                            class="custom-field-textarea"
                            v-model="loveNoteMessage"
                            rows="6"
                            no-resize
                          ></b-form-textarea>
                        </b-form-group>
                      </div>

                      <div class="btn-container">
                        <b-button
                          class="modal-btn"
                          @click="sendLoveNote(person.id, person.profileName)"
                          >Send</b-button
                        >
                      </div>
                    </div>
                  </b-overlay>
                </b-modal>
              </div>
            </b-card>
          </div>
        </vue-loadmore>

        <div v-else class="no-likes-yet-container">
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
          <h2>Could Not Found Users</h2>
          <p>Try using different settings and filters</p>
          <!-- <b-button class="go-to-search-btn"
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
        ></b-button> -->
        </div>
      </b-overlay>
    </div>
    <!-- Without Infine Scroll -->
    <div v-else>
      <b-overlay :show="render" rounded="sm">
        <template #overlay>
          <GridLoader
            class="custom-class"
            color="#93652b"
            :loading="render"
            :size="10"
            sizeUnit="px"
          />
        </template>
        <div class="cards-container mt-3" v-if="peoples.length > 0">
          <b-card
            no-body
            class="person-card rounded-lg"
            v-for="(person, index) in loadData"
            :key="index"
          >
            <div
              class="image-container"
              :style="
                'background-image: url(' +
                CheckProfileImageOrEmpty(person.profile_images) +
                '); background-size:cover;'
              "
            >
              <!-- <b-img fluid :src="person.moreAboutMe.profileImagesPath[0]"></b-img> -->
              <div class="info">
                <div class="content">
                  <i v-if="person.spotlight_status > 0" class="top-pick">
                    <svg
                      data-name="Layer 1"
                      height="25"
                      class="mr-2"
                      id="toppick_icon"
                      viewBox="0 0 128 128"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title />
                      <path
                        class="cls-1"
                        d="M73.87,65.49l22-24.85a2.22,2.22,0,0,1,3.47,0l17.54,24.85"
                      />
                      <path
                        class="cls-1"
                        d="M11.14,65.49,28.68,40.63a2.22,2.22,0,0,1,3.47,0l22,24.85"
                      />
                      <path
                        class="cls-2"
                        d="M118.71,42.91,96.14,60.78,65.71,24a2.22,2.22,0,0,0-3.41,0L31.86,60.78,9.29,42.91A2.22,2.22,0,0,0,5.7,44.84L10.63,102a2.22,2.22,0,0,0,2.21,2H115.16a2.22,2.22,0,0,0,2.21-2l4.93-57.14A2.22,2.22,0,0,0,118.71,42.91Z"
                      />
                      <g class="cls-3">
                        <path
                          class="cls-1"
                          d="M115.9,69.46C104.73,90.7,88.33,96.8,70.71,99.74L31.86,104h83.3a2.22,2.22,0,0,0,2.21-2L121.16,58Z"
                        />
                      </g>
                      <path
                        class="cls-4"
                        d="M9.29,42.91A2.22,2.22,0,0,0,5.7,44.84L10.63,102a300.29,300.29,0,0,1,1.19-57.06Z"
                      />
                      <path
                        class="cls-5"
                        d="M94.16,58.06l1.55-3.44a.67.67,0,0,1,1.23,0l1.55,3.44,3.44,1.55a.67.67,0,0,1,0,1.23l-3.44,1.55-1.55,3.44a.67.67,0,0,1-1.23,0l-1.55-3.44-3.44-1.55a.67.67,0,0,1,0-1.23Z"
                      />
                      <polygon
                        class="cls-6"
                        points="51.81 62.75 51.81 81.6 64 88.56 76.12 81.61 76.19 62.75 64 55.71 51.81 62.75"
                      />
                      <polygon
                        class="cls-7"
                        points="56.24 66.17 56.24 78.17 64 82.8 71.76 78.34 71.76 66.17 64 61.7 56.24 66.17"
                      />
                      <polygon
                        class="cls-8"
                        points="76.12 81.61 71.76 78.34 64 82.8 64 88.56 76.12 81.61"
                      />
                      <polygon
                        class="cls-9"
                        points="64 55.71 64 61.7 56.24 66.17 51.81 62.75 64 55.71"
                      />
                    </svg>
                  </i>
                  <b-link
                    class="title text-capitalize"
                    :to="'/dashboard/profile/' + person.id"
                    target="_blank"
                    >{{ person.profileName }}</b-link
                  >
                  <div class="subtitle">
                    {{ person.age }} -
                    {{ person.location.city }}
                  </div>
                  <div class="subtitle">{{ person.distance }} Miles Away</div>
                </div>
                <div class="">
                  <div class="images-count">
                    {{ getImagesLength(person.gallery_images) }}
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
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <!-- <span class="custom-filter-mutual">Mutual</span> -->
                </div>
              </div>
            </div>
            <div class="person-footer">
              <!-- If User Have Subscription -->
              <div
                class="icon message-icon"
                v-if="
                  check_if_subscription_exist('platinum') ||
                  check_if_subscription_exist('lovenotes')
                "
                @click="openModal('messageModal_' + person.id)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <!-- For Free Plan -->
              <div class="icon message-icon" v-else @click="freePlanLoveNotes">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <div
                class="icon like-icon"
                v-if="!person.fancy"
                @click="
                  kan(
                    person.id,
                    person.profileName,
                    person.profile_images[0].url
                  )
                "
              >
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
              </div>

              <div class="icon fancied-icon" v-if="person.fancy">
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
              </div>

              <!-- Message Modal -->
              <b-modal
                :id="'messageModal_' + person.id"
                content-class="rounded-lg"
                body-class="rounded-lg"
                centered
                hide-header
                hide-footer
              >
                <b-overlay :show="loveNoteLoader" rounded="sm">
                  <template #overlay>
                    <GridLoader
                      class="custom-class"
                      color="#93652b"
                      :loading="loveNoteLoader"
                      :size="10"
                      sizeUnit="px"
                    />
                  </template>
                  <div class="userMessageModal">
                    <div class="icon float-right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        @click="closeModal('messageModal_' + person.id)"
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
                      <h2 class="text-center">Send Love Notes</h2>

                      <b-avatar
                        class="my-2"
                        size="lg"
                        v-if="person.profile_images.length > 0"
                        :src="person.profile_images[0].url"
                      ></b-avatar>
                      <b-avatar
                        :to="'/dashboard/profile/' + person.id"
                        v-else
                        src="@/assets/profiles/empty.png"
                        size="lg"
                        rounded="lg"
                      >
                      </b-avatar>
                      <p class="name text-capitalize my-2">
                        {{ person.profileName }}
                      </p>
                    </div>

                    <div class="main">
                      <b-form-group>
                        <b-form-textarea
                          class="custom-field-textarea"
                          v-model="loveNoteMessage"
                          rows="6"
                          no-resize
                        ></b-form-textarea>
                      </b-form-group>
                    </div>

                    <div class="btn-container">
                      <b-button
                        class="modal-btn"
                        @click="sendLoveNote(person.id, person.profileName)"
                        >Send</b-button
                      >
                    </div>
                  </div>
                </b-overlay>
              </b-modal>
            </div>
          </b-card>
        </div>

        <div v-else class="no-likes-yet-container">
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
          <h2>Could Not Found Users</h2>
          <p>Try using different settings and filters</p>
          <!-- <b-button class="go-to-search-btn"
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
        ></b-button> -->
        </div>
      </b-overlay>

      <div
        class="btn-container"
        v-if="peoples.length > 10 && length < peoples.length"
      >
        <b-button class="custom-btn-1" @click="nextPage">
          <b-overlay wrap-tag="true" :show="nextPageloader">
            View More
          </b-overlay>
        </b-button>
      </div>
    </div>
    <b-modal
      hide-header
      hide-footer
      centered
      content-class="rounded-lg"
      body-class="rounded-lg"
      id="saveSearchModal"
    >
      <b-overlay :show="searchModalLoader" rounded="sm">
        <template #overlay>
          <GridLoader
            class="custom-class"
            color="#93652b"
            :loading="searchModalLoader"
            :size="10"
            sizeUnit="px"
          />
        </template>
        <h2 class="title">Save This Search</h2>

        <p class="subtitle mt-4">
          You can save the criteria and run the same search again later
        </p>

        <b-form-input
          class="custom-input"
          type="text"
          v-model="saveSearchName"
          placeholder="Name your search..."
        ></b-form-input>

        <b-form-checkbox class="email-check" v-model="saveSearchEmail"
          >Email me my matches</b-form-checkbox
        >

        <b-button class="mt-4 custom-btn-1" @click="savedSearch" block
          >Save</b-button
        >
      </b-overlay>
    </b-modal>
  </div>
</template>

<script>
import Switches from "vue-switches";
import axios from "axios";
import { apiUrl, headers } from "@/constants/config";
import { getCurrentUser } from "@/utils/index";
import { mapGetters } from "vuex";
import Vue from "vue";
import { CometChat } from "@cometchat-pro/chat";
import Swal from "sweetalert2";

export default {
  components: {
    switches: Switches,
  },
  data() {
    return {
      loveNoteMessage: "",
      loveNoteLoader: false,
      sorted: false,
      personLoader: false,
      infinitebusy: false,
      nextPageloader: false,
      pageNo: 1,
      total: 0,
      length: 10,
      page: 1,
      pageSize: 10,
      finished: false,
      error: false,
      pageIncrement: 10,
      render: false,
      searchModalLoader: false,
      saveSearchName: "",
      saveSearchEmail: false,
      savedSearches: [
        {
          id: 1,
          name: "My Search 1",
          search: {
            visibility: {
              status: "online",
            },
            interests: {
              viewHobbiesOption: [],
              hobbieOption: [],
              doYouHaveChildren: [],
              petOption: [],
              doYouWantMoreChildren: [],
              howOftenDoYouExercise: [],
              doYouDrink: [],
              doYouSmoke: [],
              havePets: [],
              relationshipIAmSeeking: [],
            },
            looks: {
              bodyType: [],
              height: [],
            },
            personal: {
              livingSituation: [],
              maritalStatus: [],
              employmentStatus: [],
              willingToRelocate: [],
              family: [],
              relocation: [],
              isrealiteType: [],
              education: [],
            },
            lifestyle: {
              iBelieveIAM: [],
              maritalBeliefSystem: [],
              spiritualValue: [],
              studyHabits: [],
              studyBible: [],
              anyAffiliation: [],
              yearsInTruth: [],
              spiritualBackground: [],
              isrealitePracticeKeeping: [],
              kingdomGiftsTags: [],
              passionsTags: [],
              doctrineType: [],
              maritalBelief: [],
              lawKeeping: [],
              bibleStudy: [],
              cleanEatingHabits: [],
            },
            search: "",
            seeking: "",
            minAge: "",
            maxAge: "",
            radius: "",
            zipcode: "",
            filters: [],
          },
        },
        {
          id: 2,
          name: "My Search 2",
        },
      ],
      topfilter: {
        gender: null,
        ageFrom: "20",
        ageTo: "40",
        miles: "60",
        zipcode: null,
      },
      editAge: false,
      editAge2: false,
      editMiles: false,
      editZipcode: false,
      filters: [],
      peoples: [
        // {
        //   name: "Bonita James",
        //   thumbnail: "https://i.ibb.co/F3ZdMwz/Picture-4.jpg",
        //   age: "23",
        //   location: "GreenBoro, NC",
        //   images: 10,
        // },
        // {
        //   name: "Alisa Diaz",
        //   thumbnail: "https://i.ibb.co/TkKN19B/Picture-3.jpg",
        //   age: "23",
        //   location: "GreenBoro, NC",
        //   images: 10,
        // },
        // {
        //   name: "Alexendra Jonah",
        //   thumbnail: "https://i.ibb.co/x3CSh6G/Picture-9.jpg",
        //   age: "23",
        //   location: "GreenBoro, NC",
        //   images: 10,
        // },
        // {
        //   name: "Juneh Alia",
        //   thumbnail: "https://i.ibb.co/M1YMbYr/Picture-10.jpg",
        //   age: "23",
        //   location: "GreenBoro, NC",
        //   images: 10,
        // },
      ],
      filtersRemaining: false,
      infinteScrollSwitch: false,
      filter1: false,
      checkedCheckboxes: [],
      selectedRadio: 0,
      genders: [
        { text: "Man", value: "man" },
        { text: "Women", value: "women" },
        { text: "More", value: "more" },
      ],
      showMeOptions: [
        { text: "Man", value: "man" },
        { text: "Women", value: "women" },
        { text: "More", value: "more" },
      ],
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
          text: "Yes - they don't live at home",
          value: "Yes - they don't live at home",
        },
        {
          text: "Yes - they sometimes live at home",
          value: "Yes - they sometimes live at home",
        },
        {
          text: "Yes - they live at home",
          value: "Yes - they live at home",
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
          text: "Not sure",
          value: "Not sure",
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
        { text: "Few extra pounds", value: "Few extra pounds" },
        { text: "Full figured", value: "Full figured" },
        { text: "Large and lovely", value: "Large and lovely" },
        { text: "Big teddy bear", value: "Big teddy bear" },
      ],
      doYouDrinkOptions: [
        {
          text: "Don’t drink",
          value: "Don’t drink",
        },
        {
          text: "I drink socially",
          value: "I drink socially",
        },
        {
          text: "On special occasions",
          value: "On special occasions",
        },
        {
          text: "I will drink by myself",
          value: "I will drink by myself",
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
          text: "The light of zion",
          value: "The light of zion",
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
      viewHobbiesOptions: [
        { text: "Documentaries", value: "Documentaries" },
        { text: "Sports", value: "Sports" },
        { text: "Reality Shows", value: "Reality Shows" },
        { text: "Movie Buff", value: "Movie Buff" },
        { text: "Youtube Surfer", value: "Youtube Surfer" },
        { text: "News Watcher", value: "News Watcher" },
        { text: "DYI shows", value: "DYI shows" },
        { text: "Soap Operas", value: "Soap Operas" },
        { text: "Anything TV", value: "Anything TV" },
      ],
      hobbiesOptions: [
        { text: "Designing", value: "designing" },
        { text: "Movies", value: "movies" },
      ],
      petsOptions: [
        { text: "Have Pets", value: "have_pets" },
        { text: "Dont Have Pets", value: "dont_have_pets" },
      ],
      bodyTypeOptions: [
        { text: "Petite", value: "Petite" },
        { text: "Slim", value: "Slim" },
        { text: "Athletic", value: "Athletic" },
        { text: "Average", value: "Average" },
        { text: "Few Extra Pounds", value: "Few Extra Pounds" },
        { text: "Full Figured", value: "Full Figured" },
        { text: "Large and Lovely", value: "Large and Lovely" },
        { text: "It does not matter", value: "It does not matter" },
      ],
      styleTypeOptions: [
        { text: "All-natural hair", value: "All-natural hair" },
        {
          text: "I don’t care if the hair is processed ",
          value: "I don’t care if the hair is processed ",
        },
        {
          text: "Head coverings (For women)",
          value: "Head coverings (For women)",
        },
        {
          text: "I don’t care how he/she keeps the head or hair",
          value: "I don’t care how he/she keeps the head or hair",
        },
        {
          text: "No pants only dresses (For women)",
          value: "No pants only dresses (For women)",
        },
        {
          text: "No sagging or tight pants (for men)",
          value: "No sagging or tight pants (for men)",
        },
        { text: "I like bald men", value: "I like bald men" },
        {
          text: "I like locs if he/she can grow them",
          value: "I like locs if he/she can grow them",
        },
        {
          text: "I like beards if he can grow one",
          value: "I like beards if he can grow one",
        },
        {
          text: "I like a modestly dressed mate (no revealing skin)",
          value: "I like a modestly dressed mate (no revealing skin)",
        },
        {
          text: "I don’t mind seeing his/her shape",
          value: "I don’t mind seeing his/her shape",
        },
        {
          text: "Style or appearance does not matter to me",
          value: "Style or appearance does not matter to me",
        },
      ],
      familyOptions: [
        { text: "Live alone", value: "Live alone" },
        { text: "Live with friends", value: "Live with friends" },
        { text: "Live with family", value: "Live with family" },
        { text: "Live with kids", value: "Live with kids" },
        { text: "Live with spouse", value: "Live with spouse" },
        { text: "Live as a sister wife", value: "Live as a sister wife" },
        { text: "Other", value: "Other" },
        { text: "Prefer not to say", value: "Prefer not to say" },
      ],
      relocationOptions: [
        { text: "Willing to relocate", value: "Willing to relocate" },
        {
          text: "I am not willing to relocate (Deal Breaker)",
          value: "I am not willing to relocate (Deal Breaker)",
        },
        {
          text: "Maybe willing to relocate",
          value: "Maybe willing to relocate",
        },
      ],
      isrealiteTypeOptions: [
        {
          text: "African Diaspora (So-called Black)",
          value: "African Diaspora (So-called Black)",
        },
        {
          text: "Mixed Multitude (Grafted in)",
          value: "Mixed Multitude (Grafted in)",
        },
        {
          text: "Causation (Grafted in)",
          value: "Causation (Grafted in)",
        },
        {
          text: "Don’t want to Identify",
          value: "Don’t want to Identify",
        },
      ],
      educationOptions: [
        {
          text: "Degree",
          value: "Degree",
        },
        {
          text: "Non- Degree",
          value: "Non- Degree",
        },
        {
          text: "Some College",
          value: "Some College",
        },
        {
          text: "Currently in school",
          value: "Currently in school",
        },
        {
          text: "Self Educated",
          value: "Self Educated",
        },
        {
          text: "Prefer not to say",
          value: "Prefer not to say",
        },
        {
          text: "Certified Skills",
          value: "Certified Skills",
        },
        {
          text: "Gifted with abilities",
          value: "Gifted with abilities",
        },
      ],
      visibilityOptions: [
        { text: "Have Photos", value: "have_photos" },
        { text: "Are Online Now", value: "online_now" },
        { text: "Within Last 24 Hours", value: "last24hours" },
        { text: "Within Last 30 Days", value: "last30days" },
      ],
      visibility: {
        selected: [], // Must be an array reference!

        search: "",
      },
      interests: {
        doYouHaveChildren: [],
        petOption: [],
        doYouWantMoreChildren: [],
        howOftenDoYouExercise: [],
        doYouDrink: [],
        doYouSmoke: [],
        havePets: [],
        relationshipIAmSeeking: [],
      },
      looks: {
        bodyType: [],
        height: {
          feet: null,
          inches: null,
        },
      },
      personal: {
        livingSituation: [],
        maritalStatus: [],
        employmentStatus: [],
        willingToRelocate: [],
        family: [],
        relocation: [],
        isrealiteType: [],
        education: [],
      },
      lifestyle: {
        iBelieveIAM: [],
        maritalBeliefSystem: [],
        spiritualValue: [],
        studyHabits: [],
        studyBible: [],
        anyAffiliation: [],
        yearsInTruth: [],
        spiritualBackground: [],
        isrealitePracticeKeeping: [],
        kingdomGiftsTags: [],
        passionsTags: [],
        doctrineType: [],
        maritalBelief: [],
        lawKeeping: [],
        bibleStudy: [],
        cleanEatingHabits: [],
      },
      search: {
        keywords: "",
      },
      doctrineTypeOptions: [
        {
          text: "Messianic",
          value: "Messianic",
        },
        {
          text: "Non-Messianic",
          value: "Non-Messianic",
        },
      ],
      maritalBeliefOptions: [
        {
          text: "Only Monogamy",
          value: "Only Monogamy",
        },
        {
          text: "Only Poly-Marriage",
          value: "Only Poly-Marriage",
        },
        {
          text: "I practice Monogamy but may change",
          value: "I practice Monogamy but may change",
        },
        {
          text: "Seeking sister wife",
          value: "Seeking sister wife",
        },
      ],
      lawKeepingOptions: [
        {
          text: "Keeping Feast Days",
          value: "Keeping Feast Days",
        },
        {
          text: "High Holy Days",
          value: "High Holy Days",
        },
        {
          text: "I only observe days (Don’t try to keep them)",
          value: "I only observe days (Don’t try to keep them)",
        },
        {
          text: "Strict adherence to the Laws, statutes, and commandments (Deal breakers) ",
          value:
            "Strict adherence to the Laws, statutes, and commandments (Deal breakers) ",
        },
        {
          text: "I am Flexible",
          value: "I am Flexible",
        },
        {
          text: "I believe it doesn’t take all that",
          value: "I believe it doesn’t take all that",
        },
        {
          text: "I believe we need to ware fringes all the time",
          value: "I believe we need to ware fringes all the time",
        },
      ],
      bibleStudyOptions: [
        {
          text: "Torah only",
          value: "Torah only",
        },
        {
          text: "Torah & Tanakh (old testament only)",
          value: "Torah & Tanakh (old testament only)",
        },
        {
          text: "66 only King James 1611",
          value: "66 only King James 1611",
        },
        {
          text: "66 and Apocrypha",
          value: "66 and Apocrypha",
        },
        {
          text: "66, Apocrypha, and any other considered (Lost books or Secret books)",
          value:
            "66, Apocrypha, and any other considered (Lost books or Secret books)",
        },
      ],
      cleanEatingHabitsOptions: [
        {
          text: "I keep all the dietary laws",
          value: "I keep all the dietary laws",
        },
        {
          text: "I believe the dietary law is done away with",
          value: "I believe the dietary law is done away with",
        },
        {
          text: "I am a Vegan or Vegetarian seeking the same",
          value: "I am a Vegan or Vegetarian seeking the same",
        },
        {
          text: "I am a Vegan or Vegetarian but don’t mind he/she eats meat",
          value: "I am a Vegan or Vegetarian but don’t mind he/she eats meat",
        },
        {
          text: "I grow my own food",
          value: "I grow my own food",
        },
        {
          text: "I don’t eat out",
          value: "I don’t eat out",
        },
      ],
      currentSelect: "",
    };
  },
  methods: {
    CheckProfileImageOrEmpty(profileimages) {
      if (profileimages.length > 0) {
        return profileimages[0].url;
      } else {
        return "@/assets/profiles/empty.png";
      }
    },
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
    goToProfile(url) {
      this.$router.push(url).catch((err) => console.log(err));
    },
    onRefresh(done) {
      this.peoples = [];
      this.length = 10;
      this.finished = false;
      // this.submit();

      done();
    },
    onLoad(done) {
      if (this.length <= this.peoples.length) {
        // this.submit();
        this.length = this.length + 10;
      } else {
        // all data loaded
        this.finished = true;
      }
      done();
    },
    kan(targetUid, targetName, targetImage) {
      this.render = true;

      let data = {
        myUid: this.currentUser.id,
        targetsUid: targetUid,
        myName: this.currentUser.profileName,
        myImage: this.currentUser.profile_images[0].url,
        targetImage: targetImage,
        targetName: targetName,
      };

      // console.log("body -> ", data);

      axios
        .post(`${apiUrl}/swap/fancy`, data, { headers })
        .then((response) => {
          // console.log("res -> ", response);
          const data = response.data;
          if (response.status === 200) {
            if (data.status) {
              this.render = false;
              if (data.matched) {
                Vue.$toast.default(
                  `You are matched with ${targetName} successfully!`
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
                Vue.$toast.default(`You have fancy ${targetName}!`);
                this.$router.push("/dashboard/favored");
              }
            } else {
              this.render = false;
              console.log("err -> ", data.error);
              // Vue.$toast.success(`${data.error}`);
            }
          } else {
            // console.log(response);
            this.render = false;

            Vue.$toast.error(data.error);
          }
        })
        .catch((err) => {
          this.render = false;
          console.log("err -> ", err);
          // Vue.$toast.error(err.message);
        });
    },
    loadMore() {
      this.infinitebusy = true;
      this.pageNo = this.pageNo + this.pageIncrement;

      let data = {
        uid: this.currentUser.id,
        filters: this.filters,
        from: this.pageNo,
      };
      axios
        .post(`${apiUrl}/seeking/mutual-seeking`, data, { headers })
        .then((res) => {
          debugger;
          console.log("res -> ", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              this.infinitebusy = false;

              // Vue.$toast.open({
              //   message: "Processing Done!",
              //   type: "success",
              // });

              this.peoples = data.data;
              this.nextPageloader = false;

              console.log("seeking data -> ", this.peoples);
            } else {
              this.infinitebusy = false;
              this.nextPageloader = false;

              console.log("err -> ", data.error);
            }
          } else {
            this.infinitebusy = false;
            this.nextPageloader = false;

            console.log("err -> ", data.error);
          }
        })
        .catch((err) => {
          this.infinitebusy = false;
          this.nextPageloader = false;

          console.log(err);
        });
    },
    nextPage() {
      // this.nextPageloader = true;
      this.length = this.length + 10;
      // this.submit();
    },
    savedSearch() {
      let data = {
        name: this.saveSearchName,
        email: this.saveSearchEmail,
        uid: this.currentUser.id,
        filters: this.filters,
      };

      axios
        .post(`${apiUrl}/seeking/save_search`, data)
        .then((res) => {
          console.log("res -> ", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              this.searchModalLoader = false;

              Vue.$toast.open({
                message: `'${this.saveSearchName}' has been saved!`,
                type: "success",
              });

              this.closeModal("saveSearchModal");
              this.getAllSavedSearches();
            } else {
              this.searchModalLoader = false;
              Vue.$toast.open({
                message: `Error Occurred: ${data.error}`,
                type: "error",
              });
            }
          } else {
            this.searchModalLoader = false;
            Vue.$toast.open({
              message: "Unknown Error Occurred!",
              type: "error",
            });
          }
        })
        .catch((err) => {
          this.searchModalLoader = false;
          console.log(err);
          Vue.$toast.open({
            message: err.message,
            type: "error",
          });
        });
    },
    getAllSavedSearches() {
      // let data = {
      //   uid: this.currentUser.uid,
      // };

      axios
        .get(`${apiUrl}/seeking/get_saved_all_searches`, { headers })
        .then((res) => {
          console.log("res -> ", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              this.savedSearches = data.data;
            } else {
              this.searchModalLoader = false;
              Vue.$toast.open({
                message: `Error Occurred: ${data.error}`,
                type: "error",
              });
            }
          } else {
            this.searchModalLoader = false;
            Vue.$toast.open({
              message: "Unknown Error Occurred!",
              type: "error",
            });
          }
        })
        .catch((err) => {
          this.searchModalLoader = false;
          console.log(err);
          Vue.$toast.open({
            message: err.message,
            type: "error",
          });
        });
    },
    selectTopFilter(field, value) {
      // gender: "Women",
      // ageFrom: "31",
      // ageTo: "21",
      // miles: "59",
      // zipcode: "10528",
      switch (field) {
        case "gender":
          this.topfilter[field] = value;

          let found = false;

          this.filters.filter((x, index) => {
            if (x.key === "seeking") {
              found = true;
              this.filters[index] = {
                key: "seeking",
                values: [value],
              };
            }
          });

          if (!found) {
            this.filters.push({
              key: "seeking",
              values: [value],
            });
          }

          break;

        case "ageFrom":
          let found1 = false;

          this.filters.filter((x, index) => {
            if (x.key === "age") {
              found1 = true;
              this.filters[index] = {
                key: "age",
                values: [this.topfilter.ageFrom, this.topfilter.ageTo],
              };
            }
          });

          if (!found1) {
            this.filters.push({
              key: "age",
              values: [this.topfilter.ageFrom, this.topfilter.ageTo],
            });
          }
          break;

        case "ageTo":
          let found2 = false;

          this.filters.filter((x, index) => {
            if (x.key === "age") {
              found2 = true;
              this.filters[index] = {
                key: "age",
                values: [this.topfilter.ageFrom, this.topfilter.ageTo],
              };
            }
          });

          if (!found2) {
            this.filters.push({
              key: "age",
              values: [this.topfilter.ageFrom, this.topfilter.ageTo],
            });
          }
          break;

        case "miles":
          let found3 = false;

          this.filters.filter((x, index) => {
            if (x.key === "miles") {
              found3 = true;
              this.filters[index] = {
                key: "miles",
                values: [this.topfilter.miles],
              };
            }
          });

          if (!found3) {
            this.filters.push({
              key: "miles",
              values: [this.topfilter.miles],
            });
          }
          break;

        case "zipcode":
          let found4 = false;

          this.filters.filter((x, index) => {
            if (x.key === "zipcode") {
              found4 = true;
              this.filters[index] = {
                key: "zipcode",
                values: [this.topfilter.zipcode],
              };
            }
          });

          if (!found4) {
            this.filters.push({
              key: "zipcode",
              values: [this.topfilter.zipcode],
            });
          }
          break;

        default:
          break;
      }
    },
    removeSingleFilter(index) {
      this.filters.splice(index, 1);
    },
    clearAllFilters() {
      this.filters.splice(0);
    },
    openModal(id) {
      this.$bvModal.show(id);
    },
    closeModal(id) {
      this.$bvModal.hide(id);
    },
    checkButtonCheck(i) {
      const index = this.checkedCheckboxes.indexOf(i);
      if (index === -1) {
        this.checkedCheckboxes.push(i);
      } else {
        this.checkedCheckboxes.splice(index, 1);
      }
    },
    submit() {
      this.render = true;

      let data = {
        uid: this.currentUser.id,
        filters: this.filters,
        from: this.pageNo,
      };
      debugger;
      axios
        .post(`${apiUrl}/seeking/mutual-seeking`, data, { headers })
        .then((res) => {
          console.log("res -> ", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              this.render = false;
              // Vue.$toast.open({
              //   message: "Processing Done!",
              //   type: "success",
              // });

              this.peoples = data.peoples;
              this.total = this.peoples.length;
              console.log("total -> ", this.total);
              this.nextPageloader = false;

              console.log("seeking data -> ", this.peoples);
            } else {
              this.render = false;
              this.nextPageloader = false;

              console.log("err -> ", data.error);
            }
          } else {
            this.render = false;
            this.nextPageloader = false;

            console.log("err -> ", data.error);
          }
        })
        .catch((err) => {
          this.render = false;
          this.nextPageloader = false;
          console.log(err);
          // Vue.$toast.open({
          //   message: err,
          //   type: "error",
          // });
        });

      console.log("data -> ", data);
    },
    sort() {
      this.sorted = !this.sorted;

      // if (!sorted) {
      //   this.peoples.sort(function (a, b) {
      //     return (
      //       this.dateToTimestamp(b.created) -
      //       this.dateToTimestamp(a.created)
      //     );
      //   });
      // } else {
      //   this.peoples.sort(function (a, b) {
      //     return (
      //       this.dateToTimestamp(a.created) -
      //       this.dateToTimestamp(b.created)
      //     );
      //   });
      // }
    },
    dateToTimestamp(date) {
      let newDate = moment(date).valueOf();
      return newDate;
    },
    getImagesLength(image) {
      let length = image.length;
      return length;
    },
    applySavedSearch(filters) {
      this.filters = filters;
      this.submit();
    },
    sendLoveNote(targetUid, targetName) {
      this.loveNoteLoader = true;
      let body = {
        uid: this.currentUser.id,
        targetUid: targetUid,
      };

      axios
        .post(`${apiUrl}/user/check-love-note-count`, body, { headers })
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
                        // console.log("response -> ", response);
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
    freePlanLoveNotes() {
      Vue.$toast.default(`Your Plan Does Not Includes Sending Love Notes!`);
    },
  },
  computed: {
    ...mapGetters(["currentUser"]),
    currentUser2() {
      let user = getCurrentUser();
      return user;
    },
    loadData() {
      let data = this.peoples;
      let slicedData = data.slice(0, this.length);
      console.log("slicedData -> ", slicedData);
      if (this?.sorted) {
        const revMyArr = [].concat(slicedData).reverse();
        return revMyArr;
      } else {
        return slicedData;
      }
      // return this.peoples;
    },
  },
  mounted() {
    setTimeout(() => {
      this.topfilter = {
        ageFrom: "20",
        ageTo: "40",
        miles: "60",
        gender: this.currentUser.seeking,
        zipcode: this.currentUser.location.zipcode,
      };
      if (this.topfilter.gender) {
        this.filters.push({
          key: "seeking",
          values: [this.currentUser.seeking],
        });
      }

      if (this.topfilter.ageFrom && this.topfilter.ageTo) {
        this.filters.push({
          key: "age",
          values: [this.topfilter.ageFrom, this.topfilter.ageTo],
        });
      }

      if (this.topfilter.miles) {
        this.filters.push({
          key: "miles",
          values: [this.topfilter.miles],
        });
      }

      if (this.topfilter.zipcode) {
        this.filters.push({
          key: "zipcode",
          values: [this.currentUser.location.zipcode],
        });
      }

      this.submit();
      this.getAllSavedSearches();
    }, 500);
  },
  watch: {
    topfilter: {
      deep: true,
      handler(val) {
        this.submit();
      },
    },
    filters(newval) {
      console.log("newval -> ", newval);
      this.submit();
      if (newval) {
        if (newval.length === 0) {
          this.filtersRemaining = false;
        } else {
          this.filtersRemaining = true;
        }
      }
    },
    visibility: {
      deep: true,
      handler(val) {
        for (let key in val) {
          if (val[key].length > 0) {
            console.log(`${key} -> `, val[key]);
            let found = false;

            this.filters.filter((x, index) => {
              if (x.key === `visibility.${key}`) {
                found = true;
                this.filters[index] = {
                  key: `visibility.${key}`,
                  values: val[key],
                };
              }
            });

            if (!found) {
              this.filters.push({
                key: `visibility.${key}`,
                values: val[key],
              });
            }
          } else {
            this.filters.filter((x, index) => {
              if (x.key === `visibility.${key}`) {
                this.filters.splice(index, 1);
              }
            });
          }
        }
      },
    },
    interests: {
      deep: true,
      handler(val, old) {
        // console.log("interests watcher -> ", val);

        for (let key in val) {
          if (val[key].length > 0) {
            console.log(`${key} -> `, val[key]);
            let found = false;

            this.filters.filter((x, index) => {
              if (x.key === `moreAboutMe.${key}`) {
                found = true;
                this.filters[index] = {
                  key: `moreAboutMe.${key}`,
                  values: val[key],
                };
              }
            });

            if (!found) {
              this.filters.push({
                key: `moreAboutMe.${key}`,
                values: val[key],
              });
            }
          } else {
            this.filters.filter((x, index) => {
              if (x.key === key) {
                this.filters.splice(index, 1);
              }
            });
          }
        }
      },
    },
    looks: {
      deep: true,
      handler(val) {
        console.log("looks watcher -> ", val);

        for (let key in val) {
          if (key === "height") {
            if (val[key].feet && val[key].inches) {
              let found = false;
              console.log(`Height -> ${val[key].feet} - ${val[key].inches}`);

              this.filters.filter((x, index) => {
                if (x.key === `${key}`) {
                  found = true;
                  this.filters[index] = {
                    key: `${key}`,
                    values: [val[key].feet, val[key].inches],
                  };
                }
              });

              if (!found) {
                console.log("height filter -> ", {
                  key: `${key}`,
                  values: [val[key].feet, val[key].inches],
                });
                this.filters.push({
                  key: `${key}`,
                  values: [val[key].feet, val[key].inches],
                });
              }

              console.log("filters -> ", this.filters);
            } else {
              this.filters.filter((x, index) => {
                if (x.key === `${key}`) {
                  this.filters.splice(index, 1);
                }
              });
            }
          } else {
            if (val[key].length > 0) {
              console.log(`${key} -> `, val[key]);
              let found = false;

              this.filters.filter((x, index) => {
                if (x.key === `${key}`) {
                  found = true;
                  this.filters[index] = {
                    key: `${key}`,
                    values: val[key],
                  };
                }
              });

              if (!found) {
                this.filters.push({
                  key: `${key}`,
                  values: val[key],
                });
              }
            } else {
              this.filters.filter((x, index) => {
                if (x.key === `${key}`) {
                  this.filters.splice(index, 1);
                }
              });
            }
          }
        }
      },
    },
    personal: {
      deep: true,
      handler(val) {
        console.log("looks watcher -> ", val);

        for (let key in val) {
          if (val[key].length > 0) {
            console.log(`${key} -> `, val[key]);
            let found = false;

            this.filters.filter((x, index) => {
              if (x.key === `moreAboutMe.${key}`) {
                found = true;
                this.filters[index] = {
                  key: `moreAboutMe.${key}`,
                  values: val[key],
                };
              }
            });

            if (!found) {
              this.filters.push({
                key: `moreAboutMe.${key}`,
                values: val[key],
              });
            }
          } else {
            this.filters.filter((x, index) => {
              if (x.key === `moreAboutMe.${key}`) {
                this.filters.splice(index, 1);
              }
            });
          }
        }
      },
    },
    lifestyle: {
      deep: true,
      handler(val) {
        console.log("lifestyle watcher -> ", val);
        for (let key in val) {
          if (val[key].length > 0) {
            console.log(`${key} -> `, val[key]);
            let found = false;

            this.filters.filter((x, index) => {
              if (x.key === `isrealiteFilter.${key}`) {
                found = true;
                this.filters[index] = {
                  key: `isrealiteFilter.${key}`,
                  values: val[key],
                };
              }
            });

            if (!found) {
              this.filters.push({
                key: `isrealiteFilter.${key}`,
                values: val[key],
              });
            }
          } else {
            this.filters.filter((x, index) => {
              if (x.key === `isrealiteFilter.${key}`) {
                this.filters.splice(index, 1);
              }
            });
          }
        }
      },
    },
    search: {
      deep: true,
      handler(val) {
        console.log("search watcher -> ", val);

        if (val.keywords) {
          let found = false;

          this.filters.filter((x, index) => {
            if (x.key === "visibility.search") {
              found = true;
              this.filters[index] = {
                key: "visibility.search",
                values: val,
              };
            }
          });

          if (!found) {
            this.filters.push({
              key: "visibility.search",
              values: val,
            });
          }
        } else {
          this.filters.filter((x, index) => {
            if (x.key === "visibility.search") {
              this.filters.splice(index, 1);
            }
          });
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
/* Mobile Screen Classes */
@media only screen and (max-width: 800px) {
  .cards-container {
    display: grid;
    grid-template-columns: repeat(1, auto);
    column-gap: 1rem;
    row-gap: 1rem;
  }
  .search-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .person-card .image-container {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    /* border-radius: 10px; */
    /* min-width: 200px; */
    min-height: 200px;
    background-size: cover;
    display: flex;
    align-items: flex-end;
  }

  .person-card .image-container .info {
    width: 100%;
    background: rgba(0, 0, 0, 0.2) !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }

  .person-card .image-container .info .content {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .person-card .image-container .info .content .title {
    font-size: 1.2rem;
    color: #fff;
  }

  .person-card .image-container .info .content .subtitle {
    color: #fff;
  }

  .person-card .image-container .info .images-count {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    color: #fff;
  }

  .person-card .person-footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
  }
}

/* Laptop Screen Classes */
@media only screen and (min-width: 800px) {
  .cards-container {
    display: grid;
    grid-template-columns: repeat(4, auto);
    column-gap: 1rem;
    row-gap: 1rem;
  }
  .search-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .person-card .image-container {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    /* border-radius: 10px; */
    /* min-width: 200px; */
    min-height: 200px;
    background-size: cover;
    display: flex;
    align-items: flex-end;
  }

  .person-card .image-container .info {
    width: 100%;
    background: rgba(0, 0, 0, 0.2) !important;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }

  .person-card .image-container .info .content {
    display: flex;
    flex-direction: column;
  }

  .person-card .image-container .info .content .title {
    font-size: 1.2rem;
    color: #fff;
  }

  .person-card .image-container .info .content .subtitle {
    color: #fff;
  }

  .person-card .image-container .info .images-count {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    color: #fff;
  }

  .person-card .person-footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
  }
}

.person-card .image-container .info .content {
  display: flex;
  flex-direction: column;
}

.right-bubbles {
  display: flex;
  flex-direction: column;
}

.custom-filter-mutual {
  transition: all ease 0.5s;
  // border: 1px solid #93652b;
  // color: #93652b;
  background-color: #67e8f9;
  text-align: center;
  padding: 0.3rem 0.5rem;
  border-radius: 20rem;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  margin-top: 2px;
  margin-bottom: 2px;
}

.custom-filter-reversed {
  transition: all ease 0.5s;
  // border: 1px solid #fde68a;
  // color: #fde68a;
  background-color: #fde68a;
  text-align: center;
  padding: 0.3rem 0.5rem;
  border-radius: 20rem;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  margin-top: 2px;
  margin-bottom: 2px;
}

#toppick_icon {
  .cls-1 {
    fill: #f2bc0f;
  }
  .cls-2 {
    fill: #f8dc25;
  }
  .cls-3 {
    opacity: 0.5;
  }
  .cls-4,
  .cls-5,
  .cls-7,
  .cls-9 {
    fill: #fff;
  }
  .cls-4 {
    opacity: 0.4;
  }
  .cls-6 {
    fill: #f85565;
  }
  .cls-7 {
    opacity: 0.15;
  }
  .cls-8 {
    fill: #393c54;
    opacity: 0.2;
  }
  .cls-9 {
    opacity: 0.3;
  }
}

.top-pick {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.sort-icon-activated svg {
  stroke: #93652b;
}

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

.userMessageModal .icon svg:hover {
  fill: #93652b;
  cursor: pointer;
  transform: scale(110%);
}

.userMessageModal .top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.userMessageModal .top .user-avatar {
}

.userMessageModal .main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}

.userMessageModal .main .message-field {
  min-width: 300px;
}
.userMessageModal .main .name {
  font-size: 2rem;
}

.no-likes-yet-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 300px;
}

.filters-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
}

.filters-container .inner-options {
  display: flex;
  flex-wrap: wrap;
  /* line-break: auto; */
  flex-direction: row;
  gap: 0.3rem;
}

.saved-searches {
  padding: 1rem;
}

.searches-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.single-search {
}

.search-card {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}

.underline-text:hover {
  cursor: pointer;
  transform: scale(104%);
}

.underline-input {
  width: 30px;
  border: none;
  outline: none;
}

.underline-input-2 {
  width: 60px;
  border: none;
  outline: none;
}

.fields-container {
  display: flex;
}

.custom-field {
  border-radius: 25px !important;
  height: 45px !important;
  border-color: #93652b !important;
  padding: 20px !important;
}

.filter-1-tabs-nav .filter-1-tabs-nav-link {
  padding: 0px !important;
  margin: 0px !important;
  transition: all ease 0.5s;
}

.filter-1-tabs-nav .filter-1-tabs-nav-link:active {
  background-color: #93652b;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.filter-1-section-option {
  border: 1px solid #bebebe;
  border-radius: 10px;
  padding: 1rem 1.3rem;
  min-width: 120px;
  color: #bebebe;
  transition: 0.5s ease all;
}

/* .filter-1-section-option-active {
  background-color: #93652b;
} */

.filter-1-section-option:hover {
  color: #fff !important;
}

/* .filter-1-section-option:active {
  background-color: #a1722e !important;
} */

/* .filter-1-section-option:focus {
  background-color: #a1722e !important;
} */

#saveSearchModal .title {
  color: #93652b;
  text-align: center;
}

#saveSearchModal .subtitle {
  text-align: center;
}

#saveSearchModal .custom-input {
  background-color: #f3f6f8;
  border-radius: 10px;
  padding: 1rem;
}

.btn-container {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.email-check {
  margin-top: 1rem;
  text-align: center;
}

.search-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search-section .filters {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.save-btn {
  background-color: #93652b !important;
  outline: none;
  border: none;
  border-radius: 10px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7rem 1.3rem;
}

.filter-clear-all {
  color: #93652b;
}

.filter-clear-all:hover {
  color: #b69873;
}

.filters-on-section {
  margin: 1rem 0;
}

.filters-on-section .top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.filter-cancel-icon {
  cursor: pointer;
}

.custom-filter {
  color: #93652b;
  margin: 0.2rem;
  transition: all ease 0.5s;
  display: flex;
  justify-content: space-between;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

.custom-filter:hover {
  transform: scale(110%);
  cursor: pointer;
}

.search-section .filters .icon svg {
  transition: all 0.5s ease;
}

.search-section .filters .icon svg:hover {
  cursor: pointer;
  fill: #b69873;
  stroke: #b69873;
  transform: scale(110%);
}

.search-section .filters .icon-1 svg {
  transition: all 0.5s ease;
}

.search-section .filters .icon-1 svg:hover {
  cursor: pointer;
  stroke: #b69873;
  transform: scale(110%);
}

.view-more-btn {
  background-color: #f3f6f8;
  border: 1px solid #dfe1e3;
  border-radius: 10px;
  color: #334155;
  display: flex;
  justify-content: center;
  align-items: center;
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

.match-and-switch {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
}

.infinite-switch {
  display: flex;
  gap: 0.5rem;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(4, auto);
  column-gap: 1rem;
  row-gap: 1rem;
}

@media only screen and (max-width: 600px) {
  .cards-container {
    display: grid;
    grid-template-columns: repeat(2, auto);
    column-gap: 1rem;
    row-gap: 1rem;
  }
}

@media only screen and (max-width: 992px) {
  .cards-container {
    display: grid;
    grid-template-columns: repeat(2, auto);
    column-gap: 1rem;
    row-gap: 1rem;
  }
}

.person-card {
}

.person-card .image-container {
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  /* border-radius: 10px; */
  /* min-width: 200px; */
  min-height: 200px;
  background-size: cover;
  display: flex;
  align-items: flex-end;
}

.person-card .image-container .info {
  width: 100%;
  background: rgba(0, 0, 0, 0.2) !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}

.person-card .image-container .info .content .title {
  font-size: 1.2rem;
  color: #fff;
}

.person-card .image-container .info .content .subtitle {
  color: #fff;
}

.person-card .image-container .info .images-count {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  color: #fff;
}

.person-card .person-footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
}

.custom-card-body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
}

.custom-card-footer {
  background: transparent !important;
}

.actions {
  display: flex;
}

.message-icon svg {
  fill: #a8afee;
  stroke: #a8afee;
  cursor: pointer;
  transition: all 0.5s ease;
}

.message-icon svg:hover {
  fill: #8993e7;
  stroke: #8993e7;
  cursor: pointer;
  transform: scale(110%);
}

.like-icon svg {
  fill: #93652b;
  stroke: #93652b;
  cursor: pointer;
  transition: all 0.5s ease;
}

.like-icon svg:hover {
  fill: #c53f2d;
  stroke: #c53f2d;
  transform: scale(110%);
}

.fancied-icon svg {
  fill: #c53f2d;
  stroke: #c53f2d;
  transform: scale(110%);
}
</style>
