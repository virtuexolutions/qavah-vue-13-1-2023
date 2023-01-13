<template>
  <div class="spotlight-page">
    <div class="header">
      <h2 class="text-primary mt-4">Expand your courtship toolbox</h2>
      <!-- <p class="m-0 p-0">
        Qavah, an Israelite Diaspora Courting Site For Us and By Us
      </p> -->
    </div>

    <b-row class="mt-4">
      <b-col lg="8" md="8" sm="12">
        <b-tabs class="my-4" pills align="center" card>
          <b-tab class="p-0" title="Qavah Platinum" active>
            <b-card
              no-body
              class="premium-section rounded-lg"
              v-if="
                check_if_subscription_exist('platinum') &&
                check_if_subscription_exist('gold') &&
                check_if_subscription_exist('month_to_month')
              "
            >
              <div class="price-card-container mt-4">
                <template v-for="item in packages.platinum">
                  <b-card class="mb-4 price-card" no-body>
                    <b-badge
                      v-if="item.most_popular == 1"
                      variant="primary"
                      pill
                      >Most Popular</b-badge
                    >
                    <p class="p-0 m-0 months section-1">
                      {{ item.title }}
                    </p>

                    <!-- <p class="m-0 p-0 save section-3"></p> -->
                    <p class="m-0 p-0 price section-2">
                      <span class="per-month" v-html="item.description"> </span>
                      <!-- <span>$19.99</span> -->
                      <!-- <span>$239.88</span> -->
                    </p>

                    <div class="buttons section-4">
                      <b-button
                        @click="
                          proceed(item.id, item.type, item.price, item.title)
                        "
                      >
                        Buy Now
                      </b-button>
                      <!-- <b-button variant="empty"> Learn More </b-button> -->
                    </div>
                  </b-card>
                </template>
              </div>
              <b-row class="">
                <b-col lg="8" md="12" sm="12">
                  <h5 class="mb-4">
                    Platinum plans include full access to these great features:
                  </h5>

                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="tick"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Love Notes
                  </p>

                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="tick"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Unlimited Fancys
                  </p>

                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="tick"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Sojourn Pass
                  </p>

                  <!-- <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="tick"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Prestige
                  </p> -->

                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="tick"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Super Fancys
                  </p>

                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="tick"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Exclusive
                  </p>

                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="tick"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Discrete Mode
                  </p>

                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="tick"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Spotlight Me 4 per month
                  </p>

                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="tick"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Unlimited (rewinds) of Say Whats
                  </p>

                  <!-- <p>
                    Plus, the option to pay in
                    <b-link @click="openModal('welcomeModal')"
                      >4 stress-free installments.
                    </b-link>
                  </p> -->
                </b-col>
                <!-- <b-col lg="4" md="6" sm="12">
                  <b-button class="custom-btn-1" to="/dashboard/subscribeaddons"
                    >Continue</b-button
                  >
                </b-col> -->
              </b-row>
            </b-card>
            <b-card class="text-center" v-else>
              <h1 class="fw-bolder">Already Subscribed</h1>
            </b-card>
          </b-tab>
          <!-- Qavah gold -->
          <b-tab class="p-0" title="Qavah Gold">
            <b-card
              no-body
              class="standard-section rounded-lg"
              v-if="
                check_if_subscription_exist('platinum') &&
                check_if_subscription_exist('gold') &&
                check_if_subscription_exist('month_to_month')
              "
            >
              <div class="price-card-container mt-4">
                <p>
                  Unfortunately, the Qavah gold plan does not have a buy now,
                  pay later program; this feature is offered only on the best
                  value Qavah Platinum Plan. Platinum not only includes all the
                  premium features but also allows for low monthly installments.
                </p>
                <template v-for="item in packages.gold">
                  <!-- 3 Cards Row -->
                  <b-card class="mb-4 price-card" no-body>
                    <b-badge
                      v-if="item.most_popular == 1"
                      variant="primary"
                      pill
                      >Most Popular</b-badge
                    >
                    <p class="p-0 m-0 months section-1">
                      {{ item.title }}
                    </p>
                    <p
                      class="m-0 p-0 price section-2"
                      v-html="item.description"
                    >
                      <!-- <span class="per-month">One Time</span>
                    <span>$216.00</span> -->
                      <!-- <span class="per-month">Per Month</span>
                    <span>$18.00</span> -->
                    </p>
                    <p class="m-0 p-0 save section-3"></p>

                    <div class="buttons section-4">
                      <b-button
                        @click="
                          proceed(item.id, item.type, item.price, item.title)
                        "
                      >
                        Buy Now
                      </b-button>
                      <!-- <b-button variant="empty">Learn More</b-button> -->
                    </div>
                  </b-card>
                </template>
              </div>
              <!-- Points For Platinum -->
              <b-row>
                <b-col lg="8" md="12" sm="12">
                  <h5 class="mb-4">
                    These platinum features are not included in the gold plan:
                  </h5>

                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="tick"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Sojourn
                  </p>
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="tick"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Say what?
                  </p>

                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="tick"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Messaging
                  </p>

                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="tick"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Fancys
                  </p>

                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="tick"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Super Fancys 4 per month
                  </p>

                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="tick"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Spotlight Me 4 per month
                  </p>
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="tick"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Read Receipts
                  </p>

                  <!-- <p>
                    Plus, the option to pay in
                    <b-link @click="openModal('welcomeModal')"
                      >4 stress-free installments.
                    </b-link>
                  </p> -->
                </b-col>
              </b-row>
            </b-card>
            <b-card class="text-center" v-else>
              <h1 class="fw-bolder">Already Subscribed</h1>
            </b-card>
          </b-tab>
          <!-- Spotlight,Love Notes, Discrete Mode -->
          <b-tab class="p-0" title="Premium Feature Options">
            <b-card no-body class="premium-section rounded-lg">
              <div class="price-card-container mt-4">
                <template v-for="item in packages.premium">
                  <b-card class="mb-4 price-card price-card-1" no-body>
                    <p class="p-0 m-0 months section-1">{{ item.title }}</p>
                    <p class="m-0 p-0 save section-3" v-if="item.spotlights">
                      x{{ item.spotlights }}
                    </p>
                    <p
                      class="m-0 p-0 price section-2"
                      v-html="item.description"
                    >
                      <!-- <span class="per-month">Each</span><span>$6.00</span> -->
                    </p>
                    <div
                      v-if="
                        item.type == 'love-notes' ||
                        item.type == 'discrete-mode'
                      "
                    >
                      <div
                        class="buttons section-4"
                        v-if="item.type == 'love-notes'"
                      >
                        <b-button
                          v-if="check_if_premium_exist('lovenotes')"
                          @click="
                            proceed(item.id, item.type, item.price, item.title)
                          "
                        >
                          Buy Now
                        </b-button>
                      </div>
                      <div
                        class="buttons section-4"
                        v-if="item.type == 'discrete-mode'"
                      >
                        <b-button
                          v-if="check_if_premium_exist('discrete-mode')"
                          @click="
                            proceed(item.id, item.type, item.price, item.title)
                          "
                        >
                          Buy Now
                        </b-button>
                      </div>
                    </div>
                    <div class="buttons section-4" v-else>
                      <b-button
                        @click="
                          proceed(item.id, item.type, item.price, item.title)
                        "
                      >
                        Buy Now
                      </b-button>
                    </div>
                  </b-card>
                </template>
              </div>
            </b-card>
          </b-tab>
          <b-tab class="p-0" title="Qavah Month to Month">
            <b-card
              v-if="
                check_if_subscription_exist('platinum') &&
                check_if_subscription_exist('gold') &&
                check_if_subscription_exist('month_to_month')
              "
              no-body
              class="premium-section rounded-lg"
            >
              <div class="price-card-container mt-4">
                <template v-for="item in packages.month_to_month">
                  <b-card class="mb-4 price-card" no-body>
                    <!-- <b-badge variant="primary" pill>Most Popular</b-badge> -->
                    <p class="p-0 m-0 months section-1">
                      {{ item.title }}
                    </p>
                    <!-- <p class="m-0 p-0 save section-3"></p> -->

                    <p class="m-0 p-0 price section-2">
                      <span class="per-month">
                        <span class="font-weight-bold text-dark"
                          >${{ item.price }}</span
                        >
                      </span>
                    </p>

                    <div class="buttons section-4">
                      <b-button
                        @click="
                          proceed(item.id, item.type, item.price, item.title)
                        "
                      >
                        Buy Now
                      </b-button>

                      <!-- <b-button variant="empty"> Learn More </b-button> -->
                    </div>
                  </b-card>
                </template>
              </div>
            </b-card>
            <b-card class="text-center" v-else>
              <h1 class="fw-bolder">Already Subscribed</h1>
            </b-card>
          </b-tab>
        </b-tabs>
        <!-- Larger screen layout -->
        <b-colxx xxs="12" class="d-none d-md-block">
          <b-card no-body class="mb-3 table-heading">
            <div class="d-flex flex-grow-1 min-width-zero">
              <b-card-body
                class="
                  align-self-center
                  list-item-row
                  p-3
                  d-flex
                  flex-column flex-md-row
                  justify-content-between
                  min-width-zero
                  align-items-md-center
                "
              >
                <p
                  class="
                    list-item-heading
                    font-weight-bold
                    mb-0
                    truncate
                    w-40 w-xs-100
                  "
                >
                  The benefits of having a subscription
                </p>
                <p class="mb-0 font-weight-bold w-20 w-xs-100 text-center"></p>
                <p class="mb-0 font-weight-bold w-20 w-xs-100 text-center">
                  Subscribers
                </p>
                <p class="mb-0 font-weight-bold w-20 w-xs-100 text-center">
                  Members
                </p>
              </b-card-body>
            </div>
          </b-card>
          <b-card no-body class="flex flex-row mb-1">
            <div class="d-flex flex-grow-1 min-width-zero">
              <b-card-body
                class="
                  align-self-center
                  list-item-row
                  p-3
                  d-flex
                  flex-column flex-md-row
                  justify-content-between
                  min-width-zero
                  align-items-md-center
                "
              >
                <p class="list-item-heading mb-0 truncate w-40 w-xs-100">
                  Send messages
                </p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center"></p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center"></p>
              </b-card-body>
            </div>
          </b-card>
          <b-card no-body class="flex flex-row mb-1">
            <div class="d-flex flex-grow-1 min-width-zero">
              <b-card-body
                class="
                  align-self-center
                  list-item-row
                  p-3
                  d-flex
                  flex-column flex-md-row
                  justify-content-between
                  min-width-zero
                  align-items-md-center
                "
              >
                <p class="list-item-heading mb-0 truncate w-40 w-xs-100">
                  See and respond to messages
                </p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center"></p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center"></p>
              </b-card-body>
            </div>
          </b-card>
          <b-card no-body class="flex flex-row mb-1">
            <div class="d-flex flex-grow-1 min-width-zero">
              <b-card-body
                class="
                  align-self-center
                  list-item-row
                  p-3
                  d-flex
                  flex-column flex-md-row
                  justify-content-between
                  min-width-zero
                  align-items-md-center
                "
              >
                <p class="list-item-heading mb-0 truncate w-40 w-xs-100">
                  Priority access to Qavah Events - Details
                </p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center"></p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center"></p>
              </b-card-body>
            </div>
          </b-card>
          <b-card no-body class="flex flex-row mb-1">
            <div class="d-flex flex-grow-1 min-width-zero">
              <b-card-body
                class="
                  align-self-center
                  list-item-row
                  p-3
                  d-flex
                  flex-column flex-md-row
                  justify-content-between
                  min-width-zero
                  align-items-md-center
                "
              >
                <p class="list-item-heading mb-0 truncate w-40 w-xs-100">
                  See who's viewed you
                </p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center"></p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center"></p>
              </b-card-body>
            </div>
          </b-card>
          <b-card no-body class="flex flex-row mb-1">
            <div class="d-flex flex-grow-1 min-width-zero">
              <b-card-body
                class="
                  align-self-center
                  list-item-row
                  p-3
                  d-flex
                  flex-column flex-md-row
                  justify-content-between
                  min-width-zero
                  align-items-md-center
                "
              >
                <p class="list-item-heading mb-0 truncate w-40 w-xs-100">
                  See who's kan you
                </p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center"></p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center">
                  <i class="simple-icon-check"></i>
                </p>
              </b-card-body>
            </div>
          </b-card>
          <b-card no-body class="flex flex-row mb-1">
            <div class="d-flex flex-grow-1 min-width-zero">
              <b-card-body
                class="
                  align-self-center
                  list-item-row
                  p-3
                  d-flex
                  flex-column flex-md-row
                  justify-content-between
                  min-width-zero
                  align-items-md-center
                "
              >
                <p class="list-item-heading mb-0 truncate w-40 w-xs-100">
                  Stand out with a Super Fancy
                </p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center"></p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center"></p>
              </b-card-body>
            </div>
          </b-card>
          <b-card no-body class="flex flex-row mb-1">
            <div class="d-flex flex-grow-1 min-width-zero">
              <b-card-body
                class="
                  align-self-center
                  list-item-row
                  p-3
                  d-flex
                  flex-column flex-md-row
                  justify-content-between
                  min-width-zero
                  align-items-md-center
                "
              >
                <p class="list-item-heading mb-0 truncate w-40 w-xs-100">
                  Read Receipts for Memebership
                </p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center"></p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center">
                  <!-- <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg> -->
                </p>
              </b-card-body>
            </div>
          </b-card>
          <b-card no-body class="flex flex-row mb-1">
            <div class="d-flex flex-grow-1 min-width-zero">
              <b-card-body
                class="
                  align-self-center
                  list-item-row
                  p-3
                  d-flex
                  flex-column flex-md-row
                  justify-content-between
                  min-width-zero
                  align-items-md-center
                "
              >
                <p class="list-item-heading mb-0 truncate w-40 w-xs-100">
                  Remove members from view.
                </p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center"></p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center"></p>
              </b-card-body>
            </div>
          </b-card>
          <b-card no-body class="flex flex-row mb-1">
            <div class="d-flex flex-grow-1 min-width-zero">
              <b-card-body
                class="
                  align-self-center
                  list-item-row
                  p-3
                  d-flex
                  flex-column flex-md-row
                  justify-content-between
                  min-width-zero
                  align-items-md-center
                "
              >
                <p class="list-item-heading mb-0 truncate w-40 w-xs-100">
                  Isrealite info to view will be only for subscribed member.
                </p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center"></p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center">
                  <!-- <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg> -->
                </p>
              </b-card-body>
            </div>
          </b-card>
          <b-card no-body class="flex flex-row mb-1">
            <div class="d-flex flex-grow-1 min-width-zero">
              <b-card-body
                class="
                  align-self-center
                  list-item-row
                  p-3
                  d-flex
                  flex-column flex-md-row
                  justify-content-between
                  min-width-zero
                  align-items-md-center
                "
              >
                <p class="list-item-heading mb-0 truncate w-40 w-xs-100">
                  Search for profiles
                </p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center"></p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
              </b-card-body>
            </div>
          </b-card>

          <b-card no-body class="flex flex-row mb-1">
            <div class="d-flex flex-grow-1 min-width-zero">
              <b-card-body
                class="
                  align-self-center
                  list-item-row
                  p-3
                  d-flex
                  flex-column flex-md-row
                  justify-content-between
                  min-width-zero
                  align-items-md-center
                "
              >
                <p class="list-item-heading mb-0 truncate w-40 w-xs-100">
                  Receive Top Picks
                </p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center"></p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
              </b-card-body>
            </div>
          </b-card>
          <b-card no-body class="flex flex-row mb-1">
            <div class="d-flex flex-grow-1 min-width-zero">
              <b-card-body
                class="
                  align-self-center
                  list-item-row
                  p-3
                  d-flex
                  flex-column flex-md-row
                  justify-content-between
                  min-width-zero
                  align-items-md-center
                "
              >
                <p class="list-item-heading mb-0 truncate w-40 w-xs-100">
                  Create a profile and appear in search results
                </p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center"></p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
              </b-card-body>
            </div>
          </b-card>
          <b-card no-body class="flex flex-row mb-1">
            <div class="d-flex flex-grow-1 min-width-zero">
              <b-card-body
                class="
                  align-self-center
                  list-item-row
                  p-3
                  d-flex
                  flex-column flex-md-row
                  justify-content-between
                  min-width-zero
                  align-items-md-center
                "
              >
                <p class="list-item-heading mb-0 truncate w-40 w-xs-100">
                  Post a photo
                </p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center"></p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
              </b-card-body>
            </div>
          </b-card>
          <b-card no-body class="flex flex-row mb-1">
            <div class="d-flex flex-grow-1 min-width-zero">
              <b-card-body
                class="
                  align-self-center
                  list-item-row
                  p-3
                  d-flex
                  flex-column flex-md-row
                  justify-content-between
                  min-width-zero
                  align-items-md-center
                "
              >
                <p class="list-item-heading mb-0 truncate w-40 w-xs-100">
                  Send likes.
                </p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center"></p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
                <p class="mb-0 text-primary w-20 w-xs-100 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
              </b-card-body>
            </div>
          </b-card>
        </b-colxx>
      </b-col>
      <b-col class="right-section" lg="4" md="4" sm="12">
        <div class="mt-4">
          <h6 class="mb-2">Billing - Continous Services</h6>

          <p class="m-0 p-0">
            All subscriptions automatically renew until cancelled.
          </p>
          <p class="m-0 p-0 mt-2">
            Qavah Platumim comes with all premium features as part of the
            package.
          </p>

          <p class="m-0 p-0 mt-2">
            Otherwise these premium features are offered as stand alone features
            for those purchasing the Qavah gold
          </p>

          <!-- <b-link>Learn more</b-link> -->

          <!-- <p class="mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>

          <p>
            * Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
            ratione perferendis quia quidem quo dignissimos placeat iure quis
            nulla voluptatibus..
          </p> -->

          <!-- <div class="links-container">
             <b-link>have a promo code ?</b-link>
             <b-link>have a match gift card ?</b-link>
          </div> -->
        </div>
      </b-col>
    </b-row>

    <!-- Modal -->
    <b-modal
      id="welcomeModal"
      content-class="rounded-lg"
      body-class="rounded-lg"
      centered
      hide-header
      hide-footer
    >
      <div class="icon float-right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          @click="closeModal('welcomeModal')"
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

      <div class="list-container m-2">
        <h2 class="text-center mb-4">Choose 4 stress-free payments</h2>

        <!-- <div class="list-item">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="tick"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p class="ml-2">
            Pay your first installment today, then the remaining three payments
            every two weeks
          </p>
        </div>

        <div class="list-item">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="tick"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p class="ml-2">Your subscription renews with installemtn payments</p>
        </div>

        <div class="list-item">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="tick"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p class="ml-2">No credit checks or interest fees applied</p>
        </div> -->

        <div class="list-item">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="tick"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p class="ml-2">Send messages</p>
        </div>

        <div class="list-item">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="tick"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p class="ml-2">See and respond to messages</p>
        </div>

        <div class="list-item">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="tick"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p class="ml-2">Priority access to Qavah Events – Details</p>
        </div>

        <div class="list-item">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="tick"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p class="ml-2">See who's viewed you</p>
        </div>

        <div class="list-item">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="tick"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p class="ml-2">See who's kan you</p>
        </div>

        <div class="list-item">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="tick"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p class="ml-2">Stand out with a Super Fancy</p>
        </div>

        <div class="list-item">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="tick"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p class="ml-2">Remove members from view.</p>
        </div>

        <div class="list-item">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="tick"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p class="ml-2">Search for profiles</p>
        </div>

        <div class="list-item">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="tick"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p class="ml-2">Receive Top Picks</p>
        </div>

        <div class="list-item">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="tick"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p class="ml-2">Create a profile and appear in search results</p>
        </div>

        <div class="list-item">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="tick"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p class="ml-2">Post a photo</p>
        </div>

        <div class="list-item">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="tick"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p class="ml-2">Send likes.</p>
        </div>

        <div class="list-item">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="tick"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p class="ml-2">
            Isrealite info to view will be only for subscribed me
          </p>
        </div>
      </div>

      <div class="btn-container">
        <b-button class="modal-btn" @click="closeModal('welcomeModal')"
          >Got it</b-button
        >
      </div>
    </b-modal>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";
import { apiUrl, headers } from "@/constants/config";
import axios from "axios";
export default {
  data() {
    return {
      packages: [],
    };
  },
  name: "powerups",
  methods: {
    check_if_subscription_exist(val) {
      let current_subscription = this.currentUser.subscription;
      var valObj = current_subscription.filter(function (elem) {
        if (elem.pkg_catogery == val) {
          return elem;
        }
      });
      if (valObj.length > 0) {
        return false;
      }
      return true;
    },
    check_if_premium_exist(val) {
      let exist = true;
      let filter_data = null;
      let current_subscription = this.currentUser.subscription;
      debugger;
      if (current_subscription.length > 0) {
        for (var i = 0; i < current_subscription.length; i++) {
          let addons = current_subscription[i].user_addons_subscriptions;
          filter_data = addons.filter((element) => {
            return element.addon_name == val;
          });
          if (filter_data.length > 0) {
            exist = false;
          }
        }
        return exist;
      } else {
        return exist;
      }
    },

    // getProfile() {
    //   let body = {};
    //   axios
    //     .get(`${apiUrl}/discover/getPeople`)
    //     .then((res) => {
    //       console.log("res -> ", res);
    //     })
    //     .catch((err) => {
    //       console.log("res -> ", err);
    //     });
    // },

    get_packages() {
      let body = {};
      axios
        .get(`${apiUrl}/packages`, { headers })
        .then((res) => {
          this.packages = res.data.packages;
        })
        .catch((err) => {});
    },
    proceed(id, type, total, plan) {
      var user = this.currentUser;
      this.$router.push({
        path: "/dashboard/payment",
        query: { id: id, type: type, total: total, plan: plan },
      });
      // let isPlatinum = this.currentUser.subscriptions.includes("platinum");
      // let isGold = this.currentUser.subscriptions.includes("gold");
      // let isDiscrete = this.currentUser.subscriptions.includes("discretemode");
      // let isLovenotes = this.currentUser.subscriptions.includes("lovenotes");
      // if (type === "spotlight") {
      //   if (isDiscrete && isLovenotes) {
      //     this.$router.push({
      //       path: "/dashboard/payment",
      //       query: { type: type, plan: plan },
      //     });
      //   } else {
      //     this.$router.push({
      //       path: "/dashboard/subscribeaddons",
      //       query: { type: type, plan: plan },
      //     });
      //   }
      // }
      // if (!isPlatinum && !isGold) {
      //   if (type === "platinum") {
      //     if (isDiscrete && isLovenotes) {
      //       this.$router.push({
      //         path: "/dashboard/payment",
      //         query: { type: type, plan: plan },
      //       });
      //     } else {
      //       this.$router.push({
      //         path: "/dashboard/payment",
      //         query: { type: type, plan: plan },
      //       });
      //     }
      //   }

      //   if (type === "gold") {
      //     if (isDiscrete && isLovenotes) {
      //       this.$router.push({
      //         path: "/dashboard/payment",
      //         query: { type: type, plan: plan },
      //       });
      //     }
      //     else {
      //       this.$router.push({
      //         path: "/dashboard/subscribeaddons",
      //         query: { type: type, plan: plan },
      //       });
      //     }
      //   }
      //   if (type === "discretemode") {
      //     if (isDiscrete && isLovenotes) {
      //       this.$router.push({
      //         path: "/dashboard/payment",
      //         query: { type: type, plan: plan },
      //       });
      //     } else {
      //       this.$router.push({
      //         path: "/dashboard/subscribeaddons",
      //         query: { type: type, plan: plan },
      //       });
      //     }
      //   }

      //   if (type === "lovenotes") {
      //     if (isDiscrete && isLovenotes) {
      //       this.$router.push({
      //         path: "/dashboard/payment",
      //         query: { type: type, plan: plan },
      //       });
      //     } else {
      //       this.$router.push({
      //         path: "/dashboard/subscribeaddons",
      //         query: { type: type, plan: plan },
      //       });
      //     }
      //   }
      // }

      // if (isPlatinum && !isGold) {
      //   if (type === "gold") {
      //     if (isDiscrete && isLovenotes) {
      //       this.$router.push({
      //         path: "/dashboard/payment",
      //         query: { type: type, plan: plan },
      //       });
      //     } else {
      //       this.$router.push({
      //         path: "/dashboard/subscribeaddons",
      //         query: { type: type, plan: plan },
      //       });
      //     }
      //   }

      //   if (type === "platinum") {
      //     this.showError(type);
      //   }

      //   if (type === "lovenotes") {
      //     this.$router.push({
      //       path: "/dashboard/subscribeaddons",
      //       query: { type: type, plan: plan },
      //     });
      //   }

      //   if (type === "discretemode") {
      //     this.$router.push({
      //       path: "/dashboard/subscribeaddons",
      //       query: { type: type, plan: plan },
      //     });
      //   }
      // }

      // if (!isPlatinum && isGold) {
      //   if (type === "platinum") {
      //     if (isDiscrete && isLovenotes) {
      //       this.$router.push({
      //         path: "/dashboard/payment",
      //         query: { type: type, plan: plan },
      //       });
      //     } else {
      //       this.$router.push({
      //         path: "/dashboard/payment",
      //         query: { type: type, plan: plan },
      //       });
      //     }
      //   }

      //   if (type === "gold") {
      //     this.showError(type);
      //   }

      //   if (type === "lovenotes") {
      //     this.$router.push({
      //       path: "/dashboard/subscribeaddons",
      //       query: { type: type, plan: plan },
      //     });
      //   }

      //   if (type === "discretemode") {
      //     this.$router.push({
      //       path: "/dashboard/subscribeaddons",
      //       query: { type: type, plan: plan },
      //     });
      //   }
      //}
    },
    checkSpotlight() {
      Vue.$toast.info(
        `You have to be a premium user to purchase spotlight boosts!`
      );
    },
    openModal(id) {
      this.$bvModal.show(id);
    },
    closeModal(id) {
      this.$bvModal.hide(id);
    },
    showError(type, plan) {
      Vue.$toast.default(`You already have a active ${type} subscription!`);
    },
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  mounted() {
    this.get_packages();
    console.log(this.currentUser);
    // this.openModal("welcomeModal");
  },
};
</script>

<style scoped>
.price-card-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
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
/* Mobile Screen Classes */
@media only screen and (max-width: 992px) {
  .spotlight-page {
    padding: 2rem;
    min-height: 100vh;
  }
  .right-section {
    display: none;
  }

  .price-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 10px;
    width: 225px;
  }

  .price-card .section-1 {
    grid-column-start: 1;
    grid-column-end: 3;
    place-items: center;
  }

  .price-card .months {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .price-card .price {
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .price-card .price .per-month {
    font-size: 0.8rem;
    color: #a499a3;
  }

  .price-card .save {
    font-size: 1.2rem;
    font-weight: bold;
    color: #ab44e9;
  }
}

/* Laptop Screen Classes */
@media only screen and (min-width: 992px) {
  .spotlight-page {
    padding: 2rem;
    min-height: 100vh;
    margin-top: 55px;
    padding-top: 3rem;
  }

  .right-section {
    display: block;
  }

  .price-card {
    /* display: grid;
    grid-template-columns: repeat(5, 20%); */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    width: 225px;
    /* border-radius: 10px;
    justify-content: flex-start;
    align-items: center; */
  }

  .price-card .section-1 {
    grid-column-start: 1;
    grid-column-end: 3;
    text-align: center;
    place-items: center;
  }

  .price-card .months {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
  }

  .price-card .price {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .price-card .price .per-month {
    font-size: 0.8rem;
    color: #a499a3;
    text-align: center;
  }

  .price-card .save {
    font-size: 1.2rem;
    font-weight: bold;
    color: #ab44e9;
    text-align: center;
  }
}

/* #welcomeModal .icon {
   position: absolute;
   top:0;
} */
#welcomeModal .icon svg:hover {
  fill: #93652b;
  cursor: pointer;
  transform: scale(110%);
}

.list-item {
  display: flex;
}

.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
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

.links-container {
  display: flex;
  flex-direction: column;
}

.premium-section {
  padding: 1rem;
  border-radius: 10px;
}

.standard-section {
  padding: 1rem;
  border-radius: 10px;
}

.tick {
  fill: #93652b;
}

.list-item-row {
  background-color: #eff0fd;
}

.list-item-heading {
  font-size: 0.8rem;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-heading-with-icon {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
}

.card-heading-with-icon-2 {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
}

.powerup-btn {
  background-color: #93652b;
  outline: none;
  border: none;
  border-radius: 10px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
}

.powerup-btn:hover {
  background-color: #b69873;
}
</style>
