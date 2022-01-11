# ViteSSR + Pinia debug

> see `src/main.ts`

This does not work:

```ts
// This does not work
doSomethingWithStore()

if (import.meta.env.SSR) {
  const store = useStore()
  store.fetchSomething()
  initialState.pinia = pinia.state.value
} else {
  pinia.state.value = initialState.pinia
}
```

I'm not sure about how this works : `pinia.state.value = initialState.pinia`
Because store looks good at the initialization and is "resetted" (you should see some `FOUS` - Flash Of Unset Store…)

I guess it's about instances and related to the use of `useStore()` inside `module.ts`
and thus on client AND server side … because this does not work also:

```ts
// Moving store assignation, does not work also
const store = useStore()

if (import.meta.env.SSR) {
  store.fetchSomething()
  initialState.pinia = pinia.state.value
} else {
  pinia.state.value = initialState.pinia
  // store change to his "initial state" on mounted
}
```

Current workaround

```ts
doSomethingWithStore()
const store = useStore()

if (import.meta.env.SSR) {
  store.fetchSomething()
  initialState.pinia = pinia.state.value
} else {
  // Patch the store state…
  store.$patch(initialState.pinia.store)
  pinia.state.value = initialState.pinia
}
```
