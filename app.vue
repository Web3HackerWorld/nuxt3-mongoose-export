<script setup lang="ts">
const { initWeb3, removeWeb3EventListener } = $(web3AuthStore())
onMounted(initWeb3)
onUnmounted(removeWeb3EventListener)
</script>
<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
