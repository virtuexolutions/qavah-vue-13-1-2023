<template>
  <div :style="styles.userDetail" class="cometchat__detailpane">
    <div :style="styles.header">
      <div
        :style="styles.headerClose"
        class="cometchat__header__close"
        @click="emitAction('closeDetailClicked')"
      ></div>
      <h4 :style="styles.headerTitle">{{ STRINGS.DETAILS }}</h4>
    </div>
    <div :style="styles.section" class="cometchat__detailpane__section">
      <div
        :style="styles.privacySection"
        class="cometchat__detailpane__section__privacy"
      >
        <h6 :style="styles.sectionHeader">{{ STRINGS.OPTIONS }}</h6>
        <div :style="styles.sectionContent">
          <div
            :style="styles.contentItem"
            class="cometchat__detailpane__content__item"
          >
            <!-- emitAction(item.blockedByMe ? 'unblockUser' : 'blockUser') -->
            <div
              v-if="!item.blockedByMe"
              :style="styles.itemLink"
              @click="blockUser(item.uid, item.name, item.avatar)"
            >
              {{ item.blockedByMe ? STRINGS.UNBLOCK_USER : STRINGS.BLOCK_USER }}
            </div>
            <div
              v-if="item.blockedByMe"
              :style="styles.itemLink"
              @click="unblockUser(item.uid, item.name)"
            >
              {{ item.blockedByMe ? STRINGS.UNBLOCK_USER : STRINGS.BLOCK_USER }}
            </div>
            <div class="mt-1" @click="unmatch(item.uid, item.name)">
              Unmatch User?
            </div>
          </div>
        </div>
      </div>
      <comet-chat-shared-media-view
        :item="item"
        :type="type"
        :theme="theme"
        container-height="50px"
      />
    </div>
  </div>
</template>
<script>
import {
  COMETCHAT_CONSTANTS,
  DEFAULT_OBJECT_PROP,
  DEFAULT_STRING_PROP,
} from "../../../resources/constants";
import axios from "axios";
import Vue from "vue";
import { apiUrl, headers } from "@/constants/config";
import { propertyCheck, cometChatCommon } from "../../../mixins/";
import { CometChatSharedMediaView } from "../../Shared";
import navigateIcon from "./resources/navigate.png";
import * as style from "./style";
import { mapGetters } from "vuex";

/**
 * Displays details for the user of current chat.
 *
 * @displayName CometChatUserDetails
 */
export default {
  name: "CometChatUserDetails",
  mixins: [propertyCheck, cometChatCommon],
  components: { CometChatSharedMediaView },
  props: {
    /**
     * The selected chat item object.
     */
    item: { ...DEFAULT_OBJECT_PROP },
    /**
     * Type of chat item.
     */
    type: { ...DEFAULT_STRING_PROP },
    /**
     * Theme of the UI.
     */
    theme: { ...DEFAULT_OBJECT_PROP },
  },
  computed: {
    ...mapGetters(["currentUser"]),
    /**
     * Computed styles for the component.
     */
    styles() {
      return {
        section: style.sectionStyle(),
        header: style.headerStyle(this.theme),
        contentItem: style.contentItemStyle(),
        headerTitle: style.headerTitleStyle(),
        sectionContent: style.sectionContentStyle(),
        userDetail: style.userDetailStyle(this.theme),
        itemLink: style.itemLinkStyle(true, this.theme),
        headerClose: style.headerCloseStyle(navigateIcon),
        sectionHeader: style.sectionHeaderStyle(this.theme),
        privacySection: style.privacySectionStyle(this.theme),
      };
    },
    /**
     * Local string constants.
     */
    STRINGS() {
      return COMETCHAT_CONSTANTS;
    },
  },
  methods: {
    unblockUser(targetUid, targetName) {
      this.loader = true;

      let data = {
        myUid: this.currentUser.uid,
        targetsUid: targetUid,
        targetName: targetName,
      };

      console.log("body -> ", data);

      axios
        .post(`${apiUrl}/settings/unblock-profile`, data, { headers })
        .then((response) => {
          console.log("unblock user profile -> ", response);
          const data = response.data;
          if (response.status === 200) {
            if (data.status) {
              console.log("block user data -> ", data);
              Vue.$toast.default(`${targetName} is now unblocked!`);
              this.loader = false;
              this.$router.go();
            } else {
              // console.log("block user data -> ", data);
              // Vue.$toast.error(data.error);
              console.log("err -> ", data.error);
              Vue.$toast.error(data.error);
              this.loader = false;
            }
          } else {
            console.log(response);
            Vue.$toast.error(data.error);
            this.loader = false;
          }
        })
        .catch((e) => {
          console.log(e);
          Vue.$toast.error(e);
          this.loader = false;
        });
    },
    unmatch(targetUid, name) {
      this.loader = true;

      let data = {
        myUid: this.currentUser.uid,
        targetsUid: targetUid,
        myName: this.currentUser.displayName,
        targetName: name,
      };

      // Vue.$toast.default(`You are unmatched with ${name} !`);

      console.log("body -> ", data);

      axios
        .post(`${apiUrl}/settings/unmatch2_user`, data, { headers })
        .then((response) => {
          // console.log("res -> ", response);
          const data = response.data;
          if (response.status === 200) {
            if (data.status) {
              this.loader = false;
              Vue.$toast.default(`You are unmatched with ${name}!`);
              this.$router.go();
            } else {
              this.loader = false;
              Vue.$toast.error(data.error);
            }
          } else {
            console.log(response);
            this.loader = false;
            Vue.$toast.error(data.error);
          }
        })
        .catch((err) => {
          this.loader = false;
          Vue.$toast.error(err);
        });
    },
    blockUser(targetUid, targetName, targetImage) {
      this.loader = true;

      let data = {
        myUid: this.currentUser.uid,
        targetsUid: targetUid,
        targetName: targetName,
        targetImage: targetImage,
      };

      console.log("body -> ", data);

      axios
        .post(`${apiUrl}/settings/block-profile`, data)
        .then((response) => {
          console.log("block user profile -> ", response);
          const data = response.data;
          if (response.status === 200) {
            if (data.status) {
              console.log("block user data -> ", data);
              Vue.$toast.default(`${targetName} is now blocked!`);
              this.loader = false;
              this.$router.go();
            } else {
              // console.log("block user data -> ", data);
              // Vue.$toast.error(data.error);
              console.log("err -> ", data.error);
              Vue.$toast.error(data.error);
              this.loader = false;
            }
          } else {
            console.log(response);
            Vue.$toast.error(data.error);
            this.loader = false;
          }
        })
        .catch((e) => {
          console.log(e);
          Vue.$toast.error(e);
          this.loader = false;
        });
    },
  },
};
</script>
<style scoped>
.cometchat__detailpane * {
  box-sizing: border-box;
  font-family: var(--detailpane-font-family);
}
.cometchat__detailpane__section:not(:last-of-type) {
  margin-bottom: 16px;
}
.cometchat__detailpane__section__privacy > div {
  color: var(--privacy-color-red);
  font-weight: 600;
  cursor: pointer;
  font-size: 12px;
}
.cometchat__detailpane__content__item:not(:first-of-type):not(:last-of-type) {
  padding: 6px 0px;
}
@media (min-width: 320px) and (max-width: 767px) {
  .cometchat__header__close {
    display: block !important;
  }
}
</style>