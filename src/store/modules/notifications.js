import firebase from 'firebase/app'
import 'firebase/firestore'
import { currentUser, isAuthGuardActive,apiUrl,firebaseConfig } from '../../constants/config'

if(!firebase.apps.length) {
    const db = firebase.initializeApp(firebaseConfig).firestore()
} else {
    const db = firebase.firestore();
}



import 'firebase/auth'
import Vue from 'vue';
import axios from 'axios';

export default {
  state: {
    notifications: []
  },
  getters: {

  },
  mutations: vuexfireMutations,
  actions: {
   
  }
}
