<template>
  <div class="login-container">
    <div class="form-side">
      <!--Step - 1 FORM -->
      <div>
        <router-link to="/" class="">
          <b-img src="@/assets/logos/logo.png" class="mt-2" height="80"></b-img>
        </router-link>
        <p class="title mt-4 p-0 m-0">Basic Info</p>
        <p class="subtitle p-0 mt-1">
          Let’s get started by learning more about you!
        </p>

        <b-form class="mt-4 av-tooltip tooltip-label-bottom">
          <vue-perfect-scrollbar
            class="scroll"
            :settings="{ suppressScrollX: true, wheelPropagation: false }"
            ref="chatArea"
          >
            <div class="step-1-container">
              <!-- Profile Name & Government Name -->
              <b-row>
                <b-col lg="6" md="6" sm="12">
                  <b-form-group
                    class="mb-2"
                    label="Profile Name"
                    label-class="field-label"
                  >
                    <b-form-input
                      type="text"
                      class="custom-field"
                      placeholder="Profile Name"
                      v-model="$v.step1.form.profileName.$model"
                      :state="!$v.step1.form.profileName.$error"
                    />
                    <b-form-invalid-feedback
                      v-if="!$v.step1.form.profileName.maxLength"
                      >Profile name should not exceed 20
                      characters</b-form-invalid-feedback
                    >
                    <b-form-invalid-feedback
                      v-if="!$v.step1.form.profileName.required"
                      >Please enter your profile name</b-form-invalid-feedback
                    >
                  </b-form-group>
                </b-col>
                <b-col lg="6" md="6" sm="12">
                  <b-form-group
                    class="mb-2"
                    label="Government Name"
                    label-class="field-label"
                  >
                    <b-form-input
                      type="text"
                      class="custom-field"
                      placeholder="Government Name"
                      v-model="$v.step1.form.governmentName.$model"
                      :state="!$v.step1.form.governmentName.$error"
                    />
                    <b-form-invalid-feedback
                      v-if="!$v.step1.form.governmentName.maxLength"
                      >Government name should not exceed 20
                      characters</b-form-invalid-feedback
                    >
                    <b-form-invalid-feedback
                      v-if="!$v.step1.form.governmentName.required"
                      >Please enter your government
                      name</b-form-invalid-feedback
                    >
                    <template slot="description">
                      <p class="p-0 m-0 text-small text-danger">
                        *Will not be shown to anyone
                      </p>
                    </template>
                  </b-form-group>
                </b-col>
              </b-row>
              <!-- Email & Zipcode -->
              <b-row>
                <b-col lg="6" md="6" sm="12">
                  <!-- Email -->
                  <b-form-group
                    class="mb-2"
                    label="Email"
                    label-class="field-label"
                  >
                    <b-form-input
                      type="text"
                      class="custom-field"
                      placeholder="Email"
                      v-model="$v.step1.form.email.$model"
                      :state="!$v.step1.form.email.$error"
                    />
                    <b-form-invalid-feedback
                      v-if="!$v.step1.form.email.required"
                      >Please enter your email address</b-form-invalid-feedback
                    >
                    <b-form-invalid-feedback
                      v-else-if="!$v.step1.form.email.email"
                      >Please enter a valid email
                      address</b-form-invalid-feedback
                    >

                    <template slot="description">
                      <p class="p-0 m-0 text-small text-danger">
                        *Will not be shown to anyone
                      </p>
                    </template>
                  </b-form-group>
                </b-col>
                <!-- Zip Code -->
                <b-col lg="6" md="6" sm="12">
                  <b-form-group
                    class="mb-2"
                    label="Zipcode"
                    label-class="field-label"
                  >
                    <b-form-input
                      class="custom-field"
                      placeholder="Your Zipcode"
                      type="text"
                      v-model="step1.form.zipcode"
                    />

                    <p
                      class="p-0 m-0 text-small text-danger"
                      v-if="step1.checkZipcode === undefined"
                    >
                      Zipcode Is Invalid
                    </p>
                  </b-form-group>
                </b-col>
              </b-row>
              <!-- Password & confirm password -->
              <b-row>
                <b-col lg="6" md="6" sm="12">
                  <b-form-group
                    class="mb-2"
                    label="Password"
                    label-class="field-label"
                  >
                    <b-form-input
                      class="custom-field"
                      ref="password"
                      placeholder="Password"
                      v-bind:type="step1.showPassword ? 'text' : 'password'"
                      v-model="$v.step1.form.password.$model"
                      :state="!$v.step1.form.password.$error"
                    />
                    <b-form-invalid-feedback
                      v-if="!$v.step1.form.password.required"
                      >Please enter your password</b-form-invalid-feedback
                    >
                    <b-form-invalid-feedback
                      v-else-if="
                        !$v.step1.form.password.minLength ||
                        !$v.step1.form.password.maxLength
                      "
                      >Your password must be more than
                      6</b-form-invalid-feedback
                    >
                  </b-form-group>
                </b-col>
                <b-col lg="6" md="6" sm="12">
                  <b-form-group
                    class="mb-2"
                    label="Confirm Password"
                    label-class="field-label"
                  >
                    <b-form-input
                      class="custom-field"
                      placeholder="Confirm Password"
                      type="password"
                      v-model="step1.form.confirmpassword"
                    />

                    <p
                      class="text-small pl-2 pt-1"
                      v-if="
                        step1.passwordMatched && step1.passwordMatched !== null
                      "
                      :class="{
                        'text-success':
                          step1.passwordMatched &&
                          step1.passwordMatched !== null,
                      }"
                    >
                      Password Matched!
                    </p>
                    <p
                      class="text-small pl-2 pt-1"
                      v-if="
                        !step1.passwordMatched && step1.passwordMatched !== null
                      "
                      :class="{
                        'text-danger':
                          !step1.passwordMatched &&
                          step1.passwordMatched !== null,
                      }"
                    >
                      Password Doesn't Match!
                    </p>
                  </b-form-group>
                </b-col>
              </b-row>

              <!-- Birthday / Height -->
              <b-row>
                <b-col lg="6" md="6" sm="12">
                  <b-form-group
                    class="mb-2"
                    label="Birthday"
                    label-class="field-label"
                  >
                    <!-- <Datepicker
                      id="birthday-picker"
                      input-class="custom-field"
                      format="d MMMM yyyy"
                      placeholder="Select Birthday"
                      :bootstrap-styling="true"
                      v-model="form.birthday"
                    /> -->

                    <b-input-group>
                      <b-form-input
                        class="custom-field-birthday"
                        disabled
                        placeholder="Birthday"
                        v-model="step1.form.birthday"
                      />
                      <b-input-group-append>
                        <b-button
                          variant="primary"
                          class="birthday-btn"
                          @click="step1.openCalender = !step1.openCalender"
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
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </b-button>
                      </b-input-group-append>
                    </b-input-group>

                    <div class="calender" v-if="step1.openCalender">
                      <DatePicker2
                        id="birthday-container"
                        v-model="step1.forwatchbirthday"
                        format="YYYY-MM-DD"
                        :inline="true"
                        default-panel="year"
                        :input-attr="{ name: 'birthday', id: 'birthday' }"
                        placeholder="Your Birthday"
                        type="date"
                      >
                      </DatePicker2>
                    </div>

                    <!-- <VueEnglishdatepicker classValue="datepicker" /> -->

                    <b-form-invalid-feedback
                      v-if="!$v.step1.form.birthday.required"
                      >Birthday Is Required
                    </b-form-invalid-feedback>

                    <p
                      class="text-small pl-2 pt-1"
                      v-if="
                        !step1.birthdayValidate &&
                        step1.birthdayValidate !== null
                      "
                      :class="{
                        'text-danger':
                          !step1.birthdayValidate &&
                          step1.birthdayValidate !== null,
                      }"
                    >
                      Only 18+ can register!
                    </p>
                  </b-form-group>
                </b-col>
                <b-col lg="6" md="6" sm="12">
                  <b-form-group
                    class="mb-2"
                    label="Height"
                    label-class="field-label"
                  >
                    <div class="heights-container">
                      <b-form-input
                        class="custom-field"
                        style="width: 80px !important"
                        type="number"
                        max="7"
                        min="0"
                        id="input-height"
                        placeholder="Ft"
                        @keypress="disableDot"
                        v-model="step1.form.height.feet"
                      ></b-form-input>

                      <b-form-input
                        class="custom-field"
                        style="width: 80px !important"
                        type="number"
                        max="12"
                        min="0"
                        id="input-inche"
                        @keypress="disableDot"
                        placeholder="In"
                        v-model="step1.form.height.inches"
                      ></b-form-input>
                    </div>

                    <b-form-invalid-feedback
                      v-if="!$v.step1.form.height.feet.required"
                      >Height Is Required
                    </b-form-invalid-feedback>
                    <b-form-invalid-feedback
                      v-if="!$v.step1.form.height.feet.required"
                      >Required Is Required
                    </b-form-invalid-feedback>

                    <p
                      v-if="step1.form.height.feet || step1.form.height.inches"
                    >
                      <span v-if="step1.form.height.feet !== 0"
                        >{{ step1.form.height.feet }}ft-{{
                          step1.form.height.inches
                        }}in</span
                      >
                    </p>
                  </b-form-group>
                </b-col>
              </b-row>

              <!-- Phone Number -->
              <b-row>
                <b-col lg="6" md="6" sm="12">
                  <b-form-group
                    class="mb-2"
                    label="Phone"
                    label-class="field-label"
                  >
                    <b-form-input
                      class="custom-field"
                      v-model="$v.step1.form.phone.$model"
                      :state="
                        !$v.step1.form.phone.$error || phoneNumberValidate
                      "
                      type="tel"
                      placeholder="Phone No..."
                    ></b-form-input>
                    <b-form-invalid-feedback
                      v-if="!$v.step1.form.phone.required"
                      >Please enter your phone number</b-form-invalid-feedback
                    >
                    <b-form-invalid-feedback :state="phoneNumberValidate"
                      >Phone number is invalid!</b-form-invalid-feedback
                    >
                    <template slot="description">
                      <p class="p-0 m-0 text-small text-danger">
                        *Will not be shown to anyone
                      </p>
                    </template>
                  </b-form-group>
                </b-col>
              </b-row>
              <!-- I am a "" seeking "" -->
              <b-row>
                <b-col lg="12" md="12" sm="12">
                  <p class="mt-2">
                    I AM A
                    <b-dropdown
                      class="p-0 m-0 mx-2"
                      variant="empty"
                      size="sm"
                      right
                      toggle-class="p-0 header-icon notificationButton"
                      menu-class="m-0 p-2"
                      no-caret
                    >
                      <template slot="button-content">
                        <b-button
                          size="sm"
                          class="seeking-dropdown"
                          variant="primary"
                          >{{
                            step1.form.iAm ? step1.form.iAm : "Select an option"
                          }}</b-button
                        >
                      </template>

                      <b-dropdown-item @click="step1.form.iAm = 'man'"
                        >Man</b-dropdown-item
                      >
                      <b-dropdown-item @click="step1.form.iAm = 'woman'"
                        >Woman</b-dropdown-item
                      >
                    </b-dropdown>
                    <span v-if="this.step1.form.seeking"
                      >SEEKING
                      <span class="seeking-dropdown p-2 text-white">{{
                        this.step1.form.seeking
                      }}</span>
                    </span>
                    <!-- SEEKING
                    <b-dropdown
                      class="p-0 m-0 mx-2"
                      variant="empty"
                      size="sm"
                      right
                      toggle-class="p-0 header-icon notificationButton"
                      menu-class="m-0 p-2"
                      no-caret
                    >
                      <template slot="button-content">
                        <b-button size="sm" class="seeking-dropdown">{{
                          step1.form.iAm
                            ? step1.form.seeking
                            : "Select an option"
                        }}</b-button>
                      </template>
                      <b-dropdown-item @click="step1.form.seeking = 'man'"
                        >Man</b-dropdown-item
                      >
                      <b-dropdown-item @click="step1.form.seeking = 'woman'"
                        >Woman</b-dropdown-item
                      >
                    </b-dropdown> -->
                  </p>
                </b-col>
              </b-row>
            </div>
          </vue-perfect-scrollbar>
        </b-form>
      </div>

      <!-- STEP-1 FORM BUTTON -->
      <b-button
        type="submit"
        @click.prevent="formSubmit1"
        v-if="step1.formFilled"
        variant="primary"
        class="login-btn mt-5 mb-2"
        block
        size="lg"
        :disabled="processing"
        :class="{
          'btn-multiple-state btn-shadow': true,
          'show-spinner': processing,
          'show-success': !processing && loginError === false,
          'show-fail': !processing && loginError,
        }"
      >
        <span class="spinner d-inline-block">
          <span class="bounce1"></span>
          <span class="bounce2"></span>
          <span class="bounce3"></span>
        </span>
        <span class="icon success">
          <i class="simple-icon-check"></i>
        </span>
        <span class="icon fail">
          <i class="simple-icon-exclamation"></i>
        </span>
        <span class="label">Proceed </span>
      </b-button>

      <svg
        class="svg_divider"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        version="1.1"
      >
        <path
          d="M0,0 L100,0 L100,100 L0,100 C66.6666667,83.3333333 100,66.6666667 100,50 C100,33.3333333 66.6666667,16.6666667 0,0 Z"
          fill="currentColor"
        ></path>
      </svg>

      <!-- Step-2 Modal -->
      <b-modal
        id="step2Modal"
        no-close-on-backdrop
        content-class="rounded-lg"
        body-class="rounded-lg"
        size="xl"
        hide-footer
        hide-header
      >
        <div class="registeration-card">
          <div class="icon float-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              @click="closeModal('step2Modal')"
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
          <b-row class="">
            <!-- About Me Info -->
            <b-col class="mb-4" sm="12" md="12" lg="12">
              <h2 class="text-center">More About Me</h2>
            </b-col>
            <!-- Profile Images -->
            <b-col class="mb-4" sm="12" md="4" lg="4">
              <b-form-group label-class="field-class">
                <vue-dropzone
                  ref="profileImages"
                  id="ProfileImages"
                  :duplicateCheck="true"
                  @vdropzone-error="dropzoneError"
                  @vdropzone-file-added="dropzoneFileAddedProfile"
                  @vdropzone-file-added-manually="dropzoneFileAddedProfile"
                  @vdropzone-files-added="dropzoneFilesAddedProfile"
                  @vdropzone-error-multiple="dropzoneErrors"
                  @vdropzone-max-files-reached="dropzoneMaxFileReached"
                  @vdropzone-max-files-exceeded="dropzoneMaxFileExceeded"
                  @vdropzone-duplicate-file="dropzoneDublicateFile"
                  :include-styling="true"
                  :options="step2.profileImageDropzoneOptions"
                ></vue-dropzone>

                <template slot="label">
                  <p>
                    Profile Images*
                    <svg
                      class="refresh-icon"
                      @click="refreshProfileImages"
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
                  </p>
                </template>

                <p class="p-0 m-0 mt-2 text-small">
                  Upload Upto 5 profile image
                </p>
                <p class="p-0 m-0 text-small text-danger">
                  All Images Must Be At least 800x1000 (Width x Height)
                </p>
              </b-form-group>
            </b-col>
            <!-- Gallery Images -->
            <b-col class="mb-4" sm="12" md="8" lg="8">
              <b-form-group label="Gallery Images*" label-class="field-class">
                <!-- :options="dropzoneOptions" -->
                <vue-dropzone
                  ref="galleryImages"
                  id="GalleryImages"
                  :duplicateCheck="true"
                  :include-styling="true"
                  :options="step2.galleryImageDropzoneOptions"
                  @vdropzone-error="dropzoneError"
                  @vdropzone-file-added="dropzoneFileAddedGallery"
                  @vdropzone-file-added-manually="dropzoneFileAddedGallery"
                  @vdropzone-files-added="dropzoneFilesAddedGallery"
                  @vdropzone-error-multiple="dropzoneErrors"
                  @vdropzone-max-files-reached="dropzoneMaxFileReached"
                  @vdropzone-max-files-exceeded="dropzoneMaxFileExceeded"
                  @vdropzone-duplicate-file="dropzoneDublicateFile"
                  @vdropzone-complete="gallery_images_complete"
                ></vue-dropzone>

                <p class="p-0 m-0 mt-2 text-small">Upload 20 gallery images</p>
                <p class="p-0 m-0 text-small text-danger">
                  All Images & Videos Must Be At least 800x1000 (Width x
                  Height)
                </p>

                <template slot="label">
                  <p>
                    Gallery Image*
                    <svg
                      @click="refreshGalleryImages"
                      class="refresh-icon"
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
                  </p>
                </template>
              </b-form-group>
            </b-col>
            <!-- About Me -->
            <b-col class="mb-4" sm="12" md="12" lg="12">
              <b-form-group label="About Me" label-class="field-class">
                <b-form-textarea
                  class="custom-field-textarea"
                  placeholder="You can express your thoughts and requests in this area."
                  v-model="$v.step2.form.aboutMe.$model"
                  :state="!$v.step2.form.aboutMe.$error"
                  rows="6"
                  no-resize
                ></b-form-textarea>
                <p :class="{ 'text-danger': countAboutMe > 600 }">
                  Characters: {{ countAboutMe }} / 600
                  <p>
                    <b class="text-danger">*Attention:</b> These inquiries aren't designed to offend rather, they are meant to be inclusive of the entire Israelite family. These questions identify the doctrine that drive wedges between the scattered members of the Israelite family. They must also be named so that you may screen out any doctrine you don't adhere to.  
                  </b>
                </p>
                <b-form-invalid-feedback v-if="!$v.step2.form.aboutMe.required"
                  >About Me Is Required
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>

            <!-- <div class="fields-container">
             
            </div> -->

            <b-row class="w-100">
              <b-col lg="6" md="6" sm="12">
                <div class="left pl-4">
                  <!-- Marital Status & -->
                  <div>
                    <b-form-group class="mb-2">
                      <label class="field-class">Marital Status</label>
                      <i class="pl-1" v-b-modal.modal-1 variant="dark">
                        <!-- <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="info-icon"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clip-rule="evenodd"
                          /></svg> -->

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Capa_1"
                          x="0px"
                          y="0px"
                          width="14px"
                          height="14px"
                          viewBox="0 0 416.979 416.979"
                          style="enable-background: new 0 0 416.979 416.979"
                          xml:space="preserve"
                        >
                          <g>
                            <path
                              d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85   c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M208.554,334.794   c-11.028,0-19.968-8.939-19.968-19.968s8.939-19.969,19.968-19.969c11.028,0,19.968,8.939,19.968,19.969   C228.521,325.854,219.582,334.794,208.554,334.794z M241.018,214.566c-11.406,6.668-12.381,14.871-12.43,38.508   c-0.003,1.563-0.008,3.14-0.017,4.726c-0.071,11.172-9.147,20.18-20.304,20.18c-0.044,0-0.088,0-0.131,0   c-11.215-0.071-20.248-9.22-20.178-20.436c0.01-1.528,0.013-3.047,0.016-4.552c0.05-24.293,0.111-54.524,32.547-73.484   c26.026-15.214,29.306-25.208,26.254-38.322c-3.586-15.404-17.653-19.396-28.63-18.141c-3.686,0.423-22.069,3.456-22.069,21.642   c0,11.213-9.092,20.306-20.307,20.306c-11.215,0-20.306-9.093-20.306-20.306c0-32.574,23.87-58.065,58.048-61.989   c35.2-4.038,65.125,16.226,72.816,49.282C297.824,181.361,256.555,205.485,241.018,214.566z"
                            />
                          </g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                        </svg>
                      </i>
                      <b-modal
                        id="modal-1"
                        title="Marital Status"
                        ok-only
                        ok-variant="secondary"
                      >
                        <p>
                          <b>Never Married </b>- A person who has never been
                          married or whose marriages have been annulled
                        </p>
                        <p>
                          <b>Currently Separated </b>- You are living apart from your spouse but are still legally married until you receive a judgment of divorce
                        </p>
                        <p>
                          <b>Widowed </b>- A person who has lost their spouse due to death.
                        </p>
                        <p>
                          <b>Divorced </b>- No longer married because the marriage has been legally dissolved.
                        </p>
                        <p><b>Put Away </b>- Discard, Renounce.</p>
                        <p>
                          <b>It's Complicated </b>- Things are no longer simple and straightforward
                        </p>
                        <p>
                          <b>Biblical Polygyny Marriage </b>- Having more than one wife or female mate at the same time is referred to as "polygyny marriage." 
                        </p>
                      </b-modal>
                      <!-- <vue-custom-tooltip
                        position="is-bottom"
                        :multiline="true"
                        label="Never Married - not now or previously married.  Currently Separated - they are not with their spouse, probably not living together either, but the divorce is not complete."
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="info-icon"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </vue-custom-tooltip> -->
                      <br />
                      <b-form-select
                        class="custom-field-test py-2 pr-4"
                        style="width: 170px !important"
                        v-model="step2.form.maritalStatus"
                        :options="step2.maritalStatusOptions"
                      >
                      </b-form-select>
                      <b-form-invalid-feedback
                        v-if="!$v.step2.form.maritalStatus.required"
                        >Marital Status Is Required
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </div>

                  <!-- Living Situation -->
                  <div>
                    <b-form-group
                      class="mb-2"
                      label="Living Situation"
                      label-class="field-label"
                    >
                      <!-- :state="
                            $v.form.livingSituation.$dirty
                              ? !$v.form.livingSituation.$error
                              : null
                          " -->
                      <b-form-select
                        class="custom-field-test py-2 pr-4"
                        style="width: 126px !important"
                        v-model="step2.form.livingSituation"
                        :options="step2.livingSituationOptions"
                      ></b-form-select>
                      <b-form-invalid-feedback
                        v-if="!$v.step2.form.livingSituation.required"
                        >Do You Have Children Is Required
                      </b-form-invalid-feedback>
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
                        style="width: 216px !important"
                        v-model="step2.form.doYouHaveChildren"
                        :options="step2.doYouHaveChildrenOptions"
                      ></b-form-select>
                      <!-- <b-form-invalid-feedback
                            v-if="!$v.form.doYouHaveChildren.required"
                            >Do you have children Is Required
                          </b-form-invalid-feedback> -->
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
                        v-model="step2.form.doYouWantMoreChildren"
                        :options="step2.doYouWantMoreChildrenOptions"
                      ></b-form-select>
                      <b-form-invalid-feedback
                        v-if="!$v.step2.form.doYouWantMoreChildren.required"
                        >This Field Is Required
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </div>

                  <!-- Relationship you are seeking* -->
                  <div>
                    <b-form-group class="mb-2">
                      <label class="field-class" style="width: 100%"
                        >Relationship you're seeking*
                        <i class="pl-1" v-b-modal.modal-2 variant="dark">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="Capa_1"
                            x="0px"
                            y="0px"
                            width="14px"
                            height="14px"
                            viewBox="0 0 416.979 416.979"
                            style="enable-background: new 0 0 416.979 416.979"
                            xml:space="preserve"
                          >
                            <g>
                              <path
                                d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85   c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M208.554,334.794   c-11.028,0-19.968-8.939-19.968-19.968s8.939-19.969,19.968-19.969c11.028,0,19.968,8.939,19.968,19.969   C228.521,325.854,219.582,334.794,208.554,334.794z M241.018,214.566c-11.406,6.668-12.381,14.871-12.43,38.508   c-0.003,1.563-0.008,3.14-0.017,4.726c-0.071,11.172-9.147,20.18-20.304,20.18c-0.044,0-0.088,0-0.131,0   c-11.215-0.071-20.248-9.22-20.178-20.436c0.01-1.528,0.013-3.047,0.016-4.552c0.05-24.293,0.111-54.524,32.547-73.484   c26.026-15.214,29.306-25.208,26.254-38.322c-3.586-15.404-17.653-19.396-28.63-18.141c-3.686,0.423-22.069,3.456-22.069,21.642   c0,11.213-9.092,20.306-20.307,20.306c-11.215,0-20.306-9.093-20.306-20.306c0-32.574,23.87-58.065,58.048-61.989   c35.2-4.038,65.125,16.226,72.816,49.282C297.824,181.361,256.555,205.485,241.018,214.566z"
                              />
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                          </svg>
                        </i>
                      </label>

                      <b-modal
                        id="modal-2"
                        title="Relationship you're seeking*"
                        ok-only
                        ok-variant="secondary"
                      >
                        <p>
                          <b>Spouse </b>- A husband or wife, considered in
                          relation to their partner.
                        </p>
                        <p>
                          <b>Community </b>- A group of people living in the
                          same place or having a particular characteristic in
                          common.
                        </p>
                        <p>
                          <b>Sister Wife </b>- (In a polygyny society) a woman
                          who is simultaneously the sister and co-wife of
                          another.
                        </p>
                        <p>
                          <b>Friendship </b>- The emotions or conduct of
                          friends; the state of being friends.
                        </p>
                        <p>
                          <b>Study Partner </b>- Someone with whom you study
                          alongside, offering mutual support and discussing
                          concepts.
                        </p>
                        <p>
                          <b>My Polygyny Family Is Available For Courtship </b>-
                            Poly family is seeking sister wifes
                        </p>
                        <p>
                          <b>Biblical Concubine </b>- A woman who cohabits with a man as a wife but uses the Israelite Ketubah instead of a state license. 
                        </p>
                        <!-- <p><b>Nonworking wife </b>- To manage home affairs</p>
                        <p>
                          <b>Working Wife </b>- Wife that works outside the home
                        </p>
                        <p>
                          <b>Husband </b>- Allows the wife to run the business
                        </p> -->
                      </b-modal>
                      <b-form-select
                        class="custom-field-test relationshipSeekingField py-2"
                        v-model="step2.form.relationshipIAmSeeking"
                        :options="step2.relationshipIAmSeekingOptions"
                      ></b-form-select>

                      <b-form-invalid-feedback
                        v-if="!$v.step2.form.relationshipIAmSeeking.required"
                        >Relationship you are looking for Is Required
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </div>
                </div>
              </b-col>
              <b-col lg="6" md="6" sm="12">
                <div class="right pl-4">
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
                        v-model="step2.form.bodyType"
                        :options="step2.bodyTypeOptions"
                      >
                      </b-form-select>

                      <b-form-invalid-feedback
                        v-if="!$v.step2.form.bodyType.required"
                        >Body Type Is Required
                      </b-form-invalid-feedback>
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
                        v-model="step2.form.howOftenDoYouExercise"
                        :options="step2.howOftenDoYouExerciseOptions"
                      ></b-form-select>

                      <b-form-invalid-feedback
                        v-if="!$v.step2.form.howOftenDoYouExercise.required"
                        >How Often Do You Exercise Is Required
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </div>
                  <!--Have Pets  -->
                  <div class="">
                    <b-form-group label="Have Pets" label-class="field-class">
                      <b-form-select
                        class="custom-field-test py-2"
                        style="width: 125px !important"
                        v-model="step2.form.havePets"
                        :options="step2.havePetsOptions"
                      ></b-form-select>

                      <!-- <b-form-invalid-feedback
                            v-if="!$v.form.havePets.required"
                            >Relationship i am seeking Is Required
                          </b-form-invalid-feedback> -->

                      <b-form-input
                        class="custom-field mt-2"
                        type="text"
                        v-if="step2.form.havePets === 'Others'"
                        v-model="step2.form.havePetsOthers"
                      ></b-form-input>
                    </b-form-group>
                  </div>

                  <!-- Do you drink?  -->
                  <div class="">
                    <b-form-group
                      label="Do You Drink?*"
                      label-class="field-class"
                    >
                      <b-form-select
                        class="custom-field-test py-2"
                        style="width: 148px !important"
                        v-model="step2.form.doYouDrink"
                        :options="step2.doYouDrinkOptions"
                      ></b-form-select>

                      <b-form-invalid-feedback
                        v-if="!$v.step2.form.doYouDrink.required"
                        >About Me Is Required
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </div>

                  <!-- Do You Smoke -->
                  <div class="">
                    <b-form-group
                      label="Do You Smoke?*"
                      label-class="field-class"
                    >
                      <b-form-select
                        class="custom-field-test py-2"
                        style="width: 142px !important"
                        v-model="step2.form.doYouSmoke"
                        :options="step2.doYouSmokeOptions"
                      ></b-form-select>

                      <b-form-invalid-feedback
                        v-if="!$v.step2.form.doYouSmoke.required"
                        >Do you smoke Is Required
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </div>

                  <!-- Employment Status -->
                  <div class="">
                    <b-form-group
                      label="Employment Status"
                      label-class="field-class"
                    >
                      <!-- :options="employmentStatusOptions" -->
                      <!-- <b-form-input
                              class="custom-field"
                              v-model="form.employmentStatus"
                              placeholder="e.g Job Title"
                            ></b-form-input> -->

                      <b-form-select
                        class="custom-field-test py-2"
                        style="width: 122px !important"
                        v-model="step2.form.employmentStatus"
                        :options="step2.employmentStatusOptions"
                      ></b-form-select>

                      <b-form-invalid-feedback
                        v-if="!$v.step2.form.employmentStatus.required"
                        >Employment Status Is Required
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </div>

                  <!-- Willing to relocate  -->
                  <div class="">
                    <b-form-group
                      label="Willing To Relocate*"
                      label-class="field-class"
                    >
                      <b-form-select
                        class="custom-field-test py-2"
                        style="width: 212px"
                        v-model="step2.form.willingToRelocate"
                        :options="step2.willingToRelocateOptions"
                      ></b-form-select>

                      <b-form-invalid-feedback
                        v-if="!$v.step2.form.willingToRelocate.required"
                        >Willing To Relocate Is Required
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </div>
                </div>
              </b-col>
            </b-row>

            <!-- Submit Button -->
            <b-col class="mb-4" sm="12" md="12" lg="12">
              <div class="continue-section">
                <!-- Back Button -->

                <b-button class="add-btn" @click="closeModal('step2Modal')">
                  <svg
                    baseProfile="tiny"
                    height="24px"
                    id="Layer_1"
                    version="1.2"
                    viewBox="0 0 24 24"
                    width="24px"
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      d="M12,9.059V6.5c0-0.256-0.098-0.512-0.293-0.708C11.512,5.597,11.256,5.5,11,5.5s-0.512,0.097-0.707,0.292L4,12l6.293,6.207  C10.488,18.402,10.744,18.5,11,18.5s0.512-0.098,0.707-0.293S12,17.755,12,17.5v-2.489c2.75,0.068,5.755,0.566,8,3.989v-1  C20,13.367,16.5,9.557,12,9.059z"
                    />
                  </svg>
                </b-button>
                <!-- <p class="m-0 p-0">
                  ALREADY HAVE AN ACCOUNT ?
                  <b-link to="/user/login">LOG IN</b-link>
                </p> -->

                <!-- formSubmit2 -->
                <!-- testImageUploads -->
                <!-- testImage -->
                <!-- Continue Button -->
                <b-button class="add-btn" @click="formSubmit2"
                  ><svg
                    baseProfile="tiny"
                    height="24px"
                    id="Layer_1"
                    version="1.2"
                    viewBox="0 0 24 24"
                    width="24px"
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      d="M13,5.499c-0.256,0-0.512,0.097-0.707,0.292C12.098,5.987,12,6.243,12,6.499v2.559c-4.5,0.498-8,4.309-8,8.941v1  c2.245-3.423,5.25-3.92,8-3.989v2.489c0,0.255,0.098,0.512,0.293,0.707s0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293L20,11.999  l-6.293-6.208C13.512,5.596,13.256,5.499,13,5.499z"
                    /></svg
                ></b-button>
              </div>
            </b-col>

            <!-- <div class="bottom-section">
              <p>
                ALREADY HAVE AN ACCOUNT ?
                <b-link to="/user/login">LOG IN</b-link>
              </p>
            </div> -->
          </b-row>
        </div>
      </b-modal>

      <!-- Step-3 Modal -->
      <b-modal
        id="step3Modal"
        no-close-on-backdrop
        content-class="rounded-lg"
        body-class="rounded-lg"
        size="xl"
        hide-footer
        hide-header
      >
        <div class="registeration-card">
          <b-overlay :show="step3.loader">
            <template #overlay>
              <GridLoader
                class="custom-class"
                color="#93652b"
                :loading="step3.loader"
                :size="10"
                sizeUnit="px"
              />
            </template>

            <div class="icon float-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                @click="closeModal('step3Modal')"
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
            <b-row class="h-100">
              <!-- Isrealite Filters -->
              <b-col class="mb-4" xxs="12" md="12" lg="12">
                <h2 class="text-center">Israelite Filters</h2>
              </b-col>

              <!-- Lifestyle -->
              <b-col class="mb-4" xxs="12" md="12" lg="12">
                <h3 class="text-center">Lifestyle</h3>
              </b-col>

              <b-row class="w-100">
                <b-col lg="6" md="6" sm="12">
                  <div class="left pl-4">
                    <div class="">
                      <!-- I believe I am  -->
                      <b-form-group class="mb-2">
                        <label class="field-class" style="width: 100%"
                          >I Believe I Am*
                          <i class="pl-1" v-b-modal.modal-3 variant="dark">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              version="1.1"
                              id="Capa_1"
                              x="0px"
                              y="0px"
                              width="14px"
                              height="14px"
                              viewBox="0 0 416.979 416.979"
                              style="enable-background: new 0 0 416.979 416.979"
                              xml:space="preserve"
                            >
                              <g>
                                <path
                                  d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85   c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M208.554,334.794   c-11.028,0-19.968-8.939-19.968-19.968s8.939-19.969,19.968-19.969c11.028,0,19.968,8.939,19.968,19.969   C228.521,325.854,219.582,334.794,208.554,334.794z M241.018,214.566c-11.406,6.668-12.381,14.871-12.43,38.508   c-0.003,1.563-0.008,3.14-0.017,4.726c-0.071,11.172-9.147,20.18-20.304,20.18c-0.044,0-0.088,0-0.131,0   c-11.215-0.071-20.248-9.22-20.178-20.436c0.01-1.528,0.013-3.047,0.016-4.552c0.05-24.293,0.111-54.524,32.547-73.484   c26.026-15.214,29.306-25.208,26.254-38.322c-3.586-15.404-17.653-19.396-28.63-18.141c-3.686,0.423-22.069,3.456-22.069,21.642   c0,11.213-9.092,20.306-20.307,20.306c-11.215,0-20.306-9.093-20.306-20.306c0-32.574,23.87-58.065,58.048-61.989   c35.2-4.038,65.125,16.226,72.816,49.282C297.824,181.361,256.555,205.485,241.018,214.566z"
                                />
                              </g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                            </svg>
                          </i>
                        </label>
                        <b-modal
                          id="modal-3"
                          title="I Believe I Am*"
                          ok-only
                          ok-variant="secondary"
                        >
                          <p>
                            <b>I am a Diaspora Israelite</b> - Or exile is the
                            dispersion of <b>Israelites</b> out of their ancient
                            ancestral homeland via Trans Atlantic Slave Trade
                          </p>
                          <p>
                            <b>Grafted in</b> -  Gentiles who have committed to keeping Yah's laws, statutes, and commandments and inheriting the blessings of God's salvation are grafted in.
                          </p>
                          <p>
                            <b>I believe I am of The 12 Tribes</b> - Belief  in the 12 tribes chart generally promoted by camps
                          </p>
                          <p>
                            <b>Of the Northern Tribes</b> - The northern kingdom of Israel, including the territories of the 10 northern tribes 
                          </p>
                          <p>
                            <b>Of the Southern Tribes</b> - Judah, and part of Benjamin
                          </p>
                        </b-modal>
                        <b-form-select
                          class="custom-field-test py-2"
                          style="width: 185px !important"
                          v-model="step3.form.iBelieveIAM"
                          :options="step3.iBelieveIAMOptions"
                        ></b-form-select>
                      </b-form-group>
                    </div>

                    <div class="">
                      <!-- Years In Truth -->
                      <b-form-group label="Years In Truth?*">
                        <b-form-select
                          class="custom-field-test py-2"
                          style="width: 90px !important"
                          v-model="step3.form.yearsInTruth"
                          :options="step3.yearsInTruthOptions"
                        ></b-form-select>
                      </b-form-group>
                    </div>

                    <div class="">
                      <!-- Spiritual Values   -->
                      <b-form-group>
                        <label class="field-class">Spiritual Values* </label>
                        <i class="pl-1" v-b-modal.modal-4 variant="dark">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="Capa_1"
                            x="0px"
                            y="0px"
                            width="14px"
                            height="14px"
                            viewBox="0 0 416.979 416.979"
                            style="enable-background: new 0 0 416.979 416.979"
                            xml:space="preserve"
                          >
                            <g>
                              <path
                                d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85   c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M208.554,334.794   c-11.028,0-19.968-8.939-19.968-19.968s8.939-19.969,19.968-19.969c11.028,0,19.968,8.939,19.968,19.969   C228.521,325.854,219.582,334.794,208.554,334.794z M241.018,214.566c-11.406,6.668-12.381,14.871-12.43,38.508   c-0.003,1.563-0.008,3.14-0.017,4.726c-0.071,11.172-9.147,20.18-20.304,20.18c-0.044,0-0.088,0-0.131,0   c-11.215-0.071-20.248-9.22-20.178-20.436c0.01-1.528,0.013-3.047,0.016-4.552c0.05-24.293,0.111-54.524,32.547-73.484   c26.026-15.214,29.306-25.208,26.254-38.322c-3.586-15.404-17.653-19.396-28.63-18.141c-3.686,0.423-22.069,3.456-22.069,21.642   c0,11.213-9.092,20.306-20.307,20.306c-11.215,0-20.306-9.093-20.306-20.306c0-32.574,23.87-58.065,58.048-61.989   c35.2-4.038,65.125,16.226,72.816,49.282C297.824,181.361,256.555,205.485,241.018,214.566z"
                              />
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                          </svg>
                        </i>
                        <br />
                        <b-modal
                          id="modal-4"
                          title="Spiritual Values*"
                          ok-only
                          ok-variant="secondary"
                        >
                          <p>
                            <b>Messianic </b>- Belief in the person of Yeshua as the Messiah and that he died in atonement for the sins of mankind.
                          </p>
                          <p>
                            <b>Non-Messianic </b>- The term used to describe the traditionalist and theologically conservative branches of Israelites who do not accept Yeshua as the Messiah but rather as a prophet. 
                          </p>
                        </b-modal>
                        <b-form-select
                          class="custom-field-test py-2"
                          style="width: 115px !important"
                          v-model="step3.form.spiritualValue"
                          :options="step3.spiritualValueOptions"
                        ></b-form-select>
                      </b-form-group>
                    </div>

                    <div class="">
                      <!-- Marital Belief System  -->
                      <b-form-group>
                        <label class="field-class"
                          >Marital Belief System*
                        </label>
                        <i class="pl-1" v-b-modal.modal-5 variant="dark">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="Capa_1"
                            x="0px"
                            y="0px"
                            width="14px"
                            height="14px"
                            viewBox="0 0 416.979 416.979"
                            style="enable-background: new 0 0 416.979 416.979"
                            xml:space="preserve"
                          >
                            <g>
                              <path
                                d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85   c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M208.554,334.794   c-11.028,0-19.968-8.939-19.968-19.968s8.939-19.969,19.968-19.969c11.028,0,19.968,8.939,19.968,19.969   C228.521,325.854,219.582,334.794,208.554,334.794z M241.018,214.566c-11.406,6.668-12.381,14.871-12.43,38.508   c-0.003,1.563-0.008,3.14-0.017,4.726c-0.071,11.172-9.147,20.18-20.304,20.18c-0.044,0-0.088,0-0.131,0   c-11.215-0.071-20.248-9.22-20.178-20.436c0.01-1.528,0.013-3.047,0.016-4.552c0.05-24.293,0.111-54.524,32.547-73.484   c26.026-15.214,29.306-25.208,26.254-38.322c-3.586-15.404-17.653-19.396-28.63-18.141c-3.686,0.423-22.069,3.456-22.069,21.642   c0,11.213-9.092,20.306-20.307,20.306c-11.215,0-20.306-9.093-20.306-20.306c0-32.574,23.87-58.065,58.048-61.989   c35.2-4.038,65.125,16.226,72.816,49.282C297.824,181.361,256.555,205.485,241.018,214.566z"
                              />
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                          </svg>
                        </i>
                        <br />
                        <b-modal
                          id="modal-5"
                          title="Marital Belief System*"
                          ok-only
                          ok-variant="secondary"
                        >
                          <p>
                            <b>Monogamy </b>- Is the practice or state of marrying only one person at a time.
                          </p>
                          <p>
                            <b>Polygyny </b>- Where one man is married and provides headship covering to several women.
                          </p>
                          <p>
                            <b>Still on the fence </b>- Personally has not made the decision whether to be a monogamist or polygamist.
                          </p>
                          <p>
                            <b>I believe in Polygyny but don’t practice it </b>- I feel it is lawful, but I don’t feel it is right for me at the moment.
                          </p>
                        </b-modal>
                        <b-form-select
                          class="custom-field-test py-2"
                          style="width: 245px !important"
                          v-model="step3.form.maritalBeliefSystem"
                          :options="step3.maritalBeliefSystemOptions"
                        ></b-form-select>
                      </b-form-group>
                    </div>

                    <div class="">
                      <!-- Any Affiliations -->
                      <b-form-group label="Any Affiliations">
                        <b-form-select
                          class="custom-field-test py-2"
                          style="width: 223px !important"
                          v-model="step3.form.anyAffiliation"
                          :options="step3.anyAffiliationOptions"
                        ></b-form-select>
                      </b-form-group>
                    </div>

                    <!-- Camp Member Dropdown -->
                    <div v-if="step3.campMemberSelected">
                      <b-form-group label="Camp Member Options">
                        <b-form-select
                          class="custom-field-test py-2"
                          style="width: 118px !important"
                          v-model="step3.campMember"
                          :options="step3.campMemberOptions"
                        ></b-form-select>
                      </b-form-group>
                    </div>
                  </div>
                </b-col>
                <b-col lg="6" md="6" sm="12">
                  <div class="right pl-4">
                    <div class="">
                      <!-- Study Habits -->
                      <b-form-group label="Study Habits">
                        <b-form-select
                          class="custom-field-test studyHabitsField py-2"
                          v-model="step3.form.studyHabits"
                          :options="step3.studyHabitsOptions"
                        ></b-form-select>
                      </b-form-group>
                    </div>

                    <div class="">
                      <!-- Study Bible -->
                      <b-form-group label="Study Bible">
                        <b-form-select
                          class="custom-field-test py-2"
                          style="width: 188px !important"
                          v-model="step3.form.studyBible"
                          :options="step3.studyBibleOptions"
                        ></b-form-select>
                      </b-form-group>
                    </div>

                    <div class="">
                      <!--Spiritual Background -->
                      <b-form-group label="Spiritual Background">
                        <b-form-select
                          class="custom-field-test py-2"
                          style="width: 210px !important"
                          v-model="step3.form.spiritualBackground"
                          :options="step3.spiritualBackgroundOptions"
                        ></b-form-select>
                      </b-form-group>
                    </div>
                  </div>
                </b-col>
              </b-row>

              <!-- Values -->
              <b-col class="mb-4" xxs="12" md="12" lg="12">
                <h3 class="text-center">Values</h3>
              </b-col>
              <b-col class="mb-4" xxs="12" md="6" lg="6">
                <!-- Israelites Practice Keeping   -->
                <b-form-group
                  label="Israelites Practice Keeping*"
                  v-slot="{ ariaDescribedby }"
                >
                  <b-form-checkbox-group
                    id="isrealitePracticeKeeping-group-"
                    v-model="step3.form.isrealitePracticeKeeping"
                    :options="step3.isrealitePracticeKeepingOptions"
                    name="isrealitePracticeKeeping"
                    :aria-describedby="ariaDescribedby"
                  ></b-form-checkbox-group>
                </b-form-group>
              </b-col>
              <b-col class="mb-4" xxs="12" md="6" lg="6">
                <div class="fields-container">
                  <div class="">
                    <b-form-group label="Passions">
                      <b-button
                        class="add-btn"
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
                          <b-badge
                            class="passion-tag"
                            variant="empty"
                            pill
                            v-for="(tag, index) in step3.passionsTags"
                            :class="{
                              selected:
                                step3.form.selectedPassions.indexOf(tag) !== -1,
                            }"
                            :key="index"
                            @click="selectTag(tag)"
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
                      Passions Selected: ({{ countSelectedCount }}/6)
                    </p>
                  </div>
                  <div class="">
                    <b-form-group label="Kingdom Gifts">
                      <b-button
                        class="add-btn"
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
                              selected:
                                step3.form.selectedkingdomGiftsTags.indexOf(
                                  tag
                                ) !== -1,
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
                        'text-info': countSelectedKingdomGiftsCount < 10,
                      }"
                    >
                      Kingdom Gifts Selected: ({{
                        countSelectedKingdomGiftsCount
                      }}/10)
                    </p>
                  </div>
                </div>
              </b-col>

              <!-- Submit Button -->
              <b-col class="mb-4" xxs="12" md="12" lg="12">
                <div class="continue-section">
                  <b-button
                    class="add-btn"
                    @click="closeModal('step3Modal'), openModal('step2Modal')"
                    ><svg
                      baseProfile="tiny"
                      height="24px"
                      id="Layer_1"
                      version="1.2"
                      viewBox="0 0 24 24"
                      width="24px"
                      xml:space="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <path
                        d="M12,9.059V6.5c0-0.256-0.098-0.512-0.293-0.708C11.512,5.597,11.256,5.5,11,5.5s-0.512,0.097-0.707,0.292L4,12l6.293,6.207  C10.488,18.402,10.744,18.5,11,18.5s0.512-0.098,0.707-0.293S12,17.755,12,17.5v-2.489c2.75,0.068,5.755,0.566,8,3.989v-1  C20,13.367,16.5,9.557,12,9.059z"
                      /></svg
                  ></b-button>
                  <!-- <p class="m-0 p-0">
                  ALREADY HAVE AN ACCOUNT ?
                  <b-link to="/user/login">LOG IN</b-link>
                </p> -->
                  <b-button class="add-btn" @click="Process_form">
                    Create an Account
                  </b-button>
                </div>
              </b-col>

              <!-- <div class="bottom-section">
              
            </div> -->
            </b-row>
          </b-overlay>
        </div>
      </b-modal>

      <!-- OTP popup -->
      <b-modal
        id="otpModal"
        no-close-on-backdrop
        content-class="rounded-lg"
        body-class="rounded-lg"
        size="lg"
        hide-footer
        hide-header
      >
        <b-overlay class="p-2" :show="otpLoader">
          <template #overlay>
            <GridLoader
              class="custom-class"
              color="#93652b"
              :loading="otpLoader"
              :size="10"
              sizeUnit="px"
            />
          </template>

          <div class="icon float-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              @click="closeModal('otpModal')"
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

          <!-- Heading -->
          <p class="title text-center">Phone Verification</p>

          <div class="mt-5" v-if="!otpVerified">
            <otp-input
              v-model="userToken"
              class="otp-fields-container"
              :length="4"
              pattern="[^0-9]+"
              :ignorePattern="false"
              fieldClass="otp-field"
              :size="32"
              @valid="isTokenComplete"
              :disabled="false"
            />
          </div>

          <p class="text-center" v-if="!otpVerified && !otpSentAgain">
            Didn't get OTP?
            <b-link class="text-center" @click="resendOtp">Resend OTP</b-link>
          </p>

          <p class="text-center" v-if="!otpVerified && !otpSentAgain">
            OTP has been sent to your phone!
          </p>

          <div class="mt-5 d-flex justify-content-center align-items-center">
            <b-button
              class="custom-btn-1"
              v-if="!otpVerified"
              @click="verifyOtp"
              >Verify</b-button
            >
          </div>
        </b-overlay>

        <div class="otp-success" v-if="otpVerified">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="45"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>

          <p>OTP has been verified successfully!</p>
          <div class="mt-5 d-flex justify-content-center align-items-center">
            <b-button class="custom-btn-1" @click="closeModal('otpModal')"
              >Proceed</b-button
            >
          </div>
        </div>
      </b-modal>

      <!-- Email OTP popup -->
      <b-modal
        id="emailOtpModal"
        no-close-on-backdrop
        content-class="rounded-lg"
        body-class="rounded-lg"
        size="lg"
        hide-footer
        hide-header
      >
        <b-overlay class="p-2" :show="emailOtpLoader">
          <template #overlay>
            <GridLoader
              class="custom-class"
              color="#93652b"
              :loading="emailOtpLoader"
              :size="10"
              sizeUnit="px"
            />
          </template>

          <div class="close-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              @click="closeModal('emailOtpModal')"
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

          <!-- Heading -->
          <p class="title text-center">Email Verification</p>

          <div class="mt-5" v-if="!emailOtpVerified">
            <otp-input
              v-model="emailOtpToken"
              class="otp-fields-container"
              :length="4"
              pattern="[^0-9]+"
              :ignorePattern="false"
              fieldClass="otp-field"
              :size="32"
              @valid="isTokenComplete"
              :disabled="false"
            />
          </div>

          <p class="text-center" v-if="!emailOtpVerified && !emailOtpSentAgain">
            Didn't get Email?
            <b-link class="text-center" @click="resendEmailOtp"
              >Resend Email</b-link
            >
          </p>

          <p class="text-center" v-if="!otpVerified && !otpSentAgain">
            OTP has been sent to your email!
          </p>

          <div class="mt-5 d-flex justify-content-center align-items-center">
            <b-button
              class="custom-btn-1"
              v-if="!emailOtpVerified"
              @click="verifyEmailOtp"
              >Verify</b-button
            >
          </div>
        </b-overlay>

        <div class="otp-success" v-if="emailOtpVerified">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="45"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>

          <p>OTP has been verified successfully!</p>
          <div class="mt-5 d-flex justify-content-center align-items-center">
            <b-button class="custom-btn-1" @click="closeModal('otpModal')"
              >Proceed</b-button
            >
          </div>
        </div>
      </b-modal>
    </div>

    <div class="right-side">
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <video autoplay loop muted>
        <source src="@/assets/Qavah Promo Final.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <!-- <video ref="videoPlayer" class="video-js"></video> -->
    </div>
  </div>
</template>

<script>
import OTPInput from "@8bu/vue-otp-input";
import "@8bu/vue-otp-input/";
import { mapGetters, mapActions } from "vuex";
import { localeOptions, headers } from "../../constants/config";
import { validationMixin } from "vuelidate";
import { adminRoot, apiUrl } from "../../constants/config";
import DatePicker2 from "vue2-datepicker";
import "vue2-datepicker/index.css";
import axios from "axios";
import Swal from "sweetalert2";
import moment from "moment";
import VueDropzone from "vue2-dropzone";
import cities from "cities";
import { GridLoader } from "@saeris/vue-spinners";

import Dropzone from "dropzone";
Dropzone.autoDiscover = false;

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

const {
  required,
  maxLength,
  minLength,
  email,
  sameAs,
} = require("vuelidate/lib/validators");

import {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
  validatePhoneNumberLength,
} from "libphonenumber-js";

import Vue from "vue";
import firebase from "firebase/app";
import "firebase/storage";

export default {
  components: {
    DatePicker2,
    "otp-input": OTPInput,
    "vue-dropzone": VueDropzone,
    GridLoader,
  },
  data() {
    return {
      imageResizeTest: {
        hasImage: false,
      },
      player: null,
      videoOptions: {
        autoplay: true,
        controls: true,
        sources: [
          {
            src: "@/assets/Qavah Promo Final.mp4",
            type: "video/mp4",
          },
        ],
      },
      userToken: "",
      otpSentAgain: false,
      otpLoader: false,
      otpVerified: false,
      emailOtpVerified: false,
      emailOtpSentAgain: false,
      emailOtpLoader: false,
      emailOtpToken: "",
      loading: true,
      step1: {
        checkZipcode: null,
        genders: [
          { text: "Man", value: "man" },
          { text: "Woman", value: "woman" },
          { text: "More", value: "more" },
        ],
        selectedgender: "",
        genderChecked: [],
        showMeChecked: [],
        showMeOptions: [
          { text: "Man", value: "man" },
          { text: "Woman", value: "woman" },
          { text: "More", value: "more" },
        ],
        date: new Date(),
        openCalender: false,
        passwordMatched: null,
        forwatchbirthday: "",
        birthdayValidate: null,
        showPassword: false,
        slide: 0,
        sliding: null,
        form: {
          profileName: "",
          governmentName: "",
          phone: "",
          email: "",
          password: "",
          confirmpassword: "",
          birthday: "",
          height: {
            feet: "0",
            inches: "0",
          },
          iAm: null,
          seeking: null,
          zipcode: "",
          location: null,
        },
        formFilled: false,
        watchformFilled: false,
      },
      step2: {
        profileImageDropzoneOptions: {
          url: `${apiUrl}/user/profile_files_upload`,
          // paramName: "profile-image",
          thumbnailWidth: 200,
          maxFilesize: 3,
          acceptedFiles: "image/*",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Cache-Control": null,
            "X-Requested-With": null,
          },
          //autoProcessQueue:false,
          previewTemplate: this.dropzoneTemplate(),
          addRemoveLinks: true,
          maxFiles: "5",
          clickable: true,
        },
        galleryImageDropzoneOptions: {
          url: `${apiUrl}/user/gallery_files_upload`,
          thumbnailWidth: 200,
          maxFilesize: 15,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Cache-Control": null,
            "X-Requested-With": null,
          },
          //autoProcessQueue:false,
          previewTemplate: this.dropzoneTemplate(),
          addRemoveLinks: true,
          maxFiles: "20",
          clickable: true,
          acceptedFiles: "image/*,video/*",
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
            text: "Biblical Polygyny Marriage",
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
            text: "My Polygyny Family Is Available For Courtship",
            value: "My poly family is available for courtship",
          },
          {
            text: "Biblical Concubine",
            value: "Concubine",
          },
          // {
          //   text: "Non working wife - to manage home affairs",
          //   value: "Non working wife - to manage home affairs",
          // },
          // {
          //   text: "Working wife",
          //   value: "Working wife",
          // },
          // {
          //   text: "Husband - allows me to run business",
          //   value: "Husband - allows me to run business",
          // },
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
        profileImages: [],
        profileImagesLength: [],
        galleryImages: [],
        profileImagesLength: [],
        profileImageDropzone: null,
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
          profileImages: [],
          galleryImages: [],
        },
      },
      step3: {
        loader: false,
        selectedShowMe: [],
        showMeChecked: [],
        localeOptions,
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
          // {
          //   text: "Women don’t wear pants",
          //   value: "Women don’t wear pants",
          // },
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
          // {
          //   text: "I submit to my spouse in Yah as head",
          //   value: "I submit to my spouse in Yah as head",
          // },
          // {
          //   text: "I service and provide for my household buck stops with me",
          //   value: "I service and provide for my household buck stops with me",
          // },
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
      localeOptions,
    };
  },
  mixins: [validationMixin],
  validations: {
    step1: {
      form: {
        profileName: {
          required,
          maxLength: maxLength(20),
        },
        governmentName: {
          required,
          maxLength: maxLength(20),
        },
        phone: {
          required,
        },
        email: {
          required,
          email,
        },
        password: {
          required,
          minLength: minLength(6),
        },
        birthday: {
          required,
        },
        height: {
          feet: {
            required,
          },
          inches: {
            required,
          },
        },
        iAm: {
          required,
        },
      },
      zipcode: { required },
    },
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
  computed: {
    ...mapGetters(["currentUser", "processing", "loginError"]),
    countSelectedCount() {
      return this.step3.form.selectedPassions.length;
    },
    countSelectedKingdomGiftsCount() {
      return this.step3.form.selectedkingdomGiftsTags.length;
    },
    countAboutMe() {
      if (this.step2.form.aboutMe !== "") {
        return this.step2.form.aboutMe.length;
      } else {
        return 0;
      }
    },
    phoneNumberValidate() {
      let phone = this.step1.form.phone;

      if (phone === "" || phone === null) {
        return null;
      } else if (isValidPhoneNumber(phone, "US")) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    setImage(output) {
      console.log("output _> ", output);
    },
    startImageResize() {},
    endImageResize() {},
    ...mapActions(["login", "setLang"]),
    checkGallery() {
      console.log("test gallery images -> ", this.step2.form.testgallery);

      if (this.step2.form.testgallery.length > 0) {
        const storageRef = firebase.storage().ref();

        // 'file' comes from the Blob or File API
        storageRef
          .child(`${this.step2.form.testgallery[0].name}`)
          .put(this.step2.form.testgallery[0])
          .then((snapshot) => {
            console.log("Uploaded a blob or file!");
          });
      }
    },
    Process_form() {
      //this.step3.loader = true;
      try {
        this.$v.step3.form.$touch();
        if (this.$v.step3.form.$invalid) {
          console.log("this.$v.form -> ", this.$v.form);
          this.step3.loader = false;
          Vue.$toast.open({
            message: "Please Complete All Required Fields!",
            type: "error",
          });
        } else {
          if (this.step3.form.selectedPassions.length > 6) {
            this.step3.loader = false;

            Vue.$toast.open({
              message: "Please Select Passions Upto 6",
              type: "error",
            });
          } else if (this.step3.form.selectedkingdomGiftsTags.length > 10) {
            this.step3.loader = false;

            Vue.$toast.open({
              message: "Please Select Kingdom Gifts Upto 10",
              type: "error",
            });
          } else {
            // const storageRef = firebase.storage().ref();
            const acceptedProfileImages = this.step2.profileImages;
            const acceptedGalleryImages = this.step2.galleryImages;
            this.step2.form.profileImages = [];
            const promises = [];
            if (this.step2.profileImagesLength > 0) {
              acceptedProfileImages.forEach((image, index) => {
                var imageobj = JSON.parse(image.xhr.response);
                this.step2.form.profileImages.push({
                  index: index,
                  url: imageobj.imagename,
                  name: imageobj.name,
                  thumbnails: imageobj.thumbnails,
                  web_url: imageobj.web_url,
                });
              });
              if (acceptedGalleryImages.length > 0) {
                this.uploadGalleryImages();
              } else {
                console.log("No Gallery Image Found!");
                this.formSubmit3();
              }
            } else {
              Vue.$toast.error("No Profile Image Found!");
            }
          }
        }
      } catch (err) {
        console.log("Profile Images Upload Err -> ", err);
      }
    },
    uploadGalleryImages() {
      //const storageRef = firebase.storage().ref();
      const acceptedGalleryImages = this.step2.galleryImages;
      this.step2.form.galleryImages = [];
      if (acceptedGalleryImages.length > 0) {
        acceptedGalleryImages.forEach((image, index) => {
          var imageobj = JSON.parse(image.xhr.response);
          this.step2.form.galleryImages.push({
            index: index,
            url: imageobj.imagename,
            name: imageobj.name,
            thumbnails: imageobj.thumbnails,
            web_url: imageobj.web_url,
            type: imageobj.type,
          });
        });
        this.formSubmit3();
      } else {
        this.formSubmit3();
      }
    },
    watchUploadProgress(totaluploadprogress, totalBytes, totalBytesSent) {
      console.log("totaluploadprogress -> ", totaluploadprogress);
      console.log("totalBytes -> ", totalBytes);
      console.log("totalBytesSent -> ", totalBytesSent);
    },
    phonenumber(inputtxt) {
      var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if (inputtxt.match(phoneno)) {
        return true;
      } else {
        return false;
      }
    },
    telephoneCheck(str) {
      var isphone =
        /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(
          str
        );

      if (isphone) {
        return true;
      } else {
        return false;
      }
    },
    refreshProfileImages() {
      this.$refs.profileImages.removeAllFiles(true);
    },
    refreshGalleryImages() {
      this.$refs.galleryImages.removeAllFiles(true);
    },
    dropzoneError(file, message, xhr) {
      // Toast.fire({
      //   icon: "danger",
      //   title: message,
      // });
      Vue.$toast.open({
        message: message,
        type: "error",
        // all of other options may go here
      });
    },
    gallery_images_complete(file) {
      //;
    },

    dropzoneErrors(files, message, xhr) {
      // Toast.fire({
      //   icon: "danger",
      //   title: message,
      // });s

      Vue.$toast.open({
        message: message,
        type: "error",
        // all of other options may go here
      });
    },
    dropzoneMaxFileReached(file) {
      Vue.$toast.open({
        message: "Max Files Reached",
        type: "warning",
      });
    },
    dropzoneMaxFileExceeded(file) {
      Vue.$toast.open({
        message: "Max Files Limit Exceeded!",
        type: "error",
        // all of other options may go here
      });
    },
    dropzoneDublicateFile(file) {
      Vue.$toast.open({
        message: "Uploaded File Already Exists!",
        type: "error",
        // all of other options may go here
        position: "top-right",
      });
    },
    dropzoneFileAddedProfile(file) {},
    async resizeImageTry(file) {
      try {
        const imageResize = new ImageResize();
        let res = await imageResize
          .updateOptions({ width: 800, height: 1000 })
          .play(file);
        // var blob = await this.dataURItoBlob(res);
        return res;
        console.log("image resizing -> ", res);
      } catch (err) {
        console.error(err);
      }
    },
    dataURItoBlob(dataURI) {
      "use strict";
      var byteString, mimestring;

      if (dataURI.split(",")[0].indexOf("base64") !== -1) {
        byteString = atob(dataURI.split(",")[1]);
      } else {
        byteString = decodeURI(dataURI.split(",")[1]);
      }

      mimestring = dataURI.split(",")[0].split(":")[1].split(";")[0];

      var content = new Array();
      for (var i = 0; i < byteString.length; i++) {
        content[i] = byteString.charCodeAt(i);
      }

      return new Blob([new Uint8Array(content)], { type: mimestring });
    },
    dropzoneFilesAddedProfile(files) {
      setTimeout(() => {
        for (let key in files) {
          let width = files[key].width;
          let height = files[key].height;

          console.log("files added to dropzone -> ", files);
        }
      }, 500);
    },
    dropzoneFileAddedGallery(file) {},
    dropzoneFilesAddedGallery(files) {},
    formSubmit1() {
      // Check Email Address First
      let checkEmailBody = {
        email: this.step1.form.email,
      };

      axios
        .post(`${apiUrl}/auth/check-email-registered`, checkEmailBody)
        .then((checkEmailResponse) => {
          const checkEmailData = checkEmailResponse.data;

          if (checkEmailData.status) {
            // Validate Confirm Password

            console.log("birthday raw -> ", this.step1.forwatchbirthday);

            if (this.step1.form.iAm === "woman") {
              this.step1.form.seeking = "man";
            } else {
              this.step1.form.seeking = "woman";
            }

            let data = {
              ...this.step1.form,
            };

            this.$v.step1.form.$touch();
            if (this.$v.step1.form.$invalid) {
              console.log("this.$v -> ", this.$v.step1.form);
              console.log("this.$v.$invalid -> ", this.$v.step1.form.$invalid);
              Toast.fire({
                icon: "error",
                title: "Please Complete All Required Fields",
              });
            } else {
              if (
                this.step1.checkZipcode === undefined ||
                this.step1.checkZipcode === null
              ) {
                Toast.fire({
                  icon: "error",
                  title: "You must provide a valid zipcode",
                });
              } else {
                if (this.step1.birthdayValidate) {
                  console.log("Form Validated");
                  console.log({
                    ...data,
                  });

                  this.openModal("step2Modal");
                } else {
                  Toast.fire({
                    title: "Only 18+ can register!",
                    icon: "error",
                  });
                }
              }
            }
          } else {
            Toast.fire({
              icon: "error",
              title:
                "This email is already registered! Please change the email.",
            });
          }
        })
        .catch((err) => {
          Vue.$toast.error(`${err}`);
        });
    },
    formSubmit2() {
      let acceptedProfileImages = this.$refs.profileImages.getAcceptedFiles();
      let acceptedGalleryImages = this.$refs.galleryImages.getAcceptedFiles();

      let profileImageremoveIndex = false;
      let galleryImageremoveIndex = false;

      for (let key in acceptedProfileImages) {
        // console.log('acceptedProfileImages -> ',acceptedProfileImages[key])

        if (acceptedProfileImages[key].status !== "success") {
          // console.log('unsuccessfull!')
          profileImageremoveIndex = key;
        }
      }

      for (let key in acceptedGalleryImages) {
        // console.log('acceptedGalleryImages -> ',acceptedGalleryImages[key])

        if (acceptedGalleryImages[key].status !== "success") {
          // console.log('unsuccessfull!')
          galleryImageremoveIndex = key;
        }
      }

      if (profileImageremoveIndex !== false) {
        acceptedProfileImages.splice(profileImageremoveIndex);
      }
      if (galleryImageremoveIndex !== false) {
        acceptedGalleryImages.splice(galleryImageremoveIndex);
      }

      console.log("acceptedProfileImages -> ", acceptedProfileImages);
      console.log("acceptedGalleryImages -> ", acceptedGalleryImages);

      if (acceptedGalleryImages.length > 20) {
        Toast.fire({
          icon: "error",
          title: "You can upload upto 20 gallery images!",
        });
      } else {
        if (
          acceptedProfileImages.length > 0 &&
          acceptedGalleryImages.length > 0
        ) {
          this.$v.step2.form.$touch();
          if (this.$v.step2.form.$invalid) {
            console.log("this.$v.form -> ", this.$v.step2.form);
            Toast.fire({
              icon: "error",
              title: "Please Complete All Required Fields",
            });
          } else {
            let data = {
              ...this.step2.form,
              profileImages: acceptedProfileImages,
              galleryImages: acceptedGalleryImages,
            };

            console.log("accepted -> ", acceptedProfileImages);

            this.step2.profileImages = acceptedProfileImages;
            this.step2.profileImagesLength = acceptedProfileImages.length;
            this.step2.galleryImages = acceptedGalleryImages;
            this.step2.galleryImagesLength = acceptedGalleryImages.length;

            console.log(
              "this.step2.profileImages -> ",
              this.step2.profileImages
            );

            // console.log({
            //   ...data,
            // });

            // sessionStorage.setItem("step-2", JSON.stringify(data));
            this.closeModal("step2Modal");
            this.openModal("step3Modal");
            // this.$router.push("/user/register-step-3");
          }
        } else {
          Vue.$toast.error(
            `You have to upload atleast 1 profile image and 1 gallery image!`
          );
        }
      }
    },
    formSubmit3() {
      let data = {
        step1: { ...this.step1.form, location: this.step1.checkZipcode },
        step2: {
          ...this.step2.form,
        },
        step3: {
          ...this.step3.form,
        },
      };
      axios
        .post(`${apiUrl}/auth/register`, data)
        .then((res) => {
          console.log("res -> ", res);
          const resp = res.data;
          if (res.status === 200) {
            debugger;
            // this.setRegisteredUser(data);
            if (resp.status) {
              this.step3.loader = false;
              Vue.$toast.open({
                message: "User has been registered successfully!",
              });
              let abc = data;
              this.login({
                email: data.step1.email,
                password: data.step1.password,
              });
              this.$router.push("/dashboard");
            } else {
              Vue.$toast.error({
                message: `Error Occurred: ${data.error}`,
              });
              this.step3.loader = false;
            }
          } else {
            Vue.$toast.open({
              message: `Error Occurred: ${data.error}`,
            });
            this.step3.loader = false;
          }

          // this.$router.push("/app");
        })
        // .then(() => {
        //       location.reload();
        // })
        .catch((err) => {
          console.log(err);

          this.step3.loader = false;
          Vue.$toast.error({
            message: `Error Occurred: ${err}`,
          });
        });
    },
    verifyOtp() {
      let body = {
        otp: this.userToken,
      };
      current_token = currentToken;
      this.otpLoader = true;

      debugger;
      // axios
      //   .post(`${apiUrl}/auth/verify-otp`, body,{headers})
      //   .then((res) => {
      //     console.log("res -> ", res);
      //     const data = res.data;
      //     if (res.status === 200) {
      //       if (data.status) {
      //         (this.otpLoader = false), (this.otpVerified = true);

      //         Vue.$toast.open({
      //           message: "You have been registered successfully!",
      //           type: "success",
      //         });

      //         this.closeModal("otpModal");
      //         this.openModal("emailOtpModal");

      //         // this.$router.push("/user/login");
      //       } else {
      //         (this.otpLoader = false), (this.otpVerified = false);
      //         Vue.$toast.open({
      //           message: `Error Occurred: ${data.error}`,
      //           type: "error",
      //         });
      //       }
      //     } else {
      //       (this.otpLoader = false), (this.otpVerified = false);
      //       Vue.$toast.open({
      //         message: "Unknown Error Occurred!",
      //         type: "error",
      //       });
      //     }
      //   })
      //   .catch((err) => {
      //     (this.otpLoader = false), (this.otpVerified = false);
      //     console.log(err);

      //     Vue.$toast.open({
      //       message: err,
      //       type: "error",
      //     });
      //   });
    },
    resendOtp() {
      let body = {
        email: this.step1.form.email,
      };
      this.otpLoader = true;
      axios
        .post(`${apiUrl}/auth/resend-otp`, body)
        .then((res) => {
          console.log("res -> ", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              this.otpLoader = false;

              Vue.$toast.open({
                message: "Otp has been sent!",
                type: "success",
                position: "right",
              });

              this.otpSentAgain = true;
            } else {
              (this.otpLoader = false), (this.otpVerified = false);
              Vue.$toast.open({
                message: `Error Occurred: ${data.error}`,
                type: "error",
                position: "top",
              });
            }
          } else {
            (this.otpLoader = false), (this.otpVerified = false);
            Vue.$toast.open({
              message: "Unknown Error Occurred!",
              type: "error",
              position: "top",
            });
          }
        })
        .catch((err) => {
          (this.otpLoader = false), (this.otpVerified = false);
          console.log(err);

          Vue.$toast.open({
            message: err,
            type: "error",
            // all of other options may go here
            position: "top",
          });
        });
    },
    verifyEmailOtp() {
      let body = {
        otp: this.emailOtpToken,
      };

      this.emailOtpLoader = true;

      axios
        .post(`${apiUrl}/auth/verify-email-otp`, body)
        .then((res) => {
          console.log("res -> ", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              (this.emailOtpLoader = false), (this.emailOtpVerified = true);

              Vue.$toast.open({
                message:
                  "You have been registered successfully! You can now proceed to login",
                type: "success",
              });

              this.closeModal("emailOtpModal");
              this.$router.push(`/user/login`);
              // this.openModal("emailOtpModal");

              // this.$router.push("/user/login");
            } else {
              (this.emailOtpLoader = false), (this.emailOtpVerified = false);
              Vue.$toast.open({
                message: `Error Occurred: ${data.error}`,
                type: "error",
              });
            }
          } else {
            (this.emailOtpLoader = false), (this.emailOtpVerified = false);
            Vue.$toast.open({
              message: "Unknown Error Occurred!",
              type: "error",
            });
          }
        })
        .catch((err) => {
          (this.emailOtpLoader = false), (this.emailOtpVerified = false);
          console.log(err);

          Vue.$toast.open({
            message: err,
            type: "error",
          });
        });
    },
    resendEmailOtp() {
      let body = {
        email: this.step1.form.email,
      };

      this.emailOtpLoader = true;

      axios
        .post(`${apiUrl}/auth/resend-email-otp`, body)
        .then((res) => {
          console.log("res -> ", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              this.emailOtpLoader = false;

              Vue.$toast.open({
                message: "Otp email has been sent!",
                type: "success",
                position: "right",
              });

              this.emailOtpSentAgain = true;
            } else {
              (this.otpLoader = false), (this.emailOtpVerified = false);
              Vue.$toast.open({
                message: `Error Occurred: ${data.error}`,
                type: "error",
                position: "top",
              });
            }
          } else {
            (this.emailOtpVerified = false), (this.emailOtpVerified = false);
            Vue.$toast.open({
              message: "Unknown Error Occurred!",
              type: "error",
              position: "top",
            });
          }
        })
        .catch((err) => {
          (this.emailOtpLoader = false), (this.emailOtpVerified = false);
          console.log(err);

          Vue.$toast.error(`${err}`);
        });
    },
    changeLocale(locale, direction) {
      // const currentDirection = getDirection().direction;
      // if (direction !== currentDirection) {
      //   setDirection(direction);
      let body = {
        otp: this.userToken,
      };

      this.otpLoader = true;

      axios
        .post(`${apiUrl}/auth/verify-otp`, body)
        .then((res) => {
          console.log("res -> ", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              (this.otpLoader = false), (this.otpVerified = true);
              Vue.$toast.open({
                message: "User has been registered successfully!",
                type: "success",
                position: "right",
              });
              this.$router.push("/user/login");
            } else {
              (this.otpLoader = false), (this.otpVerified = false);
              Vue.$toast.open({
                message: `Error Occurred: ${data.error}`,
                type: "error",
                position: "top",
              });
            }
          } else {
            (this.otpLoader = false), (this.otpVerified = false);
            Vue.$toast.open({
              message: "Unknown Error Occurred!",
              type: "error",
              position: "top",
            });
          }
        })
        .catch((err) => {
          (this.otpLoader = false), (this.otpVerified = false);
          console.log(err);

          Vue.$toast.open({
            message: err,
            type: "error",
            // all of other options may go here
            position: "top",
          });
        });

      this.setLang(locale);
    },
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    openModal(id) {
      this.$bvModal.show(id);
    },
    closeModal(id) {
      this.$bvModal.hide(id);
    },
    checkGenderButton(i) {
      const index = this.genderChecked.indexOf(i);
      console.log("this.genders -> ", this.genders[i]);
      if (index === -1) {
        this.genderChecked.splice(0);
        this.genderChecked.push(i);
        this.selectedgender = this.genders[i].value;
      } else {
        this.genderChecked.splice(index, 1);
        this.selectedgender = "";
      }
    },
    checkShowMeButton(i) {
      const index = this.showMeChecked.indexOf(i);

      if (index === -1) {
        this.showMeChecked.splice(0);
        this.showMeChecked.push(i);
        this.selectedShowMe = this.showMeOptions[i].value;
      } else {
        this.showMeChecked.splice(index, 1);
        this.selectedShowMe = "";
      }
    },
    selectTag(i) {
      const index = this.step3.form.selectedPassions.indexOf(i);
      if (index === -1) {
        if (this.countSelectedCount >= 6) {
          Toast.fire({
            icon: "warning",
            title: "You have selected maximum passions",
          });
        } else {
          this.step3.form.selectedPassions.push(i);
        }
      } else {
        this.step3.form.selectedPassions.splice(index, 1);
      }
    },
    disableDot(e) {
      e.preventDefault();
    },
    selectKingdomGiftsTag(tag) {
      const index = this.step3.form.selectedkingdomGiftsTags.indexOf(tag);
      if (index === -1) {
        if (this.countSelectedKingdomGiftsCount >= 10) {
          Toast.fire({
            icon: "warning",
            title: "You have selected maximum kingdom gifts",
          });
        } else {
          this.step3.form.selectedkingdomGiftsTags.push(tag);
        }
      } else {
        this.step3.form.selectedkingdomGiftsTags.splice(index, 1);
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
    // OTP Methods
    isTokenComplete(isValid) {
      console.log("isValid -> ", isValid);
    },
    resizeImage() {
      var filesToUploads = document.getElementById("imageFile").files;
      var file = filesToUploads[0];
      if (file) {
        var reader = new FileReader();

        // Set the image for the FileReader
        reader.onload = function (e) {
          var img = document.createElement("img");
          img.src = e.target.result;

          // Create your canvas
          var canvas = document.createElement("canvas");
          var ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);

          var MAX_WIDTH = 500;
          var MAX_HEIGHT = 500;
          var width = img.width;
          var height = img.height;

          // Add the resizing logic
          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }

          //Specify the resizing result
          canvas.width = width;
          canvas.height = height;
          var ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);

          dataurl = canvas.toDataURL(file.type);
          document.getElementById("output").src = dataurl;
        };
        reader.readAsDataURL(file);
      }
    },
  },
  watch: {
    "step1.form.confirmpassword"(newval) {
      if (newval !== "") {
        if (newval === this.step1.form.password) {
          this.step1.passwordMatched = true;
        } else {
          this.step1.passwordMatched = false;
        }
      } else {
        this.step1.passwordMatched = null;
      }
    },
    "step1.form.zipcode"(val) {
      if (val.length === 5) {
        const check = cities.zip_lookup(this.step1.form.zipcode);
        this.step1.checkZipcode = check;
        console.log("check -> ", check);
      }
    },
    currentUser(val) {
      if (val && val.uid && val.uid.length > 0) {
        setTimeout(() => {
          this.$router.push("/dashboard");
        }, 200);
      }
    },
    loginError(val) {
      if (val != null) {
        this.$notify("error", "Login Error", val, {
          duration: 3000,
          permanent: false,
        });
      }
    },
    "step2.form.profileImages"(newval) {
      if (newval) {
        console.log("Got Profile Image Uploaded -> ", newval);
      }
    },
    "step2.form.galleryImages"(newval) {
      if (newval) {
        console.log(
          "this.step2.galleryImagesLength -> ",
          this.step2.galleryImagesLength
        );
        if (newval.length === this.step2.galleryImagesLength) {
          // this.formSubmit3();
        }
      }
    },
    "step1.forwatchbirthday"(newval) {
      if (newval !== "" && newval !== null) {
        this.step1.openCalender = false;
        let format = new Date(newval);

        console.log("format _> ", format);

        let formatted = format.toISOString().split("T")[0];

        this.step1.form.birthday = formatted;
        let now = new Date();
        let currentYear = now.getFullYear();
        console.log("currentYear -> ", currentYear);
        let selectedYear = formatted.split("-")[0];
        console.log("selectedYear -> ", selectedYear);
        let difference = Math.abs(
          parseInt(selectedYear) - parseInt(currentYear)
        );
        console.log("difference -> ", difference);

        if (difference >= 18) {
          this.step1.birthdayValidate = true;
        } else {
          this.step1.birthdayValidate = false;
        }
      }
    },
    "step1.form.iAm"(newval) {
      if (newval) {
        if (this.step1.form.iAm === "woman") {
          this.step1.form.seeking = "man";
        } else {
          this.step1.form.seeking = "woman";
        }
      }
    },
    "step1.form": {
      handler(val) {
        // do stuff
        if (
          val.profileName !== "" &&
          val.governmentName !== "" &&
          val.email !== "" &&
          val.password !== "" &&
          val.confirmpassword !== "" &&
          val.zipcode !== "" &&
          val.phone !== "" &&
          val.birthday !== "" &&
          val.height.feet !== 0 &&
          val.height.inches !== 0 &&
          val.height.feet <= 7 &&
          val.height.inches <= 12 &&
          val.height.feet >= 4 &&
          val.height.inches >= 0 &&
          val.iAm !== "" &&
          val.iAm !== null
        ) {
          this.step1.formFilled = true;
        } else {
          this.step1.formFilled = false;
        }
      },
      deep: true,
    },
    "step3.form.anyAffiliation"(newval) {
      if (newval !== "") {
        if (newval === "I am a member of a camp or group") {
          this.step3.campMemberSelected = true;
        } else {
          this.step3.campMemberSelected = false;
        }
      }
    },
    "step3.form.selectedPassions"(newval) {
      if (newval) {
        if (newval.length > 0) {
          // console.log("newval -> ", newval);
        }
      }
    },
  },

  mounted() {
    //this.openModal("step3Modal");
    // let profileImageDropzone = new Dropzone("#ProfileImagesField", {
    //   url: "https://httpbin.org/post",
    // });
    // profileImageDropzone.options.profileImageDropzone = {
    //   paramName: "profile-image",
    //   thumbnailWidth: 200,
    //   maxFilesize: 3,
    //   acceptedFiles: "image/*",
    //   parallelUploads: 5,
    //   previewTemplate: this.dropzoneTemplate(),
    //   addRemoveLinks: true,
    //   maxFiles: "5",
    //   resizeMethod: "contain",
    //   resizeQuality: 0.8,
    //   resizeWidth: 1000,
    //   resizeHeight: 800,
    //   ignoreHiddenFiles: true,
    //   clickable: true,
    // };
    // this.profileImageDropzone = profileImageDropzone;
    // console.log("myDropzone -> ", profileImageDropzone);
    // profileImageDropzone.on("addedfile", (file) => {
    //   this.dropzoneFileAddedProfile(file);
    // });
    // profileImageDropzone.on("addedfile", (file) => {
    //   this.dropzoneFileAddedProfile(file);
    // });
    // this.openModal("otpModal");
    // this.openModal("emailOtpModal");
  },
  beforeDestroy() {
    // if (this.player) {
    //   this.player.dispose();
    // }
  },
};
</script>

<style scoped >
/* Global Classes */
.close-icon {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.close-icon:hover {
  cursor: pointer;
}

/* Mobile Screen Classes */
@media only screen and (max-width: 800px) {
  .login-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .form-side {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* padding-top: 2rem; */
    background-color: #fff;
    border-radius: 20px;
    min-width: 80%;
    position: relative;
    /* align-items: center; */
  }

  .right-side {
    display: none;
  }

  .svg_divider {
    display: none;
  }

  .step-1-container {
    padding: 0.8rem;
    height: 50vh;
  }

  .custom-field-test {
    width: 100px;
  }

  .relationshipSeekingField {
    width: 100px !important;
  }

  .studyHabitsField {
    width: 100px !important;
  }
}

/* Laptop Screen Classes */
@media only screen and (min-width: 800px) {
  .relationshipSeekingField {
    width: 265px !important;
  }
  .studyHabitsField {
    width: 312px !important;
  }
  .login-container {
    display: flex;
    flex-direction: row;
    height: 100vh;
  }
  .form-side {
    /* width: 100%; */
    /* height: 100%; */
    padding: 0rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* padding-top: 2rem; */
    background-color: #fff;
    border-radius: -15px;
    min-width: 40%;
    position: relative;
    /* align-items: center; */
  }

  .right-side {
    width: 100%;
    height: 100%;
    background: transparent;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .svg_divider {
    position: absolute;
    height: 100%;
    width: 60px;
    top: 0;
    left: 100%;
    transform: rotate(180deg);
    z-index: 2;
    color: #fff;
  }

  .step-1-container {
    padding: 0.8rem;
    height: calc(100vh - 306px);
  }
}

.refresh-icon {
  display: inline;
  stroke: #93652b;
  transition: all ease 0.5s;
}

.refresh-icon:hover {
  cursor: pointer;
  stroke: #ac854e;
}

.remove-icon:hover {
  cursor: pointer;
}

.left {
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.right {
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.otp-success {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.otp-success svg {
  height: 128px;
  fill: #93652b;
}

.otp-success p {
  font-size: 1.2rem;
}

.heights-container {
  display: flex;
  gap: 0.5rem;
  width: 100%;
}

.fields-container {
  padding: 0 1rem;
  display: flex;
  gap: 1rem;
  flex-direction: row;
  flex-wrap: wrap;
}

.bottom-section {
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 25px;
}

.subtitle {
  margin-top: 1.5rem !important;
  margin-left: 1px !important;
}

.birthday-btn {
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  background-color: #ac854e;
  outline: none;
  border: none;
}

.seeking-dropdown {
  background-color: #ac854e;
  outline: none;
  border: none;
  font-size: 12px;
  border-radius: 25px;
}

.custom-field-test {
  border-radius: 25px !important;
  height: 35px !important;
  border-color: #93652b !important;
  outline: none;
  font-size: 10px !important;
}

.mx-datepicker {
  display: block !important;
  /* width: 100% !important; */
}

.calender {
  position: absolute;
  top: 40px;
  left: 0;
  z-index: 99999;
}

#birthday {
  /* width: 100%; */
  height: 45px !important;
  font-size: 14px;
  line-height: 1.4;
  border: 1px solid #93652b !important;
  border-radius: 15px !important;
}

.mx-input:hover,
.mx-input:focus {
  border-color: #93652b !important;
}

#carousel-1 .carousal-images {
  height: 100vh;
}

#language-selection {
  position: absolute;
  top: 0;
  right: 0;
}

.right-side .area {
  background: #e1e1e1;
  /* background: -webkit-linear-gradient(to left, #fdba74, #e2e8f0); */
  width: 100%;
  height: 100%;
  position: absolute;
  /* z-index: 0; */
}

.right-side .circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.right-side .circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(112, 60, 8, 0.9);
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.right-side .circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.right-side .circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.right-side .circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.right-side .circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.right-side .circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.right-side .circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.right-side .circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.right-side .circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.right-side .circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.right-side .circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}

.right-side video {
  /* height: 100vh; */
  width: 100%;
  z-index: 0;
  /* max-width:80vw; */
}

.login-btn {
  background-color: #93652b;
  outline: none;
  border: none;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 14px;
  border-radius: 25px;
}

.login-btn:hover {
  background-color: #b69873;
}

.title {
  font-size: 2rem;
  line-height: 1;
  /* font-weight: bold; */
}

.subtitle {
  font-size: 1rem;
}

.social-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
}

.custom-field {
  border-radius: 25px !important;
  height: 35px !important;
  border-color: #93652b !important;
  padding: 15px !important;
  font-size: 10px;
}

.custom-field-birthday {
  border-top-left-radius: 25px !important;
  border-bottom-left-radius: 25px !important;
  height: 35px !important;
  padding: 15px !important;
  border-color: #93652b !important;
  font-size: 10px;
}

.registeration-card .icon svg {
  transition: all ease 0.5s;
}

.registeration-card .icon svg:hover {
  stroke: #93652b;
  transform: scale(110%);
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

/* Step 2  */
.field-class {
  font-size: 12px !important;
}

#ProfileImages {
  border-color: #93652b !important;
  border-radius: 25px !important;
}

#ProfileImagesField {
  border-color: #93652b !important;
  border-radius: 25px !important;
}

#GalleryImages {
  border-color: #93652b !important;
  border-radius: 25px !important;
}

.dz-preview {
  border-color: #93652b !important;
}

.custom-field-textarea {
  border-radius: 25px !important;
  border-color: #93652b !important;
  outline: none;
  font-size: 10px;
}

/* Step 3 */

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

.add-btn svg {
  fill: #fff;
  stroke: #fff;
}

.add-btn:hover {
  background-color: #ac854e !important;
  transform: scale(105%);
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
  transition: all ease 0.5s;
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

.continue-section {
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
