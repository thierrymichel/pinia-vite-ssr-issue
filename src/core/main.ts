import viteSSR from 'vite-ssr'
import { createPinia } from 'pinia'
import App from '@/core/App.vue'
import routes from '@/router/routes'
import { createGuards } from '@/router/guards'
import { useChromeStore } from '@/stores/chrome'

export default viteSSR(
  App,
  {
    routes,
  },
  context => {
    const { app, initialState } = context
    const pinia = createPinia()

    app.use(pinia)

    createGuards(context)

    if (import.meta.env.SSR) {
      const chrome = useChromeStore()
      chrome.fetchChrome()
      initialState.pinia = pinia.state.value
    } else {
      // chrome.$patch(initialState.pinia.chrome)
      pinia.state.value = initialState.pinia
    }
  }
)
