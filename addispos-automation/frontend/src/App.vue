<template>
  <div id="app">
    <h1>Addispos Automation (PWA)</h1>
    <AlertBox message="Frontend scaffold is ready." />
  </div>
</template>

<script>
import AlertBox from './components/AlertBox.vue'
export default { components: { AlertBox } }
</script>

<style>
body { font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }
#app { padding: 1rem; }
</style>
