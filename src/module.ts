import { useStore } from '@/store'

export const doSomethingWithStore = () => {
  // Use the store inside some outer module
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const store = useStore()
}
