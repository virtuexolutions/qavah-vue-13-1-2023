<template>
  <div>
    <div class="profile-edit">
      <div class="profile-card-inner pt-3">
        <div class="profileImageUpload">
          <div class="edit-icon" @click="editProfileImage">
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
          <b-img height="200" rounded="lg" :src="person.profileImage"></b-img>
          <profileImageUploadModal :profileimage="person.profileImage" />
        </div>

        <div class="content w-100">
          <!-- Name -->
          <div class="w-100 d-flex justify-content-between align-items-center">
            <b-form-group class="m-2" label="Name">
              <b-form-input
                class="custom-field"
                v-if="editName"
                placeholder="Profile Name"
                v-model="profile.profileName"
              ></b-form-input>

              <h2 v-else>{{ profile.profileName }}</h2>
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
          <div class="w-100 d-flex justify-content-between align-items-center">
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
          <div class="w-100 d-flex justify-content-between align-items-center">
            <b-form-group class="m-2" label="Location">
              <b-form-input
                class="custom-field"
                v-if="editLocation"
                type="text"
                v-model="profile.location"
              ></b-form-input>
              <h2 v-else>{{ profile.location }}</h2>
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
        </div>
      </div>

      <!-- Summary -->
      <div class="summary mt-4">
        <h2 class="mb-4 d-flex justify-content-between align-items-center">
          Summary
          <div
            class="edit-icon-field"
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
            class="edit-icon-pressed"
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

        <b-form-textarea
          class="custom-field-textarea"
          v-model="profile.summary"
          v-if="editSummary"
          rows="8"
          no-resize
        ></b-form-textarea>

        <p v-else>
          {{ profile.summary }}
        </p>
      </div>

      <div class="about mt-4">
        <h2 class="mb-4">About Me</h2>

        <b-row class="icons-container">
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
                v-if="editMaritalStatus"
                v-model="profile.maritalStatus"
                :options="maritalStatusOptions"
              >
              </b-form-select>
              <p v-if="!editMaritalStatus">{{ profile.maritalStatus }}</p>
              <div
                class="edit-icon-field"
                v-if="!editMaritalStatus"
                @click="editMaritalStatus = !editMaritalStatus"
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
                v-if="editMaritalStatus"
                @click="editMaritalStatus = !editMaritalStatus"
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
          </b-col>
          <b-col lg="6" md="6" sm="12">
            <div class="icon-item">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="10"
                  viewBox="0 0 32 32"
                >
                  <title />
                  <g data-name="Layer 61" id="Layer_61">
                    <path
                      class="cls-1"
                      d="M10,20a1,1,0,0,1-1-.8L6.66,7.41A3,3,0,0,0,3.72,5H2A1,1,0,0,1,2,3H3.72a5,5,0,0,1,4.9,4L11,18.8A1,1,0,0,1,10.2,20Z"
                    />
                    <path
                      class="cls-1"
                      d="M11,27H9.14a4.14,4.14,0,0,1-.38-8.26l18.41-1.67L28.78,9H8A1,1,0,0,1,8,7H30a1,1,0,0,1,.77.37A1,1,0,0,1,31,8.2l-2,10a1,1,0,0,1-.89.8L8.94,20.74A2.13,2.13,0,0,0,9.14,25H11a1,1,0,0,1,0,2Z"
                    />
                    <path
                      class="cls-1"
                      d="M26,30a4,4,0,1,1,4-4A4,4,0,0,1,26,30Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,26,24Z"
                    />
                    <path
                      class="cls-1"
                      d="M14,30a4,4,0,1,1,4-4A4,4,0,0,1,14,30Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,14,24Z"
                    />
                    <path
                      class="cls-1"
                      d="M23,27H17a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z"
                    />
                  </g>
                </svg>
              </div>
              <b-form-select
                class="custom-field-test"
                v-if="editDoYouWantMoreChildren"
                v-model="profile.doYouWantMoreChildren"
                :options="doYouWantMoreChildrenOptions"
              >
              </b-form-select>
              <p v-if="!editDoYouWantMoreChildren">
                {{ profile.doYouWantMoreChildren }}
              </p>
              <div
                class="edit-icon-field"
                v-if="!editDoYouWantMoreChildren"
                @click="editDoYouWantMoreChildren = !editDoYouWantMoreChildren"
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
                v-if="editDoYouWantMoreChildren"
                @click="editDoYouWantMoreChildren = !editDoYouWantMoreChildren"
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
          </b-col>
          <b-col lg="6" md="6" sm="12">
            <div class="icon-item">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  enable-background="new 0 0 32 32"
                  height="10"
                  version="1.1"
                  viewBox="0 0 32 32"
                  xml:space="preserve"
                >
                  <g id="Layer_1">
                    <path
                      clip-rule="evenodd"
                      d="M31.25,6.438l-5-4C25.895,2.154,25.453,2,25,2H7   C6.546,2,6.105,2.154,5.75,2.438l-5,4C0.096,6.962-0.162,7.838,0.103,8.633l2,6c0.197,0.591,0.659,1.057,1.249,1.259   C3.562,15.964,3.782,16,4,16c0.348,0,0.693-0.091,1-0.268V28c0,1.104,0.896,2,2,2h18c1.104,0,2-0.896,2-2V15.732   C27.307,15.909,27.652,16,28,16c0.219,0,0.438-0.036,0.648-0.108c0.59-0.202,1.051-0.668,1.248-1.259l2-6   C32.162,7.838,31.904,6.962,31.25,6.438z M19.754,4C19.201,5.161,17.736,6,16,6c-1.736,0-3.202-0.839-3.754-2H19.754z M28,14l-3-2   v16H7V12l-3,2L2,8l5-4h4.177C11.734,5.722,13.673,7,16,7c2.326,0,4.266-1.278,4.822-3H25l5,4L28,14z"
                      fill="#333333"
                      fill-rule="evenodd"
                      id="t-shirt_1_"
                    />
                  </g>
                  <g id="Layer_2" />
                </svg>
              </div>
              <b-form-select
                class="custom-field-test"
                v-if="editBodyType"
                v-model="profile.bodyType"
                :options="bodyTypeOptions"
              >
              </b-form-select>
              <p v-if="!editBodyType">
                {{ profile.bodyType }}
              </p>
              <div
                class="edit-icon-field"
                v-if="!editBodyType"
                @click="editBodyType = !editBodyType"
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
                v-if="editBodyType"
                @click="editBodyType = !editBodyType"
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
          </b-col>
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
                v-if="editDoYouHaveChildren"
                v-model="profile.doYouHaveChildren"
                :options="doYouHaveChildrenOptions"
              >
              </b-form-select>
              <p v-if="!editDoYouHaveChildren">
                {{ profile.doYouHaveChildren }}
              </p>
              <div
                class="edit-icon-field"
                v-if="!editDoYouHaveChildren"
                @click="editDoYouHaveChildren = !editDoYouHaveChildren"
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
                v-if="editDoYouHaveChildren"
                @click="editDoYouHaveChildren = !editDoYouHaveChildren"
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
          </b-col>
          <b-col lg="6" md="6" sm="12">
            <div class="icon-item">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="10"
                  viewBox="0 0 24 24"
                >
                  <title />
                  <g data-name="Layer 2" id="Layer_2">
                    <polygon
                      points="0.54 9 5 10.98 7 11.87 12 14.09 17 11.87 19 10.98 20 10.54 20 16 22 16 22 9.65 23.46 9 12 3.91 0.54 9"
                    />
                    <path
                      d="M18.45,18.89l.55-.27V13.17l-7,3.11L5,13.17v5.45l.55.27a14.45,14.45,0,0,0,12.9,0Z"
                    />
                  </g>
                </svg>
              </div>
              <b-form-select
                class="custom-field-test"
                v-if="editStudyHabits"
                v-model="profile.studyHabits"
                :options="studyHabitsOptions"
              >
              </b-form-select>
              <p v-if="!editStudyHabits">
                {{ profile.studyHabits }}
              </p>
              <div
                class="edit-icon-field"
                v-if="!editStudyHabits"
                @click="editStudyHabits = !editStudyHabits"
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
                v-if="editStudyHabits"
                @click="editStudyHabits = !editStudyHabits"
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
          </b-col>
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
                v-if="editHeight"
                max="7"
                min="0"
                placeholder="Ft"
                v-model="profile.height.feet"
              ></b-form-input>

              <b-form-input
                class="custom-field"
                type="number"
                v-if="editHeight"
                max="14"
                min="0"
                placeholder="Inches"
                v-model="profile.height.inches"
              ></b-form-input>
              <p v-if="!editHeight">
                {{ profile.height.feet }}
              </p>
              <p v-if="!editHeight">
                {{ profile.height.inches }}
              </p>
              <div
                class="edit-icon-field"
                v-if="!editHeight"
                @click="editHeight = !editHeight"
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
                v-if="editHeight"
                @click="editHeight = !editHeight"
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
          </b-col>
        </b-row>
      </div>

      <!-- Profile Images -->
      <div>
        <div class="profile-images mt-4">
          <h2 class="mb-4">Profile Images</h2>

          <!-- <photo-collage-wrapper 
                gapSize="6px"
                @itemClick="itemClickHandler"
                @click="clickedOnGallery"
                v-bind="collage"
                > 
              </photo-collage-wrapper> -->

          <b-overlay :show="profileImageRemoveLoader">
            <draggable
              class="images-container row"
              v-model="images"
              draggable=".image-wrapper"
            >
              <!-- <div class="images-container"> -->
              <div class="image-wrapper" v-for="(image, i) in images" :key="i">
                <div class="edit-icon" @click="editImage(i, image)">
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
                <div class="remove-icon" @click="removeImage(i, image)">
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
                  :src="image"
                  @click="index = i"
                ></b-img>
                <!-- <div class="last-image rounded-lg">
                      <b-img class="profile-image" :src="images[this.getLastImageIndex]"></b-img>
                    </div> -->
              </div>
              <!-- </div> -->
            </draggable>
          </b-overlay>
          <vue-gallery-slideshow
            :images="images"
            :index="index"
            @close="index = null"
          >
          </vue-gallery-slideshow>

          <!-- <b-img
                height="100"
                rounded="lg"
                class="m-1"
                v-for="(image, index) in person.galleryImages"
                :key="index"
                :src="image"
              ></b-img> -->
        </div>
      </div>

      <!-- Gallery Images -->
      <div class="mb-4">
        <div class="profile-images mt-4">
          <h2 class="mb-4">Gallery</h2>

          <draggable
            class="images-container row"
            v-model="galleryImagesDummy"
            draggable=".image-wrapper"
          >
            <!-- <div class="images-container"> -->
            <div
              class="image-wrapper"
              v-for="(image, i) in galleryImagesDummy"
              :key="i"
            >
              <div class="edit-icon" @click="editGalleryImage(i, image)">
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
              <div class="remove-icon" @click="removeGalleryImage(i, image)">
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
                :src="image"
                @click="galleryImagesIndex = i"
              ></b-img>
              <!-- <div class="last-image rounded-lg">
                      <b-img class="profile-image" :src="images[this.getLastImageIndex]"></b-img>
                    </div> -->
            </div>
            <!-- </div> -->
          </draggable>
          <vue-gallery-slideshow
            :images="galleryImagesDummy"
            :index="galleryImagesIndex"
            @close="galleryImagesIndex = null"
          >
          </vue-gallery-slideshow>

          <!-- <photo-collage-wrapper 
                gapSize="6px"
                @itemClick="itemClickHandler"
                v-bind="collage"
                > 
              </photo-collage-wrapper> -->
          <!-- <b-img
                height="100"
                rounded="lg"
                class="m-1"
                v-for="(image, index) in person.galleryImages"
                :key="index"
                :src="image"
              ></b-img> -->
        </div>
      </div>

      <h2>More About Me</h2>

      <b-row>
        <b-col lg="4" md="6" sm="12">
          <!-- Marital Status & -->
          <!-- <div>
            <b-form-group
              class="mb-2"
              label="Marital Status"
              label-class="field-class"
            >
              <b-form-select
                class="custom-field-test py-2 pr-4"
                style="width: 144px !important"
                v-model="profile.maritalStatus"
                :options="step2.maritalStatusOptions"
              ></b-form-select>

              <p v-if="!editMaritalStatus">
                {{ profile.maritalStatus }}
              </p>

              <template slot="label">
                <div class="d-flex">
                  <p>Marital Status</p>
                  <div
                    class="edit-icon-field"
                    v-if="!editMaritalStatus"
                    @click="editMaritalStatus = !editMaritalStatus"
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
                    v-if="editMaritalStatus"
                    @click="editMaritalStatus = !editMaritalStatus"
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
              </template>
            </b-form-group>
          </div> -->

          <!-- Living Situation -->
          <div>
            <b-form-group
              class="mb-2"
              label="Living Situation"
              label-class="field-label"
            >
              <b-form-select
                class="custom-field-test py-2 pr-4"
                style="width: 126px !important"
                v-if="editLivingSituation"
                v-model="profile.livingSituation"
                :options="step2.livingSituationOptions"
              ></b-form-select>

              <b-badge
                class="info-bubble"
                pill
                variant="outline-primary"
                v-if="!editLivingSituation"
                >{{ profile.livingSituation }}</b-badge
              >

              <!-- <p class="info-bubble" v-if="!editLivingSituation">
                {{ profile.livingSituation }}
              </p> -->

              <template slot="label">
                <div class="d-flex">
                  <p>Living Situation</p>
                  <div
                    class="edit-icon-field"
                    v-if="!editLivingSituation"
                    @click="editLivingSituation = !editLivingSituation"
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
                    v-if="editLivingSituation"
                    @click="editLivingSituation = !editLivingSituation"
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
              </template>
            </b-form-group>
          </div>

          <!-- Do You Have Children -->
          <div>
            <b-form-group
              class="mb-2"
              label="Do You Have Children"
              label-class="field-label"
            >
              <b-form-select
                class="custom-field-test py-2 pr-4"
                v-if="editDoYouHaveChildren"
                style="width: 216px !important"
                v-model="profile.doYouHaveChildren"
                :options="step2.doYouHaveChildrenOptions"
              ></b-form-select>

              <b-badge
                class="info-bubble"
                pill
                variant="outline-primary"
                v-if="!editDoYouHaveChildren"
                >{{ profile.doYouHaveChildren }}</b-badge
              >

              <!-- <p v-if="!editDoYouHaveChildren">
                {{ profile.doYouHaveChildren }}
              </p> -->

              <template slot="label">
                <div class="d-flex">
                  <p>Do You Have Children</p>
                  <div
                    class="edit-icon-field"
                    v-if="!editDoYouHaveChildren"
                    @click="editDoYouHaveChildren = !editDoYouHaveChildren"
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
                    v-if="editDoYouHaveChildren"
                    @click="editDoYouHaveChildren = !editDoYouHaveChildren"
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
              </template>
            </b-form-group>
          </div>

          <!-- Do You Want More Children -->
          <div>
            <b-form-group
              class="mb-2"
              label="Do You Want More Children"
              label-class="field-label"
            >
              <b-form-select
                class="custom-field-test py-2 pr-4"
                style="width: 84px !important"
                v-if="editDoYouWantMoreChildren"
                v-model="profile.doYouWantMoreChildren"
                :options="step2.doYouWantMoreChildrenOptions"
              ></b-form-select>

              <b-badge
                class="info-bubble"
                pill
                variant="outline-primary"
                v-if="!editDoYouWantMoreChildren"
                >{{ profile.doYouWantMoreChildren }}</b-badge
              >
              <!-- 
              <p v-if="!editDoYouWantMoreChildren">
                {{ profile.doYouWantMoreChildren }}
              </p> -->

              <template slot="label">
                <div class="d-flex">
                  <p>Do You Want More Children</p>
                  <div
                    class="edit-icon-field"
                    v-if="!editDoYouWantMoreChildren"
                    @click="
                      editDoYouWantMoreChildren = !editDoYouWantMoreChildren
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
                  <div
                    class="edit-icon-pressed"
                    v-if="editDoYouWantMoreChildren"
                    @click="
                      editDoYouWantMoreChildren = !editDoYouWantMoreChildren
                    "
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
              </template>
            </b-form-group>
          </div>

          <!-- Relationship you are seeking* -->
          <div>
            <b-form-group
              label="Relationship you're seeking*"
              label-class="field-class"
            >
              <b-form-select
                class="custom-field-test py-2"
                style="width: 238px !important"
                v-if="editRelationshipIAmSeeking"
                v-model="profile.relationshipIAmSeeking"
                :options="step2.relationshipIAmSeekingOptions"
              ></b-form-select>

              <b-badge
                class="info-bubble"
                pill
                variant="outline-primary"
                v-if="!editRelationshipIAmSeeking"
                >{{ profile.relationshipIAmSeeking }}</b-badge
              >
              <!-- <p v-if="!editRelationshipIAmSeeking">
                {{ profile.relationshipIAmSeeking }}
              </p> -->
              <template slot="label">
                <div class="d-flex">
                  <p>Relationship you're seeking*</p>
                  <div
                    class="edit-icon-field"
                    v-if="!editRelationshipIAmSeeking"
                    @click="
                      editRelationshipIAmSeeking = !editRelationshipIAmSeeking
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
                  <div
                    class="edit-icon-pressed"
                    v-if="editRelationshipIAmSeeking"
                    @click="
                      editRelationshipIAmSeeking = !editRelationshipIAmSeeking
                    "
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
              </template>
            </b-form-group>
          </div>
        </b-col>
        <b-col lg="4" md="6" sm="12">
          <!--Body Type  -->
          <div>
            <b-form-group
              class="mb-4"
              label="Body Type"
              label-class="field-class"
            >
              <b-form-select
                class="custom-field-test py-2 pr-4"
                style="width: 128px !important"
                v-if="editBodyType"
                v-model="profile.bodyType"
                :options="step2.bodyTypeOptions"
              >
              </b-form-select>

              <b-badge
                class="info-bubble"
                pill
                variant="outline-primary"
                v-if="!editBodyType"
                >{{ profile.bodyType }}</b-badge
              >

              <!-- <p v-if="editBodyType">{{ profile.bodyType }}</p> -->

              <template slot="label">
                <div class="d-flex">
                  <p>Body Type</p>
                  <div
                    class="edit-icon-field"
                    v-if="!editBodyType"
                    @click="editBodyType = !editBodyType"
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
                    v-if="editBodyType"
                    @click="editBodyType = !editBodyType"
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
              </template>
            </b-form-group>
          </div>

          <!-- How Often Do You Exercise -->
          <div class="">
            <b-form-group
              label="How Often Do You Exercise*"
              label-class="field-class"
            >
              <b-form-select
                class="custom-field-test py-2"
                style="width: 217px !important"
                v-if="editHowOftenDoYouExercise"
                v-model="profile.howOftenDoYouExercise"
                :options="step2.howOftenDoYouExerciseOptions"
              ></b-form-select>

              <b-badge
                class="info-bubble"
                pill
                variant="outline-primary"
                v-if="!editHowOftenDoYouExercise"
                >{{ profile.howOftenDoYouExercise }}</b-badge
              >

              <!-- <p v-if="!editHowOftenDoYouExercise">
                {{ profile.howOftenDoYouExercise }}
              </p> -->

              <template slot="label">
                <div class="d-flex">
                  <p>How Often Do You Exercise*</p>
                  <div
                    class="edit-icon-field"
                    v-if="!editHowOftenDoYouExercise"
                    @click="
                      editHowOftenDoYouExercise = !editHowOftenDoYouExercise
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
                  <div
                    class="edit-icon-pressed"
                    v-if="editHowOftenDoYouExercise"
                    @click="
                      editHowOftenDoYouExercise = !editHowOftenDoYouExercise
                    "
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
              </template>
            </b-form-group>
          </div>

          <!--Have Pets  -->
          <div class="">
            <b-form-group label="Have Pets" label-class="field-class">
              <b-form-select
                class="custom-field-test py-2"
                style="width: 94px !important"
                v-if="editHavePets"
                v-model="profile.havePets"
                :options="step2.havePetsOptions"
              ></b-form-select>

              <b-badge
                class="info-bubble"
                pill
                variant="outline-primary"
                v-if="!editHavePets"
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
                  <div
                    class="edit-icon-field"
                    v-if="!editHavePets"
                    @click="editHavePets = !editHavePets"
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
                    v-if="editHavePets"
                    @click="editHavePets = !editHavePets"
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
              </template>
            </b-form-group>
          </div>
        </b-col>
        <b-col lg="4" md="6" sm="12">
          <!-- Do you drink?  -->
          <div class="">
            <b-form-group label="Do you drink?*" label-class="field-class">
              <b-form-select
                class="custom-field-test py-2"
                style="width: 148px !important"
                v-if="editDoYouDrink"
                v-model="profile.doYouDrink"
                :options="step2.doYouDrinkOptions"
              ></b-form-select>

              <b-badge
                class="info-bubble"
                pill
                variant="outline-primary"
                v-if="!editDoYouDrink"
                >{{ profile.doYouDrink }}</b-badge
              >

              <!-- <p v-if="!editDoYouDrink">{{ profile.doYouDrink }}</p> -->

              <template slot="label">
                <div class="d-flex">
                  <p>Do you drink?*</p>
                  <div
                    class="edit-icon-field"
                    v-if="!editDoYouDrink"
                    @click="editDoYouDrink = !editDoYouDrink"
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
                    v-if="editDoYouDrink"
                    @click="editDoYouDrink = !editDoYouDrink"
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
              </template>
            </b-form-group>
          </div>

          <!-- Do You Smoke -->
          <div class="">
            <b-form-group label="Do you smoke?*" label-class="field-class">
              <b-form-select
                class="custom-field-test py-2"
                style="width: 142px !important"
                v-if="editDoYouSmoke"
                v-model="profile.doYouSmoke"
                :options="step2.doYouSmokeOptions"
              ></b-form-select>

              <b-badge
                class="info-bubble"
                pill
                variant="outline-primary"
                v-if="!editDoYouSmoke"
                >{{ profile.doYouSmoke }}</b-badge
              >

              <!-- <p v-if="!editDoYouSmoke">{{ profile.doYouSmoke }}</p> -->

              <template slot="label">
                <div class="d-flex">
                  <p>Do you smoke?*</p>
                  <div
                    class="edit-icon-field"
                    v-if="!editDoYouSmoke"
                    @click="editDoYouSmoke = !editDoYouSmoke"
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
                    v-if="editDoYouSmoke"
                    @click="editDoYouSmoke = !editDoYouSmoke"
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
              </template>
            </b-form-group>
          </div>

          <!-- Employment Status -->

          <div class="">
            <b-form-group label="Employment Status" label-class="field-class">
              <!-- :options="employmentStatusOptions" -->
              <!-- <b-form-input
                          class="custom-field"
                          v-model="form.employmentStatus"
                          placeholder="e.g Job Title"
                        ></b-form-input> -->

              <b-form-select
                class="custom-field-test py-2"
                style="width: 122px !important"
                v-if="editEmploymentStatus"
                v-model="profile.employmentStatus"
                :options="step2.employmentStatusOptions"
              ></b-form-select>

              <b-badge
                class="info-bubble"
                pill
                variant="outline-primary"
                v-if="!editEmploymentStatus"
                >{{ profile.employmentStatus }}</b-badge
              >

              <p v-if="!editEmploymentStatus">
                {{ profile.employmentStatus }}
              </p>

              <template slot="label">
                <div class="d-flex">
                  <p>Employment Status</p>
                  <div
                    class="edit-icon-field"
                    v-if="!editEmploymentStatus"
                    @click="editEmploymentStatus = !editEmploymentStatus"
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
                    v-if="editEmploymentStatus"
                    @click="editEmploymentStatus = !editEmploymentStatus"
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
              </template>
            </b-form-group>
          </div>

          <!-- Willing to relocate  -->

          <div class="">
            <b-form-group
              label="Willing to relocate*"
              label-class="field-class"
            >
              <b-form-select
                class="custom-field-test py-2"
                style="width: 212px"
                v-if="editWillingToRelocate"
                v-model="profile.willingToRelocate"
                :options="step2.willingToRelocateOptions"
              ></b-form-select>

              <b-badge
                class="info-bubble"
                pill
                variant="outline-primary"
                v-if="!editWillingToRelocate"
                >{{ profile.willingToRelocate }}</b-badge
              >

              <!-- <p v-if="!editWillingToRelocate">
                {{ profile.willingToRelocate }}
              </p> -->

              <template slot="label">
                <div class="d-flex">
                  <p>Willing to relocate*</p>
                  <div
                    class="edit-icon-field"
                    v-if="!editWillingToRelocate"
                    @click="editWillingToRelocate = !editWillingToRelocate"
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
                    v-if="editWillingToRelocate"
                    @click="editWillingToRelocate = !editWillingToRelocate"
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
              </template>
            </b-form-group>
          </div>
        </b-col>
      </b-row>
      <!-- <div class="fields-container">

            </div> -->

      <!-- Isrealite Filters -->
      <b-col class="mb-4" xxs="12" md="12" lg="12">
        <h2 class="text-center">Isrealite Filters</h2>
      </b-col>

      <!-- Lifestyle -->
      <b-col class="mb-4" xxs="12" md="12" lg="12">
        <h3 class="text-center">Lifestyle</h3>
      </b-col>

      <b-row>
        <b-col lg="6" md="12" sm="12">
          <div class="">
            <!-- I believe I am  -->
            <b-form-group label="I believe I am*">
              <b-form-select
                class="custom-field-test py-2"
                style="width: 342px !important"
                v-if="editIBelieveIAM"
                v-model="profile.iBelieveIAM"
                :options="step3.iBelieveIAMOptions"
              ></b-form-select>

              <b-badge
                class="info-bubble"
                pill
                variant="outline-primary"
                v-if="!editIBelieveIAM"
                >{{ profile.iBelieveIAM }}</b-badge
              >

              <!-- <p v-if="!editIBelieveIAM">{{ profile.iBelieveIAM }}</p> -->

              <template slot="label">
                <div class="d-flex">
                  <p>I believe I am*</p>
                  <div
                    class="edit-icon-field"
                    v-if="!editIBelieveIAM"
                    @click="editIBelieveIAM = !editIBelieveIAM"
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
                    v-if="editIBelieveIAM"
                    @click="editIBelieveIAM = !editIBelieveIAM"
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
              </template>
            </b-form-group>
          </div>

          <div class="">
            <!-- Spiritual Values   -->
            <b-form-group label="Spiritual Values*">
              <b-form-select
                class="custom-field-test py-2"
                style="width: 115px !important"
                v-if="editSpiritualValue"
                v-model="profile.spiritualValue"
                :options="step3.spiritualValueOptions"
              ></b-form-select>

              <b-badge
                class="info-bubble"
                pill
                variant="outline-primary"
                v-if="!editSpiritualValue"
                >{{ profile.spiritualValue }}</b-badge
              >

              <!-- <p v-if="!editSpiritualValue">{{ profile.spiritualValue }}</p> -->

              <template slot="label">
                <div class="d-flex">
                  <p>Spiritual Values*</p>
                  <div
                    class="edit-icon-field"
                    v-if="!editSpiritualValue"
                    @click="editSpiritualValue = !editSpiritualValue"
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
                    v-if="editSpiritualValue"
                    @click="editSpiritualValue = !editSpiritualValue"
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
              </template>
            </b-form-group>
          </div>

          <div class="">
            <!-- Marital Belief System  -->
            <b-form-group label="Marital Belief System*">
              <b-form-select
                class="custom-field-test py-2"
                style="width: 98px !important"
                v-if="editMaritalBeliefSystem"
                v-model="profile.maritalBeliefSystem"
                :options="step3.maritalBeliefSystemOptions"
              ></b-form-select>

              <b-badge
                class="info-bubble"
                pill
                variant="outline-primary"
                v-if="!editMaritalBeliefSystem"
                >{{ profile.maritalBeliefSystem }}</b-badge
              >

              <!-- <p v-if="!editMaritalBeliefSystem">
                {{ profile.maritalBeliefSystem }}
              </p> -->

              <template slot="label">
                <div class="d-flex">
                  <p>Marital Belief System*</p>
                  <div
                    class="edit-icon-field"
                    v-if="!editMaritalBeliefSystem"
                    @click="editMaritalBeliefSystem = !editMaritalBeliefSystem"
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
                    v-if="editMaritalBeliefSystem"
                    @click="editMaritalBeliefSystem = !editMaritalBeliefSystem"
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
              </template>
            </b-form-group>
          </div>
        </b-col>
        <b-col lg="6" md="12" sm="12">
          <div class="">
            <!-- Any Affiliations -->
            <b-form-group label="Any Affiliations">
              <b-form-select
                class="custom-field-test py-2"
                style="width: 223px !important"
                v-if="editAnyAffiliation"
                v-model="profile.anyAffiliation"
                :options="step3.anyAffiliationOptions"
              ></b-form-select>

              <b-badge
                class="info-bubble"
                pill
                variant="outline-primary"
                v-if="!editAnyAffiliation"
                >{{ profile.anyAffiliation }}</b-badge
              >

              <!-- <p v-if="!editAnyAffiliation">
                {{ profile.anyAffiliation }}
              </p> -->

              <template slot="label">
                <div class="d-flex">
                  <p>Any Affiliations</p>
                  <div
                    class="edit-icon-field"
                    v-if="!editAnyAffiliation"
                    @click="editAnyAffiliation = !editAnyAffiliation"
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
                    v-if="editAnyAffiliation"
                    @click="editAnyAffiliation = !editAnyAffiliation"
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
              </template>
            </b-form-group>
          </div>

          <!-- Camp Member Dropdown -->
          <div v-if="step3.campMemberSelected">
            <b-form-group label="Camp Member Options">
              <b-form-select
                class="custom-field-test py-2"
                style="width: 118px !important"
                v-if="editCampMember"
                v-model="profile.campMember"
                :options="step3.campMemberOptions"
              ></b-form-select>

              <b-badge
                class="info-bubble"
                pill
                variant="outline-primary"
                v-if="!editCampMember"
                >{{ profile.campMember }}</b-badge
              >

              <template slot="label">
                <div class="d-flex">
                  <p>Camp Member Options</p>
                  <div
                    class="edit-icon-field"
                    v-if="!editCampMember"
                    @click="editCampMember = !editCampMember"
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
                    v-if="editCampMember"
                    @click="editCampMember = !editCampMember"
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
              </template>
            </b-form-group>
          </div>

          <div class="">
            <!-- Study Habits -->
            <b-form-group label="Study Habits">
              <b-form-select
                class="custom-field-test py-2"
                style="width: 312px !important"
                v-if="editStudyHabits"
                v-model="profile.studyHabits"
                :options="step3.studyHabitsOptions"
              ></b-form-select>

              <b-badge
                class="info-bubble"
                pill
                variant="outline-primary"
                v-if="!editStudyHabits"
                >{{ profile.studyHabits }}</b-badge
              >

              <template slot="label">
                <div class="d-flex">
                  <p>Study Habits</p>
                  <div
                    class="edit-icon-field"
                    v-if="!editStudyHabits"
                    @click="editStudyHabits = !editStudyHabits"
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
                    v-if="editStudyHabits"
                    @click="editStudyHabits = !editStudyHabits"
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
              </template>
            </b-form-group>
          </div>

          <div class="">
            <!-- Study Bible -->
            <b-form-group label="Study Bible">
              <b-form-select
                class="custom-field-test py-2"
                style="width: 188px !important"
                v-if="editStudyBible"
                v-model="profile.studyBible"
                :options="step3.studyBibleOptions"
              ></b-form-select>

              <b-badge
                class="info-bubble"
                pill
                variant="outline-primary"
                v-if="!editStudyBible"
                >{{ person.studyBible }}</b-badge
              >

              <template slot="label">
                <div class="d-flex">
                  <p>Study Bible</p>
                  <div
                    class="edit-icon-field"
                    v-if="!editStudyBible"
                    @click="editStudyBible = !editStudyBible"
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
                    v-if="editStudyBible"
                    @click="editStudyBible = !editStudyBible"
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
              </template>
            </b-form-group>
          </div>

          <div class="">
            <b-form-group label="How many years have you been in the truth?*">
              <b-form-select
                class="custom-field-test py-2"
                style="width: 126px !important"
                v-if="editYearsInTruth"
                v-model="profile.yearsInTruth"
                :options="step3.yearsInTruthOptions"
              ></b-form-select>

              <b-badge
                class="info-bubble"
                pill
                variant="outline-primary"
                v-if="!editYearsInTruth"
                >{{ profile.yearsInTruth }}</b-badge
              >

              <template slot="label">
                <div class="d-flex">
                  <p>How many years have you been in the truth?*</p>
                  <div
                    class="edit-icon-field"
                    v-if="!editYearsInTruth"
                    @click="editYearsInTruth = !editYearsInTruth"
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
                    v-if="editYearsInTruth"
                    @click="editYearsInTruth = !editYearsInTruth"
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
              </template>
            </b-form-group>
          </div>

          <div class="">
            <!--Spiritual background -->
            <b-form-group label="Spiritual background">
              <b-form-select
                class="custom-field-test py-2"
                style="width: 210px !important"
                v-if="editSpiritualBackground"
                v-model="profile.spiritualBackground"
                :options="step3.spiritualBackgroundOptions"
              ></b-form-select>

              <b-badge
                class="info-bubble"
                pill
                variant="outline-primary"
                v-if="!editSpiritualBackground"
                >{{ profile.spiritualBackground }}</b-badge
              >

              <template slot="label">
                <div class="d-flex">
                  <p>Spiritual background</p>
                  <div
                    class="edit-icon-field"
                    v-if="!editSpiritualBackground"
                    @click="editSpiritualBackground = !editSpiritualBackground"
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
                    v-if="editSpiritualBackground"
                    @click="editSpiritualBackground = !editSpiritualBackground"
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
              </template>
            </b-form-group>
          </div>
        </b-col>
      </b-row>

      <!-- <div class="fields-container">
             

              

             
            </div> -->

      <!-- Values -->
      <b-col class="mb-4" xxs="12" md="12" lg="12">
        <h3 class="text-center">Values</h3>
      </b-col>
      <b-col class="mb-4" xxs="12" md="12" lg="12">
        <!-- Israelites Practice Keeping   -->
        <b-form-group>
          <div v-if="!editIsrealitePracticeKeeping">
            <b-badge
              class="info-bubble-2"
              pill
              variant="outline-primary"
              v-for="(tag, index) in profile.isrealitePracticeKeeping"
              :key="index"
              >{{ tag }}</b-badge
            >
          </div>

          <b-form-checkbox-group
            id="isrealitePracticeKeeping-group-"
            v-model="profile.isrealitePracticeKeeping"
            :options="step3.isrealitePracticeKeepingOptions"
            v-if="editIsrealitePracticeKeeping"
            name="isrealitePracticeKeeping"
          ></b-form-checkbox-group>

          <template slot="label">
            <div class="d-flex">
              <p>Israelites Practice Keeping*</p>
              <div
                class="edit-icon-field"
                v-if="!editIsrealitePracticeKeeping"
                @click="
                  editIsrealitePracticeKeeping = !editIsrealitePracticeKeeping
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
              <div
                class="edit-icon-pressed"
                v-if="editIsrealitePracticeKeeping"
                @click="
                  editIsrealitePracticeKeeping = !editIsrealitePracticeKeeping
                "
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
          </template>
        </b-form-group>
      </b-col>
      <b-col class="mb-4" xxs="12" md="12" lg="12">
        <div class="d-flex">
          <div class="mr-2 w-50">
            <b-form-group label="Passions">
              <template slot="label">
                <div class="d-flex">
                  <p>Passions</p>
                  <div
                    class="edit-icon-field"
                    v-if="!editPassions"
                    @click="editPassions = !editPassions"
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
                    v-if="editPassions"
                    @click="editPassions = !editPassions"
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
              </template>
              <b-button
                class="add-btn"
                v-if="editPassions"
                @click="openModal('add-passions-modal')"
                ><svg
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

              <div v-if="!editPassions">
                <b-badge
                  class="info-bubble-2"
                  pill
                  variant="outline-primary"
                  v-for="(tag, index) in step3.passionsTags"
                  :key="index"
                  >{{ tag }}</b-badge
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
                  Let everyone know what you're passionate about by adding it to
                  your profile.
                </p>

                <div class="passions-tags-container">
                  <b-badge
                    class="passion-tag"
                    variant="empty"
                    pill
                    v-for="(tag, index) in step3.passionsTags"
                    :class="{
                      selected: step3.form.selectedPassions.indexOf(tag) !== -1,
                    }"
                    :key="index"
                    @click="selectTag(tag)"
                  >
                    {{ tag }}
                  </b-badge>
                </div>

                <div
                  class="d-flex justify-content-center align-items-center mt-4"
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
              :class="{ 'text-danger': countSelectedCount < 6 }"
            >
              Passions Selected : ({{ countSelectedCount }}/6)
            </p>
          </div>
          <div class="w-50">
            <b-form-group label="Kingdom Gifts">
              <template slot="label">
                <div class="d-flex">
                  <p>Kingdom Gifts</p>
                  <div
                    class="edit-icon-field"
                    v-if="!editKingdomGifts"
                    @click="editKingdomGifts = !editKingdomGifts"
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
                    v-if="editKingdomGifts"
                    @click="editKingdomGifts = !editKingdomGifts"
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
              </template>

              <div v-if="!editKingdomGifts">
                <b-badge
                  class="info-bubble-2"
                  pill
                  variant="outline-primary"
                  v-for="(tag, index) in step3.kingdomGiftsTags"
                  :key="index"
                  >{{ tag }}</b-badge
                >
              </div>

              <b-button
                class="add-btn"
                v-if="editKingdomGifts"
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
                  Let everyone know what you're passionate about by adding it to
                  your profile.
                </p>

                <div class="kingdom-gifts-tags-container">
                  <b-badge
                    class="kingdom-gifts-tag"
                    variant="empty"
                    pill
                    v-for="(tag, index) in step3.kingdomGiftsTags"
                    :class="{
                      selected:
                        step3.form.selectedkingdomGiftsTags.indexOf(tag) !== -1,
                    }"
                    :key="index"
                    @click="selectKingdomGiftsTag(tag)"
                  >
                    {{ tag }}
                  </b-badge>
                </div>

                <div
                  class="d-flex justify-content-center align-items-center mt-4"
                >
                  <b-button
                    class="passion-continue-btn text-center"
                    @click="closeModal('add-kingdom-gifts-modal')"
                    >Continue ({{
                      countSelectedKingdomGiftsCount
                    }}/10)</b-button
                  >
                </div>
              </b-modal>
            </b-form-group>

            <p
              v-if="countSelectedKingdomGiftsCount > 0"
              :class="{
                'text-danger': countSelectedKingdomGiftsCount < 10,
              }"
            >
              Kingdom Gifts Selected : ({{ countSelectedKingdomGiftsCount }}/10)
            </p>
          </div>
        </div>
      </b-col>
    </div>

    <div class="btn-container">
      <b-button class="custom-btn-1">Update</b-button>
    </div>
  </div>
</template>

<script>
import { apiUrl } from "@/constants/config";
import axios from "axios";
import Vue2Filters from "vue2-filters";
import { getCurrentUser } from "@/utils";
import { validationMixin } from "vuelidate";
const { required } = require("vuelidate/lib/validators");
import draggable from "vuedraggable";
import VueGallerySlideshow from "vue-gallery-slideshow";
// Modals
import imageEditModal from "./imageEditModal.vue";
import profileImageUploadModal from "./uploadProfileImage.vue";

export default {
  components: {
    VueGallerySlideshow,
    imageEditModal,
    profileImageUploadModal,
    draggable,
  },
  props: ["user"],
  data() {
    return {
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
      profileImageRemoveLoader: false,
      galleryImageRemoveLoader: false,
      imageForEdit: "",
      imageForEditIndex: "",
      images: [
        "https://placekitten.com/801/800",
        "https://placekitten.com/802/800",
        "https://placekitten.com/803/800",
        "https://placekitten.com/804/800",
        "https://placekitten.com/805/800",
      ],
      imagesAfterSorting: [],
      galleryImagesDummy: [
        "https://images.unsplash.com/photo-1517088455889-bfa75135412c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5548929376f93d8b1b7a21097df03bd&auto=format&fit=crop&w=749&q=80",
        "https://images.unsplash.com/photo-1526656892012-7b336603ed46?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=31c8e58b58c25dfcc18452ed29b52951&auto=format&fit=crop&w=334&q=80",
        "https://images.unsplash.com/photo-1521024221340-efe7d7fa239b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9ad8a99d809d3fa3a9e8dff3ecc81878&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1523038793606-2fd28f837a85?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=919b76f4229e41416653aeb10e84e94a&auto=format&fit=crop&w=334&q=80",
        "https://images.unsplash.com/photo-1516832970803-325be7a92aa5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=93d7ac9abad6167aecb49ebd67fd5b6d&auto=format&fit=crop&w=751&q=80",
        "https://images.unsplash.com/photo-1526938972776-11558ad4de30?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=973795a277e861265b0fabbf4a96afe2&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1464550838636-1a3496df938b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f22dbf6c13ea7c21e803aa721437b691&auto=format&fit=crop&w=888&q=80",
      ],
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
          text: "I am a diaspora Israelite",
          value: "I am a diaspora Israelite",
        },
        {
          text: "I am a gentile grafted into the Israelite covenant (Grafted in)",
          value:
            "I am a gentile grafted into the Israelite covenant (Grafted in)",
        },
        {
          text: "I believe I am of the 12 tribes (12 tribes chart)",
          value: "I believe I am of the 12 tribes (12 tribes chart)",
        },
      ],
      maritalBeliefSystemOptions: [
        { text: "None", value: "N/A" },
        {
          text: "Monogamy",
          value: "Monogamy",
        },
        {
          text: "Polygamy",
          value: "Polygamy",
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
          text: "I came out of the Christian church",
          value: "I came out of the Christian church",
        },
        {
          text: "I came out of Islam",
          value: "I came out of Islam",
        },
        {
          text: "I came out of the Nation of Islam",
          value: "I came out of the Nation of Islam",
        },
        {
          text: "I did not believe in anything",
          value: "I did not believe in anything",
        },
        {
          text: "I came out of Pan - Africanism",
          value: "I came out of Pan - Africanism",
        },
        {
          text: "I was Orthodox Jew",
          value: "I was Orthodox Jew",
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
            text: "I am a gentile grafted into the israelite covenant (grafted in)",
            value:
              "I am a gentile grafted into the israelite covenant (grafted in)",
          },
          {
            text: "I believe i am of the 12 tribes (12 tribes chart)",
            value: "I believe i am of the 12 tribes (12 tribes chart)",
          },
        ],
        maritalBeliefSystemOptions: [
          { text: "None", value: "N/A" },
          {
            text: "Monogamy",
            value: "Monogamy",
          },
          {
            text: "Polygamy",
            value: "Polygamy",
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
            text: "1 year or less",
            value: "1 year or less",
          },
          {
            text: "1 to 5 years",
            value: "1 to 5 years",
          },
          {
            text: "5 to 10 years",
            value: "5 to 10 years",
          },
          {
            text: "10 to 20 years",
            value: "10 to 20 years",
          },
          {
            text: "20 years or more",
            value: "20 years or more",
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
      console.log("clicked on gallery");
    },
    itemClickHandler(data, i) {
      // click event
      console.log("data -> ", data);
      console.log("i -> ", i);
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
  },
  computed: {
    showSummary() {
      if (this.showFullSummary) {
        console.log("showFullSummary -> ", this.showFullSummary);
        return this.person.summary;
      } else {
        let newText = this.person.summary;
        let cutout = newText.substring(0, 100);
        console.log("cutout -> ", cutout);
        return cutout;
      }
    },
    currentUser() {
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
      console.log("length -> ", length);
      return length;
    },
  },
  mounted() {
    console.log("user -> ", this.user);
  },
};
</script>

<style scoped lang="scss">
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
