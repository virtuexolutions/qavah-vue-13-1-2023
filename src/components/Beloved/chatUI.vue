<template>
  <div class="">
    <b-card class="web-chat">
      <CometChatUserListWithMessages />
    </b-card>

    <b-card class="mobile-chat">
      <CometChatUserListWithMessages />
    </b-card>
  </div>
</template>

<script>
import { CometChatUserListWithMessages } from "@/cometchat-pro-vue-ui-kit/CometChatWorkspace/src";
export default {
  components: {
    CometChatUserListWithMessages,
  },
};
</script>

<style scoped>
/* Mobile Screen Classes */
@media only screen and (max-width: 992px) {
  .web-chat {
    display: none;
  }
  .mobile-chat {
    display: block;
    min-height: 90vh;
    padding: 1rem;
  }
}

/* Laptop Screen Classes */
@media only screen and (min-width: 992px) {
  .web-chat {
    display: block;
    min-height: 80vh;
  }
  .mobile-chat {
    display: none;
  }
}
</style>
