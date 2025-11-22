<template>
  <h2>Public-service alerts</h2>
  <button @click="load">Refresh</button>
  <pre>{{ list }}</pre>
</template>

<script setup>
import { ref } from 'vue'
import { alerts } from '../api.js'
const list = ref('')
const load = async () => {
  const { data } = await alerts()
  list.value = JSON.stringify(data, null, 2)
}
</script>