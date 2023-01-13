<template>
  <div>
    <div class="profile-edit">
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
        <div
          class="profile-card-inner pt-3"
          v-if="profile.profile_images.length > 0"
        >
          <div class="profileImageUpload">
            <div
              class="edit-icon"
              @click="
                editImage(
                  profile.profile_images[0].index,
                  profile.profile_images[0].url
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
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </div>
            <b-img
              width="200"
              height="200"
              rounded="lg"
              :src="profile.profile_images[0].url"
            ></b-img>
          </div>

          <div class="content w-100">
            <!-- Name -->
            <div
              class="w-100 d-flex justify-content-between align-items-center"
            >
              <b-form-group class="m-2" label="Name">
                <b-form-input
                  class="custom-field"
                  v-if="editName"
                  placeholder="Profile Name"
                  v-model="profile.profileName"
                ></b-form-input>

                <h2 class="text-capitalize" v-else>
                  {{ profile.profileName }}
                </h2>
              </b-form-group>

              <div
                class="edit-icon-field"
                v-if="!editName"
                @click="editName = !editName"
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
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <div
                class="edit-icon-pressed"
                v-if="editName"
                @click="editName = !editName"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
            </div>

            <!-- Age -->
            <div
              class="w-100 d-flex justify-content-between align-items-center"
            >
              <b-form-group class="m-2" label="Age">
                <b-form-input
                  class="custom-field"
                  v-if="editAge"
                  type="number"
                  v-model="profile.age"
                ></b-form-input>
                <h2 v-else>{{ profile.age }}</h2>
              </b-form-group>
              <div
                class="edit-icon-field"
                v-if="!editAge"
                @click="editAge = !editAge"
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
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <div
                class="edit-icon-pressed"
                v-if="editAge"
                @click="editAge = !editAge"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
            </div>

            <!-- Location -->
            <div
              class="w-100 d-flex justify-content-between align-items-center"
            >
              <b-form-group class="m-2" label="Location">
                <b-form-input
                  class="custom-field"
                  v-if="editLocation"
                  placeholder="Your Zipcode"
                  type="text"
                  v-model="newZipcode"
                />
                <h2 v-else>
                  {{ profile.location.city }},
                  {{ profile.location.state_abbr }}
                </h2>

                <p
                  class="p-0 m-0 text-small text-danger"
                  v-if="checkNewZipcode === undefined"
                >
                  Zipcode Is Invalid
                </p>
              </b-form-group>
              <div
                class="edit-icon-field"
                v-if="!editLocation"
                @click="editLocation = !editLocation"
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
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <div
                class="edit-icon-pressed"
                v-if="editLocation"
                @click="editLocation = !editLocation"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
            </div>

            <!-- Global -->
            <div
              class="w-100 d-flex justify-content-between align-items-center"
            >
              <b-form-group class="m-2" label="Search Type">
                <!-- <b-form-input
                  class="custom-field"
                  v-if="editRadius"
                  placeholder="Your Zipcode"
                  type="text"
                  v-model="profile.radius"
                /> -->
                <switches
                  v-model="profile.preferences.global"
                  v-if="editSearchPreference"
                  theme="custom"
                  color="secondary-inverse"
                  class="vue-switcher-small"
                ></switches>

                <h2 v-else>
                  {{ profile.preferences.global ? "Global" : "Regional" }}
                </h2>
              </b-form-group>

              <div
                class="edit-icon-field"
                v-if="!editSearchPreference"
                @click="editSearchPreference = !editSearchPreference"
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
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>

              <div
                class="edit-icon-pressed"
                v-if="editSearchPreference"
                @click="editSearchPreference = !editSearchPreference"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
            </div>

            <!-- Age Preferences -->
            <div
              v-if="!profile.preferences.global"
              class="w-100 d-flex justify-content-between align-items-center"
            >
              <b-form-group class="m-2" label="Age Preferences">
                <div
                  v-if="editAgePreferences"
                  class="d-flex justify-content-center align-items-center"
                >
                  <b-form-input
                    class="custom-field mr-2"
                    placeholder="Your Zipcode"
                    style="max-width: 50px"
                    type="text"
                    v-model="profile.preferences.ageFrom"
                  />

                  <p class="p-0 m-0">To</p>

                  <b-form-input
                    class="custom-field ml-2"
                    placeholder="Your Zipcode"
                    style="max-width: 50px"
                    type="text"
                    v-model="profile.preferences.ageTo"
                  />
                </div>
                <h2 v-else>
                  {{ profile.preferences.ageFrom }} to
                  {{ profile.preferences.ageTo }} Years
                </h2>
              </b-form-group>

              <div
                class="edit-icon-field"
                v-if="!editAgePreferences"
                @click="editAgePreferences = !editAgePreferences"
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
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <div
                class="edit-icon-pressed"
                v-if="editAgePreferences"
                @click="editAgePreferences = !editAgePreferences"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
            </div>

            <!-- Miles Radius  -->
            <div
              v-if="!profile.preferences.global"
              class="w-100 d-flex justify-content-between align-items-center"
            >
              <b-form-group class="m-2" label="Show Users Around Radius">
                <b-form-input
                  class="custom-field"
                  v-if="editRadius"
                  placeholder="Your Zipcode"
                  type="text"
                  v-model="profile.preferences.radius"
                />

                <h2 v-else>{{ profile.preferences.radius }} Miles</h2>
              </b-form-group>
              <div
                class="edit-icon-field"
                v-if="!editRadius"
                @click="editRadius = !editRadius"
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
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <div
                class="edit-icon-pressed"
                v-if="editRadius"
                @click="editRadius = !editRadius"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
            </div>
          </div>
        </div>
      </b-overlay>
      <!-- Summary & About Me -->
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
          <h2 class="mb-4 d-flex justify-content-start align-items-center">
            Summary
            <div
              class="edit-icon-field ml-2"
              v-if="!editSummary"
              @click="editSummary = !editSummary"
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
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </div>
            <div
              class="edit-icon-pressed ml-2"
              v-if="editSummary"
              @click="editSummary = !editSummary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
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
          </h2>

          <b-row>
            <b-col lg="10" md="12" sm="12">
              <b-form-textarea
                class="custom-field-textarea"
                v-model="profile.aboutMe"
                v-if="editSummary"
                rows="8"
                no-resize
              ></b-form-textarea>

              <p v-else>
                {{ profile.aboutMe }}
              </p>
            </b-col>
          </b-row>
        </div>

        <div class="about mt-4">
          <h2 class="mb-4 d-flex">
            About Me
            <div
              class="edit-icon-field ml-2"
              v-if="!editAboutMe"
              @click="editAboutMe = !editAboutMe"
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
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </div>
            <div
              class="edit-icon-pressed ml-2"
              v-if="editAboutMe"
              @click="editAboutMe = !editAboutMe"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
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
          </h2>

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
                <b-form-select
                  class="custom-field-test"
                  style="max-width: 146px"
                  v-if="editAboutMe"
                  v-model="profile.maritalStatus"
                  :options="maritalStatusOptions"
                >
                </b-form-select>
                <div
                  v-if="!editAboutMe"
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

                <b-form-select
                  class="custom-field-test"
                  style="max-width: 110px"
                  v-if="editAboutMe"
                  v-model="profile.relationshipIAmSeeking"
                  :options="relationshipIAmSeekingOptions"
                >
                </b-form-select>

                <div
                  v-if="!editAboutMe"
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
                <b-form-select
                  class="custom-field-test"
                  style="max-width: 90px"
                  v-if="editAboutMe"
                  v-model="profile.doYouWantMoreChildren"
                  :options="doYouWantMoreChildrenOptions"
                >
                </b-form-select>
                <div
                  v-if="!editAboutMe"
                  class="
                    d-flex
                    flex-column
                    justify-content-start
                    align-items-start
                  "
                >
                  <p class="p-0 m-0">Do You Want More Children:</p>
                  <p class="font-weight-bold p-0 m-0">
                    {{ profile.doYouWantMoreChildren }}
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
                <b-form-select
                  class="custom-field-test"
                  style="max-width: 215px"
                  v-if="editAboutMe"
                  v-model="profile.doYouHaveChildren"
                  :options="doYouHaveChildrenOptions"
                >
                </b-form-select>
                <div
                  v-if="!editAboutMe"
                  class="
                    d-flex
                    flex-column
                    justify-content-start
                    align-items-start
                  "
                >
                  <p class="p-0 m-0">Do You Have Childrens:</p>
                  <p class="font-weight-bold p-0 m-0">
                    {{ profile.doYouHaveChildren }}
                  </p>
                </div>
                <!-- <p v-if="!editAboutMe">
                  
                </p> -->
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
                <b-form-select
                  class="custom-field-test"
                  style="max-width: 130px"
                  v-if="editAboutMe"
                  v-model="profile.bodyType"
                  :options="bodyTypeOptions"
                >
                </b-form-select>
                <div
                  v-if="!editAboutMe"
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
                <b-form-select
                  class="custom-field-test"
                  style="max-width: 130px"
                  v-if="editAboutMe"
                  v-model="profile.livingSituation"
                  :options="livingSituationOptions"
                >
                </b-form-select>
                <div
                  v-if="!editAboutMe"
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
                <b-form-input
                  class="custom-field"
                  type="number"
                  v-if="editAboutMe"
                  style="max-width: 66px"
                  max="7"
                  min="0"
                  placeholder="Ft"
                  v-model="profile.height.feet"
                ></b-form-input>
                <b-form-input
                  class="custom-field"
                  type="number"
                  v-if="editAboutMe"
                  style="max-width: 66px"
                  max="14"
                  min="0"
                  placeholder="Inches"
                  v-model="profile.height.inches"
                ></b-form-input>

                <div
                  v-if="!editAboutMe"
                  class="
                    d-flex
                    flex-column
                    justify-content-start
                    align-items-start
                  "
                >
                  <p class="p-0 m-0">Height:</p>
                  <p class="font-weight-bold p-0 m-0">
                    {{ user.height.feet }}' feet & {{ user.height.inches }}''
                    inches
                  </p>
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-overlay>

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
          <div class="profile-images">
            <h2 class="mb-4">
              Profile Images
              <i class="add-image-icon" @click="openNewProfileImageModal"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  /></svg
              ></i>
            </h2>

            <b-overlay :show="profileImageRemoveLoader">
              <draggable
                class="images-container row p-4"
                v-model="profile.profile_images"
                draggable=".image-wrapper"
                @update="profileImagesDragEvent($event)"
              >
                <!-- <div class="images-container"> -->
                <div
                  class="image-wrapper"
                  v-for="(image, i) in profile.profile_images"
                  :key="i"
                >
                  <!-- <div
                    class="edit-icon"
                    @click="editAnyProfileImage(image.id, image.url, i)"
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
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </div> -->
                  <div
                    class="remove-icon"
                    @click="removeProfileImage(image.id, image.url, i)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
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
                  <b-img
                    class="profile-image rounded-lg"
                    fluid
                    :src="image.url"
                    @click="index = i"
                  ></b-img>
                </div>
                <!-- </div> -->
              </draggable>
            </b-overlay>
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
        <div class="mb-4">
          <div class="profile-images mt-4">
            <h2 class="mb-4">
              Gallery
              <i class="add-image-icon" @click="openNewGalleryImageModal"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  /></svg
              ></i>
            </h2>

            <draggable
              v-if="profile.gallery_images.length > 0"
              class="images-container row p-4"
              v-model="profile.gallery_images"
              draggable=".image-wrapper"
              @update="galleryImagesDragEvent($event)"
            >
              <!-- <div class="images-container"> -->
              <div
                class="image-wrapper"
                v-for="(image, i) in profile.gallery_images"
                :key="i"
              >
                <!-- <div
                  class="edit-icon"
                  @click="editGalleryImage(image.index, image.url, i)"
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
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </div> -->
                <div
                  class="remove-icon"
                  @click="removeGalleryImage(image.id, image.url, i)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
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
                <b-img
                  class="profile-image rounded-lg"
                  v-if="isImage(image.url)"
                  fluid
                  :src="image.url"
                  @click="galleryImagesIndex = i"
                ></b-img>

                <video
                  class="profile-image rounded-lg"
                  controls
                  v-if="!isImage(image.url)"
                  :src="image.url"
                ></video>
              </div>
              <!-- </div> -->
            </draggable>
            <vue-gallery-slideshow
              :images="transformGalleryImageArray(profile.gallery_images)"
              :index="galleryImagesIndex"
              @close="galleryImagesIndex = null"
            >
            </vue-gallery-slideshow>
          </div>
        </div>
      </b-overlay>

      <!-- More About Me Heading -->
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
        <h2 class="d-flex">
          More About Me
          <div
            class="edit-icon-field ml-2"
            v-if="!editMoreAboutMe"
            @click="editMoreAboutMe = !editMoreAboutMe"
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
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </div>
          <div
            class="edit-icon-pressed ml-2"
            v-if="editMoreAboutMe"
            @click="editMoreAboutMe = !editMoreAboutMe"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
        </h2>
      </b-overlay>

      <!-- More About Me Fields -->
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
        <!-- More About Me Fields -->
        <b-row>
          <b-col lg="4" md="6" sm="12">
            <!-- Do you drink?  -->
            <div class="">
              <b-form-group
                class="mb-2"
                label="Do you drink?"
                label-class="field-class"
              >
                <b-form-select
                  class="custom-field-test py-2 pr-4"
                  style="width: 148px !important"
                  v-if="editMoreAboutMe"
                  v-model="profile.doYouDrink"
                  :options="step2.doYouDrinkOptions"
                ></b-form-select>

                <b-badge
                  class="info-bubble"
                  pill
                  variant="outline-primary"
                  v-if="!editMoreAboutMe"
                  >{{ profile.doYouDrink }}</b-badge
                >

                <!-- <p v-if="!editDoYouDrink">{{ profile.doYouDrink }}</p> -->

                <template slot="label">
                  <div class="d-flex">
                    <p>Do You Drink?</p>
                  </div>
                </template>
              </b-form-group>
            </div>

            <!-- Employment Status -->
            <div class="">
              <b-form-group
                class="mb-2"
                label="Employment Status"
                label-class="field-class"
              >
                <b-form-select
                  class="custom-field-test py-2 pr-4"
                  style="width: 122px !important"
                  v-if="editMoreAboutMe"
                  v-model="profile.employmentStatus"
                  :options="step2.employmentStatusOptions"
                ></b-form-select>

                <b-badge
                  class="info-bubble"
                  pill
                  variant="outline-primary"
                  v-if="!editMoreAboutMe"
                  >{{ profile.employmentStatus }}</b-badge
                >

                <!-- <p v-if="!editEmploymentStatus">
                  {{ profile.moreAboutMe.employmentStatus }}
                </p> -->

                <template slot="label">
                  <div class="d-flex">
                    <p>Employment Status</p>
                  </div>
                </template>
              </b-form-group>
            </div>
          </b-col>
          <b-col lg="4" md="6" sm="12">
            <!-- Do You Smoke -->
            <div class="">
              <b-form-group
                class="mb-2"
                label="Do you smoke?"
                label-class="field-class"
              >
                <b-form-select
                  class="custom-field-test py-2 pr-4"
                  style="width: 142px !important"
                  v-if="editMoreAboutMe"
                  v-model="profile.doYouSmoke"
                  :options="step2.doYouSmokeOptions"
                ></b-form-select>

                <b-badge
                  class="info-bubble"
                  pill
                  variant="outline-primary"
                  v-if="!editMoreAboutMe"
                  >{{ profile.doYouSmoke }}</b-badge
                >

                <!-- <p v-if="!editDoYouSmoke">{{ profile.doYouSmoke }}</p> -->

                <template slot="label">
                  <div class="d-flex">
                    <p>Do You Smoke?</p>
                  </div>
                </template>
              </b-form-group>
            </div>

            <!-- Willing to relocate  -->
            <div class="">
              <b-form-group
                class="mb-2"
                label="Willing to relocate"
                label-class="field-class"
              >
                <b-form-select
                  class="custom-field-test py-2 pr-4"
                  style="width: 212px"
                  v-if="editMoreAboutMe"
                  v-model="profile.willingToRelocate"
                  :options="step2.willingToRelocateOptions"
                ></b-form-select>

                <b-badge
                  class="info-bubble"
                  pill
                  variant="outline-primary"
                  v-if="!editMoreAboutMe"
                  >{{ profile.willingToRelocate }}</b-badge
                >

                <!-- <p v-if="!editWillingToRelocate">
                {{ profile.willingToRelocate }}
              </p> -->

                <template slot="label">
                  <div class="d-flex">
                    <p>Willing To Relocate</p>
                  </div>
                </template>
              </b-form-group>
            </div>
          </b-col>
          <b-col lg="4" md="6" sm="12">
            <!-- How Often Do You Exercise -->
            <div class="">
              <b-form-group
                class="mb-2"
                label="How Often Do You Exercise"
                label-class="field-class"
              >
                <b-form-select
                  class="custom-field-test py-2 pr-4"
                  style="width: 217px !important"
                  v-if="editMoreAboutMe"
                  v-model="profile.howOftenDoYouExercise"
                  :options="step2.howOftenDoYouExerciseOptions"
                ></b-form-select>

                <b-badge
                  class="info-bubble"
                  pill
                  variant="outline-primary"
                  v-if="!editMoreAboutMe"
                  >{{ profile.howOftenDoYouExercise }}</b-badge
                >

                <!-- <p v-if="!editHowOftenDoYouExercise">
                {{ profile.howOftenDoYouExercise }}
              </p> -->

                <template slot="label">
                  <div class="d-flex">
                    <p>How Often Do You Exercise</p>
                  </div>
                </template>
              </b-form-group>
            </div>

            <!--Have Pets  -->
            <div class="">
              <b-form-group
                class="mb-2"
                label="Have Pets"
                label-class="field-class"
              >
                <b-form-select
                  class="custom-field-test py-2 pr-4"
                  style="width: 94px !important"
                  v-if="editMoreAboutMe"
                  v-model="profile.havePets"
                  :options="step2.havePetsOptions"
                ></b-form-select>

                <b-badge
                  class="info-bubble"
                  pill
                  variant="outline-primary"
                  v-if="!editMoreAboutMe"
                  >{{ profile.havePets }}</b-badge
                >
                <!-- <p v-if="!editHavePets">{{ profile.havePets }}</p> -->

                <b-form-input
                  class="custom-field mt-2"
                  type="text"
                  v-if="profile.havePets === 'Others' && editHavePets"
                  v-model="step2.form.havePetsOthers"
                ></b-form-input>
                <p v-if="!editHavePets && profile.havePets === 'Others'">
                  {{ step2.form.havePetsOthers }}
                </p>

                <template slot="label">
                  <div class="d-flex">
                    <p>Have Pets</p>
                  </div>
                </template>
              </b-form-group>
            </div>
          </b-col>
        </b-row>

        <!-- Isrealite Data Unlocked -->
        <div class="mt-4">
          <div class="isrealite-data-unlocked">
            <b-row>
              <!-- Isrealite Filters -->
              <b-col class="mt-4 mb-4" sm="12" md="12" lg="12">
                <h2 class="text-center">Israelite Filters</h2>
              </b-col>

              <!-- Lifestyle Heading -->
              <b-col class="mb-4" sm="12" md="12" lg="12">
                <h3 class="d-flex justify-content-center align-items-center">
                  Lifestyle
                  <div
                    class="edit-icon-field ml-2"
                    v-if="!editLifeStyle"
                    @click="editLifeStyle = !editLifeStyle"
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
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </div>
                  <div
                    class="edit-icon-pressed ml-2"
                    v-if="editLifeStyle"
                    @click="editLifeStyle = !editLifeStyle"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
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
                </h3>
              </b-col>

              <b-col lg="4" md="6" sm="12">
                <div class="">
                  <!-- I believe I am  -->
                  <b-form-group class="mb-2" label="I Believe I Am">
                    <b-form-select
                      class="custom-field-test py-2 pr-4"
                      style="width: 185px !important"
                      v-if="editLifeStyle"
                      v-model="profile.iBelieveIAM"
                      :options="step3.iBelieveIAMOptions"
                    ></b-form-select>

                    <b-badge
                      class="info-bubble"
                      pill
                      variant="outline-primary"
                      v-if="!editLifeStyle"
                      >{{ profile.iBelieveIAM }}</b-badge
                    >

                    <!-- <p v-if="!editIBelieveIAM">{{ profile.iBelieveIAM }}</p> -->

                    <template slot="label">
                      <div class="d-flex">
                        <p>I Believe I Am</p>
                      </div>
                    </template>
                  </b-form-group>
                </div>

                <div class="">
                  <!-- Marital Belief System  -->
                  <b-form-group class="mb-2" label="Marital Belief System">
                    <b-form-select
                      class="custom-field-test py-2 pr-4"
                      style="width: 98px !important"
                      v-if="editLifeStyle"
                      v-model="profile.maritalBeliefSystem"
                      :options="step3.maritalBeliefSystemOptions"
                    ></b-form-select>

                    <b-badge
                      class="info-bubble"
                      pill
                      variant="outline-primary"
                      v-if="!editLifeStyle"
                      >{{ profile.maritalBeliefSystem }}</b-badge
                    >

                    <!-- <p v-if="!editMaritalBeliefSystem">
                {{ profile.maritalBeliefSystem }}
              </p> -->

                    <template slot="label">
                      <div class="d-flex">
                        <p>Marital Belief System</p>
                      </div>
                    </template>
                  </b-form-group>
                </div>

                <!-- Study Bible -->
                <div class="">
                  <b-form-group class="mb-2" label="Study Bible">
                    <b-form-select
                      class="custom-field-test py-2 pr-4"
                      style="width: 188px !important"
                      v-if="editLifeStyle"
                      v-model="profile.studyBible"
                      :options="step3.studyBibleOptions"
                    ></b-form-select>

                    <b-badge
                      class="info-bubble"
                      pill
                      variant="outline-primary"
                      v-if="!editLifeStyle"
                      >{{ profile.studyBible }}</b-badge
                    >

                    <template slot="label">
                      <div class="d-flex">
                        <p>Study Bible</p>
                      </div>
                    </template>
                  </b-form-group>
                </div>
              </b-col>
              <b-col lg="4" md="6" sm="12">
                <!-- Years In Truth  -->
                <div class="">
                  <b-form-group class="mb-2" label="Years In Truth?">
                    <b-form-select
                      class="custom-field-test py-2 pr-4"
                      style="width: 126px !important"
                      v-if="editLifeStyle"
                      v-model="profile.yearsInTruth"
                      :options="step3.yearsInTruthOptions"
                    ></b-form-select>

                    <b-badge
                      class="info-bubble"
                      pill
                      variant="outline-primary"
                      v-if="!editLifeStyle"
                      >{{ profile.yearsInTruth }}</b-badge
                    >

                    <template slot="label">
                      <div class="d-flex">
                        <p>Years In Truth?</p>
                      </div>
                    </template>
                  </b-form-group>
                </div>
                <!-- Any Affiliations -->
                <div class="">
                  <b-form-group class="mb-2" label="Any Affiliations">
                    <b-form-select
                      class="custom-field-test py-2 pr-4"
                      style="width: 223px !important"
                      v-if="editLifeStyle"
                      v-model="profile.anyAffiliation"
                      :options="step3.anyAffiliationOptions"
                    ></b-form-select>

                    <span v-if="!editLifeStyle" class="info-bubble-3">
                      {{ profile.anyAffiliation }}
                    </span>

                    <!-- <b-badge
                      class="info-bubble"
                      pill
                      variant="outline-primary"
                      v-if="!editLifeStyle"
                      >{{
                        profile.isrealiteFilter.lifestyle.anyAffiliation
                      }}</b-badge
                    > -->

                    <!-- <p v-if="!editAnyAffiliation">
                  {{ profile.anyAffiliation }}
                </p> -->

                    <template slot="label">
                      <div class="d-flex">
                        <p>Any Affiliations</p>
                      </div>
                    </template>
                  </b-form-group>
                </div>
                <!-- Camp Member Dropdown -->
                <div v-if="step3.campMemberSelected">
                  <b-form-group class="mb-2" label="Camp Member Options">
                    <b-form-select
                      class="custom-field-test py-2 pr-4"
                      style="width: 118px !important"
                      v-if="editLifeStyle"
                      v-model="profile.campMember"
                      :options="step3.campMemberOptions"
                    ></b-form-select>

                    <b-badge
                      class="info-bubble"
                      pill
                      variant="outline-primary"
                      v-if="!editLifeStyle"
                      >{{ profile.campMember }}</b-badge
                    >

                    <template slot="label">
                      <div class="d-flex">
                        <p>Camp Member Options</p>
                      </div>
                    </template>
                  </b-form-group>
                </div>
                <!-- Spiritual background -->
                <div class="">
                  <b-form-group class="mb-2" label="Spiritual background">
                    <b-form-select
                      class="custom-field-test py-2 pr-4"
                      style="width: 210px !important"
                      v-if="editLifeStyle"
                      v-model="profile.spiritualBackground"
                      :options="step3.spiritualBackgroundOptions"
                    ></b-form-select>

                    <!-- <b-badge
                      class="info-bubble"
                      pill
                      variant="outline-primary"
                      v-if="!editLifeStyle"
                      >{{
                        profile.isrealiteFilter.lifestyle.spiritualBackground
                      }}</b-badge
                    > -->

                    <span v-if="!editLifeStyle" class="info-bubble-3">
                      {{ profile.spiritualBackground }}
                    </span>

                    <template slot="label">
                      <div class="d-flex">
                        <p>Spiritual Background</p>
                      </div>
                    </template>
                  </b-form-group>
                </div>
              </b-col>
              <b-col lg="4" md="6" sm="12">
                <div class="">
                  <!-- Spiritual Values   -->
                  <b-form-group class="mb-2" label="Spiritual Values">
                    <b-form-select
                      class="custom-field-test py-2 pr-4"
                      style="width: 115px !important"
                      v-if="editLifeStyle"
                      v-model="profile.spiritualValue"
                      :options="step3.spiritualValueOptions"
                    ></b-form-select>

                    <b-badge
                      class="info-bubble"
                      pill
                      variant="outline-primary"
                      v-if="!editLifeStyle"
                      >{{ profile.spiritualValue }}</b-badge
                    >

                    <!-- <p v-if="!editSpiritualValue">{{ profile.spiritualValue }}</p> -->

                    <template slot="label">
                      <div class="d-flex">
                        <p>Spiritual Values</p>
                      </div>
                    </template>
                  </b-form-group>
                </div>

                <!-- Study Habits -->
                <div class="">
                  <b-form-group class="mb-2" label="Study Habits">
                    <b-form-select
                      class="custom-field-test py-2 pr-4"
                      style="width: 312px !important"
                      v-if="editLifeStyle"
                      v-model="profile.studyHabits"
                      :options="step3.studyHabitsOptions"
                    ></b-form-select>

                    <!-- <b-badge
                      class="info-bubble"
                      pill
                      variant="outline-primary"
                      v-if="!editLifeStyle"
                      >{{
                        profile.isrealiteFilter.Studyhabits.studyHabits
                      }}</b-badge
                    > -->
                    <span v-if="!editLifeStyle" class="info-bubble-3">
                      {{ profile.studyHabits }}
                    </span>

                    <template slot="label">
                      <div class="d-flex">
                        <p>Study Habits</p>
                      </div>
                    </template>
                  </b-form-group>
                </div>
              </b-col>
            </b-row>

            <!-- Values -->
            <b-row>
              <b-col class="mt-4 mb-4" sm="12" md="12" lg="12">
                <h3 class="d-flex justify-content-center align-items-center">
                  Values
                  <div
                    class="edit-icon-field ml-2"
                    v-if="!editValues"
                    @click="editValues = !editValues"
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
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </div>
                  <div
                    class="edit-icon-pressed ml-2"
                    v-if="editValues"
                    @click="editValues = !editValues"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
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
                </h3>
              </b-col>
              <b-col class="mb-4" sm="12" md="6" lg="4">
                <!-- Israelites Practice Keeping   -->
                <b-form-group>
                  <div v-if="!editValues">
                    <span
                      class="info-bubble-4"
                      v-for="(
                        tag, index
                      ) in profile.selected_isrealitePracticeKeeping"
                      :key="index"
                      >{{ tag }}</span
                    >
                  </div>

                  <b-form-checkbox-group
                    id="isrealitePracticeKeeping-group-"
                    v-model="profile.selected_isrealitePracticeKeeping"
                    :options="step3.isrealitePracticeKeepingOptions"
                    v-if="editValues"
                    name="isrealitePracticeKeeping"
                  ></b-form-checkbox-group>
                  <template slot="label">
                    <div class="d-flex">
                      <p>Israelites Practice Keeping</p>
                    </div>
                  </template>
                </b-form-group>
              </b-col>
              <b-col class="mb-4" sm="12" md="6" lg="">
                <div class="isrealite-bubbles-section">
                  <div class="mr-2 w-50">
                    <b-form-group label="Passions">
                      <template slot="label">
                        <div class="d-flex">
                          <p>Passions</p>
                        </div>
                      </template>
                      <b-button
                        class="add-btn"
                        v-if="editValues"
                        @click="openModal('add-passions-modal')"
                      >
                        <svg
                          data-name="Layer 1"
                          height="20"
                          fill="currentColor"
                          id="Layer_1"
                          viewBox="0 0 100 100"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title />
                          <path
                            d="M63.3,30.22l-.2-.09A22.53,22.53,0,0,1,50,5,33.77,33.77,0,0,0,27.63,33.9q-.09,1.09-.12,2.19c0,.24,0,.48,0,.73a33.59,33.59,0,0,0,5.66,18.71A11.23,11.23,0,0,1,20.48,44.88,33.76,33.76,0,0,0,47.94,94.94a15.48,15.48,0,0,1-9.19-13.81c0-.11,0-.22,0-.33a15.46,15.46,0,0,1,9.37-14.22l.08,0h0a12.65,12.65,0,0,0,7.64-11.61A15.49,15.49,0,0,1,64,67.24c0,.34,0,.68.05,1,0,.11,0,.22,0,.33a15.39,15.39,0,0,1-2.59,8.58L60.21,79l2.25.29a7.12,7.12,0,0,0,.9.06,7,7,0,0,0,5.71-2.92,15.45,15.45,0,0,1-3.34,14.65A33.75,33.75,0,0,0,83.74,62c0-.24,0-.48,0-.73A33.76,33.76,0,0,0,63.3,30.22Zm17.63,31.7a30.94,30.94,0,0,1-8.52,20.65q.09-.88.09-1.78a18.31,18.31,0,0,0-.73-5.11l-1.61-5.55-3.37,4.69a4.2,4.2,0,0,1-1.54,1.31,18.22,18.22,0,0,0,1.63-7.55c0-.13,0-.26,0-.39,0-.39,0-.79-.06-1.19a18.21,18.21,0,0,0-9.62-14.56l-4.13-2.2v4.68a9.86,9.86,0,0,1-6,9L47,64a18.27,18.27,0,0,0-11.07,16.8c0,.13,0,.26,0,.39a18.18,18.18,0,0,0,2.43,8.74A31,31,0,0,1,20.3,52.6a14,14,0,0,0,11.42,5.84,14.22,14.22,0,0,0,1.8-.12l4.5-.58L35.5,54a30.79,30.79,0,0,1-5.19-17.15c0-.22,0-.45,0-.67,0-.66.05-1.34.11-2A31,31,0,0,1,46.7,9.51,25.31,25.31,0,0,0,62,32.72l.06,0,.15.06A30.92,30.92,0,0,1,80.94,61.25C80.94,61.47,80.93,61.7,80.93,61.92Z"
                          />
                        </svg>
                        Add Passions</b-button
                      >

                      <div v-if="!editValues">
                        <span
                          class="info-bubble-4"
                          v-for="(tag, index) in profile.passions"
                          :key="index"
                          >{{ tag.options }}</span
                        >
                      </div>

                      <b-modal
                        centered
                        content-class="rounded-lg"
                        body-class="rounded-lg"
                        size="xl"
                        id="add-passions-modal"
                        hide-header
                        hide-footer
                      >
                        <h2 class="text-center">Passions</h2>
                        <p class="text-center">
                          Let everyone know what you're passionate about by
                          adding it to your profile.
                        </p>

                        <div class="passions-tags-container">
                          <span
                            class="passion-tag"
                            variant="empty"
                            pill
                            v-for="(tag, index) in step3.passionsTags"
                            :class="{
                              selected: check_exist(profile.passions, tag),
                            }"
                            :key="index"
                            @click="selectTag(tag)"
                          >
                            {{ tag }}
                          </span>
                        </div>

                        <div
                          class="
                            d-flex
                            justify-content-center
                            align-items-center
                            mt-4
                          "
                        >
                          <b-button
                            class="passion-continue-btn text-center"
                            @click="closeModal('add-passions-modal')"
                            >Continue ({{ countSelectedCount }}/6)</b-button
                          >
                        </div>
                      </b-modal>
                    </b-form-group>
                    <p
                      v-if="countSelectedCount > 0"
                      :class="{ 'text-info': countSelectedCount < 6 }"
                    >
                      Passions Selected : ({{ countSelectedCount }}/6)
                    </p>
                  </div>
                  <div class="w-50">
                    <b-form-group label="Kingdom Gifts">
                      <template slot="label">
                        <div class="d-flex">
                          <p>Kingdom Gifts</p>
                        </div>
                      </template>
                      <div v-if="!editValues">
                        <b-badge
                          class="info-bubble-2"
                          pill
                          variant="outline-primary"
                          v-for="(tag, index) in profile.kingdom_gifts"
                          :key="index"
                          >{{ tag.options }}</b-badge
                        >
                      </div>

                      <b-button
                        class="add-btn"
                        v-if="editValues"
                        @click="openModal('add-kingdom-gifts-modal')"
                        ><svg
                          enable-background="new 0 0 64 64"
                          height="20"
                          id="Слой_3"
                          version="1.1"
                          viewBox="0 0 64 64"
                          xml:space="preserve"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <path
                            d="  M32.636,24.687c1.213-0.596,5.557-2.292,10.309,1.152c1.543,1.118,2.852,1.719,3.943,2.004"
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="2.7"
                          />
                          <path
                            d="  M32.636,24.687c1.566-0.01,3.797,0.462,5.814,2.656c3.602,3.908,5.947,2.222,5.947,2.222"
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="2.7"
                          />
                          <line
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="2.7"
                            x1="42.454"
                            x2="50.394"
                            y1="40.771"
                            y2="34.713"
                          />
                          <rect
                            fill="none"
                            height="23.787"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="2.7"
                            width="15.361"
                            x="37.524"
                            y="34.713"
                          />
                          <line
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="2.7"
                            x1="37.524"
                            x2="52.886"
                            y1="53.137"
                            y2="41.412"
                          />
                          <line
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="2.7"
                            x1="41.771"
                            x2="52.886"
                            y1="58.5"
                            y2="50.018"
                          />
                          <line
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="2.7"
                            x1="52.886"
                            x2="61.089"
                            y1="58.5"
                            y2="58.5"
                          />
                          <path
                            d="  M32.636,24.687c0,0,0.723-6.353,5.381-8.364c5.072-2.188,6.736,3.014,2.844,3.014C36.899,19.336,33.169,22.833,32.636,24.687z"
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="2.7"
                          />
                          <line
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="2.7"
                            x1="15.223"
                            x2="32.636"
                            y1="36.102"
                            y2="24.687"
                          />
                          <polyline
                            fill="none"
                            points="  30.16,37.537 20.366,43.947 20.364,43.949 9.801,27.833 9.812,27.831 22.921,19.25 22.921,19.249 22.001,17.844 22.001,17.848   26.3,15.019 32.636,24.687 38.702,33.939 34.401,36.77 34.399,36.766 33.478,35.359 25.802,23.646 "
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="2.7"
                          />
                          <path
                            d="  M33.481,35.363"
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="2.7"
                          />
                          <polyline
                            fill="none"
                            points="  10.911,48.316 10.911,58.5 37.524,58.5 37.524,43.949 9.631,43.949 9.631,48.316 33.524,48.316 "
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="2.7"
                          />
                          <line
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="2.7"
                            x1="26.027"
                            x2="26.027"
                            y1="43.949"
                            y2="58.5"
                          />
                          <line
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="2.7"
                            x1="6.01"
                            x2="2.999"
                            y1="58.5"
                            y2="58.5"
                          />
                          <path
                            d="  M55.634,16.962c-0.701,1.22-1.629,0.685-2.332,1.904s0.227,1.755-0.477,2.976c-0.701,1.222-1.633,0.687-2.334,1.906"
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="2.7"
                          />
                          <path
                            d="  M4.504,34.76c0.491,0,0.888,0.396,0.888,0.887c0,0.492-0.397,0.889-0.888,0.889s-0.888-0.396-0.888-0.889"
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="2.7"
                          />
                          <line
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="2.7"
                            x1="18.256"
                            x2="14.891"
                            y1="11.969"
                            y2="9.859"
                          />
                        </svg>
                        Add Kingdom Gifts</b-button
                      >

                      <b-modal
                        centered
                        content-class="rounded-lg"
                        body-class="rounded-lg"
                        id="add-kingdom-gifts-modal"
                        size="xl"
                        hide-header
                        hide-footer
                      >
                        <h2 class="text-center">Kingdom Gifts</h2>
                        <p class="text-center">
                          Let everyone know what you're passionate about by
                          adding it to your profile.
                        </p>

                        <div class="kingdom-gifts-tags-container">
                          <b-badge
                            class="kingdom-gifts-tag"
                            variant="empty"
                            pill
                            v-for="(tag, index) in step3.kingdomGiftsTags"
                            :class="{
                              selected: check_exist(profile.kingdom_gifts, tag),
                            }"
                            :key="index"
                            @click="selectKingdomGiftsTag(tag)"
                          >
                            {{ tag }}
                          </b-badge>
                        </div>

                        <div
                          class="
                            d-flex
                            justify-content-center
                            align-items-center
                            mt-4
                          "
                        >
                          <b-button
                            class="passion-continue-btn text-center"
                            @click="closeModal('add-kingdom-gifts-modal')"
                            >Continue ( {{ countSelectedKingdomGiftsCount }}/10)
                          </b-button>
                        </div>
                      </b-modal>
                    </b-form-group>

                    <p
                      v-if="countSelectedKingdomGiftsCount > 0"
                      :class="{
                        'text-info': countSelectedKingdomGiftsCount < 10,
                      }"
                    >
                      Kingdom Gifts Selected : ({{
                        countSelectedKingdomGiftsCount
                      }}/10)
                    </p>
                  </div>
                </div>
              </b-col>
            </b-row>
          </div>
        </div>
      </b-overlay>
    </div>

    <div class="btn-container">
      <b-button class="custom-btn-1" @click="EditProfile">Update</b-button>
    </div>

    <!-- Modals -->

    <!-- Modals -->
    <!-- Gallery Modal -->
    <b-modal
      id="updateGalleryImageModal"
      content-class="rounded-lg"
      body-class="rounded-lg"
      hide-header
      hide-footer
    >
      <!-- Profile Image Section -->
      <b-overlay :show="uploadGalleryImage.loader">
        <template #overlay>
          <GridLoader
            class="custom-class"
            color="#93652b"
            :loading="uploadGalleryImage.loader"
            :size="10"
            sizeUnit="px"
          />
        </template>
        <div class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            @click="closeModal('updateGalleryImageModal')"
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

        <div
          class="d-flex justify-content-center align-items-center"
          v-if="uploadGalleryImage.oldimage && !uploadGalleryImage.url"
        >
          <b-img
            width="200"
            height="200"
            v-if="
              uploadGalleryImage.oldimage &&
              isImage(uploadGalleryImage.oldimage)
            "
            class="rounded-lg"
            :src="
              uploadGalleryImage.url
                ? uploadGalleryImage.url
                : uploadGalleryImage.oldimage
            "
          ></b-img>

          <video
            class="profile-image rounded-lg"
            controls
            v-if="
              uploadGalleryImage.oldimage &&
              !isImage(uploadGalleryImage.oldimage)
            "
            :src="
              uploadGalleryImage.url
                ? uploadGalleryImage.url
                : uploadGalleryImage.oldimage
            "
          ></video>
        </div>

        <div
          class="d-flex justify-content-center align-items-center"
          v-if="uploadGalleryImage.url"
        >
          <b-img
            width="200"
            height="200"
            v-if="
              uploadGalleryImage.filetype.includes('image') &&
              !uploadGalleryImage.filetype.includes('video')
            "
            class="rounded-lg"
            :src="
              uploadGalleryImage.url
                ? uploadGalleryImage.url
                : uploadGalleryImage.oldimage
            "
          ></b-img>

          <video
            class="profile-image rounded-lg"
            controls
            v-if="
              uploadGalleryImage.filetype.includes('video') &&
              !uploadGalleryImage.filetype.includes('image')
            "
            :src="
              uploadGalleryImage.url
                ? uploadGalleryImage.url
                : uploadGalleryImage.oldimage
            "
          ></video>
        </div>

        <b-form-group class="mt-4">
          <b-form-file
            v-model="uploadGalleryImage.newImage"
            :state="Boolean(uploadGalleryImage.newImage)"
            @change="onFileChangeAnyGallery($event)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
          ></b-form-file>
          <div class="mt-3">
            Selected file:
            {{
              uploadGalleryImage.newImage
                ? uploadGalleryImage.newImage.name
                : ""
            }}
          </div>
        </b-form-group>

        <div class="d-flex justify-content-center align-items-center">
          <b-button class="custom-btn-1" @click="updateGalleryImage"
            >Update</b-button
          >
        </div>
      </b-overlay>
    </b-modal>

    <!-- Profile Modal -->
    <b-modal
      id="profileImageUploadModal"
      content-class="rounded-lg"
      body-class="rounded-lg"
      hide-header
      hide-footer
    >
      <div class="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          @click="closeModal('profileImageUploadModal')"
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

      <b-overlay :show="uploadProfileImage.loader">
        <template #overlay>
          <GridLoader
            class="custom-class"
            color="#93652b"
            :loading="uploadProfileImage.loader"
            :size="10"
            sizeUnit="px"
          />
        </template>

        <div class="d-flex justify-content-center align-items-center">
          <b-img
            width="200"
            height="200"
            class="rounded-lg"
            :src="
              uploadProfileImage.url
                ? uploadProfileImage.url
                : uploadProfileImage.oldimage
            "
          ></b-img>
        </div>

        <b-form-group class="mt-4">
          <b-form-file
            v-model="uploadProfileImage.newImage"
            :state="Boolean(uploadProfileImage.newImage)"
            @change="onFileChange($event)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
          ></b-form-file>
          <div class="mt-3">
            Selected file:
            {{
              uploadProfileImage.newImage
                ? uploadProfileImage.newImage.name
                : ""
            }}
          </div>
        </b-form-group>

        <div class="d-flex justify-content-center align-items-center">
          <b-button class="custom-btn-1" @click="updateProfileImage"
            >Update</b-button
          >
        </div>
      </b-overlay>
    </b-modal>

    <!-- Any Profile Image Modal -->
    <b-modal
      id="anyProfileImageUploadModal"
      content-class="rounded-lg"
      body-class="rounded-lg"
      hide-header
      hide-footer
    >
      <div class="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          @click="closeModal('anyProfileImageUploadModal')"
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

      <b-overlay :show="uploadAnyProfileImage.loader">
        <template #overlay>
          <GridLoader
            class="custom-class"
            color="#93652b"
            :loading="uploadAnyProfileImage.loader"
            :size="10"
            sizeUnit="px"
          />
        </template>

        <div class="d-flex justify-content-center align-items-center">
          <b-img
            width="200"
            height="200"
            class="rounded-lg"
            :src="
              uploadAnyProfileImage.url
                ? uploadAnyProfileImage.url
                : uploadAnyProfileImage.oldimage
            "
          ></b-img>
        </div>

        <b-form-group class="mt-4">
          <b-form-file
            v-model="uploadAnyProfileImage.newImage"
            :state="Boolean(uploadAnyProfileImage.newImage)"
            @change="onFileChangeAnyProfile($event)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
          ></b-form-file>
          <div class="mt-3">
            Selected file:
            {{
              uploadAnyProfileImage.newImage
                ? uploadAnyProfileImage.newImage.name
                : ""
            }}
          </div>
        </b-form-group>

        <div class="d-flex justify-content-center align-items-center">
          <b-button class="custom-btn-1" @click="updateAnyProfileImage"
            >Update</b-button
          >
        </div>
      </b-overlay>
    </b-modal>

    <!-- Add New Image Modal -->
    <b-modal
      id="addNewImageModal"
      content-class="rounded-lg"
      body-class="rounded-lg"
      hide-header
      hide-footer
    >
      <div class="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          @click="closeModal('addNewImageModal')"
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

      <b-overlay :show="addNewImage.loader">
        <template #overlay>
          <GridLoader
            class="custom-class"
            color="#93652b"
            :loading="addNewImage.loader"
            :size="10"
            sizeUnit="px"
          />
        </template>

        <div class="d-flex justify-content-center align-items-center">
          <!-- <p>Old Image URL : {{ addNewImage.newImage }}</p> -->
          <!-- <p>New Image URL : {{ addNewImage.url }}</p> -->
          <b-img
            width="200"
            v-if="addNewImage.filetype.includes('image')"
            height="200"
            class="rounded-lg"
            :src="addNewImage.url"
          ></b-img>

          <video
            class="profile-image rounded-lg"
            controls
            v-if="addNewImage.filetype.includes('video')"
            :src="addNewImage.url"
          ></video>
        </div>

        <b-form-group class="mt-4">
          <b-form-file
            v-model="addNewImage.newImage"
            :state="Boolean(addNewImage.newImage)"
            @change="onFileChangeAddNewImage($event)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
          ></b-form-file>
          <div class="mt-3">
            Selected file:
            {{ addNewImage.newImage ? addNewImage.newImage.name : "" }}
          </div>
        </b-form-group>

        <div class="d-flex justify-content-center align-items-center">
          <b-button class="custom-btn-1" @click="addNewImageFunction"
            >Update</b-button
          >
        </div>
      </b-overlay>
    </b-modal>
  </div>
</template>

<script>
import { apiUrl, headers } from "@/constants/config";
import axios, { Axios } from "axios";
import { getCurrentUser } from "@/utils";
import { validationMixin } from "vuelidate";
const { required } = require("vuelidate/lib/validators");
import draggable from "vuedraggable";
import VueGallerySlideshow from "vue-gallery-slideshow";
import Vue from "vue";
import Swal from "sweetalert2";
import cities from "cities";
import Switches from "vue-switches";
import { mapGetters } from "vuex";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export default {
  components: {
    VueGallerySlideshow,
    draggable,
    Switches,
  },
  props: ["user"],
  data() {
    return {
      editRadius: false,
      editAgePreferences: false,
      editSearchPreference: false,
      newZipcode: "",
      checkNewZipcode: "",
      galleryImageDropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 200,
        maxFilesize: 15,
        headers: { "My-Awesome-Header": "header value" },
        previewTemplate: this.dropzoneTemplate(),
        addRemoveLinks: true,
        maxFiles: "20",
        clickable: true,
      },
      addNewImage: {
        url: "",
        newImage: "",
        oldimage: "",
        oldImageIndex: null,
        index: null,
        loader: false,
        uploadedUrl: "",
        image_link: "",
        type: "",
        filetype: "image/jpeg",
      },
      uploadGalleryImage: {
        url: "",
        newImage: "",
        oldimage: "",
        oldImageIndex: null,
        index: null,
        loader: false,
        uploadedUrl: "",
        image_link: "",
        filetype: "image/jpeg",
      },
      uploadProfileImage: {
        url: "",
        newImage: "",
        oldimage: "",
        oldImageIndex: null,
        index: null,
        loader: false,
        uploadedUrl: "",
        image_link: "",
      },
      uploadAnyProfileImage: {
        url: "",
        newImage: "",
        oldimage: "",
        oldImageIndex: null,
        index: null,
        loader: false,
        uploadedUrl: "",
        image_link: "",
      },
      dataLoader: false,
      galleryImagesLoader: false,
      profileImagesLoader: false,
      profileImageSectionLoader: false,
      summaryAboutSectionLoader: false,
      premium: false,
      editName: false,
      editAge: false,
      editLocation: false,
      editSummary: false,
      editMaritalStatus: false,
      editBodyType: false,
      editStudyHabits: false,
      editDoYouHaveChildren: false,
      editDoYouWantMoreChildren: false,
      editHeight: false,
      editMaritalStatus: false,
      editLivingSituation: false,
      editDoYouHaveChildren: false,
      editDoYouWantMoreChildren: false,
      editRelationshipIAmSeeking: false,
      editBodyType: false,
      editHowOftenDoYouExercise: false,
      editHavePets: false,
      editDoYouDrink: false,
      editDoYouSmoke: false,
      editEmploymentStatus: false,
      editWillingToRelocate: false,
      editIBelieveIAM: false,
      editSpiritualValue: false,
      editMaritalBeliefSystem: false,
      editAnyAffiliation: false,
      editStudyBible: false,
      editYearsInTruth: false,
      editSpiritualBackground: false,
      editIsrealitePracticeKeeping: false,
      editPassions: false,
      editKingdomGifts: false,
      editAboutMe: false,
      editMoreAboutMe: false,
      editLifeStyle: false,
      editValues: false,
      profileImageRemoveLoader: false,
      galleryImageRemoveLoader: false,
      imageForEdit: "",
      imageForEditIndex: "",
      imagesAfterSorting: [],
      galleryImagesIndex: null,
      index: null,
      url: null,
      showFullSummary: false,
      profile: {
        profileName: "Shalum",
        governmentName: "Andria",
        email: "shalum@4slash.com",
        password: "test",
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
          "https://media.istockphoto.com/photos/young-black-african-american-woman-portrait-indoors-picture-id1297066716?b=1&k=20&m=1297066716&s=170667a&w=0&h=PQYkd0dYpaljZ7GSXNbJos_vaj744rq9-AnNNbaXqkw=",

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
          "https://media.istockphoto.com/photos/young-black-african-american-woman-portrait-indoors-picture-id1297066716?b=1&k=20&m=1297066716&s=170667a&w=0&h=PQYkd0dYpaljZ7GSXNbJos_vaj744rq9-AnNNbaXqkw=",

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
          text: "Never married",
          value: "Never married",
        },
        {
          text: "Currently seperated",
          value: "Currently seperated",
        },
        {
          text: "Currently engaged",
          value: "Currently engaged",
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
          text: "I Drink Socially",
          value: "I Drink Socially",
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
            text: "I Drink Socially",
            value: "I Drink Socially",
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
    check_exist(data, tag) {
      let resp = data.filter(function (elem) {
        return elem.options == tag;
      });
      if (resp.length > 0) {
        return true;
      } else {
        return false;
      }
    },
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
    dropzoneTemplate() {
      return `<div class="dz-preview dz-file-preview mb-3">
                  <div class="d-flex flex-row "> <div class="p-0 w-30 position-relative">
                      <div class="dz-error-mark"><span><i></i>  </span></div>
                      <div class="dz-success-mark"><span><i></i></span></div>
                      <div class="preview-container">
                        <img data-dz-thumbnail class="img-thumbnail border-0" />
                        <i class="simple-icon-doc preview-icon"></i>
                      </div>
                  </div>
                  <div class="pl-3 pt-2 pr-2 pb-1 w-70 dz-details position-relative">
                    <div> <span data-dz-name /> </div>
                    <div class="text-primary text-extra-small" data-dz-size /> </div>
                    <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
                    <div class="dz-error-message"><span data-dz-errormessage></span></div>
                  </div>
                  <a href="#" class="remove mt-4" data-dz-remove> 
                  <svg xmlns="http://www.w3.org/2000/svg" class="remove-icon" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg> </a>
                </div>
        `;
    },
    isImage(url) {
      console.log("url before triming -> ", url);

      if (url.includes("blob")) {
        return false;
      } else {
        let sturl = String(url);
        let reak = sturl.split("?")[0];
        let dotsplit = reak.split(".");
        let filetype = dotsplit[dotsplit.length - 1];
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
      }

      // console.log("filetype -> ", filetype);
      // console.log("dotsplit -> ", dotsplit);

      // if (
      //   filetype === "jpg" ||
      //   filetype === "png" ||
      //   filetype === "gif" ||
      //   filetype === "jpeg"
      // ) {
      //   return true;
      // } else {
      //   if (filetype.includes("blob")) {
      //     return true;
      //   } else {
      //     return false;
      //   }
      // }
    },
    openNewProfileImageModal() {
      this.openModal("addNewImageModal");
      this.addNewImage.type = "profile";
    },
    openNewGalleryImageModal() {
      this.openModal("addNewImageModal");
      this.addNewImage.type = "gallery";
    },
    onGalleryImageChange(e) {
      const file = e.target.files[0];
      this.uploadGalleryImage.url = URL.createObjectURL(file);
    },
    editImage(index, image) {
      debugger;
      this.uploadProfileImage.oldimage = image;
      this.uploadProfileImage.oldImageIndex = index;
      this.openModal("profileImageUploadModal");
    },
    editAnyProfileImage(index, image, actualIndex) {
      this.uploadAnyProfileImage.oldimage = image;
      this.uploadAnyProfileImage.oldImageIndex = index;
      this.uploadAnyProfileImage.actualIndex = actualIndex;
      this.openModal("anyProfileImageUploadModal");
    },
    removeProfileImage(index, image, actualIndex) {
      this.profileImageRemoveLoader = true;
      let data = {
        uid: this.profile.id,
        link: image,
        index: index,
        actualIndex: actualIndex,
      };
      debugger;

      axios
        .post(`${apiUrl}/user/remove-profile-image`, data, { headers })
        .then((res) => {
          // console.log("res -> ", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              this.profileImageRemoveLoader = false;

              Vue.$toast.default("Image Removed!");
              this.$emit("profile-image-removed");
              this.$router.go();
            } else {
              this.profileImageRemoveLoader = false;

              Vue.$toast.default(`Error Occurred: ${data.error}`);
            }
          } else {
            this.profileImageRemoveLoader = false;

            Vue.$toast.default(`Error Occurred!`);
          }
        })
        .catch((err) => {
          this.profileImageRemoveLoader = false;
          Vue.$toast.default(`Error Occurred: ${err}`);
        });
    },
    editGalleryImage(index, image, actualIndex) {
      debugger;
      this.uploadGalleryImage.oldimage = image;
      this.uploadGalleryImage.oldImageIndex = index;
      this.uploadGalleryImage.actualIndex = actualIndex;
      this.openModal("updateGalleryImageModal");
    },
    removeGalleryImage(index, image, actualIndex) {
      debugger;
      this.galleryImagesLoader = true;
      let data = {
        uid: this.profile.myUid,
        link: image,
        index: index,
        actualIndex: actualIndex,
      };
      // console.log("data -> ", data);
      axios
        .post(`${apiUrl}/user/remove-gallery-image`, data, { headers })
        .then((res) => {
          // console.log("res -> ", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              this.galleryImagesLoader = false;

              Vue.$toast.default("Image Removed!");
              this.$router.go();
            } else {
              this.galleryImagesLoader = false;

              Vue.$toast.default(`Error Occurred: ${data.error}`);
            }
          } else {
            this.galleryImagesLoader = false;

            Vue.$toast.default(`Error Occurred!`);
          }
        })
        .catch((err) => {
          this.galleryImagesLoader = false;
          Vue.$toast.default(`Error Occurred: ${err}`);
        });
    },
    updateGalleryImage() {},
    updateGalleryImage2() {
      debugger;
      this.uploadGalleryImage.loader = true;

      let data = {
        uid: this.profile.myUid,
        link: this.uploadGalleryImage.image_link,
        index: this.uploadGalleryImage.oldImageIndex,
        actualIndex: this.uploadGalleryImage.actualIndex,
      };
      let self = this;
      // console.log("data -> ", data);
      axios
        .post(`${apiUrl}/user/update-any-gallery-image`, data)
        .then((res) => {
          // console.log("res -> ", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              this.uploadGalleryImage.loader = false;

              Vue.$toast.default("Gallery Image Updated!");

              self.$router.go();
            } else {
              self.uploadGalleryImage.loader = false;

              Vue.$toast.default(`Error Occurred: ${data.error}`);
            }
          } else {
            self.uploadGalleryImage.loader = false;

            Vue.$toast.default(`Error Occurred!`);
          }
        })
        .catch((err) => {
          self.uploadGalleryImage.loader = false;
          Vue.$toast.default(`Error Occurred: ${err}`);
        });
    },
    updateProfileImage() {
      if (this.uploadProfileImage.newImage) {
        let allprofileimages = this.profile.profile_images;
        let index = this.uploadProfileImage.oldImageIndex;
        let formData = new FormData();
        formData.append("file", this.uploadProfileImage.newImage);
        formData.append("oldindex", index);
        let self = this;
        // this.uploadProfileImage.loader = true;
        debugger;
        axios
          .post(`${apiUrl}/user/update-profile-image`, formData, { headers })
          .then(function (response) {
            debugger;
            const data = response.data;
            if (response.status === 200) {
              if (data.status == true) {
                Vue.$toast.default("Profile Image Updated!");
                self.$router.go();
              } else {
                // this.addNewImage.loader = false;
                Vue.$toast.default(`Error Occurred: ${data.message}`);
              }
            } else {
              // this.addNewImage.loader = false;
              Vue.$toast.default(`Error Occurred!`);
            }
            formData.append("file", this.addNewImage.newImage);
          })
          .catch(function (e) {
            this.addNewImage.loader = false;
          });
      } else {
        Vue.$toast.default("Please choose a image first!");
      }
    },
    updateProfileImage2() {
      debugger;
      this.uploadProfileImage.loader = true;

      let data = {
        uid: this.profile.myUid,
        link: this.uploadProfileImage.image_link,
        index: this.uploadProfileImage.oldImageIndex,
      };
      let self = this;
      // console.log("data -> ", data);

      axios
        .post(`${apiUrl}/user/update-single-profile-image`, data)
        .then((res) => {
          console.log("res -> ", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              self.uploadProfileImage.loader = false;

              Vue.$toast.default("Profile Image Updated!");

              self.$router.go();
            } else {
              self.uploadProfileImage.loader = false;

              Vue.$toast.default(`Error Occurred: ${data.error}`);
            }
          } else {
            self.uploadProfileImage.loader = false;

            Vue.$toast.default(`Error Occurred!`);
          }
        })
        .catch((err) => {
          self.uploadProfileImage.loader = false;
          Vue.$toast.default(`Error Occurred: ${err}`);
        });
    },
    updateAnyProfileImage() {
      debugger;
      if (this.uploadAnyProfileImage.newImage) {
        let allprofileimages = this.profile.profile_images;
        let index = this.uploadAnyProfileImage.oldImageIndex;
        // this.uploadAnyProfileImage.loader = true;
      } else {
        Vue.$toast.default("Please choose a image first!");
      }
    },
    updateAnyProfileImage2() {
      debugger;
      this.uploadAnyProfileImage.loader = true;

      let data = {
        uid: this.profile.myUid,
        link: this.uploadAnyProfileImage.image_link,
        index: this.uploadAnyProfileImage.oldImageIndex,
        actualIndex: this.uploadAnyProfileImage.actualIndex,
      };
      let self = this;
      // console.log("data -> ", data);

      axios
        .post(`${apiUrl}/user/update-any-profile-image`, data)
        .then((res) => {
          // console.log("res -> ", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              self.uploadAnyProfileImage.loader = false;

              Vue.$toast.default("Profile Image Updated!");

              self.$router.go();
            } else {
              this.uploadAnyProfileImage.loader = false;

              Vue.$toast.default(`Error Occurred: ${data.error}`);
            }
          } else {
            self.uploadAnyProfileImage.loader = false;

            Vue.$toast.default(`Error Occurred!`);
          }
        })
        .catch((err) => {
          this.uploadAnyProfileImage.loader = false;
          Vue.$toast.default(`Error Occurred: ${err}`);
        });
    },
    addNewImageFunction() {
      if (this.addNewImage.newImage) {
        let length;
        let dir;
        let prepend;
        if (this.addNewImage.type === "profile") {
          length = this.profile.profile_images.length;
          dir = "Images";
          prepend = "profileImage";
        } else {
          length = this.profile.gallery_images.length;
          dir = "Images";
          prepend = "galleryImage";
        }
        let formData = new FormData();
        formData.append("type", prepend);
        formData.append("file", this.addNewImage.newImage);
        this.addNewImage.loader = true;
        let self = this;
        axios
          .post(`${apiUrl}/user/add-new-profile-image`, formData, { headers })
          .then(function (response) {
            debugger;
            const data = response.data;
            if (response.status === 200) {
              if (data.status == true) {
                Vue.$toast.default("Profile Image Updated!");
                self.$router.go();
              } else {
                // this.addNewImage.loader = false;
                Vue.$toast.default(`Error Occurred: ${data.message}`);
              }
            } else {
              // this.addNewImage.loader = false;
              Vue.$toast.default(`Error Occurred!`);
            }
          })
          .catch(function (e) {
            this.addNewImage.loader = false;
          });
      } else {
        Vue.$toast.open({
          message: "Please choose a image first!",
        });
      }
    },
    addNewImageFunction2() {
      debugger;
      this.addNewImage.loader = true;
      let data = {
        uid: this.profile.myUid,
        link: this.addNewImage.image_link,
        length:
          this.addNewImage.type === "profile"
            ? this.profile.moreAboutMe.profileImagesPath.length
            : this.profile.moreAboutMe.galleryImagesPath.length,
        type: this.addNewImage.type,
      };
      // console.log("data -> ", data);
      let self = this;
      axios
        .post(`${apiUrl}/user/add-new-image`, data)
        .then((res) => {
          // console.log("res -> ", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              this.addNewImage.loader = false;

              this.closeModal("addNewImageModal");

              //Vue.$toast.default("Profile Image Updated!");

              self.$router.go();
            } else {
              this.addNewImage.loader = false;

              Vue.$toast.default(`Error Occurred: ${data.error}`);
            }
          } else {
            this.addNewImage.loader = false;

            Vue.$toast.default(`Error Occurred!`);
          }
        })
        .catch((err) => {
          self.addNewImage.loader = false;
          Vue.$toast.default(`Error Occurred: ${err}`);
        });
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
        // console.log("file -> ", file);
        this.uploadProfileImage.url = URL.createObjectURL(file);
      } else {
        this.uploadProfileImage.url = null;
      }
    },
    onFileChangeAnyProfile(e) {
      const file = e.target.files[0];
      if (file) {
        // console.log("file -> ", file);
        this.uploadAnyProfileImage.url = URL.createObjectURL(file);
      } else {
        this.uploadAnyProfileImage.url = null;
      }
    },
    onFileChangeAnyGallery(e) {
      const file = e.target.files[0];
      if (file) {
        // console.log("file -> ", file);
        let filetype = file.type;
        console.log("filetype -> ", filetype);
        this.uploadGalleryImage.filetype = filetype;
        this.uploadGalleryImage.url = URL.createObjectURL(file);
      } else {
        this.uploadGalleryImage.url = null;
      }
    },
    onFileChangeAddNewImage(e) {
      const file = e.target.files[0];
      if (file) {
        let filetype = file.type;
        this.addNewImage.filetype = filetype;
        this.addNewImage.url = URL.createObjectURL(file);
        // console.log('new url -> ',this.addNewImage.url)
      } else {
        this.addNewImage.url = null;
      }
    },
    openModal(id) {
      this.$bvModal.show(id);
    },
    closeModal(id) {
      this.$bvModal.hide(id);
    },
    selectTag(tag) {
      let user_id = this.profile.id;
      let Array = this.profile.passions;
      let index = Array.filter(function (elem, i) {
        return elem.options == tag;
      });
      debugger;
      if (index.length === 0) {
        if (this.countSelectedCount >= 6) {
          Toast.fire({
            icon: "warning",
            title: "You have selected maximum passions",
          });
        } else {
          this.profile.passions.push({ user_id: user_id, options: tag });
        }
      } else {
        let kgd = this.profile.passions;
        for (var i = 0; i <= kgd.length; i++) {
          if (kgd[i].options === tag) {
            this.profile.passions.splice(i, 1);
          }
        }
      }
    },
    selectKingdomGiftsTag(tag) {
      let user_id = this.profile.id;
      let Array = this.profile.kingdom_gifts;
      let index = Array.filter(function (elem, i) {
        return elem.options == tag;
      });
      if (index.length === 0) {
        if (this.countSelectedKingdomGiftsCount >= 10) {
          Toast.fire({
            icon: "warning",
            title: "You have selected maximum kingdom gifts",
          });
        } else {
          this.profile.kingdom_gifts.push({ user_id: user_id, options: tag });
        }
      } else {
        let kgd = this.profile.kingdom_gifts;
        for (var i = 0; i <= kgd.length; i++) {
          if (kgd[i].options === tag) {
            this.profile.kingdom_gifts.splice(i, 1);
          }
        }
      }
    },
    calculateAge(birthday) {
      let bday = new Date(birthday._seconds);
      let birthyear = bday.getFullYear();
      let now = new Date();
      let current = now.getFullYear();

      let difference = Math.abs(parseInt(birthyear) - parseInt(current));
      return difference;
    },
    EditProfile() {
      this.dataLoader = true;
      this.galleryImagesLoader = true;
      this.profileImagesLoader = true;
      this.profileImageSectionLoader = true;
      this.summaryAboutSectionLoader = true;

      let data = {
        ...this.profile,
      };

      console.log("data -> ", data);

      axios
        .post(`${apiUrl}/user/update-my-profile`, data, { headers })
        .then((res) => {
          console.log("Edit Profie Response -> ", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              // if (this.newZipcode) {
              //   let locationData = {
              //     uid: this.currentUser.uid,
              //     location: this.checkNewZipcode,
              //   };

              //   axios
              //     .post(`${apiUrl}/user/update-profile-location`, locationData)
              //     .then((res) => {
              //       console.log("Update Location Response -> ", res);
              //       const data = res.data;
              //       if (res.status === 200) {
              //         if (data.status) {
              //           Vue.$toast.default("Your location is updated !");
              //           this.dataLoader = false;
              //           this.galleryImagesLoader = false;
              //           this.profileImagesLoader = false;
              //           this.profileImageSectionLoader = false;
              //           this.summaryAboutSectionLoader = false;

              //           this.$emit("profile-updated");
              //           Vue.$toast.default("Your profile is updated !");
              //           this.$router.go();
              //         } else {
              //           Vue.$toast.open({
              //             message: `Error Occurred: ${data.error}`,
              //             type: "error",
              //           });
              //         }
              //       } else {
              //         Vue.$toast.open({
              //           message: `Error Occurred: ${data.error}`,
              //           type: "error",
              //         });
              //       }
              //     });
              // }

              this.dataLoader = false;
              this.galleryImagesLoader = false;
              this.profileImagesLoader = false;
              this.profileImageSectionLoader = false;
              this.summaryAboutSectionLoader = false;

              this.$emit("profile-updated");
              this.$router.go();

              Vue.$toast.default("Your profile is updated!");
            } else {
              this.dataLoader = false;
              this.galleryImagesLoader = false;
              this.profileImagesLoader = false;
              this.profileImageSectionLoader = false;
              this.summaryAboutSectionLoader = false;
              Vue.$toast.open({
                message: `Error Occurred: ${data.error}`,
                type: "error",
              });
              console.log("edit profile error -> ", data.error);
            }
          } else {
            this.dataLoader = false;
            this.galleryImagesLoader = false;
            this.profileImagesLoader = false;
            this.profileImageSectionLoader = false;
            this.summaryAboutSectionLoader = false;
            Vue.$toast.open({
              message: `Error Occurred!`,
              type: "error",
            });
            console.log("edit profile error -> ", data.error);
          }
        })
        .catch((err) => {
          this.dataLoader = false;
          this.galleryImagesLoader = false;
          this.profileImagesLoader = false;
          this.profileImageSectionLoader = false;
          this.summaryAboutSectionLoader = false;
          Vue.$toast.open({
            message: `Error Occurred: ${err}`,
            type: "error",
          });
          console.log("edit profile error -> ", err);
        });
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
    profileImagesDragEvent(event) {
      // console.log("event -> ", event);

      this.profileImagesLoader = true;
      let data = {
        newProfileImages: this.profile.profile_images,
      };

      axios
        .post(`${apiUrl}/user/reorder-profile-images`, data, { headers })
        .then((res) => {
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              this.profileImagesLoader = false;

              this.$emit("profile-images-reordered");

              Vue.$toast.open({
                message: "Profile Images Reordered!",
                type: "success",
              });
            } else {
              this.profileImagesLoader = false;
              Vue.$toast.open({
                message: `Error Occurred: ${data.error}`,
                type: "error",
              });
            }
          } else {
            this.profileImagesLoader = false;
            Vue.$toast.open({
              message: "Unknown Error Occurred!",
              type: "error",
            });
          }
        })
        .catch((err) => {
          this.profileImagesLoader = false;
          console.log(err);

          Vue.$toast.open({
            message: err,
            type: "error",
          });
        });
    },
    galleryImagesDragEvent(event) {
      // console.log("event -> ", event);

      this.galleryImagesLoader = true;

      let data = {
        newGalleryImages: this.profile.gallery_images,
      };

      // console.log("reorder data -> ", data);

      axios
        .post(`${apiUrl}/user/reorder-gallery-images`, data, { headers })
        .then((res) => {
          // console.log("res -> ", res);
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
          console.log(err);

          Vue.$toast.open({
            message: err,
            type: "error",
          });
        });
    },
  },
  computed: {
    ...mapGetters(["currentUser"]),
    showSummary() {
      if (this.showFullSummary) {
        // console.log("showFullSummary -> ", this.showFullSummary);
        return this.person.summary;
      } else {
        let newText = this.person.summary;
        let cutout = newText.substring(0, 500);
        // console.log("cutout -> ", cutout);
        return cutout;
      }
    },
    currentUser() {
      let user = getCurrentUser();
      return user;
    },
    countSelectedCount() {
      return this.profile.passions.length;
    },
    countSelectedKingdomGiftsCount() {
      return this.profile.kingdom_gifts.length;
    },
    getLastImageIndex() {
      let length = this.images.length;
      // console.log("length -> ", length);
      return length;
    },
    computeGalleryImageLength() {
      if (this.profile.moreAboutMe.galleryImagesPath) {
        if (this.profile.moreAboutMe.galleryImagesPath.length < 20) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    },
    computeProfileImageLength() {
      if (this.profile.moreAboutMe.profileImagesPath) {
        if (this.profile.moreAboutMe.profileImagesPath.length < 5) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    },
  },
  mounted() {
    // console.log("edit profile user -> ", this.user);
    this.profile = this.user;
  },
  watch: {
    user(newval) {
      // console.log("newval -> ", newval);
      if (newval) {
        this.dataLoader = false;
        this.galleryImagesLoader = false;
        this.profileImagesLoader = false;
        this.profileImageSectionLoader = false;
        this.summaryAboutSectionLoader = false;
      }
      debugger;
    },
    "profile.moreAboutMe.profileImagesPath"(newval) {
      if (newval) {
        // console.log("profile images changes -> ", newval);
      }
    },
    "uploadProfileImage.image_link"(newval) {
      if (newval) {
        debugger;
        this.updateProfileImage2();
      }
    },
    "uploadAnyProfileImage.image_link"(newval) {
      if (newval) {
        this.updateAnyProfileImage2();
      }
    },
    "uploadGalleryImage.image_link"(newval) {
      if (newval) {
        this.updateGalleryImage2();
      }
    },
    "addNewImage.image_link"(newval) {
      if (newval) {
        this.addNewImageFunction2();
      }
    },
    newZipcode(val) {
      if (val.length === 5) {
        const check = cities.zip_lookup(this.newZipcode);
        this.checkNewZipcode = check;
        console.log("check -> ", check);

        this.profile.city = check.city;
        // this.profile.city = check.city;
        this.profile.zipcode = check.zipcode;
        this.profile.location = check;

        console.log("profile -> ", this.profile.basicInfo);
      }
    },
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
  }

  .profile-edit {
    .profile-card-inner {
      width: 100%;
      display: flex;
      flex-direction: column;
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

  .isrealite-bubbles-section {
    display: flex;
    flex-direction: column;
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

  .isrealite-bubbles-section {
    display: flex;
    flex-direction: row;
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

.add-image-icon svg {
  background-color: #e2e8f0;
  width: 35px;
  height: 35px;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.5s ease;
}

.add-image-icon svg:hover {
  cursor: pointer;
  transform: scale(104%);
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

.info-bubble:hover {
  transform: scale(115%);
  cursor: pointer;
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

.edit-icon-field {
  // background-color: #93652b;
  border-radius: 50%;
  // width: 40px;
  // height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease 0.8s;
}

.edit-icon-pressed {
  // background-color: #dc2626;
  // border-radius: 50%;
  // width: 40px;
  // height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease 0.8s;
}

.edit-icon-pressed svg {
  stroke: #dc2626;
  fill: #dc2626;
}

.edit-icon-pressed:hover svg {
  transform: scale(104%);
  cursor: pointer;
}

.edit-icon-field:hover svg {
  transform: scale(104%);
  cursor: pointer;
}

.edit-icon-field svg {
  stroke: #93652b;
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

#messageModal .main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 300px;
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

.icons-container .icon-item .icon svg {
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
  transition: all ease 0.5s;
}

.custom-btn-1:hover {
  transform: scale(110%);
  cursor: pointer;
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
