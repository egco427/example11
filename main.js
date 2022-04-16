import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import {initializeApp} from "firebase/app"
import {getAuth, onAuthStateChanged} from "firebase/auth"

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

let app
let auth

const firebaseConfig = {
  apiKey: "AIzaSyBCJ7E64smGi_K9tv0Ps0UJ9s4TnkR7xbQ",
  authDomain: "egco427-7585e.firebaseapp.com",
  projectId: "egco427-7585e",
  storageBucket: "egco427-7585e.appspot.com",
  messagingSenderId: "4180118129",
  appId: "1:4180118129:web:ffc397f2c95e5ca6baa9d0"
}

  initializeApp(firebaseConfig)
  auth = getAuth()

onAuthStateChanged( auth, (user)=>{
    if(!app) {
        app = createApp(App).use(router).mount('#app')
    }
})

