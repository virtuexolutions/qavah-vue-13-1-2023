<template>
  <div
    class="discover-page"
    ref="discoverCards"
    v-cloak
    @keyup.enter="decide('super')"
    @keyup.left="decide('nope')"
    @keyup.right="decide('like')"
    @keyup.up="allow_discrete_mode()"
    @keyup.down="allow_discrete_mode()"
    @keyup.space="nextImage"
    tabindex="0"
  >
    <Tinder
      ref="tinder"
      @keypress.enter="onEnter($event)"
      key-name="id"
      :queue.sync="queue"
      :offset-y="10"
      @submit="onSubmit"
      :allowDown="false"
      v-if="allusers.length > 0"
    >
      <template slot-scope="scope">
        <div class="swiping-card-row-web" :id="'swipe-card-' + scope.index">
          <div class="main">
            <!-- left -->

            <div class="right">
              <vue-perfect-scrollbar
                class=""
                :settings="{
                  suppressScrollX: true,
                  wheelPropagation: false,
                }"
                ref="webLeftScroll1"
              >
                <div class="">
                  <div class="mb-3">
                    <!-- Toggle button -->
                    <div class="btn-container pb-2 mb-5">
                      <!-- If User is Free -->
                      <!-- @click="needMoreSubscription" -->
                      <vue-custom-tooltip
                        position="is-bottom"
                        :multiline="false"
                        label="click here"
                      >
                        <b-button
                          class="custom-btn-1 mt-3"
                          @click="allow_discrete_mode()"
                          variant="primary"
                        >
                          <b-img
                            src="@/assets/landing-page/letters-white.png"
                            height="30"
                          ></b-img>
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
                              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </b-button>
                      </vue-custom-tooltip>
                    </div>
                    <!-- v-if="toggleIsrealite" -->
                    <div class="isrealite mb-4" v-if="toggleIsrealite">
                      <h6 class="mt-2">Lifestyle</h6>

                      <p class="m-0 p-0">
                        <b-badge variant="empty" pill class="left-bubble">
                          {{ scope.data.iBelieveIAM }}
                        </b-badge>
                      </p>
                      <p class="m-0 p-0">
                        YearsInTruth:
                        <b-badge variant="empty" pill class="left-bubble">
                          {{ scope.data.yearsInTruth }}
                        </b-badge>
                      </p>
                      <p class="m-0 p-0">
                        SpiritualBackground:

                        <b-badge variant="empty" pill class="left-bubble">
                          {{ scope.data.spiritualBackground }}
                        </b-badge>
                      </p>
                      <p class="m-0 p-0">
                        MaritalBeliefSystem:
                        <b-badge variant="empty" pill class="left-bubble">
                          {{ scope.data.maritalBeliefSystem }}
                        </b-badge>
                      </p>
                      <p class="m-0 p-0">
                        AnyAffiliation:
                        <b-badge variant="empty" pill class="left-bubble">
                          {{ scope.data.anyAffiliation }}
                        </b-badge>
                      </p>
                      <p class="m-0 p-0">
                        SpiritualValue:
                        <b-badge variant="empty" pill class="left-bubble">
                          {{ scope.data.spiritualValue }}
                        </b-badge>
                      </p>
                      <p class="m-0 p-0">
                        StudyHabits:

                        <b-badge variant="empty" pill class="left-bubble">
                          {{ scope.data.studyHabits }}
                        </b-badge>
                      </p>
                      <p class="m-0 p-0">
                        StudyBible:
                        <b-badge variant="empty" pill class="left-bubble">
                          {{ scope.data.studyBible }}
                        </b-badge>
                      </p>

                      <h6 class="mt-2">Israelite Practice Keeping</h6>

                      <div class="passions-tags-container">
                        <b-badge
                          class="passion-tag"
                          variant="empty"
                          pill
                          v-for="(row, index) in scope.data
                            .isrealite_practice_keeping"
                          :key="index"
                        >
                          {{ row.options }}
                        </b-badge>
                      </div>

                      <h6 class="mt-2">Kingdom Gifts</h6>

                      <div class="passions-tags-container">
                        <b-badge
                          class="passion-tag-2"
                          variant="empty"
                          pill
                          v-for="(row, index) in scope.data.kingdom_gifts"
                          :key="index"
                        >
                          {{ row.options }}
                        </b-badge>
                      </div>

                      <h6 class="mt-2">Passions</h6>
                      <div class="passions-tags-container">
                        <b-badge
                          class="passion-tag-2"
                          variant="empty"
                          pill
                          v-for="(row, index) in scope.data.passions"
                          :key="index"
                        >
                          {{ row.options }}
                        </b-badge>
                      </div>
                    </div>
                  </div>
                </div>
              </vue-perfect-scrollbar>
            </div>

            <div class="middle">
              <b-carousel
                ref="profileImages"
                no-animation
                :interval="0"
                id="carousel-1"
                v-model="slide"
                controls
                indicators
                no-touch
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
              >
                <b-carousel-slide
                  class="custom-slide-img"
                  v-for="(image, index) in scope.data.profile_images"
                  :key="index"
                >
                  <template slot="img">
                    <img
                      class="slide-img img-fluid"
                      :src="convertProfileUrl(image.url)"
                    />
                  </template>
                </b-carousel-slide>
              </b-carousel>
              <div class="bottom-background"></div>
            </div>
            <!-- right -->
            <div class="left">
              <vue-perfect-scrollbar
                class=""
                :settings="{
                  suppressScrollX: true,
                  wheelPropagation: false,
                }"
                ref="webRightScroll1"
              >
                <div class="" style="height: 60vh; padding-bottom: 2rem">
                  <div class="mb-4 px-2">
                    <!-- Top Pick -->
                    <div
                      class="top-pick p-0 m-0"
                      v-if="scope.data.spotlight_status > 0"
                    >
                      <svg
                        data-name="Layer 1"
                        height="40"
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
                      <p class="font-weight-bold p-0 m-0">Top Pick</p>
                    </div>

                    <!-- Profile Name -->
                    <h6 class="title text-capitalize mt-4 p-0 m-0">
                      <b-link :to="'/dashboard/profile/' + scope.data.id">
                        {{ scope.data.profileName }}
                      </b-link>
                      <svg
                        v-if="
                          scope.data.user_profile_verified &&
                          scope.data.user_profile_verified.status == 1
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
                    </h6>

                    <!-- Age And City -->
                    <p class="subtitle p-0 m-0">
                      <span clas="text-danger">{{ scope.data.age }}</span> -
                      {{ scope.data.location.city }},
                      {{ scope.data.location.state_abbr }}
                    </p>
                    <!-- Miles Away  -->
                    <p class="subtitle p-0 m-0" v-if="scope.data.distance">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      {{ Math.round(scope.data.distance) }} Miles Away
                    </p>

                    <p class="m-0 mt-2 p-0">
                      MaritalStatus :
                      <b-badge variant="empty" pill class="left-bubble">
                        {{ scope.data.maritalStatus }}
                      </b-badge>
                    </p>

                    <p class="m-0 p-0">
                      RelationshipSeeking :
                      <b-badge variant="empty" pill class="left-bubble">
                        {{ scope.data.relationshipIAmSeeking }}
                      </b-badge>
                    </p>
                    <p>
                      Age:
                      <b-badge variant="empty" pill class="left-bubble">
                        {{ scope.data.age }}
                      </b-badge>
                    </p>
                    <!-- v-if="toggleInfo" -->
                    <div class="right-info">
                      <!-- More About Me -->

                      <h6 class="mt-2">More About</h6>

                      <p class="m-0 p-0">
                        Height:
                        <b-badge variant="empty" pill class="left-bubble">
                          {{ JSON.parse(scope.data.height).feet }} '
                        </b-badge>
                        <b-badge variant="empty" pill class="left-bubble">
                          {{ JSON.parse(scope.data.height).inches }} '
                        </b-badge>
                      </p>

                      <p class="m-0 p-0">
                        BodyType:
                        <b-badge variant="empty" pill class="left-bubble">
                          {{ scope.data.bodyType }}
                        </b-badge>
                      </p>

                      <p class="m-0 p-0">
                        Drink:
                        <b-badge variant="empty" pill class="left-bubble">
                          {{ scope.data.doYouDrink }}
                        </b-badge>
                      </p>
                      <p class="m-0 p-0">
                        Smoke:

                        <b-badge variant="empty" pill class="left-bubble">
                          {{ scope.data.doYouSmoke }}
                        </b-badge>
                      </p>
                      <p class="m-0 p-0">
                        EmploymentStatus:

                        <b-badge variant="empty" pill class="left-bubble">
                          {{ scope.data.employmentStatus }}
                        </b-badge>
                      </p>
                      <p class="m-0 p-0">
                        WillingToRelocate:

                        <b-badge variant="empty" pill class="left-bubble">
                          {{ scope.data.willingToRelocate }}
                        </b-badge>
                      </p>
                      <p class="m-0 p-0">
                        LivingSituation:
                        <b-badge variant="empty" pill class="left-bubble">
                          {{ scope.data.livingSituation }}
                        </b-badge>
                      </p>
                      <p class="m-0 p-0">
                        DoYouHaveChildren:
                        <b-badge variant="empty" pill class="left-bubble">
                          {{ scope.data.doYouHaveChildren }}
                        </b-badge>
                      </p>

                      <p class="m-0 p-0">
                        DoYouWantMoreChildren:
                        <b-badge variant="empty" pill class="left-bubble">
                          {{ scope.data.doYouWantMoreChildren }}
                        </b-badge>
                      </p>
                      <p class="m-0 p-0">
                        relationshipSeeking:

                        <b-badge variant="empty" pill class="left-bubble">{{
                          scope.data.relationshipIAmSeeking
                        }}</b-badge>
                      </p>
                      <p class="m-0 p-0">
                        Pets:
                        <b-badge variant="empty" pill class="left-bubble">
                          {{ scope.data.havePets }}
                        </b-badge>
                      </p>
                      <!-- v-if="scope.data.moreAboutMe.havePets === 'others'" -->
                      <p class="m-0 p-0">
                        other Pets:

                        <b-badge variant="empty" pill class="left-bubble">
                          Cat Dog
                          <!-- {{
                              scope.data.moreAboutMe.havePetsOthers
                              }} -->
                        </b-badge>
                      </p>
                      <p class="m-0 p-0">
                        Exercise:

                        <b-badge variant="empty" pill class="left-bubble">
                          {{ scope.data.howOftenDoYouExercise }}
                        </b-badge>
                      </p>

                      <p class="m-0 p-0">About Me:</p>
                      <p class="m-0 p-2">
                        {{ scope.data.aboutMe }}
                      </p>
                      <!-- Report User -->
                      <b-link class="d-flex align-items-center mt-4">
                        <div class="report-icon mr-1">
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
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                          </svg>
                        </div>
                        <p
                          class="m-0 p-0"
                          @click="openModal('reportModal' + scope.data.id)"
                        >
                          Report User?
                        </p>
                      </b-link>

                      <!-- Block User -->
                      <b-link class="d-flex align-items-center mt-4">
                        <div class="block-icon mr-1">
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
                        </div>
                        <p
                          class="m-0 p-0"
                          @click="
                            blockUser(
                              scope.data.id,
                              scope.data.profileName,
                              scope.data.profile_images[0].url
                            )
                          "
                        >
                          Block User?
                        </p>
                      </b-link>

                      <b-modal
                        :id="'reportModal' + scope.data.id"
                        content-class="rounded-lg"
                        body-class="rounded-lg"
                        centered
                        hide-header
                        hide-footer
                      >
                        <h2 class="text-center">Report</h2>
                        <h6 class="text-center">
                          We won't tell
                          {{ scope.data.profileName }}
                        </h6>

                        <div class="mt-4">
                          <ul class="report-reasons-list">
                            <li>
                              <b-link
                                @click="
                                  reportUser('Fake profile/Scam', scope.data.id)
                                "
                                >Fake profile/Scam</b-link
                              >
                            </li>
                            <li>
                              <b-link
                                @click="
                                  reportUser(
                                    'Inappropriate profile photo',
                                    scope.data.id
                                  )
                                "
                                >Inappropriate profile photo</b-link
                              >
                            </li>
                            <li>
                              <b-link
                                @click="
                                  reportUser('Inappropriate bio', scope.data.id)
                                "
                                >Inappropriate bio</b-link
                              >
                            </li>
                            <li>
                              <b-link
                                @click="
                                  reportUser('Underage user', scope.data.id)
                                "
                                >Underage user</b-link
                              >
                            </li>
                            <li>
                              <b-link
                                @click="
                                  reportUser('Offline behavior', scope.data.id)
                                "
                                >Offline behavior</b-link
                              >
                            </li>
                            <li>
                              <b-link
                                @click="
                                  reportUser(
                                    'Someone is in danger',
                                    scope.data.id
                                  )
                                "
                                >Someone is in danger</b-link
                              >
                            </li>
                          </ul>

                          <div
                            class="
                              d-flex
                              justify-content-center
                              align-items-center
                            "
                          >
                            <button
                              block
                              class="custom-btn-1"
                              @click="closeModal('reportModal' + scope.data.id)"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </b-modal>
                    </div>
                  </div>
                </div>

                <!-- More About Me -->
              </vue-perfect-scrollbar>
            </div>
          </div>
        </div>
      </template>
      <p class="like-pointer" slot="like">KAN</p>
      <p class="nope-pointer" slot="nope">LO</p>
      <p class="super-pointer" slot="super">
        SUPER <br />
        FANCY
      </p>
      <p class="rewind-pointer" slot="rewind">
        SAY <br />
        WHAT?
      </p>
    </Tinder>
    <div class="btns" v-if="!allCardsSwiped && allusers.length > 0">
      <!-- Rewind -->
      <b-button class="action-btn action-btn-1" @click="decide('rewind')">
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
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </b-button>
      <!-- Lo -->
      <b-button class="action-btn action-btn-2" @click="decide('nope')">
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
      </b-button>
      <!-- Superfancy -->
      <b-button class="action-btn action-btn-3" @click="decide('super')">
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
      </b-button>
      <!-- Kan -->
      <b-button class="action-btn action-btn-4" @click="decide('like')">
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
      <!-- Skip -->
      <b-button class="action-btn action-btn-5" @click="decide('help')">
        <b-overlay :show="spotlightActivateLoader" no-wrap> </b-overlay>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clip-rule="evenodd"
          />
        </svg>
      </b-button>
    </div>
    <!-- Loading/Finding Peoples -->
    <div class="unable-to-find" v-if="!geolocationerror && findingLoader">
      <div class="circle">
        <BounceLoader
          class="bounce-loader"
          color="#93652b"
          :loading="findingLoader"
          :size="150"
          sizeUnit="px"
        />
        <b-avatar
          class="user-icon"
          size="64"
          :src="convertProfileUrl(currentUser.photoURL)"
        ></b-avatar>
      </div>
      <p class="message">
        We are unable to find any potential matches right now. Try changing your
        preferences to see who is nearby
      </p>
    </div>

    <!-- Loading/Finding Peoples -->
    <div class="unable-to-find" v-if="allCardsSwiped">
      <div class="circle">
        <BounceLoader
          class="bounce-loader"
          color="#93652b"
          :loading="allCardsSwiped"
          :size="150"
          sizeUnit="px"
        />
        <b-avatar
          class="user-icon"
          size="64"
          :src="convertProfileUrl(currentUser.photoURL)"
        ></b-avatar>
      </div>
      <p class="message">
        We are unable to find any potential matches right now. Try changing your
        preferences to see who is nearby
      </p>
    </div>

    <div
      class="unable-to-find"
      v-if="!geolocationerror && isUS && !findingLoader && allusers.length == 0"
    >
      <!-- <div class="circle">
        <BounceLoader
          class="bounce-loader"
          color="#93652b"
          :loading="loading"
          :size="150"
          sizeUnit="px"
        />
        <b-avatar
          class="user-icon"
          size="64"
          :src="convertProfileUrl(currentUser.photoURL)"
        ></b-avatar>
      </div> -->

      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="50"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
        />
      </svg>
      <p class="message">
        Could not found users at the moment, Please try again later!
      </p>
    </div>

    <!-- If Not A US User -->
    <div
      v-if="!geolocationerror && !isUS && !findingLoader"
      class="no-likes-yet-container"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="50"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
        />
      </svg>
      <h2>Only users from US can use discover courtship deck</h2>
      <p>You are logged in from location , other than US!</p>
    </div>

    <!-- If Geolocation Error -->
    <div
      v-if="geolocationerror && !findingLoader"
      class="no-likes-yet-container"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="50"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
        />
      </svg>
      <h2>Location Error</h2>
      <p class="text-capitalize">{{ geolocationerror }}</p>
    </div>
    <!-- Footer -->
    <div class="footer fixed" v-if="allusers.length > 0">
      <div class="keyboard-guide">
        <span
          ><svg
            focusable="false"
            aria-hidden="false"
            role="img"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            class="H(24px) Mend(4px) Scale(.9)"
            aria-labelledby="ec8cc43a73cd50ae"
          >
            <g
              transform="translate(2 2) rotate(0 10 10)"
              fill="none"
              fill-rule="evenodd"
            >
              <path
                d="M5.368 11.041l1.227.985 1.785 1.433 1.226.984c.491.395.893.208.893-.413v-1.908c.743-.106 3.574-.444 4.198-.533.742-.106 1.29-.568 1.29-1.262v-.003c0-.695-.548-1.157-1.29-1.263-.624-.089-3.455-.427-4.198-.533V6.62c0-.621-.401-.807-.892-.413L8.38 7.19 6.595 8.624l-1.227.984c-.49.395-.49 1.04 0 1.433"
                fill="currentColor"
                fill-rule="nonzero"
              ></path>
              <rect
                stroke="currentColor"
                stroke-width="2.5"
                width="20"
                height="20"
                rx="3"
              ></rect>
            </g>
            <title id="ec8cc43a73cd50ae">Left</title>
          </svg>
          Lo</span
        >
        <span
          ><svg
            focusable="false"
            aria-hidden="false"
            role="img"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            class="H(24px) Mend(4px) Scale(.9)"
            aria-labelledby="70f653304a920df0"
          >
            <g
              transform="translate(2 2) rotate(180 10 10)"
              fill="none"
              fill-rule="evenodd"
            >
              <path
                d="M5.368 11.041l1.227.985 1.785 1.433 1.226.984c.491.395.893.208.893-.413v-1.908c.743-.106 3.574-.444 4.198-.533.742-.106 1.29-.568 1.29-1.262v-.003c0-.695-.548-1.157-1.29-1.263-.624-.089-3.455-.427-4.198-.533V6.62c0-.621-.401-.807-.892-.413L8.38 7.19 6.595 8.624l-1.227.984c-.49.395-.49 1.04 0 1.433"
                fill="currentColor"
                fill-rule="nonzero"
              ></path>
              <rect
                stroke="currentColor"
                stroke-width="2.5"
                width="20"
                height="20"
                rx="3"
              ></rect>
            </g>
            <title id="70f653304a920df0">Right</title></svg
          >Kan</span
        >
        <span
          ><svg
            focusable="false"
            aria-hidden="false"
            role="img"
            viewBox="0 0 32 24"
            width="32"
            height="24"
            class="H(24px) Mend(4px) Scale(.9)"
            aria-labelledby="29dd7992c54ae0cc"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                d="M25.397 13.98H11.12v1.437c0 .575-.375.767-.939.384l-.94-.959-1.878-1.246-.94-.958c-.563-.383-.563-.958 0-1.342l.94-.958 1.879-1.342.939-.958c.564-.384.94-.288.94.383v1.533h14.277v-5.75c0-1.15.94-2.204 2.255-2.204C29.06 2 30 2.958 30 4.3v7.571c0 1.246-.94 2.3-2.254 2.3h-2.16l-.189-.191z"
                fill="currentColor"
                fill-rule="nonzero"
              ></path>
              <path
                d="M2.21 5.243C2.21 3.405 3.475 2 5.159 2h13.684C20.526 2 22 3.405 22 5.243v13.514C22 20.487 20.526 22 18.842 22H5.158C3.474 22 2 20.486 2 18.757V5.243h.21z"
                stroke="currentColor"
                stroke-width="2.5"
              ></path>
            </g>
            <title id="29dd7992c54ae0cc">Enter</title></svg
          >Super Fancy</span
        >
        <span>
          <svg
            focusable="false"
            aria-hidden="false"
            role="img"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            class="H(24px) Mend(4px) Scale(.9)"
            aria-labelledby="a6923cf4b3f625ce"
          >
            <g
              transform="translate(2 2) rotate(90 10 10)"
              fill="none"
              fill-rule="evenodd"
            >
              <path
                d="M5.368 11.041l1.227.985 1.785 1.433 1.226.984c.491.395.893.208.893-.413v-1.908c.743-.106 3.574-.444 4.198-.533.742-.106 1.29-.568 1.29-1.262v-.003c0-.695-.548-1.157-1.29-1.263-.624-.089-3.455-.427-4.198-.533V6.62c0-.621-.401-.807-.892-.413L8.38 7.19 6.595 8.624l-1.227.984c-.49.395-.49 1.04 0 1.433"
                fill="currentColor"
                fill-rule="nonzero"
              ></path>
              <rect
                stroke="currentColor"
                stroke-width="2.5"
                width="20"
                height="20"
                rx="3"
              ></rect>
            </g>
            <title id="a6923cf4b3f625ce">Up</title>
          </svg>
          Open Israelite Details
        </span>
        <span>
          <svg
            focusable="false"
            aria-hidden="false"
            role="img"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            class="H(24px) Mend(4px) Scale(.9)"
            aria-labelledby="132cd2f248894921"
          >
            <g
              transform="translate(2 2) rotate(270 10 10)"
              fill="none"
              fill-rule="evenodd"
            >
              <path
                d="M5.368 11.041l1.227.985 1.785 1.433 1.226.984c.491.395.893.208.893-.413v-1.908c.743-.106 3.574-.444 4.198-.533.742-.106 1.29-.568 1.29-1.262v-.003c0-.695-.548-1.157-1.29-1.263-.624-.089-3.455-.427-4.198-.533V6.62c0-.621-.401-.807-.892-.413L8.38 7.19 6.595 8.624l-1.227.984c-.49.395-.49 1.04 0 1.433"
                fill="currentColor"
                fill-rule="nonzero"
              ></path>
              <rect
                stroke="currentColor"
                stroke-width="2.5"
                width="20"
                height="20"
                rx="3"
              ></rect>
            </g>
            <title id="132cd2f248894921">Down</title>
          </svg>
          Close Israelite Details
        </span>
        <span>
          <svg
            focusable="false"
            aria-hidden="false"
            role="img"
            viewBox="0 0 74 24"
            width="74"
            height="24"
            class="H(24px) Mend(4px) Scale(.9)"
            aria-labelledby="6337bf91f8e0fce8"
          >
            <rect
              stroke="currentColor"
              stroke-width="2.5"
              transform="rotate(-90 37 12)"
              x="27"
              y="-23"
              width="20"
              height="70"
              rx="3"
              fill="none"
            ></rect>
            <title id="6337bf91f8e0fce8">Space</title>
          </svg>
          Next Image
        </span>
      </div>
    </div>
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
          >Unlimited "Say Whats"! Allow you to take a second look if you choose.
        </p>
      </div>
      <div class="pricing-cards">
        <div class="price-card" v-for="(row, index) in packages.platinum">
          <div class="top">
            <p class="p-0 m-0 quantity">{{ Math.round(row.duration / 30) }}</p>
            <p class="p-0 m-0 title">Per Month</p>
            <!-- <p class="p-0 m-0">
              <b
                ><small
                  >${{
                    (row.price / Math.round(row.duration / 30)).toFixed(2)
                  }}</small
                ></b
              >
            </p> -->
          </div>
          <p class="p-0 py-2 m-0 price">
            ${{ (row.price / Math.round(row.duration / 30)).toFixed(2) }}
          </p>
          <b-badge
            v-if="row.most_popular == 1"
            class="mb-2"
            variant="primary"
            pill
            >Most Popular</b-badge
          >
        </div>

        <!-- <div class="price-card">
          <div class="top">
            <p class="p-0 m-0 quantity">6</p>
            <p class="p-0 m-0 title">Months</p>
          </div>
          <p class="p-0 py-2 m-0 price">$149.94</p>
        </div>
        <div class="price-card">
          <div class="top">
            <p class="p-0 m-0 quantity">3</p>
            <p class="p-0 m-0 title">Month</p>
          </div>
          <p class="p-0 py-2 m-0 price">$98.97</p>
        </div> -->
      </div>
      <div class="text-center">
        <p>Low monthly payment plans available</p>
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
        <div class="price-card" v-for="(row, index) in packages.gold">
          <div class="top">
            <p class="p-0 m-0 quantity">{{ Math.round(row.duration / 30) }}</p>
            <p class="p-0 m-0 title">months</p>
          </div>
          <!-- <p class="p-0 py-2 m-0 price">$18.00/mo</p> -->
          <p class="p-0 py-2 m-0 price">${{ row.price }}</p>
        </div>
        <!-- <div class="price-card">
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
        </div> -->
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

    <b-modal
      id="skipTheQueueModal"
      content-class="rounded-lg"
      body-class="rounded-lg"
      centered
      hide-header
      hide-footer
    >
      <div class="top">
        <h2 class="title">Get More Spotlights</h2>
        <p class="subtitle">
          Be a top profile in your area for 60 minutes to get more matches.
        </p>
      </div>
      <div class="pricing-cards">
        <div class="price-card">
          <div class="top">
            <p class="p-0 m-0 quantity">x1</p>
            <p class="p-0 m-0 title">Spotlights</p>
          </div>
          <p class="p-0 py-2 m-0 price">$5.00</p>
        </div>
        <div class="price-card">
          <div class="top">
            <p class="p-0 m-0 quantity">x5</p>
            <p class="p-0 m-0 title">Spotlights</p>
          </div>
          <p class="p-0 py-2 m-0 price">$25.00</p>
        </div>
        <div class="price-card">
          <div class="top">
            <p class="p-0 m-0 quantity">x10</p>
            <p class="p-0 m-0 title">Spotlights</p>
          </div>
          <p class="p-0 py-2 m-0 price">$40.00</p>
        </div>
      </div>
      <div class="btn-container">
        <b-button
          class="boost-btn mb-2"
          @click="$router.push('/dashboard/powerups')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mr-1"
            height="25"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
              clip-rule="evenodd"
            />
          </svg>
          Get More Spotlights
        </b-button>
        <!-- <b-button
                class="qavah-gold-btn mb-2"
                @click="$router.push('powerups')"
                variant="primary"
                >Get Qavah Gold</b-button
              > -->
        <b-button
          class="no-thanks-btn mb-2"
          variant="empty"
          @click="$bvModal.hide('skipTheQueueModal')"
          >No Thanks
        </b-button>
      </div>
    </b-modal>
  </div>
</template>

/* eslint-disable */

<script>
import { apiUrl, Resources_Url, headers } from "@/constants/config";
import Tinder from "vue-tinder";
import SingleLightbox from "@/components/SingleLightbox";
import VueGallerySlideshow from "vue-gallery-slideshow";
import { BounceLoader } from "@saeris/vue-spinners";
import Vue from "vue";
import axios from "axios";
import { getCurrentUser } from "@/utils/index";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "tinderCard",
  props: [
    "users",
    "packages",
    "myprofile",
    "isUS",
    "geolocationerror",
    "currentPosition",
  ],
  components: { Tinder, SingleLightbox, VueGallerySlideshow, BounceLoader },
  data: () => ({
    allCardsSwiped: false,
    spotlightActivateLoader: false,
    loading: true,
    findingLoader: false,
    mobileToggleInfo: false,
    profileImagesIndex: null,
    profileImages: [],
    slide: 0,
    toggleInfo: false,
    toggleIsrealite: false,
    queue: [],
    offset: 0,
    history: [],
    peoples: [],
    allusers: [],
    liked: [],
    rejected: [],
    superliked: [],
    rewinded: [],
    skipped: [],
    dummy: [],
  }),
  created() {
    // console.log("got users from created method -> ", this.users);
    this.$nextTick(() => {
      this.$refs.discoverCards.focus();
    });
    window.addEventListener("keyup", this.onEnter());
    this.mock();
  },
  methods: {
    ...mapActions(["likedUser", "dislikeUser", "superlikeUser", "rewindUser"]),
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
    needMoreSubscription() {
      Vue.$toast.info(
        "Please Subscription To Qavah Platinum Or Qavah Gold to avail this feature."
      );
    },
    allow_discrete_mode() {
      let subscription = this.currentUser.subscription;
      if (subscription.length > 0) {
        if (
          this.check_if_subscription_exist("platinum") ||
          this.check_if_subscription_exist("gold") ||
          this.check_if_subscription_exist("month_to_month")
        ) {
          if (this.toggleIsrealite === false) {
            this.toggleIsrealite = true;
          } else {
            this.toggleIsrealite = false;
          }
        }
      } else {
        this.openModal("getQavahPlusModal");
      }
    },
    convertProfileUrl(url) {
      return url;
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
    mock(count = 5, append = true) {
      const list = [];
      // let length = this.allusers.length;
      let length = this.allusers.length;

      for (let i = 0; i < count; i++) {
        if (this.offset < length) {
          // let current = this.allusers[this.offset];
          let current = this.allusers[this.offset];

          list.push(current);
          this.offset++;
        } else {
          // this.offset = 0;
        }
      }
      if (append) {
        this.queue = this.queue.concat(list);
      } else {
        this.queue.unshift(...list);
      }
    },
    onSubmit({ item, key, type }) {
      if (this.queue.length < 3) {
        this.mock();
      }
      this.history.push(item);
      this.decide(type);
    },
    async decide(choice) {
      let user = this.currentUser;
      if (choice === "rewind") {
        if (
          this.check_if_subscription_exist("platinum") ||
          this.check_if_subscription_exist("gold") ||
          this.check_if_subscription_exist("month_to_month")
        ) {
          if (
            this.check_if_subscription_exist("platinum") ||
            this.check_if_subscription_exist("gold") ||
            this.check_if_subscription_exist("month_to_month")
          ) {
            if (this.history.length) {
              let lastitem = this.history[this.history.length - 1];

              this.$refs.tinder.rewind([this.history.pop()]);
              let data = {
                uid: lastitem.myUid,
                targetName: lastitem.basicInfo.profileName,
                targetImage: lastitem.moreAboutMe.profileImagesPath[0].url,
                targetEmail: lastitem.basicInfo.email,
              };
              this.rewinded.push(data);
            }
          } else {
            this.openModal("getQavahPlusModal");
          }
        } else {
          if (
            this.check_if_subscription_exist("discretemode") ||
            this.check_if_subscription_exist("lovenotes") ||
            this.check_if_subscription_exist("month_to_month") ||
            this.check_if_subscription_exist("spotlight")
          ) {
            this.needMoreSubscription();
          } else {
            this.openModal("getQavahPlusModal");
          }
        }
      } else if (choice === "help") {
        this.skip();
        // Skip
        // if (this.currentUser.subscriptions.length > 0) {

        // if (
        //   this.currentUser.subscriptions.includes("spotlight")
        // ) {

        // this.$refs.tinder.decide("nope");
        // this.skipped.push({
        //   uid: this.history[this.history.length - 1].myUid,
        //   targetName:
        //     this.history[this.history.length - 1].basicInfo.profileName,
        //   targetImage:
        //     this.history[this.history.length - 1].moreAboutMe
        //       .profileImagesPath[0].url,
        // });
        // } else {
        //   this.openModal("skipTheQueueModal");
        // }
        // } else {
        //   this.openModal("skipTheQueueModal");
        // }
      } else if (choice === "like") {
        let choic = this.$refs.tinder.decide(choice);
        this.liked.push({
          uid: this.history[this.history.length - 1].id,
          targetName: this.history[this.history.length - 1].profileName,
          // targetImage:
          //   this.history[this.history.length - 1].moreAboutMe
          //     .profileImagesPath[0].url,
          targetEmail: this.history[this.history.length - 1].email,
        });
        let historyLength = this.history.length;
        let usersLength = this.allusers.length;

        if (historyLength === usersLength) {
          this.$emit("refresh");
        }
      } else if (choice === "nope") {
        this.$refs.tinder.decide(choice);
        let pp = this.history[this.history.length - 1].profileName;
        this.rejected.push({
          uid: this.history[this.history.length - 1].id,
          targetName: this.history[this.history.length - 1].profileName,
        });
        console.log("this.rejected -> ", this.rejected);
        let historyLength = this.history.length;
        let usersLength = this.allusers.length;
        if (historyLength === usersLength) {
          this.$emit("refresh");
        }
      } else if (choice === "super") {
        if (this.currentUser.subscription.length > 0) {
          if (
            this.check_if_subscription_exist("platinum") ||
            this.check_if_subscription_exist("month_to_month") ||
            this.check_if_subscription_exist("gold")
          ) {
            this.$refs.tinder.decide(choice);
            this.superliked.push({
              uid: this.history[this.history.length - 1].id,
              targetName: this.history[this.history.length - 1].profileName,
              // targetImage:
              //   this.history[this.history.length - 1].moreAboutMe
              //     .profileImagesPath[0].url,
              targetEmail: this.history[this.history.length - 1].email,
            });
            let historyLength = this.history.length;
            let usersLength = this.allusers.length;
            if (historyLength === usersLength) {
              this.$emit("refresh");
            }
          } else {
            this.openModal("superLikesModal");
          }
        } else {
          this.openModal("superLikesModal");
        }
      }
      if (this.history.length === this.allusers.length) {
        console.log("All Cards Swiped!");
        this.allCardsSwiped = true;
      }
    },
    ken(targetId, targetName, targetEmail) {
      let payload = {
        myName: this.currentUser.profileName,
        myUid: this.currentUser.id,
        targetsUid: targetId,
        targetName: targetName,
        targetEmail: targetEmail,
        //sendEmail: this.currentUser.settings.notifications.kan,
      };
      // console.log("liked -> ", body);
      this.likedUser(payload);
    },
    lo(targetId, targetName, targetImage) {
      let payload = {
        myName: this.currentUser.profileName,
        myUid: this.currentUser.id,
        targetsUid: targetId,
        targetName: targetName,
      };
      this.dislikeUser(payload);
    },
    superfancy(targetId, targetName) {
      if (
        this.check_if_subscription_exist("platinum") ||
        this.check_if_subscription_exist("month_to_month") ||
        this.check_if_subscription_exist("gold")
      ) {
        let payload = {
          myName: this.currentUser.profileName,
          myUid: this.currentUser.id,
          targetsUid: targetId,
          targetName: targetName,
        };
        console.log("superLiked -> ", payload);
        this.superlikeUser(payload);
      } else {
        this.openModal("superLikesModal");
      }
    },
    rewind(targetId, targetName, targetImage) {
      if (
        this.check_if_subscription_exist("platinum") ||
        this.check_if_subscription_exist("month_to_month") ||
        this.check_if_subscription_exist("gold")
      ) {
        let payload = {
          myName: this.currentUser.profileName,
          myUid: this.currentUser.id,
          targetsUid: targetId,
          targetName: targetName,
        };
        this.rewindUser(payload);
      } else {
        this.openModal("getQavahPlusModal");
      }
    },
    activateSpotlight() {
      this.spotlightActivateLoader = true;
      let body = {
        uid: this.currentUser.uid,
      };

      axios
        .post(`${apiUrl}/settings/activate_spotlight`, body)
        .then((res) => {
          // console.log("activate_spotlight ->", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              this.spotlightActivateLoader = false;

              Vue.$toast.success(`${data.message}`);
              this.$router.go();
            } else {
              this.spotlightActivateLoader = false;

              Vue.$toast.error(`${data.error}`);
            }
          } else {
            // console.log("activate_spotlight !");
            this.spotlightActivateLoader = false;

            Vue.$toast.error(`${data.error}`);
          }
        })
        .catch((err) => {
          console.log("activate_spotlight ->", err);
          this.spotlightActivateLoader = false;
        });
    },
    skip() {
      if (
        this.check_if_subscription_exist("platinum") ||
        this.check_if_subscription_exist("gold") ||
        this.check_if_subscription_exist("month_to_month") ||
        this.check_if_subscription_exist("premium")
      ) {
        if (!this.currentUser.spotlight) {
          this.spotlightActivateLoader = true;
          let body = {
            uid: this.currentUser.uid,
          };
          axios
            .post(`${apiUrl}/swap/activate_spotlight`, body, { headers })
            .then((res) => {
              // console.log("activate_spotlight ->", res);

              const data = res.data;
              if (res.status === 200) {
                if (data.status) {
                  // this.spotlightActivateLoader = false;
                  Vue.$toast.info(`${data.message}`);
                  console.log("data -> ", data);
                  this.$router.go();
                } else {
                  // this.spotlightActivateLoader = false;
                  Vue.$toast.info(`${data.error}`);
                }
              } else {
                Vue.$toast.error(`${data.message}`);
              }
            })
            .catch((err) => {
              console.log("activate_spotlight ->", err);
              // this.spotlightActivateLoader = false;
            });
        } else {
          Vue.$toast.info(`You are currently in spotlight mode`);
        }
      } else {
        this.openModal("skipTheQueueModal");
      }
    },
    openModal(id) {
      this.$bvModal.show(id);
    },
    closeModal(id) {
      this.$bvModal.hide(id);
    },
    prev() {
      this.$refs.profileImages.prev();
    },
    next() {
      this.$refs.profileImages.next();
    },
    onEnter() {
      console.log("Enter");
    },
    nextImage() {
      this.$refs.profileImages.next();
    },
    getLastImage(image) {
      let length = image.length;
      return image[length - 1].url;
    },
    getImagesLength(image) {
      let length = image.length;
      return length;
    },
    onSlideStart() {
      // const ig = document.querySelector(".custom-slide-img img");
      // ig.classList.remove("img-fluid");
    },
    onSlideEnd() {
      // const ig = document.querySelector(".custom-slide-img img");
      // ig.classList.remove("img-fluid");
    },
    reportUser(reason, targetuid) {
      let data = {
        uid: this.currentUser.id,
        targetuid: targetuid,
        reason: reason,
      };
      console.log("body -> ", data);
      axios
        .post(`${apiUrl}/settings/report-profile`, data, { headers })
        .then((response) => {
          console.log("report user profile -> ", response);
          const data = response.data;
          if (response.status === 200) {
            if (data.status) {
              console.log("report user data -> ", data);

              if (data.message === "User has been report Successfully!") {
                Vue.$toast.success(data.message);
                this.closeModal("reportModal" + targetuid);
                this.$refs.tinder.decide("nope");
              } else {
                Vue.$toast.success(data.message);
                this.closeModal("reportModal" + targetuid);
              }
            } else {
              console.log("block user data -> ", data);
              Vue.$toast.success(data.error);
            }
          } else {
            console.log(response);
            Vue.$toast.error(data.error);
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
        myUid: this.currentUser.id,
        targetsUid: targetUid,
        targetName: targetName,
        targetImage: targetImage,
      };

      console.log("body -> ", data);

      axios
        .post(`${apiUrl}/settings/blocked-profiles-by-me  `, data, { headers })
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
  },
  watch: {
    peoples(newval) {
      console.log("Peoples -> ", newval);
      if (newval && newval.length > 0) {
        this.loading = false;
        this.findingLoader = false;
      }
    },
    isUS(newval) {
      console.log("isUS -> ", newval);
    },
    geolocationerror(newval) {
      console.log("Geolocation Error -> ", newval);
    },
    myprofile(newval) {
      console.log("Profile Watcher!");
      if (newval || this.myprofile !== null || this.myprofile !== undefined) {
        console.log("profile get", this.myprofile);
      }
    },
    users(newval) {
      // console.log("watch users -> ", newval);
      if (newval !== undefined) {
        this.allusers = newval;
        if (this.allusers && this.allusers.length > 0) {
          this.findingLoader = false;
          this.mock();
        } else {
          this.findingLoader = true;
        }
      } else {
        console.log("didnt got users");
        // this.findingLoader = true;
      }

      if (this.allusers && this.allusers.length > 0) {
        this.mock();
      }
    },
    liked(newval, oldval) {
      if (newval !== undefined && newval !== null) {
        let check = this.liked.filter((x) => x.uid === newval.uid);
        if (check && check.length > 0) {
          console.log("already rejected this user");
        } else {
          let object = newval[newval.length - 1];
          this.ken(object.uid, object.targetName, object.targetEmail);
        }
      }
    },
    rejected(newval, oldval) {
      if (newval !== undefined && newval !== null) {
        let check = this.rejected.filter((x) => x.uid === newval.uid);
        if (check && check.length > 0) {
          console.log("already rejected this user");
        } else {
          console.log("newval -> ", newval);
          let object = newval[newval.length - 1];
          this.lo(object.uid, object.targetName, object.targetImage);
        }
      }
    },
    superliked(newval, oldval) {
      if (newval !== undefined && newval !== null) {
        let check = this.superliked.filter((x) => x.uid === newval.uid);
        if (check && check.length > 0) {
          console.log("already superliked this user");
        } else {
          let object = newval[newval.length - 1];
          this.superfancy(object.uid, object.targetName, object.targetEmail);
        }
      }
    },
    skipped(newval) {
      console.log("skip -> ", newval);
      if (newval !== undefined && newval !== null) {
        let check = this.skipped.filter((x) => x.uid === newval.uid);
        if (check && check.length > 0) {
          console.log("already skipped this user");
        } else {
          let object = newval[newval.length - 1];
          this.skip(object.uid, object.targetName, object.targetImage);
        }
      }
    },
    rewinded(newval) {
      if (newval) {
        console.log("rewinded -> ", newval);
        let check = this.rewinded.filter((x) => x.id === newval.id);
        let object = newval[newval.length - 1];
        console.log("object -> ", object);
        this.rewind(object.id, object.targetName);
      }
    },
    currentPosition(newval) {
      console.log("current position -> ", newval);
      console.log("Current Position -> ", this.currentPosition);
    },
    allusers(newValue, oldValue) {
      console.log("old cards values -> ", oldValue.length);
      console.log("new cards value -> ", newValue.length);
      if (newValue) {
        let length = newValue.length;

        if (length > 0) {
          this.mock();
        }
      } else {
        this.mock();
      }
    },
  },
  computed: {
    ...mapGetters(["currentUser"]),
    currentUser2() {
      let user = getCurrentUser();
      return user;
    },
  },
};
</script>

<style lang="scss" scoped>
#blockSVG {
  .cls-1 {
    fill: #101820;
  }
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

.no-likes-yet-container {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30%;
  text-align: center;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 300px;
}

.slide-img {
  width: 100%;
  height: 70vh;
  object-fit: contain;
  // height: auto;
  // object-fit: contain;
  object-position: center;
}

.report-reasons-list {
  list-style-type: none;
}

.report-reasons-list li {
  padding: 1rem;
  border: 1px solid #333;
  text-align: center;
}

.unable-to-find {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30%;
  text-align: center;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .circle {
    position: relative;
  }

  .bounce-loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

#image-wrapper-0 img {
  height: 75px;
  width: 120px;
  transition: all ease 0.5s;
}

.last-image {
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: rgba(0, 0, 0, 0.2);
  position: relative;
  height: 75px;
  width: 120px;
  transition: all ease 0.5s;

  .image-count {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.2);
    height: 75px;
    width: 120px;
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
    height: 75px;
    width: 120px;
    top: 0;
    left: 0;
    z-index: -1;
  }

  &:hover {
    transform: scale(110%);
    cursor: pointer;
  }
}

#swipe-card-1,
#swipe-card-2,
#swipe-card-3,
#swipe-card-4,
#swipe-card-5,
#swipe-card-6,
#swipe-card-7,
#swipe-card-8,
#swipe-card-9,
#swipe-card-10 {
  .left {
    visibility: hidden;
  }

  .middle {
    visibility: hidden;
  }

  .right {
    visibility: hidden;
  }
}

// Mobile Responsivity
@media only screen and (max-width: 992px) {
  .discover-page {
    margin: 0;
    padding: 0;
    // background-color: #20262e;
    // overflow: hidden;
    // width: 100vw;
    height: calc(100vh - 80px);
    position: relative;
  }

  .swiping-card-row-web {
    display: none;
  }

  .swiping-card-row-mobile {
    background-color: #333;
    height: 100%;
    display: flex;
    flex-direction: column;
    // justify-content: flex-start;
    // align-items: flex-start;
    border-radius: 10px;

    .remove-icon {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #a07134;
      border-radius: 20px;
    }

    .passion-tag-2 {
      color: #fff;
      background-color: #a07134;
      border: 1px solid #a07134;
      margin: 0.2rem 0.2rem;
      transition: all ease 0.5s;
    }

    .passion-tag-2:hover {
      transform: scale(110%);
      color: #bd8945;
      background-color: #fff;
      cursor: pointer;
    }

    .beliefs-values {
      height: 70vh;
      background-color: #333;
      color: #fff;
      z-index: 2;
    }

    .beliefs-values-inner {
      width: 100%;
      // height: 80%;
      height: 64vh;
      color: #fff;
    }

    .left-bubble {
      color: #a07134;
      border: 1px solid #a07134;
      margin: 0.2rem 0.2rem;
      transition: all ease 0.5s;
    }

    .left-bubble:hover {
      transform: scale(110%);
      color: #bd8945;
      cursor: pointer;
    }
  }

  #app .vue-tinder {
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    top: 5px;
    margin: auto;
    width: calc(100% - 20px);
    // height: calc(100% - 23px - 95px - 47px - 16px);
    height: calc(100vh - 40%);
    min-width: 70vw;
    max-width: 355px;
  }

  .footer {
    display: none;
  }

  .info-container {
    width: 100%;
    border-radius: 10px;

    .info {
      display: flex;
      justify-content: space-between;
      color: #fff;
      padding: 1rem;
      background-color: rgba(0, 0, 0, 0.8);

      .additional-info {
        fill: #fff !important;

        &:hover {
          cursor: pointer;
          transform: scale(110%);
          fill: #d4d4d8;
        }
      }

      .title {
        font-size: 1.4rem;
        font-weight: bold;

        a {
          font-size: 1.2rem;
        }
      }
    }
  }

  .btns {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0px;
    margin: auto;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 300px;
    max-width: 355px;
    z-index: 2;
  }

  .btns img {
    margin-right: 12px;
    box-shadow: 0 4px 9px rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .btns img:nth-child(2n + 1) {
    width: 53px;
  }

  .btns img:nth-child(2n) {
    width: 65px;
  }

  .btns img:nth-last-child(1) {
    margin-right: 0;
  }
}

@media only screen and (min-width: 992px) {
  .discover-page {
    margin: 0;
    padding: 0;
    // background-color: #20262e;
    // overflow: hidden;
    // width: 100vw;
    height: calc(100vh - 107px);
    position: relative;
  }

  .swiping-card-row-mobile {
    display: none;
  }

  .footer {
    width: 100vw;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    display: flex;
    padding: 1rem;
    justify-content: space-around;
    align-items: center;

    .keyboard-guide {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      span {
        //   transition: all ease 0.5s;
        //   &:hover {
        //     color: #cbd5e1;
        //     cursor: pointer;
        //   }
        svg {
          margin-right: 0.3rem;
        }
      }
    }
  }

  #app .vue-tinder {
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    top: 5%;
    margin: auto;
    width: calc(100% - 20px);
    // height: calc(100% - 23px - 95px - 47px - 16px);
    height: calc(70vh);
    min-width: 70vw;
    max-width: 355px;
  }

  .btns {
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    bottom: 18%;
    margin: auto;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 300px;
    max-width: 355px;
    // backdrop-filter: drop-shadow(4px 4px 10px #333);
    // backdrop-filter: blur(20px);
    // background-color: rgba(0, 0, 0, 0.4);
    // background: linear-gradient(to bottom, transparent 0%, black 100%);
  }

  .btns img {
    margin-right: 12px;
    box-shadow: 0 4px 9px rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .btns img:nth-child(2n + 1) {
    width: 53px;
  }

  .btns img:nth-child(2n) {
    width: 65px;
  }

  .btns img:nth-last-child(1) {
    margin-right: 0;
  }
}

.custom-btn-1:hover {
  background-color: #ac854e !important;
  transform: scale(105%);
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
}

#collapse-info {
  height: 20vh;
}

.scrollable {
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

#skipTheQueueModal {
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

.swiping-card-row-web {
  .main {
    display: grid;
    grid-template-columns: repeat(3, 33.33%);

    // .top-picks-btn {
    //   background-color: transparent !important;
    //   outline: none;
    //   border: none;
    //   padding: 0;
    //   font-size: 0.7rem;
    //   // border-radius: 10px;
    //   color: #333;
    //   margin-bottom: 0.5rem;
    //   /* padding: 1rem 2rem;  */
    //   svg {
    //     height: 20px;
    //   }
    // }
    .images-container {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .profile-image {
      max-height: 75px;
      transition: all ease 0.5s;
    }

    .profile-image:hover {
      transform: scale(110%);
      cursor: pointer;
    }

    .left {
      // width: 100%;

      height: 70vh;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      padding-right: 0.5rem;
      padding-left: 0.5rem;

      overflow-x: visible;

      .title {
        font-size: 1.2rem;
        font-weight: bold;

        a {
          font-size: 1.2rem;
        }
      }
    }

    .middle {
      // padding-top: 0.5rem;
      width: 100%;
      height: 100%;
      position: relative;
      background: #000;

      .bottom-background {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 30vh;
        z-index: 2;
        background: linear-gradient(to bottom, transparent 0%, black 100%);
      }

      gap: 0.5rem;

      .icon {
        z-index: 99999;
        position: absolute;
        top: 10px;
        right: 0px;
        transform: translateX(-50%);

        svg {
          transition: all ease 0.5s;

          &:hover {
            fill: #fff;
            stroke: #a07134;
            cursor: pointer;
            transform: scale(104%);
          }
        }
      }

      .image {
        width: 100%;
        max-height: calc(100% - 23px - 65px - 47px - 16px);
        pointer-events: none;
      }

      .info {
        margin-top: 1rem;
        text-align: center;
      }
    }

    .right {
      width: 100%;

      height: 70vh;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      overflow-x: visible;

      .title {
        font-size: 1.2rem;
        font-weight: bold;

        a {
          font-size: 1.2rem;
        }
      }

      .subtitle {
        font-size: 1rem;
      }

      .img-container {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      }
    }

    .isrealite {
      padding-right: 0.7rem;
      padding-left: 0.7rem;
    }

    .passion-tag-2 {
      color: #fff;
      background-color: #a07134;
      border: 1px solid #a07134;
      margin: 0.2rem 0.2rem;
      transition: all ease 0.5s;
    }

    .passion-tag-2:hover {
      transform: scale(110%);
      color: #bd8945;
      background-color: #fff;
      cursor: pointer;
    }

    .passion-tag {
      color: #a07134;
      border: 1px solid #a07134;
      margin: 0.2rem 0.2rem;
      transition: all ease 0.5s;
    }

    .passion-tag:hover {
      transform: scale(110%);
      color: #bd8945;
      cursor: pointer;
    }

    .belief-tag {
      color: #a07134;
      border: 1px solid #a07134;
      margin: 0.2rem 0.2rem;
      transition: all ease 0.5s;
    }

    .belief-tag:hover {
      transform: scale(110%);
      color: #bd8945;
      cursor: pointer;
    }

    .value-tag {
      color: #a07134;
      border: 1px solid #a07134;
      margin: 0.2rem 0.2rem;
      transition: all ease 0.5s;
    }

    .value-tag:hover {
      transform: scale(110%);
      color: #bd8945;
      cursor: pointer;
    }

    .left-bubble {
      color: #a07134;
      border: 1px solid #a07134;
      margin: 0.2rem 0.2rem;
      transition: all ease 0.5s;
    }

    .left-bubble:hover {
      transform: scale(110%);
      color: #bd8945;
      cursor: pointer;
    }

    .btn-container {
      display: flex;
      flex-direction: column;
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
      animation-duration: 0.8s;
      animation-name: changewidth;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
    @keyframes changewidth {
      from {
        transform: scale(95%);
      }

      to {
        transform: scale(110%);
      }
    }
    .custom-btn-1:hover {
      background-color: #ac854e !important;
      transform: scale(110%);
    }
  }
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

.nope-pointer,
.like-pointer {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // width: 64px;
  // height: 64px;
  font-size: 5rem;

  font-weight: bold;
}

.nope-pointer {
  // right: 50%;
  color: #dc2626;
}

.like-pointer {
  // left: 50%;
  color: #2ae4bd;
}

.super-pointer {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // margin: auto;
  // width: 112px;
  // height: 78px;
  line-height: 1.2;
  color: #3acdf5;
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
}

.rewind-pointer {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // width: 112px;
  // height: 78px;
  line-height: 1.2;
  font-size: 3rem;
  font-weight: bold;
  color: #93652b;
  text-align: center;
}

.pic {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

#skipTheQueueModal {
  border-radius: 10px !important;

  .top {
    text-align: center;
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
      outline: none;
      border: none;
      border-radius: 10px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.7rem 1.3rem;
      transition: all ease 0.5s;

      &:hover {
        background-color: #2a7dd8 !important;
        transform: scale(105%);
      }
    }

    .qavah-gold-btn {
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

      &:hover {
        background-color: #93652b !important;
        transform: scale(105%);
      }
    }

    .no-thanks-btn {
      font-size: 1rem;
    }
  }
}
</style>
