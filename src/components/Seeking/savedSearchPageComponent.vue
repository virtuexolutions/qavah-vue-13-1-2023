<template>
  <div>
    <b-link @click="$router.go(-1)">
      <i>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="15"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </i>
      Go Back</b-link
    >
    <b-card class="mt-2 mb-2 rounded-lg">
      <h2>Seeking</h2>

      <!-- <b-link>Previous Search</b-link> -->
    </b-card>
    <!-- Saved Searches -->
    <b-card
      no-body
      class="rounded-lg saved-searches mb-2"
      v-if="savedSearches.length > 0"
    >
      <h4>Saved Searches</h4>
      <div class="searches-container">
        <div
          class="rounded-lg single-search"
          no-body
          v-for="(search, index) in savedSearches"
          :key="index"
        >
          <b-link @click="searchSubmit(search.user_filter)">{{
            search.filter_name
          }}</b-link>
        </div>
      </div>
    </b-card>
    <!-- Advance Search -->
    <b-card class="rounded-lg mb-2">
      <div class="search-section">
        <p class="p-0 m-0">
          Age
          <span
            class="p-0 m-0 font-weight-bold underline-text"
            v-if="!editAge"
            @click="editAge = !editAge"
            ><u>{{ topfilter.ageFrom }}</u></span
          >
          <input
            type="number"
            v-model="topfilter.ageFrom"
            @input="selectTopFilter('ageFrom')"
            class="underline-input"
            v-if="editAge"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="underline-text"
            v-if="editAge"
            @click="editAge = false"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clip-rule="evenodd"
            />
          </svg>

          to
          <span
            class="p-0 m-0 font-weight-bold underline-text"
            v-if="!editAge2"
            @click="editAge2 = !editAge2"
            ><u>{{ topfilter.ageTo }}</u></span
          >
          <input
            type="number"
            v-model="topfilter.ageTo"
            @input="selectTopFilter('ageTo')"
            class="underline-input"
            v-if="editAge2"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="underline-text"
            v-if="editAge2"
            @click="editAge2 = false"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clip-rule="evenodd"
            />
          </svg>
          within
          <span
            class="p-0 m-0 font-weight-bold underline-text"
            v-if="!editMiles"
            @click="editMiles = !editMiles"
            ><u>{{ topfilter.miles }}</u></span
          >
          <input
            type="number"
            class="underline-input-2"
            @input="selectTopFilter('miles')"
            v-model="topfilter.miles"
            v-if="editMiles"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="underline-text"
            v-if="editMiles"
            @click="editMiles = false"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clip-rule="evenodd"
            />
          </svg>
          mi of
          <span
            class="p-0 m-0 font-weight-bold underline-text"
            v-if="!editZipcode"
            @click="editZipcode = !editZipcode"
            ><u>{{ topfilter.zipcode }}</u></span
          >
          <input
            type="text"
            v-model="topfilter.zipcode"
            @input="selectTopFilter('zipcode')"
            class="underline-input-2"
            v-if="editZipcode"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="underline-text"
            v-if="editZipcode"
            @click="editZipcode = false"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clip-rule="evenodd"
            />
          </svg>
        </p>
        <!-- Get Previous Search -->
        <vue-custom-tooltip
          position="is-bottom"
          v-if="isPreviousFiltersExists"
          label="Go Back To Previous Search."
        >
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 20 20"
              @click="previousSearchSubmit"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </vue-custom-tooltip>
        <div class="filters">
          <!-- Save Search -->
          <vue-custom-tooltip
            position="is-bottom"
            label="Allows you to save the custom search that work for you."
          >
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                @click="openModal('saveSearchModal')"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </vue-custom-tooltip>

          <!-- Sort -->
          <b-dropdown
            class="p-0 m-0"
            variant="empty"
            size="lg"
            right
            toggle-class="p-0 header-icon notificationButton"
            menu-class="m-0 p-2 rounded-lg"
            no-caret
          >
            <template slot="button-content">
              <vue-custom-tooltip
                position="is-bottom"
                label="Allows you to sort by fields"
              >
                <div
                  class="icon"
                  :class="{
                    'sort-icon-activated': sorted,
                  }"
                >
                  <!-- @click="sort" -->
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
                      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                    />
                  </svg>
                </div>
              </vue-custom-tooltip>
            </template>

            <b-dropdown-item @click="sort('top-picks')"
              >Top picks</b-dropdown-item
            >
            <b-dropdown-item @click="sort('activity')"
              >Activity Date</b-dropdown-item
            >
            <b-dropdown-item @click="sort('newest')"
              >Newest First</b-dropdown-item
            >
            <b-dropdown-item @click="sort('age')">Age</b-dropdown-item>
            <b-dropdown-item @click="sort('images')"
              >Photo Count</b-dropdown-item
            >
            <b-dropdown-item @click="sort('distance')"
              >Distance</b-dropdown-item
            >
            <b-dropdown-item @click="sort('mutual')"
              >Mutual Search</b-dropdown-item
            >
            <b-dropdown-item @click="sort('reverse')"
              >Reverse Search</b-dropdown-item
            >
          </b-dropdown>

          <!-- Filter -->
          <vue-custom-tooltip
            position="is-bottom"
            label="Allows you to customize your search filters"
          >
            <div class="icon" @click="filter1 = !filter1">
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
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
          </vue-custom-tooltip>

          <!-- Refresh -->
          <vue-custom-tooltip
            position="is-bottom"
            label="Allows you to refresh data"
          >
            <div class="icon-1" @click="submit">
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
            </div>
          </vue-custom-tooltip>
        </div>
      </div>
    </b-card>
    <!-- All Fields Selection Filter -->
    <transition name="fade">
      <b-card class="rounded-lg mb-2" v-if="filter1">
        <div class="filter-1-section mt-4" v-if="filter1">
          <b-tabs pills no-nav-style nav-class="filter-1-tabs-nav">
            <!-- Shortcut -->
            <b-tab title-link-class="filter-1-tabs-nav-link p-0 mr-1" active>
              <template slot="title">
                <b-button
                  variant="outline-primary"
                  active-class="filter-1-section-option-active"
                  class="filter-1-section-option m-0"
                  :pressed="currentSelect === 'Shortcut'"
                  @click="currentSelect = 'Shortcut'"
                  :class="{
                    'filter-1-section-option-active':
                      currentSelect === 'Shortcut',
                  }"
                >
                  <div class="icon">
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                  <p class="m-0 p-0">Shortcuts</p>
                </b-button>
              </template>

              <div class="p-5">
                <b-tabs content-class="mt-3" pills align="center">
                  <b-tab title="Visibilty" active>
                    <b-card class="rounded-lg">
                      <b-form-group>
                        <b-form-checkbox-group
                          id="checkbox-group-1"
                          v-model="visibility"
                          :options="visibilityOptions"
                          name="flavour-1"
                        ></b-form-checkbox-group>
                      </b-form-group>

                      <!-- <b-form-group label="Search By Bio Summary">
                      <b-form-input
                        class="custom-field"
                        v-model="visibility.search"
                        type="text"
                        placeholder="Type bio summary here..."
                      ></b-form-input>
                    </b-form-group> -->

                      <div class="btn-container">
                        <b-button variant="empty" @click="filter1 = false"
                          >Cancel</b-button
                        >
                        <b-button class="custom-btn-1" @click="submit"
                          >Submit</b-button
                        >
                      </div>
                    </b-card>
                  </b-tab>
                  <b-tab title="Keywords">
                    <b-card class="rounded-lg search-card">
                      <b-form-group>
                        <b-form-input
                          class="custom-field"
                          type="search"
                          placeholder="Search By Summary ..."
                          v-model="search.keywords"
                        ></b-form-input>
                      </b-form-group>
                      <b-button class="custom-btn-1" @click="submit"
                        >Search</b-button
                      >
                    </b-card>
                  </b-tab>
                </b-tabs>
              </div>
            </b-tab>
            <!-- Interest -->
            <b-tab title-link-class="filter-1-tabs-nav-link p-0 mr-1">
              <template slot="title">
                <b-button
                  variant="outline-primary"
                  class="filter-1-section-option"
                  :pressed="currentSelect === 'Interest'"
                  @click="currentSelect = 'Interest'"
                  :class="{
                    'filter-1-section-option-active':
                      currentSelect === 'Interest',
                  }"
                >
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="30"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
                      />
                    </svg>
                  </div>
                  <p class="m-0 p-0">Interests</p>
                </b-button>
              </template>

              <div class="p-5">
                <b-tabs content-class="mt-3" pills align="center">
                  <b-tab title="Routine" active>
                    <b-card class="rounded-lg">
                      <b-form-group label="Exercise">
                        <b-form-checkbox-group
                          v-model="interests.howOftenDoYouExercise"
                          :options="howOftenDoYouExerciseOptions"
                        ></b-form-checkbox-group>
                      </b-form-group>

                      <div class="btn-container">
                        <b-button variant="empty" @click="filter1 = false"
                          >Cancel</b-button
                        >
                        <b-button class="custom-btn-1" @click="submit"
                          >Submit</b-button
                        >
                      </div>
                    </b-card>
                  </b-tab>
                  <b-tab title="Drink/Smoke" active>
                    <b-card class="rounded-lg">
                      <b-form-group label="Drink ?">
                        <b-form-checkbox-group
                          v-model="interests.doYouDrink"
                          :options="doYouDrinkOptions"
                        ></b-form-checkbox-group>
                      </b-form-group>

                      <b-form-group label="Smoke ?">
                        <b-form-checkbox-group
                          v-model="interests.doYouSmoke"
                          :options="doYouSmokeOptions"
                        ></b-form-checkbox-group>
                      </b-form-group>

                      <div class="btn-container">
                        <b-button variant="empty" @click="filter1 = false"
                          >Cancel</b-button
                        >
                        <b-button class="custom-btn-1" @click="submit"
                          >Submit</b-button
                        >
                      </div>
                    </b-card>
                  </b-tab>
                  <b-tab title="Childrens" active>
                    <b-card class="rounded-lg">
                      <b-form-group label="Wants Children ?">
                        <b-form-checkbox-group
                          v-model="interests.doYouWantMoreChildren"
                          :options="doYouWantMoreChildrenOptions"
                        ></b-form-checkbox-group>
                      </b-form-group>

                      <b-form-group label="Does Have Children ?">
                        <b-form-checkbox-group
                          v-model="interests.doYouHaveChildren"
                          :options="doYouHaveChildrenOptions"
                        ></b-form-checkbox-group>
                      </b-form-group>

                      <div class="btn-container">
                        <b-button variant="empty" @click="filter1 = false"
                          >Cancel</b-button
                        >
                        <b-button class="custom-btn-1" @click="submit"
                          >Submit</b-button
                        >
                      </div>
                    </b-card>
                  </b-tab>
                  <b-tab title="Pets">
                    <b-card class="rounded-lg">
                      <b-form-group>
                        <b-form-checkbox-group
                          v-model="interests.havePets"
                          :options="havePetsOptions"
                        ></b-form-checkbox-group>
                      </b-form-group>

                      <div class="btn-container">
                        <b-button variant="empty" @click="filter1 = false"
                          >Cancel</b-button
                        >
                        <b-button class="custom-btn-1" @click="submit"
                          >Submit</b-button
                        >
                      </div>
                    </b-card>
                  </b-tab>
                  <b-tab title="Seeking">
                    <b-card class="rounded-lg">
                      <b-form-group>
                        <b-form-checkbox-group
                          v-model="interests.relationshipIAmSeeking"
                          :options="relationshipIAmSeekingOptions"
                        ></b-form-checkbox-group>
                      </b-form-group>

                      <div class="btn-container">
                        <b-button variant="empty" @click="filter1 = false"
                          >Cancel</b-button
                        >
                        <b-button class="custom-btn-1" @click="submit"
                          >Submit</b-button
                        >
                      </div>
                    </b-card>
                  </b-tab>
                </b-tabs>
              </div>
            </b-tab>
            <!-- Looks -->
            <b-tab title-link-class="filter-1-tabs-nav-link p-0 mr-1">
              <template slot="title">
                <b-button
                  variant="outline-primary"
                  class="filter-1-section-option"
                  :pressed="currentSelect === 'Looks'"
                  @click="currentSelect = 'Looks'"
                  :class="{
                    'filter-1-section-option-active': currentSelect === 'Looks',
                  }"
                >
                  <div class="icon">
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
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <p class="m-0 p-0">Looks</p>
                </b-button>
              </template>

              <div class="p-5">
                <b-tabs content-class="mt-3" pills align="center">
                  <b-tab title="Body Types" active>
                    <b-card class="rounded-lg">
                      <b-form-group label="Body Types">
                        <b-form-checkbox-group
                          v-model="looks.bodyType"
                          :options="bodyTypeOptions"
                        ></b-form-checkbox-group>
                      </b-form-group>

                      <div class="btn-container">
                        <b-button variant="empty" @click="filter1 = false"
                          >Cancel</b-button
                        >
                        <b-button class="custom-btn-1" @click="submit"
                          >Submit</b-button
                        >
                      </div>
                    </b-card>
                  </b-tab>
                  <b-tab title="Height">
                    <b-card class="rounded-lg">
                      <div class="fields-container">
                        <b-form-group label="Feets">
                          <b-form-input
                            type="number"
                            class="custom-field"
                            style="max-width: 150px !important"
                            v-model="looks.height.feet"
                            max="6"
                          ></b-form-input>
                          <p>{{ looks.height.feet }}</p>
                        </b-form-group>

                        <b-form-group label="Inches">
                          <b-form-input
                            type="number"
                            class="custom-field"
                            style="max-width: 150px !important"
                            v-model="looks.height.inches"
                            max="14"
                          ></b-form-input>
                          <p>{{ looks.height.inches }}</p>
                        </b-form-group>
                      </div>

                      <div class="btn-container">
                        <b-button variant="empty" @click="filter1 = false"
                          >Cancel</b-button
                        >
                        <b-button class="custom-btn-1" @click="submit"
                          >Submit</b-button
                        >
                      </div>
                    </b-card>
                  </b-tab>
                </b-tabs>
              </div>
            </b-tab>
            <!-- Personal -->
            <b-tab title-link-class="filter-1-tabs-nav-link p-0 mr-1">
              <template slot="title">
                <b-button
                  variant="outline-primary"
                  class="filter-1-section-option"
                  :pressed="currentSelect === 'Personal'"
                  @click="currentSelect = 'Personal'"
                  :class="{
                    'filter-1-section-option-active':
                      currentSelect === 'Personal',
                  }"
                >
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="30"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>

                  <p class="m-0 p-0">Personal</p>
                </b-button>
              </template>

              <div class="p-5">
                <b-tabs content-class="mt-3" pills align="center">
                  <b-tab title="Living" active>
                    <b-card class="rounded-lg">
                      <b-form-group label="Living Situation">
                        <b-form-checkbox-group
                          v-model="personal.livingSituation"
                          :options="livingSituationOptions"
                        ></b-form-checkbox-group>
                      </b-form-group>

                      <b-form-group label="Employment Situation">
                        <b-form-checkbox-group
                          v-model="personal.employmentStatus"
                          :options="employmentStatusOptions"
                        ></b-form-checkbox-group>
                      </b-form-group>

                      <div class="btn-container">
                        <b-button variant="empty" @click="filter1 = false"
                          >Cancel</b-button
                        >
                        <b-button class="custom-btn-1" @click="submit"
                          >Submit</b-button
                        >
                      </div>
                    </b-card>
                  </b-tab>
                  <b-tab title="Marital" active>
                    <b-card class="rounded-lg">
                      <b-form-group label="Marital Status">
                        <b-form-checkbox-group
                          v-model="personal.maritalStatus"
                          :options="maritalStatusOptions"
                        ></b-form-checkbox-group>
                      </b-form-group>

                      <div class="btn-container">
                        <b-button variant="empty" @click="filter1 = false"
                          >Cancel</b-button
                        >
                        <b-button class="custom-btn-1" @click="submit"
                          >Submit</b-button
                        >
                      </div>
                    </b-card>
                  </b-tab>
                  <b-tab title="Relocation">
                    <b-card class="rounded-lg">
                      <b-form-group label="Will To Relocate">
                        <b-form-checkbox-group
                          v-model="personal.willingToRelocate"
                          :options="willingToRelocateOptions"
                        ></b-form-checkbox-group>
                      </b-form-group>

                      <div class="btn-container">
                        <b-button variant="empty" @click="filter1 = false"
                          >Cancel</b-button
                        >
                        <b-button class="custom-btn-1" @click="submit"
                          >Submit</b-button
                        >
                      </div>
                    </b-card>
                  </b-tab>
                </b-tabs>
              </div>
            </b-tab>
            <!-- Isrealite LifeStyle -->
            <b-tab title-link-class="filter-1-tabs-nav-link p-0">
              <template slot="title">
                <b-button
                  variant="outline-primary"
                  class="filter-1-section-option"
                  :pressed="currentSelect === 'LifeStyle'"
                  @click="currentSelect = 'LifeStyle'"
                  :class="{
                    'filter-1-section-option-active':
                      currentSelect === 'LifeStyle',
                  }"
                >
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      enable-background="new 0 0 512 512"
                      fill="currentColor"
                      stroke="#333"
                      height="30"
                      id="Good_x5F_atmosphere"
                      version="1.1"
                      viewBox="0 0 512 512"
                      xml:space="preserve"
                    >
                      <g>
                        <rect
                          height="10.168"
                          width="10.168"
                          x="74.543"
                          y="348.782"
                        />
                        <rect
                          height="10.169"
                          width="10.168"
                          x="371.439"
                          y="322.795"
                        />
                        <rect
                          height="10.168"
                          width="10.168"
                          x="430.74"
                          y="347.442"
                        />
                        <path
                          d="M234.609,266.617h-10c0,1.677-1.364,3.04-3.04,3.04c-1.677,0-3.041-1.363-3.041-3.04h-10c0,7.19,5.85,13.04,13.041,13.04   C228.759,279.657,234.609,273.808,234.609,266.617z"
                        />
                        <path
                          d="M248.937,316.81c-8.604,0-16.556-5.016-20.26-12.777l-9.025,4.307c5.354,11.221,16.849,18.471,29.285,18.471   c12.424,0,23.918-7.249,29.284-18.468l-9.021-4.313C265.486,311.792,257.533,316.81,248.937,316.81z"
                        />
                        <path
                          d="M276.303,279.657c7.191,0,13.041-5.85,13.041-13.04h-10c0,1.677-1.363,3.04-3.041,3.04c-1.676,0-3.039-1.363-3.039-3.04   h-10C263.264,273.808,269.113,279.657,276.303,279.657z"
                        />
                        <path
                          d="M268.709,461.698h69.18v-29.852h-69.18V461.698z M278.709,441.847h49.18v9.852h-49.18V441.847z"
                        />
                        <rect
                          height="10"
                          width="21.334"
                          x="50.136"
                          y="409.554"
                        />
                        <rect
                          height="10"
                          width="21.334"
                          x="426.717"
                          y="409.554"
                        />
                        <path
                          d="M453.609,374.901h-44.672v14.177h-36.908v10h88.93v30.96H359.1v10h49.838v12.24h-48.959v10h48.959v0.003h44.672v-0.003   h7.35v14.55H353.256v-52.478c0-6.602-1.053-12.973-2.996-18.953c9.51-10.152,14.914-23.69,14.914-37.661   c0-16.866-7.576-32.577-20.789-43.104c-4.121-3.279-6.484-8.145-6.484-13.35v-8.803c43.291,4.197,86.605,11.466,128.836,21.64   l2.342-9.722c-42.994-10.358-87.104-17.736-131.178-21.963v-72.229c0-24.175-9.527-46.941-26.828-64.105   c-16.816-16.684-38.859-25.846-62.141-25.846c-0.234,0-0.47,0.001-0.703,0.003c-23.497,0.186-45.587,9.438-62.201,26.051   c-16.805,16.797-26.06,39.137-26.06,62.904v75.482c-42.844,4.278-85.711,11.525-127.556,21.569l2.334,9.724   c41.082-9.861,83.159-16.993,125.222-21.239v6.112c0,5.273-2.411,10.181-6.612,13.463c-13.476,10.511-21.204,26.334-21.204,43.413   c0,14.196,5.552,27.888,15.323,38.083c-1.857,5.857-2.858,12.086-2.858,18.531v52.478H36.939v-14.55h6.44v0.003h44.669v-0.003   h49.88v-10h-49.88v-12.24h50.76v-10H36.939v-30.96h88.32v-10h-37.21v-14.177H43.379v14.177h-16.44v50.96h16.44v12.24h-16.44v34.55   h117.676h208.641h117.703v-34.55h-17.35v-12.24h17.35v-50.96h-17.35V374.901z M443.609,452.278h-24.672v-12.24h24.672V452.278z    M53.379,384.901h24.669v4.177H53.379V384.901z M53.379,440.038h24.669v12.24H53.379V440.038z M343.256,476.828H154.615v-52.478   c0-23.819,16.225-44.133,39.456-49.397l13.589-3.08c10.412,11.979,25.279,18.787,41.277,18.787   c15.997,0,30.866-6.808,41.282-18.786l13.584,3.079c23.23,5.265,39.453,25.577,39.453,49.397V476.828z M203.07,362.659   l-9.982,2.263c-2.441-8.067-3.69-16.405-3.69-24.853v-22.485c3.045,5.021,6.717,9.614,10.894,13.696v8.545   C200.292,347.542,201.235,355.197,203.07,362.659z M271.203,367.564l7.555,1.712c-8.137,7.305-18.639,11.384-29.821,11.384   s-21.684-4.079-29.817-11.385l7.545-1.71C239.888,377.439,257.945,377.46,271.203,367.564z M232.906,359.729v-10.523   c5.066,1.184,10.336,1.83,15.757,1.83c5.616,0,11.072-0.689,16.304-1.957v10.633C255.377,366.698,242.474,366.696,232.906,359.729z    M274.967,358.163v-12.33c4.412-1.818,8.604-4.072,12.504-6.721v0.713c0,6.963-0.857,13.871-2.525,20.6L274.967,358.163z    M222.906,358.163l-10.083,2.286c-1.671-6.737-2.531-13.652-2.531-20.624V339.4c3.939,2.632,8.165,4.859,12.614,6.648V358.163z    M294.699,362.636c1.83-7.455,2.771-15.103,2.771-22.811v-8.962c3.996-3.972,7.512-8.425,10.449-13.267v25.297   c0,6.079-0.506,12.195-1.506,18.176c-0.225,1.35-0.484,2.701-0.762,4.049L294.699,362.636z M315.25,368.078   c0.381-1.782,0.729-3.571,1.027-5.36c1.09-6.525,1.643-13.195,1.643-19.824v-60.965c0-0.052,0.004-0.103,0.004-0.154h-0.004v-13.18   c0-27.646-17.701-51.798-44.045-60.102l-3.006,9.537c22.16,6.985,37.051,27.305,37.051,50.564v13.334   c-0.084,32.605-26.633,59.107-59.257,59.107c-32.677,0-59.261-26.585-59.261-59.262h-0.004v-11.416   c0-19.364,11.262-37.131,28.737-45.415l0.492-0.227c21.281-9.802,35.032-31.282,35.032-54.725v-7.656h-10v7.656   c0,19.361-11.247,37.118-28.699,45.399l-0.525,0.243c-21.284,9.811-35.037,31.291-35.037,54.724v69.711   c0,9.405,1.387,18.688,4.097,27.669c-13.829,5.271-24.948,15.244-31.696,27.84c-6.191-7.882-9.648-17.706-9.648-27.842   c0-13.976,6.325-26.925,17.357-35.53c6.647-5.193,10.459-12.973,10.459-21.346v-91.648c0-21.096,8.214-40.924,23.131-55.832   c14.746-14.747,34.354-22.959,55.209-23.123c0.207-0.002,0.414-0.003,0.621-0.003c20.626,0,40.171,8.134,55.101,22.944   c15.393,15.272,23.871,35.518,23.871,57.007v91.077c0,8.27,3.738,15.987,10.254,21.172c10.816,8.619,17.02,21.479,17.02,35.282   c0,10.104-3.268,19.624-9.311,27.443C339.24,383.036,328.531,373.374,315.25,368.078z M443.609,389.078h-24.672v-4.177h24.672   V389.078z"
                        />
                        <path
                          d="M336.471,101.946c0,31.685,25.777,57.462,57.461,57.462c12.373,0,24.158-3.871,34.086-11.196l-5.938-8.047   c-8.195,6.047-17.928,9.243-28.148,9.243c-26.17,0-47.461-21.291-47.461-47.462c0-6.963,1.471-13.669,4.375-19.933l-9.072-4.205   C338.254,85.398,336.471,93.521,336.471,101.946z"
                        />
                        <path
                          d="M436.977,140.015c9.297-10.506,14.418-24.025,14.418-38.068c0-31.685-25.777-57.462-57.463-57.462   c-16.656,0-32.477,7.22-43.406,19.809l7.551,6.556c9.029-10.4,22.098-16.364,35.855-16.364c26.172,0,47.463,21.291,47.463,47.462   c0,11.6-4.229,22.766-11.906,31.441L436.977,140.015z"
                        />
                        <path
                          d="M460.707,101.946c0,36.819-29.955,66.774-66.775,66.774c-10.078,0-19.764-2.188-28.781-6.503l-4.316,9.021   c10.377,4.965,21.514,7.482,33.098,7.482c42.334,0,76.775-34.44,76.775-76.774c0-25.512-12.629-49.293-33.779-63.615l-5.607,8.28   C449.721,59.07,460.707,79.757,460.707,101.946z"
                        />
                        <path
                          d="M424.156,31.352c-5.078-2.177-10.406-3.803-15.834-4.833l-1.863,9.825c4.715,0.895,9.344,2.308,13.758,4.199   L424.156,31.352z"
                        />
                        <path
                          d="M346.057,161.968l6.24-7.813c-15.977-12.759-25.139-31.788-25.139-52.208c0-36.819,29.955-66.774,66.773-66.774v-10   c-42.334,0-76.773,34.441-76.773,76.774C317.158,125.424,327.691,147.301,346.057,161.968z"
                        />
                        <path
                          d="M131.892,102.149c0-11.75-9.56-21.31-21.31-21.31s-21.309,9.56-21.309,21.31h10c0-6.236,5.074-11.31,11.309-11.31   c6.236,0,11.31,5.073,11.31,11.31c0,6.235-5.073,11.309-11.31,11.309h-80.16v10h80.16   C122.333,123.458,131.892,113.898,131.892,102.149z"
                        />
                        <path
                          d="M155.493,117.431c6.235,0,11.309,5.073,11.309,11.31c0,6.235-5.073,11.309-11.309,11.309H75.332v10h80.161   c11.75,0,21.309-9.56,21.309-21.309c0-11.75-9.559-21.31-21.309-21.31s-21.31,9.56-21.31,21.31h10   C144.183,122.504,149.256,117.431,155.493,117.431z"
                        />
                        <rect
                          height="10"
                          width="12.458"
                          x="51.049"
                          y="140.049"
                        />
                        <path
                          d="M463.752,225.222c-11.75,0-21.309,9.559-21.309,21.309h10c0-6.235,5.072-11.309,11.309-11.309s11.309,5.073,11.309,11.309   s-5.072,11.309-11.309,11.309h-72.369v10h72.369c11.75,0,21.309-9.559,21.309-21.309S475.502,225.222,463.752,225.222z"
                        />
                        <path
                          d="M432.564,222.808c0-11.749-9.559-21.309-21.309-21.309s-21.309,9.56-21.309,21.309h10c0-6.235,5.072-11.309,11.309-11.309   s11.309,5.073,11.309,11.309c0,6.236-5.072,11.31-11.309,11.31h-60.207v10h60.207C423.006,244.117,432.564,234.558,432.564,222.808   z"
                        />
                        <rect
                          height="10"
                          width="12.457"
                          x="367.1"
                          y="257.839"
                        />
                      </g>
                    </svg>
                  </div>

                  <p class="m-0 p-0">Israelite Lifestyle</p>
                </b-button>
              </template>

              <div class="p-5">
                <b-tabs content-class="mt-3" pills align="center">
                  <b-tab title="Lifestyle" active>
                    <b-card class="rounded-lg">
                      <b-form-group label="Believe">
                        <b-form-checkbox-group
                          v-model="lifestyle.iBelieveIAM"
                          :options="iBelieveIAMOptions"
                        ></b-form-checkbox-group>
                      </b-form-group>

                      <b-form-group label="Marital Belief System">
                        <b-form-checkbox-group
                          v-model="lifestyle.maritalBeliefSystem"
                          :options="maritalBeliefSystemOptions"
                        ></b-form-checkbox-group>
                      </b-form-group>

                      <b-form-group label="Spiritual Value">
                        <b-form-checkbox-group
                          v-model="lifestyle.spiritualValue"
                          :options="spiritualValueOptions"
                        ></b-form-checkbox-group>
                      </b-form-group>

                      <b-form-group label="Study Habits">
                        <b-form-checkbox-group
                          v-model="lifestyle.studyHabits"
                          :options="studyHabitsOptions"
                        ></b-form-checkbox-group>
                      </b-form-group>

                      <b-form-group label="Study Bible">
                        <b-form-checkbox-group
                          v-model="lifestyle.studyBible"
                          :options="studyBibleOptions"
                        ></b-form-checkbox-group>
                      </b-form-group>

                      <b-form-group label="Affiliation">
                        <b-form-checkbox-group
                          v-model="lifestyle.anyAffiliation"
                          :options="anyAffiliationOptions"
                        ></b-form-checkbox-group>
                      </b-form-group>

                      <b-form-group label="Years Spent In Truth">
                        <b-form-checkbox-group
                          v-model="lifestyle.yearsInTruth"
                          :options="yearsInTruthOptions"
                        ></b-form-checkbox-group>
                      </b-form-group>

                      <b-form-group label="Spiritual Background">
                        <b-form-checkbox-group
                          v-model="lifestyle.spiritualBackground"
                          :options="spiritualBackgroundOptions"
                        ></b-form-checkbox-group>
                      </b-form-group>

                      <div class="btn-container">
                        <b-button variant="empty" @click="filter1 = false"
                          >Cancel</b-button
                        >
                        <b-button class="custom-btn-1" @click="submit"
                          >Submit</b-button
                        >
                      </div>
                    </b-card>
                  </b-tab>
                  <b-tab title="Values">
                    <b-card class="rounded-lg">
                      <b-form-group label="Practice Keeping">
                        <b-form-checkbox-group
                          v-model="lifestyle.isrealitePracticeKeeping"
                          :options="isrealitePracticeKeepingOptions"
                        ></b-form-checkbox-group>
                      </b-form-group>

                      <b-form-group label="Have Kingdom Gifts">
                        <b-form-checkbox-group
                          v-model="lifestyle.kingdomGiftsTags"
                          :options="kingdomGiftsTags"
                        ></b-form-checkbox-group>
                      </b-form-group>

                      <b-form-group label="Have Passions">
                        <b-form-checkbox-group
                          v-model="lifestyle.passionsTags"
                          :options="passionsTags"
                        ></b-form-checkbox-group>
                      </b-form-group>

                      <div class="btn-container">
                        <b-button variant="empty" @click="filter1 = false"
                          >Cancel</b-button
                        >
                        <b-button class="custom-btn-1" @click="submit"
                          >Submit</b-button
                        >
                      </div>
                    </b-card>
                  </b-tab>
                </b-tabs>
              </div>
            </b-tab>
          </b-tabs>
        </div>

        <!-- Filters Tag -->
        <transition name="fade">
          <b-card
            class="rounded-lg mb-2"
            v-if="filtersRemaining && checkBasicFilters(this.filters)"
          >
            <div
              class="filters-on-section"
              v-if="filtersRemaining && checkBasicFilters(this.filters)"
            >
              <div class="top mb-4">
                <p class="m-0 p-0">Filters on:</p>
                <b-link
                  v-if="filters.length > 0"
                  class="filter-clear-all"
                  @click="clearAllFilters"
                  >Clear all</b-link
                >
              </div>

              <div class="filters-container">
                <div
                  class="custom-filter"
                  variant="outline-primary"
                  pill
                  v-for="(filter, index) in filters"
                  :key="index"
                >
                  <span v-if="filter.key === 'height'">
                    {{ filter.key.split(".")[1] }} :
                    <span>
                      {{ filter.values[0] }}'{{ filter.values[1] }}"
                    </span>
                  </span>
                  <span
                    v-else-if="
                      filter.key === 'age' ||
                      filter.key === 'miles' ||
                      filter.key === 'zipcode' ||
                      filter.key === 'seeking'
                    "
                    style="display: none"
                    class="text-capitalize inner-options"
                  >
                    {{ filter.key.split(".")[1] }} :
                    <span v-for="(value, index) in filter.values" :key="index">
                      {{ value }}
                      ,
                    </span>
                  </span>
                  <span v-else-if="filter.key === 'visibility'">
                    <!-- Visibility : -->
                    <span v-for="(value, index) in filter.values" :key="index">
                      {{ visibilityFilterText(value) }} ,
                    </span>
                  </span>
                  <span v-else class="text-capitalize inner-options">
                    {{ filter.key.split(".")[1] }} :
                    <span v-for="(value, index) in filter.values" :key="index">
                      {{ value }}
                      ,
                    </span>
                  </span>
                  <span
                    v-if="
                      filter.key !== 'age' &&
                      filter.key !== 'miles' &&
                      filter.key !== 'zipcode' &&
                      filter.key !== 'seeking'
                    "
                    class="filter-cancel-icon"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="15"
                      viewBox="0 0 20 20"
                      @click="
                        removeSingleFilter(
                          index,
                          filter.key,
                          value,
                          filter.values
                        )
                      "
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clip-rule="evenodd"
                      /></svg
                  ></span>
                </div>
              </div>
            </div>
          </b-card>
        </transition>
      </b-card>
    </transition>
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
          v-if="loadData.length > 0"
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
                <!-- <b-img fluid :src="person.profile_images[0].url"></b-img> -->
                <div class="info">
                  <div class="content">
                    <i class="top-pick" v-if="person.spotlight_status > 0">
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
                      >{{ person.profileName }}</b-link
                    >
                    <div class="subtitle">
                      {{ person.age }} - {{ person.city }},
                      {{ person.location.state_abbr }}
                    </div>
                    <div class="subtitle">{{ person.distance }} Miles Away</div>
                  </div>

                  <div class="right-bubbles">
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
                    <!-- Top Pick -->
                    <!-- <div v-if="!person.toppick" class="top-pick p-0 m-0">
                        
                      </div> -->

                    <!-- <span class="custom-filter-mutual" v-if="person.mutual"
                      >Mutual</span
                    >
                     <span class="custom-filter-reversed" v-if="person.reversed"
                      >Reversed</span
                    > -->
                  </div>
                </div>
              </div>
              <div class="person-footer">
                <!-- If User Have Subscription -->
                <div
                  class="icon message-icon"
                  v-if="
                    check_if_subscription_exist('platinum') ||
                    check_if_subscription_exist('month_to_month') ||
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
        <div class="cards-container mt-3" v-if="loadData.length > 0">
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
              <!-- <b-img fluid :src="person.profile_images[0]"></b-img> -->
              <div class="info">
                <div class="content">
                  <i class="top-pick" v-if="person.spotlight_status > 0">
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
                    {{ person.age }} - {{ person.city }},
                    {{ person.location.state_abbr }}
                  </div>
                  <div class="subtitle">
                    {{ Math.round(person.distance) }} Miles Away
                  </div>
                </div>
                <div class="right-bubbles">
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
                  <!-- Top Pick -->
                  <!-- <div v-if="!person.toppick" class="top-pick p-0 m-0">
                    
                  </div> -->
                  <!-- Mutual -->
                  <!-- <span class="custom-filter-mutual" v-if="person.mutual"
                    >Mutual</span
                  > -->
                  <!-- Reversed -->
                  <!-- <span class="custom-filter-reversed" v-if="person.reversed"
                    >Reversed</span
                  > -->
                </div>
              </div>
            </div>
            <div class="person-footer">
              <!-- If User Have Subscription -->
              <div
                class="icon message-icon"
                v-if="
                  check_if_subscription_exist('platinum') ||
                  check_if_subscription_exist('month_to_month') ||
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
import { errorContainerStyle } from "@/cometchat-pro-vue-ui-kit/CometChatWorkspace/src/components/Calls/CometChatOutgoingCall/style";
import _ from "lodash";
import { BIconNodePlusFill } from "bootstrap-vue";
var typingTimer = 500;
import moment from "moment";
import Swal from "sweetalert2";

export default {
  components: {
    switches: Switches,
  },
  data() {
    return {
      isPreviousFiltersExists: false,
      previousFilterNumber: 1,
      previousSearchFilters: null,
      filtersHistory: [],
      previousTopFilters: null,
      firstTimeTopFilters: false,
      loveNoteMessage: "",
      loveNoteLoader: false,
      sorted: false,
      sortBy: null,
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
      savedSearches: null,
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
        selected: "", // Must be an array reference!
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
    CheckProfileImageOrEmpty(profileimages) {
      if (profileimages.length > 0) {
        return profileimages[0].url;
      } else {
        return "@/assets/profiles/empty.png";
      }
    },
    visibilityFilterText(text) {
      if (text === "online_now") {
        return "Online Now";
      } else if (text === "last24hours") {
        return "Last 24 Hours";
      } else if (text === "last30days") {
        return "Last 30 Days";
      }
    },
    getPreviousSearch() {
      this.render = true;

      // this.previousSearchFilters = this.filters;
      let filters = this.filtersHistory[this.filtersHistory.length - 1];
      filters.forEach((x) => {
        // console.log("Filter Values -> ", x.values);
      });
      this.filters = filters;
      // console.log("filters -> ", filters);
      let data = {
        uid: this.currentUser.id,
        filters: filters,
        from: this.pageNo,
        lat: this.currentUser.location.latitude,
        lng: this.currentUser.location.longitude,
      };

      axios
        .post(`${apiUrl}/seeking/seeking`, data, { headers })
        .then((res) => {
          // console.log("res -> ", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              this.render = false;

              this.peoples = data.data;
              this.total = this.peoples.length;
              // this.length = this.peoples.length;

              // console.log("this.total -> ", this.total);
              this.nextPageloader = false;

              // console.log("seeking data -> ", this.peoples);
              this.filtersHistory.pop();
            } else {
              this.render = false;
              this.nextPageloader = false;

              Vue.$toast.open({
                message: `Error Occurred: ${data.error}`,
                type: "error",
              });
            }
          } else {
            this.render = false;
            this.nextPageloader = false;

            Vue.$toast.open({
              message: "Unknown Error Occurred!",
              type: "error",
            });
          }
        })
        .catch((err) => {
          this.render = false;
          this.nextPageloader = false;
          console.log(err);
          Vue.$toast.open({
            message: err,
            type: "error",
          });
        });

      // console.log("data -> ", data);
    },
    checkBasicFilters(filters) {
      let allfilters = filters;
      let onlyBasicFilters = true;
      allfilters.forEach((x) => {
        if (x.key !== "seeking") {
          onlyBasicFilters = false;
        }

        if (x.key !== "age") {
          onlyBasicFilters = false;
        }

        if (x.key !== "miles") {
          onlyBasicFilters = false;
        }

        if (x.key !== "zipcode") {
          onlyBasicFilters = false;
        }
      });

      if (onlyBasicFilters) {
        return false;
      } else {
        return true;
      }
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
        .post(`${apiUrl}/seeking/mutual-seeking`, data)
        .then((res) => {
          // console.log("res -> ", res);
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

              // console.log("seeking data -> ", this.peoples);
            } else {
              this.infinitebusy = false;
              this.nextPageloader = false;

              // Vue.$toast.open({
              //   message: `Error Occurred: ${data.error}`,
              //   type: "error",
              // });
              console.log("err -> ", data.error);
            }
          } else {
            this.infinitebusy = false;
            this.nextPageloader = false;

            // Vue.$toast.open({
            //   message: "Unknown Error Occurred !",
            //   type: "error",
            // });
            console.log("err => ", data.error);
          }
        })
        .catch((err) => {
          this.infinitebusy = false;
          this.nextPageloader = false;

          console.log(err);
          // Vue.$toast.open({
          //   message: err,
          //   type: "error",
          // });
        });
    },
    nextPage() {
      // this.nextPageloader = true;
      this.length = this.length + 10;
      // this.submit();
    },
    savedSearch() {
      this.searchModalLoader = true;

      let checkFilters = false;
      this.filters.forEach((x) => {
        if (x.key !== "seeking" && x.key !== "miles" && x.key !== "zipcode") {
          checkFilters = true;
        }
      });

      console.log("checkFilters -> ", checkFilters);

      if (checkFilters) {
        let data = {
          name: this.saveSearchName,
          sendEmail: this.saveSearchEmail,
          email: this.currentUser.email,
          uid: this.currentUser.id,
          filters: this.filters,
        };

        axios
          .post(`${apiUrl}/seeking/save_search`, data, { headers })
          .then((res) => {
            // console.log("res -> ", res);
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

                this.saveSearchName = "";
                this.saveSearchEmail = "";
              } else {
                this.searchModalLoader = false;
                Vue.$toast.error(`${data.error}`);
              }
            } else {
              this.searchModalLoader = false;
              Vue.$toast.error("Unknown Error Occurred!");
            }
          })
          .catch((err) => {
            this.searchModalLoader = false;
            console.log(err);
            Vue.$toast.error(`${err.message}`);
          });
      } else {
        this.searchModalLoader = false;

        Vue.$toast.error(
          `You cannot save basic filters! Please select more filters to save!`
        );
      }
    },
    getAllSavedSearches() {
      axios
        .get(`${apiUrl}/seeking/get_saved_all_searches`, { headers })
        .then((res) => {
          // console.log("res -> ", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              this.savedSearches = data.filters;
              this.submit();
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
      let self = this;

      // console.log("key pressed on top filters");
      // clearTimeout(processTimeOut)
      // let processTimeOut = setTimeout(()=>{
      //   console.log('timeout processed !')
      // },1000)

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
    debounce(func, timeout) {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, timeout);
      };
    },
    debouncedTest: _.debounce(function (val) {
      // console.log("Debounced Test !");
      if (this.firstTimeTopFilters) {
        this.saveTopFiltersToDatabase(val);
      }
      this.firstTimeTopFilters = true;
      // console.log("top filters changed ! -> ", val);
      this.submit();
    }, 500),
    removeSingleFilter(index, Filterkey, Filtervalue, Filtervalues) {
      let key = Filterkey;
      let value = Filtervalue;
      let values = Filtervalues;
      // console.log("index -> ", index);
      console.log("key -> ", key);
      if (key === "visibility") {
        if (value === undefined) {
          this.visibility = [];
        }
      }

      if (key === "visibility.search") {
        if (value === undefined) {
          this.search.keywords = "";
        }
      }

      if (key === "howOftenDoYouExercise") {
        if (value === undefined) {
          this.interests.howOftenDoYouExercise = [];
        }
      }
      if (key === "doYouDrink") {
        if (value === undefined) {
          this.interests.doYouDrink = [];
        }
      }
      if (key === "doYouSmoke") {
        if (value === undefined) {
          this.interests.doYouSmoke = [];
        }
      }
      if (key === "doYouHaveChildren") {
        if (value === undefined) {
          this.interests.doYouHaveChildren = [];
        }
      }
      if (key === "doYouWantMoreChildren") {
        if (value === undefined) {
          this.interests.doYouWantMoreChildren = [];
        }
      }
      if (key === "havePets") {
        if (value === undefined) {
          this.interests.havePets = [];
        }
      }
      if (key === "relationshipIAmSeeking") {
        if (value === undefined) {
          this.interests.relationshipIAmSeeking = [];
        }
      }
      if (key === "bodyType" || key === "bodyType") {
        if (value === undefined) {
          this.looks.bodyType = [];
        }
      }
      if (key === "height") {
        if (value === undefined) {
          this.looks.height.feet = "";
          this.looks.height.inches = "";
        }
      }
      if (key === "livingSituation") {
        if (value === undefined) {
          this.personal.livingSituation = [];
        }
      }
      if (key === "employmentStatus") {
        if (value === undefined) {
          this.personal.employmentStatus = [];
        }
      }
      if (key === "maritalStatus") {
        if (value === undefined) {
          this.personal.maritalStatus = [];
        }
      }
      if (key === "willingToRelocate") {
        if (value === undefined) {
          this.personal.willingToRelocate = [];
        }
      }
      if (key === "iBelieveIAM") {
        if (value === undefined) {
          this.lifestyle.iBelieveIAM = [];
        }
      }
      if (key === "maritalBeliefSystem") {
        if (value === undefined) {
          this.lifestyle.maritalBeliefSystem = [];
        }
      }
      if (key === "spiritualValue") {
        if (value === undefined) {
          this.lifestyle.spiritualValue = [];
        }
      }
      if (key === "studyHabits") {
        if (value === undefined) {
          this.lifestyle.studyHabits = [];
        }
      }
      if (key === "studyBible") {
        if (value === undefined) {
          this.lifestyle.studyBible = [];
        }
      }
      if (key === "anyAffiliation") {
        if (value === undefined) {
          this.lifestyle.anyAffiliation = [];
        }
      }
      if (key === "yearsInTruth") {
        if (value === undefined) {
          this.lifestyle.yearsInTruth = [];
        }
      }
      if (key === "spiritualBackground") {
        if (value === undefined) {
          this.lifestyle.spiritualBackground = [];
        }
      }

      if (key === "isrealitePracticeKeeping") {
        if (value === undefined) {
          this.lifestyle.isrealitePracticeKeeping = [];
        }
      }

      if (key === "passionsTags") {
        if (value === undefined) {
          this.lifestyle.passionsTags = [];
        }
      }

      if (key === "kingdomGiftsTags") {
        if (value === undefined) {
          this.lifestyle.kingdomGiftsTags = [];
        }
      }

      // console.log("value -> ", value);
      // console.log("values -> ", values);

      this.filters.splice(index, 1);
    },
    clearAllFilters() {
      if (this.filters.length > 0) {
        this.filters.map((x, i) => {
          if (
            x.key !== "miles" &&
            x.key !== "zipcode" &&
            x.key !== "age" &&
            x.key !== "seeking"
          ) {
            this.filters.splice(i, 1);
          }
        });
      }
      this.lifestyle = {
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
      };

      this.personal = {
        livingSituation: [],
        maritalStatus: [],
        employmentStatus: [],
        willingToRelocate: [],
        family: [],
        relocation: [],
        isrealiteType: [],
        education: [],
      };

      (this.looks = {
        bodyType: [],
        height: {
          feet: null,
          inches: null,
        },
      }),
        (this.visibility = {
          selected: [], // Must be an array reference!
          search: "",
        }),
        (this.interests = {
          doYouHaveChildren: [],
          petOption: [],
          doYouWantMoreChildren: [],
          howOftenDoYouExercise: [],
          doYouDrink: [],
          doYouSmoke: [],
          havePets: [],
          relationshipIAmSeeking: [],
        });
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
    getUniqueListBy(arr, key) {
      return [...new Map(arr.map((item) => [item[key], item])).values()];
    },
    submit() {
      this.render = true;
      debugger;
      if (this.savedSearches != null) {
        debugger;
        let search_id = this.$route.params.id;
        const savefilter = this.savedSearches.filter(function (
          elem,
          key,
          array
        ) {
          return elem.id == search_id;
        });
        let filter = savefilter[0].user_filter;
        for (var i = 0; i < filter.length; i++) {
          filter[i].values = JSON.parse(filter[i].values);
        }
        this.filters = filter;
      }

      setTimeout(() => {
        let data = {
          uid: this.currentUser.id,
          filters: this.filters,
          from: this.pageNo,
          lat: this.currentUser.location.latitude,
          lng: this.currentUser.location.longitude,
        };
        debugger;
        axios
          .post(`${apiUrl}/seeking/seeking`, data, { headers })
          .then((res) => {
            // console.log("res -> ", res);
            const data = res.data;
            if (res.status === 200) {
              if (data.status) {
                this.previousFilterNumber++;
                this.render = false;

                this.peoples = data.peoples;
                this.peoples.forEach((x) => {
                  console.log("person -> ", x);
                });
                this.total = this.peoples.length;
                // this.length = this.peoples.length;

                // console.log("this.total -> ", this.total);
                this.nextPageloader = false;
                let allFiltersSame = true;
                let filters =
                  sessionStorage.getItem("previousFilter") != null
                    ? JSON.parse(sessionStorage.getItem("previousFilter"))
                    : null;
                if (filters) {
                  filters.forEach((x) => {
                    this.filters.forEach((y) => {
                      if (x.key === y.key) {
                        if (x.values.length === y.values.length) {
                          let equal = _.isEqual(x.values, y.values);
                          if (equal) {
                            // console.log("equal");
                          } else {
                            allFiltersSame = false;
                            // console.log("not equal !");
                          }
                        }
                      }
                    });
                  });
                }
                // console.log("filters are same -> ", allFiltersSame);
                if (allFiltersSame) {
                  this.isPreviousFiltersExists = false;
                }

                if (this.previousFilterNumber % 2 == 0) {
                  sessionStorage.setItem(
                    "previousFilter",
                    JSON.stringify(this.filters)
                  );
                  this.isPreviousFiltersExists = true;
                }
              } else {
                this.render = false;
                this.nextPageloader = false;

                Vue.$toast.open({
                  message: `Error Occurred: ${data.error}`,
                  type: "error",
                });
              }
            } else {
              this.render = false;
              this.nextPageloader = false;

              Vue.$toast.open({
                message: "Unknown Error Occurred!",
                type: "error",
              });
            }
          })
          .catch((err) => {
            this.render = false;
            this.nextPageloader = false;
            console.log(err);
            Vue.$toast.open({
              message: err,
              type: "error",
            });
          });
      }, 500);
      // console.log("data -> ", data);
    },

    previousSearchSubmit() {
      this.render = true;
      setTimeout(() => {
        let filters =
          sessionStorage.getItem("previousFilter") != null
            ? JSON.parse(sessionStorage.getItem("previousFilter"))
            : null;

        if (filters) {
          this.isPreviousFiltersExists = true;
          filters.forEach((x) => {
            // console.log(`previous key - ${x.key} ->`, x.values);
            if (x.key === "age") {
              this.topfilter["ageFrom"] = x.values[0];
              this.topfilter["ageTo"] = x.values[1];
            }
            if (x.key === "miles") {
              this.topfilter["miles"] = x.values[0];
            }
            if (x.key === "zipcode") {
              this.topfilter["zipcode"] = x.values[0];
            }

            this.filters.forEach((y) => {
              if (x.key === y.key) {
                if (x.values.length === y.values.length) {
                  let equal = _.isEqual(x.values, y.values);
                  if (equal) {
                    // console.log("equal");
                  } else {
                    // console.log("not equal !");
                  }
                }
              }
            });
          });

          this.filters = filters;

          let data = {
            uid: this.currentUser.id,
            filters: filters,
            from: this.pageNo,
            lat: this.currentUser.location.latitude,
            lng: this.currentUser.location.longitude,
          };

          axios
            .post(`${apiUrl}/seeking/seeking`, data, { headers })
            .then((res) => {
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
                  // this.length = this.peoples.length;

                  // console.log("this.total -> ", this.total);
                  this.nextPageloader = false;

                  sessionStorage.removeItem("previousFilter");
                  this.isPreviousFiltersExists = false;

                  // console.log("seeking data -> ", this.peoples);
                } else {
                  this.render = false;
                  this.nextPageloader = false;

                  Vue.$toast.open({
                    message: `Error Occurred: ${data.error}`,
                    type: "error",
                  });
                }
              } else {
                this.render = false;
                this.nextPageloader = false;

                Vue.$toast.open({
                  message: "Unknown Error Occurred!",
                  type: "error",
                });
              }
            })
            .catch((err) => {
              this.render = false;
              this.nextPageloader = false;
              console.log(err);
              Vue.$toast.open({
                message: err,
                type: "error",
              });
            });
        } else {
          this.render = false;
        }
      }, 500);
    },
    searchSubmit(filters) {
      this.render = true;

      // let filters = sessionStorage.getItem('previousFilter') != null ? JSON.parse(sessionStorage.getItem('previousFilter')) : null;
      for (var i = 0; i < filters.length; i++) {
        if (typeof filters[i].values == "string") {
          filters[i].values = JSON.parse(filters[i].values);
        }
      }
      // console.log("filters -> ", filters);

      let data = {
        uid: this.currentUser.id,
        filters: filters,
        from: this.pageNo,
        lat: this.currentUser.location.latitude,
        lng: this.currentUser.location.longitude,
      };

      axios
        .post(`${apiUrl}/seeking/seeking`, data, { headers })
        .then((res) => {
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
              // this.length = this.peoples.length;

              // console.log("this.total -> ", this.total);
              this.nextPageloader = false;

              // console.log("seeking data -> ", this.peoples);
            } else {
              this.render = false;
              this.nextPageloader = false;

              Vue.$toast.open({
                message: `Error Occurred: ${data.error}`,
                type: "error",
              });
            }
          } else {
            this.render = false;
            this.nextPageloader = false;

            Vue.$toast.open({
              message: "Unknown Error Occurred!",
              type: "error",
            });
          }
        })
        .catch((err) => {
          this.render = false;
          this.nextPageloader = false;
          console.log(err);
          Vue.$toast.open({
            message: err,
            type: "error",
          });
        });

      // console.log("data -> ", data);
    },
    sort(field) {
      // this.sorted = !this.sorted;

      if (field === "top-picks") {
        this.peoples = _.orderBy(this.peoples, ["toppick"], ["desc"]);
      }

      if (field === "activity") {
        this.peoples = _.orderBy(
          this.peoples,
          ["presence.last_changed"],
          ["desc"]
        );
      }

      if (field === "newest") {
        this.peoples.sort((a, b) => {
          return (
            this.dateToTimestamp(b.created) - this.dateToTimestamp(a.created)
          );
        });
      }

      if (field === "age") {
        this.peoples = _.orderBy(this.peoples, ["age"], ["desc"]);
      }

      if (field === "images") {
        this.peoples = _.orderBy(this.peoples, ["galleryImagesPath"], ["desc"]);
      }

      if (field === "distance") {
        this.peoples = _.orderBy(this.peoples, ["distance"], ["desc"]);
      }

      if (field === "mutual") {
        this.peoples = _.orderBy(this.peoples, ["mutual"], ["asc"]);
      }

      if (field === "reverse") {
        this.peoples = _.orderBy(this.peoples, ["reverse"], ["asc"]);
      }

      // if (!sorted) {
      // this.peoples.sort(function (a, b) {
      //   return (
      //     this.dateToTimestamp(b.created) -
      //     this.dateToTimestamp(a.created)
      //   );
      // });
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
    freePlanLoveNotes() {
      Vue.$toast.default(`Your Plan Does Not Includes Sending Love Notes!`);
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
    saveTopFiltersToDatabase(filters) {
      let body = {
        uid: this.currentUser.id,
        filters: filters,
      };

      axios
        .post(`${apiUrl}/seeking/save-top-filters`, body)
        .then((res) => {
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              // console.log("topfilters saved !");
            } else {
              // Vue.$toast.error(data.error);
              console.log("Data Error! -> ", data.error);
            }
          } else {
            console.log("error -> ", res.data);
          }
        })
        .catch((err) => {
          console.log("err -> ", err);
        });
    },
  },
  computed: {
    ...mapGetters(["currentUser"]),
    getPreviousSearchFilters() {
      let filters =
        sessionStorage.getItem("previousFilter") != null
          ? JSON.parse(sessionStorage.getItem("previousFilter"))
          : null;
      return filters;
    },
    currentUser2() {
      let user = getCurrentUser();
      return user;
    },
    loadData() {
      let data = this.peoples;
      let slicedData = data.slice(0, this.length);
      // console.log("slicedData -> ", slicedData);
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
      sessionStorage.removeItem("previousFilter");
      if (this.currentUser.preferences) {
        // console.log(
        //   "Filters Found From Current User -> ",
        //   this.currentUser.settings.topfilters
        // );
        let user = this.currentUser;

        this.topfilter = {
          ageFrom: this.currentUser.preferences.ageFrom,
          ageTo: this.currentUser.preferences.ageTo,
          miles: this.currentUser.preferences.radius,
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
            values: [this.topfilter.zipcode],
          });
        }
        this.getAllSavedSearches();
        this.filtersRemaining = false;
      } else {
        // console.log("Filters Not Found From Current User -> ");

        // this.topfilter = {
        //   ageFrom: "20",
        //   ageTo: "40",
        //   miles: "60",
        //   gender: this.currentUser.seeking,
        //   zipcode: this.currentUser.Location.zipcode,
        // };

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
            values: [this.currentUser.Location.zipcode],
          });
        }

        this.getAllSavedSearches();
        this.filtersRemaining = false;
      }
    }, 500);
  },
  watch: {
    getPreviousSearchFilters(val) {
      // console.log("new val for getPreviousSearchFilters -> ", val);
    },
    topfilter: {
      deep: true,
      handler(val) {
        this.debouncedTest(val);
        // clearTimeout(topFilterProcessing);
        // const topFilterProcessing = setTimeout(() => {
        // if (this.firstTimeTopFilters) {
        //   this.saveTopFiltersToDatabase(val);
        // }
        // this.firstTimeTopFilters = true;
        // console.log("top filters changed ! -> ", val);
        // this.submit();
        // }, 500);
      },
    },
    filters(newval) {
      console.log("filter changed -> ", newval);
      if (newval) {
        if (newval.length === 0) {
          // console.log("filters new value  -> ", newval);
          this.filtersRemaining = false;
        } else {
          this.filtersRemaining = true;
        }
      }
    },
    visibility: {
      deep: true,
      handler(val) {
        let found = false;
        if (val) {
          let found = false;
          this.filters.filter((x, index) => {
            if (x.key === "visibility") {
              found = true;
              debugger;
              this.filters[index] = {
                key: "visibility",
                values: [val],
              };
            }
          });
          debugger;

          if (!found) {
            this.filters.push({
              key: "visibility",
              values: [val],
            });
          }
        } else {
          this.filters.filter((x, index) => {
            if (x.key === "visibility") {
              this.filters.splice(index, 1);
            }
          });
        }
        this.submit();
      },
    },
    interests: {
      deep: true,
      handler(val, old) {
        // console.log("interests watcher -> ", val);

        for (let key in val) {
          if (val[key].length > 0) {
            // console.log(`${key} -> `, val[key]);
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

              this.submit();
            }
          } else {
            this.filters.filter((x, index) => {
              if (x.key === key) {
                this.filters.splice(index, 1);
              }
            });
          }
        }

        this.submit();
      },
    },
    looks: {
      deep: true,
      handler(val) {
        // console.log("looks watcher -> ", val);

        for (let key in val) {
          if (key === "height") {
            if (val[key].feet && val[key].inches) {
              let found = false;
              // console.log(`Height -> ${val[key].feet} - ${val[key].inches}`);

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
                // console.log("height filter -> ", {
                //   key: `${key}`,
                //   values: [val[key].feet, val[key].inches],
                // });
                this.filters.push({
                  key: `${key}`,
                  values: [val[key].feet, val[key].inches],
                });
              }

              // console.log("filters -> ", this.filters);
            } else {
              this.filters.filter((x, index) => {
                if (x.key === `${key}`) {
                  this.filters.splice(index, 1);
                }
              });
            }
          } else {
            if (val[key].length > 0) {
              // console.log(`${key} -> `, val[key]);
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

        this.submit();
      },
    },
    personal: {
      deep: true,
      handler(val) {
        // console.log("looks watcher -> ", val);

        for (let key in val) {
          if (val[key].length > 0) {
            // console.log(`${key} -> `, val[key]);
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

        this.submit();
      },
    },
    lifestyle: {
      deep: true,
      handler(val) {
        // console.log("lifestyle watcher -> ", val);

        for (let key in val) {
          if (val[key].length > 0) {
            // console.log(`${key} -> `, val[key]);
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

        this.submit();
      },
    },
    search: {
      deep: true,
      handler(val) {
        // console.log("search watcher -> ", val);

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
        this.submit();
      },
    },
  },
  beforeDestroy() {
    this.saveTopFiltersToDatabase(this.topfilters);
  },
};
</script>

<style lang="scss" scoped>
// Global

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

/* .sort-icon-activated {
  background-color: #93652b;
  padding: 0.2rem;
  border-radius: 50%;
} */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
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
  flex-wrap: wrap;
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
  /* cursor: pointer; */
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