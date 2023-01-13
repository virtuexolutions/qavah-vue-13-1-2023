<template>
  <div class="activeConversations">
    <h2 class="mb-4">Matches</h2>

    <b-badge variant="primary">New</b-badge>

    <div class="talk-to-expert">
      <div class="bottom-card">
        <div class="header">
          <b-link class="title">
            Talk To An Expert
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
              />
            </svg>
          </b-link>
          <p class="m-0 p-0">Get Expert profile tips</p>
        </div>

        <b-avatar-group size="30px">
          <b-avatar></b-avatar>
          <b-avatar text="BV" variant="primary"></b-avatar>
          <b-avatar icon="music-note" variant="success"></b-avatar>
        </b-avatar-group>
      </div>
    </div>

    <hr />

    <b-tabs class="mt-4" pills align="center">
      <b-tab
        :title="'Active Conversations (' + activeconversations.length + ')'"
        active
      >
        <div class="conversation-container">
          <vue-perfect-scrollbar
            class="inner-chat-container scroll"
            :settings="{ suppressScrollX: true, wheelPropagation: false }"
            ref="chatArea"
          >
            <div
              v-for="(person, index) in activeconversations"
              :key="index"
              class="conversation-card"
              @click="selectConversation(person)"
            >
              <div class="left">
                <b-avatar
                  size="lg"
                  rounded="lg"
                  :src="person.thumbnail"
                  badge
                  badge-variant="success"
                >
                </b-avatar>
                <div class="info">
                  <h4 class="name p-0 m-0">{{ person.name }}</h4>
                  <p class="time p-0 m-0">{{ person.time }}</p>
                  <p class="time p-0 m-0">now</p>
                </div>
              </div>
              <div class="notification-badge" v-if="person.notifications">
                <b-badge variant="light">{{ person.notifications }}</b-badge>
              </div>
            </div>
          </vue-perfect-scrollbar>
        </div>
      </b-tab>
      <b-tab :title="'Archived (' + archivedconversations.length + ')'">
        <div class="conversation-container">
          <vue-perfect-scrollbar
            class="inner-chat-container scroll"
            :settings="{ suppressScrollX: true, wheelPropagation: false }"
            ref="chatArea"
          >
            <div
              v-for="(person, index) in archivedconversations"
              :key="index"
              class="conversation-card"
              @click="selectConversation(person)"
            >
              <div class="left">
                <b-avatar
                  size="lg"
                  rounded="lg"
                  :src="person.thumbnail"
                  badge
                  badge-variant="success"
                >
                </b-avatar>
                <div class="info">
                  <h4 class="name p-0 m-0">{{ person.name }}</h4>
                  <p class="time p-0 m-0">{{ person.time }}</p>
                  <p class="time p-0 m-0">now</p>
                </div>
              </div>
              <div class="notification-badge" v-if="person.notifications">
                <b-badge variant="light">{{ person.notifications }}</b-badge>
              </div>
            </div>
          </vue-perfect-scrollbar>
        </div>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  props: [
    "activeconversations",
    "archivedconversations",
    "currentConversation",
  ],
  data() {
    return {
      watchedCurrentConversation: {
        name: "",
      },
    };
  },
  methods: {
    selectConversation(conversation) {
      this.$emit("select-conversation", conversation);
    },
  },
  watch: {
    currentConversation(newval) {
      if (newval !== undefined) {
        this.watchedCurrentConversation = newval;
      }
    },
  },
  mounted() {
    // console.log("this.activeconversations -> ", this.activeconversations);
    // console.log("this.archivedconversations -> ", this.archivedconversations);
  },
};
</script>

<style scoped>
.activeConversations {
  background-color: #fff;
  padding: 1rem;
  border: 1px solid #c3c5c5;
}

.inner-chat-container {
  height: 450px;
}

.bottom-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.bottom-card .header {
  display: flex;
  flex-direction: column;
}

.bottom-card .header .title {
  font-size: 1.2rem;
}

.bottom-card .header .subtitle {
  font-size: 0.8rem;
}

.conversation-container {
  width: 100%;
}

.conversation-card {
  width: 100%;
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
}

.conversation-card:hover {
  background-color: #d6d3d1;
  cursor: pointer;
}

.conversation-card .left {
  display: flex;
  gap: 0.5rem;
}
</style>
