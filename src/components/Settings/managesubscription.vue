<template>
  <div class="">
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

      <b-table
        striped
        hover
        :fields="fields"
        :items="subscriptions"
        v-if="subscriptions.length > 0"
      >
        <template #cell(Sno)="data">
          {{ data.index + 1 }}
        </template>
        <template #cell(subscription_start)="data">
          {{ formatDate(data.value || data.item.created) }}
        </template>
        <template #cell(subscription_end)="data">
          <div v-if="data.item.type === 'spotlight'">
            {{ "" }}
          </div>
          <div v-else>
            <div v-if="data.item.status === 'cancel'">
              {{ formatDate(data.item.cancelled_on) }}
            </div>
            <div v-else>
              {{ formatDate(data.value) }}
            </div>
          </div>
        </template>

        <template #cell(status)="data">
          <b-badge pill v-if="data.item.status === 1" variant="info">
            Active
          </b-badge>
          <b-badge pill v-if="data.item.status === 2" variant="danger">
            Canceled
          </b-badge>
        </template>
        <template #cell(Actions)="data">
          <!-- <div v-if="data.item.status === 2">
            <b-button
              size="xs"
              class="custom-btn-1"
              @click="renewSubscription(data.item)"
              >Renew</b-button
            >
          </div> -->
          <div v-if="data.item.status === 1">
            <b-button
              size="xs"
              variant="danger"
              @click="cancelSubscription(data.item)"
              class="custom-btn-2"
              >Cancel</b-button
            >
          </div>
        </template>
      </b-table>

      <div v-else>
        <h2>No Subscriptions yet!</h2>
      </div>
    </b-overlay>
  </div>
</template>

<script>
import { getCurrentUser } from "@/utils";
import { apiUrl, headers } from "@/constants/config";
import Vue from "vue";
import axios from "axios";
import { mapGetters } from "vuex";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      loader: false,
      fields: [
        // A virtual column that doesn't exist in items
        "Sno",
        // A column that needs custom formatting
        { key: "pkg_name", label: "Name" },
        { key: "pkg_catogery", label: "Type" },
        { key: "staring", label: "Start" },
        { key: "ending", label: "End" },
        { key: "status", label: "Status" },
        "Actions",
      ],
      items: [
        {
          Name: "Qavah Gold",
          Type: "3 Months",
          Start: "01-03-2022",
          End: "01-06-2022",
          Status: "ended",
        },
        {
          Name: "Qavah Platinum",
          Type: "3 Months",
          Start: "01-06-2022",
          End: "01-09-2022",
          Status: "ongoing",
        },
      ],
      subscriptions: [],
      previousSubscriptions: [],
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),
    currentUser2() {
      let user = getCurrentUser();
      return user;
    },
  },
  methods: {
    getSubsciptions() {
      this.loader = true;

      setTimeout(() => {
        if (this.currentUser.uid) {
          let body = {
            uid: this.currentUser.uid,
          };
          axios
            .post(`${apiUrl}/settings/get-subscription`, body, { headers })
            .then((response) => {
              console.log("get subscriptions -> ", response);
              let data = response.data;
              if (response.status === 200) {
                if (data.status) {
                  console.log("get-subscription data -> ", data.data);
                  this.subscriptions = data.Subscriptions;
                  // this.previousSubscriptions = ;
                  this.loader = false;
                } else {
                  console.log("get-subscription data -> ", data.data);
                  this.loader = false;
                }
              } else {
                Vue.$toast.error(`${data.error}`);
                this.loader = false;
              }
            })
            .catch((err) => {
              console.log("err -> ", err);
              this.loader = false;
              Vue.$toast.error(`${err}`);
            });
        }
      }, 500);
    },
    formatDate(date) {
      let newDate = new Date(date);
      return newDate.toLocaleString();
    },
    cancelSubscription(item) {
      console.log("item -> ", item);

      Swal.fire({
        title: "Are you sure, do you want to cancel?",
        showCancelButton: true,
        confirmButtonText: "Yes, Im Sure!",
        cancelButtonText: `No`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.loader = true;
          let body = {
            uid: this.currentUser.uid,
            subscription_id: item.id,
            type: item.type,
          };

          axios
            .post(`${apiUrl}/settings/cancel-subscription`, body, { headers })
            .then((response) => {
              console.log("cancel-subscription -> ", response);
              let data = response.data;
              if (response.status === 200) {
                if (data.status) {
                  Vue.$toast.success(`${data.message}`);
                  this.loader = false;

                  // this.getSubsciptions();
                  this.$router.go();
                } else {
                  Vue.$toast.error(`${data.error}`);
                  this.loader = false;
                }
              } else {
                Vue.$toast.error(`${data.error}`);
                this.loader = false;
              }
            })
            .catch((err) => {
              console.log("err -> ", err);
              this.loader = false;
              Vue.$toast.error(`${err}`);
            });
        } else if (result.isDenied) {
          this.loader = false;
        }
      });
    },
    renewSubscription(item) {
      let plan = item;
      debugger;
      this.$router.push(`/dashboard/payment?id=${item.pkg_id}`);
    },
  },
  mounted() {
    this.getSubsciptions();
  },
};
</script>

<style scoped lang="scss">
.custom-btn-1 {
  background-color: #93652b;
  outline: none;
  border: none;
  border-radius: 10px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 1rem 2rem;
  transition: all ease 0.5s;
}
.custom-btn-1:hover {
  background-color: #b69873;
}
.custom-btn-2 {
  outline: none;
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 1rem 2rem;
  transition: all ease 0.5s;
}
</style>