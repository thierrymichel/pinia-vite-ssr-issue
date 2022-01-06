<template>
  <main class="page wrapper">
    <strong>store instance</strong>
    <pre>{{ chrome.nav.length }}</pre>
    <strong>initial state</strong>
    <pre>{{ initialState.pinia.chrome.nav.length }}</pre>
    <strong>active instance</strong>
    <pre>{{ getActivePinia()?.state.value.chrome.nav.length }}</pre>
  </main>
</template>

<script setup lang="ts">
import { useContext } from 'vite-ssr/vue'
import { getActivePinia } from 'pinia'
import { useChromeStore } from '@/stores/chrome'

const { initialState } = useContext()
const chrome = useChromeStore()

console.log('Ok?', chrome.nav.length === initialState.pinia.chrome.nav.length && initialState.pinia.chrome.nav.length === getActivePinia()?.state.value.chrome.nav.length)
</script>
