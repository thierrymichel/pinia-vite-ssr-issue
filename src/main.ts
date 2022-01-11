import viteSSR from 'vite-ssr'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import { doSomethingWithStore } from '@/module'
import { useStore } from '@/store'

export default viteSSR(
  App,
  {
    routes: [],
  },
  context => {
    const { app, initialState } = context
    const pinia = createPinia()

    app.use(pinia)

    doSomethingWithStore()

    // This does not work
    if (import.meta.env.SSR) {
      const store = useStore()
      store.fetchSomething()
      initialState.pinia = pinia.state.value
    } else {
      pinia.state.value = initialState.pinia
    }

    // This works
    // const store = useStore()

    // if (import.meta.env.SSR) {
    //   store.fetchSomething()
    //   initialState.pinia = pinia.state.value
    // } else {
    //   store.$patch(initialState.pinia.store)
    //   pinia.state.value = initialState.pinia
    // }
  }
)
