<template>
  <button @click="trigger">Trigger Workflow</button>
</template>

<script>
import { triggerWorkflow } from '../api'
export default {
  props: { id: { type: String, required: true } },
  methods: {
    trigger() { triggerWorkflow(this.id, {}).then(() => alert('Triggered')) }
  }
}
</script>

<style scoped>
button { padding: 0.4rem 0.8rem; border-radius: 6px }
</style>
