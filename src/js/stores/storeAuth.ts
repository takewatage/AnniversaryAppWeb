import { defineStore } from 'pinia'
import { auth } from '@/firebase'
import User from '@/js/models/User'
import { Ref } from 'vue'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return {
      user: new User().getPostable()
    }
  },
  actions: {
    init() {
      onAuthStateChanged(auth, (_user) => {
        if(_user) {
          this.user = new User({..._user})
          console.log("logined!!!!")
        } else {
          console.log("no login")
        }
      })
      console.log(this.user.value)
    },
    async registerUser(user: Ref<User>) {
      console.log('register', user.value.email)
      return await new Promise<void>((resolve, reject) => {
        return createUserWithEmailAndPassword(auth, user.value.email, user.value.password)
          .then((userCredential) => {
            console.log(userCredential.user)
          })
          .catch((e) => {
            console.error(e.code)
            console.error(e.message)
            reject()
          })
      })
    },

    async loginUser(user: Ref<User>) {
      console.log('login', user.value)
      return await new Promise<void>((resolve, reject) => {
        return signInWithEmailAndPassword(auth, user.value.email, user.value.password)
          .then((userCredential) => {
            console.log('login!')
            console.log(userCredential.user)
          })
          .catch(reject)
      })
    },

    async logout() {
      await new Promise<void>((resolve, reject) => {
        signOut(auth)
          .then(() => {
            console.log('sign out!!')
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },
  getters: {},
})
