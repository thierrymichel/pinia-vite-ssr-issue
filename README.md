# ViteSSR + Pinia debug

> see `src/core/main.ts`

This does not work:

```ts
// This does not work
createGuards(context, chrome)

if (import.meta.env.SSR) {
  const chrome = useChromeStore()
  chrome.fetchChrome()
  initialState.pinia = pinia.state.value
} else {
  pinia.state.value = initialState.pinia
}
```

I'm not sure about how this works : `pinia.state.value = initialState.pinia`
Because chrome store looks good at the initialization and is "resetted" (you should see some `FOUS` - Flash Of Unset Store…)

I guess it's about instances and related to the use of `useChromeStore()` inside `guards.ts`
and thus on client AND server side … because this does not work also:

```ts
// Moving chrome assignation, does not work also
const chrome = useChromeStore()

if (import.meta.env.SSR) {
  chrome.fetchChrome()
  initialState.pinia = pinia.state.value
} else {
  pinia.state.value = initialState.pinia
  // chrome change to his "initial state" on mounted
}
```

Current workaround

```ts
createGuards(context)
const chrome = useChromeStore()

if (import.meta.env.SSR) {
  chrome.fetchChrome()
  initialState.pinia = pinia.state.value
} else {
  // Patch the chrome state…
  chrome.$patch(initialState.pinia.chrome)
  pinia.state.value = initialState.pinia
}
```
