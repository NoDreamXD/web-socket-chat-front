<template>
<!-- @TODO: тоже самое -->
  <div class="home">
    <CreateChatPage />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CreateChatPage from "@/components/CreateChatPage.vue"; // @ is an alias to /src

@Options({
  components: {
    CreateChatPage,
  },
})
export default class CreateChat extends Vue {}
</script>