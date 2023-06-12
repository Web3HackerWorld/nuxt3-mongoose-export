<script setup lang="ts">
let collections = $ref([])
onMounted(async () => {
  collections = await $fetch('/api/db')
  console.log('====> collections :', collections)
})
</script>

<template>
  <div h-full>
    <div>
      {{ collections }}
    </div>

    <div flex flex-col items-center lg="flex-row-reverse justify-between px-8" py-10 border-t border-t-zinc-2 px-2 text-zinc-4 text-sm>
      <div flex space-x-4 mb-4 lg:mb-0>
        <a href="/img/WeChatOffice.jpg" hover:text-green-500 target="_blank">公众号</a>
        <a href="https://twitter.com/Web3HackerWorld" hover:text-green-500 target="_blank">Twitter</a>
        <a href="https://discord.gg/anZdGZ7dhN" hover:text-green-500 target="_blank">Discord</a>
        <a href="https://t.me/Web3HackerWorld" hover:text-green-500 target="_blank">Telegram</a>
      </div>
      <div>
        ©2023 <a href="https://Web3Hacker.World" hover:text-green-500 target="_blank">Web3Hacker.World</a>
        <a href="https://zh-docs.Web3Hacker.World" hover:text-green-500 ml-4 target="_blank">文档中心</a>
      </div>
    </div>
  </div>
</template>
