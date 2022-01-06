import { SharedContext } from 'vite-ssr/utils/types'
import { Router } from 'vue-router'
import { useChromeStore } from '@/stores/chrome'

interface SSRContext extends SharedContext {
  router: Router
}

export const createGuards = ({ router }: SSRContext) => {
  const chrome = useChromeStore()

  // Log
  router.beforeEach((to, from, next) => {
    if (to.params.lang === 'hasChanged') {
      chrome.fetchChrome()
    }

    next()
  })
}
