import accountModule from '@/account/store/accountModule'
import boardModule from '@/board/store/boardModule'
import googleAuthenticationModule from '@/googleAuthentication/store/googleAuthenticationModule'
import kakaoAuthenticationModule from '@/kakaoAuthentication/store/kakaoAuthenticationModule'
import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    boardModule,
    accountModule,
    googleAuthenticationModule,
    kakaoAuthenticationModule,
  }
})
