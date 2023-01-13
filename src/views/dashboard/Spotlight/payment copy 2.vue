<template>
  <div class="spotlight-page">
    <div class="header">
      <h2 class="text-primary mt-4">Payment Page</h2>
    </div>
    <b-row class="mt-4" v-if="allow_page()">
      <b-col lg="12" md="12" sm="12">
        <b-card style="border-radius: 10px">
          <b-row>
            <b-col lg="8" md="8" sm="12">
              <b-overlay :show="loader">
                <template #overlay>
                  <GridLoader
                    class="custom-class"
                    color="#93652b"
                    :loading="checkoutLoader"
                    :size="10"
                    sizeUnit="px"
                  />
                </template>
                <div>
                  <h6>Payment Options</h6>

                  <b-form-group
                    v-slot="{ ariaDescribedby }"
                    v-if="package_detail"
                  >
                    <b-form-radio
                      v-model="selectedPaymentOption"
                      :aria-describedby="ariaDescribedby"
                      name="some-radios"
                      value="full"
                      checked
                      >Pay $ {{ package_detail.price }} in full
                      today</b-form-radio
                    >
                  </b-form-group>
                  <div id="affirm-message" class="mb-4"></div>
                </div>
                <!-- <div>
                  <h6>Payment Options</h6>
                  <b-form-group v-slot="{ ariaDescribedby }">
                    <b-form-radio
                      :aria-describedby="ariaDescribedby"
                      name="some-radios"
                      v-model="paymentOption"
                      value="full"
                      >Pay $ 0.00 in full today</b-form-radio
                    >
                    <b-form-radio
                      :aria-describedby="ariaDescribedby"
                      name="some-radios"
                      v-model="paymentOption"
                      value="monthly"
                      >Pay $ 0.00 in every month for
                    </b-form-radio>
                  </b-form-group>

                  <div id="affirm-message" class="mb-4"></div>
                </div> -->

                <b-tabs content-class="mt-4" pills align="center">
                  <b-tab title="Credit Card" active>
                    <h2 class="mb-4">Payment Details</h2>

                    <b-form-checkbox name="checkbox-1" v-if="package_detail">
                      Your Subscription will auto renew for the same price ($
                      {{ package_detail.price }}
                      including tax) and package length until you cancel, at any
                      time , via account settings.
                    </b-form-checkbox>

                    <!-- <p class="m-0 p-0">
                        By Clicking "Subscribe", you authorize us to change your
                        card . and you agree to our terms.
                      </p> -->
                    <!-- <div id="card-element">
                      </div> -->

                    <!-- <label>Card Holder Name</label>
                      <input id="card-holder-name" type="text" v-model="name" class="form-control mb-2">
                      <label>Card</label>
                     -->

                    <div class="col-md-6 mt-5">
                      <StripeElements
                        :stripe-key="stripeKey"
                        :instance-options="instanceOptions"
                        :elements-options="elementsOptions"
                        #default="{ elements }"
                        ref="elms"
                        class="border"
                      >
                        <StripeElement
                          type="card"
                          :elements="elements"
                          :options="cardOptions"
                          ref="card"
                          class="border"
                        />
                      </StripeElements>
                    </div>

                    <div class="bottom-section mt-4">
                      <b-img
                        class=""
                        height="35"
                        src="data:image/png;base64,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"
                      ></b-img>
                      <b-button
                        @click="submit"
                        class="pay-with-stripe subscribe-btn"
                        >Purchase</b-button
                      >
                    </div>
                    <!-- <div class="bottom-section mt-4">
                      <b-img
                        class=""
                        height="35"
                        src="data:image/png;base64,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"
                      ></b-img>
                      <b-button @click="submit" class="subscribe-btn"
                        >Subscribe</b-button
                      >
                    </div> -->
                  </b-tab>
                  <!-- PAYPAL -->
                  <b-tab title="Paypal">
                    <div
                      class="
                        d-flex
                        flex-column
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h2 class="mb-4">Paypal Account</h2>
                      <div ref="paypal"></div>
                      <!-- <PayPal
                        amount="10.00"
                        currency="USD"
                        :client="credentials"
                        env="sandbox"
                      >
                      </PayPal> -->
                    </div>
                  </b-tab>
                </b-tabs>
              </b-overlay>
            </b-col>
            <b-col lg="4" md="4" sm="12">
              <div class="">
                <h2>Review Your Subscription</h2>

                <!-- Platinum -->
                <div class="">
                  <h6 class="text-capitalize">
                    {{ package_detail.type }} {{ package_detail.title }}
                  </h6>

                  <div class="subtotal-section">
                    <div class="subtotal-section-row">
                      <span>Months </span>
                      <div class="">
                        <!-- <del>$95.97 </del> -->
                        <span>{{
                          Math.round(package_detail.duration / 30)
                        }}</span>
                      </div>
                    </div>
                    <!-- <div class="subtotal-section-row">
                      <span>Per Month</span>
                      <div class="">
                        <span></span>
                      </div>
                    </div> -->
                    <!-- <div class="subtotal-section-row" >
                      <span> </span>
                      <div class="">
                        <span>$</span>
                      </div>
                    </div>
                    <div class="subtotal-section-row" >
                      <span> </span>
                      <div class="">
                        <span>$</span>
                      </div>
                    </div> -->
                    <div class="subtotal-section-row">
                      <span>Sales Tax</span>
                      <div class="">
                        <!-- <del>$9.87 </del> -->
                        <span>$0.00</span>
                      </div>
                    </div>
                    <div class="subtotal-section-row">
                      <span>Total</span>
                      <div class="" v-if="package_detail">
                        <span>${{ package_detail.price }}</span>
                      </div>
                    </div>

                    <p class="mt-4">
                      * This is the total savings when compared to the full
                      monthly price of the shortest term package with similar
                      add-on features.
                    </p>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row lass="mt-4" v-else>
      <b-col lg="12" md="12" sm="12">
        <b-card style="border-radius: 10px">
          <b-row>
            <b-col lg="8" md="8" sm="12" col-md-12>
              <h2>You have already Subcribtion</h2>
            </b-col>
          </b-row>
        </b-card></b-col
      >
    </b-row>
  </div>
</template>

<script>
import {
  apiUrl,
  STRIPE_PUBLISHABLE_KEY,
  Paypal,
  headers,
} from "@/constants/config";

import { mapGetters } from "vuex";
import axios from "axios";
import { StripeElements, StripeElement } from "vue-stripe-elements-plus";
import Vue from "vue";
// import PayPal from "vue-paypal-checkout";

import { loadStripe } from "@stripe/stripe-js";
import Swal from "sweetalert2";
import { setCurrentUser } from "@/utils/index";
import store from "@/store";

export default {
  name: "powerups",
  data() {
    return {
      loader: false,
      stripeKey:
        "pk_test_51JIdZVJehHGbCsaCYiCquX3mKuZDrym2d3EU31L8fDxs8886NBrqsg3rYrp8bHIdl7wvARE7vxLuNfhsrY5SFbCw00tHX5coQC", // test key, don't hardcode
      instanceOptions: {
        // https://stripe.com/docs/js/initializing#init_stripe_js-options
      },
      selectedPaymentOption: "full",
      elementsOptions: {
        style: {
          base: {
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: "500",
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "50px",
            border: "solid 1px #000",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": {
              color: "#fce883",
            },
            "::placeholder": {
              color: "#87BBFD",
            },
          },
          invalid: {
            iconColor: "#FFC7EE",
            color: "#FFC7EE",
          },
        },
        // https://stripe.com/docs/js/elements_object/create#stripe_elements-options
      },
      cardOptions: {
        // reactive
        // remember about Vue 2 reactivity limitations when dealing with options
        value: {
          postalCode: "",
        },
        // https://stripe.com/docs/stripe.js#element-options
      },
      paymentBody: null,
      package_detail: null,
      // credentials: {
      //   sandbox: "<sandbox client id>",
      //   production: "<production client id>",
      // },
    };
  },
  components: {
    // PayPal,
    StripeElements,
    StripeElement,
    loader: false,
  },
  // data() {
  //   return {
  //     loader: false,
  //     // STRIPE_PUBLISHABLE_KEY,
  //     // Paypal,
  //     // PaypalItems: [],
  //     // spotlight: {
  //     //   package1: {
  //     //     name: "Package 1",
  //     //     quantity: 1,
  //     //     each: 6.0,
  //     //   },
  //     //   package2: {
  //     //     name: "Package 2",
  //     //     quantity: 5,
  //     //     each: 5.0,
  //     //   },
  //     //   package3: {
  //     //     name: "Package 3",
  //     //     quantity: 10,
  //     //     each: 4.0,
  //     //   },
  //     // },
  //     // platinum: {
  //     //   "12months": {
  //     //     name: "12 Months",
  //     //     onetime: 239.88,
  //     //     installment: 59.97,
  //     //     permonth: 19.99,
  //     //   },
  //     //   "6months": {
  //     //     name: "6 Months",
  //     //     onetime: 149.94,
  //     //     installment: 37.48,
  //     //     permonth: 24.99,
  //     //   },
  //     //   "3months": {
  //     //     name: "3 Months",
  //     //     onetime: 98.97,
  //     //     installment: 24.74,
  //     //     permonth: 32.99,
  //     //   },
  //     // },
  //     // gold: {
  //     //   "12months": {
  //     //     name: "12 Months",
  //     //     onetime: 216.0,
  //     //     permonth: 18.0,
  //     //   },
  //     //   "6months": {
  //     //     name: "6 Months",
  //     //     onetime: 144.0,
  //     //     permonth: 24.0,
  //     //   },
  //     //   "3months": {
  //     //     name: "3 Months",
  //     //     onetime: 93.0,
  //     //     permonth: 31.0,
  //     //   },
  //     // },
  //     // lovenotes: {
  //     //   permonth: 7,
  //     // },
  //     // discretemode: {
  //     //   permonth: 10,
  //     // },
  //     // single: {
  //     //   platinum: {
  //     //     permonth: 45,
  //     //   },
  //     //   gold: {
  //     //     permonth: 40,
  //     //   },
  //     // },
  //     // paymentOption: "full",
  //     // monthsOptions: [
  //     //   { text: "January", value: "January" },
  //     //   { text: "Feburary", value: "Feburary" },
  //     //   { text: "March", value: "March" },
  //     //   { text: "April", value: "April" },
  //     //   { text: "June", value: "June" },
  //     //   { text: "July", value: "July" },
  //     //   { text: "August", value: "August" },
  //     //   { text: "September", value: "September" },
  //     //   { text: "October", value: "October" },
  //     //   { text: "November", value: "November" },
  //     //   { text: "December", value: "December" },
  //     // ],
  //     // yearsOptions: [
  //     //   { text: "2000", value: "2000" },
  //     //   { text: "1999", value: "1999" },
  //     // ],
  //     // payment: {
  //     //   month: null,
  //     //   year: null,
  //     // },
  //     // loading: false,
  //     // lineItems: [],
  //     // successURL: "http://localhost:8080/dashboard/payment-success",
  //     // cancelURL: "http://localhost:8080/dashboard/payment-cancel",
  //     // paymentBody: null,
  //     // paymentBodyForPaypal: null,
  //     // pricing: null,
  //     // checkoutLoader: false,
  //     // collection_method: "charge_automatically",
  //     // paypalLoaded: false,
  //   };
  // },
  methods: {
    // Affirm - Installments
    allow_page() {
      let current_subsciption = this.currentUser.subscription;
      let pkg = this.package_detail;
      if (pkg.packages_categery.slug != "premium") {
        let exist_memership = current_subsciption.filter(function (elem) {
          return elem.pkg_catogery == "platinum" || elem.pkg_catogery == "gold";
        });
        if (exist_memership.length > 0) {
          return false;
        } else {
          return true;
        }
      } else {
        return true;
      }
    },
    getProfile() {
      let body = {};
      axios
        .get(`${apiUrl}/discover/getPeople`)
        .then((res) => {
          console.log("res -> ", res);
        })
        .catch((err) => {
          console.log("res -> ", err);
        });
    },
    submit() {
      let body = this.paymentBody;
      this.checkoutLoader = true;
      this.loader = true;
      const groupComponent = this.$refs.elms;
      const cardComponent = this.$refs.card;
      const cardElement = cardComponent.stripeElement;
      let package_detail = this.package_detail;
      let self = this;

      // Access instance methods, e.g. createToken()
      groupComponent.instance.createToken(cardElement).then((result) => {
        // Handle result.error or result.token
        package_detail["stripe_token"] = result;
        axios
          .post(`${apiUrl}/subscribion/buy`, package_detail, { headers })
          .then((res) => {
            if (res.data.status == true) {
              this.refresh_user();
              this.$router.push("/dashboard/payment-success");
              //this.testSwal();
            } else {
              this.checkoutLoader = false;
              this.loader = false;
            }
          });
      });
    },
    setLoaded: function () {
      this.paypalLoaded = true;
      let paypalProduct;
      let addOnProducts = [];
      let pricing;
      let uid = this.currentUser.id;
      let price = this.package_detail.price;
      let package_detail = this.package_detail;
      let paypal_package_object = {
        name:
          package_detail.packages_categery.title + " " + package_detail.title,
        reference_id: uid,
        description:
          package_detail.packages_categery.title + " " + package_detail.title,
        amount: {
          value: package_detail.price,
        },
      };
      let self = this;

      // this.paymentBodyForPaypal = {
      //   intent: "CAPTURE",
      //   purchase_units: [paypalProduct],
      //   application_context: {
      //     return_url: "",
      //     cancel_url: "",
      //   },
      // };
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [paypal_package_object],
              application_context: {
                return_url: "",
                cancel_url: "",
              },
            });
          },
          onApprove: async (data, actions) => {
            await actions.order.capture().then(function (details) {
              let body = {
                uid: uid,
                pricing: price,
                details: details,
                package_detail: package_detail,
              };

              axios
                .post(`${apiUrl}/subscriptions/paypal-buy`, body, { headers })
                .then((res) => {
                  const data = res.data;
                  if (data.status) {
                    self.refresh_user();
                    self.$router.push("/dashboard/payment-success");
                  }
                })
                .catch((err) => {
                  console.log("after paypal subscription err -> ", err);
                });
            });
          },
          onCancel: (data, actions) => {},
          onError: (err) => {
            console.log(err);
            console.log("paypal error -> ", err);
            console.log(
              "this.paymentBodyForPaypal -> ",
              this.paymentBodyForPaypal
            );
          },
        })
        .render(this.$refs.paypal);
    },
    get_package() {
      let package_id = this.$route.query.id;

      axios
        .post(
          `${apiUrl}/packages/get_package`,
          { package_id: package_id },
          { headers }
        )
        .then((res) => {
          this.package_detail = res.data.package_detail;
        });
    },
    // paymentAuthorize(event) {
    //   console.log("payment authorized -> ", event);
    // },
    // payment_success() {
    //   this.$router.push("/dashboard/payment-success");
    // },
    testSwal() {
      Swal.fire({
        iconHtml: `<svg enable-background="new 0 0 26 26" id="Слой_1" version="1.1" viewBox="0 0 26 26" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M24.25,1H12c-0.4140625,0-0.75,0.3359375-0.75,0.75v4.0625h-9.5c-0.4140625,0-0.75,0.3359375-0.75,0.75  V24.25C1,24.6640625,1.3359375,25,1.75,25h12.2451172c0.4140625,0,0.75-0.3359375,0.75-0.75v-4.0556641H24.25  c0.4140625,0,0.75-0.3359375,0.75-0.75V1.75C25,1.3359375,24.6640625,1,24.25,1z M13.2451172,23.5H2.5v-7.59375h5.7961426  l-2.4074707,2.4082031c-0.1953125,0.1953125-0.1953125,0.5117188,0,0.7070313  c0.0976563,0.0976563,0.2255859,0.1464844,0.3535156,0.1464844s0.2558594-0.0488281,0.3535156-0.1464844L9.855835,15.760376  c0.0463867-0.0462646,0.0831909-0.1016846,0.1086426-0.163208c0.0505371-0.1221924,0.0505371-0.2596436,0-0.3818359  c-0.0254517-0.0615234-0.0622559-0.1169434-0.1086426-0.163208l-3.2601318-3.2611084  c-0.1953125-0.1953125-0.5117188-0.1953125-0.7070313,0s-0.1953125,0.5117188,0,0.7070313L8.2961426,14.90625H2.5V7.3125h9.4951782  c0.001709,0,0.0031128,0.0009766,0.0048218,0.0009766S12.0031128,7.3125,12.0048218,7.3125h1.2402954V23.5z M14.7451172,18.6943359  V6.5625c0-0.4140625-0.3359375-0.75-0.75-0.75H12.75V2.5H23.5v7.5976563h-5.7990723l2.4084473-2.4091797  c0.1953125-0.1953125,0.1953125-0.5117188,0-0.7070313s-0.5117188-0.1953125-0.7070313,0l-3.2611084,3.262085  c-0.0463867,0.0462646-0.0831909,0.1016846-0.1086426,0.163208c-0.0505371,0.1221924-0.0505371,0.2596436,0,0.3818359  c0.0254517,0.0615234,0.0622559,0.1169434,0.1086426,0.163208l3.2611084,3.262085  c0.0976563,0.0976563,0.2255859,0.1464844,0.3535156,0.1464844s0.2558594-0.0488281,0.3535156-0.1464844  c0.1953125-0.1953125,0.1953125-0.5117188,0-0.7070313l-2.4084473-2.4091797H23.5v7.5966797H14.7451172z" fill="#1D1D1B"/></svg>`,
        title: `HalleluYah! You’ve made an Israelite match!`,
        html: ` <br> However, this is only part of the process.  Now it’s time to fast, pray and ask TMH Yah to reveal his/her intentions as you test the spirit.`,
        showConfirmButton: true,
        confirmButtonColor: "#93652B",
        denyButtonColor: "#93652B",
        showDenyButton: true,
        confirmButtonText: "SEND MESSAGE",
        denyButtonText: "KEEP SWIPING",
        buttonsStyling: false,
        allowOutsideClick: false,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.$router.push("/dashboard/beloved");
        } else if (result.isDenied) {
          this.$router.push("/dashboard/discover");
        }
      });
      // this.openModal("itsAMatch");
      // console.log("open match modal");
      // this.$store.dispatch("notificationShowed", x.id);
    },
    refresh_user() {
      axios
        .get(`${apiUrl}/auth/user`, { headers })
        .then((res) => {
          // console.log("Main -> get profile ->  ", res);
          if (res.status === 200) {
            const profile = res.data;
            setCurrentUser(profile);
            store.dispatch("setRegisteredUser", {
              ...profile,
              phoneVerified: profile.mobile_verified,
            });
          } else {
            // console.log("Main -> get profile -> error!");
          }
        })
        .catch((err) => {
          console.log("Main -> get profile -> ", err);
        });
    },
    async initializeAffirm() {
      this.checkoutLoader = true;
      const stripe = await loadStripe(STRIPE_PUBLISHABLE_KEY);
      const elements = stripe.elements();
      const options = {
        amount: this.package_detail.price * 100, // $10.00 USD
        currency: "USD",
      };

      const afterpayClearpayMessageElement = elements.create(
        "affirmMessage",
        options
      );

      afterpayClearpayMessageElement.mount("#affirm-message");
      this.checkoutLoader = false;
    },
    loadpaypal() {
      const script = document.createElement("script");
      script.src = `https://www.paypal.com/sdk/js?client-id=${Paypal.sandbox}&vault=false`;
      script.addEventListener("load", this.setLoaded);
      document.body.appendChild(script);
    },
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  watch: {
    paymentOption(val) {
      if (val) {
        this.checkTypeOfPayment();
      }
    },
  },
  updated() {
    this.initializeAffirm();
    this.loadpaypal();
  },
  async mounted() {
    this.get_package();

    //await this.initializeAffirm();
  },
};
</script>

<style scoped>
.custom-field-test {
  border-radius: 25px !important;
  height: 40px !important;
  border-color: #93652b !important;
  outline: none;
  font-size: 12px !important;
}

.custom-field {
  border-radius: 25px !important;
  height: 35px !important;
  border-color: #93652b !important;
  padding: 15px !important;
  font-size: 10px;
}

.fields-container {
  display: flex;
  gap: 0.5rem;
}

/* Mobile Screen Classes */
@media only screen and (max-width: 992px) {
  .spotlight-page {
    padding: 2rem;
    min-height: 95vh;
  }
}

/* Laptop Screen Classes */
@media only screen and (min-width: 992px) {
  .spotlight-page {
    padding: 2rem;
    min-height: 95vh;
    margin-top: 55px;
    padding-top: 3rem;
  }
}

.bottom-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.subtotal-section {
  display: flex;
  flex-direction: column;
}

.subtotal-section .subtotal-section-row {
  display: flex;
  justify-content: space-between;
}

.subscribe-btn {
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
  transition: all ease 0.5s;
}

.subscribe-btn:hover {
  background-color: #b69873;
  transform: scale(110%);
}

.custom-field {
  border-radius: 25px !important;
  height: 35px !important;
  border-color: #93652b !important;
  padding: 20px !important;
  font-size: 12px;
}

.premium-section {
  padding: 1rem;
  border-radius: 10px;
}

.standard-section {
  padding: 1rem;
  border-radius: 10px;
}

.price-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
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
  padding: 1rem 2rem;
}

.powerup-btn:hover {
  background-color: #b69873;
}
</style>
