import { useStore } from '@/store'

export const doSomethingWithStore = () => {
  const store = useStore()

  setTimeout(() => {
    // Use some store action later (maybe)
    store.fetchSomething()
  }, 1000 * 60 * 60)
}
