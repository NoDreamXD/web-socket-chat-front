<template>
<!-- @TODO: тоже самое -->
  <div class="home">
    <ChatPage />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ChatPage from "@/components/ChatPage.vue"; // @ is an alias to /src

@Options({
  components: {
    ChatPage,
  },
})
export default class Chats extends Vue {}
</script>