import firebase from 'firebase/app'
import 'firebase/auth'
import { currentUser, isAuthGuardActive,apiUrl,headers } from '../../constants/config'
import { setCurrentUser,set_token,getCurrentUser } from '../../utils'
// isAuthGuardActive ? getCurrentUser() : currentUser
import { CometChat } from "@cometchat-pro/chat";
import { COMETCHAT_CONSTANTS } from "@/constants/config";
import Vue from 'vue';
import axios from 'axios';
export default {
  state: {
    currentUser: {},
    currentToken: "",
    loginError: null,
    processing: false,
    forgotMailSuccess: null,
    resetPasswordSuccess: null
  },
  getters: {
    currentUser: state => state.currentUser,
    currentToken: state => state.currentToken,
    processing: state => state.processing,
    loginError: state => state.loginError,
    forgotMailSuccess: state => state.forgotMailSuccess,
    resetPasswordSuccess: state => state.resetPasswordSuccess,
  },
  mutations: {
    setUser(state, payload) {
      
      state.currentUser = payload
      state.processing = false
      state.loginError = null
    },
    settoken(state, payload) {
      
      state.currentToken = payload
      state.processing = false
      state.loginError = null
    },
    
    setUserFromRegistration(state, payload) {
      state.currentUser = payload
    },
    setLogout(state) {
      state.currentUser = null,
      state.currentToken =  null,
      state.processing = false
      state.loginError = null
    },
    setProcessing(state, payload) {
      state.processing = payload
      state.loginError = null
    },
    setError(state, payload) {
      state.loginError = payload
      state.currentUser = null
      state.processing = false
    },
    setForgotMailSuccess(state) {
      state.loginError = null
      state.currentUser = null
      state.processing = false
      state.forgotMailSuccess = true
    },
    setResetPasswordSuccess(state) {
      state.loginError = null
      state.currentUser = null
      state.processing = false
      state.resetPasswordSuccess = true
    },
    clearError(state) {
      state.loginError = null
    }
  },
  actions: {
    login({ commit }, payload) {
      commit('clearError')
      commit('setProcessing', true)    
      axios
      .post(`${apiUrl}/auth/login`, payload)
        .then((res) => {
          const data = res.data;
        console.log("res -> ", res);
          if (res.status === 200) {
          if (data.status == true) {
                const profile = data.user;
                const token = data.token
                setCurrentUser(profile)
                commit('setUser', profile)
                set_token(token)
                commit('settoken', token)
            }
          else
          {
            setCurrentUser(null);
            commit('setError', data.message)
            setTimeout(() => {
              commit('clearError')
            }, 3000)
          }
        } else {
          setCurrentUser(null);
          commit('setError', "something went wrong")
          setTimeout(() => {
            commit('clearError')
          }, 3000)
        }
      }) 
      .catch((err) => {
        setCurrentUser(null);
        commit('setError',err)
        setTimeout(() => {
          commit('clearError')
        }, 3000)
      });
    },
    forgotPassword({ commit }, payload) {
      commit('clearError')
      commit('setProcessing', true)
      axios
      .post(`${apiUrl}/auth/forget-password`, payload)
      .then((res) => {
        if (res.status === 200) {
          
          commit('clearError')
          commit('setForgotMailSuccess')
          Vue.$toast.success(`Email Sent, Please check your email!`)
        }
        else {
          commit('setError', "something went wrong")
          setTimeout(() => {
            commit('clearError')
          }, 3000)
        }
      }) 
      .catch((err) => {
        commit('setError',"something went wrong")
        setTimeout(() => {
          commit('clearError')
        }, 3000)
      });
      // firebase
      //   .auth()
      //   .sendPasswordResetEmail(payload.email)
      //   .then(() => {
      //     console.log(`forgot password email sent on -> ${payload.email}`)
      //     commit('clearError')
      //     commit('setForgotMailSuccess')
      //     Vue.$toast.success(`Email Sent, Please check your email!`)
      //   }).catch((err)=>{
      //     console.log('forgot password err -> ',err.message)
      //     commit('setError', err.message)
      //     setTimeout(() => {
      //       commit('clearError')
      //     }, 3000)
      //   })
     },
    resetPassword({ commit }, payload) {

      commit('clearError')
      commit('setProcessing', true)
      axios
      .post(`${apiUrl}/auth/reset-password`, payload)
      .then((res) => {
        if (res.status === 200) {
          commit('clearError')
          commit('setResetPasswordSuccess')
          Vue.$toast.success(`Pzssword Reset Successfull`)
        }
        else {
          commit('setError', "something went wrong")
          setTimeout(() => {
            commit('clearError')
          }, 3000)
        }
      }) 
      .catch((err) => {
        commit('setError',"something went wrong")
        setTimeout(() => {
          commit('clearError')
        }, 3000)
      });





     
      firebase
        .auth()
        .confirmPasswordReset(payload.resetPasswordCode, payload.newPassword)
        .then(
          user => {
            
          },
          err => {
            console.log('reset password err -> ',err.message)
            commit('setError', err.message)
            setTimeout(() => {
              commit('clearError')
            }, 3000)
          }
        )
    },
    signOut({ commit }) {
      
     //sessionStorage.clear();
     
      axios
      .get(`${apiUrl}/auth/logout`,{headers})
      .then((resp) => {
          if(resp.data.status ==  true){
            setCurrentUser(null);
            set_token(null);
            commit('setLogout')
            localStorage.clear();
          }
        }
      )
    },
    setRegisteredUser({ commit }, payload) {
      
      commit('setUserFromRegistration', payload)
    },
    clearRegisteredUser({ commit }) {
      commit('setLogout')
    }
  }
}
