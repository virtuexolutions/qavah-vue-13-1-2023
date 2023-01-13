import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user';
import chat from './modules/chat';
import firebase from 'firebase/app'
import 'firebase/firestore'
import { currentUser, isAuthGuardActive,apiUrl,firebaseConfig,headers } from '../constants/config'
import { setCurrentUser, getCurrentUser } from '../utils'
import Swal from 'sweetalert2';


import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { setCurrentLanguage } from '../utils'
import axios from 'axios';



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notifications: [],
    notificationsOnce: [],
    match: [],
    matchMe: []
  },
  getters: {
    getMatch : state => state.match,
    getMatchMe : state => state.matchMe,
    getNotifications: state => state.notifications,
    getNotificationsOnce: state => state.notificationsOnce,
  },
  mutations: {
    changeLang (state, payload) {
      app.$i18n.locale = payload
      setCurrentLanguage(payload);
    },
    setNotificationsOnce (state, payload) {
      state.notificationsOnce = payload
    },
    addMatch (state,payload) {
      state.match.push(payload)
    },
    ...vuexfireMutations
  },
  actions: {
    setLang ({ commit }, payload) {
      commit('changeLang', payload)
    },
    getNotificationsOnceAction({commit}, payload) {
      let notificationsRef = db.collection('notifications').doc(payload).collection('notifications');

      notificationsRef.get().then((snapshot)=>{
         if(!snapshot.empty) {
           let notifications = [];
           snapshot.forEach((x)=>{
             notifications.push(x.data())
           })

           commit('setNotificationsOnce', notifications)
         } 
      }).catch((err)=>{
        console.log('Get Notifications Once -> ',err)
      })
    },
    bindNotifications: firestoreAction(({ state, getters, bindFirestoreRef, unbindFirestoreRef }) => {
      let userObject = getCurrentUser();
      if(userObject) {
        id = userObject.uid;
      }
      if(!id) {
        id = "FoSmfZc6qzZviYx5J0aad1kLgyq1"
      }
      console.log('====================================');
      console.log('Store -> Got User Id -> ',id);
      console.log('====================================');
      let allnotifications = bindFirestoreRef('notifications', db.collection('notifications').doc(id).collection('notifications').where('show','==',false),{reset:true});
      // let watchNotifications = getters.getNotifications;
      // console.log('watchNotifications -> ',watchNotifications);  
      // allnotifications.then((data)=>{
      //   console.log('====================================');
      //   console.log('All Notifications Inside bindNotifications -> ',data);
      //   console.log('====================================');
      // })
      return allnotifications
    }),
    popupShowed ({commit,getters},payload) {
      try {
        let userObject = getCurrentUser();
        if(userObject) {
          id = userObject.uid;
        }
        db.collection('notifications').doc(id).collection('notifications').doc(payload).update({
          show:true
        })
      } catch (error) {
        console.log('error -> ',error)
      }
    },
    notificationShowed ({commit,getters},payload) {
      try {
        let userObject = getCurrentUser();
        if(userObject) {
          id = userObject.uid;
        }
        if(!id) {
          id = "FoSmfZc6qzZviYx5J0aad1kLgyq1"
        }
        db.collection('notifications').doc(id).collection('notifications').doc(payload).update({
          show:true
        })
      } catch (error) {
        console.log('error -> ',error)
      }
    },
    async likedUser({commit},payload) {
      let body = {
        ...payload
      };
      
      console.log("liked -> ", body);

      axios
        .post(`${apiUrl}/swap/liked`, body ,{headers})
        .then((res) => {
          console.log("res -> ", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              if(data.matched) {
                Vue.$toast.default(
                  `You are matched with ${payload.targetName} successfully!`
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
                });
              } else {
                Vue.$toast.default(
                  `You have liked ${payload.targetName} profile successfully!`
                );
              }
              
            } else {
              Vue.$toast.error(`Cannot LIKE ${payload.targetName}, Err: ${data.error}`);
            }
          } else {
            Vue.$toast.error(`Unknown Error Occured`);
          }
        })
        .catch((err) => {
          Vue.$toast.error(`${err.message}`);
          console.log("err -> ", err);
        });
    },
    async dislikeUser({commit},payload) {
      let body = {
        ...payload
      };
      console.log("disliked -> ", body);
      axios
        .post(`${apiUrl}/swap/disliked`, body , {headers})
        .then((res) => {
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              // Vue.$toast.default(`You have lo ${targetName} successfully !`);
            } else {
              // Vue.$toast.error(`Cannot lo ${targetName} , Err: ${data.error}`);
              console.log(`Cannot dislike ${payload.targetName} , Err: ${data.error}`);
            }
          } else {
            // Vue.$toast.error(`Unknown Error Occured`);
            console.log("err -> ", data.error);
          }
        })
        .catch((err) => {
          console.log("err -> ", err);
          // Vue.$toast.error(`${err.message}`);
        });
    },
    async superlikeUser({commit},payload) {
      let body = {
       ...payload
      };

      console.log("superLiked -> ", body);

      axios
        .post(`${apiUrl}/swap/superLiked`, body,{headers})
        .then((res) => {
          const data = res.data;
          console.log("data -> ", data);
          if (res.status === 200) {
            if (data.status) {
              if(data.matched) {
                Vue.$toast.default(
                  `You are matched with ${payload.targetName} successfully!`
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
                });
              } else {
                Vue.$toast.default(
                  `You have superfancy ${payload.targetName} successfully!`
                );
              } 
             
            } else {
              console.log("error -> ", data.error);
              Vue.$toast.error(`${data.error}`);
            }
          } else {
            Vue.$toast.error(`Unknown Error Occured`);
          }
        })
        .catch((err) => {
          console.log("err -> ", err);
          Vue.$toast.error(`${err.message}`);
        });
    },
    async rewindUser({commit},payload) {
      let body = {
       ...payload
      };

      console.log("rewind -> ", body);
      axios
        .post(`${apiUrl}/swap/rewind`, body ,{headers})
        .then((res) => {
          console.log("res -> ", res);
          const data = res.data;
          if (res.status === 200) {
            if (data.status) {
              // Vue.$toast.success(
              //   `You have rewinded ${payload.targetName} successfully!`
              // );
            } else {
              Vue.$toast.error(`${data.error}`);
            }
          } else {
            Vue.$toast.error(`${data.error}`);
          }
        })
        .catch((err) => {
          console.log("err -> ", err);
          Vue.$toast.error(`${err.message}`);
        });
    }
  },
  modules: {
    user,
    chat
  }
})