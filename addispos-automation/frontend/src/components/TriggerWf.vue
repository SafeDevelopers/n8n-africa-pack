<template>
  <h2>Run a workflow</h2>
  <input v-model="query" placeholder="course topic">
  <button @click="fire">Generate course</button>
  <pre>{{ resp }}</pre>
</template>

<script setup>
import { ref } from 'vue'
import { trigger } from '../api.js'
const query = ref('')
const resp = ref('')
const fire = async () => {
  const { data } = await trigger('content-factory', { query: query.value })
  resp.value = data
}
</script>