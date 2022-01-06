import { defineStore } from 'pinia'

interface ChromeState {
  nav: string[]
}

const defaultState = (): ChromeState => ({
  nav: [],
})

export const useChromeStore = defineStore('chrome', {
  state: defaultState,
  actions: {
    fetchChrome() {
      console.log(
        'stores/chrome.ts:fetchChrome',
        'Should be fetched only once on SSR!'
      )

      this.nav = ['Home']
    },
  },
})
