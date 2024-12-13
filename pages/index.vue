<template>
  <h1>index</h1>
  <button
    type="button"
    class="btn btn-primary"
  >
    Base class
  </button>
  {{ latestNews }}
</template>

<script setup lang="ts">
const newsStore = useNewsStore()
const { latestNews } = storeToRefs(newsStore)
const { getLatestNews } = newsStore

onMounted(() => {
  getLatestNews()
})
</script>
