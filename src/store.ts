import { defineStore } from 'pinia'

interface StoreState {
  items: string[]
}

const defaultState = (): StoreState => ({
  items: [],
})

export const useStore = defineStore('store', {
  state: defaultState,
  actions: {
    fetchSomething() {
      console.log(
        'store.ts:fetchSomething',
        'Should be fetched only once on SSR!'
      )

      this.items = ['foo']
    },
  },
})
