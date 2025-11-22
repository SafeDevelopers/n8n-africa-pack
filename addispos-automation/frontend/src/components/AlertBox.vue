<template>
  <div class="alert">{{ message }}</div>
</template>

<script>
export default {
  props: { message: { type: String, default: '' } }
}
</script>

<style scoped>
.alert { background:#f0f4ff; border:1px solid #cfe0ff; padding:0.5rem 1rem; border-radius:6px }
</style>
