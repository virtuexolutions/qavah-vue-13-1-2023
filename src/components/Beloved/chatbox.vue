<template>
  <div class="chatbox">
    <!-- <CometChatMessagesList />
    <CometChatMessages /> -->
  </div>
</template>

<script>
// import CometChatMessagesList from "./Messages/CometChatMessageList/CometChatMessageList.vue";
// import CometChatMessages from "./Messages/CometChatMessages/CometChatMessages.vue";
// import CometChatActionMessageBubble from "./Messages/CometChatActionMessageBubble/CometChatActionMessageBubble";
// import CometChatDeleteMessageBubble from "./Messages/CometChatDeleteMessageBubble/CometChatDeleteMessageBubble";
// import CometChatSenderTextMessageBubble from "./Messages/CometChatSenderTextMessageBubble/CometChatSenderTextMessageBubble";
// import CometChatSenderFileMessageBubble from "./Messages/CometChatSenderFileMessageBubble/CometChatSenderFileMessageBubble";
// import CometChatSenderImageMessageBubble from "./Messages/CometChatSenderImageMessageBubble/CometChatSenderImageMessageBubble";
// import CometChatSenderVideoMessageBubble from "./Messages/CometChatSenderVideoMessageBubble/CometChatSenderVideoMessageBubble";
// import CometChatSenderAudioMessageBubble from "./Messages/CometChatSenderAudioMessageBubble/CometChatSenderAudioMessageBubble";
// import CometChatReceiverTextMessageBubble from "./Messages/CometChatReceiverTextMessageBubble/CometChatReceiverTextMessageBubble";
// import CometChatReceiverFileMessageBubble from "./Messages/CometChatReceiverFileMessageBubble/CometChatReceiverFileMessageBubble";
// import CometChatReceiverImageMessageBubble from "./Messages/CometChatReceiverImageMessageBubble/CometChatReceiverImageMessageBubble";
// import CometChatReceiverVideoMessageBubble from "./Messages/CometChatReceiverVideoMessageBubble/CometChatReceiverVideoMessageBubble";
// import CometChatReceiverAudioMessageBubble from "./Messages/CometChatReceiverAudioMessageBubble/CometChatReceiverAudioMessageBubble";
// import CometChatSenderPollMessageBubble from "./Messages/Extensions/CometChatSenderPollMessageBubble/CometChatSenderPollMessageBubble";
// import CometChatReceiverPollMessageBubble from "./Messages/Extensions/CometChatReceiverPollMessageBubble/CometChatReceiverPollMessageBubble";
// import CometChatSenderStickerMessageBubble from "./Messages/Extensions/CometChatSenderStickerMessageBubble/CometChatSenderStickerMessageBubble";
// import CometChatReceiverStickerMessageBubble from "./Messages/Extensions/CometChatReceiverStickerMessageBubble/CometChatReceiverStickerMessageBubble";
// import CometChatUI from "./CometChatUI/CometChatUI.vue";

import Vue from "vue";
import EmojiPicker from "vue-emoji-picker";
Vue.use(EmojiPicker);
export default {
  props: ["messages", "currentConversation"],
  components: {},
  data() {
    return {
      showEmojiDialog: false,
      messageInput: "",
      search: "",
      watchedCurrentConversation: {
        name: "",
      },
    };
  },
  methods: {
    toogleDialogEmoji() {
      // console.log("Toogle!");
      this.showEmojiDialog = !this.showEmojiDialog;
    },
    onSelectEmoji(emoji) {
      this.messageInput += emoji;
      // Optional
      // this.toogleDialogEmoji();
    },
    formatDate(date) {
      const d = new Date(date);
      return d.toLocaleString();
    },
    scrollToEnd() {
      setTimeout(() => {
        const container = this.$refs.chatArea.$el;
        container.scrollTop = container.scrollHeight;
      }, 0);
    },
    sendMessage() {
      this.$emit("send-message", this.messageInput);

      this.messageInput = "";
    },
    isToday(someDate) {
      const somedate = new Date(someDate);
      const today = new Date();
      return (
        somedate.getDate() == today.getDate() &&
        somedate.getMonth() == today.getMonth() &&
        somedate.getFullYear() == today.getFullYear()
      );
    },
    dateDiffInDays(a, b) {
      const _MS_PER_DAY = 1000 * 60 * 60 * 24;
      // Discard the time and time-zone information.
      const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
      const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

      if (
        a.getFullYear() == b.getFullYear() &&
        a.getMonth() == b.getMonth() &&
        a.getDate() == b.getDate()
      ) {
        // console.log("same");
      } else {
        // console.log("notsame ");
      }

      return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    },
  },
  watch: {
    currentConversation(newval) {
      // console.log("newval -> ", newval);
      if (newval !== undefined) {
        this.watchedCurrentConversation = newval;
      }
    },
  },
  mounted() {
    // this.scrollToEnd();
  },
  updated() {
    // this.scrollToEnd();
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
};
</script>

<style scoped>
/* .emoji-picker {
  position: absolute;
  z-index: 99999;
} */

.date {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.emoji-invoker {
  height: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
}
.emoji-invoker:hover {
  transform: scale(1.1);
}
.emoji-invoker > svg {
  fill: #b1c6d0;
}

.emoji-picker {
  position: absolute;
  top: 0 !important;
  left: -250px !important;
  z-index: 1;
  font-family: Montserrat;
  border: 1px solid #ccc;
  width: 15rem;
  height: 20rem;
  overflow: scroll;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 1px 1px 8px #c7dbe6;
}
.emoji-picker__search {
  display: flex;
}
.emoji-picker__search > input {
  flex: 1;
  border-radius: 10rem;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  outline: none;
}
.emoji-picker h5 {
  margin-bottom: 0;
  color: #b1b1b1;
  text-transform: uppercase;
  font-size: 0.8rem;
  cursor: default;
}
.emoji-picker .emojis {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.emoji-picker .emojis:after {
  content: "";
  flex: auto;
}
.emoji-picker .emojis span {
  padding: 0.2rem;
  cursor: pointer;
  border-radius: 5px;
}
.emoji-picker .emojis span:hover {
  background: #ececec;
  cursor: pointer;
}

.message-row-you {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}

.message-row-you .message-bubble {
  background-color: #93652b !important;
  color: #fff !important;
}

.message-row {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.emoji-toggler svg {
  fill: #c3c5c5;
}

.emoji-toggler svg:hover {
  fill: #93652b;
  cursor: pointer;
}

.chatbox {
  background-color: #fff;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid #c3c5c5;
}

.header-container .left {
  display: flex;
  gap: 1rem;
}

.header-container .left .info {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-container .actions {
  display: flex;
  gap: 1rem;
}

.header-container .actions svg {
  fill: #707276;
  stroke: #707276;
  transition: all 0.5s ease;
}

.header-container .actions .camera:hover {
  fill: #d0d1d1;
  stroke: #d0d1d1;
  cursor: pointer;
}

.custom-chatbox-field {
  width: 100%;
  padding: 1rem;
  border: 1px solid #c3c5c5;
  gap: 1rem;
  position: relative;
}

.custom-chatbox-field input {
  padding: 1rem;
  border-radius: 10px;
}

.chat-container {
  height: 500px;
  border: 1px solid #c3c5c5;
}

.inner-chat-container {
  height: 100%;
  width: 100%;
  padding: 0.7rem;
}

.inner-chat-container .message-bubble {
  display: flex;
  /* gap: 1rem; */
  width: auto;
  /* align-items: center; */
  background-color: #dfe1e3;
  border-radius: 10px;
  margin: 0.5rem 0;
  width: 320px;
  max-width: 100%;
  padding: 1rem;
}

.inner-chat-container .message-bubble .info {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
}

.inner-chat-container .message-bubble .info .title {
}
.inner-chat-container .message-bubble .info .text {
}
.inner-chat-container .message-bubble .info .time {
  font-size: 0.7rem;
  /* color: #dfe1e3; */
}

/* .ps-container {
  padding-left: 10px;
  margin-left: -10px;
  padding-right: 10px;
  margin-right: 0;
} */

/* .ps__scrollbar-y {
  right: 10px !important;
} */
</style>
