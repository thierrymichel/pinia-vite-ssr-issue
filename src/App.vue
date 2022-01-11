<template>
  <main class="page wrapper">
    <strong>store instance</strong>
    <pre>{{ store.items.length }}</pre>
    <strong>initial state</strong>
    <pre>{{ initialState.pinia.store.items.length }}</pre>
    <strong>active instance</strong>
    <pre>{{ getActivePinia()?.state.value.store.items.length }}</pre>
  </main>
</template>

<script setup lang="ts">
import { useContext } from 'vite-ssr/vue'
import { getActivePinia } from 'pinia'
import { useStore } from '@/store'

const { initialState } = useContext()
const store = useStore()

console.log('Ok?', store.items.length === initialState.pinia.store.items.length && initialState.pinia.store.items.length === getActivePinia()?.state.value.store.items.length)
</script>
